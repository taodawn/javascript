<template>
    <div class="confirm-button">
        <button @click="getButtonClick">{{text || 'OK' }}</button>
    </div>
</template>
<script>
export default {
    name: "confirm-button",
    props: ["text"],
    data(){
        return{
            msg: true
        }
    },
    methods: {
        getButtonClick() {
            this.$emit("message2", this.msg);
        }
    }
};
</script>

