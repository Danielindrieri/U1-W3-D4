const tabella = []
for (let i = 1; i <= 76; i++) {
  tabella.push(i)
}
const Createcell = function () {
  const tombollaDiv = document.getElementById('Tombolone')
  tabella.forEach(function (num) {
    const cell = document.createElement('div')
    cell.textContent = num
    cell.classList.add('cell')
    tombollaDiv.appendChild(cell)
  })
}
const buttafuori = document.getElementById('NumeroEstratto');
buttafuori.addEventListener('click', function () {
  if (tabella.length > 0) {
    const randomIndex = Math.floor(Math.random() * tabella.length);
    const buttaF = tabella.splice(randomIndex, 1)[0];
    document.getElementById('NumeroEstratto')
  } else {
    document.getElementById('NumeroEstratto')
  }
});
  
Createcell()
