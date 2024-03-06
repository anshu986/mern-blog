import mongoose from "mongoose";

const postSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
        unique:true,
    },
    image:{
        type:String,
        default:'https://www.socialchamp.io/wp-content/uploads/2022/08/Blogging-Tools.jpg',

    },
    category:{
        type:String,
        default:'uncategorised',
    },
    slug:{
        type:String,
        required:true,
        unique:true,
    },
},{timestamps:true})
const Post=mongoose.model('Post',postSchema);
export default Post;