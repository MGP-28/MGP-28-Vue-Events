<template>
    <div class="content-container">
        <div class="top-buttons" v-if="lastUserIndex !== null">
            <button @click="showLastSelected">Show last selected user</button>
            <MgpUserSelectedTotal :selectedUserTotal="selectedUsersCounter" />
        </div>
        <div v-if="userList.length == 0">
            Loading users...
        </div>
        <div v-else class="user-list">
            <MgpUserCard
                v-for="(user, idx) in userList" 
                :user="user" 
                @user-selected = "userSelected" >
            </MgpUserCard>
        </div>
        <MgpUserSelected 
            v-if="showingSelectedUser" 
            :user="userList[lastUserIndex]"
            @user-selected-window-closed = "this.showingSelectedUser = false;" >
        </MgpUserSelected>
    </div>
</template>

<script>
import { getRandomUsers } from '../services/getUser';
import MgpUserCard from './mgp-user-card.vue';
import MgpUserSelected from './mgp-user-selected.vue';
import MgpUserSelectedTotal from './mgp-user-selected-total.vue';

    export default {
    name: "MgpUserGrid",
    data() {
        return {
            userList: [],
            lastUserIndex: null,
            showingSelectedUser: false,
            selectedUsersCounter: 0
        };
    },
    methods:{
        showLastSelected: function () {
            this.showingSelectedUser = true
        },
        userSelected: function (idx){
            this.lastUserIndex = idx;
            this.selectedUsersCounter++
        }
    },
    async created() {
        this.userList = await getRandomUsers(9)
    },
    components: { MgpUserCard, MgpUserSelected, MgpUserSelectedTotal }
}
</script>

<style scoped>
.content-container{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.top-buttons{
    display: flex;
    justify-content: center;
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