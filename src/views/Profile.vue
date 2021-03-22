<template>
    <div>
        <Me @childEve="parent"></Me>
    </div>
</template>

<script>
import Me from "@/components/Me.vue"
export default {
    name: "Profile",
    data(){
        return{
        }
    },
    components: {
        Me
    },
    methods:{
        parent(){
            alert('mohamed hesham mohamed')
        }
    }
}
</script>