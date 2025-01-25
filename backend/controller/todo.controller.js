import Todo from "../models/todo.model.js";

export const saveTodo = async (req, res) => {
  try {
    const { todo } = req.body;
    if (!todo || todo === "") {
      return res.status(400).json({ success: false, message: "It is empty" });
    }

    const newTodo = await Todo.create({ todo });
    res
      .status(200)
      .json({ success: true, newTodo, message: "Task Added in DB" });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Failed to add task",
    });
    console.log("Error in server:", error.message);
  }
};

export const getTodo = async (req, res) => {
  try {
    const todo = await Todo.find();
    res.status(200).json({success: true, message: "Passing the data store in DB to User", data: todo})
  } catch (error) {
    res.status(500).json({success:false, error:error.message})
    console.log("Error in getTodo controller", error.message);
  }
};


export const deleteTodo = async (req,res)=>{
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id)
    res.status(200).json({success:true, message: "Todo deleted successfully"})
  } catch (error) {
    console.log("Error in deleteTodo controller", error.message);
    res.status(500).json({success: false, message: "Server Error", error: error.message})
  }
}