<template>
  <div class="conner">
    <div class="ctrl">
      <span v-for="(item,index) in ['酒店','体育','军事']" :key="index"
      @click="dianji(index)"
      :class="{active:current===index}">{{item}}</span>
    </div>
    <div>
      <ul v-if="current===0">
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
    <div v-if="current===1">
      <ul>
        <li>2</li>
        <li>2</li>
        <li>2</li>
      </ul>
    </div>
    <div v-if="current===2">
      <ul>
        <li>3</li>
        <li>3</li>
        <li>3</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            current:0,
           
        }
    },
    methods:{
        dianji(index){
            this.current=index
        }
    }
};
</script>

<style lang="less" scoped>
    .ctrl span{
        cursor:pointer;
    }
    .ctrl .active{
      color:red
    }
</style>
