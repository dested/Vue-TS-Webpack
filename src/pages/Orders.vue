<template>
    <section class="section">
        ORDERS PAGE
        {{foooo}}
        <button @click="up()">up up up</button>
    </section>
</template>

<script lang="vue-ts">

    export default {
        data() {
            return {
                foooo: 123
            }
        },
        methods: {
            up() {
                this.foooo++;
            }
        },
    }
</script>

<style scoped>
    header {
        margin-bottom: 30px;
    }
</style>