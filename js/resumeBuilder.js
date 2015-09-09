var name = "Monsurat Olaosebikan";
var role = "Front-End Web Developer";
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
  name:name,
  role:role,
  contact: {
    email: "monsuratolaosebikan@gmail.com",
    location: "Boston,MA"
  },
  skills:["Android Development", "Solidworks", "HTML/CSS", "JAVA", "Javascript", "jQuery"],
  welcomeMessage: "Hire me please :)"
}

var education={
    "schools": [
        {
            "name": "Central High School",
            "years": "2009-2013",
            "degree":"high school diploma",
            "location":"Bridgeport,CT"
        },
        {
            "name": "Northeastern University",
            "years": "2013-2018",
            "degree": "Bachelors",
            "major": "Mechanical Engineering"
        }
    ]
}

var work = {
      "jobs":[
          {
            "employer":"GE Transportation",
            "title":"Advanced Manufacturing Co-op",
            "location":"Erie,PA",
            "dates": "August 2015-December 2015",
            "description": "I played with a 3D printer"
          },
          {
            "employer":"GE Transportation",
            "title":"Inventory Management Intern",
            "location":"Erie,PA",
            "dates": "May 2015-August 2015",
            "description": "I played with parts"
          }

]

}

var projects = {
  "projects":[
    {
      "title":"Novel Android App",
      "dates":"2014",
      "description":"Android app that scans books"
    }
  ]
}

if(bio.skills.length>0){
  $("#skills").prepend(HTMLskillsStart);
  for(var i=0;i<bio.skills.length;i++){
  var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
  $("#skills").append(formattedSkill);
}
}
var displayWork = function(){
for(job in work.jobs ){
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);
  var formattedworkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
  $(".work-entry:last").append(formattedworkDates);
  var formattedworkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
  $(".work-entry:last").append(formattedworkDescription);

}
};

displayWork();

$(document).click(function(loc) {
  var x=loc.pageX;
  var y=loc.pageY;
  logClicks(x,y);
});

var projectsDisplay = function(){
  for(project in projects.projects){
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

 }
};

projectsDisplay();

$("#mapDiv").append(googleMap);
