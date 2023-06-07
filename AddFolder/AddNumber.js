
$(document).ready(function(){
    // alert("Thank you chandu")
$("#btn").click(function(){
    var a=$("#num1").val();
    var b=$("#num2").val();
    console.log(a);
    if(a=="" || b=="")
        $("#mssg").text("please enter some numbers").css('color','red')
    
    else{
    $("#ansr").text(parseInt(a)+parseInt(b));
    $("#mssg").text(parseInt(a)+parseInt(b)).css('color','green')
    }
})
    })
