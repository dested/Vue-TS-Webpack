<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                {{ this.name }}
            </p>
        </header>
        <div class="card-content">
            <div class="content">
                <div>XX efefs</div>
                <div><a href="" target="_blank">{{ customer.email }}</a></div>
                <small>{{ customer.city }}, {{ customer.state }}</small>
            </div>
        </div>
        <footer class="card-footer">
            <a class="card-footer-item">
        <span class="icon is-small">
          <i class="fa fa-pencil"></i>
        </span>
                <span @click="doSomething()">&nbsp;Edit</span>
            </a>
            <a class="card-footer-item">
        <span class="icon is-small">
          <i class="fa fa-trash"></i>
        </span>
                <span>&nbsp;Delete</span>
            </a>
        </footer>
    </div>
</template>

<script lang="ts">
    import {
        Vue, Component, p, Prop
    } from 'av-ts'
    import {ICustomer} from "../models/Customer";
    @Component({
        name: 'customer-card',
    })
    export default class extends Vue { // extends Vue or your own component
        // instance variable is in `data`
        @Prop customer: ICustomer = <ICustomer> p({
                    type: Object,
                    required: true,
                    validator(value) {
                        const props = [
                            'firstName',
                            'lastName',
                            'email',
                            'city',
                            'state',
                        ];

                        return props.every(prop => !!value[prop]);
                    }
                }
        );

        get name() {
            return `${this.customer.firstName} - ${this.customer.lastName}`;
        }

        doSomething() {
            this.customer.state = 's2e1234adsfasdf23hoes';
        }
    };
</script>
