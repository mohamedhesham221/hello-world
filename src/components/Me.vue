<template>
    <div>
        <div class="img">
            <img src="../assets/me.jpg" alt="profile">
        </div>
        <div class="container profile">
            <h2 @click="child" class="h1">{{ MyName }}</h2>
            <div class="data text-left">
                <p class="lead">My Age is := {{ Age }}</p>
                <p class="lead">My Living City := {{ City }}</p>
                <p class="lead">skills list</p>
                <ul class="list-group">
                    <li class="list-group-item" v-for="Skill in Skills" :key="Skill.id"> {{ Skill }} </li>
                </ul>
                <p class="lead">languages list</p>
                <ul class="list-group">
                    <li class="list-group-item" v-for="lang in LanguagesRate" :key="lang.id">
                        {{lang.language}} : {{lang.rate}}
                    </li>
                </ul>

                <p class="lead" v-if="Age == 27"> your age is 27 </p>
                <p class="lead" v-else> your age is {{Age}}</p>

                <p class="lead">My age in  days {{AgeInDays()}}</p>

            </div>
        </div>
    </div> 
</template>

<script>
export default {
    name: "ME",
    data(){
        return{
            MyName : "Mohamed Hesham",
            Age : 27,
            City: "Cairo",
            Skills: ['html','css','js','vue','bootstrap','json','ajax'],
            LanguagesRate: [
                {'language':'HTML','rate':'5.0'},
                {'language':'CSS', 'rate':'4.5'},
                {'language':'JS','rate':'4.0'}
            ],
            Marital: true,
        }
    },
    methods: {
        AgeInDays(){
            return `${this.Age*365} days`
        },
        child(){
            this.$emit('childEve')
        }
    },
}
</script>

<style lang="scss" scoped>
    .img{
            border-radius: 50%;
            overflow: hidden;
            width: 200px;
            height: 200px;
            margin: auto;
        img{
            width: 200px;
            height: 200px;
            transform: scale(2);
            padding: 30px;
        }
    }
</style>