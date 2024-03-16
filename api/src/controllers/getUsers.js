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

const updateUser = (id, name, mail, username) => {
    const userFind = users.find((user) => user.id === id)
    if(!userFind) return {error: "Usuario no encontrado"}
    else{
        if(name) userFind.name = name;
        if(mail) userFind.mail = mail;
        if(username) userFind.username = username;
    }
    return userFind;


}


const deleteUser = (id) => {
    const userFind = users.find((user) => user.id === id);

}

module.exports = {
    getAllUsers,
    getUserByName,
    postUser,
    updateUser,
    deleteUser
}  