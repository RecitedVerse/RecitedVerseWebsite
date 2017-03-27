var recGrid = $('.recitations_grid');
var recList = $('.recitations_list');

// Load the current user.
if (typeof(Storage) !== "undefined") { currentUser = JSON.parse(window.localStorage.getItem("current_user")); }

// Load all of the recitations.
fireRef.child('Recitations').child(currentUser["userID"]).on('value', function(snapshot) {
    var listOfObjects = snapshot.val();
    
    // So bascially, for each recitation in the list of recitations...
    for(var recitation in listOfObjects) {
        
        if(listOfObjects.hasOwnProperty(recitation)) {
            var recitationObject = listOfObjects[recitation];
            
            var item = "<li class='recitation_item' style='font-size:15px;'><img id='recitation_img_" + recitationObject.name + "' width='120' height='120' src='" + recitationObject.image + "' alt='image'><button class='goToBtn' id='goToPoemPageBtn_" + recitationObject.name + "' style='color:black;'>" + recitationObject.title + "</button></li>";
            recList.append(item);
            
            var recImage = document.getElementById('recitation_img_' + recitationObject.name);
            var goToBtn = document.getElementById('goToPoemPageBtn_' + recitationObject.name);
            recImage.onclick = function() {
                goToPoemPageWithRecitation(recitationObject);
            };
            goToBtn.onclick = function() {
                goToPoemPageWithRecitation(recitationObject);
            };
        }
    }

}); 


function goToPoemPageWithRecitation(recitation) {
    // Quickly set the value of the recitation you want to look at.
    if (typeof(Storage) !== "undefined") {
        window.sessionStorage.setItem("recitation_to_look_at", JSON.stringify(recitation));
        document.location = "https://recitedverse.herokuapp.com/poem";
    }
};