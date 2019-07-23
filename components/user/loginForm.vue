<template>
  
    <el-form :model="form" :rules="rules" ref="ruleForm" class="form">
      <el-form-item class="form-item" prop="username">
        <el-input placeholder="用户名/手机" v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item class="form-item" prop="password">
        <el-input placeholder="密码" v-model="form.password" type="password"></el-input>
      </el-form-item>

      <p class="form-text">
        <nuxt-link to="#">忘记密码</nuxt-link>
      </p>

      <el-button type="primary" class="submit" @click="handleClick">登录</el-button>
    </el-form>
  
</template>

<script>
export default {
    data(){
        return{
            form:{
                username:'',
                password:''
            },
            rules:{
                username:[
                    {required:true, message:'请输入用户名',trigger:'blur' }
                ],
                password:[
                    {required:true, message:'请输入密码',trigger:'blur'}
                ]
            }
        }
    },
    methods:{
        handleClick(){
           this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                 this.$store.dispatch('user/login',this.form)
                }
            })  
            
        }
    }
}
</script>


<style scoped lang="less" >
.form {
  padding: 25px;
}

.form-item {
  margin-bottom: 20px;
}

.form-text {
  font-size: 12px;
  color: #409eff;
  text-align: right;
  line-height: 1;
}

.submit {
  width: 100%;
  margin-top: 10px;
}
</style>


