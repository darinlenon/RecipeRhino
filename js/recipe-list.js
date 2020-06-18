
// Set up recipe list
var recipe_list_html = $("#recipe-list");

for(var i = 0; i < recipes.length; i++) {
    let rec = recipes[i];
    recipe_list_html.append( 
        '<div id="recipe-' + rec.id + '" class="recipe-tile">' +
            '<a href="recipe.html?id=' + rec.id + '">' +
                '<img class="recipe-tile-img" src="images/recipe_images/' + rec.recipe_img + '">' +
            '</a>' +
            '<h5 class="recipe-tile-name">' + rec.name + '</h5>' +
        '</div>'
    );
};

let text_to_show = 'Showing ' + recipes.length + ' recipes';

if (!recipes.length) {
    let text_to_show = 'No recipies';
} else if (recipes.length == 1) {
    let text_to_show = 'Showing 1 recipe';
}

$('#total-recipes').html(text_to_show);