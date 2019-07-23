<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <flightsFilters :data="cacheFlightsData" @changeList="changeList" />
        <!-- 航班头部布局 -->
        <flightsListHead />

        <!-- 航班信息 -->
        <flightsItem v-for="(item,index) in datalist" :key="index" :data="item" />
        <!-- size-change：切换条数时候触发 -->
        <!-- current-change：选择页数时候触发 -->
        <!-- current-page: 当前页数 -->
        <!-- page-size：当前条数 -->
        <!-- total：总条数 -->
        <el-row type="flex" justify="center" style="margin-top:10px;">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageIndex"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </el-row>
      </div>

      <!-- 侧边栏 -->
      <FlightsAside />
    </el-row>
  </section>
</template>

<script>
import flightsListHead from "@/components/air/flightsListHead";
import flightsItem from "@/components/air/flightsItem";
import flightsFilters from '@/components/air/flightsFilters';
import FlightsAside from '@/components/air/flightsAside'
export default {
  components: {
    flightsListHead,
    flightsItem,
    flightsFilters,
    FlightsAside
  },
  data() {
    return {
      flightsData: {
        flights:[],
        info:{},
        options:{}
      },
      cacheFlightsData:{
         flights:[],
        info:{},
        options:{}
      },
      // datalist: [],
      pageIndex:1,
      pageSize:5,
      total:0
    };
  },
  watch:{
    //  监听路由的变化
        $route(){
           // 请求机票列表
            this.getData();
        }
  },
   // 当前url参数发生变化时候会触发
    // beforeRouteUpdate (to, from, next) {
    //     next();
    //     this.getData();
    // },
  computed:{
     datalist(){
       return  this.flightsData.flights.slice(
         (this.pageIndex-1)*this.pageSize,
          this.pageSize*this.pageIndex
      )
     }
  },
  methods:{
    handleSizeChange(value){
       this.pageSize = value;
            // 重新回到第一页
            this.pageIndex = 1;
            // this.setDatelist()
    },
    handleCurrentChange(value){
      // console.log(value)
      this.pageIndex=value
      // this.setDatelist()
     
    },
    changeList(arr){
      this.flightsData.flights = arr
    },
    // setDatelist(){
    //   this.datalist = this.flightsData.flights.slice(
    //      (this.pageIndex-1)*this.pageSize,
    //       this.pageSize*this.pageIndex
    //   )
    // }
     getData(){

            this.pageIndex = 1;

            // 请求机票列表
            this.$axios({
                url: "/airs",
                params: this.$route.query
            }).then(res => {
                // 总数据，（flights, info, options, total）
                this.flightsData = res.data;

                // 下面的值赋值之后不能被修改，展开得到新的对象
                this.cacheFlightsData = { ...res.data};

                // 总条数
                this.total = this.flightsData.flights.length;
            })
        }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style scoped lang="less">
.contianer {
  width: 1000px;
  margin: 20px auto;
}

.flights-content {
  width: 745px;
  font-size: 14px;
}

.aside {
  width: 240px;
}
</style>