import express from 'express';
import path from 'path';
import url from 'url';

const app = express();

const PORT = process.env.PORT || 3001;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/api/v1', (req, res, next) => {
  res.json({ message: 'Hello World, from server!' });
});

app.get('*', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
