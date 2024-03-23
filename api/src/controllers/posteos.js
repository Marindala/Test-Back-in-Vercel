const { getAllUsers } = require("./getUsers.js");

let posteos = [];

let postId = 1;

const postPosteos = (userId, title, content) => {
  // Crear un nuevo objeto de post
  const newPost = {
    userId,
    title,
    content,
    id: postId++,
  };

  // Agregar el nuevo post al array de posteos
  posteos.push(newPost);

  const users = getAllUsers();

  // Encontrar al usuario correspondiente
  const findUser = users.find((user) => user.id === userId);

  // Verificar si el usuario existe
  if (findUser) {
    findUser.post.push(newPost); //findUser con una propiedad post
  }

  return newPost;
};

module.exports = {
  postPosteos,
};
