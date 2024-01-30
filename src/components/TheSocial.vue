<template>
    <div class="banner2  py-16 dark:bg-violet-400 dark:text-gray-900 mb-16">
        <div class="container mx-auto">
            <div class="flex flex-col  md:flex-row justify-between">
              <div class="mb-8 md:mb-0 space-y-3">
                <h2 class="text-white text-3xl font-semibold"><span class="text-amber-500">Sign Up</span> For Newsletters</h2>
                <p class="text-white font-semibold text-sm">Get E-mail Updates about our laster shop and <span class="text-amber-500">Special Offers</span></p>
            </div>
            <div> 
             <form class="space-y-3">
                <input type="email" name="email" placeholder="Your Email Address" class="p-3 px-8 rounded-l">
                <input type="submit" value="Get Updates" class="text-white font-semibold cursor-pointer bg-indigo-600 p-3 rounded-r">
              </form>
            </div>
            
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 80%;
  }

  .banner2 {
    background-image: url(../assets/banner/particles.jpg);
  }

</style>