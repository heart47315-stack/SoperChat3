const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/characters", (req, res) => {
  res.json([
    { id: "1", name: "Lucia" },
    { id: "2", name: "Luca" },
  ]);
});

app.get("/api/chats", (req, res) => {
  res.json([
    { id: "1", name: "Lucia", last: "Hello" },
  ]);
});

app.post("/api/login", (req, res) => {
  res.json({ success: true, token: "fake-token" });
});

app.listen(3000, () =>
  console.log("API running http://localhost:3000")
);
