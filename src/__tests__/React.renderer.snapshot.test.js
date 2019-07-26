
import React from 'react';
import Link from '../components/Link.react';
import renderer from 'react-test-renderer';


describe('React.renderer.snapshot.test', function () {
  it('renders correctly', () => {
    const component = renderer
      .create(<Link page="http://www.yahoo.com">yahoo</Link>);
  
    var tree = component.toJSON();
    //jest --updateSnapshot 
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseEnter();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
    // manually trigger the callback
    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});