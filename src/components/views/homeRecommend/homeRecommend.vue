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
                <el-carousel-item v-for="(item,index) in musiclist" :key="index">
                    <div v-for="(itmes,key) in musiclist[index]" :key="key">
                        {{itmes}}
                    </div>
                </el-carousel-item>
            </el-carousel>
        </el-main>
      </el-main>
  </el-container>
</template>

<script>
export default {
    data(){
        return{
            musiclist:[]
        }
    },
    mounted(){
        this.getmusiclist()
    },
    methods:{
        getmusiclist(){
            let url = `/apifirst/cgi-bin/musicu.fcg?callback=recom6880496722127585&g_tk=1742895503&jsonpCallback=recom6880496722127585&loginUin=2034969809&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&data=%7B%22comm%22%3A%7B%22ct%22%3A24%7D%2C%22category%22%3A%7B%22method%22%3A%22get_hot_category%22%2C%22param%22%3A%7B%22qq%22%3A%22%22%7D%2C%22module%22%3A%22music.web_category_svr%22%7D%2C%22recomPlaylist%22%3A%7B%22method%22%3A%22get_hot_recommend%22%2C%22param%22%3A%7B%22async%22%3A1%2C%22cmd%22%3A2%7D%2C%22module%22%3A%22playlist.HotRecommendServer%22%7D%2C%22playlist%22%3A%7B%22method%22%3A%22get_playlist_by_category%22%2C%22param%22%3A%7B%22id%22%3A8%2C%22curPage%22%3A1%2C%22size%22%3A40%2C%22order%22%3A5%2C%22titleid%22%3A8%7D%2C%22module%22%3A%22playlist.PlayListPlazaServer%22%7D%2C%22new_song%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetNewSong%22%2C%22param%22%3A%7B%22type%22%3A0%7D%7D%2C%22new_album%22%3A%7B%22module%22%3A%22music.web_album_library%22%2C%22method%22%3A%22get_album_by_tags%22%2C%22param%22%3A%7B%22area%22%3A7%2C%22company%22%3A-1%2C%22genre%22%3A-1%2C%22type%22%3A-1%2C%22year%22%3A-1%2C%22sort%22%3A2%2C%22get_tags%22%3A1%2C%22sin%22%3A0%2C%22num%22%3A40%2C%22click_albumid%22%3A0%7D%7D%2C%22toplist%22%3A%7B%22module%22%3A%22music.web_toplist_svr%22%2C%22method%22%3A%22get_toplist_index%22%2C%22param%22%3A%7B%7D%7D%2C%22focus%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetFocus%22%2C%22param%22%3A%7B%7D%7D%7D`
            this.$axios.get(url).then(res => {
                console.log(res);
                
            })
        }
    }
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