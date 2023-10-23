let btn  = document.querySelector('#mode');
let span = document.querySelector('span');





btn.addEventListener('click', () => {
  if(document.body.classList.contains('dark')) {
    span.textContent = "Thème sombre";
    localStorage = ('theme', 'clair');
} 
else {
    modeSombre();
}
});
