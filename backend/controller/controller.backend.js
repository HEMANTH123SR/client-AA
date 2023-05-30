const mongoose=require('mongoose')
const  AA=require('../model/model.backend')

const getAll=(req,res)=>{
    console.log("get request recived")
res.status(200).json({
    status:"success",
    data:"get data"
})
}

const getById = (req, res) => {
const {id}=req.params;
res.json(200).json({
    status:"success",
    data:id,
})
};

const postData=(req,res)=>{
res.status(201).json({
    status:"success",
    data:"post data"
})
};

const deleteById=(req,res)=>{
const {id}=req.params;
res.status(203).json({
    status:"success",
    data:"data deleted"
})
};

const upadteById=(req,res)=>{
const {id}=req.params;
res.status(202).json(
    {
        status:"sucess",
        data:"date updated"
    }
)
};

module.exports={
    getAll,
    getById,
    postData,
    upadteById,
    deleteById
}