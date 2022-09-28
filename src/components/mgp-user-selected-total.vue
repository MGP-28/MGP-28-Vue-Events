<template>
    <button>Total of selected users: <span>{{selectedUserTotal}}</span></button>
</template>

<script>
    export default {
        name: "MgpUserSelectedTotals",
        props: {
            selectedUserTotal: Number
        },
    }
</script>

<style scoped>
    button{
        cursor: default;
    }
    span{
        font-weight: 700;
        color: peachpuff;
    }
    
</style>