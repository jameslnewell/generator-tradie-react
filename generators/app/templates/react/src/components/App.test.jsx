import React from 'react';
import App from './App.jsx';

describe('App', () => {

  describe('render()', () => {

    it('should render text', () => {
      const element = render(<App/>).element;
      expect($(element).hasText('Hello World!')).to.be.true;
    });

  });

});
