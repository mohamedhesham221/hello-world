<template>
    <div class="container">
        <div class="movie text-center">
            <div class="movie__title">
                <h3>{{movie_name | shorten}} <sup class="movie__rate">{{rate}}</sup></h3>
            </div>
            <div class="movie__category">
                <p class="lead">{{category | reversing}}</p>
            </div>
            <div class="movie__dirctor">
                <p class="lead"><q>{{director | upper}}</q></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MoviesRate",
    props: ['movie_name','category','rate','director'],
    //local filter
    filters: {
        reversing : function (val){
            return val.split("|").reverse().join(",")
        },
        shorten: function(val){
            return val.substring(0,6) + "More ..."
        }
    }
}
</script>

<style lang="scss" scoped>
    .movie{
        background-color: lightgrey;
        width: fit-content;
        padding: 50px;
        border-radius: 30px;
        box-shadow: 0 4px 6px #000;
        margin: auto;
        margin-top: 50px;
        .movie__title{
            h3{
                font-weight: bold;
                font-family: 'Times New Roman', Times, serif;
                .movie__rate{
                    background-color: dodgerblue;
                    border-radius: 50%;
                    padding: 8px;
                    font-size: 1rem;
                    color: #f2f2f2;
                    font-family: Arial, Helvetica, sans-serif;
                }
            }
        }
    }
</style>