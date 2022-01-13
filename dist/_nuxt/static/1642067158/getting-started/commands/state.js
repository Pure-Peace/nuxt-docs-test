window.__NUXT__=(function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1642067158",layout:"default",error:aa,serverRendered:a,routePath:C,config:{plausible:{domain:ab},_app:{basePath:ac,assetsPath:"\u002F_nuxt\u002F",cdnURL:aa},docusDbHash:"c7501829"},globalRefs:{},__i18n:{langs:{}},colorMode:{preference:ad,value:ad,unknown:a,forced:b},docus:{currentPath:C,currentPage:{key:ae,generatedAt:new Date(1642067217653),mtime:new Date(1642067217643),slug:H,title:I,position:af,to:C,draft:b,page:a,language:f,empty:b,description:J,excerpt:ab,body:{raw:"# Commands\n\nNuxi is the new CLI experience for Nuxt 3\n\nNuxt 3 has two main commands, one to start the development server and one to make production assets.\n\nSince Nuxt 3 becomes a dev dependency thanks to the new [Nitro server](\u002Fconcepts\u002Fserver-engine), you only need to add two commands in your `package.json`:\n\n```json [package.json]\n\"scripts\": {\n  \"dev\": \"nuxi dev\",\n  \"build\": \"nuxi build\",\n}\n```\n\nThen, you can run each command using `npm run \u003Ccommand\u003E` or `yarn \u003Ccommand\u003E`.\n\n## Development Server\n\nTo start Nuxt in development mode with hot module replacement on \u003Chttp:\u002F\u002Flocalhost:3000\u003E:\n\n::code-group\n\n```bash [Yarn]\nyarn dev\n```\n\n```bash [NPM]\nnpm run dev\n```\n\n::\n\nTo start Nuxt in development mode with HTTPS \u003Chttps:\u002F\u002Flocalhost:3000\u003E (self-signed certificate):\n\n::code-group\n\n```bash [Yarn]\nyarn dev --https\n```\n\n```bash [NPM]\nnpm run dev -- --https\n```\n\n::\n::alert\n`options.server` from `nuxt.config` is not supported. You can use `--port`, `--host`, `--https`, `--ssl-cert` and `--ssl-key` instead.\n::\n\n## Building for production\n\nTo build your Nuxt application for production, run:\n\n::code-group\n\n```bash [Yarn]\nyarn build\n```\n\n```bash [NPM]\nnpm run build\n```\n\n::\n\nNuxt will create a [`.output`](\u002Fdocs\u002Fdirectory-structure\u002Foutput) directory with all your application, server and dependencies ready to be deployed. Check out the [deployment](\u002Fdocs\u002Fdeployment) section to learn where and how you can deploy a Nuxt application using Nitro.\n\n## Previewing your production build\n\nOnce you've built your Nuxt application, you can preview it locally:\n\n```bash\nnpx nuxi preview\n```\n\nIf you're using a supported preset, this will start a local server (for testing purposes only).\n\n## Upgrade Nuxt3 version\n\nTo upgrade Nuxt3 version:\n\n```bash\nnpx nuxi upgrade\n```\n\n## Checking types\n\nTo type-check your application, you can use `nuxi typecheck`. This uses [`vue-tsc`](https:\u002F\u002Fgithub.com\u002Fjohnsoncodehk\u002Fvolar\u002Ftree\u002Fmaster\u002Fpackages\u002Fvue-tsc) under the hood. If you have both a locally installed version of `typescript` and `vue-tsc`, nuxi will use these when type-checking.\n\n```bash\nnpx nuxi typecheck\n```\n",ast:{type:"root",children:[{type:d,tag:"prose-h1",props:{class:"d-heading-title",id:H},children:[{type:c,value:I}]},{type:c,value:g},{type:d,tag:k,props:{class:"d-heading-description"},children:[{type:c,value:J}]},{type:c,value:g},{type:d,tag:k,props:{},children:[{type:c,value:"Nuxt 3 has two main commands, one to start the development server and one to make production assets."}]},{type:c,value:g},{type:d,tag:k,props:{},children:[{type:c,value:"Since Nuxt 3 becomes a dev dependency thanks to the new "},{type:d,tag:m,props:{href:ag},children:[{type:c,value:"Nitro server"}]},{type:c,value:", you only need to add two commands in your "},{type:d,tag:j,props:{},children:[{type:c,value:K}]},{type:c,value:y}]},{type:c,value:g},{type:d,tag:n,props:{},children:[{type:d,tag:h,props:{className:[s]},children:[{type:c,value:K}]},{type:d,tag:o,props:{className:[p,"language-json"]},children:[{type:d,tag:q,props:{},children:[{type:d,tag:h,props:{className:[i,L]},children:[{type:c,value:"\"scripts\""}]},{type:d,tag:h,props:{className:[i,M]},children:[{type:c,value:y}]},{type:c,value:N},{type:d,tag:h,props:{className:[i,D]},children:[{type:c,value:"{"}]},{type:c,value:ah},{type:d,tag:h,props:{className:[i,L]},children:[{type:c,value:"\"dev\""}]},{type:d,tag:h,props:{className:[i,M]},children:[{type:c,value:y}]},{type:c,value:N},{type:d,tag:h,props:{className:[i,ai]},children:[{type:c,value:"\"nuxi dev\""}]},{type:d,tag:h,props:{className:[i,D]},children:[{type:c,value:aj}]},{type:c,value:ah},{type:d,tag:h,props:{className:[i,L]},children:[{type:c,value:"\"build\""}]},{type:d,tag:h,props:{className:[i,M]},children:[{type:c,value:y}]},{type:c,value:N},{type:d,tag:h,props:{className:[i,ai]},children:[{type:c,value:"\"nuxi build\""}]},{type:d,tag:h,props:{className:[i,D]},children:[{type:c,value:aj}]},{type:c,value:g},{type:d,tag:h,props:{className:[i,D]},children:[{type:c,value:"}"}]},{type:c,value:g}]}]}]},{type:c,value:g},{type:d,tag:k,props:{},children:[{type:c,value:"Then, you can run each command using "},{type:d,tag:j,props:{},children:[{type:c,value:"npm run \u003Ccommand\u003E"}]},{type:c,value:" or "},{type:d,tag:j,props:{},children:[{type:c,value:"yarn \u003Ccommand\u003E"}]},{type:c,value:"."}]},{type:c,value:g},{type:d,tag:z,props:{id:ak},children:[{type:d,tag:m,props:{href:"#development-server"},children:[{type:c,value:al}]}]},{type:c,value:g},{type:d,tag:k,props:{},children:[{type:c,value:"To start Nuxt in development mode with hot module replacement on "},{type:d,tag:m,props:{href:am,rel:[O,P,Q],target:R},children:[{type:c,value:am}]},{type:c,value:y}]},{type:c,value:g},{type:d,tag:S,props:{},children:[{type:d,tag:n,props:{},children:[{type:d,tag:h,props:{className:[s]},children:[{type:c,value:T}]},{type:d,tag:o,props:{className:[p,r]},children:[{type:d,tag:q,props:{},children:[{type:d,tag:h,props:{className:[i,u]},children:[{type:c,value:U}]},{type:c,value:" dev\n"}]}]}]},{type:d,tag:n,props:{},children:[{type:d,tag:h,props:{className:[s]},children:[{type:c,value:V}]},{type:d,tag:o,props:{className:[p,r]},children:[{type:d,tag:q,props:{},children:[{type:d,tag:h,props:{className:[i,u]},children:[{type:c,value:W}]},{type:c,value:" run dev\n"}]}]}]}]},{type:c,value:g},{type:d,tag:k,props:{},children:[{type:c,value:"To start Nuxt in development mode with HTTPS "},{type:d,tag:m,props:{href:an,rel:[O,P,Q],target:R},children:[{type:c,value:an}]},{type:c,value:" (self-signed certificate):"}]},{type:c,value:g},{type:d,tag:S,props:{},children:[{type:d,tag:n,props:{},children:[{type:d,tag:h,props:{className:[s]},children:[{type:c,value:T}]},{type:d,tag:o,props:{className:[p,r]},children:[{type:d,tag:q,props:{},children:[{type:d,tag:h,props:{className:[i,u]},children:[{type:c,value:U}]},{type:c,value:" dev --https\n"}]}]}]},{type:d,tag:n,props:{},children:[{type:d,tag:h,props:{className:[s]},children:[{type:c,value:V}]},{type:d,tag:o,props:{className:[p,r]},children:[{type:d,tag:q,props:{},children:[{type:d,tag:h,props:{className:[i,u]},children:[{type:c,value:W}]},{type:c,value:" run dev -- --https\n"}]}]}]}]},{type:c,value:g},{type:d,tag:"alert",props:{},children:[{type:d,tag:k,props:{},children:[{type:d,tag:j,props:{},children:[{type:c,value:"options.server"}]},{type:c,value:" from "},{type:d,tag:j,props:{},children:[{type:c,value:ao}]},{type:c,value:" is not supported. You can use "},{type:d,tag:j,props:{},children:[{type:c,value:"--port"}]},{type:c,value:X},{type:d,tag:j,props:{},children:[{type:c,value:"--host"}]},{type:c,value:X},{type:d,tag:j,props:{},children:[{type:c,value:"--https"}]},{type:c,value:X},{type:d,tag:j,props:{},children:[{type:c,value:"--ssl-cert"}]},{type:c,value:ap},{type:d,tag:j,props:{},children:[{type:c,value:"--ssl-key"}]},{type:c,value:" instead."}]}]},{type:c,value:g},{type:d,tag:z,props:{id:aq},children:[{type:d,tag:m,props:{href:"#building-for-production"},children:[{type:c,value:ar}]}]},{type:c,value:g},{type:d,tag:k,props:{},children:[{type:c,value:"To build your Nuxt application for production, run:"}]},{type:c,value:g},{type:d,tag:S,props:{},children:[{type:d,tag:n,props:{},children:[{type:d,tag:h,props:{className:[s]},children:[{type:c,value:T}]},{type:d,tag:o,props:{className:[p,r]},children:[{type:d,tag:q,props:{},children:[{type:d,tag:h,props:{className:[i,u]},children:[{type:c,value:U}]},{type:c,value:" build\n"}]}]}]},{type:d,tag:n,props:{},children:[{type:d,tag:h,props:{className:[s]},children:[{type:c,value:V}]},{type:d,tag:o,props:{className:[p,r]},children:[{type:d,tag:q,props:{},children:[{type:d,tag:h,props:{className:[i,u]},children:[{type:c,value:W}]},{type:c,value:" run build\n"}]}]}]}]},{type:c,value:g},{type:d,tag:k,props:{},children:[{type:c,value:"Nuxt will create a "},{type:d,tag:m,props:{href:as},children:[{type:d,tag:j,props:{},children:[{type:c,value:at}]}]},{type:c,value:" directory with all your application, server and dependencies ready to be deployed. Check out the "},{type:d,tag:m,props:{href:au},children:[{type:c,value:"deployment"}]},{type:c,value:" section to learn where and how you can deploy a Nuxt application using Nitro."}]},{type:c,value:g},{type:d,tag:z,props:{id:av},children:[{type:d,tag:m,props:{href:"#previewing-your-production-build"},children:[{type:c,value:aw}]}]},{type:c,value:g},{type:d,tag:k,props:{},children:[{type:c,value:"Once you've built your Nuxt application, you can preview it locally:"}]},{type:c,value:g},{type:d,tag:n,props:{},children:[{type:d,tag:o,props:{className:[p,r]},children:[{type:d,tag:q,props:{},children:[{type:c,value:"npx nuxi preview\n"}]}]}]},{type:c,value:g},{type:d,tag:k,props:{},children:[{type:c,value:"If you're using a supported preset, this will start a local server (for testing purposes only)."}]},{type:c,value:g},{type:d,tag:z,props:{id:ax},children:[{type:d,tag:m,props:{href:"#upgrade-nuxt3-version"},children:[{type:c,value:ay}]}]},{type:c,value:g},{type:d,tag:k,props:{},children:[{type:c,value:"To upgrade Nuxt3 version:"}]},{type:c,value:g},{type:d,tag:n,props:{},children:[{type:d,tag:o,props:{className:[p,r]},children:[{type:d,tag:q,props:{},children:[{type:c,value:"npx nuxi upgrade\n"}]}]}]},{type:c,value:g},{type:d,tag:z,props:{id:az},children:[{type:d,tag:m,props:{href:"#checking-types"},children:[{type:c,value:aA}]}]},{type:c,value:g},{type:d,tag:k,props:{},children:[{type:c,value:"To type-check your application, you can use "},{type:d,tag:j,props:{},children:[{type:c,value:"nuxi typecheck"}]},{type:c,value:". This uses "},{type:d,tag:m,props:{href:"https:\u002F\u002Fgithub.com\u002Fjohnsoncodehk\u002Fvolar\u002Ftree\u002Fmaster\u002Fpackages\u002Fvue-tsc",rel:[O,P,Q],target:R},children:[{type:d,tag:j,props:{},children:[{type:c,value:aB}]}]},{type:c,value:" under the hood. If you have both a locally installed version of "},{type:d,tag:j,props:{},children:[{type:c,value:aC}]},{type:c,value:ap},{type:d,tag:j,props:{},children:[{type:c,value:aB}]},{type:c,value:", nuxi will use these when type-checking."}]},{type:c,value:g},{type:d,tag:n,props:{},children:[{type:d,tag:o,props:{className:[p,r]},children:[{type:d,tag:q,props:{},children:[{type:c,value:"npx nuxi typecheck\n"}]}]}]}]},toc:{title:e,searchDepth:t,depth:t,links:[{id:ak,depth:t,text:al},{id:aq,depth:t,text:ar},{id:av,depth:t,text:aw},{id:ax,depth:t,text:ay},{id:az,depth:t,text:aA}]}},template:Y},settings:{title:"Nuxt 3",contentDir:"content",url:"https:\u002F\u002Fv3.nuxtjs.org",description:aD,template:aE,credits:b,layout:{header:a,footer:a,aside:b,asideClass:e,fluid:b,banner:b},twitter:"nuxt_js",algolia:{appId:"1V8G7N9GF0",apiKey:"60a01900a4b726d667eab75b6f337592",indexName:"nuxtjs",facetFilters:["tags:v3"]},github:{repo:"nuxt\u002Fframework",branch:"main",dir:aE,releases:b,url:"https:\u002F\u002Fgithub.com",apiUrl:"https:\u002F\u002Fapi.github.com\u002Frepos"}},theme:{header:{logo:a,title:b},colors:{primary:"#00DC82",prism:{foreground:aF,background:"#fbfbfb dark:#1e1e1e",class:v,builtin:v,function:v,keyword:"#096d7c dark:#22D3EE",string:A,number:A,selector:A,boolean:A,property:aG,punctuation:aG,comment:"#758575 dark:#a0ada0",literal:"#429988 dark:#2f8a89",variable:aF,constant:v,deleted:"#a14f55 #a14f55",namespace:v,decorator:v,regex:A,"json-property":"#078ce5 dark:#22D3EE","line-number":"#888888","line-number-gutter":"#eeeeee","line-highlight-background":aH,"selection-background":aH},logo:"#003543"},shortcuts:{"d-body-bg":"bg-white dark:bg-secondary-black","d-body-text-color":"text-secondary-darker dark:text-white","d-secondary-bg":"bg-gray-500 dark:bg-cloud-light","d-secondary-text":"text-gray-500 dark:text-cloud-light","d-secondary-text-hover":"text-gray-700 dark:text-cloud-lightest","d-tertiary-text":"text-gray-400 dark:text-cloud-dark","d-border-tertiary":"border-gray-400 dark:border-gray-500","d-primary-text-hover":"text-gray-600 dark:text-cloud-lighter","d-secondary-text-active":"text-gray-900 dark:text-cloud-surface","d-prose-code-inline-bg":aI,"d-prose-code-bg":aI,"d-prose-thead-border":"border-b border-gray-200 dark:border-secondary-dark","d-prose-tr-border":"border-b border-gray-100 dark:border-secondary-darker","d-prose-blockquote-border":"border-l-2 border-gray-200 dark:border-secondary-darker","d-prose-blockquote-text":"d-secondary-text","d-prose-a-text":"text-primary-500","d-prose-a-border":"border-b border-transparent","d-prose-a-border-hover":"border-b border-primary-500","d-prose-a-headline-border":"border-b border-dashed border-gray-900 dark:border-gray-100","d-text-primary":"text-primary-500 dark:text-primary-400","d-border-primary":"border-primary-500 dark:border-primary-400","d-bg-primary":"bg-primary-500 dark:bg-primary-400","d-page-mobile-toc-bg":"d-body-bg bg-opacity-80 dark:bg-opacity-80","d-aside-header-bg":"bg-gray-50 dark:bg-secondary-darkest","d-active-aside-navigation-item-bg":"bg-primary-50 dark:bg-secondary-darkest","d-active-aside-navigation-item-text":"text-primary-500 dark:text-primary-400 ","d-code-group-header-bg":"bg-gray-200 dark:bg-secondary-darker","d-code-group-tab":"bg-gray-300 dark:bg-secondary-dark","d-prose-code-filename-bg":"bg-gray-100 dark:bg-secondary-darker","d-prose-code-filename-text":"text-gray-600 dark:text-secondary-light","d-prose-code-inline-in-heading-border-hover":"border-gray-500 dark:border-gray-200","d-prose-hr-border":"border-t border-gray-100 dark:border-secondary-darker","d-prose-ul-li-bullet":"d-secondary-bg","d-text-icon":"d-secondary-text hover:d-secondary-text-hover","d-icon":"d-text-icon focus:outline-none","light-img":"dark:hidden","dark-img":"light:hidden","d-max-w-container":"max-w-7xl","d-px-container":"px-4 sm:px-6","d-container":"d-max-w-container mx-auto","d-container-content":"d-container d-px-container","d-blur-header":"blur-12","d-bg-header":"bg-white bg-opacity-80 dark:bg-secondary-black dark:bg-opacity-80","d-border":"light:border-gray-200 light:border-opacity-50 dark:border-secondary-darker","d-border-hover":"border-primary-200 dark:border-secondary-dark","d-border-header":"border-none","d-header":"sticky w-full top-0 z-50 d-bg-header d-border-header d-blur-header h-header","d-header-title":"text-2xl font-bold tracking-tighter text-gray-900 dark:text-gray-100","d-header-title-logo":"d-header-title ml-4","d-header-logo":"flex items-center flex-none lg:w-60","d-logo-color":"text-black dark:text-white","d-logo":"w-auto h-6 md:h-7 text-logo dark:text-white","d-heading-title":"!mb-0 !mt-0 flex-1 !text-4xl font-semibold tracking-tight","d-heading-description":"!mt-2 !mb-0 text-lg font-medium d-secondary-text","d-heading-hr":"!mt-4 !mb-0 d-border","d-scrollbar":"scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-secondary-dark scrollbar-thumb-rounded","d-aside-title":"py-2 text-base font-semibold text-gray-900 cursor-pointer dark:text-gray-100","d-header-home":"sticky w-full top-0 z-50 bg-secondary-black bg-opacity-80 d-border-header d-blur-header h-header","d-bg-header-home":"bg-opacity-80 bg-secondary-black","d-aside-header-home-bg":"bg-secondary-darkest"}},navigation:{en:[{id:"content:1.getting-started:index.md",slug:e,to:"\u002Fgetting-started",page:a,position:"000199990000",draft:b,language:f,children:[{id:"content:1.getting-started:1.introduction.md",slug:aJ,to:E,page:a,position:"000100010000",draft:b,language:f,children:[],title:"Introduction",mtime:"2022-01-13T09:46:55.005Z",empty:b,description:aK,layout:{aside:a,asideClass:e}},{id:"content:1.getting-started:2.installation.md",slug:"installation",to:"\u002Fgetting-started\u002Finstallation",page:a,position:"000100020000",draft:b,language:f,children:[],title:"Installation",mtime:"2022-01-13T09:46:54.989Z",empty:b,description:aK,layout:{aside:a,asideClass:e}},{id:"content:1.getting-started:3.bridge.md",slug:"bridge",to:"\u002Fgetting-started\u002Fbridge",page:a,position:"000100030000",draft:b,language:f,children:[],title:"Bridge",mtime:"2022-01-13T09:46:55.142Z",empty:b,description:"Experience Nuxt 3 features on existing Nuxt 2 projects.",layout:{aside:a,asideClass:e}},{id:"content:1.getting-started:4.bridge-composition-api.md",slug:"bridge-composition-api",to:"\u002Fgetting-started\u002Fbridge-composition-api",page:a,position:"000100040000",draft:b,language:f,children:[],title:"Migrating to Bridge Composition API",mtime:"2022-01-13T09:46:55.055Z",navigation:b,empty:b,description:"Nuxt Bridge provides access to Composition API syntax. It is specifically designed to be aligned with Nuxt 3. Because of this, there are a few extra steps to take when enabling Nuxt Bridge, if you have been using the Composition API previously.",hidden:a,layout:{aside:a,asideClass:e}},{id:ae,slug:H,to:C,page:a,position:af,draft:b,language:f,children:[],title:I,mtime:"2022-01-13T09:46:55.459Z",empty:b,description:J,layout:{aside:a,asideClass:e}},{id:"content:1.getting-started:6.migration.md",slug:"migration",to:"\u002Fgetting-started\u002Fmigration",page:a,position:"000100060000",draft:b,language:f,children:[],title:"Migration",mtime:"2022-01-13T09:46:55.099Z",empty:b,description:"Nuxt 3 migration guide. Work in progress 🚧",layout:{aside:a,asideClass:e}}],title:"Get Started",mtime:aL,layout:{aside:a,asideClass:e},navigation:{exclusive:a,redirect:E},empty:a,description:e,exclusive:a,redirect:E},{id:"content:2.concepts:index.md",slug:e,to:"\u002Fconcepts",page:a,position:"000299990000",draft:b,language:f,children:[{id:"content:2.concepts:1.introduction.md",slug:aJ,to:F,page:a,position:"000200010000",draft:b,language:f,children:[],title:"What is Nuxt?",mtime:"2022-01-13T09:46:55.135Z",empty:b,description:"Nuxt goal is to make web development intuitive and performant with a great developer experience in mind.",layout:{aside:a,asideClass:e}},{id:"content:2.concepts:2.server-engine.md",slug:"server-engine",to:ag,page:a,position:"000200020000",draft:b,language:f,children:[],title:"Server Engine",mtime:"2022-01-13T09:46:55.126Z",empty:b,description:"Nuxt 3 is powered by a new server engine, code-named \"Nitro\".",layout:{aside:a,asideClass:e}},{id:"content:2.concepts:3.typescript.md",slug:aC,to:"\u002Fconcepts\u002Ftypescript",page:a,position:"000200030000",draft:b,language:f,children:[],title:"TypeScript",mtime:aL,empty:b,description:"Nuxt 3 is fully typed and provides helpful shortcuts to ensure you have access to accurate type information when you are coding.",layout:{aside:a,asideClass:e}},{id:"content:2.concepts:4.esm.md",slug:"esm",to:"\u002Fconcepts\u002Fesm",page:a,position:"000200040000",draft:b,language:f,children:[],title:"Native ES Modules",mtime:"2022-01-13T09:46:55.426Z",empty:b,description:"Nuxt 3 (and Bridge) uses Native ES Modules.",layout:{aside:a,asideClass:e}}],title:aM,mtime:"2022-01-13T09:46:55.167Z",layout:{aside:a,asideClass:e},navigation:{exclusive:a,redirect:F},empty:a,description:e,exclusive:a,redirect:F},{id:"content:3.docs:index.md",slug:e,to:"\u002Fdocs",page:a,position:"000399990000",draft:b,language:f,children:[{id:"content:3.docs:1.usage:index.md",slug:e,to:"\u002Fdocs\u002Fusage",page:a,position:"000300019999",draft:b,language:f,children:[{id:"content:3.docs:1.usage:1.data-fetching.md",slug:"data-fetching",to:w,page:a,position:"000300010001",draft:b,language:f,children:[],title:"Data Fetching",mtime:"2022-01-13T09:46:55.337Z",empty:b,description:"Nuxt provides useFetch, useLazyFetch, useAsyncData and useLazyAsyncData to handle data fetching within your application.",layout:{aside:a,asideClass:e}},{id:"content:3.docs:1.usage:2.state.md",slug:"state",to:"\u002Fdocs\u002Fusage\u002Fstate",page:a,position:"000300010002",draft:b,language:f,children:[],title:"State",mtime:"2022-01-13T09:46:55.329Z",empty:b,description:"Nuxt provides useState composable to create a reactive and SSR-friendly shared state across components.",layout:{aside:a,asideClass:e}},{id:"content:3.docs:1.usage:3.meta-tags.md",slug:"meta-tags",to:"\u002Fdocs\u002Fusage\u002Fmeta-tags",page:a,position:"000300010003",draft:b,language:f,children:[],title:"Meta Tags",mtime:"2022-01-13T09:46:55.365Z",empty:b,description:"You can customize the meta tags for your site through several different ways:",layout:{aside:a,asideClass:e}},{id:"content:3.docs:1.usage:4.nuxt-app.md",slug:"nuxt-app",to:"\u002Fdocs\u002Fusage\u002Fnuxt-app",page:a,position:"000300010004",draft:b,language:f,children:[],title:"NuxtApp",mtime:"2022-01-13T09:46:55.370Z",empty:b,description:"In Nuxt 3, you can access runtime app context within composables, components and plugins.",layout:{aside:a,asideClass:e}},{id:"content:3.docs:1.usage:5.runtime-config.md",slug:"runtime-config",to:"\u002Fdocs\u002Fusage\u002Fruntime-config",page:a,position:"000300010005",draft:b,language:f,children:[],title:"Runtime Config",mtime:"2022-01-13T09:46:55.375Z",empty:b,description:"Nuxt provides an API to define the runtime config within your application and API routes.",layout:{aside:a,asideClass:e}},{id:"content:3.docs:1.usage:6.cookies.md",slug:"cookies",to:"\u002Fdocs\u002Fusage\u002Fcookies",page:a,position:"000300010006",draft:b,language:f,children:[],title:"Cookies",mtime:"2022-01-13T09:46:55.388Z",empty:b,description:"Nuxt provides an SSR-friendly composable to read and write cookies.",layout:{aside:a,asideClass:e}},{id:"content:3.docs:1.usage:7.ssr.md",slug:"ssr",to:"\u002Fdocs\u002Fusage\u002Fssr",page:a,position:"000300010007",draft:b,language:f,children:[],title:"SSR utilities",mtime:"2022-01-13T09:46:55.386Z",empty:b,description:"Nuxt provides composables and utilities for first-class server-side-rendering support.",layout:{aside:a,asideClass:e}}],title:"Usage",mtime:"2022-01-13T09:46:55.402Z",layout:{aside:a,asideClass:e},navigation:{collapse:b,redirect:w},empty:a,description:e,collapse:b,redirect:w},{id:"content:3.docs:2.directory-structure:index.md",slug:e,to:"\u002Fdocs\u002Fdirectory-structure",page:a,position:"000300029999",draft:b,language:f,children:[{id:"content:3.docs:2.directory-structure:1.nuxt.md",slug:"nuxt",to:"\u002Fdocs\u002Fdirectory-structure\u002Fnuxt",page:a,position:"000300020001",draft:b,language:f,children:[],title:".nuxt",mtime:aN,icon:l,head:{title:"Nuxt directory"},empty:b,description:"The .nuxt\u002F directory is used by Nuxt in development to generate your Vue application.",layout:{aside:a,asideClass:e}},{id:"content:3.docs:2.directory-structure:2.output.md",slug:"output",to:as,page:a,position:"000300020002",draft:b,language:f,children:[],title:at,mtime:"2022-01-13T09:46:55.218Z",icon:l,head:{title:"Output directory"},empty:b,description:"The .output\u002F directory is created by Nuxt when building your application for production.",layout:{aside:a,asideClass:e}},{id:"content:3.docs:2.directory-structure:3.assets.md",slug:aO,to:"\u002Fdocs\u002Fdirectory-structure\u002Fassets",page:a,position:"000300020003",draft:b,language:f,children:[],title:aO,mtime:"2022-01-13T09:46:55.234Z",icon:l,head:{title:"Assets directory"},empty:b,description:"The assets\u002F directory is used to add all the website assets that will be processed by the build tool (Webpack or Vite).",layout:{aside:a,asideClass:e}},{id:"content:3.docs:2.directory-structure:4.components.md",slug:aP,to:"\u002Fdocs\u002Fdirectory-structure\u002Fcomponents",page:a,position:"000300020004",draft:b,language:f,children:[],title:aP,mtime:"2022-01-13T09:46:55.219Z",icon:l,head:{title:"Components directory"},empty:b,description:"The components\u002F directory is where you put all your Vue components which can then be imported inside your pages or other components (learn more).",layout:{aside:a,asideClass:e}},{id:"content:3.docs:2.directory-structure:5.composables.md",slug:aQ,to:"\u002Fdocs\u002Fdirectory-structure\u002Fcomposables",page:a,position:"000300020005",draft:b,language:f,children:[],title:aQ,mtime:"2022-01-13T09:46:55.236Z",icon:l,head:{title:"Composables directory"},empty:b,description:"Nuxt 3 supports composables\u002F directory to automatically import your Vue composables into your application using auto-imports!",layout:{aside:a,asideClass:e}},{id:"content:3.docs:2.directory-structure:6.layouts.md",slug:aR,to:"\u002Fdocs\u002Fdirectory-structure\u002Flayouts",page:a,position:"000300020006",draft:b,language:f,children:[],title:aR,mtime:"2022-01-13T09:46:55.240Z",icon:l,head:{title:"Layouts directory"},empty:b,description:"Nuxt provides a customizable layouts framework you can use throughout your application, ideal for extracting common UI or code patterns into reusable layout components.",layout:{aside:a,asideClass:e}},{id:"content:3.docs:2.directory-structure:7.node_modules.md",slug:aS,to:"\u002Fdocs\u002Fdirectory-structure\u002Fnode_modules",page:a,position:"000300020007",draft:b,language:f,children:[],title:aS,mtime:"2022-01-13T09:46:55.251Z",icon:l,head:{title:"Node modules directory"},empty:b,description:"The node_modules directory is created by the package manager (npm or yarn) to store the dependencies of your project.",layout:{aside:a,asideClass:e}},{id:"content:3.docs:2.directory-structure:8.modules.md",slug:aT,to:"\u002Fdocs\u002Fdirectory-structure\u002Fmodules",page:a,position:"000300020008",draft:b,language:f,children:[],title:aT,mtime:"2022-01-13T09:46:55.252Z",icon:l,navigation:b,head:{title:"Local modules directory"},empty:b,description:"Nuxt has a powerful modules engine.",hidden:a,layout:{aside:a,asideClass:e}},{id:"content:3.docs:2.directory-structure:9.pages.md",slug:aU,to:"\u002Fdocs\u002Fdirectory-structure\u002Fpages",page:a,position:"000300020009",draft:b,language:f,children:[],title:aU,mtime:"2022-01-13T09:46:55.313Z",icon:l,head:{title:"Pages directory"},empty:b,description:e,layout:{aside:a,asideClass:e}},{id:"content:3.docs:2.directory-structure:10.plugins.md",slug:aV,to:"\u002Fdocs\u002Fdirectory-structure\u002Fplugins",page:a,position:"000300020010",draft:b,language:f,children:[],title:aV,mtime:aW,icon:l,head:{title:"Plugins directory"},empty:b,description:"Nuxt will automatically read the files in your plugins directory and load them. You can use .server or .client suffix in the file name to load a plugin only on the server or client side.",layout:{aside:a,asideClass:e}},{id:"content:3.docs:2.directory-structure:11.public.md",slug:aX,to:"\u002Fdocs\u002Fdirectory-structure\u002Fpublic",page:a,position:"000300020011",draft:b,language:f,children:[],title:aX,mtime:"2022-01-13T09:46:55.197Z",icon:l,head:{title:"Public directory"},empty:b,description:"The public\u002F directory is directly served at server root and contains public files that have to keep their names (e.g. robots.txt) or likely won't change (e.g. favicon.ico).",layout:{aside:a,asideClass:e}},{id:"content:3.docs:2.directory-structure:12.server.md",slug:Z,to:"\u002Fdocs\u002Fdirectory-structure\u002Fserver",page:a,position:"000300020012",draft:b,language:f,children:[],title:Z,mtime:"2022-01-13T09:46:55.200Z",icon:l,head:{title:"Server directory"},empty:b,description:"The server directory is used to create any backend logic for your Nuxt application. It supports HMR and powerful features.",layout:{aside:a,asideClass:e}},{id:"content:3.docs:2.directory-structure:13.gitignore.md",slug:"gitignore",to:"\u002Fdocs\u002Fdirectory-structure\u002Fgitignore",page:a,position:"000300020013",draft:b,language:f,children:[],title:".gitignore",mtime:"2022-01-13T09:46:55.210Z",icon:B,head:{title:"Gitignore file"},empty:b,description:"A .gitignore file specifies intentionally untracked files that git should ignore. Learn more about it in the git documentation.",layout:{aside:a,asideClass:e}},{id:"content:3.docs:2.directory-structure:14.app.md",slug:"app",to:_,page:a,position:"000300020014",draft:b,language:f,children:[],title:"app.vue",mtime:"2022-01-13T09:46:55.212Z",icon:B,head:{title:"App file"},empty:b,description:"The app.vue file is the main component in your Nuxt 3 applications.",layout:{aside:a,asideClass:e}},{id:"content:3.docs:2.directory-structure:15.nuxt.config.md",slug:ao,to:"\u002Fdocs\u002Fdirectory-structure\u002Fnuxt.config",page:a,position:"000300020015",draft:b,language:f,children:[],title:"nuxt.config.ts",mtime:"2022-01-13T09:46:55.261Z",icon:B,head:{title:"Nuxt configuration file"},empty:b,description:"Nuxt can be easily configured with a single nuxt.config file, which can have either a .js, .ts or .mjs extension.",layout:{aside:a,asideClass:e}},{id:"content:3.docs:2.directory-structure:16.package.md",slug:"package",to:"\u002Fdocs\u002Fdirectory-structure\u002Fpackage",page:a,position:"000300020016",draft:b,language:f,children:[],title:K,mtime:"2022-01-13T09:46:55.217Z",icon:B,head:{title:"Package file"},empty:b,description:"The package.json file contains all the dependencies and scripts for your application (learn more).",layout:{aside:a,asideClass:e}},{id:"content:3.docs:2.directory-structure:17.tsconfig.md",slug:"tsconfig",to:"\u002Fdocs\u002Fdirectory-structure\u002Ftsconfig",page:a,position:"000300020017",draft:b,language:f,children:[],title:"tsconfig.json",mtime:"2022-01-13T09:46:55.363Z",icon:B,head:{title:"TypeScript configuration file"},empty:b,description:"Nuxt automatically generates a .nuxt\u002Ftsconfig.json file with the resolved aliases you are using in your Nuxt project, as well as with other sensible defaults. You can benefit from this by creating a tsconfig.json in the root of your project with the following content:",layout:{aside:a,asideClass:e}}],title:"Directory structure",mtime:"2022-01-13T09:46:55.328Z",layout:{aside:a,asideClass:e},navigation:{collapse:b,redirect:_},empty:a,description:e,collapse:b,redirect:_},{id:"content:3.docs:3.deployment:index.md",slug:e,to:au,page:a,position:"000300039999",draft:b,language:f,children:[{id:"content:3.docs:3.deployment:1.azure.md",slug:"azure",to:"\u002Fdocs\u002Fdeployment\u002Fazure",page:a,position:"000300030001",draft:b,language:f,children:[],title:"Azure",mtime:"2022-01-13T09:46:55.404Z",icon:"LogoAzure",empty:b,description:"How to deploy Nuxt to Azure Static Web Apps or Azure Functions.",layout:{aside:a,asideClass:e}},{id:"content:3.docs:3.deployment:2.cloudflare.md",slug:"cloudflare",to:"\u002Fdocs\u002Fdeployment\u002Fcloudflare",page:a,position:"000300030002",draft:b,language:f,children:[],title:"Cloudflare Workers",mtime:"2022-01-13T09:46:55.416Z",icon:"LogoCloudFlare",empty:b,description:"How to deploy Nuxt to Cloudflare Workers.",layout:{aside:a,asideClass:e}},{id:"content:3.docs:3.deployment:3.firebase.md",slug:"firebase",to:"\u002Fdocs\u002Fdeployment\u002Ffirebase",page:a,position:"000300030003",draft:b,language:f,children:[],title:"Firebase Hosting",mtime:"2022-01-13T09:46:55.481Z",icon:"LogoFirebase",empty:b,description:"How to deploy Nuxt to Firebase Hosting.",layout:{aside:a,asideClass:e}},{id:"content:3.docs:3.deployment:4.netlify.md",slug:"netlify",to:"\u002Fdocs\u002Fdeployment\u002Fnetlify",page:a,position:"000300030004",draft:b,language:f,children:[],title:"Netlify",mtime:"2022-01-13T09:46:55.423Z",icon:"LogoNetlify",empty:b,description:"How to deploy Nuxt to Netlify.",layout:{aside:a,asideClass:e}},{id:"content:3.docs:3.deployment:5.pm2.md",slug:"pm2",to:"\u002Fdocs\u002Fdeployment\u002Fpm2",page:a,position:"000300030005",draft:b,language:f,children:[],title:"PM2",mtime:"2022-01-13T09:46:55.464Z",icon:"LogoPM2",empty:b,description:"How to deploy Nuxt to a Node.js hosting using PM2.",layout:{aside:a,asideClass:e}},{id:"content:3.docs:3.deployment:6.vercel.md",slug:"vercel",to:"\u002Fdocs\u002Fdeployment\u002Fvercel",page:a,position:"000300030006",draft:b,language:f,children:[],title:"Vercel",mtime:"2022-01-13T09:46:55.469Z",icon:"LogoVercel",empty:b,description:"How to deploy Nuxt to Vercel.",layout:{aside:a,asideClass:e}},{id:"content:3.docs:3.deployment:99.presets.md",slug:"presets",to:$,page:a,position:x,draft:b,language:f,children:[{id:"content:3.docs:3.deployment:99.presets:custom.md",slug:"custom",to:"\u002Fdocs\u002Fdeployment\u002Fpresets\u002Fcustom",page:a,position:x,draft:b,language:f,children:[],title:"Custom build preset (advanced)",mtime:aY,empty:b,description:"Get full control of Nuxt Nitro output to deploy on any kind of hosting platform.",layout:{aside:a,asideClass:e}},{id:"content:3.docs:3.deployment:99.presets:lambda.md",slug:"lambda",to:"\u002Fdocs\u002Fdeployment\u002Fpresets\u002Flambda",page:a,position:x,draft:b,language:f,children:[],title:"Lambda function",mtime:"2022-01-13T09:46:55.487Z",empty:b,description:"Discover the Lambda function preset with Nitro to deploy Nuxt to any lambda-compatible serverless platform.",layout:{aside:a,asideClass:e}},{id:"content:3.docs:3.deployment:99.presets:node.md",slug:"node",to:"\u002Fdocs\u002Fdeployment\u002Fpresets\u002Fnode",page:a,position:x,draft:b,language:f,children:[],title:"Node.js function",mtime:"2022-01-13T09:46:55.471Z",empty:b,description:"Discover the Node.js function preset with Nitro to attach Nuxt as a middleware to any Node.js server.",layout:{aside:a,asideClass:e}},{id:"content:3.docs:3.deployment:99.presets:server.md",slug:Z,to:"\u002Fdocs\u002Fdeployment\u002Fpresets\u002Fserver",page:a,position:x,draft:b,language:f,children:[],title:"Node.js server",mtime:"2022-01-13T09:46:55.490Z",empty:b,description:"Discover the Node.js server preset with Nitro to deploy on any Node hosting.",layout:{aside:a,asideClass:e}},{id:"content:3.docs:3.deployment:99.presets:service-worker.md",slug:"service-worker",to:"\u002Fdocs\u002Fdeployment\u002Fpresets\u002Fservice-worker",page:a,position:x,draft:b,language:f,children:[],title:"Service worker",mtime:"2022-01-13T09:46:55.494Z",empty:b,description:"Explore the Service worker preset with Nitro to push the boundaries of Nuxt rendering to the edge.",layout:{aside:a,asideClass:e}}],title:"Presets",mtime:"2022-01-13T09:46:55.467Z",icon:"IconPresets",empty:b,description:"Nuxt provides four generic presets that you can use out-of-the-box.",layout:{aside:a,asideClass:e}}],title:"Deployment",mtime:aY,layout:{aside:a,asideClass:e},navigation:{collapse:b,exclusive:b,redirect:$},empty:a,description:e,collapse:b,exclusive:b,redirect:$}],title:Y,mtime:aN,layout:{aside:a},navigation:{exclusive:a,redirect:w},empty:a,description:e,exclusive:a,redirect:w},{id:"content:4.community:index.md",slug:e,to:"\u002Fcommunity",page:a,position:"000499990000",draft:b,language:f,children:[{id:"content:4.community:1.getting-help.md",slug:"getting-help",to:G,page:a,position:"000400010000",draft:b,language:f,children:[],title:"Getting Help",mtime:"2022-01-13T09:46:55.455Z",empty:b,description:"At some point, you may find that there's an issue you need some help with. But don't worry! We're a friendly community of developers and we'd love to help.",layout:{aside:a,asideClass:e}},{id:"content:4.community:2.reporting-bugs.md",slug:"reporting-bugs",to:"\u002Fcommunity\u002Freporting-bugs",page:a,position:"000400020000",draft:b,language:f,children:[],title:"Reporting Bugs",mtime:"2022-01-13T09:46:55.168Z",empty:b,description:"Try as we might, we never completely eliminate bugs. One of the most valuable roles in open source is taking the time to report bugs helpfully. Even if you can't fix the underlying code, reporting a bug well can enable someone else with a bit more familiarity with the codebase to spot a pattern or make a quick fix.",layout:{aside:a,asideClass:e}},{id:"content:4.community:3.contribution.md",slug:"contribution",to:"\u002Fcommunity\u002Fcontribution",page:a,position:"000400030000",draft:b,language:f,children:[],title:"Contribution",mtime:"2022-01-13T09:46:55.174Z",empty:b,description:"Nuxt is a community project - and so we love contributions of all kinds! ❤️",layout:{aside:a,asideClass:e}}],title:aZ,mtime:aW,layout:{aside:a,asideClass:e},navigation:{collapse:a,exclusive:a,redirect:G},empty:a,description:e,collapse:a,exclusive:a,redirect:G},{id:"content:index.md",mtime:"2022-01-13T09:46:55.026Z",slug:e,title:aD,position:a_,to:ac,draft:b,page:a,language:f,navigation:b,template:"Page-post",description:"Build your next application with Vue 3 and experience hybrid rendering, with an improved directory structure and new features Nuxt 3 is an open source framework making web development simple and powerful.",empty:b,children:[],hidden:a},{id:"content:_collections",slug:"collections",to:"\u002Fcollections",page:b,position:a_,children:[{id:"content:_collections:header.md",slug:"header",to:"\u002Fcollections\u002Fheader",page:b,position:"999999990000",draft:b,language:f,children:[],title:"Header",mtime:"2022-01-13T09:46:55.182Z",links:[{title:"Getting Started",to:E},{title:aM,to:F},{title:Y,to:w},{title:aZ,to:G}],empty:a,description:e}],title:"Collections"}]},layout:{header:a,footer:a,aside:a,asideClass:e,fluid:b,banner:b}}}}(true,false,"text","element","","en","\n","span","token","prose-code-inline","prose-paragraph","IconDirectory","prose-a","prose-code","pre","line-numbers","code","language-bash","filename",2,"function","#9807af dark:#E879F9","\u002Fdocs\u002Fusage\u002Fdata-fetching","000300030099",":","prose-h2","#679c0d dark:#BEF264","IconFile","\u002Fgetting-started\u002Fcommands","punctuation","\u002Fgetting-started\u002Fintroduction","\u002Fconcepts\u002Fintroduction","\u002Fcommunity\u002Fgetting-help","commands","Commands","Nuxi is the new CLI experience for Nuxt 3","package.json","property","operator"," ","nofollow","noopener","noreferrer","_blank","code-group","Yarn","yarn","NPM","npm",", ","Docs","server","\u002Fdocs\u002Fdirectory-structure\u002Fapp","\u002Fdocs\u002Fdeployment\u002Fpresets",null,void 0,"\u002F","system","content:1.getting-started:5.commands.md","000100050000","\u002Fconcepts\u002Fserver-engine","\n  ","string",",","development-server","Development Server","http:\u002F\u002Flocalhost:3000","https:\u002F\u002Flocalhost:3000","nuxt.config"," and ","building-for-production","Building for production","\u002Fdocs\u002Fdirectory-structure\u002Foutput",".output","\u002Fdocs\u002Fdeployment","previewing-your-production-build","Previewing your production build","upgrade-nuxt3-version","Upgrade Nuxt3 version","checking-types","Checking types","vue-tsc","typescript","The Hybrid Vue Framework","docs","inherit","#078ce5 dark:#E0F2FE","#444444","bg-gray-100 dark:bg-secondary-darkest","introduction","Getting started with Nuxt 3 is straightforward.","2022-01-13T09:46:55.119Z","Concepts","2022-01-13T09:46:55.183Z","assets","components","composables","layouts","node_modules","modules","pages","plugins","2022-01-13T09:46:55.185Z","public","2022-01-13T09:46:55.478Z","Community","999900000000"));