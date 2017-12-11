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
    totalInCart: 0,
    price: 1125
  },
  {
    name: "Cedar",
    totalInCart: 0,
    price: 800
  },
  {
    name: "Pine",
    totalInCart: 0,
    price: 1000
  },
  {
    name: "Maple",
    totalInCart: 0,
    price: 500
  },
  {
    name: "Oak",
    totalInCart: 0,
    price: 1500
  },
  {
    name: "Spruce",
    totalInCart: 0,
    price: 2000
  },
  {
    name: "Willow",
    totalInCart: 0,
    price: 1750
  },
  {
    name: "Redwood",
    totalInCart: 0,
    price: 850
  }
];

const updateCart = () => {
  const targetValue = parseInt(event.currentTarget.value);
  const targetName = event.currentTarget.name;
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
  document.getElementById(
    "cart-total-price"
  ).innerHTML = `Cart Total: $ ${cartTotalPrice}`;
  populateCart();
};

const clearOut = () => {
  let currentContent = document.getElementById("cart-content");
  while (currentContent.firstChild) {
    currentContent.removeChild(currentContent.firstChild);
  }
};

const fullClear = () => {
  cartItems = 0;
  cartTotalPrice = 0;
  document.getElementById(
    "cart-total-price"
  ).innerHTML = `Cart Total: $ ${cartTotalPrice}`;
  document.getElementById("cart-total").innerHTML = cartItems;
  document.getElementById("cart-total2").innerHTML = cartItems;
  cartInventory.forEach(watch => {
    watch.totalInCart = 0;
  });
  clearOut();
};

const lineDelete = event => {
  const targetValue = parseInt(event.currentTarget.value);
  const itemToRemove = event.currentTarget.id;
  console.log(targetValue);
  console.log(itemToRemove);
  cartInventory.forEach(watch => {
    if (watch.name === itemToRemove) {
      watch.totalInCart--;
    }
  });
  cartTotalPrice -= targetValue;
  document.getElementById(
    "cart-total-price"
  ).innerHTML = `Cart Total: $ ${cartTotalPrice}`;
  cartItems--;
  document.getElementById("cart-total").innerHTML = cartItems;
  document.getElementById("cart-total2").innerHTML = cartItems;
  clearOut();
  populateCart();
};

const populateCart = () => {
  let currentContent = document.getElementById("cart-content");
  cartInventory.forEach(watch => {
    if (watch.totalInCart > 0) {
      let cartRow = document.createElement("div");
      let row = `
        <h5>${watch.totalInCart} x ${watch.name} for $${
        watch.price
      } each <button class="btn-floating btn-flat row-delete-button" id=${
        watch.name
      } value=${
        watch.price
      }><i class="material-icons row-delete-icon">close</i></button></h5>
      `;
      cartRow.innerHTML = row;
      currentContent.appendChild(cartRow);
    }
  });
  addLineDeleteClick();
};

const addLineDeleteClick = () => {
  const deleteButtons = document.querySelectorAll(".row-delete-button");
  const deleteButtonsArray = Array.from(deleteButtons);
  deleteButtonsArray.forEach(button => {
    button.addEventListener("click", lineDelete, false);
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
