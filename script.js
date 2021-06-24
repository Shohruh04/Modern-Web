$("#button").click(function(){
      
    var name = $("#name").val();
    var password = $("#password").val();
    if( name == ""){
        $("#first").html("<p id='first'>Login qatorini toldiring!</p> ");
    }

    if(password == ""){
        $("#second").html("<p id='second'>Password qatorini toldiring!</p>");
    }

    if(name !== "" && password !== ""){
        $("#first").css("display:none");
        $("#second").css("display:none");
    }
});