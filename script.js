ComfyJS.onChat = (user, message, flags, self, extra) => {
	var newMessage = document.createElement("li");

	if (flags.highlighted) {
		newMessage.classList.add("highlighted");
	} else if (flags.mod || flags.broadcaster) {
		newMessage.classList.add("mod");
	}
		
    var dom = document.createElement('div');
	dom.innerHTML = getMessageHTML(message, user, extra);
	newMessage.append(dom);

	newMessage.style.color = pastelHex(extra.userColor);

	// console.log("OG Color: " + extra.userColor);
	// console.log("New Color: " + newMessage.style.color);

    chat.append(newMessage);
}

function getMessageHTML(message, user, { messageEmotes }) {
	if (!messageEmotes) return user + ": " + message;

	// store all emote keywords
	// ! you have to first scan through 
	// the message string and replace later
	const stringReplacements = [];

	// iterate of emotes to access ids and positions
	Object.entries(messageEmotes).forEach(([id, positions]) => {
		// use only the first position to find out the emote key word
		const position = positions[0];
		const [start, end] = position.split("-");
		const stringToReplace = message.substring(
		parseInt(start, 10),
		parseInt(end, 10) + 1
		);

		stringReplacements.push({
		stringToReplace: stringToReplace,
		replacement: `<img class="emote" src="https://static-cdn.jtvnw.net/emoticons/v1/${id}/3.0">`,
		});
	});

	// generate HTML and replace all emote keywords with image elements
	const messageHTML = stringReplacements.reduce(
		(acc, { stringToReplace, replacement }) => {
		// obs browser doesn't seam to know about replaceAll
		return acc.split(stringToReplace).join(replacement);
		},
		message
	);

	return user + ": " + messageHTML;
}

function pastelHex(hex) {
	try {
		// Convert the hex color code to RGB values
		let r = parseInt(hex.slice(1, 3), 16);
		let g = parseInt(hex.slice(3, 5), 16);
		let b = parseInt(hex.slice(5, 7), 16);

		// Adjust the values of the RGB channels to create a pastel color
		r = (r + 255) / 2;
        g = (g + 255) / 2;
        b = (b + 255) / 2;

		// Convert the RGB values back to a hex color code
		let pastelHex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
		pastelHex =	pastelHex.slice(0, 7)
		console.log(pastelHex)

		// Return the pastel hex color code
		return pastelHex;
	}
	catch (e) {
		console.log(e)
		return hex;
    }
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

var chat = document.querySelector("#chat>ul");

var user = urlParams.get('twitch');
console.log(user);

if (user != null) {
	ComfyJS.Init(user);
} else {
	alert("You have not put a twitch username in the URL, please use the following link: https://noahhalgren.github.io/FinalFantasyXIVChatBox?twitch=[YOUR-TWITCH-USERNAME]");
}


