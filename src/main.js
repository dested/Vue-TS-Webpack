"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vue = require("vue");
var router_1 = require("./router");
var app = new Vue({
    router: router_1.default,
    render: function (h) { return h('router-view'); },
});
app.$mount('#app');
//# sourceMappingURL=main.js.map