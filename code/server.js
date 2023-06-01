import express from "express";
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.static(join(__dirname, '../dist')));

app.listen(8080, () => {
  console.log(`App listening at port http://localhost:8080`);
});