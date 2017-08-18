// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.
//>>built
define("esri/renderers/StretchRenderer","dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/has ../kernel ../lang ../layers/RasterFunction ./colorRampUtils".split(" "),function(d,m,e,k,l,f,g,h){var c={TYPE_NONE:"none",TYPE_STANDARDDEVIATION:"standardDeviation",TYPE_HISTOGRAMEQUALIZATION:"histogramEqualization",TYPE_MINMAX:"minMax",TYPE_PERCENTCLIP:"percentClip",TYPE_SIGMOID:"sigmoid"};d=d(null,{declaredClass:"esri.renderer.StretchRenderer",constructor:function(a){a=a||{};this.stretchType=c.TYPE_NONE;
this.dra=!0;this.statistics=[];this.gamma=[];this.computeGamma=this.useGamma=!1;this.sigmoidStrengthLevel=this.numberOfStandardDeviations=this.minPercent=this.maxPercent=this.min=this.max=null;e.mixin(this,a);this.colorRamp=h.fromJson(a.colorRamp)},toJson:function(){var a={type:"rasterStretch",stretchType:this.stretchType,colorRamp:this.colorRamp&&this.colorRamp.toJson(),min:this.min,max:this.max,numberOfStandardDeviations:this.numberOfStandardDeviations,statistics:e.clone(this.statistics),dra:this.dra,
minPercent:this.minPercent,maxPercent:this.maxPercent,useGamma:this.useGamma,gamma:e.clone(this.gamma),computeGamma:this.computeGamma,sigmoidStrengthLevel:this.sigmoidStrengthLevel};return f.fixJson(a)},toRenderingRule:function(){var a=new g;a.functionName="Stretch";var b=this._convertStretchTypeEnumToIndex(this.stretchType),c={StretchType:b,Statistics:this.statistics,DRA:this.dra,UseGamma:this.useGamma,Gamma:this.gamma,ComputeGamma:this.computeGamma};f.isDefined(this.min)&&(c.Min=this.min);f.isDefined(this.min)&&
(c.Max=this.max);3===b?(c.NumberOfStandardDeviations=this.numberOfStandardDeviations,a.outputPixelType="U8"):6===b?(c.MinPercent=parseFloat(this.minPercent),c.MaxPercent=parseFloat(this.maxPercent),a.outputPixelType="U8"):5===b?a.outputPixelType="U8":9===b&&(c.SigmoidStrengthLevel=this.sigmoidStrengthLevel);a.functionArguments=c;a.variableName="Raster";return this.colorRamp?(b=new g,c=h.getColorRampName(this.colorRamp),b.functionArguments=c?{colorRamp:c}:{colorRamp:this.colorRamp.toJson()},b.variableName=
"Raster",b.functionName="Colormap",b.functionArguments.Raster=a,b):a},_convertStretchTypeEnumToIndex:function(a){var b=0;a===c.TYPE_STANDARDDEVIATION?b=3:a===c.TYPE_HISTOGRAMEQUALIZATION?b=4:a===c.TYPE_MINMAX?b=5:a===c.TYPE_PERCENTCLIP?b=6:a===c.TYPE_SIGMOID&&(b=9);return b},_convertStretchTypeIndexToEnum:function(a){var b=0;3===a?b=c.TYPE_STANDARDDEVIATION:4===a?b=c.TYPE_HISTOGRAMEQUALIZATION:5===a?b=c.TYPE_MINMAX:6===a?b=c.TYPE_PERCENTCLIP:9===a&&(b=c.TYPE_SIGMOID);return b}});e.mixin(d,c);k("extend-esri")&&
e.setObject("renderer.StretchRenderer",d,l);return d});