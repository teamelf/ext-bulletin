/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */
(function(){function e(e){this.tokens=[],this.tokens.links={},this.options=e||p.defaults,this.rules=u.normal,this.options.gfm&&(this.options.tables?this.rules=u.tables:this.rules=u.gfm)}function t(e,t){if(this.options=t||p.defaults,this.links=e,this.rules=c.normal,this.renderer=this.options.renderer||new n,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=c.breaks:this.rules=c.gfm:this.options.pedantic&&(this.rules=c.pedantic)}function n(e){this.options=e||{}}function r(e){this.tokens=[],this.token=null,this.options=e||p.defaults,this.options.renderer=this.options.renderer||new n,this.renderer=this.options.renderer,this.renderer.options=this.options}function s(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function i(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function l(e,t){return e=e.source,t=t||"",function n(r,s){return r?(s=s.source||s,s=s.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(r,s),n):new RegExp(e,t)}}function o(e,t){return baseUrls[" "+e]||(/^[^:]+:\/*[^\/]*$/.test(e)?baseUrls[" "+e]=e+"/":baseUrls[" "+e]=e.replace(/[^\/]*$/,"")),e=baseUrls[" "+e],"//"===t.slice(0,2)?e.replace(/:[^]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^\/]*)[^]*/,"$1")+t:e+t}function h(){}function a(e){for(var t,n,r=1;r<arguments.length;r++){t=arguments[r];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}function p(t,n,i){if(i||"function"==typeof n){i||(i=n,n=null),n=a({},p.defaults,n||{});var l,o,h=n.highlight,u=0;try{l=e.lex(t,n)}catch(c){return i(c)}o=l.length;var g=function(e){if(e)return n.highlight=h,i(e);var t;try{t=r.parse(l,n)}catch(s){e=s}return n.highlight=h,e?i(e):i(null,t)};if(!h||h.length<3)return g();if(delete n.highlight,!o)return g();for(;u<l.length;u++)!function(e){return"code"!==e.type?--o||g():h(e.text,e.lang,function(t,n){return t?g(t):null==n||n===e.text?--o||g():(e.text=n,e.escaped=!0,void(--o||g()))})}(l[u])}else try{return n&&(n=a({},p.defaults,n)),r.parse(e.lex(t,n),n)}catch(c){if(c.message+="\nPlease report this to https://github.com/chjj/marked.",(n||p.defaults).silent)return"<p>An error occured:</p><pre>"+s(c.message+"",!0)+"</pre>";throw c}}var u={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:h,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:h,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:h,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};u.bullet=/(?:[*+-]|\d+\.)/,u.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,u.item=l(u.item,"gm")(/bull/g,u.bullet)(),u.list=l(u.list)(/bull/g,u.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+u.def.source+")")(),u._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",u.html=l(u.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,u._tag)(),u.paragraph=l(u.paragraph)("hr",u.hr)("heading",u.heading)("lheading",u.lheading)("blockquote",u.blockquote)("tag","<"+u._tag)("def",u.def)(),u.normal=a({},u),u.gfm=a({},u.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),u.gfm.paragraph=l(u.paragraph)("(?!","(?!"+u.gfm.fences.source.replace("\\1","\\2")+"|"+u.list.source.replace("\\1","\\3")+"|")(),u.tables=a({},u.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),e.rules=u,e.lex=function(t,n){var r=new e(n);return r.lex(t)},e.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},e.prototype.token=function(e,t,n){for(var r,s,i,l,o,h,a,p,c,e=e.replace(/^ +$/gm,"");e;)if((i=this.rules.newline.exec(e))&&(e=e.substring(i[0].length),i[0].length>1&&this.tokens.push({type:"space"})),i=this.rules.code.exec(e))e=e.substring(i[0].length),i=i[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?i:i.replace(/\n+$/,"")});else if(i=this.rules.fences.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"code",lang:i[2],text:i[3]||""});else if(i=this.rules.heading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:i[1].length,text:i[2]});else if(t&&(i=this.rules.nptable.exec(e))){for(e=e.substring(i[0].length),h={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/\n$/,"").split("\n")},p=0;p<h.align.length;p++)/^ *-+: *$/.test(h.align[p])?h.align[p]="right":/^ *:-+: *$/.test(h.align[p])?h.align[p]="center":/^ *:-+ *$/.test(h.align[p])?h.align[p]="left":h.align[p]=null;for(p=0;p<h.cells.length;p++)h.cells[p]=h.cells[p].split(/ *\| */);this.tokens.push(h)}else if(i=this.rules.lheading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:"="===i[2]?1:2,text:i[1]});else if(i=this.rules.hr.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"hr"});else if(i=this.rules.blockquote.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"blockquote_start"}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,t,!0),this.tokens.push({type:"blockquote_end"});else if(i=this.rules.list.exec(e)){for(e=e.substring(i[0].length),l=i[2],this.tokens.push({type:"list_start",ordered:l.length>1}),i=i[0].match(this.rules.item),r=!1,c=i.length,p=0;p<c;p++)h=i[p],a=h.length,h=h.replace(/^ *([*+-]|\d+\.) +/,""),~h.indexOf("\n ")&&(a-=h.length,h=this.options.pedantic?h.replace(/^ {1,4}/gm,""):h.replace(new RegExp("^ {1,"+a+"}","gm"),"")),this.options.smartLists&&p!==c-1&&(o=u.bullet.exec(i[p+1])[0],l===o||l.length>1&&o.length>1||(e=i.slice(p+1).join("\n")+e,p=c-1)),s=r||/\n\n(?!\s*$)/.test(h),p!==c-1&&(r="\n"===h.charAt(h.length-1),s||(s=r)),this.tokens.push({type:s?"loose_item_start":"list_item_start"}),this.token(h,!1,n),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(i=this.rules.html.exec(e))e=e.substring(i[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===i[1]||"script"===i[1]||"style"===i[1]),text:i[0]});else if(!n&&t&&(i=this.rules.def.exec(e)))e=e.substring(i[0].length),this.tokens.links[i[1].toLowerCase()]={href:i[2],title:i[3]};else if(t&&(i=this.rules.table.exec(e))){for(e=e.substring(i[0].length),h={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/(?: *\| *)?\n$/,"").split("\n")},p=0;p<h.align.length;p++)/^ *-+: *$/.test(h.align[p])?h.align[p]="right":/^ *:-+: *$/.test(h.align[p])?h.align[p]="center":/^ *:-+ *$/.test(h.align[p])?h.align[p]="left":h.align[p]=null;for(p=0;p<h.cells.length;p++)h.cells[p]=h.cells[p].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(h)}else if(t&&(i=this.rules.paragraph.exec(e)))e=e.substring(i[0].length),this.tokens.push({type:"paragraph",text:"\n"===i[1].charAt(i[1].length-1)?i[1].slice(0,-1):i[1]});else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"text",text:i[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var c={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:h,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)([\s\S]*?[^`])\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:h,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};c._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,c._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,c.link=l(c.link)("inside",c._inside)("href",c._href)(),c.reflink=l(c.reflink)("inside",c._inside)(),c.normal=a({},c),c.pedantic=a({},c.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),c.gfm=a({},c.normal,{escape:l(c.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:l(c.text)("]|","~]|")("|","|https?://|")()}),c.breaks=a({},c.gfm,{br:l(c.br)("{2,}","*")(),text:l(c.gfm.text)("{2,}","*")()}),t.rules=c,t.output=function(e,n,r){var s=new t(n,r);return s.output(e)},t.prototype.output=function(e){for(var t,n,r,i,l="";e;)if(i=this.rules.escape.exec(e))e=e.substring(i[0].length),l+=i[1];else if(i=this.rules.autolink.exec(e))e=e.substring(i[0].length),"@"===i[2]?(n=s(":"===i[1].charAt(6)?this.mangle(i[1].substring(7)):this.mangle(i[1])),r=this.mangle("mailto:")+n):(n=s(i[1]),r=n),l+=this.renderer.link(r,null,n);else if(this.inLink||!(i=this.rules.url.exec(e))){if(i=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(i[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(i[0])&&(this.inLink=!1),e=e.substring(i[0].length),l+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):s(i[0]):i[0];else if(i=this.rules.link.exec(e))e=e.substring(i[0].length),this.inLink=!0,l+=this.outputLink(i,{href:i[2],title:i[3]}),this.inLink=!1;else if((i=this.rules.reflink.exec(e))||(i=this.rules.nolink.exec(e))){if(e=e.substring(i[0].length),t=(i[2]||i[1]).replace(/\s+/g," "),t=this.links[t.toLowerCase()],!t||!t.href){l+=i[0].charAt(0),e=i[0].substring(1)+e;continue}this.inLink=!0,l+=this.outputLink(i,t),this.inLink=!1}else if(i=this.rules.strong.exec(e))e=e.substring(i[0].length),l+=this.renderer.strong(this.output(i[2]||i[1]));else if(i=this.rules.em.exec(e))e=e.substring(i[0].length),l+=this.renderer.em(this.output(i[2]||i[1]));else if(i=this.rules.code.exec(e))e=e.substring(i[0].length),l+=this.renderer.codespan(s(i[2].trim(),!0));else if(i=this.rules.br.exec(e))e=e.substring(i[0].length),l+=this.renderer.br();else if(i=this.rules.del.exec(e))e=e.substring(i[0].length),l+=this.renderer.del(this.output(i[1]));else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),l+=this.renderer.text(s(this.smartypants(i[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else e=e.substring(i[0].length),n=s(i[1]),r=n,l+=this.renderer.link(r,null,n);return l},t.prototype.outputLink=function(e,t){var n=s(t.href),r=t.title?s(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,s(e[1]))},t.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},t.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,s=0;s<r;s++)t=e.charCodeAt(s),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},n.prototype.code=function(e,t,n){if(this.options.highlight){var r=this.options.highlight(e,t);null!=r&&r!==e&&(n=!0,e=r)}return t?'<pre><code class="'+this.options.langPrefix+s(t,!0)+'">'+(n?e:s(e,!0))+"\n</code></pre>\n":"<pre><code>"+(n?e:s(e,!0))+"\n</code></pre>"},n.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},n.prototype.html=function(e){return e},n.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},n.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},n.prototype.list=function(e,t){var n=t?"ol":"ul";return"<"+n+">\n"+e+"</"+n+">\n"},n.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},n.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},n.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},n.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},n.prototype.tablecell=function(e,t){var n=t.header?"th":"td",r=t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">";return r+e+"</"+n+">\n"},n.prototype.strong=function(e){return"<strong>"+e+"</strong>"},n.prototype.em=function(e){return"<em>"+e+"</em>"},n.prototype.codespan=function(e){return"<code>"+e+"</code>"},n.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},n.prototype.del=function(e){return"<del>"+e+"</del>"},n.prototype.link=function(e,t,n){if(this.options.sanitize){try{var r=decodeURIComponent(i(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(s){return""}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return""}this.options.baseUrl&&!originIndependentUrl.test(e)&&(e=o(this.options.baseUrl,e));var l='<a href="'+e+'"';return t&&(l+=' title="'+t+'"'),l+=">"+n+"</a>"},n.prototype.image=function(e,t,n){this.options.baseUrl&&!originIndependentUrl.test(e)&&(e=o(this.options.baseUrl,e));var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},n.prototype.text=function(e){return e},r.parse=function(e,t,n){var s=new r(t,n);return s.parse(e)},r.prototype.parse=function(e){this.inline=new t(e.links,this.options,this.renderer),this.tokens=e.reverse();for(var n="";this.next();)n+=this.tok();return n},r.prototype.next=function(){return this.token=this.tokens.pop()},r.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},r.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},r.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,s,i="",l="";for(n="",e=0;e<this.token.header.length;e++)r={header:!0,align:this.token.align[e]},n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(i+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",s=0;s<t.length;s++)n+=this.renderer.tablecell(this.inline.output(t[s]),{header:!1,align:this.token.align[s]});l+=this.renderer.tablerow(n)}return this.renderer.table(i,l);case"blockquote_start":for(var l="";"blockquote_end"!==this.next().type;)l+=this.tok();return this.renderer.blockquote(l);case"list_start":for(var l="",o=this.token.ordered;"list_end"!==this.next().type;)l+=this.tok();return this.renderer.list(l,o);case"list_item_start":for(var l="";"list_item_end"!==this.next().type;)l+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(l);case"loose_item_start":for(var l="";"list_item_end"!==this.next().type;)l+=this.tok();return this.renderer.listitem(l);case"html":var h=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(h);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}},baseUrls={},originIndependentUrl=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i,h.exec=h,p.options=p.setOptions=function(e){return a(p.defaults,e),p},p.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new n,xhtml:!1,baseUrl:null},p.Parser=r,p.parser=r.parse,p.Renderer=n,p.Lexer=e,p.lexer=e.lex,p.InlineLexer=t,p.inlineLexer=t.output,p.parse=p,"undefined"!=typeof module&&"object"==typeof exports?module.exports=p:"function"==typeof define&&define.amd?define(function(){return p}):this.marked=p}).call(function(){return this||("undefined"!=typeof window?window:global)}());
'use strict';

System.register('teamelf/bulletin/Bulletin', ['teamelf/Error', 'teamelf/bulletin/BulletinList', 'teamelf/bulletin/BulletinItem'], function (_export, _context) {
  "use strict";

  var RedirectAs404, BulletinList, BulletinItem, _createClass, _ReactRouterDOM, Switch, Route, _class;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_teamelfError) {
      RedirectAs404 = _teamelfError.RedirectAs404;
    }, function (_teamelfBulletinBulletinList) {
      BulletinList = _teamelfBulletinBulletinList.default;
    }, function (_teamelfBulletinBulletinItem) {
      BulletinItem = _teamelfBulletinBulletinItem.default;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _ReactRouterDOM = ReactRouterDOM;
      Switch = _ReactRouterDOM.Switch;
      Route = _ReactRouterDOM.Route;

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.routes = [{ path: '/bulletin', exact: true, component: BulletinList }, { path: '/bulletin/:id', exact: true, component: BulletinItem }];
          return _this;
        }

        _createClass(_class, [{
          key: 'render',
          value: function render() {
            return React.createElement(
              Switch,
              null,
              this.routes.map(function (o) {
                return React.createElement(Route, { exact: o.exact, path: o.path, component: o.component });
              }),
              React.createElement(Route, { component: RedirectAs404 })
            );
          }
        }]);

        return _class;
      }(React.Component);

      _export('default', _class);
    }
  };
});
'use strict';

System.register('teamelf/bulletin/BulletinCardItem', ['teamelf/bulletin/BulletinProcess', 'teamelf/bulletin/BulletinFeedback'], function (_export, _context) {
  "use strict";

  var BulletinProcess, FeedbackTagUnread, FeedbackTagNoresponse, FeedbackTagConfirm, FeedbackTagRefuse, _createClass, _antd, Card, Divider, _class;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_teamelfBulletinBulletinProcess) {
      BulletinProcess = _teamelfBulletinBulletinProcess.default;
    }, function (_teamelfBulletinBulletinFeedback) {
      FeedbackTagUnread = _teamelfBulletinBulletinFeedback.FeedbackTagUnread;
      FeedbackTagNoresponse = _teamelfBulletinBulletinFeedback.FeedbackTagNoresponse;
      FeedbackTagConfirm = _teamelfBulletinBulletinFeedback.FeedbackTagConfirm;
      FeedbackTagRefuse = _teamelfBulletinBulletinFeedback.FeedbackTagRefuse;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _antd = antd;
      Card = _antd.Card;
      Divider = _antd.Divider;

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class() {
          _classCallCheck(this, _class);

          return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
          key: 'render',
          value: function render() {
            var _this2 = this;

            return React.createElement(
              Card,
              {
                style: { marginBottom: 16 },
                title: this.props.title,
                extra: moment.unix(this.props.createdAt).format('YYYY-MM-DD'),
                hoverable: true,
                onClick: function onClick(e) {
                  return window.location.href = '/bulletin/' + _this2.props.id;
                }
              },
              React.createElement(
                'div',
                null,
                this.props.abstract
              ),
              React.createElement(Divider, null),
              React.createElement(BulletinProcess, { isDraft: this.props.isDraft }),
              React.createElement(Divider, null),
              React.createElement(
                'div',
                null,
                React.createElement(FeedbackTagUnread, { number: this.props.statistics.unread }),
                React.createElement(FeedbackTagNoresponse, { number: this.props.statistics.noresponse }),
                React.createElement(FeedbackTagConfirm, { number: this.props.statistics.confirm }),
                React.createElement(FeedbackTagRefuse, { number: this.props.statistics.refuse })
              )
            );
          }
        }]);

        return _class;
      }(React.Component);

      _export('default', _class);
    }
  };
});
"use strict";

System.register("teamelf/bulletin/BulletinFeedback", [], function (_export, _context) {
  "use strict";

  var _slicedToArray, _createClass, _antd, Card, Table, Tag, Checkbox, FeedbackTagUnread, FeedbackTagNoresponse, FeedbackTagConfirm, FeedbackTagRefuse, _class;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [],
    execute: function () {
      _slicedToArray = function () {
        function sliceIterator(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;

          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);

              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"]) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }

          return _arr;
        }

        return function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();

      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _antd = antd;
      Card = _antd.Card;
      Table = _antd.Table;
      Tag = _antd.Tag;
      Checkbox = _antd.Checkbox;

      _export("FeedbackTagUnread", FeedbackTagUnread = function FeedbackTagUnread(props) {
        return React.createElement(
          Tag,
          null,
          props.number,
          "\u672A\u67E5\u9605"
        );
      });

      _export("FeedbackTagUnread", FeedbackTagUnread);

      _export("FeedbackTagNoresponse", FeedbackTagNoresponse = function FeedbackTagNoresponse(props) {
        return React.createElement(
          Tag,
          { color: "orange" },
          props.number,
          "\u5DF2\u8BFB"
        );
      });

      _export("FeedbackTagNoresponse", FeedbackTagNoresponse);

      _export("FeedbackTagConfirm", FeedbackTagConfirm = function FeedbackTagConfirm(props) {
        return React.createElement(
          Tag,
          { color: "green" },
          props.number,
          "\u786E\u8BA4"
        );
      });

      _export("FeedbackTagConfirm", FeedbackTagConfirm);

      _export("FeedbackTagRefuse", FeedbackTagRefuse = function FeedbackTagRefuse(props) {
        return React.createElement(
          Tag,
          { color: "red" },
          props.number,
          "\u62D2\u7EDD"
        );
      });

      _export("FeedbackTagRefuse", FeedbackTagRefuse);

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.state = {
            filter: ['unread', 'noresponse', 'confirm', 'refuse']
          };
          return _this;
        }

        _createClass(_class, [{
          key: "getDataSource",
          value: function getDataSource() {
            var _this2 = this;

            var dataSource = [];
            var getStatus = function getStatus(feedback) {
              if (feedback.checked === true) {
                return ['confirm', React.createElement(FeedbackTagConfirm, null)];
              } else if (feedback.checked === false) {
                return ['refuse', React.createElement(FeedbackTagRefuse, null)];
              } else {
                if (feedback.updatedAt === null) {
                  return ['unread', React.createElement(FeedbackTagUnread, null)];
                } else {
                  return ['noresponse', React.createElement(FeedbackTagNoresponse, null)];
                }
              }
            };

            var _loop = function _loop(feedback) {
              var _getStatus = getStatus(feedback),
                  _getStatus2 = _slicedToArray(_getStatus, 2),
                  status = _getStatus2[0],
                  tag = _getStatus2[1];

              if (_this2.state.filter.find(function (o) {
                return o === status;
              })) {
                dataSource.push({
                  receiver: feedback.receiver.name,
                  status: tag,
                  remark: feedback.remark
                });
              }
            };

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = this.props.feedbacks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var feedback = _step.value;

                _loop(feedback);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            return dataSource;
          }
        }, {
          key: "render",
          value: function render() {
            var _this3 = this;

            var columns = [{ title: '接收人', dataIndex: 'receiver', key: 'receiver' }, { title: '状态', dataIndex: 'status', key: 'status' }, { title: '备注', dataIndex: 'remark', key: 'remark' }];
            var filterOptions = [{ label: React.createElement(FeedbackTagUnread, { number: this.props.statistics.unread }), value: 'unread' }, { label: React.createElement(FeedbackTagNoresponse, { number: this.props.statistics.noresponse }), value: 'noresponse' }, { label: React.createElement(FeedbackTagConfirm, { number: this.props.statistics.confirm }), value: 'confirm' }, { label: React.createElement(FeedbackTagRefuse, { number: this.props.statistics.refuse }), value: 'refuse' }];
            return React.createElement(
              Card,
              null,
              React.createElement(
                "div",
                { style: { marginBottom: 16 } },
                React.createElement(Checkbox.Group, {
                  options: filterOptions,
                  value: this.state.filter,
                  onChange: function onChange(e) {
                    return _this3.setState({ filter: e });
                  }
                })
              ),
              React.createElement(
                "div",
                { style: { margin: '0 -24px -24px' } },
                React.createElement(Table, {
                  columns: columns,
                  dataSource: this.getDataSource(),
                  pagination: false
                })
              )
            );
          }
        }]);

        return _class;
      }(React.Component);

      _export("default", _class);
    }
  };
});
'use strict';

System.register('teamelf/bulletin/BulletinItem', ['teamelf/layout/Page', 'teamelf/bulletin/BulletinProcess', 'teamelf/bulletin/BulletinPreview', 'teamelf/bulletin/BulletinFeedback'], function (_export, _context) {
  "use strict";

  var Page, BulletinProcess, BulletinPreview, BulletinFeedback, _typeof, _createClass, _antd, Row, Col, Button, Input, Checkbox, TreeSelect, Icon, _class;

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_teamelfLayoutPage) {
      Page = _teamelfLayoutPage.default;
    }, function (_teamelfBulletinBulletinProcess) {
      BulletinProcess = _teamelfBulletinBulletinProcess.default;
    }, function (_teamelfBulletinBulletinPreview) {
      BulletinPreview = _teamelfBulletinBulletinPreview.default;
    }, function (_teamelfBulletinBulletinFeedback) {
      BulletinFeedback = _teamelfBulletinBulletinFeedback.default;
    }],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };

      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _antd = antd;
      Row = _antd.Row;
      Col = _antd.Col;
      Button = _antd.Button;
      Input = _antd.Input;
      Checkbox = _antd.Checkbox;
      TreeSelect = _antd.TreeSelect;
      Icon = _antd.Icon;

      _class = function (_Page) {
        _inherits(_class, _Page);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.state = {
            autoSave: true,
            saving: false,
            publishing: false,
            deleting: false,
            changed: false,
            refreshing: false,
            autoRefresh: false,
            mentionList: [],
            bulletin: null,
            feedbacks: []
          };
          _this.fetchMentionList();
          _this.fetchBulletin();
          return _this;
        }

        _createClass(_class, [{
          key: 'fetchMentionList',
          value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var roles, _loop, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, member;

              return regeneratorRuntime.wrap(function _callee$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return axios.get('role');

                    case 2:
                      _context2.t0 = function (o) {
                        return {
                          label: o.name,
                          value: 'r_' + o.slug,
                          key: 'r_' + o.slug,
                          children: []
                        };
                      };

                      roles = _context2.sent.data.map(_context2.t0);

                      _loop = function _loop(member) {
                        var role = roles.find(function (o) {
                          return o.value === 'r_' + member.role.slug;
                        });
                        role.children.push({
                          label: member.name,
                          value: 'm_' + member.username,
                          key: 'm_' + member.username
                        });
                      };

                      _iteratorNormalCompletion = true;
                      _didIteratorError = false;
                      _iteratorError = undefined;
                      _context2.prev = 8;
                      _context2.next = 11;
                      return axios.get('member');

                    case 11:
                      _context2.t1 = Symbol.iterator;
                      _iterator = _context2.sent.data[_context2.t1]();

                    case 13:
                      if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                        _context2.next = 19;
                        break;
                      }

                      member = _step.value;

                      _loop(member);

                    case 16:
                      _iteratorNormalCompletion = true;
                      _context2.next = 13;
                      break;

                    case 19:
                      _context2.next = 25;
                      break;

                    case 21:
                      _context2.prev = 21;
                      _context2.t2 = _context2['catch'](8);
                      _didIteratorError = true;
                      _iteratorError = _context2.t2;

                    case 25:
                      _context2.prev = 25;
                      _context2.prev = 26;

                      if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                      }

                    case 28:
                      _context2.prev = 28;

                      if (!_didIteratorError) {
                        _context2.next = 31;
                        break;
                      }

                      throw _iteratorError;

                    case 31:
                      return _context2.finish(28);

                    case 32:
                      return _context2.finish(25);

                    case 33:
                      this.setState({ mentionList: roles });

                    case 34:
                    case 'end':
                      return _context2.stop();
                  }
                }
              }, _callee, this, [[8, 21, 25, 33], [26,, 28, 32]]);
            }));

            function fetchMentionList() {
              return _ref.apply(this, arguments);
            }

            return fetchMentionList;
          }()
        }, {
          key: 'fetchBulletin',
          value: function fetchBulletin() {
            var _this2 = this;

            var id = this.props.match.params.id;
            return axios.get('bulletin/' + id).then(function (r) {
              _this2.setState({ bulletin: r.data });
              if (r.data.isDraft) {
                _this2.autoSave();
              } else {
                _this2.setState({ autoRefresh: true });
                _this2.autoRefreshFeedback();
              }
            });
          }
        }, {
          key: 'save',
          value: function save() {
            var _this3 = this;

            var data = {
              title: this.state.bulletin.title || '',
              content: this.state.bulletin.content || '',
              receivers: this.state.bulletin.receivers || []
            };
            var id = this.props.match.params.id;
            this.setState({ saving: true });
            return axios.put('bulletin/' + id, data).then(function (r) {
              _this3.setState({ saving: false, changed: false });
              _this3.fetchBulletin();
            }).catch(function (e) {
              _this3.setState({ saving: false });
            });
          }
        }, {
          key: 'publish',
          value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var id;
              return regeneratorRuntime.wrap(function _callee2$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      id = this.props.match.params.id;
                      _context3.next = 3;
                      return this.save();

                    case 3:
                      antd.Modal.confirm({
                        title: '不可撤销',
                        content: '确定要发布公告么？一旦发布，会逐一通知列表中的成员',
                        onOk: function onOk() {
                          _this4.setState({ publishing: true });
                          return axios.put('bulletin/' + id + '/publish').then(function (r) {
                            window.location.reload();
                          }).catch(function (e) {
                            _this4.setState({ publishing: false });
                          });
                        }
                      });

                    case 4:
                    case 'end':
                      return _context3.stop();
                  }
                }
              }, _callee2, this);
            }));

            function publish() {
              return _ref2.apply(this, arguments);
            }

            return publish;
          }()
        }, {
          key: 'del',
          value: function del() {
            var _this5 = this;

            antd.Modal.confirm({
              title: '不可恢复',
              content: '确定要删除么？该操作可能无法恢复',
              onOk: function onOk() {
                var id = _this5.props.match.params.id;
                _this5.setState({ deleting: true });
                return axios.delete('bulletin/' + id).then(function (r) {
                  _this5.setState({ deleting: false });
                  window.location.href = '/bulletin';
                }).catch(function (e) {
                  _this5.setState({ deleting: false });
                });
              }
            });
          }
        }, {
          key: 'autoSave',
          value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!(this.state.changed && this.state.autoSave)) {
                        _context4.next = 3;
                        break;
                      }

                      _context4.next = 3;
                      return this.save();

                    case 3:
                      setTimeout(this.autoSave.bind(this), 60000);

                    case 4:
                    case 'end':
                      return _context4.stop();
                  }
                }
              }, _callee3, this);
            }));

            function autoSave() {
              return _ref3.apply(this, arguments);
            }

            return autoSave;
          }()
        }, {
          key: 'fetchFeedback',
          value: function fetchFeedback() {
            var _this6 = this;

            var id = this.props.match.params.id;
            this.setState({ refreshing: true });
            return axios.get('bulletin/' + id + '/feedback').then(function (r) {
              _this6.setState({ feedbacks: r.data });
              _this6.setState({ refreshing: false });
            }).catch(function (e) {
              _this6.setState({ refreshing: false });
            });
          }
        }, {
          key: 'autoRefreshFeedback',
          value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (!this.state.autoRefresh) {
                        _context5.next = 3;
                        break;
                      }

                      _context5.next = 3;
                      return this.fetchFeedback();

                    case 3:
                      setTimeout(this.autoRefreshFeedback.bind(this), 60000);

                    case 4:
                    case 'end':
                      return _context5.stop();
                  }
                }
              }, _callee4, this);
            }));

            function autoRefreshFeedback() {
              return _ref4.apply(this, arguments);
            }

            return autoRefreshFeedback;
          }()
        }, {
          key: 'title',
          value: function title() {
            if (this.state.bulletin) {
              return this.state.bulletin.title;
            }
          }
        }, {
          key: 'description',
          value: function description() {
            var _this7 = this;

            if (this.state.bulletin) {
              return React.createElement(
                Row,
                { type: 'flex', gutter: 16 },
                React.createElement(
                  Col,
                  { xs: 24, md: 12 },
                  React.createElement(
                    'div',
                    { style: { marginBottom: 16 } },
                    React.createElement(
                      'strong',
                      null,
                      '\u521B\u5EFA\u65F6\u95F4\uFF1A'
                    ),
                    React.createElement(
                      'span',
                      null,
                      moment.unix(this.state.bulletin.createdAt).format('YYYY-MM-DD HH:mm:ss')
                    )
                  ),
                  React.createElement(
                    'div',
                    { style: { marginBottom: 16 } },
                    React.createElement(
                      'strong',
                      null,
                      '\u6700\u540E\u66F4\u65B0\uFF1A'
                    ),
                    React.createElement(
                      'span',
                      null,
                      moment.unix(this.state.bulletin.updatedAt).format('YYYY-MM-DD HH:mm:ss')
                    )
                  )
                ),
                React.createElement(
                  Col,
                  { xs: 24, md: 12 },
                  this.state.bulletin.isDraft && React.createElement(
                    'div',
                    { style: { marginBottom: 16 } },
                    React.createElement(
                      Checkbox,
                      {
                        checked: this.state.autoSave,
                        onChange: function onChange(e) {
                          return _this7.setState({ autoSave: e.target.checked });
                        }
                      },
                      this.state.autoSave && this.state.saving ? [React.createElement(Icon, { type: 'loading' }), ' 保存中...'] : '自动存草稿'
                    )
                  ),
                  !this.state.bulletin.isDraft && [React.createElement(
                    'div',
                    { style: { marginBottom: 16 } },
                    React.createElement(
                      Checkbox,
                      {
                        checked: this.state.autoRefresh,
                        onChange: function onChange(e) {
                          return _this7.setState({ autoRefresh: e.target.checked });
                        }
                      },
                      '\u81EA\u52A8\u5237\u65B0\u53CD\u9988'
                    )
                  ), React.createElement(
                    'div',
                    { style: { marginBottom: 16 } },
                    React.createElement(
                      Button,
                      {
                        type: 'primary',
                        icon: 'reload',
                        onClick: this.fetchFeedback.bind(this),
                        loading: this.state.refreshing
                      },
                      '\u5237\u65B0\u53CD\u9988'
                    )
                  )],
                  this.state.bulletin.isDraft && React.createElement(
                    Row,
                    { type: 'flex', justify: 'start', gutter: 16 },
                    React.createElement(
                      Col,
                      null,
                      React.createElement(
                        Button,
                        {
                          type: 'primary',
                          onClick: this.save.bind(this),
                          loading: this.state.saving,
                          disabled: !can('bulletin.update')
                        },
                        '\u4FDD\u5B58\u8349\u7A3F'
                      )
                    ),
                    React.createElement(
                      Col,
                      null,
                      React.createElement(
                        Button,
                        {
                          type: 'primary',
                          onClick: this.publish.bind(this),
                          loading: this.state.publishing,
                          disabled: !can('bulletin.publish')
                        },
                        '\u53D1\u5E03\u516C\u544A'
                      )
                    ),
                    React.createElement(
                      Col,
                      null,
                      React.createElement(
                        Button,
                        {
                          type: 'danger',
                          onClick: this.del.bind(this),
                          loading: this.state.deleting,
                          disabled: !can('bulletin.delete')
                        },
                        '\u820D\u5F03'
                      )
                    )
                  )
                )
              );
            }
          }
        }, {
          key: 'handleBulletinChange',
          value: function handleBulletinChange(key, value) {
            var bulletin = this.state.bulletin;
            bulletin[key] = value;
            this.setState({ bulletin: bulletin, changed: true });
          }
        }, {
          key: 'handleTextAreaPaste',
          value: function handleTextAreaPaste(e) {
            var _this8 = this;

            e.preventDefault();
            var selectionStart = e.target.selectionStart;
            var selectionEnd = e.target.selectionEnd;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = e.clipboardData.items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var item = _step2.value;

                switch (item.kind) {
                  case 'string':
                    item.getAsString(function (str) {
                      var text = _this8.state.bulletin.content;
                      text = text.substring(0, selectionStart) + str + text.substring(selectionEnd);
                      _this8.handleBulletinChange('content', text);
                    });
                    break;
                  case 'file':
                    console.log(item.type);
                    if (item.type.match(/^image\//)) {
                      var _ret2 = function () {
                        var img = item.getAsFile();
                        if (!img) return {
                            v: void 0
                          };

                        var text = _this8.state.bulletin.content;
                        var uid = CryptoJS.SHA1(+new Date() + ',' + parseInt(Math.random() * 100000000)).toString();
                        var placeholder = '![img \u4E0A\u4F20\u4E2D...](' + uid + ')';
                        text = text.substring(0, selectionStart) + placeholder + text.substring(selectionEnd);
                        _this8.handleBulletinChange('content', text);

                        var id = _this8.props.match.params.id;
                        var formData = new FormData();
                        formData.append('attachment', img);
                        axios.post('bulletin/' + id + '/attachment', formData).then(function (r) {
                          var text = _this8.state.bulletin.content;
                          var mark = '![img](' + r.data.url + ')';
                          text = text.replace(placeholder, mark);
                          _this8.handleBulletinChange('content', text);
                        }).catch(function (e) {
                          var text = _this8.state.bulletin.content;
                          text = text.replace(placeholder, '');
                          _this8.handleBulletinChange('content', text);
                        });
                      }();

                      if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
                    }
                    break;
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }
        }, {
          key: 'renderEditor',
          value: function renderEditor() {
            var _this9 = this;

            return React.createElement(
              'div',
              null,
              React.createElement(
                'div',
                { style: { marginBottom: 16 } },
                React.createElement(Input, {
                  size: 'large',
                  value: this.state.bulletin.title,
                  onChange: function onChange(e) {
                    return _this9.handleBulletinChange('title', e.target.value);
                  }
                })
              ),
              React.createElement(
                'div',
                { style: { marginBottom: 16 } },
                React.createElement(TreeSelect, {
                  size: 'large', style: { width: '100%' },
                  treeCheckable: true,
                  showCheckedStrategy: TreeSelect.SHOW_PARENT,
                  searchPlaceholder: '\u9009\u62E9\u8981\u901A\u77E5\u7684\u4EBA',
                  treeData: this.state.mentionList,
                  value: this.state.bulletin.receivers,
                  onChange: function onChange(e) {
                    return _this9.handleBulletinChange('receivers', e);
                  },
                  allowClear: true
                })
              ),
              React.createElement(
                'div',
                { style: { marginBottom: 16 } },
                React.createElement(
                  'div',
                  { align: 'right' },
                  React.createElement(
                    'small',
                    null,
                    '\u53EF\u7C98\u8D34\u4E0A\u4F20\u56FE\u7247\uFF0C\u6682\u4E0D\u652F\u6301\u5176\u4ED6\u9644\u4EF6\u4E0A\u4F20'
                  )
                ),
                React.createElement(Input.TextArea, {
                  size: 'large',
                  autosize: { minRows: 10, maxRows: 999999 },
                  value: this.state.bulletin.content,
                  onChange: function onChange(e) {
                    return _this9.handleBulletinChange('content', e.target.value);
                  },
                  onPaste: this.handleTextAreaPaste.bind(this)
                })
              )
            );
          }
        }, {
          key: 'view',
          value: function view() {
            if (this.state.bulletin) {
              return [React.createElement(BulletinProcess, { isDraft: this.state.bulletin.isDraft }), React.createElement(
                Row,
                { type: 'flex', gutter: 16 },
                this.state.bulletin.isDraft && React.createElement(
                  Col,
                  { xs: 24, md: 12 },
                  this.renderEditor()
                ),
                React.createElement(
                  Col,
                  { xs: 24, md: 12 },
                  React.createElement(BulletinPreview, this.state.bulletin)
                ),
                !this.state.bulletin.isDraft && React.createElement(
                  Col,
                  { xs: 24, md: 12 },
                  React.createElement(BulletinFeedback, {
                    statistics: this.state.bulletin.statistics,
                    feedbacks: this.state.feedbacks
                  })
                )
              )];
            }
          }
        }]);

        return _class;
      }(Page);

      _export('default', _class);
    }
  };
});
'use strict';

System.register('teamelf/bulletin/BulletinList', ['teamelf/layout/Page', 'teamelf/bulletin/BulletinCardItem'], function (_export, _context) {
  "use strict";

  var Page, BulletinCardItem, _createClass, _antd, Row, Col, Button, _class;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_teamelfLayoutPage) {
      Page = _teamelfLayoutPage.default;
    }, function (_teamelfBulletinBulletinCardItem) {
      BulletinCardItem = _teamelfBulletinBulletinCardItem.default;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _antd = antd;
      Row = _antd.Row;
      Col = _antd.Col;
      Button = _antd.Button;

      _class = function (_Page) {
        _inherits(_class, _Page);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.state = {
            bulletins: []
          };
          _this.fetchBulletins();
          return _this;
        }

        _createClass(_class, [{
          key: 'fetchBulletins',
          value: function fetchBulletins() {
            var _this2 = this;

            axios.get('bulletin').then(function (r) {
              _this2.setState({ bulletins: r.data });
            });
          }
        }, {
          key: 'title',
          value: function title() {
            return '公告管理';
          }
        }, {
          key: 'description',
          value: function description() {
            return [React.createElement(
              'p',
              null,
              '\u8FD9\u91CC\u60A8\u53EF\u4EE5\u7ED9\u6210\u5458\u7EC4\u6216\u8005\u5355\u4E2A\u6210\u5458\u53D1\u9001\u516C\u544A\uFF0C\u5E76\u4E14\u5F97\u5230\u53CD\u9988'
            ), React.createElement(
              Button,
              {
                type: 'primary',
                onClick: this.createBulletin.bind(this),
                icon: 'notification',
                disabled: !can('bulletin.create')
              },
              '\u65B0\u5EFA\u516C\u544A'
            )];
          }
        }, {
          key: 'createBulletin',
          value: function createBulletin() {
            axios.post('bulletin').then(function (r) {
              window.location.href = '/bulletin/' + r.data.id;
            });
          }
        }, {
          key: 'view',
          value: function view() {
            return React.createElement(
              Row,
              { type: 'flex', gutter: 16 },
              this.state.bulletins.map(function (o) {
                return React.createElement(
                  Col,
                  { sm: 24, md: 12, lg: 8, xxl: 6 },
                  React.createElement(BulletinCardItem, o)
                );
              })
            );
          }
        }]);

        return _class;
      }(Page);

      _export('default', _class);
    }
  };
});
"use strict";

System.register("teamelf/bulletin/BulletinPreview", [], function (_export, _context) {
  "use strict";

  var _createClass, _antd, Card, Divider, _class;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _antd = antd;
      Card = _antd.Card;
      Divider = _antd.Divider;

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class() {
          _classCallCheck(this, _class);

          return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
          key: "render",
          value: function render() {
            return React.createElement(
              Card,
              null,
              React.createElement(
                "h2",
                null,
                this.props.title
              ),
              React.createElement(Divider, null),
              React.createElement("div", {
                className: "markdown",
                dangerouslySetInnerHTML: { __html: marked(this.props.content) }
              })
            );
          }
        }]);

        return _class;
      }(React.Component);

      _export("default", _class);
    }
  };
});
'use strict';

System.register('teamelf/bulletin/BulletinProcess', [], function (_export, _context) {
  "use strict";

  var _createClass, _antd, Steps, Icon, _class;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _antd = antd;
      Steps = _antd.Steps;
      Icon = _antd.Icon;

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.steps = [{ title: '编辑', icon: 'edit' }, { title: '发布公告', icon: 'notification' }, { title: '反馈', icon: 'solution' }];
          return _this;
        }

        _createClass(_class, [{
          key: 'render',
          value: function render() {
            return React.createElement(
              Steps,
              {
                current: this.props.isDraft ? 0 : 2,
                style: { marginBottom: 16 }
              },
              this.steps.map(function (o) {
                return React.createElement(Steps.Step, {
                  title: o.title,
                  icon: React.createElement(Icon, { type: o.icon })
                });
              })
            );
          }
        }]);

        return _class;
      }(React.Component);

      _export('default', _class);
    }
  };
});
'use strict';

System.register('teamelf/bulletin/BulletinView', ['teamelf/common/SimpleLayout'], function (_export, _context) {
  "use strict";

  var SimpleLayout, _createClass, _antd, Button, Row, Col, Input, Alert, _class;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_teamelfCommonSimpleLayout) {
      SimpleLayout = _teamelfCommonSimpleLayout.default;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _antd = antd;
      Button = _antd.Button;
      Row = _antd.Row;
      Col = _antd.Col;
      Input = _antd.Input;
      Alert = _antd.Alert;

      _class = function (_SimpleLayout) {
        _inherits(_class, _SimpleLayout);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.state = {
            remark: ''
          };
          return _this;
        }

        _createClass(_class, [{
          key: 'feedback',
          value: function feedback(accept) {
            var query = new URLSearchParams(window.location.search);
            var data = {
              accept: accept,
              remark: this.state.remark
            };
            axios.put('bulletin/feedback/' + query.get('token'), data).then(function (r) {
              window.location.reload();
            });
          }
        }, {
          key: 'renderOptionChoice',
          value: function renderOptionChoice() {
            var _this2 = this;

            if (this.props.feedback === null) {
              return [React.createElement(
                Row,
                { type: 'flex', align: 'space-around', style: { marginBottom: 10 } },
                React.createElement(
                  Col,
                  null,
                  React.createElement(
                    Button,
                    {
                      size: 'large', type: 'primary',
                      onClick: this.feedback.bind(this, true)
                    },
                    '\u786E\u8BA4'
                  )
                ),
                React.createElement(
                  Col,
                  null,
                  React.createElement(
                    Button,
                    {
                      size: 'large', type: 'danger',
                      onClick: this.feedback.bind(this, false)
                    },
                    '\u62D2\u7EDD'
                  )
                )
              ), React.createElement(Input, {
                placeholder: 'Leave a message here ...',
                size: 'large',
                value: this.state.remark,
                onChange: function onChange(e) {
                  return _this2.setState({ remark: e.target.value });
                }
              })];
            } else {
              return [React.createElement(Alert, {
                type: this.props.feedback ? 'success' : 'error', showIcon: true,
                message: this.props.feedback ? '接受' : '拒绝',
                description: '\u60A8\u5DF2\u505A\u51FA\u9009\u62E9\uFF0C\u4E0D\u80FD\u4FEE\u6539'
              }), React.createElement(Alert, {
                style: { marginTop: 20 },
                type: 'info', showIcon: true,
                message: '\u60A8\u7684\u53CD\u9988\u7559\u8A00',
                description: window.remark
              })];
            }
          }
        }, {
          key: 'view',
          value: function view() {
            return [React.createElement(
              'h1',
              null,
              this.props.title
            ), React.createElement('div', {
              style: { textAlign: 'left' },
              className: 'markdown',
              dangerouslySetInnerHTML: { __html: marked(this.props.content) }
            }), React.createElement(
              'div',
              {
                style: { textAlign: 'right' }
              },
              '\u53D1\u5E03\u4E8E\uFF1A',
              moment.unix(this.props.updatedAt).format('YYYY-MM-DD HH:mm:ss')
            ), React.createElement(
              'div',
              { style: { textAlign: 'left', marginTop: 30 } },
              this.renderOptionChoice()
            )];
          }
        }]);

        return _class;
      }(SimpleLayout);

      _export('default', _class);
    }
  };
});
'use strict';

System.register('teamelf/bulletin/main', ['teamelf/common/extend', 'teamelf/bulletin/markdown-settings', 'teamelf/bulletin/Bulletin', 'teamelf/App', 'teamelf/layout/SideNav', 'teamelf/Permission'], function (_export, _context) {
  "use strict";

  var extend, Bulletin, App, SideNav, Permission;
  return {
    setters: [function (_teamelfCommonExtend) {
      extend = _teamelfCommonExtend.default;
    }, function (_teamelfBulletinMarkdownSettings) {}, function (_teamelfBulletinBulletin) {
      Bulletin = _teamelfBulletinBulletin.default;
    }, function (_teamelfApp) {
      App = _teamelfApp.default;
    }, function (_teamelfLayoutSideNav) {
      SideNav = _teamelfLayoutSideNav.SideNav;
    }, function (_teamelfPermission) {
      Permission = _teamelfPermission.default;
    }],
    execute: function () {
      /**
       * This file is part of TeamELF
       *
       * (c) GuessEver <guessever@gmail.com>
       *
       * For the full copyright and license information, please view the LICENSE
       * file that was distributed with this source code.
       */

      extend(App.prototype, 'routes', function (routes) {
        routes.push.apply(routes, [{ path: '/bulletin', component: Bulletin }]);
      });

      extend(SideNav.prototype, 'navigations', function (navigations) {
        if (can('bulletin.*')) {
          navigations.push({ path: '/bulletin', icon: 'notification', title: '公告管理' });
        }
      });

      extend(Permission.prototype, 'permissions', function (permissions) {
        permissions.push({
          name: '公告管理',
          children: [{ name: '查看通知列表', permission: 'bulletin.list' }, { name: '查看通知详情', permission: 'bulletin.item' }, { name: '创建新通知', permission: 'bulletin.create' }, { name: '编辑未发布的通知', permission: 'bulletin.update' }, { name: '删除未发布的通知', permission: 'bulletin.delete' }, { name: '发布通知', permission: 'bulletin.publish' }, { name: '查看通知反馈', permission: 'bulletin.feedback.list' }]
        });
      });
    }
  };
});
'use strict';

System.register('teamelf/bulletin/markdown-settings', [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      /**
       * This file is part of TeamELF
       *
       * (c) GuessEver <guessever@gmail.com>
       *
       * For the full copyright and license information, please view the LICENSE
       * file that was distributed with this source code.
       */

      marked.setOptions({
        breaks: true,
        highlight: function highlight(code) {
          return '暂不支持好看的代码哦';
        }
      });
    }
  };
});
'use strict';

System.register('teamelf/bulletin/view', ['teamelf/bulletin/markdown-settings', 'teamelf/bulletin/BulletinView'], function (_export, _context) {
  "use strict";

  var BulletinView, _extends, target;

  return {
    setters: [function (_teamelfBulletinMarkdownSettings) {}, function (_teamelfBulletinBulletinView) {
      BulletinView = _teamelfBulletinBulletinView.default;
    }],
    execute: function () {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      target = document.getElementById('react-render-target-bulletin-view');

      if (target) {
        ReactDOM.render(React.createElement(BulletinView, _extends({}, window.bulletin, { feedback: window.feedback })), target);
      }
    }
  };
});