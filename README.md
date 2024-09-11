# place_keanu.js
Web-API for [placekeanu.com](https://placekeanu.com/) an API that provides Resizable Keanu Reeves placeholder images with grayscale and young Keanu options

## Example
```JavaScript
async function main() {
	const { PlaceKeanu } = require("./place_keanu.js")
	const placeKeanu = new PlaceKeanu()
	const keanuPicture = await placeKeanu.getKeanu("width", "height")
	console.log(keanuPicture)
}

main()
```
