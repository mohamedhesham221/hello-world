<template>
    <div class="contact">
    <component :is="firstComponent"></component>
    <component :is="component" @modified="changeAddress($event)" @modifiedTwo="changeAddressTwo($event)"></component>

    <h5 slot="test">slooooot</h5>
    <p slot="SecondTest">second slooooooooot</p>
    </div>
</template>

<script>
import FormInput from "@/components/FormInput.vue"
import Address from "@/components/Address.vue"
export default {
    name: "Contact",
    components: {
        FormInput,
        Address
    },
    data(){
        return{
            component: Address,
            firstComponent: FormInput
        }
    },
    methods:{
        changeAddress(val){
            let p = document.querySelector('#paragraph')
            p.innerHTML = val
        },
        changeAddressTwo(valTwo){
            let seconP = document.querySelector('#second__paragraph')
            seconP.innerHTML = valTwo
        }
    }
}
</script>