const { Router } = require('express');
const {getAllUsers, getUserByName, postUser, updateUser } = require ('../controllers/getUsers')
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

    try {
        if(!name || !mail || !username) throw Error ('Me faltan datos corazón') 
    
        else{
            const newUser= postUser(name, mail, username);
            return res.status(200).json(newUser);

    }
        
    } catch (error) {
        return res.status(404).send(error.message);
        
    }
})

router.put('/', (req, res) => {
    const {id, name, mail, username} = req.body;
    if(id && name || mail || username){ //id y name en true si o si //lo demas es optativo
        const userModify = updateUser(id, name, mail, username);

        if(userModify.error) return res.status(404).json(userModify);
        return res.status(200).json(userModify);

    } 
   
});

router.delete('/', (req, res) => {
    
})  



module.exports = router;