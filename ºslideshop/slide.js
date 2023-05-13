$(document).ready(function () {
  $(".js-slider").slick({
    dots: false,
    infinite: true,
   // touchMove: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

fetch(
  'https://raw.githubusercontent.com/Cassianosch/programador.cs-reels/master/slider-produtos-simples/assets/data/data.json'
  )
.then((response) => response.json())
.then((data) =>{
  data.forEach((element) => {
    
     $(".js-slider").slick(
       "slickAdd",
      `
       <div class="card">
               <div class="like"></div>
               <img class="product"
                   src="${element.image}" title="${element.name}" alt="${element.name}" />
               <h4 class="title" title="${element.name}">${element.name}</h4>
               <div class="rating">
               ${handleRating(element.rating)}
                  
               </div>
               <div class="price">
                   <h5>${handlePrice(element.price, true)}</h5>
                   <h5>${handlePrice(element.price)}</h5>
               </div>
               <a class="button">Add To Cart</a>
           </div>
     `
        );
  });
});
function handleRating(rating){
  let htmlToReturn = "";
  const maxRatingStar = 5;
  for (var i = 0; i < rating; i++) {
    htmlToReturn = htmlToReturn + "&#9733";
  }
  for (var i = 0; i < maxRatingStar-rating; i++) {
    htmlToReturn = htmlToReturn + "&#9734";
  }
  return htmlToReturn;
}

function handlePrice(price, discount = false){
  if (discount) {
    price = price * 0.9;
  }
  return price.toLocaleString('pt-BR',{
  style: "currency",
  currency: "BRL", 
});
}










// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object