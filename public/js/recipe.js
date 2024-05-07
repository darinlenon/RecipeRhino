let url_string = window.location.href
let url = new URL(url_string);
let id = url.searchParams.get("id");

let recipe_arr = recipes.filter(rec => rec.id == id)



if (recipe_arr.length) {
    
    let rec = recipe_arr[0];

    // Row 3 (Recipe Title)
    $("#recipe_title").html(rec.name);

    // Row 4 (Ratings)
    setUpRatings(rec.rating);

    function setUpRatings(rating) {
        // Add rating text
        $("#rating_text").html(rating ? (' ' + rating + ' / 5.0 ') : '');
    
        // Set up rating images
        var rating_html_container = $("#rating_images");
        
        // ex: 4.7
    
        let rating_decimal = rating % 1 // ex: 0.7
        rating_decimal = Math.round(rating_decimal * 10) / 10; // round number to nearest tenth
        let rating_whole = rating - rating_decimal // ex: 4
    
        if (rating_decimal <= 0.25) {
            rating_html_container.prepend( 
                '<img src="../images/rating25_icon.png">'
            );
        } else if (rating_decimal > 0.25 && rating_decimal <= 0.5) {
            rating_html_container.prepend( 
                '<img src="../images/rating50_icon.png">'
            );
        } else if (rating_decimal > 0.5 && rating_decimal <= 0.75) {
            rating_html_container.prepend(
                '<img src="../images/rating75_icon.png">'
            );
        } else {
            rating_html_container.prepend( 
                '<img src="../images/rating_icon.png">'
            );
        }
    
        for(var i = 0; i < rating_whole; i++) {
            rating_html_container.prepend( 
                '<img src="../images/rating_icon.png">'
            );
        };        
    }
    
    // Row 5 (Main Pic & Details)
    $("#recipe_img").attr("src", "../images/recipe_images/" + rec.recipe_img);
    $("#time_total_image").attr("src", "../images/detail_images/" + rec.time_total_image);
    $("#yield_image").attr("src", "../images/detail_images/" + rec.yield_image);
    $("#prep_time_image").attr("src", "../images/detail_images/" + rec.prep_time_image);
    $("#cook_time_image").attr("src", "../images/detail_images/" + rec.cook_time_image);
    $("#temp_image").attr("src", "../images/detail_images/" + rec.temp_image);

    // Row 6 (Details2 & Print Button)
    $("#cuisine").attr("src", "../images/detail_images/" + rec.cuisine);
    $("#course").attr("src", "../images/detail_images/" + rec.course);
    $("#skill_level").attr("src", "../images/detail_images/" + rec.skill_level);
    // Set pdf href
    $("#pdf").attr("href", "../images/recipe_pdfs/" + rec.pdf + ".pdf");

    // Row 7 (Blurb)
    $("#recipe_blurb").html(rec.recipe_blurb);

    // Row 8 (Ingredients & Nutritional Facts)
    // Left Column for Ingredients
    var ingredient_html_list = $("#ingredients_list");
    let ingredients = rec.ingredients;

    for(var i = 0; i < ingredients.length; i++) {
        ingredient_html_list.append( 
            '<li>' +
                '<label>' +
                    '<input type="checkbox"/>' +
                    ingredients[i] + 
                '</label>' +
            '</li>' 
        );
    };

    // Right Column for Nutritional Facts
    $("#serving_size").html(rec.serving_size);
    $("#total_servings").html(rec.total_servings);
    $("#calories").html(rec.calories);
    $("#carbohydrates").html(rec.carbohydrates + 'g');
    $("#total_fat").html(rec.total_fat + 'g');
    $("#sodium").html(rec.sodium + 'mg');
    $("#protein").html(rec.protein + 'g');
    $("#sugar").html(rec.sugar + 'g');
    $("#fiber").html(rec.fiber + 'g');

    let fifth_box_html = $("#5th-box");

    console.log(rec)

    if (rec.fiber) {
        fifth_box_html.append( 
            '<div class="separator-post"></div>' +
            '<div class="nutrition-detail">' +
                '<div class="left-box">' +
                    'Fiber' +
                    '<br/>' +
                    '<span id="fiber">' + rec.fiber + 'g' + '</span>' +
                '</div>' +
                '<div class="right-box">' +
                '</div>' +
            '</div>'
        );
    }
    

    $("#fiber").html(rec.fiber ? rec.fiber + 'g' : '');



    // Row 9 (Instructions)
    var instructions_html_list = $("#instructions_list");
    let instructions = rec.instructions;

    for(var i = 0; i < instructions.length; i++) {
        instructions_html_list.append( 
            '<div class="step-single">' +
                '<div class="instructions_steps">Step ' + (i+1) + '.</div>' +
                '<p>' + instructions[i] + '</p>' + 
            '</div>' 
        );
    };

    // Row 10 (Tips & Variations)
    var tips_var_html_list = $("#tips_var_list");
    let tips_var = rec.tips_var;

    for (var i = 0; i < tips_var.length; i++) {
        var tip = tips_var[i];
        var add_check = false;

        // if (tip[0] == '^') {
        //     add_check = true;
        //     tip = tip.substring(1);
        // }

        tips_var_html_list.append(
            '<li class="tips_flexrow">' +
            '<div class="tips_text">' + // check mark div
            '<span class="tips_text"><i class="fa fa-check"></i></span>' +
            '</div>' +
            '<div class="tips_text i">' + // tip text div
            '<p>' +
            tip +
            '</p>' +
            '</div>' +
            '</li>'
        );
    };


    // Row 12 (Tags)
    var tags_html_list = $("#tags_list");
    let tags = rec.tags;

    for(var i = 0; i < tags.length; i++) {
        tags_html_list.append( 
            '<li class="tag">' +
                tags[i] +
            '</li>'
        );
    };


    

}