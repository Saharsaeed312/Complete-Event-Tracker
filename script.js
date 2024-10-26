// Click Event:
let clickcount = 0;
document.getElementById('clickbtn').addEventListener('click',function(){
    clickcount++;
    document.getElementById('clickcount').innerText =`Click: ${clickcount}`;
});

// Double Click Event:
document.querySelector('.doubleClick button').addEventListener('dblclick', function() {
    document.getElementById('doubleClick').innerText = 'Double Click Detected!';
});

// Load Event:
window.addEventListener('load',function(){
    this.document.getElementById('loadEvent').innerText = `Page Loded Suceesfully`;
});

// Mouse Event:
document.getElementById('mouseArea').addEventListener('mousemove', function (e) {
    const x = e.clientX;
    const y = e.clientY;
    document.getElementById('mousePosition').innerText = `Mouse Position: (${x}, ${y})`;
});

// keyboard Event:
document.getElementById('keyboardInput').addEventListener('keydown', function (e) {
    document.getElementById('lastKey').innerText = `Last Key Pressed: ${e.key}`;
});

// copyEvent:
document.getElementById('copyText').addEventListener('copy',function(){
    document.getElementById('copyStatus').innerText = `Text copied`;
});

// Paste Event:
document.getElementById('pasteInput').addEventListener('paste', function (event) {
    let pastedData = (event.clipboardData || window.clipboardData).getData('text');
    document.getElementById('pasteStatus').innerText = `Pasted content: ${pastedData}`;
});

// focus event:
 const focusInput= document.getElementById("focusInput");
 focusInput.addEventListener('focus',function(){
    document.getElementById('FocusStatus').innerText = `Input is focused`;
 });

 focusInput.addEventListener('blur',function(){
    document.getElementById('FocusStatus').innerText = `Input Blured`;
 });

// Window Resize Event
window.addEventListener('resize', function() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById('windowStatus').innerText = `Current Window Size: ${width}px x ${height}px`;
});

// Touch Event
document.getElementById('touchArea').addEventListener('touchstart', function (e) {
    const touch = e.touches[0];
    document.getElementById('touchStatus').innerText = `Touch Coordinates: (${touch.clientX}, ${touch.clientY})`;
});

// Scroll Event
window.addEventListener('scroll', function() {
    document.getElementById('ScrollStatus').innerText = 'Scrolling Detected!';
});

// Form Submit Event
document.getElementById('submitForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formStatus').innerText = `Form Submitted with: ${document.getElementById('formInput').value}`;
});

// Input Event
document.getElementById('inputEvent').addEventListener('input', function(e) {
    document.getElementById('InputStatus').innerText = `Current Input: ${e.target.value}`;
});

// Drag and Drop Event
const dragArea = document.getElementById('dragArea');
const dropArea = document.getElementById('dropArea');

dragArea.addEventListener('dragstart', function() {
    document.getElementById('dragDropStatus').innerText = 'Dragging Started';
});

dropArea.addEventListener('dragover', function(e) {
    e.preventDefault(); // Necessary to allow dropping
});

dropArea.addEventListener('drop', function() {
    document.getElementById('dragDropStatus').innerText = 'Dropped Successfully!';
});

// Media Event
const videoElement = document.getElementById('media');
videoElement.addEventListener('play', function() {
    document.getElementById('mediaStatus').innerText = 'Media Playing';
});

videoElement.addEventListener('pause', function() {
    document.getElementById('mediaStatus').innerText = 'Media Paused';
});

videoElement.addEventListener('ended', function() {
    document.getElementById('mediaStatus').innerText = 'Media Ended';
});
