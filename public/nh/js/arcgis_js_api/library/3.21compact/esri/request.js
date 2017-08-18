// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.
//>>built
define("esri/request","require dojo/_base/array dojo/_base/config dojo/_base/Deferred dojo/_base/lang dojo/_base/url dojo/_base/xhr dojo/io/script dojo/io/iframe dojo/dom-construct dojo/io-query ./kernel ./config ./sniff ./lang ./urlUtils ./deferredUtils".split(" "),function(X,G,H,I,r,Y,u,Z,aa,T,U,g,ba,m,D,p,ca){function v(a){a=new Y(a);return(a.host+(a.port?":"+a.port:"")).toLowerCase()}function da(a){return this._xhr?this._xhr.getResponseHeader(a):null}function J(a,d,b,e){var P=!1,w=!1,x;D.isDefined(d)&&
(r.isObject(d)?(P=!!d.useProxy,w=!!d.usePost,x=d.crossOrigin):P=!!d);a=r.mixin({},a);a._ssl&&(a.url=a.url.replace(/^http:/i,"https:"));10>m("ie")&&!ea.test(a.url)&&(a.url=encodeURI(a.url));d=a.content;var f=a.url,h=b&&a.form,t=l;x=D.isDefined(x)?x:t.useCors;a.load=function(b){var c;b&&(b.error?(c=r.mixin(Error(),b.error),c.log=!!H.isDebug):"error"===b.status&&(c=r.mixin(Error(),b),c.log=!!H.isDebug),c&&(a.failOk=!c.log,D.isDefined(c.httpCode)||(c.httpCode=c.code)));return c||b};a.error=function(a,
c){c&&c.xhr&&c.xhr.abort();a instanceof Error||(a=r.mixin(Error(),a));a.log=!!H.isDebug;t.errorHandler(a,c);return a};a._token&&(a.content=a.content||{},a.content.token=a._token);var n=0,k;d&&f&&(k=U.objectToQuery(d),n=k.length+f.length+1,m("esri-url-encodes-apostrophe")&&(n=k.replace(/'/g,"%27").length+f.length+1));a.timeout=D.isDefined(a.timeout)?a.timeout:t.timeout;a.handleAs=a.handleAs||"json";try{var B,y,C=x&&p.canUseXhr(a.url)&&!/https?:\/\/[^\/]+\/[^\/]+\/admin\/?(\/.*)?$/i.test(a.url),c=p.hasSameOrigin(a.url,
window.location.href)||C,q=w||b||n>t.postLength?!0:!1,V=c||-1===a.handleAs.indexOf("json")||!a.callbackParamName||b?!1:!0,E=p.getProxyRule(a.url)||t.alwaysUseProxy||P||(!V||q)&&!c?!0:!1;b&&!m("esri-file-upload")&&!E&&C&&(E=!0);if(E)if(B=p.getProxyUrl(f,x),y=B.path,B._xo&&(C=!0),!q&&y.length+1+n>t.postLength&&(q=!0),a.url=y+"?"+f,q)a.content=r.mixin(B.query||{},d);else{var W=U.objectToQuery(r.mixin(B.query||{},d));W&&(a.url+="?"+W);a.content=null}if(V&&!q)return!D.isDefined(a.isAsync)&&4>m("ff")&&
(a.isAsync=!0),Z.get(K?K(a):a);var L=a.headers;!C||L&&L.hasOwnProperty("X-Requested-With")||(L=a.headers=L||{},L["X-Requested-With"]=null);if(b){var Q=a.callbackParamName||"callback.html",A=a.callbackElementName||"textarea",M,v,N,R,J=h.elements?h.elements.length:0,F;if(d=a.content)for(M in d.token&&-1<f.toLowerCase().indexOf("/sharing/servers/")&&(f+=(-1===f.indexOf("?")?"?":"\x26")+"token\x3d"+d.token,a.url=E?y+"?"+f:f,delete d.token),d)if(N=d[M],D.isDefined(N)){v=null;for(R=0;R<J;R++)if(F=h.elements[R],
F.name===M){v=F;break}v?v.value=N:e?h.append(M,N):h.appendChild(T.create("input",{type:"hidden",name:M,value:N}))}if(m("esri-file-upload"))G.forEach(h.elements,function(a){a.name===Q&&h.removeChild(a)}),a.contentType=!1,a.postData=e?h:new FormData(h),delete a.form;else{h.enctype="multipart/form-data";9>m("ie")&&(h.encoding="multipart/form-data");h.method="post";G.some(h.elements,function(a){return a.name===Q})||h.appendChild(T.create("input",{type:"hidden",name:Q,value:A}));if(-1!==f.toLowerCase().indexOf("addattachment")||
-1!==f.toLowerCase().indexOf("updateattachment"))f+=(-1===f.indexOf("?")?"?":"\x26")+Q+"\x3d"+A,a.url=E?y+"?"+f:f;delete a.content}}if(C&&!a.hasOwnProperty("withCredentials")&&"with-credentials"===l.useCors){e=E?y:f;var z=p.canUseXhr(e,!0),S=-1<z?l.corsEnabledServers[z]:null;if(S&&S.hasOwnProperty("withCredentials"))S.withCredentials&&(a.withCredentials=!0);else if(g.id){var O=g.id.findServerInfo(e);O&&O.webTierAuth&&(a.withCredentials=!0)}}a=K?K(a):a;if(q){if(b&&!m("esri-file-upload"))return aa.send(a);
!E&&m("safari")&&(a.url+=(-1===a.url.indexOf("?")?"?":"\x26")+"_ts\x3d"+(new Date).getTime()+ga++);return u.post(a)}return u.get(a)}catch(fa){return b=new I,b.errback(a.error(fa)),b}}function F(a){var d=l.corsStatus,b=p.canUseXhr(a,!0);-1<b&&l.corsEnabledServers.splice(b,1);var e=new I;e.reject({log:!!H.isDebug});d[v(a)]=e.promise;return b}function z(a){var d=l.corsStatus;try{var b=v(a);if(l.corsDetection&&l.useCors&&m("esri-cors")&&a&&-1!==a.toLowerCase().indexOf("/rest/services")&&!p.hasSameOrigin(a,
window.location.href)&&!p.canUseXhr(a)){if(d[b])return d[b];var e=new I;d[b]=e.promise;u.get({url:a.substring(0,a.toLowerCase().indexOf("/rest/")+6)+"info",content:{f:"json"},failOk:!0,handleAs:"json",headers:{"X-Requested-With":null},timeout:1E3*l.corsDetectionTimeout}).then(function(d){d?(p.canUseXhr(a)||l.corsEnabledServers.push(b),e.resolve()):e.reject()},function(a){e.reject()});return e.promise}}catch(P){console.log("esri._detectCors: an unknown error occurred while detecting CORS support")}return ha}
function O(a){K=a}function A(a,d,b,e){function k(a){a._pendingDfd=J(b,e,z,r);if(!a._pendingDfd){a.ioArgs=a._pendingDfd&&a._pendingDfd.ioArgs;var c=Error("Deferred object is missing");c.log=!!H.isDebug;a.errback(c);a._pendingDfd=null;return a}a._pendingDfd.addCallback(function(b){a.ioArgs=a._pendingDfd&&a._pendingDfd.ioArgs;e.returnFullResponse&&(b={data:b,_xhr:a.ioArgs&&a.ioArgs.xhr,getHeader:da});a.callback(b);a._pendingDfd=null}).addErrback(function(c){var q,d,f;c&&(q=c.code,d=c.subcode,f=(f=c.messageCode)&&
f.toUpperCase());if(c&&403==q&&(4==d||c.message&&-1<c.message.toLowerCase().indexOf("ssl")&&-1===c.message.toLowerCase().indexOf("permission"))){if(!b._ssl){b._ssl=b._sslFromServer=!0;A(a,!0,b,e);return}}else if(c&&415==c.status){if(F(b.url),!b._err415){b._err415=1;A(a,!0,b,e);return}}else if(g.id&&-1!==G.indexOf(g.id._errorCodes,q)&&!g.id._isPublic(b.url)&&!x&&(403!=q||-1===G.indexOf(ia,f)&&(!D.isDefined(d)||2==d&&b._token))){a._pendingDfd=g.id.getCredential(b.url,{token:b._token,error:c});a._pendingDfd.addCallback(function(c){b._token=
c.token;b._credential=c;b._ssl=b._sslFromServer||c.ssl;A(a,!0,b,e)}).addErrback(function(b){a.errback(b);a._pendingDfd=null});return}a.ioArgs=a._pendingDfd&&a._pendingDfd.ioArgs;a.errback(c);a._pendingDfd=null})}var w=b.form,x=e.disableIdentityLookup,f=e._preLookup,h=!1;if(m("esri-workers")&&!1!==l.useWorkers)if(!0===e.useWorkers||!0===l.useWorkers)h=!0;else if(e.workerOptions){var t=e.workerOptions;if(t.callback||t.worker&&t.worker.worker instanceof Worker)h=!0}var r=w&&m("esri-file-upload")&&w instanceof
FormData,z=w&&(w.elements?G.some(w.elements,function(a){return"file"===a.type}):r),B=-1!==b.url.toLowerCase().indexOf("token\x3d")||b.content&&b.content.token||z&&G.some(w.elements,function(a){return"token"===a.name})?1:0;if(!d){a.addCallback(function(a){if((/\/sharing\/rest\/accounts\/self/i.test(b.url)||/\/sharing\/rest\/portals\/self/i.test(b.url))&&!B&&!b._token&&a.user&&a.user.username){l.webTierAuthServers.push(v(b.url));a=l.corsEnabledServers;var c=p.canUseXhr(b.url,!0),d={host:v(b.url),withCredentials:!0};
if(-1===c)a.push(d);else{var e=a[c];"object"===typeof e?e.withCredentials=!0:a.splice(c,1,d)}}if(a=b._credential)if(c=(c=g.id.findServerInfo(a.server))&&c.owningSystemUrl)c=c.replace(/\/?$/,"/sharing"),(a=g.id.findCredential(c,a.userId))&&-1===g.id._getIdenticalSvcIdx(c,a)&&a.resources.splice(0,0,c)});a.addBoth(function(a){delete b._credential;!a||m("ie")&&a.nodeType||(a._ssl=b._ssl)});var y=b.load,C=b.error;y&&a.addCallback(function(b){var c=a._pendingDfd,c=c&&c.ioArgs;return y.call(c&&c.args,b,
c)});C&&a.addErrback(function(b){var c=a._pendingDfd,c=c&&c.ioArgs;return C.call(c&&c.args,b,c)})}!g.id||B||b._token||g.id._isPublic(b.url)||x&&!f||!(d=g.id.findCredential(b.url))||(b._token=d.token,b._ssl=d.ssl);h?e.workerOptions&&e.workerOptions.worker?(n||(n=u),u=e.workerOptions.worker,k(a)):X(["./workers/RequestClient"],function(b){n||(n=u);if(e.workerOptions){var c=e.workerOptions;u=b.getClient(c.callback,c.cbFunction)}else u=b.getClient();k(a)}):(n&&(u=n,n=null),k(a));return a}function k(a,
d){a.url=p.fixUrl(a.url);d=d||{};var b=new I(ca._dfdCanceller);z(a.url).always(function(){A(b,!1,a,d)});return b}var n=null,K,l=ba.defaults.io,ia=["COM_0056","COM_0057"],ga=0,ea=/%[0-9A-F]{2}/i,ha=function(){var a=new I;a.resolve();return a.promise}();k._makeRequest=J;k._processRequest=A;k._disableCors=F;k._detectCors=z;k.setRequestPreCallback=O;m("extend-esri")&&(g.request=k,g._makeRequest=J,g._processRequest=A,g._disableCors=F,g._detectCors=z,g.setRequestPreCallback=O);return k});