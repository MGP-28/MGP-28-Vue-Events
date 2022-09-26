<template>
    <div class="popup-bg" @click="this.$emit('alert-closed')">
        <div class="popup-container">
            <slot v-if="this.text == null"></slot>
            <span v-else>{{this.text}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MgpPopupText",
        props:{
            text: null
        }
    }
</script>

<style scoped>
.popup-bg{
    position: fixed;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.65);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
}
.popup-container{
    border: solid 1px peachpuff;
    border-radius: 15px;
    padding: 50px;
    background-color: black;
}
</style>