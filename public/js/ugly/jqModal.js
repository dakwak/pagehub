(function(e){e.fn.jqm=function(r){var i={overlay:50,overlayClass:"jqmOverlay",closeClass:"jqmClose",trigger:".jqModal",ajax:s,ajaxText:"",target:s,modal:s,toTop:s,onShow:s,onHide:s,onLoad:s};return this.each(function(){if(this._jqm)return n[this._jqm].c=e.extend({},n[this._jqm].c,r);t++,this._jqm=t,n[t]={c:e.extend(i,e.jqm.params,r),a:s,w:e(this).addClass("jqmID"+t),s:t},i.trigger&&e(this).jqmAddTrigger(i.trigger)})},e.fn.jqmAddClose=function(e){return c(this,e,"jqmHide")},e.fn.jqmAddTrigger=function(e){return c(this,e,"jqmShow")},e.fn.jqmShow=function(t){return this.each(function(){t=t||window.event,e.jqm.open(this._jqm,t)})},e.fn.jqmHide=function(t){return this.each(function(){t=t||window.event,e.jqm.close(this._jqm,t)})},e.jqm={hash:{},open:function(t,o){var a=n[t],l=a.c,c="."+l.closeClass,h=parseInt(a.w.css("z-index")),h=h>0?h:3e3,p=e("<div></div>").css({height:"100%",width:"100%",position:"fixed",left:0,top:0,"z-index":h-1,opacity:l.overlay/100});if(a.a)return s;a.t=o,a.a=!0,a.w.css("z-index",h),l.modal?(r[0]||f("bind"),r.push(t)):l.overlay>0?a.w.jqmAddClose(p):p=s,a.o=p?p.addClass(l.overlayClass).prependTo("body"):s;if(i){e("html,body").css({height:"100%",width:"100%"});if(p){p=p.css({position:"absolute"})[0];for(var d in{Top:1,Left:1})p.style.setExpression(d.toLowerCase(),"(_=(document.documentElement.scroll"+d+" || document.body.scroll"+d+"))+'px'")}}if(l.ajax){var v=l.target||a.w,m=l.ajax,v=typeof v=="string"?e(v,a.w):e(v),m=m.substr(0,1)=="@"?e(o).attr(m.substring(1)):m;v.html(l.ajaxText).load(m,function(){l.onLoad&&l.onLoad.call(this,a),c&&a.w.jqmAddClose(e(c,a.w)),u(a)})}else c&&a.w.jqmAddClose(e(c,a.w));return l.toTop&&a.o&&a.w.before('<span id="jqmP'+a.w[0]._jqm+'"></span>').insertAfter(a.o),l.onShow?l.onShow(a):a.w.show(),u(a),s},close:function(t){var i=n[t];return i.a?(i.a=s,r[0]&&(r.pop(),r[0]||f("unbind")),i.c.toTop&&i.o&&e("#jqmP"+i.w[0]._jqm).after(i.w).remove(),i.c.onHide?i.c.onHide(i):(i.w.hide(),i.o&&i.o.remove()),s):s},params:{}};var t=0,n=e.jqm.hash,r=[],i=e.browser.msie&&e.browser.version=="6.0",s=!1,o=e('<iframe src="javascript:false;document.write(\'\');" class="jqm"></iframe>').css({opacity:0}),u=function(t){i&&(t.o?t.o.html('<p style="width:100%;height:100%"/>').prepend(o):e("iframe.jqm",t.w)[0]||t.w.prepend(o)),a(t)},a=function(t){try{e(":input:visible",t.w)[0].focus()}catch(n){}},f=function(t){e()[t]("keypress",l)[t]("keydown",l)[t]("mousedown",l)},l=function(t){var i=n[r[r.length-1]],s=!e(t.target).parents(".jqmID"+i.s)[0];return s&&a(i),!s},c=function(t,r,i){return t.each(function(){var t=this._jqm;e(r).each(function(){this[i]||(this[i]=[],e(this).click(function(){for(var e in{jqmShow:1,jqmHide:1})for(var t in this[e])n[this[e][t]]&&n[this[e][t]].w[e](this);return s})),this[i].push(t)})})}})(jQuery);