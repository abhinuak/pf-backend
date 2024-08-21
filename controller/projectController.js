
const projects = require("../Model/projectSchema")



// addProject

exports.addProjects=async(req,res)=>{
    console.log("inside add project function");
    const userId =req.payload
    const projectImage=req.file.filename
    console.log(projectImage);
    const {title,language,overview,github,websites}=req.body
    // console.log(`${title},${language},${overview},${github},${websites},${userId}`);
    // res.status(200).json("add project request recieved")
    try{
        const existProject = await projects.findOne({github})
        if(existProject){
            res.status(406).json("project already exist..! Add another")
        }
        else{
            const newProject = new projects({
                title,language,overview,github,websites,projectImage,userId
            })
            await newProject.save()
            res.status(200).json(newProject)
        }
    }
    catch(err){
        res.status(401).json(`add project api failed , error :${err}`)
    }
}

// get all userProject
exports.allUserProjects = async (req,res)=>{
    const userId = req.payload
    try{
        const userProjects = await projects.find({userId})
        res.status(200).json(userProjects)
    }
    catch{
        res.status(401).json(err)
    }
}

// get all projects
exports.getAllProjects = async (req,res)=>{

    const searchKey = req.query.search
    const query ={
        language:{$regex:searchKey, $options:"i"}
    }
    try{
        const projectsDetails = await projects.find(query)
        res.status(200).json(projectsDetails)
    }
    catch{
        res.status(401).json(err)
    }
}

// get Home projects 

exports.getHomeProjects = async (req,res)=>{
    try{
        const homeProject = await projects.find().limit(3)
        res.status(200).json(homeProject)
    }
    catch{
        res.status(401).json(err)
    }
}

//edit 

