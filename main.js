var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start(){
recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    console=event.results[0][0].transcript.toLowerCase();
    console.log(Content);

if(content=="selfie"){
    speak();
}

}

speak_data = "Tomando la próxima selfie en 5 segundos";
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);


setTimeout(function()
{ 
    img_id = "selfie1";
    take_snapshot(); 
    speak_data = "Tomando la próxima selfie en 10 segundos";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

  }, 5000); 
   





  

  setTimeout(function()
  { 
      img_id = "selfie4";
      take_snapshot(); 
      
  
    }, 10000); 
     



