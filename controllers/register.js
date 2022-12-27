const User = require('../model/User')
const register = (req,res,next) => {
    try {
        const user = User({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            c_password : req.body.c_password
        })
        user.save()
        res.json({msge:"user"})
    } catch (error) {
        res.json({message:"error"})
    }
}
module.exports = {register}