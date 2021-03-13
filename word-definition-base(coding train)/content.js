console.log('content go');

window.addEventListener('mouseup', wordSelected);

function wordSelected() {
	let selectedText = window.getSelection().toString().trim();
	let getid = window.getSelection()
	console.log(selectedText);
	if (selectedText.length > 0) {
		let msg = {
		text: selectedText
		}
		chrome.runtime.sendMessage(msg)
	}
	
}



/*
18:46

*/





