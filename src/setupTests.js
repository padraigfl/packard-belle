const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

require('raf/polyfill');

Enzyme.configure({ adapter: new Adapter() });

