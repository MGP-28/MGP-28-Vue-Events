<template>
    <div>
        <MgpPopupText>
            <MgpUserCard
                :user="user" >
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
        components: { MgpPopupText, MgpUserCard }
}
</script>

<style lang="scss" scoped>

</style>