const express = require('express');

const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('TaskMaster API is running');
});

app.get('/api/tasks', (req, res) => {
  res.json([
    { id: 1, task: 'Review security findings', completed: false },
    { id: 2, task: 'Update dependencies', completed: false }
  ]);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`TaskMaster API running on port ${PORT}`);
});
