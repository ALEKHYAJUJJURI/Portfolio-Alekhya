let backgroundModeBtn = document.getElementById('backgroundMode');
let sectionHomeEl = document.getElementById('middleBackground')
backgroundModeBtn.onclick = ()=>{
    sectionHomeEl.classList.toggle('dark-modes');
    backgroundModeBtn.classList.toggle('btn-onclick');
}