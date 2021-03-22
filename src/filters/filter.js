import Vue from 'vue'

//global filter
Vue.filter('upper',function(val){
    return val.toUpperCase();
})
