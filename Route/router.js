const express = require ('express')

const router = new express.Router()
const userController = require('../controller/userController')
const projectController = require('../controller/projectController')
const jwtMiddleware = require('../middleware/jwtMiddleware')
const multerConfig = require('../middleware/multerMiddleware')
//register
router.post('/user/register',userController.register)

// login
router.post('/user/login',userController.login)

// add project
router.post('/projects/add',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProjects)

// getUserProject
router.get(`/user/all-projects`,jwtMiddleware,projectController.allUserProjects)

// get all projects 
router.get(`/projects/all`,jwtMiddleware,projectController.getAllProjects)

// get home project
router.get(`/projects/home-projects`,projectController.getHomeProjects)
 
//edit 
router.put("/project/edit/:id")



module.exports=router