const express = require("express")
const connect = require("./config/connectDB")
const User = require("./models/User")
require('dotenv').config({ path: './config/.env' })
var app = express()

app.use(express.json())

connect()


app.post('/add',async(req,res)=>{
    const {fullName,email,phone}=req.body
    try {
        const newUser = new User({
            fullName,
            email,
            phone,
        })
        await newUser.save()
        res.send(newUser)

    } catch (error) {
        console.log(error)
    }
}
)



app.get('/get', async(req,res)=>{
try {
    const users = await User.find()
    res.send(users)
} catch (error) {
    
}
    
})

app.get('/get/:id', async(req,res)=>{

    const user = await User.findById(req.params.id)
    res.send(user)
})


app.put('/put/:id', async(req,res)=>{
    try {
        const editeduser=await User.findByIdAndUpdate(req.params.id,{...req.body,},{new:true})
        res.send(editeduser)
    } catch (error) {
        console.log(error)
    }
})

app.delete('/sup/:id', async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id,)
        res.send('user deleted')
    } catch (error) {
        console.log(error)
    }
})






var PORT = process.env.PORT || 5000

app.listen (PORT, (err)=>
    err? console.error(err): console.log(`server running at ${PORT}`)
)








