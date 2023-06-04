const express=require('express');
const {
  getAll,
  getById,
  postData,
  upadteById,
  deleteById,
} = require("../controller/controller.backend");

const router=express.Router();

// get all the data
router.get('/',getAll);

// get data by id
router.get('/:id',getById);

// post the data
router.post('/',postData);

//patch the data
router.patch('/:id',upadteById);

//delete the data
router.delete('/:id',deleteById);



module.exports=router




