$( document ).ready(function(){
	$(".button-collapse").sideNav()
});

$(document).ready(function() {
	$('.modal').modal();
});

$("#shop").click(function() {
	$("html, body").animate({
		scrollTop: $("#shop-content").offset().top}, 1000);
});

$("#about").click(function() {
	$("html, body").animate({
		scrollTop: $("#about-content").offset().top}, 1000);
});

$("#contact").click(function() {
	$("html, body").animate({
		scrollTop: $("#contact-form").offset().top}, 1000);
});

$("#shop2").click(function() {
	$("html, body").animate({
		scrollTop: $("#shop-content").offset().top}, 1000);
});

$("#about2").click(function() {
	$("html, body").animate({
		scrollTop: $("#about-content").offset().top}, 1000);
});

$("#contact2").click(function() {
	$("html, body").animate({
		scrollTop: $("#contact-form").offset().top}, 1000);
});

	let cartItems = 0;
	let cartTotalPrice = 0;
	const cartInventory = [
	{
		name: "Watch 1",
		totalInCart: 0	
	},
		{
		name: "Watch 2",
		totalInCart: 0	
	},
	{
		name: "Watch 3",
		totalInCart: 0	
	},
	{
		name: "Watch 4",
		totalInCart: 0	
	},
	{
		name: "Watch 5",
		totalInCart: 0	
	},
	{
		name: "Watch 6",
		totalInCart: 0	
	},
	{
		name: "Watch 7",
		totalInCart: 0	
	},
	{
		name: "Watch 8",
		totalInCart: 0	
	}
];

const onClick = (value, watchName) => {
	const targetValue = parseInt(value);
	cartItems += 1;
	let newCartInventory = cartInventory.map(watch => {
		if(watchName === watch.name) {watch.totalInCart +=1};
		console.log(watch.totalInCart);	
	})
	document.getElementById("cart-total").innerHTML = cartItems;
	document.getElementById("cart-total2").innerHTML = cartItems;
	cartTotalPrice += targetValue;
	document.getElementById("cart-total-price").innerHTML = `$ ${cartTotalPrice}`;
};
