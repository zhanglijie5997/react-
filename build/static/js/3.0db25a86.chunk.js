webpackJsonp([3],{143:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAe0AAAB0CAYAAACoqmrEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABHdJREFUeNrs3L9rXWUcx/HnnHtuS27SopKWtmCaqUMEsYh1Fv0L3DM4OAjOtrh2EUEcHBQcHLr7D1hQgg6ldNDBNnTRKIHaH9Hb3KTNveccv0dP4OIUzdBT7+sFnzYpvR0eCu+e2ycp0t+WYu/EXowdTQBwOMemejKJ7bWbzNg5FLEj7Yr21x7HHh7w9c3v/SH2aWwjix+WYx/GtmK/t4cKAIcxF+u3H5dtrCftx7Ok18a6aD9ujGO7B3x9E/tnYs/G3ivC6mQy2YhPNts/pIrV/r4BcAhHp54sq6lwVzN2DvlUsPOpdx4eH+C1Wfua5h9AZ5pe51VVnWiDPWoPVbAB4Mmr2y43fd6MXp/Mwx/xySOxBoDOxns3ej3MT58+vek8AKDbote/5qurq9/1+/3mvfbMkQBA52RNp5te99bW1rYWFxf3bt68ubC9vX20qirxBuCwmstX+xev6nazeNF5/zJZPvVwvH8x7yCxTsvLyw8vX778/cWLF3/M6vqv82uulC/GBlOHDAD/1fQ7uPU/NmvRnt7+eRz0S9+awO/E7sX29q/jN1+b7f+2AaDDPFUDgGgDAKINAKINAIg2ACDaACDaAIBoAwCiDQCiDQCINgAg2gAg2gCAaAMAog0Aog0AiDYAINoAINoAgGgDwCzKXlhZqefm5tKpU6fSwrFjqdfrORUA6IZh7GrsUux2dv78+frcuXOprutUlqXjAYAOaR6mY8M8zy8UzRN2E+sm2gBAtzSNrqrqeJZlHxeDwUCwAaDD2k6/nk8mE6cBAB0Xve7l9+/fdxIA0HEPHjy4l29sbKTxeOw0AKC7T9mT9fX1L/PmVtq1a9fSnTt33B4HgA6JLpd3w9ra2rfR6Q+Kfr+f5ufn061bt9Lu7m4ajUbfOCaA/6UTsd3YtqN4IhZic7G7/+I1O7Ebsc9jv2RujgPA08G3MQUA0QYARBsARBsAEG0AQLQBQLQBANEGAEQbAEQbABBtAEC0AUC0AQDRBgBEGwBEGwAQbQBAtAFAtAEA0QYA0QYARBsAEG0AEG0AQLQBANEGgP+nYmVlpT5bVendnZ30yt5emq9rpwIA3TCMXY1dit0uno9QfzYcplH8/FPEuxJtAOiEPMuOL+T5myf7/Tfm8vxC8XY8Yf/26FEqxRoAOqV5kB6WZRpV1fHnjhz5JD8b0RZsAOiuptPDyeS1fDsKDgB0W0S7l1+vKicBAB13vSzL4kqep5fisXshy5wIAHTQdnT6ynj8dba0tFRnm5vprV4vvRwbiDcAdMJOxPpGWaYvxuPhz1X1ajEYDNLOmTPpo62tNBqNUuXtcgDoioexr2Lvx9az2s1xAHgq+DamACDaAIBoA4BoAwCiDQCINgCINgAg2gCAaAOAaAMAog0AiDYAiDYAINoAgGgDgGgDAKINAIg2AIg2ACDaACDaAIBoAwCiDQCiDQCINgAg2gAg2gCAaAMAog0Aog0AiDYAINoAINoAgGgDAKINAKINAIg2AIg2ACDaAIBoA8Bs+FOAAQA5uzY3uTuRNQAAAABJRU5ErkJggg=="},144:function(A,e,n){A.exports=n.p+"static/media/iconall.de77152c.png"},265:function(A,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=n(44),o=n(0),r=(n.n(o),n(266)),i=(n.n(r),n(45)),l=this,a=o.forwardRef(function(A,e){var n=t.e(o.useState(0),2),r=n[0],a=n[1],g=t.e(o.useState(!1),2),s=g[0],u=g[1],p=o.useRef(null),c=o.useRef(null),k=o.useRef(null),B=t.e(o.useState(0),2),U=B[0],d=B[1],m=t.e(o.useState(!1),2),x=m[0],E=m[1],f=t.e(o.useState("00:00"),2),S=f[0],Q=f[1],K=t.e(o.useState("00:00"),2),v=K[0],D=K[1];function C(){u(!1)}o.useEffect(function(){return setTimeout(function(){A.audioUrl&&k&&k.current.duration>0&&"[object Number]"===toString.call(k.current.duration)&&"NaN"!==k.current.duration.toString()&&(Q(w(k.current.duration)),k.current.volume=.5)},200),document.addEventListener("mouseup",C),c.current.onmousemove=null,function(){return document.removeEventListener("mouseup",C)}},[s,S]),o.useEffect(function(){p.current.onmousedown=h,k.current.volume=A.audioVolume},[A.audioVolume]);var R=function(A){var e=A/493*k.current.duration;k.current.currentTime=e},h=function(A){var e=document.getElementById("progess"),n=A.clientX-e.getBoundingClientRect().x;a(A.clientX-e.getBoundingClientRect().x),R(n),c.current.onmousemove=I,c.current.onmouseup=M},I=function(A){return t.b(l,void 0,void 0,function(){var e,n,o;return t.d(this,function(t){return e=document.getElementById("progess"),a(A.clientX-e.getBoundingClientRect().x),n=A.clientX-e.getBoundingClientRect().x,a(n<0?0:n>480?480:n),o=A.clientX-e.getBoundingClientRect().x,R(o),[2]})})},M=function(A){c.current.onmousemove=null},b=o.useCallback(function(){u(!1)},[]);o.useImperativeHandle(e,function(){return{duration:function(){return k.current.duration},endedMusic:function(){return x},getVolume:function(){return k.current.volume},pause:function(){return k.current.pause()},play:function(){return k.current.play()},timeUpdate:function(){return U},getDuration:function(){Q(w(k.current.duration))}}});var w=function(A){return y(A)},y=function(A){return(Math.floor(A/60)<1?"0"+Math.floor(A/60):Math.floor(A/60))+":"+(Math.floor(A%60)<10?"0"+Math.floor(A%60):Math.floor(A%60))},F=o.useCallback(function(){d(k.current.currentTime);var A=k.current.currentTime/k.current.duration*493;D(y(k.current.currentTime)),a(A)},[U,S,v]);return o.createElement("div",{className:"centerBox"},o.createElement("div",{className:"musicImg"},o.createElement("a",{href:"javscript:void(0);",style:{background:"url("+A.audioState.artists[0].img1v1Url+") no-repeat",backgroundSize:"cover"}})),o.createElement("div",{className:"progess",ref:c,onMouseLeave:b,id:"progess",onMouseDown:function(A){var e=document.getElementById("progess"),n=A.clientX-e.getBoundingClientRect().x;R(n),a(A.clientX-e.getBoundingClientRect().x)}},o.createElement("div",{className:"songMsg"},o.createElement(i.b,{to:"/"},A.audioState.album.name),o.createElement(i.b,{to:"/"},A.audioState.artists[0].name)),o.createElement("div",{className:"progessBar",style:{width:r+"px"}},o.createElement("span",{ref:p,style:{left:r-11+"px"}}))),o.createElement("div",{className:"time"},o.createElement("em",null,v),o.createElement("em",null,"/",S)),o.createElement("div",{className:"audioBox"},o.createElement("audio",{controls:!0,ref:k,id:"audio",onTimeUpdate:F,onEnded:function(e){E(!0),console.log(A),A.stopPlay()},src:A.audioUrl})))});e.default=a},266:function(A,e,n){var t=n(267);"string"===typeof t&&(t=[[A.i,t,""]]);var o={hmr:!1,transform:void 0};n(117)(t,o);t.locals&&(A.exports=t.locals)},267:function(A,e,n){var t=n(121);(A.exports=n(116)(!1)).push([A.i,".centerBox {\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  height: 100%;\n  padding-right: 80px; }\n  .centerBox .musicImg {\n    width: 34px;\n    height: 34px;\n    margin: 6px 15px 0 0; }\n    .centerBox .musicImg a {\n      width: 100%;\n      height: 100%;\n      display: block;\n      background: url("+t(n(268))+") repeat;\n      background-size: cover; }\n  .centerBox .progess {\n    display: -ms-flexbox;\n    display: flex;\n    width: 493px;\n    height: 100%;\n    position: relative;\n    background: url("+t(n(143))+") no-repeat;\n    background-position: 0 28px; }\n    .centerBox .progess .songMsg {\n      position: absolute;\n      left: 0;\n      top: 0;\n      color: #e8e8e8;\n      font-size: 12px;\n      height: 25px; }\n      .centerBox .progess .songMsg a {\n        text-decoration: none;\n        line-height: 25px; }\n        .centerBox .progess .songMsg a:nth-child(1) {\n          font-weight: 450;\n          color: #fff; }\n        .centerBox .progess .songMsg a:nth-child(2) {\n          margin-left: 15px;\n          color: #e8e8e8; }\n        .centerBox .progess .songMsg a:hover {\n          text-decoration: underline; }\n    .centerBox .progess .progessBar {\n      position: relative;\n      width: 0%;\n      background: url("+t(n(143))+") no-repeat;\n      background-position: 0 -38px;\n      height: 100%;\n      -webkit-transition: all 0s ease;\n      -o-transition: all 0s ease;\n      transition: all 0s ease; }\n      .centerBox .progess .progessBar span {\n        position: absolute;\n        display: block;\n        width: 22px;\n        height: 24px;\n        top: 20px;\n        cursor: pointer;\n        left: -4px;\n        background: url("+t(n(144))+") no-repeat;\n        background-position: 0 -249px;\n        -webkit-transition: all 0s ease;\n        -o-transition: all 0s ease;\n        transition: all 0s ease; }\n    .centerBox .progess .mouseDon {\n      width: 22px;\n      height: 24px;\n      background: url("+t(n(144))+") no-repeat;\n      background-position: 0 -249px;\n      -webkit-transition: all 0s ease;\n      -o-transition: all 0s ease;\n      transition: all 0s ease;\n      -webkit-transform: translateZ(0);\n              transform: translateZ(0);\n      margin-top: 19px;\n      margin-left: -6px; }\n  .centerBox .time {\n    position: absolute;\n    right: 0px;\n    bottom: 9px;\n    font-size: 12px;\n    color: #797979; }\n    .centerBox .time em:nth-child(1) {\n      color: #a1a1a1; }\n\n.audioBox {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n  width: 0;\n  height: 0; }\n",""])},268:function(A,e){A.exports="data:image/jpeg;base64,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"}});