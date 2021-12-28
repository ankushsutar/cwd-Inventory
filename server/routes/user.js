const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');



router.get('/', userController.view);
router.post('/', userController.find);
router.get('/delete/:id', userController.delete);
router.get('/update/:id', userController.update);
//router.post('/update/:id', userController.delete);
router.get('/adduser', userController.form);
router.post('/adduser', userController.create);
router.get('/dashboard', userController.dashboard);
router.get('/inspection', userController.findbystatus);
router.get('/smt', userController.smt);

//Router
// router.get('',(req, res) =>{
//     res.render('home');
// });


module.exports = router;