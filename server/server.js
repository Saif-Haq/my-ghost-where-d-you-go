import cors from "cors";
import express from "express";
import records from "./routes/record.js";
import ghosters from "./routes/ghoster.js";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records);
app.use("/ghoster", ghosters);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
