// dragover and dragenter events need to have 'preventDefault' called
// in order for the 'drop' event to register. 
// See: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_operations#droptargets
dropContainer.ondragover = dropContainer.ondragenter = function(evt) {
    evt.preventDefault();
  };
  
  dropContainer.ondrop = function(evt) {
    // pretty simple -- but not for IE :(
    fileInput.files = evt.dataTransfer.files;
  
    // If you want to use some of the dropped files
    const dT = new DataTransfer();
    dT.items.add(evt.dataTransfer.files[0]);
    dT.items.add(evt.dataTransfer.files[3]);
    fileInput.files = dT.files;
  
    evt.preventDefault();
  };