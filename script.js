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

const updateCart = () => {
  const targetValue = parseInt(event.currentTarget.value);
  const targetName = event.currentTarget.name;
  console.log(event.currentTarget.name);
  clearOut();
  cartItems++;
  cartInventory.forEach(watch => {
    if (watch.name === targetName) {
      watch.totalInCart++;
    }
  });
  document.getElementById("cart-total").innerHTML = cartItems;
  document.getElementById("cart-total2").innerHTML = cartItems;
  cartTotalPrice += targetValue;
  document.getElementById("cart-total-price").innerHTML = `Cart Total: $ ${
    cartTotalPrice
  }`;
  populateCart();
};

const clearOut = () => {
  let currentContent = document.getElementById("cart-content");
  while (currentContent.firstChild) {
    currentContent.removeChild(currentContent.firstChild);
  }
};

const populateCart = () => {
  let currentContent = document.getElementById("cart-content");
  cartInventory.forEach(watch => {
    if (watch.totalInCart > 0) {
      let row = document.createElement("h5");
      row.textContent = `${watch.totalInCart} x ${watch.name}`;
      currentContent.appendChild(row);
    }
  });
};

const addClickEvent = () => {
  const shopButtons = document.querySelectorAll(".add-to-cart");
  const shopButtonsArray = Array.from(shopButtons);

  shopButtonsArray.forEach(button => {
    button.addEventListener("click", updateCart, false);
  });
};

addClickEvent();
