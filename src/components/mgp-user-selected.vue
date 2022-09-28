<template>
    <div>
        <MgpPopupText @alert-closed="this.$emit('user-selected-window-closed')">
            <h2>Last selected user</h2>
            <MgpUserCard
                :user="user" 
                :hasAlert="false">
            </MgpUserCard>
        </MgpPopupText>
    </div>
</template>

<script>
import MgpPopupText from './mgp-popup-text.vue';
import User from '../models/user';
import MgpUserCard from './mgp-user-card.vue';
    export default {
        name: "MgpUserSelected",
        props:{
            user: User
        },
        emits:[
            "user-selected-window-closed"
        ],
        components: { MgpPopupText, MgpUserCard }
}
</script>

<style scoped>
h2{
    margin-top: 0;
}
</style>