const express = require("express")
const MilmaRouter = express.Router()
const iceCream = require("../Models/IcecreamSchema")
const multer = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    const a= cb(null, "../milma/public/upload/");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });
  
  MilmaRouter.post("/add", upload.single("image"), (req, res) => {
    const data = new iceCream({
      name: req.body.name,
      litter_box: req.body.litter_box,
      price: req.body.price,
      category: req.body.category,
      image: req.file ? req.file.filename : null,
    });
    data
      .save()
      .then((data) => {
      res.status(200).json({
        success:true,
        error:false,
        data:data,
        message:'iceCream added Successfully'
      })
      })
      .catch((error)=>{
        res.status(400).json({
          success:false,
          error:true,
          error:"error is:",error,
        })
      })
    })
    MilmaRouter.get('/',(req,res)=>{
      iceCream.find()
      .then((data)=>{
        console.log("all data")
        res.send(data);
      })
      .catch((err)=>{console.log(err)})
    })

    MilmaRouter.get("/delete/:id", (req, res) => {
      iceCream.deleteOne({
        _id: req.params.id,
      })
        .then(() => {
          console.log("icecream  deleted");
          alert("deleted successfully");
        })
        .catch((err) => console.log(err));
    });


    module.exports =  MilmaRouter;
  

