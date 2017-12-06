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

/*
  updateCart function:
	1. Call clearOut function
	2. Loop over cartInventory array
	3. Increment totalInCart attribute += 1
*/

/*
  clearOut function:
	1. Remove all current HTML nodes in cart-content div: var myNode = document.getElementById("foo");
	while (myNode.firstChild) {
    	myNode.removeChild(myNode.firstChild);
	}
*/

/*
  renderCart function:
    1. Loop over cartInventory array
	2. Render a cart row html element for each object with totalInCart > 1
*/

const onClick = (value, watchName) => {
  const targetValue = parseInt(value);
  const cartContent = document.getElementById("cart-content");
  cartItems += 1;
  let newCartInventory = cartInventory.map(watch => {
    if (watchName === watch.name && watch.totalInCart === 0) {
      watch.totalInCart += 1;
      let cartTotalPrice = document.getElementById("cart-total-price");
      let newCartEntry = document.createElement("h5");
	  newCartEntry.setAttribute('id', 'cart-row');
      let newWatchAdded = document.createTextNode(
        `${watchName} x ${watch.totalInCart}`
      );
      newCartEntry.appendChild(newWatchAdded);
      cartContent.insertBefore(newCartEntry, cartTotalPrice);
	} else if (watchName === watch.name && watch.totalInCart > 0) {
		watch.totalInCart += 1;
		let cartRow = document.getElementById('cart-row');
		cartRow.innerText = `${watchName} x ${watch.totalInCart}`;
		console.log(cartRow);
	}
  });
  document.getElementById("cart-total").innerHTML = cartItems;
  document.getElementById("cart-total2").innerHTML = cartItems;
  cartTotalPrice += targetValue;
  document.getElementById(
    "cart-total-price"
  ).innerHTML = `Cart Total: $ ${cartTotalPrice}`;
};
