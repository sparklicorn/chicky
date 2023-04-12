import express from 'express';

const app = express();

// Serve webpacked content from ./dist
app.use(express.static('dist'));

const host = process.env.HOST || '0.0.0.0';
const port = parseInt(process.env.PORT) || 3000;

app.listen(port, host, () => {
  console.log(`App serving static content on port ${port}.`);
});
