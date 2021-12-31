//function to get the value from API
const  getmeaning = async()=>{

    const word = document.getElementById("word").value;
    console.log("Value is :"+word);

    if(word.length!=0) {
    try{
    const rep = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    var data = await rep.json(); 
    ViewDetails(data);
    }
    catch{
        alert("Word not found!!")
    }
    }
    else{
        alert("Please enter a word!!")
    } 
}

// function to Display meaning in the page

const ViewDetails = (data) =>{
 let meaningdivtag = document.getElementById("meaning");
 let meanings = '';
 data[0].meanings.forEach(meaning => {
     var meaningtag = `<div>
     <h3>${meaning.partOfSpeech}</h3>
     <p> Defenition : ${meaning.definitions[0].definition}</p>
     <p> Example : ${meaning.definitions[0].example}</p>
     </div>`
     meanings = meanings+meaningtag;   
 });
 meaningdivtag.innerHTML = meanings;
}