<template>
    <!-- top navigation -->
    <div id="app" class="container">
        <top-nav title="Customer Management">
            <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
            <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
            <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

            <!-- This "nav-menu" is hidden on mobile -->
            <!-- Add the modifier "is-active" to display it on mobile -->
            <div class="nav-right nav-menu">
                <router-link class="nav-item is-tab" :to="{ name: 'customers' }" active-class="is-active">
                    Customers
                </router-link>
                <router-link class="nav-item is-tab" :to="{ name: 'orders' }" active-class="is-active">
                    Orders
                </router-link>
                <a class="nav-item is-tab" @click="logout">
                    Logout
                </a>
                <span class="nav-item">
          <a class="button">
            <span class="icon"><i class="fa fa-github"></i></span>
            <span>Github{{foo}}</span>
          </a>
        </span>
            </div>
        </top-nav>

        <!-- main app container -->
        <router-view></router-view>
    </div>
</template>

<script lang="vue-ts">


    import TopNav from './components/TopNav.vue';
    import {
        Vue, Component
    } from 'av-ts'
    // vue options in `Component` decorator
    @Component({
        name: 'app',
        components: {
            TopNav,
        }
    })
    export default class MyComponent extends Vue { // extends Vue or your own component
        // instance variable is in `data`
        foo: number = 12;

        logout() {
            this.foo++;
        }
    }


</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
