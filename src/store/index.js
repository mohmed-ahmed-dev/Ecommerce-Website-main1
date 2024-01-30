import { createStore } from "vuex";
import tshirt1 from '../assets/products/1.jpg';
import tshirt2 from '../assets/products/11.jpg';
import tshirt3 from '../assets/products/24.jpg';
import tshirt4 from '../assets/products/4.jpg';
import tshirt5 from '../assets/products/5.jpg';
import tshirt6 from '../assets/products/6.jpg';
import tshirt7 from '../assets/products/17.jpg';
import tshirt8 from '../assets/products/30.jpg';
import tshirt9 from '../assets/products/31.jpg';
import star from '../assets/home/star.png';

import Ntshirt1 from '../assets/new arival/2.jpg';
import Ntshirt2 from '../assets/new arival/3.jpg';
import Ntshirt3 from '../assets/new arival/9.jpg';
import Ntshirt4 from '../assets/new arival/18.jpg';
import Ntshirt5 from '../assets/new arival/19.jpg';
import Ntshirt6 from '../assets/new arival/23.jpg';
import Ntshirt7 from '../assets/new arival/20.jpg';
import Ntshirt8 from '../assets/new arival/26.jpg';


export const store = createStore({
    state: {
        products: [
            { id: 1, title: 'Hugo Biss', qty: 1 , url: tshirt1, price: 100, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, eos quibusdam.', starUrl: star },
            { id: 2, title: 'Hugo Biss', qty: 1 , url: tshirt2, price: 120, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, eos quibusdam.', starUrl: star },
            { id: 3, title: 'Hugo Biss', qty: 1 , url: tshirt3, price: 130, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, eos quibusdam.', starUrl: star },
            { id: 4, title: 'Ralph Lauren', qty: 1 , url: tshirt4, price: 150, desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, perspiciatis.', starUrl: star },
            { id: 5, title: 'Ralph Lauren', qty: 1 , url: tshirt5, price: 130, desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, perspiciatis.', starUrl: star },
            { id: 6, title: 'Ralph Lauren', qty: 1 , url: tshirt6, price: 170, desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, perspiciatis.', starUrl: star },
            { id: 7, title: 'Lacoste', qty: 1 , url: tshirt7, price: 200, desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, perspiciatis.', starUrl: star },
            { id: 8, title: 'Lacoste', qty: 1 , url: tshirt8, price: 190, desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, perspiciatis.', starUrl: star },
            { id: 9, title: 'Lacoste', qty: 1 , url: tshirt9, price: 120, desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, perspiciatis.', starUrl: star },
        ],

        newArrivals: [
          { id: 1, title: 'Hugo Biss', qty: 1 , url: Ntshirt1, price: 88, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, eos quibusdam.', starUrl: star },
          { id: 2, title: 'Hugo Biss', qty: 1 , url: Ntshirt2, price: 90, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, eos quibusdam.', starUrl: star },
          { id: 3, title: 'Hugo Biss', qty: 1 , url: Ntshirt3, price: 100, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, eos quibusdam.', starUrl: star },
          { id: 4, title: 'Ralph Lauren', qty: 1 , url: Ntshirt4, price: 120, desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, perspiciatis.', starUrl: star },
          { id: 5, title: 'Ralph Lauren', qty: 1 , url: Ntshirt5, price: 110, desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, perspiciatis.', starUrl: star },
          { id: 6, title: 'Ralph Lauren', qty: 1 , url: Ntshirt6, price: 130, desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, perspiciatis.', starUrl: star },
          { id: 7, title: 'Lacoste', qty: 1 , url: Ntshirt7, price: 160, desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, perspiciatis.', starUrl: star },
          { id: 8, title: 'Lacoste', qty: 1 , url: Ntshirt8, price: 140, desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, perspiciatis.', starUrl: star },
        ],
        cart: [],
        cartTotal: 0
    },

    actions : {
  
        getProducts({ commit }) {
          commit("getProductData");
        
        },
        addToCart({ commit }, item) {
          commit("addToCart", item);
         
        },
        removeItemFromCart({ commit }, id) {
          commit("removeFromCart", id);
        
        },
        addQty({ commit }, id) {
          commit("addQty", id);
        
        },
        reduceQty({ commit }, id) {
          commit("reduceQty", id);
  
        },
        clearCart({ commit }) {
          commit('clearCartMutation');
        },
    },

    getters : {
        products: (state) => state.products,
        newArrivals: (state) => state.newArrivals,
        cart: (state) => state.cart
    },

     mutations : {
      getProductData(state) {
        state.products = [...products];
      },
      addToCart(state, item) {
        const productInCart = state.cart.find((product) => product.id === item.id);
        if (!productInCart) {
          state.cart.push({ ...item, qty: 1 });
        } else {
          productInCart.qty++;
        }
      },
      removeFromCart(state, id) {
        state.cart = state.cart.filter((item) => item.id !== id);
      },
      addQty(state, id) {
        const productInCart = state.cart.find((product) => product.id === id);
        productInCart.qty++;
      },
      reduceQty(state, id) {
        const productInCart = state.cart.find((product) => product.id === id);
        if (productInCart.qty > 1) {
          productInCart.qty--;
        } else {
          state.cart.splice(state.cart.indexOf(productInCart, 1));
        }
      },
    
      updateCartTotal(state) {
        state.cartTotal = state.cart.reduce((total, item) => total + item.qty * item.price, 0);
    },

    clearCartMutation(state) {
      state.cart = [];
    }


    }
      

});
