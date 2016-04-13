import rechannel from 'rechannel';
import routes from './routes';
import reducer from './reducer';

rechannel({
  routes,
  reducer
});

