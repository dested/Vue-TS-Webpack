"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vue = require("vue");
var vue_router_1 = require("vue-router");
var App_vue_1 = require("./App.vue");
var Customers_vue_1 = require("./pages/Customers.vue");
var Orders_vue_1 = require("./pages/Orders.vue");
Vue.use(vue_router_1.default);
var routes = [{
        path: '/',
        name: 'app',
        component: App_vue_1.default,
        children: [
            {
                path: 'customers',
                name: 'customers',
                component: Customers_vue_1.default,
            }, {
                path: 'orders',
                name: 'orders',
                component: Orders_vue_1.default,
            }, {
                path: '*',
                redirect: 'customers',
            },
        ],
    }];
var router = new vue_router_1.default({
    mode: 'hash',
    routes: routes,
});
exports.default = router;
//# sourceMappingURL=router.js.map