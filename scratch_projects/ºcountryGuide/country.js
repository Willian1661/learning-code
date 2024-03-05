let searchButton = document.getElementById("searchBtn");
let countryInp = document.getElementById("countryId");

searchButton.addEventListener("click", () => {
    let countryName = countryInp.value;
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    console.log(finalUrl)

    fetch(finalUrl).then((response) => response.json())
        .then((data) => {
            /*  console.log(data[0]);
             console.log(data[0].capital[0]);
             console.log(data[0].continents[0]);
             console.log(data[0].flags.svg);
             console.log(data[0].name.common, data[0].name.official);
             console.log(Object.keys(data[0].currencies)[0]);
             console.log(data[0].currencies[Object.keys(data[0].currencies)].name, /* data[0].currencies[Object.keys(data[0].currencies)].symbol );
             console.log(Object.values(data[0].languages).toString().split(",").join(", "));
             console.log(data[0].population); 
             */
            //inserindo a img das bandeiras pelo innerHTML no btn result
            result.innerHTML = `<img src="${data[0].flags.svg}" class="flagImg">
        <h2>${data[0].name.common}</h2>
        <h4 class="official">"${data[0].name.official}"</h4>
            <div class="wrapper">
                <div class="dataWrapper">
                    <h4>Capital:</h4><span>${data[0].capital[0]}</span>
            </div>
        </div>
            <div class="wrapper">
                <div class="dataWrapper">
                    <h4>Continent:</h4><span>${data[0].continents[0]}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="dataWrapper">
                    <h4>Population:</h4><span>${data[0].population}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="dataWrapper">
                    <h4>Currencies:</h4><span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="dataWrapper">
                    <h4>Languages:</h4><span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
                </div>
            </div>
        
        `;
        }).catch(() => {
            if (countryName.length == 0) {
                result.innerHTML = `<h3> The input field cannot be empty </h3>`
            } else {
                result.innerHTML = `<h3> Please enter a valid country name. </h3>`
            }
        })

});
//funçao do ENTER na busca
countryInp.addEventListener("keyup", (e) => {
    countryName = countryInp.value;
    finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    if (e.keyCode === 13) {

    console.log(finalUrl);

    fetch(finalUrl).then((response) => response.json())
        .then((data) => {
            //a section é a tentativa de adicionar uma animation na transiçao
            //section it's a try to add an animation on transition from the search to the show informations 
result.innerHTML = `
<section class="showInfo">

<img src="${data[0].flags.svg}" class="flagImg">
<h2>${data[0].name.common}</h2>
<h4 class="official">"${data[0].name.official}"</h4>
    <div class="wrapper">
        <div class="dataWrapper">
            <h4>Capital:</h4><span>${data[0].capital[0]}</span>
    </div>
</div>
    <div class="wrapper">
        <div class="dataWrapper">
            <h4>Continent:</h4><span>${data[0].continents[0]}</span>
        </div>
    </div>
    <div class="wrapper">
        <div class="dataWrapper">
            <h4>Population:</h4><span>${data[0].population}</span>
        </div>
    </div>
    <div class="wrapper">
        <div class="dataWrapper">
            <h4>Currencies:</h4><span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)}</span>
        </div>
    </div>
    <div class="wrapper">
        <div class="dataWrapper">
            <h4>Languages:</h4><span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
        </div>
    </div>
            </section>

`;
}).catch(() => {
    if (countryName.length == 0) {
        result.innerHTML = `<h3> The input field cannot be empty </h3>`
    } else {
        result.innerHTML = `<h3> Please enter a valid country name. </h3>`
    }
})
    }
}) 