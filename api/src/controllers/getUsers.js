let users = [];
let posteos = [];

const getAllUsers = () => users;

const getUserByName = (name) => {
    const userFiltered = users.filter(user => user.name === name); 
    if (userFiltered.length) return userFiltered;
    return {error: `No hay usuarios con el nombre: ${name}`}; 
    //retorna un objeto con una propiedad error
}

module.exports = {
    getAllUsers,
    getUserByName
}  