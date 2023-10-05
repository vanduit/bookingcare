import express from "express";
import homController from "../controllers/homeController";
import userController from "../controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homController.getHomepage);

    router.get('/about', homController.getAboutPage);
    router.get('/crud', homController.getCRUD);

    router.post('/post-crud', homController.postCRUD);

    router.get('/get-crud', homController.displayGetCrud);

    router.get('/edit-crud', homController.getEditCrud);
    router.post('/put-crud', homController.putCRUD);

    router.get('/delete-crud', homController.deleteCRUD);

    router.post('/api/login', userController.handleLogin);
    router.get('/api/get-all-users', userController.handleGetAllUsers);
    router.post('/api/crete-new-user', userController.handleCreteNewUser);
    router.put('/api/edit-user', userController.handleEditUser);
    router.delete('/api/delete-user', userController.handleDeleteUser);

    router.get('/allcode', userController.getAllcode);

    return app.use('/', router);
}

module.exports = initWebRoutes;