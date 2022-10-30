// variaveis do select-box
const selected = document.querySelector(".selected");
const optionContainer = document.querySelector(".options-container");
const optionList = document.querySelectorAll(".option");
const selectedBox = document.querySelector("#suggestions")
const bb =document.querySelector(".body")
const seta = document.querySelector(".seta")
// ------------------loader icon rotation  ----------------//
selected.addEventListener("click", () => {
    optionContainer.classList.toggle("active")
    seta.classList.toggle("ativa")
});

// const selectName = document.querySelector(".option label")
// let valor = selectName.textContent


// acess all the options
optionList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionContainer.classList.remove("active");
        console.log(valor);
    })
})


// variavies
const apiKey = "ef1d8bff34781f5f3ef90c891dada4ce";
const apiCountryUrl = "https://countryflagsapi.com/png/";
const apiUnsPlash = "https://source.unsplash.com/1600x900/?";

const cityInput = document.querySelector('#input-city');
const searchBtn = document.querySelector('#search');
/* ----------------------------------------------------  */
const cityElement = document.querySelector('#city');
const tempElement = document.querySelector('#temperature span');
const descElement = document.querySelector('#description');
const weatherElement = document.querySelector('#wether-condition')
const countryElement = document.querySelector('#country')
const humidityElement = document.querySelector('#humidity span')
const windElement = document.querySelector('#wind span')

const weatherContainer = document.querySelector('#weather-data');

const Loader = document.querySelector("#loader");
const errorMessage = document.querySelector("#error-message");

const suggestionContainer = document.querySelector("#suggestions");
const suggestionButtons = document.querySelectorAll("#suggestions button");

// switchin placeholder color when wrong
cityInput.classList.remove("city-input");


// funçoes


const toggleLoader = () => {
    Loader.classList.toggle("hide")
}

const getWetherData = async (city) => {
    toggleLoader();

    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherUrl)
    const data = await res.json()
    console.log(data);

    toggleLoader();
    return data;
}
// showing the error message
const showError = () => {
    errorMessage.classList.remove("hide");
    errorMessage.innerHTML = `
    <p>We couldn't find the city <b>${cityInput.value}<b>.</p>
    <br>
    <p>Try again</p>
    `
};

const showUndefined = () => {
    cityInput.setAttribute(
        "placeholder",
        `apenas paises/cidades/estados`
    )
    cityInput.classList.add("city-input");
};

const hideInformation = () => {
    errorMessage.classList.add("hide");
    weatherContainer.classList.add("hide");

    suggestionContainer.classList.add("hide");
};

const showWeatherData = async (city) => {
    hideInformation()
    const data = await getWetherData(city);

    if (data.cod === "404") {
        hideInformation()
        showError()
        
        return;
    } else if (data.cod === "400") {
        showUndefined()
        selectedBox.classList.add("hide");
        suggestionContainer.classList.remove("hide");
        selected.innerHTML = `<p>Select a highlighted country:</p><span class="seta"></span>`
        return;
    }

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    if (data.weather[0].icon == "01d") {
        weatherElement.setAttribute(
            "src",
            `https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75176/sun-icon-clipart-xl.png`

        )
        weatherElement.classList.add("weatherIcon")
    } else if (data.weather[0].icon == "01n") {
        weatherElement.setAttribute(
            "src",
            `data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBmaWxsPSIjZmZiZjAwIj4KICA8cGF0aCBkPSJtNTI1LjU2IDUyMmMtODEuNTkgODEuNTktMjEzLjk1IDgxLjU5LTI5NS41NiAwLTgxLjYwNS04MS41OS04MS41OS0yMTMuOTUgMC0yOTUuNTYgMzAuOTMtMzAuOTMgNjkuMzUyLTUwLjE0MSAxMDkuMzUtNTcuNjI5LTU0LjQ2MSA2OC4xOC01MC4yNDIgMTY3Ljg0IDEyLjg3NSAyMzAuOTYgNjMuMTIxIDYzLjEyMSAxNjIuNzcgNjcuMzM2IDIzMC45NiAxMi44NzUtNy40ODgzIDQwLjAwNC0yNi43MTEgNzguNDIyLTU3LjYyOSAxMDkuMzV6Ii8+CiAgPHBhdGggZD0ibTQzNy40OCAyODIuOTYtMjkuMjg5LTEyLjgwMSAyOS4zMDUtMTIuODAxYzE0LjExNy02LjE3MTkgMjUuMzgzLTE3LjQ0OSAzMS41NjYtMzEuNTY2bDEyLjgwMS0yOS4zMDUgMTIuODAxIDI5LjMwNWM2LjE3MTkgMTQuMTE3IDE3LjQ0OSAyNS4zODMgMzEuNTY2IDMxLjU2NmwyOS4zMDUgMTIuODAxLTI5LjMxNiAxMi44MDFjLTE0LjExNyA2LjE3MTktMjUuMzgzIDE3LjQ0OS0zMS41NTEgMzEuNTUxbC0xMi44MTYgMjkuMzA1LTEyLjgxNi0yOS4zMDVjLTYuMTcxOS0xNC4xMDItMTcuNDM0LTI1LjM3OS0zMS41NTUtMzEuNTUxeiIvPgogPC9nPgo8L3N2Zz4K`

        )
        weatherElement.classList.add("weatherIcon")
    } else {
        weatherElement.setAttribute(
            "src",
            `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`

        )
        weatherElement.classList.remove("weatherIcon")
    };

    countryElement.setAttribute("src", apiCountryUrl + data.sys.country);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;

    weatherContainer.classList.remove("hide");

// --------------change back-ground----------- //
    document.body.style.backgroundImage = `url("${apiUnsPlash + city}")`;
};

// ---------------eventos------------- //
bb.addEventListener("click", async (e) => {
    if (e.target.aLink === "") {
        optionContainer.classList.remove("active");
        seta.classList.remove("ativa")
    }
})

searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const city = cityInput.value;

    showWeatherData(city);

    document.body.style.backgroundImage = `url("${apiUnsPlash + city}")`;

})

cityInput.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
        const city = e.target.value;

        showWeatherData(city);

        document.body.style.backgroundImage = `url("${apiUnsPlash + city}")`;

    }
})

//------------sugestoes/---------------- /
suggestionButtons.forEach((btn) =>{
    btn.addEventListener("click",()=>{
        const city = btn.getAttribute("id");
        
        showWeatherData(city)
        cityInput.setAttribute(
            "placeholder",
            `digite o nome da sua cidade`
        )
        cityInput.classList.remove("city-input");
    })
})