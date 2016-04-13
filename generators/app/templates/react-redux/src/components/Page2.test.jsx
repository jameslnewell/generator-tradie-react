import {push} from 'react-router-redux';
import {handleClick} from './Page2.jsx';

describe('Page2', () => {

  describe('handleClick()', () => {

    it('should call dispatch with a push action to navigate to /page-1', () => {
      const dispatch = sinon.spy();
      handleClick(dispatch);
      expect(dispatch).to.be.calledWith(push('/page-1'));
    });

  });

});
