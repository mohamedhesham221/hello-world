<template>
    <div class="container">
        <div class="employee text-left">
            <div class="row">
                <div class="col-md-9">
                    <p class="lead"> Name:- <em>{{ first_name }} {{ last_name }}</em></p>
                </div>
                <div class="col-md-3">
                    <img :src="avatar">
                </div>
            </div>
            <p class="lead">Email:- {{ email }}</p>
            <p class="lead">Gender:- {{ gender }}</p>
            <p class="lead">Age:- {{ age }}</p>
            <p class="lead employee__title">{{ title }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "EmployeesList",
    props: ['first_name','last_name','avatar','age','gender','title','email']
}
</script>

<style lang="scss" scoped>
.employee{
    width: 50%;
    background-color: #607d8b;
    color: #f2f2f2;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0 4px 8px #000;
    margin-top: 50px;
    font-family: 'Times New Roman', Times, serif;
    img{
        filter: drop-shadow(0 4px 4px #fff);
    }
    .employee__title{
        background-color: #4caf50;
        width: fit-content;
        padding: 5px 10px;
        border-radius: 10px;
    }
}
</style>