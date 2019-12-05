function showImage(event) {
    previewImage = document.getElementById("previewImage");
    previewImage.src = URL.createObjectURL(event.target.files[0]);
}

function displayNewRecipe() {
    meal = "<h1>" + document.getElementById('meal').value + "</h1>"
    recipe_name = document.getElementById('recipe-name').value + "<br>"
    recipe_desc = document.getElementById('recipe-desc').value + "<br>"
    recipe_specs = ""
    for (var check=0;check<document.getElementsByClassName("spec").length;check++){
        if (document.getElementsByClassName("spec")[check].checked){
            recipe_specs += document.getElementsByClassName("spec")[check].value + " "
        }
    }
    
    document.getElementById('preview').innerHTML = meal + "<br><details open><summary>" + recipe_name + "</summary><figure><img src=" + document.getElementById("previewImage").src +"><figcaption>" + recipe_desc + "<br>" + recipe_specs + "</figcaption></figure></details>"
}
