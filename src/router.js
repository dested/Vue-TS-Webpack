"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vue = require("vue");
var VueRouter = require("vue-router");
var App_vue_1 = require("./App.vue");
var Customers_vue_1 = require("./pages/Customers.vue");
var Orders_vue_1 = require("./pages/Orders.vue");
Vue.use(VueRouter);
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
var router = new VueRouter({
    mode: 'hash',
    routes: routes,
});
exports.default = router;
//# sourceMappingURL=router.js.map