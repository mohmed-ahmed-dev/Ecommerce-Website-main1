<template>  
  <div class="banner p-6 py-8 dark:bg-violet-400 dark:text-gray-900 mb-24">
    <div class="container mx-auto">
        <div class="flex flex-col lg:flex-col items-center py-16 space-y-4">
            <span class=" font-bold text-3xl  text-white">Shop</span>
            <h2 class="text-center text-white tracki font-bold"><span> Up to
                <br class="sm:hidden">Save more with Coupouns & Up to 70% Off! </span>
            </h2>

        </div>
    </div>
</div>

<productList></productList>

<the-social></the-social>

</template>

<script>
import productList from './ProductList.vue';
import TheSocial from './TheSocial.vue';
export default {
  components : {
    productList,
    TheSocial
  }
}
</script>

<style scoped>
.container {
  width: 80%;
}
.banner {
  background-image: url(../assets/banner/b1.jpg);
  opacity:.9
}
</style>