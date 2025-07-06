const express = require("express")

let users = [] 


const app = express()
app.use(express.json())


app.get('/',(req,res)=>{
    res.send('Welcome to Signup and Login')
})


app.post('/signup',(req,res)=>{
if(users.some(users=>users.email===req.body.email)){
    res.json("User already exists")
}
else{
    users.push(req.body)
    res.json("user created successfully")
}
})

app.post('/login' ,(req,res)=>{
if(users.some(users=>users.email==req.body.email) && users.some(users=>users.password==req.body.password)){
    res.json("User Loged In successfully")
}
else{

    res.json("user not exists or password is incorrect")
}
})

app.patch('/users/:id',(req,res)=>{
    const id = req.params.id;
    const  findUser=(id)=>{
      return  users.filter(user=>user.id===id)
    }
    const filteredUser= findUser(id)
    // console.log(filteredUser)
   if( filteredUser){
    const {email, password} = req.body;
    email? filteredUser[0].email=email : filteredUser[0].email=filteredUser[0].email;
    password? filteredUser[0].password=password : filteredUser[0].password=filteredUser[0].password
    res.json("user updated")
   }
})

app.delete('/users/:id',(req,res)=>{
    const id = req.params.id;
  
  users.forEach((user,index)=>{
   if( user.id==id){
    

    delete users[index]
    res.send("user deleted")

   }
  })
    

    
})

app.get('/users',(req,res)=>{
    res.json(users)
})


app.listen(3000,()=>{
    console.log("server at 3000")
})