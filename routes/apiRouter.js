const express = require('express');
const usersCtrl = require('../controllers/usersCtrl');

const multer = require('multer');
const upload = multer();

exports.router = (function(){
    const apiRouter = express.Router();
    apiRouter.route('/users').get(usersCtrl.getAllUsers);
    apiRouter.route('/createuser').post(upload.array(), usersCtrl.createUser);
    apiRouter.route('/deleteuser').delete(upload.array(), usersCtrl.deleteUser);
    apiRouter.route('/updateuser').put(upload.array(), usersCtrl.updateUser);
    return apiRouter;
})();