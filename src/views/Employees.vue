<template>
    <div>
        <h2 class="h1">Employees Page</h2>

        <Employees-List v-for="info in informations" :key="info.id"
        :first_name="info.first_name"
        :last_name="info.last_name"
        :avatar="info.avatar"
        :email="info.email"
        :gender="info.gender"
        :age="info.age"
        :title="info.title"
        />
    </div>
</template>

<script>
import EmployeesList from "@/components/EmployeesList.vue"
import DataBase from "../json/data-base.json"
export default {
    name: "Employees",
    data(){
        return{
        informations: DataBase
        }
    },
    components: {
        EmployeesList
    }
}
</script>