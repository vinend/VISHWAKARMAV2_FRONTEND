const express = require("express");
const cors = require("cors");
const dataRoutes = require("./routes");
const pool = require("./db")

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Routes
router.get("/", dataController.getAllData);
router.get("/:id", dataController.getDataById);
router.post("/", dataController.createData);
router.put("/:id", dataController.updateData);
router.delete("/:id", dataController.deleteData);
// app.use("/api/data", dataRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});