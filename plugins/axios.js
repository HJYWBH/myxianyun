import {Message} from 'element-ui'
export default ({$axios}) =>{
    // console.log(nuxt,123)
    $axios.onError(err=>{
        // console.log(err.response)
        const {message,statusCode}=err.response.data;
        if(statusCode===400){
            Message.error(message)
        }

        if( statusCode === 401 || statusCode === 403 ){
            // 跳转到登录页
            redirect("/user/login");
        }
    })
}