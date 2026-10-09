import{n as e,t}from"./react.DJY1zw8Z.js";var n=t(),r={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},a=1e3,o=1001,s=1002,c=1003,l=1004,u=1005,d=1006,f=1007,p=1008,m=1009,h=1010,g=1011,_=1012,v=1013,y=1014,b=1015,x=1016,S=1017,C=1018,w=1020,T=35902,E=35899,D=1021,O=1022,k=1023,A=1026,j=1027,M=1028,N=1029,P=1030,ee=1031,te=1033,F=33776,I=33777,ne=33778,re=33779,ie=35840,ae=35841,oe=35842,L=35843,R=36196,se=37492,ce=37496,le=37488,ue=37489,de=37490,fe=37491,pe=37808,me=37809,he=37810,ge=37811,_e=37812,ve=37813,ye=37814,be=37815,xe=37816,Se=37817,Ce=37818,we=37819,Te=37820,Ee=37821,De=36492,Oe=36494,ke=36495,z=36283,Ae=36284,je=36285,Me=36286,B=2300,Ne=2301,V=2302,H=2303,Pe=2400,Fe=2401,Ie=2402,Le=3200,Re=`srgb`,ze=`srgb-linear`,Be=`linear`,Ve=`srgb`,He=7680,Ue=35044,We=2e3;function Ge(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ke(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function qe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Je(){let e=qe(`canvas`);return e.style.display=`block`,e}var Ye={};function Xe(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Ze(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function U(...e){e=Ze(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function W(...e){e=Ze(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Qe(...e){let t=e.join(` `);t in Ye||(Ye[t]=!0,U(...e))}function $e(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var et={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},tt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},nt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),rt=1234567,it=Math.PI/180,at=180/Math.PI;function ot(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(nt[e&255]+nt[e>>8&255]+nt[e>>16&255]+nt[e>>24&255]+`-`+nt[t&255]+nt[t>>8&255]+`-`+nt[t>>16&15|64]+nt[t>>24&255]+`-`+nt[n&63|128]+nt[n>>8&255]+`-`+nt[n>>16&255]+nt[n>>24&255]+nt[r&255]+nt[r>>8&255]+nt[r>>16&255]+nt[r>>24&255]).toLowerCase()}function G(e,t,n){return Math.max(t,Math.min(n,e))}function st(e,t){return(e%t+t)%t}function ct(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function lt(e,t,n){return e===t?0:(n-e)/(t-e)}function ut(e,t,n){return(1-n)*e+n*t}function dt(e,t,n,r){return ut(e,t,1-Math.exp(-n*r))}function ft(e,t=1){return t-Math.abs(st(e,t*2)-t)}function pt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function mt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function ht(e,t){return e+Math.floor(Math.random()*(t-e+1))}function gt(e,t){return e+Math.random()*(t-e)}function _t(e){return e*(.5-Math.random())}function vt(e){e!==void 0&&(rt=e);let t=rt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yt(e){return e*it}function bt(e){return e*at}function xt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function St(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Ct(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function wt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:U(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Tt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Et(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Dt={DEG2RAD:it,RAD2DEG:at,generateUUID:ot,clamp:G,euclideanModulo:st,mapLinear:ct,inverseLerp:lt,lerp:ut,damp:dt,pingpong:ft,smoothstep:pt,smootherstep:mt,randInt:ht,randFloat:gt,randFloatSpread:_t,seededRandom:vt,degToRad:yt,radToDeg:bt,isPowerOfTwo:xt,ceilPowerOfTwo:St,floorPowerOfTwo:Ct,setQuaternionFromProperEuler:wt,normalize:Et,denormalize:Tt},K=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=G(this.x,e.x,t.x),this.y=G(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=G(this.x,e,t),this.y=G(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(G(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(G(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ot=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:U(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(G(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(At.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(At.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=G(this.x,e.x,t.x),this.y=G(this.y,e.y,t.y),this.z=G(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=G(this.x,e,t),this.y=G(this.y,e,t),this.z=G(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(G(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kt.copy(this).projectOnVector(e),this.sub(kt)}reflect(e){return this.sub(kt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(G(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},kt=new q,At=new Ot,J=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Qe(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(jt.makeScale(e,t)),this}rotate(e){return Qe(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(jt.makeRotation(-e)),this}translate(e,t){return Qe(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(jt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jt=new J,Mt=new J().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nt=new J().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pt(){let e={enabled:!0,workingColorSpace:ze,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Ft(e.r),e.g=Ft(e.g),e.b=Ft(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=It(e.r),e.g=It(e.g),e.b=It(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Be:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Qe(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Qe(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[ze]:{primaries:t,whitePoint:r,transfer:Be,toXYZ:Mt,fromXYZ:Nt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:r,transfer:Ve,toXYZ:Mt,fromXYZ:Nt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),e}var Y=Pt();function Ft(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function It(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Lt,Rt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Lt===void 0&&(Lt=qe(`canvas`)),Lt.width=e.width,Lt.height=e.height;let t=Lt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Lt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=qe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Ft(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Ft(t[e]/255)*255):t[e]=Ft(t[e]);return{data:t,width:e.width,height:e.height}}return U(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},zt=0,Bt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zt++}),this.uuid=ot(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Vt(r[t].image)):e.push(Vt(r[t]))}else e=Vt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Vt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Rt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(U(`Texture: Unable to serialize Texture.`),{})}var Ht=0,Ut=new q,Wt=class e extends tt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=o,i=o,a=d,s=p,c=k,l=m,u=e.DEFAULT_ANISOTROPY,f=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ht++}),this.uuid=ot(),this.name=``,this.source=new Bt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=s,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new J,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ut).x}get height(){return this.source.getSize(Ut).y}get depth(){return this.source.getSize(Ut).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){U(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){U(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case a:e.x-=Math.floor(e.x);break;case o:e.x=e.x<0?0:1;break;case s:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case a:e.y-=Math.floor(e.y);break;case o:e.y=e.y<0?0:1;break;case s:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null,Wt.DEFAULT_MAPPING=300,Wt.DEFAULT_ANISOTROPY=1;var Gt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=G(this.x,e.x,t.x),this.y=G(this.y,e.y,t.y),this.z=G(this.z,e.z,t.z),this.w=G(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=G(this.x,e,t),this.y=G(this.y,e,t),this.z=G(this.z,e,t),this.w=G(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(G(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kt=class extends tt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:d,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t),this.textures=[];let r=new Wt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:d,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Bt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},qt=class extends Kt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Jt=class extends Wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=c,this.minFilter=c,this.wrapR=o,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Yt=class extends Wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=c,this.minFilter=c,this.wrapR=o,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Xt=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Zt.setFromMatrixColumn(e,0).length(),i=1/Zt.setFromMatrixColumn(e,1).length(),a=1/Zt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($t,e,en)}lookAt(e,t,n){let r=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),tn.crossVectors(n,rn),tn.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),tn.crossVectors(n,rn)),tn.normalize(),nn.crossVectors(rn,tn),r[0]=tn.x,r[4]=nn.x,r[8]=rn.x,r[1]=tn.y,r[5]=nn.y,r[9]=rn.y,r[2]=tn.z,r[6]=nn.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],ee=r[11],te=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*ee,i[12]=a*w+o*O+s*M+c*te,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*ee,i[13]=l*w+u*O+d*M+f*te,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*ee,i[14]=p*w+m*O+h*M+g*te,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*ee,i[15]=_*w+v*O+y*M+b*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Zt.set(r[0],r[1],r[2]).length(),o=Zt.set(r[4],r[5],r[6]).length(),s=Zt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Qt.copy(this);let c=1/a,l=1/o,u=1/s;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=l,Qt.elements[5]*=l,Qt.elements[6]*=l,Qt.elements[8]*=u,Qt.elements[9]*=u,Qt.elements[10]*=u,t.setFromRotationMatrix(Qt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=We,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=We,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zt=new q,Qt=new Xt,$t=new q(0,0,0),en=new q(1,1,1),tn=new q,nn=new q,rn=new q,an=new Xt,on=new Ot,sn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(G(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-G(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(G(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-G(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(G(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-G(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:U(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return an.makeRotationFromQuaternion(e),this.setFromRotationMatrix(an,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return on.setFromEuler(this),this.setFromQuaternion(on,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER=`XYZ`;var cn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},ln=0,un=new q,dn=new Ot,fn=new Xt,pn=new q,mn=new q,hn=new q,gn=new Ot,_n=new q(1,0,0),vn=new q(0,1,0),yn=new q(0,0,1),bn={type:`added`},xn={type:`removed`},Sn={type:`childadded`,child:null},Cn={type:`childremoved`,child:null},wn=class e extends tt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ln++}),this.uuid=ot(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new q,n=new sn,r=new Ot,i=new q(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xt},normalMatrix:{value:new J}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dn.setFromAxisAngle(e,t),this.quaternion.multiply(dn),this}rotateOnWorldAxis(e,t){return dn.setFromAxisAngle(e,t),this.quaternion.premultiply(dn),this}rotateX(e){return this.rotateOnAxis(_n,e)}rotateY(e){return this.rotateOnAxis(vn,e)}rotateZ(e){return this.rotateOnAxis(yn,e)}translateOnAxis(e,t){return un.copy(e).applyQuaternion(this.quaternion),this.position.add(un.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_n,e)}translateY(e){return this.translateOnAxis(vn,e)}translateZ(e){return this.translateOnAxis(yn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pn.copy(e):pn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),mn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(mn,pn,this.up):fn.lookAt(pn,mn,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),dn.setFromRotationMatrix(fn),this.quaternion.premultiply(dn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(W(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bn),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null):W(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xn),Cn.child=e,this.dispatchEvent(Cn),Cn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bn),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mn,e,hn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mn,gn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};wn.DEFAULT_UP=new q(0,1,0),wn.DEFAULT_MATRIX_AUTO_UPDATE=!0,wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=class extends wn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},En={type:`move`},Dn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(En)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},On={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},An={h:0,s:0,l:0};function jn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var X=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Re){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Y.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Y.workingColorSpace){return this.r=e,this.g=t,this.b=n,Y.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Y.workingColorSpace){if(e=st(e,1),t=G(t,0,1),n=G(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=jn(i,r,e+1/3),this.g=jn(i,r,e),this.b=jn(i,r,e-1/3)}return Y.colorSpaceToWorking(this,r),this}setStyle(e,t=Re){function n(t){t!==void 0&&parseFloat(t)<1&&U(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:U(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);U(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Re){let n=On[e.toLowerCase()];return n===void 0?U(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ft(e.r),this.g=Ft(e.g),this.b=Ft(e.b),this}copyLinearToSRGB(e){return this.r=It(e.r),this.g=It(e.g),this.b=It(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Re){return Y.workingToColorSpace(Mn.copy(this),e),Math.round(G(Mn.r*255,0,255))*65536+Math.round(G(Mn.g*255,0,255))*256+Math.round(G(Mn.b*255,0,255))}getHexString(e=Re){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Y.workingColorSpace){Y.workingToColorSpace(Mn.copy(this),t);let n=Mn.r,r=Mn.g,i=Mn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Y.workingColorSpace){return Y.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Re){Y.workingToColorSpace(Mn.copy(this),e);let t=Mn.r,n=Mn.g,r=Mn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(An);let n=ut(kn.h,An.h,t),r=ut(kn.s,An.s,t),i=ut(kn.l,An.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new X;X.NAMES=On;var Nn=class extends wn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Pn=new q,Fn=new q,In=new q,Ln=new q,Rn=new q,zn=new q,Bn=new q,Vn=new q,Hn=new q,Un=new q,Wn=new Gt,Gn=new Gt,Kn=new Gt,qn=class e{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Pn.subVectors(e,t),r.cross(Pn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Pn.subVectors(r,t),Fn.subVectors(n,t),In.subVectors(e,t);let a=Pn.dot(Pn),o=Pn.dot(Fn),s=Pn.dot(In),c=Fn.dot(Fn),l=Fn.dot(In),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ln)!==null&&Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Ln)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Ln.x),s.addScaledVector(a,Ln.y),s.addScaledVector(o,Ln.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Wn.setScalar(0),Gn.setScalar(0),Kn.setScalar(0),Wn.fromBufferAttribute(e,t),Gn.fromBufferAttribute(e,n),Kn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Wn,i.x),a.addScaledVector(Gn,i.y),a.addScaledVector(Kn,i.z),a}static isFrontFacing(e,t,n,r){return Pn.subVectors(n,t),Fn.subVectors(e,t),Pn.cross(Fn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),Pn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Rn.subVectors(r,n),zn.subVectors(i,n),Vn.subVectors(e,n);let s=Rn.dot(Vn),c=zn.dot(Vn);if(s<=0&&c<=0)return t.copy(n);Hn.subVectors(e,r);let l=Rn.dot(Hn),u=zn.dot(Hn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Rn,a);Un.subVectors(e,i);let f=Rn.dot(Un),p=zn.dot(Un);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(zn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Bn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Bn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Rn,a).addScaledVector(zn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jn=class{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Xn):Xn.fromBufferAttribute(r,t),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Zn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Zn.copy(e.boundingBox)),Zn.applyMatrix4(e.matrixWorld),this.union(Zn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),ar.subVectors(this.max,ir),Qn.subVectors(e.a,ir),$n.subVectors(e.b,ir),er.subVectors(e.c,ir),tr.subVectors($n,Qn),nr.subVectors(er,$n),rr.subVectors(Qn,er);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-rr.z,rr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,rr.z,0,-rr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-rr.y,rr.x,0];return!cr(t,Qn,$n,er,ar)||(t=[1,0,0,0,1,0,0,0,1],!cr(t,Qn,$n,er,ar))?!1:(or.crossVectors(tr,nr),t=[or.x,or.y,or.z],cr(t,Qn,$n,er,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Yn=[new q,new q,new q,new q,new q,new q,new q,new q],Xn=new q,Zn=new Jn,Qn=new q,$n=new q,er=new q,tr=new q,nr=new q,rr=new q,ir=new q,ar=new q,or=new q,sr=new q;function cr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){sr.fromArray(e,a);let o=i.x*Math.abs(sr.x)+i.y*Math.abs(sr.y)+i.z*Math.abs(sr.z),s=t.dot(sr),c=n.dot(sr),l=r.dot(sr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var lr=new q,ur=new K,dr=0,fr=class extends tt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ue,this.updateRanges=[],this.gpuType=b,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXY(t,ur.x,ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix4(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyNormalMatrix(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.transformDirection(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array),i=Et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},pr=class extends fr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},mr=class extends fr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},hr=class extends fr{constructor(e,t,n){super(new Float32Array(e),t,n)}},gr=new Jn,_r=new q,vr=new q,yr=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?gr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);let t=_r.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(_r,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(vr)),this.expandByPoint(_r.copy(e.center).sub(vr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},br=0,xr=new Xt,Sr=new wn,Cr=new q,wr=new Jn,Tr=new Jn,Er=new q,Dr=class e extends tt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:br++}),this.uuid=ot(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ge(e)?mr:pr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new J().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xr.makeRotationFromQuaternion(e),this.applyMatrix4(xr),this}rotateX(e){return xr.makeRotationX(e),this.applyMatrix4(xr),this}rotateY(e){return xr.makeRotationY(e),this.applyMatrix4(xr),this}rotateZ(e){return xr.makeRotationZ(e),this.applyMatrix4(xr),this}translate(e,t,n){return xr.makeTranslation(e,t,n),this.applyMatrix4(xr),this}scale(e,t,n){return xr.makeScale(e,t,n),this.applyMatrix4(xr),this}lookAt(e){return Sr.lookAt(e),Sr.updateMatrix(),this.applyMatrix4(Sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new hr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&U(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){W(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];wr.setFromBufferAttribute(n),this.morphTargetsRelative?(Er.addVectors(this.boundingBox.min,wr.min),this.boundingBox.expandByPoint(Er),Er.addVectors(this.boundingBox.max,wr.max),this.boundingBox.expandByPoint(Er)):(this.boundingBox.expandByPoint(wr.min),this.boundingBox.expandByPoint(wr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&W(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){W(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new q,1/0);return}if(e){let n=this.boundingSphere.center;if(wr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Tr.setFromBufferAttribute(n),this.morphTargetsRelative?(Er.addVectors(wr.min,Tr.min),wr.expandByPoint(Er),Er.addVectors(wr.max,Tr.max),wr.expandByPoint(Er)):(wr.expandByPoint(Tr.min),wr.expandByPoint(Tr.max))}wr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Er.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Er));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Er.fromBufferAttribute(a,t),o&&(Cr.fromBufferAttribute(e,t),Er.add(Cr)),r=Math.max(r,n.distanceToSquared(Er))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&W(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){W(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new fr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new q,s[e]=new q;let c=new q,l=new q,u=new q,d=new K,f=new K,p=new K,m=new q,h=new q;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new q,y=new q,b=new q,x=new q;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new fr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new q,i=new q,a=new q,o=new q,s=new q,c=new q,l=new q,u=new q;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Er.fromBufferAttribute(e,t),Er.normalize(),e.setXYZ(t,Er.x,Er.y,Er.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new fr(a,r,i)}if(this.index===null)return U(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Or=new q,kr=new q,Ar=new J,jr=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Or.subVectors(n,t).cross(kr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Or),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ar.getNormalMatrix(e),r=this.coplanarPoint(Or).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Mr=0,Nr=class extends tt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mr++}),this.uuid=ot(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new X(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=He,this.stencilZFail=He,this.stencilZPass=He,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){U(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){U(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new X().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new jr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new K().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new K().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Pr=new q,Fr=new q,Ir=new q,Lr=new q,Rr=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pr.copy(this.origin).addScaledVector(this.direction,t),Pr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Fr.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(Fr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Ir),o=Lr.dot(this.direction),s=-Lr.dot(Ir),c=Lr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Fr).addScaledVector(Ir,d),f}intersectSphere(e,t){if(e.radius<0)return null;Pr.subVectors(e.center,this.origin);let n=Pr.dot(this.direction),r=Pr.dot(Pr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Pr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,ee=C/w,te=1/w,F=T-P*D,I=E-ee*D,ne=O-P*A,re=k-ee*A,ie=j-P*N,ae=M-ee*N,oe=ie*re-ae*ne,L=F*ae-I*ie,R=ne*I-re*F;if(r){if(oe<0||L<0||R<0)return null}else if((oe<0||L<0||R<0)&&(oe>0||L>0||R>0))return null;let se=oe+L+R;if(se===0)return null;let ce=te*(oe*D+L*A+R*N);return(se>0?ce<0:ce>0)?null:this.at(ce/se,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zr=class extends Nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new X(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Br=new Xt,Vr=new Rr,Hr=new yr,Ur=new q,Wr=new q,Gr=new q,Kr=new q,qr=new q,Jr=new q,Yr=new q,Xr=new q,Zr=class extends wn{constructor(e=new Dr,t=new zr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Jr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(qr.fromBufferAttribute(s,e),a?Jr.addScaledVector(qr,r):Jr.addScaledVector(qr.sub(t),r))}t.add(Jr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(i),Vr.copy(e.ray).recast(e.near),!(Hr.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(Hr,Ur)===null||Vr.origin.distanceToSquared(Ur)>(e.far-e.near)**2))&&(Br.copy(i).invert(),Vr.copy(e.ray).applyMatrix4(Br),(n.boundingBox===null||Vr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=$r(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=$r(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=$r(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=$r(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Qr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Xr.copy(s),Xr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Xr);return l<n.near||l>n.far?null:{distance:l,point:Xr.clone(),object:e}}function $r(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Wr),e.getVertexPosition(c,Gr),e.getVertexPosition(l,Kr);let u=Qr(e,t,n,r,Wr,Gr,Kr,Yr);if(u){let e=new q;qn.getBarycoord(Yr,Wr,Gr,Kr,e),i&&(u.uv=qn.getInterpolatedAttribute(i,s,c,l,e,new K)),a&&(u.uv1=qn.getInterpolatedAttribute(a,s,c,l,e,new K)),o&&(u.normal=qn.getInterpolatedAttribute(o,s,c,l,e,new q),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new q,materialIndex:0};qn.getNormal(Wr,Gr,Kr,t.normal),u.face=t,u.barycoord=e}return u}var ei=class extends Wt{constructor(e=null,t=1,n=1,r,i,a,o,s,l=c,u=c,d,f){super(null,a,o,s,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ti=new yr,ni=new K(.5,.5),ri=new q,ii=class{constructor(e=new jr,t=new jr,n=new jr,r=new jr,i=new jr,a=new jr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=We,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(e){return ti.center.set(0,0,0),ti.radius=.7071067811865476+ni.distanceTo(e.center),ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ri.x=r.normal.x>0?e.max.x:e.min.x,ri.y=r.normal.y>0?e.max.y:e.min.y,ri.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ri)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ai=class extends Nr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new X(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},oi=new Xt,si=new Rr,ci=new yr,li=new q,ui=class extends wn{constructor(e=new Dr,t=new ai){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ci.copy(n.boundingSphere),ci.applyMatrix4(r),ci.radius+=i,e.ray.intersectsSphere(ci)===!1)return;oi.copy(r).invert(),si.copy(e.ray).applyMatrix4(oi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);li.fromBufferAttribute(l,n),di(li,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)li.fromBufferAttribute(l,a),di(li,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function di(e,t,n,r,i,a,o){let s=si.distanceSqToPoint(e);if(s<n){let n=new q;si.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var fi=class extends Wt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},pi=class extends Wt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},mi=class extends Wt{constructor(e,t,n=y,r,i,a,o=c,s=c,l,u=A,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,a,o,s,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},hi=class extends mi{constructor(e,t=y,n=301,r,i,a=c,o=c,s,l=A){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,a,o,s,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},gi=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},_i=class e extends Dr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new hr(c,3)),this.setAttribute(`normal`,new hr(l,3)),this.setAttribute(`uv`,new hr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new q;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},vi=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){U(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new K:new q);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new q,r=[],i=[],a=[],o=new q,s=new Xt;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new q)}i[0]=new q,a[0]=new q;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(G(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(G(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},yi=class extends vi{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new K){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},bi=class extends yi{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function xi(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Si=new q,Ci=new q,wi=new xi,Ti=new xi,Ei=new xi,Di=class extends vi{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new q){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Ci.subVectors(r[0],r[1]).add(r[0]),c=Ci);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Si.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Si),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),wi.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Ti.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Ei.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(wi.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Ti.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Ei.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(wi.calc(s),Ti.calc(s),Ei.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new q().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Oi(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function ki(e,t){let n=1-e;return n*n*t}function Ai(e,t){return 2*(1-e)*e*t}function ji(e,t){return e*e*t}function Mi(e,t,n,r){return ki(e,t)+Ai(e,n)+ji(e,r)}function Ni(e,t){let n=1-e;return n*n*n*t}function Pi(e,t){let n=1-e;return 3*n*n*e*t}function Fi(e,t){return 3*(1-e)*e*e*t}function Ii(e,t){return e*e*e*t}function Li(e,t,n,r,i){return Ni(e,t)+Pi(e,n)+Fi(e,r)+Ii(e,i)}var Ri=class extends vi{constructor(e=new K,t=new K,n=new K,r=new K){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Li(e,r.x,i.x,a.x,o.x),Li(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},zi=class extends vi{constructor(e=new q,t=new q,n=new q,r=new q){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new q){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Li(e,r.x,i.x,a.x,o.x),Li(e,r.y,i.y,a.y,o.y),Li(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Bi=class extends vi{constructor(e=new K,t=new K){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new K){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vi=class extends vi{constructor(e=new q,t=new q){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hi=class extends vi{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Mi(e,r.x,i.x,a.x),Mi(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ui=class extends vi{constructor(e=new q,t=new q,n=new q){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new q){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Mi(e,r.x,i.x,a.x),Mi(e,r.y,i.y,a.y),Mi(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wi=Object.freeze({__proto__:null,ArcCurve:bi,CatmullRomCurve3:Di,CubicBezierCurve:Ri,CubicBezierCurve3:zi,EllipseCurve:yi,LineCurve:Bi,LineCurve3:Vi,QuadraticBezierCurve:Hi,QuadraticBezierCurve3:Ui,SplineCurve:class extends vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new K){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Oi(o,s.x,c.x,l.x,u.x),Oi(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new K().fromArray(n))}return this}}}),Gi=class e extends Dr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new hr(p,3)),this.setAttribute(`normal`,new hr(m,3)),this.setAttribute(`uv`,new hr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ki=class e extends Dr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new q,d=new q,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new hr(p,3)),this.setAttribute(`normal`,new hr(m,3)),this.setAttribute(`uv`,new hr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},qi=class e extends Dr{constructor(e=new Ui(new q(-1,-1,0),new q(-1,1,0),new q(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new q,s=new q,c=new K,l=new q,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new hr(u,3)),this.setAttribute(`normal`,new hr(d,3)),this.setAttribute(`uv`,new hr(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new Wi[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Ji(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Xi(i))i.isRenderTargetTexture?(U(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Xi(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Yi(e){let t={};for(let n=0;n<e.length;n++){let r=Ji(e[n]);for(let e in r)t[e]=r[e]}return t}function Xi(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Zi(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Qi(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Y.workingColorSpace}var $i={clone:Ji,merge:Yi},ea=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ta=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,na=class extends Nr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ea,this.fragmentShader=ta,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=Zi(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new X().setHex(r.value);break;case`v2`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Gt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new J().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Xt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ra=class extends na{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},ia=class extends Nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Le,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},aa=class extends Nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function oa(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function sa(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var ca=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},la=class extends ca{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pe,endingEnd:Pe}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fe:i=e,o=2*t-n;break;case Ie:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Fe:a=e,s=2*n-t;break;case Ie:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},ua=class extends ca{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},da=class extends ca{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},fa=class extends ca{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ha(n,t,g,y,r);i[p]=pa(x,o,_,b,m)}return i}};function pa(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function ma(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ha(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=pa(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=ma(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var ga=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=oa(t,this.TimeBufferType),this.values=oa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:oa(e.times,Array),values:oa(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),sa(e.settings)&&(n.settings={inTangents:oa(e.settings.inTangents,Array),outTangents:oa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new la(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new fa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case B:t=this.InterpolantFactoryMethodDiscrete;break;case Ne:t=this.InterpolantFactoryMethodLinear;break;case V:t=this.InterpolantFactoryMethodSmooth;break;case H:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return U(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return B;case this.InterpolantFactoryMethodLinear:return Ne;case this.InterpolantFactoryMethodSmooth:return V;case this.InterpolantFactoryMethodBezier:return H}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;sa(this.settings)&&(_a(this.settings.inTangents,e),_a(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(W(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(W(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){W(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){W(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ke(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){W(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===V,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,sa(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function _a(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}ga.prototype.ValueTypeName=``,ga.prototype.TimeBufferType=Float32Array,ga.prototype.ValueBufferType=Float32Array,ga.prototype.DefaultInterpolation=Ne;var va=class extends ga{constructor(e,t,n){super(e,t,n)}};va.prototype.ValueTypeName=`bool`,va.prototype.ValueBufferType=Array,va.prototype.DefaultInterpolation=B,va.prototype.InterpolantFactoryMethodLinear=void 0,va.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends ga{constructor(e,t,n,r){super(e,t,n,r)}};ya.prototype.ValueTypeName=`color`;var ba=class extends ga{constructor(e,t,n,r){super(e,t,n,r)}};ba.prototype.ValueTypeName=`number`;var xa=class extends ca{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Ot.slerpFlat(i,0,a,c-o,a,c,s);return i}},Sa=class extends ga{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new xa(this.times,this.values,this.getValueSize(),e)}};Sa.prototype.ValueTypeName=`quaternion`,Sa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ca=class extends ga{constructor(e,t,n){super(e,t,n)}};Ca.prototype.ValueTypeName=`string`,Ca.prototype.ValueBufferType=Array,Ca.prototype.DefaultInterpolation=B,Ca.prototype.InterpolantFactoryMethodLinear=void 0,Ca.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends ga{constructor(e,t,n,r){super(e,t,n,r)}};wa.prototype.ValueTypeName=`vector`;var Ta=new q,Ea=new Ot,Da=new q,Oa=class extends wn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=We,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ta,Ea,Da),Da.x===1&&Da.y===1&&Da.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ta,Ea,Da.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ta,Ea,Da),Da.x===1&&Da.y===1&&Da.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ta,Ea,Da.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ka=new q,Aa=new K,ja=new K,Ma=class extends Oa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=at*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(it*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return at*2*Math.atan(Math.tan(it*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ka.x,ka.y).multiplyScalar(-e/ka.z),ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ka.x,ka.y).multiplyScalar(-e/ka.z)}getViewSize(e,t){return this.getViewBounds(e,Aa,ja),t.subVectors(ja,Aa)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(it*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Na=class extends Oa{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Pa=-90,Fa=1,Ia=class extends wn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ma(Pa,Fa,e,t);r.layers=this.layers,this.add(r);let i=new Ma(Pa,Fa,e,t);i.layers=this.layers,this.add(i);let a=new Ma(Pa,Fa,e,t);a.layers=this.layers,this.add(a);let o=new Ma(Pa,Fa,e,t);o.layers=this.layers,this.add(o);let s=new Ma(Pa,Fa,e,t);s.layers=this.layers,this.add(s);let c=new Ma(Pa,Fa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},La=class extends Ma{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ra=`\\[\\]\\.:\\/`,za=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ba=`[^\\[\\]\\.:\\/]`,Va=`[^`+Ra.replace(`\\.`,``)+`]`,Ha=`((?:WC+[\\/:])*)`.replace(`WC`,Ba),Ua=`(WCOD+)?`.replace(`WCOD`,Va),Wa=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ba),Ga=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ba),Ka=RegExp(`^`+Ha+Ua+Wa+Ga+`$`),qa=[`material`,`materials`,`bones`,`map`],Ja=class{constructor(e,t,n){let r=n||Ya.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ya=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(za,``)}static parseTrackName(e){let t=Ka.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);qa.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){U(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){W(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){W(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){W(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){W(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){W(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){W(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){W(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;W(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ya.Composite=Ja,Ya.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ya.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ya.prototype.GetterByBindingType=[Ya.prototype._getValue_direct,Ya.prototype._getValue_array,Ya.prototype._getValue_arrayElement,Ya.prototype._getValue_toArray],Ya.prototype.SetterByBindingTypeAndVersioning=[[Ya.prototype._setValue_direct,Ya.prototype._setValue_direct_setNeedsUpdate,Ya.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ya.prototype._setValue_array,Ya.prototype._setValue_array_setNeedsUpdate,Ya.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ya.prototype._setValue_arrayElement,Ya.prototype._setValue_arrayElement_setNeedsUpdate,Ya.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ya.prototype._setValue_fromArray,Ya.prototype._setValue_fromArray_setNeedsUpdate,Ya.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xa=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=G(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(G(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var Za=class extends tt{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Qa(e,t,n,r){let i=$a(r);switch(n){case D:return e*t;case M:return e*t/i.components*i.byteLength;case N:return e*t/i.components*i.byteLength;case P:return e*t*2/i.components*i.byteLength;case ee:return e*t*2/i.components*i.byteLength;case O:return e*t*3/i.components*i.byteLength;case k:return e*t*4/i.components*i.byteLength;case te:return e*t*4/i.components*i.byteLength;case F:case I:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ne:case re:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ae:case L:return Math.max(e,16)*Math.max(t,8)/4;case ie:case oe:return Math.max(e,8)*Math.max(t,8)/2;case R:case se:case le:case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ce:case de:case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Te:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ee:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case De:case Oe:case ke:return Math.ceil(e/4)*Math.ceil(t/4)*16;case z:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*8;case je:case Me:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function $a(e){switch(e){case m:case h:return{byteLength:1,components:1};case _:case g:case x:return{byteLength:2,components:1};case S:case C:return{byteLength:2,components:4};case y:case v:case b:return{byteLength:4,components:1};case T:case E:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?U(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function eo(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function to(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Z={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,points_vert:`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`},Q={common:{diffuse:{value:new X(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new J}},envmap:{envMap:{value:null},envMapRotation:{value:new J},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new J}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new J}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new J},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new J},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new J},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new J}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new J}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new J}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new X(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new X(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0},uvTransform:{value:new J}},sprite:{diffuse:{value:new X(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}}},no={basic:{uniforms:Yi([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:Z.meshbasic_vert,fragmentShader:Z.meshbasic_frag},lambert:{uniforms:Yi([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new X(0)},envMapIntensity:{value:1}}]),vertexShader:Z.meshlambert_vert,fragmentShader:Z.meshlambert_frag},phong:{uniforms:Yi([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new X(0)},specular:{value:new X(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Z.meshphong_vert,fragmentShader:Z.meshphong_frag},standard:{uniforms:Yi([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new X(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag},toon:{uniforms:Yi([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new X(0)}}]),vertexShader:Z.meshtoon_vert,fragmentShader:Z.meshtoon_frag},matcap:{uniforms:Yi([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:Z.meshmatcap_vert,fragmentShader:Z.meshmatcap_frag},points:{uniforms:Yi([Q.points,Q.fog]),vertexShader:Z.points_vert,fragmentShader:Z.points_frag},dashed:{uniforms:Yi([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Z.linedashed_vert,fragmentShader:Z.linedashed_frag},depth:{uniforms:Yi([Q.common,Q.displacementmap]),vertexShader:Z.depth_vert,fragmentShader:Z.depth_frag},normal:{uniforms:Yi([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:Z.meshnormal_vert,fragmentShader:Z.meshnormal_frag},sprite:{uniforms:Yi([Q.sprite,Q.fog]),vertexShader:Z.sprite_vert,fragmentShader:Z.sprite_frag},background:{uniforms:{uvTransform:{value:new J},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Z.background_vert,fragmentShader:Z.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new J}},vertexShader:Z.backgroundCube_vert,fragmentShader:Z.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Z.cube_vert,fragmentShader:Z.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Z.equirect_vert,fragmentShader:Z.equirect_frag},distance:{uniforms:Yi([Q.common,Q.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Z.distance_vert,fragmentShader:Z.distance_frag},shadow:{uniforms:Yi([Q.lights,Q.fog,{color:{value:new X(0)},opacity:{value:1}}]),vertexShader:Z.shadow_vert,fragmentShader:Z.shadow_frag}};no.physical={uniforms:Yi([no.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new J},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new J},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new J},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new J},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new J},sheen:{value:0},sheenColor:{value:new X(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new J},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new J},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new J},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new J},attenuationDistance:{value:0},attenuationColor:{value:new X(0)},specularColor:{value:new X(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new J},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new J},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new J}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag};var ro={r:0,b:0,g:0},io=new Xt,ao=new J;ao.set(-1,0,0,0,1,0,0,0,1);function oo(e,t,n,r,i,a){let o=new X(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Zr(new _i(1,1,1),new na({name:`BackgroundCubeMaterial`,uniforms:Ji(no.backgroundCube.uniforms),vertexShader:no.backgroundCube.vertexShader,fragmentShader:no.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(io.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ao),l.material.toneMapped=Y.getTransfer(i.colorSpace)!==Ve,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Zr(new Gi(2,2),new na({name:`BackgroundMaterial`,uniforms:Ji(no.background.uniforms),vertexShader:no.background.vertexShader,fragmentShader:no.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Y.getTransfer(i.colorSpace)!==Ve,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(ro,Qi(e)),n.buffers.color.setClear(ro.r,ro.g,ro.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function so(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function co(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function lo(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(U(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&U(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function uo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new jr,s=new J,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var fo=4,po=6,mo=20,ho=256,go=new Na,_o=new X,vo=null,yo=0,bo=0,xo=!1,So=new q,Co=new q,wo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=So}=i;vo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ao(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vo,yo,bo),this._renderer.xr.enabled=xo,e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:d,minFilter:d,generateMipmaps:!1,type:x,format:k,colorSpace:ze,depthBuffer:!1},r=Eo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eo(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=To(r)),this._blurMaterial=ko(r,e,t),this._ggxMaterial=Oo(r,e,t)}return r}_compileMaterial(e){let t=new Zr(new Dr,e);this._renderer.compile(t,go)}_sceneToCubeUV(e,t,n,r,i){let a=new Ma(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(_o),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zr(new _i,new zr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(_o),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Do(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ao());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Do(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,go)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-fo?n-d+fo:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Do(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,go),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Do(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,go)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Do(t,3*l*(r>this._lodMax-fo?r-this._lodMax+fo:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,go)}};function To(e){let t=[],n=[],r=e,i=e-fo+1+po;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Co.set(1,r,n):e===1?Co.set(-n,1,-r):e===2?Co.set(-n,r,1):e===3?Co.set(-1,r,-n):e===4?Co.set(-n,-1,r):Co.set(n,r,-1),Co.toArray(l,(e*6+t)*3)}}let u=new Dr;u.setAttribute(`position`,new fr(c,3)),u.setAttribute(`outputDirection`,new fr(l,3)),n.push(new Zr(u,null)),r>fo&&r--}return{lodMeshes:n,sizeLods:t}}function Eo(e,t,n){let r=new qt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Do(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Oo(e,t,n){return new na({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:ho,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ko(e,t,n){return new na({name:`SphericalGaussianBlur`,defines:{SAMPLES:mo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Mo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ao(){return new na({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function jo(){return new na({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Mo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var No=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new fi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new _i(5,5,5),i=new na({name:`CubemapFromEquirect`,uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Zr(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=d),new Ia(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Po(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new No(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new wo(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new wo(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Fo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Qe(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Io(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?mr:pr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Lo(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ro(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:W(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function zo(e,t,n){let r=new WeakMap,i=new Gt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Jt(h,p,m,u);g.type=b,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new K(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Bo(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Vo={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Ho(e,t,n,r,i,a){let o=new qt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Dr;l.setAttribute(`position`,new hr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new hr([0,2,0,0,2,0],2));let u=new ra({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Zr(l,u),f=new Na(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new qt(t,n,{type:x,depthBuffer:!1,stencilBuffer:!1}),c=new qt(t,n,{type:x,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Y.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Vo[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Uo=new Wt,Wo=new mi(1,1),Go=new Jt,Ko=new Yt,qo=new fi,Jo=[],Yo=[],Xo=new Float32Array(16),Zo=new Float32Array(9),Qo=new Float32Array(4);function $o(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Jo[i];if(a===void 0&&(a=new Float32Array(i),Jo[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function es(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ts(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function ns(e,t){let n=Yo[t];n===void 0&&(n=new Int32Array(t),Yo[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function rs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function is(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(es(n,t))return;e.uniform2fv(this.addr,t),ts(n,t)}}function as(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(es(n,t))return;e.uniform3fv(this.addr,t),ts(n,t)}}function os(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(es(n,t))return;e.uniform4fv(this.addr,t),ts(n,t)}}function ss(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(es(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ts(n,t)}else{if(es(n,r))return;Qo.set(r),e.uniformMatrix2fv(this.addr,!1,Qo),ts(n,r)}}function cs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(es(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ts(n,t)}else{if(es(n,r))return;Zo.set(r),e.uniformMatrix3fv(this.addr,!1,Zo),ts(n,r)}}function ls(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(es(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ts(n,t)}else{if(es(n,r))return;Xo.set(r),e.uniformMatrix4fv(this.addr,!1,Xo),ts(n,r)}}function us(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ds(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(es(n,t))return;e.uniform2iv(this.addr,t),ts(n,t)}}function fs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(es(n,t))return;e.uniform3iv(this.addr,t),ts(n,t)}}function ps(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(es(n,t))return;e.uniform4iv(this.addr,t),ts(n,t)}}function ms(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function hs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(es(n,t))return;e.uniform2uiv(this.addr,t),ts(n,t)}}function gs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(es(n,t))return;e.uniform3uiv(this.addr,t),ts(n,t)}}function _s(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(es(n,t))return;e.uniform4uiv(this.addr,t),ts(n,t)}}function vs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Wo.compareFunction=n.isReversedDepthBuffer()?518:515,a=Wo):a=Uo,n.setTexture2D(t||a,i)}function ys(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ko,i)}function bs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||qo,i)}function xs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Go,i)}function Ss(e){switch(e){case 5126:return rs;case 35664:return is;case 35665:return as;case 35666:return os;case 35674:return ss;case 35675:return cs;case 35676:return ls;case 5124:case 35670:return us;case 35667:case 35671:return ds;case 35668:case 35672:return fs;case 35669:case 35673:return ps;case 5125:return ms;case 36294:return hs;case 36295:return gs;case 36296:return _s;case 35678:case 36198:case 36298:case 36306:case 35682:return vs;case 35679:case 36299:case 36307:return ys;case 35680:case 36300:case 36308:case 36293:return bs;case 36289:case 36303:case 36311:case 36292:return xs}}function Cs(e,t){e.uniform1fv(this.addr,t)}function ws(e,t){let n=$o(t,this.size,2);e.uniform2fv(this.addr,n)}function Ts(e,t){let n=$o(t,this.size,3);e.uniform3fv(this.addr,n)}function Es(e,t){let n=$o(t,this.size,4);e.uniform4fv(this.addr,n)}function Ds(e,t){let n=$o(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Os(e,t){let n=$o(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function ks(e,t){let n=$o(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function As(e,t){e.uniform1iv(this.addr,t)}function js(e,t){e.uniform2iv(this.addr,t)}function Ms(e,t){e.uniform3iv(this.addr,t)}function Ns(e,t){e.uniform4iv(this.addr,t)}function Ps(e,t){e.uniform1uiv(this.addr,t)}function Fs(e,t){e.uniform2uiv(this.addr,t)}function Is(e,t){e.uniform3uiv(this.addr,t)}function Ls(e,t){e.uniform4uiv(this.addr,t)}function Rs(e,t,n){let r=this.cache,i=t.length,a=ns(n,i);es(r,a)||(e.uniform1iv(this.addr,a),ts(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Wo:Uo;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function zs(e,t,n){let r=this.cache,i=t.length,a=ns(n,i);es(r,a)||(e.uniform1iv(this.addr,a),ts(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ko,a[e])}function Bs(e,t,n){let r=this.cache,i=t.length,a=ns(n,i);es(r,a)||(e.uniform1iv(this.addr,a),ts(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||qo,a[e])}function Vs(e,t,n){let r=this.cache,i=t.length,a=ns(n,i);es(r,a)||(e.uniform1iv(this.addr,a),ts(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Go,a[e])}function Hs(e){switch(e){case 5126:return Cs;case 35664:return ws;case 35665:return Ts;case 35666:return Es;case 35674:return Ds;case 35675:return Os;case 35676:return ks;case 5124:case 35670:return As;case 35667:case 35671:return js;case 35668:case 35672:return Ms;case 35669:case 35673:return Ns;case 5125:return Ps;case 36294:return Fs;case 36295:return Is;case 36296:return Ls;case 35678:case 36198:case 36298:case 36306:case 35682:return Rs;case 35679:case 36299:case 36307:return zs;case 35680:case 36300:case 36308:case 36293:return Bs;case 36289:case 36303:case 36311:case 36292:return Vs}}var Us=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ss(t.type)}},Ws=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hs(t.type)}},Gs=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Ks=/(\w+)(\])?(\[|\.)?/g;function qs(e,t){e.seq.push(t),e.map[t.id]=t}function Js(e,t,n){let r=e.name,i=r.length;for(Ks.lastIndex=0;;){let a=Ks.exec(r),o=Ks.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){qs(n,l===void 0?new Us(s,e,t):new Ws(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Gs(s),qs(n,e)),n=e}}}var Ys=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Js(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Xs(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Zs=37297,Qs=0;function $s(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var ec=new J;function tc(e){Y._getMatrix(ec,Y.workingColorSpace,e);let t=`mat3( ${ec.elements.map(e=>e.toFixed(4))} )`;switch(Y.getTransfer(e)){case Be:return[t,`LinearTransferOETF`];case Ve:return[t,`sRGBTransferOETF`];default:return U(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function nc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+$s(e.getShaderSource(t),r)}return i}function rc(e,t){let n=tc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var ic={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function ac(e,t){let n=ic[t];return n===void 0?(U(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var oc=new q;function sc(){return Y.getLuminanceCoefficients(oc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${oc.x.toFixed(4)}, ${oc.y.toFixed(4)}, ${oc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function cc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(dc).join(`
`)}function lc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function uc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function dc(e){return e!==``}function fc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var mc=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(e){return e.replace(mc,_c)}var gc=new Map;function _c(e,t){let n=Z[t];if(n===void 0){let e=gc.get(t);if(e!==void 0)n=Z[e],U(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return hc(n)}var vc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yc(e){return e.replace(vc,bc)}function bc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function xc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Sc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Cc(e){return Sc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var wc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Tc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:wc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Ec={302:`ENVMAP_MODE_REFRACTION`};function Dc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Ec[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Oc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function kc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Oc[e.combine]||`ENVMAP_BLENDING_NONE`}function Ac(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function jc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Cc(n),l=Tc(n),u=Dc(n),d=kc(n),f=Ac(n),p=cc(n),m=lc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(dc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(dc).join(`
`),_.length>0&&(_+=`
`)):(g=[xc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(dc).join(`
`),_=[xc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Z.tonemapping_pars_fragment,n.toneMapping===0?``:ac(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Z.colorspace_pars_fragment,rc(`linearToOutputTexel`,n.outputColorSpace),sc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(dc).join(`
`)),o=hc(o),o=fc(o,n),o=pc(o,n),s=hc(s),s=fc(s,n),s=pc(s,n),o=yc(o),s=yc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Xs(i,i.VERTEX_SHADER,y),S=Xs(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=nc(i,x,`vertex`),n=nc(i,S,`fragment`);W(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):U(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Ys(i,h),T=uc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Zs)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Qs++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Mc=0,Nc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Pc(e),t.set(e,n)),n}},Pc=class{constructor(e){this.id=Mc++,this.code=e,this.usedTimes=0}};function Fc(e){return e===1030||e===37490||e===36285}function Ic(e,t,n,r,i,a){let o=new cn,s=new Nc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&U(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=no[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,P=h.isBatchedMesh===!0,ee=!!i.map,te=!!i.matcap,F=!!x,I=!!i.aoMap,ne=!!i.lightMap,re=!!i.bumpMap&&i.wireframe===!1,ie=!!i.normalMap,ae=!!i.displacementMap,oe=!!i.emissiveMap,L=!!i.metalnessMap,R=!!i.roughnessMap,se=i.anisotropy>0,ce=i.clearcoat>0,le=i.dispersion>0,ue=i.retroreflectivity>0,de=i.iridescence>0,fe=i.sheen>0,pe=i.transmission>0,me=se&&!!i.anisotropyMap,he=ce&&!!i.clearcoatMap,ge=ce&&!!i.clearcoatNormalMap,_e=ce&&!!i.clearcoatRoughnessMap,ve=de&&!!i.iridescenceMap,ye=de&&!!i.iridescenceThicknessMap,be=fe&&!!i.sheenColorMap,xe=fe&&!!i.sheenRoughnessMap,Se=!!i.specularMap,Ce=!!i.specularColorMap,we=!!i.specularIntensityMap,Te=pe&&!!i.transmissionMap,Ee=pe&&!!i.thicknessMap,De=!!i.gradientMap,Oe=!!i.alphaMap,ke=i.alphaTest>0,z=!!i.alphaHash,Ae=!!i.extensions,je=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(je=e.toneMapping);let Me={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:P,batchingColor:P&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Y.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ee,matcap:te,envMap:F,envMapMode:F&&x.mapping,envMapCubeUVHeight:S,aoMap:I,lightMap:ne,bumpMap:re,normalMap:ie,displacementMap:ae,emissiveMap:oe,normalMapObjectSpace:ie&&i.normalMapType===1,normalMapTangentSpace:ie&&i.normalMapType===0,packedNormalMap:ie&&i.normalMapType===0&&Fc(i.normalMap.format),metalnessMap:L,roughnessMap:R,anisotropy:se,anisotropyMap:me,clearcoat:ce,clearcoatMap:he,clearcoatNormalMap:ge,clearcoatRoughnessMap:_e,dispersion:le,retroreflection:ue,iridescence:de,iridescenceMap:ve,iridescenceThicknessMap:ye,sheen:fe,sheenColorMap:be,sheenRoughnessMap:xe,specularMap:Se,specularColorMap:Ce,specularIntensityMap:we,transmission:pe,transmissionMap:Te,thicknessMap:Ee,gradientMap:De,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Oe,alphaTest:ke,alphaHash:z,combine:i.combine,mapUv:ee&&m(i.map.channel),aoMapUv:I&&m(i.aoMap.channel),lightMapUv:ne&&m(i.lightMap.channel),bumpMapUv:re&&m(i.bumpMap.channel),normalMapUv:ie&&m(i.normalMap.channel),displacementMapUv:ae&&m(i.displacementMap.channel),emissiveMapUv:oe&&m(i.emissiveMap.channel),metalnessMapUv:L&&m(i.metalnessMap.channel),roughnessMapUv:R&&m(i.roughnessMap.channel),anisotropyMapUv:me&&m(i.anisotropyMap.channel),clearcoatMapUv:he&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ge&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:be&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:xe&&m(i.sheenRoughnessMap.channel),specularMapUv:Se&&m(i.specularMap.channel),specularColorMapUv:Ce&&m(i.specularColorMap.channel),specularIntensityMapUv:we&&m(i.specularIntensityMap.channel),transmissionMapUv:Te&&m(i.transmissionMap.channel),thicknessMapUv:Ee&&m(i.thicknessMap.channel),alphaMapUv:Oe&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ie||se),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ee||Oe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ie===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:je,decodeVideoTexture:ee&&i.map.isVideoTexture===!0&&Y.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:oe&&i.emissiveMap.isVideoTexture===!0&&Y.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ae&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ae&&i.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=no[t];n=$i.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new jc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Lc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Rc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function zc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Bc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Rc),r.length>1&&r.sort(t||zc),i.length>1&&i.sort(t||zc)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Vc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Bc,e.set(t,[i])):n>=r.length?(i=new Bc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Hc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new q,color:new X};break;case`SpotLight`:n={position:new q,direction:new q,color:new X,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new q,color:new X,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new q,skyColor:new X,groundColor:new X};break;case`RectAreaLight`:n={color:new X,position:new q,halfWidth:new q,halfHeight:new q}}return e[t.id]=n,n}}}function Uc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Wc=0;function Gc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Kc(e){let t=new Hc,n=Uc(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new q);let i=new q,a=new Xt,o=new Xt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Gc);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Wc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function qc(e){let t=new Kc(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Jc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new qc(e),t.set(n,[a])):r>=i.length?(a=new qc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Yc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xc=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Zc=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],Qc=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],$c=new Xt,el=new q,tl=new q;function nl(e,t,n){let r=new ii,i=new K,a=new K,o=new Gt,s=new ia,l=new aa,u={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new na({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:Yc,fragmentShader:Xc}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let g=new Dr;g.setAttribute(`position`,new fr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Zr(g,m),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(U(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let l=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=S!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let l=0,u=t.length;l<u;l++){let u=t[l],p=u.shadow;if(p===void 0){U(`WebGLShadowMap:`,u,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let g=p.getFrameExtents();i.multiply(g),a.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(a.x=Math.floor(f/g.x),i.x=a.x*g.x,p.mapSize.x=a.x),i.y>f&&(a.y=Math.floor(f/g.y),i.y=a.y*g.y,p.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=_,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(u.isPointLight){U(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new qt(i.x,i.y,{format:P,type:x,minFilter:d,magFilter:d,generateMipmaps:!1}),p.map.texture.name=u.name+`.shadowMap`,p.map.depthTexture=new mi(i.x,i.y,b),p.map.depthTexture.name=u.name+`.shadowMapDepth`,p.map.depthTexture.format=A,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=c,p.map.depthTexture.magFilter=c}else u.isPointLight?(p.map=new No(i.x),p.map.depthTexture=new hi(i.x,y)):(p.map=new qt(i.x,i.y),p.map.depthTexture=new mi(i.x,i.y,y)),p.map.depthTexture.name=u.name+`.shadowMap`,p.map.depthTexture.format=A,this.type===1?(p.map.depthTexture.compareFunction=_?518:515,p.map.depthTexture.minFilter=d,p.map.depthTexture.magFilter=d):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=c,p.map.depthTexture.magFilter=c);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==i.x||p.map.height!==i.y)&&p.map.setSize(i.x,i.y);let v=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();u.isPointLight!==!0&&p.updateMatrices(u,s);for(let t=0;t<v;t++){let i=p.getCamera(t);if(u.isPointLight){let e=p.camera,n=p.matrix,r=u.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),el.setFromMatrixPosition(u.matrixWorld),e.position.copy(el),tl.copy(e.position),tl.add(Zc[t]),e.up.copy(Qc[t]),e.lookAt(tl),e.updateMatrixWorld(),n.makeTranslation(-el.x,-el.y,-el.z),$c.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix($c,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),m.viewport(o)}r=p.getFrustum(t),T(n,s,i,u,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,s),p.needsUpdate=!1}S=this.type,v.needsUpdate=!1,e.setRenderTarget(l,u,p)};function C(n,r){let a=t.update(_);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null?n.mapPass=new qt(i.x,i.y,{format:P,type:x}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,_,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value.set(n.map.width,n.map.height),h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,_,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function rl(e,t){function n(){let t=!1,n=new Gt,r=null,i=new Gt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?L(e.DEPTH_TEST):R(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=et[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?L(e.STENCIL_TEST):R(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new X(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,ee=e.getParameter(e.VERSION);ee.indexOf(`WebGL`)===-1?ee.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(ee)[1]),N=P>=1);let te=null,F={},I=e.getParameter(e.SCISSOR_BOX),ne=e.getParameter(e.VIEWPORT),re=new Gt().fromArray(I),ie=new Gt().fromArray(ne);function ae(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let oe={};oe[e.TEXTURE_2D]=ae(e.TEXTURE_2D,e.TEXTURE_2D,1),oe[e.TEXTURE_CUBE_MAP]=ae(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[e.TEXTURE_2D_ARRAY]=ae(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),oe[e.TEXTURE_3D]=ae(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),L(e.DEPTH_TEST),o.setFunc(3),me(!1),he(1),L(e.CULL_FACE),fe(0);function L(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function R(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function se(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ce(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function le(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ue={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ue[103]=e.MIN,ue[104]=e.MAX;let de={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function fe(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(R(e.BLEND),g=!1);return}if(g===!1&&(L(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:W(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:W(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:W(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:W(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ue[n],ue[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(de[r],de[i],de[o],de[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function pe(t,n){t.side===2?R(e.CULL_FACE):L(e.CULL_FACE);let r=t.side===1;n&&(r=!r),me(r),t.blending===1&&t.transparent===!1?fe(0):fe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),_e(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?L(e.SAMPLE_ALPHA_TO_COVERAGE):R(e.SAMPLE_ALPHA_TO_COVERAGE)}function me(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function he(t){t===0?R(e.CULL_FACE):(L(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ge(t){t!==k&&(N&&e.lineWidth(t),k=t)}function _e(t,n,r){t?(L(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):R(e.POLYGON_OFFSET_FILL)}function ve(t){t?L(e.SCISSOR_TEST):R(e.SCISSOR_TEST)}function ye(t){t===void 0&&(t=e.TEXTURE0+M-1),te!==t&&(e.activeTexture(t),te=t)}function be(t,n,r){r===void 0&&(r=te===null?e.TEXTURE0+M-1:te);let i=F[r];i===void 0&&(i={type:void 0,texture:void 0},F[r]=i),(i.type!==t||i.texture!==n)&&(te!==r&&(e.activeTexture(r),te=r),e.bindTexture(t,n||oe[t]),i.type=t,i.texture=n)}function xe(){let t=F[te];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Se(){try{e.compressedTexImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ce(){try{e.compressedTexImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function we(){try{e.texSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Te(){try{e.texSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Oe(){try{e.texStorage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function ke(){try{e.texStorage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function z(){try{e.texImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ae(){try{e.texImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function je(t){return d[t]===void 0?e.getParameter(t):d[t]}function Me(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function B(t){re.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),re.copy(t))}function Ne(t){ie.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ie.copy(t))}function V(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function H(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Pe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},te=null,F={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new X(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,re.set(0,0,e.canvas.width,e.canvas.height),ie.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:L,disable:R,bindFramebuffer:se,drawBuffers:ce,useProgram:le,setBlending:fe,setMaterial:pe,setFlipSided:me,setCullFace:he,setLineWidth:ge,setPolygonOffset:_e,setScissorTest:ve,activeTexture:ye,bindTexture:be,unbindTexture:xe,compressedTexImage2D:Se,compressedTexImage3D:Ce,texImage2D:z,texImage3D:Ae,pixelStorei:Me,getParameter:je,updateUBOMapping:V,uniformBlockBinding:H,texStorage2D:Oe,texStorage3D:ke,texSubImage2D:we,texSubImage3D:Te,compressedTexSubImage2D:Ee,compressedTexSubImage3D:De,scissor:B,viewport:Ne,reset:Pe}}function il(e,t,n,r,i,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new K,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):qe(`canvas`)}function T(e,t,n){let r=1,i=je(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),U(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&U(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];U(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||U(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Be:Y.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function A(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,U(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function M(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function N(e){let t=e.target;t.removeEventListener(`dispose`,N),ee(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function P(e){let t=e.target;t.removeEventListener(`dispose`,P),F(t)}function ee(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&te(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function te(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],h.memory.textures--}function F(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),r.remove(i[t])}r.remove(t)}let I=0;function ne(){I=0}function re(){return I}function ie(e){I=e}function ae(){let e=I;return e>=i.maxTextures&&U(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),I+=1,e}function oe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function L(t,i){let a=r.get(t);if(t.isVideoTexture&&z(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)U(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)U(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ge(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function R(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ge(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function se(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ge(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ce(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){_e(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let le={[a]:e.REPEAT,[o]:e.CLAMP_TO_EDGE,[s]:e.MIRRORED_REPEAT},ue={[c]:e.NEAREST,[l]:e.NEAREST_MIPMAP_NEAREST,[u]:e.NEAREST_MIPMAP_LINEAR,[d]:e.LINEAR,[f]:e.LINEAR_MIPMAP_NEAREST,[p]:e.LINEAR_MIPMAP_LINEAR},de={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function fe(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&U(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,le[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,le[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,le[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ue[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ue[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,de[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function pe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,N));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=oe(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&te(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function me(e,t,n){return Math.floor(Math.floor(e/n)/t)}function he(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=me(n.start,r.width,4),c=me(t.start,r.width,4);n.start<=i+1&&a===c&&me(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ge(t,a,o){let s=e.TEXTURE_2D;(a.isDataArrayTexture||a.isCompressedArrayTexture)&&(s=e.TEXTURE_2D_ARRAY),a.isData3DTexture&&(s=e.TEXTURE_3D);let c=pe(t,a),l=a.source;n.bindTexture(s,t.__webglTexture,e.TEXTURE0+o);let u=r.get(l);if(l.version!==u.__version||c===!0){if(n.activeTexture(e.TEXTURE0+o),!(typeof ImageBitmap<`u`&&a.image instanceof ImageBitmap)){let t=Y.getPrimaries(Y.workingColorSpace),r=a.colorSpace===``?null:Y.getPrimaries(a.colorSpace),i=a.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment);let t=T(a.image,!1,i.maxTextureSize);t=Ae(a,t);let r=m.convert(a.format,a.colorSpace),d=m.convert(a.type),f=k(a.internalFormat,r,d,a.normalized,a.colorSpace,a.isVideoTexture);fe(s,a);let p,h=a.mipmaps,g=a.isVideoTexture!==!0,_=u.__version===void 0||c===!0,v=l.dataReady,y=M(a,t);if(a.isDepthTexture)f=A(a.format===j,a.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,f,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,f,t.width,t.height,0,r,d,null));else if(a.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,f,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)p=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,p.width,p.height,r,d,p.data):n.texImage2D(e.TEXTURE_2D,t,f,p.width,p.height,0,r,d,p.data);a.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,f,t.width,t.height),v&&he(a,t,r,d)):n.texImage2D(e.TEXTURE_2D,0,f,t.width,t.height,0,r,d,t.data)}else if(a.isCompressedTexture){if(a.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,f,h[0].width,h[0].height,t.depth);for(let i=0,o=h.length;i<o;i++)if(p=h[i],a.format!==1023){if(r!==null){if(g){if(v){if(a.layerUpdates.size>0){let t=Qa(p.width,p.height,a.format,a.type);for(let o of a.layerUpdates){let a=p.data.subarray(o*t/p.data.BYTES_PER_ELEMENT,(o+1)*t/p.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,o,p.width,p.height,1,r,a)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,p.width,p.height,t.depth,r,p.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,f,p.width,p.height,t.depth,0,p.data,0,0)}else U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,p.width,p.height,t.depth,r,d,p.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,f,p.width,p.height,t.depth,0,r,d,p.data);a.layerUpdates.size>0&&a.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,f,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)p=h[t],a.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,p.width,p.height,r,d,p.data):n.texImage2D(e.TEXTURE_2D,t,f,p.width,p.height,0,r,d,p.data):r===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,p.width,p.height,r,p.data):n.compressedTexImage2D(e.TEXTURE_2D,t,f,p.width,p.height,0,p.data)}}else if(a.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,f,t.width,t.height,t.depth),v){if(a.layerUpdates.size>0){let i=Qa(t.width,t.height,a.format,a.type);for(let o of a.layerUpdates){let a=t.data.subarray(o*i/t.data.BYTES_PER_ELEMENT,(o+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,o,t.width,t.height,1,r,d,a)}a.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,d,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,f,t.width,t.height,t.depth,0,r,d,t.data)}else if(a.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,f,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,d,t.data)):n.texImage3D(e.TEXTURE_3D,0,f,t.width,t.height,t.depth,0,r,d,t.data);else if(a.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,f,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,f,i,a,0,r,d,null),i>>=1,a>>=1}}}else if(a.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(a),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=je(h[0]);n.texStorage2D(e.TEXTURE_2D,y,f,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)p=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,d,p):n.texImage2D(e.TEXTURE_2D,t,f,r,d,p);a.generateMipmaps=!1}else if(g){if(_){let r=je(t);n.texStorage2D(e.TEXTURE_2D,y,f,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,d,t)}else n.texImage2D(e.TEXTURE_2D,0,f,r,d,t);E(a)&&D(s),u.__version=l.version,a.onUpdate&&a.onUpdate(a)}t.__version=a.version}function _e(t,a,o){if(a.image.length!==6)return;let s=pe(t,a),c=a.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+o);let l=r.get(c);if(c.version!==l.__version||s===!0){n.activeTexture(e.TEXTURE0+o);let t=Y.getPrimaries(Y.workingColorSpace),r=a.colorSpace===``?null:Y.getPrimaries(a.colorSpace),u=a.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,u);let d=a.isCompressedTexture||a.image[0].isCompressedTexture,f=a.image[0]&&a.image[0].isDataTexture,p=[];for(let e=0;e<6;e++)!d&&!f?p[e]=T(a.image[e],!0,i.maxCubemapSize):p[e]=f?a.image[e].image:a.image[e],p[e]=Ae(a,p[e]);let h=p[0],g=m.convert(a.format,a.colorSpace),_=m.convert(a.type),v=k(a.internalFormat,g,_,a.normalized,a.colorSpace),y=a.isVideoTexture!==!0,b=l.__version===void 0||s===!0,x=c.dataReady,S=M(a,h);fe(e.TEXTURE_CUBE_MAP,a);let C;if(d){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=p[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];a.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=a.mipmaps,y&&b){C.length>0&&S++;let t=je(p[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(f){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,p[t].width,p[t].height,g,_,p[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,p[t].width,p[t].height,0,g,_,p[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,p[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,p[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(a)&&D(e.TEXTURE_CUBE_MAP),l.__version=c.version,a.onUpdate&&a.onUpdate(a)}t.__version=a.version}function ve(t,i,a,o,s,c){let l=m.convert(a.format,a.colorSpace),u=m.convert(a.type),d=k(a.internalFormat,l,u,a.normalized,a.colorSpace),f=r.get(i),p=r.get(a);if(p.__renderTarget=i,!f.__hasExternalTextures){let t=Math.max(1,i.width>>c),r=Math.max(1,i.height>>c);s===e.TEXTURE_3D||s===e.TEXTURE_2D_ARRAY?n.texImage3D(s,c,d,t,r,i.depth,0,l,u,null):n.texImage2D(s,c,d,t,r,0,l,u,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),ke(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,o,s,p.__webglTexture,0,Oe(i)):(s===e.TEXTURE_2D||s>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&s<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,o,s,p.__webglTexture,c),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=A(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;ke(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Oe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Oe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=k(a.internalFormat,o,s,a.normalized,a.colorSpace);ke(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Oe(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Oe(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function be(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let s=r.get(i.depthTexture);if(s.__renderTarget=i,(!s.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),o){if(s.__webglInit===void 0&&(s.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,N)),s.__webglTexture===void 0){s.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,s.__webglTexture),fe(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=m.convert(i.depthTexture.format),r=m.convert(i.depthTexture.type),a;i.depthTexture.format===1026?a=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(a=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,a,i.width,i.height,0,t,r,null)}}else L(i.depthTexture,0);let c=s.__webglTexture,l=Oe(i),u=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,d=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)ke(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,d,u,c,0,l):e.framebufferTexture2D(e.FRAMEBUFFER,d,u,c,0);else if(i.depthTexture.format===1027)ke(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,d,u,c,0,l):e.framebufferTexture2D(e.FRAMEBUFFER,d,u,c,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function xe(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)be(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?be(i.__webglFramebuffer[0],t,0):be(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ye(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ye(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Se(t,n,i){let a=r.get(t);n!==void 0&&ve(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&xe(t)}function Ce(t){let i=t.texture,a=r.get(t),o=r.get(i);t.addEventListener(`dispose`,P);let s=t.textures,c=t.isWebGLCubeRenderTarget===!0,l=s.length>1;if(l||(o.__webglTexture===void 0&&(o.__webglTexture=e.createTexture()),o.__version=i.version,h.memory.textures++),c){a.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){a.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)a.__webglFramebuffer[t][n]=e.createFramebuffer()}else a.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){a.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)a.__webglFramebuffer[t]=e.createFramebuffer()}else a.__webglFramebuffer=e.createFramebuffer();if(l)for(let t=0,n=s.length;t<n;t++){let n=r.get(s[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&ke(t)===!1){a.__webglMultisampledFramebuffer=e.createFramebuffer(),a.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,a.__webglMultisampledFramebuffer);for(let n=0;n<s.length;n++){let r=s[n];a.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,a.__webglColorRenderbuffer[n]);let i=m.convert(r.format,r.colorSpace),o=m.convert(r.type),c=k(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),l=Oe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,a.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(a.__webglDepthRenderbuffer=e.createRenderbuffer(),ye(a.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(c){n.bindTexture(e.TEXTURE_CUBE_MAP,o.__webglTexture),fe(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ve(a.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ve(a.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(l){for(let i=0,o=s.length;i<o;i++){let o=s[i],c=r.get(o),l=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(l=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(l,c.__webglTexture),fe(l,o),ve(a.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0+i,l,0),E(o)&&D(l)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,o.__webglTexture),fe(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ve(a.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ve(a.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&xe(t)}function we(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=O(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let Te=[],Ee=[];function De(t){if(t.samples>0){if(ke(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=r.get(t),u=i.length>1;if(u)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,l.__webglMultisampledFramebuffer);let d=t.texture.mipmaps;d&&d.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),u){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,l.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),_===!0&&(Te.length=0,Ee.length=0,Te.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Te.push(c),Ee.push(c),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ee)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Te))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),u)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,l.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Oe(e){return Math.min(i.maxSamples,e.samples)}function ke(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function z(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ae(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Y.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&U(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):W(`WebGLTextures: Unsupported texture color space:`,n)),t}function je(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ae,this.resetTextureUnits=ne,this.getTextureUnits=re,this.setTextureUnits=ie,this.setTexture2D=L,this.setTexture2DArray=R,this.setTexture3D=se,this.setTextureCube=ce,this.rebindTextures=Se,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ke,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function al(e,t){function n(n,r=``){let i,a=Y.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var ol=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,cl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new gi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new na({vertexShader:ol,fragmentShader:sl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zr(new Gi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ll=class extends tt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,h=typeof XRWebGLBinding<`u`,g=new cl,_={},v=t.getContextAttributes(),b=null,x=null,S=[],C=[],T=new K,E=null,D=null,O=new Ma;O.viewport=new Gt;let M=new Ma;M.viewport=new Gt;let N=[O,M],P=new La,ee=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=S[e];return t===void 0&&(t=new Dn,S[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=S[e];return t===void 0&&(t=new Dn,S[e]=t),t.getGripSpace()},this.getHand=function(e){let t=S[e];return t===void 0&&(t=new Dn,S[e]=t),t.getHandSpace()};function F(e){let t=C.indexOf(e.inputSource);if(t===-1)return;let n=S[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function I(){r.removeEventListener(`select`,F),r.removeEventListener(`selectstart`,F),r.removeEventListener(`selectend`,F),r.removeEventListener(`squeeze`,F),r.removeEventListener(`squeezestart`,F),r.removeEventListener(`squeezeend`,F),r.removeEventListener(`end`,I),r.removeEventListener(`inputsourceschange`,ne);for(let e=0;e<S.length;e++){let t=C[e];t!==null&&(C[e]=null,S[e].disconnect(t))}ee=null,te=null,g.reset();for(let e in _)delete _[e];if(e.setRenderTarget(b),f=null,d=null,u=null,r=null,x=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),D!==null){let e=D.camera;e.fov=D.fov,e.zoom=D.zoom,e.updateProjectionMatrix(),D=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,F),r.addEventListener(`selectstart`,F),r.addEventListener(`selectend`,F),r.addEventListener(`squeeze`,F),r.addEventListener(`squeezestart`,F),r.addEventListener(`squeezeend`,F),r.addEventListener(`end`,I),r.addEventListener(`inputsourceschange`,ne),v.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;v.depth&&(o=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=v.stencil?j:A,a=v.stencil?w:y);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new qt(d.textureWidth,d.textureHeight,{format:k,type:m,depthTexture:new mi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new qt(f.framebufferWidth,f.framebufferHeight,{format:k,type:m,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ce.setContext(r),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ne(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=C.indexOf(n);r>=0&&(C[r]=null,S[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=C.indexOf(n);if(r===-1){for(let e=0;e<S.length;e++)if(e>=C.length){C.push(n),r=e;break}else if(C[e]===null){C[e]=n,r=e;break}if(r===-1)break}let i=S[r];i&&i.connect(n)}}let re=new q,ie=new q;function ae(e,t,n){re.setFromMatrixPosition(t.matrixWorld),ie.setFromMatrixPosition(n.matrixWorld);let r=re.distanceTo(ie),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function oe(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),P.near=M.near=O.near=t,P.far=M.far=O.far=n,(ee!==P.near||te!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),ee=P.near,te=P.far),P.layers.mask=e.layers.mask|6,O.layers.mask=P.layers.mask&-5,M.layers.mask=P.layers.mask&-3;let i=e.parent,a=P.cameras;oe(P,i);for(let e=0;e<a.length;e++)oe(a[e],i);a.length===2?ae(P,O,M):P.projectionMatrix.copy(O.projectionMatrix),D===null&&e.isPerspectiveCamera&&(D={camera:e,fov:e.fov,zoom:e.zoom}),L(e,P,i)};function L(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=at*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(e){return _[e]};let R=null;function se(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let i=!1;t.length!==P.cameras.length&&(P.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(x,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(x))}let o=N[n];o===void 0&&(o=new Ma,o.layers.enable(n),o.viewport=new Gt,N[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(P.matrix.copy(o.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),i===!0&&P.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&g.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=_[n];e||(e=new gi,_[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<S.length;e++){let t=C[e],n=S[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}R&&R(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ce=new eo;ce.setAnimationLoop(se),this.setAnimationLoop=function(e){R=e},this.dispose=function(){}}},ul=new Xt,dl=new J;dl.set(-1,0,0,0,1,0,0,0,1);function fl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Qi(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(ul.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(dl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function pl(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return W(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?U(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):U(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var ml=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hl=null;function gl(){return hl===null&&(hl=new ei(ml,16,16,P,x),hl.name=`DFG_LUT`,hl.minFilter=d,hl.magFilter=d,hl.wrapS=o,hl.wrapT=o,hl.generateMipmaps=!1,hl.needsUpdate=!0),hl}var _l=class{constructor(e={}){let{canvas:t=Je(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=m}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);h=n.getContextAttributes().alpha}else h=a;let g=f,v=new Set([te,ee,N]),b=new Set([m,y,_,w,S,C]),T=new Uint32Array(4),E=new Int32Array(4),D=new q,O=null,k=null,A=[],j=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,F=!1,I=null,ne=null,re=null,ie=null;this._outputColorSpace=Re;let ae=0,oe=0,L=null,R=-1,se=null,ce=new Gt,le=new Gt,ue=null,de=new X(0),fe=0,pe=t.width,me=t.height,he=1,ge=null,_e=null,ve=new Gt(0,0,pe,me),ye=new Gt(0,0,pe,me),be=!1,xe=new ii,Se=!1,Ce=!1,we=new Xt,Te=new q,Ee=new Gt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function ke(){return L===null?he:1}let z=n;function Ae(e,n){return t.getContext(e,n)}let je,Me,B,Ne,V,H,Pe,Fe,Ie,Le,ze,Be,Ve,He,Ue,Ge,Ke,qe,Ye,Ze,Qe,et,tt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,it,!1),t.addEventListener(`webglcontextrestored`,at,!1),t.addEventListener(`webglcontextcreationerror`,ot,!1),z===null){let t=`webgl2`;if(z=Ae(t,e),z===null)throw Ae(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}nt()}catch(e){throw t.removeEventListener(`webglcontextlost`,it,!1),t.removeEventListener(`webglcontextrestored`,at,!1),t.removeEventListener(`webglcontextcreationerror`,ot,!1),W(`WebGLRenderer: `+e.message),e}function nt(){je=new Fo(z),je.init(),Qe=new al(z,je),Me=new lo(z,je,e,Qe),B=new rl(z,je),Me.reversedDepthBuffer&&d&&B.buffers.depth.setReversed(!0),ne=z.createFramebuffer(),re=z.createFramebuffer(),ie=z.createFramebuffer(),Ne=new Ro(z),V=new Lc,H=new il(z,je,B,V,Me,Qe,Ne),Pe=new Po(P),Fe=new to(z),et=new so(z,Fe),Ie=new Io(z,Fe,Ne,et),Le=new Bo(z,Ie,Fe,et,Ne),qe=new zo(z,Me,H),Ue=new uo(V),ze=new Ic(P,Pe,je,Me,et,Ue),Be=new fl(P,V),Ve=new Vc,He=new Jc(je),Ke=new oo(P,Pe,B,Le,h,s),Ge=new nl(P,Le,Me),tt=new pl(z,Ne,Me,B),Ye=new co(z,je,Ne),Ze=new Lo(z,je,Ne),Ne.programs=ze.programs,P.capabilities=Me,P.extensions=je,P.properties=V,P.renderLists=Ve,P.shadowMap=Ge,P.state=B,P.info=Ne}g!==1009&&(M=new Ho(g,t.width,t.height,o,r,i));let rt=new ll(P,z);this.xr=rt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let e=je.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=je.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(e){e!==void 0&&(he=e,this.setSize(pe,me,!1))},this.getSize=function(e){return e.set(pe,me)},this.setSize=function(e,n,r=!0){if(rt.isPresenting){U(`WebGLRenderer: Can't change size while VR device is presenting.`);return}pe=e,me=n,t.width=Math.floor(e*he),t.height=Math.floor(n*he),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(pe*he,me*he).floor()},this.setDrawingBufferSize=function(e,n,r){pe=e,me=n,he=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(g===1009){W(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){U(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}M.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(ce)},this.getViewport=function(e){return e.copy(ve)},this.setViewport=function(e,t,n,r){e.isVector4?ve.set(e.x,e.y,e.z,e.w):ve.set(e,t,n,r),B.viewport(ce.copy(ve).multiplyScalar(he).round())},this.getScissor=function(e){return e.copy(ye)},this.setScissor=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),B.scissor(le.copy(ye).multiplyScalar(he).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(e){B.setScissorTest(be=e)},this.setOpaqueSort=function(e){ge=e},this.setTransparentSort=function(e){_e=e},this.getClearColor=function(e){return e.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(L!==null){let t=L.texture.format;e=v.has(t)}if(e){let e=L.texture.type,t=b.has(e),n=Ke.getClearColor(),r=Ke.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,z.clearBufferuiv(z.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,z.clearBufferiv(z.COLOR,0,E))}else r|=z.COLOR_BUFFER_BIT}t&&(r|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&z.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),I=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,it,!1),t.removeEventListener(`webglcontextrestored`,at,!1),t.removeEventListener(`webglcontextcreationerror`,ot,!1),Ke.dispose(),Ve.dispose(),He.dispose(),V.dispose(),Pe.dispose(),Le.dispose(),et.dispose(),tt.dispose(),ze.dispose(),rt.dispose(),rt.removeEventListener(`sessionstart`,ft),rt.removeEventListener(`sessionend`,pt),mt.stop()};function it(e){e.preventDefault(),Xe(`WebGLRenderer: Context Lost.`),F=!0}function at(){Xe(`WebGLRenderer: Context Restored.`),F=!1;let e=Ne.autoReset,t=Ge.enabled,n=Ge.autoUpdate,r=Ge.needsUpdate,i=Ge.type;nt(),Ne.autoReset=e,Ge.enabled=t,Ge.autoUpdate=n,Ge.needsUpdate=r,Ge.type=i}function ot(e){W(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function G(e){let t=e.target;t.removeEventListener(`dispose`,G),st(t)}function st(e){ct(e),V.remove(e)}function ct(e){let t=V.get(e).programs;t!==void 0&&(t.forEach(function(e){ze.releaseProgram(e)}),e.isShaderMaterial&&ze.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=De);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=wt(e,t,n,r,i);B.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ie.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;et.setup(i,r,s,n,c);let h,g=Ye;if(c!==null&&(h=Fe.get(c),g=Ze,g.setIndex(h)),i.isMesh)r.wireframe===!0?(B.setLineWidth(r.wireframeLinewidth*ke()),g.setMode(z.LINES)):g.setMode(z.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),B.setLineWidth(e*ke()),i.isLineSegments?g.setMode(z.LINES):i.isLineLoop?g.setMode(z.LINE_LOOP):g.setMode(z.LINE_STRIP)}else i.isPoints?g.setMode(z.POINTS):i.isSprite&&g.setMode(z.TRIANGLES);if(i.isBatchedMesh){if(je.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Fe.get(c).bytesPerElement:1,o=V.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(z,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function lt(e,t,n,r){I!==null&&e.isNodeMaterial&&I.setObject(r,e),Se===!0&&Ue.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,bt(e,t,r),e.side=0,e.needsUpdate=!0,bt(e,t,r),e.side=2):bt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),I!==null&&I.renderStart(e,t,n),k=He.get(n),k.init(t),j.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),I!==null&&I.updateLights(k.state.lightsArray),Ce=this.localClippingEnabled,Se=Ue.init(this.clippingPlanes,Ce),Se===!0&&Ue.setGlobalState(this.clippingPlanes,t),I!==null&&Ge.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];lt(o,n,t,e),r.add(o)}else lt(i,n,t,e),r.add(i)}}),k=j.pop(),I!==null&&I.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=V.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}je.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ut=null;function dt(e){ut&&ut(e)}function ft(){mt.stop()}function pt(){mt.start()}let mt=new eo;mt.setAnimationLoop(dt),typeof self<`u`&&mt.setContext(self),this.setAnimationLoop=function(e){ut=e,rt.setAnimationLoop(e),e===null?mt.stop():mt.start()},rt.addEventListener(`sessionstart`,ft),rt.addEventListener(`sessionend`,pt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){W(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(F===!0)return;I!==null&&I.renderStart(e,t);let n=rt.enabled===!0&&rt.isPresenting===!0,r=M!==null&&(L===null||n)&&M.begin(P,L);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(t),t=rt.getCamera()),e.isScene===!0&&e.onBeforeRender(P,e,t,L),k=He.get(e,j.length),k.init(t),k.state.textureUnits=H.getTextureUnits(),j.push(k),we.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),xe.setFromProjectionMatrix(we,We,t.reversedDepth),Ce=this.localClippingEnabled,Se=Ue.init(this.clippingPlanes,Ce),O=Ve.get(e,A.length),O.init(),A.push(O),rt.enabled===!0&&rt.isPresenting===!0){let e=P.xr.getDepthSensingMesh();e!==null&&ht(e,t,-1/0,P.sortObjects)}ht(e,t,0,P.sortObjects),O.finish(),I!==null&&I.updateLights(k.state.lightsArray),P.sortObjects===!0&&O.sort(ge,_e),Oe=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Oe&&Ke.addToRenderList(O,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Se===!0&&Ue.beginShadows();let i=k.state.shadowsArray;if(Ge.render(i,e,t),Se===!0&&Ue.endShadows(),(r&&M.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];_t(n,r,e,a)}Oe&&Ke.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];gt(O,e,n,n.viewport)}}else r.length>0&&_t(n,r,e,t),Oe&&Ke.render(e),gt(O,e,t)}L!==null&&oe===0&&(H.updateMultisampleRenderTarget(L),H.updateRenderTargetMipmap(L)),r&&M.end(P),e.isScene===!0&&e.onAfterRender(P,e,t),et.resetDefaultState(),R=-1,se=null,j.pop(),j.length>0?(k=j[j.length-1],H.setTextureUnits(k.state.textureUnits),Se===!0&&Ue.setGlobalState(P.clippingPlanes,k.state.camera)):k=null,A.pop(),O=A.length>0?A[A.length-1]:null,I!==null&&I.renderEnd()};function ht(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(xe)){r&&Ee.setFromMatrixPosition(e.matrixWorld).applyMatrix4(we);let i=Le.update(e),a=e.material;a.visible&&O.push(e,i,a,n,Ee.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(xe))){let i=Le.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ee.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ee.copy(e.boundingSphere.center)),Ee.applyMatrix4(e.matrixWorld).applyMatrix4(we)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,Ee.z,s,t)}}else a.visible&&O.push(e,i,a,n,Ee.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)ht(i[e],t,n,r)}function gt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Se===!0&&Ue.setGlobalState(P.clippingPlanes,n),r&&B.viewport(ce.copy(r)),i.length>0&&vt(i,t,n),a.length>0&&vt(a,t,n),o.length>0&&vt(o,t,n),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function _t(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=je.has(`EXT_color_buffer_half_float`)||je.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new qt(1,1,{generateMipmaps:!0,type:e?x:m,minFilter:p,samples:Math.max(4,Me.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Y.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||ce;a.setSize(o.z*P.transmissionResolutionScale,o.w*P.transmissionResolutionScale);let s=P.getRenderTarget(),c=P.getActiveCubeFace(),l=P.getActiveMipmapLevel();P.setRenderTarget(a),P.getClearColor(de),fe=P.getClearAlpha(),fe<1&&P.setClearColor(16777215,.5),P.clear(),Oe&&Ke.render(n);let u=P.toneMapping;P.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Se===!0&&Ue.setGlobalState(P.clippingPlanes,r),vt(e,n,r),H.updateMultisampleRenderTarget(a),H.updateRenderTargetMipmap(a),je.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,yt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(H.updateMultisampleRenderTarget(a),H.updateRenderTargetMipmap(a))}P.setRenderTarget(s,c,l),P.setClearColor(de,fe),d!==void 0&&(r.viewport=d),P.toneMapping=u}function vt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&yt(o,t,n,s,l,c)}}function yt(e,t,n,r,i,a){I!==null&&i.isNodeMaterial&&I.setObject(e,i),e.onBeforeRender(P,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(P,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=2):P.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(P,t,n,r,i,a)}function bt(e,t,n){t.isScene!==!0&&(t=De);let r=V.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=ze.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=ze.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Pe.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,G),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return St(e,s),d}else s.uniforms=ze.getUniforms(e),I!==null&&e.isNodeMaterial&&I.build(e,n,s),e.onBeforeCompile(s,P),d=ze.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ue.uniform),St(e,s),r.needsLights=Et(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function xt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Ys.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function St(e,t){let n=V.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ct(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function wt(e,t,n,r,i){t.isScene!==!0&&(t=De),H.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=L===null?P.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Y.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Pe.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(h=P.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=V.get(r),y=k.state.lights;if(Se===!0&&(Ce===!0||e!==se)){let t=e===se&&r.id===R;Ue.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ue.numPlanes||v.numIntersection!==Ue.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=bt(r,t,i),I&&r.isNodeMaterial&&I.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(B.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==R&&(R=r.id,C=!0),v.needsLights){let e=Ct(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||se!==e){B.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(z,`projectionMatrix`,e.projectionMatrix),T.setValue(z,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(z,Te.setFromMatrixPosition(e.matrixWorld)),Me.logarithmicDepthBuffer&&T.setValue(z,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(z,`isOrthographic`,e.isOrthographicCamera===!0),se!==e&&(se=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(z,`sunShadowMap`,y.state.sunShadowMap,H),y.state.directionalShadowMap.length>0&&T.setValue(z,`directionalShadowMap`,y.state.directionalShadowMap,H),y.state.spotShadowMap.length>0&&T.setValue(z,`spotShadowMap`,y.state.spotShadowMap,H),y.state.pointShadowMap.length>0&&T.setValue(z,`pointShadowMap`,y.state.pointShadowMap,H)),i.isSkinnedMesh){T.setOptional(z,i,`bindMatrix`),T.setOptional(z,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(z,`boneTexture`,e.boneTexture,H))}i.isBatchedMesh&&(T.setOptional(z,i,`batchingTexture`),T.setValue(z,`batchingTexture`,i._matricesTexture,H),T.setOptional(z,i,`batchingIdTexture`),T.setValue(z,`batchingIdTexture`,i._indirectTexture,H),T.setOptional(z,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(z,`batchingColorTexture`,i._colorsTexture,H));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&qe.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(z,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=gl()),C){if(T.setValue(z,`toneMappingExposure`,P.toneMappingExposure),v.needsLights&&Tt(E,w),a&&r.fog===!0&&Be.refreshFogUniforms(E,a),Be.refreshMaterialUniforms(E,r,he,me,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Ys.upload(z,xt(v),E,H)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Ys.upload(z,xt(v),E,H),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(z,`center`,i.center),T.setValue(z,`modelViewMatrix`,i.modelViewMatrix),T.setValue(z,`normalMatrix`,i.normalMatrix),T.setValue(z,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];tt.update(n,x),tt.bind(n,x)}}return x}function Tt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Et(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return oe},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(e,t,n){let r=V.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),V.get(e.texture).__webglTexture=t,V.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=V.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){L=e,ae=t,oe=n;let r=null,i=!1,a=!1;if(e){let o=V.get(e);if(o.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(z.FRAMEBUFFER,o.__webglFramebuffer),ce.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest,B.viewport(ce),B.scissor(le),B.setScissorTest(ue),R=-1;return}if(o.__webglFramebuffer===void 0)H.setupRenderTarget(e);else if(o.__hasExternalTextures)H.rebindTextures(e,V.get(e.texture).__webglTexture,V.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&V.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);H.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=V.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&H.useMultisampledRTT(e)===!1?V.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ce.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest}else ce.copy(ve).multiplyScalar(he).floor(),le.copy(ye).multiplyScalar(he).floor(),ue=be;if(n!==0&&(r=ne),B.bindFramebuffer(z.FRAMEBUFFER,r)&&B.drawBuffers(e,r),B.viewport(ce),B.scissor(le),B.setScissorTest(ue),i){let r=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=V.get(e.textures[t]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,t.__webglTexture,n)}R=-1};function Dt(e){let t=V.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Me.textureFormatReadable(e.format),t.__typeReadable=Me.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){B.bindFramebuffer(z.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s);let u=Dt(o);if(u.__formatReadable===!1){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&z.readPixels(t,n,r,i,Qe.convert(c),Qe.convert(l),a)}finally{let e=L===null?null:V.get(L).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){B.bindFramebuffer(z.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s);let d=Dt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,f),z.bufferData(z.PIXEL_PACK_BUFFER,a.byteLength,z.STREAM_READ),z.readPixels(t,n,r,i,Qe.convert(l),Qe.convert(u),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let p=L===null?null:V.get(L).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,p);let m=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await $e(z,m,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,f),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,a),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(f),z.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;H.setTexture2D(e,0),z.copyTexSubImage2D(z.TEXTURE_2D,n,0,0,o,s,i,a),B.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Qe.convert(t.format),_=Qe.convert(t.type),v;t.isData3DTexture?(H.setTexture3D(t,0),v=z.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(H.setTexture2DArray(t,0),v=z.TEXTURE_2D_ARRAY):(H.setTexture2D(t,0),v=z.TEXTURE_2D),B.activeTexture(z.TEXTURE0),B.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,t.flipY),B.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),B.pixelStorei(z.UNPACK_ALIGNMENT,t.unpackAlignment);let y=B.getParameter(z.UNPACK_ROW_LENGTH),b=B.getParameter(z.UNPACK_IMAGE_HEIGHT),x=B.getParameter(z.UNPACK_SKIP_PIXELS),S=B.getParameter(z.UNPACK_SKIP_ROWS),C=B.getParameter(z.UNPACK_SKIP_IMAGES);B.pixelStorei(z.UNPACK_ROW_LENGTH,h.width),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,h.height),B.pixelStorei(z.UNPACK_SKIP_PIXELS,l),B.pixelStorei(z.UNPACK_SKIP_ROWS,u),B.pixelStorei(z.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=V.get(e),r=V.get(t),h=V.get(n.__renderTarget),g=V.get(r.__renderTarget);B.bindFramebuffer(z.READ_FRAMEBUFFER,h.__webglFramebuffer),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(e).__webglTexture,i,d+n),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(t).__webglTexture,a,m+n)),z.blitFramebuffer(l,u,o,s,f,p,o,s,z.DEPTH_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||V.has(e)){let n=V.get(e),r=V.get(t);B.bindFramebuffer(z.READ_FRAMEBUFFER,re),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,ie);for(let e=0;e<c;e++)w?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,n.__webglTexture,i),T?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,r.__webglTexture,a),i===0?T?z.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):z.copyTexSubImage2D(v,a,f,p,l,u,o,s):z.blitFramebuffer(l,u,o,s,f,p,o,s,z.COLOR_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?z.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h);B.pixelStorei(z.UNPACK_ROW_LENGTH,y),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,b),B.pixelStorei(z.UNPACK_SKIP_PIXELS,x),B.pixelStorei(z.UNPACK_SKIP_ROWS,S),B.pixelStorei(z.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&z.generateMipmap(v),B.unbindTexture()},this.initRenderTarget=function(e){V.get(e).__webglFramebuffer===void 0&&H.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?H.setTextureCube(e,0):e.isData3DTexture?H.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?H.setTexture2DArray(e,0):H.setTexture2D(e,0),B.unbindTexture()},this.resetState=function(){ae=0,oe=0,L=null,B.reset(),et.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return We}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Y._getDrawingBufferColorSpace(e),t.unpackColorSpace=Y._getUnpackColorSpace()}},vl={type:`change`},yl={type:`start`},bl={type:`end`},xl=new Rr,Sl=new jr,Cl=Math.cos(70*Dt.DEG2RAD),wl=new q,Tl=2*Math.PI,$={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},El=1e-6,Dl=class extends Za{constructor(e,t=null){super(e,t),this.state=$.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:r.ROTATE,MIDDLE:r.DOLLY,RIGHT:r.PAN},this.touches={ONE:i.ROTATE,TWO:i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new Ot,this._lastTargetPosition=new q,this._quat=new Ot().setFromUnitVectors(e.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xa,this._sphericalDelta=new Xa,this._scale=1,this._panOffset=new q,this._rotateStart=new K,this._rotateEnd=new K,this._rotateDelta=new K,this._panStart=new K,this._panEnd=new K,this._panDelta=new K,this._dollyStart=new K,this._dollyEnd=new K,this._dollyDelta=new K,this._dollyDirection=new q,this._mouse=new K,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=kl.bind(this),this._onPointerDown=Ol.bind(this),this._onPointerUp=Al.bind(this),this._onContextMenu=Ll.bind(this),this._onMouseWheel=Nl.bind(this),this._onKeyDown=Pl.bind(this),this._onTouchStart=Fl.bind(this),this._onTouchMove=Il.bind(this),this._onMouseDown=jl.bind(this),this._onMouseMove=Ml.bind(this),this._interceptControlDown=Rl.bind(this),this._interceptControlUp=zl.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=$.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),e.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(vl),this.update(),this.state=$.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;wl.copy(t).sub(this.target),wl.applyQuaternion(this._quat),this._spherical.setFromVector3(wl),this.autoRotate&&this.state===$.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Tl:n>Math.PI&&(n-=Tl),r<-Math.PI?r+=Tl:r>Math.PI&&(r-=Tl),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(wl.setFromSpherical(this._spherical),wl.applyQuaternion(this._quatInverse),t.copy(this.target).add(wl),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=wl.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new q(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new q(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=wl.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(xl.origin.copy(this.object.position),xl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xl.direction))<Cl?this.object.lookAt(this.target):(Sl.setFromNormalAndCoplanarPoint(this.object.up,this.target),xl.intersectPlane(Sl,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>El||8*(1-this._lastQuaternion.dot(this.object.quaternion))>El||this._lastTargetPosition.distanceToSquared(this.target)>El?(this.dispatchEvent(vl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?Tl/60/60*this.autoRotateSpeed:Tl/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){wl.setFromMatrixColumn(t,0),wl.multiplyScalar(-e),this._panOffset.add(wl)}_panUp(e,t){this.screenSpacePanning===!0?wl.setFromMatrixColumn(t,1):(wl.setFromMatrixColumn(t,0),wl.crossVectors(this.object.up,wl)),wl.multiplyScalar(e),this._panOffset.add(wl)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;wl.copy(r).sub(this.target);let i=wl.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Tl*this._rotateDelta.x/t.clientHeight),this._rotateUp(Tl*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Tl*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Tl*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Tl*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Tl*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Tl*this._rotateDelta.x/t.clientHeight),this._rotateUp(Tl*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new K,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Ol(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function kl(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function Al(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(bl),this.state=$.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function jl(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case r.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=$.DOLLY;break;case r.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=$.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=$.ROTATE}break;case r.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=$.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=$.PAN}break;default:this.state=$.NONE}this.state!==$.NONE&&this.dispatchEvent(yl)}function Ml(e){switch(this.state){case $.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case $.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case $.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function Nl(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===$.NONE&&(e.preventDefault(),this.dispatchEvent(yl),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(bl))}function Pl(e){this.enabled!==!1&&this._handleKeyDown(e)}function Fl(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case i.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=$.TOUCH_ROTATE;break;case i.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=$.TOUCH_PAN;break;default:this.state=$.NONE}break;case 2:switch(this.touches.TWO){case i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=$.TOUCH_DOLLY_PAN;break;case i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=$.TOUCH_DOLLY_ROTATE;break;default:this.state=$.NONE}break;default:this.state=$.NONE}this.state!==$.NONE&&this.dispatchEvent(yl)}function Il(e){switch(this._trackPointer(e),this.state){case $.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case $.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case $.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case $.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=$.NONE}}function Ll(e){this.enabled!==!1&&e.preventDefault()}function Rl(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function zl(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var Bl={land:[-.13602,1.78729,.16463,-.21189,1.78616,.06874,-.24392,1.78324,.02381,-.13209,1.78256,.21219,-.18856,1.77964,.19322,-.26993,1.77851,.0635,-.11561,1.77784,.25677,-.24122,1.77671,.15845,.22176,1.77536,.19726,-.17871,1.77491,.24031,-.23887,1.77199,.20737,-.31902,1.77086,.04769,-.15804,1.77019,.28541,.1318,1.76951,.30242,-.29185,1.76906,.15888,-.22588,1.76726,.25644,.34093,1.76704,-.03664,.06675,1.76659,.33869,-.12754,1.76546,.32692,-.28761,1.76434,.2107,-.36127,1.76321,.02378,-.20276,1.76254,.30389,.35584,1.76231,-.08738,-.33911,1.76141,.14976,-.27325,1.75961,.26286,-.37673,1.75849,.07616,-.17013,1.75781,.34807,-.33469,1.75669,.20502,-.249,1.75489,.31363,-.38306,1.75376,.13259,-.32032,1.75196,.26081,-.41497,1.75084,.04869,-.21528,1.75016,.36137,.40374,1.74994,-.12131,-.37976,1.74904,.19145,-.29606,1.74724,.31545,.43229,1.74701,-.03269,.38627,1.74589,.20657,-.17271,1.74544,.4045,-.41974,1.74499,-.13724,-.36649,1.74431,.25111,-.4484,1.74319,.01532,-.26219,1.74251,.3673,.44228,1.74229,-.09391,-.45226,1.74026,-.08335,-.34321,1.73959,.30991,.46326,1.73936,.00333,.28606,1.73869,-.36761,-.46007,1.73846,.07798,.39262,1.73824,.25373,-.21922,1.73779,.41478,.4426,1.73756,-.15805,-.43389,1.73734,-.18276,-.31008,1.73486,.3662,.47681,1.73464,-.06067,-.16787,1.73306,.45641,-.38979,1.73194,.29742,-.26751,1.73014,.4184,.48064,1.72991,-.12802,-.44158,1.72969,-.23063,-.50005,1.72789,-.06597,-.35824,1.72721,.35833,.50697,1.72699,-.02227,-.21615,1.72541,.46501,.47419,1.72519,-.19717,-.31686,1.72249,.4155,.51503,1.72226,-.09247,-.44286,1.72204,-.28011,.45715,1.72046,-.2665,-.40597,1.71956,.34394,.5324,1.71934,.02064,.34171,1.71866,-.41163,-.53073,1.71844,.0728,.44111,1.71821,.30523,-.26621,1.71776,.46736,.51267,1.71754,-.16501,-.49015,1.71731,-.22493,.5246,1.71641,.13684,.42946,1.71574,-.33437,-.54325,1.71551,-.0436,-.36655,1.71484,.40617,.54535,1.71461,-.05196,.29169,1.71394,-.46619,.49949,1.71281,-.23829,-.52994,1.71259,-.16189,-.45261,1.71191,.32327,.55279,1.71169,.06745,-.55884,1.71079,.03002,-.31736,1.71011,.46346,.54774,1.70989,-.12752,.53382,1.70876,.18752,.47532,1.70809,-.31066,-.561,1.70786,-.09211,-.41591,1.70719,.39055,.57116,1.70696,-.00704,.34313,1.70629,-.45918,-.56384,1.70606,.10692,-.25911,1.70539,.51431,.53909,1.70516,-.20445,-.53623,1.70494,-.21365,.56784,1.70404,.11752,-.36892,1.70246,.45334,.57891,1.70224,-.08517,.28559,1.70156,-.51296,-.5577,1.70134,.18553,-.23409,1.70089,-.54054,.51914,1.70044,-.28107,-.57329,1.70021,-.14358,-.46428,1.69954,.36881,.59211,1.69931,.04171,.39464,1.69864,-.44597,-.59288,1.69841,.06233,-.31227,1.69774,.51007,.57542,1.69751,-.16535,-.53656,1.69729,-.26705,.21958,1.69684,-.55904,.48789,1.69571,-.3557,-.60066,1.69549,-.06735,-.42022,1.69481,.43707,.60572,1.69459,-.03846,.33906,1.69391,-.50566,-.59219,1.69369,.14397,-.1956,1.69324,-.57852,-.24681,1.69301,.55928,.56035,1.69279,-.24593,-.57989,1.69256,-.19737,.29457,1.69234,.53779,.60786,1.69166,.09373,.44557,1.69099,-.42665,-.36589,1.69009,.49973,.60796,1.68986,-.12145,.27434,1.68919,-.55802,-.57979,1.68896,.22637,.581,1.68874,.22494,-.27674,1.68851,-.55888,.53358,1.68806,-.32517,-.61369,1.68784,-.12077,.06679,1.68739,-.62311,-.47061,1.68716,.41475,.62777,1.68694,.01208,.39268,1.68626,-.49226,-.30208,1.68536,.55525,.59838,1.68514,-.20557,-.58063,1.68491,-.25286,.25758,1.68469,.57921,.20151,1.68446,-.60165,.61812,1.68401,.14842,-.35586,1.68379,-.52747,.49526,1.68334,-.40136,-.6369,1.68311,-.03862,-.41933,1.68244,.48329,.63624,1.68221,-.07317,-.51905,1.68199,-.37617,.32996,1.68154,-.55096,-.61603,1.68131,.18355,.57876,1.68109,.28104,-.23714,1.68086,-.59872,.57675,1.68041,-.2891,.33903,1.67996,.55026,.64471,1.67929,.06592,-.43124,1.67906,-.48454,.44578,1.67861,-.4728,-.35789,1.67771,.54516,.6327,1.67749,-.16038,-.57538,1.67726,-.3094,.21546,1.67704,.61735,.25837,1.67681,-.60129,.62267,1.67636,.20517,-.32082,1.67614,-.5724,.5431,1.67569,-.37028,.03668,1.67501,-.65802,-.47194,1.67479,.46082,.65985,1.67456,-.02102,-.50118,1.67434,-.43059,.38579,1.67389,-.53783,.57048,1.67344,.33787,-.19259,1.67321,-.63503,.61682,1.67276,-.24779,.30128,1.67231,.5938,.1791,1.67209,-.64191,.65622,1.67164,.12251,-.40146,1.67141,-.53405,.49774,1.67096,-.44737,-.66977,1.67074,-.00635,-.41359,1.67006,.52899,.66285,1.66984,-.11078,-.56406,1.66961,-.36637,.31618,1.66916,-.59492,-.63553,1.66894,.22529,.62131,1.66871,.26339,-.28045,1.66849,-.61441,.58851,1.66804,-.33364,-.65985,1.66781,-.15164,.38444,1.66759,.558,.09353,1.66736,-.67168,-.5231,1.66714,.43245,.67839,1.66691,.0345,-.47731,1.66669,-.48408,.44121,1.66624,-.51864,-.67622,1.66601,.08446,.55612,1.66579,.39482,.65327,1.66511,-.2016,-.61837,1.66489,-.29285,.25836,1.66466,.63415,.23805,1.66444,-.64264,-.36603,1.66376,-.58131,.54795,1.66331,-.41611,-.68566,1.66309,-.06336,.00318,1.66264,-.68966,-.46857,1.66241,.50678,.68837,1.66219,-.05722,-.54666,1.66196,-.42313,.3743,1.66151,-.58247,.61392,1.66106,.32245,-.23506,1.66084,-.65297,.63089,1.66039,-.2917,-.66275,1.66016,-.21124,.34627,1.65994,.60391,.15272,1.65971,-.67973,.69154,1.65926,.09285,-.44754,1.65904,-.53601,.49558,1.65859,-.49344,-.69928,1.65836,.02911,.53569,1.65814,.45123,-.40328,1.65769,.57396,.6856,1.65746,-.15092,-.60794,1.65724,-.35209,.2106,1.65701,.67079,.29805,1.65679,-.63736,-.65079,1.65656,.26884,.66197,1.65634,.24155,-.3252,1.65611,-.62573,.59579,1.65566,-.37922,-.696,1.65544,-.12292,.4305,1.65521,.5612,.06169,1.65499,-.70513,-.52219,1.65476,.47863,.70888,1.65454,-19e-5,-.52322,1.65431,-.47905,.43211,1.65386,-.56393,.60043,1.65341,.38172,.66973,1.65274,-.24479,-.65967,1.65251,-.27209,.30285,1.65229,.64671,.21369,1.65206,-.68193,.69901,1.65161,.15348,-.41206,1.65139,-.58577,.5483,1.65094,-.46236,-.71713,1.65071,-.02946,.50926,1.65049,.5065,-.0334,1.65026,-.718,-.4607,1.65004,.55238,.71335,1.64981,-.09618,-.59139,1.64959,-.41124,.35847,1.64914,-.62597,-.68765,1.64891,.21959,.65585,1.64869,.3028,-.27926,1.64846,-.66677,.64071,1.64801,-.33696,-.70055,1.64779,-.18446,.39224,1.64756,.60966,.12268,1.64734,-.715,-.57384,1.64711,.44466,.72401,1.64689,.05978,-.49382,1.64666,-.53352,.48899,1.64621,-.53933,.58083,1.64576,.44058,.70451,1.64509,-.19328,-.65049,1.64486,-.3336,.25449,1.64464,.68586,.27583,1.64441,-.6781,-.6619,1.64419,.31391,.70059,1.64396,.21579,-.37108,1.64374,-.63279,.59875,1.64329,-.42557,-.72946,1.64306,-.09071,.02663,1.64261,-.73561,-.51688,1.64239,.52478,.73612,1.64216,-.03784,-.56874,1.64194,-.46966,.41871,1.64149,-.60844,.64359,1.64104,.3644,-.22857,1.64081,-.70391,.68215,1.64036,-.28962,-.6991,1.64014,-.24739,.34862,1.63991,.6551,.18558,1.63969,-.71902,.73347,1.63924,.12217,-.45862,1.63901,-.58592,.54431,1.63856,-.50876,-.74552,1.63834,.00748,.55514,1.63811,.49841,-.07272,1.63789,-.74299,.73476,1.63744,-.13758,-.63514,1.63721,-.39513,.20156,1.63699,.72087,.33854,1.63676,-.66813,-.7014,1.63654,.26415,.69608,1.63631,.2792,-.32489,1.63609,-.67651,-.21756,1.63586,.71877,.64636,1.63564,-.38329,-.73599,1.63541,-.15408,.08927,1.63496,-.74762,-.5712,1.63474,.49129,.75353,1.63451,.02359,-.54004,1.63429,-.52674,.47813,1.63384,-.58478,.62515,1.63339,.42572,-.1735,1.63316,-.73667,.7196,1.63271,-.23755,-.69151,1.63249,-.31112,.24979,1.63204,-.71698,.73701,1.63159,.18639,-.41781,1.63136,-.63568,.59748,1.63091,-.47238,-.76013,1.63069,-.05531,.52347,1.63046,.55459,-.50734,1.63001,.57067,.76006,1.62979,-.07814,-.61361,1.62956,-.45608,.40119,1.62911,-.65195,-.73667,1.62889,.20986,.68538,1.62866,.34309,-.2738,1.62844,-.7164,-.28221,1.62821,.71364,.69058,1.62799,-.3358,-.7365,1.62776,-.21901,.39538,1.62754,.65939,.15397,1.62731,-.75376,.76528,1.62686,.08759,-.50544,1.62664,-.58188,.53612,1.62619,-.55505,.60054,1.62574,.48614,.75257,1.62506,-.18113,-.67769,1.62484,-.37502,.24653,1.62461,.73475,.31472,1.62439,-.70874,-.71125,1.62416,.3102,.73443,1.62394,.25186,-.37164,1.62371,-.68223,.64791,1.62326,-.43039,-.76893,1.62304,-.12038,.48597,1.62281,.60854,.05275,1.62259,-.77745,-.5644,1.62236,.53795,.78002,1.62214,-.01543,-.58594,1.62191,-.51582,.46318,1.62146,-.62955,.66842,1.62101,.40685,.73087,1.62034,-.28342,-.73081,1.62011,-.28488,.34665,1.61989,.70413,.22016,1.61966,-.75381,.77108,1.61921,.15359,-.46509,1.61899,-.63448,.59209,1.61854,-.51939,-.78789,1.61831,-.01698,.56983,1.61809,.54505,.78063,1.61741,-.1208,-.6576,1.61719,-.43849,.18881,1.61696,.76797,.37976,1.61674,-.69422,-.7494,1.61651,.25552,.7256,1.61629,.31798,-.32043,1.61606,-.72503,-.25362,1.61584,.7515,.69504,1.61561,-.38303,-.77168,1.61539,-.18717,.44284,1.61516,.65965,.11912,1.61494,-.78599,-.61912,1.61471,.49939,.79431,1.61449,.05001,-.55224,1.61426,-.57375,.52387,1.61381,-.60097,.6452,1.61336,.46986,.76676,1.61269,-.22654,-.71882,1.61246,-.3511,.28723,1.61201,-.7476,.77072,1.61156,.22102,-.41924,1.61134,-.68398,.64543,1.61089,-.47797,-.79924,1.61066,-.08359,.53317,1.61044,.60185,-.55355,1.60999,.5844,.80338,1.60976,-.05703,-.63126,1.60954,-.5009,.12719,1.60931,.7962,.44429,1.60909,-.67338,.71044,1.60864,.38414,-.26452,1.60841,-.76357,.73834,1.60796,-.33063,-.76819,1.60774,-.25509,.39435,1.60751,.70739,.18716,1.60729,-.78842,.80264,1.60684,.11764,-.51266,1.60661,-.62927,.58268,1.60616,-.56633,.61577,1.60571,.53152,.79778,1.60504,-.16556,-.70047,1.60481,-.41704,.23492,1.60459,.7811,.35459,1.60436,-.73504,-.75839,1.60414,.30264,.76405,1.60391,.28928,-.36818,1.60369,-.72981,.69558,1.60324,-.43104,-.8045,1.60301,-.15211,.49073,1.60279,.65594,.08128,1.60256,-.81559,-.61118,1.60234,.54678,.82045,1.60211,.00967,-.59876,1.60189,-.56164,.50768,1.60144,-.64626,.68891,1.60099,.44972,.77729,1.60031,-.27353,-.75832,1.60009,-.32354,.34079,1.59986,.7512,.25627,1.59964,-.78453,.80478,1.59919,.1869,-.46742,1.59896,-.68179,.63899,1.59851,-.52578,-.82677,1.59829,-.04396,.58024,1.59806,.5912,.82351,1.59739,-.10093,-.67576,1.59716,-.4821,.17272,1.59694,.81238,.42161,1.59671,-.71607,.75097,1.59626,.35777,-.31223,1.59604,-.77148,.74199,1.59559,-.37888,-.80346,1.59536,-.22195,.44275,1.59514,.70676,.15101,1.59491,-.82064,.83156,1.59446,.07877,-.56024,1.59424,-.62011,.56934,1.59379,-.61294,.66104,1.59334,.5141,.81144,1.59266,-.21213,-.742,1.59244,-.3919,.32586,1.59199,-.7742,.80054,1.59154,.25719,-.41678,1.59131,-.73077,.69223,1.59086,-.47955,-.83478,1.59064,-.11405,.53878,1.59041,.64831,-.59933,1.58996,.59399,.84358,1.58974,-.03317,-.64476,1.58951,-.54565,.1069,1.58929,.83829,.48768,1.58906,-.69069,-.82657,1.58884,.17996,.73141,1.58861,.42585,-.25178,1.58839,-.80847,.78415,1.58794,-.32182,-.79599,1.58771,-.29253,.38953,1.58749,.75376,.22204,1.58726,-.81933,.83643,1.58681,.14971,-.51589,1.58659,-.67572,.62865,1.58614,-.57355,.62693,1.58569,.57667,.84033,1.58501,-.14688,-.71921,1.58479,-.45956,.22,1.58456,.82508,.3953,1.58434,-.75737,.7898,1.58389,.3279,-.36106,1.58366,-.77566,.74185,1.58321,-.4279,-.83647,1.58299,-.18568,.4916,1.58276,.70228,.11195,1.58254,-.85032,.85768,1.58209,.03721,-.60758,1.58186,-.60709,.55218,1.58141,-.65897,.7054,1.58096,.49293,.82156,1.58029,-.26026,-.78197,1.58006,-.36322,.33141,1.57984,.79642,.29374,1.57961,-.8115,.83487,1.57916,.22188,-.46595,1.57894,-.72791,.68503,1.57849,-.52831,-.8624,1.57826,-.07321,.58673,1.57804,.63683,.8636,1.57736,-.07827,-.68999,1.57714,-.52589,.15361,1.57691,.85425,.46399,1.57669,-.73401,-.83834,1.57646,.22792,.77249,1.57624,.39841,-.30063,1.57601,-.81597,.7873,1.57556,-.37116,-.83164,1.57534,-.25825,.43898,1.57511,.75254,.18473,1.57489,-.85182,.86552,1.57444,.10965,-.5644,1.57421,-.66581,.61449,1.57376,-.62102,.67299,1.57331,.55836,.85378,1.57264,-.19463,-.76137,1.57241,-.43341,.36552,1.57196,-.79708,.82674,1.57151,.29471,-.41073,1.57129,-.77612,.73791,1.57084,-.47745,-.86702,1.57061,-.14647,.54062,1.57039,.69398,.88088,1.56971,-.00681,-.65443,1.56949,-.59028,.08387,1.56926,.87771,.53129,1.56904,-.70417,.7486,1.56859,.46811,-.23589,1.56836,-.85123,.8281,1.56791,-.30969,-.82017,1.56769,-.33116,.38124,1.56746,.79857,.25842,1.56724,-.84675,.86688,1.56679,.18357,-.51544,1.56656,-.72125,.67403,1.56611,-.57704,.63432,1.56566,.62156,.88039,1.56499,-.12539,-.7342,1.56476,-.50246,.20206,1.56454,.86683,.43674,1.56431,-.77601,-.8466,1.56409,.27731,.81194,1.56386,.36755,-.35057,1.56364,-.81984,.78675,1.56319,-.42128,-.86507,1.56296,-.2209,.48888,1.56274,.74756,.8919,1.56206,.06696,-.61269,1.56184,-.65213,.59659,1.56139,-.66795,.71817,1.56094,.53638,.86376,1.56026,-.24391,-.80202,1.56004,-.40379,.86159,1.55914,.25837,-.46099,1.55891,-.77284,.73021,1.55846,-.52724,-.89497,1.55824,-.10452,.58957,1.55801,.68191,.90105,1.55734,-.05305,-.70054,1.55711,-.56977,.13174,1.55689,.89373,.50678,1.55666,-.74831,-.87954,1.55644,.20955,.79043,1.55621,.4398,-.28588,1.55599,-.85859,.83102,1.55554,-.36016,-.85642,1.55531,-.2959,.89639,1.55441,.14245,.65928,1.55374,-.6255,.68132,1.55329,.60258,.89388,1.55261,-.17428,-.77717,1.55239,-.4755,.25197,1.55216,.87596,.40607,1.55194,-.81645,.84954,1.55149,.33342,-.40137,1.55126,-.82005,.78248,1.55081,-.47192,-.89613,1.55059,-.18065,.53897,1.55036,.73884,.91542,1.54969,.02183,-.66053,1.54946,-.63472,.57502,1.54901,-.71408,.76225,1.54856,.51081,.87024,1.54789,-.29449,-.84096,1.54766,-.37085,.29615,1.54721,-.87088,.89417,1.54676,.21906,.71878,1.54609,-.57704,.63819,1.54564,.66612,.91806,1.54496,-.1013,-.74568,1.54474,-.54567,.18132,1.54451,.90642,-.88782,1.54406,.26008,.83067,1.54384,.4081,-.33698,1.54361,-.86238,.83029,1.54316,-.41142,-.8905,1.54294,-.25759,.48282,1.54271,.79178,.92324,1.54204,.09871,-.61434,1.54181,-.6967,.64084,1.54136,-.67344,.72747,1.54091,.57998,.90398,1.54024,-.22471,-.81868,1.54001,-.44511,-.85238,1.53934,.37934,.88511,1.53911,.29618,.7745,1.53844,-.52284,-.92463,1.53821,-.1377,.58901,1.53799,.7264,.93596,1.53731,-.0255,-.70765,1.53709,-.61367,.10731,1.53686,.93088,.80499,1.53619,.48179,.87316,1.53551,-.34611,-.87798,1.53529,-.33473,.42145,1.53506,.84022,.9243,1.53439,.17696,.70364,1.53371,-.62659,.68624,1.53326,.64667,.93181,1.53259,-.15132,-.78961,1.53236,-.51806,.23238,1.53214,.91573,-.89259,1.53169,.31179,.86912,1.53146,.37318,-.38893,1.53124,-.86258,.82591,1.53079,-.46321,-.92225,1.53056,-.21642,.53405,1.53034,.78285,.9473,1.52966,.05255,.61879,1.52899,-.72062,.77255,1.52854,.55384,.91061,1.52786,-.27644,-.85851,1.52764,-.41143,.33505,1.52719,-.89187,-.84983,1.52696,.43148,.91844,1.52674,.25599,.76284,1.52606,-.57377,-.95043,1.52584,-.09224,.63875,1.52561,.71029,.9534,1.52494,-.07483,-.75383,1.52471,-.58906,-.92718,1.52404,.24011,.84618,1.52381,.44942,.87248,1.52314,-.39853,-.91288,1.52291,-.2956,.47363,1.52269,.83492,.95183,1.52201,.13227,.68486,1.52134,-.67565,.73347,1.52089,.62363,.94223,1.52021,-.20287,-.83211,1.51999,-.48706,-.8938,1.51931,.36442,.90556,1.51909,.33516,-.44149,1.51886,-.85915,.81786,1.51841,-.51529,-.95149,1.51819,-.17256,.58525,1.51796,.77024,.96841,1.51729,.0042,-.7115,1.51706,-.65749,.81633,1.51616,.52427,.91374,1.51549,-.32921,-.89647,1.51526,-.3746,.40813,1.51504,.88209,.29501,1.51481,-.92645,.94938,1.51436,.21304,.74751,1.51369,-.62448,-.97337,1.51346,-.04448,.68794,1.51324,.69055,.96762,1.51256,-.12592,-.79884,1.51234,-.56097,.21019,1.51211,.95359,-.93223,1.51166,.29296,.8856,1.51144,.41384,-.37361,1.51121,-.90369,.86818,1.51076,-.4515,-.94549,1.51054,-.25362,.52605,1.51031,.82597,.9766,1.50964,.08517,.66249,1.50896,-.72397,.77967,1.50851,.59708,.94923,1.50784,-.25573,-.87298,1.50761,-.45279,.375,1.50716,-.90986,-.89142,1.50694,.41774,.93981,1.50671,.29422,.80616,1.50604,-.56742,-.97806,1.50581,-.1262,.63616,1.50559,.75399,.98646,1.50491,-.04615,-.75883,1.50469,-.63253,.85859,1.50379,.49137,.9133,1.50311,-.3828,-.93234,1.50289,-.33477,.4615,1.50266,.87694,.97774,1.50199,.16749,-.08142,1.50154,.98932,.72856,1.50131,-.67473,-.99333,1.50109,.00539,.73634,1.50086,.66724,.97855,1.50019,-.17857,-.84246,1.49996,-.52951,.26361,1.49974,.95984,-.93375,1.49929,.34676,.92307,1.49906,.37518,.86025,1.49839,-.50478,-.97563,1.49816,-.20895,.57845,1.49794,.81338,.99846,1.49726,.03587,.82459,1.49614,.56712,.95274,1.49546,-.30965,-.91199,1.49524,-.41538,.39202,1.49501,.92264,.33428,1.49479,-.94545,-.88542,1.49456,.4715,.9717,1.49434,.25051,.79082,1.49366,-.61934,-1.00181,1.49344,-.07753,.68656,1.49321,.73413,1.00134,1.49254,-.09828,-.80501,1.49231,-.60412,-.97019,1.49164,.27155,.89912,1.49141,.45527,-.35557,1.49119,-.94336,.90926,1.49074,-.43697,-.96595,1.49051,-.29209,.51513,1.49029,.86815,1.00338,1.48961,.11953,.70605,1.48894,-.72427,-1.01018,1.48871,.05714,.78373,1.48849,.64044,.98607,1.48781,-.23253,-.88446,1.48759,-.49478,.41584,1.48714,-.92493,-.93171,1.48691,.40125,.95837,1.48669,.3336,.84868,1.48601,-.55813,-1.00313,1.48579,-.16178,.6306,1.48556,.79715,1.01729,1.48489,-.01544,-.76079,1.48466,-.676,.86803,1.48376,.53384,.95271,1.48309,-.36441,-.94896,1.48286,-.37496,.44659,1.48264,.91779,1.00104,1.48196,.2042,.77187,1.48129,-.67083,-1.02261,1.48106,-.02675,.73621,1.48084,.71072,1.01293,1.48016,-.15197,-.84983,1.47994,-.57234,-.9722,1.47926,.3265,.93772,1.47904,.4161,.90161,1.47836,-.49147,-.99712,1.47814,-.24671,.56877,1.47791,.85573,1.02614,1.47724,.06935,-1.02382,1.47634,.11058,.82989,1.47611,.61023,.99014,1.47544,-.28758,-.92465,1.47521,-.45692,.37328,1.47499,.96181,.37456,1.47476,-.96165,-.92607,1.47454,.45622,.99133,1.47431,.28924,.83348,1.47364,-.61131,-1.02784,1.47341,-.11228,.68226,1.47319,.77733,1.03296,1.47251,-.06855,-.80823,1.47229,-.64741,.15869,1.47206,1.02364,-1.00647,1.47161,.24773,.90976,1.47139,.49735,.9491,1.47071,-.41977,-.98369,1.47049,-.33169,.50145,1.47026,.90933,1.02769,1.46959,.15547,-.06506,1.46914,1.03798,.74935,1.46891,-.72164,-1.04033,1.46869,.02595,.78487,1.46846,.68381,1.02115,1.46779,-.20701,-.89307,1.46756,-.5373,-.97066,1.46689,.38217,.97419,1.46666,.37398,.89033,1.46599,-.54606,-1.02568,1.46576,-.19882,.62219,1.46554,.83969,1.04589,1.46486,.01715,.87458,1.46374,.57669,.99069,1.46306,-.3435,-.96282,1.46284,-.41604,.42905,1.46261,.95743,-.91681,1.46216,.51142,1.02179,1.46194,.24226,-.1521,1.46149,1.03967,.81468,1.46126,-.66408,-1.04961,1.46104,-.06066,.7332,1.46081,.75395,1.04538,1.46014,-.12324,-.85433,1.45991,-.61545,-1.00912,1.45924,.3038,.94959,1.45901,.45777,.94189,1.45834,-.47549,-1.01601,1.45811,-.28571,.55634,1.45789,.89724,1.05148,1.45721,.10449,-.01218,1.45676,1.05721,.72333,1.45654,-.77156,-1.05485,1.45631,.08035,.83233,1.45609,.65348,1.02592,1.45541,-.26316,-.93452,1.45519,-.4991,.35205,1.45496,.99957,.41573,1.45474,-.97514,-.96553,1.45451,.43835,1.00834,1.45429,.32908,.87543,1.45361,-.60052,-1.05147,1.45339,-.14859,.67515,1.45316,.82006,1.06251,1.45249,-.03688,-1.04104,1.45159,.22164,.91761,1.45136,.53994,.98766,1.45069,-.40004,-.99878,1.45046,-.37229,.48513,1.45024,.94945,-.90392,1.44979,.56661,1.04956,1.44956,.19285,.79232,1.44889,-.71621,-1.06833,1.44866,-.00709,.78319,1.44844,.72708,1.05444,1.44776,-.1793,-.89888,1.44754,-.58021,.27096,1.44731,1.03531,-1.00823,1.44686,.36064,.98733,1.44664,.41525,.93106,1.44596,-.53134,-1.04575,1.44574,-.23719,.61105,1.44551,.88154,1.07228,1.44484,.05147,.69386,1.44416,-.82034,-1.06606,1.44394,.13624,.87835,1.44371,.61983,1.02719,1.44304,-.3202,-.97398,1.44281,-.45787,.40901,1.44259,.99582,.37118,1.44236,-1.01085,-.95678,1.44214,.49478,1.04001,1.44191,.28154,.85693,1.44124,-.6546,-1.07435,1.44101,-.09619,.72742,1.44079,.79686,1.07588,1.44011,-.09251,-.85605,1.43989,-.65871,.18632,1.43966,1.06426,-1.04448,1.43921,.27881,.95876,1.43899,.50009,.98103,1.43831,-.45698,-1.03235,1.43809,-.32581,.5413,1.43786,.93784,1.07451,1.43719,.14116,-.04671,1.43674,1.08333,.76643,1.43651,-.76747,-1.08386,1.43629,.04821,.832,1.43606,.69678,1.06006,1.43539,-.23652,-.94168,1.43516,-.54181,.32847,1.43494,1.03589,-1.00375,1.43449,.418,1.02277,1.43426,.3699,.9166,1.43359,-.58709,-1.07274,1.43336,-.1863,.66534,1.43314,.86223,1.08997,1.43246,-.0034,.09873,1.43201,1.08609,.66102,1.43179,-.86778,.92274,1.43134,.58294,1.02488,1.43066,-.37791,-1.01127,1.43044,-.41375,.46632,1.43021,.98845,-.94441,1.42976,.55125,1.06903,1.42954,.23153,-.13726,1.42909,1.08576,.83485,1.42886,-.70808,-1.09419,1.42864,-.04183,.77877,1.42841,.77016,1.08591,1.42774,-.14956,-.90198,1.42751,-.62341,.24405,1.42729,1.06925,-1.04437,1.42684,.33678,.99784,1.42661,.45726,.97078,1.42594,-.51409,-1.06337,1.42571,-.27676,.59731,1.42549,.92261,1.09648,1.42481,.0874,.0088,1.42436,1.10051,.73709,1.42414,-.81764,-1.0961,1.42391,.10504,.87941,1.42369,.66313,1.06217,1.42301,-.29466,-.98251,1.42279,-.50034,.3866,1.42256,1.03289,.41275,1.42234,-1.02303,-.99566,1.42211,.47567,1.05575,1.42189,.3219,.89853,1.42121,-.6425,-1.09683,1.42099,-.13322,.71897,1.42076,.83936,1.10443,1.42009,-.05992,.15633,1.41964,1.09553,-1.07823,1.41919,.25164,.96529,1.41896,.54292,1.01898,1.41829,-.43606,-1.04619,1.41806,-.36687,.52374,1.41784,.97746,-.92841,1.41739,.60751,1.09523,1.41716,.17922,-.08283,1.41671,1.10728,.80924,1.41649,-.76072,-1.11085,1.41626,.0143,.82898,1.41604,.74001,1.09251,1.41536,-.20779,-.94618,1.41514,-.58491,.30266,1.41491,1.07071,-1.04068,1.41446,.39531,1.03466,1.41424,.41158,.9569,1.41356,-.57113,-1.09166,1.41334,-.2253,.65293,1.41311,.90377,1.11535,1.41244,.03175,.70436,1.41176,-.86649,-1.10496,1.41154,.16318,.92522,1.41131,.62622,1.06072,1.41064,-.35351,-1.0212,1.41041,-.45596,.44512,1.41019,1.02628,-.98393,1.40974,.53341,1.0861,1.40951,.27139,.87687,1.40884,-.69734,-1.1179,1.40861,-.07814,.77172,1.40839,.81295,1.11555,1.40771,-.11789,-.90243,1.40749,-.66678,.21508,1.40726,1.10152,-1.07904,1.40681,.31071,1.00579,1.40659,.4999,1.00944,1.40591,-.49441,-1.07857,1.40569,-.31739,.58106,1.40546,.96283,1.11848,1.40479,.12479,-.02654,1.40434,1.12567,.78015,1.40411,-.81231,-1.12424,1.40389,.07201,.87784,1.40366,.70649,1.0956,1.40299,-.26699,-.98846,1.40276,-.54333,.36193,1.40254,1.06859,-1.03337,1.40209,.4542,1.06905,1.40186,.36321,.93939,1.40119,-.62787,-1.11707,1.40096,-.17162,.70794,1.40074,.88134,1.131,1.40006,-.0256,.12444,1.39961,1.12499,-1.11035,1.39916,.22243,.96922,1.39894,.58616,1.05567,1.39826,-.41284,-1.05754,1.39804,-.40878,.50379,1.39781,1.01603,1.11366,1.39714,.21854,.85165,1.39646,-.75139,-1.13581,1.39624,-.02124,.82337,1.39601,.78308,1.12324,1.39534,-.1771,-.9481,1.39511,-.62831,.27475,1.39489,1.10399,-1.07627,1.39444,.3704,1.04406,1.39421,.454,.99626,1.39354,-.55273,-1.10825,1.39331,-.26546,.63802,1.39309,.94458,1.13864,1.39241,.06843,.03139,1.39196,1.14081,.74764,1.39174,-.86261,-1.13425,1.39151,.13107,.92512,1.39129,.66968,1.09513,1.39061,-.32695,-1.02861,1.39039,-.49879,.42164,1.39016,1.06286,-1.02242,1.38971,.51319,1.10082,1.38949,.3123,.91827,1.38881,-.68408,-1.13947,1.38859,-.11589,.76211,1.38836,.85536,1.14333,1.38769,-.08444,-.9003,1.38746,-.71021,.18416,1.38724,1.1321,-1.1122,1.38679,.28256,1.01121,1.38656,.54305,1.04697,1.38589,-.47241,-1.09137,1.38566,-.35896,.5624,1.38544,1.00213,1.13828,1.38476,.16353,.82293,1.38409,-.80441,-1.15045,1.38386,.03727,.87369,1.38364,.74981,1.12743,1.38296,-.23731,-.99187,1.38274,-.58672,.33513,1.38251,1.10288,-1.06986,1.38206,.43047,1.07991,1.38184,.40536,.97944,1.38116,-.61081,-1.13507,1.38094,-.21126,.69442,1.38071,.92272,1.15559,1.38004,.01033,.09078,1.37959,1.1526,-1.14078,1.37914,.19129,.97062,1.37891,.62969,1.09104,1.37824,-.38742,-1.06645,1.37801,-.45141,.48155,1.37779,1.05348,1.12981,1.37711,.259,.89358,1.37644,-.73955,-1.15872,1.37621,-.0583,.81521,1.37599,.82588,1.15222,1.37531,-.14455,-.94748,1.37509,-.67188,.24485,1.37486,1.1357,-1.11045,1.37441,.34336,1.05098,1.37419,.49703,1.03461,1.37351,-.53201,-1.12252,1.37329,-.30665,.62071,1.37306,.98459,1.15983,1.37239,.10654,.79077,1.37171,-.8562,-1.16171,1.37149,.0972,.92248,1.37126,.71322,1.12805,1.37059,-.29833,-1.03354,1.37036,-.54212,.39599,1.37014,1.09814,1.11318,1.36946,.35413,.95899,1.36879,-.6684,-1.15889,1.36856,-.15496,.75002,1.36834,.89729,1.16922,1.36766,-.04931,.1514,1.36721,1.16095,-1.14378,1.36676,.25244,1.01413,1.36654,.58661,1.0833,1.36586,-.4482,-1.10179,1.36564,-.40135,.54144,1.36541,1.04043,-.98955,1.36496,.63061,1.15589,1.36474,.20349,.86536,1.36406,-.79404,-1.17471,1.36384,96e-5,.86704,1.36361,.79298,1.15762,1.36294,-.20574,-.99278,1.36271,-.63039,.30629,1.36249,1.1357,-1.10506,1.36204,.40459,1.08837,1.36181,.44823,1.0186,1.36114,-.59141,-1.15083,1.36091,-.25202,.67849,1.36069,.96342,1.17817,1.36001,.04776,.05545,1.35956,1.17835,.75524,1.35934,-.90654,-1.16951,1.35911,.15833,.96952,1.35889,.67339,1.12504,1.35821,-.35993,-1.07293,1.35799,-.49466,.45711,1.35776,1.08974,1.14369,1.35709,.30048,.93494,1.35641,-.72529,-1.17957,1.35619,-.09676,.8046,1.35596,.86832,1.17942,1.35529,-.11028,.21306,1.35484,1.16577,-1.14318,1.35439,.3143,1.05548,1.35416,.54057,1.07188,1.35349,-.50906,-1.13448,1.35326,-.34876,.60108,1.35304,1.02372,-.96767,1.35259,.68857,1.1789,1.35236,.14595,-.04234,1.35191,1.18766,.83365,1.35169,-.84733,-1.18733,1.35146,.06168,.91736,1.35124,.75671,1.15943,1.35056,-.26778,-1.03603,1.35034,-.58586,.36827,1.35011,1.13206,-1.096,1.34966,.46604,1.1232,1.34944,.39678,.99893,1.34876,-.65037,-1.17615,1.34854,-.19524,.73553,1.34831,.93864,1.19319,1.34764,-.01262,.11693,1.34719,1.18803,-1.17376,1.34674,.22044,1.01461,1.34651,.63045,1.11837,1.34584,-.42188,-1.10986,1.34561,-.44446,.51826,1.34539,1.07766,1.1713,1.34471,.24455,.90732,1.34404,-.78124,-1.197,1.34381,-.03683,.85794,1.34359,.83589,1.18612,1.34291,-.17238,-.99125,1.34269,-.67425,.27553,1.34246,1.167,-1.13892,1.34201,.37666,1.09446,1.34179,.4917,1.05679,1.34111,-.56976,-1.16435,1.34089,-.29379,.66024,1.34066,1.00335,1.19872,1.33999,.08656,.01858,1.33954,1.2022,.79855,1.33931,-.8992,-1.19648,1.33909,.12366,.96598,1.33886,.71717,1.15761,1.33819,-.33045,-1.07702,1.33796,-.5384,.43057,1.33774,1.12475,1.1553,1.33706,.34286,.97563,1.33639,-.70868,-1.19835,1.33616,-.1365,.79158,1.33594,.91031,1.2048,1.33526,-.07438,.1795,1.33481,1.19418,-1.17439,1.33436,.28333,1.05757,1.33414,.58449,1.108,1.33346,-.48396,-1.14415,1.33324,-.39167,.57921,1.33301,1.06188,-1.00759,1.33256,.6701,1.19586,1.33234,.18655,.87619,1.33166,-.83605,-1.21106,1.33144,.02462,.90982,1.33121,.80007,1.18923,1.33054,-.23538,-1.03611,1.33031,-.62988,.33859,1.33009,1.16457,-1.13097,1.32964,.43928,1.1309,1.32941,.44013,1.03801,1.32874,-.63008,-1.19125,1.32851,-.23661,.7187,1.32829,.97935,1.21523,1.32761,.02552,.08085,1.32716,1.2133,-1.20207,1.32671,.18669,1.01268,1.32649,.67447,1.15211,1.32581,-.39353,-1.11558,1.32559,-.48816,.49295,1.32536,1.11374,1.18451,1.32469,.28661,.94873,1.32401,-.7661,-1.2173,1.32379,-.07597,.84645,1.32356,.87847,1.21289,1.32289,-.13733,.24294,1.32244,1.19672,-1.17137,1.32199,.34677,1.09819,1.32176,.53566,1.09393,1.32109,-.54594,-1.17564,1.32086,-.33645,.63974,1.32064,1.04243,-.9829,1.32019,.72871,1.21724,1.31996,.12663,-.01974,1.31951,1.22413,.84161,1.31929,-.88948,-1.22165,1.31906,.08739,.96003,1.31884,.76092,1.1887,1.31816,-.29908,-1.07875,1.31794,-.58253,.40202,1.31771,1.15845,-1.11931,1.31726,.50196,1.16464,1.31704,.38603,1.01557,1.31636,-.68979,-1.21503,1.31614,-.17741,.77624,1.31591,.95175,1.22833,1.31524,-.03697,.14427,1.31479,1.22087,-1.20405,1.31434,.25055,1.05728,1.31411,.6287,1.1429,1.31344,-.4568,-1.15153,1.31321,-.43527,.55519,1.31299,1.09901,1.21068,1.31231,.22822,.91828,1.31164,-.82242,-1.23288,1.31141,-.01386,.8999,1.31119,.84319,1.2174,1.31051,-.20125,-1.03381,1.31029,-.67407,.30703,1.31006,1.1956,-1.16463,1.30961,.41054,1.1363,1.30939,.48407,1.07615,1.30871,-.60759,-1.20418,1.30849,-.27896,.69962,1.30826,1.01931,1.23531,1.30759,.065,.04326,1.30714,1.23674,-1.22869,1.30669,.15127,1.00838,1.30646,.71856,1.18447,1.30579,-.36326,-1.11898,1.30556,-.53235,.4656,1.30534,1.14861,1.19551,1.30466,.32955,.9895,1.30399,-.74867,-1.23558,1.30376,-.11637,.83263,1.30354,.9206,1.2379,1.30286,-.1007,.20862,1.30241,1.22483,-1.20235,1.30196,.31502,1.09958,1.30174,.58,1.12996,1.30106,-.52003,-1.1847,1.30084,-.37989,.61706,1.30061,1.08058,1.23369,1.29994,.16786,.88434,1.29926,-.87742,-1.24501,1.29904,.04963,.95173,1.29881,.80455,1.21825,1.29814,-.26593,-1.07813,1.29791,-.62694,.37156,1.29769,1.19078,-1.15417,1.29724,.47442,1.17173,1.29701,.42989,1.05468,1.29634,-.6687,-1.22962,1.29611,-.21939,1.24997,1.29521,.00186,.10747,1.29476,1.24581,-1.2321,1.29431,.21605,1.05465,1.29409,.67309,1.17651,1.29341,-.42768,-1.15663,1.29319,-.47945,.52909,1.29296,1.13504,-1.08484,1.29251,.62653,1.22337,1.29229,.27086,.95983,1.29161,-.80651,-1.25277,1.29139,-.05367,.88766,1.29116,.88598,1.24389,1.29049,-.16548,.27369,1.29004,1.22511,-1.19693,1.28959,.37989,1.1394,1.28936,.52849,1.11328,1.28869,-.583,-1.21493,1.28846,-.32219,1.2534,1.28756,.10572,.00427,1.28711,1.2583,-1.25357,1.28666,.1143,1.00173,1.28644,.76263,1.21538,1.28576,-.33114,-1.12007,1.28554,-.57691,.43629,1.28531,1.18221,-1.13996,1.28486,.53817,1.20432,1.28464,.37327,1.02954,1.28396,-.72903,-1.25183,1.28374,-.15791,.81655,1.28351,.96221,1.26111,1.28284,-.0626,.17268,1.28239,1.25127,-1.23182,1.28194,.28151,1.09866,1.28171,.62462,1.1648,1.28104,-.49212,-1.19153,1.28081,-.42401,.59229,1.28059,1.11772,1.24807,1.27991,.21014,.92664,1.27924,-.86307,-1.2665,1.27901,.01047,.94112,1.27879,.84794,1.24621,1.27811,-.23108,-1.0752,1.27789,-.67153,.33927,1.27766,1.22167,-1.18776,1.27721,.44493,1.17657,1.27699,.47432,1.09288,1.27631,-.64548,-1.24209,1.27609,-.26232,.73881,1.27586,1.03263,1.2697,1.27519,.04199,.0692,1.27474,1.26896,-1.2585,1.27429,.17994,1.04971,1.27406,.71755,1.20877,1.27339,-.39667,-1.15947,1.27316,-.52411,.50101,1.27294,1.16988,1.23391,1.27226,.31436,1.00077,1.27159,-.78837,-1.2707,1.27136,-.0947,.87316,1.27114,.92834,1.26866,1.27046,-.12817,.23867,1.27001,1.25304,-1.2278,1.26956,.34743,1.14023,1.26934,.57329,1.14932,1.26866,-.55637,-1.22351,1.26844,-.36617,1.26948,1.26754,.14756,.88997,1.26686,-.91816,-1.27667,1.26664,.07587,.99279,1.26641,.80657,1.2448,1.26574,-.29728,-1.11889,1.26551,-.62175,.40512,1.26529,1.21447,1.21092,1.26461,.41765,1.06877,1.26394,-.70724,-1.26603,1.26371,-.20048,.79825,1.26349,1.00319,1.28249,1.26281,-.02312,.1352,1.26236,1.27599,-1.25972,1.26191,.24632,1.09546,1.26169,.66942,1.19839,1.26101,-.4623,-1.19613,1.26079,-.4687,.56549,1.26056,1.15378,1.26035,1.25989,.25336,.96841,1.25921,-.8465,-1.2861,1.25899,-.02998,.92824,1.25876,.891,1.27253,1.25809,-.19463,-1.06998,1.25786,-.71619,-1.22001,1.25719,.41359,1.17917,1.25696,.51923,1.13009,1.25629,-.62019,-1.25244,1.25606,-.30611,1.28749,1.25516,.08333,.02956,1.25471,1.29028,-1.28319,1.25426,.1423,1.04248,1.25404,.76199,1.23963,1.25336,-.36388,-1.16005,1.25314,-.56914,.47102,1.25291,1.20348,1.24229,1.25224,.35862,1.04099,1.25156,-.76807,-1.28663,1.25134,-.13685,.85643,1.25111,.97018,1.29167,1.25044,-.08941,-1.25719,1.24954,.31324,1.1388,1.24931,.61835,1.18421,1.24864,-.52779,-1.22992,1.24841,-.41082,1.28353,1.24751,.19043,.93254,1.24684,-.90319,-1.29794,1.24661,.03607,.98159,1.24639,.85029,1.27267,1.24571,-.26177,-1.11543,1.24549,-.66676,.37215,1.24526,1.24532,1.21532,1.24459,.46259,1.10711,1.24391,-.68336,-1.27817,1.24369,-.24399,1.30199,1.24279,.01764,.09629,1.24234,1.29897,.80658,1.24211,-1.02303,-1.286,1.24189,.20955,1.08999,1.24166,.71428,1.23065,1.24099,-.43063,-1.19853,1.24076,-.51385,.53675,1.24054,1.18868,1.27054,1.23986,.29742,-.18527,1.23941,1.2921,1.00958,1.23919,-.82775,-1.30378,1.23896,-.07162,.91314,1.23874,.93365,1.29717,1.23806,-.15667,.26957,1.23761,1.27892,-1.25087,1.23716,.38047,1.17955,1.23694,.56449,1.16623,1.23626,-.59292,-1.26066,1.23604,-.35064,1.30331,1.23514,.12578,-.01135,1.23469,1.30974,-1.30614,1.23424,.10323,1.033,1.23401,.8063,1.26901,1.23334,-.32937,-1.1584,1.23311,-.61444,.43919,1.23289,1.23576,1.24852,1.23221,.40353,1.08042,1.23154,-.74566,-1.30056,1.23131,-.18001,1.31288,1.23041,-.04931,-1.28505,1.22951,.27741,1.13512,1.22929,.66359,1.21786,1.22861,-.49732,-1.23414,1.22839,-.45602,.60208,1.22816,1.17009,1.29553,1.22749,.23423,-.12011,1.22704,1.31147,-1.31737,1.22659,-.00499,.96817,1.22636,.89369,1.29892,1.22569,-.22469,-1.10974,1.22546,-.71185,1.21754,1.22456,.50799,1.14448,1.22389,-.65747,-1.28822,1.22366,-.28834,1.31958,1.22276,.05958,.05603,1.22231,1.32016,-1.31062,1.22186,.17129,1.08228,1.22164,.75913,1.26154,1.22096,-.3972,-1.19871,1.22074,-.55936,.50613,1.22051,1.22237,1.27862,1.21984,.34223,1.05005,1.21916,-.80687,-1.31951,1.21894,-.11436,.89586,1.21871,.97579,1.32009,1.21804,-.1173,-1.28027,1.21714,.34566,1.1777,1.21691,.61003,1.20124,1.21624,-.56372,-1.26675,1.21601,-.39582,1.31714,1.21511,.16923,-.05344,1.21466,1.32731,-1.32731,1.21421,.06282,1.02131,1.21399,.85039,1.29688,1.21331,-.29324,-1.15453,1.21309,-.65991,1.2526,1.21219,.449,1.11897,1.21151,-.72121,-1.31247,1.21129,-.22409,1.33225,1.21039,-.00795,.80466,1.20971,-1.0626,-1.31131,1.20949,.24003,1.12923,1.20926,.70889,1.25022,1.20859,-.46505,-1.2362,1.20836,-.50167,.57274,1.20814,1.20514,1.30548,1.20746,.27885,-.1637,1.20701,1.32526,-1.33491,1.20656,-.04723,.95256,1.20634,.93668,1.32353,1.20566,-.18612,.30121,1.20521,1.30259,-1.27165,1.20476,.41407,1.21756,1.20454,.55375,1.1808,1.20386,-.62962,-1.29618,1.20364,-.33341,1.33525,1.20274,.10261,.01453,1.20229,1.33951,-1.33352,1.20184,.13162,1.07236,1.20161,.80385,1.29098,1.20094,-.3621,-1.1967,1.20071,-.60514,.47372,1.20049,1.25476,1.28458,1.19981,.38767,1.08974,1.19914,-.78392,-1.33327,1.19891,-.15809,1.34123,1.19801,-.0766,-1.30817,1.19711,.30923,1.17366,1.19689,.65573,1.23504,1.19621,-.53268,-1.27069,1.19599,-.44154,1.32896,1.19509,.21358,-.09661,1.19464,1.34295,-1.34665,1.19419,.02117,1.00743,1.19396,.89417,1.32316,1.19329,-.25556,-1.14846,1.19306,-.70544,.37037,1.19284,1.29613,1.25452,1.19216,.49491,1.15657,1.19149,-.69477,-1.32232,1.19126,-.26899,.79346,1.19104,1.09172,1.34976,1.19036,.03457,-1.33593,1.18946,.20118,1.12113,1.18924,.75417,1.28122,1.18856,-.43105,-1.23608,1.18834,-.54769,.54157,1.18811,1.23899,1.31335,1.18744,.3242,1.05684,1.18676,-.84539,-1.35053,1.18654,-.09054,.93482,1.18631,.97917,1.34644,1.18564,-.14617,-1.30115,1.18474,.37868,1.2154,1.18451,.59977,1.21601,1.18384,-.59988,-1.30205,1.18361,-.37912,.7041,1.18339,1.15924,1.34896,1.18271,.14662,-.02813,1.18226,1.35701,-1.35466,1.18181,.09064,1.06026,1.18159,.84835,1.31892,1.18091,-.3254,-1.19251,1.18069,-.65108,1.28843,1.17979,.43366,1.12857,1.17911,-.75897,-1.34504,1.17889,-.20273,.85497,1.17866,1.0582,1.36057,1.17799,-.03467,-1.33449,1.17709,.27128,1.16743,1.17686,.7015,1.26756,1.17619,-.49987,-1.2725,1.17596,-.48771,.60894,1.17574,1.21936,1.33876,1.17506,.25876,-.14076,1.17461,1.35664,-1.36414,1.17416,-.02162,.99141,1.17394,.93754,1.34782,1.17326,-.21644,-1.1402,1.17304,-.75095,1.25428,1.17214,.54117,1.19314,1.17146,-.66641,-1.33012,1.17124,-.31461,.76839,1.17101,1.13062,1.36536,1.17034,.07816,-1.35886,1.16944,.16095,1.11086,1.16921,.79933,1.31079,1.16854,-.3954,-1.2338,1.16831,-.59396,.50863,1.16809,1.27156,1.31913,1.16741,.37018,1.09685,1.16674,-.82198,-1.36421,1.16651,-.13482,.91498,1.16629,1.02107,1.3676,1.16561,-.10492,.22414,1.16516,1.35357,-1.32916,1.16471,.34171,1.21108,1.16449,.64596,1.25002,1.16381,-.56832,-1.3058,1.16359,-.42537,.67562,1.16336,1.19588,1.36069,1.16269,.19153,-.07186,1.16224,1.3726,-1.37401,1.16179,.04843,1.04601,1.16156,.89254,1.34531,1.16089,-.28718,-1.18614,1.16066,-.69708,1.29014,1.15976,.48009,1.16645,1.15909,-.73206,-1.35479,1.15886,-.24817,.83146,1.15864,1.09829,1.37806,1.15796,.0084,-1.3592,1.15706,.23189,1.15903,1.15684,.74724,1.29874,1.15616,-.46535,-1.27217,1.15594,-.53423,1.34651,1.15504,.30464,-.1858,1.15459,1.36836,-1.37974,1.15414,-.06548,.97328,1.15391,.98042,1.3708,1.15324,-.17594,1.2519,1.15211,.58769,1.2286,1.15144,-.63619,-1.33585,1.15121,-.36085,.74137,1.15099,1.16859,1.37903,1.15031,.12272,-1.38007,1.14941,.11943,1.09844,1.14919,.84427,1.33889,1.14851,-.35818,-1.22937,1.14829,-.64039,1.32283,1.14739,.41669,-1.37592,1.14649,-.18,.89309,1.14626,1.06229,1.38699,1.14559,-.06245,-1.35563,1.14469,.30324,1.2046,1.14446,.69221,1.28277,1.14379,-.53502,-1.30745,1.14356,-.47206,.64529,1.14334,1.23142,1.37042,1.14266,.23723,-.11655,1.14221,1.38628,-1.39153,1.14176,.0051,1.02965,1.14154,.93633,1.3701,1.14086,-.24753,-1.17763,1.14064,-.74306,1.28973,1.13974,.52686,-1.36251,1.13884,-.29432,.80597,1.13861,1.13753,1.39368,1.13794,.05252,.89,1.13726,-1.07449,-1.38225,1.13704,.19114,1.14849,1.13681,.79286,1.32852,1.13614,-.4292,-1.2697,1.13591,-.581,.54385,1.13569,1.28625,1.3522,1.13501,.35114,-1.39342,1.13411,-.11031,.95308,1.13389,1.02271,1.39206,1.13321,-.13416,1.24738,1.13209,.63437,1.26288,1.13141,-.60418,-1.3395,1.13119,-.40762,.71246,1.13096,1.20554,1.39075,1.13029,.16816,-.04594,1.12984,1.40048,-1.3995,1.12939,.0767,1.0839,1.12916,.88891,1.36545,1.12849,-.31946,-1.22279,1.12826,-.68688,1.32442,1.12736,.46363,-1.38565,1.12646,-.22597,.8692,1.12624,1.10276,1.40455,1.12556,-.01885,-1.3805,1.12466,.26334,1.19598,1.12444,.73843,1.3142,1.12376,-.50003,-1.30699,1.12354,-.51909,1.37813,1.12264,.28365,-.16212,1.12219,1.398,-1.40718,1.12174,-.03929,1.0112,1.12151,.97963,1.39322,1.12084,-.20653,1.2872,1.11971,.57389,-1.36818,1.11881,-.34108,.77856,1.11859,1.17585,1.40739,1.11791,.0976,-1.40358,1.11701,.14911,1.13582,1.11679,.83827,1.35684,1.11611,-.3915,-1.26511,1.11589,-.62793,1.35582,1.11499,.39817,1.14136,1.11431,-.83403,-1.40516,1.11409,-.156,.93086,1.11386,1.06434,1.41156,1.11319,-.09118,1.24072,1.11206,.68112,1.29592,1.11139,-.57044,-1.34107,1.11116,-.45482,.68172,1.11094,1.2414,1.40048,1.11026,.21438,-.09115,1.10981,1.41422,-1.41712,1.10936,.03285,1.06726,1.10914,.93315,1.39043,1.10846,-.27932,-1.21409,1.10824,-.73335,1.32392,1.10734,.51092,-1.39336,1.10644,-.27264,.84336,1.10621,1.14238,1.42025,1.10554,.02579,-1.40373,1.10464,.2221,1.18524,1.10441,.78453,1.34424,1.10374,-.46344,-1.30441,1.10351,-.56637,1.3838,1.10261,.33067,-.20847,1.10216,1.40776,-1.42094,1.10171,-.08462,.99072,1.10149,1.02235,1.41465,1.10081,-.16425,1.28256,1.09969,.62107,1.27371,1.09901,-.64019,-1.3718,1.09879,-.38837,.74928,1.09856,1.21316,1.41917,1.09789,.14356,-1.42317,1.09699,.10588,1.12106,1.09676,.88337,1.38364,1.09609,-.35232,-1.2584,1.09586,-.67492,1.35738,1.09496,.44563,-1.41493,1.09406,-.20249,.90666,1.09384,1.10521,1.42926,1.09316,-.04709,-1.39988,1.09226,.29546,1.23196,1.09204,.72783,1.32765,1.09136,-.53503,-1.34054,1.09114,-.50236,1.40823,1.09024,.26131,-.13723,1.08979,1.42602,-1.4329,1.08934,-.01203,1.04857,1.08911,.9769,1.41376,1.08844,-.23785,.36062,1.08799,1.38789,1.32132,1.08731,.55845,1.24757,1.08664,-.70907,-1.39906,1.08641,-.31992,.81562,1.08619,1.18109,1.43407,1.08551,.07137,.92952,1.08484,-1.09505,-1.42526,1.08461,.17959,1.17239,1.08439,.83042,1.37284,1.08371,-.4253,-1.29973,1.08349,-.6138,.54383,1.08326,1.33071,1.38743,1.08259,.37821,1.14472,1.08191,-.87126,-1.43277,1.08169,-.13082,.96822,1.08146,1.06442,1.43433,1.08079,-.12079,.24579,1.08034,1.41861,1.27581,1.07966,.66832,1.30709,1.07899,-.60606,-1.37336,1.07876,-.43608,.71818,1.07854,1.24939,1.42899,1.07786,.19029,-.06465,1.07741,1.44049,-1.44096,1.07696,.06155,1.10422,1.07674,.92808,1.40887,1.07606,-.31174,-1.24958,1.07584,-.72189,1.35685,1.07494,.49343,-1.42271,1.07404,-.24966,.88052,1.07381,1.14526,1.44512,1.07314,-.00196,.12833,1.07269,1.43975,-1.42334,1.07224,.25377,1.22109,1.07201,.77443,1.35801,1.07134,-.49804,-1.33793,1.07111,-.55015,1.41395,1.07021,.30884,-1.4468,1.06931,-.05786,1.02786,1.06909,1.02008,1.43542,1.06841,-.19512,1.31662,1.06729,.60614,1.28256,1.06661,-.6763,-1.40271,1.06639,-.36771,.78602,1.06616,1.2188,1.44598,1.06549,.11782,.97362,1.06481,-1.07621,-1.44505,1.06459,.13591,1.15747,1.06436,.876,1.39993,1.06369,-.38571,-1.29295,1.06346,-.6613,1.389,1.06256,.42618,-1.44266,1.06166,-.1778,.94377,1.06144,1.10573,1.45223,1.06076,-.07623,.20295,1.06031,1.44033,-1.41739,1.05986,.32817,1.26696,1.05964,.71553,1.33917,1.05896,-.57029,-1.37284,1.05874,-.48413,1.43683,1.05784,.23771,-1.45692,1.05694,.0162,1.08535,1.05671,.9723,1.43247,1.05604,-.26984,1.35424,1.05491,.54147,-1.42849,1.05401,-.29744,1.45911,1.05311,.0441,.08365,1.05266,1.45771,-1.44513,1.05221,.21082,1.20814,1.05199,.82081,1.38693,1.05131,-.45952,-1.33323,1.05109,-.59809,1.41765,1.05019,.35688,1.14616,1.04951,-.90821,-1.45879,1.04929,-.10455,1.00516,1.04906,1.0626,1.45534,1.04839,-.15121,1.30983,1.04726,.65389,1.31632,1.04659,-.64184,-1.40432,1.04636,-.41593,1.45594,1.04546,.16504,-.03713,1.04501,1.46512,1.01716,1.04479,-1.05537,-1.46307,1.04456,.09112,1.1405,1.04434,.9212,1.42546,1.04366,-.34472,-1.28409,1.04344,-.70877,1.38852,1.04254,.47448,-1.45057,1.04164,-.22547,.9174,1.04141,1.14623,1.46831,1.04074,-.03065,.15894,1.04029,1.46032,-1.44115,1.03984,.28606,1.25602,1.03961,.76263,1.36988,1.03894,-.53294,-1.37025,1.03871,-.53243,1.44267,1.03781,.28574,-.15855,1.03736,1.46244,-1.47102,1.03691,-.0301,1.06447,1.03669,1.01596,1.4544,1.03601,-.22669,1.34956,1.03489,.58967,1.2895,1.03421,-.71246,-1.43225,1.03399,-.34573,.82264,1.03376,1.22254,1.47121,1.03309,.09102,.03796,1.03264,1.47384,.96768,1.03241,-1.11253,-1.4652,1.03219,.1667,1.19312,1.03196,.8669,1.41437,1.03129,-.41954,-1.32645,1.03106,-.6461,1.41931,1.03016,.40535,1.18563,1.02949,-.88002,-1.46885,1.02926,-.152,.98051,1.02904,1.10439,1.4735,1.02836,-.10621,.23468,1.02791,1.45888,1.30097,1.02724,.70162,1.34879,1.02656,-.60575,-1.40388,1.02634,-.46449,1.46394,1.02544,.21294,-.08416,1.02499,1.47727,1.06005,1.02476,-1.03255,-1.47928,1.02454,.04532,1.12151,1.02431,.96592,1.44938,1.02364,-.30242,1.38597,1.02251,.52303,-1.45649,1.02161,-.27374,.88916,1.02139,1.18582,1.48253,1.02071,.01586,.11383,1.02026,1.47855,-1.46324,1.01981,.24271,1.24303,1.01959,.80952,1.39918,1.01891,-.49408,-1.3656,1.01869,-.58088,1.4465,1.01779,.33427,-1.48323,1.01689,-.07724,1.04162,1.01666,1.05897,1.47462,1.01599,-.18237,1.3428,1.01486,.63793,1.32368,1.01419,-.67771,-1.43398,1.01396,-.39445,1.48137,1.01306,.1387,-.00866,1.01261,1.48813,-1.4835,1.01216,.12149,1.17607,1.01194,.9126,1.44025,1.01126,-.37819,-1.3176,1.01104,-.69408,1.41893,1.01014,.45415,-1.47695,1.00924,-.20014,.95396,1.00901,1.14536,1.48984,1.00834,-.0602,.19026,1.00789,1.47918,1.29003,1.00721,.74923,1.37991,1.00654,-.56808,-1.40138,1.00631,-.51328,1.46996,1.00541,.26145,-.13196,1.00496,1.48749,-1.49364,1.00451,-.00141,1.10052,1.00429,1.01008,1.47165,1.00361,-.25888,1.38136,1.00249,.57173,1.29459,1.00181,-.74861,-1.46041,1.00159,-.32251,1.49487,1.00069,.06323,.06771,1.00024,1.49497,-1.48363,.99979,.19819,1.22798,.99956,.85612,1.427,.99889,-.45377,-1.35887,.99866,-.62939,1.44831,.99776,.38323,-1.49352,.99686,-.12515,1.01684,.99664,1.10125,1.49308,.99596,-.13696,.26702,.99551,1.47569,1.33397,.99484,.68616,1.35658,.99416,-.64134,-1.43367,.99394,-.4435,1.48959,.99304,.18707,-.05614,.99259,1.50054,-1.5,.99214,.07528,1.15702,.99191,.95782,1.46454,.99124,-.33553,1.4165,.99011,.5032,-1.48308,.98921,-.24888,.92555,.98899,1.18544,1.50435,.98831,-.01326,.14475,.98786,1.49772,-1.47962,.98741,.27519,1.27704,.98719,.79663,1.40962,.98651,-.52892,-1.39683,.98629,-.56223,1.47398,.98539,.31046,-.18044,.98494,1.49577,1.14354,.98471,-.98115,-1.50612,.98449,-.04899,1.07757,.98426,1.05359,1.49221,.98359,-.21418,1.37468,.98246,.6205,1.32922,.98179,-.71362,-1.46232,.98156,-.37171,1.50529,.98066,.11136,.02067,.98021,1.50955,-1.50226,.97976,.15259,1.21091,.97954,.90233,1.45328,.97886,-.41209,-1.35009,.97864,-.67788,1.44809,.97774,.43252,-1.50187,.97684,-.17375,.99016,.97661,1.14272,1.50975,.97594,-.09054,.22223,.97549,1.49634,1.32309,.97481,.73428,1.38815,.97414,-.60341,-1.43131,.97391,-.49279,1.49584,.97301,.23604,-.10438,.97256,1.51104,-1.51466,.97211,.02813,1.13598,.97189,1.00249,1.48718,.97121,-.29164,1.41201,.97009,.5524,-1.48721,.96919,-.29812,.89533,.96896,1.22454,1.51698,.96829,.03453,.09824,.96784,1.51448,-1.50037,.96739,.23031,1.26202,.96716,.84374,1.43786,.96649,-.48831,-1.39022,.96626,-.61125,1.47599,.96536,.35989,-.22952,.96491,1.50209,-1.51669,.96446,-.09734,1.05271,.96424,1.09638,1.51102,.96356,-.16839,.29991,.96311,1.4908,1.36595,.96244,.66924,1.36259,.96176,-.67702,-1.46219,.96154,-.42124,1.51378,.96064,.16018,-.02722,.96019,1.52227,-1.5191,.95974,.10599,1.19184,.95951,.94808,1.47797,.95884,-.3691,1.44582,.95771,.48206,-1.50825,.95681,-.22294,.96163,.95659,1.1833,1.52459,.95591,-.0432,.17635,.95546,1.51525,1.31017,.95479,.7822,1.41831,.95411,-.56398,-1.42691,.95389,-.54224,1.5001,.95299,.28551,-.1533,.95254,1.5196,-1.52746,.95209,-.01986,1.11299,.95186,1.04653,1.50812,.95119,-.24659,.37756,.95074,1.48106,1.40548,.95006,.60167,1.333,.94939,-.74952,-1.48934,.94916,-.34779,1.52771,.94826,.08309,.0508,.94781,1.5294,-1.51938,.94736,.18435,1.24498,.94714,.89047,1.46458,.94646,-.44634,-1.38156,.94624,-.66025,.57278,.94601,1.42021,1.47598,.94534,.40966,-1.52532,.94444,-.14636,1.02595,.94421,1.13837,1.52805,.94354,-.1216,.25477,.94309,1.51185,1.35518,.94241,.71787,1.39463,.94174,-.63887,-1.46003,.94151,-.47102,1.5203,.94061,.20958,-.07588,.94016,1.53308,-1.53412,.93971,.05845,1.1708,.93949,.99327,1.50103,.93881,-.32489,1.44152,.93769,.53175,-1.51265,.93679,-.27263,.9313,.93656,1.22292,1.53756,.93589,.00499,.12947,.93544,1.53238,1.29522,.93476,.82983,1.447,.93409,-.52312,-1.42047,.93386,-.59175,.64774,.93364,1.39598,1.50236,.93296,.33541,-.20281,.93251,1.5262,-1.53836,.93206,-.06862,1.08808,.93184,1.08984,1.52734,.93116,-.20045,.33327,.93071,1.50423,1.3969,.93004,.65092,1.36686,.92936,-.71273,-1.48945,.92914,-.39779,.82964,.92891,1.29954,1.53651,.92824,.13232,.00252,.92779,1.54247,-1.53661,.92734,.13738,1.22596,.92711,.93675,1.48971,.92644,-.40307,.53186,.92599,1.44902,1.47394,.92531,.45968,-1.53201,.92441,-.19599,.99736,.92419,1.17947,1.54326,.92351,-.07388,.20856,.92306,1.53116,1.34238,.92239,.76631,1.42527,.92171,-.59922,-1.45584,.92149,-.52095,.72165,.92126,1.36766,1.52485,.92059,.2595,-.12522,.92014,1.54197,-1.54728,.91969,.01007,1.14782,.91946,1.03784,1.5224,.91879,-.27952,.41162,.91834,1.49239,1.43518,.91766,.58152,1.33505,.91699,-.78534,-1.51505,.91676,-.32276,.89921,.91654,1.2615,1.54864,.91586,.05395,.08167,.91541,1.54769,-1.53489,.91496,.2167,1.27827,.91474,.87709,1.47419,.91406,-.4809,.60804,.91361,1.42674,1.50261,.91294,.38564,-.25284,.91249,1.53083,-1.54734,.91204,-.11806,1.0613,.91181,1.13236,1.54477,.91114,-.15332,.28783,.91069,1.52571,1.38629,.91001,.70006,1.39939,.90934,-.67439,-1.48754,.90911,-.44804,.79428,.90889,1.3353,1.54336,.90821,.18215,-.04653,.90776,1.55364,1.20496,.90709,.98247,1.51322,.90641,-.35858,.48958,.90596,1.47633,1.46987,.90529,.50985,-1.53672,.90439,-.24612,.96696,.90416,1.21962,1.55662,.90349,-.02532,.16134,.90304,1.54871,1.32755,.90236,.81446,1.45445,.90169,-.55814,-1.44961,.90146,-.57096,.68327,.90124,1.40032,1.52741,.90056,.30984,-.17515,.90011,1.54891,-1.55855,.89966,-.03907,1.12293,.89944,1.08169,1.54204,.89876,-.23308,.36706,.89831,1.51602,1.4268,.89764,.63126,1.36943,.89696,-.74841,-1.51544,.89674,-.37321,.86541,.89651,1.29897,1.5578,.89584,.10358,.03301,.89539,1.56115,1.25933,.89471,.92389,1.4998,.89404,-.43738,.56692,.89359,1.45606,1.50083,.89291,.43612,-1.55437,.89201,-.16809,1.03268,.89179,1.174,1.5604,.89111,-.10526,.24131,.89066,1.54547,1.37365,.88999,.74901,1.43054,.88931,-.63456,-1.4836,.88909,-.49845,.75732,.88886,1.36981,1.54825,.88819,.23249,-.09626,.88774,1.5629,1.53506,.88639,-.31293,.446,.88594,1.50206,1.46376,.88526,.5601,1.33543,.88459,-.82105,-1.53944,.88436,-.29668,.93481,.88414,1.25874,1.56809,.88346,.024,.1132,.88301,1.56444,1.31073,.88234,.86224,1.48213,.88166,-.5157,.64341,.88121,1.4316,1.52797,.88054,.36052,-.22559,.88009,1.55388,1.09617,.87941,1.12475,1.55992,.87874,-.18562,.32134,.87829,1.53797,1.41639,.87761,.68091,1.40249,.87694,-.70993,-1.51382,.87671,-.42392,.82996,.87649,1.33527,1.56502,.87581,.15381,-.0164,.87536,1.57273,1.23843,.87469,.97016,1.52379,.87401,-.39263,.52443,.87356,1.48387,1.49704,.87289,.48677,-1.55943,.87199,-.21864,1.00227,.87176,1.2147,1.57418,.87109,-.05635,.19379,.87064,1.56347,1.359,.86996,.79768,1.46025,.86929,-.59331,-1.47763,.86906,-.54894,.71881,.86884,1.40301,1.55115,.86816,.28326,-.14659,.86771,1.57022,1.15721,.86704,1.07197,1.55517,.86636,-.26619,.4012,.86591,1.52618,1.45563,.86524,.61034,1.37035,.86456,-.78402,-1.54017,.86434,-.34757,1.57766,.86344,.07401,.06421,.86299,1.57833,-1.56692,.86254,.20198,1.29193,.86231,.90958,1.50825,.86164,-.47197,.60211,.86119,1.46144,1.52651,.86051,.41146,-.27647,.86006,1.55687,1.06757,.85939,1.16694,1.576,.85871,-.13725,.27455,.85826,1.55821,1.40396,.85759,.73036,1.43417,.85691,-.66996,-1.51018,.85669,-.4748,.7929,.85646,1.37032,1.57028,.85579,.20456,-.0665,.85534,1.5824,1.54612,.85399,-.34673,.48065,.85354,1.51012,1.49122,.85286,.53749,-1.56252,.85196,-.26961,.97011,.85174,1.25437,1.58608,.85106,-.00667,.14533,.85061,1.57966,1.34235,.84994,.84599,1.48845,.84926,-.55069,.67881,.84881,1.43483,1.55205,.84814,.33438,-.19744,.84769,1.57558,1.13051,.84701,1.11558,1.57353,.84634,-.21846,.35524,.84589,1.54864,1.44547,.84521,.66048,1.40395,.84454,-.74543,-1.53888,.84431,-.39873,.86545,.84409,1.33361,1.58528,.84341,.12463,.01445,.84296,1.59035,1.27118,.84229,.95638,1.53276,.84161,-.42701,.55946,.84116,1.48978,1.52303,.84049,.46256,-.32769,.84004,1.55787,1.03718,.83936,1.20819,1.59024,.83869,-.08802,.22674,.83824,1.57669,1.38953,.83756,.77955,1.46442,.83689,-.62856,-1.50452,.83666,-.52576,.7543,.83644,1.40407,1.57356,.83576,.25574,-.1172,.83531,1.59013,1.19088,.83464,1.06075,1.56673,.83396,-.29975,.43564,.83351,1.53476,1.48337,.83284,.58821,-1.56361,.83194,-.32094,.93624,.83171,1.29295,1.59608,.83104,.04369,.09603,.83059,1.59402,-1.57975,.83014,.23505,1.32373,.82991,.89385,1.51511,.82924,-.50677,-1.45962,.82901,-.64981,.63739,.82879,1.46521,1.55094,.82811,.38575,-.24871,.82766,1.57896,1.10198,.82699,1.15833,1.59009,.82631,-.16979,.3082,.82586,1.56938,1.4333,.82519,.71044,1.43619,.82451,-.70536,-1.53558,.82429,-.45006,.82834,.82406,1.36922,1.59096,.82339,.17576,-.036,.82294,1.60046,1.55561,.82159,-.38089,.5155,.82114,1.51657,1.51753,.82046,.51375,-1.58428,.81956,-.24164,1.00504,.81934,1.24843,1.60261,.81866,-.03802,.17801,.81821,1.59337,1.37311,.81754,.82838,1.49317,.81686,-.5858,.7142,.81641,1.43645,1.57485,.81574,.30726,-.16843,.81529,1.59591,1.16429,.81461,1.10492,1.5856,.81394,-.25176,.38947,.81349,1.55774,1.47351,.81281,.63884,1.40382,.81214,-.78085,-1.5627,.81191,-.37252,1.60415,.81101,.09466,.04596,.81056,1.60651,1.30316,.80989,.94119,1.54015,.80921,-.46163,.5946,.80876,1.49411,1.54783,.80809,.43729,-.30034,.80764,1.58035,1.07166,.80696,1.20015,1.60482,.80629,-.12027,.26015,.80584,1.58838,1.41912,.80516,.76013,1.467,.80449,-.66386,-1.53026,.80426,-.50147,.78968,.80404,1.40354,1.59466,.80336,.22732,-.08705,.80291,1.60865,1.22392,.80224,1.04807,1.57675,.80156,-.33369,.47032,.80111,1.54176,1.51002,.80044,.56494,-1.58577,.79954,-.29336,.9712,.79931,1.28758,1.61308,.79864,.01267,.12842,.79819,1.60823,-1.59106,.79774,.26857,1.52038,.79684,-.54175,.67269,.79639,1.4674,1.57414,.79571,.35905,-.22009,.79526,1.59972,1.13587,.79459,1.14823,1.60267,.79391,-.20284,.34222,.79346,1.57902,1.46163,.79279,.68929,1.43663,.79211,-.74071,-1.55978,.79189,-.42428,.86359,.79166,1.36656,1.61027,.79099,.14615,-.00481,.79054,1.6171,1.56355,.78919,-.41533,.55051,.78874,1.52146,1.54269,.78806,.48893,-.35223,.78761,1.57975,-1.60471,.78716,-.2128,1.03959,.78694,1.24096,1.61768,.78626,-.06998,.21117,.78581,1.60559,1.40296,.78514,.80948,1.49632,.78446,-.621,.74954,.78401,1.4365,1.59637,.78334,.27924,-.13863,.78289,1.61489,1.19747,.78221,1.0928,1.59615,.78154,-.28547,.42398,.78109,1.56529,1.50048,.78041,.61604,-1.58527,.77951,-.34536,1.62163,.77861,.06397,.07806,.77816,1.62122,1.54599,.77681,-.49646,.6298,.77636,1.49687,1.57142,.77569,.41103,-.2721,.77524,1.60155,1.10565,.77456,1.19062,1.61792,.77389,-.15305,.29396,.77344,1.59856,1.44776,.77276,.73949,1.46802,.77209,-.69915,-1.55484,.77186,-.47614,.82492,.77164,1.40146,1.61443,.77096,.19808,-.05619,.77051,1.62578,1.58525,.76916,-.36794,.50519,.76871,1.54721,1.53555,.76804,.54057,-.40431,.76759,1.57713,-1.60665,.76714,-.26491,1.00581,.76691,1.2807,1.62866,.76624,-.01899,.16132,.76579,1.62097,1.52411,.76444,-.57683,-1.51357,.76421,-.60422,.70796,.76399,1.46803,1.59609,.76331,.33144,-.19065,.76286,1.61916,1.1692,.76219,1.13668,1.61377,.76151,-.23632,.37655,.76106,1.58713,1.43552,.75971,-.77596,-1.58276,.75949,-.39753,.89861,.75926,1.36236,1.62823,.75859,.1158,.027,.75814,1.63233,1.56996,.75679,-.45,.58561,.75634,1.5248,1.56669,.75566,.46309,-.32439,.75521,1.60138,1.07369,.75454,1.23202,1.63131,.75386,-.10249,.24475,.75341,1.61631,1.49793,.75206,-.65621,.78475,.75161,1.43501,1.6166,.75094,.25038,-.1081,.75049,1.63251,1.23002,.74981,1.07927,1.60521,.74914,-.31953,.4587,.74869,1.57132,1.52638,.74801,.59214,1.3989,.74734,-.85122,-1.60659,.74711,-.3173,1.63771,.74621,.03262,.1107,.74576,1.6345,1.36475,.74509,.90681,1.5503,.74441,-.53143,.66501,.74396,1.49809,1.5938,.74329,.38382,-.24304,.74284,1.62146,1.13913,.74216,1.17965,1.62957,.74149,-.1863,.3281,.74104,1.60724,1.4675,.73969,-.73437,-1.57825,.73946,-.44981,.85996,.73924,1.39786,1.63287,.73856,.16808,-.02468,.73811,1.64152,1.28793,.73744,1.01854,1.59223,.73676,-.40246,.54019,.73631,1.55114,1.55994,.73564,.51518,-.37687,.73519,1.59921,-1.62623,.73474,-.23565,1.04002,.73451,1.27234,1.64282,.73384,-.05123,.19468,.73339,1.63225,1.52631,.73204,-.61197,-1.53892,.73181,-.57979,.74315,.73159,1.46714,1.61678,.73091,.30295,-.16046,.73046,1.63728,1.20193,.72979,1.12373,1.62339,.72911,-.27018,.41112,.72866,1.59375,-1.60454,.72709,-.36988,.93334,.72686,1.35667,1.64483,.72619,.08476,.05937,.72574,1.64614,1.34274,.72506,.95463,1.57486,.72439,-.48486,.62076,.72394,1.52662,1.58951,.72326,.4363,-.2957,.72281,1.62176,1.10731,.72214,1.22163,1.64351,.72146,-.1355,.2787,.72101,1.62557,1.49802,.71966,-.6914,.81981,.71921,1.43201,1.63554,.71854,.22073,-.0769,.71809,1.64877,1.2619,.71741,1.06439,1.61278,.71674,-.35389,.49359,.71629,1.57585,1.55119,.71561,.5672,-.42946,.71516,1.59503,-1.62666,.71471,-.2884,1.65241,.71381,66e-5,.14382,.71336,1.64634,1.39429,.71269,.88772,1.5531,.71201,-.56649,.70018,.71156,1.49781,1.61496,.71089,.35572,-.2132,.71044,1.64007,1.17205,.70976,1.16728,1.63976,.70909,-.21996,.36252,.70864,1.61444,-1.60047,.70706,-.42256,.89475,.70684,1.39277,1.64999,.70616,.13736,.00742,.70571,1.65587,1.31884,.70504,1.00179,1.59773,.70436,-.43718,.57526,.70391,1.55357,1.5832,.70324,.48881,-.34857,.70279,1.62006,1.07378,.70211,1.26255,1.65558,.70144,-.08399,.22843,.70099,1.64208,1.52701,.69964,-.64711,.77822,.69919,1.46475,1.63621,.69851,.27366,-.12958,.69806,1.65406,1.23403,.69739,1.10942,1.63155,.69671,-.30437,.44589,.69626,1.59887,1.42879,.69491,-.84597,-1.62508,.69469,-.34136,.96775,.69446,1.34951,1.66007,.69379,.0531,.09225,.69334,1.65855,-1.64432,.69289,.23692,1.37258,.69266,.93607,1.57827,.69199,-.51983,.65589,.69154,1.52695,1.61113,.69086,.40861,-.26622,.69041,1.64087,1.14041,.68974,1.20984,1.65428,.68906,-.16894,.31296,.68861,1.63336,.85466,.68681,1.42753,1.65317,.68614,.19034,-.04509,.68569,1.66367,1.29307,.68501,1.0482,1.61888,.68434,-.38848,.52859,.68389,1.57889,1.57488,.68321,.54126,-.40155,.68276,1.61635,-1.64545,.68231,-.25873,.17737,.68096,1.65675,-1.63508,.68051,.32157,1.42295,.68029,.86742,1.55442,.67961,-.60158,.73526,.67916,1.49604,1.63489,.67849,.3268,-.18264,.67804,1.65738,1.20437,.67736,1.15355,1.64851,.67669,-.25397,.39716,.67624,1.62017,-1.6215,.67466,-.39444,.92925,.67444,1.38623,1.66578,.67376,.106,.04005,.67331,1.66885,1.34898,.67264,.98377,1.60176,.67196,-.47207,.61036,.67151,1.55452,1.6053,.67084,.46152,-.31945,.67039,1.63967,1.10706,.66971,1.25136,1.66693,.66904,-.11721,.26252,.66859,1.65048,.81312,.66679,1.4609,1.65437,.66611,.24362,-.09806,.66566,1.66951,1.26547,.66499,1.09379,1.63826,.66431,-.33882,.4808,.66386,1.60253,-.45456,.66274,1.61064,-1.64439,.66229,-.31205,1.00179,.66206,1.34093,.12558,.66094,1.66955,1.40159,.66026,.9163,.69097,.65914,1.52581,1.63156,.65846,.38006,-.23599,.65801,1.65871,1.17295,.65734,1.1967,1.66363,.65666,-.20277,.34747,.65621,1.63971,-.6279,.65531,-1.55445,.88925,.65441,1.42161,1.66951,.65374,.15928,-.01272,.65329,1.67722,1.32351,.65261,1.03074,1.62352,.65194,-.42326,.56364,.65149,1.58047,1.59745,.65081,.51439,-.3728,.65036,1.63647,-1.66297,.64991,-.22833,1.07205,.64969,1.29175,1.67767,.64901,-.06483,.21128,.64856,1.66575,-1.64107,.64811,.35614,.77019,.64676,1.49282,1.65357,.64609,.29711,-.15142,.64564,1.67339,-1.68039,.64519,-.00454,1.23606,.64496,1.1385,1.65583,.64429,-.28828,.43198,.64384,1.62446,-1.64131,.64226,-.36549,.96342,.64204,1.37827,.07315,.64091,1.68044,1.37832,.64024,.96454,.64543,.63911,1.55401,1.62622,.63844,.43337,-.28957,.63799,1.65805,1.13982,.63731,1.23881,1.67688,.63664,-.15084,.2969,.63619,1.65744,.84779,.63439,1.45561,1.67125,.63371,.21288,-.06596,.63326,1.68364,-1.68312,.63281,.0815,1.2962,.63259,1.07689,1.64353,.63191,-.3735,.5158,.63146,1.60474,-.4262,.63034,1.63126,-1.66245,.62989,-.28199,.15931,.62854,1.67916,1.42972,.62786,.89537,.72594,.62674,1.52322,1.65077,.62606,.35073,-.20509,.62561,1.67528,1.2049,.62494,1.18224,1.67158,.62426,-.23692,.38219,.62381,1.64462,-1.63624,.62224,-.41899,.92353,.62201,1.41428,1.68453,.62134,.1276,.02016,.62089,1.68941,1.35318,.62021,1.01205,1.62673,.61954,-.45818,.5987,.61909,1.5806,1.61887,.61841,.48664,-.34328,.61796,1.65538,-1.67922,.61751,-.19726,1.10501,.61729,1.27981,1.68823,.61661,-.09826,.24551,.61616,1.67334,-1.64563,.61571,.3909,.80494,.61436,1.48816,1.67101,.61369,.26669,-.11959,.61324,1.68809,-1.69224,.61279,.02845,1.26708,.61256,1.12217,1.66174,.61189,-.32283,.46692,.61144,1.62731,-1.65992,.60986,-.33578,.9972,.60964,1.36892,.10668,.60851,1.69066,1.40682,.60784,.94413,.68043,.60671,1.55207,1.64596,.60604,.40441,-.25898,.60559,1.67517,1.17201,.60491,1.22494,1.68545,.60424,-.18483,.3315,.60379,1.66299,.88219,.60199,1.44891,1.68686,.60131,.18149,-.03332,.60086,1.69642,1.32619,.60019,1.05877,1.64738,.59951,-.40833,.55084,.59906,1.60552,-.39704,.59794,1.6507,-1.67925,.59749,-.25123,.19338,.59614,1.68737,.76076,.59434,1.51921,1.66876,.59366,.32065,-.17355,.59321,1.69056,-1.69941,.59276,-.02509,1.2362,.59254,1.16649,1.67811,.59186,-.27135,.41706,.59141,1.64812,-1.60549,.59096,.5596,-.69789,.59051,-1.55056,-1.65538,.58984,-.38964,.95747,.58961,1.40556,.05348,.58849,1.70024,1.38204,.58781,.99219,.63372,.58669,1.5793,1.63914,.58601,.45806,-.31303,.58556,1.67306,1.13744,.58489,1.26655,1.69743,.58421,-.13207,.27999,.58376,1.67953,.83945,.58196,1.48211,1.68718,.58129,.23561,-.08722,.58084,1.70148,-1.70274,.58039,.06188,1.2974,.58016,1.10461,1.66623,.57949,-.35758,.50193,.57904,1.62874,-.45079,.57791,1.64402,-1.67729,.57746,-.30536,1.03056,.57724,1.35821,.14058,.57611,1.69951,1.60517,.57476,-.57712,.7153,.57431,1.54871,1.6645,.57364,.37468,-.22775,.57319,1.69103,-1.70462,.57274,-.07904,1.20359,.57251,1.20979,1.69263,.57184,-.21912,.36629,.57139,1.66714,-1.62887,.57094,.51068,.91628,.56959,1.44083,-22e-5,.56846,1.70788,1.35542,.56779,1.03945,1.64981,.56711,-.44328,.58587,.56666,1.60488,-.36714,.56554,1.66895,-1.6948,.56509,-.21984,.22773,.56374,1.69421,-1.66796,.56329,.37501,.79537,.56194,1.51381,1.68551,.56126,.28989,-.14144,.56081,1.70455,-1.71053,.56036,.00813,1.26684,.56014,1.14951,1.68326,.55946,-.306,.45203,.55901,1.65021,-1.67332,.55744,-.35955,.99102,.55721,1.39549,.0872,.55609,1.70973,1.41008,.55541,.97119,.66864,.55429,1.57661,1.65823,.55361,.42869,-.2821,.55316,1.68951,-1.70784,.55271,-.13333,1.1693,.55249,1.252,1.70525,.55181,-.16622,.31469,.55136,1.68433,.87368,.54956,1.47468,1.7021,.54889,.20392,-.05434,.54844,1.71355,1.32698,.54776,1.08585,1.66933,.54709,-.39247,.53695,.54664,1.62876,-.42123,.54551,1.66282,-1.69342,.54506,-.27427,1.06345,.54484,1.34619,.1748,.54371,1.70699,.75,.54191,1.54396,1.68183,.54124,.34425,-.19591,.54079,1.70563,-1.71637,.54034,-.04605,1.23454,.54011,1.19339,1.69843,.53944,-.25366,.4012,.53899,1.66989,.95001,.53719,1.4314,.03331,.53606,1.718,1.38384,.53539,1.01899,1.65086,.53471,-.47828,.62083,.53426,1.60285,1.64996,.53359,.48261,-.33654,.53314,1.68597,-1.70908,.53269,-.18786,.26232,.53134,1.69967,.82973,.52954,1.50703,1.70102,.52886,.2585,-.1088,.52841,1.71725,-1.72032,.52796,.04175,1.29677,.52774,1.13132,1.68702,.52706,-.34081,.48704,.52661,1.6509,-.47524,.52549,1.65469,1.46821,.52526,-.89914,1.02413,.52481,1.3841,.12126,.52369,1.71786,.70342,.52189,1.57253,1.67614,.52121,.3986,-.25056,.52076,1.70471,-1.72022,.52031,-.10057,1.20055,.52009,1.2362,1.71171,.51941,-.20063,.34954,.51896,1.68775,.90758,.51716,1.46589,-.02102,.51604,1.72432,1.35579,.51536,1.06594,1.67104,.51469,-.42744,.57194,.51424,1.6274,-.39097,.51311,1.68043,-1.70831,.51266,-.24258,.20927,.51131,1.71312,.78448,.50951,1.53785,1.69794,.50884,.31316,-.16353,.50839,1.71895,-1.7268,.50794,-.01262,1.26481,.50771,1.17579,1.70286,.50704,-.28839,.43619,.50659,1.67126,.98333,.50479,1.42065,.0672,.50366,1.72679,1.65052,.50231,-.5133,.65568,.50186,1.59944,1.66845,.50119,.45287,-.30529,.50074,1.70178,1.72308,.49939,-.147,.2971,.49894,1.70376,.86379,.49714,1.49891,-.0757,.49601,1.72865,1.32595,.49534,1.11198,1.68941,.49466,-.37575,.52205,.49421,1.65022,-.44532,.49309,1.67289,1.05677,.49241,1.37141,.15561,.49129,1.72465,.73801,.48949,1.56708,1.69286,.48881,.36783,-.21844,.48836,1.71866,-1.7313,.48791,-.06735,1.23116,.48769,1.21919,1.71682,.48701,-.23527,.38449,.48656,1.6898,.9411,.48476,1.45579,.0127,.48364,1.73376,-1.72614,.48319,.16424,1.67139,.48229,-.46246,.60685,.48184,1.62467,-.36004,.48071,1.69685,.24396,.47891,1.71788,.81869,.47711,1.53039,-.13065,.47599,1.731,-1.73592,.47554,.02119,1.29437,.47531,1.15702,1.70593,.47464,-.32327,.47121,.47419,1.67126,-.49951,.47306,1.66334,1.49195,.47284,-.88911,1.01621,.47239,1.4086,.10142,.47126,1.73425,1.64881,.46991,-.54827,.69037,.46946,1.59468,1.68576,.46879,.42243,-.27345,.46834,1.71636,1.19585,.46766,1.26144,.33201,.46654,1.70649,.89751,.46474,1.48946,-.04217,.46361,1.73876,-1.73591,.46316,.11001,1.69044,.46226,-.41075,.557,.46181,1.64817,-.41472,.46069,1.6899,1.08889,.46001,1.35746,.1902,.45889,1.7301,.77236,.45709,1.5603,1.70836,.45641,.33643,-.1858,.45596,1.73135,-1.74108,.45551,-.03373,1.26108,.45529,1.201,1.72058,.45461,-.27009,.41951,.45416,1.69049,.97422,.45236,1.44439,.04676,.45124,1.74189,-1.73125,.45079,.19888,1.67037,.44989,-.49746,.64163,.44944,1.62059,-.32849,.44831,1.71205,.27881,.44651,1.7213,.85259,.44471,1.52162,-.09733,.44359,1.74177,-1.74372,.44314,.05532,1.70765,.44224,-.35825,.5062,.44179,1.6699,-.46925,.44066,1.68096,1.48153,.44044,-.92254,1.0486,.43999,1.39529,.13589,.43886,1.74038,.72485,.43706,1.58857,1.70189,.43639,.39134,-.24107,.43594,1.72969,1.22613,.43526,1.24385,.367,.43414,1.70787,.93084,.43234,1.47872,-.00827,.43121,1.74757,-1.74171,.43076,.14455,1.69012,.42986,-.44577,.59186,.42941,1.64478,-.38348,.42829,1.70573,1.12045,.42761,1.34229,.22498,.42649,1.73421,.80643,.42469,1.55219,1.72265,.42401,.30446,-.1527,.42356,1.74278,1.72299,.42221,-.30503,.45452,.42176,1.68983,1.00687,.41996,1.43173,.08111,.41884,1.74871,1.66801,.41749,-.5324,.67623,.41704,1.61517,1.69341,.41636,.44612,-.29638,.41591,1.72603,.31378,.41411,1.72338,.88614,.41231,1.51154,-.06361,.41119,1.75125,-1.75021,.41074,.08974,1.70803,.40984,-.39327,.54112,.40939,1.66721,-.43833,.40826,1.69741,1.08047,.40759,1.38075,.17059,.40646,1.74519,.75908,.40466,1.58115,1.71681,.40399,.35966,-.2082,.40354,1.74178,.40203,.40174,1.70792,.96374,.39994,1.46671,.02594,.39881,1.75507,-1.74619,.39836,.17929,1.68846,.39746,-.48076,.62657,.39701,1.64006,-.35165,.39589,1.72035,1.15142,.39521,1.32591,.2599,.39409,1.73699,.84018,.39229,1.54279,-.11917,.39116,1.75294,.48949,.38936,1.68784,-.49297,.38824,1.68709,1.50315,.38801,-.91104,1.03902,.38756,1.41783,.11571,.38644,1.75422,1.66432,.38509,-.56724,.71061,.38464,1.60844,1.70897,.38396,.41473,-.26375,.38351,1.73878,.3488,.38171,1.72413,.91928,.37991,1.5002,-.02955,.37879,1.75945,-1.75539,.37834,.12439,1.70708,.37744,-.42829,.57593,.37699,1.66319,-.40679,.37586,1.71267,1.11176,.37519,1.365,.20545,.37406,1.74868,.79302,.37226,1.57243,1.73053,.37159,.32742,-.17488,.37114,1.75262,1.73821,.36979,-.28615,.43704,.36934,1.70663,.99617,.36754,1.45346,.06042,.36641,1.76128,1.68547,.36506,-.51567,.66108,.36461,1.63402,-.31928,.36349,1.73376,1.18175,.36281,1.30837,.2949,.36169,1.73845,.87355,.35989,1.53212,-.08528,.35876,1.76182,1.3464,.35809,1.13973,.52437,.35696,1.68452,-.46174,.35584,1.70299,1.49087,.35561,-.94385,1.07063,.35516,1.40271,.1505,.35404,1.75841,.74472,.35224,1.60041,1.72334,.35156,.38277,-.23066,.35111,1.75029,.38383,.34931,1.72356,-1.68349,.34886,.53307,.95198,.34751,1.4876,.0048,.34639,1.76635,-1.75925,.34594,.15922,1.7048,.34504,-.46326,.61056,.34459,1.65785,-.3747,.34346,1.72674,1.14244,.34279,1.34808,.24042,.34166,1.75085,.8266,.33986,1.56244,-.14117,.33874,1.76219,1.31268,.33806,1.18431,.47199,.33694,1.70403,-1.65632,.33649,.61919,1.02809,.33514,1.439,.09512,.33401,1.76618,.69535,.33221,1.62669,-.28642,.33109,1.74595,1.21141,.33041,1.2897,.32995,.32929,1.73859,-1.70317,.32884,.48071,.90651,.32749,1.5202,-.05107,.32636,1.76943,1.37324,.32569,1.1172,.55912,.32456,1.6799,-1.62466,.32411,.70387,-.42994,.32344,1.71771,1.47736,.32321,-.97619,1.10166,.32276,1.38642,.18542,.32164,1.7613,.77851,.31984,1.59111,1.7365,.31916,.35029,-.19714,.31871,1.76056,1.27732,.31804,1.22773,1.75161,.31736,-.2667,.41883,.31691,1.72167,.9842,.31511,1.47379,.0394,.31399,1.77196,-1.76181,.31354,.19417,1.70121,.31264,-.49813,.64498,.31219,1.65122,-1.58859,.31174,.7869,-.34209,.31106,1.7396,1.17248,.31039,1.33002,.27546,.30926,1.75171,.8598,.30746,1.55119,-.10712,.30634,1.7705,1.33999,.30566,1.16233,.50682,.30454,1.70011,-1.64937,.30409,.65354,1.05946,.30274,1.42334,.12999,.30161,1.76978,.72933,.29981,1.61808,1.72798,.29914,.40573,-.25312,.29869,1.75691,1.24035,.29801,1.26993,.36499,.29689,1.73742,-1.69893,.29644,.51551,.939,.29509,1.50705,-.01659,.29396,1.77576,.59367,.29216,1.67398,-1.61573,.29171,.73778,-.3976,.29104,1.73125,1.13207,.29036,1.36898,.22045,.28924,1.76288,.81194,.28744,1.58055,-.16326,.28631,1.76957,1.30508,.28564,1.20631,1.7515,.28496,-.30176,.45375,.28451,1.71848,-1.6723,.28406,.60227,1.01588,.28271,1.45878,.07419,.28159,1.77629,-1.76307,.28114,.22921,.67914,.27979,1.64332,-1.57771,.27934,.82024,-.30902,.27866,1.75124,1.20184,.27799,1.31084,.31052,.27686,1.75126,-1.71748,.27641,.46246,.89257,.27506,1.53872,-.07277,.27394,1.77754,1.36647,.27326,1.13934,.5415,.27214,1.69491,-1.64114,.27169,.68763,1.09023,.27034,1.40653,.16498,.26921,1.77209,.76298,.26741,1.60821,1.74061,.26674,.37302,-.21943,.26629,1.76662,1.26856,.26561,1.24909,.39997,.26449,1.73496,-1.69341,.26404,.55014,.971,.26269,1.4927,.01811,.26156,1.7808,.62799,.25976,1.66678,-1.60555,.25931,.77134,-.36477,.25864,1.74357,1.44676,.25841,-1.03928,1.16183,.25796,1.35041,.25552,.25684,1.76316,-1.73414,.25639,.4087,.84497,.25504,1.56875,1.75917,.25436,.28394,-.12906,.25391,1.77732,1.33203,.25324,1.18388,.48853,.25211,1.71399,-1.66478,.25166,.63653,1.047,.25031,1.44261,.10913,.24919,1.77932,-1.76303,.24874,.26428,.71299,.24739,1.63415,-1.56561,.24694,.85316,-.27553,.24626,1.76166,1.23047,.24559,1.29059,.34555,.24446,1.74952,-1.71267,.24401,.4972,.92487,.24266,1.52504,-.03817,.24154,1.78331,.57597,.23974,1.68843,-1.63166,.23929,.7214,1.12037,.23794,1.38858,.20004,.23681,1.77311,.79625,.23501,1.59711,-.18539,.23389,1.77509,1.29598,.23321,1.22721,.43484,.23209,1.7312,-1.68661,.23164,.58455,1.00246,.23029,1.47718,.05299,.22916,1.78457,.66204,.22736,1.65832,-1.59414,.22691,.80451,-.3315,.22624,1.75469,1.19088,.22556,1.33076,.29058,.22444,1.76215,-1.73006,.22399,.44354,.87755,.22264,1.55575,-.09458,.22151,1.78381,1.35815,.22084,1.16046,.52314,.21971,1.70823,-1.65601,.21926,.6705,1.514,.21836,-.94875,1.07752,.21791,1.4253,.14417,.21679,1.78107,.74649,.21499,1.62374,-1.55231,.21454,.88562,-.24167,.21386,1.77084,1.25835,.21319,1.26929,.38051,.21206,1.74649,-1.70659,.21161,.53175,1.58798,.21071,-.82093,.95665,.21026,1.51017,-.00338,.20914,1.78781,.61019,.20734,1.68068,-1.62094,.20689,.75481,1.46478,.20599,-1.02567,1.14983,.20554,1.36954,.23513,.20441,1.77283,-1.74554,.20396,.38923,.8291,.20261,1.58478,1.76222,.20194,.30628,-.15105,.20149,1.7823,1.32259,.20081,1.20434,1.76055,.20014,-.31685,.46957,.19969,1.72616,-1.67855,.19924,.6187,1.03333,.19789,1.4605,.08799,.19676,1.78705,.69575,.19496,1.64861,-1.58151,.19451,.83724,-.29783,.19384,1.76458,1.21921,.19316,1.31005,.3256,.19204,1.75986,-1.7247,.19159,.47822,.90964,.19024,1.54155,-.05989,.18911,1.78904,.55752,.18731,1.7012,-1.64599,.18686,.70413,1.10738,.18551,1.40687,.17926,.18439,1.78153,.7796,.18259,1.61211,-1.53782,.18214,.91758,-.20748,.18146,1.77877,1.28544,.18079,1.24698,.41533,.17966,1.74219,-1.69925,.17921,.56607,.98787,.17786,1.49415,.64411,.17494,1.67168,-1.60901,.17449,.78781,1.17859,.17314,1.34942,.27019,.17201,1.77127,-1.74091,.17156,.42402,.86149,.17021,1.57126,-1.48996,.16976,.99558,-.11646,.16909,1.78825,1.7573,.16774,-.35179,.50409,.16729,1.71986,-1.66924,.16684,.65254,1.06358,.16549,1.44271,.72911,.16256,1.63767,-1.5677,.16211,.86951,-.26381,.16144,1.77323,1.24676,.16076,1.28831,1.78104,.16009,-.20558,.36051,.15964,1.75629,-1.71808,.15919,.51269,1.60259,.15829,-.80415,.94119,.15784,1.52618,-1.43809,.15739,1.07104,.59162,.15491,1.69292,-1.63475,.15446,.73738,1.13656,.15311,1.38737,.21435,.15199,1.78072,.81227,.15019,1.59927,-1.52216,.14974,.949,1.3117,.14839,1.22369,.44999,.14726,1.73661,-1.69066,.14681,.6001,1.01849,.14546,1.47699,.67769,.14254,1.66145,-1.59587,.14209,.82036,1.2066,.14074,1.32827,.30517,.13961,1.76844,-1.73502,.13916,.45862,1.62868,.13826,-.75385,.89337,.13781,1.55657,-1.47253,.13736,1.02605,1.75277,.13534,-.38661,.53837,.13489,1.7123,-1.6587,.13444,.68602,1.09317,.13309,1.42382,.76204,.13016,1.62553,-1.55271,.12971,.90125,1.27351,.12836,1.26558,1.77927,.12769,-.24064,.39528,.12724,1.75145,-1.71021,.12679,.5469,1.58887,.12589,-.83646,.97218,.12544,1.50968,-1.41893,.12499,1.10046,.62542,.12251,1.6834,-1.62231,.12206,.77021,1.16502,.12071,1.36681,-1.75004,.11914,.40395,.84446,.11779,1.58525,-1.50538,.11734,.97983,.48443,.11486,1.72978,-1.68083,.11441,.63381,1.04848,.11306,1.45873,.71088,.11014,1.65001,-1.58156,.10969,.85242,1.23383,.10834,1.30611,.34004,.10721,1.76433,-1.72788,.10676,.493,1.61564,.10586,-.78645,.9247,.10541,1.54072,-1.454,.10496,1.05587,.57236,.10249,1.7035,-1.64696,.10204,.71911,1.12206,.10069,1.40387,.79452,.09776,1.6122,-1.53658,.09731,.93244,1.29943,.09596,1.24188,1.77622,.09529,-.27562,.42986,.09484,1.74534,-1.7011,.09439,.58081,1.00255,.09304,1.49206,-1.39872,.09259,1.12917,.65885,.09011,1.67266,-1.60868,.08966,.80257,1.19272,.08831,1.34523,-1.74362,.08674,.43847,1.64064,.08584,-.73549,.87612,.08539,1.57007,-1.48748,.08494,1.01004,1.76043,.08291,-.36609,.5186,.08246,1.7217,-1.66979,.08201,.66714,1.07779,.08066,1.4394,.74364,.07774,1.63736,-1.5661,.07729,.88395,1.26025,.07594,1.28297,.37475,.07481,1.75897,-1.71949,.07436,.5271,1.60143,.07346,-.81856,.95544,.07301,1.52375,-1.4344,.07256,1.08501,.60602,.07009,1.69347,-1.63402,.06964,.75176,1.15021,.06829,1.38288,-1.75743,.06671,.38339,1.66382,.06581,-.68365,.8265,.06536,1.59769,-1.51933,.06491,.96303,1.77191,.06289,-.31047,.4642,.06244,1.73799,-1.69077,.06199,.61437,1.03227,.06064,1.47335,.69187,.05771,1.66072,-1.59389,.05726,.83442,1.4242,.05636,-1.0993,1.21962,.05591,1.32265,.31916,.05479,1.77063,-1.73596,.05434,.47274,1.62711,.05344,-.7679,.90722,.05299,1.55375,-1.4685,.05254,1.03959,.55246,.05006,1.71239,-1.65755,.04961,.70006,1.10638,.04826,1.41901,1.68515,.04579,-.63101,.77592,.04534,1.62354,-1.5495,.04489,.9149,.40924,.04241,1.75235,-1.70987,.04196,.56087,1.58606,.04106,-.85014,.98555,.04061,1.50567,-1.41375,.04016,1.11342,.63929,.03769,1.68223,-1.6199,.03724,.78391,1.17759,.03589,1.36088,-1.7505,.03431,.41782,1.65098,.03341,-.71634,.85794,.03296,1.58204,-1.50098,.03251,.99297,1.76634,.03049,-.34515,.49825,.03004,1.72941,-1.67923,.02959,.64754,1.54078,.02869,-.93014,1.06129,.02824,1.45357,.72444,.02531,1.64759,-1.57795,.02486,.86571,.35378,.02239,1.76475,-1.72707,.02194,.50672,1.61241,.02104,-.7998,.93771,.02059,1.53632,-1.44846,.02014,1.06843,.58597,.01766,1.70186,-1.64412,.01721,.73251,1.4914,.01631,-1.00769,1.13423,.01586,1.3976,-1.76308,.01429,.36241,1.67301,.01339,-.66397,.80769,.01294,1.60856,-1.53179,.01249,.94523,1.77658,.01046,-.28925,.44347,.01001,1.74449,-1.69904,.00956,.59428,1.01499,.00821,1.48652,.67213,.00529,1.66979,-1.60464,.00484,.81554,1.20416,.00349,1.33791,.29792,.00236,1.77517,-1.74233,.00191,.45198,1.63697,.00101,-.74855,.8888,56e-5,1.56526,-1.48156,11e-5,1.02224,1.75952,-.00191,-.3796,.53198,-.00236,1.71959,-1.6665,-.00281,.68027,1.08958,-.00416,1.43276,-1.77369,-.00574,.30658,1.69317,-.00664,-.61083,.75652,-.00709,1.63329,-1.56089,-.00754,.89642,.38817,-.01001,1.75762,-1.71695,-.01046,.54035,.96755,-.01181,1.5178,-1.4274,-.01226,1.09653,.61907,-.01474,1.69013,-1.62953,-.01519,.76446,1.16128,-.01654,1.3752,-1.75564,-.01811,.39673,1.65969,-.01901,-.69646,.83889,-.01946,1.59244,-1.513,-.01991,.9749,1.32006,-.02081,-1.22353,1.77049,-.02194,-.32384,.47739,-.02239,1.7354,-1.68701,-.02284,.62728,1.04372,-.02419,1.46631,-1.36945,-.02464,1.16791,.70451,-.02711,1.65618,-1.58824,-.02756,.8466,.33246,-.03004,1.76878,-1.73293,-.03049,.48582,1.62181,-.03139,-.78023,.91903,-.03184,1.54738,-1.4611,-.03229,1.05078,1.75146,-.03431,-.41379,.56532,-.03476,1.70857,-1.65259,-.03521,.71253,1.1171,-.03656,1.41094,-1.30787,-.03701,1.23617,-1.76698,-.03814,.34105,1.68055,-.03904,-.64361,.78806,-.03949,1.61784,-1.54274,-.03994,.92648,1.35776,-.04084,-1.18102,.42228,-.04241,1.74925,-1.70562,-.04286,.57359,.9967,-.04421,1.49821,-1.40533,-.04466,1.12386,.65173,-.04714,1.67721,-1.6138,-.04759,.79586,1.1875,-.04894,1.35183,-1.74697,-.05051,.43076,1.64521,-.05141,-.72846,.8695,-.05186,1.57521,-1.49315,-.05231,1.00387,1.29545,-.05321,-1.24859,1.76316,-.05434,-.35819,.51096,-.05479,1.72508,-1.67379,-.05524,.65982,1.53326,-.05614,-.94126,1.0717,-.05659,1.44508,-1.34585,-.05704,1.19392,.73637,-.05951,1.64141,-1.57073,-.05996,.87705,.36674,-.06244,1.76114,-1.72232,-.06289,.5193,.94859,-.06424,1.52842,-1.43962,-.06469,1.07857,1.22972,-.06559,-1.31281,1.74217,-.06671,-.44766,.59825,-.06716,1.69635,-1.63753,-.06761,.74425,1.14381,-.06896,1.38814,-1.28281,-.06941,1.26078,-1.75904,-.07054,.37526,1.66675,-.07144,-.6759,.81902,-.07189,1.60126,-1.52351,-.07234,.95587,.45607,-.07481,1.73966,-1.69311,-.07526,.60641,1.56157,-.07616,-.89203,1.02512,-.07661,1.47759,-1.38229,-.07706,1.15036,1.16076,-.07796,-1.37352,.6839,-.07954,1.66312,-1.59694,-.07999,.82667,.31082,-.08246,1.77104,-1.73707,-.08291,.46446,1.62958,-.08381,-.75991,.89945,-.08426,1.55688,-1.47227,-.08471,1.03211,1.7546,-.08674,-.39225,.54414,-.08719,1.71357,-1.65941,-.08764,.69186,1.09889,-.08899,1.42286,-1.32132,-.08944,1.21906,-1.76912,-.09056,.31938,1.6864,-.09146,-.62264,.76768,-.09191,1.62549,-1.55213,-.09236,.90684,.40071,-.09484,1.75227,-1.7105,-.09529,.55236,.97744,-.09664,1.5084,-1.41715,-.09709,1.10556,1.20289,-.09799,-1.33546,1.73166,-.09911,-.48116,.6307,-.09956,1.68294,-1.62134,-.10001,.77541,-1.25689,-.10181,1.28447,-1.74986,-.10294,.40915,.84936,-.10429,1.58358,-1.50323,-.10474,.98454,1.30873,-.10564,-1.23129,.48948,-.10721,1.72885,-1.67941,-.10766,.63874,1.05278,-.10901,1.45595,-1.35831,-.10946,1.17601,1.13267,-.11036,-1.39459,.71553,-.11194,1.64787,-1.57898,-.11239,.85684,-1.18917,-.11419,1.34642,.34497,-.11486,1.7629,-1.72596,-.11531,.49777,1.61282,-.11621,-.79076,.92872,-.11666,1.53749,-1.45038,-.11711,1.05956,1.24361,-.11801,-1.29596,1.74481,-.11914,-.42597,.57687,-.11959,1.70086,-1.64388,-.12004,.72335,1.12525,-.12139,1.39967,-1.29591,-.12184,1.24329,1.05951,-.12274,-1.44996,-1.76067,-.12296,.35346,.79838,-.12431,1.60846,-1.53247,-.12476,.93593,-1.11835,-.12656,1.40474,.43434,-.12724,1.74217,-1.6975,-.12769,.58498,1.00555,-.12904,1.48736,-1.39372,-.12949,1.13171,1.17525,-.13039,-1.35712,.66265,-.13196,1.66838,-1.60403,-.13241,.80596,-1.23013,-.13421,1.3072,-1.73946,-.13534,.44269,.87903,-.13669,1.56481,-1.48194,-.13714,1.01245,.52247,-.13961,1.71684,-1.66455,-.14006,.67055,1.52225,-.14096,-.9502,1.07962,-.14141,1.43332,-1.33342,-.14186,1.20078,1.10384,-.14276,-1.41462,-1.76948,-.14299,.29746,.74658,-.14434,1.6315,-1.55995,-.14479,.88634,-1.16115,-.14659,1.36757,.37881,-.14726,1.75352,-1.71365,-.14771,.53065,.95727,-.14906,1.51704,-1.42752,-.14951,1.08621,1.21645,-.15041,-1.31819,1.7338,-.15154,-.45931,.60912,-.15199,1.68697,-1.62723,-.15244,.75425,-1.26964,-.15424,1.26658,1.02957,-.15514,-1.4683,-1.75098,-.15536,.38721,.82844,-.15671,1.59032,-1.51177,-.15716,.96428,-1.08916,-.15896,1.42424,.46758,-.15964,1.73086,-1.68332,-.16009,.6171,1.55003,-.16099,-.90083,1.03287,-.16144,1.46531,-1.36937,-.16189,1.15699,1.14686,-.16279,-1.37776,.69404,-.16436,1.65266,-1.58562,-.16481,.83585,-1.20257,-.16661,1.32894,-1.72785,-.16774,.47582,.908,-.16909,1.54498,-1.45964,-.16954,1.03957,.555,-.17201,1.70364,-1.64856,-.17246,.7018,1.10563,-.17381,1.40974,-1.30765,-.17426,1.22461,1.07431,-.17516,-1.43359,-1.76052,-.17539,.3314,.77702,-.17674,1.614,-1.53985,-.17719,.91512,-1.13238,-.17899,1.38769,.41227,-.17966,1.74292,.87332,-.17989,-1.56364,-1.70016,-.18011,.56305,.98504,-.18146,1.49558,-1.4037,-.18191,1.11199,1.18849,-.18281,-1.33943,.64083,-.18439,1.67193,-1.60946,-.18484,.78452,-1.24255,-.18664,1.28889,.999,-.18754,-1.48554,-1.74008,-.18776,.42057,.85781,-.18911,1.57111,-1.49006,-.18956,.99186,-1.05929,-.19136,1.44267,.50037,-.19204,1.71836,-1.66799,-.19249,.64867,1.05936,-.19384,1.44229,-1.34411,-.19429,1.18136,1.11773,-.19519,-1.39735,.72483,-.19676,1.63582,-1.56614,-.19721,.86505,-1.17424,-.19901,1.34965,-1.71504,-.20014,.5085,.93622,-.20149,1.52411,-1.43638,-.20194,1.06585,.58701,-.20441,1.68927,-1.63143,-.20486,.73243,-1.28104,-.20666,1.24749,1.04411,-.20756,-1.45147,-1.75032,-.20779,.36498,.80678,-.20914,1.59542,-1.51873,-.20959,.94315,-1.10291,-.21139,1.40674,.44531,-.21206,1.73111,-1.68549,-.21251,.59493,1.01201,-.21386,1.47313,-1.37897,-.21431,1.13689,1.15979,-.21521,-1.35962,1.7082,-.21634,-.52465,.67196,-.21679,1.65574,-1.5906,-.21724,.81412,-1.21466,-.21904,1.3102,-1.72796,-.22016,.4535,.88646,-.22151,1.55084,-1.46736,-.22196,1.01862,-1.02877,-.22376,1.45999,.53268,-.22444,1.70466,-1.65152,-.22489,.67965,1.08498,-.22624,1.41832,-1.31799,-.22669,1.20479,1.08792,-.22759,-1.41585,1.67773,-.22871,-.61067,.75498,-.22916,1.61787,-1.54562,-.22961,.8935,-1.14517,-.23141,1.36931,-1.70106,-.23254,.54067,.96364,-.23389,1.50223,-1.41218,-.23434,1.09125,.61848,-.23681,1.67374,-1.61321,-.23726,.76241,-1.25361,-.23906,1.26937,1.01328,-.23996,-1.46822,-1.7389,-.24019,.39815,1.64286,-.24109,-.69491,.83585,-.24154,1.57576,-1.4966,-.24199,.97037,-1.07277,-.24379,1.42469,.4779,-.24446,1.7181,-1.66968,-.24491,.62625,1.03813,-.24626,1.44971,-1.35335,-.24671,1.16085,1.13038,-.24761,-1.37874,.70247,-.24919,1.63842,-1.57068,-.24964,.84299,-1.18603,-.25144,1.33046,-1.71466,-.25256,.48596,.91434,-.25391,1.52955,-1.4437,-.25436,1.04452,.56445,-.25684,1.6898,-1.63392,-.25729,.71,1.10971,-.25864,1.39343,-1.29103,-.25909,1.22724,-1.74785,-.26021,.34252,.78444,-.26156,1.59882,-1.52407,-.26201,.92118,-1.11542,-.26381,1.38789,.42274,-.26449,1.72955,-1.6859,-.26494,.57231,1.56033,-.26584,-.85715,.99024,-.26629,1.47936,-1.38707,-.26674,1.11574,.64934,-.26921,1.65707,-1.5939,-.26966,.79169,1.43152,-.27056,-1.05714,-1.22541,-.27146,1.29022,.98187,-.27236,-1.48383,-1.72628,-.27259,.43088,.86416,-.27394,1.55505,-1.47349,-.27439,.99676,-1.04199,-.27619,1.44152,.50997,-.27686,1.7039,-1.65273,-.27731,.65696,1.06336,-.27866,1.42535,-1.32687,-.27911,1.18385,1.10029,-.28001,-1.39676,.73232,-.28159,1.62001,-1.54972,-.28204,.87111,-1.15667,-.28384,1.34965,-1.70017,-.28496,.5179,.9414,-.28631,1.50724,-1.41911,-.28676,1.06953,.59565,-.28924,1.67378,-1.61523,-.28969,.73967,1.46158,-.29059,-1.00962,-1.26327,-.29149,1.24867,-1.73591,-.29261,.3755,.81317,-.29396,1.57871,-1.50152,-.29441,.94804,-1.08501,-.29621,1.40535,.4551,-.29689,1.71603,-1.6696,-.29734,.60335,1.53885,-.29824,-.88487,1.01597,-.29869,1.45554,-1.36108,-.29914,1.13929,.67956,-.30161,1.63928,.60622,-.30184,-1.66775,-1.57352,-.30206,.82023,-1.19647,-.30386,1.31001,.94991,-.30476,-1.49826,-1.71246,-.30499,.46311,.89167,-.30634,1.53332,-1.44943,-.30679,1.02227,.54149,-.30926,1.68853,-1.63466,-.30971,.687,1.08767,-.31106,1.40008,-1.29957,-.31151,1.20585,.76145,-.31399,1.6005,-1.52773,-.31444,.89842,-1.12663,-.31624,1.36773,-1.68451,-.31736,.54927,.96762,-.31871,1.48396,-1.39362,-.31916,1.0936,.62622,-.32164,1.65662,-1.59546,-.32209,.76862,-1.23475,-.32389,1.26905,-1.72276,-.32501,.408,.84113,-.32636,1.55756,-1.47799,-.32681,.97403,-1.05398,-.32861,1.42167,.48692,-.32929,1.70132,-1.65216,-.32974,.63376,1.04079,-.33109,1.43078,-1.33425,-.33154,1.16184,.70908,-.33401,1.62038,-1.55211,-.33446,.84799,-1.16681,-.33626,1.32871,-1.69746,-.33739,.49479,.91836,-.33874,1.51059,-1.42445,-.33919,1.04685,.5724,-.34166,1.67201,-1.61549,-.34211,.71635,1.11101,-.34346,1.37393,-1.27148,-.34391,1.22681,.78983,-.34639,1.57993,-1.50475,-.34684,.92489,-1.09595,-.34864,1.38468,.43203,-.34931,1.71211,-1.6677,-.34976,.58003,.99293,-.35111,1.45973,-1.36726,-.35156,1.11669,.65613,-.35404,1.63834,-1.57462,-.35449,.79681,-1.20549,-.35629,1.28835,-1.70841,-.35741,.43997,.86826,-.35876,1.53538,-1.45352,-.35921,.99912,.51816,-.36169,1.68544,-1.6336,-.36214,.66349,1.06467,-.36349,1.40512,-1.30659,-.36394,1.18337,1.08038,-.36484,-1.39272,.73787,-.36641,1.6004,-1.52968,-.36686,.87492,-1.13649,-.36866,1.34628,-1.68128,-.36979,.52587,.94416,-.37114,1.48688,-1.39857,-.37159,1.07048,.60267,-.37406,1.65435,-1.59524,-.37451,.74495,1.13336,-.37586,1.34693,-1.24263,-.37631,1.2467,.81742,-.37879,1.55832,-1.48081,-.37924,.95047,1.29247,-.38014,-1.19374,.46358,-.38171,1.69688,-1.64976,-.38216,.61012,1.01732,-.38351,1.43456,-1.34006,-.38396,1.13878,.68531,-.38644,1.61895,-1.55275,-.38689,.82418,-1.17554,-.38869,1.30653,-1.69288,-.38981,.47138,.89454,-.39116,1.51221,-1.42813,-.39161,1.02327,1.22793,-.39251,-1.25624,.54877,-.39409,1.66839,-1.61394,-.39454,.69249,1.08755,-.39589,1.37859,-1.27816,-.39634,1.20384,1.04881,-.39724,-1.40791,.76588,-.39881,1.57936,-1.50626,-.39926,.90097,1.32615,-.40016,-1.14943,-1.10554,-.40106,1.36269,.40875,-.40174,1.70632,-1.66396,-.40219,.55632,.96905,-.40354,1.46222,-1.37182,-.40399,1.09311,.63224,-.40646,1.63556,-1.57393,-.40691,.77276,-1.21305,-.40871,1.26549,-1.70249,-.40984,.41662,.84416,-.41119,1.53568,-1.45592,-.41164,.97512,1.26366,-.41254,-1.21366,1.31941,-.41299,1.15264,.49453,-.41411,1.68046,-1.63069,-.41456,.63951,1.04073,-.41591,1.40851,-1.31205,-.41636,1.15982,.71374,-.41884,1.59848,-1.52987,-.41929,.8507,-1.14493,-.42109,1.32356,-1.67618,-.42221,.50217,.91992,-.42356,1.48807,-1.40186,-.42401,1.04643,.57871,-.42649,1.65021,-1.5932,-.42694,.72072,1.10941,-.42829,1.35122,-1.24897,-.42874,1.22321,.79307,-.43121,1.55727,-1.48188,-.43166,.92612,1.29775,-.43256,-1.16993,.44001,-.43414,1.69054,-1.64549,-.43459,.58609,.99298,-.43594,1.43665,-1.34425,-.43639,1.1147,.66106,-.43886,1.61567,-1.55159,-.43931,.79973,1.38839,-.44021,-1.05763,-1.1828,-.44111,1.28313,-1.6864,-.44224,.44773,.87001,-.44359,1.51206,-1.43011,-.44404,.99881,1.23411,-.44494,-1.23247,1.33556,-.44539,1.12156,.52482,-.44651,1.66288,-1.61053,-.44696,.66815,1.06313,-.44831,1.38158,-1.28326,-.44876,1.17977,1.05801,-.44966,-1.38507,.74136,-.45124,1.57695,-1.506,-.45169,.87633,1.33016,-.45259,-1.1251,-1.1137,-.45349,1.33941,.3853,-.45416,1.69861,-1.65831,-.45461,.53229,.94435,-.45596,1.46297,-1.37472,-.45641,1.06857,.60793,-.45889,1.6309,-1.5714,-.45934,.74813,1.41688,-.46024,-1.01027,1.1302,-.46069,1.32304,-1.21908,-.46114,1.24145,.81939,-.46361,1.53417,-1.45656,-.46406,.95031,1.26859,-.46496,-1.18932,1.29559,-.46541,1.15967,.47065,-.46654,1.67357,-1.6259,-.46699,.61512,1.01591,-.46834,1.41018,-1.31587,-.46879,1.13522,.6891,-.47126,1.59469,-1.52823,-.47171,.82583,1.36084,-.47261,-1.07924,-1.15189,-.47351,1.29959,-1.66914,-.47464,.4782,.89493,-.47599,1.48746,-1.40342,-.47644,1.02148,.55442,-.47891,1.64416,-1.58928,-.47936,.69599,1.08448,-.48071,1.35382,-1.25374,-.48116,1.1986,1.02565,-.48206,-1.39845,.76813,-.48364,1.55437,-1.48116,-.48409,.90101,1.30139,-.48499,-1.14507,.41626,-.48656,1.68226,-1.6393,-.48701,.5617,.9678,-.48836,1.43696,-1.34675,-.48881,1.08964,.63638,-.49129,1.61048,-1.54857,-.49174,.77468,1.38975,-.49264,-1.03242,-1.1885,-.49354,1.25852,.84479,-.49601,1.51007,-1.43032,-.49646,.9735,1.23871,-.49736,-1.20758,1.31115,-.49781,1.1283,.5006,-.49894,1.65543,-1.60521,-.49939,.64336,1.03779,-.50074,1.38284,-1.28672,-.50119,1.15463,1.06577,-.50209,-1.36089,.71631,-.50366,1.57265,-1.50389,-.50411,.85099,1.33247,-.50501,-1.09977,1.21196,-.50546,1.23113,-1.12037,-.50591,1.31485,.36175,-.50659,1.68894,-1.65072,-.50704,.50798,.91889,-.50839,1.46191,-1.37588,-.50884,1.0431,1.17298,-.50974,-1.26661,.58326,-.51131,1.62431,-1.56697,-.51176,.72298,1.41687,-.51266,-.98471,-1.2235,-.51356,1.21626,.99279,-.51446,-1.41056,.794,-.51604,1.53077,-1.45538,-.51649,.92472,1.27187,-.51739,-1.1639,1.27054,-.51784,1.16515,.44657,-.51896,1.66471,-1.61917,-.51941,.59035,.99022,-.52076,1.41006,-1.31799,-.52121,1.10961,.66401,-.52369,1.58898,-1.52472,-.52414,.80032,1.36179,-.52504,-1.0535,-1.15729,-.52594,1.27439,.86924,-.52841,1.48499,-1.4032,-.52886,.99565,1.20813,-.52976,-1.22465,.52983,-.53134,1.63614,-1.58343,-.53179,.67078,1.44215,-.53269,-.93618,1.05859,-.53314,1.35467,-1.25684,-.53359,1.17288,1.03316,-.53449,-1.37364,.74264,-.53606,1.54956,-1.47858,-.53651,.87519,1.30332,-.53741,-1.11917,1.22873,-.53786,1.20039,-1.08828,-.53831,1.32886,.39238,-.53899,1.67198,.94182,-.54079,1.43545,-1.34751,-.54124,1.06362,1.14145,-.54214,-1.28186,.6113,-.54371,1.60334,-1.54362,-.54416,.74907,1.38932,-.54506,-1.00633,.04669,-.54574,-1.71464,-1.1926,-.54596,1.23273,.95949,-.54686,-1.42138,.81893,-.54844,1.50618,-1.4287,-.54889,.94739,1.24163,-.54979,-1.18156,1.28548,-.55024,1.13348,.47616,-.55136,1.64599,-1.59792,-.55181,.61818,1.01156,-.55316,1.3823,-1.28846,-.55361,1.12844,1.07203,-.55451,-1.33539,.69078,-.55609,1.5664,-1.49988,-.55654,.825,1.33302,-.55744,-1.07346,-1.12547,-.55834,1.28902,.89268,-.56081,1.45898,-1.37523,-.56126,1.01672,1.17691,-.56216,-1.24051,.55827,-.56374,1.61571,-1.56059,-.56419,.69733,1.41502,-.56509,-.95833,-1.22625,-.56599,1.18994,1.00007,-.56689,-1.3851,.76803,-.56846,1.52544,-1.45233,-.56891,.89838,1.27342,-.56981,-1.13741,1.24428,-.57026,1.16901,.42233,-.57139,1.65383,.96369,-.57319,1.4081,-1.31834,-.57364,1.08301,1.10935,-.57454,-1.29586,.6385,-.57611,1.58127,-1.51926,-.57656,.77423,1.36093,-.57746,-1.02684,-1.16106,-.57836,1.24797,.84286,-.58084,1.48061,-1.40113,-.58129,.96899,1.21071,-.58219,-1.19801,.50499,-.58376,1.6261,-1.57558,-.58421,.64516,1.43886,-.58511,-.90957,-1.25821,-.58601,1.14608,1.03916,-.58691,-1.34748,.71663,-.58849,1.54276,-1.47407,-.58894,.84869,1.30347,-.58984,-1.09227,1.20193,-.59029,1.20288,-1.09309,-.59074,1.30237,.91507,-.59321,1.43204,-1.34643,-.59366,1.03667,1.14507,-.59456,-1.25511,.58589,-.59614,1.59416,-1.5367,-.59659,.72295,1.38702,-.59749,-.97938,-1.19501,-.59839,1.20578,.96653,-.59929,-1.39523,.79245,-.60086,1.50033,-1.42517,-.60131,.9205,1.24281,-.60221,-1.15445,1.25856,-.60266,1.13702,.45154,-.60379,1.63449,-1.5886,-.60424,.59265,-1.28842,-.60604,1.10123,1.0767,-.60694,-1.30856,.6648,-.60851,1.55812,-1.49389,-.60896,.7984,1.33174,-.60986,-1.0462,-1.12893,-.61076,1.26193,.86576,-.61324,1.4541,-1.37271,-.61369,.98948,1.17914,-.61459,-1.21322,.53301,-.61616,1.60507,-1.55217,-.61661,.67123,1.41125,-.61751,-.93115,-1.22725,-.61841,1.1625,1.00581,-.61931,-1.35823,.74152,-.62089,1.5181,-1.44732,-.62134,.87132,1.27318,-.62224,-1.10988,1.21682,-.62269,1.17116,.39801,-.62381,1.64087,1.48085,-.62516,-.8101,.93637,-.62561,1.40422,-1.31685,-.62606,1.05544,1.11266,-.62696,-1.26843,.61262,-.62854,1.57151,-1.51178,-.62899,.74759,1.35818,-.62989,-.99929,-1.16313,-.63079,1.22034,.9326,-.63169,-1.404,.81585,-.63326,1.47423,-1.39712,-.63371,.94152,1.21153,-.63461,-1.17024,.47996,-.63619,1.61397,-1.56567,-.63664,.61916,1.4336,-.63754,-.88223,-1.25776,-.63844,1.11823,1.04355,-.63934,-1.31994,.69016,-.64091,1.53392,-1.46756,-.64136,.82154,1.30176,-.64226,-1.06438,1.17399,-.64271,1.2036,1.49895,-.64519,-.75954,.88758,-.64564,1.42666,-1.34346,-.64609,1.00881,1.14697,-.64699,-1.22714,.56017,-.64856,1.5829,-1.52771,-.64901,.69634,1.38278,-.64991,-.9516,-1.19564,-.65081,1.17766,.97203,-.65171,-1.36763,.76541,-.65329,1.49244,-1.41966,-.65374,.89286,1.24217,-.65464,-1.12626,1.23041,-.65509,1.13883,.42681,-.65621,1.62087,1.45404,-.65756,-.8327,.95653,-.65801,1.37552,-1.2865,-.65846,1.07301,1.0797,-.65936,-1.28042,.63843,-.66094,1.54776,-1.48586,-.66139,.77122,1.32854,-.66229,-1.01802,-1.13066,-.66319,1.2336,.89832,-.66409,-1.41139,1.51509,-.66521,-.70852,.83818,-.66566,1.44719,-1.36822,-.66611,.96139,1.1796,-.66701,-1.18476,.50753,-.66859,1.59229,-1.54166,-.66904,.64473,1.40549,-.66994,-.90321,-1.22642,-.67084,1.13397,1.00993,-.67174,-1.32996,.71452,-.67331,1.50868,-1.44028,-.67376,.84359,1.27105,-.67466,-1.08133,1.18818,-.67511,1.17152,1.47254,-.67759,-.78263,.90827,-.67804,1.39832,-1.31342,-.67849,1.02693,1.11422,-.67939,-1.23973,.58642,-.68096,1.55962,-1.50221,-.68141,.72045,1.35346,-.68231,-.97088,-1.1634,-.68321,1.19152,.93787,-.68411,-1.37564,.78824,-.68569,1.46578,-1.3911,-.68614,.91326,1.21049,-.68704,-1.14135,.45479,-.68861,1.59968,-1.55362,-.68906,.59283,1.42629,-.68996,-.85419,-1.25542,-.69086,1.08932,1.04625,-.69176,-1.29105,.66325,-.69334,1.52295,-1.45897,-.69379,.79377,1.29811,-.69469,-1.03553,1.14492,-.69514,1.20247,.86372,-.69649,-1.41735,1.48908,-.69761,-.7321,.85939,-.69806,1.41921,-1.33849,-.69851,.98006,1.14706,-.69941,-1.19795,.53421,-.70099,1.56947,-1.51658,-.70144,.6693,1.3765,-.70234,-.92302,-1.19441,-.70324,1.14841,.9759,-.70414,-1.33859,.73783,-.70571,1.48242,-1.41208,-.70616,.86451,1.23962,-.70706,-1.097,1.20103,-.70751,1.13884,1.44516,-.70999,-.80463,.92778,-.71044,1.36912,-1.28262,-.71089,1.04381,1.08095,-.71179,-1.25097,.6117,-.71336,1.53523,-1.4757,-.71381,.74349,1.32333,-.71471,-.98893,.90336,-.71651,-1.38223,1.50365,-.71764,-.6812,.80995,-.71809,1.43817,-1.36169,-.71854,.93247,1.17817,-.71944,-1.15513,.48189,-.72101,1.57732,-1.52897,-.72146,.61786,1.39764,-.72236,-.87453,-1.22365,-.72326,1.10434,1.01235,-.72416,-1.30028,.68705,-.72574,1.49709,-1.43112,-.72619,.8152,1.26694,-.72709,-1.05176,1.15836,-.72754,1.17,.82887,-.72889,-1.42186,1.46207,-.73001,-.7546,.87943,-.73046,1.39034,-1.30797,-.73091,.99749,1.11396,-.73181,-1.20977,.55994,-.73339,1.54551,-1.49046,-.73384,.69283,1.34667,-.73474,-.94162,.94148,-.73654,-1.34578,.76005,-.73811,1.45517,-1.38298,-.73856,.88425,1.20752,-.73946,-1.11135,.42952,-.74104,1.58315,-1.53935,-.74149,.56622,1.41684,-.74239,-.82548,-1.25109,-.74329,1.05939,1.04718,-.74419,-1.2608,.63596,-.74576,1.50976,-1.4482,-.74621,.76542,1.29242,-.74711,-1.00572,.86856,-.74891,-1.38735,1.47701,-.75004,-.70418,.83051,-.75049,1.40962,-1.33144,-.75094,.95045,1.14525,-.75184,-1.16754,.50805,-.75341,1.55379,-1.50323,-.75386,.64186,1.3681,-.75476,-.89366,.97803,-.75656,-1.30808,.70975,-.75814,1.4702,-1.40234,-.75859,.83546,1.23506,-.75949,-1.06668,1.17042,-.75994,1.13693,.7938,-.76129,-1.4249,1.43409,-.76241,-.77596,.89825,-.76286,1.36058,-1.27668,-.76331,1.01363,1.08033,-.76421,-1.22019,.58466,-.76579,1.52044,-1.46331,-.76624,.71526,1.31602,-.76714,-.95896,.90673,-.76894,-1.35151,.78112,-.77051,1.42694,-1.35301,-.77096,.90276,1.17478,-.77186,-1.12433,.45611,-.77344,1.56005,-1.514,-.77389,.59068,1.3876,-.77479,-.84514,-1.21886,-.77569,1.07363,1.01296,-.77659,-1.26919,.65915,-.77816,1.48323,-1.41974,-.77861,.7862,1.26076,-.77951,-1.0212,.8335,-.78131,-1.39098,1.44936,-.78244,-.72604,.84986,-.78289,1.38015,-1.3004,-.78334,.96714,1.11176,-.78424,-1.17854,.53322,-.78581,1.52911,-1.47644,-.78626,.66478,1.33771,-.78716,-.91154,.94334,-.78896,-1.3144,.73132,-.79054,1.4423,-1.37265,-.79099,.8545,1.2025,-.79189,-1.08023,.75856,-.79369,-1.42641,-1.52276,-.79391,.53936,1.40515,-.79481,-.79613,-1.24466,-.79571,1.02843,1.04621,-.79661,-1.22917,.60832,-.79819,1.49427,-1.43517,-.79864,.73653,1.28458,-.79954,-.97498,.87169,-.80134,-1.35573,1.46265,-.80246,-.67581,.80098,-.80291,1.39777,-1.32221,-.80336,.91999,1.14143,-.80426,-1.13591,.48173,-.80584,1.53576,-1.48756,-.80629,.61407,1.35748,-.80719,-.86354,.97833,-.80899,-1.27609,.68121,-.81056,1.45566,-1.39033,-.81101,.80575,1.22838,-.81191,-1.03531,.79824,-.81371,-1.39308,1.42072,-.81484,-.74672,.86794,-.81529,1.34981,-1.26858,-.81574,.98249,1.07775,-.81664,-1.18809,.55735,-.81821,1.50329,-1.4486,-.81866,.68655,1.3065,-.81956,-.92811,.90832,-.82136,-1.31921,.7517,-.82294,1.41341,-1.34209,-.82339,.87226,1.1693,-.82429,-1.09238,.43027,-.82586,1.54039,.7232,-.82609,-1.42638,-1.49666,-.82631,.56321,1.37528,-.82721,-.81506,-1.21194,-.82811,1.04184,1.01164,-.82901,-1.23665,.63087,-.83059,1.46701,-1.40604,-.83104,.7566,1.25239,-.83194,-.98965,.83642,-.83374,-1.35842,1.4343,-.83486,-.69699,.81959,-.83531,1.36767,-1.29059,-.83576,.93588,1.10752,-.83666,-1.14603,.50632,-.83824,1.5103,-1.46003,-.83869,.63633,1.32648,-.83959,-.88065,.94333,-.84139,-1.28148,.70209,-.84296,1.42705,-1.36001,-.84341,.82404,1.19532,-.84431,-1.04802,.76282,-.84611,-1.39363,1.39111,-.84724,-.76616,-1.23602,-.84814,.99645,1.04324,-.84904,-1.19615,.58038,-.85061,1.47635,-1.41975,-.85106,.70712,1.27449,-.85196,-.94331,.87303,-.85376,-1.32247,.77082,-.85534,1.38356,-1.31067,-.85579,.88869,1.13549,-.85669,-1.10306,.45531,-.85826,1.51528,-1.46945,-.85871,.58595,1.34451,-.85961,-.83269,.97667,-.86141,-1.24261,.65224,-.86299,1.43869,-1.37595,-.86344,.7754,1.21947,-.86434,-1.0029,.80094,-.86614,-1.35952,1.40494,-.86726,-.71694,.83689,-.86771,1.33667,-1.25819,-.86816,.95039,1.07308,-.86906,-1.15466,.52982,-.87064,1.48367,-1.43145,-.87109,.65739,1.29465,-.87199,-.89639,.90802,-.87379,-1.2853,.72172,-.87536,1.39745,-1.32879,-.87581,.841,1.16162,-.87671,-1.05926,.7273,-.87851,-1.39257,-1.47684,-.87874,.53551,1.36055,-.87964,-.78431,-1.20275,-.88054,1.00898,1.00829,-.88144,-1.20267,.60224,-.88301,1.44831,-1.38989,-.88346,.72643,1.24171,-.88436,-.95711,.83749,-.88616,-1.32413,1.41676,-.88729,-.66746,.78864,-.88774,1.35276,-1.27843,-.88819,.90374,1.10111,-.88909,-1.11224,.47927,-.89066,1.48897,-1.44113,-.89111,.60751,1.31285,-.89201,-.84897,.94134,-.89381,-1.24699,.67238,-.89539,1.40932,-1.34492,-.89584,.79288,1.18586,-.89674,-1.01469,.76532,-.89854,-1.35901,1.37459,-.89966,-.7356,-1.22504,-.90056,.96346,1.03815,-.90146,-1.16173,.55216,-.90304,1.4559,-1.40182,-.90349,.67721,1.26201,-.90439,-.91073,.87243,-.90619,-1.28752,.74006,-.90776,1.36685,-1.2967,-.90821,.85658,1.12729,-.90911,-1.06898,-1.44878,-.91114,.55756,1.32906,-.91204,-.80111,.97294,-.91384,-1.2076,.62287,-.91541,1.41917,-1.35905,-.91586,.74443,1.20819,-.91676,-.96944,.80177,-.91856,-1.32416,1.38662,-.91969,-.68664,-1.24539,-.92059,.91735,1.0662,-.92149,-1.11986,.50209,-.92306,1.46146,-1.41172,-.92351,.62783,1.28034,-.92441,-.86383,.90569,-.92621,-1.24974,.69122,-.92779,1.37892,-1.31298,-.92824,.80899,1.15159,-.92914,-1.02496,.7296,-.93094,-1.35685,-1.45439,-.93116,.50761,1.34327,-.93206,-.75292,1.00277,-.93386,-1.1672,.57329,-.93544,1.42699,-1.37116,-.93589,.69572,1.22858,-.93679,-.92359,.83661,-.93859,-1.28808,.75703,-.94016,1.33529,-1.26377,-.94061,.87071,1.09239,-.94151,-1.07714,-1.41959,-.94354,.57837,1.29667,-.94444,-.8165,.93722,-.94624,-1.21089,.64222,-.94781,1.38896,-1.32725,-.94826,.76105,.76592,-.95096,-1.32251,1.35545,-.95209,-.70447,-1.21158,-.95299,.92945,1.03079,-.95389,-1.12586,.52371,-.95546,1.43277,-1.38124,-.95591,.64685,1.24699,-.95681,-.87722,.86976,-.95861,-1.25083,.70871,-.96019,1.34751,-1.28015,-.96064,.82365,-1.42541,-.96356,.52892,1.311,-.96446,-.76882,.96699,-.96626,-1.17101,.59313,-.96784,1.39696,-1.3395,-.96829,.71286,.8006,-.97099,-1.28694,-1.23002,-.97301,.88334,1.05695,-.97391,-1.08367,.47423,-.97549,1.4365,-1.38927,-.97594,.59789,1.26341,-.97684,-.83041,.90119,-.97864,-1.21249,.66021,-.98021,1.35768,-1.29452,-.98066,.77623,.72997,-.98336,-1.31914,-1.42919,-.98359,.47956,1.32329,-.98449,-.72089,.99493,-.98629,-1.1302,.54405,-.98786,1.4029,-1.3497,-.98831,.66449,.83361,-.99101,-1.2502,-1.24645,-.99304,.8368,-1.39525,-.99596,.54893,1.2778,-.99686,-.78326,.93083,-.99866,-1.17313,.61163,-1.00024,1.36581,-1.30684,-1.00069,.72855,.76447,-1.00339,-1.28406,1.33354,-1.00451,-.67278,.49507,-1.00789,1.40679,-1.35785,-1.00834,.61604,.86488,-1.01104,-1.21235,-1.26086,-1.01306,.7899,-1.39918,-1.01599,.50007,.95865,-1.01869,-1.13281,-1.31712,-1.02071,.68069,.79728,-1.02341,-1.24779,-1.21191,-1.02544,.84838,-1.36393,-1.02836,.56759,.89436,-1.03106,-1.17347,-1.27322,-1.03309,.74273,.72825,-1.03579,-1.27937,-1.40104,-1.03601,.45139,-1.32533,-1.04074,.63275,.82834,-1.04344,-1.21041,-1.36795,-1.04839,.51923,.922,-1.05109,-1.13364,-1.28351,-1.05311,.69539,.76082,-1.05581,-1.24355,-1.33146,-1.06076,.58481,.8576,-1.06346,-1.17199,-1.23863,-1.06549,.75533,-1.36989,-1.06841,.47105,-1.29172,-1.07314,.64795,.79162,-1.07584,-1.20661,-1.33551,-1.08079,.53696,.13891,-1.08236,-1.4315,.88501,-1.08349,-1.13261,-1.24888,-1.08551,.70849,.72427,-1.08821,-1.23743,-1.36976,-1.08844,.42315,-1.29784,-1.09316,.60051,.82061,-1.09586,-1.16862,-1.20311,-1.09789,.76627,-1.33746,-1.10081,.48929,-1.25703,-1.10554,.66156,.75477,-1.10824,-1.20089,-1.30185,-1.11319,.55317,.10903,-1.11476,-1.40905,.84773,-1.11589,-1.12966,-1.21325,-1.11791,.71992,-1.33733,-1.12084,.44189,-1.26307,-1.12556,.61463,.78343,-1.12826,-1.1633,-1.30376,-1.13321,.50601,-1.26698,-1.14559,.56779,.08,-1.14716,-1.38478,-1.30355,-1.15324,.45913,-1.22716,-1.15796,.62706,-1.26876,-1.16561,.52114,-1.30123,-1.17326,.41263,.77248,-1.18069,-1.1177,-1.26841,-1.18564,.47477,.16312,-1.18721,-1.3431,.70869,-1.19306,-1.14646,-1.23248,-1.19801,.53457,-1.26591,-1.20566,.42879,.73459,-1.21309,-1.10851,-1.23189,-1.21804,.48871,-1.19488,-1.23041,.54621,-1.22912,-1.23806,.44324,.17296,-1.23964,-1.29359,-1.19397,-1.25044,.50085,-1.22418,-1.25809,.39826,.21054,-1.25966,-1.26843,-1.19084,-1.27046,.45589,-1.21705,-1.27811,.35387,.2466,-1.27969,-1.24161,-1.18549,-1.29049,.41142,.28103,-1.29971,-1.21317,-1.15102,-1.30286,.46659,-1.1779,-1.31051,.36756,-1.14514,-1.32289,.42263,-1.16809,-1.33054,.32441,-1.10961,-1.33526,.47522,-1.13698,-1.34291,.37929,-1.10308,-1.35529,.43174,1.10478,-1.35551,.42667,-1.12652,-1.36294,.33667,-1.0942,-1.37531,.3889,-1.11376,-1.38296,.2949,-1.08294,-1.39534,.3468,-1.04945,-1.40771,.39623,-1.06929,-1.41536,.30557,-1.03721,-1.42774,.35462,-1.02247,-1.44776,.3139,-.98918,-1.46014,.3599,-.9535,-1.47251,.40317,.57753,-1.65296,.41734,.56643,-1.65544,-.42271,.63771,-1.65836,-.28838,.49703,-1.66016,-.48665,.52742,-1.66061,.45188,.67793,-1.66129,-.14329,.58397,-1.66309,-.36486,.68583,-1.66421,.00556,.42069,-1.66489,-.5396,.57339,-1.66534,.37131,.64199,-1.66601,-.22857,.52123,-1.66781,-.43211,.66896,-1.66894,-.08449,.60726,-1.67006,.28657,.59541,-1.67074,-.30679,.66424,-1.67186,.06046,.45098,-1.67254,-.48911,.52577,-1.67299,.4058,.6403,-1.67366,-.16991,.53942,-1.67546,-.37663,.65442,-1.67659,-.02814,.37485,-1.67726,-.53505,.56477,-1.67771,.32606,.60078,-1.67839,-.24915,.63777,-1.67951,.11173,.47542,-1.68019,-.43697,.47599,-1.68064,.43461,.63279,-1.68131,-.11301,.29452,-1.68199,-.56937,.59184,-1.68244,.24316,.55154,-1.68311,-.32084,.36715,-1.68356,.5204,.63459,-1.68424,.0252,.40496,-1.68491,-.48691,.51946,-1.68536,.36016,.60017,-1.68604,-.19256,.49387,-1.68784,-.38379,.42467,-1.68829,.45754,.61967,-1.68896,-.05846,.32966,-1.68964,-.52578,.5515,-1.69009,.28187,.55758,-1.69076,-.26537,.31248,-1.69121,.53118,.60983,-1.69189,.07498,.42925,-1.69256,-.43701,.4719,-1.69301,.38861,.5937,-1.69369,-.13764,.18863,-1.69414,.5782,.25122,-1.69436,-.55319,-.55834,-1.69459,.23796,.50625,-1.69549,-.3302,.37242,-1.69594,.47445,.60121,-1.69661,-.00686,.35922,-1.69729,-.47977,.50825,-1.69774,.31523,.55761,-1.69841,-.21087,.25826,-1.69886,.53588,.58052,-1.69954,.1207,.44753,-1.70021,-.38599,.42271,-1.70066,.41117,.58157,-1.70134,-.08501,.13523,-1.70179,.57064,.28543,-1.70201,-.51155,-.55539,-1.70224,.18419,.53335,-1.70246,.23908,.51251,-1.70314,-.27687,.31989,-1.70359,.48524,.57774,-1.70426,.04124,.38293,-1.70494,-.43192,.46267,-1.70539,.34291,.55172,-1.70606,-.15799,.20514,-1.70651,.53454,.20957,-1.70674,-.5321,-.51335,-1.70696,.2505,.54709,-1.70719,.16187,.45969,-1.70786,-.3345,.37252,-1.70831,.42767,.56402,-1.70899,-.03529,.08426,-1.70944,.55743,.31402,-1.70966,-.46738,.49185,-1.71011,.2713,.51267,-1.71079,-.22443,.26774,-1.71124,.48988,.13333,-1.71146,-.54141,.54962,-1.71191,.08527,-.0368,-1.71236,.55359,.40058,-1.71259,-.38286,.41537,-1.71304,.36465,.54006,-1.71371,-.10736,.15377,-1.71416,.52726,.24246,-1.71439,-.49202,.51002,-1.71484,.19801,.46565,-1.71551,-.28318,-.53394,-1.71574,-.10559,.32196,-1.71596,.43796,.54133,-1.71664,.01092,.03635,-1.71709,.53878,.33669,-1.71731,-.42128,.44791,-1.71776,.29778,.5068,-1.71844,-.17358,.21664,-1.71889,.48836,.16991,-1.71911,-.50575,-.46628,-1.71934,.2578,.51726,-1.71956,.1247,-.07879,-1.72001,.52474,.41198,-1.72024,-.33324,.36697,-1.72069,.38022,.52283,-1.72136,-.05964,.10482,-1.72181,.51417,.26964,-1.72204,-.44931,.46983,-1.72249,.22868,.46535,-1.72316,-.23272,.27173,-1.72361,.44195,.09803,-1.72384,-.5087,.51383,-1.72429,.05302,-.00788,-1.72474,.51499,.35316,-1.72496,-.37387,-.51221,-1.72519,.03707,.40213,-1.72541,.31819,.49498,-1.72609,-.12498,.16727,-1.72654,.48072,.20108,-1.72676,-.46675,-.46286,-1.72699,.20803,.48109,-1.72721,.15902,-.116,-1.72766,.49166,.41701,-1.72789,-.28374,-.49839,-1.72811,-.07235,.31814,-1.72834,.38941,.50028,-1.72901,-.01547,.05897,-1.72946,.49546,.29075,-1.72969,-.40453,-.48688,-1.72991,.10174,.42706,-1.73014,.25347,.4588,-1.73081,-.18382,.22251,-1.73126,.43957,.13264,-1.73149,-.47367,.48189,-1.73194,.09042,-.04779,-1.73239,.48636,.36318,-1.73261,-.32581,-.48708,-1.73284,-.00507,.35515,-1.73306,.33221,.47735,-1.73374,-.07932,.12035,-1.73419,.46702,.22635,-1.73441,-.42495,-.45319,-1.73464,.16017,.44161,-1.73486,.1877,.41552,-1.73554,-.23506,.26956,-1.73599,.39203,.47266,-1.73666,.02448,-.33141,-1.73689,-.33674,.01688,-1.73711,.47133,.3054,-1.73734,-.35832,-.46641,-1.73756,.05782,.38229,-1.73779,.27194,.44601,-1.73846,-.13719,-.42079,-1.73869,-.19976,.17503,-1.73891,.43075,.16162,-1.73914,-.43506,.4459,-1.73959,.12252,-.08276,-1.74004,.45323,.3665,-1.74026,-.27778,-.45704,-1.74049,-.04266,.30761,-1.74071,.33955,.45407,-1.74139,-.03732,-.35934,-1.74161,-.27867,.07658,-1.74184,.44737,.24526,-1.74206,-.38088,-.43729,-1.74229,.11496,.39933,-1.74251,.21021,.40741,-1.74319,-.18791,-.42651,-1.74341,-.13638,.22194,-1.74364,.38791,.44026,-1.74431,.05953,-.28386,-1.74454,-.34061,-.02073,-1.74476,.44201,.31323,-1.74499,-.3113,-.44035,-1.74521,.01792,.33613,-1.74544,.28367,.42701,-1.74611,-.09358,-.3773,-1.74634,-.21898,.13002,-1.74656,.41547,.18439,-1.74679,-.39336,.40627,-1.74724,.14867,-.11211,-1.74769,.41596,.36287,-1.74791,-.23049,-.42236,-1.74814,-.075,.26022,-1.74836,.33987,.42529,-1.74904,28e-5,-.31272,-1.74926,-.28686,.03674,-1.74949,.42183,.25729,-1.74971,-.33513,-.41517,-1.74994,.07316,.35476,-1.75016,.226,-.19325,-1.75061,.3715,.39256,-1.75084,-.14307,-.38523,-1.75106,-.15931,.17604,-1.75129,.37683,.12446,-1.75151,-.39587,.40338,-1.75196,.08896,-.2368,-1.75219,-.33729,-.05311,-1.75241,.40771,.31383,-1.75264,-.26414,-.40887,-1.75286,-.01718,.2892,-1.75309,.28818,.40178,-1.75376,-.05379,-.33179,-1.75399,-.23118,.08828,-1.75421,.39363,.20031,-1.75444,-.34903,.36343,-1.75489,.1682,-.13511,-1.75534,.37488,.35198,-1.75556,-.18469,-.38333,-1.75579,-.10132,.21368,-1.75601,.33281,.39113,-1.75669,.03266,-.26566,-1.75691,-.28755,.00165,-1.75714,.39047,.26186,-1.75736,-.28828,-.38681,-1.75759,.03559,.30845,-1.75781,.23442,.37074,-1.75849,-.10134,-.34092,-1.75871,-.17523,.13265,-1.75894,.35853,.14398,-1.75916,-.35301,.36226,-1.75961,.11195,-.19097,-1.75984,-.32635,-.07941,-1.76006,.36861,.30669,-1.76029,-.21755,-.37205,-1.76051,-.04662,.24217,-1.76074,.28488,.37024,-1.76141,-.01869,-.2848,-1.76164,-.23563,.05069,-1.76186,.36506,.20861,-1.76209,-.30254,.31774,-1.76254,.18029,-.11217,-1.76276,-.34654,-.15092,-1.76299,.3303,.33339,-1.76321,-.14118,-.34016,-1.76344,-.12073,.16876,-1.76366,.31783,.08998,-1.76389,-.34728,.35163,-1.76434,.0589,-.21881,-1.76456,-.28008,-.02776,-1.76479,.35321,.25824,-1.76501,-.24092,-.35203,-1.76524,.0032,.2609,-1.76546,.23468,.34163,-1.76614,-.06364,-.29392,-1.76636,-.18323,.09265,-1.76659,.33254,.15579,-1.76681,-.30676,.31706,-1.76726,.12751,-.14715,-1.76749,-.30714,-.09863,-1.76771,.32475,.29108,-1.76794,-.17225,-.32983,-1.76816,-.06937,.19566,-1.76839,.27299,-.25303,-1.76884,.21723,.33212,-1.76906,.01071,-.2368,-1.76929,-.2314,.01824,-1.76951,.32938,.20828,-1.76974,-.25426,-.32413,-1.76996,.04662,.26949,-1.77019,.18388,-.15842,-1.77064,.28239,.3064,-1.77086,-.10083,-.29291,-1.77109,-.13211,.12625,-1.77131,.29413,.10518,-1.77154,-.30099,.3066,-1.77199,.07784,-.1728,-1.77221,-.26344,-.05033,-1.77244,.30973,.24533,-1.77266,-.1936,-.3104,-1.77289,-.02287,.21255,-1.77311,.2256,.30449,-1.77379,-.03102,-.24443,-1.77401,-.18203,.05703,-1.77424,.29804,.15858,-1.77446,-.25717,-.28937,-1.77469,.08214,.26767,-1.77491,.1343,-.1094,-1.77536,.2759,.26582,-1.77559,-.12895,-.28181,-1.77581,-.08409,.1503,-1.77604,.2512,.2867,-1.77671,.03308,-.18815,-1.77694,-.21701,-.00782,-1.77716,.28571,.19779,-1.77739,-.20439,-.2825,-1.77761,.01702,.2187,-1.77784,.17738,-.15598,-1.77829,.23101,.26966,-1.77851,-.06464,-.24123,-1.77874,-.13379,.08704,-1.77896,.26022,.111,-1.77919,-.24934,.2553,-1.77964,.08782,-.12822,-1.77986,-.2359,-.06444,-1.78009,.25911,.22129,-1.78031,-.1467,-.26077,-1.78054,-.04107,.16359,-1.78076,.20524,.25779,-1.78144,-.00486,-.1922,-1.78166,-.16952,.02705,-1.78189,.25327,.1502,-1.78211,-.20375,-.24683,-1.78234,.04848,.21338,-1.78256,.13015,-.10956,-1.78301,.22105,.22858,-1.78324,-.0884,-.22673,-1.78346,-.08863,.10659,-1.78369,.21702,.23215,-1.78436,.04647,-.13878,-1.78459,-.1897,-.02562,-1.78481,.23192,.17425,-1.78504,-.15257,-.22981,-1.78526,-.00517,.1647,-1.78549,.15783,-.1406,-1.78594,.1751,.22017,-1.78616,-.03386,-.18372,-1.78639,-.12275,.05212,-1.78661,.21284,.10445,-1.78684,-.19053,-.20396,-1.78706,.06933,.19551,-1.78729,.0859,-.06726,-1.78774,.19867,.18211,-1.78796,-.10014,-.20003,-1.78819,-.04871,.1135,-1.78841,.16941,-.15573,-1.78886,.12537,.1975,-1.78909,.01262,-.13569,-1.78931,-.14124,.0046,-1.78954,.19374,.1261,-1.78976,-.14439,-.18842,-1.78999,.02105,.15143,-1.79021,.11049,-.09458,-1.79066,.15679,.17353,-1.79089,-.05109,-.16045,-1.79111,-.07856,.06442,-1.79134,.1642,.06258,-1.79156,-.16244,-.15379,-1.79179,.07647,.16278,-1.79201,.04684,-.03151,-1.79246,.16151,.13035,-1.79269,-.09634,-.1587,-1.79291,-.01675,.10402,-1.79314,.11764,.00272,-1.79336,-.15441,-.10449,-1.79359,.11011,.14876,-1.79381,-.01042,-.11459,-1.79404,-.0911,.02252,-1.79426,.14183,.07763,-1.79449,-.11742,-.13375,-1.79471,.03344,.11861,-1.79494,.06428,-.04305,-1.79516,-.12465,-.05122,-1.79539,.11815,.11468,-1.79561,-.05123,-.11607,-1.79584,-.03866,.05784,-1.79606,.10399,.02679,-1.79629,-.1124,-.09274,-1.79651,.06279,.10717,-1.79674,.01581,-.06595,-1.79696,-.0811,-.00592,-1.79719,.10041,.06925,-1.79741,-.06718,-.09215,-1.79764,.00264,.06633,-1.79786,.05736,-.00961,-1.79809,-.08239,-.04562,-1.79831,.06317,.07105,-1.79854,-.01467,-.05731,-1.79876,-.03419,.01733,-1.79899,.05782,.02318,-1.79921,-.04793,-.04181,-1.79944,.01664,.03259,-1.79966,.01237,-.00905,-1.79989,-.01798],ocean:[-0,1.79989,-.02012,-.04225,1.79921,-.03239,-.07006,1.79854,.01883,-.03346,1.79786,.08106,.05043,1.79719,.08703,.11107,1.79651,.01439,.0863,1.79584,-.08672,-.01759,1.79516,-.1307,-.12213,1.79449,-.06999,-.13756,1.79381,.05757,-.04002,1.79314,.15184,.10076,1.79246,.1301,.17175,1.79179,-84e-5,.10801,1.79111,-.14231,-.04898,1.79044,-.1787,-.17755,1.78976,-.07228,-.17074,1.78909,.10006,-.02522,1.78841,.20235,.1494,1.78774,.14723,.21336,1.78706,-.02977,.10892,1.78639,-.19224,-.0884,1.78571,-.20837,-.22424,1.78504,-.05794,-.18647,1.78436,.14587,.00236,1.78369,.24177,.19725,1.78301,.14819,.24227,1.78234,-.06767,.09547,1.78166,-.23783,-.13303,1.78099,-.22447,-.26361,1.78031,-.03155,.03924,1.77896,.27157,.24318,1.77829,.13622,.25999,1.77761,-.1118,.0705,1.77694,-.27843,-.18064,1.77626,-.22861,-.29542,1.77559,.00432,.08306,1.77424,.29186,.2858,1.77356,.11311,.26698,1.77289,-.15998,.03591,1.77221,-.31301,-.22927,1.77154,-.22157,.32368,1.76884,.08027,.26343,1.76816,-.21025,-.00665,1.76749,-.34051,-.27707,1.76681,-.20397,-.33376,1.76614,.09674,.18359,1.76479,.30302,.3555,1.76411,.03903,.24957,1.76344,-.26077,-.0556,1.76276,-.35997,-.32235,1.76209,-.17645,-.08823,1.76074,.36334,.23665,1.76006,.29356,.38009,1.75939,-.00927,.22574,1.75871,-.3098,-.10938,1.75804,-.37059,-.36351,1.75736,-.13978,-.04124,1.75601,.39334,.28923,1.75534,.27411,.39644,1.75466,-.06322,.19244,1.75399,-.35566,-.16636,1.75331,-.37178,-.39908,1.75264,-.09485,.01217,1.75129,.41575,.33964,1.75061,.24495,.15037,1.74926,-.39683,-.22489,1.74859,-.36313,-.42776,1.74791,-.04274,.07065,1.74656,.42957,.4014,1.74521,-.18197,.10042,1.74454,-.43186,-.28331,1.74386,-.3445,.13272,1.74184,.43404,.42762,1.74116,.15966,.38906,1.74049,-.24358,.04365,1.73981,-.45951,-.33996,1.73914,-.31595,.19683,1.73711,.4286,.46231,1.73644,.10512,.36661,1.73576,-.30451,-.01869,1.73509,-.47867,-.39323,1.73441,-.27781,-.46205,1.73374,.14376,.26135,1.73239,.41295,.48911,1.73171,.04406,.33417,1.73104,-.3631,-.08524,1.73036,-.48845,-.45382,1.72901,.2111,-.1091,1.72834,.49086,.32466,1.72766,.38702,.2921,1.72631,-.41776,-.1545,1.72564,-.48816,-.48355,1.72496,-.17518,-.43513,1.72429,.27837,-.04403,1.72361,.51693,.38511,1.72294,.35097,.241,1.72159,-.46696,-.22489,1.72091,-.47737,-.51782,1.72024,-.11244,.02605,1.71889,.53362,.1817,1.71686,-.50928,-.29478,1.71619,-.45586,.09969,1.71416,.5401,.49115,1.71349,.25046,.11523,1.71214,-.54342,-.3625,1.71146,-.42366,.17534,1.70944,.5358,.04282,1.70741,-.56825,-.42642,1.70674,-.38107,.25137,1.70471,.52035,.44026,1.70336,-.38043,-.03416,1.70269,-.58283,-.48494,1.70201,-.32861,-.19273,1.70066,.55732,.3261,1.69999,.49366,-.11417,1.69796,-.58642,-.54011,1.69661,.26417,-.11935,1.69594,.59123,.39783,1.69526,.45587,-.51101,1.69189,.34115,-.04031,1.69121,.61496,.4649,1.69054,.40737,.04293,1.68649,.62763,.52571,1.68581,.3488,.12875,1.68176,.62857,.12182,1.67974,-.63533,-.64866,1.67839,.04755,-.64833,1.67366,.1361,-.2872,1.67299,.59886,-.05231,1.67029,-.66888,-.20841,1.66826,.64301,-.14349,1.66556,-.66732,-.61011,1.66421,.31331,-.12287,1.66354,.67642,.46315,1.66286,.51028,-.5722,1.65949,.39835,-.03209,1.65881,.69808,.06226,1.65409,.70719,.1584,1.64936,.70322,-.72538,1.64599,.06743,-.38865,1.64531,.61798,-.72023,1.64126,.16593,-.30715,1.64059,.67389,.4389,1.63519,.61117,-.66893,1.63181,.36018,-.1214,1.63114,.75143,-.62307,1.62709,.45207,-.02038,1.62641,.77095,.08367,1.62169,.77661,-.49372,1.61764,.61602,-.79269,1.61359,.08932,-.41213,1.61291,.68459,.29304,1.61224,.74486,.01341,1.61021,-.80439,-.7829,1.60886,.19653,-.32092,1.60819,.74212,-.09507,1.60549,-.80831,-.22162,1.60346,.78727,-.20431,1.60076,-.79738,-.71929,1.59941,.40559,-.11595,1.59874,.8189,-.66603,1.59469,.50336,-.00578,1.59401,.83612,-.8514,1.58591,-.00173,-.52016,1.58524,.67561,-.85269,1.58119,.11297,-.42978,1.58051,.7465,-.00247,1.57781,-.86631,-.32966,1.57579,.80512,-.11913,1.57309,-.86672,-.80831,1.57174,.34099,-.2215,1.57106,.85012,-.76287,1.56701,.45001,-.10718,1.56634,.8804,-.70258,1.56229,.55285,.01128,1.56161,.89512,.33241,1.55959,-.83498,-.6283,1.55756,.64749,.22008,1.55486,-.87975,-.56499,1.55419,-.71084,-.90904,1.55351,.01589,-.54116,1.55284,.73201,.1017,1.55014,-.90925,-.90673,1.54879,.13818,-.44258,1.54811,.80465,.36975,1.54744,.84186,-.02063,1.54541,-.92265,-.33419,1.54339,.86387,-.1447,1.54069,-.91943,-.21784,1.53866,.90833,.54989,1.53664,-.75919,-.26824,1.53596,-.89937,-.80078,1.53461,.49368,-.09555,1.53394,.93697,.44739,1.53191,-.83252,-.73373,1.52989,.60091,.03049,1.52921,.94899,-.5045,1.52651,-.80947,-.65222,1.52516,.69892,.15801,1.52449,.94391,.21482,1.52246,-.93593,-.61273,1.52179,-.74076,-.96174,1.52111,.0356,-.55753,1.52044,.78577,.28468,1.51976,.92156,.08878,1.51774,-.96363,-.95573,1.51639,.16479,-.45122,1.51571,.85966,-.04082,1.51301,-.97423,-.33507,1.51099,.91905,-.17164,1.50829,-.96727,-.21108,1.50626,.96261,.56416,1.50424,-.81178,-.30129,1.50356,-.94262,-.83381,1.50221,.53677,.45414,1.49951,-.88613,-.42735,1.49884,-.90048,-.7602,1.49749,.64778,.0516,1.49681,.99844,-.54747,1.49411,-.84137,-.67174,1.49276,.74861,.18557,1.49209,.98956,.20666,1.49006,-.98844,-.65934,1.48939,-.76616,-.56984,1.48804,.83727,.31806,1.48736,.9626,.07351,1.48534,-1.01409,-1.00033,1.48399,.19265,-.4562,1.48331,.91196,-.0628,1.48061,-1.02169,-.33273,1.47859,.97112,.68002,1.47656,-.77288,-.19979,1.47589,-1.01086,-.20159,1.47386,1.01346,.57462,1.47184,-.86226,-.33498,1.47116,-.98156,-.86254,1.46981,.57938,.45744,1.46711,-.93719,-.46585,1.46644,-.9341,-.78255,1.46509,.69363,.0744,1.46441,1.04401,.33047,1.46239,-.9961,-.58996,1.46171,-.8691,-.68737,1.46036,.79678,.21429,1.45969,1.03121,.19591,1.45766,-1.03771,-.70495,1.45699,-.78755,-.57855,1.45564,.88679,.05612,1.45294,-1.06105,-.8086,1.45226,-.69072,-.45792,1.45091,.96186,-.08638,1.44821,-1.06547,-.32752,1.44619,1.02043,-.22905,1.44349,-1.05066,-.18964,1.44146,1.06124,.58167,1.43944,-.91087,-.36926,1.43876,-1.01667,-.88742,1.43741,.62156,.45765,1.43471,-.98598,-.50443,1.43404,-.96389,-.8012,1.43269,.73857,.32393,1.42999,-1.04413,-.63204,1.42931,-.89308,-.6995,1.42796,.84357,.18283,1.42526,-1.08407,-.74967,1.42459,-.80532,-.58402,1.42324,.93452,.03684,1.42054,-1.10486,-.85507,1.41986,-.70203,-.45669,1.41851,1.00958,-.11142,1.41581,-1.10592,-.31972,1.41379,1.06723,-.25929,1.41109,-1.08701,-.17548,1.40906,1.10623,.58562,1.40704,-.95775,-.40406,1.40636,-1.04827,-.9088,1.40501,.66334,.45506,1.40231,-1.03269,-.54307,1.40164,-.9902,-.81647,1.40029,.78267,.31491,1.39759,-1.08976,-.67372,1.39691,-.91364,-.70844,1.39556,.88911,.16764,1.39286,-1.12776,-.79356,1.39219,-.8198,-.58652,1.39084,.98059,.01583,1.38814,-1.14579,-.45278,1.38611,1.05531,-.13778,1.38341,-1.14332,-.30954,1.38139,1.11173,.7118,1.37936,-.91143,-.29042,1.37869,-1.12021,-1.00781,1.37734,.57207,-.1593,1.37666,1.14866,.58674,1.37464,-1.00305,-.43932,1.37396,-1.07667,-.92698,1.37261,.70473,-.00473,1.37194,1.16523,.44989,1.36991,-1.07747,-.58174,1.36924,-1.0133,-.82865,1.36789,.82597,.30363,1.36519,-1.13317,-.71502,1.36451,-.93105,-.71446,1.36316,.93346,.15051,1.36046,-1.16897,-.83667,1.35979,-.83124,-.58631,1.35844,1.02513,-.00674,1.35574,-1.18403,-.94437,1.35506,-.71553,-.44641,1.35371,1.09917,-.16532,1.35101,-1.17789,-.2972,1.34899,1.15408,.71643,1.34696,-.95521,-.32235,1.34629,-1.15048,-1.02866,1.34494,.61074,-.14128,1.34426,1.1887,.58525,1.34224,-1.04684,-.47498,1.34156,-1.10209,-.94218,1.34021,.74574,.44236,1.33751,-1.12043,-.62041,1.33684,-1.03342,-.83797,1.33549,.8685,.29026,1.33279,-1.17449,-.75593,1.33211,-.94554,-.71775,1.33076,.97668,.13162,1.32806,-1.20786,-.87901,1.32739,-.83987,-.58359,1.32604,1.0682,-.03075,1.32334,-1.21977,-.98731,1.32266,-.71818,-.43777,1.32131,1.14127,-.19394,1.31861,-1.20981,-.28285,1.31659,1.1944,.71845,1.31456,-.99788,-.35499,1.31389,-1.178,-1.04668,1.31254,.6494,-.12155,1.31186,1.22648,.58134,1.30984,-1.08921,-.51098,1.30916,-1.12472,-.95461,1.30781,.78636,.43264,1.30511,-1.16168,-.65905,1.30444,-1.05076,-.84461,1.30309,.91028,.27497,1.30039,-1.21383,-.79645,1.29971,-.9573,-.71853,1.29836,1.01881,.11109,1.29566,-1.24456,-.9206,1.29499,-.84587,-.57852,1.29364,1.10987,-.05608,1.29094,-1.25313,-1.02917,1.29026,-.71835,-.42701,1.28891,1.18168,.67834,1.28824,1.05844,.84698,1.28689,-.93088,-.22354,1.28621,-1.23923,-.26665,1.28419,1.23279,.71802,1.28216,-1.03947,-.38827,1.28149,-1.20293,-1.06204,1.28014,.68798,-.10026,1.27946,1.26211,.57516,1.27744,-1.13019,-.54726,1.27676,-1.14472,-.96443,1.27541,.82656,.42089,1.27271,-1.20127,-.69762,1.27204,-1.06548,-.84874,1.27069,.95131,.25789,1.26799,-1.25128,-.83654,1.26731,-.9665,-.71694,1.26596,1.05988,.08906,1.26326,-1.27915,-.96145,1.26259,-.84941,-.57128,1.26124,1.15018,-.0826,1.25854,-1.28424,-.41429,1.25651,1.22047,.71686,1.25584,1.07191,.84992,1.25449,-.97154,-.25402,1.25381,-1.26627,-1.15808,1.25246,.57462,-.24873,1.25179,1.26932,.7153,1.24976,-1.08002,-.42209,1.24909,-1.2254,-1.07489,1.24774,.72647,-.07752,1.24706,1.2957,.56688,1.24504,-1.16984,-.58376,1.24436,-1.16223,-.9718,1.24301,.86633,.40723,1.24031,-1.23927,-.73607,1.23964,-1.07773,-.85052,1.23829,.99159,.23916,1.23559,-1.28691,-.8762,1.23491,-.97327,-.71313,1.23356,1.09989,.06564,1.23086,-1.31174,-1.00154,1.23019,-.85062,-.56199,1.22884,1.18917,.9746,1.22681,-.88605,-.11023,1.22614,-1.31318,-1.24072,1.22479,.44779,-.39973,1.22411,1.25768,.75525,1.22344,1.08296,.85057,1.22209,-1.01145,-.2853,1.22141,-1.29103,-1.17381,1.22006,.61125,-.22921,1.21939,1.30405,.71043,1.21736,-1.11951,-.4564,1.21669,-1.24554,-1.08536,1.21534,.76482,.55661,1.21264,-1.20818,-.62043,1.21196,-1.17738,-.97684,1.21061,.90565,.12443,1.20994,1.32686,.3918,1.20791,-1.27571,-.77438,1.20724,-1.08762,-.85008,1.20589,1.03112,.21888,1.20319,-1.32077,-.9154,1.20251,-.97776,-.70723,1.20116,1.13887,.04094,1.19846,-1.34239,-1.04088,1.19779,-.84963,-.55078,1.19644,1.22686,.63881,1.19576,1.18409,.97853,1.19441,-.92513,-.13887,1.19374,-1.34004,-1.25916,1.19239,.48241,-.38345,1.19171,1.29336,.84905,1.18969,-1.0506,-.3173,1.18901,-1.31361,-1.18724,1.18766,.648,-.2082,1.18699,1.33705,.70353,1.18496,-1.15798,-.49113,1.18429,-1.26343,-1.09356,1.18294,.80298,.54448,1.18024,-1.24522,-.65721,1.17956,-1.19026,-.97968,1.17821,.94448,.15353,1.17754,1.35271,.3747,1.17551,-1.31064,-.81249,1.17484,-1.09527,-.84752,1.17349,1.06988,.33354,1.17281,1.32411,.19717,1.17079,-1.35292,-.95411,1.17011,-.98005,-.69935,1.16876,1.17682,.01505,1.16606,-1.37116,-1.07945,1.16539,-.84656,-.53775,1.16404,1.26326,.9803,1.16201,-.96371,-.16842,1.16134,-1.36489,-1.27543,1.15999,.5174,-.36556,1.15931,1.32754,.84548,1.15729,-1.08897,-.34993,1.15661,-1.33409,-1.19849,1.15526,.68483,.6947,1.15256,-1.1954,-.5262,1.15189,-1.27917,-1.0996,1.15054,.84092,-.00168,1.14986,1.38485,.5306,1.14784,-1.28099,-.69404,1.14716,-1.20097,-.98041,1.14581,.98281,.18351,1.14514,1.37658,.35604,1.14311,-1.34407,-.85037,1.14244,-1.10078,-.84295,1.14109,1.10786,.36646,1.14041,1.34356,1.20332,1.13906,-.70325,.17412,1.13839,-1.38339,-.99231,1.13771,-.98027,-.6896,1.13636,1.21373,1.10183,1.13434,-.85979,-.01194,1.13366,-1.39809,-1.11723,1.13299,-.84151,-1.34811,1.13231,.37478,-.52303,1.13164,1.2984,.98001,1.12961,-1.00177,-.19881,1.12894,-1.3878,-1.2896,1.12759,.5527,-.34616,1.12691,1.36024,.83995,1.12489,-1.12655,-.38312,1.12421,-1.35254,-1.20763,1.12286,.72167,.68405,1.12016,-1.23179,-.56156,1.11949,-1.29283,-1.10356,1.11814,.8786,.02582,1.11746,1.41089,.51505,1.11544,-1.31549,-.73087,1.11476,-1.2096,-.97913,1.11341,1.0206,.21429,1.11274,1.39853,.33592,1.11071,-1.37604,-.88797,1.11004,-1.10423,-.83648,1.10869,1.14504,.39991,1.10801,1.36102,1.21144,1.10666,-.74008,.14982,1.10599,-1.41221,-1.02996,1.10531,-.9785,-.67807,1.10396,1.24959,.57933,1.10329,1.2989,1.10478,1.10194,-.89732,-.03994,1.10126,-1.42324,-1.15421,1.10059,-.83457,-1.36508,1.09991,.40835,-.50669,1.09924,1.33227,.97776,1.09721,-1.03928,-.22995,1.09654,-1.4088,-1.30175,1.09519,.58823,-.32533,1.09451,1.39147,.83255,1.09249,-1.16333,-.41681,1.09181,-1.36902,-1.21475,1.09046,.75847,.67167,1.08776,-1.26713,-.59714,1.08709,-1.30448,-1.10552,1.08574,.91597,.05429,1.08506,1.43516,.49794,1.08304,-1.34873,-.76766,1.08236,-1.21622,-.97592,1.08101,1.05782,.31442,1.07831,-1.40655,-.92526,1.07764,-1.10571,-.82818,1.07629,1.18141,.43382,1.07561,1.37654,1.21757,1.07426,-.77684,.12436,1.07359,-1.43943,-1.06704,1.07291,-.97483,-.66486,1.07156,1.28441,.615,1.07089,1.30957,1.10578,1.06954,-.93453,-.06886,1.06886,-1.44665,-1.19037,1.06819,-.82583,-1.38012,1.06751,.44236,-.48883,1.06684,1.36488,-.26178,1.06414,-1.42796,-1.31194,1.06279,.62394,-.30318,1.06211,1.42127,.82337,1.06009,-1.19928,-.45093,1.05941,-1.38359,-1.21991,1.05806,.79519,-.11121,1.05739,1.45243,.65765,1.05536,-1.30143,-.63289,1.05469,-1.31419,-1.10557,1.05334,.95299,.47935,1.05064,-1.38072,-.80435,1.04996,-1.2209,-.97087,1.04861,1.09445,.27793,1.04794,1.43687,.29163,1.04591,-1.43563,-.96219,1.04524,-1.10529,-.81814,1.04389,1.21694,.46813,1.04321,1.39017,1.22178,1.04186,-.8135,.09781,1.04119,-1.46505,-1.10351,1.04051,-.96933,-.65004,1.03916,1.31817,.6508,1.03849,1.31833,1.1049,1.03714,-.97136,-.09864,1.03646,-1.46834,-1.22569,1.03579,-.81537,-1.39329,1.03511,.47676,-.46953,1.03444,1.39624,-.29422,1.03174,-1.44532,-1.32023,1.03039,.65977,-.27977,1.02971,1.44963,.8125,1.02769,-1.23438,-.48541,1.02701,-1.39629,-1.22318,1.02566,.83177,.64206,1.02296,-1.33466,-.66874,1.02229,-1.32201,-1.10377,1.02094,.98963,.45936,1.01824,-1.41145,-.84089,1.01756,-1.22371,-.96405,1.01621,1.13045,.31065,1.01554,1.45333,.26763,1.01351,-1.46327,-.99873,1.01284,-1.10304,-.80645,1.01149,1.25161,.50276,1.01081,1.40196,1.22413,1.00946,-.85,.07027,1.00879,-1.4891,-1.13935,1.00811,-.96208,-1.45718,1.00744,.31891,-.63371,1.00676,1.35087,.68669,1.00609,1.32523,1.1022,1.00474,-1.0078,-.1292,1.00406,-1.48834,-1.26015,1.00339,-.80327,-1.40463,1.00271,.51146,-.44887,1.00204,1.42634,.8591,1.00136,1.22443,.96,1.00001,-1.1482,-.32721,.99934,-1.46091,-1.32668,.99799,.69567,-.2552,.99731,1.47656,.8,.99529,-1.26862,-.52018,.99461,-1.40718,-1.22462,.99326,.86818,.62499,.99056,-1.36681,-.70464,.98989,-1.32801,-1.1002,.98854,1.02585,.43805,.98584,-1.44092,-.87724,.98516,-1.2247,-.95554,.98381,1.16579,.34388,.98314,1.46805,.24249,.98111,-1.4895,-1.03483,.98044,-1.09903,-.79316,.97909,1.28541,.53767,.97841,1.41196,1.22468,.97706,-.88629,.04179,.97639,-1.5116,-1.17452,.97571,-.95315,-1.47147,.97504,.35226,-.61592,.97436,1.38248,.7226,.97369,1.33033,1.09776,.97234,-1.04378,-.16047,.97166,-1.50669,-1.29372,.97099,-.7896,-1.41418,.97031,.54643,-.42692,.96964,1.45518,.95066,.96761,-1.1832,-.36067,.96694,-1.47477,-1.33133,.96559,.73157,.78595,.96289,-1.30197,-.5552,.96221,-1.4163,-1.22429,.96086,.90435,.6065,.95816,-1.39788,-.74055,.95749,-1.33222,-1.0949,.95614,1.0616,.41549,.95344,-1.46912,-.91335,.95276,-1.22394,-.94539,.95141,1.20044,.21629,.94871,-1.51432,-1.07046,.94804,-1.09332,-.77836,.94669,1.31831,1.22348,.94466,-.92233,.01245,.94399,-1.53256,-1.20899,.94331,-.94261,-1.48405,.94264,.38604,-.59675,.94196,1.41301,.75848,.94129,1.33367,1.09163,.93994,-1.07929,-.19238,.93926,-1.52341,-1.32639,.93859,-.77443,-1.422,.93791,.58158,-.40376,.93724,1.48275,.93972,.93521,-1.2175,-.39455,.93454,-1.48693,-1.33424,.93319,.76744,.77041,.93049,-1.33441,-.5904,.92981,-1.42369,-1.22225,.92846,.94025,.58667,.92576,-1.42786,-.7764,.92509,-1.3347,-1.08795,.92374,1.09685,.39175,.92104,-1.49607,-.94917,.92036,-1.22148,-.93367,.91901,1.23437,.1891,.91631,-1.53773,-1.10557,.91564,-1.08596,-.76211,.91429,1.35028,1.2206,.91226,-.95808,-.01767,.91159,-1.552,-1.24274,.91091,-.93051,-1.49496,.91024,.42019,-.57628,.90956,1.44243,1.08387,.90754,-1.11427,-.22487,.90686,-1.53852,-1.35813,.90619,-.75783,-1.42811,.90551,.61688,-.37946,.90484,1.50907,.92725,.90281,-1.25106,-.42878,.90214,-1.49743,-1.33545,.90079,.80322,.75346,.89809,-1.36592,-.62572,.89741,-1.42938,-1.21854,.89606,.97582,.56557,.89336,-1.45672,-.81214,.89269,-1.33549,-1.0794,.89134,1.13155,.3669,.88864,-1.52174,-.98466,.88796,-1.21736,-1.56559,.88729,.04075,-.92045,.88661,1.26755,.16098,.88391,-1.55974,-1.14014,.88324,-1.07702,-1.5488,.88256,.24958,-.74447,.88189,1.38132,1.21608,.87986,-.99348,-.04853,.87919,-1.56993,-1.27573,.87851,-.91691,-1.50423,.87784,.45464,-.55456,.87716,1.47073,1.07454,.87514,-1.14869,-.25787,.87446,-1.55204,-1.38893,.87379,-.73985,-1.43256,.87311,.65226,-.35408,.87244,1.53411,.91329,.87041,-1.28386,-.4633,.86974,-1.50629,-1.335,.86839,.83885,.73515,.86569,-1.39648,-.66111,.86501,-1.43342,-1.21322,.86366,1.01104,.54325,.86096,-1.48446,-.84773,.86029,-1.33464,-1.57533,.85961,-.13932,-1.0693,.85894,1.16568,.34101,.85624,-1.54615,-1.01978,.85556,-1.21164,-1.58239,.85489,.07211,-.90577,.85421,1.29996,1.33417,.85219,-.8566,.132,.85151,-1.58035,-1.17412,.85084,-1.06654,-1.56115,.85016,.28292,-.7255,.84949,1.41139,1.20996,.84746,-1.02849,-.08004,.84679,-1.58636,-1.30794,.84611,-.90189,-1.51188,.84544,.48935,-.53166,.84476,1.4979,1.06369,.84274,-1.18252,-.29132,.84206,-1.56399,-1.41875,.84139,-.72056,-1.43538,.84071,.68766,.89791,.83801,-1.31586,-.49805,.83734,-1.51354,-1.33295,.83599,.87429,.71554,.83329,-1.42606,-.69651,.83261,-1.43584,-1.20632,.83126,1.04584,.51979,.82856,-1.51106,-.88311,.82789,-1.33218,-1.59489,.82721,-.10974,-1.05771,.82654,1.1992,.31413,.82384,-1.56927,-1.05448,.82316,-1.20436,-1.59771,.82249,.10408,-.88971,.82181,1.33156,1.33132,.81979,-.89192,.10222,.81911,-1.59956,-1.20748,.81844,-1.05459,-1.57194,.81776,.31667,-.70526,.81709,1.44048,1.2023,.81506,-1.06308,-.11216,.81439,-1.60131,-1.33933,.81371,-.88548,-1.51794,.81304,.52424,-.50764,.81236,1.52393,.90072,.81169,1.33037,1.05137,.81034,-1.21572,-.32517,.80966,-1.57439,-1.44759,.80899,-.70001,-1.43661,.80831,.72305,.88117,.80561,-1.34705,-.53299,.80494,-1.51921,-1.32931,.80359,.90949,.69469,.80089,-1.45464,-.73188,.80021,-1.43667,-1.19791,.79886,1.0802,1.35471,.79751,.87678,.49523,.79616,-1.53651,-.91825,.79549,-1.32816,-1.61306,.79481,-.0794,-1.04468,.79414,1.23207,.28633,.79144,-1.59111,-1.08872,.79076,-1.19557,-1.61155,.79009,.1366,-.8723,.78941,1.36232,1.32692,.78739,-.92699,.07171,.78671,-1.61739,-1.24018,.78604,-1.0412,-1.58119,.78536,.35078,-.68382,.78469,1.46856,1.19314,.78266,-1.0972,-.14481,.78199,-1.61478,-1.36988,.78131,-.86775,-1.52244,.78064,.55928,-.48256,.77996,1.5488,.93571,.77929,1.32558,1.03763,.77794,-1.24825,-.35935,.77726,-1.58327,-1.47542,.77659,-.67828,-1.43627,.77591,.75835,.86311,.77321,-1.37738,-.56805,.77254,-1.52332,-1.32415,.77119,.94441,1.25628,.76984,1.03398,.67266,.76849,-1.48221,-.76716,.76781,-1.43594,-1.18802,.76646,1.11407,1.38483,.76511,.8584,.46965,.76376,-1.5608,-.95309,.76309,-1.32262,-1.62984,.76241,-.04837,-1.03025,.76174,1.26426,1.48894,.76039,.66698,.25767,.75904,-1.61167,-1.12246,.75836,-1.18532,-1.62393,.75769,.16962,-.85361,.75701,1.39222,1.321,.75499,-.96175,.04051,.75431,-1.63382,-1.27219,.75364,-1.02643,-1.58893,.75296,.38517,-.66122,.75229,1.49561,1.18253,.75026,-1.13081,-.17795,.74959,-1.62679,-1.39956,.74891,-.84874,-1.5254,.74824,.5944,-.45648,.74756,1.57251,.97038,.74689,1.31929,1.02252,.74554,-1.28008,-.39381,.74486,-1.59063,-1.50221,.74419,-.6554,-1.4344,.74351,.79354,.8438,.74081,-1.40684,-.60318,.74014,-1.5259,-1.31748,.73879,.97899,.64951,.73609,-1.50875,-.80231,.73541,-1.43369,-1.17669,.73406,1.14741,1.41407,.73271,.83878,.44309,.73136,-1.58391,-.98758,.73069,-1.31559,-1.64524,.73001,-.01671,-1.01447,.72934,1.29573,1.51522,.72799,.64355,1.4329,.72731,-.81106,.22821,.72664,-1.63093,-1.15566,.72596,-1.17364,-1.63484,.72529,.20308,-.83369,.72461,1.42123,1.3136,.72259,-.99615,.0087,.72191,-1.64887,-1.30348,.72124,-1.01032,-1.59517,.72056,.4198,-.63752,.71989,1.52162,1.1705,.71786,-1.16387,-.21151,.71719,-1.63735,-1.42834,.71651,-.82852,-1.52684,.71584,.62954,1.00469,.71449,1.31153,1.00609,.71314,-1.31119,-.42849,.71246,-1.5965,-1.52796,.71179,-.63143,-1.43103,.71111,.82854,.82328,.70841,-1.4354,-.63833,.70774,-1.52697,-1.30936,.70639,1.01321,.62528,.70369,-1.53423,-.83726,.70301,-1.42995,-1.64452,.70234,-.20562,-1.16397,.70166,1.18019,1.44239,.70031,.81796,.41561,.69896,-1.60584,-1.0217,.69829,-1.30711,-1.65925,.69761,.01552,-.9974,.69694,1.32645,1.54043,.69559,.61906,.198,.69424,-1.64889,-1.18829,.69356,-1.16058,-.81258,.69221,1.44933,1.30477,.69019,-1.03016,-.02367,.68951,-1.66253,-1.33401,.68884,-.99293,-1.59993,.68816,.45461,-.61278,.68749,1.54656,1.1571,.68546,-1.19635,-.24544,.68479,-1.64646,-1.45621,.68411,-.80712,-1.5268,.68344,.66467,1.03859,.68209,1.30234,1.66573,.68141,-.03184,.98839,.68074,-1.34152,-.46333,.68006,-1.60089,-1.55263,.67939,-.60644,-1.42619,.67871,.86333,.8016,.67601,-1.46303,-.67344,.67534,-1.52656,-1.29982,.67399,1.047,.60004,.67129,-1.55863,-.87199,.67061,-1.42475,-1.6615,.66994,-.17489,-1.14991,.66926,1.21236,1.46979,.66791,.79601,1.52623,.66724,-.68221,.38728,.66656,-1.62656,-1.05538,.66589,-1.29722,-1.67187,.66521,.04828,-.97908,.66454,1.35639,1.56456,.66319,.59357,1.42323,.66251,-.88063,.16711,.66184,-1.66555,-1.2203,.66116,-1.14618,-1.65235,.66049,.27109,-.79034,.65981,1.47648,1.29453,.65779,-1.06373,-.05654,.65711,-1.67482,-1.36375,.65644,-.9743,-1.60322,.65576,.48955,-.58705,.65509,1.57042,1.14238,.65306,-1.2282,-.27968,.65239,-1.65414,-1.48312,.65171,-.78461,-1.5253,.65104,.69973,.96946,.64834,-1.37106,-.4983,.64766,-1.60382,-1.57622,.64699,-.58047,-1.41991,.64631,.89785,.77882,.64361,-1.4897,-.70848,.64294,-1.52469,-1.28889,.64159,1.08033,1.60433,.63956,-.50705,.57383,.63889,-1.58194,-.90643,.63821,-1.41812,-1.67718,.63754,-.14352,-1.13453,.63686,1.24388,1.49622,.63551,.77295,1.524,.63484,-.71721,.35813,.63416,-1.64608,-1.08859,.63349,-1.28595,-.95955,.63214,1.38552,1.5876,.63079,.56713,1.41624,.63011,-.91499,.13558,.62944,-1.6809,-1.25166,.62876,-1.13049,-1.65896,.62809,.30553,-.76702,.62741,1.50267,1.28292,.62539,-1.09682,-.08987,.62471,-1.68572,-1.39268,.62404,-.95448,-1.60507,.62336,.52456,-.56038,.62269,1.59318,1.12637,.62066,-1.25939,-.31418,.61999,-1.66039,-1.50907,.61931,-.76103,-1.52235,.61864,.73466,.94934,.61594,-1.39977,-.53332,.61526,-1.60531,-1.5987,.61459,-.55357,-1.41223,.61391,.93205,.75497,.61121,-1.5154,-.74337,.61054,-1.52139,-1.27662,.60919,1.11317,1.60546,.60716,-.54208,.5467,.60649,-1.60415,-.94055,.60581,-1.41009,-1.69156,.60514,-.11155,-1.11789,.60446,1.27473,1.52167,.60311,.74885,1.52035,.60244,-.75207,.32824,.60176,-1.66437,-1.12129,.60109,-1.27334,-1.693,.60041,.11512,-.93886,.59974,1.41381,1.60952,.59839,.53979,1.40787,.59771,-.94902,.10347,.59704,-1.69495,-1.28233,.59636,-1.11354,-1.66416,.59569,.34019,-.74267,.59501,1.52787,1.26998,.59299,-1.12938,-.12359,.59231,-1.69526,-1.42075,.59164,-.93351,-.53282,.59029,1.61483,1.69825,.58894,.09536,1.10911,.58826,-1.28989,-.34888,.58759,-1.66524,-1.53402,.58691,-.73643,-1.51799,.58624,.76943,.92809,.58354,-1.42763,-.56836,.58286,-1.60538,-1.62006,.58219,-.52579,-1.40317,.58151,.9659,.73012,.57881,-1.5401,-.77809,.57814,-1.51668,-1.26303,.57679,1.14546,1.43446,.57544,.92261,.51872,.57409,-1.62522,-.9743,.57341,-1.40069,-1.10003,.57206,1.30487,1.54611,.57071,.72376,1.51529,.57004,-.78674,.29765,.56936,-1.68144,-1.15344,.56869,-1.25943,-1.70151,.56801,.14911,-.91705,.56734,1.44123,1.63032,.56599,.5116,1.39813,.56531,-.98267,.07084,.56464,-1.70768,-1.31229,.56396,-1.09538,-.71733,.56261,1.55206,1.25575,.56059,-1.16139,-.15765,.55991,-1.70342,-1.44794,.55924,-.91143,-1.60451,.55856,.59462,-.50442,.55789,1.63534,1.71066,.55654,.0626,1.09065,.55586,-1.31966,-.38374,.55519,-1.66869,-1.55795,.55451,-.71085,-1.51224,.55384,.80398,.90575,.55114,-1.4546,-.60336,.55046,-1.60404,-1.64028,.54979,-.4972,-1.39276,.54911,.99934,.70431,.54641,-1.56377,-.81258,.54574,-1.51059,-1.24816,.54439,1.17717,1.4612,.54304,.89999,1.60349,.54236,-.6121,.48993,.54169,-1.64516,-1.00763,.54101,-1.38996,-1.08098,.53966,1.33426,1.56953,.53831,.69771,1.50885,.53764,-.82116,.2664,.53696,-1.69726,-1.185,.53629,-1.24425,-1.70865,.53561,.18339,-.89418,.53494,1.46775,1.38707,.53291,-1.0159,.03773,.53224,-1.7191,-1.34148,.53156,-1.07604,-1.67036,.53089,.40995,-.69106,.53021,1.57522,1.24026,.52819,-1.1928,-.192,.52751,-1.71022,-1.47423,.52684,-.8883,-1.60213,.52616,.62955,1.72175,.52414,.02939,1.07103,.52346,-1.34866,-.41869,.52279,-1.67075,-1.58084,.52211,-.68435,-1.50513,.52144,.83827,.88235,.51874,-1.48066,-.63827,.51806,-1.60132,-1.65935,.51739,-.46783,-1.38104,.51671,1.03234,.67759,.51401,-1.5864,-.8468,.51334,-1.50314,-1.23206,.51199,1.20827,1.48703,.51064,.87635,1.60042,.50996,-.64698,.46037,.50929,-1.66394,-1.04052,.50861,-1.37791,-1.06079,.50726,1.36287,1.59189,.50591,.67077,1.50106,.50524,-.8553,.23456,.50456,-1.71184,-1.21594,.50389,-1.22784,-1.71443,.50321,.21793,-.87028,.50254,1.49334,1.3747,.50051,-1.04866,.0042,.49984,-1.7292,-1.36989,.49916,-1.05557,-1.67139,.49849,.44495,-.6639,.49781,1.59732,1.71529,.49646,.22652,1.22355,.49579,-1.22357,-.22659,.49511,-1.71567,-1.49959,.49444,-.86415,-1.59838,.49376,.66437,1.73152,.49174,-.00424,1.05028,.49106,-1.37687,-.4537,.49039,-1.67143,-1.60267,.48971,-.65698,-1.49667,.48904,.87225,.85796,.48634,-1.50578,-.67305,.48566,-1.59723,-1.67725,.48499,-.43773,-1.36804,.48431,1.06485,1.38379,.48296,1.04492,.65,.48161,-1.60796,-.88069,.48094,-1.49435,-1.72195,.48026,-.21033,-1.21475,.47959,1.2387,1.51191,.47824,.85171,1.59599,.47756,-.68171,.4301,.47689,-1.68154,-1.0729,.47621,-1.36459,-1.0395,.47486,1.39066,1.61319,.47351,.64297,.20218,.47216,-1.72516,-1.24621,.47149,-1.21024,-1.71887,.47081,.25266,-.8454,.47014,1.51798,1.36107,.46811,-1.08091,-.02969,.46744,-1.73799,-1.39748,.46676,-1.03401,-1.67105,.46609,.47996,-.6359,.46541,1.61834,1.7283,.46406,.19401,1.20565,.46339,-1.25367,-.26137,.46271,-1.71976,-1.52399,.46204,-.83903,-1.59328,.46136,.69901,1.73999,.45934,-.03822,1.02845,.45866,-1.40425,-.48871,.45799,-1.67075,-1.62343,.45731,-.62877,-1.4869,.45664,.90588,.83261,.45394,-1.52994,-.70764,.45326,-1.59179,-1.69397,.45259,-.40696,-1.35378,.45191,1.09684,1.41096,.45056,1.02283,.62159,.44921,-1.62844,-.91422,.44854,-1.48425,-1.73433,.44786,-.17757,-1.19627,.44719,1.26845,1.53582,.44584,.82612,1.59022,.44516,-.71625,.39917,.44449,-1.69797,-1.10474,.44381,-1.35003,-1.01714,.44246,1.41762,1.63339,.44111,.61437,.16931,.43976,-1.73722,-1.27577,.43909,-1.19147,-1.72195,.43841,.28755,-.81958,.43774,1.54164,1.34619,.43571,-1.11262,-.0639,.43504,-1.74547,-1.42422,.43436,-1.01139,-1.66936,.43369,.51494,-.6071,.43301,1.63827,1.74004,.43166,.16101,1.1866,.43099,-1.28305,-.29628,.43031,-1.72251,-1.5474,.42964,-.81299,-1.58684,.42896,.73344,1.74713,.42694,-.0725,1.00558,.42626,-1.43077,-.52368,.42559,-1.66872,-1.64308,.42491,-.59978,-1.47584,.42424,.93911,1.29028,.42289,1.18167,.80634,.42154,-1.5531,-.742,.42086,-1.58503,-1.7095,.42019,-.37557,-1.3383,.41951,1.12825,1.43726,.41816,.99971,.59242,.41681,-1.64782,-.94735,.41614,-1.47288,-1.74544,.41546,-.14435,-1.17666,.41479,1.29747,1.55873,.41344,.79963,1.58313,.41276,-.75055,.36763,.41209,-1.71319,-1.13601,.41141,-1.33425,-.99377,.41006,1.4437,1.65249,.40871,.58501,1.46983,.40804,-.95556,.13598,.40736,-1.74802,-1.30461,.40669,-1.17158,-1.7237,.40601,.32253,-.79288,.40534,1.5643,1.33012,.40331,-1.14374,-.09838,.40264,-1.75163,-1.45008,.40196,-.98777,-1.66633,.40129,.54984,-.57756,.40061,1.65709,1.75052,.39926,.12759,1.16644,.39859,-1.31169,-.33128,.39791,-1.72392,-1.56981,.39724,-.78607,-1.57909,.39656,.7676,1.75296,.39454,-.10704,.98171,.39386,-1.45641,-.55854,.39319,-1.66536,-1.66162,.39251,-.57006,-1.46352,.39184,.9719,1.31874,.39049,1.16123,1.72407,.38981,-.34004,.7792,.38914,-1.57525,-.77609,.38846,-1.57695,-1.72382,.38779,-.3436,-1.32164,.38711,1.15906,1.46267,.38576,.97559,.56252,.38441,-1.66607,-.98002,.38374,-1.46024,-1.75528,.38306,-.11073,-1.15595,.38239,1.32573,1.58063,.38104,.77229,1.57473,.38036,-.78456,.33553,.37969,-1.72721,-1.16667,.37901,-1.31729,-.96941,.37766,1.46888,1.67046,.37631,.55494,1.45689,.37564,-.98811,.10227,.37496,-1.75754,-1.33267,.37429,-1.15061,-1.72411,.37361,.35756,-.76532,.37294,1.58594,1.31286,.37091,-1.17423,-.13308,.37024,-1.75648,-1.47503,.36956,-.96317,-1.66198,.36889,.5846,-.54731,.36821,1.67477,1.75972,.36686,.09379,1.1452,.36619,-1.33956,-.36632,.36551,-1.72401,-1.59118,.36484,-.7583,-1.57005,.36416,.80145,1.75749,.36214,-.14178,.95688,.36146,-1.48112,-.59327,.36079,-1.66068,-1.67902,.36011,-.53965,-1.44996,.35944,1.0042,1.72383,.35741,-.37508,.75124,.35674,-1.59636,-.80986,.35606,-1.56759,-1.73693,.35539,-.31111,-1.30381,.35471,1.18923,1.48716,.35336,.95053,1.65931,.35269,-.60192,.53195,.35201,-1.68319,-1.0122,.35134,-1.44638,-1.76384,.35066,-.07676,-1.13419,.34999,1.35319,1.60148,.34864,.74412,1.56506,.34796,-.81824,.30291,.34729,-1.74001,-1.19666,.34661,-1.29918,-.94412,.34526,1.49313,1.68729,.34391,.5242,1.44272,.34324,-1.02016,.06821,.34256,-1.76579,-1.35993,.34189,-1.12859,-1.72321,.34121,.39259,-.73696,.34054,1.60652,1.74302,.33919,.29468,1.29447,.33851,-1.20406,-.16795,.33784,-1.76002,-1.49904,.33716,-.93765,-.51642,.33581,1.69131,1.76765,.33446,.05965,1.12292,.33379,-1.36661,-.40134,.33311,-1.72278,-1.6115,.33244,-.72975,-1.55975,.33176,.83494,1.7607,.32974,-.17668,.93113,.32906,-1.5049,-.6278,.32839,-1.6547,-1.69527,.32771,-.5086,-1.43519,.32704,1.03599,1.72226,.32501,-.41009,.7225,.32434,-1.61642,-.84325,.32366,-1.55697,-1.74881,.32299,-.27813,-1.28486,.32231,1.21871,1.51069,.32096,.92455,1.653,.32029,-.6364,.50074,.31961,-1.69915,-1.04385,.31894,-1.43132,-1.77113,.31826,-.04247,-1.11141,.31759,1.37982,1.62126,.31624,.71519,1.55412,.31556,-.85154,.26982,.31489,-1.75158,-1.22597,.31421,-1.27995,-.91792,.31286,1.51642,1.70296,.31151,.49285,1.42736,.31084,-1.05167,.03386,.31016,-1.77275,-1.38635,.30949,-1.10556,-1.72099,.30881,.42757,-.70784,.30814,1.62604,1.75428,.30679,.26148,1.27497,.30611,-1.23318,-.20293,.30544,-1.76225,-1.52209,.30476,-.91124,-.48492,.30341,1.70669,1.77429,.30206,.02523,1.09964,.30139,-1.39282,-.4363,.30071,-1.72024,-1.63075,.30004,-.70045,-1.54819,.29936,.86804,1.76261,.29734,-.21169,.9045,.29666,-1.5277,-.66209,.29599,-1.64743,-1.71035,.29531,-.47695,-1.41925,.29464,1.06721,1.39924,.29329,1.09367,1.7194,.29261,-.44503,.69301,.29194,-1.63539,-.87624,.29126,-1.54511,-1.75945,.29059,-.24473,-1.26482,.28991,1.24747,1.53325,.28856,.89771,1.64541,.28789,-.67062,.46895,.28721,-1.71394,-1.07492,.28654,-1.41508,-1.77714,.28586,-.00793,-1.08764,.28519,1.4056,1.63996,.28384,.68553,1.54195,.28316,-.88442,.23632,.28249,-1.76192,-1.25455,.28181,-1.25964,-.89087,.28046,1.53873,1.71745,.27911,.46092,1.41084,.27844,-1.08259,-74e-5,.27776,-1.77844,-1.4119,.27709,-1.08155,-.67801,.27574,1.64447,1.76431,.27439,.22788,1.25439,.27371,-1.26158,-.23798,.27304,-1.76318,-1.54415,.27236,-.88398,-.45286,.27101,1.72089,1.77966,.26966,-.00942,1.0754,.26899,-1.41815,-.47116,.26831,-1.7164,-1.6489,.26764,-.67045,-1.53541,.26696,.90069,1.76321,.26494,-.24675,.87704,.26426,-1.54951,-.6961,.26359,-1.63889,-1.72426,.26291,-.44476,-1.40215,.26224,1.09782,1.42435,.26089,1.06919,1.71524,.26021,-.47985,.66284,.25954,-1.65326,-.90878,.25886,-1.53203,-1.76885,.25819,-.21095,-1.24371,.25751,1.27549,1.5548,.25616,.87005,1.63656,.25549,-.70456,.43663,.25481,-1.72755,-1.10538,.25414,-1.39769,-1.78186,.25346,.02682,-1.06293,.25279,1.43048,1.65756,.25144,.6552,1.52857,.25076,-.91684,.20245,.25009,-1.77101,-1.28237,.24941,-1.23828,-.86301,.24806,1.56003,1.73076,.24671,.42847,1.39317,.24604,-1.11289,-.03553,.24536,-1.78284,-1.43656,.24469,-1.05661,-.64751,.24334,1.66178,1.77309,.24199,.19393,1.23278,.24131,-1.2892,-.27305,.24064,-1.76282,-1.56519,.23996,-.85592,-.42028,.23861,1.7339,1.78375,.23726,-.04426,1.05023,.23659,-1.44258,-.50586,.23591,-1.71127,-1.66593,.23524,-.63979,-1.52143,.23456,.93286,1.76253,.23254,-.28182,.84878,.23186,-1.57029,-.72979,.23119,-1.6291,-1.73697,.23051,-.41207,-1.38392,.22984,1.1278,1.44854,.22849,1.0438,1.70979,.22781,-.5145,.63202,.22714,-1.67002,-.94082,.22646,-1.51775,-1.77701,.22579,-.17683,-1.22159,.22511,1.30271,1.57532,.22376,.8416,1.62646,.22309,-.73815,.40382,.22241,-1.73996,-1.13519,.22174,-1.3792,-1.78531,.22106,.06173,-1.03731,.22039,1.45445,1.67403,.21904,.62422,.16825,.21769,-1.77885,-1.30939,.21701,-1.2159,-1.7617,.21634,.29934,-.83437,.21566,1.58029,1.74287,.21431,.39555,1.3744,.21364,-1.14253,-.07048,.21296,-1.78597,-1.46029,.21229,-1.03077,-.61638,.21094,1.67797,1.78061,.20959,.15966,1.21015,.20891,-1.31601,-.3081,.20824,-1.76117,-1.58519,.20756,-.82709,-.38725,.20621,1.74571,1.78655,.20486,-.07923,1.02417,.20419,-1.46608,-.54036,.20351,-1.70487,-1.68184,.20284,-.60851,-1.50627,.20216,.96451,.81977,.19946,-1.59003,-.7631,.19879,-1.61807,-1.74848,.19811,-.37892,-1.36461,.19744,1.15709,1.4718,.19609,1.01752,1.70308,.19541,-.54894,.6006,.19474,-1.68563,-.97233,.19406,-1.5023,-1.7839,.19339,-.14242,-1.19847,.19271,1.32911,1.5948,.19136,.81241,1.61513,.19069,-.77136,.37057,.19001,-1.75116,-1.1643,.18934,-1.35961,-1.78747,.18866,.09675,-1.01082,.18799,1.47746,1.68936,.18664,.59266,1.49826,.18596,-.98012,.13378,.18529,-1.78543,-1.33557,.18461,-1.19254,-1.75909,.18394,.33434,-.805,.18326,1.5995,1.75377,.18191,.36219,1.35455,.18124,-1.17147,-.10552,.18056,-1.78781,-1.48307,.17989,-1.00407,-.58468,.17854,1.69301,1.78688,.17719,.12513,1.18655,.17651,-1.34199,-.34307,.17584,-1.75823,-1.60413,.17516,-.79755,-.35379,.17381,1.75631,1.78807,.17246,-.11429,.99726,.17179,-1.48861,-.57461,.17111,-1.69722,-1.69659,.17044,-.57667,1.34835,.16841,1.18051,.79005,.16706,-1.6087,-.79599,.16639,-1.60584,-1.75877,.16571,-.34537,-1.34423,.16504,1.18567,.12307,.16436,1.78825,1.49409,.16369,.99041,1.69511,.16301,-.58313,.56862,.16234,-1.70009,-1.00326,.16166,-1.48571,-1.78954,.16099,-.10778,-1.1744,.16031,1.35465,1.61319,.15896,.78252,.33692,.15761,-1.76115,-1.19269,.15694,-1.33897,-1.78835,.15626,.13184,-.9835,.15559,1.4995,1.70353,.15424,.56054,1.48139,.15356,-1.0109,.09909,.15289,-1.79076,-1.3609,.15221,-1.16824,-1.7552,.15154,.36922,-.77494,.15086,1.61762,1.76345,.14951,.32845,1.33365,.14884,-1.19967,-.14062,.14816,-1.78837,-1.50486,.14749,-.97655,-.55244,.14614,1.70689,1.79189,.14479,.09039,1.16202,.14411,-1.36709,-.37792,.14344,-1.75402,-1.62198,.14276,-.76732,-.31996,.14141,1.76568,1.78831,.14006,-.1494,.96955,.13939,-1.51015,-.60856,.13871,-1.68832,-1.71017,.13804,-.5443,-.08167,.13669,1.79294,1.37323,.13601,1.15574,.75967,.13466,-1.62628,-.82843,.13399,-1.59241,-1.76783,.13331,-.31145,-1.32282,.13264,1.21349,.15817,.13196,1.78817,1.51538,.13129,.9625,1.6859,.13061,-.617,.53613,.12994,-1.71338,-1.03357,.12926,-1.468,-1.79392,.12859,-.07295,-1.14941,.12791,1.37931,1.6305,.12656,.75197,.30292,.12521,-1.7699,-1.22032,.12454,-1.31731,-1.78796,.12386,.16695,-.9554,.12319,1.52054,1.71652,.12184,.52793,1.4634,.12116,-1.04105,.06422,.12049,-1.79481,-1.38533,.11981,-1.14303,-.74424,.11846,1.63465,1.7719,.11711,.29437,1.31174,.11644,-1.2271,-.17572,.11576,-1.78766,-1.52564,.11509,-.94825,-.5197,.11374,1.71958,1.79563,.11239,.05548,1.13659,.11171,-1.39129,-.4126,.11104,-1.74855,-1.63873,.11036,-.73647,-.28581,.10901,1.77382,1.78728,.10766,-.18449,.94106,.10699,-1.53067,-.64218,.10631,-1.67818,-1.72257,.10564,-.51145,-.04673,.10429,1.79637,1.3972,.10361,1.13009,1.74699,.10294,-.42124,.72866,.10226,-1.64274,-.86036,.10159,-1.5778,-1.77566,.10091,-.27722,-1.30041,.10024,1.24052,.19326,.09956,1.78682,1.53564,.09889,.93382,1.67546,.09821,-.65053,.50317,.09754,-1.72549,-1.06322,.09686,-1.4492,-1.79703,.09619,-.03798,-1.12354,.09551,1.40304,1.64668,.09416,.72081,1.57397,.09349,-.86826,.26862,.09281,-1.77742,-1.24715,.09214,-1.29466,-1.78629,.09146,.20202,-.92654,.09079,1.54054,1.72833,.08944,.49486,1.44433,.08876,-1.07053,.02922,.08809,-1.79761,-1.40883,.08741,-1.11694,-.71293,.08606,1.65055,1.77911,.08471,.26001,1.28884,.08404,-1.25372,-.21078,.08336,-1.78567,-1.54538,.08269,-.91921,-.48653,.08134,1.73109,1.79811,.07999,.02045,1.11028,.07931,-1.41456,-.44706,.07864,-1.74182,-1.65435,.07796,-.70502,-.25138,.07661,1.78071,1.78498,.07526,-.21953,.91184,.07459,-1.55015,-.67541,.07391,-1.66684,-1.73378,.07324,-.47817,-.01168,.07189,1.79853,1.42023,.07121,1.10358,1.73995,.07054,-.45564,.69707,.06986,-1.65808,-.89174,.06919,-1.56205,-1.78224,.06851,-.24273,-1.27704,.06784,1.26672,.22828,.06716,1.7842,1.55486,.06649,.90443,.46979,.06514,-1.73639,-1.09218,.06446,-1.42933,-1.79887,.06379,-.00291,-1.09682,.06311,1.42583,1.66173,.06176,.68908,1.55794,.06109,-.8995,.23407,.06041,-1.78369,-1.27314,.05974,-1.27104,-1.78335,.05906,.23701,-.89698,.05839,1.5595,1.73893,.05704,.46138,-.00587,.05569,-1.79913,-1.43138,.05501,-1.09001,-.68107,.05366,1.66531,1.78507,.05231,.2254,1.26499,.05164,-1.2795,-.24574,.05096,-1.78242,-1.56406,.05029,-.88948,-.45295,.04894,1.74139,1.79931,.04759,-.01465,1.08316,.04691,-1.43686,-.48126,.04624,-1.73385,-1.66882,.04556,-.67302,-.21671,.04421,1.78636,1.28581,.04354,1.25889,1.78141,.04286,-.25447,.88194,.04219,-1.56857,-.70822,.04151,-1.6543,-1.74377,.04084,-.4445,.02343,.03949,1.79941,1.44228,.03881,1.07625,1.73167,.03814,-.48977,.66494,.03746,-1.67226,-.92254,.03679,-1.54518,-1.78757,.03611,-.20802,-1.25272,.03544,1.29206,.26318,.03476,1.78032,1.573,.03409,.87436,.43603,.03274,-1.74608,-1.1204,.03206,-1.40843,-1.79944,.03139,.03221,-1.06929,.03071,1.44764,1.67562,.02936,.65683,.19931,.02801,-1.78871,-1.29826,.02734,-1.2465,-1.77915,.02666,.27188,-.86674,.02599,1.57737,1.74831,.02464,.42754,1.40305,.02396,-1.12734,-.04099,.02329,-1.79938,-1.45294,.02261,-1.06229,-.64869,.02126,1.67891,1.78977,.01991,.1906,1.24023,.01924,-1.3044,-.28057,.01856,-1.7779,-1.58166,.01789,-.85908,-.41903,.01654,1.75047,1.79925,.01519,-.04977,1.05524,.01451,-1.45817,-.51516,.01384,-1.72465,-1.68213,.01316,-.64052,-.18187,.01181,1.79075,1.31049,.01114,1.2339,.85139,.00979,-1.58589,-.74055,.00911,-1.64058,-1.75255,.00844,-.4105,-1.39209,.00776,1.14106,.05855,.00709,1.79903,1.46334,.00641,1.04814,1.72216,.00574,-.52358,.63232,.00506,-1.68527,-.95271,.00439,-1.5272,-1.79165,.00371,-.17313,-1.22751,.00304,1.31651,1.59005,.00169,.84365,.40195,34e-5,-1.75455,-1.14785,-34e-5,-1.38652,-1.79874,-.00101,.06732,-1.041,-.00169,1.46844,1.68834,-.00304,.62409,1.52253,-.00371,-.96015,.16439,-.00439,-1.79247,-1.32248,-.00506,-1.22107,-.83588,-.00641,1.59413,1.75647,-.00776,.39338,1.38089,-.00844,-1.15459,-.0761,-.00911,-1.79837,-1.47348,-.00979,-1.0338,-.61584,-.01114,1.69134,1.79321,-.01249,.15564,1.21458,-.01316,-1.32839,-.31522,-.01384,-1.77213,-1.59815,-.01451,-.82807,-.38479,-.01586,1.75832,1.79792,-.01721,-.08487,1.02657,-.01789,-1.47846,-.5487,-.01856,-1.71423,-1.69426,-.01924,-.60755,-.14689,-.02059,1.79388,1.33425,-.02126,1.20803,.82023,-.02261,-1.6021,-.77236,-.02329,-1.6257,-1.76009,-.02396,-.37619,.09363,-.02531,1.79738,1.48337,-.02599,1.01929,1.71144,-.02666,-.55702,.59925,-.02734,-1.6971,-.98221,-.02801,-1.50814,-1.79446,-.02869,-.13813,-1.20143,-.02936,1.34004,1.60597,-.03071,.81235,.36758,-.03206,-1.76178,-1.17449,-.03274,-1.36363,-1.79677,-.03341,.10239,-1.01196,-.03409,1.48821,1.69987,-.03544,.59092,1.50321,-.03611,-.98948,.12936,-.03679,-1.79497,-1.34577,-.03746,-1.19478,-.80444,-.03881,1.60978,1.76339,-.04016,.35895,-.11114,-.04151,-1.79609,-1.49299,-.04219,-1.0046,-.58256,-.04354,1.70257,1.7954,-.04489,.12059,1.18808,-.04556,-1.35144,-.34963,-.04624,-1.76511,-1.61351,-.04691,-.79649,-.3503,-.04826,1.76493,1.79532,-.04961,-.11989,.99719,-.05029,-1.4977,-.58184,-.05096,-1.70261,-1.70518,-.05164,-.57418,-.11182,-.05299,1.79574,1.35705,-.05366,1.18132,.78851,-.05501,-1.61717,-.80362,-.05569,-1.60969,-1.76638,-.05636,-.34164,.12863,-.05771,1.79447,1.50234,-.05839,.98973,1.69951,-.05906,-.59006,.56577,-.05974,-1.70773,-1.011,-.06041,-1.48803,-1.79601,-.06109,-.10304,-1.17452,-.06176,1.3626,1.62076,-.06311,.78049,1.60551,-.06379,-.81134,.33297,-.06446,-1.76776,-1.20029,-.06514,-1.3398,-1.79354,-.06581,.13736,-.98224,-.06649,1.50691,1.71019,-.06784,.55735,1.48284,-.06851,-1.01809,.09426,-.06919,-1.7962,-1.36809,-.06986,-1.16767,-.77245,-.07121,1.62427,1.76906,-.07256,.32429,1.3337,-.07324,-1.2066,-.14608,-.07391,-1.79254,-1.51142,-.07459,-.9747,-.5489,-.07594,1.71258,1.79631,-.07729,.08548,-.38376,-.07864,-1.75686,-1.62771,-.07931,-.76437,-.31559,-.08066,1.77028,1.21286,-.08134,1.32754,1.79146,-.08201,-.1548,.96713,-.08269,-1.51586,-.61454,-.08336,-1.68979,-1.7149,-.08404,-.54043,-.0767,-.08539,1.79634,1.37888,-.08606,1.15381,.75626,-.08741,-1.63108,-.83427,-.08809,-1.59255,-1.77142,-.08876,-.30689,.1635,-.09011,1.79029,1.52023,-.09079,.95951,.53194,-.09214,-1.71713,-1.03905,-.09281,-1.46689,-1.79629,-.09349,-.06792,-1.14681,-.09416,1.38418,1.63438,-.09551,.74813,1.5881,-.09619,-.84184,.29817,-.09686,-1.77249,-1.2252,-.09754,-1.31505,-1.78905,-.09821,.17219,-.95186,-.09889,1.52453,1.71929,-.10024,.52343,1.46145,-.10091,-1.04594,.05915,-.10159,-1.79616,-1.38942,-.10226,-1.13977,-.73996,-.10361,1.6376,1.77347,-.10496,.28945,-.18087,-.10631,-1.78773,-1.52876,-.10699,-.94417,-.5149,-.10834,1.72138,1.79595,-.10969,.05037,-.41757,-.11104,-1.74737,-1.64074,-.11171,-.73176,-.28072,-.11306,1.77438,1.23732,-.11374,1.30235,1.78633,-.11441,-.18953,.93644,-.11509,-1.53292,-.64674,-.11576,-1.6758,-1.72338,-.11644,-.50636,-.0416,-.11779,1.79566,1.39969,-.11846,1.12553,.72354,-.11981,-1.64382,-.86428,-.12049,-1.57432,-1.7752,-.12116,-.27198,.19819,-.12251,1.78486,1.53701,-.12319,.92867,1.67213,-.12386,-.65471,.49779,-.12454,-1.72531,-1.0663,-.12521,-1.44476,-1.79529,-.12589,-.03283,1.64681,-.12791,.71529,1.5696,-.12859,-.87168,.26323,-.12926,-1.77595,-1.2492,-.12994,-1.28942,-1.7833,-.13061,.20683,-.92087,-.13129,1.54103,1.72716,-.13264,.48921,1.43907,-.13331,-1.07299,.02406,-.13399,-1.79484,-1.40971,-.13466,-1.11112,-.70701,-.13601,1.64974,1.77662,-.13736,.25448,1.28288,-.13804,-1.25505,-.21545,-.13871,-1.78167,-1.54498,-.13939,-.91303,-.48061,-.14074,1.72893,1.79432,-.14209,.0153,-.45101,-.14344,-1.73667,-1.65258,-.14411,-.69871,-.24572,-.14546,1.77721,1.26085,-.14614,1.27629,1.77996,-.14681,-.22406,.90515,-.14749,-1.54885,-.67842,-.14816,-1.66066,-1.73062,-.14884,-.472,-.00654,-.15019,1.79371,1.41947,-.15086,1.09652,.69038,-.15221,-1.65536,-.89361,-.15289,-1.55502,-1.77771,-.15356,-.23696,.23265,-.15491,1.77817,1.55266,-.15559,.89725,1.6567,-.15626,-.68625,.46338,-.15694,-1.73224,-1.09273,-.15761,-1.42165,-1.79303,-.15829,.00221,1.65805,-.16031,.68203,.2282,-.16166,-1.77814,-1.27225,-.16234,-1.26294,-1.7763,-.16301,.24122,-.8893,-.16369,1.55639,1.73378,-.16504,.45474,1.41573,-.16571,-1.09921,-.01095,-.16639,-1.79226,-1.42895,-.16706,-1.08175,-.67366,-.16841,1.66067,1.77849,-.16976,.21943,1.2562,-.17044,-1.27786,-.24978,-.17111,-1.77435,-1.56005,-.17179,-.88133,-.44608,-.17314,1.73523,1.79141,-.17449,-.01968,-.48403,-.17584,-1.72476,-1.66321,-.17651,-.66526,-.21066,-.17786,1.77876,1.28341,-.17854,1.2494,1.77233,-.17921,-.25832,-.70951,-.18056,-1.64438,-1.73661,-.18124,-.43742,.02841,-.18259,1.79049,1.43816,-.18326,1.06682,1.7216,-.18394,-.49222,.65684,-.18461,-1.66568,-.9222,-.18529,-1.53467,-1.77895,-.18596,-.20188,.26684,-.18731,1.77023,1.56715,-.18799,.86528,1.64013,-.18866,-.71719,.42874,-.18934,-1.73791,-1.1183,-.19001,-1.3976,-1.78949,-.19069,.03713,1.66807,-.19271,.64839,1.52942,-.19339,-.92923,.19311,-.19406,-1.77906,-1.29431,-.19474,-1.23565,-1.76805,-.19541,.27534,-.85721,-.19609,1.57059,1.73913,-.19744,.42005,1.39145,-.19811,-1.12455,-.04583,-.19879,-1.7884,-1.4471,-.19946,-1.05172,-.63993,-.20081,1.67038,1.77909,-.20216,.18434,1.2287,-.20284,-1.29967,-.28382,-.20351,-1.76579,-1.57395,-.20419,-.8491,-.41135,-.20554,1.74027,1.13075,-.20621,1.38524,1.78724,-.20689,-.05453,-.51659,-.20824,-1.71166,-1.67261,-.20891,-.63145,-.17556,-.21026,1.77904,1.30497,-.21094,1.22171,1.76346,-.21161,-.29227,.84097,-.21229,-1.57724,-.73999,-.21296,-1.62698,-1.74133,-.21364,-.40264,.06321,-.21499,1.786,1.45576,-.21566,1.03646,.62294,-.21701,-1.67477,-.95003,-.21769,-1.51329,-1.7789,-.21836,-.16679,.30071,-.21971,1.76105,1.58046,-.22039,.83281,1.62246,-.22106,-.74751,.39393,-.22174,-1.74231,-1.14297,-.22241,-1.37265,-1.78467,-.22309,.07189,1.67685,-.22511,.61442,1.50779,-.22579,-.95686,.15802,-.22646,-1.77869,-1.31536,-.22714,-1.20757,-1.75856,-.22781,.30912,-.82462,-.22849,1.5836,1.74321,-.22984,.3852,1.36627,-.23051,-1.14899,-.08054,-.23119,-1.78327,-1.46414,-.23186,-1.02104,-.60588,-.23321,1.67885,1.7784,-.23456,.14926,1.20044,-.23524,-1.32046,-.31751,-.23591,-1.756,-1.58667,-.23659,-.8164,-.37647,-.23794,1.74403,1.15495,-.23861,1.35984,1.78179,-.23929,-.08919,-.54864,-.24064,-1.69738,-1.68077,-.24131,-.59732,-.14049,-.24266,1.77803,1.32549,-.24334,1.19325,1.75336,-.24401,-.32587,.80816,-.24469,-1.58966,-.7698,-.24536,-1.60848,-1.74478,-.24604,-.36773,.09782,-.24739,1.78023,1.47223,-.24806,1.00548,1.69363,-.24874,-.55656,.58875,-.24941,-1.68261,-.97705,-.25009,-1.49092,-1.77757,-.25076,-.13174,.33421,-.25211,1.75064,1.59257,-.25279,.79989,1.60369,-.25346,-.77714,.35898,-.25414,-1.74544,-1.1667,-.25481,-1.34681,-1.77859,-.25549,.10643,-.99765,-.25616,1.47617,1.68437,-.25751,.58016,1.48517,-.25819,-.98367,.12298,-.25886,-1.77704,-1.33536,-.25954,-1.17875,-.79159,-.26089,1.59541,1.74601,-.26224,.35023,1.34021,-.26291,-1.17248,-.11503,-.26359,-1.77688,-1.48004,-.26426,-.98977,-.57155,-.26561,1.68605,1.77642,-.26696,.11424,1.17144,-.26764,-1.34019,-.35081,-.26831,-1.74498,-1.59817,-.26899,-.78327,-.34148,-.27034,1.74651,1.1782,-.27101,1.33357,1.77508,-.27169,-.12362,-.58013,-.27304,-1.68193,-1.68766,-.27371,-.56293,-.1055,-.27506,1.77573,1.34495,-.27574,1.16408,1.74203,-.27641,-.35907,.77492,-.27709,-1.60085,-.7989,-.27776,-1.5889,-1.74693,-.27844,-.33272,.13218,-.27979,1.7732,1.48755,-.28046,.97393,1.67789,-.28114,-.58791,.5543,-.28181,-1.68918,-1.00322,-.28249,-1.46757,-1.77495,-.28316,-.09676,.3673,-.28451,1.73901,1.60346,-.28519,.76655,1.58384,-.28586,-.80606,.32396,-.28654,-1.74727,-1.18945,-.28721,-1.32012,-1.77125,-.28789,.14073,-.96596,-.28856,1.49119,1.69063,-.28991,.54565,.08804,-.29126,-1.7741,-1.35427,-.29194,-1.14922,-.75815,-.29329,1.60598,1.74752,-.29464,.3152,1.31332,-.29531,-1.19498,-.14925,-.29599,-1.76921,-1.49477,-.29666,-.95795,-.53699,-.29801,1.69199,1.77316,-.29936,.07932,1.14174,-.30004,-1.35883,-.38367,-.30071,-1.73274,-1.60843,-.30139,-.74974,-.30644,-.30274,1.7477,1.20045,-.30341,1.30647,1.7671,-.30409,-.15776,-.61102,-.30544,-1.66534,-1.69327,-.30611,-.52832,-.07062,-.30746,1.77214,1.36332,-.30814,1.1342,1.72949,-.30881,-.39181,.7413,-.30949,-1.61081,-.82725,-.31016,-1.56827,-1.74779,-.31084,-.29767,.16625,-.31219,1.76491,1.50168,-.31286,.94184,1.66102,-.31354,-.61864,.51964,-.31421,-1.69448,-1.0285,-.31489,-1.44327,-1.77104,-.31556,-.06192,.39992,-.31691,1.72616,1.6131,-.31759,.73284,1.56295,-.31826,-.83421,.28891,-.31894,-1.7478,-1.21119,-.31961,-1.29262,-1.76264,-.32029,.17471,-.93374,-.32096,1.50503,1.6956,-.32231,.51095,1.43705,-.32299,-1.03468,.05324,-.32366,-1.76986,-1.37208,-.32434,-1.11902,-.72436,-.32569,1.61531,1.74773,-.32704,.28014,1.28562,-.32771,-1.21647,-.18315,-.32839,-1.76029,-1.5083,-.32906,-.92561,-.50224,-.33041,1.69664,1.7686,-.33176,.04456,1.11137,-.33244,-1.37635,-.41604,-.33311,-1.71929,-1.61745,-.33379,-.71586,-.27138,-.33514,1.74758,1.22167,-.33581,1.27857,1.75786,-.33649,-.19157,.91745,-.33716,-1.51149,-.64126,-.33784,-1.64762,-1.6976,-.33851,-.49353,-.0359,-.33986,1.76726,1.38055,-.34054,1.10368,1.71574,-.34121,-.42405,.70734,-.34189,-1.6195,-.8548,-.34256,-1.5466,-1.74735,-.34324,-.26262,.19997,-.34459,1.75535,1.51461,-.34526,.90926,1.64301,-.34594,-.64872,.48482,-.34661,-1.69847,-1.05285,-.34729,-1.41806,-1.76584,-.34796,-.02726,1.62148,-.34999,.6988,1.54102,-.35066,-.86156,.25387,-.35134,-1.74703,-1.23189,-.35201,-1.26433,-1.75277,-.35269,.20834,-.90104,-.35336,1.51765,1.69927,-.35471,.47609,1.41162,-.35539,-1.05879,.01863,-.35606,-1.76433,-1.38874,-.35674,-1.08819,-.69025,-.35809,1.62337,1.74663,-.35944,.24511,1.25714,-.36011,-1.2369,-.21669,-.36079,-1.75011,-1.52061,-.36146,-.8928,-.46736,-.36281,1.69998,1.76275,-.36416,.01001,-.44788,-.36551,-1.70464,-1.62518,-.36619,-.68168,-.23637,-.36754,1.74615,1.24183,-.36821,1.24991,1.74737,-.36889,-.22501,.88453,-.36956,-1.52349,-.67081,-.37024,-1.62878,-1.70061,-.37091,-.45862,-.00141,-.37226,1.76108,1.39663,-.37294,1.07254,1.7008,-.37361,-.45575,.67309,-.37429,-1.62692,-.88151,-.37496,-1.52392,-1.74559,-.37564,-.22762,.23331,-.37699,1.74455,1.5263,-.37766,.87623,1.6239,-.37834,-.67809,.44988,-.37901,-1.70116,-1.07623,-.37969,-1.39196,-1.75934,-.38036,.00717,-1.06467,-.38104,1.40046,1.62857,-.38239,.66449,1.5181,-.38306,-.88806,.21889,-.38374,-1.74495,-1.25151,-.38441,-1.2353,-1.74165,-.38509,.24157,-.8679,-.38576,1.52903,1.70163,-.38711,.44113,1.3853,-.38779,-1.08192,-.01574,-.38846,-1.75751,-1.40422,-.38914,-1.05676,-.65587,-.39049,1.63014,1.74422,-.39184,.21016,-.24981,-.39319,-1.73868,-1.53168,-.39386,-.85956,-.43238,-.39521,1.70201,1.7556,-.39656,-.02429,-.47914,-.39791,-1.68881,-1.63163,-.39859,-.64724,-.20144,-.39994,1.74341,1.2609,-.40061,1.22051,1.73563,-.40129,-.25802,.85118,-.40196,-1.53425,-.69963,-.40264,-1.60885,-1.70232,-.40331,-.42363,.03282,-.40466,1.75362,1.41151,-.40534,1.04083,1.68467,-.40601,-.48685,.6386,-.40669,-1.63303,-.90735,-.40736,-1.50026,-1.74252,-.40804,-.19273,.2662,-.40939,1.7325,1.53674,-.41006,.84279,1.6037,-.41074,-.70671,.41487,-.41141,-1.70253,-1.09861,-.41209,-1.36501,-1.75155,-.41276,.04133,-1.03282,-.41344,1.41505,1.63436,-.41479,.62994,1.49419,-.41546,-.91366,.18402,-.41614,-1.74154,-1.27001,-.41681,-1.20555,-1.72929,-.41749,.27435,-.83437,-.41816,1.53915,1.70267,-.41951,.40612,1.35814,-.42019,-1.10404,-.04982,-.42086,-1.7494,-1.4185,-.42154,-1.02477,-.62127,-.42289,1.6356,1.74048,-.42424,.17533,1.19801,-.42491,-1.27445,-.28247,-.42559,-1.726,-1.54148,-.42626,-.82593,-.39736,-.42761,1.70272,1.74717,-.42896,-.05829,1.01669,-.42964,-1.42188,-.50976,-.43031,-1.67182,-1.63676,-.43099,-.61259,-.16665,-.43234,1.73934,1.27883,-.43301,1.19042,1.72264,-.43369,-.29055,.81746,-.43436,-1.54372,-.72765,-.43504,-1.58785,-1.70269,-.43571,-.3886,.06673,-.43706,1.74486,1.42518,-.43774,1.00858,1.66739,-.43841,-.51732,.6039,-.43909,-1.63784,-.93226,-.43976,-1.47564,-1.73812,-.44044,-.15798,.2986,-.44179,1.7192,1.54589,-.44246,.80898,1.58243,-.44314,-.73453,.37985,-.44381,-1.70257,-1.11994,-.44449,-1.33723,-1.74246,-.44516,.07515,-1.00044,-.44584,1.42841,1.63883,-.44719,.5952,1.46933,-.44786,-.93834,.14932,-.44854,-1.73681,-1.28736,-.44921,-1.17513,-1.71569,-.44989,.30662,-.80048,-.45056,1.54798,1.70237,-.45191,.3711,-.08355,-.45326,-1.73999,-1.43155,-.45394,-.99227,-.5865,-.45529,1.63974,1.73542,-.45664,.14068,1.16742,-.45731,-1.29151,-.31461,-.45799,-1.7121,-1.54998,-.45866,-.79195,-.36234,-.46001,1.70209,1.73744,-.46136,-.09193,.98407,-.46204,-1.43462,-.53971,-.46271,-1.65367,-1.64056,-.46339,-.57778,-.13205,-.46474,1.73395,1.70843,-.46609,-.32256,.78341,-.46676,-1.5519,-.75485,-.46744,-1.56579,-1.70172,-.46811,-.3536,.10028,-.46946,1.73481,1.4376,-.47014,.97584,1.64895,-.47081,-.54709,.56906,-.47149,-1.6413,-.9562,-.47216,-1.45008,-1.73239,-.47284,-.12343,.33047,-.47419,1.70468,1.55374,-.47486,.77485,1.56011,-.47554,-.76152,.34485,-.47621,-1.70126,-1.14018,-.47689,-1.30865,-1.73209,-.47756,.1086,-.96758,-.47824,1.44051,1.64196,-.47959,.56033,1.44355,-.48026,-.96203,.11483,-.48094,-1.73076,-1.30352,-.48161,-1.14406,-1.70086,-.48229,.33835,-.76627,-.48296,1.5555,1.70073,-.48431,.33612,-.1169,-.48566,-1.7293,-1.44334,-.48634,-.9593,-.55159,-.48769,1.64253,1.72903,-.48904,.10625,1.1362,-.48971,-1.30737,-.34618,-.49039,-1.69696,-1.55717,-.49106,-.75768,-.32738,-.49241,1.7001,1.14988,-.49309,1.29408,1.72642,-.49376,-.12517,.95098,-.49444,-1.44608,-.56894,-.49511,-1.63437,-1.64302,-.49579,-.54285,-.09768,-.49714,1.72723,1.69299,-.49849,-.35398,.74907,-.49916,-1.55876,-.78118,-.49984,-1.5427,-1.6994,-.50051,-.31866,.13341,-.50186,1.72347,1.44875,-.50254,.94264,1.62937,-.50321,-.57612,.5341,-.50389,-1.64342,-.97914,-.50456,-1.42362,-1.72534,-.50524,-.08913,1.56026,-.50726,.74045,1.53677,-.50794,-.78762,.30994,-.50861,-1.6986,-1.1593,-.50929,-1.27932,-1.72043,-.50996,.14162,-.93428,-.51064,1.45133,1.64374,-.51199,.52535,.0806,-.51334,-1.72337,-1.31847,-.51401,-1.1124,-1.68481,-.51469,.36947,-.73181,-.51536,1.56168,1.69772,-.51671,.30123,-.1498,-.51806,-1.71732,-1.45384,-.51874,-.92589,-.5166,-.52009,1.64397,1.72131,-.52144,.07209,1.10439,-.52211,-1.32201,-.37715,-.52279,-1.68061,-1.56302,-.52346,-.72316,-.29253,-.52481,1.69676,1.16843,-.52549,1.26437,1.71412,-.52616,-.15795,.91748,-.52684,-1.45625,-.59738,-.52751,-1.61396,-1.64411,-.52819,-.50785,-.0636,-.52954,1.71917,1.32548,-.53021,1.09635,1.67633,-.53089,-.38479,.71449,-.53156,-1.56427,-.80658,-.53224,-1.5186,-1.69571,-.53291,-.28384,.16607,-.53426,1.71084,1.45859,-.53494,.90904,1.60868,-.53561,-.60437,.49909,-.53629,-1.64417,-1.00102,-.53696,-1.39629,-1.71695,-.53764,-.05514,1.56544,-.53966,.70582,1.51242,-.54034,-.81279,.27515,-.54101,-1.69458,-1.17726,-.54169,-1.24926,-1.70749,-.54236,.17416,-.90058,-.54304,1.46084,1.64414,-.54439,.49034,-1.33216,-.54641,-1.08017,-1.66756,-.54709,.39994,-.69713,-.54776,1.56652,1.69336,-.54911,.26648,-.18221,-.55046,-1.70405,-1.46301,-.55114,-.8921,-.48158,-.55249,1.64403,1.71225,-.55384,.03827,-.40745,-.55519,-1.66306,-1.56751,-.55586,-.68843,-.25783,-.55721,1.69205,1.18579,-.55789,1.23396,1.70054,-.55856,-.19023,.88359,-.55924,-1.4651,-.62501,-.55991,-1.59244,-1.64383,-.56059,-.47283,-.02987,-.56194,1.70978,1.33853,-.56261,1.06386,1.65848,-.56329,-.41491,.67972,-.56396,-1.56842,-.83102,-.56464,-1.49352,-1.69066,-.56531,-.24918,.19821,-.56666,1.69694,1.4671,-.56734,.87507,1.58689,-.56801,-.63178,.46408,-.56869,-1.64354,-1.02182,-.56936,-1.36811,-1.70722,-.57004,-.02149,-1.05565,-.57071,1.3416,1.56924,-.57206,.671,1.48709,-.57274,-.83697,.24055,-.57341,-1.68918,-1.19402,-.57409,-1.2185,-1.69326,-.57476,.20616,-.86652,-.57544,1.46902,1.64316,-.57679,.45533,.01314,-.57814,-1.70458,-1.34458,-.57881,-1.04742,-1.6491,-.57949,.42971,-.66227,-.58016,1.56997,1.68762,-.58151,.23193,-.21407,-.58286,-1.68951,-1.47085,-.58354,-.85796,-.44658,-.58489,1.6427,1.03179,-.58556,1.35371,1.70185,-.58624,.00482,-.43703,-.58759,-1.64431,-1.57062,-.58826,-.65354,-.22333,-.58961,1.68597,1.68568,-.59096,-.22195,.84938,-.59164,-1.47259,-.65177,-.59231,-1.56983,-1.64215,-.59299,-.43784,.00348,-.59434,1.69904,1.35029,-.59501,1.03086,1.63943,-.59569,-.44431,.6448,-.59636,-1.57117,-.85445,-.59704,-1.46747,-1.68423,-.59771,-.21475,.22978,-.59906,1.68176,1.47425,-.59974,.84077,1.56401,-.60041,-.65831,.42911,-.60109,-1.64151,-1.04147,-.60176,-1.33911,-1.69615,-.60244,.01175,-1.02254,-.60311,1.35302,1.57164,-.60446,.63605,1.46081,-.60514,-.86014,.20618,-.60581,-1.6824,-1.20954,-.60649,-1.18709,-1.67777,-.60716,.23758,-.83216,-.60784,1.47582,1.64078,-.60919,.42038,-.01999,-.61054,-1.69318,-1.35567,-.61121,-1.01419,-1.62947,-.61189,.45872,-.6273,-.61256,1.57203,1.68049,-.61391,.19763,-.24534,-.61526,-1.6737,-1.47731,-.61594,-.82352,-.41165,-.61729,1.63997,1.05086,-.61796,1.32432,1.69012,-.61864,-.0282,-.46585,-.61999,-1.62438,-1.57232,-.62066,-.61854,-.1891,-.62201,1.67849,1.66955,-.62336,-.25306,.81487,-.62404,-1.4787,-.6776,-.62471,-1.54615,-1.63906,-.62539,-.40294,.03638,-.62674,1.68697,1.36071,-.62741,.9974,1.61921,-.62809,-.47293,.60978,-.62876,-1.57252,-.87681,-.62944,-1.44049,-1.67641,-.63011,-.18058,.26073,-.63146,1.66532,1.48001,-.63214,.8062,1.54007,-.63281,-.68391,.39423,-.63349,-1.63807,-1.05995,-.63416,-1.30933,-1.68375,-.63484,.04453,-.98897,-.63551,1.36311,1.57264,-.63686,.60101,.17209,-.63821,-1.67424,-1.22378,-.63889,-1.15507,-1.66101,-.63956,.26836,-.79752,-.64024,1.48123,1.63699,-.64159,.38553,-.05264,-.64294,-1.68043,-1.36541,-.64361,-.98051,-1.60866,-.64429,.48694,-.59225,-.64496,1.57266,1.67198,-.64631,.16362,-.27595,-.64766,-1.65662,-1.48236,-.64834,-.78883,-.37684,-.64969,1.63582,1.06874,-.65036,1.29415,1.67704,-.65104,-.06073,-.49386,-.65239,-1.60328,-1.5726,-.65306,-.58348,-.15517,-.65441,1.66963,1.65215,-.65576,-.2835,.78012,-.65644,-1.48341,-.70246,-.65711,-1.52143,-1.63456,-.65779,-.36816,.06878,-.65914,1.67356,1.36977,-.65981,.96353,1.59782,-.66049,-.50072,.57471,-.66116,-1.57244,-.89807,-.66184,-1.4126,-1.6672,-.66251,-.14675,.291,-.66386,1.64761,1.48436,-.66454,.7714,.35949,-.66589,-1.6332,-1.07721,-.66656,-1.27879,-1.67,-.66724,.07679,-.955,-.66791,1.37181,1.5722,-.66926,.56594,.13835,-.67061,-1.66467,-1.23671,-.67129,-1.12246,-1.64298,-.67196,.29846,-.76267,-.67264,1.48522,1.63176,-.67399,.35084,-.08477,-.67534,-1.66635,-1.37377,-.67601,-.94644,-1.58669,-.67669,.51429,-.55717,-.67736,1.57186,1.66206,-.67871,.12997,-.30587,-.68006,-1.63828,-1.486,-.68074,-.75393,-.3422,-.68209,1.63023,1.08537,-.68276,1.26326,1.66262,-.68344,-.09272,-.52099,-.68479,-1.58102,-1.57143,-.68546,-.54841,-.12162,-.68681,1.65937,1.24267,-.68749,1.10595,1.6335,-.68816,-.31323,.74518,-.68884,-1.48668,-.72631,-.68951,-1.49568,-1.62861,-.69019,-.33357,.10062,-.69154,1.65881,1.37742,-.69221,.92927,1.57528,-.69289,-.52763,.53964,-.69356,-1.57091,-.91818,-.69424,-1.38383,-1.65658,-.69491,-.11329,-1.09765,-.69559,1.24552,.32054,-.69626,1.62864,1.48727,-.69694,.73642,.32496,-.69829,-1.6269,-1.0932,-.69896,-1.24754,-1.65491,-.69964,.10849,-.92066,-.70031,1.37911,1.5703,-.70166,.53088,.10499,-.70301,-1.65371,-1.24829,-.70369,-1.08931,-1.6237,-.70436,.32781,-.72765,-.70504,1.48776,1.62509,-.70639,.31636,-.11632,-.70774,-1.65093,-1.38072,-.70841,-.91202,-1.56359,-.70909,.54073,-.52213,-.70976,1.56959,1.65075,-.71111,.09672,-.33502,-.71246,-1.61869,-1.48817,-.71314,-.71888,-.30778,-.71449,1.6232,1.10071,-.71516,1.23166,1.64687,-.71584,-.12411,-.5472,-.71719,-1.55763,-1.5688,-.71786,-.51338,-.08848,-.71921,1.6477,1.25356,-.71989,1.07255,1.6136,-.72056,-.34218,.71009,-.72124,-1.48848,-.74908,-.72191,-1.46892,-1.62121,-.72259,-.29922,.13186,-.72394,1.64272,1.38364,-.72461,.89469,1.55161,-.72529,-.5536,.50463,-.72596,-1.56791,-.93708,-.72664,-1.3542,-1.64456,-.72731,-.08027,-1.06412,-.72799,1.25606,.34929,-.72866,1.60843,1.4887,-.72934,.7013,.29068,-.73069,-1.61914,-1.10789,-.73136,-1.21561,-1.63849,-.73204,.13957,-.88599,-.73271,1.38497,1.56692,-.73406,.49589,.07208,-.73541,-1.64133,-1.25847,-.73609,-1.05566,-1.60318,-.73676,.35635,-.69251,-.73744,1.48883,1.61697,-.73879,.28215,-.14724,-.74014,-1.63417,-1.38621,-.74081,-.87728,-.48716,-.74216,1.56584,.94607,-.74284,1.33908,1.63802,-.74351,.06393,-.36336,-.74486,-1.59786,-1.48886,-.74554,-.68371,-.27365,-.74689,1.61471,1.11472,-.74756,1.19939,1.62977,-.74824,-.15486,-.57243,-.74959,-1.53312,-1.56467,-.75026,-.47844,-.05582,-.75161,1.63461,1.26303,-.75229,1.03866,1.59246,-.75296,-.37031,.67491,-.75364,-1.4888,-.77073,-.75431,-1.44118,-1.61235,-.75499,-.26517,-1.19123,-.75566,1.11801,.16244,-.75634,1.62529,1.3884,-.75701,.85982,1.52681,-.75769,-.57858,.46972,-.75836,-1.56341,-.95474,-.75904,-1.32376,-1.63112,-.75971,-.04773,-1.03012,-.76039,1.26517,.37721,-.76106,1.58698,1.48865,-.76174,.6661,.2567,-.76309,-1.60991,-1.12122,-.76376,-1.18302,-1.62072,-.76444,.16997,-.85106,-.76511,1.38935,1.56205,-.76646,.46102,.03968,-.76781,-1.62754,-1.26723,-.76849,-1.02155,-1.58142,-.76916,.38405,-.65729,-.76984,1.48839,1.60737,-.77119,.24827,-.17746,-.77254,-1.61607,-1.39021,-.77321,-.84229,-.45232,-.77456,1.56059,.96309,-.77524,1.30823,1.62387,-.77591,.03167,-.39083,-.77726,-1.57579,-1.48805,-.77794,-.64848,-.23985,-.77929,1.60474,1.12736,-.77996,1.1665,1.61134,-.78064,-.1849,-.59663,-.78199,-1.50749,-1.55904,-.78266,-.44364,-.02369,-.78401,1.62011,1.27105,-.78469,1.00433,1.57008,-.78536,-.39755,.63967,-.78604,-1.4876,-.7912,-.78671,-1.41247,-1.60201,-.78739,-.23146,-1.15818,-.78806,1.1303,.19229,-.78874,1.60652,1.39165,-.78941,.8247,1.50091,-.79009,-.60251,.43497,-.79076,-1.5574,-.9711,-.79144,-1.29251,-1.61626,-.79211,-.01575,-.99569,-.79279,1.27283,.40422,-.79346,1.5643,1.48706,-.79414,.63086,.22309,-.79549,-1.5992,-1.13315,-.79616,-1.14982,-1.60162,-.79684,.19963,-.81589,-.79751,1.39223,1.55566,-.79886,.42632,.00784,-.80021,-1.61233,-1.27451,-.80089,-.98702,-1.55844,-.80156,.41082,-.62205,-.80224,1.48643,1.59629,-.80359,.21475,-.20693,-.80494,-1.59664,-1.3927,-.80561,-.80707,-.41767,-.80696,1.55382,.97878,-.80764,1.2766,1.6083,-.80831,-2e-5,-.41737,-.80966,-1.5525,-1.48569,-.81034,-.61325,-.20644,-.81169,1.59328,1.13858,-.81236,1.13301,1.59157,-.81304,-.21417,-.61974,-.81439,-1.48078,-1.55189,-.81506,-.40905,.00785,-.81641,1.60418,1.27758,-.81709,.96961,1.54648,-.81776,-.42385,.60444,-.81844,-1.48486,-.81045,-.81911,-1.38283,-1.59018,-.81979,-.19816,-1.12454,-.82046,1.14116,.22136,-.82114,1.58642,1.39337,-.82181,.7894,1.47393,-.82249,-.62534,.40044,-.82316,-1.54986,-.98611,-.82384,-1.26051,-1.59998,-.82451,.01564,-.96087,-.82519,1.27898,1.48393,-.82654,.59564,.1899,-.82789,-1.58699,-1.14364,-.82856,-1.11605,-1.58119,-.82924,.2285,-.78055,-.82991,1.39355,1.54773,-.83126,.39184,-.02338,-.83261,-1.59568,-1.28028,-.83329,-.95211,-1.53423,-.83396,.43663,-.58684,-.83464,1.4829,1.5837,-.83599,.18168,-.23558,-.83734,-1.57587,-1.39364,-.83801,-.77169,-.38327,-.83936,1.5455,.9931,-.84004,1.24423,1.5913,-.84071,-.03108,-.44292,-.84206,-1.52799,-1.48177,-.84274,-.57805,-.17348,-.84409,1.58032,1.14833,-.84476,1.09896,1.57047,-.84544,-.24261,-.64171,-.84679,-1.45298,-1.54318,-.84746,-.37471,.03874,-.84881,1.58683,1.28258,-.84949,.93453,1.52167,-.85016,-.44915,.56927,-.85084,-1.48054,-.82841,-.85151,-1.35228,-1.57685,-.85219,-.16532,-1.09036,-.85286,1.15054,.24959,-.85354,1.56499,1.39351,-.85421,.75395,1.44587,-.85489,-.64701,.36617,-.85556,-1.54076,-.99972,-.85624,-1.22777,-1.58226,-.85691,.04635,-.92571,-.85759,1.28359,1.47922,-.85894,.56049,.15719,-.86029,-1.57328,-1.15264,-.86096,-1.08174,-1.55942,-.86164,.25651,-.74507,-.86231,1.3933,1.53824,-.86366,.35765,-.05392,-.86501,-1.57761,-1.28449,-.86569,-.91687,-1.50881,-.86636,.46141,-.55172,-.86704,1.47779,1.56961,-.86839,.14909,-.26337,-.86974,-1.55377,-1.39299,-.87041,-.73619,-.34916,-.87176,1.53562,1.00599,-.87244,1.21113,1.57286,-.87311,-.06144,-.46743,-.87446,-1.50227,-1.47626,-.87514,-.54296,-.14103,-.87649,1.56585,1.15657,-.87716,1.06439,1.54803,-.87784,-.27017,-.66247,-.87919,-1.42414,-1.5329,-.87986,-.34068,.06891,-.88121,1.56803,1.28601,-.88189,.89914,1.49566,-.88256,-.47339,.53421,-.88324,-1.47462,-.84503,-.88391,-1.32084,-1.56199,-.88459,-.13301,-1.05567,-.88526,1.15839,.27692,-.88594,1.54222,1.39205,-.88661,.71841,.33223,-.88796,-1.53008,-1.01188,-.88864,-1.19433,-1.5631,-.88931,.07634,-.89025,-.88999,1.28661,1.47289,-.89134,.52546,.12502,-.89269,-1.55804,-1.16011,-.89336,-1.04693,-1.53632,-.89404,.2836,-.70951,-.89471,1.39143,1.52716,-.89606,.3238,-.08371,-.89741,-1.55809,-1.28711,-.89809,-.88135,-1.4822,-.89876,.48509,-.51673,-.89944,1.47105,.85282,-.90011,1.3048,1.55399,-.90079,.11707,-.29022,-.90214,-1.53033,-1.39071,-.90281,-.70062,-.3154,-.90416,1.52414,1.0174,-.90484,1.17735,1.55298,-.90551,-.09104,-.49083,-.90686,-1.47536,-1.46911,-.90754,-.50801,-.10915,-.90889,1.54984,1.16325,-.90956,1.02935,1.52427,-.91024,-.29678,.69172,-.91091,-1.38988,-.68197,-.91159,-1.39425,-1.52102,-.91226,-.30703,-1.16881,-.91294,1.02002,.09831,-.91361,1.54779,1.28781,-.91429,.86349,1.46845,-.91496,-.4965,.49931,-.91564,-1.46707,-.86025,-.91631,-1.28854,-1.5456,-.91699,-.10128,-1.02051,-.91766,1.16467,.30328,-.91834,1.51812,1.38895,-.91901,.68282,.29868,-.92036,-1.5178,-1.02254,-.92104,-1.16022,-1.5425,-.92171,.10553,-.85454,-.92239,1.28801,1.46492,-.92374,.49062,.09345,-.92509,-1.54126,-1.16598,-.92576,-1.01166,-1.51188,-.92644,.30971,-.67392,-.92711,1.38791,1.51448,-.92846,.29036,-.1127,-.92981,-1.53712,-1.28809,-.93049,-.84558,-.48194,-.93184,1.46267,.86732,-.93251,1.27208,1.53682,-.93319,.08565,-.31608,-.93454,-1.50557,-1.38676,-.93521,-.66503,-.28207,-.93656,1.51106,1.02728,-.93724,1.14293,1.53165,-.93791,-.11982,-.51306,-.93926,-1.44726,-1.46032,-.93994,-.47328,-.07791,-.94129,1.53229,1.16831,-.94196,.99386,1.49917,-.94264,-.32238,.65613,-.94331,-1.38551,-.70014,-.94399,-1.36334,-1.50753,-.94466,-.2738,-1.13422,-.94534,1.0295,.12687,-.94601,1.52609,1.28795,-.94669,.82762,1.44005,-.94736,-.51842,.46463,-.94804,-1.45785,-.87401,-.94871,-1.25541,-1.52766,-.94939,-.0702,-.98493,-.95006,1.16932,.32861,-.95074,1.49269,1.38416,-.95141,.64724,.26557,-.95276,-1.5039,-1.03163,-.95344,-1.12548,-1.52044,-.95411,.13388,-.81863,-.95479,1.28772,1.45529,-.95614,.45601,.06254,-.95749,-1.52293,-1.17022,-.95816,-.97597,-1.48612,-.95884,.33478,-.63836,-.95951,1.38269,1.50017,-.96086,.25737,1.1167,-.96154,-1.03365,-.14082,-.96221,-1.5147,-1.28739,-.96289,-.80962,-.4474,-.96424,1.45261,.88033,-.96491,1.23853,1.5181,-.96559,.05492,-.34087,-.96694,-1.47947,-1.38112,-.96761,-.62948,-.24921,-.96896,1.49633,1.03557,-.96964,1.10788,1.50887,-.97031,-.14771,-.53405,-.97166,-1.41798,-1.44983,-.97234,-.43881,-.04736,-.97369,1.51317,1.1717,-.97436,.95798,1.47274,-.97504,-.34689,.6206,-.97571,-1.37944,-.71692,-.97639,-1.33143,-1.49239,-.97706,-.24108,-1.09903,-.97774,1.03738,.15453,-.97841,1.50294,1.28638,-.97909,.79158,1.41048,-.97976,-.53909,.43024,-.98044,-1.44694,-.88626,-.98111,-1.22146,-1.50815,-.98179,-.03984,-.94895,-.98246,1.17229,.35285,-.98314,1.46593,1.37764,-.98381,.61173,.23298,-.98516,-1.48835,-1.0391,-.98584,-1.09014,-1.49692,-.98651,.1613,-.78255,-.98719,1.28572,1.44394,-.98854,.42169,1.21285,-.98921,-.88908,.03236,-.98989,-1.50302,-1.17276,-.99056,-.9399,-1.45903,-.99124,.35872,-.60287,-.99191,1.37574,.72477,-.99259,1.3151,1.4842,-.99326,.22492,1.08122,-.99394,-1.0407,-.168,-.99461,-1.49081,-1.28494,-.99529,-.77351,-.41317,-.99664,1.44083,.89179,-.99731,1.20419,1.4978,-.99799,.02494,-.36453,-.99934,-1.45205,-1.37373,-1.00001,-.59401,-.21689,-1.00136,1.47994,1.0422,-1.00204,1.07226,1.48461,-1.00271,-.17464,-.55373,-1.00406,-1.38753,-1.43762,-1.00474,-.40467,-1.19548,-1.00541,.89441,-.01757,-1.00609,1.49247,1.17338,-1.00676,.92174,1.44498,-1.00744,-.37026,.58517,-1.00811,-1.3716,-.73224,-1.00879,-1.29853,-1.47558,-1.00946,-.2089,-1.06326,-1.01014,1.0436,.18121,-1.01081,1.47832,1.28306,-1.01149,.75542,1.37974,-1.01216,-.55843,.39619,-1.01284,-1.43429,-.89692,-1.01351,-1.18673,-1.48705,-1.01419,-.01025,-.91263,-1.01486,1.17352,.37591,-1.01554,1.43784,1.36936,-1.01621,.57633,1.29015,-1.01689,-.73583,.20096,-1.01756,-1.47112,-1.04488,-1.01824,-1.05424,-1.47193,-1.01891,.18772,-.74637,-1.01959,1.28194,.56305,-1.02026,1.37187,1.43085,-1.02094,.38774,1.17793,-1.02161,-.89933,.00299,-1.02229,-1.48153,-1.17355,-1.02296,-.9035,-1.43061,-1.02364,.38149,-.56751,-1.02431,1.36701,.73933,-1.02499,1.28171,1.46654,-1.02566,.19305,1.04518,-1.02634,-1.04606,-.19417,-1.02701,-1.46545,-1.28071,-1.02769,-.73731,-.37931,-1.02904,1.42731,.90164,-1.02971,1.16908,1.4759,-1.03039,-.00422,-.38698,-1.03174,-1.42329,-1.36454,-1.03241,-.5587,-.18518,-1.03376,1.46186,1.04713,-1.03444,1.03608,1.45888,-1.03511,-.20054,-.57203,-1.03646,-1.35592,-1.42365,-1.03714,-.37091,-1.16018,-1.03781,.90384,.01138,-1.03849,1.47017,1.17328,-1.03916,.88519,1.4159,-1.03984,-.3924,.5499,-1.04051,-1.36196,-.74603,-1.04119,-1.26466,-1.45707,-1.04186,-.17736,-1.02696,-1.04254,1.04808,.20685,-1.04321,1.45221,1.27791,-1.04389,.71919,1.34784,-1.04456,-.57638,.36254,-1.04524,-1.41987,-.90593,-1.04591,-1.15124,-1.46435,-1.04659,.01848,-.87601,-1.04726,1.17296,.39773,-1.04794,1.40842,1.35927,-1.04861,.54111,1.25604,-1.04929,-.74923,.16958,-1.04996,-1.45218,-1.04892,-1.05064,-1.0178,-1.44545,-1.05131,.21309,-.71013,-1.05199,1.27634,.58064,-1.05266,1.33969,1.41599,-1.05334,.3542,1.14226,-1.05401,-.90791,-.02552,-1.05469,-1.45842,-1.17254,-1.05536,-.86681,-1.40085,-1.05604,.40299,-.53234,-1.05671,1.35645,.75233,-1.05739,1.24737,1.44717,-1.05806,.16184,1.00861,-1.05874,-1.04965,-.21925,-1.05941,-1.4386,-1.27465,-1.06009,-.70107,-.34589,-1.06144,1.41199,.90979,-1.06211,1.13322,1.45239,-1.06279,-.0325,-.40816,-1.06414,-1.3932,-1.35352,-1.06481,-.52359,-.15415,-1.06616,1.44206,1.05027,-1.06684,.9994,1.43166,-1.06751,-.22534,.692,-1.06819,-1.27283,-.58888,-1.06886,-1.32316,-1.40787,-1.06954,-.33761,-1.12415,-1.07021,.91156,.03943,-1.07089,1.44625,1.17133,-1.07156,.84837,1.38547,-1.07224,-.41324,.51485,-1.07291,-1.35048,-.75822,-1.07359,-1.22984,-1.43684,-1.07426,-.14651,-.99015,-1.07494,1.05077,.23136,-1.07561,1.42462,1.2709,-1.07629,.68294,1.31479,-1.07696,-.59285,.32937,-1.07764,-1.40364,-.91321,-1.07831,-1.11503,-1.44002,-1.07899,.04629,-.83913,-1.07966,1.17055,.41824,-1.08034,1.37766,1.34731,-1.08101,.50613,1.22099,-1.08169,-.76101,-1.05115,-1.08304,-.98087,-1.41748,-1.08371,.23731,-.67388,-1.08439,1.26885,.59673,-1.08506,1.30635,1.3993,-1.08574,.32115,1.10586,-1.08641,-.91476,-.05308,-1.08709,-1.43367,-1.16965,-1.08776,-.82988,-.49743,-1.08911,1.34402,.76369,-1.08979,1.21208,1.42606,-1.09046,.13136,.97157,-1.09114,-1.05142,-.24318,-1.09181,-1.41025,-1.26668,-1.09249,-.66483,-.31297,-1.09384,1.39484,.91619,-1.09451,1.09665,1.42723,-1.09519,-.05982,-.42797,-1.09654,-1.36178,-1.34062,-1.09721,-.48874,-.12387,-1.09856,1.4205,1.05156,-1.09924,.96224,1.40293,-1.09991,-.24897,.65578,-1.10059,-1.26438,-.60419,-1.10126,-1.28925,-1.39026,-1.10194,-.30483,-1.0874,-1.10261,.9175,.06649,-1.10329,1.42068,1.16748,-1.10396,.81133,1.35371,-1.10464,-.43271,.48008,-1.10531,-1.33709,-.76873,-1.10599,-1.19409,-1.41483,-1.10666,-.11642,-.95287,-1.10734,1.05159,.25468,-1.10801,1.39551,1.26196,-1.10869,.64673,1.2806,-1.10936,-.60777,.29672,-1.11004,-1.38556,-.9187,-1.11071,-1.0781,-1.41403,-1.11139,.07309,-.80204,-1.11206,1.16621,.43735,-1.11274,1.34556,1.33344,-1.11341,.47144,1.185,-1.11409,-.77109,-1.05149,-1.11544,-.94349,-1.388,-1.11611,.26031,-.63769,-1.11679,1.25942,.61125,-1.11746,1.27187,1.38074,-1.11814,.28865,1.06877,-1.11881,-.91978,-.07963,-1.11949,-1.40727,-1.16482,-1.12016,-.79274,-.46282,-1.12151,1.32966,.77333,-1.12219,1.17586,1.40315,-1.12286,.10169,.93407,-1.12354,-1.05127,-.26586,-1.12421,-1.38039,-1.25675,-1.12489,-.62865,-.28062,-1.12624,1.3758,.92074,-1.12691,1.05939,1.4004,-1.12759,-.0861,-.44635,-1.12894,-1.32901,-1.32577,-1.12961,-.45422,-1.16667,-1.13029,.77546,-.0944,-1.13096,1.39714,1.05093,-1.13164,.92463,1.37268,-1.13231,-.27133,.61962,-1.13299,-1.25396,-.6179,-1.13366,-1.2542,-1.37075,-1.13434,-.27263,-1.04997,-1.13501,.92158,.09249,-1.13569,1.39343,1.16165,-1.13636,.77411,1.32061,-1.13704,-.45071,.44565,-1.13771,-1.32174,-.77748,-1.13839,-1.15741,-1.39102,-1.13906,-.08717,-.91517,-1.13974,1.05046,.27671,-1.14041,1.36488,1.25103,-1.14109,.6106,1.24526,-1.14176,-.62106,.26469,-1.14244,-1.36557,-.9223,-1.14311,-1.0405,-1.38636,-1.14379,.09882,-.76479,-1.14446,1.15987,.45497,-1.14514,1.31212,1.31759,-1.14581,.43711,1.1481,-1.14649,-.77938,-1.04986,-1.14784,-.90568,-1.35698,-1.14851,.28201,-.60159,-1.14919,1.24798,.62411,-1.14986,1.23624,1.36027,-1.15054,.25678,1.031,-1.15121,-.9229,-.10507,-1.15189,-1.37917,-1.15797,-1.15256,-.75545,-.42859,-1.15391,1.31332,.78116,-1.15459,1.13873,1.37843,-1.15526,.07289,.89617,-1.15594,-1.04914,-.28722,-1.15661,-1.34898,-1.2448,-1.15729,-.59259,-.24892,-1.15864,1.35484,.92337,-1.15931,1.02146,1.37188,-1.15999,-.11125,.74611,-1.16066,-1.15593,-.4632,-1.16134,-1.29489,-1.30891,-1.16201,-.4201,-1.12931,-1.16269,.78282,-.06584,-1.16336,1.37195,1.04829,-1.16404,.88663,1.34089,-1.16471,-.29234,.5836,-1.16539,-1.24148,-.62989,-1.16606,-1.21801,-1.34929,-1.16674,-.2411,-1.01187,-1.16741,.92372,.11735,-1.16809,1.36448,1.15377,-1.16876,.73676,1.28615,-1.16944,-.46716,.41163,-1.17011,-1.30438,-.78437,-1.17079,-1.11983,-1.36536,-1.17146,-.05885,-.87707,-1.17214,1.0473,.29737,-1.17281,1.3327,1.23804,-1.17349,.57463,1.20878,-1.17416,-.63261,.23333,-1.17484,-1.34362,-.92394,-1.17551,-1.00225,-1.35697,-1.17619,.12338,-.72741,-1.17686,1.15146,.47102,-1.17754,1.27732,1.29971,-1.17821,.4032,1.1103,-1.17889,-.78579,.05192,-1.17956,-1.35865,-1.04619,-1.18024,-.86749,-1.32441,-1.18091,.30231,-.56566,-1.18159,1.23445,.63522,-1.18226,1.19948,1.33782,-1.18294,.2256,.99259,-1.18361,-.92403,-.12932,-1.18429,-1.34935,-1.14903,-1.18496,-.71805,-.3948,-1.18631,1.29491,.78709,-1.18699,1.1007,1.35182,-1.18766,.04506,.85788,-1.18834,-1.04494,-.30716,-1.18901,-1.31602,-1.23074,-1.18969,-.55671,-1.19011,-1.19036,.63771,-.21793,-1.19104,1.33189,.92399,-1.19171,.98289,1.34162,-1.19239,-.13519,-.47842,-1.19374,-1.25941,-1.28998,-1.19441,-.38642,-1.09106,-1.19509,.78826,-.03826,-1.19576,1.34487,1.04355,-1.19644,.84826,1.30753,-1.19711,-.31191,.54777,-1.19779,-1.22689,-.64008,-1.19846,-1.18067,-1.32584,-1.19914,-.2103,-.97315,-1.19981,.92382,.14098,-1.20049,1.33377,1.14374,-1.20116,.69933,1.25032,-1.20184,-.48196,.37809,-1.20251,-1.28492,-.78931,-1.20319,-1.08135,-1.3378,-1.20386,-.03153,-.83861,-1.20454,1.04203,.31657,-1.20521,1.29894,1.2229,-1.20589,.53885,1.17116,-1.20656,-.64234,.20272,-1.20724,-1.31965,-.92351,-1.20791,-.96337,-1.32582,-1.20859,.14668,-.68996,-1.20926,1.14089,.48539,-1.20994,1.24115,1.27972,-1.21061,.36978,1.0716,-1.21129,-.79023,.02486,-1.21196,-1.33061,-1.04037,-1.21264,-.82894,-1.29025,-1.21331,.32113,-.52995,-1.21399,1.21877,.64447,-1.21466,1.16157,1.31334,-1.21534,.1952,.95355,-1.21601,-.92307,-.1523,-1.21669,-1.31775,-1.1379,-1.21736,-.68059,-.36151,-1.21871,1.27438,.79102,-1.21939,1.06178,1.3233,-1.22006,.01827,.81926,-1.22074,-1.03857,-.32558,-1.22141,-1.28146,-1.21449,-1.22209,-.52106,-1.15192,-1.22276,.64648,-.18773,-1.22344,1.30689,.92249,-1.22411,.9437,1.30957,-1.22479,-.15783,.67122,-1.22546,-1.13477,-.49192,-1.22614,-1.22254,-1.26891,-1.22681,-.35328,-1.05191,-1.22749,.79168,-.01175,-1.22816,1.31586,1.03662,-1.22884,.80955,1.27257,-1.22951,-.32994,.51219,-1.23019,-1.21008,-.64837,-1.23086,-1.14219,-1.30031,-1.23154,-.18032,-.93381,-1.23221,.92177,.16327,-1.23289,1.30128,1.13149,-1.23356,.66185,1.2131,-1.23424,-.49501,.34509,-1.23491,-1.26329,-.7922,-1.23559,-1.04199,-1.30829,-1.23626,-.0053,-.79983,-1.23694,1.03453,.3342,-1.23761,1.26358,1.20552,-1.23829,.50334,1.13239,-1.23896,-.65013,-.92091,-1.24031,-.92388,-1.29287,-1.24099,.16863,-.65249,-1.24166,1.12807,.49799,-1.24234,1.20358,1.25754,-1.24301,.33693,1.03201,-1.24369,-.79259,-.00108,-1.24436,-1.3006,-1.0323,-1.24504,-.79009,-1.25448,-1.24571,.33835,-.49451,-1.24639,1.20082,.65177,-1.24706,1.12251,1.28674,-1.24774,.16566,.91391,-1.24841,-.91991,-.17389,-1.24909,-1.28434,-1.1245,-1.24976,-.64312,-.32882,-1.25111,1.25164,.79284,-1.25179,1.02198,1.29278,-1.25246,-.00738,.78033,-1.25314,-1.02992,-.34239,-1.25381,-1.24528,-1.19597,-1.25449,-.48571,-1.11257,-1.25516,.65327,-.15841,-1.25584,1.27976,.91876,-1.25651,.90391,1.2757,-1.25719,-.17906,.63376,-1.25786,-1.12077,-.50359,-1.25854,-1.18426,-1.2456,-1.25921,-.32074,-1.01189,-1.25989,.79295,.0136,-1.26056,1.28483,1.02739,-1.26124,.77055,1.23597,-1.26191,-.34633,.47692,-1.26259,-1.19097,-.65464,-1.26326,-1.10255,-1.27263,-1.26394,-.15123,-.89387,-1.26461,.91747,.18414,-1.26529,1.26694,1.1169,-1.26596,.6244,1.17447,-1.26664,-.5062,.31271,-1.26731,-1.23941,-.79292,-1.26799,-1.00174,-1.27676,-1.26866,.01975,-.76076,-1.26934,1.02471,.35015,-1.27001,1.22656,1.18582,-1.27069,.46816,1.09246,-1.27136,-.65588,.14411,-1.27204,-1.26537,-.91603,-1.27271,-.8838,-1.25806,-1.27339,.18912,-.61504,-1.27406,1.11288,.50869,-1.27474,1.16459,1.23307,-1.27541,.30472,.99155,-1.27609,-.79274,-.02581,-1.27676,-1.26855,-1.02188,-1.27744,-.75095,-.45942,-1.27879,1.18052,.65698,-1.27946,1.08229,1.25796,-1.28014,.13706,.87369,-1.28081,-.91443,-.194,-1.28149,-1.24906,-1.10869,-1.28216,-.60569,-1.15462,-1.28284,.51106,-.29678,-1.28351,1.22659,.79242,-1.28419,.98129,1.26021,-1.28486,-.03179,.74112,-1.28554,-1.01889,-.35747,-1.28621,-1.20743,-1.17507,-1.28689,-.45071,-1.07205,-1.28756,.65794,-.13006,-1.28824,1.25041,.91269,-1.28891,.86354,1.23994,-1.28959,-.19879,.59634,-1.29026,-1.10436,-.5133,-1.29094,-1.14455,-1.21995,-1.29161,-.28888,-.97098,-1.29229,.79195,.03769,-1.29296,1.25173,1.01574,-1.29364,.73128,1.19769,-1.29431,-.36095,.44203,-1.29499,-1.16945,-.65876,-1.29566,-1.06174,-1.24272,-1.29634,-.12314,-.85336,-1.29701,.91079,.20347,-1.29769,1.23069,1.09986,-1.29836,.587,1.1344,-1.29904,-.5154,-.79133,-1.30039,-.96062,-1.24312,-1.30106,.0435,-.72143,-1.30174,1.01243,.36431,-1.30241,1.18785,1.16368,-1.30309,.43337,1.05135,-1.30376,-.65944,.11628,-1.30444,-1.23488,-.90873,-1.30511,-.84315,-1.22133,-1.30579,.20805,-.57767,-1.30646,1.0952,.51738,-1.30714,1.12415,1.20622,-1.30781,.27323,.9502,-1.30849,-.79056,-.04922,-1.30916,-1.23437,-1.00896,-1.30984,-.71156,-.42474,-1.31119,1.15775,.65998,-1.31186,1.04089,1.22689,-1.31254,.10949,.83289,-1.31321,-.90651,-.21252,-1.31389,-1.21183,-1.09037,-1.31456,-.56834,-1.11381,-1.31524,.51922,-.26548,-1.31591,1.19912,.78963,-1.31659,.93972,1.22548,-1.31726,-.05486,.70168,-1.31794,-1.00533,-.37068,-1.31861,-1.16784,-1.15165,-1.31929,-.41614,-1.03035,-1.31996,.66036,-.10278,-1.32064,1.21875,.90413,-1.32131,.82261,1.20221,-1.32199,-.21688,.55902,-1.32266,-1.08538,-.52092,-1.32334,-1.10337,-1.19187,-1.32401,-.25778,-.92919,-1.32469,.78855,.0604,-1.32536,1.21646,1.00153,-1.32604,.69179,1.15767,-1.32671,-.37368,.40757,-1.32739,-1.14539,-.6606,-1.32806,-1.01973,-1.21046,-1.32874,-.09613,-.81229,-1.32941,.90158,.22113,-1.33009,1.19246,1.08022,-1.33076,.54971,1.09284,-1.33144,-.52248,.25013,-1.33211,-1.18445,-.78731,-1.33279,-.9186,-1.20729,-1.33346,.06585,-.68188,-1.33414,.99756,.37655,-1.33481,1.14738,1.13897,-1.33549,.39904,1.00904,-1.33616,-.66068,.08957,-1.33684,-1.20202,-.89887,-1.33751,-.80193,-1.18258,-1.33819,.22527,-.54042,-1.33886,1.07489,.5239,-1.33954,1.08221,1.17686,-1.34021,.24254,.90796,-1.34089,-.7859,-.07121,-1.34156,-1.19797,-.99341,-1.34224,-.67196,-.39053,-1.34359,1.13237,.66061,-1.34426,.99827,1.19342,-1.34494,.08307,.79154,-1.34561,-.89598,-.2293,-1.34629,-1.17257,-1.06939,-1.34696,-.53113,-1.07148,-1.34764,.52517,-.235,-1.34831,1.16911,.78432,-1.34899,.89726,1.18851,-1.34966,-.07647,.66203,-1.35034,-.98909,-.3819,-1.35101,-1.12646,-1.1256,-1.35169,-.38207,-.98743,-1.35236,.66038,-.07666,-1.35304,1.18466,.89292,-1.35371,.78112,1.16243,-1.35439,-.23321,.52185,-1.35506,-1.06371,-.5263,-1.35574,-1.06065,-1.1612,-1.35641,-.22752,-.8865,-1.35709,.78258,.08162,-1.35776,1.17891,.9846,-1.35844,.65209,1.11583,-1.35911,-.38437,.37363,-1.35979,-1.11865,-.65999,-1.36046,-.9765,-1.17574,-1.36114,-.07032,-.77066,-1.36181,.88969,.237,-1.36249,1.15215,1.05785,-1.36316,.51259,1.04973,-1.36384,-.52728,.2201,-1.36451,-1.15311,-.78067,-1.36519,-.87568,-1.16915,-1.36586,.08668,-.64213,-1.36654,.97992,.38671,-1.36721,1.10507,1.11152,-1.36789,.36523,.96549,-1.36856,-.65944,.06407,-1.36924,-1.16665,-.88628,-1.36991,-.76017,-1.14174,-1.37059,.24067,-.50334,-1.37126,1.0518,.5281,-1.37194,1.0387,1.14485,-1.37261,.21274,.86481,-1.37329,-.77858,-.09163,-1.37396,-1.15924,-.97506,-1.37464,-.63217,-.35687,-1.37599,1.10422,.65872,-1.37666,.95441,1.15741,-1.37734,.0579,.74964,-1.37801,-.88268,-.24421,-1.37869,-1.13119,-1.04557,-1.37936,-.4941,-1.02757,-1.38004,.52877,-.20544,-1.38071,1.13641,.77631,-1.38139,.85388,1.14917,-1.38206,-.09648,.62219,-1.38274,-.97001,-.39095,-1.38341,-1.0832,-1.09673,-1.38409,-.34855,-.94324,-1.38476,.65783,-.05182,-1.38544,1.14799,.87889,-1.38611,.73908,1.12049,-1.38679,-.24763,.48488,-1.38746,-1.03915,-.52927,-1.38814,-1.01634,-1.12779,-1.38881,-.19821,-.84289,-1.38949,.77386,.10122,-1.39016,1.13895,.96476,-1.39084,.61221,1.07208,-1.39151,-.39286,.34027,-1.39219,-1.08905,-.65676,-1.39286,-.93199,-1.1384,-1.39354,-.04582,-.72848,-1.39421,.87492,.25092,-1.39489,1.10965,1.03254,-1.39556,.47568,1.005,-1.39624,-.52962,.19104,-1.39691,-1.11899,-.77123,-1.39759,-.83184,-1.12856,-1.39826,.10585,-.60222,-1.39894,.95933,.39462,-1.39961,1.06083,1.08118,-1.40029,.33203,.92065,-1.40096,-.65552,.03991,-1.40164,-1.12864,-.87076,-1.40231,-.71785,-1.09867,-1.40299,.25408,-.46649,-1.40366,1.02573,.52979,-1.40434,.99356,1.11,-1.40501,.18394,.82073,-1.40569,-.76841,-.11037,-1.40636,-1.11802,-.95369,-1.40704,-.59221,-.32384,-1.40839,1.07311,.65409,-1.40906,.90923,1.11869,-1.40974,.0341,.70718,-1.41041,-.86639,-.2571,-1.41109,-1.08754,-1.01872,-1.41176,-.45732,-.982,-1.41244,.5298,-.1769,-1.41311,1.10083,.76539,-1.41379,.80955,1.10731,-1.41446,-.11477,.5822,-1.41514,-.94785,-.39768,-1.41581,-1.03794,-1.06485,-1.41649,-.31568,-.89773,-1.41716,.65249,-.02838,-1.41784,1.10857,.86183,-1.41851,.69648,1.07625,-1.41919,-.25998,.44816,-1.41986,-1.0115,-.52964,-1.42054,-.97034,-1.09146,-1.42121,-.16994,-.79832,-1.42189,.76218,.11905,-1.42256,1.09642,.94181,-1.42324,.57218,1.0263,-1.42391,-.39897,.30758,-1.42459,-1.05638,-.65069,-1.42526,-.88613,-1.09826,-1.42594,-.02275,-.68574,-1.42661,.85706,.26272,-1.42729,1.06481,1.00408,-1.42796,.43903,.95856,-1.42864,-.52929,.16305,-1.42931,-1.08189,-.75877,-1.42999,-.78702,-1.08537,-1.43066,.12321,-.56215,-1.43134,.93555,.4001,-1.43201,1.01453,1.04771,-1.43269,.29951,.87445,-1.43336,-.6487,.01723,-1.43404,-1.08777,-.85207,-1.43471,-.67496,-1.05322,-1.43539,.26532,-.42991,-1.43606,.99645,.52877,-1.43674,.94667,1.07212,-1.43741,.15623,.77566,-1.43809,-.75515,-.12724,-1.43876,-1.07414,-.92908,-1.43944,-.55211,-1.00261,-1.44011,.40106,-.2915,-1.44079,1.03883,.64651,-1.44146,.86267,1.07708,-1.44214,.0118,.66415,-1.44281,-.84688,-.26777,-1.44349,-1.04146,-.98859,-1.44416,-.42081,-.93466,-1.44484,.52806,-.14949,-1.44551,1.06214,.75132,-1.44619,.76423,1.06273,-1.44686,-.13115,.54206,-1.44754,-.92239,-.40186,-1.44821,-.99055,-1.02972,-1.44889,-.28353,-.85081,-1.44956,.64412,-.00648,-1.45024,1.06619,.84146,-1.45091,.65329,1.02954,-1.45159,-.27006,.41174,-1.45226,-.98051,-.52716,-1.45294,-.92254,-1.05196,-1.45361,-.14283,-.75274,-1.45429,.74728,.13493,-1.45496,1.05113,.91547,-1.45564,.532,.97835,-1.45631,-.40247,.27562,-1.45699,-1.0204,-.64153,-1.45766,-.83884,-1.05511,-1.45834,-.00127,-.6424,-1.45901,.83582,.2722,-1.45969,1.01746,.97221,-1.46036,.40268,.91029,-1.46104,-.52607,.13624,-1.46171,-1.04155,-.74302,-1.46239,-.74118,-1.03935,-1.46306,.13857,-.52194,-1.46374,.90832,.40291,-1.46441,.966,1.01085,-1.46509,.26776,.82679,-1.46576,-.63872,-.00384,-1.46644,-1.04381,-.82995,-1.46711,-.63148,-1.0052,-1.46779,.27419,-.39365,-1.46846,.96367,.52478,-1.46914,.89791,1.03093,-1.46981,.12974,.72955,-1.47049,-.73853,-.14208,-1.47116,-1.02737,-.90094,-1.47184,-.51187,-.25995,-1.47319,1.00107,.6357,-1.47386,.81463,1.03231,-1.47454,-.00883,.62051,-1.47521,-.82384,-.276,-1.47589,-.99276,-.95489,-1.47656,-.38464,-.88541,-1.47724,.52328,-.12332,-1.47791,1.02008,.73381,-1.47859,.71785,1.0152,-1.47926,-.14545,.50178,-1.47994,-.89331,-.40324,-1.48061,-.94084,-.99105,-1.48129,-.25219,-.80237,-1.48196,.63245,.01371,-1.48264,1.02059,.81749,-1.48331,.6095,.98015,-1.48399,-.27766,.37565,-1.48466,-.94587,-.52158,-1.48534,-.87277,-1.009,-1.48601,-.11699,-.70607,-1.48669,.72885,.14867,-1.48736,1.00282,.88543,-1.48804,.49169,.92802,-1.48871,-.40312,.24449,-1.48939,-.98079,-.62898,-1.49006,-.79,-1.00864,-1.49074,.01847,-.59844,-1.49141,.8109,.27913,-1.49209,.96735,.93659,-1.49276,.36669,.86,-1.49344,-.51965,.11075,-1.49411,-.99768,-.72365,-1.49479,-.69422,-.99024,-1.49546,.15174,-.48159,-1.49614,.87729,.4028,-1.49681,.91504,.97028,-1.49749,.23685,.77753,-1.49816,-.62527,-.02311,-1.49884,-.99647,-.80404,-1.49951,-.58735,-.95436,-1.50019,.28044,-.35775,-1.50086,.92705,.51751,-1.50154,.84709,.98611,-1.50221,.1046,.68229,-1.50289,-.7182,-.15467,-1.50356,-.97743,-.8689,-1.50424,-.47148,-.90189,-1.50491,.40227,-.22926,-1.50559,.9595,.62132,-1.50626,.76494,.98406,-1.50694,-.02763,.57621,-1.50761,-.79692,-.28156,-1.50829,-.94117,-.91725,-1.50896,-.34883,-.83404,-1.50964,.51514,-.09854,-1.51031,.97429,.71248,-1.51099,.67029,.96441,-1.51166,-.15743,.46135,-1.51234,-.86023,-.40154,-1.51301,-.88857,-.94846,-1.51369,-.22174,-.75224,-1.51436,.61712,.03202,-1.51504,.97141,.78954,-1.51571,.56502,.92778,-1.51639,-.28249,.33994,-1.51706,-.90717,-.51254,-1.51774,-.82084,-.96221,-1.51841,-.09258,-.65819,-1.51909,.70651,.16004,-1.51976,.95116,.85128,-1.52044,.45122,.87507,-1.52111,-.40059,.21428,-1.52179,-.93715,-.61266,-1.52246,-.73943,-.95851,-1.52314,.03627,-.55379,-1.52381,.78187,.28323,-1.52449,.91418,.89681,-1.52516,.33108,.80749,-1.52584,-.50969,.08672,-1.52651,-.94986,-.70026,-1.52719,-.64602,-.93768,-1.52786,.16248,-.44107,-1.52854,.84204,.39942,-1.52921,.86138,.92555,-1.52989,.20688,.72649,-1.53056,-.60794,-.04039,-1.53124,-.94535,-.77391,-1.53191,-.5425,-.90036,-1.53259,.28377,-.32224,-1.53326,.88615,.5066,-1.53394,.79397,.93724,-1.53461,.08096,.63375,-1.53529,-.69372,-.16474,-1.53596,-.92395,-.8325,-1.53664,-.43092,-.8475,-1.53731,.39802,-.19955,-1.53799,.91366,.60295,-1.53866,.71342,.93192,-1.53934,-.04438,.53116,-1.54001,-.76566,-.2841,-1.54069,-.88632,-.87519,-1.54136,-.31343,-.7803,-1.54204,.50324,-.0753,-1.54271,.92432,.68689,-1.54339,.6214,.90997,-1.54406,-.16683,.42075,-1.54474,-.82265,-.39638,-1.54541,-.83342,-.90147,-1.54609,-.19228,-.70022,-1.54676,.59768,.04821,-1.54744,.91821,.75709,-1.54811,.51977,.87205,-1.54879,-.28423,.30465,-1.54946,-.86392,-.49962,-1.55014,-.76645,-.91111,-1.55081,-.06975,-.60894,-1.55149,.67976,.16874,-1.55216,.89572,.81249,-1.55284,.41056,.81913,-1.55351,-.39449,.18509,-1.55419,-.88896,-.59211,-1.55486,-.68688,-.90422,-1.55554,.0519,-.50832,-1.55621,.74821,.28413,-1.55689,.85754,.85232,-1.55756,.29589,.75243,-1.55824,-.49573,.06431,-1.55891,-.89758,-.67232,-1.55959,-.59639,-.88121,-1.56026,.17046,-.40035,-1.56094,.80199,.39235,-1.56161,.80463,.87612,-1.56229,.17796,.6734,-1.56296,-.58624,-.05544,-1.56364,-.88992,-.73899,-1.56431,-.49681,-.84277,-1.56499,.28381,-.28716,-1.56566,.84038,.49155,-1.56634,.73822,.88374,-1.56701,.05899,.58372,-1.56769,-.66455,-.17199,-1.56836,-.86641,-.79115,-1.56904,-.39013,-.7899,-1.56971,.38995,-.1709,-1.57039,.86295,.58005,-1.57106,.65977,.87532,-1.57174,-.05882,.48523,-1.57241,-.72943,-.28325,-1.57309,-.82775,-.82809,-1.57376,-.27846,-.72382,-1.57444,.48707,-.05378,-1.57511,.86956,.65644,-1.57579,.57095,.85131,-1.57646,-.17331,.37989,-1.57714,-.77995,-.38728,-1.57781,-.77493,-.84942,-1.57849,-.16392,-.64598,-1.57916,.57354,.06203,-1.57984,.86039,.71951,-1.58051,.47358,.81244,-1.58119,-.28245,.26978,-1.58186,-.81543,-.48228,-1.58254,-.70921,-.85502,-1.58321,-.0487,-.55806,-1.58389,.64797,.17443,-1.58456,.8359,.76837,-1.58524,.36963,.75972,-1.58591,-.38432,.15702,-1.58659,-.83552,-.56669,-1.58726,-.63203,-.84512,-1.58794,.06508,-.46186,-1.58861,.70922,.2814,-1.58929,.79686,.80239,-1.58996,.26113,.69439,-1.59064,-.47718,.04374,-1.59131,-.84013,-.63914,-1.59199,-.54505,-.82017,-1.59266,.17533,-.35934,-1.59334,.75641,.38107,-1.59401,.74425,.82123,-1.59469,.15019,.6179,-1.59536,-.55948,-.06795,-1.59604,-.82949,-.69853,-1.59671,-.45007,-.78097,-1.59739,.28008,-.2525,-1.59806,.78895,.47173,-1.59874,.67934,.82484,-1.59941,.03891,.5319,-1.60009,-.62992,-.176,-1.60076,-.8041,-.74403,-1.60144,-.34902,-.72851,-1.60211,.3775,-.14344,-1.60279,.80653,.5519,-1.60346,.60358,.81348,-1.60414,-.07063,.43819,-1.60481,-.68744,-.27848,-1.60549,-.76476,-.77508,-1.60616,-.2439,-.66406,-1.60684,.46594,-.03421,-1.60751,.80916,.6203,-1.60819,.51861,.78768,-1.60886,-.17643,.33867,-1.60954,-.73123,-.37362,-1.61021,-.71248,-.79141,-1.61089,-.13677,-.58907,-1.61156,.54393,.07313,-1.61224,.79708,.67591,-1.61291,.42622,.74822,-1.61359,-.2766,.23533,-1.61426,-.76077,-.45978,-1.61494,-.64852,-.79304,-1.61561,-.02966,-.50518,-1.61629,.61025,.17662,-1.61696,.77087,.71797,-1.61764,.32828,.69614,-1.61831,-.36939,.13018,-1.61899,-.77584,-.53555,-1.61966,-.57435,-.78027,-1.62034,.07542,-.41415,-1.62101,.66393,.27442,-1.62169,.73132,.746,-1.62236,.22678,.63272,-1.62304,-.45323,.02525,-1.62371,-.77648,-.59976,-1.62439,-.49158,-.75366,-1.62506,.17655,-.31786,-1.62574,.70423,.36481,-1.62641,.67948,.7598,-1.62709,.12368,.5594,-1.62776,-.52674,-.07751,-1.62844,-.76301,-.65147,-1.62911,-.40198,-.71404,-1.62979,.27192,-.21825,-1.63046,.73073,.44627,-1.63114,.61663,.75944,-1.63181,.02098,.47781,-1.63249,-.5888,-.17621,-1.63316,-.73602,-.68999,-1.63384,-.30739,-.66248,-1.63451,.35985,-.11727,-1.63519,.74324,.51747,-1.63586,.54422,.74528,-1.63654,-.07939,.38969,-1.63721,-.6385,-.26908,-1.63789,-.69636,-.71493,-1.63856,-.20973,-.60024,-1.63924,.43888,-.01688,-1.63991,.74189,.57733,-1.64059,.46385,.71793,-1.64126,-.17559,.29687,-1.64194,-.67521,-.3545,-1.64261,-.6451,-.72615,-1.64329,-.11094,-.52877,-1.64396,.50772,.08104,-1.64464,.72705,.62499,-1.64531,.37727,.67825,-1.64599,-.26589,.20124,-1.64666,-.69857,-.43104,-1.64734,-.58351,-.7238,-1.64801,-.01293,-.44969,-1.64869,.56534,.17467,-1.64936,.69935,.65986,-1.65004,.28628,.62733,-1.65071,-.34873,.10471,-1.65139,-.70849,-.49746,-1.65206,-.51305,-.70828,-1.65274,.08244,-.36472,-1.65341,.61091,.26233,-1.65409,.65968,.68162,-1.65476,.19276,.00916,-1.65611,-.70513,-.55277,-1.65679,-.43531,-.68025,-1.65746,.17342,-.27563,-1.65814,.6439,.34251,-1.65881,.60912,.69021,-1.65949,.09857,-.0836,-1.66084,-.68893,-.59621,-1.66151,-.35201,-.64061,-1.66219,.25837,-.18429,-1.66286,.66402,.41386,-1.66354,.54897,-.17185,-1.66556,-.66058,-.62728,-1.66624,-.26491,-.59045,-1.66691,.33581,-.09253,-1.66759,.67126,.47525,-1.66826,.48067,.33913,-1.66961,-.58085,-.25399,-1.67029,-.62099,-.64573,-1.67096,-.17583,-.53108,-1.67164,.40445,-.00215,-1.67231,.66586,.25409,-1.67434,-.60995,-.3286,-1.67501,-.57127,-.65159,-1.67569,-.08658,-.46395,-1.67636,.46321,.0851,-1.67704,.64831,.16736,-1.67906,-.62669,-.39444,-1.67974,-.51273,-.64515,-1.68041,.00106,-.39062,-1.68109,.51123,.16759,-1.68176,.61935,.08073,-1.68379,-.63114,-.45049,-1.68446,-.44682,-.62691,-1.68514,.0854,-.31277,-1.68581,.54792,.24382,-1.68649,.57992,.60683,-1.68716,.15889,-.00407,-1.68851,-.62363,-.49593,-1.68919,-.3751,-.59765,-1.68986,.16485,-.23212,-1.69054,.57289,-.08538,-1.69324,-.6047,-.5302,-1.69391,-.29924,-.1504,-1.69526,.58606,-.16166,-1.69796,-.57514,-.55301,-1.69864,-.22093,-.51014,-1.69931,.30346,-.06934,-1.69999,.58757,-.23152,-1.70269,-.53596,-.56429,-1.70336,-.14188,-.45438,-1.70404,.36026,.00941,-1.70471,.57781,-.29372,-1.70741,-.48833,-.56424,-1.70809,-.0638,-.39252,-1.70876,.4075,-.34724,-1.71214,-.4336,-.5533,-1.71281,.01171,-.32612,-1.71349,.44453,.05836,-1.71619,-.53972,-.39127,-1.71686,-.37322,-.53213,-1.71754,.08309,-.25679,-1.71821,.47096,-.01374,-1.72091,-.52751,-.42521,-1.72159,-.30876,-.50162,-1.72226,.14895,-.1862,-1.72294,.48664,-.08147,-1.72564,-.50551,-.44873,-1.72631,-.24184,-.14346,-1.73036,-.47462,-.46174,-1.73104,-.1741,-.41708,-1.73171,.25925,-.19851,-1.73509,-.43597,-.46437,-1.73576,-.10717,-.36569,-1.73644,.30175,-.24558,-1.73981,-.39082,-.31019,-1.74116,.33487,.09818,-1.74386,-.43509,-.25216,-1.74589,.35818,.03762,-1.74859,-.42547,-.01855,-1.75331,-.40688,-.38254,-1.75466,.12176,-.06891,-1.75804,-.3802,-.34368,-1.75939,.1626,-.3,-1.76411,.19469,-.20444,-1.77356,.22952,.05858,-1.77626,-.28541,.01791,-1.78099,-.26031,-.01472,-1.78571,-.22586,-.0366,-1.79044,-.18164]};function Vl(e,t=32){let n=[...e].sort((e,t)=>e.id.localeCompare(t.id)),r=[];for(;n.length;){let e=[n.shift()];for(let r=0;r<e.length;r++)for(let i=n.length-1;i>=0;i--)Math.hypot(e[r].x-n[i].x,e[r].y-n[i].y)<=t&&e.push(n.splice(i,1)[0]);r.push(e.sort((e,t)=>e.id.localeCompare(t.id)))}return r}function Hl(e,t,n){if(e.length>10){let r=Math.max(1,Math.min(Math.ceil(Math.sqrt(e.length)),Math.floor((t-32)/44))),i=Math.ceil(e.length/r),a=Math.max(16+(r-1)*22,Math.min(t-16-(r-1)*22,e.reduce((e,t)=>e+t.x,0)/e.length)),o=Math.max(16+(i-1)*22,Math.min(n-16-(i-1)*22,e.reduce((e,t)=>e+t.y,0)/e.length));return e.map((e,t)=>({...e,anchorX:e.x,anchorY:e.y,x:a+(t%r-(r-1)/2)*44,y:o+(Math.floor(t/r)-(i-1)/2)*44}))}let r=Math.max(38,e.length*44/(2*Math.PI)),i=r+16,a={x:Math.max(Math.min(i,t/2),Math.min(t-i,e.reduce((e,t)=>e+t.x,0)/e.length)),y:Math.max(Math.min(i,n/2),Math.min(n-i,e.reduce((e,t)=>e+t.y,0)/e.length))};return e.map((t,n)=>{let i=n*Math.PI*2/e.length;return{...t,anchorX:t.x,anchorY:t.y,x:a.x+Math.cos(i)*r,y:a.y+Math.sin(i)*r}})}function Ul(e,t,n){let r=Hl(e,t,n),i=r.map(({x:e,y:t})=>({x:e,y:t}));for(let e=16;e<=n-16;e+=40)for(let n=16;n<=t-16;n+=40)i.push({x:n,y:e});let a=[];return r.map(r=>{let o=i.filter(r=>r.x>=16&&r.x<=t-16&&r.y>=16&&r.y<=n-16&&e.every(e=>Math.hypot(r.x-e.x,r.y-e.y)>=32)&&a.every(e=>Math.hypot(r.x-e.x,r.y-e.y)>=40-1e-6));o.sort((e,t)=>Math.hypot(e.x-r.x,e.y-r.y)-Math.hypot(t.x-r.x,t.y-r.y));let s=o[0]??i.filter(e=>e.x>=16&&e.x<=t-16&&e.y>=16&&e.y<=n-16&&Math.hypot(e.x-r.anchorX,e.y-r.anchorY)>=32).sort((e,t)=>{let n=e=>Math.min(...a.map(t=>Math.hypot(e.x-t.x,e.y-t.y)));return n(t)-n(e)})[0]??r;return a.push(s),{...r,x:s.x,y:s.y}})}var Wl=(e=``)=>`${`/`.replace(/\/$/,``)}/${e.replace(/^\//,``)}`;function Gl(e){let t=new Map(e.map(e=>[e.id,e])),n=new Map;for(let r of e)for(let e of r.from??[]){let i=t.get(e);if(!i||r.id===e||!i.to?.includes(r.id))continue;let[a,o]=r.id<e?[r,i]:[i,r],s=JSON.stringify([a.id,o.id]),c=n.get(s)??{start:a,end:o,forward:!1,reverse:!1};r===a?c.forward=!0:c.reverse=!0,n.set(s,c)}return[...n.values()]}function Kl(e,t){let n=new Map(e.map(e=>[e.id,e])),r=new Map;for(let e of t){let t=n.get(e.source),i=n.get(e.target);if(!t||!i||t.id===i.id)continue;let[a,o]=t.id<i.id?[t,i]:[i,t],s=JSON.stringify([a.id,o.id]),c=r.get(s)??{start:a,end:o,forward:!1,reverse:!1,color:e.color};e.direction===`both`?c.forward=c.reverse=!0:e.direction!==`none`&&(t===a?c.forward=!0:c.reverse=!0),r.set(s,c)}return[...r.values()]}function ql(e,t=1.82){let n=Dt.degToRad(e.latitude),r=Dt.degToRad(e.longitude);return new q(t*Math.cos(n)*Math.sin(r),t*Math.sin(n),t*Math.cos(n)*Math.cos(r))}var Jl=class extends vi{start;tangent;angle;lift;constructor(e,t){super(),this.start=ql(e,1);let n=ql(t,1),r=Dt.clamp(this.start.dot(n),-1,1);if(this.angle=Math.acos(r),this.tangent=n.clone().addScaledVector(this.start,-r),this.tangent.lengthSq()<1e-12){let e=Math.abs(this.start.y)<.9?new q(0,1,0):new q(1,0,0);this.tangent.crossVectors(e,this.start)}this.tangent.normalize(),this.lift=Math.min(.3,Math.max(.035,this.angle*.32))}getPoint(e,t=new q){return t.copy(this.start).multiplyScalar(Math.cos(this.angle*e)).addScaledVector(this.tangent,Math.sin(this.angle*e)).multiplyScalar(1.82+Math.sin(Math.PI*e)*this.lift)}};function Yl(e){return{start:{x:e.x,y:e.y},end:{x:Math.max(e.left,Math.min(e.x,e.left+e.width)),y:Math.max(e.top,Math.min(e.y,e.top+e.height))}}}function Xl(e,t,n,r){let i=(e,t,n)=>(t.x-e.x)*(n.y-e.y)-(t.y-e.y)*(n.x-e.x);return Math.max(e.x,t.x)<Math.min(n.x,r.x)||Math.max(n.x,r.x)<Math.min(e.x,t.x)||Math.max(e.y,t.y)<Math.min(n.y,r.y)||Math.max(n.y,r.y)<Math.min(e.y,t.y)?!1:i(e,t,n)*i(e,t,r)<=0&&i(n,r,e)*i(n,r,t)<=0}function Zl(e,t){let n={x:t.left,y:t.top},r={x:t.left+t.width,y:t.top},i={x:t.left,y:t.top+t.height},a={x:t.left+t.width,y:t.top+t.height};return[[n,r],[r,a],[a,i],[i,n]].some(([t,n])=>Xl(e.start,e.end,t,n))}function Ql(e,t,n,r=[]){let i=[],a=(e,t)=>e.left<t.left+t.width+6&&e.left+e.width+6>t.left&&e.top<t.top+t.height+6&&e.top+e.height+6>t.top,o=new Map(r.map(e=>[e.id,e])),s=new Map(r.map((e,t)=>[e.id,t])),c=[...e].sort((e,t)=>(s.get(e.id)??2**53-1)-(s.get(t.id)??2**53-1)||e.id.localeCompare(t.id));for(let r of c){let s=o.get(r.id),c=s?{...r,left:r.x+s.left-s.x,top:r.y+s.top-s.y}:null,l=c?[c]:[];for(let t=0;t<=e.length+2;t++)for(let e of t?[-t,t]:[0])for(let t of[r.x+16,r.x-r.width-16,r.x-r.width/2])l.push({...r,left:t,top:r.y-r.height/2+e*(r.height+6)});let u=r=>r.left>=6&&r.top>=6&&r.left+r.width<=t-6&&r.top+r.height<=n-6&&!i.some(e=>a(r,e))&&!e.some(e=>a(r,{left:e.x-5,top:e.y-5,width:10,height:10})),d=t=>{let n=Yl(t),r=0;for(let e of i){let i=Yl(e);Xl(n.start,n.end,i.start,i.end)&&(r+=100),Zl(n,e)&&(r+=10),Zl(i,t)&&(r+=10)}for(let i of e)i.id!==t.id&&Zl(n,{...i,left:i.x-6,top:i.y-6,width:12,height:12})&&r++;let a=c?Math.hypot(t.left-c.left,t.top-c.top):0;return r*1e4+a*20+Math.hypot(n.end.x-n.start.x,n.end.y-n.start.y)},f=e=>e.filter(u).sort((e,t)=>d(e)-d(t))[0],p=f(l);if(p&&c&&u(c)&&d(c)<=d(p)+40&&(p=c),!p){let e=[];for(let i=6;i+r.height<=n-6;i+=r.height+6)for(let n=6;n+r.width<=t-6;n+=r.width+6)e.push({...r,left:n,top:i});p=f(e)}p&&i.push(p)}return i}var $l=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),eu=e(((e,t)=>{t.exports=$l()})),tu=eu(),nu=[];function ru({ref:e,markers:t,connections:r=nu,labelMode:i=`all`,clusterMarkers:a=!1,clusterDistance:o=32,renderLabel:s,renderDetails:c,appearance:l,initialView:u,selectedId:d,defaultSelectedId:f=null,onSelect:p,focusOnSelection:m=!1,className:h=``,style:g}){let _=(0,n.useId)(),v=(0,n.useRef)(null),y=(0,n.useRef)(new Map),[b,x]=(0,n.useState)(f),S=d===void 0?b:d,C=(0,n.useRef)({markers:t,edges:r,labelMode:i,appearance:l,clusterMarkers:a,clusterDistance:o}),w=(0,n.useRef)(new Map),T=(0,n.useRef)([]),[E,D]=(0,n.useState)([]),O=(0,n.useRef)(u),k=(0,n.useRef)(p),A=(0,n.useRef)(S),j=(0,n.useRef)(null),M=t.find(e=>e.id===S),N=(0,n.useRef)(null),P=(0,n.useRef)(!1),[ee,te]=(0,n.useState)(!1),[F,I]=(0,n.useState)(!1),[ne,re]=(0,n.useState)(!1);(0,n.useImperativeHandle)(e,()=>({focusMarker:e=>{C.current.markers.some(t=>t.id===e)&&(P.current=!0,te(!0),N.current?.focusMarker(e))}}),[]),(0,n.useLayoutEffect)(()=>{C.current={markers:t,edges:r,labelMode:i,appearance:l,clusterMarkers:a,clusterDistance:o},k.current=p,A.current=M?.id??null}),(0,n.useEffect)(()=>{let e=v.current;if(!e)return;let t;try{t=new _l({alpha:!0,antialias:!0})}catch{re(!0);return}t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.domElement.setAttribute(`aria-hidden`,`true`),e.appendChild(t.domElement);let n=new Nn,r=new Ma(45,1,.1,100);r.position.set(0,.4,6.2);let i=new Tn;if(i.rotation.y=Dt.degToRad(-105),n.add(i),O.current){let e=O.current;r.position.copy(i.localToWorld(ql({id:`initial-view`,latitude:e.latitude,longitude:e.longitude},Dt.clamp(e.distance??r.position.length(),4.6,8.5))))}let a=new Ki(1.79,48,32),o=new zr({colorWrite:!1});i.add(new Zr(a,o));let s=document.createElement(`canvas`);s.width=s.height=32;let c=s.getContext(`2d`);c&&(c.fillStyle=`#fff`,c.beginPath(),c.arc(16,16,14,0,Math.PI*2),c.fill());let l=new pi(s),u=(e,t,n,r)=>{let a=new Dr;a.setAttribute(`position`,new hr(e,3));let o=new ui(a,new ai({color:t,size:n,opacity:r,transparent:!0,map:l,alphaTest:.1,depthWrite:!1}));return i.add(o),o},d=u(Bl.land,12907896,.033,1),f=u(Bl.ocean,8558694,.014,.36),p=[],m=(e,t)=>{let n=Dt.degToRad(e),r=Dt.degToRad(t);p.push(1.805*Math.cos(n)*Math.sin(r),1.805*Math.sin(n),1.805*Math.cos(n)*Math.cos(r))};for(let e=-60;e<=60;e+=30)for(let t=-180;t<180;t+=2)m(e,t);for(let e=-180;e<180;e+=30)for(let t=-88;t<=88;t+=2)m(t,e);let h=u(p,11126648,.008,.23),g=[],_=[],b=[],x=()=>{b.forEach(e=>{i.remove(e),e.geometry.dispose(),e.material.dispose()}),b=[]},S=(e,t)=>{let n=new Zr(new qi(new Jl(e.start,e.end),96,.006,6,!1),new na({transparent:!0,depthWrite:!1,uniforms:{time:{value:0},offset:{value:t*.27},forward:{value:Number(e.forward)},reverse:{value:Number(e.reverse)},motion:{value:1},color:{value:new X(12907896)}},vertexShader:`
          varying float progress;
          void main() {
            progress = uv.x;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform float time, offset, forward, reverse, motion;
          uniform vec3 color;
          varying float progress;
          float pulse(float position, float phase) {
            float tail = fract(phase - position * 2.0);
            return (1.0 - smoothstep(0.0, 0.32, tail))
              * smoothstep(0.0, 0.035, position)
              * smoothstep(0.0, 0.035, 1.0 - position);
          }
          void main() {
            float phase = time * 0.7 + offset;
            float brightness = max(
              forward * pulse(progress, phase),
              reverse * pulse(1.0 - progress, phase + 0.5)
            ) * motion;
            gl_FragColor = vec4(mix(color, vec3(1.0), brightness * 0.55),
              0.42 + brightness * 0.58);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
          }
        `}));return n.userData.connectionColor=e.color,i.add(n),n},E=new Dl(r,e);E.enablePan=!1,E.minDistance=4.6,E.maxDistance=8.5,E.minPolarAngle=.3,E.maxPolarAngle=Math.PI-.3,E.rotateSpeed=.55,E.zoomSpeed=.6,E.autoRotateSpeed=.5,E.saveState(),e.style.touchAction=`pan-y`;let D=matchMedia(`(prefers-reduced-motion: reduce)`);D.matches&&(P.current=!0,te(!0));let k=0,M=!0,ee=!1,F=!1,ne=0,ie=0,ae=new q,oe=new q,L=new q,R=[],se=()=>{if(F)return;t.render(n,r);let{width:a,height:o}=e.getBoundingClientRect(),s=[],c=[];g.forEach((e,t)=>{let n=y.current.get(e.id);if(!n)return;ae.copy(_[t]),i.localToWorld(ae),L.copy(r.position).sub(ae),oe.copy(ae).project(r),n.hidden=ae.dot(L)<=0||Math.abs(oe.x)>1||Math.abs(oe.y)>1;let s=(oe.x+1)*a/2,l=(1-oe.y)*o/2;n.hidden||c.push({id:e.id,x:s,y:l})}),w.current.clear(),(C.current.clusterMarkers?Vl(c,C.current.clusterDistance):c.map(e=>[e])).forEach(e=>{let t=e.map(e=>e.id),n=e.length>1&&t.some(e=>T.current.includes(e)||e===A.current);(n?Ul(e,a,o):e).forEach((r,i)=>{let a=y.current.get(r.id),o=e.length>1&&!n;a.hidden=o&&i>0;let c=o?e.reduce((e,t)=>e+t.x,0)/e.length:r.x,l=o?e.reduce((e,t)=>e+t.y,0)/e.length:r.y;a.style.left=`${c}px`,a.style.top=`${l}px`,a.dataset.cluster=String(o),o&&w.current.set(r.id,t);let u=g.find(e=>e.id===r.id);a.setAttribute(`aria-label`,o?`展开 ${e.length} 个相邻地点 / Expand ${e.length} nearby places: ${e.map(e=>g.find(t=>t.id===e.id)?.ariaLabel??e.id).join(`, `)}`:u.ariaLabel??u.label),a.setAttribute(`aria-expanded`,String(!o&&(n||r.id===A.current)));let d=a.querySelector(`.globe-cluster-count`);d.hidden=!o,d.textContent=o?String(e.length):``;let f=a.querySelector(`.globe-cluster-stem`);if(f.hidden=!n,`anchorX`in r&&`anchorY`in r){let e=Number(r.anchorX)-c,t=Number(r.anchorY)-l;f.style.width=`${Math.hypot(e,t)}px`,f.style.transform=`rotate(${Math.atan2(t,e)}rad)`}let p=a.querySelector(`.globe-marker-name`),m=!o&&(n||C.current.labelMode===`all`||C.current.labelMode===`active`&&(u.id===A.current||u.id===j.current));p&&(p.hidden=a.hidden||!m);let h=a.querySelector(`.globe-marker-line`);h&&(h.hidden=a.hidden||!m),!a.hidden&&p&&m&&s.push({id:u.id,x:c,y:l,width:p.offsetWidth,height:p.offsetHeight})})});let l=Ql(s,a,o,R);R=l;let u=new Set(l.map(e=>e.id));s.forEach(({id:e})=>{let t=y.current.get(e),n=t.querySelector(`.globe-marker-name`),r=t.querySelector(`.globe-marker-line`);n.hidden=r.hidden=!u.has(e)}),l.forEach(e=>{let t=y.current.get(e.id),n=t.querySelector(`.globe-marker-name`),r=t.querySelector(`.globe-marker-line`);n.style.left=`${e.left-e.x+10}px`,n.style.top=`${e.top-e.y+10}px`;let i=Yl(e),a=i.end.x-i.start.x,o=i.end.y-i.start.y;r.style.width=`${Math.hypot(a,o)}px`,r.style.transform=`rotate(${Math.atan2(o,a)}rad)`})},ce=e=>{if(F)return;let t=ne?Math.min((e-ne)/1e3,.05):0;ne=e,D.matches||(ie+=t),b.forEach(({material:e})=>{e.uniforms.time.value=ie}),E.update(t),se(),k=requestAnimationFrame(ce)},le=()=>{cancelAnimationFrame(k),ne=0,!F&&(E.autoRotate=!P.current&&!ee,b.forEach(({material:e})=>{e.uniforms.motion.value=Number(!D.matches)}),se(),M&&!document.hidden&&(E.autoRotate||!D.matches&&b.some(({material:e})=>e.uniforms.forward.value||e.uniforms.reverse.value))&&(k=requestAnimationFrame(ce)))},ue=e=>{r.position.setLength(Dt.clamp(r.position.length()*e,E.minDistance,E.maxDistance)),E.update(),se()},de=()=>{R=[];let{width:n,height:i}=e.getBoundingClientRect();t.setSize(n,i),r.aspect=n/Math.max(i,1),r.updateProjectionMatrix(),se()},fe=()=>{ee=!0,le()},pe=()=>{ee=!1,le()},me=()=>e.focus({preventScroll:!0}),he=e=>{if(![`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`+`,`=`,`-`,`Home`].includes(e.key))return;if(e.preventDefault(),e.key===`+`||e.key===`=`)return ue(.9);if(e.key===`-`)return ue(1.1);if(e.key===`Home`){E.reset(),se();return}let t=new Xa().setFromVector3(r.position);t.theta+=e.key===`ArrowLeft`?.12:e.key===`ArrowRight`?-.12:0,t.phi=Dt.clamp(t.phi+(e.key===`ArrowUp`?-.12:e.key===`ArrowDown`?.12:0),E.minPolarAngle,E.maxPolarAngle),r.position.setFromSpherical(t),E.update(),se()},ge=()=>{D.matches&&(P.current=!0,te(!0)),le()},_e=e=>{e.preventDefault(),F=!0,cancelAnimationFrame(k),ne=0,re(!0),I(!1)},ve=()=>{F=!1,de(),re(!1),I(!0),le()};t.domElement.addEventListener(`webglcontextlost`,_e),t.domElement.addEventListener(`webglcontextrestored`,ve);let ye=new ResizeObserver(de);ye.observe(e);let be=new IntersectionObserver(([e])=>{M=e.isIntersecting,le()});be.observe(e),E.addEventListener(`change`,se),E.addEventListener(`start`,fe),E.addEventListener(`end`,pe),e.addEventListener(`pointerdown`,me),e.addEventListener(`keydown`,he),document.addEventListener(`visibilitychange`,le),D.addEventListener(`change`,ge);let xe=()=>{let e=getComputedStyle(document.documentElement);d.material.color.set(C.current.appearance?.landColor??e.getPropertyValue(`--globe-land`).trim()),f.material.color.set(C.current.appearance?.oceanColor??e.getPropertyValue(`--globe-ocean`).trim()),h.material.color.set(C.current.appearance?.gridColor??e.getPropertyValue(`--globe-grid`).trim()),b.forEach(({material:t,userData:n})=>{t.uniforms.color.value.set(n.connectionColor??C.current.appearance?.connectionColor??e.getPropertyValue(`--accent`).trim())}),se()},Se=()=>{g=C.current.markers,_=g.map(e=>ql(e)),R=[],x(),b=Kl(g,C.current.edges).map(S),xe(),le()};N.current={zoom:ue,reset:()=>{E.reset(),se()},sync:le,updateData:Se,updatePalette:xe,focusMarker:e=>{let t=g.find(t=>t.id===e);if(!t)return;let n=i.localToWorld(ql(t,r.position.length())),a=new Xa().setFromVector3(n);a.phi=Dt.clamp(a.phi,E.minPolarAngle,E.maxPolarAngle),r.position.setFromSpherical(a),E.update(),le()}};let Ce=new MutationObserver(xe);return Ce.observe(document.documentElement,{attributes:!0,attributeFilter:[`data-theme`]}),Se(),de(),I(!0),le(),()=>{cancelAnimationFrame(k),t.domElement.removeEventListener(`webglcontextlost`,_e),t.domElement.removeEventListener(`webglcontextrestored`,ve),N.current=null,Ce.disconnect(),ye.disconnect(),be.disconnect(),E.dispose(),e.removeEventListener(`pointerdown`,me),e.removeEventListener(`keydown`,he),document.removeEventListener(`visibilitychange`,le),D.removeEventListener(`change`,ge),[d,f,h].forEach(e=>{e.geometry.dispose(),e.material.dispose()}),x(),a.dispose(),o.dispose(),l.dispose(),t.dispose(),t.forceContextLoss(),t.domElement.remove()}},[]),(0,n.useLayoutEffect)(()=>{F&&N.current?.updateData()},[F,t,r]),(0,n.useLayoutEffect)(()=>{F&&N.current?.updatePalette()},[F,l]),(0,n.useLayoutEffect)(()=>{M&&(P.current=!0,te(!0),F&&m&&N.current?.focusMarker(M.id)),F&&N.current?.sync()},[F,S,m]),(0,n.useLayoutEffect)(()=>{F&&N.current?.sync()},[F,i,s,a,o,E]);let ie=e=>{d===void 0&&x(e),k.current?.(t.find(t=>t.id===e)??null)};(0,n.useEffect)(()=>{(!a||T.current.some(e=>!t.some(t=>t.id===e)))&&(T.current=[],D([]),N.current?.sync())},[t,a]),(0,n.useEffect)(()=>{S!==null&&!M&&(d===void 0&&x(null),k.current?.(null))},[S,M,d]);let ae=()=>{let e=[...T.current].sort()[0]??S;T.current=[],D([]),ie(null),requestAnimationFrame(()=>{N.current?.sync();let t=[...w.current].find(([,t])=>e&&t.includes(e))?.[0];e&&y.current.get(t??e)?.focus({preventScroll:!0})})};return(0,tu.jsxs)(`div`,{className:`dot-globe${F?` is-ready`:``}${ne?` has-error`:``}${h?` ${h}`:``}`,style:g,onKeyDown:e=>{e.key===`Escape`&&(M||E.length)&&(e.stopPropagation(),ae())},children:[(0,tu.jsx)(`img`,{className:`globe-fallback`,src:Wl(`images/dot-globe.svg`),alt:`点阵地球仪 · Dot-matrix globe`}),(0,tu.jsx)(`div`,{ref:v,className:`particle-canvas`,role:`img`,tabIndex:F?0:-1,"aria-label":`互动点阵地球仪：拖动旋转，滚轮或双指缩放；方向键旋转，加减键缩放，Home 复位。 Interactive globe: drag to rotate, scroll or pinch to zoom; arrow keys rotate, plus/minus zoom, Home resets.`}),F&&(0,tu.jsx)(`div`,{className:`globe-markers`,children:t.map(e=>(0,tu.jsxs)(`button`,{ref:t=>{t?y.current.set(e.id,t):y.current.delete(e.id)},type:`button`,className:`globe-marker`,"data-shape":e.appearance?.shape??`circle`,style:{"--globe-marker-color":e.appearance?.color,"--globe-marker-size":e.appearance?.size===void 0?void 0:`${e.appearance.size}px`},"aria-label":e.ariaLabel??e.label,"aria-expanded":S===e.id,"aria-controls":_,onClick:()=>{let t=w.current.get(e.id);t?(T.current=t,D(t),P.current=!0,te(!0),N.current?.sync(),y.current.get(t[0])?.focus({preventScroll:!0})):ie(e.id)},onMouseEnter:()=>{j.current=e.id,N.current?.sync()},onMouseLeave:()=>{j.current=null,N.current?.sync()},onFocus:()=>{j.current=e.id,N.current?.sync()},onBlur:()=>{j.current=null,N.current?.sync()},children:[(0,tu.jsx)(`span`,{className:`globe-marker-line`,"aria-hidden":`true`}),(0,tu.jsx)(`span`,{className:`globe-cluster-stem`,"aria-hidden":`true`,hidden:!0}),(0,tu.jsx)(`span`,{className:`globe-cluster-count`,"aria-hidden":`true`,hidden:!0}),(0,tu.jsx)(`span`,{className:`globe-marker-dot`,"aria-hidden":`true`}),(0,tu.jsx)(`span`,{className:`globe-marker-name`,children:s?s(e):e.label})]},e.id))}),(0,tu.jsx)(`div`,{id:_,className:`globe-notation-card`,hidden:!M,children:M&&(0,tu.jsxs)(tu.Fragment,{children:[(0,tu.jsx)(`button`,{type:`button`,className:`globe-notation-close`,"aria-label":`关闭地点详情 / Close location details`,onClick:ae,children:`×`}),(0,tu.jsx)(`h3`,{className:`globe-notation-title`,children:s?s(M):M.label}),c?.(M)]})}),F&&(0,tu.jsxs)(`div`,{className:`globe-tools`,children:[(0,tu.jsxs)(`p`,{className:`globe-hint`,children:[(0,tu.jsx)(`span`,{lang:`zh`,children:`拖动旋转 · 缩放探索`}),(0,tu.jsx)(`span`,{lang:`en`,children:`Drag to rotate · Zoom to explore`})]}),(0,tu.jsxs)(`div`,{className:`globe-buttons`,children:[E.length>0&&(0,tu.jsx)(`button`,{type:`button`,"aria-label":`收起相邻地点 / Collapse nearby places`,onClick:ae,children:`×`}),(0,tu.jsx)(`button`,{type:`button`,"aria-label":`放大 / Zoom in`,onClick:()=>N.current?.zoom(.9),children:`+`}),(0,tu.jsx)(`button`,{type:`button`,"aria-label":`缩小 / Zoom out`,onClick:()=>N.current?.zoom(1.1),children:`−`}),(0,tu.jsx)(`button`,{type:`button`,"aria-label":`复位 / Reset view`,onClick:()=>N.current?.reset(),children:`↺`}),(0,tu.jsx)(`button`,{type:`button`,"aria-label":ee?`继续自转 / Resume rotation`:`暂停自转 / Pause rotation`,"aria-pressed":ee,onClick:()=>{P.current=!P.current,te(P.current),N.current?.sync()},children:ee?`▷`:`Ⅱ`})]})]})]})}export{eu as n,Gl as r,ru as t};