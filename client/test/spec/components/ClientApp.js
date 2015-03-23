'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var ClientApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ClientApp = require('components/ClientApp.js');
    component = React.createElement(ClientApp);
  });

  it('should create a new instance of ClientApp', function () {
    expect(component).toBeDefined();
  });
});
