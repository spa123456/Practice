<template>
    <el-container style="width:100%">
        <el-header style="width:50%;margin:0 auto">
            <el-carousel :interval="5000">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
            <el-button type="primary" @click="playmusic">aaa</el-button>
            <el-button type="primary" @click="stopmusic">bbb</el-button>
        </el-header>
    </el-container>
</template>
<script>
import $ from 'jquery' //导入juqery
import { type } from 'os';
export default {
    data() {
        return {
            data:'',
            flag:false,
            musicId:''
        };
    },
    created() {
        // this.player('004dFFPd4JNv8q')
        // this.musicList()
    },
    methods: {
         musicList(){
             let that = this
           $.ajax({
                url : 'https://c.y.qq.com/v8/fcg-bin/v8.fcg?g_tk=5381&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq',
                type : 'get',
                dataType : 'jsonp',
                jsonp: "jsonpCallback",
                success : function (res) {
                    // that.data = res.data.list                    
                    that.player(res.data.list[0].Fsinger_mid)  
                }
           })
      },
        player(musicId) {
            
            const params = {
                filter: true,
                loop: true,
                target:"auto"
            };
            let player = new QMplayer({
                params,               
                });
            
            let onplay = () => {                  
                        this.flag = !this.flag
                        console.log(this.flag);                        
                    }   
            onplay();           
            this.flag?player.play(musicId):player.pause();
            console.log(musicId);
        },
        playmusic(){   
            // this.musicList()   
            this.player('004dFFPd4JNv8q')
        },
        stopmusic(){
            this.musicList()
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