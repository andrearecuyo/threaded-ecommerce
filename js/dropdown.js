//currently selected option in the dropdown
const selected = document.querySelector(".selected");
// container element that holds the dropdown options
const optionsContainer = document.querySelector(".options-container");
// list of individual dropdown options
const optionsList = document.querySelectorAll(".option");

//if element is clicked, the provided callback function is executed
selected.addEventListener("click", () => {
	optionsContainer.classList.toggle("active");
});

optionsList.forEach(option => {
	option.addEventListener("click", () => {
		// updates the content of the selected element.
		selected.innerHTML = option.querySelector("label").innerHTML;
		optionsContainer.classList.remove("active");
	});
});