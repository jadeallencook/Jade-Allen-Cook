(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports={bio:"Since my first encounter with a computer in 1998, I\u2019ve been passionate about technology. The creative freedom invoked my love of programming and over the past decade of my career in the software development industry has helped me help dozens of businesses produce online solutions, as well as growing teams develop softwares as services. In 2010 I took my first position with Imagine Marketing, where I remotely developed and managed online stores. Then in 2012 I started helping the Wysong team create interactive JavaScript applications. When I moved to Salt Lake City in 2015 I worked with Diib on a predictive analytics service before I took a remote position with WaveOrtho for two years writing software components and PHP FileMaker Server APIs. In 2017, Deseret News offered me a position developing interactives for articles and a CRUD dashboard to manage almanac content. Since then I\u2019ve worked with dozens of local and international businesses to produce professional marketing materials and sophisticated web based technologies. I\u2019ve saved my clients countless hours by programming automation scripts, increased workspace productivity by developing Chrome Extensions, and helped create secure dashboards with tools to manage large realtime databases holding encrypted information.   Please have a look at my resume to learn more about the type of work that I\u2019ve done. I am pleased to have worked with all of these wonderful professionals and will offer the same level of dedication for your project as well.",contact:{phone:"(510) 255-5233",email:"jadeallencook@gmail.com"},commands:["bio","contact","resume","social"],error:"Um, there's nothing to see here...",social:["github","instagram","facebook","twitter"],resume:[{company:"Deseret News & KSL",dates:"October 2017 - February 2019",description:"Worked with a SCRUM team via Slack to manage a Symphony site using GitHub and InVision. Developed React apps embedded with oEmbed and an Angular CRUD interface with Firebase. Created Chrome Extensions and Node automation processes to ease employee workflow."},{company:"WaveOrtho",dates:"September 2015 - May 2017",description:"Remotely collaborated with an Agile team using Slack/GitHub to build JavaScript components and PHP FileMaker Server APIs. Developed a POS using Stripe, base64 image editor, and dozens of other interactive tools."},{company:"Diib",dates:"May 2015 - September 2015",description:"Helped develop a predictive analytics service and user authenticated dashboard encrypted with salted SHA-256 hashing on a LAMP stack. Built onboarding funnels, generated a SEO friendly WordPress blog, and designed wireframes using InVision."},{company:"Peacock Park Design\u200b",dates:"September 2014 - April 2015",description:"Developed an Angular CRUD dashboard for online store using Firebase to handle data/auth. Remotely collaborated with team using Slack to communicate and managed the codebase with GitHub. Used Adobe PhotoShop/Illustrator to design graphics and wireframes."}]}},,,,,,,,,function(e,t,a){e.exports=a(24)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(9),r=a.n(i),s=(a(16),a(2)),c=a(3),l=a(4),d=a(6),m=a(5),u=a(7),h=(a(18),a(1)),p=(a(20),function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Header"},o.a.createElement("img",{src:"assets/logo.png",alt:"Jade Allen Cook Signature"}),o.a.createElement("div",null,"Digital Artist & Web Developer"),o.a.createElement("div",null,"This is an interactive website..."),o.a.createElement("br",null),o.a.createElement("div",null,"available commands: ",this.props.commands.map(function(e){return e+" "})),o.a.createElement("br",null))}}]),t}(n.Component)),b=(a(22),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).state={command:""},document.addEventListener("keydown",function(t){var a=t.key,n=e.state.command;"Backspace"===a?(n=n.substring(0,n.length-1),e.setState({command:n})):"Enter"===a?(e.props.execute(n),e.setState({command:""})):1===a.length&&(n+=a,e.setState({command:n}))}),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"CommandLine"},o.a.createElement("span",null,"[root@jadeallencook]#"),o.a.createElement("input",{type:"text",value:this.state.command+"_",readOnly:!0}))}}]),t}(n.Component)),g=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).state={history:[],pwd:[],scheme:{photos:{},games:{},videos:{}}},String.prototype.replaceAll=function(e,t){return this.replace(new RegExp(e,"g"),t)},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"execute",value:function(e){var t=[];this.setState({history:[].concat(Object(s.a)(this.state.history),["[root@jadeallencook]# ".concat(e)])}),"clear"===e?this.setState({history:[]}):"pwd"===e?t=0!==this.state.pwd.length?this.state.pwd.map(function(e){return"/".concat(e)}):"/":"ls"===e?t=[]:"help"===e?t.push(h.commands.toString().replaceAll(","," ")):h[e]?"bio"===e?t=[null,h[e],null]:"contact"===e?t=[null,"phone: ".concat(h[e].phone),"email: ".concat(h[e].email),null]:"resume"===e?(h[e].map(function(e){t=[].concat(Object(s.a)(t),[null,e.company,e.dates,e.description])}),t=[].concat(Object(s.a)(t),[null])):"social"===e&&(t=[null],h[e].map(function(e){t=[].concat(Object(s.a)(t),['<a href="#">https://www.'.concat(e,".com/jadeallencook</a>")])}),t=[].concat(Object(s.a)(t),[null])):t=["".concat(e,": command not found\n")],this.setState({history:[].concat(Object(s.a)(this.state.history),Object(s.a)(t))}),window.scrollTo(0,document.body.scrollHeight)}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p,{commands:h.commands}),this.state.history.map(function(e,t){return o.a.createElement("div",{className:"line",key:"command-".concat(t),dangerouslySetInnerHTML:{__html:e}})}),o.a.createElement(b,{execute:this.execute.bind(this)}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,2,1]]]);
//# sourceMappingURL=main.d386d8e4.chunk.js.map