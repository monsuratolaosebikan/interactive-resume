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
  skills:["HTML/CSS", "Java", "Javascript", "jQuery", "Bootstrap", "Jasmine Testing", "C++", "Android Development"],
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
      "dates":"May 2014",
      "description":["This is an android app I designed that allows you to scan books and gives you important information like the average rating, title, author, number of pages,",
		              "and a little description about the book. I love to read and sometimes I just peruse my local bookstore for interesting finds that I may not want to buy at the",
		              "time but need a way of remembering them for later."],
      "image":"images/novel_app_half.png"
    },
    {
    	"title":"RSS FeedReader Testing",
    	"dates":"September 2015",
    	"description":["In this project I was given a web-based application that reads RSS feeds and used the Jasmine Test Framework to test the functionality of the RSS Reader.",
				    	"The tests included checking if there was a defined name and url for each feed, if the menu was hidden upon opening the webpage, if the menu open and closed when the menu",
				    	"icon was clicked, and if an asynchronous function successfully changed the html content dynamically when called" ],
    	"image":"images/jasmine_testing.jpe"
    }
  ]
}

if(bio.skills.length>0){
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
    var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
    $("#projDesc").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description.join(" "));
    $("#projDesc").append(formattedDescription);
    var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].image);
    $(".project-entry:last").append(formattedImage);
    var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
 }
};

projectsDisplay();

$("#mapDiv").append(googleMap);
