chrome.storage.local.get(['textQuery'], function (result) {
    var elements = document.getElementsByTagName('*');
    // console.log("txtQ",result.textQuery);
    if (result.textQuery.isRandom) {
        // You can add more words here
        var dictionary = ["pikachu","puppies", "Sunshine", "Reduction in Pollution", "kittens"];
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];

            for (var j = 0; j < element.childNodes.length; j++) {
                var node = element.childNodes[j];
                // Picks a random word from dictionary
                if (node.nodeType === 3) {
                    var text = node.nodeValue;
                    var replacedText = text.replace(/coronavirus/gi, dictionary[Math.floor(Math.random()*dictionary.length)]);
                    var replacedText = replacedText.replace(/covid-19/gi, dictionary[Math.floor(Math.random()*dictionary.length)]);
                    var replacedText = replacedText.replace(/Coronavirus/gi, dictionary[Math.floor(Math.random()*dictionary.length)]);
                    var replacedText = replacedText.replace(/Covid-19/gi, dictionary[Math.floor(Math.random()*dictionary.length)]);
                    var replacedText = replacedText.replace(/COVID-19/gi, dictionary[Math.floor(Math.random()*dictionary.length)]);
                    var replacedText = replacedText.replace(/pandemic/gi, dictionary[Math.floor(Math.random()*dictionary.length)]);
                    var replacedText = replacedText.replace(/death/gi, dictionary[Math.floor(Math.random()*dictionary.length)]);
                    var replacedText = replacedText.replace(/disease/gi, dictionary[Math.floor(Math.random()*dictionary.length)]);

                    if (replacedText !== text) {
                        element.replaceChild(document.createTextNode(replacedText), node);
                    }
                }
            }
        }        
    } else {
        var s = result.textQuery.customText;
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
    }
});

let images = document.getElementsByTagName('img');
for (let i = 0; i < images.length; i++) {
    chrome.runtime.sendMessage({
        msg: 'image',
        index: i
    }, function ({
        data,
        index
    }) {
        images[index].src = data.link;
    });
}