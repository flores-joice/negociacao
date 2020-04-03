var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos)

var tbody = document.querySelector('table tbody');

//qnd houver evento de submit
document.querySelector('.form').addEventListener('submit', function(event){
    
    event.preventDefault();
    //criar uma tr
    var tr = document.createElement('tr');
    //ler todos os elementos da variavel campos 
    campos.forEach(function(campo){

        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
      
    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);

    tbody.appendChild(tr);


    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

})