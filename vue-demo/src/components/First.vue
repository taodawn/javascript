<template>
    <div class="first-app">
        {{msg}}
        <confirm text="register" @message2="getMessage2"></confirm>
        <p><router-link to="/second">Next Page</router-link></p>
        <router-link :to="{name:'Second'}" tag='div'>NextPage2</router-link>
        <p><a href="#/second">NextPage3</a></p>
    </div>
</template>
<script>
import Confirm from './sub/Confirm'
export default {
    name: "First",
    components: {
        Confirm
    },
    data(){
        return{
            msg: "Welcome to First"
        };
    },
    methods:{
        getMessage2(val){
            alert(val);
        }
    }
};
</script>
<style lang="less" scoped>
.first-app {
    font-size: 30px;
    .link {
        a {
            color: red;
        }
    }
}
</style>

