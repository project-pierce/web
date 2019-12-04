function makeRecipe() {
    var recipeMaker = document.getElementById("submitRecipe");

    recipeMaker.submit();
}

function showImage(event) {
    var previewImage = document.getElementById("previewImage");
    previewImage.src = URL.createObjectURL(event.target.files[0]);
};

function displayNewRecipe() {
    document.getElementById('display').innerHTML = document.getElementById('meal').value;
    // document.getElementById('display').innerHTML = document.getElementById('meal').value;
}
