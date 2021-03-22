<template>
    <div class="about">
        <h1>This is about page</h1>
        <p  v-font = "50">{{ txt }}</p>
    </div>
</template>

<script>
export default {
    name: "About",
    data(){
        return{
            txt: "hello from Vue",
        }
    },
    
    // directives: {
    //     ColorBold : {
    //         bind : function(el,binding){
    //             el.style.color = binding.value
    //         }
    //     }
    // }
};
</script>

<style scoped lang="scss">
$color: #8f8f8f;
$secondColor: #6a509b;
$fontSize: 2rem;

h1 {
    color: $color;
}
p {
    font-size: $fontSize;
    color: $secondColor;
    font-weight: bold;
}
</style>
