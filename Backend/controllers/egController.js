const user = require('../models/userModules')

exports.getRoute = async (req,res)=>{
    const userData = await user.find()
    res.status(201).json({data:userData})
    
}
exports.postRoute = async (req,res) =>{
    const {username,password} = req.body;
    const exist = await user.findOne({username});
    if(exist) return res.status(401).json({
        message:"User Already Exist"
    })
    const newUser = new user({username,password})
    await newUser.save();
    res.status(201).json({user:newUser})
    
}
exports.putRoute = async (req,res) =>{
    const {username,password}  = req.body;
    const update = await user.findByIdAndUpdate(req.params.id , req.body)
    if(!update) return res.status(401).json({message:"User Not Exist"})
        res.status(201).json({update})
}
exports.deleteRoute = async (req,res) =>{
    const deletedata = await user.findByIdAndDelete(req.params.id)
    if(!deletedata) return res.status(401).json({message:"not exist"})
    res.status(201).json({message:"deletd successfully"})
}