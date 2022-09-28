class User{
    constructor(firstName, lastName, age, email, country, gender, picture){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.email = email
        this.country = country
        this.gender = gender
        this.picture = picture
    }
    
    getName(){
        return `${this.firstName} ${this.lastName}`
    }
}

export default User