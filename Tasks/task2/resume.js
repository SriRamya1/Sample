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

loadjson("resume.json", function(text){
	var d = JSON.parse(text);
    card1(d.details);
    card2(d.details2);

	
})

var main= document.querySelector(".resume-details");
var mdiv=document.createElement("div");
mdiv.classList.add("card-view");

function card1(details)
{
    var cdiv1=document.createElement("div");
    cdiv1.classList.add("card1");
    
    var image=document.createElement("img");
    image.src=details.image;
    image.alt="Image";
    cdiv1.appendChild(image);

    var name=document.createElement("h2");
    name.textContent = details.name;
    cdiv1.appendChild(name);

    var email=document.createElement("p");
    var strong = document.createElement("strong");
    strong.textContent="Email:";
    email.appendChild(strong);
    
    var span=document.createElement("span");
    span.textContent = details.email;
    email.appendChild(span);    
    cdiv1.appendChild(email);

    var phone=document.createElement("p");
    var strong = document.createElement("strong");
    strong.textContent="Phone:";
    phone.appendChild(strong);
    
    var span=document.createElement("span");
    span.textContent = details.phone;
    phone.appendChild(span);    
    cdiv1.appendChild(phone);

    var address=document.createElement("p");
    var strong = document.createElement("strong");
    strong.textContent="Address:";
    address.appendChild(strong);
    
    var span=document.createElement("span");
    span.textContent = details.address;
    address.appendChild(span);    
    cdiv1.appendChild(address);

    mdiv.appendChild(cdiv1);
    

}
function card2(details)
{
    
    var cdiv2=document.createElement("div");
    cdiv2.classList.add("card2");

    var dl=document.createElement("dl");
  

    var dt=document.createElement("dt");
    dt.classList.add("dt");
    dt.textContent="CAREER OBJECTIVE:"
    dl.appendChild(dt);
    var dd=document.createElement("dd");
    dd.textContent=details.career;
    dl.appendChild(dd);
    
    var hr=document.createElement("hr");
    dl.appendChild(hr);

    var dive=document.createElement("div");
    dive.classList.add("st");
    var dt=document.createElement("dt");
    dt.classList.add("dt");
    dt.textContent="EDUCATION QUALIFICATION:"
    dl.appendChild(dt);
   
    tab_div = document.createElement("div");
    tab_div.style = "overflow-x:auto;";
    dl.appendChild(tab_div);

    var table = document.createElement("table");
	var row = "<tr><td>Course</td><td>Institution</td><td>University/Board</td><td>Percentage</td><td>Year of completion</td></tr>";
	for (var i = 0; i < details.education.length; i++) {
		row+= "<tr><td>"+details.education[i].course+"</td><td>"+details.education[i].institution+"</td><td>"+details.education[i].university+"</td><td>"+details.education[i].per+"</td><td>"+details.education[i].year+"</td>";
    }
    
    table.innerHTML=row;
    dive.appendChild(table);
    dl.appendChild(dive);
    
    var hr=document.createElement("hr");
    dl.appendChild(hr);

    var dt=document.createElement("dt");
    dt.classList.add("dt");
    dt.textContent="TECHNICAL SKILLS:"
    dl.appendChild(dt);

    var pl=document.createElement("dd");
    pl.textContent="Programming Languages:"+details.technical.p;
    dl.appendChild(pl);

    var pl=document.createElement("dd");
    pl.textContent="Web Technologies:"+details.technical.w;
    dl.appendChild(pl);

    var pl=document.createElement("dd");
    pl.textContent="Databases:"+details.technical.d;
    dl.appendChild(pl);

    var hr=document.createElement("hr");
    dl.appendChild(hr);

    var dt=document.createElement("dt");
    dt.classList.add("dt");
    dt.textContent="ACHIEVEMENTS:"
    dl.appendChild(dt);

    var pl=document.createElement("dd");
    pl.textContent="->"+details.achievements.one;
    dl.appendChild(pl);
    var pl=document.createElement("dd");
    pl.textContent="->"+details.achievements.two;
    dl.appendChild(pl);
    var pl=document.createElement("dd");
    pl.textContent="->"+details.achievements.three;
    dl.appendChild(pl);

    var hr=document.createElement("hr");
    dl.appendChild(hr);


    var dt=document.createElement("dt");
    dt.classList.add("dt");
    dt.textContent="HOBBIES:"
    dl.appendChild(dt);
    
    var pl=document.createElement("dd");
    pl.textContent=details.hobbies.one;
    dl.appendChild(pl);
    var pl=document.createElement("dd");
    pl.textContent=details.hobbies.two;
    dl.appendChild(pl);


    cdiv2.appendChild(dl);
    mdiv.appendChild(cdiv2);
    main.appendChild(mdiv);
}