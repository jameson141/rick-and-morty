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
    .map(function(indivCharacter) {
        return `
          <img src="${indivCharacter.image}">
          <h1> Name: ${indivCharacter.name}</h1>
          <h1> Species: ${indivCharacter.species}</h1>
          <h1> Origin Name : ${indivCharacter.origin.name}</h1>
          <h1> Status : ${indivCharacter.status}</h1>
        `;
    })
    .join('');
}

})

 
        