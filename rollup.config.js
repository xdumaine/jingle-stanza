import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'index.js',
  format: 'umd',
  plugins: [ babel(), uglify() ],
  dest: 'out/jingle-stanza.min.js',
  moduleName: 'iframeScreenshare'
};
