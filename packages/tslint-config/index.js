module.exports = {
  extends: ['tslint:recommended', 'tslint-config-airbnb'],
  rules: {
    'import-name': false,
    'interface-name': [true, 'never-prefix'],
    'no-empty-interface': false,
    'object-shorthand-properties-first': false,
    'variable-name': false,
  },
};
