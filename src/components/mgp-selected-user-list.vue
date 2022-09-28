<template>
    <div class="main-container">
        <div class="list-container">
            <h2>Selected user list</h2>
            <ul>
                <li v-for="user in users">
                    <button @click="this.removeUserFromSelectedList(user)">
                        x
                    </button>
                    {{user.getName()}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MgpSelectedUserList",
        props:{
            users: Array
        },
        methods:{
            removeUserFromSelectedList: function (user) {
                this.$emit('toggle-user-in-selected-list', user)
            }
        }
    }
</script>

<style scoped>
    .main-container{
        display: flex;
        justify-content: center;
    }
    .list-container{
        position: relative;
        width: 400px;
        padding: 30px;
        border: solid 0.5px;
        box-sizing: border-box;
        border-radius: 15px;
        box-shadow: black 0 0 10px 2px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    ul{
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    li{
        display: flex;
        gap: 15px;
    }
    li>button{
        border: solid 0.5px red;
        border-radius: 50%;
        padding: 0;
        width: 20px;
        height: 20px;
        box-shadow: black 0 0 3px 1px;

    }
    li>button:hover{
        background-color: red;
        border: solid 0.5px white;
    }
</style>