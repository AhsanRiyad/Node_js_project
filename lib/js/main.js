// update profile page disable input and backgroundColor change js;
// performed by capturing the object using onclick event
// function removeDisabled(obj){

// 	obj.parentNode.nextSibling.nextElementSibling.disabled = false;
// 	obj.style.backgroundColor = "#51A5D0";

	
// }









// javascript onclick id getting examples solved
// very very important
function cplay(check_id)
{
	
	console.log(check_id.parentNode.nextSibling.nextSibling);
	
	// var is = mb.nextSibling;
	// var idd = is.id;
	// console.log(idd);

	//event.parentNode.style.backgroundColor = "red";
}

// know which event is fired
$("#tipo-imovel").on("click change", function(event){
    console.log(event.type + " is fired");
});




//login page validation
 $('#exampleInputEmail1').change(function(){

 	var val =  $(this).val();

 	var emailPat = /[\D]+[a-zA-Z0-9]*@[a-zA-Z]{3,8}\.{1}[a-zA-Z]{2,3}/g;
 	var result = emailPat.test(val);

 	if(result == true)
 	{
 		
 		$('#idExampleInputEmail1Small').text('Email is Valid');
 		$('#idExampleInputEmail1Small').css({'color' : 'green' , 'font-weight' : 'bold'  });
 	}else{
 		
 		$('#idExampleInputEmail1Small').text('Invalid Email');
 		$('#idExampleInputEmail1Small').css({'color' : 'red' , 'font-weight' : 'bold'  });
 	}



 });

var pass1, pass2;
$('#exampleInputPassword1').change(function(){
	pass1 = $(this).val();
	
})

$('#exampleInputPassword2').change(function(){
	pass2 = $(this).val();

	if(pass1!=pass2){
		$('#idexampleInputPassword1').text('password not matched');
 		$('#idexampleInputPassword1').css({'color' : 'red' , 'font-weight' : 'bold'  });
	}
	else if(pass1==pass2) {
		$('#idexampleInputPassword1').text('Password*');
 		$('#idexampleInputPassword1').css({'color' : 'black' , 'font-weight' : 'normal'  });
	}


})

 //registration page validation
