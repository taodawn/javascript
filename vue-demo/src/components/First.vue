<template>
    <div class="first-app">
        {{msg}}
        <confirm text="register" @message2="getMessage2"></confirm>
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
<style>

</style>
