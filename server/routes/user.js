const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');



router.get('/', userController.view);
router.post('/', userController.find);
router.get('/:id', userController.delete);
router.get('/adduser', userController.form);
router.post('/adduser', userController.create);
router.get('/dashboard', userController.dashboard);
router.get('/inspection', userController.inspection);
//Router
// router.get('',(req, res) =>{
//     res.render('home');
// });


module.exports = router;