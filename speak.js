// Function to announce the YouTube video name
function sayYouTubeVideoName() {
    // Check if it is a youtube video
    if (window.location.href.indexOf("youtube") > 0) {
        try {
            // Get the title
            var videoTitle = document.getElementById("eow-title").innerHTML.trim();
            
            // Construct the message
            var message = new SpeechSynthesisUtterance();
            message.voiceURI = "native";
            message.lang = "en-US";
            message.volume = 1;
            message.text = videoTitle.replace("ft.", "featuring");

            // Speak!
            speechSynthesis.speak(message);
        } 
        catch(err) {
            console.log("No title to be read...");
        }
    }
}

// Say the video name once the page has loaded
(document.body || document.documentElement).addEventListener('transitionend', 
  function(/*TransitionEvent*/ event) { 
    if (event.propertyName === 'width' && event.target.id === 'progress') { 
      sayYouTubeVideoName();
    } 
  }, true);

// After page load 
sayYouTubeVideoName();  

