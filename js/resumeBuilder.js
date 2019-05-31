/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	name: "An Tran",
	role: "Web Developer",
	contacts: {
		mobile: "404-790-0066",
		email: "antran.vh@gmail.com",
		github: "atran43-gsu",
		location: "Atlanta, GA",
	},
	welcomeMessage: "Let's build them!",
	skills: ["HTML", "CSS", "JavaScript", "Java", "C", "x86 and ARM Assembly Language"],
	biopic: "images/profilePicture.jpg",
	display: function(){
		var formattedRole = HTMLheaderRole.replace("%data%", this.role);
		$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%", this.name);
		$("#header").prepend(formattedName);

		var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
		$("#topContacts").append(formattedGithub);
		$("#footerContacts").append(formattedGithub);
		var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
		$("#topContacts").append(formattedLocation);

		var formattedBiopic = HTMLbioPic.replace("%data%", this.biopic);
		$("#header").append(formattedBiopic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);

		//hoi chi Phuong add skill array
		(this.skills.length > 0) && $("#header").append(HTMLskillsStart);
		this.skills.forEach(function(skill) {
			var formattedSkill = HTMLskills.replace("%data%", skill);
			$("#skills").append(formattedSkill);
		});

		$("#header a").attr("target", "_blank"); //hoi chi Phuong
	},
};

var education = {
	schools: [
		{
			name: "Georgia State University",
			location: "Atlanta, GA",
			degree: "BS",
			majors: ["Computer Science"],
			dates: "In progess",
			url: "http://www.gsu.edu"
		}
	],
	onlineCourses: [
		{
			title: "FrontEnd Web Developer",
			school: "Udacity",
			dates: "In progess",
			url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	],
	display: function() {
		/*display schools*/
		this.schools.forEach(function(school) {
			// add a container for each school
			$("#education").append(HTMLschoolStart);
			// add school name and degree
			var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
			var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
			$(".education-entry:last").append(formattedSchoolName + formattedDegree);
			// add dates
			var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
			$(".education-entry:last").append(formattedDates);
			// add location
			var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
			$(".education-entry:last").append(formattedLocation);
			// add all element in the majors array
			var formattedMajor = HTMLschoolMajor.replace("%data%", function() {
				var allMajors = "";
				for (var i = 0; i < school.majors.length; i++) {
					allMajors += school.majors[i];
					(i < (school.majors.length - 1)) && (allMajors += ", "); //hoi chi Phuong
				}
				return allMajors;
			});
			$(".education-entry:last").append(formattedMajor);
		});
		/*display online courses*/
		// add "Online Classes" title if the array onlineCourses has some course.
		(this.onlineCourses.length > 0) && $("#education").append(HTMLonlineClasses); //hoi chi Phuong
		// add each online course in the onlineCOurses array
		this.onlineCourses.forEach(function(course) {
			// add container for each course
			$("#education").append(HTMLschoolStart);
			// add course title and school
			var formattedTitle = HTMLonlineTitle.replace("%data%", course.title).replace("#", course.url);
			var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
			$(".education-entry:last").append(formattedTitle + formattedSchool);
			// add course date
			var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
			$(".education-entry:last").append(formattedDates);
			// add course url
			var formattedURL = HTMLonlineURL.replace("%data%", course.url).replace("#", course.url);
			$(".education-entry:last").append(formattedURL);
		});
		$("#education a").attr("target", "_blank"); // hoi chi Phuong
	}
};

var work = {
	jobs:[
		{
			employer: "Holy Vietnam Martyrs Catholic Church",
			title: "Volunteer Web Developer",
			location: "Norcross, GA",
			dates: "In progess",
			description: "A volunteer job for my local church, to create an interactive website using new technologies.",
			url:"http://www.cttdvnatl.org"
		}
	],
	display: function() {
		// add each job in the jobs array
		this.jobs.forEach(function(job) {
			// add a container for each job
			$("#workExperience").append(HTMLworkStart);
			// add employer and title
			var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer).replace("#", job.url); //hoi chi Phuong 2 replace
			var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
			$(".work-entry:last").append(formattedEmployer + formattedTitle);
			// add dates
			var formattedDates = HTMLworkDates.replace("%data%", job.dates);
			$(".work-entry:last").append(formattedDates);
			// add location
			var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
			$(".work-entry:last").append(formattedLocation);
			// add job description
			var formattedDescription = HTMLprojectDescription.replace("%data%", job.description);
			$(".work-entry:last").append(formattedDescription);
			// make the link to open a new tab
			$(".work-entry:last a").attr("target", "_blank"); //hoi chi Phuong
		});
	}
};

var projects = {
	projects: [
		{
			title: "Sentiment Analysis",
			dates: "04-2019",
			description: "An experiment on C programming to predict reviews' score based on reviews' contents.",
			images: ["images/review1.jpg","images/review2.jpg"],
			url: "https://github.com/vincentgbs/SentimentAnalysis"
		},
		{
			title: "ARM Assembly Language",
			dates: "02-2019",
			description: "An experiment in assembly language on Raspberry Pi.",
			images: ["images/assembly1.jpg","images/assembly2.jpg"],
			url: "https://github.com/atran43-gsu/ARM-Assembly-Language"
		}
	],
	display: function() {
		// add each project from the projects array
		this.projects.forEach(function(project) {
			// add container for each project
			$("#projects").append(HTMLprojectStart);
			// add project title
			var formattedTitle = HTMLprojectTitle.replace("%data%", project.title).replace("#", project.url);
			$(".project-entry:last").append(formattedTitle);
			// add project dates
			var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
			$(".project-entry:last").append(formattedDates);
			// add project description
			var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
			$(".project-entry:last").append(formattedDescription);
			// add images
			project.images.forEach(function(image) {
				var formattedImage = HTMLprojectImage.replace("%data%", image);
				$(".project-entry:last").append(formattedImage);
			});

			$(".project-entry:last a").attr("target", "_blank"); //hoi chi Phuong
		});
	}
};

bio.display();
education.display();
work.display();
projects.display();
$("#mapDiv").append(googleMap);