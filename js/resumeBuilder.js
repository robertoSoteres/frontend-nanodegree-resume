/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*
var formatterdName = HTMLheaderName.replace("%data%", "Roberto Soteres");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").append(formatterdName);
$("#header").append(formattedRole);







var tioGrande = {
    "name": "Roberto",
    "role" : "web developer",
    "contacts" : {
        "email" : "roberto.soteres@gmail.com",
        "location" : "Madrid",
        "mobile" : "611 111 111"
    },
    "pictureURL" : "images/fry.png",
    "welcomeMessage" : "Hi buddy!",
    "skills" : ["JS","CSS3", "HTML5"]
}

$("#main").append(tioGrande.welcomeMessage);
$("#main").append(tioGrande["contacts"]["email"]);
*/



var works = {
    "jobs" : [
        {
            "employer" : "oneclick",
            "title" : "web developer",
            "location" : "Madrid",
            "datesWorked" : "01/07/2017",
            "description" : "Descripción web developer"
        }
    ]
}


var projects = {
    "projects" : [
        {
            "title" : "Proyecto tiburón",
            "dates" : "01/07/2017",
            "description" : "Descripción del proyecto tiburón"
        },
        {
            "title" : "Proyecto salmón",
            "dates" : "01/07/2017",
            "description" : "Descripción del proyecto salmón"
        }
    ]
}


var bio = {
    "name": "Roberto",
    "role" : "web developer",
    "contacts" : {
        "email" : "roberto.soteres@gmail.com",
        "location" : "Madrid",
        "mobile" : "611 111 111",
        "githubUser" : "robertoSoteres",
        "twitter" : "@RobertoSoteres"
    },
    "pictureURL" : "images/fry.jpg",
    "welcomeMessage" : "Hi buddy!",
    "skills" : ["JS","CSS3", "HTML5"]
}



var education = {
    "schools" : [
        {
            "name" : "Sagrados Corazones",
            "location" :  "Madrid",
            "degreeDates" : "01/07/2017",
            "url" : "http://www.google.es",
            "majors":[
                {
                    "name" : "Diseño web"
                }
            ]
        }
    ],
    "onlineCourses" : [
        {
            "title" : "PHP para dummies",
            "school" : "María Virgen",
            "dates" : "01/07/2017",
            "url" : "http://www.hotmail.com"
        }
    ]
}


var formatterdName = HTMLheaderName.replace("%data%", "Roberto Soteres");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formatterdName);


displayWork();

function displayWork(){
    for(job in works.jobs){
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", works.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", works.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;        
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDatesWorked = HTMLworkDates.replace("%data%", works.jobs[job].datesWorked);
        $(".work-entry:last").append(formattedDatesWorked);
        var formattedDescription = HTMLworkDescription.replace("%data%", works.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

$(document).click(function(loc){
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});



rellenarBio();

function rellenarBio(){
    var formattedImage = HTMLbioPic.replace("%data%", bio.pictureURL);
    $("#header").append(formattedImage);  
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMessage); 
    if(bio.skills.length>0){    
        $("#header").append(HTMLskillsStart);                
        var formatedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formatedSkill);    
        formatedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formatedSkill);
        formatedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formatedSkill);
    }
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.githubUser);
    $("#topContacts").append(formattedgithub);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedlocation);



}




function inName(nombreCompleto){    
    
     var nombreFinal = nombreCompleto;
    // Your code goes here!
      var names = nombreCompleto.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    nombreFinal = names.join(" ");
    return nombreFinal;
    
    
    return nombreCompuesto;

}




projects.display = function(){
    for(var x = 0; x < projects.projects.length; x++){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[x].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[x].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[x].description);
        $(".project-entry:last").append(formattedDescription);
    }
}


projects.display();




$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);





