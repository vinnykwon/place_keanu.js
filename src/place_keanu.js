class PlaceKeanu {
	constructor() {
		this.api = "https://placekeanu.com"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getKeanu(width, height) {
		const response = await fetch(
			`${this.api}/${width}/${height}`, {
				method: "GET",
				headers: this.headers
			})
		return response.blob()
	}
}

module.exports = {PlaceKeanu}
