<template>
  <div>
    <div class="ctrl">
        <span v-for="(item,index) in ['军事','酒店','体育']" :key="index"
        @click="handle(index)"
        :class="{active:index===current}"
        >{{item}}</span>
        
    </div>
    <div v-if="current===0">
        <ul>
            <li>军事1</li>
            <li>军事1</li>
            <li>军事1</li>
        </ul>
    </div>
     <div v-if="current===1">
        <ul>
            <li>酒店2</li>
            <li>酒店2</li>
            <li>酒店2</li>
        </ul>
    </div>
     <div v-if="current===2">
        <ul>
            <li>体育3</li>
            <li>体育3</li>
            <li>体育3</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            current:0
        }
    },
    methods:{
        handle(index){
            this.current=index
        }
    }
};
</script>

<style scoped>
    .ctrl span{
    cursor: pointer;
}

.ctrl .active{
    color: red;
}
</style>
