import mongoose from "mongoose";
// Define a schema for individual pets
const petSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: Number,
  image_url: String,
  tags: [String],
  owner: {
    name: String,
    address: String,
    gender: String,
  },
  breed: String,
  age: Number,
});

// Define a schema for the "petData" collection
const petDataSchema = new mongoose.Schema({
  pets: [petSchema],
});

// Create a model based on the "petData" schema
const PetData = mongoose.model('PetData', petDataSchema);


const getDataFromMongo=async()=>{


return PetData.find()
}





const connectMongo = async() => {
    try{
      await mongoose.connect(process.env.URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("mongodb connected successfully");
      const data = await getDataFromMongo();

               const newdata=data.map((pet)=>{
                return {...pet.toObject(),isLiked:false}
              })
              return newdata;
    }
    catch(err){
console.log("connection went wrong ",err)
    }
//  await mongoose
//     .connect(process.env.URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(() =>{ console.log("mongo db connected successfully")
//     const data= getDataFromMongo();

//          const newdata=data.map((pet)=>{
//           return {...pet,isLiked:false}
//         })
//         return newdata;
     
// }
//     ).catch((err) => console.log("connection went wrong", err));
};



 export default connectMongo;