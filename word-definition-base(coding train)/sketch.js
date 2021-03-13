
	function setup(){
		noCanvas();
		
		
		let bdpage = chrome.extension.getBackgroundPage();
		let word = bdpage.word;
		
		let url = `http://api.wordnik.com:80/v4/word.json/
		${word}
		/definitions?limit=1
		&includeRelated=false
		&sourceDictionaries=all
		&useCanonical=false
		&includeTags=false
		&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5;
		`
		
		loadJSON(url, gotData);
		
		function gotData(data) {
			createP(data[0].text);
		}
		
		//createP(word)
	
		
	}








