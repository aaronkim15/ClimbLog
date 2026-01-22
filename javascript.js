
/* event handling to prevent page refresh from button. */
document.querySelector("form button").addEventListener("click", function(event){
    event.preventDefault();
    console.log("clicked");
});


/* On button click, create climb session object */

function readData(){
    var session = {
        date:document.querySelector("input[type='date']").value,
        style:document.querySelector("#style").value,
        grade:document.querySelector("input[type = 'text']").value,
        attempts:Number(document.querySelector("input[type='number']").value),
        result:document.querySelector("#result").value,
        comments:document.querySelector("textarea").value
    }
    
    console.log(session);
}


/* HTML element creation */
var sessionResult = document.createElement("li");

sessionResult.innerHTML = ""
