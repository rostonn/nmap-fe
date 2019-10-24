import React from 'react';
import {
    shallow
} from 'enzyme';

import { App } from '../App.js'
import NmapTable from '../NmapTable.js'


let [simpleAction, fetchNmapResults] = new Array(2).fill(jest.fn());

// Setup App Component for testing - UI Tests
function shallowSetup(nmapData) {
    const props = {
        
        simpleReducer: {nmapData: nmapData, test:"Hello Redux"},
        simpleAction: simpleAction,
        fetchNmapResults: fetchNmapResults
    }
    const wrapper = shallow( < App {...props}/>);

        return {
            props,
            wrapper
        };
    }

    describe('App should render', () => {
        it('Should not show data when there is none', () => {
        const { wrapper } = shallowSetup([]);
          expect(wrapper.find('h1').at(0).text()).toBe('Hello World Redux');
          expect(wrapper.find(NmapTable).exists()).toBeFalsy()
        });

        it('Should show data when there is data', () => {
            const { wrapper } = shallowSetup([1]);
             
              expect(wrapper.find('h1').at(0).text()).toBe('Hello World Redux');
              expect(wrapper.find(NmapTable).exists()).toBeTruthy()
                   
            });
      });