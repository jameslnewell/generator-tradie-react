import rechannel from 'rechannel';
import routes from './routes';
import reducer from './reducer';
import './index.scss';

rechannel({
  routes,
  reducer
});

