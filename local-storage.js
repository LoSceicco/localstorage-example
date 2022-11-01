
const dataKey = 'data';

// disegna tabella a partire dai dati
function drawTable() {
  const currentData = JSON.parse(localStorage.getItem(dataKey)) || [];
  let myTableContent = '';
  for (const row of currentData) {
    myTableContent += '<tr> <td>' + row.nome + '</td><td>' + row.cognome + '</td> </tr>';
  }

  document.getElementById('mytable').innerHTML = myTableContent;
}

const button = document.getElementById('add');

if (!button) {
  alert('Errore manca il bottone');
}

button.addEventListener('click', function (event) {
  // salvare dati nel local storage
  console.log(event);

  const nome = document.querySelector('input[name="nome"]');
  const cognome = document.querySelector('input[name="cognome"]');

  const currentData = JSON.parse(localStorage.getItem(dataKey));

  if (currentData && currentData.length) {
    currentData.push({
      nome: nome.value,
      cognome: cognome.value,
    });
    localStorage.setItem(dataKey, JSON.stringify(currentData));
  } else {
    const data = [{
      nome: nome.value,
      cognome: cognome.value
    }];
    localStorage.setItem(dataKey, JSON.stringify(data));
  }
  drawTable();

  //svuoto i campi
  nome.value = '';
  cognome.value = '';
})


//cancella tutto e svuota tabella
function deleteAll() {
  localStorage.removeItem(dataKey);
  drawTable();
}

// inizializza tabella coi dati gia salvati
drawTable();