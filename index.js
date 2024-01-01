import express, { json } from "express";
const app = express();
import cors from "cors";

// middleware
app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.send("Blog server is running!");
});

app.get("/blogs", async (req, res) => {
  try {
    // Utilisez "import()" avec l'option "assertion" pour importer le JSON
    const data = await import("./api/blogsData.json", { assert: { type: 'json' } });
    res.send(data);
  } catch (error) {
    console.error("Error reading JSON file:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(5000);
