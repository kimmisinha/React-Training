import path from 'path';
import fs from 'fs';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server'; 
import App from '../src/App'; 

const PORT = 5050;
const app = express();
const router = express.Router();

const serverRenderer = (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred');
    }

    const context = {};
    const appMarkup = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${appMarkup}</div>`)
    );
  });
};

router.use('^/$', serverRenderer);

router.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
);

app.use(router);

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
});
