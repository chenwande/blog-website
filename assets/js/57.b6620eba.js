(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{491:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("但是在真实工作环境中，由于后端与前端并行开发，所以在前期是没有后端接口可以使用的。所以学会最适合自己的 Mock 数据的方法就非常重要。")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("代码侵入 (直接在代码中写死 Mock 数据，或者请求本地的 JSON 文件)")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("优点：无")])]),s._v(" "),t("li",[t("p",[s._v("缺点：和其他方案比 Mock 效果不好。\n与真实 Server 环境的切换非常麻烦，一切需要侵入代码切换环境的行为都是不好的。")])])])]),s._v(" "),t("li",[t("p",[s._v("请求拦截")]),s._v(" "),t("p",[s._v("代表：Mock.js")]),s._v(" "),t("p",[s._v("示例：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("Mock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mock")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\\\\"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("api\\\\"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("visitor\\\\"),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("list")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'get'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("code")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("msg")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ok'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v("'data|10'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v("'id|+1'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v("'name'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@csentence(5)'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v("'tag'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@integer(6, 9)-@integer(10, 14)岁 @cword(\"零有\", 1)基础'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v("'lesson_image'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<https://images.pexels.com/3737094/pexels-photo-3737094.jpeg>"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v("'lesson_package'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'L1基础指令课'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v("'done'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@integer(10000, 99999)'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("优点：")]),s._v(" "),t("ul",[t("li",[s._v("与前端代码分离")]),s._v(" "),t("li",[s._v("可生成随机数据")])])]),s._v(" "),t("li",[t("p",[s._v("缺点：")]),s._v(" "),t("ul",[t("li",[s._v("数据都是动态生成的假数据，无法真实模拟增删改查的情况。")]),s._v(" "),t("li",[s._v("只支持 ajax，不支持 fetch。")])])])])]),s._v(" "),t("li",[t("p",[s._v("接口管理工具\n代表：rap, swagger,moco, yapi")]),s._v(" "),t("ul",[t("li",[s._v("优点：\n"),t("ul",[t("li",[s._v("配置功能强大，接口管理与 Mock 一体，后端修改接口 Mock 也跟着更改，可靠。")])])]),s._v(" "),t("li",[s._v("缺点：\n"),t("ul",[t("li",[s._v("配置复杂，依赖后端，可能会出现后端不愿意出手，或者等配置完了，接口也开发出来了的情况。")]),s._v(" "),t("li",[s._v("一般会作为大团队的基础建设而存在， 没有这个条件的话慎重考虑。")])])])])]),s._v(" "),t("li",[t("p",[s._v("本地 node 服务器\n代表：json-server")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("优点：")]),s._v(" "),t("ul",[t("li",[s._v("配置简单，json-server 甚至可以 0 代码 30 秒启动一个 REST API Server。")]),s._v(" "),t("li",[s._v("自定义程度高，一切尽在掌控中。")]),s._v(" "),t("li",[s._v("增删改查真实模拟。")])])]),s._v(" "),t("li",[t("p",[s._v("缺点：")]),s._v(" "),t("ul",[t("li",[s._v("与接口管理工具相比，无法随着后端 API 的修改而自动修改。")])])])])]),s._v(" "),t("li",[t("p",[s._v("REST API")]),s._v(" "),t("p",[s._v("一句话总结：URI 代表 资源 / 对象，METHOD 代表行为：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("GET /tickets // 列表\nGET /tickets/12 // 详情\nPOST /tickets  // 增加\nPUT /tickets/12 // 全部替换\nPATCH /tickets/12 // 修改\nDELETE /tickets/12 // 删除\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);