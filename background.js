chrome.tabs.query({currentWindow: true}, function(tabs) {
  for(var i = 0; i < tabs.length; i++) {
    if (tabs[i].url.indexOf("youtube") > 0) {
      chrome.tabs.sendMessage(tabs[i].id, {greeting: "hello"});
    }
  }
});