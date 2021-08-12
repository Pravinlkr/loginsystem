const state = {
    userDetails:{email:'', password:''},
    isLoggedIn:false
}
const getters = {
    isLoggin(state){
        return state.isLoggedIn
    },
    getUserEmail(state){
        return state.userDetails.email
    }
}
const mutations = {
    LOGIN(state, payload){
        state.userDetails.email = payload.email;
        state.userDetails.password = payload.password;
        state.isLoggedIn = true;
    },
    LOGOUT(state){
        state.userDetails.email = ''
        state.userDetails.password = ''
        state.isLoggedIn = false
    }
}
const actions = {
    login(context, payload){
        context.commit('LOGIN',payload);
    },
    logout(context){
        context.commit('LOGOUT');
    }
}

export default{
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}