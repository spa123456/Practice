<template>
    <el-container>
        <el-header>
            <el-tabs v-model="activeName" @tab-click="handleClick" style="width:80%;margin:0 auto">
                <el-tab-pane label="歌曲/单曲" name="first">
                    <el-table :data="singerDetails" style="width: 100%">
                        <el-table-column prop="name" label="歌名" width="180" align="center"></el-table-column>
                        <el-table-column prop="singer" label="歌手" width="180" align="center"></el-table-column>
                        <el-table-column prop="address" label="播放/暂停" align="center">
                            <template slot-scope="scope">
                                <el-button
                                    circle
                                    @click="playmusic(scope.row,scope.$index)"
                                    :class="{ playmusic : activePlay }"
                                    v-if="scope.row.setupStatus==0"
                                ></el-button>
                                <el-button
                                    circle
                                    @click="stopmusic(scope.row)"
                                    :class="{ stopmusic : activeStop }"
                                    v-if="scope.row.setupStatus==1"
                                ></el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="MV" name="second">配置管理</el-tab-pane>
                <el-tab-pane label="专辑" name="third">角色管理</el-tab-pane>
            </el-tabs>
        </el-header>
    </el-container>
</template>
<script>
import $ from "jquery";
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
            singerDetails: [],
            activeName: "first",
            activePlay: true,
            activeStop: true,
            Fsinger_name: ""
        };
    },
    created() {
        this.Fsinger_name = this.$route.query.Fsinger_name; //路由获取到的名字
        this.getsingerDetails();
    },

    methods: {
        /**
         * @description 标签页点击事件
         * @param {}
         * @return
         * @author lisheng
         **/
        handleClick(tab, event) {
            console.log(tab, event);
        },

        /**
         * @description 歌手详情页面
         * @param {}
         * @return
         * @author lisheng
         **/
        getsingerDetails() {
            let url= `/api/splcloud/fcgi-bin/smartbox_new.fcg?is_xml=0&format=jsonp&g_tk=1742895503&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&key=${
                    this.Fsinger_name
                }`
            this.$axios.get(url).then(res =>{
                this.singerDetails = res.data.data.song.itemlist;
                    for (
                        let index = 0;
                        index < this.singerDetails.length;
                        index++
                    ) {
                        this.$set(this.singerDetails[index],'setupStatus', 0)//给每条数据加一条状态/深入式响应/
                        //使用的是vue.$set--因为在此处是  深入式数据跟踪
                    }
            })
        },

        /**
         * @description 播放歌曲
         * @param {}
         * @return
         * @author lisheng
         **/
        playmusic(mid,index) {
            for (let index = 0; index < this.singerDetails.length; index++) {
                this.$set(this.singerDetails[index],'setupStatus',0)
            }
            this.singerDetails[index].setupStatus == 0
                ? (this.singerDetails[index].setupStatus = 1)
                : (this.singerDetails[index].setupStatus = 0);
            player.play(mid.mid);
        },
        stopmusic(mid) {
            mid.setupStatus=0;
            player.pause();
        }
    }
};
</script>
<style scoped>
.playmusic {
    background: url("../../assets/playmusic.png") no-repeat center;
    background-size: 80%;
}
.stopmusic {
    background: url("../../assets/stopmusic.png") no-repeat center;
    background-size: 80%;
}
</style>