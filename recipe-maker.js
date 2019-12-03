function makeRecipe() {
    var recipeMaker = document.getElementById("submitRecipe");

    recipeMaker.submit();
}

function showImage(event) {
    var previewImage = document.getElementById("previewImage");
    previewImage.src = URL.createObjectURL(event.target.files[0]);
};

function saveData() {
    document.cookie="fname="+document.getElementById('fname').value+"; expires=Thu, 18 Dec 2019 12:00:00 UTC";
    document.cookie="email="+document.getElementById('email').value+"; expires=Thu, 18 Dec 2019 12:00:00 UTC";

    var radios = document.getElementsByName('gender');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            document.cookie="gender="+radios[i].value+"; expires=Thu, 18 Dec 2019 12:00:00 UTC";
            break;
        }
    }

    alert('Data Saved!');
}

// alert('SAVED DATA: '+document.cookie);
