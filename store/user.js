import {Message} from 'element-ui'
export const state = () => ({
    userInfo:{
        token: "",
        user: {
            nickname:""
        }
    }
})



export const mutations = {
    setState(state,data){
        state.userInfo=data


    },
    setOut(state){
        state.userInfo={
            token: "",
            user: {
                
            }
        }
    }    

}



export const actions = {
    login({commit},data){
        this.$axios({
            url:'/accounts/login',
            method:'POST',
            data
     }).then(res=>{
            commit('setState',res.data)
            Message.success("登录成功，正在跳转...")

                        setTimeout(() => {
                            // 返回上一页
                            this.$router.back();
                        }, 1500);
         })
    },
    sendCode(store,phoneNumber){
        return this.$axios({
            url: "/captchas",
            method: "POST",
            data: {
              tel: phoneNumber
            }
          }).then(res => {
            // console.log(res.data)
            const { code } = res.data;
           return code;
          });
    }
}