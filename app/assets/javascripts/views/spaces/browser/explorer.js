define('views/spaces/browser/explorer',
[
  'jquery',
  'backbone',
  'views/spaces/browser/_impl',
  'views/spaces/browser/drag_manager',
  'pagehub'
],
function( $, Backbone, BrowserImplementation, DragManager, UI ) {

  var
  init_collapsed_setting = function(object) {
    if (!get_collapsed_setting(object)) {
      object.state.current_user.set('preferences.runtime.spaces.' + object.state.space.get('id'), { collapsed: [] });
    }

    return true;
  },
  get_collapsed_setting = function(object) {
    return object.state.current_user.get('preferences.runtime.spaces.' + object.state.space.get('id') + '.collapsed');
  },
  set_collapsed_setting = function(object, value) {
    return object.state.current_user.set('preferences.runtime.spaces.' + object.state.space.get('id') + '.collapsed', value);
  }

  return BrowserImplementation.extend({
    events: {
      'click button[data-collapse]':  'collapse',
      'click .current': 'dehighlight_related'
      // 'dblclick .folder-title':       'proxy_collapse',
      // 'mouseenter .folder-title': 'highlight_hierarchy',
      // 'mouseleave .folder-title': 'dehighlight_hierarchy'
    },

    initialize: function(data) {
      // this.drag_manager = new DragManager(data);
      this.state = data.state;

      this.css_class    = 'explorer-like';
      this.browser_type = 'explorer';

      init_collapsed_setting(this);
    },

    on_folder_loaded: function(f) { return this.highlight_folder(f); },

    setup: function(ctx) {
      // if (ctx.current_page) {
      //   this.highlight_current_page(ctx.current_page)
      // }

      if (ctx.current_folder) {
        this.highlight_current_folder(ctx.current_folder)
      }

      $(".pages").each(function(listing) {
        if ($(listing).children(":visible").length == 0) {
          $(listing).find('.empty-folder').show();
        }
      });
    },

    dehighlight_related: function() {
      this.$el
        .find('.selected-related')
        .removeClass("selected-related");
    },
    dehighlight_related_current: function() {
      this.$el
        .find('.current-related')
        .removeClass("current-related");
    },

    cleanup: function() {
      this.$el
        .find('.selected-related, .current-related')
        .removeClass("selected-related current-related");
    },

    on_folder_rendered: function(f) {
      // if (this.ctx.settings.runtime.collapsed.indexOf(parseInt( f.get('id') )) != -1) {
      if (get_collapsed_setting(this).indexOf(parseInt( f.get('id') )) != -1) {
        this.__collapse(f.ctx.browser.collapser);
      }

      return this;
    },

    highlight_folder: function(folder) {
      this.$el
        .find('.selected-related')
        .removeClass("selected-related");

      folder.ctx.browser.title
        .addClass('selected');

      _.each(folder.ancestors(), function(f) {
        f.ctx.browser.title.addClass('selected-related');
      });

      return this;
    },

    highlight_current_folder: function(folder) {
      // this.$el
      //   .find('.current-related')
      //   .removeClass("current-related");

      this.cleanup();

      folder.ctx.browser.title
        .addClass('current');

      _.each(folder.ancestors(), function(f) {
        f.ctx.browser.title.addClass('current-related');
      });

      this.__expand(folder.ctx.browser.el.find('[data-collapse]:first'));

      return this;
    },

    highlight_page: function(page) {
      BrowserImplementation.prototype.highlight_page.apply(this, arguments);

      return this.highlight_folder(page.folder);
    },

    highlight_current_page: function(page) {
      BrowserImplementation.prototype.highlight_current_page.apply(this, arguments);

      return this.highlight_current_folder(page.folder);
    },

    collapse: function(evt) {
      var source = $(evt.target);

      if (source.attr("data-collapse") == null) {
        source = source.parents(".folder:first").find('[data-collapse]:first');
      }

      this.toggle_collapse(source).sync();
    },

    __expand: function(el) {
      var folder_id = parseInt(el.parent().attr("id").replace('folder_', ''));

      el
      .prop("data-collapsed", false)
      .siblings(":not(.folder-title)")
        .show().end()
      .parent()
        .removeClass("collapsed");

      set_collapsed_setting(this, get_collapsed_setting(this).pop_value(folder_id));

      return this;
    },

    __collapse: function(el) {
      var folder_id = parseInt(el.parent().attr("id").replace('folder_', ''));

      el
      .prop("data-collapsed", true)
      .siblings(":not(.folder-title)")
        .hide().end()
      .parent()
        .addClass("collapsed");

      get_collapsed_setting(this).push(folder_id);

      return this;
    },

    toggle_collapse: function(el) {
      return el.prop("data-collapsed") ? this.__expand(el) : this.__collapse(el);
    },

    // highlight_hierarchy: function(evt) {
    //   $(evt.target).
    //     addClass("selected-related").
    //     parents(".folder").find("> .folder-title").addClass("selected-related");
    // },

    // dehighlight_hierarchy: function(evt) {
    //   this.$el.find('.selected-related').removeClass("selected-related");
    // },

    sync: function() {
      var
      data = { preferences: { runtime: { spaces: {} } } };
      data.preferences.runtime.spaces[this.state.space.get('id')] = {
        collapsed: get_collapsed_setting(this)
      };

      this.state.trigger('sync_runtime_preferences', data);

      return this;
    }

  });
});