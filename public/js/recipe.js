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
    $("#rating_text").html(rating ? (' ' + (Math.round(rating * 10) / 10).toFixed(1) + ' / 5.0 ') : '');

    // Set up rating images
    var rating_html_container = $("#rating_images");
    
    // ex: 4.7
    let rating_decimal = rating % 1; // ex: 0.7
    rating_decimal = Math.round(rating_decimal * 10) / 10; // round number to nearest tenth
    let rating_whole = Math.floor(rating); // ex: 4

    if (rating_whole === 5) {
        // Rating is exactly 5, display 5 full rating images
        for (var i = 0; i < 5; i++) {
            rating_html_container.prepend( 
                '<img src="../images/rating_icon.png">'
            );
        }
    } else {
        if (rating_decimal > 0.01 && rating_decimal <= 0.33) {
            rating_html_container.prepend( 
                '<img src="../images/rating25_icon.png">'
            );
        } else if (rating_decimal > 0.3 && rating_decimal <= 0.6) {
            rating_html_container.prepend( 
                '<img src="../images/rating50_icon.png">'
            );
        } else if (rating_decimal > 0.6 && rating_decimal <= 0.9) {
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
        }
    }     
}
    
    // Row 5 (Main Pic & Details)
    $("#recipe_img").attr("src", "../images/recipe_images/" + rec.recipe_img);
    $("#time_total_image").attr("src", "../images/detail_images/tt" + rec.time_total_image +".jpg");
    $("#yield_image").attr("src", "../images/detail_images/s" + rec.yield_image +".jpg");
    $("#prep_time_image").attr("src", "../images/detail_images/pt" + rec.prep_time_image +".jpg");
    $("#cook_time_image").attr("src", "../images/detail_images/ct" + rec.cook_time_image +".jpg");
    $("#temp_image").attr("src", "../images/detail_images/t" + rec.temp_image +".jpg");

    // Row 6 (Details2 & Print Button)
    $("#cuisine").attr("src", "../images/detail_images/cu_" + rec.cuisine +".jpg");
    $("#course").attr("src", "../images/detail_images/co_" + rec.course +".jpg");
    $("#skill_level").attr("src", "../images/detail_images/sk_" + rec.skill_level +".jpg");
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

    if (tip.startsWith('^')) {
        tip = tip.substring(1);
        tips_var_html_list.append(
            '<li class="tips_flexrow">' +
            '<div class="tips_text">' +
            '<span class="tips_text"><i class="fa fa-check"></i></span>' +
            '</div>' +
            '<div class="tips_text">' +
            '<p>' + tip + '</p>' +
            '</div>' +
            '</li>'
        );
    } else {
        tips_var_html_list.append(
            '<li class="tips_flexrow">' +
            '<div class="tips_text"></div>' +
            '<div class="tips_text extra_spacing">' + // apply the .extra_spacing class
            '<p>' + tip + '</p>' +
            '</div>' +
            '</li>'
        );
    }
}

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