<template>  
    <div class="banner p-6 py-8 dark:bg-violet-400 dark:text-gray-900 mb-24">
      <div class="container mx-auto">
          <div class="flex flex-col lg:flex-col items-center py-10 space-y-4">
              <span class=" font-bold text-3xl  text-white">About Us</span>
              <h2 class="text-center text-white tracki font-bold"> Up to Discover The Way We Deal With Our Customers
              </h2>
          </div>
      </div>
  </div>
  
  <section>
    <div>
       <div class="container mx-auto grid lg:grid-cols-2 gap-6 border border-collapse border-gray-300 p-4 mb-24">
          <div>
            <img src="../assets/about/a6.jpg" alt="">
          </div>
          <div>
            <h2 class="text-center font-bold text-4xl mb-8">Who We Are</h2>
             <div>
              <p class="text-gray-500 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Rerum doloribus doloremque quaerat! Officia iure soluta, 
                ipsum dicta corporis nam ab minima laborum expedita numquam 
                aliquam molestias quis labore. Ipsa sed, voluptatem molestias 
                sequi voluptatibus aut laudantium labore alias accusantium quibusdam 
                deleniti facere quis obcaecati. Necessitatibus voluptas hic enim. 
                At corrupti quo fuga vitae commodi mollitia distinctio. 
                Fugit explicabo iusto cupiditate est deleniti rem quod! Corrupti, 
                deleniti quis optio placeat officiis eaque culpa incidunt doloribus autem. 
                repellendus reiciendis minus. In quis explicabo maiores iste delectus.</p>
             </div>
               
             <div>
              <marquee class="bg-indigo-500 p-2 rounded text-white font-medium mt-2">
                Create stunning images with as much or as little control as you like thanks to a choice of Basic and
                Creative models.
              </marquee>
             </div>
          </div>
       </div>
    </div>
  </section>

  <div class="about-app container mx-auto">
      <h1>Download Our <a href="#">App</a></h1>
      <div class="video">
        <video muted autoplay src="../assets/about/1.mp4" loop></video>
      </div>
    </div>
  
  <the-features></the-features>

  <the-social></the-social>
  
</template>
  
  <script>
  import TheFeatures from './TheFeatures.vue';
  import TheSocial from './TheSocial.vue';
  export default {
    components : {
      TheSocial,
      TheFeatures
    }
  }
  </script>
  
  <style scoped>
  .container {
    width: 80%;
  }
  .banner {
    background-image: url(../assets/about/banner.png);
    background-size: cover;
    background-position: center;
  }

  .about-app {
    text-align: center;
    padding-bottom: 50px;
  }
  .about-app h1 {
    font-size: 38px;
    color: #333;
  }
  .about-app h1 a {
    color: #009688;
    transition: var(--transition-duration);
  }
  .about-app h1 a:hover {
    color: #008277;
  }
  .about-app .video {
    margin-top: 20px;
    padding: 20px;
  }
  .about-app video {
    max-width: 100%;
    max-height: 70vh;
    border-radius: 10px;
    margin: auto;
  }
  .about-feats {
    padding: 0;
    padding-bottom: var(--main-padding);
  }
  
  </style>