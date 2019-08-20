<template>
    <el-container>
        <el-header>
            <el-tabs v-model="activeName" @tab-click="handleClick" style="width:80%;margin:0 auto">
                <el-tab-pane label="歌曲/单曲" name="first">
                    <el-table
                        :data="singerDetails"
                        style="width: 100%"
                    >
                        <el-table-column prop="name" label="歌名" width="180" align="center"></el-table-column>
                        <el-table-column prop="singer" label="歌手" width="180" align="center"></el-table-column>
                        <el-table-column prop="address" label="播放/暂停" align="center">
                            <template slot-scope="scope">
                                <el-button circle @click="playmusic(scope.row)" :class="{ playmusic : activePlay }"></el-button>
                                <el-button circle @click="stopmusic(scope.row.mid)" :class="{ stopmusic : activeStop }"></el-button>
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
import $ from 'jquery'
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
            activePlay:true,
            activeStop:true,
            Fsinger_name:''
        };
    },
    created() {
        this.singerDetails = this.$route.query.res;
        this.Fsinger_name = this.$route.query.Fsinger_name//路由获取到的名字
        this.getsingerDetails()
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
        getsingerDetails(){
            $.ajax({
                url : `https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg?is_xml=0&format=jsonp&g_tk=1742895503&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&key=${this.Fsinger_name}`,
                type : 'get',
                dataType : 'jsonp',
                jsonp : 'jsonpCallback',
                success:res => {
                     console.log(res); 
                     this.singerDetails = res.data.song.itemlist
                }
            })
        },

        /**
        * @description 播放歌曲
        * @param {} 
        * @return 
        * @author lisheng
        **/
       playmusic(mid){
            console.log(mid);
            
            player.play(mid.mid)   
       },
       stopmusic(mid){
            player.pause(mid)    
       }
    }
};
</script>
<style scoped>
    .playmusic{
        background: url('../../assets/playmusic.png') no-repeat center;
        background-size: 80%;
    }
    .stopmusic{
        background: url('../../assets/stopmusic.png') no-repeat center;
        background-size: 80%;
    }
</style>