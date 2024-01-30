<template>

    <div class="bg-neutral-100"> 

        <div class="container p-2 mx-auto sm:p-4" v-if="totalPrice !== 0">
            <div class="">
                <table class="min-w-full text-xs">
                    <colgroup>
                        <col>
                        <col>
                        <col>
                        <col>
                        <col>
                        <col class="w-24">
                    </colgroup>
                    <thead class="dark:bg-gray-700">
                        <tr class="text-left bg-gray-100">
                            <th class="p-3 text-sm">Remove</th>
                            <th class="p-3 text-sm">Images</th>
                            <th class="p-3 text-sm">Title</th>
                            <th class="p-3 text-sm">Price</th>
                            <th class="p-3 text-sm">Amount</th>
                            <th class="p-3 text-sm">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr v-for="item in cart" :key="item.id" class="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                            <td class="p-3">
                                <!-- <button @click="removeItemFromCart(item.id)" class="bg-red-800 text-white p-2 hover:bg-red-700 ransition-transform transform active:scale-90
                                " >remove</button> -->
                                <svg
                                @click="removeItemFromCart(item.id)" 
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="brown"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-x"
                                width="23"
                                height="23"
                              >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                              </svg>
                              

                            </td>
                            <td class="p-3">
                                <img :src="item.url" class="w-16 h-16" alt="">
                            </td>
                            <td class="p-3">
                                <p class="font-semibold">{{item.title}}</p> 
                            </td>
                            <td class="p-3">
                                <p class="font-semibold">{{item.price}}</p>
                            
                            </td>
                            <td class="p-3 mx-auto space-x-1">
                                <button  class="border border-indigo-300 px-2 py-1 font-bold text-sm rounded-lg" @click="reduceQty(item.id)">-</button>
                                <span class="font-bold text-sm rounded-lg">{{item.qty}}</span> 
                                <button class="border border-indigo-300 px-2 py-1 font-bold text-sm rounded-lg"  @click="addQty(item.id)">+</button> 
                            </td>
                            <td class="p-3">
                                <span class="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                    <span>  {{ item.qty * item.price }} </span>
                                </span>
                            </td>
                        </tr>
                    
                    </tbody>
                </table>
            </div>

            <!-- <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-800"> -->
        </div>

        <empty-cart v-else></empty-cart>

        <div class="container mx-auto mt-20"> 
            <div class="grid grid-cols-1 md:grid-cols-2 mt-10 mb-10">

                <div class="mb-10">
                <h4 class="font-bold text-gray-700 text-lg mb-4">Apply Coupon</h4>
                <input type="text" placeholder="Enter Your Coupon" class="border border-collapse border-gray-300 p-2">
                <input type="submit" value="Apply" class="bg-indigo-600 p-2 text-white rounded m-2 cursor-pointer">
                </div>

                <div class="">
                <h4 class="font-bold text-gray-700 text-lg mb-4">Cart Total</h4>
                
                <table width="100%" class="border-collapse border border-slate-400 mb-6">
                    <tr>
                    <td class="border border-slate-300 p-2 font-xs">Shipping</td>
                    <td class="border border-slate-300 p-2 font-xs">Free</td>
                    </tr>
                    <tr>

                    <td class="border border-slate-300 p-2 font-xs">Total</td>
                    <td class="border border-slate-300 p-2 font-xs">$<span class="total">{{totalPrice}}</span></td>
                    </tr>
                </table>

                <button class="bg-indigo-600 text-white p-2 rounded hover:bg-blue-500 ransition-transform transform active:scale-90"
                @click="showSweetAlert"
                >Place Your Order</button>
                </div>

            </div>
            <!-- <audio ref="orderPlacedAudio" src="../assets/audio/order-placed.mp3" class="order-audio"></audio> -->

            <audio controls ref="orderPlacedAudio" class="hidden">
                <source src="../assets/audio/order-placed.mp3" type="audio/mp3">
                Your browser does not support the audio element.
            </audio>

        </div>

    </div>

</template>

<script>
import EmptyCart from '../components/EmptyCart.vue'
import Swal from 'sweetalert2';

import { mapGetters , mapActions } from 'vuex';
export default {
    components : {
        EmptyCart
    },
    computed : {
        ...mapGetters(['cart']),
       
        totalPrice() {
             return this.cart.reduce((total, item) => total + item.qty * item.price , 0);
           },

    },
    methods : {
        ...mapActions(["removeItemFromCart", "addQty", "reduceQty" ,"clearCart"]),

        
        async showSweetAlert() {

            if (this.totalPrice > 0) {
                
                await Swal.fire({
                title: 'Done!',
                text: 'Your Order Has Reached Successfully!',
                icon: 'success',
            });

            this.$refs.orderPlacedAudio.play();
            this.clearCart();
            }
        }

    },
    }

</script>

<style scoped>
.container {
    width: 83%;
}

.feather {
    display: inline-block; 
    border-radius: 50%; 
    background-color: rgb(235, 227, 227);
    margin-left: 10px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
}

.feather:hover {
    transform: rotate(90deg);
}

</style> 