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

$("#contact").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#contact-form").offset().top
    },
    1000
  );
});

$("#shop2").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#shop-content").offset().top
    },
    1000
  );
});

$("#about2").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#about-content").offset().top
    },
    1000
  );
});

$("#contact2").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#contact-form").offset().top
    },
    1000
  );
});

let cartItems = 0;
let cartTotalPrice = 0;
const cartInventory = [
  {
    name: "Elm",
    totalInCart: 0
  },
  {
    name: "Cedar",
    totalInCart: 0
  },
  {
    name: "Pine",
    totalInCart: 0
  },
  {
    name: "Maple",
    totalInCart: 0
  },
  {
    name: "Oak",
    totalInCart: 0
  },
  {
    name: "Spruce",
    totalInCart: 0
  },
  {
    name: "Willow",
    totalInCart: 0
  },
  {
    name: "Redwood",
    totalInCart: 0
  }
];

const onClick = (value, watchName) => {
  const targetValue = parseInt(value);
  const cartContent = document.getElementById("cart-content");
  cartItems += 1;
  let newCartInventory = cartInventory.map(watch => {
    if (watchName === watch.name) {
      watch.totalInCart += 1;
      let cartTotalPrice = document.getElementById("cart-total-price");
      let newCartEntry = document.createElement("h5");
      let newWatchAdded = document.createTextNode(
        `${watchName} x ${watch.totalInCart}`
      );
      newCartEntry.appendChild(newWatchAdded);
      cartContent.insertBefore(newCartEntry, cartTotalPrice);
    }
  });
  document.getElementById("cart-total").innerHTML = cartItems;
  document.getElementById("cart-total2").innerHTML = cartItems;
  cartTotalPrice += targetValue;
  document.getElementById(
    "cart-total-price"
  ).innerHTML = `Cart Total: $ ${cartTotalPrice}`;
};
