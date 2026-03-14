const weatherForm = document.getElementById("weatherForm");
const weatherInput = document.getElementById("weather");
const temperatureInput = document.getElementById("temperature");
const suggestionSection = document.getElementById("suggestion");

// Listen for form submission so we can show a suggestion without reloading the page.
weatherForm.addEventListener("submit", function (event) {
	event.preventDefault();

	const weather = weatherInput.value;
	const temperatureValue = temperatureInput.value;
	const temperature = Number(temperatureValue);
	let message = "";

	if (weather === "sunny") {
		message = "☀️ It's sunny! Bring sunglasses, sunscreen, and water.";
	} else if (weather === "cloudy" || weather === "rainy") {
		message = `It's ${weather}! A light jacket might be a good idea.`;
	} else if (weather === "snowy") {
		message = "❄️ It's snowy! Bring a warm coat, gloves, and boots.";
	} else if (weather === "windy") {
		message = "💨 It's windy! Bring a windbreaker and secure hat.";
	} else {
		message = "🌤️ Please select the weather to get a suggestion.";
	}

	// Add a second suggestion when the temperature is lower than 50°F.
	if (temperatureValue !== "" && temperature < 50) {
		message += " 🧥 It's below 50°F, so wear a warm jacket.";
	}

	suggestionSection.innerHTML = `<p>${message}</p>`;
});
