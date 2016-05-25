import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import render from 'react-testutils-render';
import query from 'react-testutils-query';

chai.use(sinonChai);

global.expect = chai.expect;
global.sinon = sinon;
global.render = render;
global.$ = query;
