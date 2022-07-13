const Users = require('../models/user')

// getting all the users from database
exports.getIndex = (req,res,next)=>{
    Users.findAll()
    .then((users)=>{
        res.json(users);
    })
}

// adding user to database by creating a user
exports.postInsertUser = (req,res,next)=>{
    Users.create({
        username:req.body.username,
        email:req.body.email
    })
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=> console.log(err));
}

// deleting user by id and dynamic routing
exports.deleteUser = (req,res,next)=>{
    const id = req.params.id;
    console.log(id);

    Users.findByPk(id)
    .then((user)=>{
        return user.destroy();
    })
    .then((result)=> {
        res.json(result);
    })
    .catch((err)=>console.log(err));
}