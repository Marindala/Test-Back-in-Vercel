let users = [];
let posteos = [];

const getAllUsers = () => users;

const getUserByName = (name) => {
    const userFiltered = users.filter(user => user.name === name); 
    if (userFiltered.length) return userFiltered;
    return {error: `No hay usuarios con el nombre: ${name}`}; 
    //retorna un objeto con una propiedad error
}

let id = 1;
const postUser = (name, mail, username) => {
    const newUser = {
        name,
        mail,
        username,
        id: id++,
        post: []
    }
    users.push(newUser);
    return newUser;

}

module.exports = {
    getAllUsers,
    getUserByName,
    postUser
}  