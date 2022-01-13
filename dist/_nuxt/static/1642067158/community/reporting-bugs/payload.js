__NUXT_JSONP__("/community/reporting-bugs", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F){return {data:[{page:{key:"content:4.community:2.reporting-bugs.md",generatedAt:new Date(1642067217624),mtime:new Date(1642067217620),slug:r,title:s,position:"000400020000",to:"\u002Fcommunity\u002Freporting-bugs",draft:g,page:h,language:"en",empty:g,description:t,excerpt:u,body:{raw:"# Reporting Bugs\n\nTry as we might, we never completely eliminate bugs. One of the most valuable roles in open source is taking the time to report bugs helpfully. Even if you can't fix the underlying code, reporting a bug well can enable someone else with a bit more familiarity with the codebase to spot a pattern or make a quick fix.\n\nHere are a few key steps.\n\n## Is it really a bug?\n\nConsider if you're looking to get help with something, or whether you think there's a bug with Nuxt itself. If it's the former, we'd love to help you - but the best way to do that is through [asking for help](\u002Fcommunity\u002Fgetting-help) rather than reporting a bug.\n\n## Search the issues\n\nSearch through the [open issues](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fissues) and [discussions](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fdiscussions) first. If you find anything that seems like the same bug, it's much better to comment on an existing thread than create a duplicate.\n\n## Create a minimal reproduction\n\nIt's important to be able to reproduce the bug reliably - in a minimal way and apart from the rest of your project. This narrows down what could be causing the issue and makes it possible for someone not only to find the cause, but also to test a potential solution.\n\nStart with the Nuxt 3 or Nuxt Bridge sandbox and add the **minimum** amount of code necessary to reproduce the bug you're experiencing.\n\n**Nuxt 3**:\n\n:button-link[Nuxt 3 on StackBlitz]{href=\"https:\u002F\u002Fstackblitz.com\u002Fgithub\u002Fnuxt\u002Fstarter\u002Ftree\u002Fv3-stackblitz\" blank}\n:button-link[Nuxt 3 on CodeSandBox]{href=\"https:\u002F\u002Fcodesandbox.io\u002Fs\u002Fgithub\u002Fnuxt\u002Fstarter\u002Ftree\u002Fv3-codesandbox\" blank}\n\n**Nuxt Bridge**:\n\n:button-link[Nuxt Bridge on CodeSandBox]{href=\"https:\u002F\u002Fcodesandbox.io\u002Fs\u002Fgithub\u002Fnuxt\u002Fstarter\u002Ftree\u002Fbridge-codesandbox\" blank}\n\nOnce you've reproduced the issue, remove as much code from your reproduction as you can (while still recreating the bug). The time spent making the reproduction as minimal as possible will make a huge difference to whoever sets out to fix the issue.\n\n## Figure out what the cause might be\n\nWith a Nuxt project, there are lots of moving pieces - from [nuxt modules](https:\u002F\u002Fnuxtjs.org\u002Fmodules) to [other JavaScript libraries](https:\u002F\u002Fwww.npmjs.com\u002F). Try to report the bug at the most relevant and specific place. That will likely be the Nuxt module causing an issue, or the upstream library that Nuxt is depending on.\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:r},children:[{type:a,value:s}]},{type:a,value:c},{type:b,tag:d,props:{class:"d-heading-description"},children:[{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Here are a few key steps."}]},{type:a,value:c},{type:b,tag:i,props:{id:v},children:[{type:b,tag:e,props:{href:"#is-it-really-a-bug"},children:[{type:a,value:w}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Consider if you're looking to get help with something, or whether you think there's a bug with Nuxt itself. If it's the former, we'd love to help you - but the best way to do that is through "},{type:b,tag:e,props:{href:n},children:[{type:a,value:"asking for help"}]},{type:a,value:" rather than reporting a bug."}]},{type:a,value:c},{type:b,tag:i,props:{id:x},children:[{type:b,tag:e,props:{href:"#search-the-issues"},children:[{type:a,value:y}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Search through the "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fissues",rel:[j,k,l],target:m},children:[{type:a,value:"open issues"}]},{type:a,value:" and "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fdiscussions",rel:[j,k,l],target:m},children:[{type:a,value:"discussions"}]},{type:a,value:" first. If you find anything that seems like the same bug, it's much better to comment on an existing thread than create a duplicate."}]},{type:a,value:c},{type:b,tag:i,props:{id:z},children:[{type:b,tag:e,props:{href:"#create-a-minimal-reproduction"},children:[{type:a,value:A}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It's important to be able to reproduce the bug reliably - in a minimal way and apart from the rest of your project. This narrows down what could be causing the issue and makes it possible for someone not only to find the cause, but also to test a potential solution."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Start with the Nuxt 3 or Nuxt Bridge sandbox and add the "},{type:b,tag:o,props:{},children:[{type:a,value:"minimum"}]},{type:a,value:" amount of code necessary to reproduce the bug you're experiencing."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:o,props:{},children:[{type:a,value:"Nuxt 3"}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:p,props:{":blank":q,href:"https:\u002F\u002Fstackblitz.com\u002Fgithub\u002Fnuxt\u002Fstarter\u002Ftree\u002Fv3-stackblitz"},children:[{type:a,value:"Nuxt 3 on StackBlitz"}]},{type:a,value:c},{type:b,tag:p,props:{":blank":q,href:"https:\u002F\u002Fcodesandbox.io\u002Fs\u002Fgithub\u002Fnuxt\u002Fstarter\u002Ftree\u002Fv3-codesandbox"},children:[{type:a,value:"Nuxt 3 on CodeSandBox"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:o,props:{},children:[{type:a,value:"Nuxt Bridge"}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:p,props:{":blank":q,href:"https:\u002F\u002Fcodesandbox.io\u002Fs\u002Fgithub\u002Fnuxt\u002Fstarter\u002Ftree\u002Fbridge-codesandbox"},children:[{type:a,value:"Nuxt Bridge on CodeSandBox"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Once you've reproduced the issue, remove as much code from your reproduction as you can (while still recreating the bug). The time spent making the reproduction as minimal as possible will make a huge difference to whoever sets out to fix the issue."}]},{type:a,value:c},{type:b,tag:i,props:{id:C},children:[{type:b,tag:e,props:{href:"#figure-out-what-the-cause-might-be"},children:[{type:a,value:D}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"With a Nuxt project, there are lots of moving pieces - from "},{type:b,tag:e,props:{href:"https:\u002F\u002Fnuxtjs.org\u002Fmodules",rel:[j,k,l],target:m},children:[{type:a,value:"nuxt modules"}]},{type:a,value:" to "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.npmjs.com\u002F",rel:[j,k,l],target:m},children:[{type:a,value:"other JavaScript libraries"}]},{type:a,value:". Try to report the bug at the most relevant and specific place. That will likely be the Nuxt module causing an issue, or the upstream library that Nuxt is depending on."}]}]},toc:{title:E,searchDepth:f,depth:f,links:[{id:v,depth:f,text:w},{id:x,depth:f,text:y},{id:z,depth:f,text:A},{id:C,depth:f,text:D}]}},template:F},templateOptions:{header:h,footer:h,aside:h,asideClass:E,fluid:g,banner:g},_img:{}}],fetch:{"0":{headerLinks:[{title:"Getting Started",to:"\u002Fgetting-started\u002Fintroduction"},{title:"Concepts",to:"\u002Fconcepts\u002Fintroduction"},{title:F,to:"\u002Fdocs\u002Fusage\u002Fdata-fetching"},{title:"Community",to:n}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework",prev:{slug:"getting-help",to:n,title:"Getting Help"},next:{slug:"contribution",to:"\u002Fcommunity\u002Fcontribution",title:"Contribution"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","Alert","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseEm","ProseCode","CodeGroup","ProseOl","ProseBlockquote","ProseH4"])},mutations:u}}("text","element","\n","prose-paragraph","prose-a",2,false,true,"prose-h2","nofollow","noopener","noreferrer","_blank","\u002Fcommunity\u002Fgetting-help","prose-strong","button-link","true","reporting-bugs","Reporting Bugs","Try as we might, we never completely eliminate bugs. One of the most valuable roles in open source is taking the time to report bugs helpfully. Even if you can't fix the underlying code, reporting a bug well can enable someone else with a bit more familiarity with the codebase to spot a pattern or make a quick fix.",void 0,"is-it-really-a-bug","Is it really a bug?","search-the-issues","Search the issues","create-a-minimal-reproduction","Create a minimal reproduction",":","figure-out-what-the-cause-might-be","Figure out what the cause might be","","Docs")));