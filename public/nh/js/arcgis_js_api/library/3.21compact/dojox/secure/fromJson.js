//>>built
define("dojox/secure/fromJson",["dojo","dijit","dojox"],function(h,v,k){h.provide("dojox.secure.fromJson");k.secure.fromJson="undefined"!=typeof JSON?JSON.parse:function(){function h(h,g,f){return g?l[g]:String.fromCharCode(parseInt(f,16))}var k=RegExp('(?:false|true|null|[\\{\\}\\[\\]]|(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)|(?:"(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))*"))',"g"),q=RegExp("\\\\(?:([^u])|u(.{4}))","g"),l={'"':'"',"/":"/","\\":"\\",
b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},r=new String(""),t=Object.hasOwnProperty;return function(l,g){var f=l.match(k),e,b=f[0],m=!1;"{"===b?e={}:"["===b?e=[]:(e=[],m=!0);for(var c,d=[e],n=1-m,u=f.length;n<u;++n){var b=f[n],a;switch(b.charCodeAt(0)){default:a=d[0];a[c||a.length]=+b;c=void 0;break;case 34:b=b.substring(1,b.length-1);-1!==b.indexOf("\\")&&(b=b.replace(q,h));a=d[0];if(!c)if(a instanceof Array)c=a.length;else{c=b||r;break}a[c]=b;c=void 0;break;case 91:a=d[0];d.unshift(a[c||a.length]=[]);
c=void 0;break;case 93:d.shift();break;case 102:a=d[0];a[c||a.length]=!1;c=void 0;break;case 110:a=d[0];a[c||a.length]=null;c=void 0;break;case 116:a=d[0];a[c||a.length]=!0;c=void 0;break;case 123:a=d[0];d.unshift(a[c||a.length]={});c=void 0;break;case 125:d.shift()}}if(m){if(1!==d.length)throw Error();e=e[0]}else if(d.length)throw Error();if(g){var p=function(a,c){var b=a[c];if(b&&"object"===typeof b){var d=null,e;for(e in b)if(t.call(b,e)&&b!==a){var f=p(b,e);void 0!==f?b[e]=f:(d||(d=[]),d.push(e))}if(d)for(e=
d.length;0<=--e;)delete b[d[e]]}return g.call(a,c,b)};e=p({"":e},"")}return e}}()});