import express from "express";
import cors from 'cors';
const app = express();


app.use(express.json());
app.use(cors());

const PORT = 5000;
app.get("/", (req, res) => {
  res.send("Temperature Converter API is running");
});

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    error: 'Internal server error',
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
