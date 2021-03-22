import Vue from "vue";

Vue.directive('color',{

    bind: function(el){

        el.style.color= "blue"
    }
})

Vue.directive('color-bold',{

    bind: function(el,binding){

        el.style.color = '#' + binding.value
        binding.modifiers.bold ? el.style.fontWeight = 'bold' : el.style.fontWeight = '100px' 
    }
})
Vue.directive('font', {
    bind : function(el,binding){
        el.style.fontSize = binding.value + "px"
    }
})