import * as Vue from 'vue'
import router from './router';

const app = new Vue({
    router,
    render: h => h('router-view'),
});

app.$mount('#app');