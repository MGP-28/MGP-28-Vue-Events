<template>
    <div>
        <div class="cardContainer">
            <img :src="getPhoto" :class="getClassByGender"/>
            <ul>
                <li>
                    <h3>Name</h3>
                    <h1>{{this.user.getName()}}</h1>
                </li>
                <li>
                    <h3>Email</h3>
                    <h1>{{this.user.email}}</h1>
                </li>
                <li>
                    <h3>Age</h3>
                    <h1>{{this.user.age}}</h1>
                </li>
                <li>
                    <h3>Country</h3>
                    <h1>{{this.user.country}}</h1>
                </li>
            </ul>
            <div class="button-container">
                <button v-if="hasAlert" @click="toggleUserInList">{{getListBtnText}}</button>
                <button v-if="hasAlert" @click="alertUserName">Alert!</button>
            </div>
        </div>
    <MgpPopupText 
        :text="this.user.getName()" 
        v-if="alertIsOpen" 
        @alert-closed="this.alertIsOpen = false">
    </MgpPopupText>
    </div>
</template>

<script>
    import User from '../models/user'
    import MgpPopupText from './mgp-popup-text.vue'
    export default {
    name: "MgpUserCard",
    props: {
        user: User,
        hasAlert: {
            default: true
        }
    },
    data() {
        return{
            alertIsOpen: false,
            isInList: false
        }
    },
    computed: {
        getPhoto() {
            return this.user.picture;
        },
        getClassByGender() {
            return (this.user.gender == "female") ? "female" : null;
        },
        getListBtnText(){
            return (this.isInList) ? "Remove from list" : "Add to list";
        }
    },
    methods: {
        alertUserName: function () {
            this.alertIsOpen = true;
            this.$emit('user-selected')
        },
        toggleUserInList: function () {
            this.isInList = !this.isInList;
            this.$emit('user-in-list-toggled')
        }
    },
    components: { MgpPopupText }
}
</script>

<style scoped>
    .cardContainer{
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
    @keyframes pulsing{
        from{ box-shadow: 0 0 10px 1px; }
        to{ box-shadow: 0 0 15px 2px; }
    }
    img{
        color: lightseagreen;
        height: 150px;
        width: 150px;
        border: 0.5px solid white;
        border-radius: 50%;
        animation: pulsing alternate-reverse infinite 1.2s linear;
    }
    img.female{
        color: peachpuff;
    }
    ul{
        width: 100%;
        padding: 0;
        margin: 0;
        text-align: left;
        list-style: none;
    }
    li{
        border-bottom: 1px solid;
        padding-left: 5px;
        padding-right: 5px;
    }
    h3{
        color: peachpuff;
    }
    h1{
        font-size: 1rem;
        overflow-x: auto;
    }
    .button-container{
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        gap: 10px;
    }
    button{
        border: solid 0.5px;
        width: max-content;
    }
</style>