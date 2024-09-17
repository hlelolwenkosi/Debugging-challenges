let FREE_WARNING = 'Free shipping only applies to single customer orders'
let BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
let NONE_SELECTED = 0
let shipping = 0
let currency = null
let customers = 1
let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * NONE_SELECTED
let batteries = 5 * 2
let pens = 5 * NONE_SELECTED

if (location === 'RSA') {
	 shipping = 400;
	 currency = 'R' }
else if(location= 'NK'){
	currency='$'
	console.log(BANNED_WARNING)
}
else if (location === 'NAM')
{shipping = 600
	currency='$'
}
else {shipping = 800}



let total = shoes + toys + shirts + batteries + pens


if (total >= 1000 ) {
	if ((location === 'NAM'||location==='RSA') && customers < 2) {
	shipping= 0
console.log( FREE_WARNING)	}
	}

if (shipping === 0 && customers !== 1) 
	{ console.log( FREE_WARNING) }



