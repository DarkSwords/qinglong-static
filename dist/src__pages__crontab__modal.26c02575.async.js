(self.webpackChunk=self.webpackChunk||[]).push([[8393],{26839:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var r=a(14797),n=a(63313),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},o=a(46420),i=function(e,t){return n.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:l}))};i.displayName="PlusOutlined";var s=n.forwardRef(i)},8879:function(e,t,a){"use strict";a.r(t),a.d(t,{CronLabelModal:function(){return S},default:function(){return E}});var r=a(25359),n=a.n(r),l=a(57213),o=a.n(l),i=a(49811),s=a.n(i),c=a(54306),u=a.n(c),p=a(88265),g=a(63313),d=a(67393),h=a(9835),P=a(84163),Z=a(22159),f=a(24378),b=a(95176),m=a(5558),v=a(11186),y=a.n(v),k=a(93525),x=a.n(k),w=a(51704),C=a(8297),q=a(26839),j=a(11527),B=function(e){var t=e.value,a=e.onChange,r=(0,g.useState)(""),n=u()(r,2),l=n[0],o=n[1],i=(0,g.useState)(!1),s=u()(i,2),c=s[0],d=s[1],h=(0,g.useState)([]),P=u()(h,2),f=P[0],b=P[1],m=(0,g.useRef)(),v=function(){l&&!f.includes(l)&&(b([].concat(x()(f),[l])),null==a||a([].concat(x()(f),[l]))),d(!1),o("")},y=f.map((function(e){var t=(0,j.jsx)(w.Z,{closable:!0,onClose:function(t){var r,n;t.preventDefault(),r=e,n=f.filter((function(e){return e!==r})),b(n),null==a||a(n)},children:e});return(0,j.jsx)("span",{style:{display:"inline-block",marginBottom:8},children:t},e)}));return(0,g.useEffect)((function(){c&&m&&m.current.focus()}),[c]),(0,g.useEffect)((function(){t&&b(t)}),[t]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(C.Z,{enter:{scale:.8,opacity:0,type:"from",duration:100},leave:{opacity:0,width:0,scale:0,duration:200},appear:!1,children:y}),c&&(0,j.jsx)(Z.Z,{ref:m,type:"text",size:"small",style:{width:78},value:l,onChange:function(e){o(e.target.value)},onBlur:v,onPressEnter:v}),!c&&(0,j.jsxs)(w.Z,{onClick:function(){d(!0)},style:{borderStyle:"dashed",cursor:"pointer"},children:[(0,j.jsx)(q.Z,{})," ",p.ZP.get("新建")]})]})},E=function(e){var t=e.cron,a=e.handleCancel,r=e.visible,l=d.Z.useForm(),i=u()(l,1)[0],c=(0,g.useState)(!1),f=u()(c,2),v=f[0],k=f[1],x=function(){var e=s()(n()().mark((function e(r){var l,i,s,c,u;return n()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),l=t?"put":"post",i=o()({},r),t&&(i.id=t.id),e.prev=4,e.next=7,b.W[l]("".concat(m.Z.apiPrefix,"crons"),i);case 7:s=e.sent,c=s.code,u=s.data,200===c&&(h.ZP.success(t?p.ZP.get("更新任务成功"):p.ZP.get("创建任务成功")),a(u)),k(!1),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),k(!1);case 17:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t){return e.apply(this,arguments)}}();return(0,g.useEffect)((function(){i.resetFields()}),[t,r]),(0,j.jsx)(P.Z,{title:t?p.ZP.get("编辑任务"):p.ZP.get("创建任务"),open:r,forceRender:!0,centered:!0,maskClosable:!1,onOk:function(){i.validateFields().then((function(e){x(e)})).catch((function(e){console.log("Validate Failed:",e)}))},onCancel:function(){return a()},confirmLoading:v,children:(0,j.jsxs)(d.Z,{form:i,layout:"vertical",name:"form_in_modal",initialValues:t,children:[(0,j.jsx)(d.Z.Item,{name:"name",label:p.ZP.get("名称"),children:(0,j.jsx)(Z.Z,{placeholder:p.ZP.get("请输入任务名称")})}),(0,j.jsx)(d.Z.Item,{name:"command",label:p.ZP.get("命令/脚本"),rules:[{required:!0,whitespace:!0}],children:(0,j.jsx)(Z.Z.TextArea,{rows:4,autoSize:{minRows:1,maxRows:5},placeholder:p.ZP.get("支持输入脚本路径/任意系统可执行命令/task 脚本路径")})}),(0,j.jsx)(d.Z.Item,{name:"schedule",label:p.ZP.get("定时规则"),rules:[{required:!0},{validator:function(e,t){return!t||y().parseExpression(t).hasNext()?Promise.resolve():Promise.reject(p.ZP.get("Cron表达式格式有误"))}}],children:(0,j.jsx)(Z.Z,{placeholder:p.ZP.get("秒(可选) 分 时 天 月 周")})}),(0,j.jsx)(d.Z.Item,{name:"labels",label:p.ZP.get("标签"),children:(0,j.jsx)(B,{})})]})})},S=function(e){var t=e.ids,a=e.handleCancel,r=e.visible,l=d.Z.useForm(),o=u()(l,1)[0],i=(0,g.useState)(!1),c=u()(i,2),Z=c[0],v=c[1],y=function(){var e=s()(n()().mark((function e(r){return n()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.validateFields().then(function(){var e=s()(n()().mark((function e(l){var o,i,s;return n()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),o={ids:t,labels:l.labels},e.prev=2,e.next=5,b.W[r]("".concat(m.Z.apiPrefix,"crons/labels"),o);case 5:i=e.sent,s=i.code,i.data,200===s&&(h.ZP.success("post"===r?p.ZP.get("添加Labels成功"):p.ZP.get("删除Labels成功")),a(!0)),v(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),v(!1);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log("Validate Failed:",e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();(0,g.useEffect)((function(){o.resetFields()}),[t,r]);var k=[(0,j.jsx)(f.Z,{onClick:function(){return a(!1)},children:p.ZP.get("取消")}),(0,j.jsx)(f.Z,{type:"primary",danger:!0,onClick:function(){return y("delete")},children:p.ZP.get("删除")}),(0,j.jsx)(f.Z,{type:"primary",onClick:function(){return y("post")},children:p.ZP.get("添加")})];return(0,j.jsx)(P.Z,{title:p.ZP.get("批量修改标签"),open:r,footer:k,centered:!0,maskClosable:!1,forceRender:!0,onCancel:function(){return a(!1)},confirmLoading:Z,children:(0,j.jsx)(d.Z,{form:o,layout:"vertical",name:"form_in_label_modal",children:(0,j.jsx)(d.Z.Item,{name:"labels",label:p.ZP.get("标签"),children:(0,j.jsx)(B,{})})})})}},5558:function(e,t,a){"use strict";var r=a(88265),n=window.__ENV__QlBaseUrl||"/";t.Z={siteName:r.ZP.get("青龙"),apiPrefix:"".concat(n,"api/"),authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Português",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:r.ZP.get("中文"),flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:r.ZP.get("定时任务"),value:"crons"},{name:r.ZP.get("环境变量"),value:"envs"},{name:r.ZP.get("订阅管理"),value:"subscriptions"},{name:r.ZP.get("配置文件"),value:"configs"},{name:r.ZP.get("脚本管理"),value:"scripts"},{name:r.ZP.get("日志管理"),value:"logs"},{name:r.ZP.get("依赖管理"),value:"dependencies"},{name:r.ZP.get("系统信息"),value:"system"}],scopesMap:{crons:r.ZP.get("定时任务"),envs:r.ZP.get("环境变量"),subscriptions:r.ZP.get("订阅管理"),configs:r.ZP.get("配置文件"),scripts:r.ZP.get("脚本管理"),logs:r.ZP.get("日志管理"),dependencies:r.ZP.get("依赖管理"),system:r.ZP.get("系统信息")},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:r.ZP.get("Server酱")},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:r.ZP.get("Telegram机器人")},{value:"dingtalkBot",label:r.ZP.get("钉钉机器人")},{value:"weWorkBot",label:r.ZP.get("企业微信机器人")},{value:"weWorkApp",label:r.ZP.get("企业微信应用")},{value:"aibotk",label:r.ZP.get("智能微秘书")},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"chat",label:r.ZP.get("群晖chat")},{value:"email",label:r.ZP.get("邮箱")},{value:"lark",label:r.ZP.get("飞书机器人")},{value:"pushMe",label:"PushMe"},{value:"webhook",label:r.ZP.get("自定义通知")},{value:"closed",label:r.ZP.get("已关闭")}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:r.ZP.get("gotify的url地址，例如 https://push.example.de:8080"),required:!0},{label:"gotifyToken",tip:r.ZP.get("gotify的消息应用token码"),required:!0},{label:"gotifyPriority",tip:r.ZP.get("推送消息的优先级")}],chat:[{label:"chatUrl",tip:r.ZP.get("chat的url地址"),required:!0},{label:"chatToken",tip:r.ZP.get("chat的token码"),required:!0}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:r.ZP.get("推送到个人QQ: http://127.0.0.1/send_private_msg，群：http://127.0.0.1/send_group_msg"),required:!0},{label:"goCqHttpBotToken",tip:r.ZP.get("访问密钥"),required:!0},{label:"goCqHttpBotQq",tip:r.ZP.get("如果GOBOT_URL设置 /send_private_msg 则需要填入 user_id=个人QQ 相反如果是 /send_group_msg 则需要填入 group_id=QQ群"),required:!0}],serverChan:[{label:"serverChanKey",tip:r.ZP.get("Server酱SENDKEY"),required:!0}],pushDeer:[{label:"pushDeerKey",tip:r.ZP.get("PushDeer的Key，https://github.com/easychen/pushdeer"),required:!0},{label:"pushDeerUrl",tip:r.ZP.get("PushDeer的自架API endpoint，默认是 https://api2.pushdeer.com/message/push")}],bark:[{label:"barkPush",tip:r.ZP.get("Bark的信息IP/设备码，例如：https://api.day.app/XXXXXXXX"),required:!0},{label:"barkIcon",tip:r.ZP.get("BARK推送图标，自定义推送图标 (需iOS15或以上才能显示)")},{label:"barkSound",tip:r.ZP.get("BARK推送铃声，铃声列表去APP查看复制填写")},{label:"barkGroup",tip:r.ZP.get("BARK推送消息的分组，默认为qinglong")}],telegramBot:[{label:"telegramBotToken",tip:r.ZP.get("telegram机器人的token，例如：1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw"),required:!0},{label:"telegramBotUserId",tip:r.ZP.get("telegram用户的id，例如：129xxx206"),required:!0},{label:"telegramBotProxyHost",tip:r.ZP.get("代理IP")},{label:"telegramBotProxyPort",tip:r.ZP.get("代理端口")},{label:"telegramBotProxyAuth",tip:r.ZP.get("telegram代理配置认证参数，用户名与密码用英文冒号连接 user:password")},{label:"telegramBotApiHost",tip:r.ZP.get("telegram api自建的反向代理地址，默认tg官方api")}],dingtalkBot:[{label:"dingtalkBotToken",tip:r.ZP.get("钉钉机器人webhook token，例如：5a544165465465645d0f31dca676e7bd07415asdasd"),required:!0},{label:"dingtalkBotSecret",tip:r.ZP.get("密钥，机器人安全设置页面，加签一栏下面显示的SEC开头的字符串")}],weWorkBot:[{label:"weWorkBotKey",tip:r.ZP.get("企业微信机器人的webhook(详见文档 https://work.weixin.qq.com/api/doc/90000/90136/91770)，例如：693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa"),required:!0},{label:"weWorkOrigin",tip:r.ZP.get("企业微信代理地址")}],weWorkApp:[{label:"weWorkAppKey",tip:r.ZP.get("corpid、corpsecret、touser(注:多个成员ID使用|隔开)、agentid、消息类型(选填，不填默认文本消息类型) 注意用,号隔开(英文输入法的逗号)，例如：wwcfrs,B-76WERQ,qinglong,1000001,2COat"),required:!0},{label:"weWorkOrigin",tip:r.ZP.get("企业微信代理地址")}],aibotk:[{label:"aibotkKey",tip:r.ZP.get("密钥key，智能微秘书个人中心获取apikey，申请地址：https://wechat.aibotk.com/signup?from=ql"),required:!0},{label:"aibotkType",tip:r.ZP.get("发送的目标，群组或者好友"),required:!0,placeholder:r.ZP.get("请输入要发送的目标"),items:[{value:"room",label:r.ZP.get("群聊")},{value:"contact",label:r.ZP.get("好友")}]},{label:"aibotkName",tip:r.ZP.get("要发送的用户昵称或群名，如果目标是群，需要填群名，如果目标是好友，需要填好友昵称"),required:!0}],iGot:[{label:"iGotPushKey",tip:r.ZP.get("iGot的信息推送key，例如：https://push.hellyw.com/XXXXXXXX"),required:!0}],pushPlus:[{label:"pushPlusToken",tip:r.ZP.get("微信扫码登录后一对一推送或一对多推送下面的token(您的Token)，不提供PUSH_PLUS_USER则默认为一对一推送，参考 https://www.pushplus.plus/"),required:!0},{label:"pushPlusUser",tip:r.ZP.get("一对多推送的“群组编码”（一对多推送下面->您的群组(如无则创建)->群组编码，如果您是创建群组人。也需点击“查看二维码”扫描绑定，否则不能接受群组消息推送）")}],lark:[{label:"larkKey",tip:r.ZP.get("飞书群组机器人：https://www.feishu.cn/hc/zh-CN/articles/360024984973"),required:!0}],email:[{label:"emailService",tip:r.ZP.get("邮箱服务名称，比如126、163、Gmail、QQ等，支持列表https://nodemailer.com/smtp/well-known/"),required:!0},{label:"emailUser",tip:r.ZP.get("邮箱地址"),required:!0},{label:"emailPass",tip:r.ZP.get("邮箱SMTP授权码"),required:!0}],pushMe:[{label:"pushMeKey",tip:r.ZP.get("PushMe的Key，https://push.i-i.me/"),required:!0}],webhook:[{label:"webhookMethod",tip:r.ZP.get("请求方法"),required:!0,items:[{value:"GET"},{value:"POST"},{value:"PUT"}]},{label:"webhookContentType",tip:r.ZP.get("请求头Content-Type"),required:!0,items:[{value:"application/json"},{value:"multipart/form-data"},{value:"application/x-www-form-urlencoded"}]},{label:"webhookUrl",tip:r.ZP.get("请求链接以http或者https开头。url或者body中必须包含$title，$content可选，对应api内容的位置"),required:!0,placeholder:"https://xxx.cn/api?content=$title\n"},{label:"webhookHeaders",tip:r.ZP.get("请求头格式Custom-Header1: Header1，多个换行分割"),placeholder:"Custom-Header1: Header1\nCustom-Header2: Header2"},{label:"webhookBody",tip:r.ZP.get("请求体格式key1: value1，多个换行分割。url或者body中必须包含$title，$content可选，对应api内容的位置"),placeholder:"key1: $title\nkey2: $content"}]},documentTitleMap:{"/login":r.ZP.get("登录"),"/initialization":r.ZP.get("初始化"),"/crontab":r.ZP.get("定时任务"),"/env":r.ZP.get("环境变量"),"/subscription":r.ZP.get("订阅管理"),"/config":r.ZP.get("配置文件"),"/script":r.ZP.get("脚本管理"),"/diff":r.ZP.get("对比工具"),"/log":r.ZP.get("日志管理"),"/setting":r.ZP.get("系统设置"),"/error":r.ZP.get("错误日志"),"/dependence":r.ZP.get("依赖管理")},dependenceTypes:["nodejs","python3","linux"]}},95176:function(e,t,a){"use strict";a.d(t,{W:function(){return P}});var r=a(25359),n=a.n(r),l=a(49811),o=a.n(l),i=a(88265),s=a(9835),c=a(5558),u=a(98074),p=a(73669);s.ZP.config({duration:2});var g=Date.now(),d=p.Z.create({timeout:6e4,params:{t:g}}),h=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];d.interceptors.request.use((function(e){var t=localStorage.getItem(c.Z.authKey);return t&&!h.includes(e.url)?(e.headers.Authorization="Bearer ".concat(t),e):e})),d.interceptors.response.use(function(){var e=o()(n()().mark((function e(t){var a,r,l;return n()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.status,![502,504].includes(a)){e.next=5;break}u.history.push("/error"),e.next=18;break;case 5:if(401!==a){e.next=9;break}"/login"!==u.history.location.pathname&&(localStorage.removeItem(c.Z.authKey),u.history.push("/login")),e.next=18;break;case 9:return e.prev=9,200!==(r=t.data).code&&(l=r.message||r.data)&&s.ZP.error({content:l,style:{maxWidth:500,margin:"0 auto"}}),e.abrupt("return",r);case 15:e.prev=15,e.t0=e.catch(9);case 17:case 18:return e.abrupt("return",t);case 19:case"end":return e.stop()}}),e,null,[[9,15]])})));return function(t){return e.apply(this,arguments)}}(),(function(e){if(e.response){var t=e.response.data?e.response.data.message||e.message||e.response.data:e.response.statusText,a=e.response.status;[502,504].includes(a)?u.history.push("/error"):401===a?"/login"!==u.history.location.pathname&&(s.ZP.error(i.ZP.get("登录已过期，请重新登录")),localStorage.removeItem(c.Z.authKey),u.history.push("/login")):s.ZP.error({content:t,style:{maxWidth:500,margin:"0 auto"}})}else console.log(e.message);return Promise.reject(e)}));var P=d},51704:function(e,t,a){"use strict";a.d(t,{Z:function(){return y}});var r=a(87807),n=a(60795),l=a(17079),o=a(5132),i=a(84875),s=a.n(i),c=a(92976),u=a(63313),p=a(82259),g=a(31124),d=a(1570),h=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a},P=function(e){var t,a=e.prefixCls,l=e.className,o=e.checked,i=e.onChange,c=e.onClick,g=h(e,["prefixCls","className","checked","onChange","onClick"]),d=(0,u.useContext(p.E_).getPrefixCls)("tag",a),P=s()(d,(t={},(0,r.Z)(t,"".concat(d,"-checkable"),!0),(0,r.Z)(t,"".concat(d,"-checkable-checked"),o),t),l);return u.createElement("span",(0,n.Z)({},g,{className:P,onClick:function(e){null==i||i(!o),null==c||c(e)}}))},Z=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a},f=new RegExp("^(".concat(g.Y.join("|"),")(-inverse)?$")),b=new RegExp("^(".concat(g.E.join("|"),")$")),m=function(e,t){var a,i=e.prefixCls,g=e.className,h=e.style,P=e.children,m=e.icon,v=e.color,y=e.onClose,k=e.closeIcon,x=e.closable,w=void 0!==x&&x,C=Z(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),q=u.useContext(p.E_),j=q.getPrefixCls,B=q.direction,E=u.useState(!0),S=(0,l.Z)(E,2),O=S[0],_=S[1];u.useEffect((function(){"visible"in C&&_(C.visible)}),[C.visible]);var T=function(){return!!v&&(f.test(v)||b.test(v))},I=(0,n.Z)({backgroundColor:v&&!T()?v:void 0},h),K=T(),H=j("tag",i),M=s()(H,(a={},(0,r.Z)(a,"".concat(H,"-").concat(v),K),(0,r.Z)(a,"".concat(H,"-has-color"),v&&!K),(0,r.Z)(a,"".concat(H,"-hidden"),!O),(0,r.Z)(a,"".concat(H,"-rtl"),"rtl"===B),a),g),R=function(e){e.stopPropagation(),null==y||y(e),e.defaultPrevented||"visible"in C||_(!1)},X="onClick"in C||P&&"a"===P.type,N=(0,c.Z)(C,["visible"]),A=m||null,U=A?u.createElement(u.Fragment,null,A,u.createElement("span",null,P)):P,W=u.createElement("span",(0,n.Z)({},N,{ref:t,className:M,style:I}),U,w?k?u.createElement("span",{className:"".concat(H,"-close-icon"),onClick:R},k):u.createElement(o.Z,{className:"".concat(H,"-close-icon"),onClick:R}):null);return X?u.createElement(d.Z,null,W):W},v=u.forwardRef(m);v.CheckableTag=P;var y=v},38433:function(){}}]);