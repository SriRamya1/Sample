//XML HTTP Request
//The XMLHttpRequest object can be used
//  to request data from a web server.

// The XMLHttpRequest object is a developers dream, because you can:

// Update a web page without reloading the page
// Request data from a server - after the page has loaded
// Receive data from a server  - after the page has loaded
// Send data to a server - in the background

/*

	Call back functions are those which are passed as arguments to another function

*/

function loadjson(file, callback){
	var xhr = new XMLHttpRequest();
	//The onreadystatechange property 
	//specifies a function to be executed every time 
	//the status of the XMLHttpRequest object changes:
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange = function(){
		if(xhr.readyState===4 && xhr.status==200){
			//The responseText property returns 
			//the server response as a text string.
			//The text string can be used to update a web page:
			callback(xhr.responseText);
		}
	}
	xhr.send();	
}

loadjson("data.json", function(text){
	var d = JSON.parse(text);
	console.log(d);
	basic(d.details);
	trainer_details(d.trainers);
})


// We will select a div based on the class or id
var main = document.querySelector(".apssdc-details");
function basic(apssdc){
	var im=document.createElement("img");
	im.src=apssdc.image;
	im.alt="XMLHttpRequest-image";
	main.appendChild(im);

	var name = document.createElement("h1");
	name.textContent = apssdc.name;
	name.classList.add("name");
	name.setAttribute("id","name");
	main.appendChild(name);

	var age = document.createElement("p");
	age.textContent = apssdc.age;
	age.classList.add("age");
	age.setAttribute("id","age");
	main.appendChild(age);

	var courses_heading = document.createElement("h1");
	courses_heading.textContent = "APSSDC-Courses";
	courses_heading.appendChild(document.createElement("hr"));
	main.appendChild(courses_heading);

	var courses_ul = document.createElement("ul");
	for (var i =0; i<apssdc.courses.length; i++) {
		var li = document.createElement("li");
		li.textContent = apssdc.courses[i];
		courses_ul.appendChild(li);
	}
	main.appendChild(courses_ul);

}

function trainer_details(trainers){
	var heading2 = document.createElement("h1");
	heading2.textContent = "APSSDC-Trainers";
	heading2.appendChild(document.createElement("hr"));
	main.appendChild(heading2);
	var table = document.createElement("table");
	var row = "<tr><td>Name</td><td>Phone</td><td>Email</td><td>Salary</td><td>Experience</td></tr>";
	for (var i = 0; i < trainers.length; i++) {
		row+= "<tr><td>"+trainers[i].name+"</td><td>"+trainers[i].phone+"</td><td>"+trainers[i].email+"</td><td>"+trainers[i].salary+"</td><td>"+trainers[i].experience+"</td></tr>";
	}
	table.innerHTML=row;
	main.appendChild(table);
}