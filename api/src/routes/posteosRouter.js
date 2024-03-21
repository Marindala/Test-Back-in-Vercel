const { Router } = require('express');
const { postPosteos } = require("../controllers/posteos.js");
const routerPosteos = Router();

routerPosteos.post("/", (req, res) => {
  try {
    const {userId, title, content} = req.body;

    if (!userId || !title || !content) throw Error("Me faltan datos Rey");
    else {
      const newPost = postPosteos(userId, title, content);
      return res.status(200).json(newPost);
    }
  } catch (error) {
    return res.status(404).send(error.message);
  }
});

module.exports = routerPosteos;
