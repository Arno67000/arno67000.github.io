let dbFetch = async function() {
    try {
        //let response = await fetch("./data/data.json");
        let response = await fetch("./data/database_8letters.json");
        if (response.ok) {
            let data = await response.json();
            db = data.eightLetter;
        } else {
            console.error(response.status);
            alert("Chargement de la base de donnée impossible.");
        }
    } catch (error) {
        console.log(error);
    }
}