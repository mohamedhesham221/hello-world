<template>
    <div v-color class="addrees">
        <p @click="modifyTwo" id="second__paragraph">cairo,eg</p>
        <p>tel: 0123456789</p>
        <p @click="modify" id="paragraph">work hours: 2.00 pm to 12.00 am</p>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
import { bus } from '../main'
export default {
    name: "Address",
    data(){
        return{
            msg:'',
        }
    },
    methods:{
        modify(){
            this.$emit('modified','work hours: 14.00 to 00.00')
        },
        modifyTwo(){
            this.$emit('modifiedTwo','Cairo,Egypt')
        },
    },
    created(){
        bus.$on('customBus',(e)=>{
            this.msg = e
        })
    }
}
</script>