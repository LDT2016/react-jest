import React from 'react';
import Enzyme from 'enzyme';
import Example from '../Example';

const {shallow,mount,render}=Enzyme;

const name='text button';

describe('Enzyme Test', function () {
    test('Example find span text in SubExample component - shallow', function () {

        const app = shallow(<Example text={name} />);
        const buttonObj=app.find('button');
        const spanObj=app.find('span');
    
        console.info(`button count: ${buttonObj.length}`);
        console.info(`span count:${spanObj.length}`);
      
        //Sub Emaxple find text exception happened, Method “text” is meant to be run on 1 node. 0 found instead.
        //expect(buttonObj.text()).toBe(spanObj.text());
        expect(buttonObj.text()).toBe(name);
      });

      it('Example find span text in SubExample component - mount', ()=> {
        const app = mount(<Example text={name} />);
        const buttonObj=app.find('button');
        const spanObj=app.find('span');
    
        console.info(`button count: ${buttonObj.length}`);
        console.info(`span count:${spanObj.length}`);
    
        expect(buttonObj.text()).toBe(spanObj.text());
      });


      it('Example find span text in SubExample component - render', function () {
        const app = render(<Example text={name} />);
        const buttonObj=app.find('button');
        const spanObj=app.find('span');
    
        console.info(`button count: ${buttonObj.length}`);
        console.info(`span count:${spanObj.length}`);
    
        expect(buttonObj.text()).toBe(spanObj.text());
      });
})

