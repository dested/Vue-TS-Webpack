<template>
    <section class="section">
        <div class="container">
            <header class="is-clearfix">
                <div class="control is-grouped is-pulled-right">
                    <div class="control">
                        <a class="button" :class="{ 'is-loading': loading }">
              <span class="icon is-small">
                <i class="fa fa-refresh"></i>
              </span>
                            <span>Reload</span>
                        </a>

                    </div>
                    <div class="control has-addons">
                        <a class="button" :class="{ 'is-primary': mode === 'cards' }" @click="setMode('cards')">
              <span class="icon is-small">
                <i class="fa fa-th-large"></i>
              </span>
                            <span>Cards</span>
                        </a>
                        <a class="button" :class="{ 'is-primary': mode === 'table' }" @click="setMode('table')">
              <span class="icon is-small">
                <i class="fa fa-table"></i>
              </span>
                            <span>Table</span>
                        </a>
                    </div>
                </div>
            </header>

            <div class="columns is-multiline" v-if="mode === 'cards'">
                <div class="column is-one-third" v-for="customer in customers">
                    <customer-card :customer="customer"></customer-card>
                </div>
            </div>


        </div>
    </section>
</template>

<script lang="ts">
    //  import { mapState, mapGetters } from 'vuex';
    import CustomerCard from '../components/CustomerCard.vue';
    import {ICustomer} from "../models/Customer";

    export default {
        name: 'customers-page',
        components: {
            CustomerCard: CustomerCard,
        },
        data() {
            return {
                mode: 'cards',
                loading: false,
                customers: <ICustomer[]>[
                    {firstName: '2a', lastName: 'b', email: 'c', city: 'd', state: 'e'},
                    {firstName: 'a', lastName: 'b', email: 'c', city: 'd', state: 'e'},
                    {firstName: 'a', lastName: 'b', email: 'c', city: 'd', state: 'e'},
                    {firstName: 'a', lastName: 'b', email: 'c', city: 'd', state: 'e'},
                ]
            }
        },
        methods: {
            setMode(mode) {
                this.mode = (mode === 'table') ? 'table' : 'cards';
            }
        },
    }
</script>

<style scoped>
    header {
        margin-bottom: 30px;
    }
</style>