let replaceButton = document.getElementById("replace-button");
replaceButton.addEventListener("click", saveText);

function saveText() {
    let customText = document.getElementById("wordInput").value;
    chrome.storage.local.set({textInput: customText});
}