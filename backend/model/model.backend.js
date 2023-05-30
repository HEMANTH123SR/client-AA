const mongoose=require('mongoose');

const Schema=mongoose.Schema

const AASchema=new Schema(
    {
        title:{
            type:String,
            required:true
        }
        ,
       description:{
            type:String,
            required:true
        }
        ,
        color:{
            type:String
        }
        ,
        rating:{
            type:Number
        }
        ,
        review:{
            type:String
        },
        price:{
            type:Number,
            required:true
        }

    }
)


module.exports=mongoose.model('AA',AASchema)