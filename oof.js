var oofed = document.getElementById('result')



document.getElementById('stuff').addEventListener('click', ()=> {  
    var name =document.getElementById('tim').value
    console.log('string')
    
    axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`)
    .then((response) => {
        nameSearch(response)
    });

function nameSearch(response) {
    oofed.innerHTML = response.data.results
    .map(function(indivCharacter) { // ooga booga, make theis a function 
        return `
          <img src="${indivCharacter.image}">
          <h1> Name: ${indivCharacter.name}</h1>
        `;
    })
    .join('');
}

})

 
        