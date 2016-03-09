function parse () {
        var http = new XMLHttpRequest();
        var path = "data.json";
        // var path = "https://messagehub.herokuapp.com/messages.json"; // Does not work
        

        http.onreadystatechange = function() {
                if (http.readyState == 4 && http.status == 200) {
                        var messages = JSON.parse(http.responseText);
                        var mLoc = document.getElementById("messages");
                        messages.forEach(function (item, index, array) { 
                                mLoc.innerHTML += "<span class=\"message\">" + item.content + 
                                        "<span class=\"author\">" + item.username + "</span></span><br/><br/>";
                                });
                        
                }       
        };

        http.open("GET", path, true);
        http.send();
}