// config/environment.js
'use strict';

/*
 * Mostly this is the stock module config.
 */
const moduleConfiguration = {
  types: {
    application: { definitiveCollection: 'main' },
    component: { definitiveCollection: 'components' },
    'component-test': { unresolvable: true },
    helper: { definitiveCollection: 'components' },
    'helper-test': { unresolvable: true },
    renderer: { definitiveCollection: 'main' },
    template: { definitiveCollection: 'components' },
    /*
     * Add service as a type.
     */
    service: { definitiveCollection: 'services' }
  },
  collections: {
    main: {
      types: ['application', 'renderer']
    },
    components: {
      group: 'ui',
      types: ['component', 'component-test', 'template', 'helper', 'helper-test'],
      defaultType: 'component',
      privateCollections: ['utils']
    },
    styles: {
      group: 'ui',
      unresolvable: true
    },
    utils: {
      unresolvable: true
    },
    /*
     * Add services as a collection.
     */
    services: {
      types: ['service'],
      defaultType: 'service',
      privateCollections: ['utils']
    }
  }
};

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'bodega-glimmer',
    environment: environment,
    locationType: 'auto',
    /*
     * Pass the module config here.
     */
    moduleConfiguration
  };

  return ENV;
};
