let url_string = window.location.href
let url = new URL(url_string);
let id = url.searchParams.get("id");

let recipe_arr = recipes.filter(rec => rec.id == id)

if (recipe_arr.length) {
    
    let rec = recipe_arr[0];

    // Add title
    $("#recipe_title").html(rec.name);


    // Add other info
    $("#time_total").html(rec.time_total);
    $("#time_type").html(rec.time_type + ' ');
    $("#time_label").html(rec.time_label);

    $("#yield").html(rec.yield);
    $("#yield_type").html(rec.yield_type + ' ');
    $("#yield_label").html(rec.yield_label);

    $("#prep_time").html(rec.prep_time);
    $("#prep_type").html(rec.prep_type + ' ');
    $("#prep_label").html(rec.prep_label);

    $("#cook_time").html(rec.cook_time);
    $("#cook_type").html(rec.cook_type + ' ');
    $("#cook_label").html(rec.cook_label);

    $("#temp").html(rec.temp ? (rec.temp + '°') : '');
    $("#temp_alt").html(rec.temp_alt);
    $("#temp_label").html(rec.temp_label);

    $("#skill_level").html(rec.skill_level);
    $("#cuisine_text").html(rec.cuisine);
    $("#course_text").html(rec.course);

    $("#recipe_blurb").html(rec.recipe_blurb);

    // Set up steps
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
    var instructions_html_list = $("#instructions_list");
    let instructions = rec.instructions;

    for(var i = 0; i < instructions.length; i++) {
        instructions_html_list.append( 
            '<div class="step-single">' +
                '<div class="step-detail">' +
                    '<h3>Step ' + (i+1) + '.</h3>' +
                    '<p>' + instructions[i] + '</p>' + 
                '</div>' +
            '</div>' 
        );
    };

    $("#serving_size").html(rec.serving_size);
    $("#total_servings").html(rec.total_servings);
    $("#calories").html(rec.calories);
    $("#carbohydrates").html(rec.carbohydrates + 'g');
    $("#total_fat").html(rec.total_fat + 'g');
    $("#sodium").html(rec.sodium + 'mg');
    $("#protein").html(rec.protein + 'g');
    $("#sugar").html(rec.sugar + 'g');

    
    // Set up steps
    var tips_var_html_list = $("#tips_var_list");
    let tips_var = rec.tips_var;

    for(var i = 0; i < tips_var.length; i++) {
        tips_var_html_list.append( 
            '<li>' +
                '<p>' +
                    tips_var[i] +
                '</p>' +
            '</li>' 
        );
    };


    // Set up tags
    var tags_html_list = $("#tags_list");
    let tags = rec.tags;

    for(var i = 0; i < tags.length; i++) {
        tags_html_list.append( 
            '<li class="tag-boxes">' +
                tags[i] +
            '</li>'
        );
    };


    // Set image src
    $("#recipe_img").attr("src", "images/recipe_images/" + rec.recipe_img);


    // Set pdf href
    $("#pdf_link").attr("href", "images/recipe_pdfs/" + rec.pdf + ".pdf");

}