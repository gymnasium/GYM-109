// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
// Widow Tamer JS by Nathan C. Ford http://artequalswork.com
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('2={u:{C:\'p,1i,1j\',v:14,6:\'1k\',D:\'1l\',O:\'1m\'},E:P 1n(),1o:4(a){3(w.1p===\'1q\')2.F(a);2.G(\'1r\',4(){2.F(a)})},F:4(a){5 m=a.6;1s(m){k\'8-Q\':k\'R\':k\'8-S\':k\'T-x\':k\'U-x\':k V:3(a.D==\'H\'&&m&&m.I(\'8\')){W.X(\'Y 6. 1t 1u 11 H 1v 8.\')}7 2.J(a);12;1w:W.X(\'Y 6. 1x 11 1y 8-Q, 8-S, T-x, 1z U-x.\')}},J:4(a){5 b=P 1A();3(a){1B(i 1C 2.u){3(a[i])b[i]=(i==\'6\'&&a[i].I(\'-\'))?2.13(a[i]):a[i];7 b[i]=2.u[i]}}7 b=2.u;3(w.15){5 d=w.15(b.C),i=0;16(i<d.K){5 t=d[i];3(t.L>2.17(t,\'1D-1E\',18)){5 e=t.1F,j=e.K-1,c=1G;16(j>=0){5 f=2.y(e[j]);3(f!=V&&f.K>b.v){c=e[j];12}j--}t.19[b.6]=\'0\';5 g=2.y(c);3(c)2.M(c,t,g,0,b)}i++}2.G(b.O,4(){2.1a(b)})}},y:4(t){l t.N||t.1b},o:4(e,t){3(e.N)e.N=t;7 e.1b=t},M:4(c,t,a,i,b){5 h=t.L;2.o(c,a.1c(0,(b.v*-1)));3(t.L<h){3(b.6==\'R\')2.o(c,2.y(c)+a.1c((b.v*-1)).q(/\\s/g,\'\\1H\'));7{5 d=(b.6.I(\'8\'))?(i/10):(i/1I);3(b.D==\'H\')d=d*-1;t.19[b.6]=d+\'1J\';2.o(c,a);2.M(c,t,a,i+1,b)}}7 2.o(c,a)},1a:4(a){5 b="\'"+a.C.q(/[^a-1d-1K-9\\-\\.]/g,\'\')+"\'";1L(2.E[b]);2.E[b]=1M(4(){2.J(a)},1N)},G:4(e,f){3(B.1e)B.1e(\'1O\'+e,f);7 B.1P(e,f,18)},13:4(s){l s.q(/-([a-1d-Z])/,4(m){l m.q(\'-\',\'\').1f()})},17:4(t,s,n){5 r;3(t.1g)r=t.1g[s.q(/-([A-z])/1Q,4(a,b){l b.1f()})];7 3(B.1h)r=w.1R.1h(t,1S).1T(s);3(n)l 1U(r);7 l r}};',62,119,'||wt|if|function|var|method|else|padding||||||||||||case|return|||settext||replace||||opts|chars|document|spacing|text|||window|elements|dir|to|init|bind|neg|match|hunter|length|offsetHeight|tamer|innerText|event|new|right|nbsp|left|word|letter|undefined|console|log|Invalid|||use|break|fixmethod||querySelectorAll|while|getstyle|true|style|onevent|textContent|slice|zA|attachEvent|toUpperCase|currentStyle|getComputedStyle|li|dd|wordSpacing|pos|orientationchange|Array|fix|readyState|complete|load|switch|You|cannot|with|default|Please|either|or|Object|for|in|line|height|childNodes|false|u00a0|100|em|Z0|clearTimeout|setTimeout|250|on|addEventListener|gi|defaultView|null|getPropertyValue|parseFloat'.split('|'),0,{}))

// Classlist Polyfill
if("document" in self){if(!("classList" in document.createElement("_"))){(function(view){"use strict";if(!('Element' in view))return;var classListProp="classList",protoProp="prototype",elemCtrProto=view.Element[protoProp],objCtr=Object,strTrim=String[protoProp].trim||function(){return this.replace(/^\s+|\s+$/g,"")},arrIndexOf=Array[protoProp].indexOf||function(item){var
i=0,len=this.length;for(;i<len;i++){if(i in this&&this[i]===item){return i}}
return-1},DOMEx=function(type,message){this.name=type;this.code=DOMException[type];this.message=message},checkTokenAndGetIndex=function(classList,token){if(token===""){throw new DOMEx("SYNTAX_ERR","An invalid or illegal string was specified")}
if(/\s/.test(token)){throw new DOMEx("INVALID_CHARACTER_ERR","String contains an invalid character")}
return arrIndexOf.call(classList,token)},ClassList=function(elem){var
trimmedClasses=strTrim.call(elem.getAttribute("class")||""),classes=trimmedClasses?trimmedClasses.split(/\s+/):[],i=0,len=classes.length;for(;i<len;i++){this.push(classes[i])}
this._updateClassName=function(){elem.setAttribute("class",this.toString())}},classListProto=ClassList[protoProp]=[],classListGetter=function(){return new ClassList(this)};DOMEx[protoProp]=Error[protoProp];classListProto.item=function(i){return this[i]||null};classListProto.contains=function(token){token+="";return checkTokenAndGetIndex(this,token)!==-1};classListProto.add=function(){var
tokens=arguments,i=0,l=tokens.length,token,updated=!1;do{token=tokens[i]+"";if(checkTokenAndGetIndex(this,token)===-1){this.push(token);updated=!0}}
while(++i<l);if(updated){this._updateClassName()}};classListProto.remove=function(){var
tokens=arguments,i=0,l=tokens.length,token,updated=!1,index;do{token=tokens[i]+"";index=checkTokenAndGetIndex(this,token);while(index!==-1){this.splice(index,1);updated=!0;index=checkTokenAndGetIndex(this,token)}}
while(++i<l);if(updated){this._updateClassName()}};classListProto.toggle=function(token,force){token+="";var result=this.contains(token),method=result?force!==!0&&"remove":force!==!1&&"add";if(method){this[method](token)}
if(force===!0||force===!1){return force}else{return !result}};classListProto.toString=function(){return this.join(" ")};if(objCtr.defineProperty){var classListPropDesc={get:classListGetter,enumerable:!0,configurable:!0};try{objCtr.defineProperty(elemCtrProto,classListProp,classListPropDesc)}catch(ex){if(ex.number===-0x7FF5EC54){classListPropDesc.enumerable=!1;objCtr.defineProperty(elemCtrProto,classListProp,classListPropDesc)}}}else if(objCtr[protoProp].__defineGetter__){elemCtrProto.__defineGetter__(classListProp,classListGetter)}}(self))}else{(function(){"use strict";var testElement=document.createElement("_");testElement.classList.add("c1","c2");if(!testElement.classList.contains("c2")){var createMethod=function(method){var original=DOMTokenList.prototype[method];DOMTokenList.prototype[method]=function(token){var i,len=arguments.length;for(i=0;i<len;i++){token=arguments[i];original.call(this,token)}}};createMethod('add');createMethod('remove')}
testElement.classList.toggle("c3",!1);if(testElement.classList.contains("c3")){var _toggle=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(token,force){if(1 in arguments&&!this.contains(token)===!force){return force}else{return _toggle.call(this,token)}}}
testElement=null}())}}

/* Flexslider */
$(window).load(function(){
  try {
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails",
    start: function(slider){
      $('body').removeClass('loading');
    }
  });
  } catch(e) {
	  return;
  }
});

/* Widowtamer */
wt.fix({
	elements: 'p',
	chars: 12,
	method: 'nbsp',
	event: 'resize'
});

wt.fix({
	elements: 'blockquote',
	chars: 2,
	method: 'nbsp',
	event: 'resize'
});


/* Navigation functions */

function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}



document.getElementById('menu-toggle').addEventListener('click', function(e) {
    e.preventDefault();
	if (document.body.classList.contains('nav-is-active')) {
	    document.body.classList.remove('nav-is-active');
		var subMenus = document.getElementsByClassName('sub-menu'), len = subMenus.length;

		for (var i=0; i<len; i++) {
		// clean up on menu close
			buttonId = 'button-for-' + subMenus[i].getAttribute('id');
			document.getElementById(buttonId).remove();
			subMenus[i].removeAttribute('id');
			subMenus[i].removeAttribute('aria-expanded');
			subMenus[i].parentNode.classList.remove('has-children');

		}
	 } else {
		document.body.classList.add('nav-is-active');
		if (document.getElementsByClassName('sub-menu')) {
			
			var subMenus = document.getElementsByClassName('sub-menu'), len = subMenus.length;

			for (var i=0; i<len; i++) {

			    var anchorText = subMenus[i].parentNode.getElementsByTagName('a')[0].innerHTML;
			    var idSlug = anchorText.toLowerCase().replace(/ /g,"-");
			    var randomNumber= Math.floor( Math.random()*9999 );
			    var slug = idSlug + randomNumber;

				subMenus[i].setAttribute('id', slug);
				subMenus[i].setAttribute('aria-expanded', 'false');
				subMenus[i].parentNode.classList.add('has-children');
	
				var subMenuToggle = document.createElement('button');
				subMenuToggle.innerHTML = 'open';
				subMenuToggle.classList.add('ui-toggle-button');
				subMenuToggle.setAttribute('type', 'button');
				subMenuToggle.setAttribute('data-text', 'close');
				subMenuToggle.setAttribute('aria-controls', slug);
				subMenuToggle.setAttribute('id', 'button-for-' + slug);
				
				var ref = subMenus[i];
				
				insertAfter(subMenuToggle, ref);
				
				subMenuToggle.addEventListener('click', function(e) {
					e.preventDefault();
					targetId = subMenuToggle.getAttribute('aria-controls');
					if (document.getElementById(targetId).getAttribute('aria-expanded') == 'false') {
						document.getElementById(targetId).setAttribute('aria-expanded', 'true');
						subMenuToggle.textContent = 'close';
						subMenuToggle.setAttribute('data-text', 'open');
						document.getElementById(targetId).getElementsByTagName('a')[0].focus();
					} else {
						document.getElementById(targetId).setAttribute('aria-expanded', 'false');
						subMenuToggle.textContent = 'open';
						subMenuToggle.setAttribute('data-text', 'close');
					}
				});

				
			}
			
		}
	}
});

// make dropdown menus tabbable - thanks Scott O'Hara!

(function ( w, doc ) {

  // Enable strict mode
  "use strict";

  // Local object for method references
  var DropNav = {};

  // Namespace it up yo
  DropNav.ns = "Drop Navigation";

  // the main event...err..function
  DropNav.init = function () {

    var hasDrop = doc.querySelectorAll('.nav-menu > .menu-item .sub-menu'),
      hasDropLinks = doc.querySelectorAll('.sub-menu a'),
      hasDropCount = hasDrop.length,
      hasDropLinksCount = hasDropLinks.length,
      i;

    if ( hasDropCount > 0 ) {

      for ( i = 0; i < hasDropCount; i++ ) { // i++  =  i = i + 1 

        var drop = hasDrop[i],
          firstDropLink = drop.querySelectorAll('.sub-menu a')[0];

        drop.parentNode.setAttribute('aria-haspopup', 'true');
        // drop.querySelector('ul').setAttribute('aria-label', 'Sub Menu');
        firstDropLink.innerHTML = ' <span class="visuallyhidden">Sub menu, </span>' + firstDropLink.innerHTML; //*

      } //for

      for ( i = 0; i < hasDropLinksCount; i++ ) {

        var dropLinks = hasDropLinks[i];

        dropLinks.addEventListener('focus', function ( e ) {
          this.parentNode.parentNode.classList.add('has-focus');
        });

        dropLinks.addEventListener('blur', function ( e ) {
          this.parentNode.parentNode.classList.remove('has-focus');
        });

      } //for

    } //if

  }; //init

  DropNav.init();

})( this, this.document );

/* 
  Created Aug 22, 2016
  
  Revised Aug 23, 2016
  * https://codepen.io/svinkle
  Switched from aria label to adding visually hidden "sub menu" text to the first item in the drop down, to ensure that all screen readers would accurately announce "sub menu"
  
  Fixed z-index of primary link & drop menu to ensure that the primary link always appeared on top of the drop menu
  
  Reveal drop menu on focus of primary link, to make it more apparent that a sub menu exists. suppose this could have been done with a down arrow on the primary link. but nope :) 
*/
