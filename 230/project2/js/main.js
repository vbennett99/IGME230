window.onload = (e) => {document.querySelector("#search").onclick = getData};

let displayTerm = "";

function getData()
{
    //Base url for API use, the API key is already included because it's just "1"
    const THEMEALDB_URL = "https://www.themealdb.com/api/json/v1/1/";
    
    let url = THEMEALDB_URL;
    
    //Getting term from textbox
    let term = document.querySelector("#searchterm").value;
    displayTerm = term;
    
    term = term.trim();
    
    term = encodeURIComponent(term);
    
    //If the search has nothing in it, stop executing the function
    if(searchterm.length < 1) return;
    
    url += "search.php?s=" + term;
    
    document.querySelector("#content").innerHTML = "Searching for recipes with " + displayTerm;
    
    console.log(url);
    //console.log(jQuery);
    //console.log($);
    
    /*$.ajax ({
        dataType: "json",  
        url: url,
        data: null,
        success: jsonLoaded
    })*/
}

function jsonLoaded(obj)
{
    console.log("obj = " + obj);
    console.log("obj stringified = " + JSON.stringify(obj));
    
    if(!obj.data || obj.data.length == 0)
    {
        document.querySelector("#content").innerHTML = `No results found for '${displayTerm}'`;
        $("#content").fadeIn(500);
        return;
    }
    
    
    
}