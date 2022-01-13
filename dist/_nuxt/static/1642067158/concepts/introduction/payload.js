__NUXT_JSONP__("/concepts/introduction", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E){return {data:[{page:{key:"content:2.concepts:1.introduction.md",generatedAt:new Date(1642067216462),mtime:new Date(1642067216455),slug:"introduction",title:p,position:"000200010000",to:q,draft:m,page:n,language:"en",empty:m,description:r,excerpt:s,body:{raw:"# What is Nuxt?\n\nNuxt goal is to make web development intuitive and performant with a great developer experience in mind.\n\n## Why Nuxt?\n\nTo understand what is Nuxt, we need to understand what we need to create a modern application:\n::list{type=success}\n\n- A JavaScript framework to bring reactivity and web components, we chose [Vue.js](https:\u002F\u002Fv3.vuejs.org).\n- A bundler to support hot module replacement in development and bundle your code for production, we support both [Webpack 5](https:\u002F\u002Fwebpack.js.org\u002F) and [Vite](https:\u002F\u002Fvitejs.dev\u002F).\n- A transpiler in order to write the latest JavaScript syntax while supporting legacy browsers, we use [esbuild](https:\u002F\u002Fesbuild.github.io) for that.\n- A server for serving your application in development, but also to support [server-side rendering](https:\u002F\u002Fv3.vuejs.org\u002Fguide\u002Fssr\u002Fintroduction.html#what-is-server-side-rendering-ssr) or API routes, Nuxt uses [h3](https:\u002F\u002Fgithub.com\u002Funjs\u002Fh3) for deployment versatility such as serverless, workers, Node.js and unmatched performance.\n- A routing library to handle client-side navigation, we chose [vue-router](https:\u002F\u002Fnext.router.vuejs.org).\n::\n\nThis is only the tip of the iceberg, imagine having to set up all of this for your project, make it work, and then, maintain it over time. We have been doing this since October 2016, tuning all the configurations to provide the best optimization and performance for any Vue application.\n\nNuxt takes care of all of this so you can focus on what matters: **creating your web application**.\n\nOn top of this setup, Nuxt provides a [directory structure](\u002Fdocs\u002Fdirectory-structure\u002Fapp) to follow, focused on specific features to keep your focus on creating, not configuring.\n\n## How does it work?\n\nNuxt is composed of different [core packages](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Ftree\u002Fmain\u002Fpackages):\n::list{type=info}\n\n- Core Engine: [nuxt3](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Ftree\u002Fmain\u002Fpackages\u002Fnuxt3)\n- Bundlers: [@nuxt\u002Fvite-builder](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Ftree\u002Fmain\u002Fpackages\u002Fvite) and [@nuxt\u002Fwebpack-builder](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Ftree\u002Fmain\u002Fpackages\u002Fwebpack)\n- Command line interface: [nuxi](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Ftree\u002Fmain\u002Fpackages\u002Fnuxi)\n- Server engine: [@nuxt\u002Fnitro](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Ftree\u002Fmain\u002Fpackages\u002Fnitro)\n- Development kit: [@nuxt\u002Fkit](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Ftree\u002Fmain\u002Fpackages\u002Fkit)\n- Nuxt 2 Bridge: [@nuxt\u002Fbridge](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Ftree\u002Fmain\u002Fpackages\u002Fbridge)\n::\n\nWe recommend reading each concept to have a full vision of Nuxt capabilities and scope of each package.\n\n## Are you Nuxt?\n\nNuxt is the backbone of your Vue.js project, giving structure to build your project with confidence while keeping flexibility.\n\nExtendable with a strong module ecosystem and hooks engine, it makes it easy to connect your REST or GraphQL endpoints, favorite CMS, CSS frameworks and more. PWA and AMP support is only a module away from your Nuxt project.\n\n::alert{type=info icon=👍}\nReady to try? Head over the [Installation section](\u002Fgetting-started\u002Finstallation).\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"what-is-nuxt"},children:[{type:a,value:p}]},{type:a,value:c},{type:b,tag:j,props:{class:"d-heading-description"},children:[{type:a,value:r}]},{type:a,value:c},{type:b,tag:o,props:{id:t},children:[{type:b,tag:d,props:{href:"#why-nuxt"},children:[{type:a,value:u}]}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"To understand what is Nuxt, we need to understand what we need to create a modern application:"}]},{type:a,value:c},{type:b,tag:v,props:{type:"success"},children:[{type:b,tag:w,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:a,value:"A JavaScript framework to bring reactivity and web components, we chose "},{type:b,tag:d,props:{href:"https:\u002F\u002Fv3.vuejs.org",rel:[e,f,g],target:h},children:[{type:a,value:"Vue.js"}]},{type:a,value:k},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:a,value:"A bundler to support hot module replacement in development and bundle your code for production, we support both "},{type:b,tag:d,props:{href:"https:\u002F\u002Fwebpack.js.org\u002F",rel:[e,f,g],target:h},children:[{type:a,value:"Webpack 5"}]},{type:a,value:x},{type:b,tag:d,props:{href:"https:\u002F\u002Fvitejs.dev\u002F",rel:[e,f,g],target:h},children:[{type:a,value:"Vite"}]},{type:a,value:k},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:a,value:"A transpiler in order to write the latest JavaScript syntax while supporting legacy browsers, we use "},{type:b,tag:d,props:{href:"https:\u002F\u002Fesbuild.github.io",rel:[e,f,g],target:h},children:[{type:a,value:"esbuild"}]},{type:a,value:" for that."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:a,value:"A server for serving your application in development, but also to support "},{type:b,tag:d,props:{href:"https:\u002F\u002Fv3.vuejs.org\u002Fguide\u002Fssr\u002Fintroduction.html#what-is-server-side-rendering-ssr",rel:[e,f,g],target:h},children:[{type:a,value:"server-side rendering"}]},{type:a,value:" or API routes, Nuxt uses "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Funjs\u002Fh3",rel:[e,f,g],target:h},children:[{type:a,value:"h3"}]},{type:a,value:" for deployment versatility such as serverless, workers, Node.js and unmatched performance."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:a,value:"A routing library to handle client-side navigation, we chose "},{type:b,tag:d,props:{href:"https:\u002F\u002Fnext.router.vuejs.org",rel:[e,f,g],target:h},children:[{type:a,value:"vue-router"}]},{type:a,value:k},{type:a,value:c}]},{type:a,value:c}]}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"This is only the tip of the iceberg, imagine having to set up all of this for your project, make it work, and then, maintain it over time. We have been doing this since October 2016, tuning all the configurations to provide the best optimization and performance for any Vue application."}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Nuxt takes care of all of this so you can focus on what matters: "},{type:b,tag:"prose-strong",props:{},children:[{type:a,value:"creating your web application"}]},{type:a,value:k}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"On top of this setup, Nuxt provides a "},{type:b,tag:d,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fapp"},children:[{type:a,value:"directory structure"}]},{type:a,value:" to follow, focused on specific features to keep your focus on creating, not configuring."}]},{type:a,value:c},{type:b,tag:o,props:{id:y},children:[{type:b,tag:d,props:{href:"#how-does-it-work"},children:[{type:a,value:z}]}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Nuxt is composed of different "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Ftree\u002Fmain\u002Fpackages",rel:[e,f,g],target:h},children:[{type:a,value:"core packages"}]},{type:a,value:":"}]},{type:a,value:c},{type:b,tag:v,props:{type:A},children:[{type:b,tag:w,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:a,value:"Core Engine: "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Ftree\u002Fmain\u002Fpackages\u002Fnuxt3",rel:[e,f,g],target:h},children:[{type:a,value:"nuxt3"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:a,value:"Bundlers: "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Ftree\u002Fmain\u002Fpackages\u002Fvite",rel:[e,f,g],target:h},children:[{type:a,value:"@nuxt\u002Fvite-builder"}]},{type:a,value:x},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Ftree\u002Fmain\u002Fpackages\u002Fwebpack",rel:[e,f,g],target:h},children:[{type:a,value:"@nuxt\u002Fwebpack-builder"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:a,value:"Command line interface: "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Ftree\u002Fmain\u002Fpackages\u002Fnuxi",rel:[e,f,g],target:h},children:[{type:a,value:"nuxi"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:a,value:"Server engine: "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Ftree\u002Fmain\u002Fpackages\u002Fnitro",rel:[e,f,g],target:h},children:[{type:a,value:"@nuxt\u002Fnitro"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:a,value:"Development kit: "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Ftree\u002Fmain\u002Fpackages\u002Fkit",rel:[e,f,g],target:h},children:[{type:a,value:"@nuxt\u002Fkit"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:a,value:"Nuxt 2 Bridge: "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Ftree\u002Fmain\u002Fpackages\u002Fbridge",rel:[e,f,g],target:h},children:[{type:a,value:"@nuxt\u002Fbridge"}]},{type:a,value:c}]},{type:a,value:c}]}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"We recommend reading each concept to have a full vision of Nuxt capabilities and scope of each package."}]},{type:a,value:c},{type:b,tag:o,props:{id:B},children:[{type:b,tag:d,props:{href:"#are-you-nuxt"},children:[{type:a,value:C}]}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Nuxt is the backbone of your Vue.js project, giving structure to build your project with confidence while keeping flexibility."}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Extendable with a strong module ecosystem and hooks engine, it makes it easy to connect your REST or GraphQL endpoints, favorite CMS, CSS frameworks and more. PWA and AMP support is only a module away from your Nuxt project."}]},{type:a,value:c},{type:b,tag:"alert",props:{icon:"👍",type:A},children:[{type:b,tag:j,props:{},children:[{type:a,value:"Ready to try? Head over the "},{type:b,tag:d,props:{href:"\u002Fgetting-started\u002Finstallation"},children:[{type:a,value:"Installation section"}]},{type:a,value:k}]}]}]},toc:{title:D,searchDepth:l,depth:l,links:[{id:t,depth:l,text:u},{id:y,depth:l,text:z},{id:B,depth:l,text:C}]}},template:E},templateOptions:{header:n,footer:n,aside:n,asideClass:D,fluid:m,banner:m},_img:{}}],fetch:{"0":{headerLinks:[{title:"Getting Started",to:"\u002Fgetting-started\u002Fintroduction"},{title:"Concepts",to:q},{title:E,to:"\u002Fdocs\u002Fusage\u002Fdata-fetching"},{title:"Community",to:"\u002Fcommunity\u002Fgetting-help"}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework",prev:{slug:"migration",to:"\u002Fgetting-started\u002Fmigration",title:"Migration"},next:{slug:"server-engine",to:"\u002Fconcepts\u002Fserver-engine",title:"Server Engine"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","Alert"])},mutations:s}}("text","element","\n","prose-a","nofollow","noopener","noreferrer","_blank","prose-li","prose-paragraph",".",2,false,true,"prose-h2","What is Nuxt?","\u002Fconcepts\u002Fintroduction","Nuxt goal is to make web development intuitive and performant with a great developer experience in mind.",void 0,"why-nuxt","Why Nuxt?","list","prose-ul"," and ","how-does-it-work","How does it work?","info","are-you-nuxt","Are you Nuxt?","","Docs")));