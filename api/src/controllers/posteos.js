const users = require ('./users')
let posteos = [];

let postId = 1;
const postPosteos = (userId, title, content) => {

  //create a new post object
  const newPost = {
    userId,
    title,
    content,
    id: postId++,
  };
  posteos.push(newPost); //push the new post to the array of posteos

  const findUser = users.find((user) => user.id === userId) //busca usuario en array de usuario y que machee con el id del post de usuarios

  findUser.post.push(newPost)
  return newPost;
};

module.exports = {postPosteos};
