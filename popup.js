document.getElementById("replace-button").addEventListener("click", saveText);

document.getElementById("reset-button").addEventListener("click", resetQuery);

function saveText() {
        let customText = document.getElementById("wordInput").value;
        chrome.storage.local.set({textInput: customText});
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