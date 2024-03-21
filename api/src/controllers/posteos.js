const users = require ('./users')
let posteos = [];

let postId = 1;
const postPosteos = (userId, title, content) => {
  const newPost = {
    userId,
    title,
    content,
    id: postId++,
  };
  posteos.push(newPost);

  const findUser = users.find((user) => user.id === userId)
};

module.exports = {postPosteos};
