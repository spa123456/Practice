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
                    <el-table-column type="index" label="日期" align="center"></el-table-column>
                    <el-table-column prop="Fsinger_name" label="姓名" align="center"></el-table-column>
                    <el-table-column align="center" label="大头贴">
                        <template slot-scope="scope">
                            <el-avatar shape="square" :size="100" :src="scope.row.url"></el-avatar>
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
import $ from "jquery"; //导入juqery
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
            $.ajax({
                url:
                    "https://c.y.qq.com/v8/fcg-bin/v8.fcg?g_tk=5381&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq",
                type: "get",
                dataType: "jsonp",
                jsonp: "jsonpCallback",
                success: res => {
                    this.singerIdData = res.data.list;
                    this.total = res.data.per_page; //总数

                    for (
                        let index = 0;
                        index < this.singerIdData.length;
                        index++
                    ) {
                        const element = this.singerIdData[index].Fsinger_mid;
                        this.singerImgUrl.push(this.getsingerImg(element));
                    }
                    // console.log(this.singerImgUrl)
                    this.getCurrentPageData();
                }
            });
        },
        /**
         * @description 分页的设置
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
            console.log(this.currentPageData);
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
         * @description 歌手的照片请求
         * @param {}
         * @return
         * @author lisheng
         **/
        getsingerImg(row) {
            return (this.singerImgUrlitme = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${row}.jpg?max_age=2592000`);
        },
        player(musicId) {
            let onplay = () => {
                this.flag = !this.flag;
                console.log(this.flag);
            };
            onplay();
            this.flag ? player.play(musicId) : player.pause();
        },
        playmusic() {
            // this.musicList()
            this.player("004dFFPd4JNv8q");
        },
        stopmusic() {
            this.musicList();
            // this.singerImg();
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