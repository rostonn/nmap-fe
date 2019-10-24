import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GlobalWithFetchMock} from "jest-fetch-mock";

configure({ adapter: new Adapter() });

 
const customGlobal = global;
customGlobal.fetch = require('jest-fetch-mock');
customGlobal.fetchMock = customGlobal.fetch;
