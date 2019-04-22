import axios from "./index"
export interface User{
    userName:string
    password:string
}
export const userlogin = (user:User)=>{
    return axios.request({
        url: '/login',
        method: 'post',
        data: {
          userName: user.userName,
          password: user.password
        }
      })
}