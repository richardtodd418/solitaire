(this["webpackJsonpdecember-sol-champ-2020"]=this["webpackJsonpdecember-sol-champ-2020"]||[]).push([[0],{174:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(48),o=n.n(i),s=n(5),c=n(180),u=n(179),l=n(183),m=n(181),d=n(4),f=n(182),p=function(e){var t=e.split(":");return 60*+t[0]*60+60*+t[1]+ +t[2]},b=function(e){var t=e.split("");return t[0]=t[0].toUpperCase(),t.join("")},S=function(e){var t=e.data,n=e.points,i=e.sort,o=Object(r.useState)(null),s=Object(d.a)(o,2),c=s[0],u=s[1],l=function(e){return function(e){return new Date(1e3*e).toISOString().substr(11,8)}(e.reduce((function(e,t){return e+p(t)}),0))},m=function(e){return Object.entries(e).reduce((function(e,t){return e+n[t[0]]*t[1]}),0)},b=c||t.map((function(e){var t=e.name,n=e.positions,r=e.times,a=n.reduce((function(e,t){return e[t]=++e[t]||1,e}),{}),i=l(r),o=m(a)+3*e.fastestSolves;return[t,null==a[1]?0:a[1],null==a[2]?0:a[2],null==a[3]?0:a[3],null==a[4]?0:a[4],o,i]})).sort((function(e,t){return t[5]-e[5]})),S=Object(r.useCallback)((function(e,t){return u(i(b,e,t,6===e))}),[b,i]);return a.a.createElement(f.a,{columnContentTypes:["text","numeric","numeric","numeric","numeric","numeric","numeric"],headings:["Name","1","2","3","4","Total","Time"],rows:b,sortable:[!1,!0,!0,!0,!0,!0,!0],defaultSortDirection:"descending",initialSortColumnIndex:5,onSort:S})},v=function(e){var t=e.data,n=e.sort,i=Object(r.useState)(null),o=Object(d.a)(i,2),s=o[0],c=o[1],u=s||t.map((function(e){var t=Object.keys(e)[0];return[b(t),e[t][0],e[t][1]]})),l=Object(r.useCallback)((function(e,t){return c(n(u,e,t,2===e))}),[u,n]);return a.a.createElement(f.a,{columnContentTypes:["text","text","text"],headings:["Game","Name","Time"],rows:u,sortable:[!1,!1,!0],defaultSortDirection:"descending",initialSortColumnIndex:2,onSort:l})},h=[{name:"Richard",times:["00:08:24","00:31:16","00:07:50","01:11:03","00:08:37","00:24:33","01:04:05","00:16:50","01:07:12","00:10:50","00:13:13","00:20:33","00:07:25","00:19:38","00:50:00","00:42:21","00:24:08","00:04:19","00:29:21","00:25:24","00:27:25","00:33:34","01:09:13","00:02:36"],positions:[3,2,1,3,2,1,4,1,3,3,2,4,3,3,3,4,2,3,2,4,2,4,1,1],fastestSolves:4},{name:"Julie",times:["00:06:47","00:53:49","00:08:21","00:55:25","00:09:05","00:30:35","00:44:44","00:21:22","01:14:54","00:10:35","00:22:49","00:17:34","00:08:28","00:14:22","01:04:26","00:25:47","00:22:09","00:03:51","00:40:06","00:16:40","00:28:33","00:25:33","01:55:26","00:03:19"],positions:[1,3,2,1,3,4,3,4,4,2,4,2,4,1,4,3,1,2,3,2,3,3,4,4],fastestSolves:1},{name:"Jason",times:["00:06:53","01:21:16","00:10:38","01:47:17","00:08:02","00:29:46","00:42:38","00:17:29","00:53:02","00:09:19","00:17:18","00:15:26","00:05:30","00:24:07","00:46:58","00:19:11","00:26:43","00:03:17","00:19:54","00:11:38","00:22:35","00:21:49","01:13:04","00:02:42"],positions:[2,3,1,3,2,2,1,1,3,1,1,4,2,1,4,1,1,1,1,2,3,2],fastestSolves:1},{name:"Jeremy",times:["00:08:53","00:20:38","00:14:00","00:09:45","01:10:53","00:28:27","00:27:12","00:19:06","01:02:30","00:11:15","00:11:01","00:18:40","00:06:00","00:15:38","00:36:09","00:25:09","00:24:40","00:04:49","00:44:31","00:17:45","00:29:44","00:18:26","01:10:20","00:03:02"],positions:[4,1,4,2,4,2,1,3,2,4,1,3,2,2,1,2,3,4,4,3,4,1,2,3],fastestSolves:0}],E=[{spider:["Julie","00:00:39"]},{klondike:["Richard","00:00:11"]},{pyramid:["Richard/Jason","00:00:29"]},{tripeaks:["Richard","00:00:09"]},{freecell:["Richard","00:00:02"]}],g={1:10,2:6,3:4,4:3,5:2,6:1},j=function(){var e=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return Object(s.a)(e).sort((function(e,a){var i=e[t],o=a[t];return r?"descending"===n?p(o)-p(i):p(i)-p(o):"descending"===n?o-i:i-o}))};return a.a.createElement(c.a,{features:{newDesignLanguage:!0},i18n:{}},a.a.createElement(u.a,{title:"December Solitaire"},a.a.createElement(l.a,null,a.a.createElement(l.a.Section,null,a.a.createElement(m.a,{title:"Leader table"},a.a.createElement(S,{data:h,points:g,sort:e,bonuseData:E}))),a.a.createElement(l.a.Section,{secondary:!0},a.a.createElement(m.a,{title:"Fastest solves"},a.a.createElement(v,{data:E,sort:e}))))))};n(173);o.a.render(a.a.createElement(j,null),document.getElementById("root"))},86:function(e,t,n){e.exports=n(174)}},[[86,1,2]]]);
//# sourceMappingURL=main.d5eed594.chunk.js.map