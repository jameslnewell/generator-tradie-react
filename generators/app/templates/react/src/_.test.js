import chai, {expect} from 'chai';
import render from 'react-testutils-render';
import query from 'react-testutils-query';

global.expect = chai.expect;
global.render = render;
global.$ = query;
