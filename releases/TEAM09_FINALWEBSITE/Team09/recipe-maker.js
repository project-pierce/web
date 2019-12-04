function showImage(event) {
    previewImage = document.getElementById("previewImage");
    previewImage.src = URL.createObjectURL(event.target.files[0]);
};

function displayNewRecipe() {
    meal = "Meal: " + document.getElementById('meal').value + "<br>"
    recipe_name = document.getElementById('recipe-name').value + "<br>"
    recipe_desc = document.getElementById('recipe-desc').value + "<br>"
    recipe_specs = ""
    for (var i=0;i<document.getElementsByClassName("spec").length;i++){
        if (document.getElementsByClassName("spec")[i].checked){
            recipe_specs += document.getElementsByClassName("spec")[i].value + " "
        }
    }
    
    document.getElementById('preview').innerHTML = meal + "<br><details open><summary>" + recipe_name + "</summary><figure><img src=" + document.getElementById("previewImage").src +"><figcaption>" + recipe_desc + "<br>" + recipe_specs + "</figcaption></figure></details>"
}
