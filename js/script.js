
var msg;

var studentData = [
    {
        name:               "Tom",
        track:              "JavaScript",
        achievments:        "Begginer",
        points:             "50",
    },
    {
        name:               "Bob",
        track:              "php",
        achievments:        "advanced",
        points:             "1239",
    },
    {
        
        name:               "Tommy",
        track:              "Java",
        achievments:        "php course",
        points:             "3049",
    },
]

function endLine()
{
    return "<br></br>";
}

for (var i = 0; i < studentData.length ; i++)
{
    msg +=  (`Name:           ${studentData[i].name}              ${endLine()}                  `);
    msg +=  (`Track:          ${studentData[i].track}             ${endLine()}                  `);
    msg +=  (`Achievements:   ${studentData[i].achievments}       ${endLine()}                  `);
    msg +=  (`Points:         ${studentData[i].points}            ${endLine()}                  `);
    msg +=  (`  -------------------------                         ${endLine() + endLine()}      `);
}

document.write(msg);
 
