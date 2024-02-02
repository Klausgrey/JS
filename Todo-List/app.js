const input = document.querySelector("#input");
const listContainer = document.querySelector("#list-container");

const addTask = () =>
{
	if (input.value === "")
	{
		alert("Please input something");
	}
	else
	{
		let li = document.createElement("li");
		li.innerHTML = input.value;
		listContainer.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	input.value = "";
	saveDate();
}
listContainer.addEventListener("click", (e) => {
	console.log("Clicked element tag name:", e.target.tagName);
	if (e.target.tagName === 'LI') {
		console.log("Clicked on LI");
		e.target.classList.toggle("checked");
		saveDate();
	} else if (e.target.tagName === 'SPAN') {
		console.log("Clicked on SPAN");
		e.target.parentElement.remove();
		saveDate();
	}
}, false);

const saveDate = () =>
{
	localStorage.setItem("data", listContainer.innerHTML)
}
const showTask = () =>
{
	listContainer.innerHTML = localStorage.getItem("data")
}
showTask();