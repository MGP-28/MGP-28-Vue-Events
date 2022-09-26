<template>
    <div class="content-container">
        <div>
            <button @click="">Show last selected user</button>
        </div>
        <div v-if="userList.length == 0">
            Loading users...
        </div>
        <div v-else class="user-list">
            <MgpUserCard
                v-for="(user, idx) in userList" 
                :user="user" 
                @user-selected="this.lastUserIndex = idx" >
            </MgpUserCard>
        </div>
    </div>
</template>

<script>
    import { getRandomUsers } from '../services/getUser';
    import MgpUserCard from './mgp-user-card.vue';

    export default {
    name: "MgpUserGrid",
    data() {
        return {
            userList: [],
            lastUserIndex: null
        };
    },
    async created() {
        this.userList = await getRandomUsers(9)
    },
    components: { MgpUserCard }
}
</script>

<style scoped>
.content-container{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.user-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px;
}
button{
    position: relative;
    padding: 20px;
    border: solid 0.5px;
    box-sizing: border-box;
    border-radius: 15px;
    box-shadow: black 0 0 10px 2px;
}
</style>