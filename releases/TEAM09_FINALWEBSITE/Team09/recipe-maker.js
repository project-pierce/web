function showImage(event) {
    previewImage = document.getElementById("previewImage");
    // Change the path of the preview image to the uploaded element's URL so that the image is previewed when it is uploaded.
    previewImage.src = URL.createObjectURL(event.target.files[0]);
}

function displayNewRecipe() {
    // Show the meal as the header for the recipe preview
    meal = "<h1>" + document.getElementById('meal').value + "</h1>"
    recipe_name = document.getElementById('recipe-name').value + "<br>"
    recipe_desc = document.getElementById('recipe-desc').value + "<br>"
    recipe_specs = ""
    // Iterate through all checked specifications for the recipe so that only the checked ones are displayed in the preview recipe
    for (var check=0;check<document.getElementsByClassName("spec").length;check++){
        if (document.getElementsByClassName("spec")[check].checked){
            recipe_specs += document.getElementsByClassName("spec")[check].value + " "
        }
    }
    
    // Preview the whole preview as a new element
    document.getElementById('preview').innerHTML = meal + "<br><details open><summary>" + recipe_name + "</summary><figure><img src=" + document.getElementById("previewImage").src +"><figcaption>" + recipe_desc + "<br>" + recipe_specs + "</figcaption></figure></details>"
}
