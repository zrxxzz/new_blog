//文章API
const express = require("express")

const router = express.Router();

router.get("/article",(req,res)=>{
    res.json({0:0})
})


module.exports=router;