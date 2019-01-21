import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

require('raf/polyfill');

configure({ adapter: new Adapter() });
export { shallow, mount, render };
export default Enzyme;
