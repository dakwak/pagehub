define([],function(){return function(e,t,n){for(var r=0;r<n.length;r++)e.attributes[t][r]=n.at(r).attributes;return n.bind("add",function(n){e.get(t)||(e.attributes[t]=[]),e.get(t).push(n.attributes)}),n.bind("remove",function(n){var r={};r[t]=_.without(e.get(t),n.attributes),e.set(r)}),n}});