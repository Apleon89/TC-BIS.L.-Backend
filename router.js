// const express = require("express");
// const mongoose = require("mongoose");

// // Configuración de la conexión a MongoDB
// mongoose
//   .connect("mongodb://localhost/mydatabase")
//   .then(() => console.log("Conexión exitosa a MongoDB"))
//   .catch((error) => console.error("Error al conectar a MongoDB:", error));

// // Definición del esquema de datos
// const todoSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// // Definición del modelo
// const Todo = mongoose.model("Todo", todoSchema);

// // Crear una instancia del enrutador de Express
// const router = express.Router();

// // Obtener todos los elementos
// router.get("/todos", async (req, res) => {
//   try {
//     const todos = await Todo.find();
//     res.json(todos);
//   } catch (error) {
//     res.status(500).json({ message: "Error al obtener los elementos" });
//   }
// });

// // Obtener un elemento por su ID
// router.get("/todos/:id", async (req, res) => {
//   try {
//     const todo = await Todo.findById(req.params.id);
//     if (todo) {
//       res.json(todo);
//     } else {
//       res.status(404).json({ message: "Elemento no encontrado" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Error al obtener el elemento" });
//   }
// });

// // Crear un nuevo elemento
// router.post("/todos", async (req, res) => {
//     const { todoName } = req.body
//   try {
//     console.log(todoName);
//     const newTodo = await Todo.create({
//       name: todoName
//     });
//     res.status(201).json(newTodo);
//   } catch (error) {
//     res.status(500).json({ message: "Error al crear el elemento" });
//   }
// });

// // Actualizar un elemento existente
// router.put("/todos/:id", async (req, res) => {
//   try {
//     const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     if (updatedTodo) {
//       res.json(updatedTodo);
//     } else {
//       res.status(404).json({ message: "Elemento no encontrado" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Error al actualizar el elemento" });
//   }
// });

// // Eliminar un elemento
// router.delete("/todos/:id", async (req, res) => {
//   try {
//     const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
//     if (deletedTodo) {
//       res.json(deletedTodo);
//     } else {
//       res.status(404).json({ message: "Elemento no encontrado" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Error al eliminar el elemento" });
//   }
// });

// module.exports = router;
