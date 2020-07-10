document.getElementById("replace-button").addEventListener("click", saveText);
document.getElementById("randomize-button").addEventListener("click", randomizeText);
document.getElementById("reset-button").addEventListener("click", resetQuery);

function saveText() {
    let customText = document.getElementById("wordInput").value;
    let isRandom = 0;
    chrome.storage.local.set({textQuery: {isRandom, customText}});
    chrome.tabs.getSelected(null, function(tab) {
        var code = 'window.location.reload();';
        chrome.tabs.executeScript(tab.id, {code: code});
    });

}
function randomizeText() {
    let isRandom = 1;
    let customText = "";
    chrome.storage.local.set({textQuery: {isRandom, customText}});
    chrome.tabs.getSelected(null, function(tab) {
        var code = 'window.location.reload();';
        chrome.tabs.executeScript(tab.id, {code: code});
    });
}
function resetQuery() {
    chrome.storage.local.set({textInput: ""});
    chrome.tabs.getSelected(null, function(tab) {
        var code = 'window.location.reload();';
        chrome.tabs.executeScript(tab.id, {code: code});
    });

}