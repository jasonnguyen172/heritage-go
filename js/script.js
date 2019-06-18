function show_password() {
    var x = document.getElementById("password");
    var y = document.getElementById("lock")
    if (x.type === "password") {
        x.type = "text";
        y.classList.remove('fa-lock')
        y.classList.add('fa-unlock-alt')
        console.log(1)
    } else {
        x.type = "password";
        y.classList.add('fa-lock')
        y.classList.remove('fa-unlock-alt')
        console.log(2)
    }
  }
$( document ).ready(function() {
    var photos = mHeritageGoService.getPhotos({limit: 2})
                 .then(photos => { console.log(photos); })
                 .catch(error => { console.log(error); });
    console.log(photos)

    for (var i = 0; i < photos.length; i++) {
        mHeritageGoService.getPhoto(photos[i])
        .then(function (photo) { console.log(photo); })
        .catch(function (error) { console.log(error); });
    }
});