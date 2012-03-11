//Start:Config
_C={
    name:'Hosts manage',
    version:'1.0',
    time:'2010.4.12',
    update:'2010.4.12',
    author:'css',
    info:'����ip�󶨹�����',
    filePath:'C:\\WINDOWS\\system32\\drivers\\etc\\hosts',
    JS_lib:'1.0',
    CSS:'1.0',
    JS:'1.0',
    config_URL:'https://csspc.googlecode.com/svn/trunk/hosts/config.txt',
    JS_lib_URL:['https://csspc.googlecode.com/svn/trunk/js/DS-min.js',
        'https://csspc.googlecode.com/svn/trunk/js/DS.animeT-min.js'],
    CSS_URL:'https://csspc.googlecode.com/svn/trunk/hosts/hosts.css',
    JS_URL:'https://csspc.googlecode.com/svn/trunk/hosts/hosts.js',
    splitStart:'//'+'Start:',
    splitEnd:'//'+'End'
}
//End






//Start:_JS_lib

!function(w){var h=!-[1,],bind=(function(){return document.attachEvent?function(a,b,c,d){var e={type:b,fn:c,fn2:function(){c.call(d||a,event)}};a.evt?(a.evt[a.evt.length]=e):(a.evt=[e]);a.attachEvent('on'+b,e.fn2)}:function(a,b,c,d){var f={type:b,fn:c,fn2:function(e){c.call(d||a,e)}};a.evt?(a.evt[a.evt.length]=f):(a.evt=[f]);a.addEventListener(b,f.fn2,false)}})(),unbind=(function(){return document.attachEvent?function(a,b,c){var d=a.evt,nti;for(var i=-1,lg=d.length;++i<lg;){nti=d[i];if(nti.type==b&&''+nti.fn==''+c){a.detachEvent('on'+b,nti.fn2);a.evt.splice(i,1);break}}}:function(a,b,c){var d=a.evt,nti;for(var i=-1,lg=d.length;++i<lg;){nti=d[i];if(nti.type==b&&''+nti.fn==''+c){a.evt.splice(i,1);a.removeEventListener(b,nti.fn2,false);break}}}})(),log=(function(){function tab(i){return new Array(i*4+1).join(' ')}var f=0;function execObject(O,T){T=$type(O);if(typeof O!='object'){if(T=='string'){return'\''+O+'\''}else{return O}}if(O==null){return'null'}var S='';if(T=='object'){S+='{\n'+tab(++f);S+=(function(){var S=[],i=0;for(var E in O){S[i++]=E+':'+execObject(O[E])}return S.join(',\n'+tab(f))+'\n'})();S+=tab(--f)+'}\n'}else{S+='[\n'+tab(++f);S+=(function(){var S=[],i=0;for(var E in O){S[i++]=E+':'+execObject(O[E])}return S.join(',\n'+tab(f))+'\n'})();S+=tab(--f)+']\n'}return S.replace(/\n\n/,'\n').replace(/\n,/g,',')}return function(a,b){var c;var d=$type(b);if(d=='object'||d=='array'){b=execObject(b)}var e=''+'name:'+a+'\n'+'type:'+d+'\n'+'value:\n'+b+'\n'+'';alert(e)}})();function $type(O){var T=typeof O;switch(T){case'object':if(O==null)return'null';var a=O.length;if(typeof a=='number'){delete O.length;if(typeof O.length=='number'){return'array'}else{O.length=a}}}return T}function id(a){return a.nodeName?a:document.getElementById(a)}function tag(a,b){return(b||document).getElementsByTagName(a)}function cls(a,b,c){var d=[],all=tag(c||'*',b),lg=all.length,i=-1,j=-1;for(;++i<lg;)if(all[i].className==a)d[++j]=all[i];return d}function attr(a,b,c){var d=[],all=tag('*',c),lg=all.length;for(var i=-1,j=-1;++i<lg;)if(all[i][a]==b)d[++j]=all[i];return d}function each(a,b){for(var i=-1,lg=a.length;++i<lg;)b.call(a,i,a[i])}function sty(a,b){return(a.currentStyle||document.defaultView.getComputedStyle(a,null))[b]}function css(b,c,d){if(d){b.style[c]=d;return}d=typeof c;if(d=='string')return(b.style&&b.style[c])||sty(b,c);if(d=='object')for(var a in c)b.style[a]=c[a]}function cssNum(a,b){return parseInt(css(a,b))||0}function cssSize(a,b){switch(b){case'width':return cssNum(a,b)||(a.offsetWidth-cssSize(a,'paddingWidth')-cssSize(a,'borderWidth'));case'height':return cssNum(a,b)||(a.offsetHeight-cssSize(a,'paddingHeight')-cssSize(a,'borderHeight'));case'left':return cssNum(a,b)||(a.offsetLeft-cssNum(a,'marginLeft'));case'top':return cssNum(a,b)||(a.offsetTop-cssNum(a,'marginTop'));case'borderWidth':return cssNum(a,'borderLeftWidth')+cssNum(a,'borderRightWidth');case'borderHeight':return cssNum(a,'borderTopWidth')+cssNum(a,'borderBottomWidth');case'paddingWidth':return cssNum(a,'paddingLeft')+cssNum(a,'paddingRight');case'paddingHeight':return cssNum(a,'paddingTop')+cssNum(a,'paddingBottom');case'marginWidth':return cssNum(a,'marginLeft')+cssNum(a,'marginRight');case'marginHeight':return cssNum(a,'marginTop')+cssNum(a,'marginBottom')}}function val(a,b){a=id(a);if(b==undefined)return a.value;a.value=b}function alpha(a,b,c,d){var e=b;if(c){e=alpha(a);a.runIt&&clearInterval(a.runIt);if(e!=b){c/=25;var f=(e-b)/c;var g=e>b?function(){e=e>b?e-f:(clearInterval(a.runIt),(d&&d()),b);alpha(a,e)}:function(){e=e<b?e-f:(clearInterval(a.runIt),(d&&d()),b);alpha(a,e)};a.runIt=setInterval(g,25);return a.runIt}}else{if(b>-1){if(h){a.style.filter='Alpha(opacity='+e*100+')'}else{a.style.opacity=e}}else{return a.opa>-1?a.opa:1}}a.opa=e}function addCSS(a){var d=document;var s=d.createElement('style');s.type='text/css';s.styleSheet&&(s.styleSheet.cssText=a)||s.appendChild(d.createTextNode(a));tag('head')[0].appendChild(s)}function html(a,b){a=id(a);if(typeof b=='undefined')return a.innerHTML;a.innerHTML=b}function inc(){each(arguments,function(i,t){if(t.lastIndexOf('.js')==(t.length-3)){document.write('<script src="'+t+'"></script>')}else if(t.lastIndexOf('.css')==(t.length-4)){document.write('<link rel="stylesheet" href="'+t+'"/>')}})}function click(n,a){id(n).onclick=a}function setCookie(a,b,c){var d=new Date();d.setTime(d.getTime()+(c||2592000000));document.cookie=a+'='+escape(b)+';expires='+d.toGMTString()}function getCookie(a){var b=document.cookie.match(new RegExp('(^| )'+a+'=([^;]*)(;|$)'));if(b!=null)return unescape(b[2]);return null}function delCookie(a){var b=new Date();b.setTime(b.getTime()-1);var c=getCookie(a);if(c!=null)document.cookie=a+'='+c+';expires='+b.toGMTString()}function loadImage(a,b){var c=new Image();c.src=a;if(c.complete){return b&&b.call(c,c)}c.onload=function(){b&&b.call(c,c)}};w.$IE=h;w.$=id;w.$1=tag;w.$2=cls;w.$3=attr;w.$e=each;w.$s=sty;w.$c=css;w.$cn=cssNum;w.$cs=cssSize;w.$ac=addCSS;w.$v=val;w.$a=alpha;w.$b=bind;w.$ub=unbind;w.$h=html;w.$inc=inc;w.$ck=click;w.$sC=setCookie;w.$gC=getCookie;w.$dC=delCookie;w.$type=$type;w.$log=log;w.$img=loadImage}(window);!function(w){var e={Linear:function(t,b,c,d){return c*t/d+b},QuadIn:function(t,b,c,d){return c*(t/=d)*t+b},QuadOut:function(t,b,c,d){return-c*(t/=d)*(t-2)+b},QuadInOut:function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b},CubicIn:function(t,b,c,d){return c*(t/=d)*t*t+b},CubicOut:function(t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},CubicInOut:function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b},CubicIn:function(t,b,c,d){return c*(t/=d)*t*t+b},CubicOut:function(t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},CubicInOut:function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b},QuartIn:function(t,b,c,d){return c*(t/=d)*t*t*t+b},QuartOut:function(t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b},QuartInOut:function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b},QuintIn:function(t,b,c,d){return c*(t/=d)*t*t*t*t+b},QuintOut:function(t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},QuintInOut:function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b},SineIn:function(t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b},SineOut:function(t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},SineInOut:function(t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b},ExpoIn:function(t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b},ExpoOut:function(t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},ExpoInOut:function(t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b},CircIn:function(t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b},CircOut:function(t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},CircInOut:function(t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b},ElasticIn:function(t,b,c,d,a,p){if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(!a||a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},ElasticOut:function(t,b,c,d,a,p){if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(!a||a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return(a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b)},ElasticInOut:function(t,b,c,d,a,p){if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(!a||a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},BackIn:function(t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},BackOut:function(t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},BackInOut:function(t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b},BounceIn:function(t,b,c,d){return c-BounceOut(d-t,0,c,d)+b},BounceOut:function(t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}},BounceInOut:function(t,b,c,d){if(t<d/2)return BounceIn(t*2,0,c,d)*.5+b;else return BounceOut(t*2-d,0,c,d)*.5+c*.5+b}};function moveT(n){var t,tr,end,ns=n.style;t={run:function(o){t.stop();var a,ox=typeof o.x,x0,oy=typeof o.y,y1,s0=0,xc=0,yc=0,mc=Math.ceil,type=e[o.type]||e.CircInOut,s1=o.t?mc(o.t/30):20;tr&&clearTimeout(tr);end=o.end;if(ox){x0=$cn(n,'left');xc=ox=='number'?o.x-x0:+o.x}if(oy){y0=$cn(n,'top');yc=oy=='number'?o.y-y0:+o.y}if(!xc&&!yc)return end&&end();if(xc&&yc){a=function(){ns.left=mc(type(s0,x0,xc,s1))+'px';ns.top=mc(type(s0,y0,yc,s1))+'px';if(s0<s1){s0++;tr=setTimeout(a,30)}else{end&&end()}}}else if(xc&&!yc){a=function(){ns.left=mc(type(s0,x0,xc,s1))+'px';if(s0<s1){s0++;tr=setTimeout(a,30)}else{end&&end()}}}else if(!xc&&yc){a=function(){ns.top=mc(type(s0,y0,yc,s1))+'px';if(s0<s1){s0++;tr=setTimeout(a,30)}else{end&&end()}}}a&&a()},stop:function(){tr&&clearTimeout(tr)}};if($s(n,'position')=='static')ns.position='absolute';ns.left=$cn(n,'left')+'px';ns.top=$cn(n,'top')+'px';n.$m=t;return t}function resizeT(n){var t,tr,ns=n.style;t={run:function(o){t.stop();var c,mc=Math.ceil,s0=0,ow=typeof o.w,oh=typeof o.h,s1=o.t?mc(o.t/30):14,wc,hc,w0,h0,x0=parseInt(ns.left),y0=parseInt(ns.top),end=o.end||0,type=e[o.type]||e.CircInOut,ws=o.ws>=0?o.ws:1,hs=o.hs>=0?o.hs:1;if(ow){w0=$cn(n,'width');wc=ow=='number'?o.w-w0:+o.w}if(oh){h0=$cn(n,'height');hc=oh=='number'?o.h-h0:+o.h}if(!wc&&!hc)return end&&end();if(wc&&hc){if(ws==1&&hs==1){c=function(){tr=setInterval(function(){ns.width=mc(type(s0,w0,wc,s1))+'px';ns.height=mc(type(s0,h0,hc,s1))+'px';s0++;if(s0>s1){clearInterval(tr);end&&end()}},30)}}else if(ws==1){c=function(){var a=$cn(n,'top');tr=setInterval(function(){var h=mc(type(s0,h0,hc,s1));ns.width=mc(type(s0,w0,wc,s1))+'px';ns.height=h+'px';ns.top=a+(hs-1)*h+h0+'px';s0++;if(s0>s1){clearInterval(tr);end&&end()}},30)}}else if(hs==1){c=function(){var a=$cn(n,'left');tr=setInterval(function(){var w=mc(type(s0,w0,wc,s1));ns.width=w+'px';ns.height=mc(type(s0,h0,hc,s1))+'px';ns.left=a+(ws-1)*w+w0+'px';s0++;if(s0>s1){clearInterval(tr);end&&end()}},30)}}else{c=function(){var a=$cn(n,'left');var b=$cn(n,'top');tr=setInterval(function(){var w=mc(type(s0,w0,wc,s1));var h=mc(type(s0,h0,hc,s1));ns.width=w+'px';ns.height=h+'px';ns.left=a+(ws-1)*w+w0+'px';ns.top=b+(hs-1)*h+h0+'px';s0++;if(s0>s1){clearInterval(tr);end&&end()}},30)}}}else if(wc&&!hc){if(ws==1){c=function(){var a=$cn(n,'left');tr=setInterval(function(){ns.width=mc(type(s0,w0,wc,s1))+'px';s0++;if(s0>s1){clearInterval(tr);end&&end()}},30)}}else{c=function(){var a=$cn(n,'left');tr=setInterval(function(){var w=mc(type(s0,w0,wc,s1));ns.width=w+'px';ns.left=a+(ws-1)*w+w0+'px';s0++;if(s0>s1){clearInterval(tr);end&&end()}},30)}}}else if(!wc&&hc){if(hs==1){c=function(){var a=$cn(n,'top');tr=setInterval(function(){ns.height=mc(type(s0,h0,hc,s1))+'px';s0++;if(s0>s1){clearInterval(tr);end&&end()}},30)}}else{c=function(){var a=$cn(n,'top');tr=setInterval(function(){var h=mc(type(s0,h0,hc,s1));ns.height=h+'px';ns.top=a+(hs-1)*h+h0+'px';s0++;if(s0>s1){clearInterval(tr);end&&end()}},30)}}}c()},stop:function(){tr&&clearInterval(tr)}};ns.width=$cs(n,'width')+'px';ns.height=$cs(n,'height')+'px';if($s(n,'position')=='static'){ns.position='absolute';ns.left=ns.top=0}ns.left=$cs(n,'left');ns.top=$cs(n,'top');ns.overflow='hidden';return t}w.$mT=moveT;w.$rT=resizeT}(window);
//End




//Start:CSS
CSS='body{    margin:0;    padding:0}#doc{    }#hosts{    width:600px;    margin:auto;}ul,h2,h1{margin:0;padding:0;font:bold 16px/2 "΢���ź�",Arial,verdana;}h1{    text-align:center;    font-size:24px;    padding:8px;}h1 span{    font-size:12px;    padding:12px 0 0 12px;    cursor:pointer;    }#overWin{    left:0;    top:0;    display:none;    width:100%;    background:#000;    position:absolute;    filter:alpha(opacity:60);}#editBox{    background:#e8f5fd;    border:1px solid #9ed6f6;    position:absolute;    display:none;    width:600px;    height:378px;    margin-left:-300px;    margin-top:-190px;    left:50%;    top:50%;    font:bold 18px/2 "΢���ź�",Arial,verdana;}#editBox p{    padding:4px 8px;    margin:0;}#editBox label{    display:block;}#title,#hostsVal{    width:572px;    border:1px solid #CCC;    font:bold 18px/2 "΢���ź�",Arial,verdana;    padding-left:8px;}#hostsVal{    height:200px;    overflow-y:scroll;    font-size:14px;}#hosts .box{    border:1px solid #9ed6f6;    margin-bottom:10px;    position:relative;}#hosts .ulB{    position:relative;}#hosts ul{overflow:hidden;position:relative;zoom:1;left:0px;top:0px;}#hosts h2{    background:#e8f5fd;    border-bottom:1px solid #9ed6f6;    font-size:20px;    padding-left:8px;    color:#000;}#hosts li{    padding-left:8px;    font-weight:normal;    color:#3d3d32;}#hosts .enable li{    color:#2C6288;}#hosts span{   position:absolute;   right:10px;   top:4px;   color:#000;   font:bold 18px/2 "΢���ź�",Arial,verdana;   cursor:pointer;}#hosts .open{    color:#4ab549;}#hosts .close{    color:red;}#hosts .enable .open{display:none;}#hosts .enable .close{display:inline;}#hosts .open{display:inline;}#hosts .close{display:none;}#hosts .view{    right:60px;}#hosts .edit{    right:110px;}#copyRight{    width:600px;    margin:20px auto;    padding-bottom:20px;    font-size:12px;    text-align:center; }#copyRight p{    padding:4px;margin:0;}'
//End






//Start:JS
_F={//function
    fileTxt:function(path,f,t){
        f = new ActiveXObject('Scripting.FileSystemObject');
        var of = f.OpenTextFile(path);
        t=of.ReadAll();
        of.Close();
        return t;
    },
    writeFile:function(path,txt,f){
        f = new ActiveXObject('Scripting.FileSystemObject');
        if(!f.FileExists(path)){
            f.CreateTextFile(path);
        }
        var ts = f.OpenTextFile(path,2,true,false);
		console.log(txt) ;
        ts.Write(txt);
        ts.Close();
    }

};
_D={//data
    HOSTS:[],
	Index:0,
	Box:[],
	Anime:[],
	BoxHeight:[],
    getHOSTS:function(){
        var h=_F.fileTxt(_C.filePath).split('#End'),
            h2=[],
            lg=h.length-1;
        for(var i=0;i<lg;i++){
            var h3=h[i].replace(/[\n\r]+/g,'<X001>').replace(/^<X001>|<X001>$/g,'').split('<X001>');
            var title=h3[0].replace('#Title:','');
            h3.shift();
            h2[i]={
                title:title,
                hosts:h3,
                enable:h3[0].indexOf('#')==0?0:1
            };
        }
        _D.HOSTS=h2;
    },
    setHOSTS:function(){
        var H=[];
        $e(_D.HOSTS,function(i,t){
            H[i]=''
                +'#Title:'+t.title+'\r\n'
                +t.hosts.join('\r\n')
                +'\r\n#End\r\n\r\n';
        });
        
        _F.writeFile(_C.filePath,H.join(''));
    },
    eidt:0,//[value=0|1|2|�޲���,�༭,���]
    
    


    end:0
};
_R={//render
	title:function(){
        var H=''
            +'<h1>host�ļ�������<span onclick="_A.add()">����»���</span></h1>';
        return H;
	},
	hosts:function(){
        var H='<div id="hosts">';
        $e(_D.HOSTS,function(i,t){
            H+=''
                +'<div class="box'+(t.enable?' enable':'')+'">'
                +'<h2>'+t.title+'</h2>'
                +'<span onclick="_A.edit('+i+');" class="edit">�༭</span>'
                +'<span class="view" onclick="_A.view('+i+',this)">�鿴</span>'
                +(t.enable?'<span class="close" onclick="_A.disable('+i+')">�ر�</span>':'<span class="open" onclick="_A.enable('+i+')">����</span>')
                +'<div class="ulB"><ul>'
                +'<li>'+t.hosts.join('</li><li>')+'</li>'
                +'</ul></div>'
                +'</div>'
        });
        H+='</div>';
        return H;
	},
	overWin:function(){
        var H=''
            +'<div id="overWin"></div>';
        return H;
	},
	editBox:function(){
        var H=''
            +'<div id="editBox">'
            +'<p><label>Title:</label><input id="title"/></p>'
            +'<p><label>Hosts:</label><textarea id="hostsVal"></textarea></p>'
            +'<p><input id="submitEdit" type="button" value="�ύ"/>'
            +'<input id="closeEdit" type="button" value="�ر�"/></p>'
            +'</div>'
            +'';
        return H;
	
	},
	copyRight:function(){
        var H='<div id="copyRight">'
            +'<p>����:'+_C.name+' �汾:'+_C.version+' </p>'
            +'<p>����ʱ��:'+_C.update+' <span style="cursor:pointer;color:green;" onclick="_A.update()">������</span></p>'
            +'</div>';
        return H;
	
	},
	addCSS:function(){
		$ac(CSS);
	}
};
_A={//action
    update:function(){
        try{
            var Config=_F.fileTxt(_C.config_URL);
            var D=eval('0,'+Config);
            if(_C.version!=D.version){
                if(confirm('��ǰ�汾:'+_C.version+',��⵽�°汾:'
                +D.version+'\n\n��ȷ��ִ�и���!')){
                    
                    var dat=_F.fileTxt('hosts.js');
                    dat=dat.replace(new RegExp(_C.splitStart+'Config[\\w\\W]*?'+_C.splitEnd,''),_C.splitStart+'Config\n_C='+Config+'\n'+_C.splitEnd+'\n');
                    if(_C.JS_lib!=D.JS_lib){
                        var JS_lib='';
                        $e(_C.JS_lib_URL,function(i,t){
                            JS_lib+=_F.fileTxt(t+'?'+(+new Date)).replace(/\/\*[\w\W]*?\*\//g,'')+';';
                        });
                        dat=dat.replace(new RegExp(_C.splitStart+'_JS_lib[\\w\\W]*?'+_C.splitEnd,''),_C.splitStart+'_JS_lib\n'+JS_lib+'\n'+_C.splitEnd+'\n');
                    }
                    
                    if(_C.CSS!=D.CSS){
                        var CSS=_F.fileTxt(_C.CSS_URL+'?'+(+new Date)).replace(/[\n\r]/g,''); 
                        dat=dat.replace(new RegExp(_C.splitStart+'CSS[\\w\\W]*?'+_C.splitEnd,''),_C.splitStart+'CSS\nCSS=\''+CSS+'\'\n'+_C.splitEnd+'\n'); 
                      
                    }
                    if(_C.JS!=D.JS){
                        var JS=_F.fileTxt(_C.JS_URL+'?'+(+new Date));
                        dat=dat.replace(new RegExp(_C.splitStart+'JS[\\w\\W]*?'+_C.splitEnd,''),JS);
                    }
                    
                    _F.writeFile('hosts.dll',dat);
					alert('�������!');
					location.reload();
                }
            }else{
                alert('��ǰ�Ѿ������°汾!');
            }
            
        }catch(e){
            alert('��������!');
        }
    },
    initUI:function(){
		_R.addCSS();
        var H=_R.title()
            +_R.hosts()
            +_R.overWin()
            +_R.editBox()
            +_R.copyRight();
        $h('doc',H);
        _A.bindEditBox();
    
    },
    showEidt:function(){
        var DE=document.documentElement,
            oS=$('overWin').style,
            eB=$('editBox'),
            A=$mT(eB),
            tr;
        _A.showEidt=function(){
            oS.height=0
            +DE.scrollTop
            +DE.clientHeight
            +'px';
            oS.display='block';
            eB.style.display='block';
            eB.style.left=DE.clientWidth/2+'px';
            clearTimeout(tr);
            tr=setTimeout(function(){
                A.run({y:DE.scrollTop+DE.clientHeight/2});
            },200);
        };
        _A.showEidt();
    },
    bindEditBox:function(){
        onscroll=onresize=function(){
            if(!_D.edit)return;
            _A.showEidt();
        
        };
        $('submitEdit').onclick=function(){
            _D.edit=0;
            _D.HOSTS[_D.Index].title=$v('title');
            _D.HOSTS[_D.Index].hosts=$v('hostsVal').split('\r\n');
            $('overWin').style.display='none';
            $('editBox').style.display='none';
            _D.setHOSTS();
			location.reload();
            //_A.initUI();
            //_A.initBoxAnime();
        };
        $('closeEdit').onclick=function(){
            _D.edit=0;
            $('overWin').style.display='none';
            $('editBox').style.display='none';
        };
    },
    initBoxAnime:function (){
        _D.Box=$1('ul');
        for(var i=0;i<_D.Box.length;i++){
            _D.BoxHeight[i]=$cs(_D.Box[i],'height');
            _D.Box[i].style.height=0;
            _D.Anime[i]=$rT(_D.Box[i]);
        }
    },
    view:function (i,t){
        if($h(t)=='�鿴'){
            _D.Anime[i].run({h:_D.BoxHeight[i]});
            $h(t,'����');
        }else{
            _D.Anime[i].run({h:0});
            $h(t,'�鿴');
        }
    },
    enable:function(i){
        _D.HOSTS[i].hosts=_D.HOSTS[i].hosts.join(',').replace(/#/g,'').split(',');
        _D.HOSTS[i].enable=1;
        _D.setHOSTS();
        location.reload();
    },
    disable:function(i){
        var H='#'+_D.HOSTS[i].hosts.join(',#');
        _D.HOSTS[i].hosts=H.replace(/,#$/,'').split(',');
        _D.HOSTS[i].enable=0;
        _D.setHOSTS();
        location.reload();
    },
    edit:function(i){
        _D.edit=1;
        _D.Index=i;
        _A.showEidt();
        $v('title',_D.HOSTS[i].title);
        $v('hostsVal',_D.HOSTS[i].hosts.join('\n\r'));
    },
    add:function(){
        alert('�ȴ����°汾...');
    },
    end:0
   
};
function Init(){
    //_A.update();
    _D.getHOSTS();
    _A.initUI();
    _A.initBoxAnime();  
}
Init();
//End