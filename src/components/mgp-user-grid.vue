<template>
    <div class="content-container">
        <div class="top-buttons" v-if="lastUserIndex !== null">
            <button @click="showLastSelected">Show last selected user</button>
            <MgpUserSelectedTotal :selectedUserTotal="selectedUsersCounter" />
        </div>
        <div>
            <MgpSelectedUserList 
                v-if="selectedUserList.length > 0" 
                :users="selectedUserList" 
                @toggle-user-in-selected-list="toggleUserInList"
            />
        </div>
        <div v-if="userList.length == 0">
            Loading users...
        </div>
        <div v-else class="user-list">
            <MgpUserCard
                v-for="(user, idx) in userList" 
                :user="user" 
                @user-selected = "userSelected(idx)" 
                @user-in-list-toggled = "this.toggleUserInList(user)"
            />
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
import MgpPopupText from './mgp-popup-text.vue';
import MgpSelectedUserList from './mgp-selected-user-list.vue';

    export default {
    name: "MgpUserGrid",
    data() {
        return {
            userList: [],
            selectedUserList: [],
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
        },
        toggleUserInList: function (user){
            const idx = this.selectedUserList.indexOf(user)
            if(idx >= 0) this.selectedUserList.splice(idx, 1)
            else this.selectedUserList.push(user)
        }
    },
    async created() {
        this.userList = await getRandomUsers(9)
    },
    components: { MgpUserCard, MgpUserSelected, MgpUserSelectedTotal, MgpPopupText, MgpSelectedUserList }
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