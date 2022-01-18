//prevent right clicking
document.addEventListener('contextmenu', event => event.preventDefault());

//shuffle an array of n consecutive indices
function generateShuffledIndices(n) {
	let arr = [];
	for (let i = 0; i < n; i++) arr.push(i);
	arr.sort(() => Math.random() - 0.5);
	return arr;
}


//accessors for coom database
function getTicker(index) {
	return coomDB[index][0];
}

function getName(index) {
	return coomDB[index][1];
}

function getColor(index) {
	return coomDB[index][2];
}

function getDescription(index) {
	return coomDB[index][3];
}

function getTokenID(index) {
	return coomDB[index][4];
}

function getStoreLink(index) {
	return marketplaceURL + getTokenID(index);
}


const l = "large";
const s = "small";

function getFilename(index, size) {
	let itemNumber = index + 1;

	if (size !== s && size !== l) size = s;

	let digit = String(itemNumber);
	if (itemNumber < 10) digit = "0" + digit; //pad with leading 0

	return "./gallery/" + size + "/" + digit + "_" + getTicker(index) + ".jpg";
}


//build the horizontal scrolling grid of cards
function buildGrid() {
	let containerpadding = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	let htmlstring = containerpadding;
	let arr = generateShuffledIndices(coomDB.length);
	for (let i = 0; i < coomDB.length; i++) {
		let randomizedI = arr[i]; // i; //keep arr[i] to randomize list, and use plain old i to have an ordered list
		let currentItemNumber = randomizedI + 1;
		let padding = "";
		if (randomizedI < 9) padding = "0";
		let itemNumberString = "&numero;&thinsp;" + padding + currentItemNumber;

		let firstitem = "";
		if (i === 0) firstitem = " firstitem";

		htmlstring += '<div class="item' + firstitem + '" id="' + getTicker(randomizedI) + '" onclick="onClickOverlayOpen(' + randomizedI + ')"><div class="cardText number">' + itemNumberString + '</div><div class="image" style="background-image:' + "url(";

		htmlstring += "'" + getFilename(randomizedI, s) + "'" + ');"></div><div class="cardText name">' + getName(randomizedI) + '</div></div>';

		//create and append unique style for the current item
		let currentitemstyle = document.createElement('style');
		currentitemstyle.innerHTML = '#' + getTicker(randomizedI) + ':hover { background-color: #' + getColor(randomizedI) + ';';
		//for darker images, change text color for more contrast
		if (randomizedI > 50) currentitemstyle.innerHTML += "color: #ffffff";
		currentitemstyle.innerHTML += '}';
		document.head.appendChild(currentitemstyle);
	}
	//htmlstring += '<div class="item" style="min-width: var(--sidepadding) !important; height: 100%;">&nbsp;&nbsp;</div>'
	htmlstring += containerpadding;
	document.getElementById("container").innerHTML = htmlstring;

//set scroll position
	setHorizontalScroll();
}

/* --- Preview grid --- */

//build the preview grid of 16 items
var previewClasses = [];
const numPreviewItems = 16;
var startingOffset = Math.floor((coomDB.length - numPreviewItems) * Math.random());
var currentIndex;
var innerDivClasses = [];
var innerDivStates = [];

//generate array of indices for the preview
function generatePreviewArray() {
	return generateShuffledIndices(numPreviewItems);
}

//initialize and build the preview grid
function buildPreview() {
//picks 16 consecutive items starting at an offset and shuffles them
//this is so we get a bunch of cooms with a similar background color for the preview, but still shuffled
	let arr = generatePreviewArray();
	let htmlstring = "";
	for (let i = 0; i < numPreviewItems; i++) {
		htmlstring += '<div class="preview' + i + '" style="background-image: url(';
		htmlstring += "'" + getFilename(arr[i] + startingOffset, s) + "'" + ');"><div class="innerPreviewDiv innerPreviewDiv' + i + '"></div></div>';
		previewClasses.push("preview" + i);
		innerDivClasses.push("innerPreviewDiv" + i);
		innerDivStates.push(0);

		//special conditions - at certain widths there's a row of 6, we add 2 extra divs at the bottom corners
		if (i === 11 || i === 15) {
			let j = 5;
			if (i === 15) j = 0;
			htmlstring += '<div class="extrapreviewgriddiv preview' + j
				+ '" style="background-image:url(' + "'";
			htmlstring += getFilename(arr[j] + startingOffset, s) + "'"
				+ ')"><div class="innerPreviewDiv innerPreviewDiv' + j + '"></div></div>';
		}
	}
	document.getElementById("previewgrid").innerHTML = htmlstring;

	currentIndex = startingOffset + numPreviewItems;
	setInterval(updatePreviewGrid, 1000);
}

//we fill in items 0-15 in a random order
var shuffledPreviewPositions = generatePreviewArray(); //current array
var currentPreviewPosition = 0; //position in current array

function incrementCount() {
	//console.log(currentIndex + "  |  " + currentPreviewPosition + ", " + shuffledPreviewPositions[currentPreviewPosition]);

	//increment current index of the item we are going to place
	currentIndex = (currentIndex + 1) % coomDB.length;

	//increment position in the preview array where we will place the item
	//shuffle the array every 16 items
	if (currentPreviewPosition >= (numPreviewItems - 1)) {
		currentPreviewPosition = 0;
		shuffledPreviewPositions = generatePreviewArray();
	} else currentPreviewPosition++;
}

//update a given item at a specific coordinate in the preview grid
function updatePreviewGridItem(gridPosition, URLstring) {
	let currentOpacity = innerDivStates[gridPosition];

	let outerdivs = document.getElementsByClassName(previewClasses[gridPosition]);
	let innerdivs = document.getElementsByClassName(innerDivClasses[gridPosition]);

	//function to change the background of a preview grid item - looks at the state variable
	if (currentOpacity === 0) {
		//if 0 then apply new image to inner div and then fade-in inner div
		for (let i = 0; i < innerdivs.length; i++) innerdivs[i].style.backgroundImage = URLstring;
		for (let i = 0; i < innerdivs.length; i++) innerdivs[i].style.opacity = '1';
		innerDivStates[gridPosition] = 1;
	} else if (currentOpacity === 1) {
		//if 1 then apply new image to outer div and then fade-out inner div
		for (let i = 0; i < outerdivs.length; i++) outerdivs[i].style.backgroundImage = URLstring;
		for (let i = 0; i < innerdivs.length; i++) innerdivs[i].style.opacity = '0';
		innerDivStates[gridPosition] = 0;
	} //else console.log("error - invalid state value");
}

//update *the next item* in the preview grid
function updatePreviewGrid() {
	let urlstr = "url(";
	urlstr += "'" + getFilename(currentIndex, s) + "')";
	updatePreviewGridItem(shuffledPreviewPositions[currentPreviewPosition], urlstr);

	incrementCount();
}


const URLdelineator = "?";
const param = "coom";
const pageTitle = "CryptoCooms | The NFT Collection";

//compare only letters and numbers of two strings
function compAlphanum(A, B) {
	let aa = String(A).replace(/\W/g, "");
	let bb = String(B).replace(/\W/g, "");
	return aa.toString() === bb.toString();
}

//get index of url parameter
function getIndexFromParam() {
	const params = new URLSearchParams(new URL(decodeURI(window.location)).search);
	if (params.has(param)) {
		let converted = (params.get(param)).toUpperCase();
		for (let i = 0; i < coomDB.length; i++) {
			if (compAlphanum(converted, coomDB[i][0])) return i;
		}
		return -1; //parameter specified was not in database
	} else return -2; //parameter doesn't exist in current URL
}

//get url without params
function getBaseURL() {
	let splitURL = String(window.location).split(URLdelineator, 1);
	return splitURL[0];
}

//construct a new page title and update the page
function updatePageTitle(index = "") {
	let newtitle = "";
	if (index === "") {
		newtitle = pageTitle;
	} else {
		newtitle = "Details for CryptoCoom № " + (index + 1) + ": " + getName(index) + " | " + pageTitle;
	}

	document.title = newtitle;

	return newtitle;
}

//set the URL and the page title; call without arguments for base url
function updateURL(index = "") {
	//push current state to the user's history
	history.pushState(String(window.location), String(document.title));

	//base values, if NO parameter is chosen
	let newURL = getBaseURL();

	//modify those values if a parameter is chosen
	if (index !== "") {
		//create url params object and set the parameter
		const params = new URLSearchParams();
		params.set(param, getTicker(index));

		//append new parameters to URL
		newURL += URLdelineator + params.toString();
	}

	//replace the state
	history.replaceState(null, updatePageTitle(index), encodeURI(newURL));
}

//when starting from a selected coom, we must set the horizontal position after closing the array
var loadDefaultHorizontalScrollOnClose = false;

function urlStartupCheck() {
//if pinned-to-homescreen mobile web application, or if invalid title or no url parameter
	if (("standalone" in window.navigator) && window.navigator.standalone) {
		closeOverlay();
		window.scrollTo(0, 0);
	} else {
		//otherwise, we are in a normal web browser window
		let currentTitleIndex = getIndexFromParam();

		//if invalid title or no title parameter, then we get negative number
		//that means we do nothing and remain on the homepage

		//otherwise, we have a valid index, and we open the overlay
		if (currentTitleIndex >= 0) {
			//activate the overlay
			loadDefaultHorizontalScrollOnClose = true;
			openOverlay(currentTitleIndex);
			updatePageTitle(currentTitleIndex);
		}
	}
}

//detect if URL changes, and open/close overlay as needed without updating the URL
window.addEventListener('popstate', function (event) {
	let currentTitleIndex = getIndexFromParam();

	//else invalid parameter or homepage, so we want to be home
	if (currentTitleIndex < 0) {
		if (overlayOpen) { //if overlay open already, close it
			closeOverlay();
		} //else nothing, because overlay is already closed
		updatePageTitle();
	} else { //else, parameter is valid then we want overlay to be open
		openOverlay(currentTitleIndex);
		updatePageTitle(currentTitleIndex);
	}
});


//populate the overlay with a specific coom
function populateOverlay(index) {
	let number = index + 1;
	let numberstring = "&numero;&thinsp;" + number;
	let hexcolorstring = "#" + getColor(index);
	let urlstring = "url('" + getFilename(index, l) + "')";

	//number and image
	document.getElementById("selectedimagecontainer").style.backgroundColor = hexcolorstring;
	document.getElementById("selectedimage").style.backgroundImage = urlstring;
	document.getElementById("selectedcoomnumber").innerHTML = numberstring;

	//title and info
	document.getElementById("selectedname").innerHTML = getName(index)
	document.getElementById("selectedinfo").innerHTML = getDescription(index);

	//store link
	document.getElementById("storeLink").href = getStoreLink(index);
	document.getElementById("storeLinkItemName").innerHTML = getName(index);

	//monospace properties
	document.getElementById("tokenID").value = getTokenID(index);
}

//horizontal scrolling management for the grid of cards
var savedHorizontalScrollPosition = 0;

function getHorizontalScroll() {
	return document.getElementById("container").scrollLeft;
}

function setHorizontalScroll(savedPosition = -1) {
	let scrollPosition = savedPosition;
	if (savedPosition === -1) { //if called without argument
		scrollPosition = document.getElementById("container").scrollWidth * 0.5;
	}
	document.getElementById("container").scrollTo(scrollPosition, 0);
}

//overlay management
var pageScrollPosition = 0;
var overlayOpen = false;

function onClickOverlayOpen(index) {
	//open the overlay and update the URL
	openOverlay(index);
	updateURL(index);
}

function openOverlay(index) {
//check state
	if (!overlayOpen) {
		//save scroll positions
		pageScrollPosition = window.pageYOffset;
		savedHorizontalScrollPosition = getHorizontalScroll();

		//populate overlay with selected index
		populateOverlay(index);

		//show overlay
		document.getElementById("overlay").style.display = "block";

		//hide body content
		document.getElementById("bodycontent").style.display = "none";


		//set state
		overlayOpen = true;
	}
}

//when overlay close button is clicked
function onClickOverlayClose() {
	//close the overlay and update the URL
	closeOverlay();
	updateURL();
}

function closeOverlay() {
	//check state
	if (overlayOpen) {
		//show body content
		document.getElementById("bodycontent").style.display = "block";

		//hide overlay
		document.getElementById("overlay").style.display = "none";

		//load scroll positions
		window.scrollTo(0, pageScrollPosition);
		if (loadDefaultHorizontalScrollOnClose) {
			setHorizontalScroll();
			loadDefaultHorizontalScrollOnClose = false;
		} else setHorizontalScroll(savedHorizontalScrollPosition);

		//set state
		overlayOpen = false;
	}
}

//detect if mobile, mobile if touchscreen
function isMobile() {
	return 'ontouchstart' in document.documentElement;
}

//preload assets
const imageDir = "./images/";
const imageFiles = ["bg.png", "coomface.png", "headercoom.png", "footercoom.png"];

function preload() {
	urlStartupCheck();

	let preloadedImages = [];

	for (let i = 0; i < imageFiles.length; i++) {
		let img = new Image();
		img.src = imageDir + imageFiles[i];
		preloadedImages.push(img);
	}

	for (let i = 0; i < coomDB.length; i++) {
		let img = new Image();
		img.src = getFilename(i, s);
		preloadedImages.push(img);
	}

	buildPreview();
	buildGrid();

	//if mobile, then change instances of "click" to "tap"
	if (isMobile()) {
		let clickinstances = document.getElementsByClassName("tapIfMobile");
		for (let i = 0; i < clickinstances.length; i++) {
			if (clickinstances[i].innerHTML === "Click") clickinstances[i].innerHTML = "Tap";
			else clickinstances[i].innerHTML = "tap";
		}
	}
	
	/*
	for (let i = 0; i < coomDB.length; i++) {
		let img = new Image();
		img.src = getFilename(i, l);
		preloadedImages.push(img);
	}
	// */
}

//select an input div, copy it, then deselect it
function copyElementText(elementID) {
	let element = document.getElementById(elementID);
	let deselect = document.getElementById("deselect");

	element.select();
	element.setSelectionRange(0, 99999);
	document.execCommand("copy");
	if (window.getSelection) window.getSelection().removeAllRanges();
	else if (document.selection) document.selection.empty();

	deselect.select();

	element.style.backgroundColor = "var(--blueTears)";
	element.style.color = "#000000";
	setTimeout(function () {
		element.style.backgroundColor = "var(--monospaceBG)";
		element.style.color = "#ffffff";
	}, 200);
}
