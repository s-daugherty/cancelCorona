
chrome.storage.local.get(['textInput'], function(result) {
    var elements = document.getElementsByTagName('*');
    var s = result.textInput;
    if (s !== "" && typeof s !== "undefined") {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
        
            for (var j = 0; j < element.childNodes.length; j++) {
                var node = element.childNodes[j];
        
                if (node.nodeType === 3) {
                    var text = node.nodeValue;
                    var replacedText = text.replace(/coronavirus/gi, s);
                    var replacedText = replacedText.replace(/covid-19/gi, s);
                    var replacedText = replacedText.replace(/Coronavirus/gi, s);
                    var replacedText = replacedText.replace(/Covid-19/gi, s);
                    var replacedText = replacedText.replace(/COVID-19/gi, s);
        
                    if (replacedText !== text) {
                        element.replaceChild(document.createTextNode(replacedText), node);
                    }
                }
            }
        }
    }    
});

let images = document.getElementsByTagName('img');
for(let i = 0; i < images.length; i++){
  chrome.runtime.sendMessage({msg: 'image', index: i}, function({data, index}){
    images[index].src = data.link;
  });
}
