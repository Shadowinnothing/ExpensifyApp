const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

// makes sure that visiting a url directly doesnt throw a 404
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running on Port: ${PORT}`);
});
