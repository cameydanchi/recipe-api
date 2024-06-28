import { Schema,model } from "mongoose";
import normailze from 'normalize-mongoose';
const categorySchema = new Schema ({
    name : {type:String, required:true, unique:true},
    image :{type:String, required:true}
},
{
    timestamps:true
});


categorySchema.plugin(normailze);
export const CategoryModel = model('Category',categorySchema)