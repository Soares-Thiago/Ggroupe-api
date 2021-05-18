const messages = require("../../../config/messages")
const userService = require("../services/user")

const create = (req, res) => {
    if(req.body.email != undefined 
       && req.body.password != undefined
       && req.body.name != undefined){
        req.body.status = true
        userService.create(req.body).then((user)=>{
            return res.status(200).json({succes: true, message: messages.user.success.create})
        })
        .catch((err) => {
            res.status(500).json({"error": err.message})
        })
    }else{
        res.json({succes: false, message: "Passe os dados do novo usuário"})
    }
}

module.exports = {
    create
}