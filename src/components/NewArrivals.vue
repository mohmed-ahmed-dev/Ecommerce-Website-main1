<template>
    <section class="mb-24">
        <h3 class="text-3xl font-bold uppercase text-center mb-16">New Arrivals</h3>
        <div class="container mx-auto gap-6 grid sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="item in newArrivals" :key="item.id">
            <img :src="item.url" alt="" class="rounded w-full h-96" />
            <div class="p-6">
              <div class="flex items-center justify-between mb-2">
                <h3
                  class="block font-sans text-xl antialiased font-semibold leading-relaxed text-gray-900"
                >
                  {{ item.title }}
                </h3>
                <p
                  class="block font-sans font-semibold text-2xl antialiased leading-relaxed text-gray-700"
                >
    
                  ${{item.price}}
                  
                </p>
              </div>
              <p
                class="block font-sans text-sm antialiased font-medium leading-normal text-gray-700 opacity-75"
              >
                {{ item.desc }}
              </p>
            </div>
            <div class="flex items-center justify-between px-6 mb-2">
              <button
                @click="addToCart(item)"
                class="bg-indigo-600 text-white p-2 rounded hover:bg-blue-500 ransition-transform transform active:scale-90"
              >
                Add To cart
              </button>
              <img :src="item.starUrl" class="w-32" />
            </div>
          </div>
        </div>
      </section>
</template>

<script>
import { mapGetters , mapActions } from 'vuex';

export default {
    computed: {
    ...mapGetters(["newArrivals"]),
  },
  methods: {
    ...mapActions(["getProducts", "addToCart"]),
    async getProducts() {
      try {
        const response = await api.get('/products');
        this.products = response.products; 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },

    async getProducts() {
      try {
        const response = await api.get('/products');
        this.newArrivals = response.newArrivals; 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
  },
}
</script>

<style scoped>
.container {
  width: 80%;
}
</style>