"use strict";(self.webpackChunkioclt=self.webpackChunkioclt||[]).push([[967],{6967:function(e,n,t){t.r(n),t.d(n,{jinja2:function(){return s}});var r=["and","as","block","endblock","by","cycle","debug","else","elif","extends","filter","endfilter","firstof","for","endfor","if","endif","ifchanged","endifchanged","ifequal","endifequal","ifnotequal","endifnotequal","in","include","load","not","now","or","parsed","regroup","reversed","spaceless","endspaceless","ssi","templatetag","openblock","closeblock","openvariable","closevariable","openbrace","closebrace","opencomment","closecomment","widthratio","url","with","endwith","get_current_language","trans","endtrans","noop","blocktrans","endblocktrans","get_available_languages","get_current_language_bidi","plural"],i=/^[+\-*&%=<>!?|~^]/,a=/^[:\[\(\{]/,o=["true","false"],c=/^(\d[+\-\*\/])?\d+(\.\d+)?/;function l(e,n){var t=e.peek();if(n.incomment)return e.skipTo("#}")?(e.eatWhile(/\#|}/),n.incomment=!1):e.skipToEnd(),"comment";if(n.intag){if(n.operator){if(n.operator=!1,e.match(o))return"atom";if(e.match(c))return"number"}if(n.sign){if(n.sign=!1,e.match(o))return"atom";if(e.match(c))return"number"}if(n.instring)return t==n.instring&&(n.instring=!1),e.next(),"string";if("'"==t||'"'==t)return n.instring=t,e.next(),"string";if(e.match(n.intag+"}")||e.eat("-")&&e.match(n.intag+"}"))return n.intag=!1,"tag";if(e.match(i))return n.operator=!0,"operator";if(e.match(a))n.sign=!0;else if(e.eat(" ")||e.sol()){if(e.match(r))return"keyword";if(e.match(o))return"atom";if(e.match(c))return"number";e.sol()&&e.next()}else e.next();return"variable"}if(e.eat("{")){if(e.eat("#"))return n.incomment=!0,e.skipTo("#}")?(e.eatWhile(/\#|}/),n.incomment=!1):e.skipToEnd(),"comment";if(t=e.eat(/\{|%/))return n.intag=t,"{"==t&&(n.intag="}"),e.eat("-"),"tag"}e.next()}r=new RegExp("(("+r.join(")|(")+"))\\b"),o=new RegExp("(("+o.join(")|(")+"))\\b");var s={startState:function(){return{tokenize:l}},token:function(e,n){return n.tokenize(e,n)},languageData:{commentTokens:{block:{open:"{#",close:"#}"}}}}}}]);
//# sourceMappingURL=967.b281af23.chunk.js.map