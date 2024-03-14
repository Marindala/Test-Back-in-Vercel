const { Router } = require('express');
const {getAllUsers, getUserByName } = require ('../controllers/getUsers')
const router = Router();


router.get('/', (req, res) => {
    const {name} = req.query;
    if(name){
        const user = getUserByName(name);
    }
    
})



module.exports = router;