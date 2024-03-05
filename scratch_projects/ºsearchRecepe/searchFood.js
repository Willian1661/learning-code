const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDeatailsContent = document.getElementById('meal-details-content');
const recepeCloseBtn = document.getElementById('recepe-close-btn')
const searchKey = document.getElementById('search-input');

//event listner
searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);
recepeCloseBtn.addEventListener('click', () => {
    mealDeatailsContent.parentElement.classList.remove('showRecepe');
})

//get meal list that matches with ingredients
function getMealList() {
    let searchInput = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`).then(response => response.json())
        .then(data => {
            let html = "";
            if (searchInput == "") {
                html = `please, enter an ingrient of your meal`;
                mealList.classList.add("notFound");
            } else if (data.meals) {
                data.meals.forEach(meal => {
                    html += `
            <div class="meal-item" data-id="${meal.idMeal}">
                <div class="meal-img">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                </div>
                <div class="meal-name">
                    <h3 title="${meal.strMeal}">${meal.strMeal}</h3>
                    <a href="#" class="recepe-btn">Get recepe</a>
                </div>
            </div>
       
            `
                    mealList.classList.remove("notFound");
                    mealList.classList.remove("emptyInput");
                });
            } else {
                html = `Sorry! we found anything made with "${searchInput}", try another ingredient.`
                mealList.classList.add("notFound");

            }
            mealList.innerHTML = html;
        });
}

function getMealRecipe(e) {
    e.preventDefault();
    if (e.target.classList.contains("recepe-btn")) {
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`).then(response => response.json())
            .then(data => mealRecipeModal(data.meals));
    }

}
function mealRecipeModal(meal) {
    console.log(meal);
    meal = meal[0];
    var textos = meal.strInstructions.replace(/STEP/g,"\nSTEP")
    let html = "";
    html += `
    <h2 class="recepe-title">${meal.strMeal}</h2>
    <p class="recepe-category">${meal.strCategory}</p>
    <h3 class="recepe-instructions">intructions:</h3>
    <p>${textos}</p>
</div>
<div class="recepe-meal-img">
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
</div>
<div class="recepe-link">
<a href="${meal.strYoutube}" target="_blank">Watch video</a>
</div>
`;
    mealDeatailsContent.innerHTML = html;
    mealDeatailsContent.parentElement.classList.add("showRecepe");
    console.log(meal.idMeal);
}

searchKey.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
        getMealList();
        console.log(e);
    }
})