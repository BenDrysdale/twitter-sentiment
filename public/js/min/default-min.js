function submit(e){var t=e.which||e.keyCode;13===t&&postSearch()}function postSearch(){var e={query:elSearch.value};console.log(e);var t=new XMLHttpRequest;t.onload=function(){200===t.status&&(response=JSON.parse(t.responseText),tweetHistory=tweetHistory.concat(response),console.log(tweetHistory),setTimeout(function(){postSearch(),console.log("stream starting")},5e3))},t.open("POST","/api",!0),t.setRequestHeader("Content-Type","application/json;charset=UTF-8"),t.send(JSON.stringify(e))}function populate(e){var t=document.getElementById("stream"),o=document.createElement("p");t.appendChild(o),console.log(e)}var elSearch=document.getElementById("search"),elSubmit=document.getElementById("submit"),tweetHistory=[];elSubmit.addEventListener("click",postSearch,!0),elSearch.addEventListener("keypress",submit,!0);