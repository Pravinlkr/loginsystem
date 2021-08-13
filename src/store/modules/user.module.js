const state = {
    userDetails:{email:'', password:''},
    isLoggedIn:false
}
const getters = {
    isLoggin(state){
        var localUserDetails = JSON.parse(localStorage.getItem('LoginCredentials'));
        if(localUserDetails){
            state.isLoggedIn = localUserDetails.isLoggedIn;
        }
        return state.isLoggedIn
    },
    getUserEmail(state){
        var localUserDetails = JSON.parse(localStorage.getItem('LoginCredentials'));
        if(localUserDetails){
            state.userDetails.email = localUserDetails.email;
        }
        return state.userDetails.email
    }
}
const mutations = {
    LOGIN(state, payload){
        state.userDetails.email = payload.email;
        state.userDetails.password = payload.password;
        state.isLoggedIn = true;
        
        let user = {email: state.userDetails.email, password: state.userDetails.password, isLoggedIn: true}
        const parsed = JSON.stringify(user);
        localStorage.setItem('LoginCredentials',parsed);
    },
    LOGOUT(state){
        state.userDetails.email = ''
        state.userDetails.password = ''
        state.isLoggedIn = false
        
        localStorage.clear();
        /*let user = {email: state.userDetails.email, password: state.userDetails.password, isLoggedIn: false}
        const parsed = JSON.stringify(user);
        localStorage.setItem('LoginCredentials',parsed);*/
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