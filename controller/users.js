// const Users = require("../models/Users");

const userSchema = require("../models/userSchema");

const adduser = async (req, res) => {
    try {
        const newUser = new userSchema({
          name: req.body.name,
          email: req.body.email,
          role: req.body.role
        });
        console.log(newUser);
        const newuser = await newUser.save();
        res.status(200).json(newuser);
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message });
    }
}

//get all merchant list from
const allusers = async (req, res, next) => {
    try {
        const users = await userSchema.find()
        res.status(200).json(users)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}
// get users by email/name/...

const user_email = async (req, res, next) => {
    let name = req.params.id;
    try {
        const data = await userSchema.find({name:name});
        res.status(200).json(data)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}
// user user 

const update_user = async (req, res, next) => {
    // if (req.body._id === req.params.id) {
        try {
            const updateduser = await userSchema.findByIdAndUpdate(req.params.id, {
                $set: req.body
            })
            .then(result =>{
                console.log(result);
            })
            res.status(200).json(updateduser)
        }
        catch (err) { res.status(500).json(err) }
    // }
    // else {
    //     res.status(401).json("you only update your company list")
    // }

}
// delete user

const deleteduser = async (req, res, next) => {
    try {
        const post = await userSchema.findById(req.params.id);
        console.log(post);
            await post.delete();
            res.status(200).json("Product has been deleted...");
        }
        catch (err) {
            res.status(500).json(err);
          } 

}

module.exports = {
    adduser,
    allusers,
    user_email,
    update_user,
    deleteduser
}