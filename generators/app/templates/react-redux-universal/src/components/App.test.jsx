import React from 'react';
import App from './App.jsx';

describe('App', () => {

  describe('render()', () => {

    it('should render some children', () => {
      const element = render(<App children={<p>Welcome to earth!</p>}/>).element;
      expect($(element).find('p').hasText('Welcome to earth!')).to.be.true;
    });

  });

});
