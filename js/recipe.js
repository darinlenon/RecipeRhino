let url_string = window.location.href
let url = new URL(url_string);
let id = url.searchParams.get("id");

let recipe_arr = recipes.filter(rec => rec.id == id)

function setUpRatings(rating) {
    // Add rating
    $("#rating").html(rating ? ('(' + rating + ' / 5)') : '');

    // Set up rating images
    var rating_html_container = $("#rating_container");
    
    // ex: 4.7

    let rating_decimal = rating % 1 // ex: 0.7
    rating_decimal = Math.round(rating_decimal * 10) / 10; // round number to nearest tenth
    let rating_whole = rating - rating_decimal // ex: 4

    for(var i = 0; i < rating_whole; i++) {
        rating_html_container.append( 
            '<span class="rating-icons">' +
                '<svg class="icon-container" width="25" height="19" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 19">' +
                    '<g>' +
                        '<title>background</title>' +
                        '<rect fill="none"  height="21" width="27" y="-1" x="-1"/>' +
                    '</g>' +
                    '<g>' +
                        '<title>Layer 1</title>' +
                        '<path class="icon-svg"  d="m24.671816,17.625433c0,0.438 -0.286999,0.801001 -0.681,0.935001c-0.095001,0.036999 -0.198002,0.064999 -0.318001,0.064999l-16.000998,0c-0.553,0 -1,-0.448 -1,-1c0,-0.553999 0.447,-1 1,-1l14.950999,0c-0.500999,-5.053999 -4.764997,-9 -9.950999,-9c-5.523,0 -10,4.477001 -10,10c0,0 0.063,1 -1,1c-1.062,0 -1,-1 -1,-1c0,-5.769999 4.071,-10.581999 9.495001,-11.734999c-0.306002,-0.52 -0.495001,-1.117001 -0.495001,-1.765001c0,-1.933999 1.566999,-3.499999 3.5,-3.499999c1.931999,0 3.499,1.567 3.499,3.499999c0,0.739 -0.232998,1.423 -0.624998,1.989c4.984999,1.459 8.625998,6.056 8.625998,11.511l0,0zm-11.499,-15c-0.828999,0 -1.500999,0.670001 -1.500999,1.499001c0,0.827999 0.672001,1.5 1.500999,1.5c0.828001,0 1.499001,-0.672001 1.499001,-1.5c0,-0.829 -0.671,-1.499001 -1.499001,-1.499001l0,0z" clip-rule="evenodd" fill-rule="evenodd"/>' +
                    '</g>' +
                '</svg>' +
            '</span>'
        );
    };

    if (rating_decimal < 0.5) {
        //show half picture
    } else {
        //show full
        rating_html_container.append( 
            '<span class="rating-icons">' +
                '<svg class="icon-container" width="25" height="19" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 19">' +
                    '<g>' +
                        '<title>background</title>' +
                        '<rect fill="none"  height="21" width="27" y="-1" x="-1"/>' +
                    '</g>' +
                    '<g>' +
                        '<title>Layer 1</title>' +
                        '<path class="icon-svg"  d="m24.671816,17.625433c0,0.438 -0.286999,0.801001 -0.681,0.935001c-0.095001,0.036999 -0.198002,0.064999 -0.318001,0.064999l-16.000998,0c-0.553,0 -1,-0.448 -1,-1c0,-0.553999 0.447,-1 1,-1l14.950999,0c-0.500999,-5.053999 -4.764997,-9 -9.950999,-9c-5.523,0 -10,4.477001 -10,10c0,0 0.063,1 -1,1c-1.062,0 -1,-1 -1,-1c0,-5.769999 4.071,-10.581999 9.495001,-11.734999c-0.306002,-0.52 -0.495001,-1.117001 -0.495001,-1.765001c0,-1.933999 1.566999,-3.499999 3.5,-3.499999c1.931999,0 3.499,1.567 3.499,3.499999c0,0.739 -0.232998,1.423 -0.624998,1.989c4.984999,1.459 8.625998,6.056 8.625998,11.511l0,0zm-11.499,-15c-0.828999,0 -1.500999,0.670001 -1.500999,1.499001c0,0.827999 0.672001,1.5 1.500999,1.5c0.828001,0 1.499001,-0.672001 1.499001,-1.5c0,-0.829 -0.671,-1.499001 -1.499001,-1.499001l0,0z" clip-rule="evenodd" fill-rule="evenodd"/>' +
                    '</g>' +
                '</svg>' +
            '</span>'
        );
    }
}

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

    setUpRatings(rec.rating);

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


    // Set up instructions
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

    
    // Set up tips
    var tips_var_html_list = $("#tips_var_list");
    let tips_var = rec.tips_var;

    for(var i = 0; i < tips_var.length; i++) {

        var tip = tips_var[i];
        var add_check = false;

        if (tip[0] == '^') {
            add_check = true;
            tip = tip.substring(1);
        }

        tips_var_html_list.append( 
            '<li class="' + (add_check ? 'check-yes' : '') + '">' +
                '<p>' +
                tip +
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