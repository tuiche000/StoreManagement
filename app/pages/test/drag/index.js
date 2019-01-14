import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Box from './Box';
import Dustbin from './Dustbin';

@DragDropContext(HTML5Backend)
export default class Contaier extends Component {
  render() {
    return (
      <div>
          <Dustbin/>
          <Box name="Glass" />
					<Box name="Banana" />
					<Box name="Paper" />
      </div>
    );
  }
}