var works = {
    "jobs": [{
        "employer": "oneclick",
        "title": "web developer",
        "location": "Valencia",
        "datesWorked": "01/07/2016 - in Progress",
        "description": "Soy un desarrollador front-end dedicado en cuerpo y alma a la programación. Desde un ordenador se pueden hacer cosas realmente asombrosas!!"
    }],
    display: function() {
        for (var job in works.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", works.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", works.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedDatesWorked = HTMLworkLocation.replace("%data%", works.jobs[job].datesWorked);
            $(".work-entry:last").append(formattedDatesWorked);
            var formattedLocation = HTMLworkDates.replace("%data%", works.jobs[job].location);
            $(".work-entry:last").append(formattedLocation);
            var formattedDescription = HTMLworkDescription.replace("%data%", works.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};

var projects = {
    "projects": [{
            "title": "Proyecto Edelvives",
            "dates": "01/07/2017",
            "description": "Esta es la descripción del primer proyecto que he realizado con objetos.",
            "imagenProyecto": ["images/project1.jpeg", "images/project3.jpg"]
        },
        {
            "title": "Proyecto Samsung",
            "dates": "01/07/2014 - 01/07/2015",
            "description": "Esta es la descripción del segundo proyecto que llevaré a cabo con objetos y con empresas como Samsung.",
            "imagenProyecto": ["images/project2.png"]
        }
    ],
    display: function() {
        projects.display = function() {
            for (var x = 0; x < projects.projects.length; x++) {
                $("#projects").append(HTMLprojectStart);
                var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[x].title);
                $(".project-entry:last").append(formattedTitle);
                var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[x].dates);
                $(".project-entry:last").append(formattedDates);
                var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[x].description);
                $(".project-entry:last").append(formattedDescription);
                for (var y = 0; y < projects.projects[x].imagenProyecto.length; y++) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[x].imagenProyecto[y]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        };
    }
};

var bio = {
    "name": "Roberto",
    "role": "web developer",
    "contacts": {
        "email": "roberto.soteres@gmail.com",
        "location": "Madrid",
        "mobile": "611 111 111",
        "githubUser": "robertoSoteres",
        "twitter": "@RobertoSoteres"
    },
    "pictureURL": "images/great-frontend.jpg",
    "welcomeMessage": "Hi buddy!",
    "skills": ["JS", "CSS3", "HTML5", "Photoshop", "Big Data"],
    "display": function() {
        var formattedImage = HTMLbioPic.replace("%data%", bio.pictureURL);
        $("#header").append(formattedImage);
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedMessage);
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            var formatedSkill = HTMLskills.replace("%data%", bio.skills[0]);
            $("#skills").append(formatedSkill);
            formatedSkill = HTMLskills.replace("%data%", bio.skills[1]);
            $("#skills").append(formatedSkill);
            formatedSkill = HTMLskills.replace("%data%", bio.skills[2]);
            $("#skills").append(formatedSkill);
            formatedSkill = HTMLskills.replace("%data%", bio.skills[3]);
            $("#skills").append(formatedSkill);
            formatedSkill = HTMLskills.replace("%data%", bio.skills[4]);
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
};

var education = {
    "schools": [{
        "name": "Sagrados Corazones",
        "location": "Barcelona",
        "degree": "Bachillerato",
        "dates": "01/07/2002 - 01/07/2012",
        "majors": [{
            "name": "Diseño web"
        }]
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree Program",
        "school": "Udacity",
        "dates": "01/05/2017",
        "url": "https://www.udacity.com/"
    }],
    display: function() {
        $("#education").append(HTMLschoolStart);
        for (var x = 0; x < education.schools.length; x++) {
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[x].name);
            $(".education-entry:last").append(formattedSchoolName);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[x].degree);
            $(".education-entry:last").append(formattedDegree);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[x].location);
            $(".education-entry:last").append(formattedLocation);
            var formattedDate = HTMLschoolDates.replace("%data%", education.schools[x].dates);
            $(".education-entry:last").append(formattedDate);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[x].majors[0].name);
            $(".education-entry:last").append(formattedMajor);
        }
    },
    displayOnline: function() {
        $(".education-entry:last").append(HTMLonlineClasses);
        for (var x = 0; x < education.onlineCourses.length; x++) {
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[x].title);
            $(".education-entry:last").append(formattedTitle);
            var formattedSchool = HTMLschoolLocation.replace("%data%", education.onlineCourses[x].school);
            $(".education-entry:last").append(formattedSchool);
            var formattedDate = HTMLschoolDates.replace("%data%", education.onlineCourses[x].dates);
            $(".education-entry:last").append(formattedDate);
            var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[x].url);
            $(".education-entry:last").append(formattedURL);
        }
    }
};

var formatterdName = HTMLheaderName.replace("%data%", "Roberto Soteres");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formatterdName);
works.display();
bio.display();
projects.display();
education.display();
education.displayOnline();
projects.display();
$("#mapDiv").append(googleMap);