<!-- components/Header.vue -->
<template>
  <div class="bg-neutral-100">
  <header class="p-5 container mx-auto bg-neutral-100">
    <div class="container mx-auto flex justify-between items-center pl-5 pr-5">
      <router-link to="/" class="text-lg font-bold">
        <img src="../assets/home/logo.png" alt="">
      </router-link>
      <nav class="hidden md:flex space-x-10">
        <router-link to="/" class="font-semibold hover:text-blue-400">Home</router-link>
        <router-link to="/shop" class="font-semibold hover:text-blue-400">Shop</router-link>
        <router-link to="/about" class="font-semibold hover:text-blue-400">About</router-link>
        <router-link to="/contact" class="font-semibold hover:text-blue-400">Contact</router-link>
        <router-link to="/cart"><a class="relative"><img src="../assets/home/cart.png" class="img"> <span v-if="totalQty > 0" class="roundCart absolute">{{totalQty}}</span></a></router-link>
      </nav>
      <div class="md:hidden">
        <!-- Responsive menu button for small screens -->
        <button @click="toggleMenu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <!-- Responsive menu for small screens -->
      <div v-if="isMenuOpen" class="md:hidden absolute top-16 right-8 left-8 bg-white p-16 space-y-4 shadow">
        <router-link to="/" class="text-blue-500 block mb-2 text-center font-semibold">Home</router-link>
        <router-link to="/shop" class="text-blue-500 block mb-2 text-center font-semibold">Shop</router-link>
        <router-link to="/about" class="text-blue-500 block mb-2 text-center font-semibold">About</router-link>
        <router-link to="/contact" class="text-blue-500 block text-center font-semibold">Contact</router-link>
      </div>
    </div>
  </header>
</div>
</template>

<script>
  import { mapGetters } from 'vuex';
  
  export default {
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
    computed: {
      ...mapGetters(['cart']),
      
      totalQty() {
        if (this.$store.state.cart) {
          // If cart is defined, calculate the total quantity
          return this.$store.state.cart.reduce((total, item) => total + item.qty, 0);
        } else {
          // If cart is undefined or empty, return 0 or handle the case accordingly
          return 0;
        }
      },
    },
  };
  </script>
  

<style scoped>
.img {
  width: 20px;
}

.roundCart {
  line-height: 2px;
  padding: 10px;
  background-color: rgb(76, 76, 190);
  color: white;
  width: 21px;
  height: 21px;
  text-align: center;
  display: grid;
  place-content: center;
  border-radius: 50%;
  left: -8px;
  top: -4px;
  font-size: 10px;
}
</style>