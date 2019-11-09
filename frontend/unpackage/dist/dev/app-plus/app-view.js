var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190312_syb_scopedata*/window.__wcc_version__='v0.5vv_20190312_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'outter'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'hide']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'!'],[[7],[3,'show']]])
Z([3,'inner'])
Z(z[3])
Z([3,'show-main'])
Z([3,'title'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[2,'?:'],[[2,'=='],[[7],[3,'level']],[1,1]],[1,'破坏者'],[[2,'?:'],[[2,'=='],[[7],[3,'level']],[1,2]],[1,'青铜守卫'],[[2,'?:'],[[2,'=='],[[7],[3,'level']],[1,3]],[1,'黄金守卫'],[[2,'?:'],[[2,'=='],[[7],[3,'level']],[1,4]],[1,'钻石守卫'],[1,'最强王者']]]]]],[1,'']]])
Z([3,'level-image'])
Z([[2,'=='],[[7],[3,'level']],[1,1]])
Z([3,'popup-image'])
Z([3,'../static/level/pohuaizhe.png'])
Z([[2,'=='],[[7],[3,'level']],[1,2]])
Z(z[11])
Z([3,'../static/level/qingtong.png'])
Z([[2,'=='],[[7],[3,'level']],[1,3]])
Z(z[11])
Z([3,'../static/level/huangjin.png'])
Z([[2,'=='],[[7],[3,'level']],[1,4]])
Z(z[11])
Z([3,'../static/level/zuanshi.png'])
Z([[2,'=='],[[7],[3,'level']],[1,5]])
Z(z[11])
Z([3,'../static/level/wangzhe.png'])
Z([3,'bottom'])
Z([3,'share'])
Z(z[26])
Z([3,'mini'])
Z([3,'warn'])
Z([3,'去分享'])
Z(z[0])
Z([3,'i-know'])
Z(z[2])
Z(z[28])
Z([3,'primary'])
Z([3,'知道了'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'detail-show-outer'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'hide']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'!'],[[7],[3,'show']]])
Z([3,'detail-show-inner'])
Z(z[3])
Z([3,'inner-display'])
Z([3,'inner-text inner-text-show'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'detail']],[3,'keyword']]],[1,' 属于']]])
Z([[2,'=='],[[6],[[7],[3,'detail']],[3,'garbageType']],[1,1]])
Z([3,'text-margin-left garbage-gan-item'])
Z([3,'干垃圾'])
Z([[2,'=='],[[6],[[7],[3,'detail']],[3,'garbageType']],[1,2]])
Z([3,'text-margin-left garbage-shi-item'])
Z([3,'湿垃圾'])
Z([[2,'=='],[[6],[[7],[3,'detail']],[3,'garbageType']],[1,3]])
Z([3,'text-margin-left garbage-huishou-item'])
Z([3,'可回收物'])
Z([[2,'=='],[[6],[[7],[3,'detail']],[3,'garbageType']],[1,4]])
Z([3,'text-margin-left garbage-youhai-item'])
Z([3,'有害垃圾'])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'detail']],[3,'remark']],[1,null]],[[2,'!='],[[6],[[7],[3,'detail']],[3,'remark']],[1,undefined]]])
Z([[4],[[5],[[5],[1,'inner-text']],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'detail']],[3,'garbageType']],[1,1]],[1,'garbage-gan-item'],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'detail']],[3,'garbageType']],[1,2]],[1,'garbage-shi-item'],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'detail']],[3,'garbageType']],[1,3]],[1,'garbage-huishou-item'],[1,'garbage-youhai-item']]]]]])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'detail']],[3,'remark']]],[1,'']]])
Z([3,'inner-text inner-button'])
Z([3,'text-button'])
Z([3,'share'])
Z([3,'primary'])
Z([3,'分享给朋友'])
Z(z[0])
Z([3,'text-button i-know'])
Z(z[2])
Z([3,'我知道了'])
Z([[2,'!'],[1,false]])
Z([3,' inner-text-kefu'])
Z([3,'contact'])
Z([3,'warn'])
Z([3,'给客服留言'])
Z([3,'inner-text'])
Z(z[9])
Z([3,'show-img'])
Z([3,'../../../static/classify/style-gan.jpg'])
Z(z[12])
Z([3,'show-img-shi'])
Z([3,'../../../static/classify/style-shi.jpg'])
Z(z[15])
Z([3,'show-img-huishou'])
Z([3,'../../../static/classify/style-huishou.jpg'])
Z(z[18])
Z(z[40])
Z([3,'../../../static/classify/style-youhai.jpg'])
Z([3,'adunit-060249bea9401e5c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-6b30a266'])
Z([3,'share-popup data-v-6b30a266'])
Z([3,'button-view data-v-6b30a266'])
Z([3,'text-img data-v-6b30a266'])
Z([3,'share'])
Z([3,'buttom-view data-v-6b30a266'])
Z([3,'share-img data-v-6b30a266'])
Z([3,'../static/icos/share.png'])
Z([3,'text data-v-6b30a266'])
Z([3,'分享'])
Z(z[3])
Z([3,'contact'])
Z(z[5])
Z(z[6])
Z([3,'../static/icos/service.png'])
Z(z[8])
Z([3,'客服'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'uni-icon']],[[2,'+'],[1,'uni-icon-'],[[7],[3,'type']]]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'onClick']]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']],[[2,'+'],[[2,'+'],[1,'font-size:'],[[7],[3,'fontSize']]],[1,';']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'show']])
Z([3,'__e'])
Z([3,'uni-noticebar'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'backgroundColor']]],[1,';']],[[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']]])
Z([[2,'||'],[[2,'==='],[[7],[3,'showClose']],[1,'true']],[[2,'==='],[[7],[3,'showClose']],[1,true]]])
Z([3,'uni-noticebar__close'])
Z([3,'__l'])
Z([3,'12'])
Z([3,'closefill'])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'uni-noticebar__content']],[[7],[3,'setContenClass']]]])
Z([[2,'||'],[[2,'==='],[[7],[3,'showIcon']],[1,'true']],[[2,'==='],[[7],[3,'showIcon']],[1,true]]])
Z([3,'uni-noticebar__content-icon'])
Z(z[4])
Z(z[7])
Z([[7],[3,'color']])
Z([3,'14'])
Z([3,'sound'])
Z([3,'2'])
Z([[4],[[5],[[5],[1,'uni-noticebar__content-text']],[[7],[3,'setTextClass']]]])
Z([3,'uni-noticebar__content-inner'])
Z([[7],[3,'elId']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'animation:'],[[7],[3,'animation']]],[1,';']],[[2,'+'],[[2,'+'],[1,'-webkit-animation:'],[[7],[3,'animation']]],[1,';']]])
Z([a,[[7],[3,'text']]])
Z([[2,'||'],[[2,'==='],[[7],[3,'showGetMore']],[1,'true']],[[2,'==='],[[7],[3,'showGetMore']],[1,true]]])
Z(z[1])
Z([3,'uni-noticebar__content-more'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clickMore']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'width:'],[[2,'?:'],[[7],[3,'moreText']],[1,'180upx'],[1,'20px']]],[1,';']])
Z([[7],[3,'moreText']])
Z([3,'uni-noticebar__content-more-text'])
Z([a,[[7],[3,'moreText']]])
Z(z[7])
Z(z[17])
Z([3,'arrowright'])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z(z[0])
Z([3,'uni-mask'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'hide']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'moveHandle']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'!'],[[7],[3,'show']]])
Z([[2,'+'],[[2,'+'],[1,'top:'],[[2,'+'],[[7],[3,'offsetTop']],[1,'px']]],[1,';']])
Z([[4],[[5],[[5],[1,'uni-popup']],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'uni-popup-'],[[7],[3,'position']]],[1,' ']],[1,'uni-popup-']],[[7],[3,'mode']]]]])
Z(z[4])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'msg']]],[1,'']]])
Z([[2,'&&'],[[2,'==='],[[7],[3,'position']],[1,'middle']],[[2,'==='],[[7],[3,'mode']],[1,'insert']]])
Z(z[0])
Z([[4],[[5],[[5],[[5],[1,'uni-icon uni-icon-close']],[[2,'?:'],[[2,'==='],[[7],[3,'buttonMode']],[1,'bottom']],[1,'uni-close-bottom'],[1,'']]],[[2,'?:'],[[2,'==='],[[7],[3,'buttonMode']],[1,'right']],[1,'uni-close-right'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'closeMask']],[[4],[[5],[1,'$event']]]]]]]]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-steps'])
Z([[4],[[5],[[5],[1,'uni-steps-items']],[[2,'+'],[1,'uni-steps-'],[[7],[3,'direction']]]]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'steps']])
Z(z[2])
Z([[4],[[5],[[5],[1,'uni-steps-item']],[[2,'?:'],[[6],[[7],[3,'item']],[3,'status']],[[2,'+'],[1,'uni-steps-'],[[6],[[7],[3,'item']],[3,'status']]],[1,'']]]])
Z([3,'uni-steps-item-circle-container'])
Z([[2,'!=='],[[6],[[7],[3,'item']],[3,'status']],[1,'process']])
Z([3,'uni-steps-item-circle'])
Z([[2,'+'],[[2,'+'],[1,'background-color:'],[[2,'?:'],[[2,'==='],[[6],[[7],[3,'item']],[3,'status']],[1,'finish']],[[7],[3,'activeColor']],[1,'']]],[1,';']])
Z(z[9])
Z([[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'activeColor']]],[1,';']])
Z([[2,'!=='],[[7],[3,'index']],[[2,'-'],[[6],[[7],[3,'steps']],[3,'length']],[1,1]]])
Z([3,'uni-steps-item-line'])
Z(z[10])
Z([3,'uni-steps-item-title-container'])
Z([[2,'+'],[[2,'+'],[1,'color:'],[[2,'?:'],[[2,'==='],[[6],[[7],[3,'item']],[3,'status']],[1,'process']],[[7],[3,'activeColor']],[1,'']]],[1,';']])
Z([3,'uni-steps-item-title'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z([[6],[[7],[3,'item']],[3,'desc']])
Z([3,'uni-steps-item-desc'])
Z([a,[[6],[[7],[3,'item']],[3,'desc']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'controlShow']])
Z([3,'content'])
Z([[7],[3,'animationData']])
Z([3,'main-panel'])
Z([3,'quesion-panel'])
Z([3,'quesion-panel-item1'])
Z([3,'quesion-panel-text'])
Z([a,[[2,'+'],[[2,'+'],[[7],[3,'current']],[1,1]],[1,'.']]])
Z(z[6])
Z([a,[[2,'+'],[1,''],[[2,'?:'],[[2,'>'],[[6],[[7],[3,'questionBanks']],[3,'length']],[1,0]],[[6],[[6],[[7],[3,'questionBanks']],[[7],[3,'current']]],[3,'garbageName']],[1,'干电池']]]])
Z([3,'quesion-panel-item2'])
Z([3,'属于哪种垃圾分类？'])
Z([3,'quesion-panel-item3'])
Z([3,'gary'])
Z([3,'（点击下方图标选择）'])
Z([3,'main-show-classify'])
Z([3,'main-classify'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'switchTabToClassify']],[[4],[[5],[1,1]]]]]]]]]]])
Z([3,'main-img'])
Z([3,'../../static/icos/ico-1.jpg'])
Z(z[17])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'switchTabToClassify']],[[4],[[5],[1,2]]]]]]]]]]])
Z(z[19])
Z([3,'../../static/icos/ico-2.jpg'])
Z(z[16])
Z(z[17])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'switchTabToClassify']],[[4],[[5],[1,3]]]]]]]]]]])
Z(z[19])
Z([3,'../../static/icos/ico-3.jpg'])
Z(z[17])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'switchTabToClassify']],[[4],[[5],[1,4]]]]]]]]]]])
Z(z[19])
Z([3,'../../static/icos/ico-4.jpg'])
Z([3,'top-text'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[2,'+'],[[7],[3,'current']],[1,1]]],[1,'']]])
Z(z[13])
Z([3,'/ 10'])
Z([3,'white'])
Z([3,'video'])
Z([3,'adunit-19c9c625b0b4a546'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'margin-bottom:20rpx;'])
Z([[2,'-'],[[7],[3,'level']],[1,1]])
Z([3,'__l'])
Z([[4],[[5],[[5],[[5],[[5],[[5],[[8],'title',[1,'破坏者']]],[[8],'title',[1,'青铜守卫']]],[[8],'title',[1,'黄金守卫']]],[[8],'title',[1,'钻石守卫']]],[[8],'title',[1,'王者']]]])
Z([3,'1'])
Z([3,'level'])
Z([3,'text-left'])
Z([[2,'=='],[[7],[3,'level']],[1,1]])
Z([3,'level1'])
Z([3,'破坏者'])
Z([[2,'=='],[[7],[3,'level']],[1,2]])
Z([3,'level2'])
Z([3,'青铜守卫'])
Z([[2,'=='],[[7],[3,'level']],[1,3]])
Z([3,'level3'])
Z([3,'黄金守卫'])
Z([[2,'=='],[[7],[3,'level']],[1,4]])
Z([3,'level4'])
Z([3,'钻石守卫'])
Z([[2,'=='],[[7],[3,'level']],[1,5]])
Z([3,'level5'])
Z([3,'最强王者'])
Z([3,'text-right'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[2,'?:'],[[2,'!='],[[7],[3,'score']],[1,0]],[[7],[3,'score']],[1,'']]],[1,'0分']]])
Z([3,'summary'])
Z(z[8])
Z(z[9])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'multiTips']],[[6],[[7],[3,'$root']],[3,'g0']]]],[1,'']]])
Z(z[11])
Z(z[12])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'multiTips']],[[6],[[7],[3,'$root']],[3,'g1']]]],[1,'']]])
Z(z[14])
Z(z[15])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'multiTips']],[[6],[[7],[3,'$root']],[3,'g2']]]],[1,'']]])
Z(z[17])
Z(z[18])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'multiTips']],[[6],[[7],[3,'$root']],[3,'g3']]]],[1,'']]])
Z(z[20])
Z(z[21])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'multiTips']],[[6],[[7],[3,'$root']],[3,'g4']]]],[1,'']]])
Z([3,'table'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[42])
Z([[4],[[5],[[5],[1,'table-item']],[[2,'?:'],[[2,'=='],[[2,'%'],[[7],[3,'index']],[1,2]],[1,1]],[1,'gray'],[1,'']]]])
Z([3,'garbage-name'])
Z([a,[[6],[[7],[3,'item']],[3,'garbageName']]])
Z([[4],[[5],[[5],[1,'selected']],[[2,'?:'],[[2,'!='],[[6],[[7],[3,'item']],[3,'garbageType']],[[6],[[7],[3,'item']],[3,'selectedType']]],[1,'through'],[1,'']]]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'selectedType']],[1,1]])
Z([3,'干垃圾'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'selectedType']],[1,2]])
Z([3,'湿垃圾'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'selectedType']],[1,3]])
Z([3,'可回收物'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'selectedType']],[1,4]])
Z([3,'有害垃圾'])
Z([3,'result'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'garbageType']],[[6],[[7],[3,'item']],[3,'selectedType']]])
Z([3,'icon-img'])
Z([3,'../../static/icos/right-full.png'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'garbageType']],[1,1]])
Z([3,'garbage-gan-item'])
Z(z[51])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'garbageType']],[1,2]])
Z([3,'garbage-shi-item'])
Z(z[53])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'garbageType']],[1,3]])
Z([3,'garbage-huishou-item'])
Z(z[55])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'garbageType']],[1,4]])
Z([3,'garbage-youhai-item'])
Z(z[57])
Z([3,'button-show'])
Z([3,'__e'])
Z([3,'goonButton button-left'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'goOnChallenge']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'warn'])
Z([3,'继续挑战'])
Z([3,'goonButton'])
Z([3,'share'])
Z([3,'primary'])
Z([3,'考考别人'])
Z([3,'adunit-060249bea9401e5c'])
Z(z[3])
Z(z[75])
Z([[4],[[5],[[4],[[5],[[5],[1,'^hidePopup']],[[4],[[5],[[4],[[5],[1,'hidePopup']]]]]]]]])
Z([[7],[3,'level']])
Z([[7],[3,'popupShow']])
Z([3,'2'])
Z(z[3])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,false])
Z([1,true])
Z(z[1])
Z(z[1])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'swiper']])
Z(z[4])
Z([3,'swiper-flex'])
Z([3,'__e'])
Z([3,'swiper-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navigateTo']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'swiper']],[1,'']],[[7],[3,'index']]],[1,'skipUrl']]]]]]]]]]]]]]])
Z([3,'background-color:antiquewhite;'])
Z([3,'swiper-img'])
Z([[6],[[7],[3,'item']],[3,'imageUrl']])
Z(z[1])
Z(z[1])
Z(z[1])
Z(z[8])
Z(z[10])
Z(z[12])
Z(z[13])
Z([3,'../../static/showimg/lunbo.png'])
Z(z[8])
Z(z[13])
Z(z[22])
Z([3,'form-view'])
Z([3,'tip-text'])
Z([a,[[2,'+'],[[2,'+'],[1,'你知道 ['],[[6],[[7],[3,'randOneObj']],[3,'garbageName']]],[1,'] 属于哪种类型的垃圾吗?']]])
Z(z[9])
Z(z[9])
Z([3,'form-form'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmit']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'reset']],[[4],[[5],[[4],[[5],[[5],[1,'formReset']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'input-view'])
Z(z[9])
Z([3,'input-view-item input-view-camera'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'takePhoto2']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'search-img'])
Z([3,'../../static/icos/camera.png'])
Z(z[9])
Z([3,'input-view-item input-view-speech'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'readyRecord2']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[37])
Z([3,'../../static/icos/record.png'])
Z([3,'input-view-item input-view-search'])
Z(z[9])
Z(z[9])
Z(z[9])
Z([3,'input-search'])
Z([3,'search'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'confirm']],[[4],[[5],[[4],[[5],[[5],[1,'searchKeyword']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'search']],[[4],[[5],[[4],[[5],[[5],[1,'searchKeyword']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'keyword']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'inputid'])
Z([3,'input'])
Z([3,'输入搜索关键词'])
Z([[7],[3,'keyword']])
Z(z[9])
Z([3,' font-search'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'searchKeyword']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'查询'])
Z([[2,'!'],[1,true]])
Z([3,'rgb(242,242,242)'])
Z([3,'__l'])
Z([3,'#999'])
Z([3,'false'])
Z([3,'提示:本查询系统就供参考,具体分类要求以属地专业管理部门为准'])
Z([3,'1'])
Z([3,'simpleTips'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'randomTip']]],[1,'']]])
Z([3,'main-show-classify'])
Z([3,'main-classify'])
Z(z[9])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'switchTabToClassify']],[[4],[[5],[1,1]]]]]]]]]]])
Z([3,'main-img'])
Z([3,'../../static/icos/ico-1.jpg'])
Z(z[9])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'switchTabToClassify']],[[4],[[5],[1,2]]]]]]]]]]])
Z(z[72])
Z([3,'../../static/icos/ico-2.jpg'])
Z(z[69])
Z(z[9])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'switchTabToClassify']],[[4],[[5],[1,3]]]]]]]]]]])
Z(z[72])
Z([3,'../../static/icos/ico-3.jpg'])
Z(z[9])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'switchTabToClassify']],[[4],[[5],[1,4]]]]]]]]]]])
Z(z[72])
Z([3,'../../static/icos/ico-4.jpg'])
Z(z[61])
Z(z[9])
Z([[4],[[5],[[4],[[5],[[5],[1,'^hidePopup']],[[4],[[5],[[4],[[5],[1,'hidePopup']]]]]]]]])
Z([3,'bottom'])
Z([[7],[3,'popupShow']])
Z([3,'2'])
Z([[4],[[5],[1,'default']]])
Z([3,'view-popup'])
Z([3,'recording-title'])
Z([3,'按住 说话'])
Z([3,'recording-box'])
Z([3,'canvas'])
Z(z[98])
Z(z[9])
Z(z[9])
Z([3,'recording-button'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'start']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'end']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[61])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'animationData']])
Z([3,'background:red;height:100rpx;width:100rpx;'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^hidePopup']],[[4],[[5],[[4],[[5],[1,'hidePopup']]]]]]]]])
Z([1,1])
Z([[7],[3,'popupShow']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'form-view'])
Z([3,'__e'])
Z(z[2])
Z([3,'form-form'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmit']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'reset']],[[4],[[5],[[4],[[5],[[5],[1,'formReset']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'input-view'])
Z(z[2])
Z([3,'input-view-item input-view-camera'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'takePhoto']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'search-img'])
Z([3,'../../static/icos/camera.png'])
Z(z[2])
Z([3,'input-view-item input-view-speech'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'readyRecord']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[10])
Z([3,'../../static/icos/record.png'])
Z([3,'input-view-item input-view-search'])
Z(z[2])
Z(z[2])
Z(z[2])
Z([3,'input-search'])
Z([3,'search'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'search']],[[4],[[5],[[4],[[5],[[5],[1,'doSearch']],[[4],[[5],[1,false]]]]]]]]]],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'keyword']],[1,'$event']],[[4],[[5]]]]]]]],[[4],[[5],[[5],[1,'inputChange']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'confirm']],[[4],[[5],[[4],[[5],[[5],[1,'doSearch']],[[4],[[5],[1,false]]]]]]]]]]])
Z([3,'input'])
Z([3,'输入搜索关键词'])
Z([[7],[3,'keyword']])
Z(z[2])
Z([3,' font-search'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'doSearch']],[[4],[[5],[1,false]]]]]]]]]]])
Z([3,'查询'])
Z(z[2])
Z([3,'search-keyword'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'blur']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'keyword-list-box'])
Z([[2,'!'],[[7],[3,'isShowKeywordList']]])
Z([3,'__i0__'])
Z([3,'row'])
Z([[7],[3,'keywordList']])
Z([3,'keyword'])
Z(z[2])
Z([3,'keyword-entry'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'showDetail']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'keywordList']],[1,'keyword']],[[6],[[7],[3,'row']],[3,'keyword']]]]]]]]]]]]]]]])
Z([3,'keyword-entry-tap'])
Z(z[2])
Z([3,'keyword-text'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'doSearch']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'keywordList']],[1,'keyword']],[[6],[[7],[3,'row']],[3,'keyword']]],[1,'keyword']]]]]]]]]]]]]]])
Z([[6],[[7],[3,'row']],[3,'htmlStr']])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'garbageType']],[1,1]])
Z([3,'keyword-type garbage-gan'])
Z([3,'干垃圾'])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'garbageType']],[1,2]])
Z([3,'keyword-type garbage-shi'])
Z([3,'湿垃圾'])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'garbageType']],[1,3]])
Z([3,'keyword-type garbage-huishou'])
Z([3,'可回收物'])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'garbageType']],[1,4]])
Z([3,'keyword-type garbage-youhai'])
Z([3,'有害垃圾'])
Z(z[2])
Z([3,'keyword-img'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'setkeyword']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'keywordList']],[1,'keyword']],[[6],[[7],[3,'row']],[3,'keyword']]]]]]]]]]]]]]]])
Z([3,'/static/HM-search/back.png'])
Z([3,'adunit-060249bea9401e5c'])
Z([3,'keyword-box'])
Z([[2,'!'],[[2,'!'],[[7],[3,'isShowKeywordList']]]])
Z([[2,'>'],[[6],[[7],[3,'oldKeywordList']],[3,'length']],[1,0]])
Z([3,'keyword-block'])
Z([3,'keyword-list-header'])
Z([3,'历史搜索'])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'oldDelete']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'/static/HM-search/delete.png'])
Z(z[39])
Z([3,'index'])
Z(z[39])
Z([[7],[3,'oldKeywordList']])
Z(z[75])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'doSearch']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'oldKeywordList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([a,[[7],[3,'keyword']]])
Z(z[68])
Z(z[69])
Z([3,'热门搜索'])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'hotToggle']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'/static/HM-search/attention'],[[7],[3,'forbid']]],[1,'.png']])
Z([[2,'=='],[[7],[3,'forbid']],[1,'']])
Z(z[39])
Z(z[75])
Z(z[39])
Z([[7],[3,'hotKeywordList']])
Z(z[75])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'doSearch']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'hotKeywordList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[2,'<'],[[7],[3,'index']],[1,3]])
Z([3,'image-hot'])
Z([3,'../../static/icos/hot.png'])
Z([a,[[2,'+'],[[7],[3,'keyword']],[1,'']]])
Z([3,'hide-hot-tis'])
Z([3,'当前搜热门搜索已隐藏'])
Z(z[64])
Z([3,'__l'])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^hidePopup']],[[4],[[5],[[4],[[5],[1,'hidePopup']]]]]]]]])
Z([3,'bottom'])
Z([[7],[3,'popupShow']])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z([3,'view-popup'])
Z([3,'recording-title'])
Z([3,'按住 说话'])
Z([3,'recording-box'])
Z([3,'canvas'])
Z(z[114])
Z([[7],[3,'animationData']])
Z(z[2])
Z(z[2])
Z([3,'recording-button'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'start']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'end']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[103])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^hideMypopup']],[[4],[[5],[[4],[[5],[1,'hideMypopup']]]]]]]]])
Z([[7],[3,'detailShowObject']])
Z([[7],[3,'detailPopupShow']])
Z([3,'2'])
Z(z[103])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^hidePopup']],[[4],[[5],[[4],[[5],[1,'hideUnipPpup']]]]]]]]])
Z([3,'fixed'])
Z([3,'middle'])
Z([[7],[3,'imagesResultShow']])
Z([3,'3'])
Z(z[109])
Z([3,'imagePopup'])
Z([3,'image-left'])
Z([3,'tempImage'])
Z([[7],[3,'imagePath']])
Z([3,'image-right'])
Z([3,'image-close'])
Z([3,'无法精准识别,请选择最接近的'])
Z(z[75])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[75])
Z(z[2])
Z([3,'list-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'tapKeyword']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'imageResults']],[1,'']],[[7],[3,'index']]],[1,'keyword']]]]]]]]]]]]]]])
Z([3,'item-keyword'])
Z([a,[[2,'+'],[1,''],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'keyword']]]])
Z([3,'item-pi'])
Z([3,'匹配度'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'g0']]],[1,'% \x3e']]])
Z(z[2])
Z([3,'image-button'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'hideUnipPpup']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'primary'])
Z([3,'返回'])
Z(z[103])
Z([3,'4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'adunit-060249bea9401e5c'])
Z([3,'nav'])
Z([3,'nav-left'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'garbageSort']])
Z(z[4])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'nav-left-item']],[[2,'?:'],[[6],[[7],[3,'item']],[3,'active']],[[6],[[7],[3,'item']],[3,'class']],[[6],[[7],[3,'item']],[3,'classborder']]]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'selectClassify']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'garbageSort']],[1,'']],[[7],[3,'index']]],[1,'index']]]]]]]]]]]]]]])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'name']]],[1,'']]])
Z([3,'nav-right'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'height']]],[1,'px']])
Z([3,'view-img'])
Z([[2,'!='],[[7],[3,'index']],[1,null]])
Z([3,'show-img'])
Z([[2,'+'],[[2,'+'],[1,'../../static/showimg/style1-'],[[7],[3,'index']]],[1,'.jpg']])
Z([3,'i'])
Z(z[5])
Z([[7],[3,'currentDetail']])
Z(z[18])
Z(z[8])
Z([[4],[[5],[[5],[1,'nav-right-item']],[[2,'?:'],[[2,'=='],[[2,'%'],[[7],[3,'i']],[1,2]],[1,0]],[1,'style1'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'showDetailGarbage']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'currentDetail']],[1,'']],[[7],[3,'i']]]]]]]]]]]]]]]])
Z([a,[[6],[[7],[3,'item']],[3,'garbageName']]])
Z([3,'__l'])
Z(z[8])
Z([[4],[[5],[[4],[[5],[[5],[1,'^hideMypopup']],[[4],[[5],[[4],[[5],[1,'hideMypopup']]]]]]]]])
Z([[7],[3,'detailShowObject']])
Z([[7],[3,'detailPopupShow']])
Z([3,'1'])
Z(z[26])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'url']])
Z([[7],[3,'webviewStyles']])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/levelPopup.wxml','./components/myPopup.wxml','./components/share.wxml','./components/uni-icon/uni-icon.wxml','./components/uni-notice-bar/uni-notice-bar.wxml','./components/uni-popup/uni-popup.wxml','./components/uni-steps/uni-steps.wxml','./pages/challenge/challenge.wxml','./pages/challenge/challengeResult.wxml','./pages/index/index.wxml','./pages/more/more.wxml','./pages/search/search.wxml','./pages/type/type.wxml','./pages/webview/webview.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
var xC=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1,'hidden',2],[],e,s,gg)
_(oB,xC)
var oD=_mz(z,'view',['class',4,'hidden',1],[],e,s,gg)
var fE=_n('view')
_rz(z,fE,'class',6,e,s,gg)
var cF=_n('view')
_rz(z,cF,'class',7,e,s,gg)
var hG=_oz(z,8,e,s,gg)
_(cF,hG)
_(fE,cF)
var oH=_n('view')
_rz(z,oH,'class',9,e,s,gg)
var cI=_n('view')
var oJ=_v()
_(cI,oJ)
if(_oz(z,10,e,s,gg)){oJ.wxVkey=1
var lK=_mz(z,'image',['mode',-1,'class',11,'src',1],[],e,s,gg)
_(oJ,lK)
}
else{oJ.wxVkey=2
var aL=_v()
_(oJ,aL)
if(_oz(z,13,e,s,gg)){aL.wxVkey=1
var tM=_mz(z,'image',['mode',-1,'class',14,'src',1],[],e,s,gg)
_(aL,tM)
}
else{aL.wxVkey=2
var eN=_v()
_(aL,eN)
if(_oz(z,16,e,s,gg)){eN.wxVkey=1
var bO=_mz(z,'image',['mode',-1,'class',17,'src',1],[],e,s,gg)
_(eN,bO)
}
else{eN.wxVkey=2
var oP=_v()
_(eN,oP)
if(_oz(z,19,e,s,gg)){oP.wxVkey=1
var xQ=_mz(z,'image',['mode',-1,'class',20,'src',1],[],e,s,gg)
_(oP,xQ)
}
else{oP.wxVkey=2
var oR=_v()
_(oP,oR)
if(_oz(z,22,e,s,gg)){oR.wxVkey=1
var fS=_mz(z,'image',['mode',-1,'class',23,'src',1],[],e,s,gg)
_(oR,fS)
}
oR.wxXCkey=1
}
oP.wxXCkey=1
}
eN.wxXCkey=1
}
aL.wxXCkey=1
}
oJ.wxXCkey=1
_(oH,cI)
_(fE,oH)
var cT=_n('view')
_rz(z,cT,'class',25,e,s,gg)
var hU=_n('view')
var oV=_mz(z,'button',['class',26,'openType',1,'size',2,'type',3],[],e,s,gg)
var cW=_oz(z,30,e,s,gg)
_(oV,cW)
_(hU,oV)
_(cT,hU)
var oX=_n('view')
var lY=_mz(z,'button',['bindtap',31,'class',1,'data-event-opts',2,'size',3,'type',4],[],e,s,gg)
var aZ=_oz(z,36,e,s,gg)
_(lY,aZ)
_(oX,lY)
_(cT,oX)
_(fE,cT)
_(oD,fE)
_(oB,oD)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var e2=_n('view')
var b3=_n('view')
var o4=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1,'hidden',2],[],e,s,gg)
_(b3,o4)
var x5=_mz(z,'view',['class',4,'hidden',1],[],e,s,gg)
var o6=_n('view')
_rz(z,o6,'class',6,e,s,gg)
var c8=_n('view')
_rz(z,c8,'class',7,e,s,gg)
var o0=_oz(z,8,e,s,gg)
_(c8,o0)
var h9=_v()
_(c8,h9)
if(_oz(z,9,e,s,gg)){h9.wxVkey=1
var cAB=_n('view')
_rz(z,cAB,'class',10,e,s,gg)
var oBB=_oz(z,11,e,s,gg)
_(cAB,oBB)
_(h9,cAB)
}
else{h9.wxVkey=2
var lCB=_v()
_(h9,lCB)
if(_oz(z,12,e,s,gg)){lCB.wxVkey=1
var aDB=_n('view')
_rz(z,aDB,'class',13,e,s,gg)
var tEB=_oz(z,14,e,s,gg)
_(aDB,tEB)
_(lCB,aDB)
}
else{lCB.wxVkey=2
var eFB=_v()
_(lCB,eFB)
if(_oz(z,15,e,s,gg)){eFB.wxVkey=1
var bGB=_n('view')
_rz(z,bGB,'class',16,e,s,gg)
var oHB=_oz(z,17,e,s,gg)
_(bGB,oHB)
_(eFB,bGB)
}
else{eFB.wxVkey=2
var xIB=_v()
_(eFB,xIB)
if(_oz(z,18,e,s,gg)){xIB.wxVkey=1
var oJB=_n('view')
_rz(z,oJB,'class',19,e,s,gg)
var fKB=_oz(z,20,e,s,gg)
_(oJB,fKB)
_(xIB,oJB)
}
xIB.wxXCkey=1
}
eFB.wxXCkey=1
}
lCB.wxXCkey=1
}
h9.wxXCkey=1
_(o6,c8)
var f7=_v()
_(o6,f7)
if(_oz(z,21,e,s,gg)){f7.wxVkey=1
var cLB=_n('view')
_rz(z,cLB,'class',22,e,s,gg)
var hMB=_oz(z,23,e,s,gg)
_(cLB,hMB)
_(f7,cLB)
}
var oNB=_n('view')
_rz(z,oNB,'class',24,e,s,gg)
var cOB=_mz(z,'button',['class',25,'openType',1,'type',2],[],e,s,gg)
var oPB=_oz(z,28,e,s,gg)
_(cOB,oPB)
_(oNB,cOB)
var lQB=_mz(z,'button',['bindtap',29,'class',1,'data-event-opts',2],[],e,s,gg)
var aRB=_oz(z,32,e,s,gg)
_(lQB,aRB)
_(oNB,lQB)
_(o6,oNB)
var tSB=_n('view')
_rz(z,tSB,'hidden',33,e,s,gg)
var eTB=_mz(z,'button',['plain',-1,'class',34,'openType',1,'type',2],[],e,s,gg)
var bUB=_oz(z,37,e,s,gg)
_(eTB,bUB)
_(tSB,eTB)
_(o6,tSB)
var oVB=_n('view')
_rz(z,oVB,'class',38,e,s,gg)
var xWB=_v()
_(oVB,xWB)
if(_oz(z,39,e,s,gg)){xWB.wxVkey=1
var oXB=_mz(z,'image',['class',40,'src',1],[],e,s,gg)
_(xWB,oXB)
}
else{xWB.wxVkey=2
var fYB=_v()
_(xWB,fYB)
if(_oz(z,42,e,s,gg)){fYB.wxVkey=1
var cZB=_mz(z,'image',['class',43,'src',1],[],e,s,gg)
_(fYB,cZB)
}
else{fYB.wxVkey=2
var h1B=_v()
_(fYB,h1B)
if(_oz(z,45,e,s,gg)){h1B.wxVkey=1
var o2B=_mz(z,'image',['class',46,'src',1],[],e,s,gg)
_(h1B,o2B)
}
else{h1B.wxVkey=2
var c3B=_v()
_(h1B,c3B)
if(_oz(z,48,e,s,gg)){c3B.wxVkey=1
var o4B=_mz(z,'image',['class',49,'src',1],[],e,s,gg)
_(c3B,o4B)
}
c3B.wxXCkey=1
}
h1B.wxXCkey=1
}
fYB.wxXCkey=1
}
var l5B=_n('view')
var a6B=_n('ad')
_rz(z,a6B,'unitId',51,e,s,gg)
_(l5B,a6B)
_(oVB,l5B)
xWB.wxXCkey=1
_(o6,oVB)
f7.wxXCkey=1
_(x5,o6)
_(b3,x5)
_(e2,b3)
_(r,e2)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var e8B=_n('view')
_rz(z,e8B,'class',0,e,s,gg)
var b9B=_n('view')
_rz(z,b9B,'class',1,e,s,gg)
var o0B=_n('view')
_rz(z,o0B,'class',2,e,s,gg)
var xAC=_mz(z,'button',['class',3,'openType',1],[],e,s,gg)
var oBC=_n('view')
_rz(z,oBC,'class',5,e,s,gg)
var fCC=_mz(z,'image',['mode',-1,'class',6,'src',1],[],e,s,gg)
_(oBC,fCC)
var cDC=_n('view')
_rz(z,cDC,'class',8,e,s,gg)
var hEC=_oz(z,9,e,s,gg)
_(cDC,hEC)
_(oBC,cDC)
_(xAC,oBC)
_(o0B,xAC)
var oFC=_mz(z,'button',['class',10,'openType',1],[],e,s,gg)
var cGC=_n('view')
_rz(z,cGC,'class',12,e,s,gg)
var oHC=_mz(z,'image',['mode',-1,'class',13,'src',1],[],e,s,gg)
_(cGC,oHC)
var lIC=_n('view')
_rz(z,lIC,'class',15,e,s,gg)
var aJC=_oz(z,16,e,s,gg)
_(lIC,aJC)
_(cGC,lIC)
_(oFC,cGC)
_(o0B,oFC)
_(b9B,o0B)
_(e8B,b9B)
_(r,e8B)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var eLC=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1,'style',2],[],e,s,gg)
_(r,eLC)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var oNC=_v()
_(r,oNC)
if(_oz(z,0,e,s,gg)){oNC.wxVkey=1
var xOC=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var oPC=_v()
_(xOC,oPC)
if(_oz(z,5,e,s,gg)){oPC.wxVkey=1
var fQC=_n('view')
_rz(z,fQC,'class',6,e,s,gg)
var cRC=_mz(z,'uni-icon',['bind:__l',7,'size',1,'type',2,'vueId',3],[],e,s,gg)
_(fQC,cRC)
_(oPC,fQC)
}
var hSC=_n('view')
_rz(z,hSC,'class',11,e,s,gg)
var oTC=_v()
_(hSC,oTC)
if(_oz(z,12,e,s,gg)){oTC.wxVkey=1
var oVC=_mz(z,'view',['class',13,'style',1],[],e,s,gg)
var lWC=_mz(z,'uni-icon',['bind:__l',15,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(oVC,lWC)
_(oTC,oVC)
}
var aXC=_n('view')
_rz(z,aXC,'class',20,e,s,gg)
var tYC=_mz(z,'view',['class',21,'id',1,'style',2],[],e,s,gg)
var eZC=_oz(z,24,e,s,gg)
_(tYC,eZC)
_(aXC,tYC)
_(hSC,aXC)
var cUC=_v()
_(hSC,cUC)
if(_oz(z,25,e,s,gg)){cUC.wxVkey=1
var b1C=_mz(z,'view',['bindtap',26,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var o2C=_v()
_(b1C,o2C)
if(_oz(z,30,e,s,gg)){o2C.wxVkey=1
var x3C=_n('view')
_rz(z,x3C,'class',31,e,s,gg)
var o4C=_oz(z,32,e,s,gg)
_(x3C,o4C)
_(o2C,x3C)
}
var f5C=_mz(z,'uni-icon',['bind:__l',33,'size',1,'type',2,'vueId',3],[],e,s,gg)
_(b1C,f5C)
o2C.wxXCkey=1
_(cUC,b1C)
}
oTC.wxXCkey=1
oTC.wxXCkey=3
cUC.wxXCkey=1
cUC.wxXCkey=3
_(xOC,hSC)
oPC.wxXCkey=1
oPC.wxXCkey=3
_(oNC,xOC)
}
oNC.wxXCkey=1
oNC.wxXCkey=3
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var h7C=_n('view')
var o8C=_mz(z,'view',['bindtap',0,'catchtouchmove',1,'class',1,'data-event-opts',2,'hidden',3,'style',4],[],e,s,gg)
_(h7C,o8C)
var c9C=_mz(z,'view',['class',6,'hidden',1],[],e,s,gg)
var lAD=_oz(z,8,e,s,gg)
_(c9C,lAD)
var aBD=_n('slot')
_(c9C,aBD)
var o0C=_v()
_(c9C,o0C)
if(_oz(z,9,e,s,gg)){o0C.wxVkey=1
var tCD=_mz(z,'view',['bindtap',10,'class',1,'data-event-opts',2],[],e,s,gg)
_(o0C,tCD)
}
o0C.wxXCkey=1
_(h7C,c9C)
_(r,h7C)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var bED=_n('view')
_rz(z,bED,'class',0,e,s,gg)
var oFD=_n('view')
_rz(z,oFD,'class',1,e,s,gg)
var xGD=_v()
_(oFD,xGD)
var oHD=function(cJD,fID,hKD,gg){
var cMD=_n('view')
_rz(z,cMD,'class',6,cJD,fID,gg)
var lOD=_n('view')
_rz(z,lOD,'class',7,cJD,fID,gg)
var aPD=_v()
_(lOD,aPD)
if(_oz(z,8,cJD,fID,gg)){aPD.wxVkey=1
var tQD=_mz(z,'view',['class',9,'style',1],[],cJD,fID,gg)
_(aPD,tQD)
}
else{aPD.wxVkey=2
var eRD=_mz(z,'view',['class',11,'style',1],[],cJD,fID,gg)
_(aPD,eRD)
}
aPD.wxXCkey=1
_(cMD,lOD)
var oND=_v()
_(cMD,oND)
if(_oz(z,13,cJD,fID,gg)){oND.wxVkey=1
var bSD=_mz(z,'view',['class',14,'style',1],[],cJD,fID,gg)
_(oND,bSD)
}
var oTD=_mz(z,'view',['class',16,'style',1],[],cJD,fID,gg)
var oVD=_n('view')
_rz(z,oVD,'class',18,cJD,fID,gg)
var fWD=_oz(z,19,cJD,fID,gg)
_(oVD,fWD)
_(oTD,oVD)
var xUD=_v()
_(oTD,xUD)
if(_oz(z,20,cJD,fID,gg)){xUD.wxVkey=1
var cXD=_n('view')
_rz(z,cXD,'class',21,cJD,fID,gg)
var hYD=_oz(z,22,cJD,fID,gg)
_(cXD,hYD)
_(xUD,cXD)
}
xUD.wxXCkey=1
_(cMD,oTD)
oND.wxXCkey=1
_(hKD,cMD)
return hKD
}
xGD.wxXCkey=2
_2z(z,4,oHD,e,s,gg,xGD,'item','index','index')
_(bED,oFD)
_(r,bED)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var c1D=_v()
_(r,c1D)
if(_oz(z,0,e,s,gg)){c1D.wxVkey=1
var o2D=_n('view')
_rz(z,o2D,'class',1,e,s,gg)
var l3D=_mz(z,'view',['animation',2,'class',1],[],e,s,gg)
var a4D=_n('view')
_rz(z,a4D,'class',4,e,s,gg)
var t5D=_n('view')
_rz(z,t5D,'class',5,e,s,gg)
var e6D=_n('view')
_rz(z,e6D,'class',6,e,s,gg)
var b7D=_oz(z,7,e,s,gg)
_(e6D,b7D)
_(t5D,e6D)
var o8D=_n('view')
_rz(z,o8D,'class',8,e,s,gg)
var x9D=_oz(z,9,e,s,gg)
_(o8D,x9D)
_(t5D,o8D)
_(a4D,t5D)
var o0D=_n('view')
_rz(z,o0D,'class',10,e,s,gg)
var fAE=_n('view')
var cBE=_oz(z,11,e,s,gg)
_(fAE,cBE)
_(o0D,fAE)
_(a4D,o0D)
var hCE=_n('view')
_rz(z,hCE,'class',12,e,s,gg)
var oDE=_n('view')
_rz(z,oDE,'class',13,e,s,gg)
var cEE=_oz(z,14,e,s,gg)
_(oDE,cEE)
_(hCE,oDE)
_(a4D,hCE)
_(l3D,a4D)
var oFE=_n('view')
_rz(z,oFE,'class',15,e,s,gg)
var lGE=_n('view')
_rz(z,lGE,'class',16,e,s,gg)
var aHE=_mz(z,'view',['bindtap',17,'data-event-opts',1],[],e,s,gg)
var tIE=_mz(z,'image',['class',19,'src',1],[],e,s,gg)
_(aHE,tIE)
_(lGE,aHE)
var eJE=_mz(z,'view',['bindtap',21,'data-event-opts',1],[],e,s,gg)
var bKE=_mz(z,'image',['class',23,'src',1],[],e,s,gg)
_(eJE,bKE)
_(lGE,eJE)
_(oFE,lGE)
var oLE=_n('view')
_rz(z,oLE,'class',25,e,s,gg)
var xME=_mz(z,'view',['bindtap',26,'data-event-opts',1],[],e,s,gg)
var oNE=_mz(z,'image',['class',28,'src',1],[],e,s,gg)
_(xME,oNE)
_(oLE,xME)
var fOE=_mz(z,'view',['bindtap',30,'data-event-opts',1],[],e,s,gg)
var cPE=_mz(z,'image',['class',32,'src',1],[],e,s,gg)
_(fOE,cPE)
_(oLE,fOE)
_(oFE,oLE)
_(l3D,oFE)
var hQE=_n('view')
_rz(z,hQE,'class',34,e,s,gg)
var oRE=_n('view')
var cSE=_oz(z,35,e,s,gg)
_(oRE,cSE)
_(hQE,oRE)
var oTE=_n('view')
_rz(z,oTE,'class',36,e,s,gg)
var lUE=_oz(z,37,e,s,gg)
_(oTE,lUE)
_(hQE,oTE)
_(l3D,hQE)
var aVE=_n('view')
var tWE=_mz(z,'ad',['adTheme',38,'adType',1,'unitId',2],[],e,s,gg)
_(aVE,tWE)
_(l3D,aVE)
_(o2D,l3D)
_(c1D,o2D)
}
c1D.wxXCkey=1
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var bYE=_n('view')
_rz(z,bYE,'class',0,e,s,gg)
var oZE=_n('view')
_rz(z,oZE,'style',1,e,s,gg)
var x1E=_n('view')
var o2E=_mz(z,'uni-steps',['active',2,'bind:__l',1,'mydata',2,'vueId',3],[],e,s,gg)
_(x1E,o2E)
_(oZE,x1E)
var f3E=_n('view')
_rz(z,f3E,'class',6,e,s,gg)
var c4E=_n('view')
_rz(z,c4E,'class',7,e,s,gg)
var h5E=_v()
_(c4E,h5E)
if(_oz(z,8,e,s,gg)){h5E.wxVkey=1
var o6E=_n('view')
_rz(z,o6E,'class',9,e,s,gg)
var c7E=_oz(z,10,e,s,gg)
_(o6E,c7E)
_(h5E,o6E)
}
else{h5E.wxVkey=2
var o8E=_v()
_(h5E,o8E)
if(_oz(z,11,e,s,gg)){o8E.wxVkey=1
var l9E=_n('view')
_rz(z,l9E,'class',12,e,s,gg)
var a0E=_oz(z,13,e,s,gg)
_(l9E,a0E)
_(o8E,l9E)
}
else{o8E.wxVkey=2
var tAF=_v()
_(o8E,tAF)
if(_oz(z,14,e,s,gg)){tAF.wxVkey=1
var eBF=_n('view')
_rz(z,eBF,'class',15,e,s,gg)
var bCF=_oz(z,16,e,s,gg)
_(eBF,bCF)
_(tAF,eBF)
}
else{tAF.wxVkey=2
var oDF=_v()
_(tAF,oDF)
if(_oz(z,17,e,s,gg)){oDF.wxVkey=1
var xEF=_n('view')
_rz(z,xEF,'class',18,e,s,gg)
var oFF=_oz(z,19,e,s,gg)
_(xEF,oFF)
_(oDF,xEF)
}
else{oDF.wxVkey=2
var fGF=_v()
_(oDF,fGF)
if(_oz(z,20,e,s,gg)){fGF.wxVkey=1
var cHF=_n('view')
_rz(z,cHF,'class',21,e,s,gg)
var hIF=_oz(z,22,e,s,gg)
_(cHF,hIF)
_(fGF,cHF)
}
fGF.wxXCkey=1
}
oDF.wxXCkey=1
}
tAF.wxXCkey=1
}
o8E.wxXCkey=1
}
h5E.wxXCkey=1
_(f3E,c4E)
var oJF=_n('view')
_rz(z,oJF,'class',23,e,s,gg)
var cKF=_oz(z,24,e,s,gg)
_(oJF,cKF)
_(f3E,oJF)
_(oZE,f3E)
var oLF=_n('view')
_rz(z,oLF,'class',25,e,s,gg)
var lMF=_v()
_(oLF,lMF)
if(_oz(z,26,e,s,gg)){lMF.wxVkey=1
var aNF=_n('view')
_rz(z,aNF,'class',27,e,s,gg)
var tOF=_oz(z,28,e,s,gg)
_(aNF,tOF)
_(lMF,aNF)
}
else{lMF.wxVkey=2
var ePF=_v()
_(lMF,ePF)
if(_oz(z,29,e,s,gg)){ePF.wxVkey=1
var bQF=_n('view')
_rz(z,bQF,'class',30,e,s,gg)
var oRF=_oz(z,31,e,s,gg)
_(bQF,oRF)
_(ePF,bQF)
}
else{ePF.wxVkey=2
var xSF=_v()
_(ePF,xSF)
if(_oz(z,32,e,s,gg)){xSF.wxVkey=1
var oTF=_n('view')
_rz(z,oTF,'class',33,e,s,gg)
var fUF=_oz(z,34,e,s,gg)
_(oTF,fUF)
_(xSF,oTF)
}
else{xSF.wxVkey=2
var cVF=_v()
_(xSF,cVF)
if(_oz(z,35,e,s,gg)){cVF.wxVkey=1
var hWF=_n('view')
_rz(z,hWF,'class',36,e,s,gg)
var oXF=_oz(z,37,e,s,gg)
_(hWF,oXF)
_(cVF,hWF)
}
else{cVF.wxVkey=2
var cYF=_v()
_(cVF,cYF)
if(_oz(z,38,e,s,gg)){cYF.wxVkey=1
var oZF=_n('view')
_rz(z,oZF,'class',39,e,s,gg)
var l1F=_oz(z,40,e,s,gg)
_(oZF,l1F)
_(cYF,oZF)
}
cYF.wxXCkey=1
}
cVF.wxXCkey=1
}
xSF.wxXCkey=1
}
ePF.wxXCkey=1
}
lMF.wxXCkey=1
_(oZE,oLF)
var a2F=_n('view')
var t3F=_n('view')
_rz(z,t3F,'class',41,e,s,gg)
var e4F=_v()
_(t3F,e4F)
var b5F=function(x7F,o6F,o8F,gg){
var c0F=_n('view')
_rz(z,c0F,'class',46,x7F,o6F,gg)
var hAG=_n('view')
_rz(z,hAG,'class',47,x7F,o6F,gg)
var oBG=_oz(z,48,x7F,o6F,gg)
_(hAG,oBG)
_(c0F,hAG)
var cCG=_n('view')
_rz(z,cCG,'class',49,x7F,o6F,gg)
var oDG=_v()
_(cCG,oDG)
if(_oz(z,50,x7F,o6F,gg)){oDG.wxVkey=1
var lEG=_n('view')
var aFG=_oz(z,51,x7F,o6F,gg)
_(lEG,aFG)
_(oDG,lEG)
}
else{oDG.wxVkey=2
var tGG=_v()
_(oDG,tGG)
if(_oz(z,52,x7F,o6F,gg)){tGG.wxVkey=1
var eHG=_n('view')
var bIG=_oz(z,53,x7F,o6F,gg)
_(eHG,bIG)
_(tGG,eHG)
}
else{tGG.wxVkey=2
var oJG=_v()
_(tGG,oJG)
if(_oz(z,54,x7F,o6F,gg)){oJG.wxVkey=1
var xKG=_n('view')
var oLG=_oz(z,55,x7F,o6F,gg)
_(xKG,oLG)
_(oJG,xKG)
}
else{oJG.wxVkey=2
var fMG=_v()
_(oJG,fMG)
if(_oz(z,56,x7F,o6F,gg)){fMG.wxVkey=1
var cNG=_n('view')
var hOG=_oz(z,57,x7F,o6F,gg)
_(cNG,hOG)
_(fMG,cNG)
}
fMG.wxXCkey=1
}
oJG.wxXCkey=1
}
tGG.wxXCkey=1
}
oDG.wxXCkey=1
_(c0F,cCG)
var oPG=_n('view')
_rz(z,oPG,'class',58,x7F,o6F,gg)
var cQG=_v()
_(oPG,cQG)
if(_oz(z,59,x7F,o6F,gg)){cQG.wxVkey=1
var oRG=_n('view')
var lSG=_mz(z,'image',['mode',-1,'class',60,'src',1],[],x7F,o6F,gg)
_(oRG,lSG)
_(cQG,oRG)
}
else{cQG.wxVkey=2
var aTG=_n('view')
var tUG=_v()
_(aTG,tUG)
if(_oz(z,62,x7F,o6F,gg)){tUG.wxVkey=1
var eVG=_n('view')
_rz(z,eVG,'class',63,x7F,o6F,gg)
var bWG=_oz(z,64,x7F,o6F,gg)
_(eVG,bWG)
_(tUG,eVG)
}
else{tUG.wxVkey=2
var oXG=_v()
_(tUG,oXG)
if(_oz(z,65,x7F,o6F,gg)){oXG.wxVkey=1
var xYG=_n('view')
_rz(z,xYG,'class',66,x7F,o6F,gg)
var oZG=_oz(z,67,x7F,o6F,gg)
_(xYG,oZG)
_(oXG,xYG)
}
else{oXG.wxVkey=2
var f1G=_v()
_(oXG,f1G)
if(_oz(z,68,x7F,o6F,gg)){f1G.wxVkey=1
var c2G=_n('view')
_rz(z,c2G,'class',69,x7F,o6F,gg)
var h3G=_oz(z,70,x7F,o6F,gg)
_(c2G,h3G)
_(f1G,c2G)
}
else{f1G.wxVkey=2
var o4G=_v()
_(f1G,o4G)
if(_oz(z,71,x7F,o6F,gg)){o4G.wxVkey=1
var c5G=_n('view')
_rz(z,c5G,'class',72,x7F,o6F,gg)
var o6G=_oz(z,73,x7F,o6F,gg)
_(c5G,o6G)
_(o4G,c5G)
}
o4G.wxXCkey=1
}
f1G.wxXCkey=1
}
oXG.wxXCkey=1
}
tUG.wxXCkey=1
_(cQG,aTG)
}
cQG.wxXCkey=1
_(c0F,oPG)
_(o8F,c0F)
return o8F
}
e4F.wxXCkey=2
_2z(z,44,b5F,e,s,gg,e4F,'item','index','index')
_(a2F,t3F)
_(oZE,a2F)
var l7G=_n('view')
_rz(z,l7G,'class',74,e,s,gg)
var a8G=_n('view')
var t9G=_mz(z,'button',['bindtap',75,'class',1,'data-event-opts',2,'type',3],[],e,s,gg)
var e0G=_oz(z,79,e,s,gg)
_(t9G,e0G)
_(a8G,t9G)
_(l7G,a8G)
var bAH=_n('view')
var oBH=_mz(z,'button',['class',80,'openType',1,'type',2],[],e,s,gg)
var xCH=_oz(z,83,e,s,gg)
_(oBH,xCH)
_(bAH,oBH)
_(l7G,bAH)
_(oZE,l7G)
_(bYE,oZE)
var oDH=_n('view')
var fEH=_n('ad')
_rz(z,fEH,'unitId',84,e,s,gg)
_(oDH,fEH)
_(bYE,oDH)
var cFH=_mz(z,'level-popup',['bind:__l',85,'bind:hidePopup',1,'data-event-opts',2,'level',3,'show',4,'vueId',5],[],e,s,gg)
_(bYE,cFH)
var hGH=_mz(z,'share',['bind:__l',91,'vueId',1],[],e,s,gg)
_(bYE,hGH)
_(r,bYE)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var cIH=_n('view')
var oJH=_v()
_(cIH,oJH)
if(_oz(z,0,e,s,gg)){oJH.wxVkey=1
var lKH=_n('view')
var aLH=_mz(z,'swiper',['autoplay',1,'circular',1,'indicatorDots',2],[],e,s,gg)
var tMH=_v()
_(aLH,tMH)
var eNH=function(oPH,bOH,xQH,gg){
var fSH=_n('swiper-item')
_rz(z,fSH,'class',8,oPH,bOH,gg)
var cTH=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2,'style',3],[],oPH,bOH,gg)
var hUH=_mz(z,'image',['class',13,'src',1],[],oPH,bOH,gg)
_(cTH,hUH)
_(fSH,cTH)
_(xQH,fSH)
return xQH
}
tMH.wxXCkey=2
_2z(z,6,eNH,e,s,gg,tMH,'item','index','index')
_(lKH,aLH)
_(oJH,lKH)
}
var oVH=_n('view')
var cWH=_mz(z,'swiper',['autoplay',15,'circular',1,'indicatorDots',2],[],e,s,gg)
var oXH=_n('swiper-item')
_rz(z,oXH,'class',18,e,s,gg)
var lYH=_mz(z,'view',['class',19,'style',1],[],e,s,gg)
var aZH=_mz(z,'image',['class',21,'src',1],[],e,s,gg)
_(lYH,aZH)
_(oXH,lYH)
_(cWH,oXH)
var t1H=_n('swiper-item')
_rz(z,t1H,'class',23,e,s,gg)
var e2H=_n('view')
var b3H=_mz(z,'image',['class',24,'src',1],[],e,s,gg)
_(e2H,b3H)
_(t1H,e2H)
_(cWH,t1H)
_(oVH,cWH)
_(cIH,oVH)
var o4H=_n('view')
_rz(z,o4H,'class',26,e,s,gg)
var x5H=_n('view')
_rz(z,x5H,'class',27,e,s,gg)
var o6H=_oz(z,28,e,s,gg)
_(x5H,o6H)
_(o4H,x5H)
var f7H=_mz(z,'form',['bindreset',29,'bindsubmit',1,'class',2,'data-event-opts',3],[],e,s,gg)
var c8H=_n('view')
_rz(z,c8H,'class',33,e,s,gg)
var h9H=_mz(z,'view',['bindtap',34,'class',1,'data-event-opts',2],[],e,s,gg)
var o0H=_mz(z,'image',['class',37,'src',1],[],e,s,gg)
_(h9H,o0H)
_(c8H,h9H)
var cAI=_mz(z,'view',['bindtap',39,'class',1,'data-event-opts',2],[],e,s,gg)
var oBI=_mz(z,'image',['class',42,'src',1],[],e,s,gg)
_(cAI,oBI)
_(c8H,cAI)
var lCI=_n('view')
_rz(z,lCI,'class',44,e,s,gg)
var aDI=_mz(z,'input',['bindconfirm',45,'bindinput',1,'bindsearch',2,'class',3,'confirmType',4,'data-event-opts',5,'id',6,'name',7,'placeholder',8,'value',9],[],e,s,gg)
_(lCI,aDI)
_(c8H,lCI)
var tEI=_mz(z,'view',['bindtap',55,'class',1,'data-event-opts',2],[],e,s,gg)
var eFI=_oz(z,58,e,s,gg)
_(tEI,eFI)
_(c8H,tEI)
_(f7H,c8H)
_(o4H,f7H)
_(cIH,o4H)
var bGI=_n('view')
_rz(z,bGI,'hidden',59,e,s,gg)
var oHI=_n('view')
var xII=_mz(z,'uni-notice-bar',['backgroundColor',60,'bind:__l',1,'color',2,'showIcon',3,'text',4,'vueId',5],[],e,s,gg)
_(oHI,xII)
_(bGI,oHI)
_(cIH,bGI)
var oJI=_n('view')
var fKI=_n('view')
_rz(z,fKI,'class',66,e,s,gg)
var cLI=_oz(z,67,e,s,gg)
_(fKI,cLI)
_(oJI,fKI)
_(cIH,oJI)
var hMI=_n('view')
_rz(z,hMI,'class',68,e,s,gg)
var oNI=_n('view')
_rz(z,oNI,'class',69,e,s,gg)
var cOI=_mz(z,'view',['bindtap',70,'data-event-opts',1],[],e,s,gg)
var oPI=_mz(z,'image',['class',72,'src',1],[],e,s,gg)
_(cOI,oPI)
_(oNI,cOI)
var lQI=_mz(z,'view',['bindtap',74,'data-event-opts',1],[],e,s,gg)
var aRI=_mz(z,'image',['class',76,'src',1],[],e,s,gg)
_(lQI,aRI)
_(oNI,lQI)
_(hMI,oNI)
var tSI=_n('view')
_rz(z,tSI,'class',78,e,s,gg)
var eTI=_mz(z,'view',['bindtap',79,'data-event-opts',1],[],e,s,gg)
var bUI=_mz(z,'image',['class',81,'src',1],[],e,s,gg)
_(eTI,bUI)
_(tSI,eTI)
var oVI=_mz(z,'view',['bindtap',83,'data-event-opts',1],[],e,s,gg)
var xWI=_mz(z,'image',['class',85,'src',1],[],e,s,gg)
_(oVI,xWI)
_(tSI,oVI)
_(hMI,tSI)
_(cIH,hMI)
var oXI=_n('view')
var fYI=_mz(z,'uni-popup',['bind:__l',87,'bind:hidePopup',1,'data-event-opts',2,'position',3,'show',4,'vueId',5,'vueSlots',6],[],e,s,gg)
var cZI=_n('view')
_rz(z,cZI,'class',94,e,s,gg)
var h1I=_n('view')
_rz(z,h1I,'class',95,e,s,gg)
var o2I=_oz(z,96,e,s,gg)
_(h1I,o2I)
_(cZI,h1I)
var c3I=_n('view')
_rz(z,c3I,'class',97,e,s,gg)
var o4I=_mz(z,'canvas',['canvasId',98,'id',1],[],e,s,gg)
var l5I=_mz(z,'view',['bindtouchend',100,'bindtouchstart',1,'class',2,'data-event-opts',3],[],e,s,gg)
_(o4I,l5I)
_(c3I,o4I)
_(cZI,c3I)
_(fYI,cZI)
_(oXI,fYI)
_(cIH,oXI)
var a6I=_mz(z,'share',['bind:__l',104,'vueId',1],[],e,s,gg)
_(cIH,a6I)
oJH.wxXCkey=1
_(r,cIH)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var e8I=_n('view')
var b9I=_mz(z,'view',['animation',0,'style',1],[],e,s,gg)
_(e8I,b9I)
var o0I=_mz(z,'level-popup',['bind:__l',2,'bind:hidePopup',1,'data-event-opts',2,'level',3,'show',4,'vueId',5],[],e,s,gg)
_(e8I,o0I)
_(r,e8I)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var oBJ=_n('view')
_rz(z,oBJ,'class',0,e,s,gg)
var fCJ=_n('view')
_rz(z,fCJ,'class',1,e,s,gg)
var cDJ=_mz(z,'form',['bindreset',2,'bindsubmit',1,'class',2,'data-event-opts',3],[],e,s,gg)
var hEJ=_n('view')
_rz(z,hEJ,'class',6,e,s,gg)
var oFJ=_mz(z,'view',['bindtap',7,'class',1,'data-event-opts',2],[],e,s,gg)
var cGJ=_mz(z,'image',['class',10,'src',1],[],e,s,gg)
_(oFJ,cGJ)
_(hEJ,oFJ)
var oHJ=_mz(z,'view',['bindtap',12,'class',1,'data-event-opts',2],[],e,s,gg)
var lIJ=_mz(z,'image',['class',15,'src',1],[],e,s,gg)
_(oHJ,lIJ)
_(hEJ,oHJ)
var aJJ=_n('view')
_rz(z,aJJ,'class',17,e,s,gg)
var tKJ=_mz(z,'input',['bindconfirm',18,'bindinput',1,'bindsearch',2,'class',3,'confirmType',4,'data-event-opts',5,'name',6,'placeholder',7,'value',8],[],e,s,gg)
_(aJJ,tKJ)
_(hEJ,aJJ)
var eLJ=_mz(z,'view',['bindtap',27,'class',1,'data-event-opts',2],[],e,s,gg)
var bMJ=_oz(z,30,e,s,gg)
_(eLJ,bMJ)
_(hEJ,eLJ)
_(cDJ,hEJ)
_(fCJ,cDJ)
_(oBJ,fCJ)
var oNJ=_mz(z,'view',['bindtouchstart',31,'class',1,'data-event-opts',2],[],e,s,gg)
var xOJ=_mz(z,'scroll-view',['scrollY',-1,'class',34,'hidden',1],[],e,s,gg)
var oPJ=_v()
_(xOJ,oPJ)
var fQJ=function(hSJ,cRJ,oTJ,gg){
var oVJ=_mz(z,'view',['bindtap',40,'class',1,'data-event-opts',2,'hoverClass',3],[],hSJ,cRJ,gg)
var lWJ=_mz(z,'view',['bindtap',44,'class',1,'data-event-opts',2],[],hSJ,cRJ,gg)
var aXJ=_n('rich-text')
_rz(z,aXJ,'nodes',47,hSJ,cRJ,gg)
_(lWJ,aXJ)
_(oVJ,lWJ)
var tYJ=_n('view')
var eZJ=_v()
_(tYJ,eZJ)
if(_oz(z,48,hSJ,cRJ,gg)){eZJ.wxVkey=1
var b1J=_n('view')
_rz(z,b1J,'class',49,hSJ,cRJ,gg)
var o2J=_oz(z,50,hSJ,cRJ,gg)
_(b1J,o2J)
_(eZJ,b1J)
}
else{eZJ.wxVkey=2
var x3J=_v()
_(eZJ,x3J)
if(_oz(z,51,hSJ,cRJ,gg)){x3J.wxVkey=1
var o4J=_n('view')
_rz(z,o4J,'class',52,hSJ,cRJ,gg)
var f5J=_oz(z,53,hSJ,cRJ,gg)
_(o4J,f5J)
_(x3J,o4J)
}
else{x3J.wxVkey=2
var c6J=_v()
_(x3J,c6J)
if(_oz(z,54,hSJ,cRJ,gg)){c6J.wxVkey=1
var h7J=_n('view')
_rz(z,h7J,'class',55,hSJ,cRJ,gg)
var o8J=_oz(z,56,hSJ,cRJ,gg)
_(h7J,o8J)
_(c6J,h7J)
}
else{c6J.wxVkey=2
var c9J=_v()
_(c6J,c9J)
if(_oz(z,57,hSJ,cRJ,gg)){c9J.wxVkey=1
var o0J=_n('view')
_rz(z,o0J,'class',58,hSJ,cRJ,gg)
var lAK=_oz(z,59,hSJ,cRJ,gg)
_(o0J,lAK)
_(c9J,o0J)
}
c9J.wxXCkey=1
}
c6J.wxXCkey=1
}
x3J.wxXCkey=1
}
eZJ.wxXCkey=1
_(oVJ,tYJ)
var aBK=_mz(z,'view',['bindtap',60,'class',1,'data-event-opts',2],[],hSJ,cRJ,gg)
var tCK=_n('image')
_rz(z,tCK,'src',63,hSJ,cRJ,gg)
_(aBK,tCK)
_(oVJ,aBK)
_(oTJ,oVJ)
return oTJ
}
oPJ.wxXCkey=2
_2z(z,38,fQJ,e,s,gg,oPJ,'row','__i0__','keyword')
var eDK=_n('view')
var bEK=_n('ad')
_rz(z,bEK,'unitId',64,e,s,gg)
_(eDK,bEK)
_(xOJ,eDK)
_(oNJ,xOJ)
var oFK=_mz(z,'scroll-view',['scrollY',-1,'class',65,'hidden',1],[],e,s,gg)
var xGK=_v()
_(oFK,xGK)
if(_oz(z,67,e,s,gg)){xGK.wxVkey=1
var oHK=_n('view')
_rz(z,oHK,'class',68,e,s,gg)
var fIK=_n('view')
_rz(z,fIK,'class',69,e,s,gg)
var cJK=_n('view')
var hKK=_oz(z,70,e,s,gg)
_(cJK,hKK)
_(fIK,cJK)
var oLK=_n('view')
var cMK=_mz(z,'image',['bindtap',71,'data-event-opts',1,'src',2],[],e,s,gg)
_(oLK,cMK)
_(fIK,oLK)
_(oHK,fIK)
var oNK=_n('view')
_rz(z,oNK,'class',74,e,s,gg)
var lOK=_v()
_(oNK,lOK)
var aPK=function(eRK,tQK,bSK,gg){
var xUK=_mz(z,'view',['bindtap',79,'data-event-opts',1],[],eRK,tQK,gg)
var oVK=_oz(z,81,eRK,tQK,gg)
_(xUK,oVK)
_(bSK,xUK)
return bSK
}
lOK.wxXCkey=2
_2z(z,77,aPK,e,s,gg,lOK,'keyword','index','index')
_(oHK,oNK)
_(xGK,oHK)
}
var fWK=_n('view')
_rz(z,fWK,'class',82,e,s,gg)
var hYK=_n('view')
_rz(z,hYK,'class',83,e,s,gg)
var oZK=_n('view')
var c1K=_oz(z,84,e,s,gg)
_(oZK,c1K)
_(hYK,oZK)
var o2K=_n('view')
var l3K=_mz(z,'image',['bindtap',85,'data-event-opts',1,'src',2],[],e,s,gg)
_(o2K,l3K)
_(hYK,o2K)
_(fWK,hYK)
var cXK=_v()
_(fWK,cXK)
if(_oz(z,88,e,s,gg)){cXK.wxVkey=1
var a4K=_n('view')
_rz(z,a4K,'class',89,e,s,gg)
var t5K=_v()
_(a4K,t5K)
var e6K=function(o8K,b7K,x9K,gg){
var fAL=_mz(z,'view',['bindtap',94,'data-event-opts',1],[],o8K,b7K,gg)
var cBL=_v()
_(fAL,cBL)
if(_oz(z,96,o8K,b7K,gg)){cBL.wxVkey=1
var hCL=_n('view')
var oDL=_mz(z,'image',['mode',-1,'class',97,'src',1],[],o8K,b7K,gg)
_(hCL,oDL)
_(cBL,hCL)
}
var cEL=_n('view')
var oFL=_oz(z,99,o8K,b7K,gg)
_(cEL,oFL)
_(fAL,cEL)
cBL.wxXCkey=1
_(x9K,fAL)
return x9K
}
t5K.wxXCkey=2
_2z(z,92,e6K,e,s,gg,t5K,'keyword','index','index')
_(cXK,a4K)
}
else{cXK.wxVkey=2
var lGL=_n('view')
_rz(z,lGL,'class',100,e,s,gg)
var aHL=_n('view')
var tIL=_oz(z,101,e,s,gg)
_(aHL,tIL)
_(lGL,aHL)
_(cXK,lGL)
}
cXK.wxXCkey=1
_(oFK,fWK)
var eJL=_n('view')
var bKL=_n('ad')
_rz(z,bKL,'unitId',102,e,s,gg)
_(eJL,bKL)
_(oFK,eJL)
xGK.wxXCkey=1
_(oNJ,oFK)
_(oBJ,oNJ)
var oLL=_n('view')
var xML=_mz(z,'uni-popup',['bind:__l',103,'bind:hidePopup',1,'data-event-opts',2,'position',3,'show',4,'vueId',5,'vueSlots',6],[],e,s,gg)
var oNL=_n('view')
_rz(z,oNL,'class',110,e,s,gg)
var fOL=_n('view')
_rz(z,fOL,'class',111,e,s,gg)
var cPL=_oz(z,112,e,s,gg)
_(fOL,cPL)
_(oNL,fOL)
var hQL=_n('view')
_rz(z,hQL,'class',113,e,s,gg)
var oRL=_mz(z,'canvas',['canvasId',114,'id',1],[],e,s,gg)
var cSL=_mz(z,'view',['animation',116,'bindtouchend',1,'bindtouchstart',2,'class',3,'data-event-opts',4],[],e,s,gg)
_(oRL,cSL)
_(hQL,oRL)
_(oNL,hQL)
_(xML,oNL)
_(oLL,xML)
_(oBJ,oLL)
var oTL=_n('view')
var lUL=_mz(z,'my-popup',['bind:__l',121,'bind:hideMypopup',1,'data-event-opts',2,'detail',3,'show',4,'vueId',5],[],e,s,gg)
_(oTL,lUL)
_(oBJ,oTL)
var aVL=_mz(z,'uni-popup',['bind:__l',127,'bind:hidePopup',1,'data-event-opts',2,'mode',3,'position',4,'show',5,'vueId',6,'vueSlots',7],[],e,s,gg)
var tWL=_n('view')
_rz(z,tWL,'class',135,e,s,gg)
var eXL=_n('view')
_rz(z,eXL,'class',136,e,s,gg)
var bYL=_mz(z,'image',['class',137,'src',1],[],e,s,gg)
_(eXL,bYL)
_(tWL,eXL)
var oZL=_n('view')
_rz(z,oZL,'class',139,e,s,gg)
var x1L=_n('view')
_rz(z,x1L,'class',140,e,s,gg)
var o2L=_n('view')
var f3L=_oz(z,141,e,s,gg)
_(o2L,f3L)
_(x1L,o2L)
_(oZL,x1L)
var c4L=_n('view')
var h5L=_v()
_(c4L,h5L)
var o6L=function(o8L,c7L,l9L,gg){
var tAM=_mz(z,'view',['bindtap',146,'class',1,'data-event-opts',2],[],o8L,c7L,gg)
var eBM=_n('view')
_rz(z,eBM,'class',149,o8L,c7L,gg)
var bCM=_oz(z,150,o8L,c7L,gg)
_(eBM,bCM)
_(tAM,eBM)
var oDM=_n('view')
_rz(z,oDM,'class',151,o8L,c7L,gg)
var xEM=_n('view')
var oFM=_oz(z,152,o8L,c7L,gg)
_(xEM,oFM)
_(oDM,xEM)
var fGM=_n('view')
var cHM=_oz(z,153,o8L,c7L,gg)
_(fGM,cHM)
_(oDM,fGM)
_(tAM,oDM)
_(l9L,tAM)
return l9L
}
h5L.wxXCkey=2
_2z(z,144,o6L,e,s,gg,h5L,'item','index','index')
_(oZL,c4L)
_(tWL,oZL)
_(aVL,tWL)
var hIM=_n('view')
var oJM=_mz(z,'button',['bindtap',154,'class',1,'data-event-opts',2,'type',3],[],e,s,gg)
var cKM=_oz(z,158,e,s,gg)
_(oJM,cKM)
_(hIM,oJM)
_(aVL,hIM)
_(oBJ,aVL)
var oLM=_mz(z,'share',['bind:__l',159,'vueId',1],[],e,s,gg)
_(oBJ,oLM)
_(r,oBJ)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var aNM=_n('view')
_rz(z,aNM,'class',0,e,s,gg)
var tOM=_n('view')
var ePM=_n('ad')
_rz(z,ePM,'unitId',1,e,s,gg)
_(tOM,ePM)
_(aNM,tOM)
var bQM=_n('view')
_rz(z,bQM,'class',2,e,s,gg)
var oRM=_n('view')
_rz(z,oRM,'class',3,e,s,gg)
var xSM=_n('scroll-view')
xSM.attr['scrollY']=true
var oTM=_v()
_(xSM,oTM)
var fUM=function(hWM,cVM,oXM,gg){
var oZM=_mz(z,'view',['bindtap',8,'class',1,'data-event-opts',2],[],hWM,cVM,gg)
var l1M=_oz(z,11,hWM,cVM,gg)
_(oZM,l1M)
_(oXM,oZM)
return oXM
}
oTM.wxXCkey=2
_2z(z,6,fUM,e,s,gg,oTM,'item','index','index')
_(oRM,xSM)
_(bQM,oRM)
var a2M=_n('view')
_rz(z,a2M,'class',12,e,s,gg)
var t3M=_mz(z,'scroll-view',['scrollWithAnimation',-1,'scrollY',-1,'style',13],[],e,s,gg)
var e4M=_n('view')
_rz(z,e4M,'class',14,e,s,gg)
var b5M=_n('view')
var o6M=_v()
_(b5M,o6M)
if(_oz(z,15,e,s,gg)){o6M.wxVkey=1
var x7M=_mz(z,'image',['class',16,'src',1],[],e,s,gg)
_(o6M,x7M)
}
o6M.wxXCkey=1
_(e4M,b5M)
_(t3M,e4M)
var o8M=_v()
_(t3M,o8M)
var f9M=function(hAN,c0M,oBN,gg){
var oDN=_mz(z,'view',['bindtap',22,'class',1,'data-event-opts',2],[],hAN,c0M,gg)
var lEN=_n('view')
var aFN=_oz(z,25,hAN,c0M,gg)
_(lEN,aFN)
_(oDN,lEN)
_(oBN,oDN)
return oBN
}
o8M.wxXCkey=2
_2z(z,20,f9M,e,s,gg,o8M,'item','i','i')
_(a2M,t3M)
_(bQM,a2M)
_(aNM,bQM)
var tGN=_n('view')
var eHN=_mz(z,'my-popup',['bind:__l',26,'bind:hideMypopup',1,'data-event-opts',2,'detail',3,'show',4,'vueId',5],[],e,s,gg)
_(tGN,eHN)
_(aNM,tGN)
var bIN=_mz(z,'share',['bind:__l',32,'vueId',1],[],e,s,gg)
_(aNM,bIN)
_(r,aNM)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var xKN=_n('view')
var oLN=_mz(z,'web-view',['src',0,'webviewStyles',1],[],e,s,gg)
_(xKN,oLN)
_(r,xKN)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],[],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/levelPopup.wxss']=setCssToHead([".",[1],"outter { position: fixed; z-index: 998; top: 0; right: 0; bottom: 0; left: 0; background-color: rgba(0, 0, 0, 0.9); }\n.",[1],"inner { position: fixed; z-index: 999; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; top: 50%; left: 50%; min-width: ",[0,500],"; min-height: ",[0,380],"; max-width: 100%; max-height: 80%; -webkit-transform: translate(-50%, -65%); -ms-transform: translate(-50%, -65%); transform: translate(-50%, -65%); background: none; -webkit-box-shadow: none; box-shadow: none; }\n.",[1],"show-main { }\n.",[1],"popup-image { width: ",[0,360],"; height: ",[0,360],"; }\n.",[1],"level-image{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"title { text-align: center; color: yellow; font-size: ",[0,50],"; font-weight: bold; border-bottom: ",[0,4]," solid #FF6600; border-right: ",[0,3]," solid #FF6600; -webkit-box-shadow: ",[0,6]," ",[0,8]," ",[0,20]," #fff; box-shadow: ",[0,6]," ",[0,8]," ",[0,20]," #fff; }\n.",[1],"bottom { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"bottom wx-button{ width:",[0,200],"; }\n.",[1],"i-know { margin-left: ",[0,20],"; }\n",],undefined,{path:"./components/levelPopup.wxss"});    
__wxAppCode__['components/levelPopup.wxml']=$gwx('./components/levelPopup.wxml');

__wxAppCode__['components/myPopup.wxss']=setCssToHead([".",[1],"detail-show-outer { position: fixed; z-index: 998; top: 0; right: 0; bottom: 0; left: 0; background-color: rgba(0, 0, 0, 0.5); }\n.",[1],"detail-show-inner { position: fixed; z-index: 999; top: ",[0,40],"; right: ",[0,40],"; left: ",[0,40],"; background-color: #ffffff; border-radius: ",[0,20],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"inner-display { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; width: 90%; margin-top: ",[0,30],"; }\n.",[1],"inner-text { text-align: center; margin-bottom: ",[0,10],"; font-size: ",[0,34],"; }\n.",[1],"inner-text-kefu { font-size: ",[0,30],"; color: #72c69c; border: 1px solid red; font-size: ",[0,30],"; color: #72c69c; border: 1px solid blue; width: 50%; height: ",[0,50],"; padding: 0; line-height: ",[0,50],"; margin-bottom: ",[0,10],"; margin-top: ",[0,10],"; }\n.",[1],"inner-text-show { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"inner-button { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"text-button { padding-left: ",[0,70],"; padding-right: ",[0,70],"; font-size: ",[0,28],"; height: ",[0,60],"; line-height: ",[0,60],"; }\n.",[1],"i-know { background-color: #007aff; color: #fff; }\n.",[1],"show-img { width: ",[0,530],"; height: ",[0,600],"; margin: ",[0,30]," 0; }\n.",[1],"show-img-shi { width: ",[0,510],"; height: ",[0,620],"; }\n.",[1],"show-img-huishou { width: ",[0,500],"; height: ",[0,620],"; }\n.",[1],"garbage-gan-item { color: rgb(44, 43, 39); }\n.",[1],"garbage-shi-item { color: rgb(102, 63, 52); }\n.",[1],"garbage-huishou-item { color: rgb(36, 71, 131); }\n.",[1],"garbage-youhai-item { color: rgb(229, 49, 34); }\n.",[1],"text-margin-left { margin-left: ",[0,10],"; }\n",],undefined,{path:"./components/myPopup.wxss"});    
__wxAppCode__['components/myPopup.wxml']=$gwx('./components/myPopup.wxml');

__wxAppCode__['components/share.wxss']=setCssToHead([".",[1],"button-view.",[1],"data-v-6b30a266{ position: fixed; z-index: 999; bottom: ",[0,20],"; right: ",[0,10],"; }\n.",[1],"share-popup.",[1],"data-v-6b30a266 { position: fixed; z-index: 999; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"text-img.",[1],"data-v-6b30a266 { height: ",[0,60],"; background-color: #fff; font-size: ",[0,28],"; margin-bottom: ",[0,20],"; -webkit-box-shadow: ",[0,0]," ",[0,0]," ",[0,6]," #E0E0E0; box-shadow: ",[0,0]," ",[0,0]," ",[0,6]," #E0E0E0; padding-left: ",[0,10],"; padding-right: ",[0,10],"; }\n.",[1],"buttom-view.",[1],"data-v-6b30a266 { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"share-img.",[1],"data-v-6b30a266 { width: ",[0,40],"; height: ",[0,40],"; padding: ",[0,10],"; }\n.",[1],"text.",[1],"data-v-6b30a266 { height: ",[0,60],"; line-height: ",[0,60],"; }\n",],undefined,{path:"./components/share.wxss"});    
__wxAppCode__['components/share.wxml']=$gwx('./components/share.wxml');

__wxAppCode__['components/uni-icon/uni-icon.wxss']=setCssToHead(["@font-face { font-family: uniicons; font-weight: normal; font-style: normal; src: url(data:font/truetype;charset\x3dutf-8;base64,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PDgtsDEssAAWILAJI0IgICBGI0ewACsjYTgtsDIssAAWsAMlsAIlRyNHI2GwAFRYLiA8IyEbsAIlsAIlRyNHI2EgsAUlsAQlRyNHI2GwBiWwBSVJsAIlYbABRWMjIFhiGyFZY7ABRWJgIy4jICA8ijgjIVktsDMssAAWILAJQyAuRyNHI2EgYLAgYGawgGIjICA8ijgtsDQsIyAuRrACJUZSWCA8WS6xJAEUKy2wNSwjIC5GsAIlRlBYIDxZLrEkARQrLbA2LCMgLkawAiVGUlggPFkjIC5GsAIlRlBYIDxZLrEkARQrLbA3LLAuKyMgLkawAiVGUlggPFkusSQBFCstsDgssC8riiAgPLAEI0KKOCMgLkawAiVGUlggPFkusSQBFCuwBEMusCQrLbA5LLAAFrAEJbAEJiAuRyNHI2GwBkUrIyA8IC4jOLEkARQrLbA6LLEJBCVCsAAWsAQlsAQlIC5HI0cjYSCwBCNCsAZFKyCwYFBYILBAUVizAiADIBuzAiYDGllCQiMgR7AEQ7CAYmAgsAArIIqKYSCwAkNgZCOwA0NhZFBYsAJDYRuwA0NgWbADJbCAYmGwAiVGYTgjIDwjOBshICBGI0ewACsjYTghWbEkARQrLbA7LLAuKy6xJAEUKy2wPCywLyshIyAgPLAEI0IjOLEkARQrsARDLrAkKy2wPSywABUgR7AAI0KyAAEBFRQTLrAqKi2wPiywABUgR7AAI0KyAAEBFRQTLrAqKi2wPyyxAAEUE7ArKi2wQCywLSotsEEssAAWRSMgLiBGiiNhOLEkARQrLbBCLLAJI0KwQSstsEMssgAAOistsEQssgABOistsEUssgEAOistsEYssgEBOistsEcssgAAOystsEgssgABOystsEkssgEAOystsEossgEBOystsEsssgAANystsEwssgABNystsE0ssgEANystsE4ssgEBNystsE8ssgAAOSstsFAssgABOSstsFEssgEAOSstsFIssgEBOSstsFMssgAAPCstsFQssgABPCstsFUssgEAPCstsFYssgEBPCstsFcssgAAOCstsFgssgABOCstsFkssgEAOCstsFossgEBOCstsFsssDArLrEkARQrLbBcLLAwK7A0Ky2wXSywMCuwNSstsF4ssAAWsDArsDYrLbBfLLAxKy6xJAEUKy2wYCywMSuw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AVkBWgFbAVwBXQd1bmlFMTAwB3VuaUUxMDEHdW5pRTEwMgd1bmlFMTMwB3VuaUUxMzEHdW5pRTEzMgd1bmlFMjAwB3VuaUUyMDEHdW5pRTIwMgd1bmlFMjAzB3VuaUUyMzAHdW5pRTIzMQd1bmlFMjMyB3VuaUUyMzMHdW5pRTI2MAd1bmlFMjYxB3VuaUUyNjIHdW5pRTI2Mwd1bmlFMjY0B3VuaUUzMDAHdW5pRTMwMQd1bmlFMzAyB3VuaUUzMDMHdW5pRTMzMgd1bmlFMzMzB3VuaUUzNjAHdW5pRTM2Mwd1bmlFMzY0B3VuaUU0MDAHdW5pRTQwMQd1bmlFNDAyB3VuaUU0MDMHdW5pRTQwNAd1bmlFNDA1B3VuaUU0MDYHdW5pRTQwNwd1bmlFNDA4B3VuaUU0MDkHdW5pRTQxMAd1bmlFNDExB3VuaUU0MTMHdW5pRTQzNAd1bmlFNDM3B3VuaUU0MzgHdW5pRTQzOQd1bmlFNDQwB3VuaUU0NDEHdW5pRTQ0Mgd1bmlFNDQzB3VuaUU0NjAHdW5pRTQ2MQd1bmlFNDYyB3VuaUU0NjMHdW5pRTQ2NAd1bmlFNDY1B3VuaUU0NjYHdW5pRTQ2OAd1bmlFNDcwB3VuaUU0NzEHdW5pRTQ3Mgd1bmlFNTAwB3VuaUU1MDEHdW5pRTUwMgd1bmlFNTAzB3VuaUU1MDQHdW5pRTUwNQd1bmlFNTA2B3VuaUU1MDcHdW5pRTUwOAd1bmlFNTMwB3VuaUU1MzIHdW5pRTUzNAd1bmlFNTM1B3VuaUU1MzcHdW5pRTU2MAd1bmlFNTYyB3VuaUU1NjMHdW5pRTU2NQd1bmlFNTY3B3VuaUU1NjgHdW5pRTU4MAd1bmlFNTgxB3VuaUU1ODIHdW5pRTU4Mwd1bmlFNTg0B3VuaUU1ODUHdW5pRTU4Ngd1bmlFNTg3B3VuaUU1ODgHdW5pRTU4OQRFdXJvBEV1cm8AAQAB//8ADwABAAAADAAAABYAAAACAAEAAQBfAAEABAAAAAIAAAAAAAAAAQAAAADVpCcIAAAAANJrTZkAAAAA2DhhuQ\x3d\x3d) format(\x27truetype\x27); }\n.",[1],"uni-icon { font-family: uniicons; font-weight: normal; font-style: normal; line-height: 1; display: inline-block; text-decoration: none; -webkit-font-smoothing: antialiased; }\n.",[1],"uni-icon.",[1],"uni-active { color: #007aff; }\n.",[1],"uni-icon-contact:before { content: \x27\\E100\x27; }\n.",[1],"uni-icon-person:before { content: \x27\\E101\x27; }\n.",[1],"uni-icon-personadd:before { content: \x27\\E102\x27; }\n.",[1],"uni-icon-contact-filled:before { content: \x27\\E130\x27; }\n.",[1],"uni-icon-person-filled:before { content: \x27\\E131\x27; }\n.",[1],"uni-icon-personadd-filled:before { content: \x27\\E132\x27; }\n.",[1],"uni-icon-phone:before { content: \x27\\E200\x27; }\n.",[1],"uni-icon-email:before { content: \x27\\E201\x27; }\n.",[1],"uni-icon-chatbubble:before { content: \x27\\E202\x27; }\n.",[1],"uni-icon-chatboxes:before { content: \x27\\E203\x27; }\n.",[1],"uni-icon-phone-filled:before { content: \x27\\E230\x27; }\n.",[1],"uni-icon-email-filled:before { content: \x27\\E231\x27; }\n.",[1],"uni-icon-chatbubble-filled:before { content: \x27\\E232\x27; }\n.",[1],"uni-icon-chatboxes-filled:before { content: \x27\\E233\x27; }\n.",[1],"uni-icon-weibo:before { content: \x27\\E260\x27; }\n.",[1],"uni-icon-weixin:before { content: \x27\\E261\x27; }\n.",[1],"uni-icon-pengyouquan:before { content: \x27\\E262\x27; }\n.",[1],"uni-icon-chat:before { content: \x27\\E263\x27; }\n.",[1],"uni-icon-qq:before { content: \x27\\E264\x27; }\n.",[1],"uni-icon-videocam:before { content: \x27\\E300\x27; }\n.",[1],"uni-icon-camera:before { content: \x27\\E301\x27; }\n.",[1],"uni-icon-mic:before { content: \x27\\E302\x27; }\n.",[1],"uni-icon-location:before { content: \x27\\E303\x27; }\n.",[1],"uni-icon-mic-filled:before, .",[1],"uni-icon-speech:before { content: \x27\\E332\x27; }\n.",[1],"uni-icon-location-filled:before { content: \x27\\E333\x27; }\n.",[1],"uni-icon-micoff:before { content: \x27\\E360\x27; }\n.",[1],"uni-icon-image:before { content: \x27\\E363\x27; }\n.",[1],"uni-icon-map:before { content: \x27\\E364\x27; }\n.",[1],"uni-icon-compose:before { content: \x27\\E400\x27; }\n.",[1],"uni-icon-trash:before { content: \x27\\E401\x27; }\n.",[1],"uni-icon-upload:before { content: \x27\\E402\x27; }\n.",[1],"uni-icon-download:before { content: \x27\\E403\x27; }\n.",[1],"uni-icon-close:before { content: \x27\\E404\x27; }\n.",[1],"uni-icon-redo:before { content: \x27\\E405\x27; }\n.",[1],"uni-icon-undo:before { content: \x27\\E406\x27; }\n.",[1],"uni-icon-refresh:before { content: \x27\\E407\x27; }\n.",[1],"uni-icon-star:before { content: \x27\\E408\x27; }\n.",[1],"uni-icon-plus:before { content: \x27\\E409\x27; }\n.",[1],"uni-icon-minus:before { content: \x27\\E410\x27; }\n.",[1],"uni-icon-circle:before, .",[1],"uni-icon-checkbox:before { content: \x27\\E411\x27; }\n.",[1],"uni-icon-close-filled:before, .",[1],"uni-icon-clear:before { content: \x27\\E434\x27; }\n.",[1],"uni-icon-refresh-filled:before { content: \x27\\E437\x27; }\n.",[1],"uni-icon-star-filled:before { content: \x27\\E438\x27; }\n.",[1],"uni-icon-plus-filled:before { content: \x27\\E439\x27; }\n.",[1],"uni-icon-minus-filled:before { content: \x27\\E440\x27; }\n.",[1],"uni-icon-circle-filled:before { content: \x27\\E441\x27; }\n.",[1],"uni-icon-checkbox-filled:before { content: \x27\\E442\x27; }\n.",[1],"uni-icon-closeempty:before { content: \x27\\E460\x27; }\n.",[1],"uni-icon-refreshempty:before { content: \x27\\E461\x27; }\n.",[1],"uni-icon-reload:before { content: \x27\\E462\x27; }\n.",[1],"uni-icon-starhalf:before { content: \x27\\E463\x27; }\n.",[1],"uni-icon-spinner:before { content: \x27\\E464\x27; }\n.",[1],"uni-icon-spinner-cycle:before { content: \x27\\E465\x27; }\n.",[1],"uni-icon-search:before { content: \x27\\E466\x27; }\n.",[1],"uni-icon-plusempty:before { content: \x27\\E468\x27; }\n.",[1],"uni-icon-forward:before { content: \x27\\E470\x27; }\n.",[1],"uni-icon-back:before, .",[1],"uni-icon-left-nav:before { content: \x27\\E471\x27; }\n.",[1],"uni-icon-checkmarkempty:before { content: \x27\\E472\x27; }\n.",[1],"uni-icon-home:before { content: \x27\\E500\x27; }\n.",[1],"uni-icon-navigate:before { content: \x27\\E501\x27; }\n.",[1],"uni-icon-gear:before { content: \x27\\E502\x27; }\n.",[1],"uni-icon-paperplane:before { content: \x27\\E503\x27; }\n.",[1],"uni-icon-info:before { content: \x27\\E504\x27; }\n.",[1],"uni-icon-help:before { content: \x27\\E505\x27; }\n.",[1],"uni-icon-locked:before { content: \x27\\E506\x27; }\n.",[1],"uni-icon-more:before { content: \x27\\E507\x27; }\n.",[1],"uni-icon-flag:before { content: \x27\\E508\x27; }\n.",[1],"uni-icon-home-filled:before { content: \x27\\E530\x27; }\n.",[1],"uni-icon-gear-filled:before { content: \x27\\E532\x27; }\n.",[1],"uni-icon-info-filled:before { content: \x27\\E534\x27; }\n.",[1],"uni-icon-help-filled:before { content: \x27\\E535\x27; }\n.",[1],"uni-icon-more-filled:before { content: \x27\\E537\x27; }\n.",[1],"uni-icon-settings:before { content: \x27\\E560\x27; }\n.",[1],"uni-icon-list:before { content: \x27\\E562\x27; }\n.",[1],"uni-icon-bars:before { content: \x27\\E563\x27; }\n.",[1],"uni-icon-loop:before { content: \x27\\E565\x27; }\n.",[1],"uni-icon-paperclip:before { content: \x27\\E567\x27; }\n.",[1],"uni-icon-eye:before { content: \x27\\E568\x27; }\n.",[1],"uni-icon-arrowup:before { content: \x27\\E580\x27; }\n.",[1],"uni-icon-arrowdown:before { content: \x27\\E581\x27; }\n.",[1],"uni-icon-arrowleft:before { content: \x27\\E582\x27; }\n.",[1],"uni-icon-arrowright:before { content: \x27\\E583\x27; }\n.",[1],"uni-icon-arrowthinup:before { content: \x27\\E584\x27; }\n.",[1],"uni-icon-arrowthindown:before { content: \x27\\E585\x27; }\n.",[1],"uni-icon-arrowthinleft:before { content: \x27\\E586\x27; }\n.",[1],"uni-icon-arrowthinright:before { content: \x27\\E587\x27; }\n.",[1],"uni-icon-pulldown:before { content: \x27\\E588\x27; }\n.",[1],"uni-icon-closefill:before { content: \x27\\E589\x27; }\n.",[1],"uni-icon-sound:before { content: \x22\\E590\x22; }\n.",[1],"uni-icon-scan:before { content: \x22\\E612\x22; }\n",],undefined,{path:"./components/uni-icon/uni-icon.wxss"});    
__wxAppCode__['components/uni-icon/uni-icon.wxml']=$gwx('./components/uni-icon/uni-icon.wxml');

__wxAppCode__['components/uni-notice-bar/uni-notice-bar.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"uni-noticebar { padding: ",[0,12]," ",[0,24],"; font-size: ",[0,24],"; line-height: 1.5; margin-bottom: ",[0,20],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: left; -webkit-justify-content: left; -ms-flex-pack: left; justify-content: left }\n.",[1],"uni-noticebar__close { color: #999; margin-right: ",[0,24],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center }\n.",[1],"uni-noticebar__content { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; overflow: hidden }\n.",[1],"uni-noticebar__content.",[1],"uni-noticebar--flex { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row }\n.",[1],"uni-noticebar__content-icon { display: inline-block; z-index: 1; padding-right: ",[0,12]," }\n.",[1],"uni-noticebar__content-more { width: ",[0,180],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; word-break: keep-all; margin-left: ",[0,10],"; color: #999 }\n.",[1],"uni-noticebar__content-more-text { font-size: ",[0,24],"; white-space: nowrap }\n.",[1],"uni-noticebar__content-text { word-break: break-all; line-height: 1.5; display: inline }\n.",[1],"uni-noticebar__content-text.",[1],"uni-noticebar--single { -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; overflow: hidden }\n.",[1],"uni-noticebar__content-text.",[1],"uni-noticebar--scrollable { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; display: block; overflow: hidden }\n.",[1],"uni-noticebar__content-text.",[1],"uni-noticebar--scrollable .",[1],"uni-noticebar__content-inner { padding-left: 100%; white-space: nowrap; display: inline-block; -webkit-transform: translateZ(0); transform: translateZ(0) }\n.",[1],"uni-noticebar__content-inner { font-size: ",[0,24],"; display: inline }\n@-webkit-keyframes notice { 100% { -webkit-transform: translate3d(-100%, 0, 0); transform: translate3d(-100%, 0, 0) }\n}@keyframes notice { 100% { -webkit-transform: translate3d(-100%, 0, 0); transform: translate3d(-100%, 0, 0) }\n}",],undefined,{path:"./components/uni-notice-bar/uni-notice-bar.wxss"});    
__wxAppCode__['components/uni-notice-bar/uni-notice-bar.wxml']=$gwx('./components/uni-notice-bar/uni-notice-bar.wxml');

__wxAppCode__['components/uni-popup/uni-popup.wxss']=setCssToHead([".",[1],"uni-mask { position: fixed; z-index: 998; top: 0; right: 0; bottom: 0; left: 0; background-color: rgba(0, 0, 0, 0.3); }\n.",[1],"uni-popup { position: fixed; z-index: 999; background-color: #ffffff; }\n.",[1],"uni-popup-middle { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%); }\n.",[1],"uni-popup-middle.",[1],"uni-popup-insert { min-width: ",[0,380],"; min-height: ",[0,380],"; max-width: 100%; max-height: 80%; -webkit-transform: translate(-50%, -65%); -ms-transform: translate(-50%, -65%); transform: translate(-50%, -65%); background: none; -webkit-box-shadow: none; box-shadow: none; }\n.",[1],"uni-popup-middle.",[1],"uni-popup-fixed { border-radius: ",[0,10],"; padding: ",[0,30],"; }\n.",[1],"uni-close-bottom, .",[1],"uni-close-right { position: absolute; bottom: ",[0,-180],"; text-align: center; border-radius: 50%; color: #f5f5f5; font-size: ",[0,60],"; font-weight: bold; opacity: 0.8; z-index: -1; }\n.",[1],"uni-close-bottom { margin: auto; left: 0; right: 0; }\n.",[1],"uni-close-right { right: ",[0,-60],"; top: ",[0,-80],"; }\n.",[1],"uni-close-bottom:after { content: \x27\x27; position: absolute; width: 0px; border: 1px #f5f5f5 solid; top: ",[0,-200],"; bottom: ",[0,56],"; left: 50%; -webkit-transform: translate(-50%, -0%); -ms-transform: translate(-50%, -0%); transform: translate(-50%, -0%); opacity: 0.8; }\n.",[1],"uni-popup-top { top: 0; left: 0; width: 100%; height: ",[0,100],"; line-height: ",[0,100],"; text-align: center; }\n.",[1],"uni-popup-bottom { left: 0; bottom: 0; width: 100%; min-height: ",[0,100],"; line-height: ",[0,100],"; text-align: center; }\n",],undefined,{path:"./components/uni-popup/uni-popup.wxss"});    
__wxAppCode__['components/uni-popup/uni-popup.wxml']=$gwx('./components/uni-popup/uni-popup.wxml');

__wxAppCode__['components/uni-steps/uni-steps.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"garbage-gan { background-color: #2c2b27; }\n.",[1],"garbage-shi { background-color: #663f34; }\n.",[1],"garbage-huishou { background-color: #244783; }\n.",[1],"garbage-youhai { background-color: #e53122; }\n.",[1],"uni-steps { width: 100%; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; overflow: hidden; position: relative; }\n.",[1],"uni-steps-items { position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; margin: 10px 20px 0 20px; -webkit-box-sizing: border-box; box-sizing: border-box; overflow: hidden; }\n.",[1],"uni-steps-items.",[1],"uni-steps-column { margin: 10px 0; padding-left: 31px; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"uni-steps-items.",[1],"uni-steps-column .",[1],"uni-steps-item:after { content: \x27 \x27; position: absolute; height: ",[0,6],"; width: 100%; bottom: 9px; left: 0; background-color: #ebedf0; -webkit-transform: scaleY(0.5); -ms-transform: scaleY(0.5); transform: scaleY(0.5); }\n.",[1],"uni-steps-items.",[1],"uni-steps-column .",[1],"uni-steps-item:last-child { position: relative; }\n.",[1],"uni-steps-items.",[1],"uni-steps-column .",[1],"uni-steps-item:last-child:after { height: 0px; }\n.",[1],"uni-steps-items.",[1],"uni-steps-column .",[1],"uni-steps-item:last-child .",[1],"uni-steps-item-title-container { text-align: left; }\n.",[1],"uni-steps-items.",[1],"uni-steps-column .",[1],"uni-steps-item:last-child .",[1],"uni-steps-item-circle-container { left: -17px; right: auto; }\n.",[1],"uni-steps-items.",[1],"uni-steps-column .",[1],"uni-steps-item-title-container { -webkit-transform: none; -ms-transform: none; transform: none; display: block; line-height: ",[0,36],"; }\n.",[1],"uni-steps-items.",[1],"uni-steps-column .",[1],"uni-steps-item-title { -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; }\n.",[1],"uni-steps-items.",[1],"uni-steps-column .",[1],"uni-steps-item-desc { white-space: normal; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; }\n.",[1],"uni-steps-items.",[1],"uni-steps-column .",[1],"uni-steps-item-circle-container { left: -17px; top: -1px; bottom: auto; padding: 8px 0px; }\n.",[1],"uni-steps-items.",[1],"uni-steps-column .",[1],"uni-steps-item-line { height: 100%; width: 1px; left: -15px; top: -1px; bottom: auto; }\n.",[1],"uni-steps-items.",[1],"uni-steps-column .",[1],"uni-steps-item.",[1],"uni-steps-process .",[1],"uni-steps-item-circle-container { bottom: auto; left: -21px; }\n.",[1],"uni-steps-item { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; position: relative; padding-bottom: 18px; }\n.",[1],"uni-steps-item-title-container { text-align: left; margin-left: 3px; display: inline-block; -webkit-transform: translateX(-50%); -ms-transform: translateX(-50%); transform: translateX(-50%); color: #969799; }\n.",[1],"uni-steps-item-title { font-size: ",[0,28],"; }\n.",[1],"uni-steps-item-desc { font-size: ",[0,24],"; }\n.",[1],"uni-steps-item:first-child .",[1],"uni-steps-item-title-container { -webkit-transform: none; -ms-transform: none; transform: none; margin-left: 0; }\n.",[1],"uni-steps-item:last-child { position: absolute; right: 0; }\n.",[1],"uni-steps-item:last-child .",[1],"uni-steps-item-title-container { -webkit-transform: none; -ms-transform: none; transform: none; text-align: right; }\n.",[1],"uni-steps-item:last-child .",[1],"uni-steps-item-circle-container { left: auto; right: 0; }\n.",[1],"uni-steps-item:last-child .",[1],"uni-steps-item-line { left: -14px; }\n.",[1],"uni-steps-item-circle-container { position: absolute; bottom: 6px; background-color: #ffffff; z-index: 1; }\n.",[1],"uni-steps-item-circle { width: ",[0,24],"; height: ",[0,24],"; background-color: #969799; border-radius: 50%; }\n.",[1],"uni-steps-item-line { background-color: #ebedf0; position: absolute; bottom: 10px; left: 0; width: 100%; height: ",[0,8],"; }\n.",[1],"uni-steps-item-line:last-child { left: -14px; }\n.",[1],"uni-steps-item.",[1],"uni-steps-finish .",[1],"uni-steps-item-title-container { color: #333333; }\n.",[1],"uni-steps-item.",[1],"uni-steps-process .",[1],"uni-steps-item-circle-container { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n",],undefined,{path:"./components/uni-steps/uni-steps.wxss"});    
__wxAppCode__['components/uni-steps/uni-steps.wxml']=$gwx('./components/uni-steps/uni-steps.wxml');

__wxAppCode__['pages/challenge/challenge.wxss']=setCssToHead([".",[1],"content{ }\n.",[1],"top-text { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; margin-bottom: ",[0,20],"; }\n.",[1],"gary { color: #999999; margin-left: ",[0,8],"; }\n.",[1],"main-classify { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; direction: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"main-img { width: ",[0,240],"; height: ",[0,240],"; padding: ",[0,20],"; }\n.",[1],"title { text-align: center; margin: ",[0,20]," auto; font-size: ",[0,40],"; }\n.",[1],"main-panel { padding: 0 5%; }\n.",[1],"quesion-panel { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; margin: ",[0,20]," 0 0 0; font-size: ",[0,40],"; }\n.",[1],"quesion-panel-item1 { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; margin-bottom: ",[0,20],"; }\n.",[1],"quesion-panel-item2,.",[1],"quesion-panel-item3 { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"quesion-panel-item3 .",[1],"gary{ font-size: ",[0,30],"; margin-top: ",[0,10],"; }\n.",[1],"quesion-panel-text { color: #e96900; font-size: ",[0,46],"; margin-right: ",[0,20],"; }\n",],undefined,{path:"./pages/challenge/challenge.wxss"});    
__wxAppCode__['pages/challenge/challenge.wxml']=$gwx('./pages/challenge/challenge.wxml');

__wxAppCode__['pages/challenge/challengeResult.wxss']=setCssToHead([".",[1],"title { text-align: center; margin: ",[0,20]," auto; font-size: ",[0,40],"; }\n.",[1],"level { text-align: center; margin-bottom: ",[0,20],"; font-size: ",[0,40],"; }\n.",[1],"summary { text-align: center; margin-bottom: ",[0,20],"; margin: ",[0,10]," 5%; }\n.",[1],"table { padding: 0 5%; font-size: ",[0,30],"; }\n.",[1],"table-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; padding: ",[0,6],"; height: ",[0,50],"; }\n.",[1],"icon-img { width: ",[0,50],"; height: ",[0,50],"; }\n.",[1],"table-item-icon { width: 10%; text-align: center; }\n.",[1],"garbage-name { width: 50%; line-height: ",[0,50],"; margin-left: ",[0,20],"; }\n.",[1],"through { text-decoration: line-through; }\n.",[1],"selected { width: 25%; line-height: ",[0,50],"; text-align: center; }\n.",[1],"result { width: 25%; text-align: center; line-height: ",[0,50],"; }\n.",[1],"gray { background-color: #f0f0f0; }\n.",[1],"garbage-gan-item { color: rgb(44, 43, 39); }\n.",[1],"garbage-shi-item { color: rgb(102, 63, 52); }\n.",[1],"garbage-huishou-item { color: rgb(36, 71, 131); }\n.",[1],"garbage-youhai-item { color: rgb(229, 49, 34); }\n.",[1],"button-show { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; margin-top: ",[0,20],"; }\n.",[1],"goonButton { padding: 0 ",[0,60],"; }\n.",[1],"button-left { margin-right: ",[0,60],"; }\n.",[1],"level { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"text-left{ font-weight: bold; font-size: ",[0,44],"; }\n.",[1],"text-right { margin-left: ",[0,20],"; color: #FF6600; border-bottom: ",[0,4]," solid #FF6600; }\n.",[1],"level1{ color: red; }\n.",[1],"level2{ color: #737373; }\n.",[1],"level3{ color: #e96900; }\n.",[1],"level4{ color: #1296DB; }\n.",[1],"level5{ color: #72C69C; }\n",],undefined,{path:"./pages/challenge/challengeResult.wxss"});    
__wxAppCode__['pages/challenge/challengeResult.wxml']=$gwx('./pages/challenge/challengeResult.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead([".",[1],"swiper-img { width: ",[0,750],"; height: ",[0,300],"; }\n.",[1],"swiper-flex { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"swiper-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"tip-text { text-align: center; font-size: ",[0,32],"; color: #4d4d4d; margin-top: ",[0,10],"; }\n.",[1],"input-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; margin: ",[0,10]," ",[0,20]," ",[0,20]," ",[0,20],"; border: 1px solid #72c69c; border-radius: ",[0,50],"; -webkit-box-shadow: ",[0,10]," ",[0,10]," ",[0,20]," #c5c5c5; box-shadow: ",[0,10]," ",[0,10]," ",[0,20]," #c5c5c5; }\n.",[1],"input-view-camera, .",[1],"input-view-speech, .",[1],"input-view-search { }\n.",[1],"input-view-camera {}\n.",[1],"input-view-item { height: ",[0,80],"; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding: ",[0,10],"; }\n.",[1],"input-search { height: ",[0,80],"; width: ",[0,320],"; text-align:center; }\n.",[1],"search-img { width: ",[0,80],"; height: ",[0,80],"; }\n.",[1],"font-search { width: ",[0,80],"; padding: ",[0,10],"; color: #72c69c; font-weight: bold; }\n.",[1],"main-classify { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; direction: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"main-img { width: ",[0,200],"; height: ",[0,200],"; padding: ",[0,20],"; }\n.",[1],"recording-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n#canvas { position: relative; width: ",[0,300],"; height: ",[0,300],"; z-index: 10; }\n.",[1],"recording-button { position: absolute; -webkit-box-sizing: border-box; box-sizing: border-box; top: ",[0,50],"; left: ",[0,50],"; display: inline-block; width: ",[0,200],"; height: ",[0,200],"; border: 1px dashed #1296DB; border-radius: ",[0,200],"; background: url(data:image/png;base64,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) no-repeat 50% 50%; background-size: 80% 80%; z-index: 100; }\n.",[1],"simpleTips{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; font-size: ",[0,28],"; color: #666666; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/index/index.wxss:122:1)",{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/more/more.wxss']=setCssToHead([".",[1],"center-box{ width: ",[0,500],"; height: ",[0,500],"; }\n.",[1],"center-box .",[1],"image { width: 100%; height: 100%; }\n",],undefined,{path:"./pages/more/more.wxss"});    
__wxAppCode__['pages/more/more.wxml']=$gwx('./pages/more/more.wxml');

__wxAppCode__['pages/search/search.wxss']=setCssToHead(["wx-view { display: block; }\n.",[1],"center-box { width: ",[0,500],"; height: ",[0,500],"; }\n.",[1],"search-box { width: 95%; background-color: rgb(242, 242, 242); padding: ",[0,15]," 2.5%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"search-box .",[1],"mSearch-input-box { width: 100%; }\n.",[1],"search-box .",[1],"input-box { width: 85%; -webkit-flex-shrink: 1; -ms-flex-negative: 1; flex-shrink: 1; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"search-box .",[1],"search-btn { width: 15%; margin: 0 0 0 2%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; font-size: ",[0,28],"; color: #fff; background: -webkit-gradient(linear, left top, right top, from(#ff9801), to(#ff570a)); background: -o-linear-gradient(left, #ff9801, #ff570a); background: linear-gradient(to right, #ff9801, #ff570a); border-radius: ",[0,60],"; }\n.",[1],"search-box .",[1],"input-box\x3ewx-input { width: 100%; height: ",[0,60],"; font-size: ",[0,32],"; border: 0; border-radius: ",[0,60],"; -webkit-appearance: none; -moz-appearance: none; appearance: none; padding: 0 3%; margin: 0; background-color: #ffffff; }\n.",[1],"placeholder-class { color: #9e9e9e; }\n.",[1],"search-keyword { width: 100%; background-color: rgb(242, 242, 242); }\n.",[1],"keyword-list-box { height: calc(100vh - ",[0,110],"); padding-top: ",[0,10],"; border-radius: ",[0,20]," ",[0,20]," 0 0; background-color: #fff; }\n.",[1],"keyword-entry-tap { background-color: #eee; }\n.",[1],"keyword-entry { width: 94%; height: ",[0,80],"; margin: 0 3%; font-size: ",[0,30],"; color: #333; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; border-bottom: solid ",[0,1]," #e7e7e7; }\n.",[1],"keyword-entry wx-image { width: ",[0,60],"; height: ",[0,60],"; }\n.",[1],"keyword-entry .",[1],"keyword-text, .",[1],"keyword-entry .",[1],"keyword-img { height: ",[0,80],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"keyword-entry .",[1],"keyword-text { width: 70%; }\n.",[1],"keyword-entry .",[1],"keyword-type { }\n.",[1],"keyword-entry .",[1],"keyword-img { -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"keyword-box { height: calc(100vh - ",[0,110],"); border-radius: ",[0,20]," ",[0,20]," 0 0; background-color: #fff; }\n.",[1],"keyword-box .",[1],"keyword-block { padding: ",[0,10]," 0; }\n.",[1],"keyword-box .",[1],"keyword-block .",[1],"keyword-list-header { width: 94%; padding: ",[0,10]," 3%; font-size: ",[0,27],"; color: #333; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"keyword-box .",[1],"keyword-block .",[1],"keyword-list-header wx-image { width: ",[0,40],"; height: ",[0,40],"; }\n.",[1],"keyword-box .",[1],"keyword-block .",[1],"keyword { width: 94%; padding: 3px 3%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-flow: wrap; -ms-flex-flow: wrap; flex-flow: wrap; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; }\n.",[1],"keyword-box .",[1],"keyword-block .",[1],"hide-hot-tis { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; font-size: ",[0,28],"; color: #6b6b6b; }\n.",[1],"keyword-box .",[1],"keyword-block .",[1],"keyword\x3ewx-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; border-radius: ",[0,60],"; padding: 0 ",[0,20],"; margin: ",[0,10]," ",[0,20]," ",[0,10]," 0; height: ",[0,60],"; font-size: ",[0,28],"; background-color: rgb(242, 242, 242); color: #6b6b6b; }\n.",[1],"keyword-type { border-radius: ",[0,30],"; padding: ",[0,7],"; font-size: ",[0,28],"; }\n.",[1],"garbage-gan { color: rgb(44, 43, 39); }\n.",[1],"garbage-shi { color: rgb(102, 63, 52); }\n.",[1],"garbage-huishou { color: rgb(36, 71, 131); }\n.",[1],"garbage-youhai { color: rgb(229, 49, 34); }\n.",[1],"input-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; margin: ",[0,20]," ",[0,20],"; border: 1px solid #72c69c; border-radius: ",[0,50],"; -webkit-box-shadow: ",[0,10]," ",[0,10]," ",[0,20]," #E0E0E0; box-shadow: ",[0,10]," ",[0,10]," ",[0,20]," #E0E0E0; }\n.",[1],"input-view-camera, .",[1],"input-view-speech, .",[1],"input-view-search { border-radius: ",[0,20],"; }\n.",[1],"input-view-camera {}\n.",[1],"input-view-item { height: ",[0,80],"; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding: ",[0,10],"; }\n.",[1],"input-search { height: ",[0,80],"; width: ",[0,320],"; }\n.",[1],"search-img { width: ",[0,80],"; height: ",[0,80],"; }\n.",[1],"font-search { width: ",[0,80],"; padding: ",[0,10],"; color: #72c69c; font-weight: bold; }\n.",[1],"main-classify { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; direction: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"main-img { width: ",[0,240],"; height: ",[0,240],"; padding: ",[0,20],"; }\n.",[1],"recording-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n#canvas { position: relative; width: ",[0,300],"; height: ",[0,300],"; z-index: 10; }\n.",[1],"recording-button { position: absolute; -webkit-box-sizing: border-box; box-sizing: border-box; top: ",[0,50],"; left: ",[0,50],"; display: inline-block; width: ",[0,200],"; height: ",[0,200],"; border: 1px dashed #1296DB; border-radius: 50%; background: url(data:image/png;base64,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) no-repeat 50% 50%; background-size: 80% 80%; z-index: 100; }\n.",[1],"image-hot { width: ",[0,24],"; height: ",[0,24],"; }\n.",[1],"imagePopup{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; width: ",[0,650],"; height: ",[0,400],"; font-size: ",[0,32],"; }\n.",[1],"image-left{ }\n.",[1],"tempImage{ width: ",[0,220],"; height: ",[0,400],"; }\n.",[1],"list-item{ width: ",[0,410],"; height: ",[0,70],"; line-height: ",[0,70],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; border-bottom: ",[0,1]," solid #e6e6e6; }\n.",[1],"item-keyword{ }\n.",[1],"image-close{ font-size: ",[0,30],"; text-align: center; color: #666; margin-bottom: ",[0,10],"; }\n.",[1],"item-pi{ width: ",[0,180],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; font-size: ",[0,28],"; color: #666; }\n.",[1],"image-button{ width: ",[0,650],"; margin-top: ",[0,40],"; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/search/search.wxss:351:1)",{path:"./pages/search/search.wxss"});    
__wxAppCode__['pages/search/search.wxml']=$gwx('./pages/search/search.wxml');

__wxAppCode__['pages/type/type.wxss']=setCssToHead([".",[1],"fixed-ad{ position: fixed; z-index: 999; }\n.",[1],"nav { margin-top: ",[0,10],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: 100%; }\n.",[1],"nav-left { width: 30%; }\n.",[1],"nav-left-item { height: ",[0,120],"; font-size: ",[0,32],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; background-color: #e6e6e6; color: #484242; margin-bottom: ",[0,4],"; }\n.",[1],"garbage-gan { background-color: rgb(44, 43, 39); color: #FFFFFF; }\n.",[1],"garbage-shi { background-color: rgb(102, 63, 52); color: #FFFFFF; }\n.",[1],"garbage-huishou { background-color: rgb(36, 71, 131); color: #FFFFFF; }\n.",[1],"garbage-youhai { background-color: rgb(229, 49, 34); color: #FFFFFF; }\n.",[1],"garbage-gan-border { border-left: ",[0,10]," solid rgb(44, 43, 39); }\n.",[1],"garbage-shi-border { border-left: ",[0,10]," solid rgb(102, 63, 52); }\n.",[1],"garbage-huishou-border { border-left: ",[0,10]," solid rgb(36, 71, 131); }\n.",[1],"garbage-youhai-border { border-left: ",[0,10]," solid rgb(229, 49, 34); }\n.",[1],"main-img { width: ",[0,200],"; height: ",[0,200],"; }\n.",[1],"nav-right { width: 70%; }\n.",[1],"nav-right-item { height: ",[0,20],"; padding: ",[0,28],"; font-size: ",[0,32],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; border-radius: ",[0,10],"; }\n.",[1],"style1{ background-color: #f5f5f5; }\n.",[1],"active { color: #F24544; }\n.",[1],"padding { width: 100%; top: 0; position: fixed; background-color: #F24544; }\n.",[1],"content { width: 100%; }\n.",[1],"view-img{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient:horizontal; -webkit-box-direction:normal; -webkit-flex-direction:row ; -ms-flex-direction:row ; flex-direction:row ; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"show-img{ width:",[0,400],"; height:",[0,500],"; }\n::-webkit-scrollbar { width: 0; height: 0; color: transparent; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/type/type.wxss:140:1)",{path:"./pages/type/type.wxss"});    
__wxAppCode__['pages/type/type.wxml']=$gwx('./pages/type/type.wxml');

__wxAppCode__['pages/webview/webview.wxss']=undefined;    
__wxAppCode__['pages/webview/webview.wxml']=$gwx('./pages/webview/webview.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
