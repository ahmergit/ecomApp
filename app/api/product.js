import connectDB from  "../../libs/dbConnect";
import Schema from "@/models/ProductsSchema";


export default async function handler(req, res) {
  await connectDB();
  Schema.find().then((products) => {
    res.status(200).json(products)
    console.log(products);
    
    
  });
}
