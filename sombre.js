let btn  = document.querySelector('#mode');
let span = document.querySelector('span');





btn.addEventListener('click', () => {
  if(document.body.classList.contains('dark')) {
    span.textContent = "Thème sombre";
    localStorage.setItem = ('theme', 'clair');
} 
else {
    modeSombre();
}
});

function modeSombre() {
    document.body.className = "dark";
    span.textContent = "Thème clair";
    localStorage.setItem = ('theme', 'sombre');

}