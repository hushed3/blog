"use strict";(self.webpackChunkhushes=self.webpackChunkhushes||[]).push([[814],{4213:function(e,t,a){a.d(t,{V:function(){return r}});var n=a(7294),r=function(e){var t=e.highlight,a=e.subTitle,r=e.title,l=e.children,c=e.index;return n.createElement("header",{className:"hero "+(c?"index":"")},a&&n.createElement("div",{className:"sub-title"},t&&n.createElement("span",{className:"highlight"},t),a),r&&n.createElement("h1",null,r),l&&l)}},5587:function(e,t,a){a.d(t,{V:function(){return s}});var n=a(2982),r=a(7294),l=a(1597),c=function(e){var t,a=e.node,n=e.prefix;if(a.date){var c=a.date.split(" ");c.pop(),c[0]=c[0].slice(0,3),t=c.join(" ").slice(0,-1)}return r.createElement(l.Link,{to:n?"/"+n+a.slug:a.slug,key:a.id,className:"post"},r.createElement("h5",null,a.title),r.createElement("time",null,t))},s=function(e){var t=e.data,a=void 0===t?[]:t,l=e.showYears,s=e.query,i=e.prefix,m=e.hideDate,u=e.yearOnly,o=(0,r.useMemo)((function(){var e={};return a.forEach((function(t){var a,r=null===(a=t.date)||void 0===a?void 0:a.split(", ")[1];e[r]=[].concat((0,n.Z)(e[r]||[]),[t])})),e}),[a]),d=(0,r.useMemo)((function(){return Object.keys(o).reverse()}),[o]);return l?d.map((function(e){return r.createElement("section",{key:e,className:"segment"},r.createElement("h2",{className:"year"},e),r.createElement("div",{className:"posts"},o[e].map((function(e){return r.createElement(c,{key:e.id,node:e,query:s,prefix:i})}))))})):r.createElement("section",{className:"segment"},r.createElement("div",{className:"posts"},a.map((function(e){return r.createElement(c,{key:e.id,node:e,query:s,prefix:i,hideDate:m,yearOnly:u})}))))}},9798:function(e,t,a){a.d(t,{C:function(){return s}});var n=a(7294),r=a(1597),l=a(5868),c=function(){var e=(0,r.useStaticQuery)("523315755"),t=e.categories.group,a=e.tags.group;return n.createElement("aside",{className:"post-sidebar"},n.createElement("div",{className:"post-sidebar-card"},n.createElement("h2",null,"类别"),n.createElement("div",{className:"list"},t.filter((function(e){return"Highlight"!==e.name})).map((function(e){return n.createElement(r.Link,{key:e.name,to:"/categories/"+(0,l.lV)(e.name),className:"category",activeClassName:"active"},n.createElement("div",{className:"name"},e.name),n.createElement("div",{className:"count"},e.totalCount))})))),n.createElement("div",{className:"post-sidebar-card"},n.createElement("h2",null,"标签"),n.createElement("div",{className:"tags"},a.map((function(e){return n.createElement(r.Link,{key:e.name,to:"/tags/"+(0,l.lV)(e.name),className:"tag",activeClassName:"active"},e.name)})))))},s=function(e){var t=e.children;return n.createElement("section",{className:"container markdown-content"},n.createElement("div",{className:"grid"},n.createElement("div",{className:"article-content"},t),n.createElement("div",{className:"sidebar-content"},n.createElement(c,null))))}},1427:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(7294),r=a(5414),l=a(8155),c=a(9389),s=a(5587),i=a(4213),m=a(9798),u=a(5868),o=a(3737);function d(e){var t=e.data,a=e.pageContext.tag,l=t.allMarkdownRemark.totalCount,d=t.allMarkdownRemark.edges,E=(0,n.useMemo)((function(){return(0,u.Nx)(d)}),[d]),f=1===l?" post tagged:":" posts tagged:";return n.createElement("div",null,n.createElement(r.Z,{title:"Posts tagged: "+a+" | "+o.Z.siteTitle}),n.createElement(c.H,null),n.createElement(m.C,null,n.createElement(i.V,{highlight:l,subTitle:f,title:a}),n.createElement(s.V,{data:E,showYears:!0})))}d.Layout=l.A}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-f38efe8c54e250fbf573.js.map