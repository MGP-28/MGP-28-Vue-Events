<template>
    <div>
        <div class="cardContainer">
            <img :src="getPhoto" :class="getClassByGender"/>
            <ul>
                <li>
                    <h3>Name</h3>
                    <h1>{{getName}}</h1>
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
        </div>
    </div>
</template>

<script>
    import User from '../models/user'
    export default {
        name: "MgpUserCard",
        props:{
            user: User
        },
        computed: {
            getPhoto(){
                return this.user.picture
            },
            getName(){
                return `${this.user.firstName} ${this.user.lastName}`
            },
            getClassByGender(){
                return (this.user.gender == 'female') ? 'female' : null
            }
        },
        beforeCreate(){

        },
        created(){

        },
        beforeMount(){

        },
        mounted(){

        },
        beforeUpdate(){

        },
        updated(){

        },
        beforeUnmount(){

        },
        unmounted(){

        }
    }
</script>

<style scoped>
    :root{
        --glowColor: blue;
    }
    .cardContainer{
        width: 400px;
        padding: 30px;
        border: solid 0.5px;
        box-sizing: border-box;
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
        margin-bottom: 10px;
        animation: pulsing alternate-reverse infinite 1.2s linear;
    }
    img.female{
        color: peachpuff;
    }
    ul{
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
</style>