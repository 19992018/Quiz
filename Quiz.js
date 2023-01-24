
    //Javascript code to change color of correct answer on button click
      function correctAnswerHighlighter(){
            document.querySelectorAll(".correct-answer").style.color = "red";        
          
      }

    //Javascript code to submit score.
      function result(){
        var score = 0;
        if(document.getElementById("correct1").checked){
          score++;
        } 
        if(document.getElementById("correct2").checked){
          score++;
        }
        if(document.getElementById("correct3").checked){
          score++;
        }
        
       // document.write("You have scored " + score + " !");

       document.querySelector(".popup").classList.remove("hide");

       if(document.getElementById("correct1").checked && document.getElementById("correct1").checked && document.getElementById("correct1").checked){
               document.getElementById("message").innerHTML= "You have scored " + score + " !";

             }else{
                document.getElementById("message").innerHTML= "Finish quiz first.";

             }
      }

      
