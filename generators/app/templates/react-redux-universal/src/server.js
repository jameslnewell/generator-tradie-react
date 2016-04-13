import express from 'express';
import rechannel, {createHtml} from 'rechannel';
import routes from './routes';
import reducer from './reducer';

const PORT = process.env.PORT || 5000;

const app = express()
  .use(express.static(`${__dirname}/../dist`))
  .use(rechannel({
    routes,
    reducer,
    html: createHtml({
      title: 'Tradie Project',
      script: ['vendor.js', 'client.js']
    })
  }))
  ;

const server = app.listen(PORT, err => {
  if (err) return console.error(err); //eslint-disable-line no-console
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Server started at http://${host === '::' ? 'localhost' : host}:${port}`);  //eslint-disable-line no-console
});
