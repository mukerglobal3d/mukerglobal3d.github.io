 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oi="155",mf={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Hf={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},tl=0,f8=1,el=2,VP=1,nl=2,Ln=3,sn=0,De=1,nn=2,En=0,nr=1,r8=2,a8=3,s8=4,fl=5,_f=100,rl=101,al=102,i8=103,v8=104,sl=200,il=201,vl=202,Pl=203,qP=204,UP=205,ol=206,ll=207,cl=208,pl=209,ul=210,dl=0,Xl=1,hl=2,Pi=3,bl=4,xl=5,zl=6,wl=7,ZP=0,ml=1,Hl=2,Yn=0,Al=1,Tl=2,Ll=3,MP=4,jl=5,KP=300,ar=301,sr=302,oi=303,li=304,$a=306,ir=1e3,Ce=1001,Ya=1002,he=1003,ci=1004,ga=1005,Se=1006,RP=1007,bf=1008,kn=1009,Wl=1010,yl=1011,Si=1012,FP=1013,gn=1014,Wn=1015,vr=1016,GP=1017,gP=1018,uf=1020,Nl=1021,Je=1023,Dl=1024,Ol=1025,df=1026,Pr=1027,Sl=1028,CP=1029,Vl=1030,JP=1031,EP=1033,os=33776,ls=33777,cs=33778,ps=33779,P8=35840,o8=35841,l8=35842,c8=35843,ql=36196,p8=37492,u8=37496,d8=37808,X8=37809,h8=37810,b8=37811,x8=37812,z8=37813,w8=37814,m8=37815,H8=37816,A8=37817,T8=37818,L8=37819,j8=37820,W8=37821,us=36492,Ul=36283,y8=36284,N8=36285,D8=36286,Er=2300,or=2301,ds=2302,O8=2400,S8=2401,V8=2402,Zl=2500,Ml=0,YP=1,pi=2,kP=3e3,Xf=3001,Kl=3200,Rl=3201,BP=0,Fl=1,hf="",Ht="srgb",dn="srgb-linear",IP="display-p3",Xs=7680,Gl=519,gl=512,Cl=513,Jl=514,El=515,Yl=516,kl=517,Bl=518,Il=519,ui=35044,q8="300 es",di=1035,yn=2e3,ka=2001;class zf{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const f=this._listeners[t];if(f!==void 0){const a=f.indexOf(e);a!==-1&&f.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const f=n.slice(0);for(let a=0,s=f.length;a<s;a++)f[a].call(this,t);t.target=null}}}const me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let U8=1234567;const Gr=Math.PI/180,lr=180/Math.PI;function fn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(me[r&255]+me[r>>8&255]+me[r>>16&255]+me[r>>24&255]+"-"+me[t&255]+me[t>>8&255]+"-"+me[t>>16&15|64]+me[t>>24&255]+"-"+me[e&63|128]+me[e>>8&255]+"-"+me[e>>16&255]+me[e>>24&255]+me[n&255]+me[n>>8&255]+me[n>>16&255]+me[n>>24&255]).toLowerCase()}function be(r,t,e){return Math.max(t,Math.min(e,r))}function Vi(r,t){return(r%t+t)%t}function Ql(r,t,e,n,f){return n+(r-t)*(f-n)/(e-t)}function _l(r,t,e){return r!==t?(e-r)/(t-r):0}function gr(r,t,e){return(1-e)*r+e*t}function $l(r,t,e,n){return gr(r,t,1-Math.exp(-e*n))}function t9(r,t=1){return t-Math.abs(Vi(r,t*2)-t)}function e9(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function n9(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function f9(r,t){return r+Math.floor(Math.random()*(t-r+1))}function r9(r,t){return r+Math.random()*(t-r)}function a9(r){return r*(.5-Math.random())}function s9(r){r!==void 0&&(U8=r);let t=U8+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function i9(r){return r*Gr}function v9(r){return r*lr}function Xi(r){return(r&r-1)===0&&r!==0}function QP(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ba(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function P9(r,t,e,n,f){const a=Math.cos,s=Math.sin,i=a(e/2),v=s(e/2),P=a((t+n)/2),o=s((t+n)/2),l=a((t-n)/2),c=s((t-n)/2),d=a((n-t)/2),X=s((n-t)/2);switch(f){case"XYX":r.set(i*o,v*l,v*c,i*P);break;case"YZY":r.set(v*c,i*o,v*l,i*P);break;case"ZXZ":r.set(v*l,v*c,i*o,i*P);break;case"XZX":r.set(i*o,v*X,v*d,i*P);break;case"YXY":r.set(v*d,i*o,v*X,i*P);break;case"ZYZ":r.set(v*X,v*d,i*o,i*P);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+f)}}function un(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function kt(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const _P={DEG2RAD:Gr,RAD2DEG:lr,generateUUID:fn,clamp:be,euclideanModulo:Vi,mapLinear:Ql,inverseLerp:_l,lerp:gr,damp:$l,pingpong:t9,smoothstep:e9,smootherstep:n9,randInt:f9,randFloat:r9,randFloatSpread:a9,seededRandom:s9,degToRad:i9,radToDeg:v9,isPowerOfTwo:Xi,ceilPowerOfTwo:QP,floorPowerOfTwo:Ba,setQuaternionFromProperEuler:P9,normalize:kt,denormalize:un};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,f=t.elements;return this.x=f[0]*e+f[3]*n+f[6],this.y=f[1]*e+f[4]*n+f[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),f=Math.sin(e),a=this.x-t.x,s=this.y-t.y;return this.x=a*n-s*f+t.x,this.y=a*f+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(t,e,n,f,a,s,i,v,P){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,f,a,s,i,v,P)}set(t,e,n,f,a,s,i,v,P){const o=this.elements;return o[0]=t,o[1]=f,o[2]=i,o[3]=e,o[4]=a,o[5]=v,o[6]=n,o[7]=s,o[8]=P,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,f=e.elements,a=this.elements,s=n[0],i=n[3],v=n[6],P=n[1],o=n[4],l=n[7],c=n[2],d=n[5],X=n[8],h=f[0],u=f[3],p=f[6],z=f[1],b=f[4],x=f[7],w=f[2],L=f[5],H=f[8];return a[0]=s*h+i*z+v*w,a[3]=s*u+i*b+v*L,a[6]=s*p+i*x+v*H,a[1]=P*h+o*z+l*w,a[4]=P*u+o*b+l*L,a[7]=P*p+o*x+l*H,a[2]=c*h+d*z+X*w,a[5]=c*u+d*b+X*L,a[8]=c*p+d*x+X*H,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],f=t[2],a=t[3],s=t[4],i=t[5],v=t[6],P=t[7],o=t[8];return e*s*o-e*i*P-n*a*o+n*i*v+f*a*P-f*s*v}invert(){const t=this.elements,e=t[0],n=t[1],f=t[2],a=t[3],s=t[4],i=t[5],v=t[6],P=t[7],o=t[8],l=o*s-i*P,c=i*v-o*a,d=P*a-s*v,X=e*l+n*c+f*d;if(X===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/X;return t[0]=l*h,t[1]=(f*P-o*n)*h,t[2]=(i*n-f*s)*h,t[3]=c*h,t[4]=(o*e-f*v)*h,t[5]=(f*a-i*e)*h,t[6]=d*h,t[7]=(n*v-P*e)*h,t[8]=(s*e-n*a)*h,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,f,a,s,i){const v=Math.cos(a),P=Math.sin(a);return this.set(n*v,n*P,-n*(v*s+P*i)+s+t,-f*P,f*v,-f*(-P*s+v*i)+i+e,0,0,1),this}scale(t,e){return this.premultiply(hs.makeScale(t,e)),this}rotate(t){return this.premultiply(hs.makeRotation(-t)),this}translate(t,e){return this.premultiply(hs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let f=0;f<9;f++)if(e[f]!==n[f])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const hs=new Ut;function $P(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Yr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const Z8={};function Cr(r){r in Z8||(Z8[r]=!0,console.warn(r))}function fr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function bs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const o9=new Ut().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),l9=new Ut().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function c9(r){return r.convertSRGBToLinear().applyMatrix3(l9)}function p9(r){return r.applyMatrix3(o9).convertLinearToSRGB()}const u9={[dn]:r=>r,[Ht]:r=>r.convertSRGBToLinear(),[IP]:c9},d9={[dn]:r=>r,[Ht]:r=>r.convertLinearToSRGB(),[IP]:p9},Ie={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return dn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=u9[t],f=d9[e];if(n===void 0||f===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return f(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)}};let Af;class to{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Af===void 0&&(Af=Yr("canvas")),Af.width=t.width,Af.height=t.height;const n=Af.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Af}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Yr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const f=n.getImageData(0,0,t.width,t.height),a=f.data;for(let s=0;s<a.length;s++)a[s]=fr(a[s]/255)*255;return n.putImageData(f,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fr(e[n]/255)*255):e[n]=fr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let X9=0;class eo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:X9++}),this.uuid=fn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},f=this.data;if(f!==null){let a;if(Array.isArray(f)){a=[];for(let s=0,i=f.length;s<i;s++)f[s].isDataTexture?a.push(xs(f[s].image)):a.push(xs(f[s]))}else a=xs(f);n.url=a}return e||(t.images[this.uuid]=n),n}}function xs(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?to.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let h9=0;class we extends zf{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,n=Ce,f=Ce,a=Se,s=bf,i=Je,v=kn,P=we.DEFAULT_ANISOTROPY,o=hf){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h9++}),this.uuid=fn(),this.name="",this.source=new eo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=f,this.magFilter=a,this.minFilter=s,this.anisotropy=P,this.format=i,this.internalFormat=null,this.type=v,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof o=="string"?this.colorSpace=o:(Cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=o===Xf?Ht:hf),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==KP)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ir:t.x=t.x-Math.floor(t.x);break;case Ce:t.x=t.x<0?0:1;break;case Ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ir:t.y=t.y-Math.floor(t.y);break;case Ce:t.y=t.y<0?0:1;break;case Ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ht?Xf:kP}set encoding(t){Cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Xf?Ht:hf}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=KP;we.DEFAULT_ANISOTROPY=1;class Jt{constructor(t=0,e=0,n=0,f=1){Jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=f}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,f){return this.x=t,this.y=e,this.z=n,this.w=f,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,f=this.z,a=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*f+s[12]*a,this.y=s[1]*e+s[5]*n+s[9]*f+s[13]*a,this.z=s[2]*e+s[6]*n+s[10]*f+s[14]*a,this.w=s[3]*e+s[7]*n+s[11]*f+s[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,f,a;const v=t.elements,P=v[0],o=v[4],l=v[8],c=v[1],d=v[5],X=v[9],h=v[2],u=v[6],p=v[10];if(Math.abs(o-c)<.01&&Math.abs(l-h)<.01&&Math.abs(X-u)<.01){if(Math.abs(o+c)<.1&&Math.abs(l+h)<.1&&Math.abs(X+u)<.1&&Math.abs(P+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(P+1)/2,x=(d+1)/2,w=(p+1)/2,L=(o+c)/4,H=(l+h)/4,N=(X+u)/4;return b>x&&b>w?b<.01?(n=0,f=.707106781,a=.707106781):(n=Math.sqrt(b),f=L/n,a=H/n):x>w?x<.01?(n=.707106781,f=0,a=.707106781):(f=Math.sqrt(x),n=L/f,a=N/f):w<.01?(n=.707106781,f=.707106781,a=0):(a=Math.sqrt(w),n=H/a,f=N/a),this.set(n,f,a,e),this}let z=Math.sqrt((u-X)*(u-X)+(l-h)*(l-h)+(c-o)*(c-o));return Math.abs(z)<.001&&(z=1),this.x=(u-X)/z,this.y=(l-h)/z,this.z=(c-o)/z,this.w=Math.acos((P+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class b9 extends zf{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Jt(0,0,t,e),this.scissorTest=!1,this.viewport=new Jt(0,0,t,e);const f={width:t,height:e,depth:1};n.encoding!==void 0&&(Cr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Xf?Ht:hf),this.texture=new we(f,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Se,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new eo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends b9{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class no extends we{constructor(t=null,e=1,n=1,f=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:f},this.magFilter=he,this.minFilter=he,this.wrapR=Ce,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class x9 extends we{constructor(t=null,e=1,n=1,f=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:f},this.magFilter=he,this.minFilter=he,this.wrapR=Ce,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vn{constructor(t=0,e=0,n=0,f=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=f}static slerpFlat(t,e,n,f,a,s,i){let v=n[f+0],P=n[f+1],o=n[f+2],l=n[f+3];const c=a[s+0],d=a[s+1],X=a[s+2],h=a[s+3];if(i===0){t[e+0]=v,t[e+1]=P,t[e+2]=o,t[e+3]=l;return}if(i===1){t[e+0]=c,t[e+1]=d,t[e+2]=X,t[e+3]=h;return}if(l!==h||v!==c||P!==d||o!==X){let u=1-i;const p=v*c+P*d+o*X+l*h,z=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const w=Math.sqrt(b),L=Math.atan2(w,p*z);u=Math.sin(u*L)/w,i=Math.sin(i*L)/w}const x=i*z;if(v=v*u+c*x,P=P*u+d*x,o=o*u+X*x,l=l*u+h*x,u===1-i){const w=1/Math.sqrt(v*v+P*P+o*o+l*l);v*=w,P*=w,o*=w,l*=w}}t[e]=v,t[e+1]=P,t[e+2]=o,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,f,a,s){const i=n[f],v=n[f+1],P=n[f+2],o=n[f+3],l=a[s],c=a[s+1],d=a[s+2],X=a[s+3];return t[e]=i*X+o*l+v*d-P*c,t[e+1]=v*X+o*c+P*l-i*d,t[e+2]=P*X+o*d+i*c-v*l,t[e+3]=o*X-i*l-v*c-P*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,f){return this._x=t,this._y=e,this._z=n,this._w=f,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,f=t._y,a=t._z,s=t._order,i=Math.cos,v=Math.sin,P=i(n/2),o=i(f/2),l=i(a/2),c=v(n/2),d=v(f/2),X=v(a/2);switch(s){case"XYZ":this._x=c*o*l+P*d*X,this._y=P*d*l-c*o*X,this._z=P*o*X+c*d*l,this._w=P*o*l-c*d*X;break;case"YXZ":this._x=c*o*l+P*d*X,this._y=P*d*l-c*o*X,this._z=P*o*X-c*d*l,this._w=P*o*l+c*d*X;break;case"ZXY":this._x=c*o*l-P*d*X,this._y=P*d*l+c*o*X,this._z=P*o*X+c*d*l,this._w=P*o*l-c*d*X;break;case"ZYX":this._x=c*o*l-P*d*X,this._y=P*d*l+c*o*X,this._z=P*o*X-c*d*l,this._w=P*o*l+c*d*X;break;case"YZX":this._x=c*o*l+P*d*X,this._y=P*d*l+c*o*X,this._z=P*o*X-c*d*l,this._w=P*o*l-c*d*X;break;case"XZY":this._x=c*o*l-P*d*X,this._y=P*d*l-c*o*X,this._z=P*o*X+c*d*l,this._w=P*o*l+c*d*X;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,f=Math.sin(n);return this._x=t.x*f,this._y=t.y*f,this._z=t.z*f,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],f=e[4],a=e[8],s=e[1],i=e[5],v=e[9],P=e[2],o=e[6],l=e[10],c=n+i+l;if(c>0){const d=.5/Math.sqrt(c+1);this._w=.25/d,this._x=(o-v)*d,this._y=(a-P)*d,this._z=(s-f)*d}else if(n>i&&n>l){const d=2*Math.sqrt(1+n-i-l);this._w=(o-v)/d,this._x=.25*d,this._y=(f+s)/d,this._z=(a+P)/d}else if(i>l){const d=2*Math.sqrt(1+i-n-l);this._w=(a-P)/d,this._x=(f+s)/d,this._y=.25*d,this._z=(v+o)/d}else{const d=2*Math.sqrt(1+l-n-i);this._w=(s-f)/d,this._x=(a+P)/d,this._y=(v+o)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const f=Math.min(1,e/n);return this.slerp(t,f),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,f=t._y,a=t._z,s=t._w,i=e._x,v=e._y,P=e._z,o=e._w;return this._x=n*o+s*i+f*P-a*v,this._y=f*o+s*v+a*i-n*P,this._z=a*o+s*P+n*v-f*i,this._w=s*o-n*i-f*v-a*P,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,f=this._y,a=this._z,s=this._w;let i=s*t._w+n*t._x+f*t._y+a*t._z;if(i<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,i=-i):this.copy(t),i>=1)return this._w=s,this._x=n,this._y=f,this._z=a,this;const v=1-i*i;if(v<=Number.EPSILON){const d=1-e;return this._w=d*s+e*this._w,this._x=d*n+e*this._x,this._y=d*f+e*this._y,this._z=d*a+e*this._z,this.normalize(),this._onChangeCallback(),this}const P=Math.sqrt(v),o=Math.atan2(P,i),l=Math.sin((1-e)*o)/P,c=Math.sin(e*o)/P;return this._w=s*l+this._w*c,this._x=n*l+this._x*c,this._y=f*l+this._y*c,this._z=a*l+this._z*c,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),f=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(e*Math.cos(f),n*Math.sin(a),n*Math.cos(a),e*Math.sin(f))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,e=0,n=0){W.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(M8.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(M8.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,f=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*f,this.y=a[1]*e+a[4]*n+a[7]*f,this.z=a[2]*e+a[5]*n+a[8]*f,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,f=this.z,a=t.elements,s=1/(a[3]*e+a[7]*n+a[11]*f+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*f+a[12])*s,this.y=(a[1]*e+a[5]*n+a[9]*f+a[13])*s,this.z=(a[2]*e+a[6]*n+a[10]*f+a[14])*s,this}applyQuaternion(t){const e=this.x,n=this.y,f=this.z,a=t.x,s=t.y,i=t.z,v=t.w,P=v*e+s*f-i*n,o=v*n+i*e-a*f,l=v*f+a*n-s*e,c=-a*e-s*n-i*f;return this.x=P*v+c*-a+o*-i-l*-s,this.y=o*v+c*-s+l*-a-P*-i,this.z=l*v+c*-i+P*-s-o*-a,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,f=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*f,this.y=a[1]*e+a[5]*n+a[9]*f,this.z=a[2]*e+a[6]*n+a[10]*f,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,f=t.y,a=t.z,s=e.x,i=e.y,v=e.z;return this.x=f*v-a*i,this.y=a*s-n*v,this.z=n*i-f*s,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zs.copy(this).projectOnVector(t),this.sub(zs)}reflect(t){return this.sub(zs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,f=this.z-t.z;return e*e+n*n+f*f}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const f=Math.sin(e)*t;return this.x=f*Math.sin(n),this.y=Math.cos(e)*t,this.z=f*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),f=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=f,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zs=new W,M8=new vn;class re{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Tf.copy(t.boundingBox),Tf.applyMatrix4(t.matrixWorld),this.union(Tf);else{const f=t.geometry;if(f!==void 0)if(e&&f.attributes!==void 0&&f.attributes.position!==void 0){const a=f.attributes.position;for(let s=0,i=a.count;s<i;s++)zn.fromBufferAttribute(a,s).applyMatrix4(t.matrixWorld),this.expandByPoint(zn)}else f.boundingBox===null&&f.computeBoundingBox(),Tf.copy(f.boundingBox),Tf.applyMatrix4(t.matrixWorld),this.union(Tf)}const n=t.children;for(let f=0,a=n.length;f<a;f++)this.expandByObject(n[f],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hr),_r.subVectors(this.max,Hr),Lf.subVectors(t.a,Hr),jf.subVectors(t.b,Hr),Wf.subVectors(t.c,Hr),Vn.subVectors(jf,Lf),qn.subVectors(Wf,jf),ef.subVectors(Lf,Wf);let e=[0,-Vn.z,Vn.y,0,-qn.z,qn.y,0,-ef.z,ef.y,Vn.z,0,-Vn.x,qn.z,0,-qn.x,ef.z,0,-ef.x,-Vn.y,Vn.x,0,-qn.y,qn.x,0,-ef.y,ef.x,0];return!ws(e,Lf,jf,Wf,_r)||(e=[1,0,0,0,1,0,0,0,1],!ws(e,Lf,jf,Wf,_r))?!1:($r.crossVectors(Vn,qn),e=[$r.x,$r.y,$r.z],ws(e,Lf,jf,Wf,_r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xn=[new W,new W,new W,new W,new W,new W,new W,new W],zn=new W,Tf=new re,Lf=new W,jf=new W,Wf=new W,Vn=new W,qn=new W,ef=new W,Hr=new W,_r=new W,$r=new W,nf=new W;function ws(r,t,e,n,f){for(let a=0,s=r.length-3;a<=s;a+=3){nf.fromArray(r,a);const i=f.x*Math.abs(nf.x)+f.y*Math.abs(nf.y)+f.z*Math.abs(nf.z),v=t.dot(nf),P=e.dot(nf),o=n.dot(nf);if(Math.max(-Math.max(v,P,o),Math.min(v,P,o))>i)return!1}return!0}const z9=new re,Ar=new W,ms=new W;class on{constructor(t=new W,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):z9.setFromPoints(t).getCenter(n);let f=0;for(let a=0,s=t.length;a<s;a++)f=Math.max(f,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(f),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ar.subVectors(t,this.center);const e=Ar.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),f=(n-this.radius)*.5;this.center.addScaledVector(Ar,f/n),this.radius+=f}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ms.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ar.copy(t.center).add(ms)),this.expandByPoint(Ar.copy(t.center).sub(ms))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new W,Hs=new W,ta=new W,Un=new W,As=new W,ea=new W,Ts=new W;class Xr{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,f){Hs.copy(t).add(e).multiplyScalar(.5),ta.copy(e).sub(t).normalize(),Un.copy(this.origin).sub(Hs);const a=t.distanceTo(e)*.5,s=-this.direction.dot(ta),i=Un.dot(this.direction),v=-Un.dot(ta),P=Un.lengthSq(),o=Math.abs(1-s*s);let l,c,d,X;if(o>0)if(l=s*v-i,c=s*i-v,X=a*o,l>=0)if(c>=-X)if(c<=X){const h=1/o;l*=h,c*=h,d=l*(l+s*c+2*i)+c*(s*l+c+2*v)+P}else c=a,l=Math.max(0,-(s*c+i)),d=-l*l+c*(c+2*v)+P;else c=-a,l=Math.max(0,-(s*c+i)),d=-l*l+c*(c+2*v)+P;else c<=-X?(l=Math.max(0,-(-s*a+i)),c=l>0?-a:Math.min(Math.max(-a,-v),a),d=-l*l+c*(c+2*v)+P):c<=X?(l=0,c=Math.min(Math.max(-a,-v),a),d=c*(c+2*v)+P):(l=Math.max(0,-(s*a+i)),c=l>0?a:Math.min(Math.max(-a,-v),a),d=-l*l+c*(c+2*v)+P);else c=s>0?-a:a,l=Math.max(0,-(s*c+i)),d=-l*l+c*(c+2*v)+P;return n&&n.copy(this.origin).addScaledVector(this.direction,l),f&&f.copy(Hs).addScaledVector(ta,c),d}intersectSphere(t,e){wn.subVectors(t.center,this.origin);const n=wn.dot(this.direction),f=wn.dot(wn)-n*n,a=t.radius*t.radius;if(f>a)return null;const s=Math.sqrt(a-f),i=n-s,v=n+s;return v<0?null:i<0?this.at(v,e):this.at(i,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,f,a,s,i,v;const P=1/this.direction.x,o=1/this.direction.y,l=1/this.direction.z,c=this.origin;return P>=0?(n=(t.min.x-c.x)*P,f=(t.max.x-c.x)*P):(n=(t.max.x-c.x)*P,f=(t.min.x-c.x)*P),o>=0?(a=(t.min.y-c.y)*o,s=(t.max.y-c.y)*o):(a=(t.max.y-c.y)*o,s=(t.min.y-c.y)*o),n>s||a>f||((a>n||isNaN(n))&&(n=a),(s<f||isNaN(f))&&(f=s),l>=0?(i=(t.min.z-c.z)*l,v=(t.max.z-c.z)*l):(i=(t.max.z-c.z)*l,v=(t.min.z-c.z)*l),n>v||i>f)||((i>n||n!==n)&&(n=i),(v<f||f!==f)&&(f=v),f<0)?null:this.at(n>=0?n:f,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,n,f,a){As.subVectors(e,t),ea.subVectors(n,t),Ts.crossVectors(As,ea);let s=this.direction.dot(Ts),i;if(s>0){if(f)return null;i=1}else if(s<0)i=-1,s=-s;else return null;Un.subVectors(this.origin,t);const v=i*this.direction.dot(ea.crossVectors(Un,ea));if(v<0)return null;const P=i*this.direction.dot(As.cross(Un));if(P<0||v+P>s)return null;const o=-i*Un.dot(Ts);return o<0?null:this.at(o/s,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(t,e,n,f,a,s,i,v,P,o,l,c,d,X,h,u){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,f,a,s,i,v,P,o,l,c,d,X,h,u)}set(t,e,n,f,a,s,i,v,P,o,l,c,d,X,h,u){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=f,p[1]=a,p[5]=s,p[9]=i,p[13]=v,p[2]=P,p[6]=o,p[10]=l,p[14]=c,p[3]=d,p[7]=X,p[11]=h,p[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,f=1/yf.setFromMatrixColumn(t,0).length(),a=1/yf.setFromMatrixColumn(t,1).length(),s=1/yf.setFromMatrixColumn(t,2).length();return e[0]=n[0]*f,e[1]=n[1]*f,e[2]=n[2]*f,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,f=t.y,a=t.z,s=Math.cos(n),i=Math.sin(n),v=Math.cos(f),P=Math.sin(f),o=Math.cos(a),l=Math.sin(a);if(t.order==="XYZ"){const c=s*o,d=s*l,X=i*o,h=i*l;e[0]=v*o,e[4]=-v*l,e[8]=P,e[1]=d+X*P,e[5]=c-h*P,e[9]=-i*v,e[2]=h-c*P,e[6]=X+d*P,e[10]=s*v}else if(t.order==="YXZ"){const c=v*o,d=v*l,X=P*o,h=P*l;e[0]=c+h*i,e[4]=X*i-d,e[8]=s*P,e[1]=s*l,e[5]=s*o,e[9]=-i,e[2]=d*i-X,e[6]=h+c*i,e[10]=s*v}else if(t.order==="ZXY"){const c=v*o,d=v*l,X=P*o,h=P*l;e[0]=c-h*i,e[4]=-s*l,e[8]=X+d*i,e[1]=d+X*i,e[5]=s*o,e[9]=h-c*i,e[2]=-s*P,e[6]=i,e[10]=s*v}else if(t.order==="ZYX"){const c=s*o,d=s*l,X=i*o,h=i*l;e[0]=v*o,e[4]=X*P-d,e[8]=c*P+h,e[1]=v*l,e[5]=h*P+c,e[9]=d*P-X,e[2]=-P,e[6]=i*v,e[10]=s*v}else if(t.order==="YZX"){const c=s*v,d=s*P,X=i*v,h=i*P;e[0]=v*o,e[4]=h-c*l,e[8]=X*l+d,e[1]=l,e[5]=s*o,e[9]=-i*o,e[2]=-P*o,e[6]=d*l+X,e[10]=c-h*l}else if(t.order==="XZY"){const c=s*v,d=s*P,X=i*v,h=i*P;e[0]=v*o,e[4]=-l,e[8]=P*o,e[1]=c*l+h,e[5]=s*o,e[9]=d*l-X,e[2]=X*l-d,e[6]=i*o,e[10]=h*l+c}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(w9,t,m9)}lookAt(t,e,n){const f=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),Zn.crossVectors(n,Ue),Zn.lengthSq()===0&&(Math.abs(n.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),Zn.crossVectors(n,Ue)),Zn.normalize(),na.crossVectors(Ue,Zn),f[0]=Zn.x,f[4]=na.x,f[8]=Ue.x,f[1]=Zn.y,f[5]=na.y,f[9]=Ue.y,f[2]=Zn.z,f[6]=na.z,f[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,f=e.elements,a=this.elements,s=n[0],i=n[4],v=n[8],P=n[12],o=n[1],l=n[5],c=n[9],d=n[13],X=n[2],h=n[6],u=n[10],p=n[14],z=n[3],b=n[7],x=n[11],w=n[15],L=f[0],H=f[4],N=f[8],m=f[12],A=f[1],q=f[5],U=f[9],O=f[13],V=f[2],Z=f[6],E=f[10],J=f[14],I=f[3],$=f[7],_=f[11],g=f[15];return a[0]=s*L+i*A+v*V+P*I,a[4]=s*H+i*q+v*Z+P*$,a[8]=s*N+i*U+v*E+P*_,a[12]=s*m+i*O+v*J+P*g,a[1]=o*L+l*A+c*V+d*I,a[5]=o*H+l*q+c*Z+d*$,a[9]=o*N+l*U+c*E+d*_,a[13]=o*m+l*O+c*J+d*g,a[2]=X*L+h*A+u*V+p*I,a[6]=X*H+h*q+u*Z+p*$,a[10]=X*N+h*U+u*E+p*_,a[14]=X*m+h*O+u*J+p*g,a[3]=z*L+b*A+x*V+w*I,a[7]=z*H+b*q+x*Z+w*$,a[11]=z*N+b*U+x*E+w*_,a[15]=z*m+b*O+x*J+w*g,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],f=t[8],a=t[12],s=t[1],i=t[5],v=t[9],P=t[13],o=t[2],l=t[6],c=t[10],d=t[14],X=t[3],h=t[7],u=t[11],p=t[15];return X*(+a*v*l-f*P*l-a*i*c+n*P*c+f*i*d-n*v*d)+h*(+e*v*d-e*P*c+a*s*c-f*s*d+f*P*o-a*v*o)+u*(+e*P*l-e*i*d-a*s*l+n*s*d+a*i*o-n*P*o)+p*(-f*i*o-e*v*l+e*i*c+f*s*l-n*s*c+n*v*o)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const f=this.elements;return t.isVector3?(f[12]=t.x,f[13]=t.y,f[14]=t.z):(f[12]=t,f[13]=e,f[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],f=t[2],a=t[3],s=t[4],i=t[5],v=t[6],P=t[7],o=t[8],l=t[9],c=t[10],d=t[11],X=t[12],h=t[13],u=t[14],p=t[15],z=l*u*P-h*c*P+h*v*d-i*u*d-l*v*p+i*c*p,b=X*c*P-o*u*P-X*v*d+s*u*d+o*v*p-s*c*p,x=o*h*P-X*l*P+X*i*d-s*h*d-o*i*p+s*l*p,w=X*l*v-o*h*v-X*i*c+s*h*c+o*i*u-s*l*u,L=e*z+n*b+f*x+a*w;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/L;return t[0]=z*H,t[1]=(h*c*a-l*u*a-h*f*d+n*u*d+l*f*p-n*c*p)*H,t[2]=(i*u*a-h*v*a+h*f*P-n*u*P-i*f*p+n*v*p)*H,t[3]=(l*v*a-i*c*a-l*f*P+n*c*P+i*f*d-n*v*d)*H,t[4]=b*H,t[5]=(o*u*a-X*c*a+X*f*d-e*u*d-o*f*p+e*c*p)*H,t[6]=(X*v*a-s*u*a-X*f*P+e*u*P+s*f*p-e*v*p)*H,t[7]=(s*c*a-o*v*a+o*f*P-e*c*P-s*f*d+e*v*d)*H,t[8]=x*H,t[9]=(X*l*a-o*h*a-X*n*d+e*h*d+o*n*p-e*l*p)*H,t[10]=(s*h*a-X*i*a+X*n*P-e*h*P-s*n*p+e*i*p)*H,t[11]=(o*i*a-s*l*a-o*n*P+e*l*P+s*n*d-e*i*d)*H,t[12]=w*H,t[13]=(o*h*f-X*l*f+X*n*c-e*h*c-o*n*u+e*l*u)*H,t[14]=(X*i*f-s*h*f-X*n*v+e*h*v+s*n*u-e*i*u)*H,t[15]=(s*l*f-o*i*f+o*n*v-e*l*v-s*n*c+e*i*c)*H,this}scale(t){const e=this.elements,n=t.x,f=t.y,a=t.z;return e[0]*=n,e[4]*=f,e[8]*=a,e[1]*=n,e[5]*=f,e[9]*=a,e[2]*=n,e[6]*=f,e[10]*=a,e[3]*=n,e[7]*=f,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],f=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,f))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),f=Math.sin(e),a=1-n,s=t.x,i=t.y,v=t.z,P=a*s,o=a*i;return this.set(P*s+n,P*i-f*v,P*v+f*i,0,P*i+f*v,o*i+n,o*v-f*s,0,P*v-f*i,o*v+f*s,a*v*v+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,f,a,s){return this.set(1,n,a,0,t,1,s,0,e,f,1,0,0,0,0,1),this}compose(t,e,n){const f=this.elements,a=e._x,s=e._y,i=e._z,v=e._w,P=a+a,o=s+s,l=i+i,c=a*P,d=a*o,X=a*l,h=s*o,u=s*l,p=i*l,z=v*P,b=v*o,x=v*l,w=n.x,L=n.y,H=n.z;return f[0]=(1-(h+p))*w,f[1]=(d+x)*w,f[2]=(X-b)*w,f[3]=0,f[4]=(d-x)*L,f[5]=(1-(c+p))*L,f[6]=(u+z)*L,f[7]=0,f[8]=(X+b)*H,f[9]=(u-z)*H,f[10]=(1-(c+h))*H,f[11]=0,f[12]=t.x,f[13]=t.y,f[14]=t.z,f[15]=1,this}decompose(t,e,n){const f=this.elements;let a=yf.set(f[0],f[1],f[2]).length();const s=yf.set(f[4],f[5],f[6]).length(),i=yf.set(f[8],f[9],f[10]).length();this.determinant()<0&&(a=-a),t.x=f[12],t.y=f[13],t.z=f[14],Qe.copy(this);const P=1/a,o=1/s,l=1/i;return Qe.elements[0]*=P,Qe.elements[1]*=P,Qe.elements[2]*=P,Qe.elements[4]*=o,Qe.elements[5]*=o,Qe.elements[6]*=o,Qe.elements[8]*=l,Qe.elements[9]*=l,Qe.elements[10]*=l,e.setFromRotationMatrix(Qe),n.x=a,n.y=s,n.z=i,this}makePerspective(t,e,n,f,a,s,i=yn){const v=this.elements,P=2*a/(e-t),o=2*a/(n-f),l=(e+t)/(e-t),c=(n+f)/(n-f);let d,X;if(i===yn)d=-(s+a)/(s-a),X=-2*s*a/(s-a);else if(i===ka)d=-s/(s-a),X=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+i);return v[0]=P,v[4]=0,v[8]=l,v[12]=0,v[1]=0,v[5]=o,v[9]=c,v[13]=0,v[2]=0,v[6]=0,v[10]=d,v[14]=X,v[3]=0,v[7]=0,v[11]=-1,v[15]=0,this}makeOrthographic(t,e,n,f,a,s,i=yn){const v=this.elements,P=1/(e-t),o=1/(n-f),l=1/(s-a),c=(e+t)*P,d=(n+f)*o;let X,h;if(i===yn)X=(s+a)*l,h=-2*l;else if(i===ka)X=a*l,h=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+i);return v[0]=2*P,v[4]=0,v[8]=0,v[12]=-c,v[1]=0,v[5]=2*o,v[9]=0,v[13]=-d,v[2]=0,v[6]=0,v[10]=h,v[14]=-X,v[3]=0,v[7]=0,v[11]=0,v[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let f=0;f<16;f++)if(e[f]!==n[f])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const yf=new W,Qe=new bt,w9=new W(0,0,0),m9=new W(1,1,1),Zn=new W,na=new W,Ue=new W,K8=new bt,R8=new vn;class ts{constructor(t=0,e=0,n=0,f=ts.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=f}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,f=this._order){return this._x=t,this._y=e,this._z=n,this._order=f,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const f=t.elements,a=f[0],s=f[4],i=f[8],v=f[1],P=f[5],o=f[9],l=f[2],c=f[6],d=f[10];switch(e){case"XYZ":this._y=Math.asin(be(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-o,d),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(c,P),this._z=0);break;case"YXZ":this._x=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._y=Math.atan2(i,d),this._z=Math.atan2(v,P)):(this._y=Math.atan2(-l,a),this._z=0);break;case"ZXY":this._x=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-l,d),this._z=Math.atan2(-s,P)):(this._y=0,this._z=Math.atan2(v,a));break;case"ZYX":this._y=Math.asin(-be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(c,d),this._z=Math.atan2(v,a)):(this._x=0,this._z=Math.atan2(-s,P));break;case"YZX":this._z=Math.asin(be(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(-o,P),this._y=Math.atan2(-l,a)):(this._x=0,this._y=Math.atan2(i,d));break;case"XZY":this._z=Math.asin(-be(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(c,P),this._y=Math.atan2(i,a)):(this._x=Math.atan2(-o,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return K8.makeRotationFromQuaternion(t),this.setFromRotationMatrix(K8,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return R8.setFromEuler(this),this.setFromQuaternion(R8,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ts.DEFAULT_ORDER="XYZ";class qi{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let H9=0;const F8=new W,Nf=new vn,mn=new bt,fa=new W,Tr=new W,A9=new W,T9=new vn,G8=new W(1,0,0),g8=new W(0,1,0),C8=new W(0,0,1),L9={type:"added"},J8={type:"removed"};class te extends zf{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H9++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=te.DEFAULT_UP.clone();const t=new W,e=new ts,n=new vn,f=new W(1,1,1);function a(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:f},modelViewMatrix:{value:new bt},normalMatrix:{value:new Ut}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new qi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Nf.setFromAxisAngle(t,e),this.quaternion.multiply(Nf),this}rotateOnWorldAxis(t,e){return Nf.setFromAxisAngle(t,e),this.quaternion.premultiply(Nf),this}rotateX(t){return this.rotateOnAxis(G8,t)}rotateY(t){return this.rotateOnAxis(g8,t)}rotateZ(t){return this.rotateOnAxis(C8,t)}translateOnAxis(t,e){return F8.copy(t).applyQuaternion(this.quaternion),this.position.add(F8.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(G8,t)}translateY(t){return this.translateOnAxis(g8,t)}translateZ(t){return this.translateOnAxis(C8,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fa.copy(t):fa.set(t,e,n);const f=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Tr,fa,this.up):mn.lookAt(fa,Tr,this.up),this.quaternion.setFromRotationMatrix(mn),f&&(mn.extractRotation(f.matrixWorld),Nf.setFromRotationMatrix(mn),this.quaternion.premultiply(Nf.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(L9)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(J8)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(J8)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,f=this.children.length;n<f;n++){const s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let f=0,a=this.children.length;f<a;f++){const s=this.children[f].getObjectsByProperty(t,e);s.length>0&&(n=n.concat(s))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,t,A9),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,T9,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,f=e.length;n<f;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,f=e.length;n<f;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,f=e.length;n<f;n++){const a=e[n];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const f=this.children;for(let a=0,s=f.length;a<s;a++){const i=f[a];i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const f={};f.uuid=this.uuid,f.type=this.type,this.name!==""&&(f.name=this.name),this.castShadow===!0&&(f.castShadow=!0),this.receiveShadow===!0&&(f.receiveShadow=!0),this.visible===!1&&(f.visible=!1),this.frustumCulled===!1&&(f.frustumCulled=!1),this.renderOrder!==0&&(f.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(f.userData=this.userData),f.layers=this.layers.mask,f.matrix=this.matrix.toArray(),f.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(f.matrixAutoUpdate=!1),this.isInstancedMesh&&(f.type="InstancedMesh",f.count=this.count,f.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(f.instanceColor=this.instanceColor.toJSON()));function a(i,v){return i[v.uuid]===void 0&&(i[v.uuid]=v.toJSON(t)),v.uuid}if(this.isScene)this.background&&(this.background.isColor?f.background=this.background.toJSON():this.background.isTexture&&(f.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(f.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){f.geometry=a(t.geometries,this.geometry);const i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){const v=i.shapes;if(Array.isArray(v))for(let P=0,o=v.length;P<o;P++){const l=v[P];a(t.shapes,l)}else a(t.shapes,v)}}if(this.isSkinnedMesh&&(f.bindMode=this.bindMode,f.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),f.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const i=[];for(let v=0,P=this.material.length;v<P;v++)i.push(a(t.materials,this.material[v]));f.material=i}else f.material=a(t.materials,this.material);if(this.children.length>0){f.children=[];for(let i=0;i<this.children.length;i++)f.children.push(this.children[i].toJSON(t).object)}if(this.animations.length>0){f.animations=[];for(let i=0;i<this.animations.length;i++){const v=this.animations[i];f.animations.push(a(t.animations,v))}}if(e){const i=s(t.geometries),v=s(t.materials),P=s(t.textures),o=s(t.images),l=s(t.shapes),c=s(t.skeletons),d=s(t.animations),X=s(t.nodes);i.length>0&&(n.geometries=i),v.length>0&&(n.materials=v),P.length>0&&(n.textures=P),o.length>0&&(n.images=o),l.length>0&&(n.shapes=l),c.length>0&&(n.skeletons=c),d.length>0&&(n.animations=d),X.length>0&&(n.nodes=X)}return n.object=f,n;function s(i){const v=[];for(const P in i){const o=i[P];delete o.metadata,v.push(o)}return v}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const f=t.children[n];this.add(f.clone())}return this}}te.DEFAULT_UP=new W(0,1,0);te.DEFAULT_MATRIX_AUTO_UPDATE=!0;te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _e=new W,Hn=new W,Ls=new W,An=new W,Df=new W,Of=new W,E8=new W,js=new W,Ws=new W,ys=new W;let ra=!1;class Ae{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,f){f.subVectors(n,e),_e.subVectors(t,e),f.cross(_e);const a=f.lengthSq();return a>0?f.multiplyScalar(1/Math.sqrt(a)):f.set(0,0,0)}static getBarycoord(t,e,n,f,a){_e.subVectors(f,e),Hn.subVectors(n,e),Ls.subVectors(t,e);const s=_e.dot(_e),i=_e.dot(Hn),v=_e.dot(Ls),P=Hn.dot(Hn),o=Hn.dot(Ls),l=s*P-i*i;if(l===0)return a.set(-2,-1,-1);const c=1/l,d=(P*v-i*o)*c,X=(s*o-i*v)*c;return a.set(1-d-X,X,d)}static containsPoint(t,e,n,f){return this.getBarycoord(t,e,n,f,An),An.x>=0&&An.y>=0&&An.x+An.y<=1}static getUV(t,e,n,f,a,s,i,v){return ra===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ra=!0),this.getInterpolation(t,e,n,f,a,s,i,v)}static getInterpolation(t,e,n,f,a,s,i,v){return this.getBarycoord(t,e,n,f,An),v.setScalar(0),v.addScaledVector(a,An.x),v.addScaledVector(s,An.y),v.addScaledVector(i,An.z),v}static isFrontFacing(t,e,n,f){return _e.subVectors(n,e),Hn.subVectors(t,e),_e.cross(Hn).dot(f)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,f){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[f]),this}setFromAttributeAndIndices(t,e,n,f){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,f),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _e.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),_e.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ae.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ae.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,f,a){return ra===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ra=!0),Ae.getInterpolation(t,this.a,this.b,this.c,e,n,f,a)}getInterpolation(t,e,n,f,a){return Ae.getInterpolation(t,this.a,this.b,this.c,e,n,f,a)}containsPoint(t){return Ae.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ae.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,f=this.b,a=this.c;let s,i;Df.subVectors(f,n),Of.subVectors(a,n),js.subVectors(t,n);const v=Df.dot(js),P=Of.dot(js);if(v<=0&&P<=0)return e.copy(n);Ws.subVectors(t,f);const o=Df.dot(Ws),l=Of.dot(Ws);if(o>=0&&l<=o)return e.copy(f);const c=v*l-o*P;if(c<=0&&v>=0&&o<=0)return s=v/(v-o),e.copy(n).addScaledVector(Df,s);ys.subVectors(t,a);const d=Df.dot(ys),X=Of.dot(ys);if(X>=0&&d<=X)return e.copy(a);const h=d*P-v*X;if(h<=0&&P>=0&&X<=0)return i=P/(P-X),e.copy(n).addScaledVector(Of,i);const u=o*X-d*l;if(u<=0&&l-o>=0&&d-X>=0)return E8.subVectors(a,f),i=(l-o)/(l-o+(d-X)),e.copy(f).addScaledVector(E8,i);const p=1/(u+h+c);return s=h*p,i=c*p,e.copy(n).addScaledVector(Df,s).addScaledVector(Of,i)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let j9=0;class rn extends zf{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:j9++}),this.uuid=fn(),this.name="",this.type="Material",this.blending=nr,this.side=sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qP,this.blendDst=UP,this.blendEquation=_f,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const f=this[e];if(f===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}f&&f.isColor?f.set(n):f&&f.isVector3&&n&&n.isVector3?f.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(n.blending=this.blending),this.side!==sn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function f(a){const s=[];for(const i in a){const v=a[i];delete v.metadata,s.push(v)}return s}if(e){const a=f(t.textures),s=f(t.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const f=e.length;n=new Array(f);for(let a=0;a!==f;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const fo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$e={h:0,s:0,l:0},aa={h:0,s:0,l:0};function Ns(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Dt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const f=t;f&&f.isColor?this.copy(f):typeof f=="number"?this.setHex(f):typeof f=="string"&&this.setStyle(f)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ht){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,f=Ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ie.toWorkingColorSpace(this,f),this}setHSL(t,e,n,f=Ie.workingColorSpace){if(t=Vi(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,s=2*n-a;this.r=Ns(s,a,t+1/3),this.g=Ns(s,a,t),this.b=Ns(s,a,t-1/3)}return Ie.toWorkingColorSpace(this,f),this}setStyle(t,e=Ht){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let f;if(f=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const s=f[1],i=f[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(f=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=f[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ht){const n=fo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fr(t.r),this.g=fr(t.g),this.b=fr(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ht){return Ie.fromWorkingColorSpace(He.copy(this),t),Math.round(be(He.r*255,0,255))*65536+Math.round(be(He.g*255,0,255))*256+Math.round(be(He.b*255,0,255))}getHexString(t=Ht){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ie.workingColorSpace){Ie.fromWorkingColorSpace(He.copy(this),e);const n=He.r,f=He.g,a=He.b,s=Math.max(n,f,a),i=Math.min(n,f,a);let v,P;const o=(i+s)/2;if(i===s)v=0,P=0;else{const l=s-i;switch(P=o<=.5?l/(s+i):l/(2-s-i),s){case n:v=(f-a)/l+(f<a?6:0);break;case f:v=(a-n)/l+2;break;case a:v=(n-f)/l+4;break}v/=6}return t.h=v,t.s=P,t.l=o,t}getRGB(t,e=Ie.workingColorSpace){return Ie.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Ht){Ie.fromWorkingColorSpace(He.copy(this),t);const e=He.r,n=He.g,f=He.b;return t!==Ht?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${f.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(f*255)})`}offsetHSL(t,e,n){return this.getHSL($e),$e.h+=t,$e.s+=e,$e.l+=n,this.setHSL($e.h,$e.s,$e.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($e),t.getHSL(aa);const n=gr($e.h,aa.h,e),f=gr($e.s,aa.s,e),a=gr($e.l,aa.l,e);return this.setHSL(n,f,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,f=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*f,this.g=a[1]*e+a[4]*n+a[7]*f,this.b=a[2]*e+a[5]*n+a[8]*f,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new Dt;Dt.NAMES=fo;class Cn extends rn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ZP,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ie=new W,sa=new ht;class le{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ui,this.updateRange={offset:0,count:-1},this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let f=0,a=this.itemSize;f<a;f++)this.array[t+f]=e.array[n+f];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sa.fromBufferAttribute(this,e),sa.applyMatrix3(t),this.setXY(e,sa.x,sa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyMatrix3(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyMatrix4(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyNormalMatrix(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.transformDirection(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=kt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=un(e,this.array)),e}setX(t,e){return this.normalized&&(e=kt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=un(e,this.array)),e}setY(t,e){return this.normalized&&(e=kt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=kt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=un(e,this.array)),e}setW(t,e){return this.normalized&&(e=kt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=kt(e,this.array),n=kt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,f){return t*=this.itemSize,this.normalized&&(e=kt(e,this.array),n=kt(n,this.array),f=kt(f,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=f,this}setXYZW(t,e,n,f,a){return t*=this.itemSize,this.normalized&&(e=kt(e,this.array),n=kt(n,this.array),f=kt(f,this.array),a=kt(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=f,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ui&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class ro extends le{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ao extends le{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Nn extends le{constructor(t,e,n){super(new Float32Array(t),e,n)}}let W9=0;const Fe=new bt,Ds=new te,Sf=new W,Ze=new re,Lr=new re,Xe=new W;class Ve extends zf{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:W9++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($P(t)?ao:ro)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Ut().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const f=this.attributes.tangent;return f!==void 0&&(f.transformDirection(t),f.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fe.makeRotationFromQuaternion(t),this.applyMatrix4(Fe),this}rotateX(t){return Fe.makeRotationX(t),this.applyMatrix4(Fe),this}rotateY(t){return Fe.makeRotationY(t),this.applyMatrix4(Fe),this}rotateZ(t){return Fe.makeRotationZ(t),this.applyMatrix4(Fe),this}translate(t,e,n){return Fe.makeTranslation(t,e,n),this.applyMatrix4(Fe),this}scale(t,e,n){return Fe.makeScale(t,e,n),this.applyMatrix4(Fe),this}lookAt(t){return Ds.lookAt(t),Ds.updateMatrix(),this.applyMatrix4(Ds.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sf).negate(),this.translate(Sf.x,Sf.y,Sf.z),this}setFromPoints(t){const e=[];for(let n=0,f=t.length;n<f;n++){const a=t[n];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Nn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new re);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,f=e.length;n<f;n++){const a=e[n];Ze.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new on);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let a=0,s=e.length;a<s;a++){const i=e[a];Lr.setFromBufferAttribute(i),this.morphTargetsRelative?(Xe.addVectors(Ze.min,Lr.min),Ze.expandByPoint(Xe),Xe.addVectors(Ze.max,Lr.max),Ze.expandByPoint(Xe)):(Ze.expandByPoint(Lr.min),Ze.expandByPoint(Lr.max))}Ze.getCenter(n);let f=0;for(let a=0,s=t.count;a<s;a++)Xe.fromBufferAttribute(t,a),f=Math.max(f,n.distanceToSquared(Xe));if(e)for(let a=0,s=e.length;a<s;a++){const i=e[a],v=this.morphTargetsRelative;for(let P=0,o=i.count;P<o;P++)Xe.fromBufferAttribute(i,P),v&&(Sf.fromBufferAttribute(t,P),Xe.add(Sf)),f=Math.max(f,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(f),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,f=e.position.array,a=e.normal.array,s=e.uv.array,i=f.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new le(new Float32Array(4*i),4));const v=this.getAttribute("tangent").array,P=[],o=[];for(let A=0;A<i;A++)P[A]=new W,o[A]=new W;const l=new W,c=new W,d=new W,X=new ht,h=new ht,u=new ht,p=new W,z=new W;function b(A,q,U){l.fromArray(f,A*3),c.fromArray(f,q*3),d.fromArray(f,U*3),X.fromArray(s,A*2),h.fromArray(s,q*2),u.fromArray(s,U*2),c.sub(l),d.sub(l),h.sub(X),u.sub(X);const O=1/(h.x*u.y-u.x*h.y);isFinite(O)&&(p.copy(c).multiplyScalar(u.y).addScaledVector(d,-h.y).multiplyScalar(O),z.copy(d).multiplyScalar(h.x).addScaledVector(c,-u.x).multiplyScalar(O),P[A].add(p),P[q].add(p),P[U].add(p),o[A].add(z),o[q].add(z),o[U].add(z))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let A=0,q=x.length;A<q;++A){const U=x[A],O=U.start,V=U.count;for(let Z=O,E=O+V;Z<E;Z+=3)b(n[Z+0],n[Z+1],n[Z+2])}const w=new W,L=new W,H=new W,N=new W;function m(A){H.fromArray(a,A*3),N.copy(H);const q=P[A];w.copy(q),w.sub(H.multiplyScalar(H.dot(q))).normalize(),L.crossVectors(N,q);const O=L.dot(o[A])<0?-1:1;v[A*4]=w.x,v[A*4+1]=w.y,v[A*4+2]=w.z,v[A*4+3]=O}for(let A=0,q=x.length;A<q;++A){const U=x[A],O=U.start,V=U.count;for(let Z=O,E=O+V;Z<E;Z+=3)m(n[Z+0]),m(n[Z+1]),m(n[Z+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let c=0,d=n.count;c<d;c++)n.setXYZ(c,0,0,0);const f=new W,a=new W,s=new W,i=new W,v=new W,P=new W,o=new W,l=new W;if(t)for(let c=0,d=t.count;c<d;c+=3){const X=t.getX(c+0),h=t.getX(c+1),u=t.getX(c+2);f.fromBufferAttribute(e,X),a.fromBufferAttribute(e,h),s.fromBufferAttribute(e,u),o.subVectors(s,a),l.subVectors(f,a),o.cross(l),i.fromBufferAttribute(n,X),v.fromBufferAttribute(n,h),P.fromBufferAttribute(n,u),i.add(o),v.add(o),P.add(o),n.setXYZ(X,i.x,i.y,i.z),n.setXYZ(h,v.x,v.y,v.z),n.setXYZ(u,P.x,P.y,P.z)}else for(let c=0,d=e.count;c<d;c+=3)f.fromBufferAttribute(e,c+0),a.fromBufferAttribute(e,c+1),s.fromBufferAttribute(e,c+2),o.subVectors(s,a),l.subVectors(f,a),o.cross(l),n.setXYZ(c+0,o.x,o.y,o.z),n.setXYZ(c+1,o.x,o.y,o.z),n.setXYZ(c+2,o.x,o.y,o.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(i,v){const P=i.array,o=i.itemSize,l=i.normalized,c=new P.constructor(v.length*o);let d=0,X=0;for(let h=0,u=v.length;h<u;h++){i.isInterleavedBufferAttribute?d=v[h]*i.data.stride+i.offset:d=v[h]*o;for(let p=0;p<o;p++)c[X++]=P[d++]}return new le(c,o,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,n=this.index.array,f=this.attributes;for(const i in f){const v=f[i],P=t(v,n);e.setAttribute(i,P)}const a=this.morphAttributes;for(const i in a){const v=[],P=a[i];for(let o=0,l=P.length;o<l;o++){const c=P[o],d=t(c,n);v.push(d)}e.morphAttributes[i]=v}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let i=0,v=s.length;i<v;i++){const P=s[i];e.addGroup(P.start,P.count,P.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const v=this.parameters;for(const P in v)v[P]!==void 0&&(t[P]=v[P]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const v in n){const P=n[v];t.data.attributes[v]=P.toJSON(t.data)}const f={};let a=!1;for(const v in this.morphAttributes){const P=this.morphAttributes[v],o=[];for(let l=0,c=P.length;l<c;l++){const d=P[l];o.push(d.toJSON(t.data))}o.length>0&&(f[v]=o,a=!0)}a&&(t.data.morphAttributes=f,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const i=this.boundingSphere;return i!==null&&(t.data.boundingSphere={center:i.center.toArray(),radius:i.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const f=t.attributes;for(const P in f){const o=f[P];this.setAttribute(P,o.clone(e))}const a=t.morphAttributes;for(const P in a){const o=[],l=a[P];for(let c=0,d=l.length;c<d;c++)o.push(l[c].clone(e));this.morphAttributes[P]=o}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let P=0,o=s.length;P<o;P++){const l=s[P];this.addGroup(l.start,l.count,l.materialIndex)}const i=t.boundingBox;i!==null&&(this.boundingBox=i.clone());const v=t.boundingSphere;return v!==null&&(this.boundingSphere=v.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Y8=new bt,ff=new Xr,ia=new on,k8=new W,Vf=new W,qf=new W,Uf=new W,Os=new W,va=new W,Pa=new ht,oa=new ht,la=new ht,B8=new W,I8=new W,Q8=new W,ca=new W,pa=new W;class Le extends te{constructor(t=new Ve,e=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const f=e[n[0]];if(f!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=f.length;a<s;a++){const i=f[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=a}}}}getVertexPosition(t,e){const n=this.geometry,f=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(f,t);const i=this.morphTargetInfluences;if(a&&i){va.set(0,0,0);for(let v=0,P=a.length;v<P;v++){const o=i[v],l=a[v];o!==0&&(Os.fromBufferAttribute(l,t),s?va.addScaledVector(Os,o):va.addScaledVector(Os.sub(e),o))}e.add(va)}return e}raycast(t,e){const n=this.geometry,f=this.material,a=this.matrixWorld;f!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(a),ff.copy(t.ray).recast(t.near),!(ia.containsPoint(ff.origin)===!1&&(ff.intersectSphere(ia,k8)===null||ff.origin.distanceToSquared(k8)>(t.far-t.near)**2))&&(Y8.copy(a).invert(),ff.copy(t.ray).applyMatrix4(Y8),!(n.boundingBox!==null&&ff.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ff)))}_computeIntersections(t,e,n){let f;const a=this.geometry,s=this.material,i=a.index,v=a.attributes.position,P=a.attributes.uv,o=a.attributes.uv1,l=a.attributes.normal,c=a.groups,d=a.drawRange;if(i!==null)if(Array.isArray(s))for(let X=0,h=c.length;X<h;X++){const u=c[X],p=s[u.materialIndex],z=Math.max(u.start,d.start),b=Math.min(i.count,Math.min(u.start+u.count,d.start+d.count));for(let x=z,w=b;x<w;x+=3){const L=i.getX(x),H=i.getX(x+1),N=i.getX(x+2);f=ua(this,p,t,n,P,o,l,L,H,N),f&&(f.faceIndex=Math.floor(x/3),f.face.materialIndex=u.materialIndex,e.push(f))}}else{const X=Math.max(0,d.start),h=Math.min(i.count,d.start+d.count);for(let u=X,p=h;u<p;u+=3){const z=i.getX(u),b=i.getX(u+1),x=i.getX(u+2);f=ua(this,s,t,n,P,o,l,z,b,x),f&&(f.faceIndex=Math.floor(u/3),e.push(f))}}else if(v!==void 0)if(Array.isArray(s))for(let X=0,h=c.length;X<h;X++){const u=c[X],p=s[u.materialIndex],z=Math.max(u.start,d.start),b=Math.min(v.count,Math.min(u.start+u.count,d.start+d.count));for(let x=z,w=b;x<w;x+=3){const L=x,H=x+1,N=x+2;f=ua(this,p,t,n,P,o,l,L,H,N),f&&(f.faceIndex=Math.floor(x/3),f.face.materialIndex=u.materialIndex,e.push(f))}}else{const X=Math.max(0,d.start),h=Math.min(v.count,d.start+d.count);for(let u=X,p=h;u<p;u+=3){const z=u,b=u+1,x=u+2;f=ua(this,s,t,n,P,o,l,z,b,x),f&&(f.faceIndex=Math.floor(u/3),e.push(f))}}}}function y9(r,t,e,n,f,a,s,i){let v;if(t.side===De?v=n.intersectTriangle(s,a,f,!0,i):v=n.intersectTriangle(f,a,s,t.side===sn,i),v===null)return null;pa.copy(i),pa.applyMatrix4(r.matrixWorld);const P=e.ray.origin.distanceTo(pa);return P<e.near||P>e.far?null:{distance:P,point:pa.clone(),object:r}}function ua(r,t,e,n,f,a,s,i,v,P){r.getVertexPosition(i,Vf),r.getVertexPosition(v,qf),r.getVertexPosition(P,Uf);const o=y9(r,t,e,n,Vf,qf,Uf,ca);if(o){f&&(Pa.fromBufferAttribute(f,i),oa.fromBufferAttribute(f,v),la.fromBufferAttribute(f,P),o.uv=Ae.getInterpolation(ca,Vf,qf,Uf,Pa,oa,la,new ht)),a&&(Pa.fromBufferAttribute(a,i),oa.fromBufferAttribute(a,v),la.fromBufferAttribute(a,P),o.uv1=Ae.getInterpolation(ca,Vf,qf,Uf,Pa,oa,la,new ht),o.uv2=o.uv1),s&&(B8.fromBufferAttribute(s,i),I8.fromBufferAttribute(s,v),Q8.fromBufferAttribute(s,P),o.normal=Ae.getInterpolation(ca,Vf,qf,Uf,B8,I8,Q8,new W),o.normal.dot(n.direction)>0&&o.normal.multiplyScalar(-1));const l={a:i,b:v,c:P,normal:new W,materialIndex:0};Ae.getNormal(Vf,qf,Uf,l.normal),o.face=l}return o}class hr extends Ve{constructor(t=1,e=1,n=1,f=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:f,heightSegments:a,depthSegments:s};const i=this;f=Math.floor(f),a=Math.floor(a),s=Math.floor(s);const v=[],P=[],o=[],l=[];let c=0,d=0;X("z","y","x",-1,-1,n,e,t,s,a,0),X("z","y","x",1,-1,n,e,-t,s,a,1),X("x","z","y",1,1,t,n,e,f,s,2),X("x","z","y",1,-1,t,n,-e,f,s,3),X("x","y","z",1,-1,t,e,n,f,a,4),X("x","y","z",-1,-1,t,e,-n,f,a,5),this.setIndex(v),this.setAttribute("position",new Nn(P,3)),this.setAttribute("normal",new Nn(o,3)),this.setAttribute("uv",new Nn(l,2));function X(h,u,p,z,b,x,w,L,H,N,m){const A=x/H,q=w/N,U=x/2,O=w/2,V=L/2,Z=H+1,E=N+1;let J=0,I=0;const $=new W;for(let _=0;_<E;_++){const g=_*q-O;for(let Y=0;Y<Z;Y++){const lt=Y*A-U;$[h]=lt*z,$[u]=g*b,$[p]=V,P.push($.x,$.y,$.z),$[h]=0,$[u]=0,$[p]=L>0?1:-1,o.push($.x,$.y,$.z),l.push(Y/H),l.push(1-_/N),J+=1}}for(let _=0;_<N;_++)for(let g=0;g<H;g++){const Y=c+g+Z*_,lt=c+g+Z*(_+1),ct=c+(g+1)+Z*(_+1),pt=c+(g+1)+Z*_;v.push(Y,lt,pt),v.push(lt,ct,pt),I+=6}i.addGroup(d,I,m),d+=I,c+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function cr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const f=r[e][n];f&&(f.isColor||f.isMatrix3||f.isMatrix4||f.isVector2||f.isVector3||f.isVector4||f.isTexture||f.isQuaternion)?f.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=f.clone():Array.isArray(f)?t[e][n]=f.slice():t[e][n]=f}}return t}function Ne(r){const t={};for(let e=0;e<r.length;e++){const n=cr(r[e]);for(const f in n)t[f]=n[f]}return t}function N9(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function so(r){return r.getRenderTarget()===null?r.outputColorSpace:dn}const io={clone:cr,merge:Ne};var D9=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O9=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends rn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=D9,this.fragmentShader=O9,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cr(t.uniforms),this.uniformsGroups=N9(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const f in this.uniforms){const s=this.uniforms[f].value;s&&s.isTexture?e.uniforms[f]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[f]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[f]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[f]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[f]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[f]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[f]={type:"m4",value:s.toArray()}:e.uniforms[f]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const f in this.extensions)this.extensions[f]===!0&&(n[f]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class vo extends te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Te extends vo{constructor(t=50,e=1,n=.1,f=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=f,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=lr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lr*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,f,a,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=f,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Gr*.5*this.fov)/this.zoom,n=2*e,f=this.aspect*n,a=-.5*f;const s=this.view;if(this.view!==null&&this.view.enabled){const v=s.fullWidth,P=s.fullHeight;a+=s.offsetX*f/v,e-=s.offsetY*n/P,f*=s.width/v,n*=s.height/P}const i=this.filmOffset;i!==0&&(a+=t*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+f,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zf=-90,Mf=1;class S9 extends te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const f=new Te(Zf,Mf,t,e);f.layers=this.layers,this.add(f);const a=new Te(Zf,Mf,t,e);a.layers=this.layers,this.add(a);const s=new Te(Zf,Mf,t,e);s.layers=this.layers,this.add(s);const i=new Te(Zf,Mf,t,e);i.layers=this.layers,this.add(i);const v=new Te(Zf,Mf,t,e);v.layers=this.layers,this.add(v);const P=new Te(Zf,Mf,t,e);P.layers=this.layers,this.add(P)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,f,a,s,i,v]=e;for(const P of e)this.remove(P);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),f.up.set(0,1,0),f.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),i.up.set(0,1,0),i.lookAt(0,0,1),v.up.set(0,1,0),v.lookAt(0,0,-1);else if(t===ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),f.up.set(0,-1,0),f.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),i.up.set(0,-1,0),i.lookAt(0,0,1),v.up.set(0,-1,0),v.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const P of e)this.add(P),P.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[f,a,s,i,v,P]=this.children,o=t.getRenderTarget(),l=t.xr.enabled;t.xr.enabled=!1;const c=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,f),t.setRenderTarget(n,1),t.render(e,a),t.setRenderTarget(n,2),t.render(e,s),t.setRenderTarget(n,3),t.render(e,i),t.setRenderTarget(n,4),t.render(e,v),n.texture.generateMipmaps=c,t.setRenderTarget(n,5),t.render(e,P),t.setRenderTarget(o),t.xr.enabled=l,n.texture.needsPMREMUpdate=!0}}class Po extends we{constructor(t,e,n,f,a,s,i,v,P,o){t=t!==void 0?t:[],e=e!==void 0?e:ar,super(t,e,n,f,a,s,i,v,P,o),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class V9 extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},f=[n,n,n,n,n,n];e.encoding!==void 0&&(Cr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Xf?Ht:hf),this.texture=new Po(f,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Se}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},f=new hr(5,5,5),a=new In({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:En});a.uniforms.tEquirect.value=e;const s=new Le(f,a),i=e.minFilter;return e.minFilter===bf&&(e.minFilter=Se),new S9(1,10,this).update(t,s),e.minFilter=i,s.geometry.dispose(),s.material.dispose(),this}clear(t,e,n,f){const a=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,f);t.setRenderTarget(a)}}const Ss=new W,q9=new W,U9=new Ut;class en{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,f){return this.normal.set(t,e,n),this.constant=f,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const f=Ss.subVectors(n,e).cross(q9.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(f,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ss),f=this.normal.dot(n);if(f===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/f;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||U9.getNormalMatrix(t),f=this.coplanarPoint(Ss).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-f.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rf=new on,da=new W;class Ui{constructor(t=new en,e=new en,n=new en,f=new en,a=new en,s=new en){this.planes=[t,e,n,f,a,s]}set(t,e,n,f,a,s){const i=this.planes;return i[0].copy(t),i[1].copy(e),i[2].copy(n),i[3].copy(f),i[4].copy(a),i[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn){const n=this.planes,f=t.elements,a=f[0],s=f[1],i=f[2],v=f[3],P=f[4],o=f[5],l=f[6],c=f[7],d=f[8],X=f[9],h=f[10],u=f[11],p=f[12],z=f[13],b=f[14],x=f[15];if(n[0].setComponents(v-a,c-P,u-d,x-p).normalize(),n[1].setComponents(v+a,c+P,u+d,x+p).normalize(),n[2].setComponents(v+s,c+o,u+X,x+z).normalize(),n[3].setComponents(v-s,c-o,u-X,x-z).normalize(),n[4].setComponents(v-i,c-l,u-h,x-b).normalize(),e===yn)n[5].setComponents(v+i,c+l,u+h,x+b).normalize();else if(e===ka)n[5].setComponents(i,l,h,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rf.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rf.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rf)}intersectsSprite(t){return rf.center.set(0,0,0),rf.radius=.7071067811865476,rf.applyMatrix4(t.matrixWorld),this.intersectsSphere(rf)}intersectsSphere(t){const e=this.planes,n=t.center,f=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<f)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const f=e[n];if(da.x=f.normal.x>0?t.max.x:t.min.x,da.y=f.normal.y>0?t.max.y:t.min.y,da.z=f.normal.z>0?t.max.z:t.min.z,f.distanceToPoint(da)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function oo(){let r=null,t=!1,e=null,n=null;function f(a,s){e(a,s),n=r.requestAnimationFrame(f)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(f),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){r=a}}}function Z9(r,t){const e=t.isWebGL2,n=new WeakMap;function f(P,o){const l=P.array,c=P.usage,d=r.createBuffer();r.bindBuffer(o,d),r.bufferData(o,l,c),P.onUploadCallback();let X;if(l instanceof Float32Array)X=r.FLOAT;else if(l instanceof Uint16Array)if(P.isFloat16BufferAttribute)if(e)X=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else X=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)X=r.SHORT;else if(l instanceof Uint32Array)X=r.UNSIGNED_INT;else if(l instanceof Int32Array)X=r.INT;else if(l instanceof Int8Array)X=r.BYTE;else if(l instanceof Uint8Array)X=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)X=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:X,bytesPerElement:l.BYTES_PER_ELEMENT,version:P.version}}function a(P,o,l){const c=o.array,d=o.updateRange;r.bindBuffer(l,P),d.count===-1?r.bufferSubData(l,0,c):(e?r.bufferSubData(l,d.offset*c.BYTES_PER_ELEMENT,c,d.offset,d.count):r.bufferSubData(l,d.offset*c.BYTES_PER_ELEMENT,c.subarray(d.offset,d.offset+d.count)),d.count=-1),o.onUploadCallback()}function s(P){return P.isInterleavedBufferAttribute&&(P=P.data),n.get(P)}function i(P){P.isInterleavedBufferAttribute&&(P=P.data);const o=n.get(P);o&&(r.deleteBuffer(o.buffer),n.delete(P))}function v(P,o){if(P.isGLBufferAttribute){const c=n.get(P);(!c||c.version<P.version)&&n.set(P,{buffer:P.buffer,type:P.type,bytesPerElement:P.elementSize,version:P.version});return}P.isInterleavedBufferAttribute&&(P=P.data);const l=n.get(P);l===void 0?n.set(P,f(P,o)):l.version<P.version&&(a(l.buffer,P,o),l.version=P.version)}return{get:s,remove:i,update:v}}class es extends Ve{constructor(t=1,e=1,n=1,f=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:f};const a=t/2,s=e/2,i=Math.floor(n),v=Math.floor(f),P=i+1,o=v+1,l=t/i,c=e/v,d=[],X=[],h=[],u=[];for(let p=0;p<o;p++){const z=p*c-s;for(let b=0;b<P;b++){const x=b*l-a;X.push(x,-z,0),h.push(0,0,1),u.push(b/i),u.push(1-p/v)}}for(let p=0;p<v;p++)for(let z=0;z<i;z++){const b=z+P*p,x=z+P*(p+1),w=z+1+P*(p+1),L=z+1+P*p;d.push(b,x,L),d.push(x,w,L)}this.setIndex(d),this.setAttribute("position",new Nn(X,3)),this.setAttribute("normal",new Nn(h,3)),this.setAttribute("uv",new Nn(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new es(t.width,t.height,t.widthSegments,t.heightSegments)}}var M9=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,K9=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,R9=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F9=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G9=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,g9=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C9=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,J9=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E9=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Y9=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k9=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,B9=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,I9=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Q9=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,_9=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$9=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ec=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ac=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ic=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cc="gl_FragColor = linearToOutputTexel( gl_FragColor );",pc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ac=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Tc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Nc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Oc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,qc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Uc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Kc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gc=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Cc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ec=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ic=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Qc=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_c=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,$c=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,tp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,op=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,bp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Hp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ap=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Np=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Up=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,gp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bp=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ip=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_p=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$p=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ru=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,au=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,su=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ou=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lu=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:M9,alphahash_pars_fragment:K9,alphamap_fragment:R9,alphamap_pars_fragment:F9,alphatest_fragment:G9,alphatest_pars_fragment:g9,aomap_fragment:C9,aomap_pars_fragment:J9,begin_vertex:E9,beginnormal_vertex:Y9,bsdfs:k9,iridescence_fragment:B9,bumpmap_pars_fragment:I9,clipping_planes_fragment:Q9,clipping_planes_pars_fragment:_9,clipping_planes_pars_vertex:$9,clipping_planes_vertex:tc,color_fragment:ec,color_pars_fragment:nc,color_pars_vertex:fc,color_vertex:rc,common:ac,cube_uv_reflection_fragment:sc,defaultnormal_vertex:ic,displacementmap_pars_vertex:vc,displacementmap_vertex:Pc,emissivemap_fragment:oc,emissivemap_pars_fragment:lc,colorspace_fragment:cc,colorspace_pars_fragment:pc,envmap_fragment:uc,envmap_common_pars_fragment:dc,envmap_pars_fragment:Xc,envmap_pars_vertex:hc,envmap_physical_pars_fragment:yc,envmap_vertex:bc,fog_vertex:xc,fog_pars_vertex:zc,fog_fragment:wc,fog_pars_fragment:mc,gradientmap_pars_fragment:Hc,lightmap_fragment:Ac,lightmap_pars_fragment:Tc,lights_lambert_fragment:Lc,lights_lambert_pars_fragment:jc,lights_pars_begin:Wc,lights_toon_fragment:Nc,lights_toon_pars_fragment:Dc,lights_phong_fragment:Oc,lights_phong_pars_fragment:Sc,lights_physical_fragment:Vc,lights_physical_pars_fragment:qc,lights_fragment_begin:Uc,lights_fragment_maps:Zc,lights_fragment_end:Mc,logdepthbuf_fragment:Kc,logdepthbuf_pars_fragment:Rc,logdepthbuf_pars_vertex:Fc,logdepthbuf_vertex:Gc,map_fragment:gc,map_pars_fragment:Cc,map_particle_fragment:Jc,map_particle_pars_fragment:Ec,metalnessmap_fragment:Yc,metalnessmap_pars_fragment:kc,morphcolor_vertex:Bc,morphnormal_vertex:Ic,morphtarget_pars_vertex:Qc,morphtarget_vertex:_c,normal_fragment_begin:$c,normal_fragment_maps:tp,normal_pars_fragment:ep,normal_pars_vertex:np,normal_vertex:fp,normalmap_pars_fragment:rp,clearcoat_normal_fragment_begin:ap,clearcoat_normal_fragment_maps:sp,clearcoat_pars_fragment:ip,iridescence_pars_fragment:vp,opaque_fragment:Pp,packing:op,premultiplied_alpha_fragment:lp,project_vertex:cp,dithering_fragment:pp,dithering_pars_fragment:up,roughnessmap_fragment:dp,roughnessmap_pars_fragment:Xp,shadowmap_pars_fragment:hp,shadowmap_pars_vertex:bp,shadowmap_vertex:xp,shadowmask_pars_fragment:zp,skinbase_vertex:wp,skinning_pars_vertex:mp,skinning_vertex:Hp,skinnormal_vertex:Ap,specularmap_fragment:Tp,specularmap_pars_fragment:Lp,tonemapping_fragment:jp,tonemapping_pars_fragment:Wp,transmission_fragment:yp,transmission_pars_fragment:Np,uv_pars_fragment:Dp,uv_pars_vertex:Op,uv_vertex:Sp,worldpos_vertex:Vp,background_vert:qp,background_frag:Up,backgroundCube_vert:Zp,backgroundCube_frag:Mp,cube_vert:Kp,cube_frag:Rp,depth_vert:Fp,depth_frag:Gp,distanceRGBA_vert:gp,distanceRGBA_frag:Cp,equirect_vert:Jp,equirect_frag:Ep,linedashed_vert:Yp,linedashed_frag:kp,meshbasic_vert:Bp,meshbasic_frag:Ip,meshlambert_vert:Qp,meshlambert_frag:_p,meshmatcap_vert:$p,meshmatcap_frag:tu,meshnormal_vert:eu,meshnormal_frag:nu,meshphong_vert:fu,meshphong_frag:ru,meshphysical_vert:au,meshphysical_frag:su,meshtoon_vert:iu,meshtoon_frag:vu,points_vert:Pu,points_frag:ou,shadow_vert:lu,shadow_frag:cu,sprite_vert:pu,sprite_frag:uu},st={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},pn={basic:{uniforms:Ne([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Ne([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Dt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Ne([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Ne([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Ne([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Dt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Ne([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Ne([st.points,st.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Ne([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Ne([st.common,st.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Ne([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Ne([st.sprite,st.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Ne([st.common,st.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Ne([st.lights,st.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};pn.physical={uniforms:Ne([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const Xa={r:0,b:0,g:0};function du(r,t,e,n,f,a,s){const i=new Dt(0);let v=a===!0?0:1,P,o,l=null,c=0,d=null;function X(u,p){let z=!1,b=p.isScene===!0?p.background:null;switch(b&&b.isTexture&&(b=(p.backgroundBlurriness>0?e:t).get(b)),b===null?h(i,v):b&&b.isColor&&(h(b,1),z=!0),r.xr.getEnvironmentBlendMode()){case"opaque":z=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,s),z=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,s),z=!0;break}(r.autoClear||z)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),b&&(b.isCubeTexture||b.mapping===$a)?(o===void 0&&(o=new Le(new hr(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:cr(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(L,H,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),f.update(o)),o.material.uniforms.envMap.value=b,o.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,o.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,o.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,o.material.toneMapped=b.colorSpace!==Ht,(l!==b||c!==b.version||d!==r.toneMapping)&&(o.material.needsUpdate=!0,l=b,c=b.version,d=r.toneMapping),o.layers.enableAll(),u.unshift(o,o.geometry,o.material,0,0,null)):b&&b.isTexture&&(P===void 0&&(P=new Le(new es(2,2),new In({name:"BackgroundMaterial",uniforms:cr(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),P.geometry.deleteAttribute("normal"),Object.defineProperty(P.material,"map",{get:function(){return this.uniforms.t2D.value}}),f.update(P)),P.material.uniforms.t2D.value=b,P.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,P.material.toneMapped=b.colorSpace!==Ht,b.matrixAutoUpdate===!0&&b.updateMatrix(),P.material.uniforms.uvTransform.value.copy(b.matrix),(l!==b||c!==b.version||d!==r.toneMapping)&&(P.material.needsUpdate=!0,l=b,c=b.version,d=r.toneMapping),P.layers.enableAll(),u.unshift(P,P.geometry,P.material,0,0,null))}function h(u,p){u.getRGB(Xa,so(r)),n.buffers.color.setClear(Xa.r,Xa.g,Xa.b,p,s)}return{getClearColor:function(){return i},setClearColor:function(u,p=1){i.set(u),v=p,h(i,v)},getClearAlpha:function(){return v},setClearAlpha:function(u){v=u,h(i,v)},render:X}}function Xu(r,t,e,n){const f=r.getParameter(r.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:t.get("OES_vertex_array_object"),s=n.isWebGL2||a!==null,i={},v=u(null);let P=v,o=!1;function l(V,Z,E,J,I){let $=!1;if(s){const _=h(J,E,Z);P!==_&&(P=_,d(P.object)),$=p(V,J,E,I),$&&z(V,J,E,I)}else{const _=Z.wireframe===!0;(P.geometry!==J.id||P.program!==E.id||P.wireframe!==_)&&(P.geometry=J.id,P.program=E.id,P.wireframe=_,$=!0)}I!==null&&e.update(I,r.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,N(V,Z,E,J),I!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function c(){return n.isWebGL2?r.createVertexArray():a.createVertexArrayOES()}function d(V){return n.isWebGL2?r.bindVertexArray(V):a.bindVertexArrayOES(V)}function X(V){return n.isWebGL2?r.deleteVertexArray(V):a.deleteVertexArrayOES(V)}function h(V,Z,E){const J=E.wireframe===!0;let I=i[V.id];I===void 0&&(I={},i[V.id]=I);let $=I[Z.id];$===void 0&&($={},I[Z.id]=$);let _=$[J];return _===void 0&&(_=u(c()),$[J]=_),_}function u(V){const Z=[],E=[],J=[];for(let I=0;I<f;I++)Z[I]=0,E[I]=0,J[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:E,attributeDivisors:J,object:V,attributes:{},index:null}}function p(V,Z,E,J){const I=P.attributes,$=Z.attributes;let _=0;const g=E.getAttributes();for(const Y in g)if(g[Y].location>=0){const ct=I[Y];let pt=$[Y];if(pt===void 0&&(Y==="instanceMatrix"&&V.instanceMatrix&&(pt=V.instanceMatrix),Y==="instanceColor"&&V.instanceColor&&(pt=V.instanceColor)),ct===void 0||ct.attribute!==pt||pt&&ct.data!==pt.data)return!0;_++}return P.attributesNum!==_||P.index!==J}function z(V,Z,E,J){const I={},$=Z.attributes;let _=0;const g=E.getAttributes();for(const Y in g)if(g[Y].location>=0){let ct=$[Y];ct===void 0&&(Y==="instanceMatrix"&&V.instanceMatrix&&(ct=V.instanceMatrix),Y==="instanceColor"&&V.instanceColor&&(ct=V.instanceColor));const pt={};pt.attribute=ct,ct&&ct.data&&(pt.data=ct.data),I[Y]=pt,_++}P.attributes=I,P.attributesNum=_,P.index=J}function b(){const V=P.newAttributes;for(let Z=0,E=V.length;Z<E;Z++)V[Z]=0}function x(V){w(V,0)}function w(V,Z){const E=P.newAttributes,J=P.enabledAttributes,I=P.attributeDivisors;E[V]=1,J[V]===0&&(r.enableVertexAttribArray(V),J[V]=1),I[V]!==Z&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,Z),I[V]=Z)}function L(){const V=P.newAttributes,Z=P.enabledAttributes;for(let E=0,J=Z.length;E<J;E++)Z[E]!==V[E]&&(r.disableVertexAttribArray(E),Z[E]=0)}function H(V,Z,E,J,I,$,_){_===!0?r.vertexAttribIPointer(V,Z,E,I,$):r.vertexAttribPointer(V,Z,E,J,I,$)}function N(V,Z,E,J){if(n.isWebGL2===!1&&(V.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;b();const I=J.attributes,$=E.getAttributes(),_=Z.defaultAttributeValues;for(const g in $){const Y=$[g];if(Y.location>=0){let lt=I[g];if(lt===void 0&&(g==="instanceMatrix"&&V.instanceMatrix&&(lt=V.instanceMatrix),g==="instanceColor"&&V.instanceColor&&(lt=V.instanceColor)),lt!==void 0){const ct=lt.normalized,pt=lt.itemSize,xt=e.get(lt);if(xt===void 0)continue;const Wt=xt.buffer,zt=xt.type,Ct=xt.bytesPerElement,ze=n.isWebGL2===!0&&(zt===r.INT||zt===r.UNSIGNED_INT||lt.gpuType===FP);if(lt.isInterleavedBufferAttribute){const St=lt.data,R=St.stride,Pe=lt.offset;if(St.isInstancedInterleavedBuffer){for(let wt=0;wt<Y.locationSize;wt++)w(Y.location+wt,St.meshPerAttribute);V.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let wt=0;wt<Y.locationSize;wt++)x(Y.location+wt);r.bindBuffer(r.ARRAY_BUFFER,Wt);for(let wt=0;wt<Y.locationSize;wt++)H(Y.location+wt,pt/Y.locationSize,zt,ct,R*Ct,(Pe+pt/Y.locationSize*wt)*Ct,ze)}else{if(lt.isInstancedBufferAttribute){for(let St=0;St<Y.locationSize;St++)w(Y.location+St,lt.meshPerAttribute);V.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let St=0;St<Y.locationSize;St++)x(Y.location+St);r.bindBuffer(r.ARRAY_BUFFER,Wt);for(let St=0;St<Y.locationSize;St++)H(Y.location+St,pt/Y.locationSize,zt,ct,pt*Ct,pt/Y.locationSize*St*Ct,ze)}}else if(_!==void 0){const ct=_[g];if(ct!==void 0)switch(ct.length){case 2:r.vertexAttrib2fv(Y.location,ct);break;case 3:r.vertexAttrib3fv(Y.location,ct);break;case 4:r.vertexAttrib4fv(Y.location,ct);break;default:r.vertexAttrib1fv(Y.location,ct)}}}}L()}function m(){U();for(const V in i){const Z=i[V];for(const E in Z){const J=Z[E];for(const I in J)X(J[I].object),delete J[I];delete Z[E]}delete i[V]}}function A(V){if(i[V.id]===void 0)return;const Z=i[V.id];for(const E in Z){const J=Z[E];for(const I in J)X(J[I].object),delete J[I];delete Z[E]}delete i[V.id]}function q(V){for(const Z in i){const E=i[Z];if(E[V.id]===void 0)continue;const J=E[V.id];for(const I in J)X(J[I].object),delete J[I];delete E[V.id]}}function U(){O(),o=!0,P!==v&&(P=v,d(P.object))}function O(){v.geometry=null,v.program=null,v.wireframe=!1}return{setup:l,reset:U,resetDefaultState:O,dispose:m,releaseStatesOfGeometry:A,releaseStatesOfProgram:q,initAttributes:b,enableAttribute:x,disableUnusedAttributes:L}}function hu(r,t,e,n){const f=n.isWebGL2;let a;function s(P){a=P}function i(P,o){r.drawArrays(a,P,o),e.update(o,a,1)}function v(P,o,l){if(l===0)return;let c,d;if(f)c=r,d="drawArraysInstanced";else if(c=t.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",c===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}c[d](a,P,o,l),e.update(o,a,l)}this.setMode=s,this.render=i,this.renderInstances=v}function bu(r,t,e){let n;function f(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(H){if(H==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let i=e.precision!==void 0?e.precision:"highp";const v=a(i);v!==i&&(console.warn("THREE.WebGLRenderer:",i,"not supported, using",v,"instead."),i=v);const P=s||t.has("WEBGL_draw_buffers"),o=e.logarithmicDepthBuffer===!0,l=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),c=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),X=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),h=r.getParameter(r.MAX_VERTEX_ATTRIBS),u=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),z=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=c>0,x=s||t.has("OES_texture_float"),w=b&&x,L=s?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:P,getMaxAnisotropy:f,getMaxPrecision:a,precision:i,logarithmicDepthBuffer:o,maxTextures:l,maxVertexTextures:c,maxTextureSize:d,maxCubemapSize:X,maxAttributes:h,maxVertexUniforms:u,maxVaryings:p,maxFragmentUniforms:z,vertexTextures:b,floatFragmentTextures:x,floatVertexTextures:w,maxSamples:L}}function xu(r){const t=this;let e=null,n=0,f=!1,a=!1;const s=new en,i=new Ut,v={value:null,needsUpdate:!1};this.uniform=v,this.numPlanes=0,this.numIntersection=0,this.init=function(l,c){const d=l.length!==0||c||n!==0||f;return f=c,n=l.length,d},this.beginShadows=function(){a=!0,o(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(l,c){e=o(l,c,0)},this.setState=function(l,c,d){const X=l.clippingPlanes,h=l.clipIntersection,u=l.clipShadows,p=r.get(l);if(!f||X===null||X.length===0||a&&!u)a?o(null):P();else{const z=a?0:n,b=z*4;let x=p.clippingState||null;v.value=x,x=o(X,c,b,d);for(let w=0;w!==b;++w)x[w]=e[w];p.clippingState=x,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=z}};function P(){v.value!==e&&(v.value=e,v.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function o(l,c,d,X){const h=l!==null?l.length:0;let u=null;if(h!==0){if(u=v.value,X!==!0||u===null){const p=d+h*4,z=c.matrixWorldInverse;i.getNormalMatrix(z),(u===null||u.length<p)&&(u=new Float32Array(p));for(let b=0,x=d;b!==h;++b,x+=4)s.copy(l[b]).applyMatrix4(z,i),s.normal.toArray(u,x),u[x+3]=s.constant}v.value=u,v.needsUpdate=!0}return t.numPlanes=h,t.numIntersection=0,u}}function zu(r){let t=new WeakMap;function e(s,i){return i===oi?s.mapping=ar:i===li&&(s.mapping=sr),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const i=s.mapping;if(i===oi||i===li)if(t.has(s)){const v=t.get(s).texture;return e(v,s.mapping)}else{const v=s.image;if(v&&v.height>0){const P=new V9(v.height/2);return P.fromEquirectangularTexture(r,s),t.set(s,P),s.addEventListener("dispose",f),e(P.texture,s.mapping)}else return null}}return s}function f(s){const i=s.target;i.removeEventListener("dispose",f);const v=t.get(i);v!==void 0&&(t.delete(i),v.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}class Zi extends vo{constructor(t=-1,e=1,n=1,f=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=f,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,f,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=f,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,f=(this.top+this.bottom)/2;let a=n-t,s=n+t,i=f+e,v=f-e;if(this.view!==null&&this.view.enabled){const P=(this.right-this.left)/this.view.fullWidth/this.zoom,o=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=P*this.view.offsetX,s=a+P*this.view.width,i-=o*this.view.offsetY,v=i-o*this.view.height}this.projectionMatrix.makeOrthographic(a,s,i,v,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const $f=4,_8=[.125,.215,.35,.446,.526,.582],cf=20,Vs=new Zi,$8=new Dt;let qs=null;const of=(1+Math.sqrt(5))/2,Kf=1/of,tv=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,of,Kf),new W(0,of,-Kf),new W(Kf,0,of),new W(-Kf,0,of),new W(of,Kf,0),new W(-of,Kf,0)];class ev{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,f=100){qs=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,f,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qs),t.scissorTest=!1,ha(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ar||t.mapping===sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qs=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Se,minFilter:Se,generateMipmaps:!1,type:vr,format:Je,colorSpace:dn,depthBuffer:!1},f=nv(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nv(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wu(a)),this._blurMaterial=mu(a,t,e)}return f}_compileMaterial(t){const e=new Le(this._lodPlanes[0],t);this._renderer.compile(e,Vs)}_sceneToCubeUV(t,e,n,f){const i=new Te(90,1,e,n),v=[1,-1,1,1,1,1],P=[1,1,1,-1,-1,-1],o=this._renderer,l=o.autoClear,c=o.toneMapping;o.getClearColor($8),o.toneMapping=Yn,o.autoClear=!1;const d=new Cn({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),X=new Le(new hr,d);let h=!1;const u=t.background;u?u.isColor&&(d.color.copy(u),t.background=null,h=!0):(d.color.copy($8),h=!0);for(let p=0;p<6;p++){const z=p%3;z===0?(i.up.set(0,v[p],0),i.lookAt(P[p],0,0)):z===1?(i.up.set(0,0,v[p]),i.lookAt(0,P[p],0)):(i.up.set(0,v[p],0),i.lookAt(0,0,P[p]));const b=this._cubeSize;ha(f,z*b,p>2?b:0,b,b),o.setRenderTarget(f),h&&o.render(X,i),o.render(t,i)}X.geometry.dispose(),X.material.dispose(),o.toneMapping=c,o.autoClear=l,t.background=u}_textureToCubeUV(t,e){const n=this._renderer,f=t.mapping===ar||t.mapping===sr;f?(this._cubemapMaterial===null&&(this._cubemapMaterial=rv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fv());const a=f?this._cubemapMaterial:this._equirectMaterial,s=new Le(this._lodPlanes[0],a),i=a.uniforms;i.envMap.value=t;const v=this._cubeSize;ha(e,0,0,3*v,2*v),n.setRenderTarget(e),n.render(s,Vs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let f=1;f<this._lodPlanes.length;f++){const a=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),s=tv[(f-1)%tv.length];this._blur(t,f-1,f,a,s)}e.autoClear=n}_blur(t,e,n,f,a){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,f,"latitudinal",a),this._halfBlur(s,t,n,n,f,"longitudinal",a)}_halfBlur(t,e,n,f,a,s,i){const v=this._renderer,P=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const o=3,l=new Le(this._lodPlanes[f],P),c=P.uniforms,d=this._sizeLods[n]-1,X=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*cf-1),h=a/X,u=isFinite(a)?1+Math.floor(o*h):cf;u>cf&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${cf}`);const p=[];let z=0;for(let H=0;H<cf;++H){const N=H/h,m=Math.exp(-N*N/2);p.push(m),H===0?z+=m:H<u&&(z+=2*m)}for(let H=0;H<p.length;H++)p[H]=p[H]/z;c.envMap.value=t.texture,c.samples.value=u,c.weights.value=p,c.latitudinal.value=s==="latitudinal",i&&(c.poleAxis.value=i);const{_lodMax:b}=this;c.dTheta.value=X,c.mipInt.value=b-n;const x=this._sizeLods[f],w=3*x*(f>b-$f?f-b+$f:0),L=4*(this._cubeSize-x);ha(e,w,L,3*x,2*x),v.setRenderTarget(e),v.render(l,Vs)}}function wu(r){const t=[],e=[],n=[];let f=r;const a=r-$f+1+_8.length;for(let s=0;s<a;s++){const i=Math.pow(2,f);e.push(i);let v=1/i;s>r-$f?v=_8[s-r+$f-1]:s===0&&(v=0),n.push(v);const P=1/(i-2),o=-P,l=1+P,c=[o,o,l,o,l,l,o,o,l,l,o,l],d=6,X=6,h=3,u=2,p=1,z=new Float32Array(h*X*d),b=new Float32Array(u*X*d),x=new Float32Array(p*X*d);for(let L=0;L<d;L++){const H=L%3*2/3-1,N=L>2?0:-1,m=[H,N,0,H+2/3,N,0,H+2/3,N+1,0,H,N,0,H+2/3,N+1,0,H,N+1,0];z.set(m,h*X*L),b.set(c,u*X*L);const A=[L,L,L,L,L,L];x.set(A,p*X*L)}const w=new Ve;w.setAttribute("position",new le(z,h)),w.setAttribute("uv",new le(b,u)),w.setAttribute("faceIndex",new le(x,p)),t.push(w),f>$f&&f--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function nv(r,t,e){const n=new Bn(r,t,e);return n.texture.mapping=$a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ha(r,t,e,n,f){r.viewport.set(t,e,n,f),r.scissor.set(t,e,n,f)}function mu(r,t,e){const n=new Float32Array(cf),f=new W(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:cf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:f}},vertexShader:Mi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function fv(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function rv(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Mi(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hu(r){let t=new WeakMap,e=null;function n(i){if(i&&i.isTexture){const v=i.mapping,P=v===oi||v===li,o=v===ar||v===sr;if(P||o)if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let l=t.get(i);return e===null&&(e=new ev(r)),l=P?e.fromEquirectangular(i,l):e.fromCubemap(i,l),t.set(i,l),l.texture}else{if(t.has(i))return t.get(i).texture;{const l=i.image;if(P&&l&&l.height>0||o&&l&&f(l)){e===null&&(e=new ev(r));const c=P?e.fromEquirectangular(i):e.fromCubemap(i);return t.set(i,c),i.addEventListener("dispose",a),c.texture}else return null}}}return i}function f(i){let v=0;const P=6;for(let o=0;o<P;o++)i[o]!==void 0&&v++;return v===P}function a(i){const v=i.target;v.removeEventListener("dispose",a);const P=t.get(v);P!==void 0&&(t.delete(v),P.dispose())}function s(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:s}}function Au(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let f;switch(n){case"WEBGL_depth_texture":f=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":f=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":f=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":f=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:f=r.getExtension(n)}return t[n]=f,f}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const f=e(n);return f===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),f}}}function Tu(r,t,e,n){const f={},a=new WeakMap;function s(l){const c=l.target;c.index!==null&&t.remove(c.index);for(const X in c.attributes)t.remove(c.attributes[X]);for(const X in c.morphAttributes){const h=c.morphAttributes[X];for(let u=0,p=h.length;u<p;u++)t.remove(h[u])}c.removeEventListener("dispose",s),delete f[c.id];const d=a.get(c);d&&(t.remove(d),a.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,e.memory.geometries--}function i(l,c){return f[c.id]===!0||(c.addEventListener("dispose",s),f[c.id]=!0,e.memory.geometries++),c}function v(l){const c=l.attributes;for(const X in c)t.update(c[X],r.ARRAY_BUFFER);const d=l.morphAttributes;for(const X in d){const h=d[X];for(let u=0,p=h.length;u<p;u++)t.update(h[u],r.ARRAY_BUFFER)}}function P(l){const c=[],d=l.index,X=l.attributes.position;let h=0;if(d!==null){const z=d.array;h=d.version;for(let b=0,x=z.length;b<x;b+=3){const w=z[b+0],L=z[b+1],H=z[b+2];c.push(w,L,L,H,H,w)}}else if(X!==void 0){const z=X.array;h=X.version;for(let b=0,x=z.length/3-1;b<x;b+=3){const w=b+0,L=b+1,H=b+2;c.push(w,L,L,H,H,w)}}else return;const u=new($P(c)?ao:ro)(c,1);u.version=h;const p=a.get(l);p&&t.remove(p),a.set(l,u)}function o(l){const c=a.get(l);if(c){const d=l.index;d!==null&&c.version<d.version&&P(l)}else P(l);return a.get(l)}return{get:i,update:v,getWireframeAttribute:o}}function Lu(r,t,e,n){const f=n.isWebGL2;let a;function s(c){a=c}let i,v;function P(c){i=c.type,v=c.bytesPerElement}function o(c,d){r.drawElements(a,d,i,c*v),e.update(d,a,1)}function l(c,d,X){if(X===0)return;let h,u;if(f)h=r,u="drawElementsInstanced";else if(h=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[u](a,d,i,c*v,X),e.update(d,a,X)}this.setMode=s,this.setIndex=P,this.render=o,this.renderInstances=l}function ju(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,i){switch(e.calls++,s){case r.TRIANGLES:e.triangles+=i*(a/3);break;case r.LINES:e.lines+=i*(a/2);break;case r.LINE_STRIP:e.lines+=i*(a-1);break;case r.LINE_LOOP:e.lines+=i*a;break;case r.POINTS:e.points+=i*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function f(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:f,update:n}}function Wu(r,t){return r[0]-t[0]}function yu(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Nu(r,t,e){const n={},f=new Float32Array(8),a=new WeakMap,s=new Jt,i=[];for(let P=0;P<8;P++)i[P]=[P,0];function v(P,o,l){const c=P.morphTargetInfluences;if(t.isWebGL2===!0){const X=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=X!==void 0?X.length:0;let u=a.get(o);if(u===void 0||u.count!==h){let Z=function(){O.dispose(),a.delete(o),o.removeEventListener("dispose",Z)};var d=Z;u!==void 0&&u.texture.dispose();const b=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,w=o.morphAttributes.color!==void 0,L=o.morphAttributes.position||[],H=o.morphAttributes.normal||[],N=o.morphAttributes.color||[];let m=0;b===!0&&(m=1),x===!0&&(m=2),w===!0&&(m=3);let A=o.attributes.position.count*m,q=1;A>t.maxTextureSize&&(q=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const U=new Float32Array(A*q*4*h),O=new no(U,A,q,h);O.type=Wn,O.needsUpdate=!0;const V=m*4;for(let E=0;E<h;E++){const J=L[E],I=H[E],$=N[E],_=A*q*4*E;for(let g=0;g<J.count;g++){const Y=g*V;b===!0&&(s.fromBufferAttribute(J,g),U[_+Y+0]=s.x,U[_+Y+1]=s.y,U[_+Y+2]=s.z,U[_+Y+3]=0),x===!0&&(s.fromBufferAttribute(I,g),U[_+Y+4]=s.x,U[_+Y+5]=s.y,U[_+Y+6]=s.z,U[_+Y+7]=0),w===!0&&(s.fromBufferAttribute($,g),U[_+Y+8]=s.x,U[_+Y+9]=s.y,U[_+Y+10]=s.z,U[_+Y+11]=$.itemSize===4?s.w:1)}}u={count:h,texture:O,size:new ht(A,q)},a.set(o,u),o.addEventListener("dispose",Z)}let p=0;for(let b=0;b<c.length;b++)p+=c[b];const z=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",z),l.getUniforms().setValue(r,"morphTargetInfluences",c),l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}else{const X=c===void 0?0:c.length;let h=n[o.id];if(h===void 0||h.length!==X){h=[];for(let x=0;x<X;x++)h[x]=[x,0];n[o.id]=h}for(let x=0;x<X;x++){const w=h[x];w[0]=x,w[1]=c[x]}h.sort(yu);for(let x=0;x<8;x++)x<X&&h[x][1]?(i[x][0]=h[x][0],i[x][1]=h[x][1]):(i[x][0]=Number.MAX_SAFE_INTEGER,i[x][1]=0);i.sort(Wu);const u=o.morphAttributes.position,p=o.morphAttributes.normal;let z=0;for(let x=0;x<8;x++){const w=i[x],L=w[0],H=w[1];L!==Number.MAX_SAFE_INTEGER&&H?(u&&o.getAttribute("morphTarget"+x)!==u[L]&&o.setAttribute("morphTarget"+x,u[L]),p&&o.getAttribute("morphNormal"+x)!==p[L]&&o.setAttribute("morphNormal"+x,p[L]),f[x]=H,z+=H):(u&&o.hasAttribute("morphTarget"+x)===!0&&o.deleteAttribute("morphTarget"+x),p&&o.hasAttribute("morphNormal"+x)===!0&&o.deleteAttribute("morphNormal"+x),f[x]=0)}const b=o.morphTargetsRelative?1:1-z;l.getUniforms().setValue(r,"morphTargetBaseInfluence",b),l.getUniforms().setValue(r,"morphTargetInfluences",f)}}return{update:v}}function Du(r,t,e,n){let f=new WeakMap;function a(v){const P=n.render.frame,o=v.geometry,l=t.get(v,o);if(f.get(l)!==P&&(t.update(l),f.set(l,P)),v.isInstancedMesh&&(v.hasEventListener("dispose",i)===!1&&v.addEventListener("dispose",i),f.get(v)!==P&&(e.update(v.instanceMatrix,r.ARRAY_BUFFER),v.instanceColor!==null&&e.update(v.instanceColor,r.ARRAY_BUFFER),f.set(v,P))),v.isSkinnedMesh){const c=v.skeleton;f.get(c)!==P&&(c.update(),f.set(c,P))}return l}function s(){f=new WeakMap}function i(v){const P=v.target;P.removeEventListener("dispose",i),e.remove(P.instanceMatrix),P.instanceColor!==null&&e.remove(P.instanceColor)}return{update:a,dispose:s}}const lo=new we,co=new no,po=new x9,uo=new Po,av=[],sv=[],iv=new Float32Array(16),vv=new Float32Array(9),Pv=new Float32Array(4);function br(r,t,e){const n=r[0];if(n<=0||n>0)return r;const f=t*e;let a=av[f];if(a===void 0&&(a=new Float32Array(f),av[f]=a),t!==0){n.toArray(a,0);for(let s=1,i=0;s!==t;++s)i+=e,r[s].toArray(a,i)}return a}function ce(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function pe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function ns(r,t){let e=sv[t];e===void 0&&(e=new Int32Array(t),sv[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Ou(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Su(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;r.uniform2fv(this.addr,t),pe(e,t)}}function Vu(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ce(e,t))return;r.uniform3fv(this.addr,t),pe(e,t)}}function qu(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;r.uniform4fv(this.addr,t),pe(e,t)}}function Uu(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(ce(e,n))return;Pv.set(n),r.uniformMatrix2fv(this.addr,!1,Pv),pe(e,n)}}function Zu(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(ce(e,n))return;vv.set(n),r.uniformMatrix3fv(this.addr,!1,vv),pe(e,n)}}function Mu(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(ce(e,n))return;iv.set(n),r.uniformMatrix4fv(this.addr,!1,iv),pe(e,n)}}function Ku(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Ru(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;r.uniform2iv(this.addr,t),pe(e,t)}}function Fu(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;r.uniform3iv(this.addr,t),pe(e,t)}}function Gu(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;r.uniform4iv(this.addr,t),pe(e,t)}}function gu(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Cu(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;r.uniform2uiv(this.addr,t),pe(e,t)}}function Ju(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;r.uniform3uiv(this.addr,t),pe(e,t)}}function Eu(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;r.uniform4uiv(this.addr,t),pe(e,t)}}function Yu(r,t,e){const n=this.cache,f=e.allocateTextureUnit();n[0]!==f&&(r.uniform1i(this.addr,f),n[0]=f),e.setTexture2D(t||lo,f)}function ku(r,t,e){const n=this.cache,f=e.allocateTextureUnit();n[0]!==f&&(r.uniform1i(this.addr,f),n[0]=f),e.setTexture3D(t||po,f)}function Bu(r,t,e){const n=this.cache,f=e.allocateTextureUnit();n[0]!==f&&(r.uniform1i(this.addr,f),n[0]=f),e.setTextureCube(t||uo,f)}function Iu(r,t,e){const n=this.cache,f=e.allocateTextureUnit();n[0]!==f&&(r.uniform1i(this.addr,f),n[0]=f),e.setTexture2DArray(t||co,f)}function Qu(r){switch(r){case 5126:return Ou;case 35664:return Su;case 35665:return Vu;case 35666:return qu;case 35674:return Uu;case 35675:return Zu;case 35676:return Mu;case 5124:case 35670:return Ku;case 35667:case 35671:return Ru;case 35668:case 35672:return Fu;case 35669:case 35673:return Gu;case 5125:return gu;case 36294:return Cu;case 36295:return Ju;case 36296:return Eu;case 35678:case 36198:case 36298:case 36306:case 35682:return Yu;case 35679:case 36299:case 36307:return ku;case 35680:case 36300:case 36308:case 36293:return Bu;case 36289:case 36303:case 36311:case 36292:return Iu}}function _u(r,t){r.uniform1fv(this.addr,t)}function $u(r,t){const e=br(t,this.size,2);r.uniform2fv(this.addr,e)}function t1(r,t){const e=br(t,this.size,3);r.uniform3fv(this.addr,e)}function e1(r,t){const e=br(t,this.size,4);r.uniform4fv(this.addr,e)}function n1(r,t){const e=br(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function f1(r,t){const e=br(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function r1(r,t){const e=br(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function a1(r,t){r.uniform1iv(this.addr,t)}function s1(r,t){r.uniform2iv(this.addr,t)}function i1(r,t){r.uniform3iv(this.addr,t)}function v1(r,t){r.uniform4iv(this.addr,t)}function P1(r,t){r.uniform1uiv(this.addr,t)}function o1(r,t){r.uniform2uiv(this.addr,t)}function l1(r,t){r.uniform3uiv(this.addr,t)}function c1(r,t){r.uniform4uiv(this.addr,t)}function p1(r,t,e){const n=this.cache,f=t.length,a=ns(e,f);ce(n,a)||(r.uniform1iv(this.addr,a),pe(n,a));for(let s=0;s!==f;++s)e.setTexture2D(t[s]||lo,a[s])}function u1(r,t,e){const n=this.cache,f=t.length,a=ns(e,f);ce(n,a)||(r.uniform1iv(this.addr,a),pe(n,a));for(let s=0;s!==f;++s)e.setTexture3D(t[s]||po,a[s])}function d1(r,t,e){const n=this.cache,f=t.length,a=ns(e,f);ce(n,a)||(r.uniform1iv(this.addr,a),pe(n,a));for(let s=0;s!==f;++s)e.setTextureCube(t[s]||uo,a[s])}function X1(r,t,e){const n=this.cache,f=t.length,a=ns(e,f);ce(n,a)||(r.uniform1iv(this.addr,a),pe(n,a));for(let s=0;s!==f;++s)e.setTexture2DArray(t[s]||co,a[s])}function h1(r){switch(r){case 5126:return _u;case 35664:return $u;case 35665:return t1;case 35666:return e1;case 35674:return n1;case 35675:return f1;case 35676:return r1;case 5124:case 35670:return a1;case 35667:case 35671:return s1;case 35668:case 35672:return i1;case 35669:case 35673:return v1;case 5125:return P1;case 36294:return o1;case 36295:return l1;case 36296:return c1;case 35678:case 36198:case 36298:case 36306:case 35682:return p1;case 35679:case 36299:case 36307:return u1;case 35680:case 36300:case 36308:case 36293:return d1;case 36289:case 36303:case 36311:case 36292:return X1}}class b1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Qu(e.type)}}class x1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=h1(e.type)}}class z1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const f=this.seq;for(let a=0,s=f.length;a!==s;++a){const i=f[a];i.setValue(t,e[i.id],n)}}}const Us=/(\w+)(\])?(\[|\.)?/g;function ov(r,t){r.seq.push(t),r.map[t.id]=t}function w1(r,t,e){const n=r.name,f=n.length;for(Us.lastIndex=0;;){const a=Us.exec(n),s=Us.lastIndex;let i=a[1];const v=a[2]==="]",P=a[3];if(v&&(i=i|0),P===void 0||P==="["&&s+2===f){ov(e,P===void 0?new b1(i,r,t):new x1(i,r,t));break}else{let l=e.map[i];l===void 0&&(l=new z1(i),ov(e,l)),e=l}}}class Ca{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let f=0;f<n;++f){const a=t.getActiveUniform(e,f),s=t.getUniformLocation(e,a.name);w1(a,s,this)}}setValue(t,e,n,f){const a=this.map[e];a!==void 0&&a.setValue(t,n,f)}setOptional(t,e,n){const f=e[n];f!==void 0&&this.setValue(t,n,f)}static upload(t,e,n,f){for(let a=0,s=e.length;a!==s;++a){const i=e[a],v=n[i.id];v.needsUpdate!==!1&&i.setValue(t,v.value,f)}}static seqWithValue(t,e){const n=[];for(let f=0,a=t.length;f!==a;++f){const s=t[f];s.id in e&&n.push(s)}return n}}function lv(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}let m1=0;function H1(r,t){const e=r.split(`
`),n=[],f=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let s=f;s<a;s++){const i=s+1;n.push(`${i===t?">":" "} ${i}: ${e[s]}`)}return n.join(`
`)}function A1(r){switch(r){case dn:return["Linear","( value )"];case Ht:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function cv(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),f=r.getShaderInfoLog(t).trim();if(n&&f==="")return"";const a=/ERROR: 0:(\d+)/.exec(f);if(a){const s=parseInt(a[1]);return e.toUpperCase()+`

`+f+`

`+H1(r.getShaderSource(t),s)}else return f}function T1(r,t){const e=A1(t);return"vec4 "+r+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function L1(r,t){let e;switch(t){case Al:e="Linear";break;case Tl:e="Reinhard";break;case Ll:e="OptimizedCineon";break;case MP:e="ACESFilmic";break;case jl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function j1(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Rr).join(`
`)}function W1(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function y1(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let f=0;f<n;f++){const a=r.getActiveAttrib(t,f),s=a.name;let i=1;a.type===r.FLOAT_MAT2&&(i=2),a.type===r.FLOAT_MAT3&&(i=3),a.type===r.FLOAT_MAT4&&(i=4),e[s]={type:a.type,location:r.getAttribLocation(t,s),locationSize:i}}return e}function Rr(r){return r!==""}function pv(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const N1=/^[ \t]*#include +<([\w\d./]+)>/gm;function hi(r){return r.replace(N1,O1)}const D1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function O1(r,t){let e=qt[t];if(e===void 0){const n=D1.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return hi(e)}const S1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dv(r){return r.replace(S1,V1)}function V1(r,t,e,n){let f="";for(let a=parseInt(t);a<parseInt(e);a++)f+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return f}function Xv(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function q1(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===VP?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===nl?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function U1(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ar:case sr:t="ENVMAP_TYPE_CUBE";break;case $a:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Z1(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case sr:t="ENVMAP_MODE_REFRACTION";break}return t}function M1(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ZP:t="ENVMAP_BLENDING_MULTIPLY";break;case ml:t="ENVMAP_BLENDING_MIX";break;case Hl:t="ENVMAP_BLENDING_ADD";break}return t}function K1(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function R1(r,t,e,n){const f=r.getContext(),a=e.defines;let s=e.vertexShader,i=e.fragmentShader;const v=q1(e),P=U1(e),o=Z1(e),l=M1(e),c=K1(e),d=e.isWebGL2?"":j1(e),X=W1(a),h=f.createProgram();let u,p,z=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,X].filter(Rr).join(`
`),u.length>0&&(u+=`
`),p=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,X].filter(Rr).join(`
`),p.length>0&&(p+=`
`)):(u=[Xv(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,X,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+o:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+v:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),p=[d,Xv(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,X,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+P:"",e.envMap?"#define "+o:"",e.envMap?"#define "+l:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+v:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Yn?L1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,T1("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rr).join(`
`)),s=hi(s),s=pv(s,e),s=uv(s,e),i=hi(i),i=pv(i,e),i=uv(i,e),s=dv(s),i=dv(i),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,u=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,p=["#define varying in",e.glslVersion===q8?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===q8?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=z+u+s,x=z+p+i,w=lv(f,f.VERTEX_SHADER,b),L=lv(f,f.FRAGMENT_SHADER,x);if(f.attachShader(h,w),f.attachShader(h,L),e.index0AttributeName!==void 0?f.bindAttribLocation(h,0,e.index0AttributeName):e.morphTargets===!0&&f.bindAttribLocation(h,0,"position"),f.linkProgram(h),r.debug.checkShaderErrors){const m=f.getProgramInfoLog(h).trim(),A=f.getShaderInfoLog(w).trim(),q=f.getShaderInfoLog(L).trim();let U=!0,O=!0;if(f.getProgramParameter(h,f.LINK_STATUS)===!1)if(U=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(f,h,w,L);else{const V=cv(f,w,"vertex"),Z=cv(f,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+f.getError()+" - VALIDATE_STATUS "+f.getProgramParameter(h,f.VALIDATE_STATUS)+`

Program Info Log: `+m+`
`+V+`
`+Z)}else m!==""?console.warn("THREE.WebGLProgram: Program Info Log:",m):(A===""||q==="")&&(O=!1);O&&(this.diagnostics={runnable:U,programLog:m,vertexShader:{log:A,prefix:u},fragmentShader:{log:q,prefix:p}})}f.deleteShader(w),f.deleteShader(L);let H;this.getUniforms=function(){return H===void 0&&(H=new Ca(f,h)),H};let N;return this.getAttributes=function(){return N===void 0&&(N=y1(f,h)),N},this.destroy=function(){n.releaseStatesOfProgram(this),f.deleteProgram(h),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=m1++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=w,this.fragmentShader=L,this}let F1=0;class G1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,f=this._getShaderStage(e),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(f)===!1&&(s.add(f),f.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new g1(t),e.set(t,n)),n}}class g1{constructor(t){this.id=F1++,this.code=t,this.usedTimes=0}}function C1(r,t,e,n,f,a,s){const i=new qi,v=new G1,P=[],o=f.isWebGL2,l=f.logarithmicDepthBuffer,c=f.vertexTextures;let d=f.precision;const X={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(m){return m===0?"uv":`uv${m}`}function u(m,A,q,U,O){const V=U.fog,Z=O.geometry,E=m.isMeshStandardMaterial?U.environment:null,J=(m.isMeshStandardMaterial?e:t).get(m.envMap||E),I=J&&J.mapping===$a?J.image.height:null,$=X[m.type];m.precision!==null&&(d=f.getMaxPrecision(m.precision),d!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",d,"instead."));const _=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,g=_!==void 0?_.length:0;let Y=0;Z.morphAttributes.position!==void 0&&(Y=1),Z.morphAttributes.normal!==void 0&&(Y=2),Z.morphAttributes.color!==void 0&&(Y=3);let lt,ct,pt,xt;if($){const Qt=pn[$];lt=Qt.vertexShader,ct=Qt.fragmentShader}else lt=m.vertexShader,ct=m.fragmentShader,v.update(m),pt=v.getVertexShaderID(m),xt=v.getFragmentShaderID(m);const Wt=r.getRenderTarget(),zt=O.isInstancedMesh===!0,Ct=!!m.map,ze=!!m.matcap,St=!!J,R=!!m.aoMap,Pe=!!m.lightMap,wt=!!m.bumpMap,Nt=!!m.normalMap,Tt=!!m.displacementMap,Bt=!!m.emissiveMap,Zt=!!m.metalnessMap,Ot=!!m.roughnessMap,gt=m.anisotropy>0,oe=m.clearcoat>0,de=m.iridescence>0,y=m.sheen>0,T=m.transmission>0,G=gt&&!!m.anisotropyMap,nt=oe&&!!m.clearcoatMap,tt=oe&&!!m.clearcoatNormalMap,ft=oe&&!!m.clearcoatRoughnessMap,Xt=de&&!!m.iridescenceMap,rt=de&&!!m.iridescenceThicknessMap,C=y&&!!m.sheenColorMap,D=y&&!!m.sheenRoughnessMap,Q=!!m.specularMap,ot=!!m.specularColorMap,at=!!m.specularIntensityMap,Pt=T&&!!m.transmissionMap,yt=T&&!!m.thicknessMap,Ft=!!m.gradientMap,S=!!m.alphaMap,it=m.alphaTest>0,F=!!m.alphaHash,et=!!m.extensions,vt=!!Z.attributes.uv1,Mt=!!Z.attributes.uv2,Et=!!Z.attributes.uv3;let It=Yn;return m.toneMapped&&(Wt===null||Wt.isXRRenderTarget===!0)&&(It=r.toneMapping),{isWebGL2:o,shaderID:$,shaderType:m.type,shaderName:m.name,vertexShader:lt,fragmentShader:ct,defines:m.defines,customVertexShaderID:pt,customFragmentShaderID:xt,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:d,instancing:zt,instancingColor:zt&&O.instanceColor!==null,supportsVertexTextures:c,outputColorSpace:Wt===null?r.outputColorSpace:Wt.isXRRenderTarget===!0?Wt.texture.colorSpace:dn,map:Ct,matcap:ze,envMap:St,envMapMode:St&&J.mapping,envMapCubeUVHeight:I,aoMap:R,lightMap:Pe,bumpMap:wt,normalMap:Nt,displacementMap:c&&Tt,emissiveMap:Bt,normalMapObjectSpace:Nt&&m.normalMapType===Fl,normalMapTangentSpace:Nt&&m.normalMapType===BP,metalnessMap:Zt,roughnessMap:Ot,anisotropy:gt,anisotropyMap:G,clearcoat:oe,clearcoatMap:nt,clearcoatNormalMap:tt,clearcoatRoughnessMap:ft,iridescence:de,iridescenceMap:Xt,iridescenceThicknessMap:rt,sheen:y,sheenColorMap:C,sheenRoughnessMap:D,specularMap:Q,specularColorMap:ot,specularIntensityMap:at,transmission:T,transmissionMap:Pt,thicknessMap:yt,gradientMap:Ft,opaque:m.transparent===!1&&m.blending===nr,alphaMap:S,alphaTest:it,alphaHash:F,combine:m.combine,mapUv:Ct&&h(m.map.channel),aoMapUv:R&&h(m.aoMap.channel),lightMapUv:Pe&&h(m.lightMap.channel),bumpMapUv:wt&&h(m.bumpMap.channel),normalMapUv:Nt&&h(m.normalMap.channel),displacementMapUv:Tt&&h(m.displacementMap.channel),emissiveMapUv:Bt&&h(m.emissiveMap.channel),metalnessMapUv:Zt&&h(m.metalnessMap.channel),roughnessMapUv:Ot&&h(m.roughnessMap.channel),anisotropyMapUv:G&&h(m.anisotropyMap.channel),clearcoatMapUv:nt&&h(m.clearcoatMap.channel),clearcoatNormalMapUv:tt&&h(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&h(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&h(m.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&h(m.iridescenceThicknessMap.channel),sheenColorMapUv:C&&h(m.sheenColorMap.channel),sheenRoughnessMapUv:D&&h(m.sheenRoughnessMap.channel),specularMapUv:Q&&h(m.specularMap.channel),specularColorMapUv:ot&&h(m.specularColorMap.channel),specularIntensityMapUv:at&&h(m.specularIntensityMap.channel),transmissionMapUv:Pt&&h(m.transmissionMap.channel),thicknessMapUv:yt&&h(m.thicknessMap.channel),alphaMapUv:S&&h(m.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Nt||gt),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,vertexUv1s:vt,vertexUv2s:Mt,vertexUv3s:Et,pointsUvs:O.isPoints===!0&&!!Z.attributes.uv&&(Ct||S),fog:!!V,useFog:m.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:l,skinning:O.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:g,morphTextureStride:Y,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&q.length>0,shadowMapType:r.shadowMap.type,toneMapping:It,useLegacyLights:r._useLegacyLights,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===nn,flipSided:m.side===De,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionDerivatives:et&&m.extensions.derivatives===!0,extensionFragDepth:et&&m.extensions.fragDepth===!0,extensionDrawBuffers:et&&m.extensions.drawBuffers===!0,extensionShaderTextureLOD:et&&m.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:o||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:o||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:o||n.has("EXT_shader_texture_lod"),customProgramCacheKey:m.customProgramCacheKey()}}function p(m){const A=[];if(m.shaderID?A.push(m.shaderID):(A.push(m.customVertexShaderID),A.push(m.customFragmentShaderID)),m.defines!==void 0)for(const q in m.defines)A.push(q),A.push(m.defines[q]);return m.isRawShaderMaterial===!1&&(z(A,m),b(A,m),A.push(r.outputColorSpace)),A.push(m.customProgramCacheKey),A.join()}function z(m,A){m.push(A.precision),m.push(A.outputColorSpace),m.push(A.envMapMode),m.push(A.envMapCubeUVHeight),m.push(A.mapUv),m.push(A.alphaMapUv),m.push(A.lightMapUv),m.push(A.aoMapUv),m.push(A.bumpMapUv),m.push(A.normalMapUv),m.push(A.displacementMapUv),m.push(A.emissiveMapUv),m.push(A.metalnessMapUv),m.push(A.roughnessMapUv),m.push(A.anisotropyMapUv),m.push(A.clearcoatMapUv),m.push(A.clearcoatNormalMapUv),m.push(A.clearcoatRoughnessMapUv),m.push(A.iridescenceMapUv),m.push(A.iridescenceThicknessMapUv),m.push(A.sheenColorMapUv),m.push(A.sheenRoughnessMapUv),m.push(A.specularMapUv),m.push(A.specularColorMapUv),m.push(A.specularIntensityMapUv),m.push(A.transmissionMapUv),m.push(A.thicknessMapUv),m.push(A.combine),m.push(A.fogExp2),m.push(A.sizeAttenuation),m.push(A.morphTargetsCount),m.push(A.morphAttributeCount),m.push(A.numDirLights),m.push(A.numPointLights),m.push(A.numSpotLights),m.push(A.numSpotLightMaps),m.push(A.numHemiLights),m.push(A.numRectAreaLights),m.push(A.numDirLightShadows),m.push(A.numPointLightShadows),m.push(A.numSpotLightShadows),m.push(A.numSpotLightShadowsWithMaps),m.push(A.shadowMapType),m.push(A.toneMapping),m.push(A.numClippingPlanes),m.push(A.numClipIntersection),m.push(A.depthPacking)}function b(m,A){i.disableAll(),A.isWebGL2&&i.enable(0),A.supportsVertexTextures&&i.enable(1),A.instancing&&i.enable(2),A.instancingColor&&i.enable(3),A.matcap&&i.enable(4),A.envMap&&i.enable(5),A.normalMapObjectSpace&&i.enable(6),A.normalMapTangentSpace&&i.enable(7),A.clearcoat&&i.enable(8),A.iridescence&&i.enable(9),A.alphaTest&&i.enable(10),A.vertexColors&&i.enable(11),A.vertexAlphas&&i.enable(12),A.vertexUv1s&&i.enable(13),A.vertexUv2s&&i.enable(14),A.vertexUv3s&&i.enable(15),A.vertexTangents&&i.enable(16),A.anisotropy&&i.enable(17),m.push(i.mask),i.disableAll(),A.fog&&i.enable(0),A.useFog&&i.enable(1),A.flatShading&&i.enable(2),A.logarithmicDepthBuffer&&i.enable(3),A.skinning&&i.enable(4),A.morphTargets&&i.enable(5),A.morphNormals&&i.enable(6),A.morphColors&&i.enable(7),A.premultipliedAlpha&&i.enable(8),A.shadowMapEnabled&&i.enable(9),A.useLegacyLights&&i.enable(10),A.doubleSided&&i.enable(11),A.flipSided&&i.enable(12),A.useDepthPacking&&i.enable(13),A.dithering&&i.enable(14),A.transmission&&i.enable(15),A.sheen&&i.enable(16),A.opaque&&i.enable(17),A.pointsUvs&&i.enable(18),m.push(i.mask)}function x(m){const A=X[m.type];let q;if(A){const U=pn[A];q=io.clone(U.uniforms)}else q=m.uniforms;return q}function w(m,A){let q;for(let U=0,O=P.length;U<O;U++){const V=P[U];if(V.cacheKey===A){q=V,++q.usedTimes;break}}return q===void 0&&(q=new R1(r,A,m,a),P.push(q)),q}function L(m){if(--m.usedTimes===0){const A=P.indexOf(m);P[A]=P[P.length-1],P.pop(),m.destroy()}}function H(m){v.remove(m)}function N(){v.dispose()}return{getParameters:u,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:L,releaseShaderCache:H,programs:P,dispose:N}}function J1(){let r=new WeakMap;function t(a){let s=r.get(a);return s===void 0&&(s={},r.set(a,s)),s}function e(a){r.delete(a)}function n(a,s,i){r.get(a)[s]=i}function f(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:f}}function E1(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function hv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function bv(){const r=[];let t=0;const e=[],n=[],f=[];function a(){t=0,e.length=0,n.length=0,f.length=0}function s(l,c,d,X,h,u){let p=r[t];return p===void 0?(p={id:l.id,object:l,geometry:c,material:d,groupOrder:X,renderOrder:l.renderOrder,z:h,group:u},r[t]=p):(p.id=l.id,p.object=l,p.geometry=c,p.material=d,p.groupOrder=X,p.renderOrder=l.renderOrder,p.z=h,p.group=u),t++,p}function i(l,c,d,X,h,u){const p=s(l,c,d,X,h,u);d.transmission>0?n.push(p):d.transparent===!0?f.push(p):e.push(p)}function v(l,c,d,X,h,u){const p=s(l,c,d,X,h,u);d.transmission>0?n.unshift(p):d.transparent===!0?f.unshift(p):e.unshift(p)}function P(l,c){e.length>1&&e.sort(l||E1),n.length>1&&n.sort(c||hv),f.length>1&&f.sort(c||hv)}function o(){for(let l=t,c=r.length;l<c;l++){const d=r[l];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:f,init:a,push:i,unshift:v,finish:o,sort:P}}function Y1(){let r=new WeakMap;function t(n,f){const a=r.get(n);let s;return a===void 0?(s=new bv,r.set(n,[s])):f>=a.length?(s=new bv,a.push(s)):s=a[f],s}function e(){r=new WeakMap}return{get:t,dispose:e}}function k1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new W,color:new Dt};break;case"SpotLight":e={position:new W,direction:new W,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new W,halfWidth:new W,halfHeight:new W};break}return r[t.id]=e,e}}}function B1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let I1=0;function Q1(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function _1(r,t){const e=new k1,n=B1(),f={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let o=0;o<9;o++)f.probe.push(new W);const a=new W,s=new bt,i=new bt;function v(o,l){let c=0,d=0,X=0;for(let q=0;q<9;q++)f.probe[q].set(0,0,0);let h=0,u=0,p=0,z=0,b=0,x=0,w=0,L=0,H=0,N=0;o.sort(Q1);const m=l===!0?Math.PI:1;for(let q=0,U=o.length;q<U;q++){const O=o[q],V=O.color,Z=O.intensity,E=O.distance,J=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)c+=V.r*Z*m,d+=V.g*Z*m,X+=V.b*Z*m;else if(O.isLightProbe)for(let I=0;I<9;I++)f.probe[I].addScaledVector(O.sh.coefficients[I],Z);else if(O.isDirectionalLight){const I=e.get(O);if(I.color.copy(O.color).multiplyScalar(O.intensity*m),O.castShadow){const $=O.shadow,_=n.get(O);_.shadowBias=$.bias,_.shadowNormalBias=$.normalBias,_.shadowRadius=$.radius,_.shadowMapSize=$.mapSize,f.directionalShadow[h]=_,f.directionalShadowMap[h]=J,f.directionalShadowMatrix[h]=O.shadow.matrix,x++}f.directional[h]=I,h++}else if(O.isSpotLight){const I=e.get(O);I.position.setFromMatrixPosition(O.matrixWorld),I.color.copy(V).multiplyScalar(Z*m),I.distance=E,I.coneCos=Math.cos(O.angle),I.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),I.decay=O.decay,f.spot[p]=I;const $=O.shadow;if(O.map&&(f.spotLightMap[H]=O.map,H++,$.updateMatrices(O),O.castShadow&&N++),f.spotLightMatrix[p]=$.matrix,O.castShadow){const _=n.get(O);_.shadowBias=$.bias,_.shadowNormalBias=$.normalBias,_.shadowRadius=$.radius,_.shadowMapSize=$.mapSize,f.spotShadow[p]=_,f.spotShadowMap[p]=J,L++}p++}else if(O.isRectAreaLight){const I=e.get(O);I.color.copy(V).multiplyScalar(Z),I.halfWidth.set(O.width*.5,0,0),I.halfHeight.set(0,O.height*.5,0),f.rectArea[z]=I,z++}else if(O.isPointLight){const I=e.get(O);if(I.color.copy(O.color).multiplyScalar(O.intensity*m),I.distance=O.distance,I.decay=O.decay,O.castShadow){const $=O.shadow,_=n.get(O);_.shadowBias=$.bias,_.shadowNormalBias=$.normalBias,_.shadowRadius=$.radius,_.shadowMapSize=$.mapSize,_.shadowCameraNear=$.camera.near,_.shadowCameraFar=$.camera.far,f.pointShadow[u]=_,f.pointShadowMap[u]=J,f.pointShadowMatrix[u]=O.shadow.matrix,w++}f.point[u]=I,u++}else if(O.isHemisphereLight){const I=e.get(O);I.skyColor.copy(O.color).multiplyScalar(Z*m),I.groundColor.copy(O.groundColor).multiplyScalar(Z*m),f.hemi[b]=I,b++}}z>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(f.rectAreaLTC1=st.LTC_FLOAT_1,f.rectAreaLTC2=st.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(f.rectAreaLTC1=st.LTC_HALF_1,f.rectAreaLTC2=st.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),f.ambient[0]=c,f.ambient[1]=d,f.ambient[2]=X;const A=f.hash;(A.directionalLength!==h||A.pointLength!==u||A.spotLength!==p||A.rectAreaLength!==z||A.hemiLength!==b||A.numDirectionalShadows!==x||A.numPointShadows!==w||A.numSpotShadows!==L||A.numSpotMaps!==H)&&(f.directional.length=h,f.spot.length=p,f.rectArea.length=z,f.point.length=u,f.hemi.length=b,f.directionalShadow.length=x,f.directionalShadowMap.length=x,f.pointShadow.length=w,f.pointShadowMap.length=w,f.spotShadow.length=L,f.spotShadowMap.length=L,f.directionalShadowMatrix.length=x,f.pointShadowMatrix.length=w,f.spotLightMatrix.length=L+H-N,f.spotLightMap.length=H,f.numSpotLightShadowsWithMaps=N,A.directionalLength=h,A.pointLength=u,A.spotLength=p,A.rectAreaLength=z,A.hemiLength=b,A.numDirectionalShadows=x,A.numPointShadows=w,A.numSpotShadows=L,A.numSpotMaps=H,f.version=I1++)}function P(o,l){let c=0,d=0,X=0,h=0,u=0;const p=l.matrixWorldInverse;for(let z=0,b=o.length;z<b;z++){const x=o[z];if(x.isDirectionalLight){const w=f.directional[c];w.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(p),c++}else if(x.isSpotLight){const w=f.spot[X];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(p),X++}else if(x.isRectAreaLight){const w=f.rectArea[h];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),i.identity(),s.copy(x.matrixWorld),s.premultiply(p),i.extractRotation(s),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(i),w.halfHeight.applyMatrix4(i),h++}else if(x.isPointLight){const w=f.point[d];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const w=f.hemi[u];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(p),u++}}}return{setup:v,setupView:P,state:f}}function xv(r,t){const e=new _1(r,t),n=[],f=[];function a(){n.length=0,f.length=0}function s(l){n.push(l)}function i(l){f.push(l)}function v(l){e.setup(n,l)}function P(l){e.setupView(n,l)}return{init:a,state:{lightsArray:n,shadowsArray:f,lights:e},setupLights:v,setupLightsView:P,pushLight:s,pushShadow:i}}function $1(r,t){let e=new WeakMap;function n(a,s=0){const i=e.get(a);let v;return i===void 0?(v=new xv(r,t),e.set(a,[v])):s>=i.length?(v=new xv(r,t),i.push(v)):v=i[s],v}function f(){e=new WeakMap}return{get:n,dispose:f}}class td extends rn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ed extends rn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const nd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rd(r,t,e){let n=new Ui;const f=new ht,a=new ht,s=new Jt,i=new td({depthPacking:Rl}),v=new ed,P={},o=e.maxTextureSize,l={[sn]:De,[De]:sn,[nn]:nn},c=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:nd,fragmentShader:fd}),d=c.clone();d.defines.HORIZONTAL_PASS=1;const X=new Ve;X.setAttribute("position",new le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new Le(X,c),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=VP;let p=this.type;this.render=function(w,L,H){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||w.length===0)return;const N=r.getRenderTarget(),m=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),q=r.state;q.setBlending(En),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const U=p!==Ln&&this.type===Ln,O=p===Ln&&this.type!==Ln;for(let V=0,Z=w.length;V<Z;V++){const E=w[V],J=E.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",E,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;f.copy(J.mapSize);const I=J.getFrameExtents();if(f.multiply(I),a.copy(J.mapSize),(f.x>o||f.y>o)&&(f.x>o&&(a.x=Math.floor(o/I.x),f.x=a.x*I.x,J.mapSize.x=a.x),f.y>o&&(a.y=Math.floor(o/I.y),f.y=a.y*I.y,J.mapSize.y=a.y)),J.map===null||U===!0||O===!0){const _=this.type!==Ln?{minFilter:he,magFilter:he}:{};J.map!==null&&J.map.dispose(),J.map=new Bn(f.x,f.y,_),J.map.texture.name=E.name+".shadowMap",J.camera.updateProjectionMatrix()}r.setRenderTarget(J.map),r.clear();const $=J.getViewportCount();for(let _=0;_<$;_++){const g=J.getViewport(_);s.set(a.x*g.x,a.y*g.y,a.x*g.z,a.y*g.w),q.viewport(s),J.updateMatrices(E,_),n=J.getFrustum(),x(L,H,J.camera,E,this.type)}J.isPointLightShadow!==!0&&this.type===Ln&&z(J,H),J.needsUpdate=!1}p=this.type,u.needsUpdate=!1,r.setRenderTarget(N,m,A)};function z(w,L){const H=t.update(h);c.defines.VSM_SAMPLES!==w.blurSamples&&(c.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,c.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Bn(f.x,f.y)),c.uniforms.shadow_pass.value=w.map.texture,c.uniforms.resolution.value=w.mapSize,c.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(L,null,H,c,h,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(L,null,H,d,h,null)}function b(w,L,H,N){let m=null;const A=H.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)m=A;else if(m=H.isPointLight===!0?v:i,r.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const q=m.uuid,U=L.uuid;let O=P[q];O===void 0&&(O={},P[q]=O);let V=O[U];V===void 0&&(V=m.clone(),O[U]=V),m=V}if(m.visible=L.visible,m.wireframe=L.wireframe,N===Ln?m.side=L.shadowSide!==null?L.shadowSide:L.side:m.side=L.shadowSide!==null?L.shadowSide:l[L.side],m.alphaMap=L.alphaMap,m.alphaTest=L.alphaTest,m.map=L.map,m.clipShadows=L.clipShadows,m.clippingPlanes=L.clippingPlanes,m.clipIntersection=L.clipIntersection,m.displacementMap=L.displacementMap,m.displacementScale=L.displacementScale,m.displacementBias=L.displacementBias,m.wireframeLinewidth=L.wireframeLinewidth,m.linewidth=L.linewidth,H.isPointLight===!0&&m.isMeshDistanceMaterial===!0){const q=r.properties.get(m);q.light=H}return m}function x(w,L,H,N,m){if(w.visible===!1)return;if(w.layers.test(L.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&m===Ln)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld);const U=t.update(w),O=w.material;if(Array.isArray(O)){const V=U.groups;for(let Z=0,E=V.length;Z<E;Z++){const J=V[Z],I=O[J.materialIndex];if(I&&I.visible){const $=b(w,I,N,m);r.renderBufferDirect(H,null,U,$,w,J)}}}else if(O.visible){const V=b(w,O,N,m);r.renderBufferDirect(H,null,U,V,w,null)}}const q=w.children;for(let U=0,O=q.length;U<O;U++)x(q[U],L,H,N,m)}}function ad(r,t,e){const n=e.isWebGL2;function f(){let S=!1;const it=new Jt;let F=null;const et=new Jt(0,0,0,0);return{setMask:function(vt){F!==vt&&!S&&(r.colorMask(vt,vt,vt,vt),F=vt)},setLocked:function(vt){S=vt},setClear:function(vt,Mt,Et,It,Sn){Sn===!0&&(vt*=It,Mt*=It,Et*=It),it.set(vt,Mt,Et,It),et.equals(it)===!1&&(r.clearColor(vt,Mt,Et,It),et.copy(it))},reset:function(){S=!1,F=null,et.set(-1,0,0,0)}}}function a(){let S=!1,it=null,F=null,et=null;return{setTest:function(vt){vt?Wt(r.DEPTH_TEST):zt(r.DEPTH_TEST)},setMask:function(vt){it!==vt&&!S&&(r.depthMask(vt),it=vt)},setFunc:function(vt){if(F!==vt){switch(vt){case dl:r.depthFunc(r.NEVER);break;case Xl:r.depthFunc(r.ALWAYS);break;case hl:r.depthFunc(r.LESS);break;case Pi:r.depthFunc(r.LEQUAL);break;case bl:r.depthFunc(r.EQUAL);break;case xl:r.depthFunc(r.GEQUAL);break;case zl:r.depthFunc(r.GREATER);break;case wl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}F=vt}},setLocked:function(vt){S=vt},setClear:function(vt){et!==vt&&(r.clearDepth(vt),et=vt)},reset:function(){S=!1,it=null,F=null,et=null}}}function s(){let S=!1,it=null,F=null,et=null,vt=null,Mt=null,Et=null,It=null,Sn=null;return{setTest:function(Qt){S||(Qt?Wt(r.STENCIL_TEST):zt(r.STENCIL_TEST))},setMask:function(Qt){it!==Qt&&!S&&(r.stencilMask(Qt),it=Qt)},setFunc:function(Qt,ln,je){(F!==Qt||et!==ln||vt!==je)&&(r.stencilFunc(Qt,ln,je),F=Qt,et=ln,vt=je)},setOp:function(Qt,ln,je){(Mt!==Qt||Et!==ln||It!==je)&&(r.stencilOp(Qt,ln,je),Mt=Qt,Et=ln,It=je)},setLocked:function(Qt){S=Qt},setClear:function(Qt){Sn!==Qt&&(r.clearStencil(Qt),Sn=Qt)},reset:function(){S=!1,it=null,F=null,et=null,vt=null,Mt=null,Et=null,It=null,Sn=null}}}const i=new f,v=new a,P=new s,o=new WeakMap,l=new WeakMap;let c={},d={},X=new WeakMap,h=[],u=null,p=!1,z=null,b=null,x=null,w=null,L=null,H=null,N=null,m=!1,A=null,q=null,U=null,O=null,V=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let E=!1,J=0;const I=r.getParameter(r.VERSION);I.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(I)[1]),E=J>=1):I.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),E=J>=2);let $=null,_={};const g=r.getParameter(r.SCISSOR_BOX),Y=r.getParameter(r.VIEWPORT),lt=new Jt().fromArray(g),ct=new Jt().fromArray(Y);function pt(S,it,F,et){const vt=new Uint8Array(4),Mt=r.createTexture();r.bindTexture(S,Mt),r.texParameteri(S,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(S,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Et=0;Et<F;Et++)n&&(S===r.TEXTURE_3D||S===r.TEXTURE_2D_ARRAY)?r.texImage3D(it,0,r.RGBA,1,1,et,0,r.RGBA,r.UNSIGNED_BYTE,vt):r.texImage2D(it+Et,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,vt);return Mt}const xt={};xt[r.TEXTURE_2D]=pt(r.TEXTURE_2D,r.TEXTURE_2D,1),xt[r.TEXTURE_CUBE_MAP]=pt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(xt[r.TEXTURE_2D_ARRAY]=pt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xt[r.TEXTURE_3D]=pt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),i.setClear(0,0,0,1),v.setClear(1),P.setClear(0),Wt(r.DEPTH_TEST),v.setFunc(Pi),Tt(!1),Bt(f8),Wt(r.CULL_FACE),wt(En);function Wt(S){c[S]!==!0&&(r.enable(S),c[S]=!0)}function zt(S){c[S]!==!1&&(r.disable(S),c[S]=!1)}function Ct(S,it){return d[S]!==it?(r.bindFramebuffer(S,it),d[S]=it,n&&(S===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=it),S===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=it)),!0):!1}function ze(S,it){let F=h,et=!1;if(S)if(F=X.get(it),F===void 0&&(F=[],X.set(it,F)),S.isWebGLMultipleRenderTargets){const vt=S.texture;if(F.length!==vt.length||F[0]!==r.COLOR_ATTACHMENT0){for(let Mt=0,Et=vt.length;Mt<Et;Mt++)F[Mt]=r.COLOR_ATTACHMENT0+Mt;F.length=vt.length,et=!0}}else F[0]!==r.COLOR_ATTACHMENT0&&(F[0]=r.COLOR_ATTACHMENT0,et=!0);else F[0]!==r.BACK&&(F[0]=r.BACK,et=!0);et&&(e.isWebGL2?r.drawBuffers(F):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(F))}function St(S){return u!==S?(r.useProgram(S),u=S,!0):!1}const R={[_f]:r.FUNC_ADD,[rl]:r.FUNC_SUBTRACT,[al]:r.FUNC_REVERSE_SUBTRACT};if(n)R[i8]=r.MIN,R[v8]=r.MAX;else{const S=t.get("EXT_blend_minmax");S!==null&&(R[i8]=S.MIN_EXT,R[v8]=S.MAX_EXT)}const Pe={[sl]:r.ZERO,[il]:r.ONE,[vl]:r.SRC_COLOR,[qP]:r.SRC_ALPHA,[ul]:r.SRC_ALPHA_SATURATE,[cl]:r.DST_COLOR,[ol]:r.DST_ALPHA,[Pl]:r.ONE_MINUS_SRC_COLOR,[UP]:r.ONE_MINUS_SRC_ALPHA,[pl]:r.ONE_MINUS_DST_COLOR,[ll]:r.ONE_MINUS_DST_ALPHA};function wt(S,it,F,et,vt,Mt,Et,It){if(S===En){p===!0&&(zt(r.BLEND),p=!1);return}if(p===!1&&(Wt(r.BLEND),p=!0),S!==fl){if(S!==z||It!==m){if((b!==_f||L!==_f)&&(r.blendEquation(r.FUNC_ADD),b=_f,L=_f),It)switch(S){case nr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case r8:r.blendFunc(r.ONE,r.ONE);break;case a8:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case s8:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case nr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case r8:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case a8:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case s8:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}x=null,w=null,H=null,N=null,z=S,m=It}return}vt=vt||it,Mt=Mt||F,Et=Et||et,(it!==b||vt!==L)&&(r.blendEquationSeparate(R[it],R[vt]),b=it,L=vt),(F!==x||et!==w||Mt!==H||Et!==N)&&(r.blendFuncSeparate(Pe[F],Pe[et],Pe[Mt],Pe[Et]),x=F,w=et,H=Mt,N=Et),z=S,m=!1}function Nt(S,it){S.side===nn?zt(r.CULL_FACE):Wt(r.CULL_FACE);let F=S.side===De;it&&(F=!F),Tt(F),S.blending===nr&&S.transparent===!1?wt(En):wt(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.premultipliedAlpha),v.setFunc(S.depthFunc),v.setTest(S.depthTest),v.setMask(S.depthWrite),i.setMask(S.colorWrite);const et=S.stencilWrite;P.setTest(et),et&&(P.setMask(S.stencilWriteMask),P.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),P.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),Ot(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?Wt(r.SAMPLE_ALPHA_TO_COVERAGE):zt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(S){A!==S&&(S?r.frontFace(r.CW):r.frontFace(r.CCW),A=S)}function Bt(S){S!==tl?(Wt(r.CULL_FACE),S!==q&&(S===f8?r.cullFace(r.BACK):S===el?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):zt(r.CULL_FACE),q=S}function Zt(S){S!==U&&(E&&r.lineWidth(S),U=S)}function Ot(S,it,F){S?(Wt(r.POLYGON_OFFSET_FILL),(O!==it||V!==F)&&(r.polygonOffset(it,F),O=it,V=F)):zt(r.POLYGON_OFFSET_FILL)}function gt(S){S?Wt(r.SCISSOR_TEST):zt(r.SCISSOR_TEST)}function oe(S){S===void 0&&(S=r.TEXTURE0+Z-1),$!==S&&(r.activeTexture(S),$=S)}function de(S,it,F){F===void 0&&($===null?F=r.TEXTURE0+Z-1:F=$);let et=_[F];et===void 0&&(et={type:void 0,texture:void 0},_[F]=et),(et.type!==S||et.texture!==it)&&($!==F&&(r.activeTexture(F),$=F),r.bindTexture(S,it||xt[S]),et.type=S,et.texture=it)}function y(){const S=_[$];S!==void 0&&S.type!==void 0&&(r.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function T(){try{r.compressedTexImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function G(){try{r.compressedTexImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function nt(){try{r.texSubImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function tt(){try{r.texSubImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ft(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Xt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function rt(){try{r.texStorage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function C(){try{r.texStorage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function D(){try{r.texImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Q(){try{r.texImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ot(S){lt.equals(S)===!1&&(r.scissor(S.x,S.y,S.z,S.w),lt.copy(S))}function at(S){ct.equals(S)===!1&&(r.viewport(S.x,S.y,S.z,S.w),ct.copy(S))}function Pt(S,it){let F=l.get(it);F===void 0&&(F=new WeakMap,l.set(it,F));let et=F.get(S);et===void 0&&(et=r.getUniformBlockIndex(it,S.name),F.set(S,et))}function yt(S,it){const et=l.get(it).get(S);o.get(it)!==et&&(r.uniformBlockBinding(it,et,S.__bindingPointIndex),o.set(it,et))}function Ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},$=null,_={},d={},X=new WeakMap,h=[],u=null,p=!1,z=null,b=null,x=null,w=null,L=null,H=null,N=null,m=!1,A=null,q=null,U=null,O=null,V=null,lt.set(0,0,r.canvas.width,r.canvas.height),ct.set(0,0,r.canvas.width,r.canvas.height),i.reset(),v.reset(),P.reset()}return{buffers:{color:i,depth:v,stencil:P},enable:Wt,disable:zt,bindFramebuffer:Ct,drawBuffers:ze,useProgram:St,setBlending:wt,setMaterial:Nt,setFlipSided:Tt,setCullFace:Bt,setLineWidth:Zt,setPolygonOffset:Ot,setScissorTest:gt,activeTexture:oe,bindTexture:de,unbindTexture:y,compressedTexImage2D:T,compressedTexImage3D:G,texImage2D:D,texImage3D:Q,updateUBOMapping:Pt,uniformBlockBinding:yt,texStorage2D:rt,texStorage3D:C,texSubImage2D:nt,texSubImage3D:tt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Xt,scissor:ot,viewport:at,reset:Ft}}function sd(r,t,e,n,f,a,s){const i=f.isWebGL2,v=f.maxTextures,P=f.maxCubemapSize,o=f.maxTextureSize,l=f.maxSamples,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),X=new WeakMap;let h;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function z(y,T){return p?new OffscreenCanvas(y,T):Yr("canvas")}function b(y,T,G,nt){let tt=1;if((y.width>nt||y.height>nt)&&(tt=nt/Math.max(y.width,y.height)),tt<1||T===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const ft=T?Ba:Math.floor,Xt=ft(tt*y.width),rt=ft(tt*y.height);h===void 0&&(h=z(Xt,rt));const C=G?z(Xt,rt):h;return C.width=Xt,C.height=rt,C.getContext("2d").drawImage(y,0,0,Xt,rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+Xt+"x"+rt+")."),C}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function x(y){return Xi(y.width)&&Xi(y.height)}function w(y){return i?!1:y.wrapS!==Ce||y.wrapT!==Ce||y.minFilter!==he&&y.minFilter!==Se}function L(y,T){return y.generateMipmaps&&T&&y.minFilter!==he&&y.minFilter!==Se}function H(y){r.generateMipmap(y)}function N(y,T,G,nt,tt=!1){if(i===!1)return T;if(y!==null){if(r[y]!==void 0)return r[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let ft=T;return T===r.RED&&(G===r.FLOAT&&(ft=r.R32F),G===r.HALF_FLOAT&&(ft=r.R16F),G===r.UNSIGNED_BYTE&&(ft=r.R8)),T===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(ft=r.R8UI),G===r.UNSIGNED_SHORT&&(ft=r.R16UI),G===r.UNSIGNED_INT&&(ft=r.R32UI),G===r.BYTE&&(ft=r.R8I),G===r.SHORT&&(ft=r.R16I),G===r.INT&&(ft=r.R32I)),T===r.RG&&(G===r.FLOAT&&(ft=r.RG32F),G===r.HALF_FLOAT&&(ft=r.RG16F),G===r.UNSIGNED_BYTE&&(ft=r.RG8)),T===r.RGBA&&(G===r.FLOAT&&(ft=r.RGBA32F),G===r.HALF_FLOAT&&(ft=r.RGBA16F),G===r.UNSIGNED_BYTE&&(ft=nt===Ht&&tt===!1?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(ft=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(ft=r.RGB5_A1)),(ft===r.R16F||ft===r.R32F||ft===r.RG16F||ft===r.RG32F||ft===r.RGBA16F||ft===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function m(y,T,G){return L(y,G)===!0||y.isFramebufferTexture&&y.minFilter!==he&&y.minFilter!==Se?Math.log2(Math.max(T.width,T.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?T.mipmaps.length:1}function A(y){return y===he||y===ci||y===ga?r.NEAREST:r.LINEAR}function q(y){const T=y.target;T.removeEventListener("dispose",q),O(T),T.isVideoTexture&&X.delete(T)}function U(y){const T=y.target;T.removeEventListener("dispose",U),Z(T)}function O(y){const T=n.get(y);if(T.__webglInit===void 0)return;const G=y.source,nt=u.get(G);if(nt){const tt=nt[T.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&V(y),Object.keys(nt).length===0&&u.delete(G)}n.remove(y)}function V(y){const T=n.get(y);r.deleteTexture(T.__webglTexture);const G=y.source,nt=u.get(G);delete nt[T.__cacheKey],s.memory.textures--}function Z(y){const T=y.texture,G=n.get(y),nt=n.get(T);if(nt.__webglTexture!==void 0&&(r.deleteTexture(nt.__webglTexture),s.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(G.__webglFramebuffer[tt]))for(let ft=0;ft<G.__webglFramebuffer[tt].length;ft++)r.deleteFramebuffer(G.__webglFramebuffer[tt][ft]);else r.deleteFramebuffer(G.__webglFramebuffer[tt]);G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer[tt])}else{if(Array.isArray(G.__webglFramebuffer))for(let tt=0;tt<G.__webglFramebuffer.length;tt++)r.deleteFramebuffer(G.__webglFramebuffer[tt]);else r.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&r.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let tt=0;tt<G.__webglColorRenderbuffer.length;tt++)G.__webglColorRenderbuffer[tt]&&r.deleteRenderbuffer(G.__webglColorRenderbuffer[tt]);G.__webglDepthRenderbuffer&&r.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let tt=0,ft=T.length;tt<ft;tt++){const Xt=n.get(T[tt]);Xt.__webglTexture&&(r.deleteTexture(Xt.__webglTexture),s.memory.textures--),n.remove(T[tt])}n.remove(T),n.remove(y)}let E=0;function J(){E=0}function I(){const y=E;return y>=v&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+v),E+=1,y}function $(y){const T=[];return T.push(y.wrapS),T.push(y.wrapT),T.push(y.wrapR||0),T.push(y.magFilter),T.push(y.minFilter),T.push(y.anisotropy),T.push(y.internalFormat),T.push(y.format),T.push(y.type),T.push(y.generateMipmaps),T.push(y.premultiplyAlpha),T.push(y.flipY),T.push(y.unpackAlignment),T.push(y.colorSpace),T.join()}function _(y,T){const G=n.get(y);if(y.isVideoTexture&&oe(y),y.isRenderTargetTexture===!1&&y.version>0&&G.__version!==y.version){const nt=y.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(G,y,T);return}}e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+T)}function g(y,T){const G=n.get(y);if(y.version>0&&G.__version!==y.version){Ct(G,y,T);return}e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+T)}function Y(y,T){const G=n.get(y);if(y.version>0&&G.__version!==y.version){Ct(G,y,T);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+T)}function lt(y,T){const G=n.get(y);if(y.version>0&&G.__version!==y.version){ze(G,y,T);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+T)}const ct={[ir]:r.REPEAT,[Ce]:r.CLAMP_TO_EDGE,[Ya]:r.MIRRORED_REPEAT},pt={[he]:r.NEAREST,[ci]:r.NEAREST_MIPMAP_NEAREST,[ga]:r.NEAREST_MIPMAP_LINEAR,[Se]:r.LINEAR,[RP]:r.LINEAR_MIPMAP_NEAREST,[bf]:r.LINEAR_MIPMAP_LINEAR},xt={[gl]:r.NEVER,[Il]:r.ALWAYS,[Cl]:r.LESS,[El]:r.LEQUAL,[Jl]:r.EQUAL,[Bl]:r.GEQUAL,[Yl]:r.GREATER,[kl]:r.NOTEQUAL};function Wt(y,T,G){if(G?(r.texParameteri(y,r.TEXTURE_WRAP_S,ct[T.wrapS]),r.texParameteri(y,r.TEXTURE_WRAP_T,ct[T.wrapT]),(y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY)&&r.texParameteri(y,r.TEXTURE_WRAP_R,ct[T.wrapR]),r.texParameteri(y,r.TEXTURE_MAG_FILTER,pt[T.magFilter]),r.texParameteri(y,r.TEXTURE_MIN_FILTER,pt[T.minFilter])):(r.texParameteri(y,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(y,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY)&&r.texParameteri(y,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(T.wrapS!==Ce||T.wrapT!==Ce)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(y,r.TEXTURE_MAG_FILTER,A(T.magFilter)),r.texParameteri(y,r.TEXTURE_MIN_FILTER,A(T.minFilter)),T.minFilter!==he&&T.minFilter!==Se&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(r.texParameteri(y,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(y,r.TEXTURE_COMPARE_FUNC,xt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const nt=t.get("EXT_texture_filter_anisotropic");if(T.magFilter===he||T.minFilter!==ga&&T.minFilter!==bf||T.type===Wn&&t.has("OES_texture_float_linear")===!1||i===!1&&T.type===vr&&t.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(r.texParameterf(y,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,f.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function zt(y,T){let G=!1;y.__webglInit===void 0&&(y.__webglInit=!0,T.addEventListener("dispose",q));const nt=T.source;let tt=u.get(nt);tt===void 0&&(tt={},u.set(nt,tt));const ft=$(T);if(ft!==y.__cacheKey){tt[ft]===void 0&&(tt[ft]={texture:r.createTexture(),usedTimes:0},s.memory.textures++,G=!0),tt[ft].usedTimes++;const Xt=tt[y.__cacheKey];Xt!==void 0&&(tt[y.__cacheKey].usedTimes--,Xt.usedTimes===0&&V(T)),y.__cacheKey=ft,y.__webglTexture=tt[ft].texture}return G}function Ct(y,T,G){let nt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(nt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(nt=r.TEXTURE_3D);const tt=zt(y,T),ft=T.source;e.bindTexture(nt,y.__webglTexture,r.TEXTURE0+G);const Xt=n.get(ft);if(ft.version!==Xt.__version||tt===!0){e.activeTexture(r.TEXTURE0+G),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const rt=w(T)&&x(T.image)===!1;let C=b(T.image,rt,!1,o);C=de(T,C);const D=x(C)||i,Q=a.convert(T.format,T.colorSpace);let ot=a.convert(T.type),at=N(T.internalFormat,Q,ot,T.colorSpace);Wt(nt,T,D);let Pt;const yt=T.mipmaps,Ft=i&&T.isVideoTexture!==!0,S=Xt.__version===void 0||tt===!0,it=m(T,C,D);if(T.isDepthTexture)at=r.DEPTH_COMPONENT,i?T.type===Wn?at=r.DEPTH_COMPONENT32F:T.type===gn?at=r.DEPTH_COMPONENT24:T.type===uf?at=r.DEPTH24_STENCIL8:at=r.DEPTH_COMPONENT16:T.type===Wn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===df&&at===r.DEPTH_COMPONENT&&T.type!==Si&&T.type!==gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=gn,ot=a.convert(T.type)),T.format===Pr&&at===r.DEPTH_COMPONENT&&(at=r.DEPTH_STENCIL,T.type!==uf&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=uf,ot=a.convert(T.type))),S&&(Ft?e.texStorage2D(r.TEXTURE_2D,1,at,C.width,C.height):e.texImage2D(r.TEXTURE_2D,0,at,C.width,C.height,0,Q,ot,null));else if(T.isDataTexture)if(yt.length>0&&D){Ft&&S&&e.texStorage2D(r.TEXTURE_2D,it,at,yt[0].width,yt[0].height);for(let F=0,et=yt.length;F<et;F++)Pt=yt[F],Ft?e.texSubImage2D(r.TEXTURE_2D,F,0,0,Pt.width,Pt.height,Q,ot,Pt.data):e.texImage2D(r.TEXTURE_2D,F,at,Pt.width,Pt.height,0,Q,ot,Pt.data);T.generateMipmaps=!1}else Ft?(S&&e.texStorage2D(r.TEXTURE_2D,it,at,C.width,C.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,C.width,C.height,Q,ot,C.data)):e.texImage2D(r.TEXTURE_2D,0,at,C.width,C.height,0,Q,ot,C.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ft&&S&&e.texStorage3D(r.TEXTURE_2D_ARRAY,it,at,yt[0].width,yt[0].height,C.depth);for(let F=0,et=yt.length;F<et;F++)Pt=yt[F],T.format!==Je?Q!==null?Ft?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,F,0,0,0,Pt.width,Pt.height,C.depth,Q,Pt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,F,at,Pt.width,Pt.height,C.depth,0,Pt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?e.texSubImage3D(r.TEXTURE_2D_ARRAY,F,0,0,0,Pt.width,Pt.height,C.depth,Q,ot,Pt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,F,at,Pt.width,Pt.height,C.depth,0,Q,ot,Pt.data)}else{Ft&&S&&e.texStorage2D(r.TEXTURE_2D,it,at,yt[0].width,yt[0].height);for(let F=0,et=yt.length;F<et;F++)Pt=yt[F],T.format!==Je?Q!==null?Ft?e.compressedTexSubImage2D(r.TEXTURE_2D,F,0,0,Pt.width,Pt.height,Q,Pt.data):e.compressedTexImage2D(r.TEXTURE_2D,F,at,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?e.texSubImage2D(r.TEXTURE_2D,F,0,0,Pt.width,Pt.height,Q,ot,Pt.data):e.texImage2D(r.TEXTURE_2D,F,at,Pt.width,Pt.height,0,Q,ot,Pt.data)}else if(T.isDataArrayTexture)Ft?(S&&e.texStorage3D(r.TEXTURE_2D_ARRAY,it,at,C.width,C.height,C.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,C.width,C.height,C.depth,Q,ot,C.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,at,C.width,C.height,C.depth,0,Q,ot,C.data);else if(T.isData3DTexture)Ft?(S&&e.texStorage3D(r.TEXTURE_3D,it,at,C.width,C.height,C.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,C.width,C.height,C.depth,Q,ot,C.data)):e.texImage3D(r.TEXTURE_3D,0,at,C.width,C.height,C.depth,0,Q,ot,C.data);else if(T.isFramebufferTexture){if(S)if(Ft)e.texStorage2D(r.TEXTURE_2D,it,at,C.width,C.height);else{let F=C.width,et=C.height;for(let vt=0;vt<it;vt++)e.texImage2D(r.TEXTURE_2D,vt,at,F,et,0,Q,ot,null),F>>=1,et>>=1}}else if(yt.length>0&&D){Ft&&S&&e.texStorage2D(r.TEXTURE_2D,it,at,yt[0].width,yt[0].height);for(let F=0,et=yt.length;F<et;F++)Pt=yt[F],Ft?e.texSubImage2D(r.TEXTURE_2D,F,0,0,Q,ot,Pt):e.texImage2D(r.TEXTURE_2D,F,at,Q,ot,Pt);T.generateMipmaps=!1}else Ft?(S&&e.texStorage2D(r.TEXTURE_2D,it,at,C.width,C.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Q,ot,C)):e.texImage2D(r.TEXTURE_2D,0,at,Q,ot,C);L(T,D)&&H(nt),Xt.__version=ft.version,T.onUpdate&&T.onUpdate(T)}y.__version=T.version}function ze(y,T,G){if(T.image.length!==6)return;const nt=zt(y,T),tt=T.source;e.bindTexture(r.TEXTURE_CUBE_MAP,y.__webglTexture,r.TEXTURE0+G);const ft=n.get(tt);if(tt.version!==ft.__version||nt===!0){e.activeTexture(r.TEXTURE0+G),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const Xt=T.isCompressedTexture||T.image[0].isCompressedTexture,rt=T.image[0]&&T.image[0].isDataTexture,C=[];for(let F=0;F<6;F++)!Xt&&!rt?C[F]=b(T.image[F],!1,!0,P):C[F]=rt?T.image[F].image:T.image[F],C[F]=de(T,C[F]);const D=C[0],Q=x(D)||i,ot=a.convert(T.format,T.colorSpace),at=a.convert(T.type),Pt=N(T.internalFormat,ot,at,T.colorSpace),yt=i&&T.isVideoTexture!==!0,Ft=ft.__version===void 0||nt===!0;let S=m(T,D,Q);Wt(r.TEXTURE_CUBE_MAP,T,Q);let it;if(Xt){yt&&Ft&&e.texStorage2D(r.TEXTURE_CUBE_MAP,S,Pt,D.width,D.height);for(let F=0;F<6;F++){it=C[F].mipmaps;for(let et=0;et<it.length;et++){const vt=it[et];T.format!==Je?ot!==null?yt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,et,0,0,vt.width,vt.height,ot,vt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,et,Pt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):yt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,et,0,0,vt.width,vt.height,ot,at,vt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,et,Pt,vt.width,vt.height,0,ot,at,vt.data)}}}else{it=T.mipmaps,yt&&Ft&&(it.length>0&&S++,e.texStorage2D(r.TEXTURE_CUBE_MAP,S,Pt,C[0].width,C[0].height));for(let F=0;F<6;F++)if(rt){yt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,C[F].width,C[F].height,ot,at,C[F].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Pt,C[F].width,C[F].height,0,ot,at,C[F].data);for(let et=0;et<it.length;et++){const Mt=it[et].image[F].image;yt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,et+1,0,0,Mt.width,Mt.height,ot,at,Mt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,et+1,Pt,Mt.width,Mt.height,0,ot,at,Mt.data)}}else{yt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,ot,at,C[F]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Pt,ot,at,C[F]);for(let et=0;et<it.length;et++){const vt=it[et];yt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,et+1,0,0,ot,at,vt.image[F]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,et+1,Pt,ot,at,vt.image[F])}}}L(T,Q)&&H(r.TEXTURE_CUBE_MAP),ft.__version=tt.version,T.onUpdate&&T.onUpdate(T)}y.__version=T.version}function St(y,T,G,nt,tt,ft){const Xt=a.convert(G.format,G.colorSpace),rt=a.convert(G.type),C=N(G.internalFormat,Xt,rt,G.colorSpace);if(!n.get(T).__hasExternalTextures){const Q=Math.max(1,T.width>>ft),ot=Math.max(1,T.height>>ft);tt===r.TEXTURE_3D||tt===r.TEXTURE_2D_ARRAY?e.texImage3D(tt,ft,C,Q,ot,T.depth,0,Xt,rt,null):e.texImage2D(tt,ft,C,Q,ot,0,Xt,rt,null)}e.bindFramebuffer(r.FRAMEBUFFER,y),gt(T)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,tt,n.get(G).__webglTexture,0,Ot(T)):(tt===r.TEXTURE_2D||tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,nt,tt,n.get(G).__webglTexture,ft),e.bindFramebuffer(r.FRAMEBUFFER,null)}function R(y,T,G){if(r.bindRenderbuffer(r.RENDERBUFFER,y),T.depthBuffer&&!T.stencilBuffer){let nt=r.DEPTH_COMPONENT16;if(G||gt(T)){const tt=T.depthTexture;tt&&tt.isDepthTexture&&(tt.type===Wn?nt=r.DEPTH_COMPONENT32F:tt.type===gn&&(nt=r.DEPTH_COMPONENT24));const ft=Ot(T);gt(T)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ft,nt,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,nt,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,nt,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,y)}else if(T.depthBuffer&&T.stencilBuffer){const nt=Ot(T);G&&gt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,nt,r.DEPTH24_STENCIL8,T.width,T.height):gt(T)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,nt,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,y)}else{const nt=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let tt=0;tt<nt.length;tt++){const ft=nt[tt],Xt=a.convert(ft.format,ft.colorSpace),rt=a.convert(ft.type),C=N(ft.internalFormat,Xt,rt,ft.colorSpace),D=Ot(T);G&&gt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,D,C,T.width,T.height):gt(T)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,D,C,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,C,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pe(y,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,y),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),_(T.depthTexture,0);const nt=n.get(T.depthTexture).__webglTexture,tt=Ot(T);if(T.depthTexture.format===df)gt(T)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0);else if(T.depthTexture.format===Pr)gt(T)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function wt(y){const T=n.get(y),G=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!T.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Pe(T.__webglFramebuffer,y)}else if(G){T.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[nt]),T.__webglDepthbuffer[nt]=r.createRenderbuffer(),R(T.__webglDepthbuffer[nt],y,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),R(T.__webglDepthbuffer,y,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Nt(y,T,G){const nt=n.get(y);T!==void 0&&St(nt.__webglFramebuffer,y,y.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&wt(y)}function Tt(y){const T=y.texture,G=n.get(y),nt=n.get(T);y.addEventListener("dispose",U),y.isWebGLMultipleRenderTargets!==!0&&(nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture()),nt.__version=T.version,s.memory.textures++);const tt=y.isWebGLCubeRenderTarget===!0,ft=y.isWebGLMultipleRenderTargets===!0,Xt=x(y)||i;if(tt){G.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(i&&T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[rt]=[];for(let C=0;C<T.mipmaps.length;C++)G.__webglFramebuffer[rt][C]=r.createFramebuffer()}else G.__webglFramebuffer[rt]=r.createFramebuffer()}else{if(i&&T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let rt=0;rt<T.mipmaps.length;rt++)G.__webglFramebuffer[rt]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(ft)if(f.drawBuffers){const rt=y.texture;for(let C=0,D=rt.length;C<D;C++){const Q=n.get(rt[C]);Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(i&&y.samples>0&&gt(y)===!1){const rt=ft?T:[T];G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let C=0;C<rt.length;C++){const D=rt[C];G.__webglColorRenderbuffer[C]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[C]);const Q=a.convert(D.format,D.colorSpace),ot=a.convert(D.type),at=N(D.internalFormat,Q,ot,D.colorSpace,y.isXRRenderTarget===!0),Pt=Ot(y);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pt,at,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+C,r.RENDERBUFFER,G.__webglColorRenderbuffer[C])}r.bindRenderbuffer(r.RENDERBUFFER,null),y.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),R(G.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(tt){e.bindTexture(r.TEXTURE_CUBE_MAP,nt.__webglTexture),Wt(r.TEXTURE_CUBE_MAP,T,Xt);for(let rt=0;rt<6;rt++)if(i&&T.mipmaps&&T.mipmaps.length>0)for(let C=0;C<T.mipmaps.length;C++)St(G.__webglFramebuffer[rt][C],y,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,C);else St(G.__webglFramebuffer[rt],y,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);L(T,Xt)&&H(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){const rt=y.texture;for(let C=0,D=rt.length;C<D;C++){const Q=rt[C],ot=n.get(Q);e.bindTexture(r.TEXTURE_2D,ot.__webglTexture),Wt(r.TEXTURE_2D,Q,Xt),St(G.__webglFramebuffer,y,Q,r.COLOR_ATTACHMENT0+C,r.TEXTURE_2D,0),L(Q,Xt)&&H(r.TEXTURE_2D)}e.unbindTexture()}else{let rt=r.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(i?rt=y.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(rt,nt.__webglTexture),Wt(rt,T,Xt),i&&T.mipmaps&&T.mipmaps.length>0)for(let C=0;C<T.mipmaps.length;C++)St(G.__webglFramebuffer[C],y,T,r.COLOR_ATTACHMENT0,rt,C);else St(G.__webglFramebuffer,y,T,r.COLOR_ATTACHMENT0,rt,0);L(T,Xt)&&H(rt),e.unbindTexture()}y.depthBuffer&&wt(y)}function Bt(y){const T=x(y)||i,G=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let nt=0,tt=G.length;nt<tt;nt++){const ft=G[nt];if(L(ft,T)){const Xt=y.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,rt=n.get(ft).__webglTexture;e.bindTexture(Xt,rt),H(Xt),e.unbindTexture()}}}function Zt(y){if(i&&y.samples>0&&gt(y)===!1){const T=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],G=y.width,nt=y.height;let tt=r.COLOR_BUFFER_BIT;const ft=[],Xt=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,rt=n.get(y),C=y.isWebGLMultipleRenderTargets===!0;if(C)for(let D=0;D<T.length;D++)e.bindFramebuffer(r.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,rt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let D=0;D<T.length;D++){ft.push(r.COLOR_ATTACHMENT0+D),y.depthBuffer&&ft.push(Xt);const Q=rt.__ignoreDepthValues!==void 0?rt.__ignoreDepthValues:!1;if(Q===!1&&(y.depthBuffer&&(tt|=r.DEPTH_BUFFER_BIT),y.stencilBuffer&&(tt|=r.STENCIL_BUFFER_BIT)),C&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,rt.__webglColorRenderbuffer[D]),Q===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Xt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Xt])),C){const ot=n.get(T[D]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ot,0)}r.blitFramebuffer(0,0,G,nt,0,0,G,nt,tt,r.NEAREST),d&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ft)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),C)for(let D=0;D<T.length;D++){e.bindFramebuffer(r.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.RENDERBUFFER,rt.__webglColorRenderbuffer[D]);const Q=n.get(T[D]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,rt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.TEXTURE_2D,Q,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}}function Ot(y){return Math.min(l,y.samples)}function gt(y){const T=n.get(y);return i&&y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function oe(y){const T=s.render.frame;X.get(y)!==T&&(X.set(y,T),y.update())}function de(y,T){const G=y.colorSpace,nt=y.format,tt=y.type;return y.isCompressedTexture===!0||y.format===di||G!==dn&&G!==hf&&(G===Ht?i===!1?t.has("EXT_sRGB")===!0&&nt===Je?(y.format=di,y.minFilter=Se,y.generateMipmaps=!1):T=to.sRGBToLinear(T):(nt!==Je||tt!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),T}this.allocateTextureUnit=I,this.resetTextureUnits=J,this.setTexture2D=_,this.setTexture2DArray=g,this.setTexture3D=Y,this.setTextureCube=lt,this.rebindTextures=Nt,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=gt}function id(r,t,e){const n=e.isWebGL2;function f(a,s=hf){let i;if(a===kn)return r.UNSIGNED_BYTE;if(a===GP)return r.UNSIGNED_SHORT_4_4_4_4;if(a===gP)return r.UNSIGNED_SHORT_5_5_5_1;if(a===Wl)return r.BYTE;if(a===yl)return r.SHORT;if(a===Si)return r.UNSIGNED_SHORT;if(a===FP)return r.INT;if(a===gn)return r.UNSIGNED_INT;if(a===Wn)return r.FLOAT;if(a===vr)return n?r.HALF_FLOAT:(i=t.get("OES_texture_half_float"),i!==null?i.HALF_FLOAT_OES:null);if(a===Nl)return r.ALPHA;if(a===Je)return r.RGBA;if(a===Dl)return r.LUMINANCE;if(a===Ol)return r.LUMINANCE_ALPHA;if(a===df)return r.DEPTH_COMPONENT;if(a===Pr)return r.DEPTH_STENCIL;if(a===di)return i=t.get("EXT_sRGB"),i!==null?i.SRGB_ALPHA_EXT:null;if(a===Sl)return r.RED;if(a===CP)return r.RED_INTEGER;if(a===Vl)return r.RG;if(a===JP)return r.RG_INTEGER;if(a===EP)return r.RGBA_INTEGER;if(a===os||a===ls||a===cs||a===ps)if(s===Ht)if(i=t.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(a===os)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===ls)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===cs)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ps)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get("WEBGL_compressed_texture_s3tc"),i!==null){if(a===os)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===ls)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===cs)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ps)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===P8||a===o8||a===l8||a===c8)if(i=t.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(a===P8)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===o8)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===l8)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===c8)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===ql)return i=t.get("WEBGL_compressed_texture_etc1"),i!==null?i.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===p8||a===u8)if(i=t.get("WEBGL_compressed_texture_etc"),i!==null){if(a===p8)return s===Ht?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(a===u8)return s===Ht?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===d8||a===X8||a===h8||a===b8||a===x8||a===z8||a===w8||a===m8||a===H8||a===A8||a===T8||a===L8||a===j8||a===W8)if(i=t.get("WEBGL_compressed_texture_astc"),i!==null){if(a===d8)return s===Ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===X8)return s===Ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===h8)return s===Ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===b8)return s===Ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===x8)return s===Ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===z8)return s===Ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===w8)return s===Ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===m8)return s===Ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===H8)return s===Ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===A8)return s===Ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===T8)return s===Ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===L8)return s===Ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===j8)return s===Ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===W8)return s===Ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===us)if(i=t.get("EXT_texture_compression_bptc"),i!==null){if(a===us)return s===Ht?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(a===Ul||a===y8||a===N8||a===D8)if(i=t.get("EXT_texture_compression_rgtc"),i!==null){if(a===us)return i.COMPRESSED_RED_RGTC1_EXT;if(a===y8)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===N8)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===D8)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===uf?n?r.UNSIGNED_INT_24_8:(i=t.get("WEBGL_depth_texture"),i!==null?i.UNSIGNED_INT_24_8_WEBGL:null):r[a]!==void 0?r[a]:null}return{convert:f}}class vd extends Te{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class pf extends te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pd={type:"move"};class Zs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let f=null,a=null,s=null;const i=this._targetRay,v=this._grip,P=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(P&&t.hand){s=!0;for(const h of t.hand.values()){const u=e.getJointPose(h,n),p=this._getHandJoint(P,h);u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=u.radius),p.visible=u!==null}const o=P.joints["index-finger-tip"],l=P.joints["thumb-tip"],c=o.position.distanceTo(l.position),d=.02,X=.005;P.inputState.pinching&&c>d+X?(P.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!P.inputState.pinching&&c<=d-X&&(P.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else v!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(v.matrix.fromArray(a.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,a.linearVelocity?(v.hasLinearVelocity=!0,v.linearVelocity.copy(a.linearVelocity)):v.hasLinearVelocity=!1,a.angularVelocity?(v.hasAngularVelocity=!0,v.angularVelocity.copy(a.angularVelocity)):v.hasAngularVelocity=!1));i!==null&&(f=e.getPose(t.targetRaySpace,n),f===null&&a!==null&&(f=a),f!==null&&(i.matrix.fromArray(f.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,f.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(f.linearVelocity)):i.hasLinearVelocity=!1,f.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(f.angularVelocity)):i.hasAngularVelocity=!1,this.dispatchEvent(Pd)))}return i!==null&&(i.visible=f!==null),v!==null&&(v.visible=a!==null),P!==null&&(P.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new pf;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class od extends we{constructor(t,e,n,f,a,s,i,v,P,o){if(o=o!==void 0?o:df,o!==df&&o!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&o===df&&(n=gn),n===void 0&&o===Pr&&(n=uf),super(null,f,a,s,i,v,o,n,P),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=i!==void 0?i:he,this.minFilter=v!==void 0?v:he,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ld extends zf{constructor(t,e){super();const n=this;let f=null,a=1,s=null,i="local-floor",v=1,P=null,o=null,l=null,c=null,d=null,X=null;const h=e.getContextAttributes();let u=null,p=null;const z=[],b=[],x=new Te;x.layers.enable(1),x.viewport=new Jt;const w=new Te;w.layers.enable(2),w.viewport=new Jt;const L=[x,w],H=new vd;H.layers.enable(1),H.layers.enable(2);let N=null,m=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(g){let Y=z[g];return Y===void 0&&(Y=new Zs,z[g]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(g){let Y=z[g];return Y===void 0&&(Y=new Zs,z[g]=Y),Y.getGripSpace()},this.getHand=function(g){let Y=z[g];return Y===void 0&&(Y=new Zs,z[g]=Y),Y.getHandSpace()};function A(g){const Y=b.indexOf(g.inputSource);if(Y===-1)return;const lt=z[Y];lt!==void 0&&(lt.update(g.inputSource,g.frame,P||s),lt.dispatchEvent({type:g.type,data:g.inputSource}))}function q(){f.removeEventListener("select",A),f.removeEventListener("selectstart",A),f.removeEventListener("selectend",A),f.removeEventListener("squeeze",A),f.removeEventListener("squeezestart",A),f.removeEventListener("squeezeend",A),f.removeEventListener("end",q),f.removeEventListener("inputsourceschange",U);for(let g=0;g<z.length;g++){const Y=b[g];Y!==null&&(b[g]=null,z[g].disconnect(Y))}N=null,m=null,t.setRenderTarget(u),d=null,c=null,l=null,f=null,p=null,_.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(g){a=g,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(g){i=g,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return P||s},this.setReferenceSpace=function(g){P=g},this.getBaseLayer=function(){return c!==null?c:d},this.getBinding=function(){return l},this.getFrame=function(){return X},this.getSession=function(){return f},this.setSession=async function(g){if(f=g,f!==null){if(u=t.getRenderTarget(),f.addEventListener("select",A),f.addEventListener("selectstart",A),f.addEventListener("selectend",A),f.addEventListener("squeeze",A),f.addEventListener("squeezestart",A),f.addEventListener("squeezeend",A),f.addEventListener("end",q),f.addEventListener("inputsourceschange",U),h.xrCompatible!==!0&&await e.makeXRCompatible(),f.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Y={antialias:f.renderState.layers===void 0?h.antialias:!0,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(f,e,Y),f.updateRenderState({baseLayer:d}),p=new Bn(d.framebufferWidth,d.framebufferHeight,{format:Je,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:h.stencil})}else{let Y=null,lt=null,ct=null;h.depth&&(ct=h.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=h.stencil?Pr:df,lt=h.stencil?uf:gn);const pt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:a};l=new XRWebGLBinding(f,e),c=l.createProjectionLayer(pt),f.updateRenderState({layers:[c]}),p=new Bn(c.textureWidth,c.textureHeight,{format:Je,type:kn,depthTexture:new od(c.textureWidth,c.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:h.stencil,colorSpace:t.outputColorSpace,samples:h.antialias?4:0});const xt=t.properties.get(p);xt.__ignoreDepthValues=c.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(v),P=null,s=await f.requestReferenceSpace(i),_.setContext(f),_.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(f!==null)return f.environmentBlendMode};function U(g){for(let Y=0;Y<g.removed.length;Y++){const lt=g.removed[Y],ct=b.indexOf(lt);ct>=0&&(b[ct]=null,z[ct].disconnect(lt))}for(let Y=0;Y<g.added.length;Y++){const lt=g.added[Y];let ct=b.indexOf(lt);if(ct===-1){for(let xt=0;xt<z.length;xt++)if(xt>=b.length){b.push(lt),ct=xt;break}else if(b[xt]===null){b[xt]=lt,ct=xt;break}if(ct===-1)break}const pt=z[ct];pt&&pt.connect(lt)}}const O=new W,V=new W;function Z(g,Y,lt){O.setFromMatrixPosition(Y.matrixWorld),V.setFromMatrixPosition(lt.matrixWorld);const ct=O.distanceTo(V),pt=Y.projectionMatrix.elements,xt=lt.projectionMatrix.elements,Wt=pt[14]/(pt[10]-1),zt=pt[14]/(pt[10]+1),Ct=(pt[9]+1)/pt[5],ze=(pt[9]-1)/pt[5],St=(pt[8]-1)/pt[0],R=(xt[8]+1)/xt[0],Pe=Wt*St,wt=Wt*R,Nt=ct/(-St+R),Tt=Nt*-St;Y.matrixWorld.decompose(g.position,g.quaternion,g.scale),g.translateX(Tt),g.translateZ(Nt),g.matrixWorld.compose(g.position,g.quaternion,g.scale),g.matrixWorldInverse.copy(g.matrixWorld).invert();const Bt=Wt+Nt,Zt=zt+Nt,Ot=Pe-Tt,gt=wt+(ct-Tt),oe=Ct*zt/Zt*Bt,de=ze*zt/Zt*Bt;g.projectionMatrix.makePerspective(Ot,gt,oe,de,Bt,Zt),g.projectionMatrixInverse.copy(g.projectionMatrix).invert()}function E(g,Y){Y===null?g.matrixWorld.copy(g.matrix):g.matrixWorld.multiplyMatrices(Y.matrixWorld,g.matrix),g.matrixWorldInverse.copy(g.matrixWorld).invert()}this.updateCamera=function(g){if(f===null)return;H.near=w.near=x.near=g.near,H.far=w.far=x.far=g.far,(N!==H.near||m!==H.far)&&(f.updateRenderState({depthNear:H.near,depthFar:H.far}),N=H.near,m=H.far);const Y=g.parent,lt=H.cameras;E(H,Y);for(let ct=0;ct<lt.length;ct++)E(lt[ct],Y);lt.length===2?Z(H,x,w):H.projectionMatrix.copy(x.projectionMatrix),J(g,H,Y)};function J(g,Y,lt){lt===null?g.matrix.copy(Y.matrixWorld):(g.matrix.copy(lt.matrixWorld),g.matrix.invert(),g.matrix.multiply(Y.matrixWorld)),g.matrix.decompose(g.position,g.quaternion,g.scale),g.updateMatrixWorld(!0);const ct=g.children;for(let pt=0,xt=ct.length;pt<xt;pt++)ct[pt].updateMatrixWorld(!0);g.projectionMatrix.copy(Y.projectionMatrix),g.projectionMatrixInverse.copy(Y.projectionMatrixInverse),g.isPerspectiveCamera&&(g.fov=lr*2*Math.atan(1/g.projectionMatrix.elements[5]),g.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(c===null&&d===null))return v},this.setFoveation=function(g){v=g,c!==null&&(c.fixedFoveation=g),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=g)};let I=null;function $(g,Y){if(o=Y.getViewerPose(P||s),X=Y,o!==null){const lt=o.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let ct=!1;lt.length!==H.cameras.length&&(H.cameras.length=0,ct=!0);for(let pt=0;pt<lt.length;pt++){const xt=lt[pt];let Wt=null;if(d!==null)Wt=d.getViewport(xt);else{const Ct=l.getViewSubImage(c,xt);Wt=Ct.viewport,pt===0&&(t.setRenderTargetTextures(p,Ct.colorTexture,c.ignoreDepthValues?void 0:Ct.depthStencilTexture),t.setRenderTarget(p))}let zt=L[pt];zt===void 0&&(zt=new Te,zt.layers.enable(pt),zt.viewport=new Jt,L[pt]=zt),zt.matrix.fromArray(xt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(xt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),pt===0&&(H.matrix.copy(zt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),ct===!0&&H.cameras.push(zt)}}for(let lt=0;lt<z.length;lt++){const ct=b[lt],pt=z[lt];ct!==null&&pt!==void 0&&pt.update(ct,Y,P||s)}I&&I(g,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),X=null}const _=new oo;_.setAnimationLoop($),this.setAnimationLoop=function(g){I=g},this.dispose=function(){}}}function cd(r,t){function e(u,p){u.matrixAutoUpdate===!0&&u.updateMatrix(),p.value.copy(u.matrix)}function n(u,p){p.color.getRGB(u.fogColor.value,so(r)),p.isFog?(u.fogNear.value=p.near,u.fogFar.value=p.far):p.isFogExp2&&(u.fogDensity.value=p.density)}function f(u,p,z,b,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(u,p):p.isMeshToonMaterial?(a(u,p),l(u,p)):p.isMeshPhongMaterial?(a(u,p),o(u,p)):p.isMeshStandardMaterial?(a(u,p),c(u,p),p.isMeshPhysicalMaterial&&d(u,p,x)):p.isMeshMatcapMaterial?(a(u,p),X(u,p)):p.isMeshDepthMaterial?a(u,p):p.isMeshDistanceMaterial?(a(u,p),h(u,p)):p.isMeshNormalMaterial?a(u,p):p.isLineBasicMaterial?(s(u,p),p.isLineDashedMaterial&&i(u,p)):p.isPointsMaterial?v(u,p,z,b):p.isSpriteMaterial?P(u,p):p.isShadowMaterial?(u.color.value.copy(p.color),u.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(u,p){u.opacity.value=p.opacity,p.color&&u.diffuse.value.copy(p.color),p.emissive&&u.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(u.map.value=p.map,e(p.map,u.mapTransform)),p.alphaMap&&(u.alphaMap.value=p.alphaMap,e(p.alphaMap,u.alphaMapTransform)),p.bumpMap&&(u.bumpMap.value=p.bumpMap,e(p.bumpMap,u.bumpMapTransform),u.bumpScale.value=p.bumpScale,p.side===De&&(u.bumpScale.value*=-1)),p.normalMap&&(u.normalMap.value=p.normalMap,e(p.normalMap,u.normalMapTransform),u.normalScale.value.copy(p.normalScale),p.side===De&&u.normalScale.value.negate()),p.displacementMap&&(u.displacementMap.value=p.displacementMap,e(p.displacementMap,u.displacementMapTransform),u.displacementScale.value=p.displacementScale,u.displacementBias.value=p.displacementBias),p.emissiveMap&&(u.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,u.emissiveMapTransform)),p.specularMap&&(u.specularMap.value=p.specularMap,e(p.specularMap,u.specularMapTransform)),p.alphaTest>0&&(u.alphaTest.value=p.alphaTest);const z=t.get(p).envMap;if(z&&(u.envMap.value=z,u.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=p.reflectivity,u.ior.value=p.ior,u.refractionRatio.value=p.refractionRatio),p.lightMap){u.lightMap.value=p.lightMap;const b=r._useLegacyLights===!0?Math.PI:1;u.lightMapIntensity.value=p.lightMapIntensity*b,e(p.lightMap,u.lightMapTransform)}p.aoMap&&(u.aoMap.value=p.aoMap,u.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,u.aoMapTransform))}function s(u,p){u.diffuse.value.copy(p.color),u.opacity.value=p.opacity,p.map&&(u.map.value=p.map,e(p.map,u.mapTransform))}function i(u,p){u.dashSize.value=p.dashSize,u.totalSize.value=p.dashSize+p.gapSize,u.scale.value=p.scale}function v(u,p,z,b){u.diffuse.value.copy(p.color),u.opacity.value=p.opacity,u.size.value=p.size*z,u.scale.value=b*.5,p.map&&(u.map.value=p.map,e(p.map,u.uvTransform)),p.alphaMap&&(u.alphaMap.value=p.alphaMap,e(p.alphaMap,u.alphaMapTransform)),p.alphaTest>0&&(u.alphaTest.value=p.alphaTest)}function P(u,p){u.diffuse.value.copy(p.color),u.opacity.value=p.opacity,u.rotation.value=p.rotation,p.map&&(u.map.value=p.map,e(p.map,u.mapTransform)),p.alphaMap&&(u.alphaMap.value=p.alphaMap,e(p.alphaMap,u.alphaMapTransform)),p.alphaTest>0&&(u.alphaTest.value=p.alphaTest)}function o(u,p){u.specular.value.copy(p.specular),u.shininess.value=Math.max(p.shininess,1e-4)}function l(u,p){p.gradientMap&&(u.gradientMap.value=p.gradientMap)}function c(u,p){u.metalness.value=p.metalness,p.metalnessMap&&(u.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,u.metalnessMapTransform)),u.roughness.value=p.roughness,p.roughnessMap&&(u.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,u.roughnessMapTransform)),t.get(p).envMap&&(u.envMapIntensity.value=p.envMapIntensity)}function d(u,p,z){u.ior.value=p.ior,p.sheen>0&&(u.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),u.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(u.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,u.sheenColorMapTransform)),p.sheenRoughnessMap&&(u.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,u.sheenRoughnessMapTransform))),p.clearcoat>0&&(u.clearcoat.value=p.clearcoat,u.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(u.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,u.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(u.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===De&&u.clearcoatNormalScale.value.negate())),p.iridescence>0&&(u.iridescence.value=p.iridescence,u.iridescenceIOR.value=p.iridescenceIOR,u.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(u.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,u.iridescenceMapTransform)),p.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),p.transmission>0&&(u.transmission.value=p.transmission,u.transmissionSamplerMap.value=z.texture,u.transmissionSamplerSize.value.set(z.width,z.height),p.transmissionMap&&(u.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,u.transmissionMapTransform)),u.thickness.value=p.thickness,p.thicknessMap&&(u.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=p.attenuationDistance,u.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(u.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(u.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=p.specularIntensity,u.specularColor.value.copy(p.specularColor),p.specularColorMap&&(u.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,u.specularColorMapTransform)),p.specularIntensityMap&&(u.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,u.specularIntensityMapTransform))}function X(u,p){p.matcap&&(u.matcap.value=p.matcap)}function h(u,p){const z=t.get(p).light;u.referencePosition.value.setFromMatrixPosition(z.matrixWorld),u.nearDistance.value=z.shadow.camera.near,u.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:f}}function pd(r,t,e,n){let f={},a={},s=[];const i=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function v(z,b){const x=b.program;n.uniformBlockBinding(z,x)}function P(z,b){let x=f[z.id];x===void 0&&(X(z),x=o(z),f[z.id]=x,z.addEventListener("dispose",u));const w=b.program;n.updateUBOMapping(z,w);const L=t.render.frame;a[z.id]!==L&&(c(z),a[z.id]=L)}function o(z){const b=l();z.__bindingPointIndex=b;const x=r.createBuffer(),w=z.__size,L=z.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,w,L),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,x),x}function l(){for(let z=0;z<i;z++)if(s.indexOf(z)===-1)return s.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(z){const b=f[z.id],x=z.uniforms,w=z.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let L=0,H=x.length;L<H;L++){const N=x[L];if(d(N,L,w)===!0){const m=N.__offset,A=Array.isArray(N.value)?N.value:[N.value];let q=0;for(let U=0;U<A.length;U++){const O=A[U],V=h(O);typeof O=="number"?(N.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,m+q,N.__data)):O.isMatrix3?(N.__data[0]=O.elements[0],N.__data[1]=O.elements[1],N.__data[2]=O.elements[2],N.__data[3]=O.elements[0],N.__data[4]=O.elements[3],N.__data[5]=O.elements[4],N.__data[6]=O.elements[5],N.__data[7]=O.elements[0],N.__data[8]=O.elements[6],N.__data[9]=O.elements[7],N.__data[10]=O.elements[8],N.__data[11]=O.elements[0]):(O.toArray(N.__data,q),q+=V.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,m,N.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(z,b,x){const w=z.value;if(x[b]===void 0){if(typeof w=="number")x[b]=w;else{const L=Array.isArray(w)?w:[w],H=[];for(let N=0;N<L.length;N++)H.push(L[N].clone());x[b]=H}return!0}else if(typeof w=="number"){if(x[b]!==w)return x[b]=w,!0}else{const L=Array.isArray(x[b])?x[b]:[x[b]],H=Array.isArray(w)?w:[w];for(let N=0;N<L.length;N++){const m=L[N];if(m.equals(H[N])===!1)return m.copy(H[N]),!0}}return!1}function X(z){const b=z.uniforms;let x=0;const w=16;let L=0;for(let H=0,N=b.length;H<N;H++){const m=b[H],A={boundary:0,storage:0},q=Array.isArray(m.value)?m.value:[m.value];for(let U=0,O=q.length;U<O;U++){const V=q[U],Z=h(V);A.boundary+=Z.boundary,A.storage+=Z.storage}if(m.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),m.__offset=x,H>0){L=x%w;const U=w-L;L!==0&&U-A.boundary<0&&(x+=w-L,m.__offset=x)}x+=A.storage}return L=x%w,L>0&&(x+=w-L),z.__size=x,z.__cache={},this}function h(z){const b={boundary:0,storage:0};return typeof z=="number"?(b.boundary=4,b.storage=4):z.isVector2?(b.boundary=8,b.storage=8):z.isVector3||z.isColor?(b.boundary=16,b.storage=12):z.isVector4?(b.boundary=16,b.storage=16):z.isMatrix3?(b.boundary=48,b.storage=48):z.isMatrix4?(b.boundary=64,b.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),b}function u(z){const b=z.target;b.removeEventListener("dispose",u);const x=s.indexOf(b.__bindingPointIndex);s.splice(x,1),r.deleteBuffer(f[b.id]),delete f[b.id],delete a[b.id]}function p(){for(const z in f)r.deleteBuffer(f[z]);s=[],f={},a={}}return{bind:v,update:P,dispose:p}}function ud(){const r=Yr("canvas");return r.style.display="block",r}class Xo{constructor(t={}){const{canvas:e=ud(),context:n=null,depth:f=!0,stencil:a=!0,alpha:s=!1,antialias:i=!1,premultipliedAlpha:v=!0,preserveDrawingBuffer:P=!1,powerPreference:o="default",failIfMajorPerformanceCaveat:l=!1}=t;this.isWebGLRenderer=!0;let c;n!==null?c=n.getContextAttributes().alpha:c=s;const d=new Uint32Array(4),X=new Int32Array(4);let h=null,u=null;const p=[],z=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ht,this._useLegacyLights=!1,this.toneMapping=Yn,this.toneMappingExposure=1;const b=this;let x=!1,w=0,L=0,H=null,N=-1,m=null;const A=new Jt,q=new Jt;let U=null;const O=new Dt(0);let V=0,Z=e.width,E=e.height,J=1,I=null,$=null;const _=new Jt(0,0,Z,E),g=new Jt(0,0,Z,E);let Y=!1;const lt=new Ui;let ct=!1,pt=!1,xt=null;const Wt=new bt,zt=new ht,Ct=new W,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function St(){return H===null?J:1}let R=n;function Pe(j,K){for(let B=0;B<j.length;B++){const M=j[B],k=e.getContext(M,K);if(k!==null)return k}return null}try{const j={alpha:!0,depth:f,stencil:a,antialias:i,premultipliedAlpha:v,preserveDrawingBuffer:P,powerPreference:o,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oi}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",F,!1),e.addEventListener("webglcontextcreationerror",et,!1),R===null){const K=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&K.shift(),R=Pe(K,j),R===null)throw Pe(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&R instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(j){throw console.error("THREE.WebGLRenderer: "+j.message),j}let wt,Nt,Tt,Bt,Zt,Ot,gt,oe,de,y,T,G,nt,tt,ft,Xt,rt,C,D,Q,ot,at,Pt,yt;function Ft(){wt=new Au(R),Nt=new bu(R,wt,t),wt.init(Nt),at=new id(R,wt,Nt),Tt=new ad(R,wt,Nt),Bt=new ju(R),Zt=new J1,Ot=new sd(R,wt,Tt,Zt,Nt,at,Bt),gt=new zu(b),oe=new Hu(b),de=new Z9(R,Nt),Pt=new Xu(R,wt,de,Nt),y=new Tu(R,de,Bt,Pt),T=new Du(R,y,de,Bt),D=new Nu(R,Nt,Ot),Xt=new xu(Zt),G=new C1(b,gt,oe,wt,Nt,Pt,Xt),nt=new cd(b,Zt),tt=new Y1,ft=new $1(wt,Nt),C=new du(b,gt,oe,Tt,T,c,v),rt=new rd(b,T,Nt),yt=new pd(R,Bt,Nt,Tt),Q=new hu(R,wt,Bt,Nt),ot=new Lu(R,wt,Bt,Nt),Bt.programs=G.programs,b.capabilities=Nt,b.extensions=wt,b.properties=Zt,b.renderLists=tt,b.shadowMap=rt,b.state=Tt,b.info=Bt}Ft();const S=new ld(b,R);this.xr=S,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const j=wt.get("WEBGL_lose_context");j&&j.loseContext()},this.forceContextRestore=function(){const j=wt.get("WEBGL_lose_context");j&&j.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(j){j!==void 0&&(J=j,this.setSize(Z,E,!1))},this.getSize=function(j){return j.set(Z,E)},this.setSize=function(j,K,B=!0){if(S.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=j,E=K,e.width=Math.floor(j*J),e.height=Math.floor(K*J),B===!0&&(e.style.width=j+"px",e.style.height=K+"px"),this.setViewport(0,0,j,K)},this.getDrawingBufferSize=function(j){return j.set(Z*J,E*J).floor()},this.setDrawingBufferSize=function(j,K,B){Z=j,E=K,J=B,e.width=Math.floor(j*B),e.height=Math.floor(K*B),this.setViewport(0,0,j,K)},this.getCurrentViewport=function(j){return j.copy(A)},this.getViewport=function(j){return j.copy(_)},this.setViewport=function(j,K,B,M){j.isVector4?_.set(j.x,j.y,j.z,j.w):_.set(j,K,B,M),Tt.viewport(A.copy(_).multiplyScalar(J).floor())},this.getScissor=function(j){return j.copy(g)},this.setScissor=function(j,K,B,M){j.isVector4?g.set(j.x,j.y,j.z,j.w):g.set(j,K,B,M),Tt.scissor(q.copy(g).multiplyScalar(J).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(j){Tt.setScissorTest(Y=j)},this.setOpaqueSort=function(j){I=j},this.setTransparentSort=function(j){$=j},this.getClearColor=function(j){return j.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor.apply(C,arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha.apply(C,arguments)},this.clear=function(j=!0,K=!0,B=!0){let M=0;if(j){let k=!1;if(H!==null){const dt=H.texture.format;k=dt===EP||dt===JP||dt===CP}if(k){const dt=H.texture.type,mt=dt===kn||dt===gn||dt===Si||dt===uf||dt===GP||dt===gP,Lt=C.getClearColor(),jt=C.getClearAlpha(),Kt=Lt.r,At=Lt.g,Vt=Lt.b;mt?(d[0]=Kt,d[1]=At,d[2]=Vt,d[3]=jt,R.clearBufferuiv(R.COLOR,0,d)):(X[0]=Kt,X[1]=At,X[2]=Vt,X[3]=jt,R.clearBufferiv(R.COLOR,0,X))}else M|=R.COLOR_BUFFER_BIT}K&&(M|=R.DEPTH_BUFFER_BIT),B&&(M|=R.STENCIL_BUFFER_BIT),R.clear(M)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",F,!1),e.removeEventListener("webglcontextcreationerror",et,!1),tt.dispose(),ft.dispose(),Zt.dispose(),gt.dispose(),oe.dispose(),T.dispose(),Pt.dispose(),yt.dispose(),G.dispose(),S.dispose(),S.removeEventListener("sessionstart",Qt),S.removeEventListener("sessionend",ln),xt&&(xt.dispose(),xt=null),je.stop()};function it(j){j.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const j=Bt.autoReset,K=rt.enabled,B=rt.autoUpdate,M=rt.needsUpdate,k=rt.type;Ft(),Bt.autoReset=j,rt.enabled=K,rt.autoUpdate=B,rt.needsUpdate=M,rt.type=k}function et(j){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",j.statusMessage)}function vt(j){const K=j.target;K.removeEventListener("dispose",vt),Mt(K)}function Mt(j){Et(j),Zt.remove(j)}function Et(j){const K=Zt.get(j).programs;K!==void 0&&(K.forEach(function(B){G.releaseProgram(B)}),j.isShaderMaterial&&G.releaseShaderCache(j))}this.renderBufferDirect=function(j,K,B,M,k,dt){K===null&&(K=ze);const mt=k.isMesh&&k.matrixWorld.determinant()<0,Lt=Uo(j,K,B,M,k);Tt.setMaterial(M,mt);let jt=B.index,Kt=1;if(M.wireframe===!0){if(jt=y.getWireframeAttribute(B),jt===void 0)return;Kt=2}const At=B.drawRange,Vt=B.attributes.position;let ee=At.start*Kt,ne=(At.start+At.count)*Kt;dt!==null&&(ee=Math.max(ee,dt.start*Kt),ne=Math.min(ne,(dt.start+dt.count)*Kt)),jt!==null?(ee=Math.max(ee,0),ne=Math.min(ne,jt.count)):Vt!=null&&(ee=Math.max(ee,0),ne=Math.min(ne,Vt.count));const Re=ne-ee;if(Re<0||Re===1/0)return;Pt.setup(k,M,Lt,B,jt);let bn,ae=Q;if(jt!==null&&(bn=de.get(jt),ae=ot,ae.setIndex(bn)),k.isMesh)M.wireframe===!0?(Tt.setLineWidth(M.wireframeLinewidth*St()),ae.setMode(R.LINES)):ae.setMode(R.TRIANGLES);else if(k.isLine){let Rt=M.linewidth;Rt===void 0&&(Rt=1),Tt.setLineWidth(Rt*St()),k.isLineSegments?ae.setMode(R.LINES):k.isLineLoop?ae.setMode(R.LINE_LOOP):ae.setMode(R.LINE_STRIP)}else k.isPoints?ae.setMode(R.POINTS):k.isSprite&&ae.setMode(R.TRIANGLES);if(k.isInstancedMesh)ae.renderInstances(ee,Re,k.count);else if(B.isInstancedBufferGeometry){const Rt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ss=Math.min(B.instanceCount,Rt);ae.renderInstances(ee,Re,ss)}else ae.render(ee,Re)},this.compile=function(j,K){function B(M,k,dt){M.transparent===!0&&M.side===nn&&M.forceSinglePass===!1?(M.side=De,M.needsUpdate=!0,Qr(M,k,dt),M.side=sn,M.needsUpdate=!0,Qr(M,k,dt),M.side=nn):Qr(M,k,dt)}u=ft.get(j),u.init(),z.push(u),j.traverseVisible(function(M){M.isLight&&M.layers.test(K.layers)&&(u.pushLight(M),M.castShadow&&u.pushShadow(M))}),u.setupLights(b._useLegacyLights),j.traverse(function(M){const k=M.material;if(k)if(Array.isArray(k))for(let dt=0;dt<k.length;dt++){const mt=k[dt];B(mt,j,M)}else B(k,j,M)}),z.pop(),u=null};let It=null;function Sn(j){It&&It(j)}function Qt(){je.stop()}function ln(){je.start()}const je=new oo;je.setAnimationLoop(Sn),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(j){It=j,S.setAnimationLoop(j),j===null?je.stop():je.start()},S.addEventListener("sessionstart",Qt),S.addEventListener("sessionend",ln),this.render=function(j,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),S.enabled===!0&&S.isPresenting===!0&&(S.cameraAutoUpdate===!0&&S.updateCamera(K),K=S.getCamera()),j.isScene===!0&&j.onBeforeRender(b,j,K,H),u=ft.get(j,z.length),u.init(),z.push(u),Wt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),lt.setFromProjectionMatrix(Wt),pt=this.localClippingEnabled,ct=Xt.init(this.clippingPlanes,pt),h=tt.get(j,p.length),h.init(),p.push(h),Qi(j,K,0,b.sortObjects),h.finish(),b.sortObjects===!0&&h.sort(I,$),this.info.render.frame++,ct===!0&&Xt.beginShadows();const B=u.state.shadowsArray;if(rt.render(B,j,K),ct===!0&&Xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),C.render(h,j),u.setupLights(b._useLegacyLights),K.isArrayCamera){const M=K.cameras;for(let k=0,dt=M.length;k<dt;k++){const mt=M[k];_i(h,j,mt,mt.viewport)}}else _i(h,j,K);H!==null&&(Ot.updateMultisampleRenderTarget(H),Ot.updateRenderTargetMipmap(H)),j.isScene===!0&&j.onAfterRender(b,j,K),Pt.resetDefaultState(),N=-1,m=null,z.pop(),z.length>0?u=z[z.length-1]:u=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function Qi(j,K,B,M){if(j.visible===!1)return;if(j.layers.test(K.layers)){if(j.isGroup)B=j.renderOrder;else if(j.isLOD)j.autoUpdate===!0&&j.update(K);else if(j.isLight)u.pushLight(j),j.castShadow&&u.pushShadow(j);else if(j.isSprite){if(!j.frustumCulled||lt.intersectsSprite(j)){M&&Ct.setFromMatrixPosition(j.matrixWorld).applyMatrix4(Wt);const mt=T.update(j),Lt=j.material;Lt.visible&&h.push(j,mt,Lt,B,Ct.z,null)}}else if((j.isMesh||j.isLine||j.isPoints)&&(!j.frustumCulled||lt.intersectsObject(j))){const mt=T.update(j),Lt=j.material;if(M&&(j.boundingSphere!==void 0?(j.boundingSphere===null&&j.computeBoundingSphere(),Ct.copy(j.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Ct.copy(mt.boundingSphere.center)),Ct.applyMatrix4(j.matrixWorld).applyMatrix4(Wt)),Array.isArray(Lt)){const jt=mt.groups;for(let Kt=0,At=jt.length;Kt<At;Kt++){const Vt=jt[Kt],ee=Lt[Vt.materialIndex];ee&&ee.visible&&h.push(j,mt,ee,B,Ct.z,Vt)}}else Lt.visible&&h.push(j,mt,Lt,B,Ct.z,null)}}const dt=j.children;for(let mt=0,Lt=dt.length;mt<Lt;mt++)Qi(dt[mt],K,B,M)}function _i(j,K,B,M){const k=j.opaque,dt=j.transmissive,mt=j.transparent;u.setupLightsView(B),ct===!0&&Xt.setGlobalState(b.clippingPlanes,B),dt.length>0&&qo(k,dt,K,B),M&&Tt.viewport(A.copy(M)),k.length>0&&Ir(k,K,B),dt.length>0&&Ir(dt,K,B),mt.length>0&&Ir(mt,K,B),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function qo(j,K,B,M){const k=Nt.isWebGL2;xt===null&&(xt=new Bn(1,1,{generateMipmaps:!0,type:wt.has("EXT_color_buffer_half_float")?vr:kn,minFilter:bf,samples:k?4:0})),b.getDrawingBufferSize(zt),k?xt.setSize(zt.x,zt.y):xt.setSize(Ba(zt.x),Ba(zt.y));const dt=b.getRenderTarget();b.setRenderTarget(xt),b.getClearColor(O),V=b.getClearAlpha(),V<1&&b.setClearColor(16777215,.5),b.clear();const mt=b.toneMapping;b.toneMapping=Yn,Ir(j,B,M),Ot.updateMultisampleRenderTarget(xt),Ot.updateRenderTargetMipmap(xt);let Lt=!1;for(let jt=0,Kt=K.length;jt<Kt;jt++){const At=K[jt],Vt=At.object,ee=At.geometry,ne=At.material,Re=At.group;if(ne.side===nn&&Vt.layers.test(M.layers)){const bn=ne.side;ne.side=De,ne.needsUpdate=!0,$i(Vt,B,M,ee,ne,Re),ne.side=bn,ne.needsUpdate=!0,Lt=!0}}Lt===!0&&(Ot.updateMultisampleRenderTarget(xt),Ot.updateRenderTargetMipmap(xt)),b.setRenderTarget(dt),b.setClearColor(O,V),b.toneMapping=mt}function Ir(j,K,B){const M=K.isScene===!0?K.overrideMaterial:null;for(let k=0,dt=j.length;k<dt;k++){const mt=j[k],Lt=mt.object,jt=mt.geometry,Kt=M===null?mt.material:M,At=mt.group;Lt.layers.test(B.layers)&&$i(Lt,K,B,jt,Kt,At)}}function $i(j,K,B,M,k,dt){j.onBeforeRender(b,K,B,M,k,dt),j.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,j.matrixWorld),j.normalMatrix.getNormalMatrix(j.modelViewMatrix),k.onBeforeRender(b,K,B,M,j,dt),k.transparent===!0&&k.side===nn&&k.forceSinglePass===!1?(k.side=De,k.needsUpdate=!0,b.renderBufferDirect(B,K,M,k,j,dt),k.side=sn,k.needsUpdate=!0,b.renderBufferDirect(B,K,M,k,j,dt),k.side=nn):b.renderBufferDirect(B,K,M,k,j,dt),j.onAfterRender(b,K,B,M,k,dt)}function Qr(j,K,B){K.isScene!==!0&&(K=ze);const M=Zt.get(j),k=u.state.lights,dt=u.state.shadowsArray,mt=k.state.version,Lt=G.getParameters(j,k.state,dt,K,B),jt=G.getProgramCacheKey(Lt);let Kt=M.programs;M.environment=j.isMeshStandardMaterial?K.environment:null,M.fog=K.fog,M.envMap=(j.isMeshStandardMaterial?oe:gt).get(j.envMap||M.environment),Kt===void 0&&(j.addEventListener("dispose",vt),Kt=new Map,M.programs=Kt);let At=Kt.get(jt);if(At!==void 0){if(M.currentProgram===At&&M.lightsStateVersion===mt)return t8(j,Lt),At}else Lt.uniforms=G.getUniforms(j),j.onBuild(B,Lt,b),j.onBeforeCompile(Lt,b),At=G.acquireProgram(Lt,jt),Kt.set(jt,At),M.uniforms=Lt.uniforms;const Vt=M.uniforms;(!j.isShaderMaterial&&!j.isRawShaderMaterial||j.clipping===!0)&&(Vt.clippingPlanes=Xt.uniform),t8(j,Lt),M.needsLights=Mo(j),M.lightsStateVersion=mt,M.needsLights&&(Vt.ambientLightColor.value=k.state.ambient,Vt.lightProbe.value=k.state.probe,Vt.directionalLights.value=k.state.directional,Vt.directionalLightShadows.value=k.state.directionalShadow,Vt.spotLights.value=k.state.spot,Vt.spotLightShadows.value=k.state.spotShadow,Vt.rectAreaLights.value=k.state.rectArea,Vt.ltc_1.value=k.state.rectAreaLTC1,Vt.ltc_2.value=k.state.rectAreaLTC2,Vt.pointLights.value=k.state.point,Vt.pointLightShadows.value=k.state.pointShadow,Vt.hemisphereLights.value=k.state.hemi,Vt.directionalShadowMap.value=k.state.directionalShadowMap,Vt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Vt.spotShadowMap.value=k.state.spotShadowMap,Vt.spotLightMatrix.value=k.state.spotLightMatrix,Vt.spotLightMap.value=k.state.spotLightMap,Vt.pointShadowMap.value=k.state.pointShadowMap,Vt.pointShadowMatrix.value=k.state.pointShadowMatrix);const ee=At.getUniforms(),ne=Ca.seqWithValue(ee.seq,Vt);return M.currentProgram=At,M.uniformsList=ne,At}function t8(j,K){const B=Zt.get(j);B.outputColorSpace=K.outputColorSpace,B.instancing=K.instancing,B.instancingColor=K.instancingColor,B.skinning=K.skinning,B.morphTargets=K.morphTargets,B.morphNormals=K.morphNormals,B.morphColors=K.morphColors,B.morphTargetsCount=K.morphTargetsCount,B.numClippingPlanes=K.numClippingPlanes,B.numIntersection=K.numClipIntersection,B.vertexAlphas=K.vertexAlphas,B.vertexTangents=K.vertexTangents,B.toneMapping=K.toneMapping}function Uo(j,K,B,M,k){K.isScene!==!0&&(K=ze),Ot.resetTextureUnits();const dt=K.fog,mt=M.isMeshStandardMaterial?K.environment:null,Lt=H===null?b.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:dn,jt=(M.isMeshStandardMaterial?oe:gt).get(M.envMap||mt),Kt=M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,At=!!B.attributes.tangent&&(!!M.normalMap||M.anisotropy>0),Vt=!!B.morphAttributes.position,ee=!!B.morphAttributes.normal,ne=!!B.morphAttributes.color;let Re=Yn;M.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Re=b.toneMapping);const bn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ae=bn!==void 0?bn.length:0,Rt=Zt.get(M),ss=u.state.lights;if(ct===!0&&(pt===!0||j!==m)){const qe=j===m&&M.id===N;Xt.setState(M,j,qe)}let se=!1;M.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==ss.state.version||Rt.outputColorSpace!==Lt||k.isInstancedMesh&&Rt.instancing===!1||!k.isInstancedMesh&&Rt.instancing===!0||k.isSkinnedMesh&&Rt.skinning===!1||!k.isSkinnedMesh&&Rt.skinning===!0||k.isInstancedMesh&&Rt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Rt.instancingColor===!1&&k.instanceColor!==null||Rt.envMap!==jt||M.fog===!0&&Rt.fog!==dt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Xt.numPlanes||Rt.numIntersection!==Xt.numIntersection)||Rt.vertexAlphas!==Kt||Rt.vertexTangents!==At||Rt.morphTargets!==Vt||Rt.morphNormals!==ee||Rt.morphColors!==ne||Rt.toneMapping!==Re||Nt.isWebGL2===!0&&Rt.morphTargetsCount!==ae)&&(se=!0):(se=!0,Rt.__version=M.version);let $n=Rt.currentProgram;se===!0&&($n=Qr(M,K,k));let e8=!1,mr=!1,is=!1;const We=$n.getUniforms(),tf=Rt.uniforms;if(Tt.useProgram($n.program)&&(e8=!0,mr=!0,is=!0),M.id!==N&&(N=M.id,mr=!0),e8||m!==j){if(We.setValue(R,"projectionMatrix",j.projectionMatrix),Nt.logarithmicDepthBuffer&&We.setValue(R,"logDepthBufFC",2/(Math.log(j.far+1)/Math.LN2)),m!==j&&(m=j,mr=!0,is=!0),M.isShaderMaterial||M.isMeshPhongMaterial||M.isMeshToonMaterial||M.isMeshStandardMaterial||M.envMap){const qe=We.map.cameraPosition;qe!==void 0&&qe.setValue(R,Ct.setFromMatrixPosition(j.matrixWorld))}(M.isMeshPhongMaterial||M.isMeshToonMaterial||M.isMeshLambertMaterial||M.isMeshBasicMaterial||M.isMeshStandardMaterial||M.isShaderMaterial)&&We.setValue(R,"isOrthographic",j.isOrthographicCamera===!0),(M.isMeshPhongMaterial||M.isMeshToonMaterial||M.isMeshLambertMaterial||M.isMeshBasicMaterial||M.isMeshStandardMaterial||M.isShaderMaterial||M.isShadowMaterial||k.isSkinnedMesh)&&We.setValue(R,"viewMatrix",j.matrixWorldInverse)}if(k.isSkinnedMesh){We.setOptional(R,k,"bindMatrix"),We.setOptional(R,k,"bindMatrixInverse");const qe=k.skeleton;qe&&(Nt.floatVertexTextures?(qe.boneTexture===null&&qe.computeBoneTexture(),We.setValue(R,"boneTexture",qe.boneTexture,Ot),We.setValue(R,"boneTextureSize",qe.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const vs=B.morphAttributes;if((vs.position!==void 0||vs.normal!==void 0||vs.color!==void 0&&Nt.isWebGL2===!0)&&D.update(k,B,$n),(mr||Rt.receiveShadow!==k.receiveShadow)&&(Rt.receiveShadow=k.receiveShadow,We.setValue(R,"receiveShadow",k.receiveShadow)),M.isMeshGouraudMaterial&&M.envMap!==null&&(tf.envMap.value=jt,tf.flipEnvMap.value=jt.isCubeTexture&&jt.isRenderTargetTexture===!1?-1:1),mr&&(We.setValue(R,"toneMappingExposure",b.toneMappingExposure),Rt.needsLights&&Zo(tf,is),dt&&M.fog===!0&&nt.refreshFogUniforms(tf,dt),nt.refreshMaterialUniforms(tf,M,J,E,xt),Ca.upload(R,Rt.uniformsList,tf,Ot)),M.isShaderMaterial&&M.uniformsNeedUpdate===!0&&(Ca.upload(R,Rt.uniformsList,tf,Ot),M.uniformsNeedUpdate=!1),M.isSpriteMaterial&&We.setValue(R,"center",k.center),We.setValue(R,"modelViewMatrix",k.modelViewMatrix),We.setValue(R,"normalMatrix",k.normalMatrix),We.setValue(R,"modelMatrix",k.matrixWorld),M.isShaderMaterial||M.isRawShaderMaterial){const qe=M.uniformsGroups;for(let Ps=0,Ko=qe.length;Ps<Ko;Ps++)if(Nt.isWebGL2){const n8=qe[Ps];yt.update(n8,$n),yt.bind(n8,$n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $n}function Zo(j,K){j.ambientLightColor.needsUpdate=K,j.lightProbe.needsUpdate=K,j.directionalLights.needsUpdate=K,j.directionalLightShadows.needsUpdate=K,j.pointLights.needsUpdate=K,j.pointLightShadows.needsUpdate=K,j.spotLights.needsUpdate=K,j.spotLightShadows.needsUpdate=K,j.rectAreaLights.needsUpdate=K,j.hemisphereLights.needsUpdate=K}function Mo(j){return j.isMeshLambertMaterial||j.isMeshToonMaterial||j.isMeshPhongMaterial||j.isMeshStandardMaterial||j.isShadowMaterial||j.isShaderMaterial&&j.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(j,K,B){Zt.get(j.texture).__webglTexture=K,Zt.get(j.depthTexture).__webglTexture=B;const M=Zt.get(j);M.__hasExternalTextures=!0,M.__hasExternalTextures&&(M.__autoAllocateDepthBuffer=B===void 0,M.__autoAllocateDepthBuffer||wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),M.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(j,K){const B=Zt.get(j);B.__webglFramebuffer=K,B.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(j,K=0,B=0){H=j,w=K,L=B;let M=!0,k=null,dt=!1,mt=!1;if(j){const jt=Zt.get(j);jt.__useDefaultFramebuffer!==void 0?(Tt.bindFramebuffer(R.FRAMEBUFFER,null),M=!1):jt.__webglFramebuffer===void 0?Ot.setupRenderTarget(j):jt.__hasExternalTextures&&Ot.rebindTextures(j,Zt.get(j.texture).__webglTexture,Zt.get(j.depthTexture).__webglTexture);const Kt=j.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(mt=!0);const At=Zt.get(j).__webglFramebuffer;j.isWebGLCubeRenderTarget?(Array.isArray(At[K])?k=At[K][B]:k=At[K],dt=!0):Nt.isWebGL2&&j.samples>0&&Ot.useMultisampledRTT(j)===!1?k=Zt.get(j).__webglMultisampledFramebuffer:Array.isArray(At)?k=At[B]:k=At,A.copy(j.viewport),q.copy(j.scissor),U=j.scissorTest}else A.copy(_).multiplyScalar(J).floor(),q.copy(g).multiplyScalar(J).floor(),U=Y;if(Tt.bindFramebuffer(R.FRAMEBUFFER,k)&&Nt.drawBuffers&&M&&Tt.drawBuffers(j,k),Tt.viewport(A),Tt.scissor(q),Tt.setScissorTest(U),dt){const jt=Zt.get(j.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+K,jt.__webglTexture,B)}else if(mt){const jt=Zt.get(j.texture),Kt=K||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,jt.__webglTexture,B||0,Kt)}N=-1},this.readRenderTargetPixels=function(j,K,B,M,k,dt,mt){if(!(j&&j.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Zt.get(j).__webglFramebuffer;if(j.isWebGLCubeRenderTarget&&mt!==void 0&&(Lt=Lt[mt]),Lt){Tt.bindFramebuffer(R.FRAMEBUFFER,Lt);try{const jt=j.texture,Kt=jt.format,At=jt.type;if(Kt!==Je&&at.convert(Kt)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Vt=At===vr&&(wt.has("EXT_color_buffer_half_float")||Nt.isWebGL2&&wt.has("EXT_color_buffer_float"));if(At!==kn&&at.convert(At)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!(At===Wn&&(Nt.isWebGL2||wt.has("OES_texture_float")||wt.has("WEBGL_color_buffer_float")))&&!Vt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=j.width-M&&B>=0&&B<=j.height-k&&R.readPixels(K,B,M,k,at.convert(Kt),at.convert(At),dt)}finally{const jt=H!==null?Zt.get(H).__webglFramebuffer:null;Tt.bindFramebuffer(R.FRAMEBUFFER,jt)}}},this.copyFramebufferToTexture=function(j,K,B=0){const M=Math.pow(2,-B),k=Math.floor(K.image.width*M),dt=Math.floor(K.image.height*M);Ot.setTexture2D(K,0),R.copyTexSubImage2D(R.TEXTURE_2D,B,0,0,j.x,j.y,k,dt),Tt.unbindTexture()},this.copyTextureToTexture=function(j,K,B,M=0){const k=K.image.width,dt=K.image.height,mt=at.convert(B.format),Lt=at.convert(B.type);Ot.setTexture2D(B,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,B.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,B.unpackAlignment),K.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,M,j.x,j.y,k,dt,mt,Lt,K.image.data):K.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,M,j.x,j.y,K.mipmaps[0].width,K.mipmaps[0].height,mt,K.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,M,j.x,j.y,mt,Lt,K.image),M===0&&B.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),Tt.unbindTexture()},this.copyTextureToTexture3D=function(j,K,B,M,k=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const dt=j.max.x-j.min.x+1,mt=j.max.y-j.min.y+1,Lt=j.max.z-j.min.z+1,jt=at.convert(M.format),Kt=at.convert(M.type);let At;if(M.isData3DTexture)Ot.setTexture3D(M,0),At=R.TEXTURE_3D;else if(M.isDataArrayTexture)Ot.setTexture2DArray(M,0),At=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,M.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,M.unpackAlignment);const Vt=R.getParameter(R.UNPACK_ROW_LENGTH),ee=R.getParameter(R.UNPACK_IMAGE_HEIGHT),ne=R.getParameter(R.UNPACK_SKIP_PIXELS),Re=R.getParameter(R.UNPACK_SKIP_ROWS),bn=R.getParameter(R.UNPACK_SKIP_IMAGES),ae=B.isCompressedTexture?B.mipmaps[0]:B.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,ae.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ae.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,j.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,j.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,j.min.z),B.isDataTexture||B.isData3DTexture?R.texSubImage3D(At,k,K.x,K.y,K.z,dt,mt,Lt,jt,Kt,ae.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(At,k,K.x,K.y,K.z,dt,mt,Lt,jt,ae.data)):R.texSubImage3D(At,k,K.x,K.y,K.z,dt,mt,Lt,jt,Kt,ae),R.pixelStorei(R.UNPACK_ROW_LENGTH,Vt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ee),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ne),R.pixelStorei(R.UNPACK_SKIP_ROWS,Re),R.pixelStorei(R.UNPACK_SKIP_IMAGES,bn),k===0&&M.generateMipmaps&&R.generateMipmap(At),Tt.unbindTexture()},this.initTexture=function(j){j.isCubeTexture?Ot.setTextureCube(j,0):j.isData3DTexture?Ot.setTexture3D(j,0):j.isDataArrayTexture||j.isCompressedArrayTexture?Ot.setTexture2DArray(j,0):Ot.setTexture2D(j,0),Tt.unbindTexture()},this.resetState=function(){w=0,L=0,H=null,Tt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ht?Xf:kP}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Xf?Ht:dn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class dd extends Xo{}dd.prototype.isWebGL1Renderer=!0;class ho extends te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Xd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ui,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=fn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let f=0,a=this.stride;f<a;f++)this.array[t+f]=e.array[n+f];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ye=new W;class Ki{constructor(t,e,n,f=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=f}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}setX(t,e){return this.normalized&&(e=kt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=kt(e,this.array),n=kt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,f){return t=t*this.data.stride+this.offset,this.normalized&&(e=kt(e,this.array),n=kt(n,this.array),f=kt(f,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=f,this}setXYZW(t,e,n,f,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=kt(e,this.array),n=kt(n,this.array),f=kt(f,this.array),a=kt(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=f,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const f=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[f+a])}return new le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ki(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const f=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[f+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const zv=new W,wv=new Jt,mv=new Jt,hd=new W,Hv=new bt,Rf=new W,Ms=new on,Av=new bt,Ks=new Xr;class bd extends Le{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new bt,this.bindMatrixInverse=new bt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new re),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)Rf.fromBufferAttribute(e,n),this.applyBoneTransform(n,Rf),this.boundingBox.expandByPoint(Rf)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new on),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)Rf.fromBufferAttribute(e,n),this.applyBoneTransform(n,Rf),this.boundingSphere.expandByPoint(Rf)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,f=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ms.copy(this.boundingSphere),Ms.applyMatrix4(f),t.ray.intersectsSphere(Ms)!==!1&&(Av.copy(f).invert(),Ks.copy(t.ray).applyMatrix4(Av),!(this.boundingBox!==null&&Ks.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ks)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Jt,e=this.geometry.attributes.skinWeight;for(let n=0,f=e.count;n<f;n++){t.fromBufferAttribute(e,n);const a=1/t.manhattanLength();a!==1/0?t.multiplyScalar(a):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,f=this.geometry;wv.fromBufferAttribute(f.attributes.skinIndex,t),mv.fromBufferAttribute(f.attributes.skinWeight,t),zv.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let a=0;a<4;a++){const s=mv.getComponent(a);if(s!==0){const i=wv.getComponent(a);Hv.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),e.addScaledVector(hd.copy(zv).applyMatrix4(Hv),s)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}}class bo extends te{constructor(){super(),this.isBone=!0,this.type="Bone"}}class xd extends we{constructor(t=null,e=1,n=1,f,a,s,i,v,P=he,o=he,l,c){super(null,s,i,v,P,o,f,a,l,c),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tv=new bt,zd=new bt;class Ri{constructor(t=[],e=[]){this.uuid=fn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,f=this.bones.length;n<f;n++)this.boneInverses.push(new bt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new bt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,f=this.boneTexture;for(let a=0,s=t.length;a<s;a++){const i=t[a]?t[a].matrixWorld:zd;Tv.multiplyMatrices(i,e[a]),Tv.toArray(n,a*16)}f!==null&&(f.needsUpdate=!0)}clone(){return new Ri(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=QP(t),t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new xd(e,t,t,Je,Wn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this.boneTextureSize=t,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const f=this.bones[e];if(f.name===t)return f}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,f=t.bones.length;n<f;n++){const a=t.bones[n];let s=e[a];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),s=new bo),this.bones.push(s),this.boneInverses.push(new bt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let f=0,a=e.length;f<a;f++){const s=e[f];t.bones.push(s.uuid);const i=n[f];t.boneInverses.push(i.toArray())}return t}}class Lv extends le{constructor(t,e,n,f=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=f}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ff=new bt,jv=new bt,ba=[],Wv=new re,wd=new bt,jr=new Le,Wr=new on;class md extends Le{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Lv(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let f=0;f<n;f++)this.setMatrixAt(f,wd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new re),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ff),Wv.copy(t.boundingBox).applyMatrix4(Ff),this.boundingBox.union(Wv)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new on),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ff),Wr.copy(t.boundingSphere).applyMatrix4(Ff),this.boundingSphere.union(Wr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,f=this.count;if(jr.geometry=this.geometry,jr.material=this.material,jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wr.copy(this.boundingSphere),Wr.applyMatrix4(n),t.ray.intersectsSphere(Wr)!==!1))for(let a=0;a<f;a++){this.getMatrixAt(a,Ff),jv.multiplyMatrices(n,Ff),jr.matrixWorld=jv,jr.raycast(t,ba);for(let s=0,i=ba.length;s<i;s++){const v=ba[s];v.instanceId=a,v.object=this,e.push(v)}ba.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Lv(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class xo extends rn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const yv=new W,Nv=new W,Dv=new bt,Rs=new Xr,xa=new on;class Fi extends te{constructor(t=new Ve,e=new xo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let f=1,a=e.count;f<a;f++)yv.fromBufferAttribute(e,f-1),Nv.fromBufferAttribute(e,f),n[f]=n[f-1],n[f]+=yv.distanceTo(Nv);t.setAttribute("lineDistance",new Nn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,f=this.matrixWorld,a=t.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(f),xa.radius+=a,t.ray.intersectsSphere(xa)===!1)return;Dv.copy(f).invert(),Rs.copy(t.ray).applyMatrix4(Dv);const i=a/((this.scale.x+this.scale.y+this.scale.z)/3),v=i*i,P=new W,o=new W,l=new W,c=new W,d=this.isLineSegments?2:1,X=n.index,u=n.attributes.position;if(X!==null){const p=Math.max(0,s.start),z=Math.min(X.count,s.start+s.count);for(let b=p,x=z-1;b<x;b+=d){const w=X.getX(b),L=X.getX(b+1);if(P.fromBufferAttribute(u,w),o.fromBufferAttribute(u,L),Rs.distanceSqToSegment(P,o,c,l)>v)continue;c.applyMatrix4(this.matrixWorld);const N=t.ray.origin.distanceTo(c);N<t.near||N>t.far||e.push({distance:N,point:l.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,s.start),z=Math.min(u.count,s.start+s.count);for(let b=p,x=z-1;b<x;b+=d){if(P.fromBufferAttribute(u,b),o.fromBufferAttribute(u,b+1),Rs.distanceSqToSegment(P,o,c,l)>v)continue;c.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(c);L<t.near||L>t.far||e.push({distance:L,point:l.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const f=e[n[0]];if(f!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=f.length;a<s;a++){const i=f[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=a}}}}}const Ov=new W,Sv=new W;class Hd extends Fi{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let f=0,a=e.count;f<a;f+=2)Ov.fromBufferAttribute(e,f),Sv.fromBufferAttribute(e,f+1),n[f]=f===0?0:n[f-1],n[f+1]=n[f]+Ov.distanceTo(Sv);t.setAttribute("lineDistance",new Nn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ad extends Fi{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class zo extends rn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Vv=new bt,bi=new Xr,za=new on,wa=new W;class Td extends te{constructor(t=new Ve,e=new zo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,f=this.matrixWorld,a=t.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(f),za.radius+=a,t.ray.intersectsSphere(za)===!1)return;Vv.copy(f).invert(),bi.copy(t.ray).applyMatrix4(Vv);const i=a/((this.scale.x+this.scale.y+this.scale.z)/3),v=i*i,P=n.index,l=n.attributes.position;if(P!==null){const c=Math.max(0,s.start),d=Math.min(P.count,s.start+s.count);for(let X=c,h=d;X<h;X++){const u=P.getX(X);wa.fromBufferAttribute(l,u),qv(wa,u,v,f,t,e,this)}}else{const c=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);for(let X=c,h=d;X<h;X++)wa.fromBufferAttribute(l,X),qv(wa,X,v,f,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const f=e[n[0]];if(f!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=f.length;a<s;a++){const i=f[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=a}}}}}function qv(r,t,e,n,f,a,s){const i=bi.distanceSqToPoint(r);if(i<e){const v=new W;bi.closestPointToPoint(r,v),v.applyMatrix4(n);const P=f.ray.origin.distanceTo(v);if(P<f.near||P>f.far)return;a.push({distance:P,distanceToRay:Math.sqrt(i),point:v,index:t,face:null,object:s})}}class Gi extends rn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=BP,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _n extends Gi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}function Mn(r,t,e){return wo(r)?new r.constructor(r.subarray(t,e!==void 0?e:r.length)):r.slice(t,e)}function ma(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function wo(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ld(r){function t(f,a){return r[f]-r[a]}const e=r.length,n=new Array(e);for(let f=0;f!==e;++f)n[f]=f;return n.sort(t),n}function Uv(r,t,e){const n=r.length,f=new r.constructor(n);for(let a=0,s=0;s!==n;++a){const i=e[a]*t;for(let v=0;v!==t;++v)f[s++]=r[i+v]}return f}function mo(r,t,e,n){let f=1,a=r[0];for(;a!==void 0&&a[n]===void 0;)a=r[f++];if(a===void 0)return;let s=a[n];if(s!==void 0)if(Array.isArray(s))do s=a[n],s!==void 0&&(t.push(a.time),e.push.apply(e,s)),a=r[f++];while(a!==void 0);else if(s.toArray!==void 0)do s=a[n],s!==void 0&&(t.push(a.time),s.toArray(e,e.length)),a=r[f++];while(a!==void 0);else do s=a[n],s!==void 0&&(t.push(a.time),e.push(s)),a=r[f++];while(a!==void 0)}class Br{constructor(t,e,n,f){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=f!==void 0?f:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,f=e[n],a=e[n-1];n:{t:{let s;e:{f:if(!(t<f)){for(let i=n+2;;){if(f===void 0){if(t<a)break f;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===i)break;if(a=f,f=e[++n],t<f)break t}s=e.length;break e}if(!(t>=a)){const i=e[1];t<i&&(n=2,a=i);for(let v=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===v)break;if(f=a,a=e[--n-1],t>=a)break t}s=n,n=0;break e}break n}for(;n<s;){const i=n+s>>>1;t<e[i]?s=i:n=i+1}if(f=e[n],a=e[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(f===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,f)}return this.interpolate_(n,a,t,f)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,f=this.valueSize,a=t*f;for(let s=0;s!==f;++s)e[s]=n[a+s];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class jd extends Br{constructor(t,e,n,f){super(t,e,n,f),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:O8,endingEnd:O8}}intervalChanged_(t,e,n){const f=this.parameterPositions;let a=t-2,s=t+1,i=f[a],v=f[s];if(i===void 0)switch(this.getSettings_().endingStart){case S8:a=t,i=2*e-n;break;case V8:a=f.length-2,i=e+f[a]-f[a+1];break;default:a=t,i=n}if(v===void 0)switch(this.getSettings_().endingEnd){case S8:s=t,v=2*n-e;break;case V8:s=1,v=n+f[1]-f[0];break;default:s=t-1,v=e}const P=(n-e)*.5,o=this.valueSize;this._weightPrev=P/(e-i),this._weightNext=P/(v-n),this._offsetPrev=a*o,this._offsetNext=s*o}interpolate_(t,e,n,f){const a=this.resultBuffer,s=this.sampleValues,i=this.valueSize,v=t*i,P=v-i,o=this._offsetPrev,l=this._offsetNext,c=this._weightPrev,d=this._weightNext,X=(n-e)/(f-e),h=X*X,u=h*X,p=-c*u+2*c*h-c*X,z=(1+c)*u+(-1.5-2*c)*h+(-.5+c)*X+1,b=(-1-d)*u+(1.5+d)*h+.5*X,x=d*u-d*h;for(let w=0;w!==i;++w)a[w]=p*s[o+w]+z*s[P+w]+b*s[v+w]+x*s[l+w];return a}}class Wd extends Br{constructor(t,e,n,f){super(t,e,n,f)}interpolate_(t,e,n,f){const a=this.resultBuffer,s=this.sampleValues,i=this.valueSize,v=t*i,P=v-i,o=(n-e)/(f-e),l=1-o;for(let c=0;c!==i;++c)a[c]=s[P+c]*l+s[v+c]*o;return a}}class yd extends Br{constructor(t,e,n,f){super(t,e,n,f)}interpolate_(t){return this.copySampleValue_(t-1)}}class Xn{constructor(t,e,n,f){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ma(e,this.TimeBufferType),this.values=ma(n,this.ValueBufferType),this.setInterpolation(f||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ma(t.times,Array),values:ma(t.values,Array)};const f=t.getInterpolation();f!==t.DefaultInterpolation&&(n.interpolation=f)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new yd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Wd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new jd(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Er:e=this.InterpolantFactoryMethodDiscrete;break;case or:e=this.InterpolantFactoryMethodLinear;break;case ds:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Er;case this.InterpolantFactoryMethodLinear:return or;case this.InterpolantFactoryMethodSmooth:return ds}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,f=e.length;n!==f;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,f=e.length;n!==f;++n)e[n]*=t}return this}trim(t,e){const n=this.times,f=n.length;let a=0,s=f-1;for(;a!==f&&n[a]<t;)++a;for(;s!==-1&&n[s]>e;)--s;if(++s,a!==0||s!==f){a>=s&&(s=Math.max(s,1),a=s-1);const i=this.getValueSize();this.times=Mn(n,a,s),this.values=Mn(this.values,a*i,s*i)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,f=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let i=0;i!==a;i++){const v=n[i];if(typeof v=="number"&&isNaN(v)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,i,v),t=!1;break}if(s!==null&&s>v){console.error("THREE.KeyframeTrack: Out of order keys.",this,i,v,s),t=!1;break}s=v}if(f!==void 0&&wo(f))for(let i=0,v=f.length;i!==v;++i){const P=f[i];if(isNaN(P)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,i,P),t=!1;break}}return t}optimize(){const t=Mn(this.times),e=Mn(this.values),n=this.getValueSize(),f=this.getInterpolation()===ds,a=t.length-1;let s=1;for(let i=1;i<a;++i){let v=!1;const P=t[i],o=t[i+1];if(P!==o&&(i!==1||P!==t[0]))if(f)v=!0;else{const l=i*n,c=l-n,d=l+n;for(let X=0;X!==n;++X){const h=e[l+X];if(h!==e[c+X]||h!==e[d+X]){v=!0;break}}}if(v){if(i!==s){t[s]=t[i];const l=i*n,c=s*n;for(let d=0;d!==n;++d)e[c+d]=e[l+d]}++s}}if(a>0){t[s]=t[a];for(let i=a*n,v=s*n,P=0;P!==n;++P)e[v+P]=e[i+P];++s}return s!==t.length?(this.times=Mn(t,0,s),this.values=Mn(e,0,s*n)):(this.times=t,this.values=e),this}clone(){const t=Mn(this.times,0),e=Mn(this.values,0),n=this.constructor,f=new n(this.name,t,e);return f.createInterpolant=this.createInterpolant,f}}Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=or;class xr extends Xn{}xr.prototype.ValueTypeName="bool";xr.prototype.ValueBufferType=Array;xr.prototype.DefaultInterpolation=Er;xr.prototype.InterpolantFactoryMethodLinear=void 0;xr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ho extends Xn{}Ho.prototype.ValueTypeName="color";class pr extends Xn{}pr.prototype.ValueTypeName="number";class Nd extends Br{constructor(t,e,n,f){super(t,e,n,f)}interpolate_(t,e,n,f){const a=this.resultBuffer,s=this.sampleValues,i=this.valueSize,v=(n-e)/(f-e);let P=t*i;for(let o=P+i;P!==o;P+=4)vn.slerpFlat(a,0,s,P-i,s,P,v);return a}}class xf extends Xn{InterpolantFactoryMethodLinear(t){return new Nd(this.times,this.values,this.getValueSize(),t)}}xf.prototype.ValueTypeName="quaternion";xf.prototype.DefaultInterpolation=or;xf.prototype.InterpolantFactoryMethodSmooth=void 0;class zr extends Xn{}zr.prototype.ValueTypeName="string";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=Er;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;class ur extends Xn{}ur.prototype.ValueTypeName="vector";class Dd{constructor(t,e=-1,n,f=Zl){this.name=t,this.tracks=n,this.duration=e,this.blendMode=f,this.uuid=fn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,f=1/(t.fps||1);for(let s=0,i=n.length;s!==i;++s)e.push(Sd(n[s]).scale(f));const a=new this(t.name,t.duration,e,t.blendMode);return a.uuid=t.uuid,a}static toJSON(t){const e=[],n=t.tracks,f={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let a=0,s=n.length;a!==s;++a)e.push(Xn.toJSON(n[a]));return f}static CreateFromMorphTargetSequence(t,e,n,f){const a=e.length,s=[];for(let i=0;i<a;i++){let v=[],P=[];v.push((i+a-1)%a,i,(i+1)%a),P.push(0,1,0);const o=Ld(v);v=Uv(v,1,o),P=Uv(P,1,o),!f&&v[0]===0&&(v.push(a),P.push(P[0])),s.push(new pr(".morphTargetInfluences["+e[i].name+"]",v,P).scale(1/n))}return new this(t,-1,s)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const f=t;n=f.geometry&&f.geometry.animations||f.animations}for(let f=0;f<n.length;f++)if(n[f].name===e)return n[f];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const f={},a=/^([\w-]*?)([\d]+)$/;for(let i=0,v=t.length;i<v;i++){const P=t[i],o=P.name.match(a);if(o&&o.length>1){const l=o[1];let c=f[l];c||(f[l]=c=[]),c.push(P)}}const s=[];for(const i in f)s.push(this.CreateFromMorphTargetSequence(i,f[i],e,n));return s}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(l,c,d,X,h){if(d.length!==0){const u=[],p=[];mo(d,u,p,X),u.length!==0&&h.push(new l(c,u,p))}},f=[],a=t.name||"default",s=t.fps||30,i=t.blendMode;let v=t.length||-1;const P=t.hierarchy||[];for(let l=0;l<P.length;l++){const c=P[l].keys;if(!(!c||c.length===0))if(c[0].morphTargets){const d={};let X;for(X=0;X<c.length;X++)if(c[X].morphTargets)for(let h=0;h<c[X].morphTargets.length;h++)d[c[X].morphTargets[h]]=-1;for(const h in d){const u=[],p=[];for(let z=0;z!==c[X].morphTargets.length;++z){const b=c[X];u.push(b.time),p.push(b.morphTarget===h?1:0)}f.push(new pr(".morphTargetInfluence["+h+"]",u,p))}v=d.length*s}else{const d=".bones["+e[l].name+"]";n(ur,d+".position",c,"pos",f),n(xf,d+".quaternion",c,"rot",f),n(ur,d+".scale",c,"scl",f)}}return f.length===0?null:new this(a,v,f,i)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,f=t.length;n!==f;++n){const a=this.tracks[n];e=Math.max(e,a.times[a.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Od(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return pr;case"vector":case"vector2":case"vector3":case"vector4":return ur;case"color":return Ho;case"quaternion":return xf;case"bool":case"boolean":return xr;case"string":return zr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Sd(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Od(r.type);if(r.times===void 0){const e=[],n=[];mo(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const dr={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Vd{constructor(t,e,n){const f=this;let a=!1,s=0,i=0,v;const P=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(o){i++,a===!1&&f.onStart!==void 0&&f.onStart(o,s,i),a=!0},this.itemEnd=function(o){s++,f.onProgress!==void 0&&f.onProgress(o,s,i),s===i&&(a=!1,f.onLoad!==void 0&&f.onLoad())},this.itemError=function(o){f.onError!==void 0&&f.onError(o)},this.resolveURL=function(o){return v?v(o):o},this.setURLModifier=function(o){return v=o,this},this.addHandler=function(o,l){return P.push(o,l),this},this.removeHandler=function(o){const l=P.indexOf(o);return l!==-1&&P.splice(l,2),this},this.getHandler=function(o){for(let l=0,c=P.length;l<c;l+=2){const d=P[l],X=P[l+1];if(d.global&&(d.lastIndex=0),d.test(o))return X}return null}}}const Ao=new Vd;let wf=class{constructor(t){this.manager=t!==void 0?t:Ao,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(f,a){n.load(t,f,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};wf.DEFAULT_MATERIAL_NAME="__DEFAULT";const Tn={};class qd extends Error{constructor(t,e){super(t),this.response=e}}class gi extends wf{constructor(t){super(t)}load(t,e,n,f){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=dr.get(t);if(a!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(a),this.manager.itemEnd(t)},0),a;if(Tn[t]!==void 0){Tn[t].push({onLoad:e,onProgress:n,onError:f});return}Tn[t]=[],Tn[t].push({onLoad:e,onProgress:n,onError:f});const s=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),i=this.mimeType,v=this.responseType;fetch(s).then(P=>{if(P.status===200||P.status===0){if(P.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||P.body===void 0||P.body.getReader===void 0)return P;const o=Tn[t],l=P.body.getReader(),c=P.headers.get("Content-Length")||P.headers.get("X-File-Size"),d=c?parseInt(c):0,X=d!==0;let h=0;const u=new ReadableStream({start(p){z();function z(){l.read().then(({done:b,value:x})=>{if(b)p.close();else{h+=x.byteLength;const w=new ProgressEvent("progress",{lengthComputable:X,loaded:h,total:d});for(let L=0,H=o.length;L<H;L++){const N=o[L];N.onProgress&&N.onProgress(w)}p.enqueue(x),z()}})}}});return new Response(u)}else throw new qd(`fetch for "${P.url}" responded with ${P.status}: ${P.statusText}`,P)}).then(P=>{switch(v){case"arraybuffer":return P.arrayBuffer();case"blob":return P.blob();case"document":return P.text().then(o=>new DOMParser().parseFromString(o,i));case"json":return P.json();default:if(i===void 0)return P.text();{const l=/charset="?([^;"\s]*)"?/i.exec(i),c=l&&l[1]?l[1].toLowerCase():void 0,d=new TextDecoder(c);return P.arrayBuffer().then(X=>d.decode(X))}}}).then(P=>{dr.add(t,P);const o=Tn[t];delete Tn[t];for(let l=0,c=o.length;l<c;l++){const d=o[l];d.onLoad&&d.onLoad(P)}}).catch(P=>{const o=Tn[t];if(o===void 0)throw this.manager.itemError(t),P;delete Tn[t];for(let l=0,c=o.length;l<c;l++){const d=o[l];d.onError&&d.onError(P)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Ud extends wf{constructor(t){super(t)}load(t,e,n,f){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,s=dr.get(t);if(s!==void 0)return a.manager.itemStart(t),setTimeout(function(){e&&e(s),a.manager.itemEnd(t)},0),s;const i=Yr("img");function v(){o(),dr.add(t,this),e&&e(this),a.manager.itemEnd(t)}function P(l){o(),f&&f(l),a.manager.itemError(t),a.manager.itemEnd(t)}function o(){i.removeEventListener("load",v,!1),i.removeEventListener("error",P,!1)}return i.addEventListener("load",v,!1),i.addEventListener("error",P,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(i.crossOrigin=this.crossOrigin),a.manager.itemStart(t),i.src=t,i}}class To extends wf{constructor(t){super(t)}load(t,e,n,f){const a=new we,s=new Ud(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(i){a.image=i,a.needsUpdate=!0,e!==void 0&&e(a)},n,f),a}}class Ci extends te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Fs=new bt,Zv=new W,Mv=new W;class Ji{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ui,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Zv.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zv),Mv.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mv),e.updateMatrixWorld(),Fs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fs)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Zd extends Ji{constructor(){super(new Te(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=lr*2*t.angle*this.focus,f=this.mapSize.width/this.mapSize.height,a=t.distance||e.far;(n!==e.fov||f!==e.aspect||a!==e.far)&&(e.fov=n,e.aspect=f,e.far=a,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Md extends Ci{constructor(t,e,n=0,f=Math.PI/3,a=0,s=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(te.DEFAULT_UP),this.updateMatrix(),this.target=new te,this.distance=n,this.angle=f,this.penumbra=a,this.decay=s,this.map=null,this.shadow=new Zd}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Kv=new bt,yr=new W,Gs=new W;class Kd extends Ji{constructor(){super(new Te(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new Jt(2,1,1,1),new Jt(0,1,1,1),new Jt(3,1,1,1),new Jt(1,1,1,1),new Jt(3,0,1,1),new Jt(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,f=this.matrix,a=t.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),yr.setFromMatrixPosition(t.matrixWorld),n.position.copy(yr),Gs.copy(n.position),Gs.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Gs),n.updateMatrixWorld(),f.makeTranslation(-yr.x,-yr.y,-yr.z),Kv.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kv)}}class Rd extends Ci{constructor(t,e,n=0,f=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=f,this.shadow=new Kd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Fd extends Ji{constructor(){super(new Zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gd extends Ci{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(te.DEFAULT_UP),this.updateMatrix(),this.target=new te,this.shadow=new Fd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class xi{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,f=t.length;n<f;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class gd extends wf{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,f){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,s=dr.get(t);if(s!==void 0)return a.manager.itemStart(t),setTimeout(function(){e&&e(s),a.manager.itemEnd(t)},0),s;const i={};i.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",i.headers=this.requestHeader,fetch(t,i).then(function(v){return v.blob()}).then(function(v){return createImageBitmap(v,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(v){dr.add(t,v),e&&e(v),a.manager.itemEnd(t)}).catch(function(v){f&&f(v),a.manager.itemError(t),a.manager.itemEnd(t)}),a.manager.itemStart(t)}}let Ha;class Cd{static getContext(){return Ha===void 0&&(Ha=new(window.AudioContext||window.webkitAudioContext)),Ha}static setContext(t){Ha=t}}class Jd extends wf{constructor(t){super(t)}load(t,e,n,f){const a=this,s=new gi(this.manager);s.setResponseType("arraybuffer"),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(t,function(v){try{const P=v.slice(0);Cd.getContext().decodeAudioData(P,function(l){e(l)},i)}catch(P){i(P)}},n,f);function i(v){f?f(v):console.error(v),a.manager.itemError(t)}}}class Ed{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Rv();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Rv(){return(typeof performance>"u"?Date:performance).now()}const Ei="\\[\\]\\.:\\/",Yd=new RegExp("["+Ei+"]","g"),Yi="[^"+Ei+"]",kd="[^"+Ei.replace("\\.","")+"]",Bd=/((?:WC+[\/:])*)/.source.replace("WC",Yi),Id=/(WCOD+)?/.source.replace("WCOD",kd),Qd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yi),_d=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yi),$d=new RegExp("^"+Bd+Id+Qd+_d+"$"),tX=["material","materials","bones","map"];class eX{constructor(t,e,n){const f=n||Yt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,f)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,f=this._bindings[n];f!==void 0&&f.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let f=this._targetGroup.nCachedObjects_,a=n.length;f!==a;++f)n[f].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Yt{constructor(t,e,n){this.path=e,this.parsedPath=n||Yt.parseTrackName(e),this.node=Yt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Yt.Composite(t,e,n):new Yt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yd,"")}static parseTrackName(t){const e=$d.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},f=n.nodeName&&n.nodeName.lastIndexOf(".");if(f!==void 0&&f!==-1){const a=n.nodeName.substring(f+1);tX.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,f),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(a){for(let s=0;s<a.length;s++){const i=a[s];if(i.name===e||i.uuid===e)return i;const v=n(i.children);if(v)return v}return null},f=n(t.children);if(f)return f}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let f=0,a=n.length;f!==a;++f)t[e++]=n[f]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let f=0,a=n.length;f!==a;++f)n[f]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let f=0,a=n.length;f!==a;++f)n[f]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let f=0,a=n.length;f!==a;++f)n[f]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,f=e.propertyName;let a=e.propertyIndex;if(t||(t=Yt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let P=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let o=0;o<t.length;o++)if(t[o].name===P){P=o;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(P!==void 0){if(t[P]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[P]}}const s=t[f];if(s===void 0){const P=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+P+"."+f+" but it wasn't found.",t);return}let i=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?i=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(i=this.Versioning.MatrixWorldNeedsUpdate);let v=this.BindingType.Direct;if(a!==void 0){if(f==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}v=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=a}else s.fromArray!==void 0&&s.toArray!==void 0?(v=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(v=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=f;this.getValue=this.GetterByBindingType[v],this.setValue=this.SetterByBindingTypeAndVersioning[v][i]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Yt.Composite=eX;Yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Yt.prototype.GetterByBindingType=[Yt.prototype._getValue_direct,Yt.prototype._getValue_array,Yt.prototype._getValue_arrayElement,Yt.prototype._getValue_toArray];Yt.prototype.SetterByBindingTypeAndVersioning=[[Yt.prototype._setValue_direct,Yt.prototype._setValue_direct_setNeedsUpdate,Yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_array,Yt.prototype._setValue_array_setNeedsUpdate,Yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_arrayElement,Yt.prototype._setValue_arrayElement_setNeedsUpdate,Yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_fromArray,Yt.prototype._setValue_fromArray_setNeedsUpdate,Yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Fv{constructor(t,e,n=0,f=1/0){this.ray=new Xr(t,e),this.near=n,this.far=f,this.camera=null,this.layers=new qi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return zi(t,this,n,e),n.sort(Gv),n}intersectObjects(t,e=!0,n=[]){for(let f=0,a=t.length;f<a;f++)zi(t[f],this,n,e);return n.sort(Gv),n}}function Gv(r,t){return r.distance-t.distance}function zi(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const f=r.children;for(let a=0,s=f.length;a<s;a++)zi(f[a],t,e,!0)}}class gv{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Cv=new W,Aa=new W;class an{constructor(t=new W,e=new W){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Cv.subVectors(t,this.start),Aa.subVectors(this.end,this.start);const n=Aa.dot(Aa);let a=Aa.dot(Cv)/n;return e&&(a=be(a,0,1)),a}closestPointToPoint(t,e,n){const f=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(f).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oi}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oi);const Lo=0,nX=1,fX=2,Jv=2,gs=1.25,Ev=1,Ja=6*4+4+4,fs=65535,rX=Math.pow(2,-24),Cs=Symbol("SKIP_GENERATION");function aX(r){return r.index?r.index.count:r.attributes.position.count}function wr(r){return aX(r)/3}function sX(r,t=ArrayBuffer){return r>65535?new Uint32Array(new t(4*r)):new Uint16Array(new t(2*r))}function iX(r,t){if(!r.index){const e=r.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,f=sX(e,n);r.setIndex(new le(f,1));for(let a=0;a<e;a++)f[a]=a}}function jo(r){const t=wr(r),e=r.drawRange,n=e.start/3,f=(e.start+e.count)/3,a=Math.max(0,n),s=Math.min(t,f)-a;return[{offset:Math.floor(a),count:Math.floor(s)}]}function Wo(r){if(!r.groups||!r.groups.length)return jo(r);const t=[],e=new Set,n=r.drawRange,f=n.start/3,a=(n.start+n.count)/3;for(const i of r.groups){const v=i.start/3,P=(i.start+i.count)/3;e.add(Math.max(f,v)),e.add(Math.min(a,P))}const s=Array.from(e.values()).sort((i,v)=>i-v);for(let i=0;i<s.length-1;i++){const v=s[i],P=s[i+1];t.push({offset:Math.floor(v),count:Math.floor(P-v)})}return t}function vX(r){if(r.groups.length===0)return!1;const t=wr(r),e=Wo(r).sort((a,s)=>a.offset-s.offset),n=e[e.length-1];n.count=Math.min(t-n.offset,n.count);let f=0;return e.forEach(({count:a})=>f+=a),t!==f}function $t(r,t,e){return e.min.x=t[r],e.min.y=t[r+1],e.min.z=t[r+2],e.max.x=t[r+3],e.max.y=t[r+4],e.max.z=t[r+5],e}function PX(r){r[0]=r[1]=r[2]=1/0,r[3]=r[4]=r[5]=-1/0}function Yv(r){let t=-1,e=-1/0;for(let n=0;n<3;n++){const f=r[n+3]-r[n];f>e&&(e=f,t=n)}return t}function kv(r,t){t.set(r)}function Bv(r,t,e){let n,f;for(let a=0;a<3;a++){const s=a+3;n=r[a],f=t[a],e[a]=n<f?n:f,n=r[s],f=t[s],e[s]=n>f?n:f}}function Ta(r,t,e){for(let n=0;n<3;n++){const f=t[r+2*n],a=t[r+2*n+1],s=f-a,i=f+a;s<e[n]&&(e[n]=s),i>e[n+3]&&(e[n+3]=i)}}function Nr(r){const t=r[3]-r[0],e=r[4]-r[1],n=r[5]-r[2];return 2*(t*e+e*n+n*t)}function Js(r,t,e,n,f=null){let a=1/0,s=1/0,i=1/0,v=-1/0,P=-1/0,o=-1/0,l=1/0,c=1/0,d=1/0,X=-1/0,h=-1/0,u=-1/0;const p=f!==null;for(let z=t*6,b=(t+e)*6;z<b;z+=6){const x=r[z+0],w=r[z+1],L=x-w,H=x+w;L<a&&(a=L),H>v&&(v=H),p&&x<l&&(l=x),p&&x>X&&(X=x);const N=r[z+2],m=r[z+3],A=N-m,q=N+m;A<s&&(s=A),q>P&&(P=q),p&&N<c&&(c=N),p&&N>h&&(h=N);const U=r[z+4],O=r[z+5],V=U-O,Z=U+O;V<i&&(i=V),Z>o&&(o=Z),p&&U<d&&(d=U),p&&U>u&&(u=U)}n[0]=a,n[1]=s,n[2]=i,n[3]=v,n[4]=P,n[5]=o,p&&(f[0]=l,f[1]=c,f[2]=d,f[3]=X,f[4]=h,f[5]=u)}function oX(r,t,e,n){let f=1/0,a=1/0,s=1/0,i=-1/0,v=-1/0,P=-1/0;for(let o=t*6,l=(t+e)*6;o<l;o+=6){const c=r[o+0];c<f&&(f=c),c>i&&(i=c);const d=r[o+2];d<a&&(a=d),d>v&&(v=d);const X=r[o+4];X<s&&(s=X),X>P&&(P=X)}n[0]=f,n[1]=a,n[2]=s,n[3]=i,n[4]=v,n[5]=P}function lX(r,t){PX(t);const e=r.attributes.position,n=r.index?r.index.array:null,f=wr(r),a=new Float32Array(f*6),s=e.normalized,i=e.array,v=e.offset||0;let P=3;e.isInterleavedBufferAttribute&&(P=e.data.stride);const o=["getX","getY","getZ"];for(let l=0;l<f;l++){const c=l*3,d=l*6;let X=c+0,h=c+1,u=c+2;n&&(X=n[X],h=n[h],u=n[u]),s||(X=X*P+v,h=h*P+v,u=u*P+v);for(let p=0;p<3;p++){let z,b,x;s?(z=e[o[p]](X),b=e[o[p]](h),x=e[o[p]](u)):(z=i[X+p],b=i[h+p],x=i[u+p]);let w=z;b<w&&(w=b),x<w&&(w=x);let L=z;b>L&&(L=b),x>L&&(L=x);const H=(L-w)/2,N=p*2;a[d+N+0]=w+H,a[d+N+1]=H+(Math.abs(w)+H)*rX,w<t[p]&&(t[p]=w),L>t[p+3]&&(t[p+3]=L)}}return a}const jn=32,cX=(r,t)=>r.candidate-t.candidate,Kn=new Array(jn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),La=new Float32Array(6);function pX(r,t,e,n,f,a){let s=-1,i=0;if(a===Lo)s=Yv(t),s!==-1&&(i=(t[s]+t[s+3])/2);else if(a===nX)s=Yv(r),s!==-1&&(i=uX(e,n,f,s));else if(a===fX){const v=Nr(r);let P=gs*f;const o=n*6,l=(n+f)*6;for(let c=0;c<3;c++){const d=t[c],u=(t[c+3]-d)/jn;if(f<jn/4){const p=[...Kn];p.length=f;let z=0;for(let x=o;x<l;x+=6,z++){const w=p[z];w.candidate=e[x+2*c],w.count=0;const{bounds:L,leftCacheBounds:H,rightCacheBounds:N}=w;for(let m=0;m<3;m++)N[m]=1/0,N[m+3]=-1/0,H[m]=1/0,H[m+3]=-1/0,L[m]=1/0,L[m+3]=-1/0;Ta(x,e,L)}p.sort(cX);let b=f;for(let x=0;x<b;x++){const w=p[x];for(;x+1<b&&p[x+1].candidate===w.candidate;)p.splice(x+1,1),b--}for(let x=o;x<l;x+=6){const w=e[x+2*c];for(let L=0;L<b;L++){const H=p[L];w>=H.candidate?Ta(x,e,H.rightCacheBounds):(Ta(x,e,H.leftCacheBounds),H.count++)}}for(let x=0;x<b;x++){const w=p[x],L=w.count,H=f-w.count,N=w.leftCacheBounds,m=w.rightCacheBounds;let A=0;L!==0&&(A=Nr(N)/v);let q=0;H!==0&&(q=Nr(m)/v);const U=Ev+gs*(A*L+q*H);U<P&&(s=c,P=U,i=w.candidate)}}else{for(let b=0;b<jn;b++){const x=Kn[b];x.count=0,x.candidate=d+u+b*u;const w=x.bounds;for(let L=0;L<3;L++)w[L]=1/0,w[L+3]=-1/0}for(let b=o;b<l;b+=6){let L=~~((e[b+2*c]-d)/u);L>=jn&&(L=jn-1);const H=Kn[L];H.count++,Ta(b,e,H.bounds)}const p=Kn[jn-1];kv(p.bounds,p.rightCacheBounds);for(let b=jn-2;b>=0;b--){const x=Kn[b],w=Kn[b+1];Bv(x.bounds,w.rightCacheBounds,x.rightCacheBounds)}let z=0;for(let b=0;b<jn-1;b++){const x=Kn[b],w=x.count,L=x.bounds,N=Kn[b+1].rightCacheBounds;w!==0&&(z===0?kv(L,La):Bv(L,La,La)),z+=w;let m=0,A=0;z!==0&&(m=Nr(La)/v);const q=f-z;q!==0&&(A=Nr(N)/v);const U=Ev+gs*(m*z+A*q);U<P&&(s=c,P=U,i=x.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${a} used.`);return{axis:s,pos:i}}function uX(r,t,e,n){let f=0;for(let a=t,s=t+e;a<s;a++)f+=r[a*6+n*2];return f/e}class ja{constructor(){}}function dX(r,t,e,n,f,a){let s=n,i=n+f-1;const v=a.pos,P=a.axis*2;for(;;){for(;s<=i&&e[s*6+P]<v;)s++;for(;s<=i&&e[i*6+P]>=v;)i--;if(s<i){for(let o=0;o<3;o++){let l=t[s*3+o];t[s*3+o]=t[i*3+o],t[i*3+o]=l}for(let o=0;o<6;o++){let l=e[s*6+o];e[s*6+o]=e[i*6+o],e[i*6+o]=l}s++,i--}else return s}}function XX(r,t,e,n,f,a){let s=n,i=n+f-1;const v=a.pos,P=a.axis*2;for(;;){for(;s<=i&&e[s*6+P]<v;)s++;for(;s<=i&&e[i*6+P]>=v;)i--;if(s<i){let o=r[s];r[s]=r[i],r[i]=o;for(let l=0;l<6;l++){let c=e[s*6+l];e[s*6+l]=e[i*6+l],e[i*6+l]=c}s++,i--}else return s}}function hX(r,t){const e=(r.index?r.index.count:r.attributes.position.count)/3,n=e>2**16,f=n?4:2,a=t?new SharedArrayBuffer(e*f):new ArrayBuffer(e*f),s=n?new Uint32Array(a):new Uint16Array(a);for(let i=0,v=s.length;i<v;i++)s[i]=i;return s}function bX(r,t){const e=r.geometry,n=e.index?e.index.array:null,f=t.maxDepth,a=t.verbose,s=t.maxLeafTris,i=t.strategy,v=t.onProgress,P=wr(e),o=r._indirectBuffer;let l=!1;const c=new Float32Array(6),d=new Float32Array(6),X=lX(e,c),h=t.indirect?XX:dX,u=[],p=t.indirect?jo(e):Wo(e);if(p.length===1){const x=p[0],w=new ja;w.boundingData=c,oX(X,x.offset,x.count,d),b(w,x.offset,x.count,d),u.push(w)}else for(let x of p){const w=new ja;w.boundingData=new Float32Array(6),Js(X,x.offset,x.count,w.boundingData,d),b(w,x.offset,x.count,d),u.push(w)}return u;function z(x){v&&v(x/P)}function b(x,w,L,H=null,N=0){if(!l&&N>=f&&(l=!0,a&&(console.warn(`MeshBVH: Max depth of ${f} reached when generating BVH. Consider increasing maxDepth.`),console.warn(e))),L<=s||N>=f)return z(w+L),x.offset=w,x.count=L,x;const m=pX(x.boundingData,H,X,w,L,i);if(m.axis===-1)return z(w+L),x.offset=w,x.count=L,x;const A=h(o,n,X,w,L,m);if(A===w||A===w+L)z(w+L),x.offset=w,x.count=L;else{x.splitAxis=m.axis;const q=new ja,U=w,O=A-w;x.left=q,q.boundingData=new Float32Array(6),Js(X,U,O,q.boundingData,d),b(q,U,O,d,N+1);const V=new ja,Z=A,E=L-O;x.right=V,V.boundingData=new Float32Array(6),Js(X,Z,E,V.boundingData,d),b(V,Z,E,d,N+1)}return x}}function xX(r,t){const e=r.geometry;t.indirect&&(r._indirectBuffer=hX(e,t.useSharedArrayBuffer),vX(e)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),r._indirectBuffer||iX(e,t);const n=bX(r,t);let f,a,s;const i=[],v=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;for(let l=0;l<n.length;l++){const c=n[l];let d=P(c);const X=new v(Ja*d);f=new Float32Array(X),a=new Uint32Array(X),s=new Uint16Array(X),o(0,c),i.push(X)}r._roots=i;return;function P(l){return l.count?1:1+P(l.left)+P(l.right)}function o(l,c){const d=l/4,X=l/2,h=!!c.count,u=c.boundingData;for(let p=0;p<6;p++)f[d+p]=u[p];if(h){const p=c.offset,z=c.count;return a[d+6]=p,s[X+14]=z,s[X+15]=fs,l+Ja}else{const p=c.left,z=c.right,b=c.splitAxis;let x;if(x=o(l+Ja,p),x/4>Math.pow(2,32))throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return a[d+6]=x/4,x=o(x,z),a[d+7]=b,x}}}class Dn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,f=-1/0;for(let a=0,s=t.length;a<s;a++){const v=t[a][e];n=v<n?v:n,f=v>f?v:f}this.min=n,this.max=f}setFromPoints(t,e){let n=1/0,f=-1/0;for(let a=0,s=e.length;a<s;a++){const i=e[a],v=t.dot(i);n=v<n?v:n,f=v>f?v:f}this.min=n,this.max=f}isSeparated(t){return this.min>t.max||t.min>this.max}}Dn.prototype.setFromBox=function(){const r=new W;return function(e,n){const f=n.min,a=n.max;let s=1/0,i=-1/0;for(let v=0;v<=1;v++)for(let P=0;P<=1;P++)for(let o=0;o<=1;o++){r.x=f.x*v+a.x*(1-v),r.y=f.y*P+a.y*(1-P),r.z=f.z*o+a.z*(1-o);const l=e.dot(r);s=Math.min(l,s),i=Math.max(l,i)}this.min=s,this.max=i}}();const zX=function(){const r=new W,t=new W,e=new W;return function(f,a,s){const i=f.start,v=r,P=a.start,o=t;e.subVectors(i,P),r.subVectors(f.end,f.start),t.subVectors(a.end,a.start);const l=e.dot(o),c=o.dot(v),d=o.dot(o),X=e.dot(v),u=v.dot(v)*d-c*c;let p,z;u!==0?p=(l*c-X*d)/u:p=0,z=(l+p*c)/d,s.x=p,s.y=z}}(),ki=function(){const r=new ht,t=new W,e=new W;return function(f,a,s,i){zX(f,a,r);let v=r.x,P=r.y;if(v>=0&&v<=1&&P>=0&&P<=1){f.at(v,s),a.at(P,i);return}else if(v>=0&&v<=1){P<0?a.at(0,i):a.at(1,i),f.closestPointToPoint(i,!0,s);return}else if(P>=0&&P<=1){v<0?f.at(0,s):f.at(1,s),a.closestPointToPoint(s,!0,i);return}else{let o;v<0?o=f.start:o=f.end;let l;P<0?l=a.start:l=a.end;const c=t,d=e;if(f.closestPointToPoint(l,!0,t),a.closestPointToPoint(o,!0,e),c.distanceToSquared(l)<=d.distanceToSquared(o)){s.copy(c),i.copy(l);return}else{s.copy(o),i.copy(d);return}}}}(),wX=function(){const r=new W,t=new W,e=new en,n=new an;return function(a,s){const{radius:i,center:v}=a,{a:P,b:o,c:l}=s;if(n.start=P,n.end=o,n.closestPointToPoint(v,!0,r).distanceTo(v)<=i||(n.start=P,n.end=l,n.closestPointToPoint(v,!0,r).distanceTo(v)<=i)||(n.start=o,n.end=l,n.closestPointToPoint(v,!0,r).distanceTo(v)<=i))return!0;const h=s.getPlane(e);if(Math.abs(h.distanceToPoint(v))<=i){const p=h.projectPoint(v,t);if(s.containsPoint(p))return!0}return!1}}(),mX=1e-15;function Es(r){return Math.abs(r)<mX}class Pn extends Ae{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new W),this.satBounds=new Array(4).fill().map(()=>new Dn),this.points=[this.a,this.b,this.c],this.sphere=new on,this.plane=new en,this.needsUpdate=!0}intersectsSphere(t){return wX(t,this)}update(){const t=this.a,e=this.b,n=this.c,f=this.points,a=this.satAxes,s=this.satBounds,i=a[0],v=s[0];this.getNormal(i),v.setFromPoints(i,f);const P=a[1],o=s[1];P.subVectors(t,e),o.setFromPoints(P,f);const l=a[2],c=s[2];l.subVectors(e,n),c.setFromPoints(l,f);const d=a[3],X=s[3];d.subVectors(n,t),X.setFromPoints(d,f),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(i,t),this.needsUpdate=!1}}Pn.prototype.closestPointToSegment=function(){const r=new W,t=new W,e=new an;return function(f,a=null,s=null){const{start:i,end:v}=f,P=this.points;let o,l=1/0;for(let c=0;c<3;c++){const d=(c+1)%3;e.start.copy(P[c]),e.end.copy(P[d]),ki(e,f,r,t),o=r.distanceToSquared(t),o<l&&(l=o,a&&a.copy(r),s&&s.copy(t))}return this.closestPointToPoint(i,r),o=i.distanceToSquared(r),o<l&&(l=o,a&&a.copy(r),s&&s.copy(i)),this.closestPointToPoint(v,r),o=v.distanceToSquared(r),o<l&&(l=o,a&&a.copy(r),s&&s.copy(v)),Math.sqrt(l)}}();Pn.prototype.intersectsTriangle=function(){const r=new Pn,t=new Array(3),e=new Array(3),n=new Dn,f=new Dn,a=new W,s=new W,i=new W,v=new W,P=new W,o=new an,l=new an,c=new an,d=new W;function X(h,u,p){const z=h.points;let b=0,x=-1;for(let w=0;w<3;w++){const{start:L,end:H}=o;L.copy(z[w]),H.copy(z[(w+1)%3]),o.delta(s);const N=Es(u.distanceToPoint(L));if(Es(u.normal.dot(s))&&N){p.copy(o),b=2;break}const m=u.intersectLine(o,d);if(!m&&N&&d.copy(L),(m||N)&&!Es(d.distanceTo(H))){if(b<=1)(b===1?p.start:p.end).copy(d),N&&(x=b);else if(b>=2){(x===1?p.start:p.end).copy(d),b=2;break}if(b++,b===2&&x===-1)break}}return b}return function(u,p=null,z=!1){this.needsUpdate&&this.update(),u.isExtendedTriangle?u.needsUpdate&&u.update():(r.copy(u),r.update(),u=r);const b=this.plane,x=u.plane;if(Math.abs(b.normal.dot(x.normal))>1-1e-10){const w=this.satBounds,L=this.satAxes;e[0]=u.a,e[1]=u.b,e[2]=u.c;for(let m=0;m<4;m++){const A=w[m],q=L[m];if(n.setFromPoints(q,e),A.isSeparated(n))return!1}const H=u.satBounds,N=u.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let m=0;m<4;m++){const A=H[m],q=N[m];if(n.setFromPoints(q,t),A.isSeparated(n))return!1}for(let m=0;m<4;m++){const A=L[m];for(let q=0;q<4;q++){const U=N[q];if(a.crossVectors(A,U),n.setFromPoints(a,t),f.setFromPoints(a,e),n.isSeparated(f))return!1}}return p&&(z||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),p.start.set(0,0,0),p.end.set(0,0,0)),!0}else{const w=X(this,x,l);if(w===1&&u.containsPoint(l.end))return p&&(p.start.copy(l.end),p.end.copy(l.end)),!0;if(w!==2)return!1;const L=X(u,b,c);if(L===1&&this.containsPoint(c.end))return p&&(p.start.copy(c.end),p.end.copy(c.end)),!0;if(L!==2)return!1;if(l.delta(i),c.delta(v),i.dot(v)<0){let O=c.start;c.start=c.end,c.end=O}const H=l.start.dot(i),N=l.end.dot(i),m=c.start.dot(i),A=c.end.dot(i),q=N<m,U=H<A;return H!==A&&m!==N&&q===U?!1:(p&&(P.subVectors(l.start,c.start),P.dot(i)>0?p.start.copy(l.start):p.start.copy(c.start),P.subVectors(l.end,c.end),P.dot(i)<0?p.end.copy(l.end):p.end.copy(c.end)),!0)}}}();Pn.prototype.distanceToPoint=function(){const r=new W;return function(e){return this.closestPointToPoint(e,r),e.distanceTo(r)}}();Pn.prototype.distanceToTriangle=function(){const r=new W,t=new W,e=["a","b","c"],n=new an,f=new an;return function(s,i=null,v=null){const P=i||v?n:null;if(this.intersectsTriangle(s,P))return(i||v)&&(i&&P.getCenter(i),v&&P.getCenter(v)),0;let o=1/0;for(let l=0;l<3;l++){let c;const d=e[l],X=s[d];this.closestPointToPoint(X,r),c=X.distanceToSquared(r),c<o&&(o=c,i&&i.copy(r),v&&v.copy(X));const h=this[d];s.closestPointToPoint(h,r),c=h.distanceToSquared(r),c<o&&(o=c,i&&i.copy(h),v&&v.copy(r))}for(let l=0;l<3;l++){const c=e[l],d=e[(l+1)%3];n.set(this[c],this[d]);for(let X=0;X<3;X++){const h=e[X],u=e[(X+1)%3];f.set(s[h],s[u]),ki(n,f,r,t);const p=r.distanceToSquared(t);p<o&&(o=p,i&&i.copy(r),v&&v.copy(t))}}return Math.sqrt(o)}}();class Oe{constructor(t,e,n){this.isOrientedBox=!0,this.min=new W,this.max=new W,this.matrix=new bt,this.invMatrix=new bt,this.points=new Array(8).fill().map(()=>new W),this.satAxes=new Array(3).fill().map(()=>new W),this.satBounds=new Array(3).fill().map(()=>new Dn),this.alignedSatBounds=new Array(3).fill().map(()=>new Dn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}Oe.prototype.update=function(){return function(){const t=this.matrix,e=this.min,n=this.max,f=this.points;for(let P=0;P<=1;P++)for(let o=0;o<=1;o++)for(let l=0;l<=1;l++){const c=1*P|2*o|4*l,d=f[c];d.x=P?n.x:e.x,d.y=o?n.y:e.y,d.z=l?n.z:e.z,d.applyMatrix4(t)}const a=this.satBounds,s=this.satAxes,i=f[0];for(let P=0;P<3;P++){const o=s[P],l=a[P],c=1<<P,d=f[c];o.subVectors(i,d),l.setFromPoints(o,f)}const v=this.alignedSatBounds;v[0].setFromPointsField(f,"x"),v[1].setFromPointsField(f,"y"),v[2].setFromPointsField(f,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();Oe.prototype.intersectsBox=function(){const r=new Dn;return function(e){this.needsUpdate&&this.update();const n=e.min,f=e.max,a=this.satBounds,s=this.satAxes,i=this.alignedSatBounds;if(r.min=n.x,r.max=f.x,i[0].isSeparated(r)||(r.min=n.y,r.max=f.y,i[1].isSeparated(r))||(r.min=n.z,r.max=f.z,i[2].isSeparated(r)))return!1;for(let v=0;v<3;v++){const P=s[v],o=a[v];if(r.setFromBox(P,e),o.isSeparated(r))return!1}return!0}}();Oe.prototype.intersectsTriangle=function(){const r=new Pn,t=new Array(3),e=new Dn,n=new Dn,f=new W;return function(s){this.needsUpdate&&this.update(),s.isExtendedTriangle?s.needsUpdate&&s.update():(r.copy(s),r.update(),s=r);const i=this.satBounds,v=this.satAxes;t[0]=s.a,t[1]=s.b,t[2]=s.c;for(let c=0;c<3;c++){const d=i[c],X=v[c];if(e.setFromPoints(X,t),d.isSeparated(e))return!1}const P=s.satBounds,o=s.satAxes,l=this.points;for(let c=0;c<3;c++){const d=P[c],X=o[c];if(e.setFromPoints(X,l),d.isSeparated(e))return!1}for(let c=0;c<3;c++){const d=v[c];for(let X=0;X<4;X++){const h=o[X];if(f.crossVectors(d,h),e.setFromPoints(f,t),n.setFromPoints(f,l),e.isSeparated(n))return!1}}return!0}}();Oe.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();Oe.prototype.distanceToPoint=function(){const r=new W;return function(e){return this.closestPointToPoint(e,r),e.distanceTo(r)}}();Oe.prototype.distanceToBox=function(){const r=["x","y","z"],t=new Array(12).fill().map(()=>new an),e=new Array(12).fill().map(()=>new an),n=new W,f=new W;return function(s,i=0,v=null,P=null){if(this.needsUpdate&&this.update(),this.intersectsBox(s))return(v||P)&&(s.getCenter(f),this.closestPointToPoint(f,n),s.closestPointToPoint(n,f),v&&v.copy(n),P&&P.copy(f)),0;const o=i*i,l=s.min,c=s.max,d=this.points;let X=1/0;for(let u=0;u<8;u++){const p=d[u];f.copy(p).clamp(l,c);const z=p.distanceToSquared(f);if(z<X&&(X=z,v&&v.copy(p),P&&P.copy(f),z<o))return Math.sqrt(z)}let h=0;for(let u=0;u<3;u++)for(let p=0;p<=1;p++)for(let z=0;z<=1;z++){const b=(u+1)%3,x=(u+2)%3,w=p<<b|z<<x,L=1<<u|p<<b|z<<x,H=d[w],N=d[L];t[h].set(H,N);const A=r[u],q=r[b],U=r[x],O=e[h],V=O.start,Z=O.end;V[A]=l[A],V[q]=p?l[q]:c[q],V[U]=z?l[U]:c[q],Z[A]=c[A],Z[q]=p?l[q]:c[q],Z[U]=z?l[U]:c[q],h++}for(let u=0;u<=1;u++)for(let p=0;p<=1;p++)for(let z=0;z<=1;z++){f.x=u?c.x:l.x,f.y=p?c.y:l.y,f.z=z?c.z:l.z,this.closestPointToPoint(f,n);const b=f.distanceToSquared(n);if(b<X&&(X=b,v&&v.copy(n),P&&P.copy(f),b<o))return Math.sqrt(b)}for(let u=0;u<12;u++){const p=t[u];for(let z=0;z<12;z++){const b=e[z];ki(p,b,n,f);const x=n.distanceToSquared(f);if(x<X&&(X=x,v&&v.copy(n),P&&P.copy(f),x<o))return Math.sqrt(x)}}return Math.sqrt(X)}}();class Bi{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class HX extends Bi{constructor(){super(()=>new Pn)}}const Ee=new HX;function Me(r,t){return t[r+15]===65535}function Ke(r,t){return t[r+6]}function Ye(r,t){return t[r+14]}function ke(r){return r+8}function Be(r,t){return t[r+6]}function yo(r,t){return t[r+7]}class AX{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const _t=new AX;let Jn,tr;const Gf=[],Wa=new Bi(()=>new re);function TX(r,t,e,n,f,a){Jn=Wa.getPrimitive(),tr=Wa.getPrimitive(),Gf.push(Jn,tr),_t.setBuffer(r._roots[t]);const s=wi(0,r.geometry,e,n,f,a);_t.clearBuffer(),Wa.releasePrimitive(Jn),Wa.releasePrimitive(tr),Gf.pop(),Gf.pop();const i=Gf.length;return i>0&&(tr=Gf[i-1],Jn=Gf[i-2]),s}function wi(r,t,e,n,f=null,a=0,s=0){const{float32Array:i,uint16Array:v,uint32Array:P}=_t;let o=r*2;if(Me(o,v)){const X=Ke(r,P),h=Ye(o,v);return $t(r,i,Jn),n(X,h,!1,s,a+r,Jn)}else{let U=function(V){const{uint16Array:Z,uint32Array:E}=_t;let J=V*2;for(;!Me(J,Z);)V=ke(V),J=V*2;return Ke(V,E)},O=function(V){const{uint16Array:Z,uint32Array:E}=_t;let J=V*2;for(;!Me(J,Z);)V=Be(V,E),J=V*2;return Ke(V,E)+Ye(J,Z)};var c=U,d=O;const X=ke(r),h=Be(r,P);let u=X,p=h,z,b,x,w;if(f&&(x=Jn,w=tr,$t(u,i,x),$t(p,i,w),z=f(x),b=f(w),b<z)){u=h,p=X;const V=z;z=b,b=V,x=w}x||(x=Jn,$t(u,i,x));const L=Me(u*2,v),H=e(x,L,z,s+1,a+u);let N;if(H===Jv){const V=U(u),E=O(u)-V;N=n(V,E,!0,s+1,a+u,x)}else N=H&&wi(u,t,e,n,f,a,s+1);if(N)return!0;w=tr,$t(p,i,w);const m=Me(p*2,v),A=e(w,m,b,s+1,a+p);let q;if(A===Jv){const V=U(p),E=O(p)-V;q=n(V,E,!0,s+1,a+p,w)}else q=A&&wi(p,t,e,n,f,a,s+1);return!!q}}const Dr=new W,Ys=new W;function LX(r,t,e={},n=0,f=1/0){const a=n*n,s=f*f;let i=1/0,v=null;if(r.shapecast({boundsTraverseOrder:o=>(Dr.copy(t).clamp(o.min,o.max),Dr.distanceToSquared(t)),intersectsBounds:(o,l,c)=>c<i&&c<s,intersectsTriangle:(o,l)=>{o.closestPointToPoint(t,Dr);const c=t.distanceToSquared(Dr);return c<i&&(Ys.copy(Dr),i=c,v=l),c<a}}),i===1/0)return null;const P=Math.sqrt(i);return e.point?e.point.copy(Ys):e.point=Ys.clone(),e.distance=P,e.faceIndex=v,e}const gf=new W,Cf=new W,Jf=new W,ya=new ht,Na=new ht,Da=new ht,Iv=new W,Qv=new W,_v=new W,Oa=new W;function jX(r,t,e,n,f,a){let s;return a===De?s=r.intersectTriangle(n,e,t,!0,f):s=r.intersectTriangle(t,e,n,a!==nn,f),s===null?null:{distance:r.origin.distanceTo(f),point:f.clone()}}function WX(r,t,e,n,f,a,s,i,v){gf.fromBufferAttribute(t,a),Cf.fromBufferAttribute(t,s),Jf.fromBufferAttribute(t,i);const P=jX(r,gf,Cf,Jf,Oa,v);if(P){n&&(ya.fromBufferAttribute(n,a),Na.fromBufferAttribute(n,s),Da.fromBufferAttribute(n,i),P.uv=Ae.getInterpolation(Oa,gf,Cf,Jf,ya,Na,Da,new ht)),f&&(ya.fromBufferAttribute(f,a),Na.fromBufferAttribute(f,s),Da.fromBufferAttribute(f,i),P.uv1=Ae.getInterpolation(Oa,gf,Cf,Jf,ya,Na,Da,new ht)),e&&(Iv.fromBufferAttribute(e,a),Qv.fromBufferAttribute(e,s),_v.fromBufferAttribute(e,i),P.normal=Ae.getInterpolation(Oa,gf,Cf,Jf,Iv,Qv,_v,new W),P.normal.dot(r.direction)>0&&P.normal.multiplyScalar(-1));const o={a,b:s,c:i,normal:new W,materialIndex:0};Ae.getNormal(gf,Cf,Jf,o.normal),P.face=o,P.faceIndex=a}return P}function rs(r,t,e,n,f){const a=n*3;let s=a+0,i=a+1,v=a+2;const P=r.index;r.index&&(s=P.getX(s),i=P.getX(i),v=P.getX(v));const{position:o,normal:l,uv:c,uv1:d}=r.attributes,X=WX(e,o,l,c,d,s,i,v,t);return X?(X.faceIndex=n,f&&f.push(X),X):null}function ve(r,t,e,n){const f=r.a,a=r.b,s=r.c;let i=t,v=t+1,P=t+2;e&&(i=e.getX(i),v=e.getX(v),P=e.getX(P)),f.x=n.getX(i),f.y=n.getY(i),f.z=n.getZ(i),a.x=n.getX(v),a.y=n.getY(v),a.z=n.getZ(v),s.x=n.getX(P),s.y=n.getY(P),s.z=n.getZ(P)}function yX(r,t,e,n,f,a){const{geometry:s,_indirectBuffer:i}=r;for(let v=n,P=n+f;v<P;v++)rs(s,t,e,v,a)}function NX(r,t,e,n,f){const{geometry:a,_indirectBuffer:s}=r;let i=1/0,v=null;for(let P=n,o=n+f;P<o;P++){let l;l=rs(a,t,e,P),l&&l.distance<i&&(v=l,i=l.distance)}return v}function DX(r,t,e,n,f,a,s){const{geometry:i}=e,{index:v}=i,P=i.attributes.position;for(let o=r,l=t+r;o<l;o++){let c;if(c=o,ve(s,c*3,v,P),s.needsUpdate=!0,n(s,c,f,a))return!0}return!1}function OX(r,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=r.geometry,n=e.index?e.index.array:null,f=e.attributes.position;let a,s,i,v,P=0;const o=r._roots;for(let c=0,d=o.length;c<d;c++)a=o[c],s=new Uint32Array(a),i=new Uint16Array(a),v=new Float32Array(a),l(0,P),P+=a.byteLength;function l(c,d,X=!1){const h=c*2;if(i[h+15]===fs){const p=s[c+6],z=i[h+14];let b=1/0,x=1/0,w=1/0,L=-1/0,H=-1/0,N=-1/0;for(let m=3*p,A=3*(p+z);m<A;m++){let q=n[m];const U=f.getX(q),O=f.getY(q),V=f.getZ(q);U<b&&(b=U),U>L&&(L=U),O<x&&(x=O),O>H&&(H=O),V<w&&(w=V),V>N&&(N=V)}return v[c+0]!==b||v[c+1]!==x||v[c+2]!==w||v[c+3]!==L||v[c+4]!==H||v[c+5]!==N?(v[c+0]=b,v[c+1]=x,v[c+2]=w,v[c+3]=L,v[c+4]=H,v[c+5]=N,!0):!1}else{const p=c+8,z=s[c+6],b=p+d,x=z+d;let w=X,L=!1,H=!1;t?w||(L=t.has(b),H=t.has(x),w=!L&&!H):(L=!0,H=!0);const N=w||L,m=w||H;let A=!1;N&&(A=l(p,d,w));let q=!1;m&&(q=l(z,d,w));const U=A||q;if(U)for(let O=0;O<3;O++){const V=p+O,Z=z+O,E=v[V],J=v[V+3],I=v[Z],$=v[Z+3];v[c+O]=E<I?E:I,v[c+O+3]=J>$?J:$}return U}}}const $v=new re;function Qn(r,t,e,n){return $t(r,t,$v),e.intersectBox($v,n)}function SX(r,t,e,n,f,a){const{geometry:s,_indirectBuffer:i}=r;for(let v=n,P=n+f;v<P;v++){let o=i?i[v]:v;rs(s,t,e,o,a)}}function VX(r,t,e,n,f){const{geometry:a,_indirectBuffer:s}=r;let i=1/0,v=null;for(let P=n,o=n+f;P<o;P++){let l;l=rs(a,t,e,s?s[P]:P),l&&l.distance<i&&(v=l,i=l.distance)}return v}function qX(r,t,e,n,f,a,s){const{geometry:i}=e,{index:v}=i,P=i.attributes.position;for(let o=r,l=t+r;o<l;o++){let c;if(c=e.resolveTriangleIndex(o),ve(s,c*3,v,P),s.needsUpdate=!0,n(s,c,f,a))return!0}return!1}const tP=new W;function UX(r,t,e,n,f){_t.setBuffer(r._roots[t]),mi(0,r,e,n,f),_t.clearBuffer()}function mi(r,t,e,n,f){const{float32Array:a,uint16Array:s,uint32Array:i}=_t,v=r*2;if(Me(v,s)){const o=Ke(r,i),l=Ye(v,s);yX(t,e,n,o,l,f)}else{const o=ke(r);Qn(o,a,n,tP)&&mi(o,t,e,n,f);const l=Be(r,i);Qn(l,a,n,tP)&&mi(l,t,e,n,f)}}const eP=new W,ZX=["x","y","z"];function MX(r,t,e,n){_t.setBuffer(r._roots[t]);const f=Hi(0,r,e,n);return _t.clearBuffer(),f}function Hi(r,t,e,n){const{float32Array:f,uint16Array:a,uint32Array:s}=_t;let i=r*2;if(Me(i,a)){const P=Ke(r,s),o=Ye(i,a);return NX(t,e,n,P,o)}else{const P=yo(r,s),o=ZX[P],c=n.direction[o]>=0;let d,X;c?(d=ke(r),X=Be(r,s)):(d=Be(r,s),X=ke(r));const u=Qn(d,f,n,eP)?Hi(d,t,e,n):null;if(u){const b=u.point[o];if(c?b<=f[X+P]:b>=f[X+P+3])return u}const z=Qn(X,f,n,eP)?Hi(X,t,e,n):null;return u&&z?u.distance<=z.distance?u:z:u||z||null}}const Sa=new re,Ef=new Pn,Yf=new Pn,Or=new bt,nP=new Oe,Va=new Oe;function KX(r,t,e,n){_t.setBuffer(r._roots[t]);const f=Ai(0,r,e,n);return _t.clearBuffer(),f}function Ai(r,t,e,n,f=null){const{float32Array:a,uint16Array:s,uint32Array:i}=_t;let v=r*2;if(f===null&&(e.boundingBox||e.computeBoundingBox(),nP.set(e.boundingBox.min,e.boundingBox.max,n),f=nP),Me(v,s)){const o=t.geometry,l=o.index,c=o.attributes.position,d=e.index,X=e.attributes.position,h=Ke(r,i),u=Ye(v,s);if(Or.copy(n).invert(),e.boundsTree)return $t(r,a,Va),Va.matrix.copy(Or),Va.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:z=>Va.intersectsBox(z),intersectsTriangle:z=>{z.a.applyMatrix4(n),z.b.applyMatrix4(n),z.c.applyMatrix4(n),z.needsUpdate=!0;for(let b=h*3,x=(u+h)*3;b<x;b+=3)if(ve(Yf,b,l,c),Yf.needsUpdate=!0,z.intersectsTriangle(Yf))return!0;return!1}});for(let p=h*3,z=(u+h)*3;p<z;p+=3){ve(Ef,p,l,c),Ef.a.applyMatrix4(Or),Ef.b.applyMatrix4(Or),Ef.c.applyMatrix4(Or),Ef.needsUpdate=!0;for(let b=0,x=d.count;b<x;b+=3)if(ve(Yf,b,d,X),Yf.needsUpdate=!0,Ef.intersectsTriangle(Yf))return!0}}else{const o=r+8,l=i[r+6];return $t(o,a,Sa),!!(f.intersectsBox(Sa)&&Ai(o,t,e,n,f)||($t(l,a,Sa),f.intersectsBox(Sa)&&Ai(l,t,e,n,f)))}}const qa=new bt,ks=new Oe,Sr=new Oe,RX=new W,FX=new W,GX=new W,gX=new W;function CX(r,t,e,n={},f={},a=0,s=1/0){t.boundingBox||t.computeBoundingBox(),ks.set(t.boundingBox.min,t.boundingBox.max,e),ks.needsUpdate=!0;const i=r.geometry,v=i.attributes.position,P=i.index,o=t.attributes.position,l=t.index,c=Ee.getPrimitive(),d=Ee.getPrimitive();let X=RX,h=FX,u=null,p=null;f&&(u=GX,p=gX);let z=1/0,b=null,x=null;return qa.copy(e).invert(),Sr.matrix.copy(qa),r.shapecast({boundsTraverseOrder:w=>ks.distanceToBox(w),intersectsBounds:(w,L,H)=>H<z&&H<s?(L&&(Sr.min.copy(w.min),Sr.max.copy(w.max),Sr.needsUpdate=!0),!0):!1,intersectsRange:(w,L)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:N=>Sr.distanceToBox(N),intersectsBounds:(N,m,A)=>A<z&&A<s,intersectsRange:(N,m)=>{for(let A=N,q=N+m;A<q;A++){ve(d,3*A,l,o),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let U=w,O=w+L;U<O;U++){ve(c,3*U,P,v),c.needsUpdate=!0;const V=c.distanceToTriangle(d,X,u);if(V<z&&(h.copy(X),p&&p.copy(u),z=V,b=U,x=A),V<a)return!0}}}});{const H=wr(t);for(let N=0,m=H;N<m;N++){ve(d,3*N,l,o),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let A=w,q=w+L;A<q;A++){ve(c,3*A,P,v),c.needsUpdate=!0;const U=c.distanceToTriangle(d,X,u);if(U<z&&(h.copy(X),p&&p.copy(u),z=U,b=A,x=N),U<a)return!0}}}}}),Ee.releasePrimitive(c),Ee.releasePrimitive(d),z===1/0?null:(n.point?n.point.copy(h):n.point=h.clone(),n.distance=z,n.faceIndex=b,f&&(f.point?f.point.copy(p):f.point=p.clone(),f.point.applyMatrix4(qa),h.applyMatrix4(qa),f.distance=h.sub(f.point).length(),f.faceIndex=x),n)}function JX(r,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=r.geometry,n=e.index?e.index.array:null,f=e.attributes.position;let a,s,i,v,P=0;const o=r._roots;for(let c=0,d=o.length;c<d;c++)a=o[c],s=new Uint32Array(a),i=new Uint16Array(a),v=new Float32Array(a),l(0,P),P+=a.byteLength;function l(c,d,X=!1){const h=c*2;if(i[h+15]===fs){const p=s[c+6],z=i[h+14];let b=1/0,x=1/0,w=1/0,L=-1/0,H=-1/0,N=-1/0;for(let m=p,A=p+z;m<A;m++){const q=3*r.resolveTriangleIndex(m);for(let U=0;U<3;U++){let O=q+U;O=n?n[O]:O;const V=f.getX(O),Z=f.getY(O),E=f.getZ(O);V<b&&(b=V),V>L&&(L=V),Z<x&&(x=Z),Z>H&&(H=Z),E<w&&(w=E),E>N&&(N=E)}}return v[c+0]!==b||v[c+1]!==x||v[c+2]!==w||v[c+3]!==L||v[c+4]!==H||v[c+5]!==N?(v[c+0]=b,v[c+1]=x,v[c+2]=w,v[c+3]=L,v[c+4]=H,v[c+5]=N,!0):!1}else{const p=c+8,z=s[c+6],b=p+d,x=z+d;let w=X,L=!1,H=!1;t?w||(L=t.has(b),H=t.has(x),w=!L&&!H):(L=!0,H=!0);const N=w||L,m=w||H;let A=!1;N&&(A=l(p,d,w));let q=!1;m&&(q=l(z,d,w));const U=A||q;if(U)for(let O=0;O<3;O++){const V=p+O,Z=z+O,E=v[V],J=v[V+3],I=v[Z],$=v[Z+3];v[c+O]=E<I?E:I,v[c+O+3]=J>$?J:$}return U}}}const fP=new W;function EX(r,t,e,n,f){_t.setBuffer(r._roots[t]),Ti(0,r,e,n,f),_t.clearBuffer()}function Ti(r,t,e,n,f){const{float32Array:a,uint16Array:s,uint32Array:i}=_t,v=r*2;if(Me(v,s)){const o=Ke(r,i),l=Ye(v,s);SX(t,e,n,o,l,f)}else{const o=ke(r);Qn(o,a,n,fP)&&Ti(o,t,e,n,f);const l=Be(r,i);Qn(l,a,n,fP)&&Ti(l,t,e,n,f)}}const rP=new W,YX=["x","y","z"];function kX(r,t,e,n){_t.setBuffer(r._roots[t]);const f=Li(0,r,e,n);return _t.clearBuffer(),f}function Li(r,t,e,n){const{float32Array:f,uint16Array:a,uint32Array:s}=_t;let i=r*2;if(Me(i,a)){const P=Ke(r,s),o=Ye(i,a);return VX(t,e,n,P,o)}else{const P=yo(r,s),o=YX[P],c=n.direction[o]>=0;let d,X;c?(d=ke(r),X=Be(r,s)):(d=Be(r,s),X=ke(r));const u=Qn(d,f,n,rP)?Li(d,t,e,n):null;if(u){const b=u.point[o];if(c?b<=f[X+P]:b>=f[X+P+3])return u}const z=Qn(X,f,n,rP)?Li(X,t,e,n):null;return u&&z?u.distance<=z.distance?u:z:u||z||null}}const Ua=new re,kf=new Pn,Bf=new Pn,Vr=new bt,aP=new Oe,Za=new Oe;function BX(r,t,e,n){_t.setBuffer(r._roots[t]);const f=ji(0,r,e,n);return _t.clearBuffer(),f}function ji(r,t,e,n,f=null){const{float32Array:a,uint16Array:s,uint32Array:i}=_t;let v=r*2;if(f===null&&(e.boundingBox||e.computeBoundingBox(),aP.set(e.boundingBox.min,e.boundingBox.max,n),f=aP),Me(v,s)){const o=t.geometry,l=o.index,c=o.attributes.position,d=e.index,X=e.attributes.position,h=Ke(r,i),u=Ye(v,s);if(Vr.copy(n).invert(),e.boundsTree)return $t(r,a,Za),Za.matrix.copy(Vr),Za.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:z=>Za.intersectsBox(z),intersectsTriangle:z=>{z.a.applyMatrix4(n),z.b.applyMatrix4(n),z.c.applyMatrix4(n),z.needsUpdate=!0;for(let b=h,x=u+h;b<x;b++)if(ve(Bf,3*t.resolveTriangleIndex(b),l,c),Bf.needsUpdate=!0,z.intersectsTriangle(Bf))return!0;return!1}});for(let p=h,z=u+h;p<z;p++){const b=t.resolveTriangleIndex(p);ve(kf,3*b,l,c),kf.a.applyMatrix4(Vr),kf.b.applyMatrix4(Vr),kf.c.applyMatrix4(Vr),kf.needsUpdate=!0;for(let x=0,w=d.count;x<w;x+=3)if(ve(Bf,x,d,X),Bf.needsUpdate=!0,kf.intersectsTriangle(Bf))return!0}}else{const o=r+8,l=i[r+6];return $t(o,a,Ua),!!(f.intersectsBox(Ua)&&ji(o,t,e,n,f)||($t(l,a,Ua),f.intersectsBox(Ua)&&ji(l,t,e,n,f)))}}const Ma=new bt,Bs=new Oe,qr=new Oe,IX=new W,QX=new W,_X=new W,$X=new W;function th(r,t,e,n={},f={},a=0,s=1/0){t.boundingBox||t.computeBoundingBox(),Bs.set(t.boundingBox.min,t.boundingBox.max,e),Bs.needsUpdate=!0;const i=r.geometry,v=i.attributes.position,P=i.index,o=t.attributes.position,l=t.index,c=Ee.getPrimitive(),d=Ee.getPrimitive();let X=IX,h=QX,u=null,p=null;f&&(u=_X,p=$X);let z=1/0,b=null,x=null;return Ma.copy(e).invert(),qr.matrix.copy(Ma),r.shapecast({boundsTraverseOrder:w=>Bs.distanceToBox(w),intersectsBounds:(w,L,H)=>H<z&&H<s?(L&&(qr.min.copy(w.min),qr.max.copy(w.max),qr.needsUpdate=!0),!0):!1,intersectsRange:(w,L)=>{if(t.boundsTree){const H=t.boundsTree;return H.shapecast({boundsTraverseOrder:N=>qr.distanceToBox(N),intersectsBounds:(N,m,A)=>A<z&&A<s,intersectsRange:(N,m)=>{for(let A=N,q=N+m;A<q;A++){const U=H.resolveTriangleIndex(A);ve(d,3*U,l,o),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let O=w,V=w+L;O<V;O++){const Z=r.resolveTriangleIndex(O);ve(c,3*Z,P,v),c.needsUpdate=!0;const E=c.distanceToTriangle(d,X,u);if(E<z&&(h.copy(X),p&&p.copy(u),z=E,b=O,x=A),E<a)return!0}}}})}else{const H=wr(t);for(let N=0,m=H;N<m;N++){ve(d,3*N,l,o),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let A=w,q=w+L;A<q;A++){const U=r.resolveTriangleIndex(A);ve(c,3*U,P,v),c.needsUpdate=!0;const O=c.distanceToTriangle(d,X,u);if(O<z&&(h.copy(X),p&&p.copy(u),z=O,b=A,x=N),O<a)return!0}}}}}),Ee.releasePrimitive(c),Ee.releasePrimitive(d),z===1/0?null:(n.point?n.point.copy(h):n.point=h.clone(),n.distance=z,n.faceIndex=b,f&&(f.point?f.point.copy(p):f.point=p.clone(),f.point.applyMatrix4(Ma),h.applyMatrix4(Ma),f.distance=h.sub(f.point).length(),f.faceIndex=x),n)}function eh(){return typeof SharedArrayBuffer<"u"}const Jr=new _t.constructor,Ia=new _t.constructor,Fn=new Bi(()=>new re),If=new re,Qf=new re,Is=new re,Qs=new re;let _s=!1;function nh(r,t,e,n){if(_s)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");_s=!0;const f=r._roots,a=t._roots;let s,i=0,v=0;const P=new bt().copy(e).invert();for(let o=0,l=f.length;o<l;o++){Jr.setBuffer(f[o]),v=0;const c=Fn.getPrimitive();$t(0,Jr.float32Array,c),c.applyMatrix4(P);for(let d=0,X=a.length;d<X&&(Ia.setBuffer(a[o]),s=tn(0,0,e,P,n,i,v,0,0,c),Ia.clearBuffer(),v+=a[d].length,!s);d++);if(Fn.releasePrimitive(c),Jr.clearBuffer(),i+=f[o].length,s)break}return _s=!1,s}function tn(r,t,e,n,f,a=0,s=0,i=0,v=0,P=null,o=!1){let l,c;o?(l=Ia,c=Jr):(l=Jr,c=Ia);const d=l.float32Array,X=l.uint32Array,h=l.uint16Array,u=c.float32Array,p=c.uint32Array,z=c.uint16Array,b=r*2,x=t*2,w=Me(b,h),L=Me(x,z);let H=!1;if(L&&w)o?H=f(Ke(t,p),Ye(t*2,z),Ke(r,X),Ye(r*2,h),v,s+t,i,a+r):H=f(Ke(r,X),Ye(r*2,h),Ke(t,p),Ye(t*2,z),i,a+r,v,s+t);else if(L){const N=Fn.getPrimitive();$t(t,u,N),N.applyMatrix4(e);const m=ke(r),A=Be(r,X);$t(m,d,If),$t(A,d,Qf);const q=N.intersectsBox(If),U=N.intersectsBox(Qf);H=q&&tn(t,m,n,e,f,s,a,v,i+1,N,!o)||U&&tn(t,A,n,e,f,s,a,v,i+1,N,!o),Fn.releasePrimitive(N)}else{const N=ke(t),m=Be(t,p);$t(N,u,Is),$t(m,u,Qs);const A=P.intersectsBox(Is),q=P.intersectsBox(Qs);if(A&&q)H=tn(r,N,e,n,f,a,s,i,v+1,P,o)||tn(r,m,e,n,f,a,s,i,v+1,P,o);else if(A)if(w)H=tn(r,N,e,n,f,a,s,i,v+1,P,o);else{const U=Fn.getPrimitive();U.copy(Is).applyMatrix4(e);const O=ke(r),V=Be(r,X);$t(O,d,If),$t(V,d,Qf);const Z=U.intersectsBox(If),E=U.intersectsBox(Qf);H=Z&&tn(N,O,n,e,f,s,a,v,i+1,U,!o)||E&&tn(N,V,n,e,f,s,a,v,i+1,U,!o),Fn.releasePrimitive(U)}else if(q)if(w)H=tn(r,m,e,n,f,a,s,i,v+1,P,o);else{const U=Fn.getPrimitive();U.copy(Qs).applyMatrix4(e);const O=ke(r),V=Be(r,X);$t(O,d,If),$t(V,d,Qf);const Z=U.intersectsBox(If),E=U.intersectsBox(Qf);H=Z&&tn(m,O,n,e,f,s,a,v,i+1,U,!o)||E&&tn(m,V,n,e,f,s,a,v,i+1,U,!o),Fn.releasePrimitive(U)}}return H}const Ka=new Oe,sP=new re;class Qa{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,f=t._roots,a=t._indirectBuffer,s=n.getIndex();let i;return e.cloneBuffers?i={roots:f.map(v=>v.slice()),index:s.array.slice(),indirectBuffer:a?a.slice():null}:i={roots:f,index:s.array,indirectBuffer:a},i}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:f,roots:a,indirectBuffer:s}=t,i=new Qa(e,{...n,[Cs]:!0});if(i._roots=a,i._indirectBuffer=s||null,n.setIndex){const v=e.getIndex();if(v===null){const P=new le(t.index,1,!1);e.setIndex(P)}else v.array!==f&&(v.array.set(f),v.needsUpdate=!0)}return i}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({strategy:Lo,maxDepth:40,maxLeafTris:10,verbose:!0,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,[Cs]:!1},e),e.useSharedArrayBuffer&&!eh())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[Cs]||(xX(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new re)));const{_indirectBuffer:n}=this;this.resolveTriangleIndex=e.indirect?f=>n[f]:f=>f}refit(t=null){return(this.indirect?JX:OX)(this,t)}traverse(t,e=0){const n=this._roots[e],f=new Uint32Array(n),a=new Uint16Array(n);s(0);function s(i,v=0){const P=i*2,o=a[P+15]===fs;if(o){const l=f[i+6],c=a[P+14];t(v,o,new Float32Array(n,i*4,6),l,c)}else{const l=i+Ja/4,c=f[i+6],d=f[i+7];t(v,o,new Float32Array(n,i*4,6),d)||(s(l,v+1),s(c,v+1))}}}raycast(t,e=sn){const n=this._roots,f=this.geometry,a=[],s=e.isMaterial,i=Array.isArray(e),v=f.groups,P=s?e.side:e,o=this.indirect?EX:UX;for(let l=0,c=n.length;l<c;l++){const d=i?e[v[l].materialIndex].side:P,X=a.length;if(o(this,l,d,t,a),i){const h=v[l].materialIndex;for(let u=X,p=a.length;u<p;u++)a[u].face.materialIndex=h}}return a}raycastFirst(t,e=sn){const n=this._roots,f=this.geometry,a=e.isMaterial,s=Array.isArray(e);let i=null;const v=f.groups,P=a?e.side:e,o=this.indirect?kX:MX;for(let l=0,c=n.length;l<c;l++){const d=s?e[v[l].materialIndex].side:P,X=o(this,l,d,t);X!=null&&(i==null||X.distance<i.distance)&&(i=X,s&&(X.face.materialIndex=v[l].materialIndex))}return i}intersectsGeometry(t,e){let n=!1;const f=this._roots,a=this.indirect?BX:KX;for(let s=0,i=f.length;s<i&&(n=a(this,s,t,e),!n);s++);return n}shapecast(t){const e=Ee.getPrimitive(),n=this.indirect?qX:DX;let{boundsTraverseOrder:f,intersectsBounds:a,intersectsRange:s,intersectsTriangle:i}=t;if(s&&i){const l=s;s=(c,d,X,h,u)=>l(c,d,X,h,u)?!0:n(c,d,this,i,X,h,e)}else s||(i?s=(l,c,d,X)=>n(l,c,this,i,d,X,e):s=(l,c,d)=>d);let v=!1,P=0;const o=this._roots;for(let l=0,c=o.length;l<c;l++){const d=o[l];if(v=TX(this,l,a,s,f,P),v)break;P+=d.byteLength}return Ee.releasePrimitive(e),v}bvhcast(t,e,n){let{intersectsRanges:f,intersectsTriangles:a}=n;const s=Ee.getPrimitive(),i=this.geometry.index,v=this.geometry.attributes.position,P=this.indirect?X=>{const h=this.resolveTriangleIndex(X);ve(s,h*3,i,v)}:X=>{ve(s,X*3,i,v)},o=Ee.getPrimitive(),l=t.geometry.index,c=t.geometry.attributes.position,d=t.indirect?X=>{const h=t.resolveTriangleIndex(X);ve(o,h*3,l,c)}:X=>{ve(o,X*3,l,c)};if(a){const X=(h,u,p,z,b,x,w,L)=>{for(let H=p,N=p+z;H<N;H++){d(H),o.a.applyMatrix4(e),o.b.applyMatrix4(e),o.c.applyMatrix4(e),o.needsUpdate=!0;for(let m=h,A=h+u;m<A;m++)if(P(m),s.needsUpdate=!0,a(s,o,m,H,b,x,w,L))return!0}return!1};if(f){const h=f;f=function(u,p,z,b,x,w,L,H){return h(u,p,z,b,x,w,L,H)?!0:X(u,p,z,b,x,w,L,H)}}else f=X}return nh(this,t,e,f)}intersectsBox(t,e){return Ka.set(t.min,t.max,e),Ka.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Ka.intersectsBox(n),intersectsTriangle:n=>Ka.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},f={},a=0,s=1/0){return(this.indirect?th:CX)(this,t,e,n,f,a,s)}closestPointToPoint(t,e={},n=0,f=1/0){return LX(this,t,e,n,f)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{$t(0,new Float32Array(n),sP),t.union(sP)}),t}}const af=new W,sf=new W,vf=new W,iP=new Jt,Ra=new W,$s=new W,vP=new Jt,PP=new Jt,Fa=new bt,oP=new bt;function Ur(r,t){if(!r&&!t)return;const e=r.count===t.count,n=r.normalized===t.normalized,f=r.array.constructor===t.array.constructor,a=r.itemSize===t.itemSize;if(!e||!n||!f||!a)throw new Error}function Fr(r,t=null){const e=r.array.constructor,n=r.normalized,f=r.itemSize,a=t===null?r.count:t;return new le(new e(f*a),f,n)}function No(r,t,e=0){if(r.isInterleavedBufferAttribute){const n=r.itemSize;for(let f=0,a=r.count;f<a;f++){const s=f+e;t.setX(s,r.getX(f)),n>=2&&t.setY(s,r.getY(f)),n>=3&&t.setZ(s,r.getZ(f)),n>=4&&t.setW(s,r.getW(f))}}else{const n=t.array,f=n.constructor,a=n.BYTES_PER_ELEMENT*r.itemSize*e;new f(n.buffer,a,r.array.length).set(r.array)}}function fh(r,t,e){const n=r.elements,f=t.elements;for(let a=0,s=f.length;a<s;a++)n[a]+=f[a]*e}function lP(r,t,e){const n=r.skeleton,f=r.geometry,a=n.bones,s=n.boneInverses;vP.fromBufferAttribute(f.attributes.skinIndex,t),PP.fromBufferAttribute(f.attributes.skinWeight,t),Fa.elements.fill(0);for(let i=0;i<4;i++){const v=PP.getComponent(i);if(v!==0){const P=vP.getComponent(i);oP.multiplyMatrices(a[P].matrixWorld,s[P]),fh(Fa,oP,v)}}return Fa.multiply(r.bindMatrix).premultiply(r.bindMatrixInverse),e.transformDirection(Fa),e}function ti(r,t,e,n,f){Ra.set(0,0,0);for(let a=0,s=r.length;a<s;a++){const i=t[a],v=r[a];i!==0&&($s.fromBufferAttribute(v,n),e?Ra.addScaledVector($s,i):Ra.addScaledVector($s.sub(f),i))}f.add(Ra)}function rh(r,t={useGroups:!1,updateIndex:!1,skipAttributes:[]},e=new Ve){const n=r[0].index!==null,{useGroups:f=!1,updateIndex:a=!1,skipAttributes:s=[]}=t,i=new Set(Object.keys(r[0].attributes)),v={};let P=0;e.clearGroups();for(let o=0;o<r.length;++o){const l=r[o];let c=0;if(n!==(l.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(const d in l.attributes){if(!i.has(d))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.');v[d]===void 0&&(v[d]=[]),v[d].push(l.attributes[d]),c++}if(c!==i.size)throw new Error("StaticGeometryGenerator: Make sure all geometries have the same number of attributes.");if(f){let d;if(n)d=l.index.count;else if(l.attributes.position!==void 0)d=l.attributes.position.count;else throw new Error("StaticGeometryGenerator: The geometry must have either an index or a position attribute");e.addGroup(P,d,o),P+=d}}if(n){let o=!1;if(!e.index){let l=0;for(let c=0;c<r.length;++c)l+=r[c].index.count;e.setIndex(new le(new Uint32Array(l),1,!1)),o=!0}if(a||o){const l=e.index;let c=0,d=0;for(let X=0;X<r.length;++X){const h=r[X],u=h.index;if(s[X]!==!0)for(let p=0;p<u.count;++p)l.setX(c,u.getX(p)+d),c++;d+=h.attributes.position.count}}}for(const o in v){const l=v[o];if(!(o in e.attributes)){let X=0;for(const h in l)X+=l[h].count;e.setAttribute(o,Fr(v[o][0],X))}const c=e.attributes[o];let d=0;for(let X=0,h=l.length;X<h;X++){const u=l[X];s[X]!==!0&&No(u,c,d),d+=u.count}}return e}function ah(r,t){if(r===null||t===null)return r===t;if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}class sh{constructor(t){this.matrixWorld=new bt,this.geometryHash=null,this.boneMatrices=null,this.primitiveCount=-1,this.mesh=t,this.update()}update(){const t=this.mesh,e=t.geometry,n=t.skeleton,f=(e.index?e.index.count:e.attributes.position.count)/3;if(this.matrixWorld.copy(t.matrixWorld),this.geometryHash=e.attributes.position.version,this.primitiveCount=f,n){n.boneTexture||n.computeBoneTexture(),n.update();const a=n.boneMatrices;!this.boneMatrices||this.boneMatrices.length!==a.length?this.boneMatrices=a.slice():this.boneMatrices.set(a)}else this.boneMatrices=null}didChange(){const t=this.mesh,e=t.geometry,n=(e.index?e.index.count:e.attributes.position.count)/3;return!(this.matrixWorld.equals(t.matrixWorld)&&this.geometryHash===e.attributes.position.version&&ah(t.skeleton&&t.skeleton.boneMatrices||null,this.boneMatrices)&&this.primitiveCount===n)}}class cP{constructor(t){Array.isArray(t)||(t=[t]);const e=[];t.forEach(n=>{n.traverseVisible(f=>{f.isMesh&&e.push(f)})}),this.meshes=e,this.useGroups=!0,this.applyWorldTransforms=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Array(e.length).fill().map(()=>new Ve),this._diffMap=new WeakMap}getMaterials(){const t=[];return this.meshes.forEach(e=>{Array.isArray(e.material)?t.push(...e.material):t.push(e.material)}),t}generate(t=new Ve){let e=[];const{meshes:n,useGroups:f,_intermediateGeometry:a,_diffMap:s}=this;for(let i=0,v=n.length;i<v;i++){const P=n[i],o=a[i],l=s.get(P);!l||l.didChange(P)?(this._convertToStaticGeometry(P,o),e.push(!1),l?l.update():s.set(P,new sh(P))):e.push(!0)}rh(a,{useGroups:f,skipAttributes:e},t);for(const i in t.attributes)t.attributes[i].needsUpdate=!0;return t}_convertToStaticGeometry(t,e=new Ve){const n=t.geometry,f=this.applyWorldTransforms,a=this.attributes.includes("normal"),s=this.attributes.includes("tangent"),i=n.attributes,v=e.attributes;e.index||(e.index=n.index),v.position||e.setAttribute("position",Fr(i.position)),a&&!v.normal&&i.normal&&e.setAttribute("normal",Fr(i.normal)),s&&!v.tangent&&i.tangent&&e.setAttribute("tangent",Fr(i.tangent)),Ur(n.index,e.index),Ur(i.position,v.position),a&&Ur(i.normal,v.normal),s&&Ur(i.tangent,v.tangent);const P=i.position,o=a?i.normal:null,l=s?i.tangent:null,c=n.morphAttributes.position,d=n.morphAttributes.normal,X=n.morphAttributes.tangent,h=n.morphTargetsRelative,u=t.morphTargetInfluences,p=new Ut;p.getNormalMatrix(t.matrixWorld);for(let z=0,b=i.position.count;z<b;z++)af.fromBufferAttribute(P,z),o&&sf.fromBufferAttribute(o,z),l&&(iP.fromBufferAttribute(l,z),vf.fromBufferAttribute(l,z)),u&&(c&&ti(c,u,h,z,af),d&&ti(d,u,h,z,sf),X&&ti(X,u,h,z,vf)),t.isSkinnedMesh&&(t.applyBoneTransform(z,af),o&&lP(t,z,sf),l&&lP(t,z,vf)),f&&af.applyMatrix4(t.matrixWorld),v.position.setXYZ(z,af.x,af.y,af.z),o&&(f&&sf.applyNormalMatrix(p),v.normal.setXYZ(z,sf.x,sf.y,sf.z)),l&&(f&&vf.transformDirection(t.matrixWorld),v.tangent.setXYZW(z,vf.x,vf.y,vf.z,iP.w));for(const z in this.attributes){const b=this.attributes[z];b==="position"||b==="tangent"||b==="normal"||!(b in i)||(v[b]||e.setAttribute(b,Fr(i[b])),Ur(i[b],v[b]),No(i[b],v[b]))}return e}}class as extends Le{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.camera=new Te;const n=this,f=e.color!==void 0?new Dt(e.color):new Dt(8355711),a=e.textureWidth||512,s=e.textureHeight||512,i=e.clipBias||0,v=e.shader||as.ReflectorShader,P=e.multisample!==void 0?e.multisample:4,o=new en,l=new W,c=new W,d=new W,X=new bt,h=new W(0,0,-1),u=new Jt,p=new W,z=new W,b=new Jt,x=new bt,w=this.camera,L=new Bn(a,s,{samples:P,type:vr}),H=new In({name:v.name!==void 0?v.name:"unspecified",uniforms:io.clone(v.uniforms),fragmentShader:v.fragmentShader,vertexShader:v.vertexShader});H.uniforms.tDiffuse.value=L.texture,H.uniforms.color.value=f,H.uniforms.textureMatrix.value=x,this.material=H,this.onBeforeRender=function(N,m,A){if(c.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(A.matrixWorld),X.extractRotation(n.matrixWorld),l.set(0,0,1),l.applyMatrix4(X),p.subVectors(c,d),p.dot(l)>0)return;p.reflect(l).negate(),p.add(c),X.extractRotation(A.matrixWorld),h.set(0,0,-1),h.applyMatrix4(X),h.add(d),z.subVectors(c,h),z.reflect(l).negate(),z.add(c),w.position.copy(p),w.up.set(0,1,0),w.up.applyMatrix4(X),w.up.reflect(l),w.lookAt(z),w.far=A.far,w.updateMatrixWorld(),w.projectionMatrix.copy(A.projectionMatrix),x.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),x.multiply(w.projectionMatrix),x.multiply(w.matrixWorldInverse),x.multiply(n.matrixWorld),o.setFromNormalAndCoplanarPoint(l,c),o.applyMatrix4(w.matrixWorldInverse),u.set(o.normal.x,o.normal.y,o.normal.z,o.constant);const q=w.projectionMatrix;b.x=(Math.sign(u.x)+q.elements[8])/q.elements[0],b.y=(Math.sign(u.y)+q.elements[9])/q.elements[5],b.z=-1,b.w=(1+q.elements[10])/q.elements[14],u.multiplyScalar(2/u.dot(b)),q.elements[2]=u.x,q.elements[6]=u.y,q.elements[10]=u.z+1-i,q.elements[14]=u.w,n.visible=!1;const U=N.getRenderTarget(),O=N.xr.enabled,V=N.shadowMap.autoUpdate;N.xr.enabled=!1,N.shadowMap.autoUpdate=!1,N.setRenderTarget(L),N.state.buffers.depth.setMask(!0),N.autoClear===!1&&N.clear(),N.render(m,w),N.xr.enabled=O,N.shadowMap.autoUpdate=V,N.setRenderTarget(U);const Z=A.viewport;Z!==void 0&&N.state.viewport(Z),n.visible=!0},this.getRenderTarget=function(){return L},this.dispose=function(){L.dispose(),n.material.dispose()}}}as.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 0.1 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class ih{constructor(){ut(this,"core");ut(this,"loader");ut(this,"collision_scene");ut(this,"collider");ut(this,"texture_boards",{});ut(this,"gallery_boards",{});ut(this,"raycast_objects",[]);ut(this,"is_load_finished",!1);this.core=new hn,this.loader=this.core.loader,this._loadScenes()}async _loadScenes(){try{await this._loadSceneAndCollisionDetection2(),await this._loadBottleModel(),this._createSpecularReflection(),this.is_load_finished=!0,this.core.$emit(WP)}catch(t){console.log(t)}}async _loadBottleModel(){return new Promise(t=>{for(const[e,n]of Object.entries(this.gallery_boards)){const f=n.userData;this.loader.gltf_loader.load(f.ModelPath,a=>{a.scene.name=f.Name,f.X===9999||f.Y===9999||f.Z===9999?a.scene.position.set(n.position.x+f.OffsetX,n.position.y+f.OffsetY,n.position.z+f.OffsetZ):a.scene.position.set(f.X+f.OffsetX,f.Y+f.OffsetY,f.Z+f.OffsetZ),this.core.scene.add(a.scene),a.scene.traverse(s=>{s.userData=f,this.raycast_objects.push(s)})},a=>{this.core.$emit(lf,{url:"_loadBottleModel",loaded:a.loaded,total:a.total})})}t()})}_loadStaticScene2(){return new Promise(t=>{this.loader.gltf_loader.load(BOTTLE_URL,e=>{this.core.scene.add(e.scene),e.scene.traverse(n=>{n.userData={name:n.name,title:"噢，是远方 🏕"},this.raycast_objects.push(n)}),t()},e=>{this.core.$emit(lf,{url:STATIC_SCENE_URL,loaded:e.loaded,total:e.total})})})}async _loadBoardsTexture(){for(let t=0;t<BOARD_TEXTURES.length;t++)this.texture_boards[t+1]=await this.loader.texture_loader.loadAsync(BOARD_TEXTURES[t]);for(const t in this.texture_boards){const e=this.texture_boards[t];e.colorSpace=Ht;const n=e.image.width/e.image.height;let f=1,a=1;n>1?f=1/n:a=n,e.offset.set(.5-f/2,.5-a/2),e.repeat.set(f,a),e.needsUpdate=!0}return Promise.resolve()}_configureGallery(){for(const t in this.texture_boards){const e=this.gallery_boards[`gallery${t}_board`];if(e==null)continue;const n=e.material;n.map=this.texture_boards[t],e.userData={name:e.name,title:BOARDS_INFO[t].title,author:BOARDS_INFO[t].author,describe:BOARDS_INFO[t].describe,index:t,src:this.texture_boards[t].image.src,show_boards:!0},[4,5,6,7,9].includes(+t)&&(e.rotation.y=-Math.PI/2),+t==8&&(e.rotation.y=Math.PI),n.needsUpdate=!0}}_createSpecularReflection(){const t=new as(new es(100,100),{textureWidth:window.innerWidth*window.devicePixelRatio,textureHeight:window.innerHeight*window.devicePixelRatio,color:16777215});t.material instanceof rn&&(t.material.transparent=!0),t.rotation.x=-.5*Math.PI,this.core.scene.add(t)}_loadStaticScene(){return new Promise(t=>{this.loader.gltf_loader.load(STATIC_SCENE_URL,e=>{t()},e=>{this.core.$emit(lf,{url:STATIC_SCENE_URL,loaded:e.loaded,total:e.total})})})}_loadSceneAndCollisionDetection2(){return new Promise(t=>{this.loader.gltf_loader.load(Qo.Path,e=>{var a,s;this.collision_scene=e.scene,(a=this.collision_scene)==null||a.updateMatrixWorld(!0),(s=this.collision_scene)==null||s.traverse(i=>{const v=_o.find(P=>{var o;return P.MLocation===((o=i.userData)==null?void 0:o.mlocation)});/p[1-4]r[1-9]\d{3}/.test(i.name)&&v&&(v.Name=i.userData.name,i.userData=v,this.gallery_boards[i.name]=i),this.raycast_objects.push(i)});const n=new cP(this.collision_scene);n.attributes=["position"];const f=n.generate();f.boundsTree=new Qa(f,{lazyGeneration:!1}),this.collider=new Le(f),this.core.scene.add(this.collision_scene),t()},e=>{this.core.$emit(lf,{url:"COLLISION_SCENE_URL",loaded:e.loaded,total:e.total})})})}_loadSceneAndCollisionDetection(){return new Promise(t=>{this.loader.gltf_loader.load(COLLISION_SCENE_URL,e=>{var a,s;this.collision_scene=e.scene,(a=this.collision_scene)==null||a.updateMatrixWorld(!0),(s=this.collision_scene)==null||s.traverse(i=>{});const n=new cP(this.collision_scene);n.attributes=["position"];const f=n.generate();f.boundsTree=new Qa(f,{lazyGeneration:!1}),this.collider=new Le(f),this.core.scene.add(this.collision_scene),t()},e=>{this.core.$emit(lf,{url:COLLISION_SCENE_URL,loaded:e.loaded,total:e.total})})})}}const Zr=new W;function Ge(r,t,e,n,f,a){const s=2*Math.PI*f/4,i=Math.max(a-2*f,0),v=Math.PI/4;Zr.copy(t),Zr[n]=0,Zr.normalize();const P=.5*s/(s+i),o=1-Zr.angleTo(r)/v;return Math.sign(Zr[e])===1?o*P:i/(s+i)+P+P*(1-o)}class vh extends hr{constructor(t=1,e=1,n=1,f=2,a=.1){if(f=f*2+1,a=Math.min(t/2,e/2,n/2,a),super(1,1,1,f,f,f),f===1)return;const s=this.toNonIndexed();this.index=null,this.attributes.position=s.attributes.position,this.attributes.normal=s.attributes.normal,this.attributes.uv=s.attributes.uv;const i=new W,v=new W,P=new W(t,e,n).divideScalar(2).subScalar(a),o=this.attributes.position.array,l=this.attributes.normal.array,c=this.attributes.uv.array,d=o.length/6,X=new W,h=.5/f;for(let u=0,p=0;u<o.length;u+=3,p+=2)switch(i.fromArray(o,u),v.copy(i),v.x-=Math.sign(v.x)*h,v.y-=Math.sign(v.y)*h,v.z-=Math.sign(v.z)*h,v.normalize(),o[u+0]=P.x*Math.sign(i.x)+v.x*a,o[u+1]=P.y*Math.sign(i.y)+v.y*a,o[u+2]=P.z*Math.sign(i.z)+v.z*a,l[u+0]=v.x,l[u+1]=v.y,l[u+2]=v.z,Math.floor(u/d)){case 0:X.set(1,0,0),c[p+0]=Ge(X,v,"z","y",a,n),c[p+1]=1-Ge(X,v,"y","z",a,e);break;case 1:X.set(-1,0,0),c[p+0]=1-Ge(X,v,"z","y",a,n),c[p+1]=1-Ge(X,v,"y","z",a,e);break;case 2:X.set(0,1,0),c[p+0]=1-Ge(X,v,"x","z",a,t),c[p+1]=Ge(X,v,"z","x",a,n);break;case 3:X.set(0,-1,0),c[p+0]=1-Ge(X,v,"x","z",a,t),c[p+1]=1-Ge(X,v,"z","x",a,n);break;case 4:X.set(0,0,1),c[p+0]=1-Ge(X,v,"x","y",a,t),c[p+1]=1-Ge(X,v,"y","x",a,e);break;case 5:X.set(0,0,-1),c[p+0]=Ge(X,v,"x","y",a,t),c[p+1]=1-Ge(X,v,"y","x",a,e);break}}}class Ph{constructor({reset_position:t=new W(0,5,0),reset_y:e=-25,speed:n=6,jump_height:f=20,gravity:a=-50}){ut(this,"core");ut(this,"character");ut(this,"capsule_info",{radius:1,segment:new an(new W,new W(0,-5,0))});ut(this,"reset_position");ut(this,"reset_y");ut(this,"gravity");ut(this,"jump_height");ut(this,"speed");ut(this,"player_is_on_ground",!1);ut(this,"velocity",new W);ut(this,"up_vector",new W(0,1,0));ut(this,"temp_vector",new W);ut(this,"temp_vector2",new W);ut(this,"temp_box",new re);ut(this,"temp_mat",new bt);ut(this,"temp_segment",new an);this.core=new hn,this.reset_position=t,this.reset_y=e,this.gravity=a,this.jump_height=f,this.speed=n,this._createCharacter(),this.core.$on(OP,this._onKeyDown.bind(this))}update(t,e){this._updateOrbitControls(),this._updateCharacter(t),this._checkCollision(t,e);const n=this.getCharacterHeight(),f=(this.character.position.y+n/2+2)*(3/4),a=new W(this.character.position.x,f,this.character.position.z);this.core.camera.position.sub(this.core.orbit_controls.target),this.core.orbit_controls.target.copy(a),this.core.camera.position.add(a),this._checkReset()}getCharacterHeight(){const t=this.character.geometry;t.boundingBox||t.computeBoundingBox();const e=t.boundingBox;return e.max.y-e.min.y}_createCharacter(){this.character=new Le(new vh(.5,15,.5,10,1),new Cn({color:255})),this.character.name="角色",this.character.geometry.translate(0,2,0),this.character.position.copy(this.reset_position),this.character.visible=!0,this.character.updateMatrixWorld(),this.core.scene.add(this.character),console.log(this.character),console.log(this.core.camera)}_checkCollision(t,e){var i,v;const n=this.capsule_info;this.temp_box.makeEmpty(),this.temp_mat.copy(e.matrixWorld).invert(),this.temp_segment.copy(n.segment),this.temp_segment.start.applyMatrix4(this.character.matrixWorld).applyMatrix4(this.temp_mat),this.temp_segment.end.applyMatrix4(this.character.matrixWorld).applyMatrix4(this.temp_mat),this.temp_box.expandByPoint(this.temp_segment.start),this.temp_box.expandByPoint(this.temp_segment.end),this.temp_box.min.addScalar(-n.radius),this.temp_box.max.addScalar(n.radius),(v=(i=e.geometry)==null?void 0:i.boundsTree)==null||v.shapecast({intersectsBounds:P=>P.intersectsBox(this.temp_box),intersectsTriangle:P=>{const o=this.temp_vector,l=this.temp_vector2,c=P.closestPointToSegment(this.temp_segment,o,l);if(c<n.radius){const d=n.radius-c,X=l.sub(o).normalize();this.temp_segment.start.addScaledVector(X,d),this.temp_segment.end.addScaledVector(X,d)}}});const f=this.temp_vector;f.copy(this.temp_segment.start).applyMatrix4(e.matrixWorld);const a=this.temp_vector2;a.subVectors(f,this.character.position),this.player_is_on_ground=a.y>Math.abs(t*this.velocity.y*.25);const s=Math.max(0,a.length()-1e-5);a.normalize().multiplyScalar(s),this.character.position.add(a),this.player_is_on_ground?this.velocity.set(0,0,0):(a.normalize(),this.velocity.addScaledVector(a,-a.dot(this.velocity)))}_checkReset(){this.character.position.y<this.reset_y&&this._reset()}_reset(){this.velocity.set(0,0,0),this.character.position.copy(this.reset_position),this.core.camera.position.sub(this.core.orbit_controls.target),this.core.orbit_controls.target.copy(this.character.position),this.core.camera.position.add(this.character.position),this.core.orbit_controls.update()}_updateCharacter(t){this.velocity.y+=this.player_is_on_ground?0:t*this.gravity,this.character.position.addScaledVector(this.velocity,t);const e=this.core.orbit_controls.getAzimuthalAngle();if(this.core.control_manage.mode==="pc")this.core.control_manage.key_status.KeyW&&(this.temp_vector.set(0,0,-1).applyAxisAngle(this.up_vector,e),this.character.position.addScaledVector(this.temp_vector,this.speed*t)),this.core.control_manage.key_status.KeyS&&(this.temp_vector.set(0,0,1).applyAxisAngle(this.up_vector,e),this.character.position.addScaledVector(this.temp_vector,this.speed*t)),this.core.control_manage.key_status.KeyA&&(this.temp_vector.set(-1,0,0).applyAxisAngle(this.up_vector,e),this.character.position.addScaledVector(this.temp_vector,this.speed*t)),this.core.control_manage.key_status.KeyD&&(this.temp_vector.set(1,0,0).applyAxisAngle(this.up_vector,e),this.character.position.addScaledVector(this.temp_vector,this.speed*t));else{const n=this.core.control_manage.move_degree;if(n){const f=(n-90)*(Math.PI/180);this.temp_vector.set(0,0,-1).applyAxisAngle(this.up_vector,f),this.temp_vector.applyQuaternion(this.core.camera.quaternion),this.character.position.addScaledVector(this.temp_vector,this.speed*t)}}this.character.updateMatrixWorld()}_updateOrbitControls(){this.core.orbit_controls.maxPolarAngle=Math.PI,this.core.orbit_controls.minDistance=1e-4,this.core.orbit_controls.maxDistance=1e-4}_onKeyDown([t]){t==="Space"&&this._onCharacterJump()}_onCharacterJump(){this.player_is_on_ground&&(this.velocity.y=this.jump_height)}}const pP=new W,oh=new vn,uP=new W,cn=new bt,lh=new bt;class ch{constructor(t={}){const e=this;let n,f,a,s;const i={camera:{fov:0,style:""},objects:new WeakMap},v=t.element!==void 0?t.element:document.createElement("div");v.style.overflow="hidden",this.domElement=v;const P=document.createElement("div");P.style.transformOrigin="0 0",P.style.pointerEvents="none",v.appendChild(P);const o=document.createElement("div");o.style.transformStyle="preserve-3d",P.appendChild(o),this.getSize=function(){return{width:n,height:f}},this.render=function(h,u){const p=u.projectionMatrix.elements[5]*s;i.camera.fov!==p&&(P.style.perspective=u.isPerspectiveCamera?p+"px":"",i.camera.fov=p),u.view&&u.view.enabled?(P.style.transform=`translate( ${-u.view.offsetX*(n/u.view.width)}px, ${-u.view.offsetY*(f/u.view.height)}px )`,P.style.transform+=`scale( ${u.view.fullWidth/u.view.width}, ${u.view.fullHeight/u.view.height} )`):P.style.transform="",h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),u.parent===null&&u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld();let z,b;u.isOrthographicCamera&&(z=-(u.right+u.left)/2,b=(u.top+u.bottom)/2);const x=u.view&&u.view.enabled?u.view.height/u.view.fullHeight:1,L=(u.isOrthographicCamera?`scale( ${x} )scale(`+p+")translate("+l(z)+"px,"+l(b)+"px)"+c(u.matrixWorldInverse):`scale( ${x} )translateZ(`+p+"px)"+c(u.matrixWorldInverse))+"translate("+a+"px,"+s+"px)";i.camera.style!==L&&(o.style.transform=L,i.camera.style=L),X(h,h,u)},this.setSize=function(h,u){n=h,f=u,a=n/2,s=f/2,v.style.width=h+"px",v.style.height=u+"px",P.style.width=h+"px",P.style.height=u+"px",o.style.width=h+"px",o.style.height=u+"px"};function l(h){return Math.abs(h)<1e-10?0:h}function c(h){const u=h.elements;return"matrix3d("+l(u[0])+","+l(-u[1])+","+l(u[2])+","+l(u[3])+","+l(u[4])+","+l(-u[5])+","+l(u[6])+","+l(u[7])+","+l(u[8])+","+l(-u[9])+","+l(u[10])+","+l(u[11])+","+l(u[12])+","+l(-u[13])+","+l(u[14])+","+l(u[15])+")"}function d(h){const u=h.elements;return"translate(-50%,-50%)"+("matrix3d("+l(u[0])+","+l(u[1])+","+l(u[2])+","+l(u[3])+","+l(-u[4])+","+l(-u[5])+","+l(-u[6])+","+l(-u[7])+","+l(u[8])+","+l(u[9])+","+l(u[10])+","+l(u[11])+","+l(u[12])+","+l(u[13])+","+l(u[14])+","+l(u[15])+")")}function X(h,u,p,z){if(h.isCSS3DObject){const b=h.visible===!0&&h.layers.test(p.layers)===!0;if(h.element.style.display=b===!0?"":"none",b===!0){h.onBeforeRender(e,u,p);let x;h.isCSS3DSprite?(cn.copy(p.matrixWorldInverse),cn.transpose(),h.rotation2D!==0&&cn.multiply(lh.makeRotationZ(h.rotation2D)),h.matrixWorld.decompose(pP,oh,uP),cn.setPosition(pP),cn.scale(uP),cn.elements[3]=0,cn.elements[7]=0,cn.elements[11]=0,cn.elements[15]=1,x=d(cn)):x=d(h.matrixWorld);const w=h.element,L=i.objects.get(h);if(L===void 0||L.style!==x){w.style.transform=x;const H={style:x};i.objects.set(h,H)}w.parentNode!==o&&o.appendChild(w),h.onAfterRender(e,u,p)}}for(let b=0,x=h.children.length;b<x;b++)X(h.children[b],u,p)}}}class ph{constructor(){ut(this,"core");ut(this,"css_scene");ut(this,"css_renderer");this.core=new hn,this.css_scene=new ho,this.css_renderer=new ch,this._initRenderer(),this._initResponsiveResize(),this._createCssObj()}update(){this.css_renderer.render(this.css_scene,this.core.camera)}_initRenderer(){var t;this.css_renderer.setSize(window.innerWidth,window.innerHeight),this.css_renderer.domElement.style.position="absolute",this.css_renderer.domElement.style.top="0px",(t=document.querySelector("#css"))==null||t.appendChild(this.css_renderer.domElement)}_initResponsiveResize(){window.addEventListener("resize",()=>{this.css_renderer.setSize(window.innerWidth,window.innerHeight)})}_createCssObj(){}}class uh{constructor(){ut(this,"core");ut(this,"audio_mesh");ut(this,"positional_audio");this.core=new hn}async createAudio(){return Promise.resolve()}playAudio(){var t;(t=this.positional_audio)==null||t.play()}}class dh{constructor(){ut(this,"core");ut(this,"click_raycaster");ut(this,"tooltip_raycaster");ut(this,"hover_point");ut(this,"mouse_point");this.core=new hn,this.click_raycaster=new Fv,this.click_raycaster.far=18,this.tooltip_raycaster=new Fv,this.tooltip_raycaster.far=5,this.hover_point=new ht(0,0),this.mouse_point=new ht}updateTooltipRayCast(t=[]){if(t.length){this.tooltip_raycaster.setFromCamera(this.hover_point,this.core.camera);const e=this.tooltip_raycaster.intersectObjects(t);e.length&&e[0].object.userData.Title?this.core.$emit(NP,{msg:e[0].object.userData.Title,show_preview_tips:!!e[0].object.userData.show_boards}):this.core.$emit(DP)}}bindClickRayCastObj(t=[]){let e=0,n=0;document.body.addEventListener("pointerdown",f=>{e=f.screenX,n=f.screenY}),document.body.addEventListener("pointerup",f=>{const a=Math.abs(f.screenX-e),s=Math.abs(f.screenY-n);if(a<=1&&s<=1&&f.target instanceof HTMLCanvasElement){this.mouse_point.x=f.clientX/window.innerWidth*2-1,this.mouse_point.y=-(f.clientY/window.innerHeight*2-1),this.click_raycaster.setFromCamera(this.mouse_point,this.core.camera);const i=this.click_raycaster.intersectObjects(t);i.length&&i[0].object.userData.show_boards&&this.core.$emit(yP,i[0].object)}})}}class Xh{constructor(){ut(this,"core");ut(this,"environment");ut(this,"character");ut(this,"css_3d_renderer");ut(this,"audio");ut(this,"ray_caster_controls");this.core=new hn,this.core.$on(lf,this._handleLoadProgress.bind(this)),this.core.$on(WP,this._onLoadModelFinish.bind(this)),this.core.$on(yP,this._onClickRayCast.bind(this)),this.core.$on(NP,this._onShowTooltip.bind(this)),this.core.$on(DP,this._onHideTooltip.bind(this)),this.core.$on(SP,this._onEnterApp.bind(this)),this.environment=new ih,this.character=new Ph({speed:12}),this.css_3d_renderer=new ph,this.audio=new uh,this.ray_caster_controls=new dh}update(t){this.environment.collider&&this.environment.is_load_finished&&(this.css_3d_renderer.update(),this.character.update(t,this.environment.collider),this.ray_caster_controls.updateTooltipRayCast(this.environment.raycast_objects))}_onEnterApp(){this.audio.playAudio(),this.core.control_manage.enabled()}async _onLoadModelFinish(){await this.audio.createAudio(),this.core.ui.removeLoading(),this.core.ui.showLoadingConfirm(),this.ray_caster_controls.bindClickRayCastObj(this.environment.raycast_objects)}_handleLoadProgress([{url:t,loaded:e,total:n}]){const f=(e/n*100).toFixed(2);/.*\.(blob|glb)$/i.test(t)&&this.core.ui.updateLoadingProgress(`${t.includes("collision")?"Load collision scene model":"Load other scene models"}：${f}%`),/.*\.(jpg|png|jpeg)$/i.test(t)&&this.core.ui.updateLoadingProgress("Loading picture material..."),/.*\.(m4a|mp3)$/i.test(t)&&this.core.ui.updateLoadingProgress("Loading sound resources...")}_onClickRayCast([t]){this.core.ui.showBoardsBox2(t.userData)}_onShowTooltip([{msg:t,show_preview_tips:e}]){this.core.ui.showPreviewTooltip(t,e)}_onHideTooltip(){this.core.ui.hidePreviewTooltip()}}function hh(r){return{all:r=r||new Map,on:function(t,e){var n=r.get(t);n?n.push(e):r.set(t,[e])},off:function(t,e){var n=r.get(t);n&&(e?n.splice(n.indexOf(e)>>>0,1):r.set(t,[]))},emit:function(t,e){var n=r.get(t);n&&n.slice().map(function(f){f(e)}),(n=r.get("*"))&&n.slice().map(function(f){f(t,e)})}}}class bh{constructor(){ut(this,"emitter_instance");this.emitter_instance=hh()}$on(t,e){this.emitter_instance.on(t,e)}$emit(t,...e){this.emitter_instance.emit(t,e)}$off(t,e){this.emitter_instance.off(t,e)}}function dP(r,t){if(t===Ml)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===pi||t===YP){let e=r.getIndex();if(e===null){const s=[],i=r.getAttribute("position");if(i!==void 0){for(let v=0;v<i.count;v++)s.push(v);r.setIndex(s),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=e.count-2,f=[];if(t===pi)for(let s=1;s<=n;s++)f.push(e.getX(0)),f.push(e.getX(s)),f.push(e.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(f.push(e.getX(s)),f.push(e.getX(s+1)),f.push(e.getX(s+2))):(f.push(e.getX(s+2)),f.push(e.getX(s+1)),f.push(e.getX(s)));f.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=r.clone();return a.setIndex(f),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}class xh extends wf{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Ah(e)}),this.register(function(e){return new Oh(e)}),this.register(function(e){return new Sh(e)}),this.register(function(e){return new Vh(e)}),this.register(function(e){return new Lh(e)}),this.register(function(e){return new jh(e)}),this.register(function(e){return new Wh(e)}),this.register(function(e){return new yh(e)}),this.register(function(e){return new Hh(e)}),this.register(function(e){return new Nh(e)}),this.register(function(e){return new Th(e)}),this.register(function(e){return new Dh(e)}),this.register(function(e){return new wh(e)}),this.register(function(e){return new qh(e)}),this.register(function(e){return new Uh(e)})}load(t,e,n,f){const a=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=xi.extractUrlBase(t),this.manager.itemStart(t);const i=function(P){f?f(P):console.error(P),a.manager.itemError(t),a.manager.itemEnd(t)},v=new gi(this.manager);v.setPath(this.path),v.setResponseType("arraybuffer"),v.setRequestHeader(this.requestHeader),v.setWithCredentials(this.withCredentials),v.load(t,function(P){try{a.parse(P,s,function(o){e(o),a.manager.itemEnd(t)},i)}catch(o){i(o)}},n,i)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,f){let a;const s={},i={},v=new TextDecoder;if(typeof t=="string")a=JSON.parse(t);else if(t instanceof ArrayBuffer)if(v.decode(new Uint8Array(t,0,4))===Do){try{s[Gt.KHR_BINARY_GLTF]=new Zh(t)}catch(l){f&&f(l);return}a=JSON.parse(s[Gt.KHR_BINARY_GLTF].content)}else a=JSON.parse(v.decode(t));else a=t;if(a.asset===void 0||a.asset.version[0]<2){f&&f(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const P=new Ih(a,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});P.fileLoader.setRequestHeader(this.requestHeader);for(let o=0;o<this.pluginCallbacks.length;o++){const l=this.pluginCallbacks[o](P);i[l.name]=l,s[l.name]=!0}if(a.extensionsUsed)for(let o=0;o<a.extensionsUsed.length;++o){const l=a.extensionsUsed[o],c=a.extensionsRequired||[];switch(l){case Gt.KHR_MATERIALS_UNLIT:s[l]=new mh;break;case Gt.KHR_DRACO_MESH_COMPRESSION:s[l]=new Mh(a,this.dracoLoader);break;case Gt.KHR_TEXTURE_TRANSFORM:s[l]=new Kh;break;case Gt.KHR_MESH_QUANTIZATION:s[l]=new Rh;break;default:c.indexOf(l)>=0&&i[l]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+l+'".')}}P.setExtensions(s),P.setPlugins(i),P.parse(n,f)}parseAsync(t,e){const n=this;return new Promise(function(f,a){n.parse(t,e,f,a)})}}function zh(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}const Gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class wh{constructor(t){this.parser=t,this.name=Gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,f=e.length;n<f;n++){const a=e[n];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let f=e.cache.get(n);if(f)return f;const a=e.json,v=((a.extensions&&a.extensions[this.name]||{}).lights||[])[t];let P;const o=new Dt(16777215);v.color!==void 0&&o.fromArray(v.color);const l=v.range!==void 0?v.range:0;switch(v.type){case"directional":P=new Gd(o),P.target.position.set(0,0,-1),P.add(P.target);break;case"point":P=new Rd(o),P.distance=l;break;case"spot":P=new Md(o),P.distance=l,v.spot=v.spot||{},v.spot.innerConeAngle=v.spot.innerConeAngle!==void 0?v.spot.innerConeAngle:0,v.spot.outerConeAngle=v.spot.outerConeAngle!==void 0?v.spot.outerConeAngle:Math.PI/4,P.angle=v.spot.outerConeAngle,P.penumbra=1-v.spot.innerConeAngle/v.spot.outerConeAngle,P.target.position.set(0,0,-1),P.add(P.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+v.type)}return P.position.set(0,0,0),P.decay=2,Gn(P,v),v.intensity!==void 0&&(P.intensity=v.intensity),P.name=e.createUniqueName(v.name||"light_"+t),f=Promise.resolve(P),e.cache.add(n,f),f}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,a=n.json.nodes[t],i=(a.extensions&&a.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(v){return n._getNodeRef(e.cache,i,v)})}}class mh{constructor(){this.name=Gt.KHR_MATERIALS_UNLIT}getMaterialType(){return Cn}extendParams(t,e,n){const f=[];t.color=new Dt(1,1,1),t.opacity=1;const a=e.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const s=a.baseColorFactor;t.color.fromArray(s),t.opacity=s[3]}a.baseColorTexture!==void 0&&f.push(n.assignTexture(t,"map",a.baseColorTexture,Ht))}return Promise.all(f)}}class Hh{constructor(t){this.parser=t,this.name=Gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const f=this.parser.json.materials[t];if(!f.extensions||!f.extensions[this.name])return Promise.resolve();const a=f.extensions[this.name].emissiveStrength;return a!==void 0&&(e.emissiveIntensity=a),Promise.resolve()}}class Ah{constructor(t){this.parser=t,this.name=Gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(t,e){const n=this.parser,f=n.json.materials[t];if(!f.extensions||!f.extensions[this.name])return Promise.resolve();const a=[],s=f.extensions[this.name];if(s.clearcoatFactor!==void 0&&(e.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&a.push(n.assignTexture(e,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&a.push(n.assignTexture(e,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(a.push(n.assignTexture(e,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const i=s.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new ht(i,i)}return Promise.all(a)}}class Th{constructor(t){this.parser=t,this.name=Gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(t,e){const n=this.parser,f=n.json.materials[t];if(!f.extensions||!f.extensions[this.name])return Promise.resolve();const a=[],s=f.extensions[this.name];return s.iridescenceFactor!==void 0&&(e.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&a.push(n.assignTexture(e,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(e.iridescenceIOR=s.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&a.push(n.assignTexture(e,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(a)}}class Lh{constructor(t){this.parser=t,this.name=Gt.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(t,e){const n=this.parser,f=n.json.materials[t];if(!f.extensions||!f.extensions[this.name])return Promise.resolve();const a=[];e.sheenColor=new Dt(0,0,0),e.sheenRoughness=0,e.sheen=1;const s=f.extensions[this.name];return s.sheenColorFactor!==void 0&&e.sheenColor.fromArray(s.sheenColorFactor),s.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&a.push(n.assignTexture(e,"sheenColorMap",s.sheenColorTexture,Ht)),s.sheenRoughnessTexture!==void 0&&a.push(n.assignTexture(e,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(a)}}class jh{constructor(t){this.parser=t,this.name=Gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(t,e){const n=this.parser,f=n.json.materials[t];if(!f.extensions||!f.extensions[this.name])return Promise.resolve();const a=[],s=f.extensions[this.name];return s.transmissionFactor!==void 0&&(e.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&a.push(n.assignTexture(e,"transmissionMap",s.transmissionTexture)),Promise.all(a)}}class Wh{constructor(t){this.parser=t,this.name=Gt.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(t,e){const n=this.parser,f=n.json.materials[t];if(!f.extensions||!f.extensions[this.name])return Promise.resolve();const a=[],s=f.extensions[this.name];e.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&a.push(n.assignTexture(e,"thicknessMap",s.thicknessTexture)),e.attenuationDistance=s.attenuationDistance||1/0;const i=s.attenuationColor||[1,1,1];return e.attenuationColor=new Dt(i[0],i[1],i[2]),Promise.all(a)}}class yh{constructor(t){this.parser=t,this.name=Gt.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(t,e){const f=this.parser.json.materials[t];if(!f.extensions||!f.extensions[this.name])return Promise.resolve();const a=f.extensions[this.name];return e.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class Nh{constructor(t){this.parser=t,this.name=Gt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(t,e){const n=this.parser,f=n.json.materials[t];if(!f.extensions||!f.extensions[this.name])return Promise.resolve();const a=[],s=f.extensions[this.name];e.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&a.push(n.assignTexture(e,"specularIntensityMap",s.specularTexture));const i=s.specularColorFactor||[1,1,1];return e.specularColor=new Dt(i[0],i[1],i[2]),s.specularColorTexture!==void 0&&a.push(n.assignTexture(e,"specularColorMap",s.specularColorTexture,Ht)),Promise.all(a)}}class Dh{constructor(t){this.parser=t,this.name=Gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(t,e){const n=this.parser,f=n.json.materials[t];if(!f.extensions||!f.extensions[this.name])return Promise.resolve();const a=[],s=f.extensions[this.name];return s.anisotropyStrength!==void 0&&(e.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(e.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&a.push(n.assignTexture(e,"anisotropyMap",s.anisotropyTexture)),Promise.all(a)}}class Oh{constructor(t){this.parser=t,this.name=Gt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,f=n.textures[t];if(!f.extensions||!f.extensions[this.name])return null;const a=f.extensions[this.name],s=e.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,a.source,s)}}class Sh{constructor(t){this.parser=t,this.name=Gt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,f=n.json,a=f.textures[t];if(!a.extensions||!a.extensions[e])return null;const s=a.extensions[e],i=f.images[s.source];let v=n.textureLoader;if(i.uri){const P=n.options.manager.getHandler(i.uri);P!==null&&(v=P)}return this.detectSupport().then(function(P){if(P)return n.loadTextureImage(t,s.source,v);if(f.extensionsRequired&&f.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Vh{constructor(t){this.parser=t,this.name=Gt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,f=n.json,a=f.textures[t];if(!a.extensions||!a.extensions[e])return null;const s=a.extensions[e],i=f.images[s.source];let v=n.textureLoader;if(i.uri){const P=n.options.manager.getHandler(i.uri);P!==null&&(v=P)}return this.detectSupport().then(function(P){if(P)return n.loadTextureImage(t,s.source,v);if(f.extensionsRequired&&f.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class qh{constructor(t){this.name=Gt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const f=n.extensions[this.name],a=this.parser.getDependency("buffer",f.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(i){const v=f.byteOffset||0,P=f.byteLength||0,o=f.count,l=f.byteStride,c=new Uint8Array(i,v,P);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(o,l,c,f.mode,f.filter).then(function(d){return d.buffer}):s.ready.then(function(){const d=new ArrayBuffer(o*l);return s.decodeGltfBuffer(new Uint8Array(d),o,l,c,f.mode,f.filter),d})})}else return null}}class Uh{constructor(t){this.name=Gt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const f=e.meshes[n.mesh];for(const P of f.primitives)if(P.mode!==ge.TRIANGLES&&P.mode!==ge.TRIANGLE_STRIP&&P.mode!==ge.TRIANGLE_FAN&&P.mode!==void 0)return null;const s=n.extensions[this.name].attributes,i=[],v={};for(const P in s)i.push(this.parser.getDependency("accessor",s[P]).then(o=>(v[P]=o,v[P])));return i.length<1?null:(i.push(this.parser.createNodeMesh(t)),Promise.all(i).then(P=>{const o=P.pop(),l=o.isGroup?o.children:[o],c=P[0].count,d=[];for(const X of l){const h=new bt,u=new W,p=new vn,z=new W(1,1,1),b=new md(X.geometry,X.material,c);for(let x=0;x<c;x++)v.TRANSLATION&&u.fromBufferAttribute(v.TRANSLATION,x),v.ROTATION&&p.fromBufferAttribute(v.ROTATION,x),v.SCALE&&z.fromBufferAttribute(v.SCALE,x),b.setMatrixAt(x,h.compose(u,p,z));for(const x in v)x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&X.geometry.setAttribute(x,v[x]);te.prototype.copy.call(b,X),this.parser.assignFinalMaterial(b),d.push(b)}return o.isGroup?(o.clear(),o.add(...d),o):d[0]}))}}const Do="glTF",Mr=12,XP={JSON:1313821514,BIN:5130562};class Zh{constructor(t){this.name=Gt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Mr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Do)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const f=this.header.length-Mr,a=new DataView(t,Mr);let s=0;for(;s<f;){const i=a.getUint32(s,!0);s+=4;const v=a.getUint32(s,!0);if(s+=4,v===XP.JSON){const P=new Uint8Array(t,Mr+s,i);this.content=n.decode(P)}else if(v===XP.BIN){const P=Mr+s;this.body=t.slice(P,P+i)}s+=i}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Mh{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Gt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,f=this.dracoLoader,a=t.extensions[this.name].bufferView,s=t.extensions[this.name].attributes,i={},v={},P={};for(const o in s){const l=Wi[o]||o.toLowerCase();i[l]=s[o]}for(const o in t.attributes){const l=Wi[o]||o.toLowerCase();if(s[o]!==void 0){const c=n.accessors[t.attributes[o]],d=rr[c.componentType];P[l]=d.name,v[l]=c.normalized===!0}}return e.getDependency("bufferView",a).then(function(o){return new Promise(function(l){f.decodeDracoFile(o,function(c){for(const d in c.attributes){const X=c.attributes[d],h=v[d];h!==void 0&&(X.normalized=h)}l(c)},i,P)})})}}class Kh{constructor(){this.name=Gt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Rh{constructor(){this.name=Gt.KHR_MESH_QUANTIZATION}}class Oo extends Br{constructor(t,e,n,f){super(t,e,n,f)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,f=this.valueSize,a=t*f*3+f;for(let s=0;s!==f;s++)e[s]=n[a+s];return e}interpolate_(t,e,n,f){const a=this.resultBuffer,s=this.sampleValues,i=this.valueSize,v=i*2,P=i*3,o=f-e,l=(n-e)/o,c=l*l,d=c*l,X=t*P,h=X-P,u=-2*d+3*c,p=d-c,z=1-u,b=p-c+l;for(let x=0;x!==i;x++){const w=s[h+x+i],L=s[h+x+v]*o,H=s[X+x+i],N=s[X+x]*o;a[x]=z*w+b*L+u*H+p*N}return a}}const Fh=new vn;class Gh extends Oo{interpolate_(t,e,n,f){const a=super.interpolate_(t,e,n,f);return Fh.fromArray(a).normalize().toArray(a),a}}const ge={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},rr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},hP={9728:he,9729:Se,9984:ci,9985:RP,9986:ga,9987:bf},bP={33071:Ce,33648:Ya,10497:ir},ei={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wi={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Rn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},gh={CUBICSPLINE:void 0,LINEAR:or,STEP:Er},ni={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ch(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Gi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:sn})),r.DefaultMaterial}function Pf(r,t,e){for(const n in e.extensions)r[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Gn(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Jh(r,t,e){let n=!1,f=!1,a=!1;for(let P=0,o=t.length;P<o;P++){const l=t[P];if(l.POSITION!==void 0&&(n=!0),l.NORMAL!==void 0&&(f=!0),l.COLOR_0!==void 0&&(a=!0),n&&f&&a)break}if(!n&&!f&&!a)return Promise.resolve(r);const s=[],i=[],v=[];for(let P=0,o=t.length;P<o;P++){const l=t[P];if(n){const c=l.POSITION!==void 0?e.getDependency("accessor",l.POSITION):r.attributes.position;s.push(c)}if(f){const c=l.NORMAL!==void 0?e.getDependency("accessor",l.NORMAL):r.attributes.normal;i.push(c)}if(a){const c=l.COLOR_0!==void 0?e.getDependency("accessor",l.COLOR_0):r.attributes.color;v.push(c)}}return Promise.all([Promise.all(s),Promise.all(i),Promise.all(v)]).then(function(P){const o=P[0],l=P[1],c=P[2];return n&&(r.morphAttributes.position=o),f&&(r.morphAttributes.normal=l),a&&(r.morphAttributes.color=c),r.morphTargetsRelative=!0,r})}function Eh(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let n=0,f=e.length;n<f;n++)r.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Yh(r){let t;const e=r.extensions&&r.extensions[Gt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+fi(e.attributes):t=r.indices+":"+fi(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,f=r.targets.length;n<f;n++)t+=":"+fi(r.targets[n]);return t}function fi(r){let t="";const e=Object.keys(r).sort();for(let n=0,f=e.length;n<f;n++)t+=e[n]+":"+r[e[n]]+";";return t}function yi(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function kh(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Bh=new bt;class Ih{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new zh,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,f=!1,a=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,f=navigator.userAgent.indexOf("Firefox")>-1,a=f?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||f&&a<98?this.textureLoader=new To(this.options.manager):this.textureLoader=new gd(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new gi(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,f=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const i={scene:s[0][f.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:f.asset,parser:n,userData:{}};Pf(a,i,f),Gn(i,f),Promise.all(n._invokeAll(function(v){return v.afterRoot&&v.afterRoot(i)})).then(function(){t(i)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let f=0,a=e.length;f<a;f++){const s=e[f].joints;for(let i=0,v=s.length;i<v;i++)t[s[i]].isBone=!0}for(let f=0,a=t.length;f<a;f++){const s=t[f];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const f=n.clone(),a=(s,i)=>{const v=this.associations.get(s);v!=null&&this.associations.set(i,v);for(const[P,o]of s.children.entries())a(o,i.children[P])};return a(n,f),f.name+="_instance_"+t.uses[e]++,f}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const f=t(e[n]);if(f)return f}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let f=0;f<e.length;f++){const a=t(e[f]);a&&n.push(a)}return n}getDependency(t,e){const n=t+":"+e;let f=this.cache.get(n);if(!f){switch(t){case"scene":f=this.loadScene(e);break;case"node":f=this._invokeOne(function(a){return a.loadNode&&a.loadNode(e)});break;case"mesh":f=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(e)});break;case"accessor":f=this.loadAccessor(e);break;case"bufferView":f=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(e)});break;case"buffer":f=this.loadBuffer(e);break;case"material":f=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(e)});break;case"texture":f=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(e)});break;case"skin":f=this.loadSkin(e);break;case"animation":f=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(e)});break;case"camera":f=this.loadCamera(e);break;default:if(f=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(t,e)}),!f)throw new Error("Unknown type: "+t);break}this.cache.add(n,f)}return f}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,f=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(f.map(function(a,s){return n.getDependency(t,s)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Gt.KHR_BINARY_GLTF].body);const f=this.options;return new Promise(function(a,s){n.load(xi.resolveURL(e.uri,f.path),a,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const f=e.byteLength||0,a=e.byteOffset||0;return n.slice(a,a+f)})}loadAccessor(t){const e=this,n=this.json,f=this.json.accessors[t];if(f.bufferView===void 0&&f.sparse===void 0){const s=ei[f.type],i=rr[f.componentType],v=f.normalized===!0,P=new i(f.count*s);return Promise.resolve(new le(P,s,v))}const a=[];return f.bufferView!==void 0?a.push(this.getDependency("bufferView",f.bufferView)):a.push(null),f.sparse!==void 0&&(a.push(this.getDependency("bufferView",f.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",f.sparse.values.bufferView))),Promise.all(a).then(function(s){const i=s[0],v=ei[f.type],P=rr[f.componentType],o=P.BYTES_PER_ELEMENT,l=o*v,c=f.byteOffset||0,d=f.bufferView!==void 0?n.bufferViews[f.bufferView].byteStride:void 0,X=f.normalized===!0;let h,u;if(d&&d!==l){const p=Math.floor(c/d),z="InterleavedBuffer:"+f.bufferView+":"+f.componentType+":"+p+":"+f.count;let b=e.cache.get(z);b||(h=new P(i,p*d,f.count*d/o),b=new Xd(h,d/o),e.cache.add(z,b)),u=new Ki(b,v,c%d/o,X)}else i===null?h=new P(f.count*v):h=new P(i,c,f.count*v),u=new le(h,v,X);if(f.sparse!==void 0){const p=ei.SCALAR,z=rr[f.sparse.indices.componentType],b=f.sparse.indices.byteOffset||0,x=f.sparse.values.byteOffset||0,w=new z(s[1],b,f.sparse.count*p),L=new P(s[2],x,f.sparse.count*v);i!==null&&(u=new le(u.array.slice(),u.itemSize,u.normalized));for(let H=0,N=w.length;H<N;H++){const m=w[H];if(u.setX(m,L[H*v]),v>=2&&u.setY(m,L[H*v+1]),v>=3&&u.setZ(m,L[H*v+2]),v>=4&&u.setW(m,L[H*v+3]),v>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return u})}loadTexture(t){const e=this.json,n=this.options,a=e.textures[t].source,s=e.images[a];let i=this.textureLoader;if(s.uri){const v=n.manager.getHandler(s.uri);v!==null&&(i=v)}return this.loadTextureImage(t,a,i)}loadTextureImage(t,e,n){const f=this,a=this.json,s=a.textures[t],i=a.images[e],v=(i.uri||i.bufferView)+":"+s.sampler;if(this.textureCache[v])return this.textureCache[v];const P=this.loadImageSource(e,n).then(function(o){o.flipY=!1,o.name=s.name||i.name||"",o.name===""&&typeof i.uri=="string"&&i.uri.startsWith("data:image/")===!1&&(o.name=i.uri);const c=(a.samplers||{})[s.sampler]||{};return o.magFilter=hP[c.magFilter]||Se,o.minFilter=hP[c.minFilter]||bf,o.wrapS=bP[c.wrapS]||ir,o.wrapT=bP[c.wrapT]||ir,f.associations.set(o,{textures:t}),o}).catch(function(){return null});return this.textureCache[v]=P,P}loadImageSource(t,e){const n=this,f=this.json,a=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(l=>l.clone());const s=f.images[t],i=self.URL||self.webkitURL;let v=s.uri||"",P=!1;if(s.bufferView!==void 0)v=n.getDependency("bufferView",s.bufferView).then(function(l){P=!0;const c=new Blob([l],{type:s.mimeType});return v=i.createObjectURL(c),v});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const o=Promise.resolve(v).then(function(l){return new Promise(function(c,d){let X=c;e.isImageBitmapLoader===!0&&(X=function(h){const u=new we(h);u.needsUpdate=!0,c(u)}),e.load(xi.resolveURL(l,a.path),X,void 0,d)})}).then(function(l){return P===!0&&i.revokeObjectURL(v),l.userData.mimeType=s.mimeType||kh(s.uri),l}).catch(function(l){throw console.error("THREE.GLTFLoader: Couldn't load texture",v),l});return this.sourceCache[t]=o,o}assignTexture(t,e,n,f){const a=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(s=s.clone(),s.channel=n.texCoord),a.extensions[Gt.KHR_TEXTURE_TRANSFORM]){const i=n.extensions!==void 0?n.extensions[Gt.KHR_TEXTURE_TRANSFORM]:void 0;if(i){const v=a.associations.get(s);s=a.extensions[Gt.KHR_TEXTURE_TRANSFORM].extendTexture(s,i),a.associations.set(s,v)}}return f!==void 0&&(s.colorSpace=f),t[e]=s,s})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const f=e.attributes.tangent===void 0,a=e.attributes.color!==void 0,s=e.attributes.normal===void 0;if(t.isPoints){const i="PointsMaterial:"+n.uuid;let v=this.cache.get(i);v||(v=new zo,rn.prototype.copy.call(v,n),v.color.copy(n.color),v.map=n.map,v.sizeAttenuation=!1,this.cache.add(i,v)),n=v}else if(t.isLine){const i="LineBasicMaterial:"+n.uuid;let v=this.cache.get(i);v||(v=new xo,rn.prototype.copy.call(v,n),v.color.copy(n.color),v.map=n.map,this.cache.add(i,v)),n=v}if(f||a||s){let i="ClonedMaterial:"+n.uuid+":";f&&(i+="derivative-tangents:"),a&&(i+="vertex-colors:"),s&&(i+="flat-shading:");let v=this.cache.get(i);v||(v=n.clone(),a&&(v.vertexColors=!0),s&&(v.flatShading=!0),f&&(v.normalScale&&(v.normalScale.y*=-1),v.clearcoatNormalScale&&(v.clearcoatNormalScale.y*=-1)),this.cache.add(i,v),this.associations.set(v,this.associations.get(n))),n=v}t.material=n}getMaterialType(){return Gi}loadMaterial(t){const e=this,n=this.json,f=this.extensions,a=n.materials[t];let s;const i={},v=a.extensions||{},P=[];if(v[Gt.KHR_MATERIALS_UNLIT]){const l=f[Gt.KHR_MATERIALS_UNLIT];s=l.getMaterialType(),P.push(l.extendParams(i,a,e))}else{const l=a.pbrMetallicRoughness||{};if(i.color=new Dt(1,1,1),i.opacity=1,Array.isArray(l.baseColorFactor)){const c=l.baseColorFactor;i.color.fromArray(c),i.opacity=c[3]}l.baseColorTexture!==void 0&&P.push(e.assignTexture(i,"map",l.baseColorTexture,Ht)),i.metalness=l.metallicFactor!==void 0?l.metallicFactor:1,i.roughness=l.roughnessFactor!==void 0?l.roughnessFactor:1,l.metallicRoughnessTexture!==void 0&&(P.push(e.assignTexture(i,"metalnessMap",l.metallicRoughnessTexture)),P.push(e.assignTexture(i,"roughnessMap",l.metallicRoughnessTexture))),s=this._invokeOne(function(c){return c.getMaterialType&&c.getMaterialType(t)}),P.push(Promise.all(this._invokeAll(function(c){return c.extendMaterialParams&&c.extendMaterialParams(t,i)})))}a.doubleSided===!0&&(i.side=nn);const o=a.alphaMode||ni.OPAQUE;if(o===ni.BLEND?(i.transparent=!0,i.depthWrite=!1):(i.transparent=!1,o===ni.MASK&&(i.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&s!==Cn&&(P.push(e.assignTexture(i,"normalMap",a.normalTexture)),i.normalScale=new ht(1,1),a.normalTexture.scale!==void 0)){const l=a.normalTexture.scale;i.normalScale.set(l,l)}return a.occlusionTexture!==void 0&&s!==Cn&&(P.push(e.assignTexture(i,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(i.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&s!==Cn&&(i.emissive=new Dt().fromArray(a.emissiveFactor)),a.emissiveTexture!==void 0&&s!==Cn&&P.push(e.assignTexture(i,"emissiveMap",a.emissiveTexture,Ht)),Promise.all(P).then(function(){const l=new s(i);return a.name&&(l.name=a.name),Gn(l,a),e.associations.set(l,{materials:t}),a.extensions&&Pf(f,l,a),l})}createUniqueName(t){const e=Yt.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,f=this.primitiveCache;function a(i){return n[Gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(i,e).then(function(v){return xP(v,i,e)})}const s=[];for(let i=0,v=t.length;i<v;i++){const P=t[i],o=Yh(P),l=f[o];if(l)s.push(l.promise);else{let c;P.extensions&&P.extensions[Gt.KHR_DRACO_MESH_COMPRESSION]?c=a(P):c=xP(new Ve,P,e),f[o]={primitive:P,promise:c},s.push(c)}}return Promise.all(s)}loadMesh(t){const e=this,n=this.json,f=this.extensions,a=n.meshes[t],s=a.primitives,i=[];for(let v=0,P=s.length;v<P;v++){const o=s[v].material===void 0?Ch(this.cache):this.getDependency("material",s[v].material);i.push(o)}return i.push(e.loadGeometries(s)),Promise.all(i).then(function(v){const P=v.slice(0,v.length-1),o=v[v.length-1],l=[];for(let d=0,X=o.length;d<X;d++){const h=o[d],u=s[d];let p;const z=P[d];if(u.mode===ge.TRIANGLES||u.mode===ge.TRIANGLE_STRIP||u.mode===ge.TRIANGLE_FAN||u.mode===void 0)p=a.isSkinnedMesh===!0?new bd(h,z):new Le(h,z),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),u.mode===ge.TRIANGLE_STRIP?p.geometry=dP(p.geometry,YP):u.mode===ge.TRIANGLE_FAN&&(p.geometry=dP(p.geometry,pi));else if(u.mode===ge.LINES)p=new Hd(h,z);else if(u.mode===ge.LINE_STRIP)p=new Fi(h,z);else if(u.mode===ge.LINE_LOOP)p=new Ad(h,z);else if(u.mode===ge.POINTS)p=new Td(h,z);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+u.mode);Object.keys(p.geometry.morphAttributes).length>0&&Eh(p,a),p.name=e.createUniqueName(a.name||"mesh_"+t),Gn(p,a),u.extensions&&Pf(f,p,u),e.assignFinalMaterial(p),l.push(p)}for(let d=0,X=l.length;d<X;d++)e.associations.set(l[d],{meshes:t,primitives:d});if(l.length===1)return a.extensions&&Pf(f,l[0],a),l[0];const c=new pf;a.extensions&&Pf(f,c,a),e.associations.set(c,{meshes:t});for(let d=0,X=l.length;d<X;d++)c.add(l[d]);return c})}loadCamera(t){let e;const n=this.json.cameras[t],f=n[n.type];if(!f){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Te(_P.radToDeg(f.yfov),f.aspectRatio||1,f.znear||1,f.zfar||2e6):n.type==="orthographic"&&(e=new Zi(-f.xmag,f.xmag,f.ymag,-f.ymag,f.znear,f.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Gn(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let f=0,a=e.joints.length;f<a;f++)n.push(this._loadNodeShallow(e.joints[f]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(f){const a=f.pop(),s=f,i=[],v=[];for(let P=0,o=s.length;P<o;P++){const l=s[P];if(l){i.push(l);const c=new bt;a!==null&&c.fromArray(a.array,P*16),v.push(c)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[P])}return new Ri(i,v)})}loadAnimation(t){const e=this.json,n=this,f=e.animations[t],a=f.name?f.name:"animation_"+t,s=[],i=[],v=[],P=[],o=[];for(let l=0,c=f.channels.length;l<c;l++){const d=f.channels[l],X=f.samplers[d.sampler],h=d.target,u=h.node,p=f.parameters!==void 0?f.parameters[X.input]:X.input,z=f.parameters!==void 0?f.parameters[X.output]:X.output;h.node!==void 0&&(s.push(this.getDependency("node",u)),i.push(this.getDependency("accessor",p)),v.push(this.getDependency("accessor",z)),P.push(X),o.push(h))}return Promise.all([Promise.all(s),Promise.all(i),Promise.all(v),Promise.all(P),Promise.all(o)]).then(function(l){const c=l[0],d=l[1],X=l[2],h=l[3],u=l[4],p=[];for(let z=0,b=c.length;z<b;z++){const x=c[z],w=d[z],L=X[z],H=h[z],N=u[z];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const m=n._createAnimationTracks(x,w,L,H,N);if(m)for(let A=0;A<m.length;A++)p.push(m[A])}return new Dd(a,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,f=e.nodes[t];return f.mesh===void 0?null:n.getDependency("mesh",f.mesh).then(function(a){const s=n._getNodeRef(n.meshCache,f.mesh,a);return f.weights!==void 0&&s.traverse(function(i){if(i.isMesh)for(let v=0,P=f.weights.length;v<P;v++)i.morphTargetInfluences[v]=f.weights[v]}),s})}loadNode(t){const e=this.json,n=this,f=e.nodes[t],a=n._loadNodeShallow(t),s=[],i=f.children||[];for(let P=0,o=i.length;P<o;P++)s.push(n.getDependency("node",i[P]));const v=f.skin===void 0?Promise.resolve(null):n.getDependency("skin",f.skin);return Promise.all([a,Promise.all(s),v]).then(function(P){const o=P[0],l=P[1],c=P[2];c!==null&&o.traverse(function(d){d.isSkinnedMesh&&d.bind(c,Bh)});for(let d=0,X=l.length;d<X;d++)o.add(l[d]);return o})}_loadNodeShallow(t){const e=this.json,n=this.extensions,f=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const a=e.nodes[t],s=a.name?f.createUniqueName(a.name):"",i=[],v=f._invokeOne(function(P){return P.createNodeMesh&&P.createNodeMesh(t)});return v&&i.push(v),a.camera!==void 0&&i.push(f.getDependency("camera",a.camera).then(function(P){return f._getNodeRef(f.cameraCache,a.camera,P)})),f._invokeAll(function(P){return P.createNodeAttachment&&P.createNodeAttachment(t)}).forEach(function(P){i.push(P)}),this.nodeCache[t]=Promise.all(i).then(function(P){let o;if(a.isBone===!0?o=new bo:P.length>1?o=new pf:P.length===1?o=P[0]:o=new te,o!==P[0])for(let l=0,c=P.length;l<c;l++)o.add(P[l]);if(a.name&&(o.userData.name=a.name,o.name=s),Gn(o,a),a.extensions&&Pf(n,o,a),a.matrix!==void 0){const l=new bt;l.fromArray(a.matrix),o.applyMatrix4(l)}else a.translation!==void 0&&o.position.fromArray(a.translation),a.rotation!==void 0&&o.quaternion.fromArray(a.rotation),a.scale!==void 0&&o.scale.fromArray(a.scale);return f.associations.has(o)||f.associations.set(o,{}),f.associations.get(o).nodes=t,o}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],f=this,a=new pf;n.name&&(a.name=f.createUniqueName(n.name)),Gn(a,n),n.extensions&&Pf(e,a,n);const s=n.nodes||[],i=[];for(let v=0,P=s.length;v<P;v++)i.push(f.getDependency("node",s[v]));return Promise.all(i).then(function(v){for(let o=0,l=v.length;o<l;o++)a.add(v[o]);const P=o=>{const l=new Map;for(const[c,d]of f.associations)(c instanceof rn||c instanceof we)&&l.set(c,d);return o.traverse(c=>{const d=f.associations.get(c);d!=null&&l.set(c,d)}),l};return f.associations=P(a),a})}_createAnimationTracks(t,e,n,f,a){const s=[],i=t.name?t.name:t.uuid,v=[];Rn[a.path]===Rn.weights?t.traverse(function(c){c.morphTargetInfluences&&v.push(c.name?c.name:c.uuid)}):v.push(i);let P;switch(Rn[a.path]){case Rn.weights:P=pr;break;case Rn.rotation:P=xf;break;case Rn.position:case Rn.scale:P=ur;break;default:switch(n.itemSize){case 1:P=pr;break;case 2:case 3:default:P=ur;break}break}const o=f.interpolation!==void 0?gh[f.interpolation]:or,l=this._getArrayFromAccessor(n);for(let c=0,d=v.length;c<d;c++){const X=new P(v[c]+"."+Rn[a.path],e.array,l,o);f.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(X),s.push(X)}return s}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=yi(e.constructor),f=new Float32Array(e.length);for(let a=0,s=e.length;a<s;a++)f[a]=e[a]*n;e=f}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const f=this instanceof xf?Gh:Oo;return new f(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Qh(r,t,e){const n=t.attributes,f=new re;if(n.POSITION!==void 0){const i=e.json.accessors[n.POSITION],v=i.min,P=i.max;if(v!==void 0&&P!==void 0){if(f.set(new W(v[0],v[1],v[2]),new W(P[0],P[1],P[2])),i.normalized){const o=yi(rr[i.componentType]);f.min.multiplyScalar(o),f.max.multiplyScalar(o)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=t.targets;if(a!==void 0){const i=new W,v=new W;for(let P=0,o=a.length;P<o;P++){const l=a[P];if(l.POSITION!==void 0){const c=e.json.accessors[l.POSITION],d=c.min,X=c.max;if(d!==void 0&&X!==void 0){if(v.setX(Math.max(Math.abs(d[0]),Math.abs(X[0]))),v.setY(Math.max(Math.abs(d[1]),Math.abs(X[1]))),v.setZ(Math.max(Math.abs(d[2]),Math.abs(X[2]))),c.normalized){const h=yi(rr[c.componentType]);v.multiplyScalar(h)}i.max(v)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}f.expandByVector(i)}r.boundingBox=f;const s=new on;f.getCenter(s.center),s.radius=f.min.distanceTo(f.max)/2,r.boundingSphere=s}function xP(r,t,e){const n=t.attributes,f=[];function a(s,i){return e.getDependency("accessor",s).then(function(v){r.setAttribute(i,v)})}for(const s in n){const i=Wi[s]||s.toLowerCase();i in r.attributes||f.push(a(n[s],i))}if(t.indices!==void 0&&!r.index){const s=e.getDependency("accessor",t.indices).then(function(i){r.setIndex(i)});f.push(s)}return Gn(r,t),Qh(r,t,e),Promise.all(f).then(function(){return t.targets!==void 0?Jh(r,t.targets,e):r})}class _h{constructor(){ut(this,"gltf_loader");ut(this,"texture_loader");ut(this,"audio_loader");ut(this,"core");this.core=new hn,this.gltf_loader=new xh,this.texture_loader=new To,this.audio_loader=new Jd,Ao.onProgress=(t,e,n)=>{this.core.$emit(lf,{url:t,loaded:e,total:n})}}}const Ea=(r,t)=>{const e=t.x-r.x,n=t.y-r.y;return Math.sqrt(e*e+n*n)},$h=(r,t)=>{const e=t.x-r.x,n=t.y-r.y;return e6(Math.atan2(n,e))},t6=(r,t,e)=>{const n={x:0,y:0};return e=Ni(e),n.x=r.x-t*Math.cos(e),n.y=r.y-t*Math.sin(e),n},Ni=r=>r*(Math.PI/180),e6=r=>r*(180/Math.PI),n6=r=>isNaN(r.buttons)?r.pressure!==0:r.buttons!==0,ri=new Map,zP=r=>{ri.has(r)&&clearTimeout(ri.get(r)),ri.set(r,setTimeout(r,100))},_a=(r,t,e)=>{const n=t.split(/[ ,]+/g);let f;for(let a=0;a<n.length;a+=1)f=n[a],r.addEventListener?r.addEventListener(f,e,!1):r.attachEvent&&r.attachEvent(f,e)},wP=(r,t,e)=>{const n=t.split(/[ ,]+/g);let f;for(let a=0;a<n.length;a+=1)f=n[a],r.removeEventListener?r.removeEventListener(f,e):r.detachEvent&&r.detachEvent(f,e)},So=r=>(r.preventDefault(),r.type.match(/^touch/)?r.changedTouches:r),mP=()=>{const r=window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,t=window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return{x:r,y:t}},HP=(r,t)=>{t.top||t.right||t.bottom||t.left?(r.style.top=t.top,r.style.right=t.right,r.style.bottom=t.bottom,r.style.left=t.left):(r.style.left=t.x+"px",r.style.top=t.y+"px")},Ii=(r,t,e)=>{const n=Vo(r);for(let f in n)if(n.hasOwnProperty(f))if(typeof t=="string")n[f]=t+" "+e;else{let a="";for(let s=0,i=t.length;s<i;s+=1)a+=t[s]+" "+e+", ";n[f]=a.slice(0,-2)}return n},f6=(r,t)=>{const e=Vo(r);for(let n in e)e.hasOwnProperty(n)&&(e[n]=t);return e},Vo=r=>{const t={};return t[r]="",["webkit","Moz","o"].forEach(function(n){t[n+r.charAt(0).toUpperCase()+r.slice(1)]=""}),t},ai=(r,t)=>{for(let e in t)t.hasOwnProperty(e)&&(r[e]=t[e]);return r},r6=(r,t)=>{const e={};for(let n in r)r.hasOwnProperty(n)&&t.hasOwnProperty(n)?e[n]=t[n]:r.hasOwnProperty(n)&&(e[n]=r[n]);return e},Di=(r,t)=>{if(r.length)for(let e=0,n=r.length;e<n;e+=1)t(r[e]);else t(r)},a6=(r,t,e)=>({x:Math.min(Math.max(r.x,t.x-e),t.x+e),y:Math.min(Math.max(r.y,t.y-e),t.y+e)});var s6="ontouchstart"in window,i6=!!window.PointerEvent,v6=!!window.MSPointerEvent,Kr={touch:{start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"},MSPointer:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},er,kr={};i6?er=Kr.pointer:v6?er=Kr.MSPointer:s6?(er=Kr.touch,kr=Kr.mouse):er=Kr.mouse;function On(){}On.prototype.on=function(r,t){var e=this,n=r.split(/[ ,]+/g),f;e._handlers_=e._handlers_||{};for(var a=0;a<n.length;a+=1)f=n[a],e._handlers_[f]=e._handlers_[f]||[],e._handlers_[f].push(t);return e};On.prototype.off=function(r,t){var e=this;return e._handlers_=e._handlers_||{},r===void 0?e._handlers_={}:t===void 0?e._handlers_[r]=null:e._handlers_[r]&&e._handlers_[r].indexOf(t)>=0&&e._handlers_[r].splice(e._handlers_[r].indexOf(t),1),e};On.prototype.trigger=function(r,t){var e=this,n=r.split(/[ ,]+/g),f;e._handlers_=e._handlers_||{};for(var a=0;a<n.length;a+=1)f=n[a],e._handlers_[f]&&e._handlers_[f].length&&e._handlers_[f].forEach(function(s){s.call(e,{type:f,target:e},t)})};On.prototype.config=function(r){var t=this;t.options=t.defaults||{},r&&(t.options=r6(t.options,r))};On.prototype.bindEvt=function(r,t){var e=this;return e._domHandlers_=e._domHandlers_||{},e._domHandlers_[t]=function(){typeof e["on"+t]=="function"?e["on"+t].apply(e,arguments):console.warn('[WARNING] : Missing "on'+t+'" handler.')},_a(r,er[t],e._domHandlers_[t]),kr[t]&&_a(r,kr[t],e._domHandlers_[t]),e};On.prototype.unbindEvt=function(r,t){var e=this;return e._domHandlers_=e._domHandlers_||{},wP(r,er[t],e._domHandlers_[t]),kr[t]&&wP(r,kr[t],e._domHandlers_[t]),delete e._domHandlers_[t],this};function ue(r,t){return this.identifier=t.identifier,this.position=t.position,this.frontPosition=t.frontPosition,this.collection=r,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(t),this.options.mode==="dynamic"&&(this.options.restOpacity=0),this.id=ue.id,ue.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}ue.prototype=new On;ue.constructor=ue;ue.id=0;ue.prototype.buildEl=function(r){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)};ue.prototype.stylize=function(){if(this.options.dataOnly)return this;var r=this.options.fadeTime+"ms",t=f6("borderRadius","50%"),e=Ii("transition","opacity",r),n={};return n.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},n.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",left:0,marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},n.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",left:0,marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5",transform:"translate(0px, 0px)"},ai(n.el,e),this.options.shape==="circle"&&ai(n.back,t),ai(n.front,t),this.applyStyles(n),this};ue.prototype.applyStyles=function(r){for(var t in this.ui)if(this.ui.hasOwnProperty(t))for(var e in r[t])this.ui[t].style[e]=r[t][e];return this};ue.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)};ue.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)};ue.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()};ue.prototype.show=function(r){var t=this;return t.options.dataOnly||(clearTimeout(t.removeTimeout),clearTimeout(t.showTimeout),clearTimeout(t.restTimeout),t.addToDom(),t.restCallback(),setTimeout(function(){t.ui.el.style.opacity=1},0),t.showTimeout=setTimeout(function(){t.trigger("shown",t.instance),typeof r=="function"&&r.call(this)},t.options.fadeTime)),t};ue.prototype.hide=function(r){var t=this;if(t.options.dataOnly)return t;if(t.ui.el.style.opacity=t.options.restOpacity,clearTimeout(t.removeTimeout),clearTimeout(t.showTimeout),clearTimeout(t.restTimeout),t.removeTimeout=setTimeout(function(){var e=t.options.mode==="dynamic"?"none":"block";t.ui.el.style.display=e,typeof r=="function"&&r.call(t),t.trigger("hidden",t.instance)},t.options.fadeTime),t.options.restJoystick){const e=t.options.restJoystick,n={};n.x=e===!0||e.x!==!1?0:t.instance.frontPosition.x,n.y=e===!0||e.y!==!1?0:t.instance.frontPosition.y,t.setPosition(r,n)}return t};ue.prototype.setPosition=function(r,t){var e=this;e.frontPosition={x:t.x,y:t.y};var n=e.options.fadeTime+"ms",f={};f.front=Ii("transition",["transform"],n);var a={front:{}};a.front={transform:"translate("+e.frontPosition.x+"px,"+e.frontPosition.y+"px)"},e.applyStyles(f),e.applyStyles(a),e.restTimeout=setTimeout(function(){typeof r=="function"&&r.call(e),e.restCallback()},e.options.fadeTime)};ue.prototype.restCallback=function(){var r=this,t={};t.front=Ii("transition","none",""),r.applyStyles(t),r.trigger("rested",r.instance)};ue.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}};ue.prototype.computeDirection=function(r){var t=r.angle.radian,e=Math.PI/4,n=Math.PI/2,f,a,s;if(t>e&&t<e*3&&!r.lockX?f="up":t>-e&&t<=e&&!r.lockY?f="left":t>-e*3&&t<=-e&&!r.lockX?f="down":r.lockY||(f="right"),r.lockY||(t>-n&&t<n?a="left":a="right"),r.lockX||(t>0?s="up":s="down"),r.force>this.options.threshold){var i={},v;for(v in this.direction)this.direction.hasOwnProperty(v)&&(i[v]=this.direction[v]);var P={};this.direction={x:a,y:s,angle:f},r.direction=this.direction;for(v in i)i[v]===this.direction[v]&&(P[v]=!0);if(P.x&&P.y&&P.angle)return r;(!P.x||!P.y)&&this.trigger("plain",r),P.x||this.trigger("plain:"+a,r),P.y||this.trigger("plain:"+s,r),P.angle||this.trigger("dir dir:"+f,r)}else this.resetDirection();return r};function fe(r,t){var e=this;e.nipples=[],e.idles=[],e.actives=[],e.ids=[],e.pressureIntervals={},e.manager=r,e.id=fe.id,fe.id+=1,e.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},e.config(t),(e.options.mode==="static"||e.options.mode==="semi")&&(e.options.multitouch=!1),e.options.multitouch||(e.options.maxNumberOfNipples=1);const n=getComputedStyle(e.options.zone.parentElement);return n&&n.display==="flex"&&(e.parentIsFlex=!0),e.updateBox(),e.prepareNipples(),e.bindings(),e.begin(),e.nipples}fe.prototype=new On;fe.constructor=fe;fe.id=0;fe.prototype.prepareNipples=function(){var r=this,t=r.nipples;t.on=r.on.bind(r),t.off=r.off.bind(r),t.options=r.options,t.destroy=r.destroy.bind(r),t.ids=r.ids,t.id=r.id,t.processOnMove=r.processOnMove.bind(r),t.processOnEnd=r.processOnEnd.bind(r),t.get=function(e){if(e===void 0)return t[0];for(var n=0,f=t.length;n<f;n+=1)if(t[n].identifier===e)return t[n];return!1}};fe.prototype.bindings=function(){var r=this;r.bindEvt(r.options.zone,"start"),r.options.zone.style.touchAction="none",r.options.zone.style.msTouchAction="none"};fe.prototype.begin=function(){var r=this,t=r.options;if(t.mode==="static"){var e=r.createNipple(t.position,r.manager.getIdentifier());e.add(),r.idles.push(e)}};fe.prototype.createNipple=function(r,t){var e=this,n=e.manager.scroll,f={},a=e.options,s={x:e.parentIsFlex?n.x:n.x+e.box.left,y:e.parentIsFlex?n.y:n.y+e.box.top};if(r.x&&r.y)f={x:r.x-s.x,y:r.y-s.y};else if(r.top||r.right||r.bottom||r.left){var i=document.createElement("DIV");i.style.display="hidden",i.style.top=r.top,i.style.right=r.right,i.style.bottom=r.bottom,i.style.left=r.left,i.style.position="absolute",a.zone.appendChild(i);var v=i.getBoundingClientRect();a.zone.removeChild(i),f=r,r={x:v.left+n.x,y:v.top+n.y}}var P=new ue(e,{color:a.color,size:a.size,threshold:a.threshold,fadeTime:a.fadeTime,dataOnly:a.dataOnly,restJoystick:a.restJoystick,restOpacity:a.restOpacity,mode:a.mode,identifier:t,position:r,zone:a.zone,frontPosition:{x:0,y:0},shape:a.shape});return a.dataOnly||(HP(P.ui.el,f),HP(P.ui.front,P.frontPosition)),e.nipples.push(P),e.trigger("added "+P.identifier+":added",P),e.manager.trigger("added "+P.identifier+":added",P),e.bindNipple(P),P};fe.prototype.updateBox=function(){var r=this;r.box=r.options.zone.getBoundingClientRect()};fe.prototype.bindNipple=function(r){var t=this,e,n=function(f,a){e=f.type+" "+a.id+":"+f.type,t.trigger(e,a)};r.on("destroyed",t.onDestroyed.bind(t)),r.on("shown hidden rested dir plain",n),r.on("dir:up dir:right dir:down dir:left",n),r.on("plain:up plain:right plain:down plain:left",n)};fe.prototype.pressureFn=function(r,t,e){var n=this,f=0;clearInterval(n.pressureIntervals[e]),n.pressureIntervals[e]=setInterval((function(){var a=r.force||r.pressure||r.webkitForce||0;a!==f&&(t.trigger("pressure",a),n.trigger("pressure "+t.identifier+":pressure",a),f=a)}).bind(n),100)};fe.prototype.onstart=function(r){var t=this,e=t.options,n=r;r=So(r),t.updateBox();var f=function(a){t.actives.length<e.maxNumberOfNipples?t.processOnStart(a):n.type.match(/^touch/)&&(Object.keys(t.manager.ids).forEach(function(s){if(Object.values(n.touches).findIndex(function(v){return v.identifier===s})<0){var i=[r[0]];i.identifier=s,t.processOnEnd(i)}}),t.actives.length<e.maxNumberOfNipples&&t.processOnStart(a))};return Di(r,f),t.manager.bindDocument(),!1};fe.prototype.processOnStart=function(r){var t=this,e=t.options,n,f=t.manager.getIdentifier(r),a=r.force||r.pressure||r.webkitForce||0,s={x:r.pageX,y:r.pageY},i=t.getOrCreate(f,s);i.identifier!==f&&t.manager.removeIdentifier(i.identifier),i.identifier=f;var v=function(o){o.trigger("start",o),t.trigger("start "+o.id+":start",o),o.show(),a>0&&t.pressureFn(r,o,o.identifier),t.processOnMove(r)};if((n=t.idles.indexOf(i))>=0&&t.idles.splice(n,1),t.actives.push(i),t.ids.push(i.identifier),e.mode!=="semi")v(i);else{var P=Ea(s,i.position);if(P<=e.catchDistance)v(i);else{i.destroy(),t.processOnStart(r);return}}return i};fe.prototype.getOrCreate=function(r,t){var e=this,n=e.options,f;return/(semi|static)/.test(n.mode)?(f=e.idles[0],f?(e.idles.splice(0,1),f):n.mode==="semi"?e.createNipple(t,r):(console.warn("Coudln't find the needed nipple."),!1)):(f=e.createNipple(t,r),f)};fe.prototype.processOnMove=function(r){var t=this,e=t.options,n=t.manager.getIdentifier(r),f=t.nipples.get(n),a=t.manager.scroll;if(!n6(r)){this.processOnEnd(r);return}if(!f){console.error("Found zombie joystick with ID "+n),t.manager.removeIdentifier(n);return}if(e.dynamicPage){var s=f.el.getBoundingClientRect();f.position={x:a.x+s.left,y:a.y+s.top}}f.identifier=n;var i=f.options.size/2,v={x:r.pageX,y:r.pageY};e.lockX&&(v.y=f.position.y),e.lockY&&(v.x=f.position.x);var P=Ea(v,f.position),o=$h(v,f.position),l=Ni(o),c=P/i,d={distance:P,position:v},X,h;if(f.options.shape==="circle"?(X=Math.min(P,i),h=t6(f.position,X,o)):(h=a6(v,f.position,i),X=Ea(h,f.position)),e.follow){if(P>i){let b=v.x-h.x,x=v.y-h.y;f.position.x+=b,f.position.y+=x,f.el.style.top=f.position.y-(t.box.top+a.y)+"px",f.el.style.left=f.position.x-(t.box.left+a.x)+"px",P=Ea(v,f.position)}}else v=h,P=X;var u=v.x-f.position.x,p=v.y-f.position.y;f.frontPosition={x:u,y:p},e.dataOnly||(f.ui.front.style.transform="translate("+u+"px,"+p+"px)");var z={identifier:f.identifier,position:v,force:c,pressure:r.force||r.pressure||r.webkitForce||0,distance:P,angle:{radian:l,degree:o},vector:{x:u/i,y:-p/i},raw:d,instance:f,lockX:e.lockX,lockY:e.lockY};z=f.computeDirection(z),z.angle={radian:Ni(180-o),degree:180-o},f.trigger("move",z),t.trigger("move "+f.id+":move",z)};fe.prototype.processOnEnd=function(r){var t=this,e=t.options,n=t.manager.getIdentifier(r),f=t.nipples.get(n),a=t.manager.removeIdentifier(f.identifier);f&&(e.dataOnly||f.hide(function(){e.mode==="dynamic"&&(f.trigger("removed",f),t.trigger("removed "+f.id+":removed",f),t.manager.trigger("removed "+f.id+":removed",f),f.destroy())}),clearInterval(t.pressureIntervals[f.identifier]),f.resetDirection(),f.trigger("end",f),t.trigger("end "+f.id+":end",f),t.ids.indexOf(f.identifier)>=0&&t.ids.splice(t.ids.indexOf(f.identifier),1),t.actives.indexOf(f)>=0&&t.actives.splice(t.actives.indexOf(f),1),/(semi|static)/.test(e.mode)?t.idles.push(f):t.nipples.indexOf(f)>=0&&t.nipples.splice(t.nipples.indexOf(f),1),t.manager.unbindDocument(),/(semi|static)/.test(e.mode)&&(t.manager.ids[a.id]=a.identifier))};fe.prototype.onDestroyed=function(r,t){var e=this;e.nipples.indexOf(t)>=0&&e.nipples.splice(e.nipples.indexOf(t),1),e.actives.indexOf(t)>=0&&e.actives.splice(e.actives.indexOf(t),1),e.idles.indexOf(t)>=0&&e.idles.splice(e.idles.indexOf(t),1),e.ids.indexOf(t.identifier)>=0&&e.ids.splice(e.ids.indexOf(t.identifier),1),e.manager.removeIdentifier(t.identifier),e.manager.unbindDocument()};fe.prototype.destroy=function(){var r=this;r.unbindEvt(r.options.zone,"start"),r.nipples.forEach(function(e){e.destroy()});for(var t in r.pressureIntervals)r.pressureIntervals.hasOwnProperty(t)&&clearInterval(r.pressureIntervals[t]);r.trigger("destroyed",r.nipples),r.manager.unbindDocument(),r.off()};function xe(r){var t=this;t.ids={},t.index=0,t.collections=[],t.scroll=mP(),t.config(r),t.prepareCollections();var e=function(){var f;t.collections.forEach(function(a){a.forEach(function(s){f=s.el.getBoundingClientRect(),s.position={x:t.scroll.x+f.left,y:t.scroll.y+f.top}})})};_a(window,"resize",function(){zP(e)});var n=function(){t.scroll=mP()};return _a(window,"scroll",function(){zP(n)}),t.collections}xe.prototype=new On;xe.constructor=xe;xe.prototype.prepareCollections=function(){var r=this;r.collections.create=r.create.bind(r),r.collections.on=r.on.bind(r),r.collections.off=r.off.bind(r),r.collections.destroy=r.destroy.bind(r),r.collections.get=function(t){var e;return r.collections.every(function(n){return e=n.get(t),!e}),e}};xe.prototype.create=function(r){return this.createCollection(r)};xe.prototype.createCollection=function(r){var t=this,e=new fe(t,r);return t.bindCollection(e),t.collections.push(e),e};xe.prototype.bindCollection=function(r){var t=this,e,n=function(f,a){e=f.type+" "+a.id+":"+f.type,t.trigger(e,a)};r.on("destroyed",t.onDestroyed.bind(t)),r.on("shown hidden rested dir plain",n),r.on("dir:up dir:right dir:down dir:left",n),r.on("plain:up plain:right plain:down plain:left",n)};xe.prototype.bindDocument=function(){var r=this;r.binded||(r.bindEvt(document,"move").bindEvt(document,"end"),r.binded=!0)};xe.prototype.unbindDocument=function(r){var t=this;(!Object.keys(t.ids).length||r===!0)&&(t.unbindEvt(document,"move").unbindEvt(document,"end"),t.binded=!1)};xe.prototype.getIdentifier=function(r){var t;return r?(t=r.identifier===void 0?r.pointerId:r.identifier,t===void 0&&(t=this.latest||0)):t=this.index,this.ids[t]===void 0&&(this.ids[t]=this.index,this.index+=1),this.latest=t,this.ids[t]};xe.prototype.removeIdentifier=function(r){var t={};for(var e in this.ids)if(this.ids[e]===r){t.id=e,t.identifier=this.ids[e],delete this.ids[e];break}return t};xe.prototype.onmove=function(r){var t=this;return t.onAny("move",r),!1};xe.prototype.onend=function(r){var t=this;return t.onAny("end",r),!1};xe.prototype.oncancel=function(r){var t=this;return t.onAny("end",r),!1};xe.prototype.onAny=function(r,t){var e=this,n,f="processOn"+r.charAt(0).toUpperCase()+r.slice(1);t=So(t);var a=function(i,v,P){P.ids.indexOf(v)>=0&&(P[f](i),i._found_=!0)},s=function(i){n=e.getIdentifier(i),Di(e.collections,a.bind(null,i,n)),i._found_||e.removeIdentifier(n)};return Di(t,s),!1};xe.prototype.destroy=function(){var r=this;r.unbindDocument(!0),r.ids={},r.index=0,r.collections.forEach(function(t){t.destroy()}),r.off()};xe.prototype.onDestroyed=function(r,t){var e=this;if(e.collections.indexOf(t)<0)return!1;e.collections.splice(e.collections.indexOf(t),1)};const AP=new xe,P6={create:function(r){return AP.create(r)},factory:AP};class o6{constructor(){ut(this,"core");ut(this,"key_status",{KeyW:!1,KeyS:!1,KeyA:!1,KeyD:!1,Space:!1});ut(this,"is_enabled",!1);ut(this,"key_sets",["KeyW","KeyS","KeyA","KeyD","Space"]);ut(this,"joystick_element",document.getElementById("joystick"));ut(this,"joystick_manager");ut(this,"mode","pc");ut(this,"move_degree");this.core=new hn,this._bindEvent()}_bindEvent(){var t,e;"ontouchstart"in window?(this.mode="mobile",this._createJoystick(),window.addEventListener("dblclick",()=>{document.documentElement.requestFullscreen()}),(t=this.joystick_manager)==null||t.on("move",(n,f)=>{this.move_degree=f.angle.degree}),(e=this.joystick_manager)==null||e.on("end",()=>{this.move_degree=void 0})):(document.addEventListener("keydown",this._onKeyDown.bind(this)),document.addEventListener("keyup",this._onKeyUp.bind(this)))}_createJoystick(){this.joystick_element.style.display="block",this.joystick_manager=P6.create({zone:this.joystick_element,color:"black",mode:"static",position:{left:"50%",top:"50%"}})}_onKeyDown(t){this.isAllowKey(t.code)&&this.is_enabled&&(this.key_status[t.code]=!0,this.core.$emit(OP,t.code))}_onKeyUp(t){this.isAllowKey(t.code)&&this.is_enabled&&(this.key_status[t.code]=!1,this.core.$emit($o,t.code))}isAllowKey(t){return this.key_sets.includes(t)}disabled(){this.is_enabled=!1}enabled(){this.is_enabled=!0}}const TP={type:"change"},si={type:"start"},LP={type:"end"},Ga=new Xr,jP=new en,l6=Math.cos(70*_P.DEG2RAD);class c6 extends zf{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mf.ROTATE,MIDDLE:mf.DOLLY,RIGHT:mf.PAN},this.touches={ONE:Hf.ROTATE,TWO:Hf.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return i.phi},this.getAzimuthalAngle=function(){return i.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",T),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",T),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(TP),n.update(),a=f.NONE},this.update=function(){const D=new W,Q=new vn().setFromUnitVectors(t.up,new W(0,1,0)),ot=Q.clone().invert(),at=new W,Pt=new vn,yt=new W,Ft=2*Math.PI;return function(){const it=n.object.position;D.copy(it).sub(n.target),D.applyQuaternion(Q),i.setFromVector3(D),n.autoRotate&&a===f.NONE&&q(m()),n.enableDamping?(i.theta+=v.theta*n.dampingFactor,i.phi+=v.phi*n.dampingFactor):(i.theta+=v.theta,i.phi+=v.phi);let F=n.minAzimuthAngle,et=n.maxAzimuthAngle;isFinite(F)&&isFinite(et)&&(F<-Math.PI?F+=Ft:F>Math.PI&&(F-=Ft),et<-Math.PI?et+=Ft:et>Math.PI&&(et-=Ft),F<=et?i.theta=Math.max(F,Math.min(et,i.theta)):i.theta=i.theta>(F+et)/2?Math.max(F,i.theta):Math.min(et,i.theta)),i.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,i.phi)),i.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(o,n.dampingFactor):n.target.add(o),n.zoomToCursor&&L||n.object.isOrthographicCamera?i.radius=$(i.radius):i.radius=$(i.radius*P),D.setFromSpherical(i),D.applyQuaternion(ot),it.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(v.theta*=1-n.dampingFactor,v.phi*=1-n.dampingFactor,o.multiplyScalar(1-n.dampingFactor)):(v.set(0,0,0),o.set(0,0,0));let vt=!1;if(n.zoomToCursor&&L){let Mt=null;if(n.object.isPerspectiveCamera){const Et=D.length();Mt=$(Et*P);const It=Et-Mt;n.object.position.addScaledVector(x,It),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Et=new W(w.x,w.y,0);Et.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/P)),n.object.updateProjectionMatrix(),vt=!0;const It=new W(w.x,w.y,0);It.unproject(n.object),n.object.position.sub(It).add(Et),n.object.updateMatrixWorld(),Mt=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Mt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Mt).add(n.object.position):(Ga.origin.copy(n.object.position),Ga.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ga.direction))<l6?t.lookAt(n.target):(jP.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ga.intersectPlane(jP,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/P)),n.object.updateProjectionMatrix(),vt=!0);return P=1,L=!1,vt||at.distanceToSquared(n.object.position)>s||8*(1-Pt.dot(n.object.quaternion))>s||yt.distanceToSquared(n.target)>0?(n.dispatchEvent(TP),at.copy(n.object.position),Pt.copy(n.object.quaternion),yt.copy(n.target),vt=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",tt),n.domElement.removeEventListener("pointerdown",Zt),n.domElement.removeEventListener("pointercancel",gt),n.domElement.removeEventListener("wheel",y),n.domElement.removeEventListener("pointermove",Ot),n.domElement.removeEventListener("pointerup",gt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",T),n._domElementKeyEvents=null)};const n=this,f={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=f.NONE;const s=1e-6,i=new gv,v=new gv;let P=1;const o=new W,l=new ht,c=new ht,d=new ht,X=new ht,h=new ht,u=new ht,p=new ht,z=new ht,b=new ht,x=new W,w=new ht;let L=!1;const H=[],N={};function m(){return 2*Math.PI/60/60*n.autoRotateSpeed}function A(){return Math.pow(.95,n.zoomSpeed)}function q(D){v.theta-=D}function U(D){v.phi-=D}const O=function(){const D=new W;return function(ot,at){D.setFromMatrixColumn(at,0),D.multiplyScalar(-ot),o.add(D)}}(),V=function(){const D=new W;return function(ot,at){n.screenSpacePanning===!0?D.setFromMatrixColumn(at,1):(D.setFromMatrixColumn(at,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(ot),o.add(D)}}(),Z=function(){const D=new W;return function(ot,at){const Pt=n.domElement;if(n.object.isPerspectiveCamera){const yt=n.object.position;D.copy(yt).sub(n.target);let Ft=D.length();Ft*=Math.tan(n.object.fov/2*Math.PI/180),O(2*ot*Ft/Pt.clientHeight,n.object.matrix),V(2*at*Ft/Pt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(O(ot*(n.object.right-n.object.left)/n.object.zoom/Pt.clientWidth,n.object.matrix),V(at*(n.object.top-n.object.bottom)/n.object.zoom/Pt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function E(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?P/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?P*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function I(D){if(!n.zoomToCursor)return;L=!0;const Q=n.domElement.getBoundingClientRect(),ot=D.clientX-Q.left,at=D.clientY-Q.top,Pt=Q.width,yt=Q.height;w.x=ot/Pt*2-1,w.y=-(at/yt)*2+1,x.set(w.x,w.y,1).unproject(t).sub(t.position).normalize()}function $(D){return Math.max(n.minDistance,Math.min(n.maxDistance,D))}function _(D){l.set(D.clientX,D.clientY)}function g(D){I(D),p.set(D.clientX,D.clientY)}function Y(D){X.set(D.clientX,D.clientY)}function lt(D){c.set(D.clientX,D.clientY),d.subVectors(c,l).multiplyScalar(n.rotateSpeed);const Q=n.domElement;q(2*Math.PI*d.x/Q.clientHeight),U(2*Math.PI*d.y/Q.clientHeight),l.copy(c),n.update()}function ct(D){z.set(D.clientX,D.clientY),b.subVectors(z,p),b.y>0?E(A()):b.y<0&&J(A()),p.copy(z),n.update()}function pt(D){h.set(D.clientX,D.clientY),u.subVectors(h,X).multiplyScalar(n.panSpeed),Z(u.x,u.y),X.copy(h),n.update()}function xt(D){I(D),D.deltaY<0?J(A()):D.deltaY>0&&E(A()),n.update()}function Wt(D){let Q=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(0,n.keyPanSpeed),Q=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(0,-n.keyPanSpeed),Q=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(n.keyPanSpeed,0),Q=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(-n.keyPanSpeed,0),Q=!0;break}Q&&(D.preventDefault(),n.update())}function zt(){if(H.length===1)l.set(H[0].pageX,H[0].pageY);else{const D=.5*(H[0].pageX+H[1].pageX),Q=.5*(H[0].pageY+H[1].pageY);l.set(D,Q)}}function Ct(){if(H.length===1)X.set(H[0].pageX,H[0].pageY);else{const D=.5*(H[0].pageX+H[1].pageX),Q=.5*(H[0].pageY+H[1].pageY);X.set(D,Q)}}function ze(){const D=H[0].pageX-H[1].pageX,Q=H[0].pageY-H[1].pageY,ot=Math.sqrt(D*D+Q*Q);p.set(0,ot)}function St(){n.enableZoom&&ze(),n.enablePan&&Ct()}function R(){n.enableZoom&&ze(),n.enableRotate&&zt()}function Pe(D){if(H.length==1)c.set(D.pageX,D.pageY);else{const ot=C(D),at=.5*(D.pageX+ot.x),Pt=.5*(D.pageY+ot.y);c.set(at,Pt)}d.subVectors(c,l).multiplyScalar(n.rotateSpeed);const Q=n.domElement;q(2*Math.PI*d.x/Q.clientHeight),U(2*Math.PI*d.y/Q.clientHeight),l.copy(c)}function wt(D){if(H.length===1)h.set(D.pageX,D.pageY);else{const Q=C(D),ot=.5*(D.pageX+Q.x),at=.5*(D.pageY+Q.y);h.set(ot,at)}u.subVectors(h,X).multiplyScalar(n.panSpeed),Z(u.x,u.y),X.copy(h)}function Nt(D){const Q=C(D),ot=D.pageX-Q.x,at=D.pageY-Q.y,Pt=Math.sqrt(ot*ot+at*at);z.set(0,Pt),b.set(0,Math.pow(z.y/p.y,n.zoomSpeed)),E(b.y),p.copy(z)}function Tt(D){n.enableZoom&&Nt(D),n.enablePan&&wt(D)}function Bt(D){n.enableZoom&&Nt(D),n.enableRotate&&Pe(D)}function Zt(D){n.enabled!==!1&&(H.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",Ot),n.domElement.addEventListener("pointerup",gt)),ft(D),D.pointerType==="touch"?G(D):oe(D))}function Ot(D){n.enabled!==!1&&(D.pointerType==="touch"?nt(D):de(D))}function gt(D){Xt(D),H.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",Ot),n.domElement.removeEventListener("pointerup",gt)),n.dispatchEvent(LP),a=f.NONE}function oe(D){let Q;switch(D.button){case 0:Q=n.mouseButtons.LEFT;break;case 1:Q=n.mouseButtons.MIDDLE;break;case 2:Q=n.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case mf.DOLLY:if(n.enableZoom===!1)return;g(D),a=f.DOLLY;break;case mf.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;Y(D),a=f.PAN}else{if(n.enableRotate===!1)return;_(D),a=f.ROTATE}break;case mf.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;_(D),a=f.ROTATE}else{if(n.enablePan===!1)return;Y(D),a=f.PAN}break;default:a=f.NONE}a!==f.NONE&&n.dispatchEvent(si)}function de(D){switch(a){case f.ROTATE:if(n.enableRotate===!1)return;lt(D);break;case f.DOLLY:if(n.enableZoom===!1)return;ct(D);break;case f.PAN:if(n.enablePan===!1)return;pt(D);break}}function y(D){n.enabled===!1||n.enableZoom===!1||a!==f.NONE||(D.preventDefault(),n.dispatchEvent(si),xt(D),n.dispatchEvent(LP))}function T(D){n.enabled===!1||n.enablePan===!1||Wt(D)}function G(D){switch(rt(D),H.length){case 1:switch(n.touches.ONE){case Hf.ROTATE:if(n.enableRotate===!1)return;zt(),a=f.TOUCH_ROTATE;break;case Hf.PAN:if(n.enablePan===!1)return;Ct(),a=f.TOUCH_PAN;break;default:a=f.NONE}break;case 2:switch(n.touches.TWO){case Hf.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;St(),a=f.TOUCH_DOLLY_PAN;break;case Hf.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;R(),a=f.TOUCH_DOLLY_ROTATE;break;default:a=f.NONE}break;default:a=f.NONE}a!==f.NONE&&n.dispatchEvent(si)}function nt(D){switch(rt(D),a){case f.TOUCH_ROTATE:if(n.enableRotate===!1)return;Pe(D),n.update();break;case f.TOUCH_PAN:if(n.enablePan===!1)return;wt(D),n.update();break;case f.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Tt(D),n.update();break;case f.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Bt(D),n.update();break;default:a=f.NONE}}function tt(D){n.enabled!==!1&&D.preventDefault()}function ft(D){H.push(D)}function Xt(D){delete N[D.pointerId];for(let Q=0;Q<H.length;Q++)if(H[Q].pointerId==D.pointerId){H.splice(Q,1);return}}function rt(D){let Q=N[D.pointerId];Q===void 0&&(Q=new ht,N[D.pointerId]=Q),Q.set(D.pageX,D.pageY)}function C(D){const Q=D.pointerId===H[0].pointerId?H[1]:H[0];return N[Q.pointerId]}n.domElement.addEventListener("contextmenu",tt),n.domElement.addEventListener("pointerdown",Zt),n.domElement.addEventListener("pointercancel",gt),n.domElement.addEventListener("wheel",y,{passive:!1}),this.update()}}class p6{constructor(){ut(this,"core");ut(this,"doms");this.core=new hn,this.doms={loading:document.querySelector(".loading"),loading_complete:document.querySelector(".loading-complete"),preview_tooltip:document.querySelector(".preview-tooltip"),preview_tips:document.querySelector(".preview-tips"),boards_dialog:document.querySelector(".boards-info"),boards_container:document.querySelector(".boards-info .boards-container"),boards_content:document.querySelector(".boards-info .boards-container .content"),boards_title:document.querySelector(".boards-container .info .title"),boards_author:document.querySelector(".boards-container .info .author"),boards_describe:document.querySelector(".boards-container .info .describe"),boards_img:document.querySelector(".boards-container .img"),boards_rurl:document.querySelector(".boards-container .rurl"),boards_whatsapp:document.querySelector(".boards-container .whatsapp"),help_btn:document.querySelector(".help"),operating_intro:document.querySelector(".operating-intro")},document.body.addEventListener("click",this.handleClick.bind(this))}handleClick(t){if(t.target instanceof HTMLElement){const n=[{verify:()=>t.target.classList.contains("start"),handler:this.onClickEnterApp.bind(this)},{verify:()=>this._isBInA(["boards-info-close","boards-info"],t.target.classList.value.split(" ")),handler:this.hideBoardsBox.bind(this)},{verify:()=>t.target.classList.contains("help"),handler:this.showHelp.bind(this)},{verify:()=>this._isBInA(["operating-intro-close","operating-intro","operating-intro-img"],t.target.classList.value.split(" ")),handler:this.hideHelp.bind(this)}].find(f=>f.verify());n&&n.handler()}}onClickEnterApp(){this.doms.loading_complete.classList.remove("display-none"),this.doms.loading_complete.remove(),this.core.$emit(SP)}showHelp(){this.doms.operating_intro.classList.remove("display-none")}hideHelp(){this.doms.operating_intro.classList.add("display-none")}showBoardsBox(t,e,n,f){this.doms.boards_dialog.style.visibility!=="visible"&&(this.doms.boards_dialog.style.visibility="visible",this.doms.boards_container.classList.remove("hide"),this.doms.boards_title.innerText=t,this.doms.boards_author.innerText=e,this.doms.boards_describe.innerHTML=n,this.doms.boards_img.src=f,this.doms.boards_content.scrollTo({top:0,left:0,behavior:"smooth"}))}showBoardsBox2(t){if(this.doms.boards_dialog.style.visibility!=="visible"){switch(this.doms.boards_dialog.style.visibility="visible",this.doms.boards_container.classList.remove("hide"),this.doms.boards_title.innerText=t.Title,this.doms.boards_author.innerText=t.Author,this.doms.boards_describe.innerHTML=t.Content,this.doms.boards_img.src=t.ModelPath,t.IsRedirect){case 1:this.doms.boards_whatsapp.href="https://api.whatsapp.com/send?phone="+t.CSPhone+"&text=Hi,I am interested this product from your 3D website",this.doms.boards_whatsapp.classList.remove("hide");break;case 2:this.doms.boards_whatsapp.href="https://api.whatsapp.com/send?phone="+t.CSPhone+"&text=Hi,I am interested this product from your 3D website",this.doms.boards_whatsapp.classList.remove("hide"),this.doms.boards_rurl.href=t.Url,this.doms.boards_rurl.classList.remove("hide");break;case 3:this.doms.boards_rurl.href=t.Url,this.doms.boards_rurl.classList.remove("hide");break;default:this.doms.boards_whatsapp.classList.add("hide"),this.doms.boards_rurl.classList.add("hide");break}this.doms.boards_content.scrollTo({top:0,left:0,behavior:"smooth"})}}hideBoardsBox(){this.doms.boards_dialog.style.visibility="hidden",this.doms.boards_container.classList.add("hien"),this.doms.boards_title.textContent="",this.doms.boards_author.textContent="",this.doms.boards_describe.textContent="",this.doms.boards_img.src=""}showPreviewTooltip(t,e=!0){this.doms.preview_tooltip.classList.remove("hide"),e&&this.doms.preview_tips.classList.remove("hide"),this.doms.preview_tooltip.innerText!==t&&(this.doms.preview_tooltip.innerText=t)}hidePreviewTooltip(){this.doms.preview_tooltip.classList.add("hide"),this.doms.preview_tips.classList.add("hide")}updateLoadingProgress(t){const e=this.doms.loading.querySelector(".progress");e&&(e.textContent=t)}removeLoading(){this.doms.loading.remove()}showLoadingConfirm(){this.doms.loading_complete.classList.remove("display-none")}_isBInA(t,e){return e.some(n=>t.includes(n))}}let ii=null;class hn extends bh{constructor(){super();ut(this,"scene");ut(this,"renderer");ut(this,"camera");ut(this,"clock");ut(this,"orbit_controls");ut(this,"ui");ut(this,"control_manage");ut(this,"loader");ut(this,"world");if(ii)return ii;ii=this,this.scene=new ho,this.renderer=new Xo({antialias:!0}),this.camera=new Te,this.clock=new Ed,this.orbit_controls=new c6(this.camera,this.renderer.domElement),this._initScene(),this._initCamera(),this._initRenderer(),this._initResponsiveResize(),this.ui=new p6,this.control_manage=new o6,this.loader=new _h,this.world=new Xh}render(){this.renderer.setAnimationLoop(()=>{this.renderer.render(this.scene,this.camera);const e=Math.min(.05,this.clock.getDelta());this.world.update(e),this.orbit_controls.update()})}_initScene(){this.scene.background=new Dt(0)}_initCamera(){this.camera.fov=55,this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.near=.1,this.camera.far=1e3,this.camera.position.set(0,0,3),this.camera.updateProjectionMatrix()}_initRenderer(){var e;this.renderer.shadowMap.enabled=!0,this.renderer.outputColorSpace=Ht,this.renderer.toneMapping=MP,this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.domElement.style.position="absolute",this.renderer.domElement.style.zIndex="1",this.renderer.domElement.style.top="0px",(e=document.querySelector("#app"))==null||e.appendChild(this.renderer.domElement)}_initResponsiveResize(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio)})}}const u6=new hn;u6.render();