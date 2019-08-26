<template>
    <el-container>
        <div style="width:100%">
            <div class="modular_header">
                <el-header class="recommend-song">歌单推荐</el-header>
                <el-main class="recommend-song-list">
                    <el-header>
                        <el-row type="flex" class="row-bg" justify="center">
                            <el-col :span="2">
                                <div class="grid-content">为你推荐</div>
                            </el-col>
                            <el-col :span="2">
                                <div class="grid-content">情歌</div>
                            </el-col>
                            <el-col :span="2">
                                <div class="grid-content">节奏控</div>
                            </el-col>
                            <el-col :span="2">
                                <div class="grid-content">网络歌曲</div>
                            </el-col>
                            <el-col :span="2">
                                <div class="grid-content">官方歌曲</div>
                            </el-col>
                            <el-col :span="2">
                                <div class="grid-content">经典</div>
                            </el-col>
                        </el-row>
                    </el-header>
                    <el-main>
                        <el-carousel
                            trigger="click"
                            height="300px"
                            :interval="5000"
                            @change="onchange"
                            :autoplay="false"
                        >
                            <el-carousel-item
                                v-for="(item,index) in pageIndex"
                                :key="index"
                                class="carousel_css"
                            >
                                <div v-for="(item,index) in currentPagemusicdata" :key="index">
                                    <div class="carousel_itme">
                                        <img :src="item.cover" alt srcset width="230" height="230" />
                                    </div>
                                    <span class="font_14 font_weight">{{item.title}}</span>
                                    <div>
                                        <span class="font_14 font_color_ccc ">播放量：{{Math.ceil(item.listen_num/1000)/10}}万</span>
                                    </div>
                                </div>
                            </el-carousel-item>
                        </el-carousel>
                    </el-main>
                </el-main>
            </div>
            <div class="modular_header">
                <el-header class="recommend-song">新歌首发</el-header>
                <el-main class="recommend-song-list">
                    <el-header>
                        <el-row type="flex" class="row-bg" justify="center">
                            <el-col :span="2">
                                <div class="grid-content">最新</div>
                            </el-col>
                            <el-col :span="2">
                                <div class="grid-content">内地</div>
                            </el-col>
                            <el-col :span="2">
                                <div class="grid-content">港台</div>
                            </el-col>
                            <el-col :span="2">
                                <div class="grid-content">韩国</div>
                            </el-col>
                            <el-col :span="2">
                                <div class="grid-content">欧美</div>
                            </el-col>
                            <el-col :span="2">
                                <div class="grid-content">日本</div>
                            </el-col>
                        </el-row>
                    </el-header>
                    <el-main>
                        <el-carousel
                            trigger="click"
                            height="300px"
                            :interval="5000"
                            @change="onchange"
                            :autoplay="false"
                        >
                            <el-carousel-item
                                v-for="(item,index) in pageIndex"
                                :key="index"
                                class="carousel_css"
                            >
                                <div v-for="(item,index) in currentPagemusicdata" :key="index">
                                    <div>
                                        <img :src="item.cover" alt srcset width="230" height="230" />
                                    </div>
                                    <span>{{item.title}}</span>
                                </div>
                            </el-carousel-item>
                        </el-carousel>
                    </el-main>
                </el-main>
            </div>
        </div>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            musiclistdata: [],
            currentPagemusicdata: [],
            currentPage: 1,
            pageSize: 5,
            pageIndex: 1
        };
    },
    mounted() {
        this.getmusiclist();
    },
    methods: {
        getmusiclist() {
            let url = `/musicall/cgi-bin/musicu.fcg?g_tk=1742895503&jsonpCallback=recom6880496722127585&loginUin=2034969809&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&data=%7B%22comm%22%3A%7B%22ct%22%3A24%7D%2C%22category%22%3A%7B%22method%22%3A%22get_hot_category%22%2C%22param%22%3A%7B%22qq%22%3A%22%22%7D%2C%22module%22%3A%22music.web_category_svr%22%7D%2C%22recomPlaylist%22%3A%7B%22method%22%3A%22get_hot_recommend%22%2C%22param%22%3A%7B%22async%22%3A1%2C%22cmd%22%3A2%7D%2C%22module%22%3A%22playlist.HotRecommendServer%22%7D%2C%22playlist%22%3A%7B%22method%22%3A%22get_playlist_by_category%22%2C%22param%22%3A%7B%22id%22%3A8%2C%22curPage%22%3A1%2C%22size%22%3A40%2C%22order%22%3A5%2C%22titleid%22%3A8%7D%2C%22module%22%3A%22playlist.PlayListPlazaServer%22%7D%2C%22new_song%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetNewSong%22%2C%22param%22%3A%7B%22type%22%3A0%7D%7D%2C%22new_album%22%3A%7B%22module%22%3A%22music.web_album_library%22%2C%22method%22%3A%22get_album_by_tags%22%2C%22param%22%3A%7B%22area%22%3A7%2C%22company%22%3A-1%2C%22genre%22%3A-1%2C%22type%22%3A-1%2C%22year%22%3A-1%2C%22sort%22%3A2%2C%22get_tags%22%3A1%2C%22sin%22%3A0%2C%22num%22%3A40%2C%22click_albumid%22%3A0%7D%7D%2C%22toplist%22%3A%7B%22module%22%3A%22music.web_toplist_svr%22%2C%22method%22%3A%22get_toplist_index%22%2C%22param%22%3A%7B%7D%7D%2C%22focus%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetFocus%22%2C%22param%22%3A%7B%7D%7D%7D`;
            this.$axios.get(url).then(res => {
                this.musiclistdata = res.data.recomPlaylist.data.v_hot;
                console.log(res); 
                this.getCurrentPageData();
                let num = parseInt(this.musiclistdata.length / this.pageSize);
                this.pageIndex = num;
            });
        },
        getCurrentPageData() {
            let begin = (this.currentPage - 1) * this.pageSize;
            let end = this.currentPage * this.pageSize;
            this.currentPagemusicdata = this.musiclistdata.slice(begin, end);
        },
        onchange(a, i) {
            this.currentPage = a + 1;
            this.getCurrentPageData();
        }
    }
};
</script>

<style scoped>
.recommend-song {
    padding: 40px;
    font-size: 30px;
    width: 100%;
    font-weight: 700;
    letter-spacing: 15px
}
.recommend-song-list {
    width: 100%;
}
.carousel_css {
    display: flex;
}
.carousel_css > div {
    flex: 1;
    text-align: left;
}
.modular_header {
    width: 100%;
    display: block;
    background: linear-gradient(rgb(255, 255, 255), rgb(240, 237, 237));
}
.el-carousel__button {
    color: black;
}
.font_14{
    font-size: 14px;  
}
.font_weight{
    font-weight: 700;
}
.carousel_itme{
    margin-bottom: 5px
}
.font_color_ccc{
    color: rgb(179, 178, 178);
}
</style>