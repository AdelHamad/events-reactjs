import {SIGNIN, SIGNUP} from './action-types'
import axios from 'axios'

function signin(user) {
    return{
        type: SIGNIN,
        payload: user
    }
}

export function signup(user) {
    return{
        type: SIGNUP,
        payload: user
    }
}

export function signinReq(user){

    return function (dispatch) {
        let userData = new FormData();
        userData.append('username', user.username);
        userData.append('password', user.password);

        const api = 'http://localhost/events/signin.php'
        return axios.post(api, userData)
            .then(function (response) {
                if (response.data.code === 1){
                    alert("bsst")
                    console.log("bsst")
                    dispatch (signin(user))
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }


}