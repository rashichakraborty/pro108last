function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
     classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ZcanS3uHb/model.json",modelReady);

}

function modelReady()
{
    var myAudio = new Audio('Welcome.ogg');

    myAudio.play();

    classifier.classify(gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255 + 1);
        random_number_g = Math.floor(Math.random()*255 + 1);
        random_number_b = Math.floor(Math.random()*255 + 1);

        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label; 
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %"; 
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")"; 
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    
        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label; 
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %"; 
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

 
if (results[0].label_result == "DOG") 
{ img.src = 'dog.jfif'; 
 }
 else if (results[0].label_result == "COCK") 
 { img.src = 'cock.jfif';
   }
 else if (results[0].label_result == "CAT")
  { img.src = 'cat.jfif';
    }
 else IF (result[0].label_result == "TIGER")
 { img.src = 'tiger.jfif';
   } 
}
 }