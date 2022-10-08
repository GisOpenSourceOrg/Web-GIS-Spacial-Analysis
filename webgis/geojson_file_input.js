// Get the form and file field
let form = document.querySelector('#upload');
let file = document.querySelector('#file');
// Listen for submit events
form.addEventListener('submit', handleSubmit);
/**
 * Handle submit events
 * @param  {Event} event The event object
 */
function handleSubmit(event) {

    // Stop the form from reloading the page
    event.preventDefault();
    // If there's no file, do nothing
    if (!file.value.length) return;
    // Create a new FileReader() object
    let reader = new FileReader();
    // Setup the callback event to run when the file is read
    reader.onload = logFile;
    // Read the file
    reader.readAsText(file.files[0]);

}
let json = null;
function logFile(event) {
    let str = event.target.result;
    json = JSON.parse(str);
    L.geoJSON(json).addTo(map);
    setTimeout(function(){alert("Successfully plotted")},2000);
}