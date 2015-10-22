Package.describe({
  name: 'aschbat:jquery-colorbox',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Wrap of jQuery ColorBox',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/AdansBatista/jquery-colorbox.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.addFiles(['lib/jquery.colorbox.js', 'lib/colorbox.css'], 'client');
});
