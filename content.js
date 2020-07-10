
var s = prompt("Enter the word you'd like 'Coronavirus' to be replaced with");

var elements = document.getElementsByTagName('*');

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

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
