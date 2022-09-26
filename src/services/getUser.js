import User from "../models/user";

async function getRandomUsers(quantity) {
 
    const baseUrl = 'https://randomuser.me/api/';
    const url = `${baseUrl}/?results=${quantity}`

    return await fetch(url)
    .then((response) => response.json())
    .then((data) => data.results)
    .then((users) => users.map(x => new User(
        x.name.first,
        x.name.last,
        x.dob.age,
        x.email,
        x.location.country,
        x.gender,
        x.picture.large
    )))
} 
    
export { getRandomUsers };