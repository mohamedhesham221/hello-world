<template>
    <div class="forms">
        <form>
            <input v-focus type="text" placeholder="user"> <br>
            <input type="text" placeholder="password"> <br>
            <input @click.prevent ="handleEve" type="submit">
        </form>

        <slot name='test'></slot>
        <slot name="SecondSlot"></slot>
    </div>
</template>

<script>
import { bus } from '../main'
export default {
    name: "FormInput",
    directives : {
        focus : {
            inserted : function(el){
                el.focus()
            }
        }
    },
    methods:{
        handleEve(){
            bus.$emit('customBus','data sent successfully')
        }
    }
}
</script>