import Vuex from 'vuex'
import Vue from 'vue'

import db from '../src/fb'

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        majice: [],
        svi_proizvodi_imena: [],
        sve_u_vezi_proizvoda: []
    },
    getters: {
        getAllMajice: (state) => state.majice,
        getAllProductTypes: (state) => state.svi_proizvodi_imena,
        getOnChangeProizvodi: (state) => state.sve_u_vezi_proizvoda
        
    },
    mutations: {

        setAllMajice: (state, majice) => (state.majice = majice),
        setAllProductsType: (state, proizvodi) => (state.svi_proizvodi_imena = proizvodi),
        setOnChangeProizvodi: (state, proizvod_sve) => (state.sve_u_vezi_proizvoda = proizvod_sve),
        removeAllProizvod : (state) => (state.sve_u_vezi_proizvoda =[])
    },
    actions: {

        fetchAllMajice({ commit }) {
            let response = []
            db.collection("Majice").get()
                .then(res => {
                    res.forEach(element => {
                        response.push({ model: element.data().model, slika: element.data().slika })

                    });
                    commit("setAllMajice", response)
                })

        },
        fetchAllProductTypes({ commit }) {
            let allProducts = []
            db.collection("sve_kolekcije")
                .doc("kolekcije")
                .get()
                .then(res => {
                    res.data().collections.forEach(element => {
                        allProducts.push(element);
                    });
                    commit("setAllProductsType", allProducts)

                })
        },
        onChangeProizvodi({ commit }, event) {
            let sveUveziProizvoda = [];
            db.collection(event)
                .get()
                .then(res => {
                    res.forEach(element => {
                        
                        sveUveziProizvoda.push(element.data());
                    });
                    commit('setOnChangeProizvodi', sveUveziProizvoda)
                });
        },
        removeAllProductsOnLand({commit}){
            commit('removeAllProizvod')
        }


    }


})

export default store