(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{312:function(t,a,s){"use strict";s.r(a);var n=s(14),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"введение"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#введение"}},[t._v("#")]),t._v(" Введение")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("Важно!")]),t._v(" "),a("p",[t._v("Эта версия пакета больше не поддерживается. Актуальная версия "),a("a",{attrs:{href:"https://github.com/yandex-maps-unofficial/vue-yandex-maps",target:"_blank",rel:"noopener noreferrer"}},[t._v("здесь"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v('Компонент позволяет без усилий подключить Я.Карты в проект и дает необходимый минимум функционала "из коробки". Однако, вы можете пользоваться всей мощью '),a("a",{attrs:{href:"https://tech.yandex.ru/maps/doc/jsapi/2.1/quick-start/index-docpage/",target:"_blank",rel:"noopener noreferrer"}},[t._v("API Я.Карт"),a("OutboundLink")],1),t._v(", обращаясь напрямую к "),a("RouterLink",{attrs:{to:"/guide/Map.html"}},[t._v("инстансу карты")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"подключение"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#подключение"}},[t._v("#")]),t._v(" Подключение")]),t._v(" "),a("p",[t._v("Подключите компонент, используя ваш пакетный менеджер")]),t._v(" "),a("div",{staticClass:"language-Bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" vue-yandex-maps\n")])])]),a("p",[t._v("После этого вы можете определить настройки подключения компонента:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/load-docpage/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Индивидуальный ключ API"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/localization-docpage/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Используемый язык"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://tech.yandex.ru/maps/jsapi/doc/2.1/dg/concepts/load-docpage/#load__coordorder",target:"_blank",rel:"noopener noreferrer"}},[t._v("Порядок задания географических координат"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://yandex.ru/dev/maps/commercial/doc/concepts/about-enterprise.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Использование коммерческой версии Я.Карт"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Версия Я.Карт")])]),t._v(" "),a("p",[t._v("Эти настройки являются опциональными, значения по умолчанию указаны ниже.")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" settings "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("apiKey")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("suggestApiKey")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ru_RU'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("coordorder")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'latlong'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("enterprise")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2.1'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Теперь вы можете использовать эти настройки при регистрации вашего компонента.")]),t._v(" "),a("h2",{attrs:{id:"регистрация-компонента"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#регистрация-компонента"}},[t._v("#")]),t._v(" Регистрация компонента")]),t._v(" "),a("h3",{attrs:{id:"глобальная"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#глобальная"}},[t._v("#")]),t._v(" Глобальная")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" YmapPlugin "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-yandex-maps'")]),t._v("\n\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("YmapPlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"локальная"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#локальная"}},[t._v("#")]),t._v(" Локальная")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" yandexMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ymapMarker "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-yandex-maps'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("components")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" yandexMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ymapMarker "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// other options")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("div",{staticClass:"language-HTML extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("yandex-map")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":settings")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--Markers--\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("yandex-map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"nuxt-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nuxt-module"}},[t._v("#")]),t._v(" Nuxt module")]),t._v(" "),a("p",[t._v("Добавьте в директорию "),a("code",[t._v("plugins")]),t._v(" файл "),a("code",[t._v("ymapPlugin.js")]),t._v(" со следующим содержанием")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" YmapPlugin "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-yandex-maps'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" settings "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// настройки плагина")]),t._v("\n\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("YmapPlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Добавьте созданный плагин в секцию плагинов файла "),a("code",[t._v("nuxt.config.js")])]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~/plugins/ymapPlugin.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'client'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"ymaps-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ymaps-loader"}},[t._v("#")]),t._v(" Ymaps Loader")]),t._v(" "),a("p",[t._v("Если вам нужно использовать глобальную переменную "),a("code",[t._v("ymaps")]),t._v(" отдельно от компонента карт (геокодер и др.), просто импортируйте лоадер. Вы можете задать настройки, описанные выше, а также указать параметр "),a("code",[t._v("debug")]),t._v(" (по умолчанию - "),a("code",[t._v("false")]),t._v("). Учтите, что функция загрузчика асинхронная.")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" loadYmap "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-yandex-maps'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadYmap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("debug")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// здесь доступна переменная ymaps")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"cdn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdn"}},[t._v("#")]),t._v(" CDN")]),t._v(" "),a("p",[t._v("Вы можете подключить плагин напрямую, используя ссылку "),a("a",{attrs:{href:"https://unpkg.com/vue-yandex-maps",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://unpkg.com/vue-yandex-maps"),a("OutboundLink")],1),t._v(". Установка будет произведена автоматически при обнаружении Vue JS. Это может быть полезно при использовании "),a("a",{attrs:{href:"https://codepen.io/PNKBizz/pen/WMRwyM",target:"_blank",rel:"noopener noreferrer"}},[t._v("Code Pen"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);