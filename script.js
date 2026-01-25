/* event handling to prevent page refresh from button. */
/* On button click, create climb session object */

var sessions = [];

document.querySelector("form button").addEventListener("click", function(event){
    event.preventDefault();
    var session = {
        date:document.querySelector("input[type='date']").value,
        style:document.querySelector("#style").value,
        grade:document.querySelector("input[type = 'text']").value,
        attempts:Number(document.querySelector("input[type='number']").value),
        result:document.querySelector("#result").value,
        comments:document.querySelector("textarea").value
    }

    /* Store session object in sessions array */
    sessions.push(session);

    /* HTML element creation */
    for (i = 0; i < sessions.length; i++){
        var sessionResult = document.createElement("li");

        sessionResult.innerHTML = `Date:  ${sessions[i].date} -- Climbing Style: ${sessions[i].style}
        -- Climbing Grade: ${sessions[i].grade} - ${sessions[i].attempts} attempts -
        Climbing Result: ${sessions[i].result} - Any comments? ${sessions[i].comments}`;

        document.querySelector("#outputList").appendChild(sessionResult);
    }
    
});

