
import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getHomepage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log('----------------');
        console.log(data);
        console.log('----------------');
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }

}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUer(req.body);
    console.log(message);
    return res.send('POST CRUD');
}

let displayGetCrud = async (req, res) => {
    let data = await CRUDService.getAllUser();
    console.log('----------------');
    console.log(data);
    console.log('----------------');
    return res.render('displayCRUD.ejs', { dataTable: data });
}

let getEditCrud = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);

        return res.render('editCRUD.ejs', {
            user: userData
        })

        return res.send('Found user ok');
    } else {
        return res.send('Users not found');
    }


    return res.send('Edit user');
}

let putCRUD = async (req, res) => {
    let data = req.body;
    console.log('check data 1----', data);
    let allUser = await CRUDService.updateUserData(data);
    return res.render('displayCRUD.ejs', {
        dataTable: allUser
    })
}

let deleteCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let deleteUser = await CRUDService.deleteUserCRUD(userId);
        return res.send('Delete the user success!');
    } else {
        return res.send('No foud UserId');
    }
}

module.exports = {
    getHomepage: getHomepage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCrud: displayGetCrud,
    getEditCrud: getEditCrud,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD
}