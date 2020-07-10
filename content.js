var prompted = localStorage.getItem('prompted') || '';
if (prompted != 'yes') {
    var s = prompt("Enter the word you'd like 'Coronavirus' to be replaced with");
    localStorage.setItem('prompted', 'yes');
    localStorage.setItem('replacement', s);
}
replacement = localStorage.getItem('replacement');

var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/coronavirus/gi, replacement);
            var replacedText = replacedText.replace(/covid-19/gi, replacement);
            var replacedText = replacedText.replace(/Coronavirus/gi, replacement);
            var replacedText = replacedText.replace(/Covid-19/gi, replacement);

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
