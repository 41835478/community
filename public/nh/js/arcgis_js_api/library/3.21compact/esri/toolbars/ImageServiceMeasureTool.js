// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.
//>>built
define("esri/toolbars/ImageServiceMeasureTool","dojo/_base/declare dojo/_base/lang dojo/_base/Color dojo/has ../kernel ./_toolbar ../symbols/SimpleMarkerSymbol ../symbols/SimpleLineSymbol ../symbols/SimpleFillSymbol ./draw ../tasks/ImageServiceMeasureParameters ../tasks/ImageServiceMeasureTask ../geometry/Point dojo/_base/array ../units".split(" "),function(m,c,e,r,t,g,u,h,n,k,l,p,q,f,d){var v=m("CustomDraw",[k],{returnCurrentPoint:function(){return this._points},hideTooltip:function(){this._options.showTooltips=
!1},showTooltip:function(){this._options.showTooltips=!0}});g=m(g,{declaredClass:"esri.toolbars.imageServiceMeasure",_eventMap:{"draw-end":["geometry"],"draw-start":[],"measure-end":["measureResult","error","geometry"],"unit-change":["measureResult","error","geometry"]},_mensurationCapabilitiesMap:{Basic:["OPERATION_POINT","OPERATION_DISTANCE_ANGLE","OPERATION_AREA_PERIMETER","OPERATION_CENTROID"],"3D":["OPERATION_POINT_3D","OPERATION_DISTANCE_ANGLE_3D","OPERATION_AREA_PERIMETER_3D","OPERATION_CENTROID_3D"],
"Base-Top Height":["OPERATION_BASE_TOP"],"Top-Top Shadow Height":["OPERATION_TOP_TOP_SHADOW"],"Base-Top Shadow Height":["OPERATION_BASE_TOP_SHADOW"]},_supportedMeasureOperations:[],_operationsMap:{OPERATION_POINT:{geometryType:"POINT"},OPERATION_DISTANCE_ANGLE:{geometryType:"LINE"},OPERATION_AREA_PERIMETER:{geometryType:"POLYGON"},OPERATION_BASE_TOP:{geometryType:"LINE"},OPERATION_BASE_TOP_SHADOW:{geometryType:"LINE"},OPERATION_TOP_TOP_SHADOW:{geometryType:"LINE"},OPERATION_CENTROID:{geometryType:"POLYGON"},
OPERATION_POINT_3D:{geometryType:"POINT"},OPERATION_DISTANCE_ANGLE_3D:{geometryType:"LINE"},OPERATION_AREA_PERIMETER_3D:{geometryType:"POLYGON"},OPERATION_CENTROID_3D:{geometryType:"POLYGON"}},_supportedUnits:{linearUnits:"INCHES FEET YARDS MILES NAUTICAL_MILES MILLIMETERS CENTIMETERS DECIMETERS METERS KILOMETERS".split(" "),angularUnits:["RADIANS","DECIMAL_DEGREES"],areaUnits:"SQUARE_INCHES SQUARE_FEET SQUARE_YARDS ACRES SQUARE_MILES SQUARE_MILLIMETERS SQUARE_CENTIMETERS SQUARE_DECIMETERS SQUARE_METERS ARES HECTARES SQUARE_KILOMETERS".split(" ")},
markerSymbol:null,lineSymbol:null,fillSymbol:null,_drawToolbar:null,_currentGeometry:null,_currentOperation:null,linearUnit:null,angularUnit:null,areaUnit:null,_decimalDegreesConstantValue:"esriDUDecimalDegrees",_decimalDegreesConstantKeyword:"DECIMAL_DEGREES",constructor:function(a){m.safeMixin(this,a);this._checkMensurationSupport();this._setDefaultSymbols()},_checkMensurationSupport:function(){this.layer.mensurationCapabilities?this._setSupportedMeasureOperations():console.log("Mensuration Capabilities not supported.")},
_setDefaultSymbols:function(){this.markerSymbol||(this.markerSymbol=new u,this.markerSymbol.setPath("M16,4.938c-7.732,0-14,4.701-14,10.5c0,1.981,0.741,3.833,2.016,5.414L2,25.272l5.613-1.44c2.339,1.316,5.237,2.106,8.387,2.106c7.732,0,14-4.701,14-10.5S23.732,4.938,16,4.938zM16.868,21.375h-1.969v-1.889h1.969V21.375zM16.772,18.094h-1.777l-0.176-8.083h2.113L16.772,18.094z"),this.markerSymbol.setColor(new e("#00FFFF")));this.lineSymbol||(this.lineSymbol=new h(h.STYLE_SOLID,new e([255,0,0]),1.5));this.fillSymbol||
(this.fillSymbol=new n(n.STYLE_SOLID,new h(h.STYLE_DASHDOT,new e([255,0,0]),2),new e([255,255,0,.25])))},_setSupportedMeasureOperations:function(){var a;this._supportedMeasureOperations=[];this.mensurationCapabilities=this.layer.mensurationCapabilities.split(",");f.forEach(this.mensurationCapabilities,function(b){a=this._mensurationCapabilitiesMap[b];f.forEach(a,function(a){this._supportedMeasureOperations.push(a)},this)},this)},getSupportedMeasureOperations:function(){var a=[];f.forEach(this._supportedMeasureOperations,
function(b){a.push(l[b])},this);return a},getSupportedUnits:function(){var a={},b=[],c=[],e;for(e in this._supportedUnits)this._supportedUnits.hasOwnProperty(e)&&(b=this._supportedUnits[e],c=[],f.forEach(b,function(a){a===this._decimalDegreesConstantKeyword?c.push(this._decimalDegreesConstantValue):c.push(d[a])},this),a[e]=c);return a},setLinearUnit:function(a){for(var b in d)d.hasOwnProperty(b)&&d[b]===a&&(this.linearUnit=b);this._currentGeometry&&this._getUnitChangeResults(this._currentGeometry)},
setAngularUnit:function(a){for(var b in d)d.hasOwnProperty(b)&&(d[b]===a?this.angularUnit=b:a===this._decimalDegreesConstantValue&&(this.angularUnit=this._decimalDegreesConstantKeyword));this._currentGeometry&&this._getUnitChangeResults(this._currentGeometry)},setAreaUnit:function(a){for(var b in d)d.hasOwnProperty(b)&&d[b]===a&&(this.areaUnit=b);this._currentGeometry&&this._getUnitChangeResults(this._currentGeometry)},setMarkerSymbol:function(a){this.markerSymbol=a},setLineSymbol:function(a){this.lineSymbol=
a},setFillSymbol:function(a){this.fillSymbol=a},activate:function(a){f.forEach(this._supportedMeasureOperations,function(b){l[b]===a&&(this._currentOperation=b)},this);this.map.setMapCursor("crosshair");this._mapClickHandle=this.map.on("click",c.hitch(this,this._onMapClick));this._mapMouseDownHandle=this.map.on("mouse-down",c.hitch(this,this._onMapMouseDown));this._drawToolbar||(this._drawToolbar=new v(this.map,{fillSymbol:this.fillSymbol,markerSymbol:this.markerSymbol,lineSymbol:this.lineSymbol}),
this._drawToolbar.on("draw-end",c.hitch(this,this._setGeometry)));this._drawToolbar.activate(k[this._operationsMap[this._currentOperation].geometryType])},_onMapClick:function(){if(0===this._drawToolbar.returnCurrentPoint().length)this.onDrawStart()},_onMapMouseDown:function(){if(0===this._drawToolbar.returnCurrentPoint().length)this.onDrawStart()},deactivate:function(){this._drawToolbar&&this._drawToolbar.deactivate();this.map.setMapCursor("default");this._currentOperation=this._currentGeometry=
null;this._mapClickHandle&&(this._mapClickHandle.remove(),this._mapClickHandle=null);this._mapMouseDownHandle&&(this._mapMouseDownHandle.remove(),this._mapMouseDownHandle=null)},hideDrawTooltip:function(){this._drawToolbar.deactivate();this._drawToolbar.hideTooltip();this._drawToolbar.activate(k[this._operationsMap[this._currentOperation].geometryType])},showDrawTooltip:function(){this._drawToolbar.deactivate();this._drawToolbar.showTooltip();this._drawToolbar.activate(k[this._operationsMap[this._currentOperation].geometryType])},
_setGeometry:function(a){a=a.geometry;this.onDrawEnd(a);this._getMensurationResults(a);this._currentGeometry=a},_getImageServiceMeasureParameters:function(a){var b=new l;b.operation=l[this._currentOperation];b.mosaicRule=this.layer.mosaicRule;b.linearUnit=d[this.linearUnit];b.angularUnit=this.angularUnit===this._decimalDegreesConstantKeyword?this._decimalDegreesConstantValue:d[this.angularUnit];b.areaUnit=d[this.areaUnit];"line"===a.type||"polyline"===a.type?(b.fromGeometry=new q(a.paths[0][0][0],
a.paths[0][0][1],this.map.spatialReference),b.toGeometry=new q(a.paths[0][1][0],a.paths[0][1][1],this.map.spatialReference)):b.fromGeometry=a;return b},_getMensurationResults:function(a){a=this._getImageServiceMeasureParameters(a);(new p(this.layer.url)).execute(a,c.hitch(this,this._measureTaskSuccess),c.hitch(this,this._measureTaskError))},_measureTaskSuccess:function(a){this.onMeasureEnd(a,null,this._currentGeometry)},_measureTaskError:function(a){this.onMeasureEnd(null,a,this._currentGeometry)},
_getUnitChangeResults:function(a){a=this._getImageServiceMeasureParameters(a);(new p(this.layer.url)).execute(a,c.hitch(this,this._unitChangeSuccess),c.hitch(this,this._unitChangeError))},_unitChangeSuccess:function(a){this.onUnitChange(a,null,this._currentGeometry)},_unitChangeError:function(a){this.onUnitChange(null,a,this._currentGeometry)},onDrawStart:function(){},onDrawEnd:function(){},onMeasureEnd:function(){},onUnitChange:function(){}});r("extend-esri")&&c.setObject("toolbars.imageServiceMeasure",
g,t);return g});