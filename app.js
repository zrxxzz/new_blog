const express = require('express')
const  cors = require('cors')
//调用express
const app = express()
app.use(express.json())
//跨域请求
app.use(cors())
//托管静态资源
app.use('/index',express.static('./index.html'))
//监听服务器是否打开
app.listen(80,()=>{
    console.log("express server running at http://127.0.0.1:80")
    console.log("the homepage running at http://127.0.0.1/index")
  });
