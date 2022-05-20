$(document).ready(function(){
    alert("You can only select your answer once. so be careful when you are selecting")
    let a = 0;
    // The code for the wrong and right answer
    $(".q1").click(function(){

        if(this.value=="Abuja"){

            $("#cor1").html("Correct Answer");
            a++;
            console.log(a);
            $("#cor1").css({"color" : "green"})
        }
        else{
            $("#cor1").html("Wrong Answer").css("color", "red");
        }
        $(".q1").attr('disabled' , true);
    })





    // question 2
    $(".q2").click(function(){
        if(this.value=="HyperText Mark-up Language"){
           a++
            $("#cor2").html("Correct answer").css({"color" : "green"})

        }
        else{
            $("#cor2").html("wrong answer").css("color" , "red");
        }

        $(".q2").attr('disabled' , true);
    })

    $(".q3").click(function(){
        if(this.value=="Debugging is the process of finding and removing errors in a program"){
            a++
            $("#cor3").html("Correct answer").css({"color" : "green"})

        }
        else{
            $("#cor3").html("wrong answer").css("color" , "red");
        }
        $(".q3").attr('disabled' , true);
    })

    $(".q4").click(function(){
        if(this.value=="Off loops"){
            a++
            $("#cor4").html("Correct answer").css({"color" : "green"})

        }
        else{
            $("#cor4").html("wrong answer").css("color" , "red");
        }
        $(".q4").attr('disabled' , true);
    })









    var fN = prompt("Enter your First Name")

     $("#total").css("display" , "none");
    
    $("p").css("display" , "none")

    $("#final").click(function(){
        $("p").css({"display": "block"})
        $("#total").html(fN + " your total Scores: " + a + "/5" );
        $("#total").css("display" , "block")

    })
})