module.exports = {
  name: 'loadingpage-sample',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/loadingpage-sample',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
