<template>
    <el-container style="width:100%">
        <el-header style="width:80%;margin:0 auto;">
            <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="item in 6" :key="item">
                    <h3 class="medium">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
            <el-button type="primary" @click="playmusic">aaa</el-button>
            <el-button type="primary" @click="stopmusic">bbb</el-button>
            <el-main>
                <el-table :data="currentPageData" style="width: 80%;margin:0 auto">
                    <el-table-column type="index" label="序号" align="center"></el-table-column>
                    <el-table-column label="姓名" align="center">
                        <template slot-scope="scope">
                            <el-button
                                type="primary"
                                @click="singerDetails(scope.row)"
                            >{{scope.row.Fsinger_name}}</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" label="大头贴">
                        <template slot-scope="scope">
                            <span @click="singerDetails(scope.row)">
                                <el-avatar shape="square" :size="100" :src="scope.row.url"></el-avatar>
                            </span>
                        </template>
                    </el-table-column>
                </el-table>
            </el-main>
            <el-footer class="bg-fff font-16 block-page mg-t-30">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    class="pagination"
                    :current-page="currentPage"
                    :page-size="pageSize"
                    layout="prev, pager, next"
                    :total="total"
                ></el-pagination>
            </el-footer>
        </el-header>
    </el-container>
</template>
<script>
const params = {
    filter: true,
    loop: true,
    target: "auto"
};
let player = new QMplayer({
    params
});
export default {
    data() {
        return {
            singerIdData: [],
            currentPageData: [],
            flag: false,
            musicId: "",
            total: 0,
            pageindex: 1,
            pageSize: 5,
            currentPage: 1,
            singerImgUrl: [],
            getsingerImgUrl: []
        };
    },
    created() {
        this.musicList();
    },
    methods: {
        /**
         * @description 歌手的ID的获取
         * @param {}
         * @return
         * @author lisheng
         **/
        musicList() {
            let url =
                "/api/v8/fcg-bin/v8.fcg?g_tk=5381&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq";
            this.$axios.get(url).then(res => {
                this.singerIdData = res.data.data.list;
                this.total = res.data.data.per_page; //总数
                for (let index = 0; index < this.singerIdData.length; index++) {
                    const element = this.singerIdData[index].Fsinger_mid; //遍历每一条数据，通过歌手的名字在请求图片
                    this.singerImgUrl.push(this.getsingerImg(element));
                }
                this.getCurrentPageData();
            });
        },
        /**
         * @description 前端分页的设置
         * @param {}
         * @return
         * @author lisheng
         **/
        getCurrentPageData() {
            let begin = (this.currentPage - 1) * this.pageSize;
            let end = this.currentPage * this.pageSize;
            this.currentPageData = this.singerIdData.slice(begin, end); //获取五条任务信息
            this.getsingerImgUrl = this.singerImgUrl.slice(begin, end); //获取五张照片
            for (let index = 0; index < this.currentPageData.length; index++) {
                const element = this.currentPageData[index];
                element.url = this.getsingerImgUrl[index];
            }
        },
        handleSizeChange(val) {
            this.currentPage = val;
            this.musicList();
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            this.musicList();
        },
        /**
         * @description 歌手的照片请求/因不能请求img类型，所以直接返回的连接
         * @param {}
         * @return
         * @author lisheng
         **/
        getsingerImg(row) {
            // 返回一个图片的url 用于在大头贴是的src直接使用
            return (this.singerImgUrlitme = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${row}.jpg?max_age=2592000`);
        },
        /**
         * @description 歌手详情页面跳转
         * @param {}
         * @return
         * @author lisheng
         **/
        singerDetails(row) {
            this.$router.push({
                path: "/singerDetails",
                query: {
                    Fsinger_name: row.Fsinger_name
                }
            });
        },
        // 播放音乐使用音乐ID播放
        player(musicId) {
            player.play(musicId);
        },

        playmusic() {
            this.player("002PshzB3eefZv");
        },
        stopmusic() {
            player.pause();
        }
    },
    watch: {
        '$route.path':()=>{
            console.log(to,from);
            player.pause();
        }
    }
};
</script>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>