import Vuex from 'vuex'
import Vue from 'vue'

import db from '../src/fb'

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        majice: [],
        svi_proizvodi_imena: [],
        sve_u_vezi_proizvoda: [],
        stan: [
            { name: "Hodnik", active: false },
            { name: "Mala Soba", active: false},
            { name: "Kuhinja", active: false },
            { name: "Dnevna Soba", active: false },
            { name: "Kupatilo", active: false },
            { name: "Spavaca Soba", active: false },
            { name: "Terasa 1", active: false },
            { name: "Terasa 2", active: false }
        ],
        // stan1: [
        //     { name: "Kupatilo", active: false },
        //     { name: "Spavaca Soba", active: false },
        //     { name: "Terasa 1", active: false },
        //     { name: "Terasa 2", active: false }
        // ]
       
    },
    getters: {
        getAllStan: (state) => state.stan,
        getAllStan2: (state) => state.stan1,
        getAllMajice: (state) => state.majice,
        getAllProductTypes: (state) => state.svi_proizvodi_imena,
        getOnChangeProizvodi: (state) => state.sve_u_vezi_proizvoda

    },
    mutations: {
        setStateStan: (state, stan) => (state.stan = stan),
        setStateStan1: (state, stan1) => (state.stan1 = stan1),

        changeStatusOfStan1: (state, payload) => (state.stan[payload[0]].active = payload[1]),
        // changeStatusOfStan2: (state, payload) => (state.stan1[payload[0]].active = payload[1]),

        setAllMajice: (state, majice) => (state.majice = majice),
        setAllProductsType: (state, proizvodi) => (state.svi_proizvodi_imena = proizvodi),
        setOnChangeProizvodi: (state, proizvod_sve) => (state.sve_u_vezi_proizvoda = proizvod_sve),
        removeAllProizvod: (state) => (state.sve_u_vezi_proizvoda = [])
    },
    actions: {
        changeStateOfStan({ commit }, index) {
            if (this.state.stan[index].active === false) {
                let x = true
                commit('changeStatusOfStan1', [index, x]);
            } else {
                let y = false
                commit('changeStatusOfStan1', [index, y]);
            }
        },
        // changeStateOfStan2({ commit }, index ) {
        //     if (this.state.stan1[index].active === false) {
        //         let x = true
        //         commit('changeStatusOfStan2', [index, x]);
        //     } else {
        //         let y = false
        //         commit('changeStatusOfStan2', [index, y]);
        //     }
        // },

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
        removeAllProductsOnLand({ commit }) {
            commit('removeAllProizvod')
        },
        fetchRaspPiStates({commit}){
            
        }




    }


    // state: {
    //     majice: [],
    //     svi_proizvodi_imena: [],
    //     sve_u_vezi_proizvoda: [],
    //     stan: [],
    //     stan1: []
    // },
    // getters: {
    //     getAllStan: (state) => state.stan,
    //     getAllStan2: (state) => state.stan1,
    //     getAllMajice: (state) => state.majice,
    //     getAllProductTypes: (state) => state.svi_proizvodi_imena,
    //     getOnChangeProizvodi: (state) => state.sve_u_vezi_proizvoda

    // },
    // mutations: {
    //     setStateStan: (state, stan) => (state.stan = stan),
    //     setStateStan1: (state, stan1) => (state.stan1 = stan1),

    //     changeStatusOfStan1: (state, payload) => (state.stan[payload[0]].active = payload[1]),
    //     changeStatusOfStan2: (state, payload) => (state.stan1[payload[0]].active = payload[1]),

    //     setAllMajice: (state, majice) => (state.majice = majice),
    //     setAllProductsType: (state, proizvodi) => (state.svi_proizvodi_imena = proizvodi),
    //     setOnChangeProizvodi: (state, proizvod_sve) => (state.sve_u_vezi_proizvoda = proizvod_sve),
    //     removeAllProizvod: (state) => (state.sve_u_vezi_proizvoda = [])
    // },
    // actions: {
    //     setState({ commit }) {
    //         let stan = [
    //             { name: "Hodnik", active: "off" },
    //             { name: "Mala Soba", active: "off" },
    //             { name: "Kuhinja", active: "off" },
    //             { name: "Dnevna Soba", active: "off" }
    //         ]
    //         commit('setStateStan', stan)
    //     },
    //     setState1({ commit }) {
    //         let stan1 = [
    //             { name: "Kupatilo", active: "off" },
    //             { name: "Spavaca Soba", active: "off" },
    //             { name: "Terasa 1", active: "off" },
    //             { name: "Terasa 2", active: "off" }
    //         ]
    //         commit('setStateStan1', stan1)

    //     },
    //     changeStateOfStan({ commit }, index, element) {
    //         if (this.state.stan[index].active === "off") {
    //             let x = "on"
    //             commit('changeStatusOfStan1', [index,x]);
    //         } else {
    //             let y = "off"
    //             commit('changeStatusOfStan1', [index,y]);
    //         }
    //     },
    //     changeStateOfStan2({ commit }, index, element) {
    //         if (this.state.stan[index].active === "off") {
    //             let x = "on"
    //             commit('changeStatusOfStan2', [index,x]);
    //         } else {
    //             let y = "off"
    //             commit('changeStatusOfStan2', [index,y]);
    //         }
    //     },

    //     fetchAllMajice({ commit }) {
    //         let response = []
    //         db.collection("Majice").get()
    //             .then(res => {
    //                 res.forEach(element => {
    //                     response.push({ model: element.data().model, slika: element.data().slika })

    //                 });
    //                 commit("setAllMajice", response)
    //             })

    //     },
    //     fetchAllProductTypes({ commit }) {
    //         let allProducts = []
    //         db.collection("sve_kolekcije")
    //             .doc("kolekcije")
    //             .get()
    //             .then(res => {
    //                 res.data().collections.forEach(element => {
    //                     allProducts.push(element);
    //                 });
    //                 commit("setAllProductsType", allProducts)

    //             })
    //     },
    //     onChangeProizvodi({ commit }, event) {
    //         let sveUveziProizvoda = [];
    //         db.collection(event)
    //             .get()
    //             .then(res => {
    //                 res.forEach(element => {

    //                     sveUveziProizvoda.push(element.data());
    //                 });
    //                 commit('setOnChangeProizvodi', sveUveziProizvoda)
    //             });
    //     },
    //     removeAllProductsOnLand({ commit }) {
    //         commit('removeAllProizvod')
    //     },




    // }


})

export default store