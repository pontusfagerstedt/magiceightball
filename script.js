

function magicEightBall() {
	let fråga = prompt("Ställ din fråga");

	if (fråga) {
		fråga = Math.floor(Math.random() * 8);	
		switch (fråga) {
		case 0:
			document.getElementById("svar").innerHTML = 'Svar: Jag skulle inte förlita mig på det.';
			break;
		case 1:
			document.getElementById("svar").innerHTML = 'Svar: Det är väldigt troligt.';
			break;
		case 2:
			document.getElementById("svar").innerHTML = 'Svar: Jag vill inte göra dig ledsen, men det kommer inte att hända.';
			break;
		case 3:
			document.getElementById("svar").innerHTML = 'Svar: Det kan jag garantera!.';
			break;
		case 4:
			document.getElementById("svar").innerHTML = 'Det är lite osäkert. Det kan bli så, men det kan även bli motsatsen.';
			break;
		case 5:
			document.getElementById("svar").innerHTML = 'Svar: Om du kämpar för det så kan det eventuellt bli så.';
			break;
		case 6:
			document.getElementById("svar").innerHTML = 'Svar: Jag skulle vilja svara ja, men tyvärr är svaret nej.';
			break;
		case 7:
			document.getElementById("svar").innerHTML = 'Svar: Om det regnar just nu är svaret ja, om det snöar så är svaret nej. Om det varken regnar eller snöar så är svaret att du har 20% chans att svaret är ja.';
			break;
		}	
	} else {
		document.getElementById("svar").innerHTML = 'Du måste ställa en fråga!';
	}
}


















