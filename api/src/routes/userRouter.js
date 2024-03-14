const { Router } = require('express');
const {getAllUsers, getUserByName, postUser } = require ('../controllers/getUsers')
const router = Router();


router.get('/', (req, res) => {
    const {name} = req.query;
    if(name){
        const user = getUserByName(name);

        if(user.error) return res.status(404).json(user);
        return res.status(200).json(user);
    }else{
        const allUsers = getAllUsers();
        return res.status(200).json(allUsers);
    }
    
})

router.post('/', (req, res) => {
    const {name, mail, username} = req.body;
})



module.exports = router;