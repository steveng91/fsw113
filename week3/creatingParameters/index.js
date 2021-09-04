const xhr = new XMLHttpRequest() 

xhr.open("GET", "https://swapi.dev/api/people/", true)
xhr.send()
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200){
        let data = JSON.parse(xhr.responseText)
       charStats(data.results)
        console.log(data)
    }
}
function charStats(data){
    for (let i = 0; i < data.length; i++) {
        const character = document.createElement('h3')
        character.textContent =data[i]
        document.body.appendChild(character)        
    }
}
//var people = data.name[i]
//var height = data.height
//var birthYear = data.birth_year
//var eyecolor = data.eye_color
//var birthYear = data.birth_year
//var birthYear = data.birth_year
//var birthYear = data.birth_year
//var birthYear = data.birth_year
//var birthYear = data.birth_year
