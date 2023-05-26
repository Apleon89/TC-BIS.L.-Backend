const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Configuración de la conexión a MongoDB
mongoose
  .connect("mongodb://localhost/listaDeTodos")
  .then(() => console.log("Conectado a MongoDB"))
  .catch((error) => console.error("Error al conectar a MongoDB:", error));

// CORS
const cors = require("cors");
const FRONTEND_URL = "http://localhost:5173";
app.use(
  cors({
    origin: [FRONTEND_URL]
  })
);

// Definición del esquema de datos
const todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Definición del modelo
const Todo = mongoose.model("Todo", todoSchema);

// Crear una instancia del enrutador de Express
const router = express.Router();

// Obtener todos los elementos
router.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los elementos" });
  }
});

// Crear un nuevo elemento
router.post("/todos", async (req, res) => {
  const { todoName } = req.body;
  try {
    const newTodo = await Todo.create({
      name: todoName,
    });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el elemento" });
  }
});

// Actualizar un elemento existente
router.patch("/todos/:id", async (req, res) => {
  const { todoName } = req.body;
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        name: todoName,
      },
      {
        new: true,
      }
    );
    if (updatedTodo) {
      res.json(updatedTodo);
    } else {
      res.status(404).json({ message: "Elemento no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el elemento" });
  }
});

// Eliminar un elemento
router.delete("/todos/:id", async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (deletedTodo) {
      res.json(deletedTodo);
    } else {
      res.status(404).json({ message: "Elemento no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el elemento" });
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

const port = 5005;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
