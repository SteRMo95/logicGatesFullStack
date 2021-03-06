import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import And from  './And.js';
import Or from  './Or.js';
import Nand from './Nand.js';
import Nor from './Nor.js';
import Wire from './Wire.js';


class Canvas extends React.Component{
  
  state = {
    gateArray : [
      {type: "NOR"}, 
      {type: "OR"},
      {type: "NAND"},
      {type: "AND"}
    ]
  }

  

  render(){

    return(
      <div>    
        <div id="canvas" style={{height: '500px', width: '90%', position: 'relative', overflow: 'auto',  padding: '0'}}>
          {
            this.state.gateArray.map((gate)=>{
              console.log(gate.type);
              switch(gate.type){
                case "NOR":
                  return (
	            <Nor />
                  );
		  break;
	      }
	    })	    
	  }

        </div>
	<button>Spawn</button>
      </div>
    );
  }


}
export default Canvas;
