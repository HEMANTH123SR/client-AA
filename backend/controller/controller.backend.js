const mongoose=require('mongoose')
const  DB=require('../model/model.backend')




const getAll=async(req,res)=>{
try{
    const data = await DB.find().sort({ createdAt: -1 });

res.status(200).json(
    {
        status:"success",
        data:{
            data
        }
    }
)

}catch(err){
res.status(400).json(
    {
        status:"unsuccess",
        data:{
            err
        }

    }
)
}

}

const getById =async (req, res) => {
try{
    const {id}=req.params;
  
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            status:"unsuccess",
            data:"no such data with that id"
        })    
     }
    const data=await DB.findById(id);

    res.status(200).json({
      status:"success",
      data:{
        data
      }
    })

}catch(err){

    res.status(400).json(
        {
            status:"unsucesss",
            data:"something went wrong might be related to db "
        }
    )
}


};

const postData=async(req,res)=>{

const { title, description, color, price } = req.body;
try{
const data=await DB.create(
    {
        title,
        description,
        color,
        price
    }
)

res.status(200).json({
    status:"success",
    data:{
        data
    }
})
}catch(err){
res.status(400).json({
  status: "unsuccess",
  data: {
    data:"something went wrong might be realted to db"
  },
});
}

};

const deleteById=async(req,res)=>{
const {id}=req.params;
try{
if (!mongoose.Types.ObjectId.isValid) {
  res.status(400).json({
    status: "unsuccess",
    data: "the id error",
  });
}
const data=await DB.findByIdAndDelete({_id:id});

res.status()

}catch(err){
    res.status(400).json({
      status: "unsuccess",
      data: err
    }); 
}
};

const upadteById=async(req,res)=>{
const {id}=req.params;

try{
if(!mongoose.Types.ObjectId.isValid){
    res.status(400).json({
        status:"unsuccess",
        data:"the id error"
    })
}


const data=await DB.findByIdAndUpdate({_id:id})

if(!data){
        res.status(400).json({
          status: "unsuccess",
          data: "the data error",
        });
}

res.status(202).json({
    status:"success",
    data:{
        data
    }
})

}catch(err){
    res.status(400).json({
        status:"unsuccess",
        data:"something went wrong might be wrong with the api"
    })
}
};

module.exports={
    getAll,
    getById,
    postData,
    upadteById,
    deleteById
}