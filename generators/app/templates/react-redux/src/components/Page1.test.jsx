import {push} from 'react-router-redux';
import {handleClick} from './Page1.jsx';

describe('Page1', () => {

  describe('handleClick()', () => {

    it('should call dispatch with a push action to navigate to /page-2', () => {
      const dispatch = sinon.spy();
      handleClick(dispatch);
      expect(dispatch).to.be.calledWith(push('/page-2'));
    });

  });

});
