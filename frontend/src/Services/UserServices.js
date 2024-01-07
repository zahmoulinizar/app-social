import axios from 'axios'
const UserService = {}

UserService.register = function(data){
 return  axios.post('http://127.0.0.1:8000/users/signUp' , data)
}
UserService.login = function(data){
return  axios.post("http://127.0.0.1:8000/users/signIn" , data) 
}
export default  UserService 