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

/** TRY AND SEPARATE THE FUNCTION FROM THE ADDEVENTLISTER METHOD JUST LIKE HOW I SAW IN THAT TUTORIAL. */

listContainer.addEventListener("click", (e) => {
	console.log("Clicked element tag name:", e.target.tagName);
    if (e.target.tagName === 'LI')
    {
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

/* I WANT TO IMPLEMENT A FUCNTION THAT AFTER HITTING ENTER ON THE KEYBOARD IT WOULD AUTOMATICALLY ADD THE TASK TO THE LIST SO IT CAN SERVE AS A BUTTON ITSELF INSTEAD OF ALWAYS HITIING THE ADD BUTTON WHUCH CAN BE TIME CONSUMING AND STRESSFUL IN ITS SELF */