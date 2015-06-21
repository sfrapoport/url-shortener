//Click handler for the button:

var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", shorten);

function shorten() {
    var forShortened = document.getElementById("forShortenedUrl");
    var url = document.getElementById("toshorten").value;
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function displayShortened() {
        var response = this.responseText;
        forShortened.innerHTML = response;
    }
    httpRequest.open('POST', 'http://localhost:3000/shorten', true);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send('toshorten=' + url);
} 


