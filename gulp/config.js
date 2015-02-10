var dest = './build',
    src  = './src';

module.exports = {
  browserify: {
    cache: {},
    packageCache: {},
    fullPaths: true,
    bundleConfigs: [{
      entries:     src + '/app.js',
      dest:        dest + '/js',
      outputName:  'app.js'
    }]
  },

  stylus: {
    src:       [src + '/styles/*.styl', src + '/styles/reset.css'],
    dest:      dest + '/css',
    settings:  {
      sourceComments:  'map',
      imagePath:       '/images',
      'include css':   true
    }
  },

  images: {
    src:   src + '/images/**',
    dest:  dest + '/images'
  },

  browserSync: {
    proxy: 'localhost:8001',
    open: false
  },

  nodemon: {
    script: './server.js'
  }
};
