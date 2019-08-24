<template>
    <el-container class="home_container">
        <!-- 顶部部分 -->
        <el-header>
            <el-container class="home_header_nav">
                <el-aside style="width:50%">
                    <el-row type="flex" class="row-bg" justify="end">
                        <el-col :span="6">
                            <div class="grid-content bg-purple">logo</div>
                        </el-col>
                        <el-col :span="3">
                            <div class="grid-content bg-purple">音乐馆</div>
                        </el-col>
                        <el-col :span="3">
                            <div class="grid-content bg-purple">我的音乐</div>
                        </el-col>
                        <el-col :span="3">
                            <div class="grid-content bg-purple">客户端</div>
                        </el-col>
                        <el-col :span="3">
                            <div class="grid-content bg-purple-light">音乐号</div>
                        </el-col>
                        <el-col :span="3">
                            <div class="grid-content bg-purple">vip</div>
                        </el-col>
                    </el-row>
                </el-aside>
                <el-main style="padding:0">
                    <el-row type="flex" class="row-bg" justify="end">
                        <el-col :span="7">
                            <div class="grid-content bg-purple">
                                <el-input placeholder="请输入内容">
                                    <i slot="suffix" class="el-input__icon el-icon-search"></i>
                                </el-input>
                            </div>
                        </el-col>
                        <el-col :span="3">
                            <div class="grid-content bg-purple">登录</div>
                        </el-col>
                        <el-col :span="5">
                            <div class="grid-content bg-purple-light">
                                <el-button type="success">开通绿钻豪华版</el-button>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="grid-content bg-purple">
                                <el-button>开通付费包</el-button>
                            </div>
                        </el-col>
                    </el-row>
                </el-main>
            </el-container>
            <div class="home_header_menunav">
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="2"><div class="grid-content " @click="goRuter('homeRecommend')">首页</div></el-col>
                    <el-col :span="2"><div class="grid-content " @click="goRuter('HelloWorld')">歌手</div></el-col>
                    <el-col :span="2"><div class="grid-content " @click="goRuter('homeRecommend')">新碟</div></el-col>
                    <el-col :span="2"><div class="grid-content " @click="goRuter('homeRecommend')">排行榜</div></el-col>
                    <el-col :span="2"><div class="grid-content " @click="goRuter('homeRecommend')">分类歌单</div></el-col>
                    <el-col :span="2"><div class="grid-content " @click="goRuter('homeRecommend')">电台</div></el-col>
                    <el-col :span="2"><div class="grid-content " @click="goRuter('homeRecommend')">MV</div></el-col>
                    <el-col :span="2"><div class="grid-content " @click="goRuter('homeRecommend')">数字专辑</div></el-col>
                    <el-col :span="2"><div class="grid-content " @click="goRuter('homeRecommend')">票务</div></el-col>
                </el-row>
            </div>
        </el-header>
        <!-- 导航部分路由 -->
        <el-container style="margin-top:70px;background-color:rgba(233,233,233,0.6);">
            <router-view></router-view>
        </el-container>
    </el-container>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    methods:{
        // 路由切换
        goRuter(name){
            this.$router.push(name)
        }
    }
};
</script>

<style scoped>
.home_header_menunav {
    border-top: 1px solid rgba(202, 202, 202, 0.808);
    padding: 20px;
}
.el-aside {
    line-height: 58px;
    /* background-color: aqua */
}
.el-main {
    padding: 0;
    line-height: 56px;
}
</style>