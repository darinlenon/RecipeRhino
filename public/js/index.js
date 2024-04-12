//Add items to featured item
$("#featured-pic").attr("src", "images/recipe_images/" + featured.recipe_img)
$("#featured_title").html(featured.name)
$("#featured_difficulty").html(featured.skill_level)
$("#featured_time").html(featured.time_total + ' ' + featured.time_type)
$("#featured_details").html(featured.recipe_blurb)
$("#featured_rating").html('(' + featured.rating + '/5)')
$("#featured_link").attr("href", "../pages/recipe.html?id=" + featured.id)


//Add items to newest 3 items
for(var i = 0; i < 3; i++) {
    let new_rec = newest[i]
    console.log(new_rec)

    $("#newest-pic-" + i).attr("src", "images/recipe_images/" + new_rec.recipe_img);
    $("#newest-title-" + i).html(new_rec.name);
    $("#newest-details-" + i).html(new_rec.recipe_blurb);
    $("#newest-link-" + i).attr("href", "../pages/recipe.html?id=" + new_rec.id)
    $("#newest-link-button-" + i).attr("href", "../pages/recipe.html?id=" + new_rec.id)
}