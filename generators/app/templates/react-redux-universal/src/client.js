import rechannel from 'rechannel';
import routes from './routes';
import reducer from './reducer';
import './client.scss';

rechannel({
  routes,
  reducer
});

