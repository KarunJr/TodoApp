import mongoose from "mongoose";

const TodoModel = new mongoose.Schema({
    todo:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

const Todo = mongoose.model("todo", TodoModel);
export default Todo;