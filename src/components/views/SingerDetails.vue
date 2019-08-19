<template>
    <el-container>
        <el-header>
            <el-tabs v-model="activeName" @tab-click="handleClick" style="width:80%;margin:0 auto">
                <el-tab-pane label="歌曲/单曲" name="first">
                    <el-table
                        :data="singerDetails.data.song.itemlist"
                        style="width: 100%"
                    >
                        <el-table-column prop="name" label="歌名" width="180"></el-table-column>
                        <el-table-column prop="singer" label="歌手" width="180"></el-table-column>
                        <el-table-column prop="address" label="播放/暂停">
                            <template slot-scope="scope">
                                <el-button round @click="player(scope.row.mid)">aa</el-button>
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
            singerDetails: {},
            activeName: "first"
        };
    },
    created() {
        this.singerDetails = this.$route.query.res;
        console.log(this.singerDetails);
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
        * @description 播放歌曲
        * @param {} 
        * @return 
        * @author lisheng
        **/
       player(mid){
           player.play(mid)
       }
    }
};
</script>
<style scoped>
</style>