function validateForm() {
    var name = document.getElementById("name").value;
	var lastname = document.getElementById("lastname").value;
	var number = document.getElementById("number").value;
	
	var nameval = /^[a-zA-ZÇŞĞÜÖİçşğüöı]+$/g;
	var lastnameval = /^[a-zA-ZÇŞĞÜÖİçşğüöı]+$/g;
	var numberval = /^[20][0-9]{2,}[\.][0-9]{2,}[\.][0-9]{2,}[\.][0-9]{3,}$/;


			if (name == null || name == "") {
                alert("Name is empty");
            }
            if (lastname == null || lastname == "") {
                alert("Last name is empty");
            }
          
            if (number == null || number == "") {
                alert("Number is empty");
            }
            
          
            if (!name.match(nameval)){
                alert("Enter name with alpha characters.");
            }
            if (!lastname.match(lastnameval)){
                alert("Enter last name with alpha characters.");
            }
            if (!number.match(numberval)){
                alert("Enter number with the right format.");
            }
			
			
			if(!name.match(nameval) || !lastname.match(lastnameval) || !number.match(numberval)){
				return false;	
			}
			
			if(name.match(nameval) || lastname.match(lastnameval) || number.match(numberval)){
			{window.open("quiz.html")}
			}
}