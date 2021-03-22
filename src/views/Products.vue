<template>
    <div class="products">
        <div class="items">
        <div class="one">
            <img src="https://via.placeholder.com/200" alt="img" />
        </div>
        <div class="two">
            <img src="https://via.placeholder.com/200" alt="img" />
        </div>
        <div class="three">
            <img src="https://via.placeholder.com/200" alt="img" />
        </div>
        </div>
        <div class="desc">
    <Products-Description></Products-Description>
        </div>
    </div>
</template>

<script>
import ProductsDescription from "@/components/ProductsDescription.vue";
export default {
    name: "Products",
    components: {
        ProductsDescription
    }
};
</script>

<style lang="scss" scoped>
.items {
    display: flex;
    widows: 100%;
    .one,
    .two,
    .three {
        width: 33.3%;
    }
}
</style>
