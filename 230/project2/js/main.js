window.onload = (e) => {document.querySelector("#search").onclick = findInGameMeal};

let currentResult;
let youtubeLink;

function findInGameMeal()
{
    let searchTerm = document.querySelector("#searchterm").value;   
    searchTerm = searchTerm.trim();
    searchTerm = searchTerm.toLowerCase();
    
    //Get all matching results
    let results = [];
    
    //Getting result limit
    let limit = document.querySelector("#limit").value;
    let displayLimit;
    if(limit == "x")
    {
        displayLimit = allRecipes.length; //Display all
    }
    else
    {
        displayLimit = limit; //Display specified number
    }
    
    let resultCounter = 0;
    
    //Getting results
    for(let i = 0; i < allRecipes.length; i++)
    {
        if(resultCounter != displayLimit)
        {
               //If the search term is the recipe's name
            if(allRecipes[i].name.includes(searchTerm))
            {
                results.push(allRecipes[i]);
                //console.log("Found name match, adding to results");
                resultCounter++;
            }
         
            //If the type of meal it is is the search term
            if(allRecipes[i].type == searchTerm)
            {
                results.push(allRecipes[i]);   
                //console.log("Found type match, adding to results");
                resultCounter++;
            }
            //If the recipe's ingredients includes the search term, ex: 'honey' in 'courser bee honey'
            else if(allRecipes[i].ingredient1.includes(searchTerm))
            {
                results.push(allRecipes[i]);
                //console.log("Found ingredient match, adding to results");
                resultCounter++;
            }
            else if(allRecipes[i].ingredient2.includes(searchTerm))
            {
                results.push(allRecipes[i]);
                //console.log("Found ingredient match, adding to results");
                resultCounter++;
            }
            else if(allRecipes[i].ingredient3.includes(searchTerm))
            {
                results.push(allRecipes[i]);
                //console.log("Found ingredient match, adding to results");
                resultCounter++;
            }
            else if(allRecipes[i].ingredient4.includes(searchTerm))
            {
                results.push(allRecipes[i]);
                //////console.log("Found ingredient match, adding to results");
                resultCounter++;
            }
            else if(allRecipes[i].ingredient5.includes(searchTerm))
            {
                results.push(allRecipes[i]);
                ////console.log("Found ingredient match, adding to results");
                resultCounter++;
            }
        }
    }
    
    //console.log("Results: " + results.length);
    
    //Cutting down results list based on max number of ingredients
    let trimmedResults = [];
    
    //See what the ingredient max is
    let ingredientMax = document.querySelector("#ingredientLimit").value;
    //console.log("Ingredient limit: " + ingredientMax);
    
    for(let i = 0; i < results.length; i++)
    {
        let result = results[i]; //Get a result
        
        let numIngredients = 1; //Ingredient counter, there will always be at least one
        
        if(result.ingredient2 != "")
        {
            numIngredients++;   
        }
        if(result.ingredient3 != "")
        {
            numIngredients++;
        }
        if(result.ingredient4 != "")
        {
            numIngredients++;
        }
        if(result.ingredient5 != "")
        {
            numIngredients++;
        }
        
        if(numIngredients <= ingredientMax) //If the number of ingredients this recipe has is less than or equal to the max then add it to trimmedResults
        {
            trimmedResults.push(result);
        }
    }
    
    //console.log("Trimmed Results Length: " + trimmedResults.length);
    
    //If there aren't any results after trimming
    if(trimmedResults.length == 0)
    {
        document.querySelector("#displaytext").innerHTML = `No results found for '${searchTerm}.' Try searching something else!`;
        return;
    }
    else
    {
        document.querySelector("#displaytext").innerHTML = `Showing results for '${searchTerm}'`;   
    }
    
    //Displaying our results
    for(let i = 0; i < trimmedResults.length; i++)
    {
        currentResult = trimmedResults[i];
        
        let display = `<div class="result"><h4>${trimmedResults[i].name}</h4><ul>`;
        
        display += `<li>${trimmedResults[i].ingredient1}</li>`;
        if(trimmedResults[i].ingredient2 != "")
        {
            display += `<li>${trimmedResults[i].ingredient2}</li>`;
        }
        if(trimmedResults[i].ingredient3 != "")
        {
            display += `<li>${trimmedResults[i].ingredient3}</li>`;
        }
        if(trimmedResults[i].ingredient4 != "")
        {
            display += `<li>${trimmedResults[i].ingredient4}</li>`;
        }
        if(trimmedResults[i].ingredient5 != "")
        {
            display += `<li>${trimmedResults[i].ingredient5}</li>`;
        }
        
        display += `</ul><p class="dropdown">`;
        
        //If there's a keyword aka a recipe to go along
        /*if(trimmedResults[i].keyword != "")
        {
            let link = getData();
            display += `<a target="_blank" href="">`;
            display += `Click here to see a real recipe!`;
            display += `</a>`
            
        }
        else
        {*/
            display += `There is no real recipe to go along with this meal.`;
        //}
                    
                //<p class="dropdown">Click to see a real recipe!</p>
            //</div>
        display += `</p></div><br>`;
        
        document.querySelector("#content").innerHTML += display;
    }
}

function getData()
{
    //Base url for API use, the API key is already included because it's just "1"
    const THEMEALDB_URL = "https://www.themealdb.com/api/json/v1/1/";
    
    let url = THEMEALDB_URL;
    
    //Getting term from textbox
    let term = document.querySelector("#searchterm").value;
    displayTerm = term;
    
    term = encodeURIComponent(term);
    
    //If the search has nothing in it, stop executing the function
    if(searchterm.length < 1) return;
    
    url += "search.php?s=" + term;
    
    console.log(url);
    console.log(jQuery);
    console.log($);
    
    $.ajax ({
        dataType: "json",  
        url: url,
        data: null,
        success: jsonLoaded
    });
}

function jsonLoaded(obj)
{
    console.log("obj stringified = " + JSON.stringify(obj));
    
    let stringified = JSON.stringify(obj);
    
    if(!obj.data || obj.data.length == 0)
    {
        document.querySelector("#content").innerHTML = `<p>No results found for '${displayTerm}'</p>`;
        $("#content").fadeIn(500);
        return;
    }
    else
    {
        console.log("There is data.");   
    }
    
    
}