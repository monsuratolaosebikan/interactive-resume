
var bio = {
	name: 'Monsurat Olaosebikan',
	role: 'Front-End Web Developer',
	contacts: {
	email: 'monsuratolaosebikan@gmail.com',
	location: 'Bridgeport,CT'
	},
	picture: 'images/profile_pic.jpg',
	skills:['HTML/CSS', 'Java', 'Javascript', 'jQuery', 'Bootstrap', 'Jasmine Testing', 'C++', 'Android Development'],
	welcomeMessage: 'Hire me please :)'
};

var education = {
	schools: [
		{
			name: 'Northeastern University',
			years: '2013 - 2018',
			degree: 'Bachelors',
			major: 'Mechanical Engineering',
			location: 'Boston,MA',
			logo: 'images/neu.png'
		}
	]
};

var work = {
	jobs: [
		{
			employer:'GE Transportation',
			title:'Advanced Manufacturing Co-op',
			location:'Erie,PA',
			dates: 'August 2015 - December 2015',
			description: 'Managed a 3D printer'
		},
		{
			employer:'GE Transportation',
			title:'Inventory Management Intern',
			location:'Erie,PA',
			dates: 'May 2015 - August 2015',
			description: 'Counted parts and verified inventory management system accuracy'
		}
	]
};

var projects = {
	projects:[
		{
			title:'Novel Android App',
			dates:'May 2014',
			description:['This is an android app I designed that allows you to scan books and gives you important information like the average rating, title, author, number of pages,',
							'and a little description about the book. I love to read and sometimes I just peruse my local bookstore for interesting finds that I may not want to buy at the',
							'time but need a way of remembering them for later.'],
			image:'images/novel_app_half.png'
		},
		{
			title:'RSS FeedReader Testing',
			dates:'September 2015',
			description:['In this project I was given a web-based application that reads RSS feeds and used the Jasmine Test Framework to test the functionality of the RSS Reader.',
							'The tests included checking if there was a defined name and url for each feed, if the menu was hidden upon opening the webpage, if the menu open and closed when the menu',
							'icon was clicked, and if an asynchronous function successfully changed the html content dynamically when called.' ],
			image:'images/jasmine_testing.jpe'
		}
	]
};

bio.display = function() {
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	$('#header').prepend(formattedRole);
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	$('#header').prepend(formattedName);
	var formattedPic = HTMLbioPic.replace('%data%', bio.picture);
	$('.profile').append(formattedPic);
	if(bio.skills.length) {
		for(var i=0; i < bio.skills.length; i++) {
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(formattedSkill);
		}	
	}
};

work.display = function() {
	var len = work.jobs.length;
	if(len) {
		for(var job=0; job < len; job++) {
			$('#workExperience').append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
			var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
			var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedLocation;
			$('.work-entry:last').append(formattedEmployerTitle);
			var formattedworkDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
			$('.work-entry:last').append(formattedworkDates);
			var formattedworkDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
			$('.work-entry:last').append(formattedworkDescription);
		}
	}
};


projects.display = function() {
	var len = projects.projects.length;
	if(len) {
		for(var project=0; project < len; project++) {
			$('#projects').append(HTMLprojectStart);
			var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
			$('#projDesc').append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description.join(' '));
			$('#projDesc').append(formattedDescription);
			var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
			$('.project-entry:last').append(formattedTitle);
			var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].image);
			$('.project-entry:last').append(formattedImage);
			var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
		}
	}
};

education.display = function() {
	var len = education.schools.length;
	if(len) {
		for(var school=0; school < len; school++) {
			$('#education').append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
			$('.education-entry:last').append(formattedName + formattedDegree);
			var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major);
			$('.education-entry:last').append(formattedMajor);
			var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
			$('.education-entry:last').append(formattedLocation);
			var formattedYears = HTMLschoolDates.replace('%data%', education.schools[school].years);
			$('.education-entry:last').append(formattedYears);
			var formattedLogo = HTMLschoolLogo.replace('%data%', education.schools[school].logo);
			$('.education-entry:last').append(formattedLogo);
		}
	}
};

bio.display();
projects.display();
work.display();
education.display();


$('#mapDiv').append(googleMap);
 
