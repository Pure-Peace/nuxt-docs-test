__NUXT_JSONP__("/docs/directory-structure/pages", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO){return {data:[{page:{key:"content:3.docs:2.directory-structure:9.pages.md",generatedAt:new Date(1642067218119),mtime:new Date(1642067218112),slug:V,title:V,position:"000300020009",to:"\u002Fdocs\u002Fdirectory-structure\u002Fpages",draft:F,page:G,language:"en",icon:"IconDirectory",head:{title:ac},empty:F,description:W,excerpt:ad,body:{raw:"---\nicon: IconDirectory\ntitle: 'pages'\nhead.title: Pages directory\n---\n\n# Pages directory\n\n::alert{type=\"info\"}\nThe `pages\u002F` directory is optional, meaning that if you only use [app.vue](\u002Fdocs\u002Fdirectory-structure\u002Fapp), `vue-router` won't be included, reducing your application's bundle size.\n::\n\nNuxt will automatically integrate [Vue Router](https:\u002F\u002Fnext.router.vuejs.org\u002F) and map `pages\u002F` directory into the routes of your application.\n\n::alert{type=warning}\nUnlike components, your pages must have a single root element to allow Nuxt to apply route transitions between pages.\n::\n\n## Dynamic Routes\n\nIf you place anything within square brackets, it will be turned into a [dynamic route](https:\u002F\u002Fnext.router.vuejs.org\u002Fguide\u002Fessentials\u002Fdynamic-matching.html) parameter. You can mix and match multiple parameters and even non-dynamic text within a file name or directory.\n\nIf you need a catch-all route, you create it by using a file named like `[...slug].vue`. This will match _all_ routes under that path, and thus it doesn't support any non-dynamic text.\n\n### Example\n\n```bash\n-| pages\u002F\n---| index.vue\n---| users-[group]\u002F\n-----| [id].vue\n```\n\nGiven the example above, you can access group\u002Fid within your component via the `$route` object:\n\n```vue\n\u003Ctemplate\u003E\n  {{ $route.params.group }}\n  {{ $route.params.id }}\n\u003C\u002Ftemplate\u003E\n```\n\nNavigating to `\u002Fusers-admins\u002F123` would render:\n\n```text\nadmins 123\n```\n\nIf you want to access the route using Composition API, there is a global `useRoute` function that will allow you to access the route just like `this.$route` in the Options API.\n\n```js\n\u003Cscript setup\u003E\n\u002F\u002F This import statement is optional since it's automatically imported by Nuxt.\n\u002F\u002F import { useRoute } from '#imports'\n\nconst route = useRoute()\n\nif (route.params.group === 'admins' && !route.params.id) {\n  console.log('Warning! Make sure user is authenticated!')\n}\n\u003C\u002Fscript\u003E\n```\n\n## Navigation\n\nTo navigate between pages of your app, you should use the  `\u003CNuxtLink\u003E` component. This component is included with Nuxt and therefore you don't have to import it as you do with other components. It is similar to the HTML `\u003Ca\u003E` tag except that instead of using a `href=\"\u002Fabout\"` you use `to=\"\u002Fabout\"`. If you've used `vue-router` before, you can think of `\u003CNuxtLink\u003E` as a replacement for `\u003CRouterLink\u003E`.\n\nA simple link to the `index.vue` page in your `pages` folder:\n\n```html\n\u003Ctemplate\u003E\n  \u003CNuxtLink to=\"\u002F\"\u003EHome page\u003C\u002FNuxtLink\u003E\n\u003C\u002Ftemplate\u003E\n```\n\nThe `\u003CNuxtLink\u003E` component should be used for all internal links. That means for all links to the pages within your site you should use `\u003CNuxtLink\u003E`. The `\u003Ca\u003E` tag should be used for all external links. That means if you have links to other websites you should use the `\u003Ca\u003E` tag for those.\n\n```html\n\u003Ctemplate\u003E\n  \u003Cdiv\u003E\n    \u003Ch1\u003EHome page\u003C\u002Fh1\u003E\n    \u003CNuxtLink to=\"\u002Fabout\"\u003E\n      About (internal link that belongs to the Nuxt App)\n    \u003C\u002FNuxtLink\u003E\n    \u003Ca href=\"https:\u002F\u002Fnuxtjs.org\"\u003EExternal Link to another page\u003C\u002Fa\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n```\n\n::alert{type=\"info\"}\nIf you want to know more about `\u003CRouterLink\u003E`, read the [Vue Router documentation](https:\u002F\u002Fnext.router.vuejs.org\u002Fapi\u002F#router-link) for more information.\n::\n\n## Nested Routes\n\nWe provide a semantic alias for `RouterView`, the `\u003CNuxtNestedPage\u003E` component, for displaying the children components of a [nested route](https:\u002F\u002Fnext.router.vuejs.org\u002Fguide\u002Fessentials\u002Fnested-routes.html).\n\nExample:\n\n```bash\n-| pages\u002F\n---| parent\u002F\n------| child.vue\n---| parent.vue\n```\n\nThis file tree will generate these routes:\n\n```js\n[\n  {\n    path: '\u002Fparent',\n    component: '~\u002Fpages\u002Fparent.vue',\n    name: 'parent',\n    children: [\n      {\n        path: 'child',\n        component: '~\u002Fpages\u002Fparent\u002Fchild.vue',\n        name: 'parent-child'\n      }\n    ]\n  }\n]\n```\n\nTo display the `child.vue` component, you have to insert the `\u003CNuxtNestedPage\u003E` component inside `pages\u002Fparent.vue`:\n\n```html{}[pages\u002Fparent.vue]\n\u003Ctemplate\u003E\n  \u003Cdiv\u003E\n    \u003Ch1\u003EI am the parent view\u003C\u002Fh1\u003E\n    \u003CNuxtNestedPage :foobar=\"123\" \u002F\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n```\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"pages-directory"},children:[{type:a,value:ac}]},{type:a,value:g},{type:b,tag:X,props:{type:ae},children:[{type:b,tag:l,props:{},children:[{type:a,value:af},{type:b,tag:h,props:{},children:[{type:a,value:ag}]},{type:a,value:" directory is optional, meaning that if you only use "},{type:b,tag:o,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fapp"},children:[{type:a,value:"app.vue"}]},{type:a,value:", "},{type:b,tag:h,props:{},children:[{type:a,value:ah}]},{type:a,value:" won't be included, reducing your application's bundle size."}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"Nuxt will automatically integrate "},{type:b,tag:o,props:{href:"https:\u002F\u002Fnext.router.vuejs.org\u002F",rel:[H,I,J],target:K},children:[{type:a,value:"Vue Router"}]},{type:a,value:" and map "},{type:b,tag:h,props:{},children:[{type:a,value:ag}]},{type:a,value:" directory into the routes of your application."}]},{type:a,value:g},{type:b,tag:X,props:{type:"warning"},children:[{type:b,tag:l,props:{},children:[{type:a,value:"Unlike components, your pages must have a single root element to allow Nuxt to apply route transitions between pages."}]}]},{type:a,value:g},{type:b,tag:Y,props:{id:ai},children:[{type:b,tag:o,props:{href:"#dynamic-routes"},children:[{type:a,value:aj}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"If you place anything within square brackets, it will be turned into a "},{type:b,tag:o,props:{href:"https:\u002F\u002Fnext.router.vuejs.org\u002Fguide\u002Fessentials\u002Fdynamic-matching.html",rel:[H,I,J],target:K},children:[{type:a,value:"dynamic route"}]},{type:a,value:" parameter. You can mix and match multiple parameters and even non-dynamic text within a file name or directory."}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"If you need a catch-all route, you create it by using a file named like "},{type:b,tag:h,props:{},children:[{type:a,value:"[...slug].vue"}]},{type:a,value:". This will match "},{type:b,tag:"prose-em",props:{},children:[{type:a,value:"all"}]},{type:a,value:" routes under that path, and thus it doesn't support any non-dynamic text."}]},{type:a,value:g},{type:b,tag:"prose-h3",props:{id:ak},children:[{type:b,tag:o,props:{href:"#example"},children:[{type:a,value:al}]}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:b,tag:q,props:{className:[r,am]},children:[{type:b,tag:s,props:{},children:[{type:a,value:an},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:t}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:t}]},{type:a,value:" index.vue\n---"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:t}]},{type:a,value:" users-"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:"\u002F\n-----"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:t}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:".vue\n"}]}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"Given the example above, you can access group\u002Fid within your component via the "},{type:b,tag:h,props:{},children:[{type:a,value:"$route"}]},{type:a,value:" object:"}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:b,tag:q,props:{className:[r,N]},children:[{type:b,tag:s,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n  {{ $route.params.group }}\n  {{ $route.params.id }}\n"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"Navigating to "},{type:b,tag:h,props:{},children:[{type:a,value:"\u002Fusers-admins\u002F123"}]},{type:a,value:" would render:"}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:b,tag:q,props:{className:[r,"language-text"]},children:[{type:b,tag:s,props:{},children:[{type:a,value:"admins 123\n"}]}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"If you want to access the route using Composition API, there is a global "},{type:b,tag:h,props:{},children:[{type:a,value:ar}]},{type:a,value:" function that will allow you to access the route just like "},{type:b,tag:h,props:{},children:[{type:a,value:"this.$route"}]},{type:a,value:" in the Options API."}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:b,tag:q,props:{className:[r,as]},children:[{type:b,tag:s,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:"script setup"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,at]},children:[{type:a,value:"\u002F\u002F This import statement is optional since it's automatically imported by Nuxt."}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,at]},children:[{type:a,value:"\u002F\u002F import { useRoute } from '#imports'"}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,av]},children:[{type:a,value:"const"}]},{type:a,value:" route "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,aw]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:_}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,av,"control-flow"]},children:[{type:a,value:"if"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Z}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:ap}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"==="}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"'admins'"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"&&"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"!"}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:_}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:$}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,az,"class-name"]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,"method",aw,C]},children:[{type:a,value:"log"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"'Warning! Make sure user is authenticated!'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:_}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aA}]},{type:a,value:"script"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:Y,props:{id:aB},children:[{type:b,tag:o,props:{href:"#navigation"},children:[{type:a,value:aC}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"To navigate between pages of your app, you should use the  "},{type:b,tag:h,props:{},children:[{type:a,value:O}]},{type:a,value:" component. This component is included with Nuxt and therefore you don't have to import it as you do with other components. It is similar to the HTML "},{type:b,tag:h,props:{},children:[{type:a,value:ab}]},{type:a,value:" tag except that instead of using a "},{type:b,tag:h,props:{},children:[{type:a,value:"href=\"\u002Fabout\""}]},{type:a,value:" you use "},{type:b,tag:h,props:{},children:[{type:a,value:"to=\"\u002Fabout\""}]},{type:a,value:". If you've used "},{type:b,tag:h,props:{},children:[{type:a,value:ah}]},{type:a,value:" before, you can think of "},{type:b,tag:h,props:{},children:[{type:a,value:O}]},{type:a,value:" as a replacement for "},{type:b,tag:h,props:{},children:[{type:a,value:aD}]},{type:a,value:z}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"A simple link to the "},{type:b,tag:h,props:{},children:[{type:a,value:"index.vue"}]},{type:a,value:" page in your "},{type:b,tag:h,props:{},children:[{type:a,value:V}]},{type:a,value:" folder:"}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:b,tag:q,props:{className:[r,N]},children:[{type:b,tag:s,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:P}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,R]},children:[{type:b,tag:c,props:{className:[d,e,S]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:aA},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:af},{type:b,tag:h,props:{},children:[{type:a,value:O}]},{type:a,value:" component should be used for all internal links. That means for all links to the pages within your site you should use "},{type:b,tag:h,props:{},children:[{type:a,value:O}]},{type:a,value:". The "},{type:b,tag:h,props:{},children:[{type:a,value:ab}]},{type:a,value:" tag should be used for all external links. That means if you have links to other websites you should use the "},{type:b,tag:h,props:{},children:[{type:a,value:ab}]},{type:a,value:" tag for those."}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:b,tag:q,props:{className:[r,N]},children:[{type:b,tag:s,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:P}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,R]},children:[{type:b,tag:c,props:{className:[d,e,S]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:"\u002Fabout"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n      About (internal link that belongs to the Nuxt App)\n    "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:aG}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:"href"}]},{type:b,tag:c,props:{className:[d,R]},children:[{type:b,tag:c,props:{className:[d,e,S]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:"https:\u002F\u002Fnuxtjs.org"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"External Link to another page"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:X,props:{type:ae},children:[{type:b,tag:l,props:{},children:[{type:a,value:"If you want to know more about "},{type:b,tag:h,props:{},children:[{type:a,value:aD}]},{type:a,value:", read the "},{type:b,tag:o,props:{href:"https:\u002F\u002Fnext.router.vuejs.org\u002Fapi\u002F#router-link",rel:[H,I,J],target:K},children:[{type:a,value:"Vue Router documentation"}]},{type:a,value:" for more information."}]}]},{type:a,value:g},{type:b,tag:Y,props:{id:aH},children:[{type:b,tag:o,props:{href:"#nested-routes"},children:[{type:a,value:aI}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"We provide a semantic alias for "},{type:b,tag:h,props:{},children:[{type:a,value:"RouterView"}]},{type:a,value:", the "},{type:b,tag:h,props:{},children:[{type:a,value:aJ}]},{type:a,value:" component, for displaying the children components of a "},{type:b,tag:o,props:{href:"https:\u002F\u002Fnext.router.vuejs.org\u002Fguide\u002Fessentials\u002Fnested-routes.html",rel:[H,I,J],target:K},children:[{type:a,value:"nested route"}]},{type:a,value:z}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"Example:"}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:b,tag:q,props:{className:[r,am]},children:[{type:b,tag:s,props:{},children:[{type:a,value:an},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:t}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:t}]},{type:a,value:" parent\u002F\n------"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:t}]},{type:a,value:" child.vue\n---"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:t}]},{type:a,value:" parent.vue\n"}]}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"This file tree will generate these routes:"}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:b,tag:q,props:{className:[r,as]},children:[{type:b,tag:s,props:{},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:$}]},{type:a,value:"\n    path"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:y}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"'\u002Fparent'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:"\n    component"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:y}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"'~\u002Fpages\u002Fparent.vue'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:"\n    name"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:y}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"'parent'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:"\n    children"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:y}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:a,value:aK},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:$}]},{type:a,value:"\n        path"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:y}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"'child'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:"\n        component"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:y}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"'~\u002Fpages\u002Fparent\u002Fchild.vue'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:"\n        name"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:y}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"'parent-child'"}]},{type:a,value:aK},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"To display the "},{type:b,tag:h,props:{},children:[{type:a,value:"child.vue"}]},{type:a,value:" component, you have to insert the "},{type:b,tag:h,props:{},children:[{type:a,value:aJ}]},{type:a,value:" component inside "},{type:b,tag:h,props:{},children:[{type:a,value:aL}]},{type:a,value:y}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:b,tag:c,props:{className:["filename"]},children:[{type:a,value:aL}]},{type:b,tag:q,props:{className:[r,N]},children:[{type:b,tag:s,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"I am the parent view"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"NuxtNestedPage"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:":foobar"}]},{type:b,tag:c,props:{className:[d,R]},children:[{type:b,tag:c,props:{className:[d,e,S]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:"123"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\u002F\u003E"}]}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:g}]}]}]}]},toc:{title:W,searchDepth:E,depth:E,links:[{id:ai,depth:E,text:aj,children:[{id:ak,depth:3,text:al}]},{id:aB,depth:E,text:aC},{id:aH,depth:E,text:aI}]}},template:aM},templateOptions:{header:G,footer:G,aside:G,asideClass:W,fluid:F,banner:F},_img:{}}],fetch:{"0":{headerLinks:[{title:"Getting Started",to:"\u002Fgetting-started\u002Fintroduction"},{title:"Concepts",to:"\u002Fconcepts\u002Fintroduction"},{title:aM,to:"\u002Fdocs\u002Fusage\u002Fdata-fetching"},{title:"Community",to:"\u002Fcommunity\u002Fgetting-help"}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework",prev:{slug:aN,to:"\u002Fdocs\u002Fdirectory-structure\u002Fnode_modules",title:aN},next:{slug:aO,to:"\u002Fdocs\u002Fdirectory-structure\u002Fplugins",title:aO}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","Alert","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseEm","ProseCode","CodeGroup","ProseOl","ProseBlockquote","ProseH4"])},mutations:ad}}("text","element","span","token","punctuation","tag","\n","prose-code-inline","operator","\u003E"," ","prose-paragraph","\u003C","\u003C\u002F","prose-a","prose-code","pre","line-numbers","code","|","template","string","\n  ","\"",":",".","\n    ","=","property-access",",",2,false,true,"nofollow","noopener","noreferrer","_blank","[","]","language-html","\u003CNuxtLink\u003E","NuxtLink","attr-name","attr-value","attr-equals","div","h1","pages","","alert","prose-h2","(",")","{","}","\u003Ca\u003E","Pages directory",void 0,"info","The ","pages\u002F","vue-router","dynamic-routes","Dynamic Routes","example","Example","language-bash","-"," pages\u002F\n---","group","id","useRoute","language-js","comment","\n\n","keyword","function","route","params","console","\u002F","navigation","Navigation","\u003CRouterLink\u003E","to","Home page","a","nested-routes","Nested Routes","\u003CNuxtNestedPage\u003E","\n      ","pages\u002Fparent.vue","Docs","node_modules","plugins")));