"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1406],{47549:function(e,t,a){a.r(t);var l=a(54306),r=a.n(l),i=a(88265),o=a(63313),n=a(84163),s=a(24378),u=a(95176),p=a(5558),g=a(65601),c=a(38101),d=a(91796),P=a(99120),h=a.n(P),Z=a(11527);t.default=function(e){var t=e.dependence,a=e.handleCancel,l=e.visible,P=e.socketMessage,b=(0,o.useState)(""),m=r()(b,2),f=m[0],k=m[1],v=(0,o.useState)(!0),y=r()(v,2),x=y[0],w=y[1],q=(0,o.useState)(!1),B=r()(q,2),S=B[0],C=B[1],T=(0,o.useState)(!0),K=r()(T,2),_=K[0],H=K[1],X=(0,o.useState)(!1),j=r()(X,2),W=j[0],M=j[1],U=(0,o.useState)(!1),A=r()(U,2),D=A[0],E=A[1],G=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];localStorage.removeItem("logDependence"),a(e)};return(0,o.useEffect)((function(){t&&(H(!0),u.W.get("".concat(p.Z.apiPrefix,"dependencies/").concat(t.id)).then((function(e){var a=e.code,l=e.data;if(200===a&&localStorage.getItem("logDependence")===String(t.id)){var r=(l.log||[]).join("");k(r),w(!r.includes("结束时间")),M(r.includes("删除失败"))}})).finally((function(){H(!1)})))}),[t]),(0,o.useEffect)((function(){if(P&&t){var e=P.type,a=P.message,l=P.references;"installDependence"===e&&l.length>0&&l.includes(t.id)&&(a.includes("结束时间")&&(w(!1),M(a.includes("删除失败"))),k("".concat(f).concat(a)))}}),[P]),(0,o.useEffect)((function(){C(document.body.clientWidth<768)}),[]),(0,Z.jsx)(n.Z,{title:(0,Z.jsxs)(Z.Fragment,{children:[x&&(0,Z.jsx)(g.Z,{spin:!0}),!x&&(0,Z.jsx)(c.Z,{}),(0,Z.jsxs)("span",{style:{marginLeft:5},children:[i.ZP.get("日志 -")," ",t&&t.name]})," "]}),open:l,centered:!0,className:"log-modal",forceRender:!0,onOk:function(){return G()},onCancel:function(){return G()},footer:[(0,Z.jsx)(s.Z,{type:"primary",onClick:function(){W?(E(!0),u.W.delete("".concat(p.Z.apiPrefix,"dependencies/force"),{data:[t.id]}).then((function(e){var t=e.code;e.data,200===t&&G(!0)})).finally((function(){E(!1)}))):G()},loading:D,children:W?i.ZP.get("强制删除"):i.ZP.get("知道了")})],children:(0,Z.jsx)("div",{className:"log-container",children:_?(0,Z.jsx)(d.Z,{}):(0,Z.jsx)("pre",{style:S?{fontFamily:"Source Code Pro",zoom:.83}:{},children:(0,Z.jsx)(h(),{children:f})})})})}},5558:function(e,t,a){var l=a(88265),r=window.__ENV__QlBaseUrl||"/";t.Z={siteName:l.ZP.get("青龙"),apiPrefix:"".concat(r,"api/"),authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Português",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:l.ZP.get("中文"),flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:l.ZP.get("定时任务"),value:"crons"},{name:l.ZP.get("环境变量"),value:"envs"},{name:l.ZP.get("订阅管理"),value:"subscriptions"},{name:l.ZP.get("配置文件"),value:"configs"},{name:l.ZP.get("脚本管理"),value:"scripts"},{name:l.ZP.get("日志管理"),value:"logs"},{name:l.ZP.get("依赖管理"),value:"dependencies"},{name:l.ZP.get("系统信息"),value:"system"}],scopesMap:{crons:l.ZP.get("定时任务"),envs:l.ZP.get("环境变量"),subscriptions:l.ZP.get("订阅管理"),configs:l.ZP.get("配置文件"),scripts:l.ZP.get("脚本管理"),logs:l.ZP.get("日志管理"),dependencies:l.ZP.get("依赖管理"),system:l.ZP.get("系统信息")},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:l.ZP.get("Server酱")},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:l.ZP.get("Telegram机器人")},{value:"dingtalkBot",label:l.ZP.get("钉钉机器人")},{value:"weWorkBot",label:l.ZP.get("企业微信机器人")},{value:"weWorkApp",label:l.ZP.get("企业微信应用")},{value:"aibotk",label:l.ZP.get("智能微秘书")},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"chat",label:l.ZP.get("群晖chat")},{value:"email",label:l.ZP.get("邮箱")},{value:"lark",label:l.ZP.get("飞书机器人")},{value:"pushMe",label:"PushMe"},{value:"webhook",label:l.ZP.get("自定义通知")},{value:"closed",label:l.ZP.get("已关闭")}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:l.ZP.get("gotify的url地址，例如 https://push.example.de:8080"),required:!0},{label:"gotifyToken",tip:l.ZP.get("gotify的消息应用token码"),required:!0},{label:"gotifyPriority",tip:l.ZP.get("推送消息的优先级")}],chat:[{label:"chatUrl",tip:l.ZP.get("chat的url地址"),required:!0},{label:"chatToken",tip:l.ZP.get("chat的token码"),required:!0}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:l.ZP.get("推送到个人QQ: http://127.0.0.1/send_private_msg，群：http://127.0.0.1/send_group_msg"),required:!0},{label:"goCqHttpBotToken",tip:l.ZP.get("访问密钥"),required:!0},{label:"goCqHttpBotQq",tip:l.ZP.get("如果GOBOT_URL设置 /send_private_msg 则需要填入 user_id=个人QQ 相反如果是 /send_group_msg 则需要填入 group_id=QQ群"),required:!0}],serverChan:[{label:"serverChanKey",tip:l.ZP.get("Server酱SENDKEY"),required:!0}],pushDeer:[{label:"pushDeerKey",tip:l.ZP.get("PushDeer的Key，https://github.com/easychen/pushdeer"),required:!0},{label:"pushDeerUrl",tip:l.ZP.get("PushDeer的自架API endpoint，默认是 https://api2.pushdeer.com/message/push")}],bark:[{label:"barkPush",tip:l.ZP.get("Bark的信息IP/设备码，例如：https://api.day.app/XXXXXXXX"),required:!0},{label:"barkIcon",tip:l.ZP.get("BARK推送图标，自定义推送图标 (需iOS15或以上才能显示)")},{label:"barkSound",tip:l.ZP.get("BARK推送铃声，铃声列表去APP查看复制填写")},{label:"barkGroup",tip:l.ZP.get("BARK推送消息的分组，默认为qinglong")}],telegramBot:[{label:"telegramBotToken",tip:l.ZP.get("telegram机器人的token，例如：1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw"),required:!0},{label:"telegramBotUserId",tip:l.ZP.get("telegram用户的id，例如：129xxx206"),required:!0},{label:"telegramBotProxyHost",tip:l.ZP.get("代理IP")},{label:"telegramBotProxyPort",tip:l.ZP.get("代理端口")},{label:"telegramBotProxyAuth",tip:l.ZP.get("telegram代理配置认证参数，用户名与密码用英文冒号连接 user:password")},{label:"telegramBotApiHost",tip:l.ZP.get("telegram api自建的反向代理地址，默认tg官方api")}],dingtalkBot:[{label:"dingtalkBotToken",tip:l.ZP.get("钉钉机器人webhook token，例如：5a544165465465645d0f31dca676e7bd07415asdasd"),required:!0},{label:"dingtalkBotSecret",tip:l.ZP.get("密钥，机器人安全设置页面，加签一栏下面显示的SEC开头的字符串")}],weWorkBot:[{label:"weWorkBotKey",tip:l.ZP.get("企业微信机器人的webhook(详见文档 https://work.weixin.qq.com/api/doc/90000/90136/91770)，例如：693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa"),required:!0},{label:"weWorkOrigin",tip:l.ZP.get("企业微信代理地址")}],weWorkApp:[{label:"weWorkAppKey",tip:l.ZP.get("corpid、corpsecret、touser(注:多个成员ID使用|隔开)、agentid、消息类型(选填，不填默认文本消息类型) 注意用,号隔开(英文输入法的逗号)，例如：wwcfrs,B-76WERQ,qinglong,1000001,2COat"),required:!0},{label:"weWorkOrigin",tip:l.ZP.get("企业微信代理地址")}],aibotk:[{label:"aibotkKey",tip:l.ZP.get("密钥key，智能微秘书个人中心获取apikey，申请地址：https://wechat.aibotk.com/signup?from=ql"),required:!0},{label:"aibotkType",tip:l.ZP.get("发送的目标，群组或者好友"),required:!0,placeholder:l.ZP.get("请输入要发送的目标"),items:[{value:"room",label:l.ZP.get("群聊")},{value:"contact",label:l.ZP.get("好友")}]},{label:"aibotkName",tip:l.ZP.get("要发送的用户昵称或群名，如果目标是群，需要填群名，如果目标是好友，需要填好友昵称"),required:!0}],iGot:[{label:"iGotPushKey",tip:l.ZP.get("iGot的信息推送key，例如：https://push.hellyw.com/XXXXXXXX"),required:!0}],pushPlus:[{label:"pushPlusToken",tip:l.ZP.get("微信扫码登录后一对一推送或一对多推送下面的token(您的Token)，不提供PUSH_PLUS_USER则默认为一对一推送，参考 https://www.pushplus.plus/"),required:!0},{label:"pushPlusUser",tip:l.ZP.get("一对多推送的“群组编码”（一对多推送下面->您的群组(如无则创建)->群组编码，如果您是创建群组人。也需点击“查看二维码”扫描绑定，否则不能接受群组消息推送）")}],lark:[{label:"larkKey",tip:l.ZP.get("飞书群组机器人：https://www.feishu.cn/hc/zh-CN/articles/360024984973"),required:!0}],email:[{label:"emailService",tip:l.ZP.get("邮箱服务名称，比如126、163、Gmail、QQ等，支持列表https://nodemailer.com/smtp/well-known/"),required:!0},{label:"emailUser",tip:l.ZP.get("邮箱地址"),required:!0},{label:"emailPass",tip:l.ZP.get("邮箱SMTP授权码"),required:!0}],pushMe:[{label:"pushMeKey",tip:l.ZP.get("PushMe的Key，https://push.i-i.me/"),required:!0}],webhook:[{label:"webhookMethod",tip:l.ZP.get("请求方法"),required:!0,items:[{value:"GET"},{value:"POST"},{value:"PUT"}]},{label:"webhookContentType",tip:l.ZP.get("请求头Content-Type"),required:!0,items:[{value:"application/json"},{value:"multipart/form-data"},{value:"application/x-www-form-urlencoded"}]},{label:"webhookUrl",tip:l.ZP.get("请求链接以http或者https开头。url或者body中必须包含$title，$content可选，对应api内容的位置"),required:!0,placeholder:"https://xxx.cn/api?content=$title\n"},{label:"webhookHeaders",tip:l.ZP.get("请求头格式Custom-Header1: Header1，多个换行分割"),placeholder:"Custom-Header1: Header1\nCustom-Header2: Header2"},{label:"webhookBody",tip:l.ZP.get("请求体格式key1: value1，多个换行分割。url或者body中必须包含$title，$content可选，对应api内容的位置"),placeholder:"key1: $title\nkey2: $content"}]},documentTitleMap:{"/login":l.ZP.get("登录"),"/initialization":l.ZP.get("初始化"),"/crontab":l.ZP.get("定时任务"),"/env":l.ZP.get("环境变量"),"/subscription":l.ZP.get("订阅管理"),"/config":l.ZP.get("配置文件"),"/script":l.ZP.get("脚本管理"),"/diff":l.ZP.get("对比工具"),"/log":l.ZP.get("日志管理"),"/setting":l.ZP.get("系统设置"),"/error":l.ZP.get("错误日志"),"/dependence":l.ZP.get("依赖管理")},dependenceTypes:["nodejs","python3","linux"]}},95176:function(e,t,a){a.d(t,{W:function(){return h}});var l=a(25359),r=a.n(l),i=a(49811),o=a.n(i),n=a(88265),s=a(9835),u=a(5558),p=a(98074),g=a(73669);s.ZP.config({duration:2});var c=Date.now(),d=g.Z.create({timeout:6e4,params:{t:c}}),P=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];d.interceptors.request.use((function(e){var t=localStorage.getItem(u.Z.authKey);return t&&!P.includes(e.url)?(e.headers.Authorization="Bearer ".concat(t),e):e})),d.interceptors.response.use(function(){var e=o()(r()().mark((function e(t){var a,l,i;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.status,![502,504].includes(a)){e.next=5;break}p.history.push("/error"),e.next=18;break;case 5:if(401!==a){e.next=9;break}"/login"!==p.history.location.pathname&&(localStorage.removeItem(u.Z.authKey),p.history.push("/login")),e.next=18;break;case 9:return e.prev=9,200!==(l=t.data).code&&(i=l.message||l.data)&&s.ZP.error({content:i,style:{maxWidth:500,margin:"0 auto"}}),e.abrupt("return",l);case 15:e.prev=15,e.t0=e.catch(9);case 17:case 18:return e.abrupt("return",t);case 19:case"end":return e.stop()}}),e,null,[[9,15]])})));return function(t){return e.apply(this,arguments)}}(),(function(e){if(e.response){var t=e.response.data?e.response.data.message||e.message||e.response.data:e.response.statusText,a=e.response.status;[502,504].includes(a)?p.history.push("/error"):401===a?"/login"!==p.history.location.pathname&&(s.ZP.error(n.ZP.get("登录已过期，请重新登录")),localStorage.removeItem(u.Z.authKey),p.history.push("/login")):s.ZP.error({content:t,style:{maxWidth:500,margin:"0 auto"}})}else console.log(e.message);return Promise.reject(e)}));var h=d}}]);