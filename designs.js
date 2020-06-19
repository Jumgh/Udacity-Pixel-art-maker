//Accessing the variables
const pixelCanvas = document.querySelector('#pixelCanvas');
const form = document.querySelector('#sizePicker');
const rowNumber = document.querySelector('#inputHeight');
const cellNumber = document.querySelector('#inputWidth');
const backgroundColor = document.querySelector('#colorPicker');
const makerow=document.querySelector('#addRow');
//Creating Canvas Size Grid
function makeGrid(x,y) {
  for ( let i=0;i<x.value;i++){
    const Row= pixelCanvas.insertRow(i);
    for (let j=0;j<y.value;j++){
      Row.insertCell(0);
    };
  };
};

// Creating Cell Coloring Function
function cellBackground(event){
  if(event.target.nodeName==='TD'){
    event.target.style.backgroundColor= backgroundColor.value;
  };
};
//Canvas Size EvenT Listener
form.addEventListener('submit',function(e){
  if (pixelCanvas.innerHTML==='') {
    e.preventDefault();
    makeGrid(rowNumber,cellNumber);}
  else {
    if(
      confirm('This step will lead to the loss of the current grid, are you sure?')){
        pixelCanvas.innerHTML='';
        e.preventDefault();
        makeGrid(rowNumber,cellNumber);}
        else {
          e.preventDefault();
        };
      };
    }
  )
  //Cell Coloring Even Listener
pixelCanvas.addEventListener('click',cellBackground)
//Add Rows Without Deleting The Canvas
makerow.addEventListener('click',function(e){
  e.preventDefault();
  let noOfcolumn=cellNumber;
  row = pixelCanvas.insertRow(-1);
  for (let k=0;k<noOfcolumn.value;k++){
  var newCell = row.insertCell(-1);
};
})
