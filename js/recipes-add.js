let url_string = window.location.href
let url = new URL(url_string);
let id = url.searchParams.get("id");

let recipe_arr = recipes.filter(rec => rec.id == id)

if (recipe_arr.length) {
    
    let rec = recipe_arr[0];

    // Add title
    $("#recipe_title").html(rec.name);


    // Add other info
    $("#total_time").html(rec.total_time);
    $("#yield").html(rec.yield);
    $("#prep_time").html(rec.prep_time);
    $("#cook_time").html(rec.cook_time);
    $("#temp").html(rec.temp + '°');

    $("#skill_level").html(rec.skill_level);
    $("#cuisine_text").html(rec.cuisine);
    $("#course_text").html(rec.course);


    // Set up ingredients
    var ingredient_html_list = $("#ingredients_list");
    let ingredients = rec.ingredients;

    for(var i = 0; i < ingredients.length; i++) {
        ingredient_html_list.append( 
            '<li>' +
                '<label>' +
                    '<input type="checkbox" disabled/>' +
                    ingredients[i] + 
                '</label>' +
            '</li>' 
        );
    };


    // Set up steps
    var steps_html_list = $("#steps_list");
    let steps = rec.steps;

    for(var i = 0; i < steps.length; i++) {
        steps_html_list.append( 
            '<div class="step-single">' +
                '<div class="step-detail">' +
                    '<h3>Step ' + (i+1) + '.</h3>' +
                    '<p>' + steps[i] + '</p>' + 
                '</div>' +
            '</div>' 
        );
    };


    // Set image src
    $("#recipe_img").attr("src","images/recipe_images/chocolate-chip-cookies.png");

}