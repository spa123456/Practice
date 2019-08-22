<template>
  <el-container>
      <el-header class="recommend-song">歌单推荐</el-header>
      <el-main class="recommend-song-list">
          <el-header>
              <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="2"><div class="grid-content ">为你推荐</div></el-col>
            <el-col :span="2"><div class="grid-content ">情歌</div></el-col>
            <el-col :span="2"><div class="grid-content ">节奏控</div></el-col>
            <el-col :span="2"><div class="grid-content ">网络歌曲</div></el-col>
            <el-col :span="2"><div class="grid-content ">官方歌曲</div></el-col>
            <el-col :span="2"><div class="grid-content ">经典</div></el-col>
        </el-row>
          </el-header>
        <el-main>
            <el-carousel trigger="click" height="270px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3 class="small">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </el-main>
      </el-main>
  </el-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.recommend-song{
    padding: 40px;
    font-size: 30px;
    width: 100%;
}
.recommend-song-list{
    width: 100%;
}
</style>