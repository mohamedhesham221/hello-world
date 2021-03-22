<template>
    <div>
        <h2 class="h1">Movies</h2>

        <Movies-Rate v-for="movieName in MoviesName" :key="movieName.id"
        :movie_name="movieName.movie_name"
        :category="movieName.category"
        :rate="movieName.rate"
        :director="movieName.director"
        />
    </div>
</template>

<script>
import MoviesRate from "@/components/MoviesRate.vue"
import MoviesName from "../json/movies.json"
export default {
    name: "Movies",
    data(){
        return{
            MoviesName
        }
    },
    components: {MoviesRate}
}
</script>