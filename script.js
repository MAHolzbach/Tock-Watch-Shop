$(document).ready(function() {
  $(".button-collapse").sideNav();
});

$(document).ready(function() {
  $(".modal").modal();
});

$("#shop").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#shop-content").offset().top
    },
    1000
  );
});

$("#about").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#about-content").offset().top
    },
    1000
  );
});

let cartItems = 0;
let cartTotalPrice = 0;

const onClick = value => {
  const targetValue = parseInt(value);
  cartItems += 1;
  document.getElementById("cart-total").innerHTML = cartItems;
  cartTotalPrice += targetValue;
  document.getElementById("cart-total-price").innerHTML = `$ ${cartTotalPrice}`;
};
