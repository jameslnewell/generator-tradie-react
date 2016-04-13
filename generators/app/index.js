'use strict';
const path = require('path');
const yeoman = require('yeoman-generator');
const TYPES = ['react', 'react-redux', 'react-redux-universal'];

module.exports = yeoman.Base.extend({

  constructor: function () {
    yeoman.Base.apply(this, arguments);

    //get app type
    this.option('type', {
      desc: 'The application type — "react", "redux" or "redux-universal"',
      type: String,
      defaults: 'react'
    });

    //check app type
    if (TYPES.indexOf(this.options.type) === -1) {
      throw new Error(`Unsupported application type "${this.options['type']}". Application type must be one of [${TYPES.map(type => `"${type}"`).join(', ')}].`);
    }

  },

  common: function() {

    //copy the common files
    this.fs.copy(
      this.templatePath(`${this.options.type}/**/{*.*,.*}`),
      this.destinationPath()
    );

  },

  react: function() {

    if (this.options.type !== 'react') {
      return;
    }

  },

  reactRedux: function() {

    if (this.options.type !== 'react-redux') {
      return;
    }

  },

  reactReduxUniversal: function() {

    if (this.options.type !== 'react-redux-universal') {
      return;
    }

  },

  manifest: function() {

    this.fs.copyTpl(
      this.templatePath(`${this.options.type}/package.json`),
      this.destinationPath('package.json'),
      {
        name: path.basename(process.cwd())
      }
    );

  },

  install: function () {
    this.npmInstall();
  }

});
