<template>

  <section class="mb-32">
    <!-- Jumbotron -->
    <div
      class="bg-neutral-50 px-6 py-12 text-center dark:bg-neutral-900 lg:text-left"
    >
      <div
        class="container mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl"
      >
        <div class="grid items-center gap-8 lg:grid-cols-2">
          <div class="mt-12 space-y-8">
            <span class="text-2xl font-semibold">Trade-in-offer</span>
            <h1
              class="mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-6xl"
            >
              Super Value Deals
            </h1>
            <h3
              class="text-indigo-600 text-5xl font-bold tracking-tight md:text-6xl xl:text-6x"
            >
              On All Products
            </h3>
            <p class="font-semibold text-gray-500">
              Save more with Coupouns & Up to 70% Off!
            </p>
            <router-link to="/shop">
              <a
                class="mb-2 text-white mt-8 inline-block rounded bg-indigo-600 px-12 pt-4 pb-3.5 text-sm font-semibold uppercase leading-normal md:mr-2 md:mb-0 hover:bg-blue-500 ransition-transform transform active:scale-90"
                role="button"
                >Shopping Now</a
              >
            </router-link>
          </div>
          <div class="mb-12 lg:mb-0">
            <img
              src="../assets/products/42.jpg"
              class="w-full shadow-lg dark:shadow-black/20"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Jumbotron -->
  </section>

<the-features></the-features>


<product-list></product-list>

  <div class="banner p-6 py-8 dark:bg-violet-400 dark:text-gray-900 mb-24">
      <div class="container mx-auto">
          <div class="flex flex-col lg:flex-col items-center space-y-6">
              <span class="text-white font-bold text-lg">Repair Services</span>
              <h2 class="text-center text-amber-500 text-4xl tracki font-bold">Up to
                  <br class="sm:hidden">50% Off<span class="text-white"> - All T-Shirts & Accessories</span>
              </h2>
              <div class="space-x-2 text-center py-2 lg:py-0">
                  <span class="text-white">Plus free shipping! Use code:</span>
                  <span class="font-bold text-lg text-white">MARIO DEV</span>
              </div>
              <a href="#" rel="noreferrer noopener" class="px-5 mt-4 lg:mt-0 py-3 bg-indigo-700 rounded-md border block text-white dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">Shop Now</a>
          </div>
      </div>
  </div>

<new-arrivals></new-arrivals>

  <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mb-24">
    <div class="offer one bg-cover bg-no-repeat p-24 pr-0 space-y-4">
      <h4 class="font-semibold text-base">Crazy Deals</h4>
      <h1 class="text-blue-600 text-4xl font-bold">Buy 1 Get 1 Free</h1>
      <p class="font-base text-medium font-medium">The best classic dress is on <br> <span>sale at Cara</span></p>
      <button class="text-white bg-indigo-600 font-semibold p-2 rounded">Learn More</button>
    </div>

    <div class="offer tow bg-cover bg-no-repeat p-24 pr-0">

    </div>

    <div class="offer three bg-cover bg-no-repeat p-20 pr-0">
      
    </div>

    <div class="offer four bg-cover bg-no-repeat p-24 pr-0  space-y-4">
      <h4 class="font-semibold text-base text-white">Spring Summer</h4>
      <h1 class="text-white text-4xl font-bold">Upcomming Season</h1>
      <p class="font-base text-medium font-medium text-white">The best classic dress is on sale at Cara </p>
      <button class="text-white bg-indigo-600 font-semibold p-2 rounded">Collection</button>
    </div>

  </div>

 <the-social></the-social>


<div class="container mx-auto">

  <button @click="scrollToTop" 
 class="btn fixed bottom-4 right-4 bg-blue-500 px-2 py-2 text-white"
 v-show="isVisible"
  >
    Top
  </button>
  
</div>

</template>

<script>
import productList from './ProductList.vue';
import TheSocial from './TheSocial.vue';
import NewArrivals from './NewArrivals.vue'
import TheFeatures from './TheFeatures.vue';
export default {

  data() {
    return {
      isVisible: false
    };
  },

  components : {
    productList,
    TheSocial,
    NewArrivals,
    TheFeatures
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    handleScroll() {
      this.isVisible = window.scrollY > 2000;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }

};
</script>

<style scoped>
.container {
  width: 80%;
}

.banner {
  background-image: url(../assets/banner/b2.jpg);
}

.one {
  background-image: url(../assets/banner/b17.jpg);
}

.tow {
  background-image: url(../assets/banner/47.jpg);
}

.three {
  background-image: url(../assets/banner/46.jpg);
}

.four {
  background-image: url(../assets/banner/34.jpg);
}

.btn {
  border-radius: 50%;
}
</style>