const scraperObject = {
	url: 'https://www.buscape.com.br/',
	async scraper(browser){
		let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		await page.goto(this.url);
		
	}
}

module.exports = scraperObject;