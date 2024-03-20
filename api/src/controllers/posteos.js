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
};

module.exports = {postPosteos};
