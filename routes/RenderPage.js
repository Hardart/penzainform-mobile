const query = require('../connection/Query')
const localDB = require('../connection/local-db')
class RenderPage {
   async main(req, res) {
		
		res.render('index', {
			menu: localDB.menu,
			categories: localDB.categoies,
			main: localDB.mainNews,
			subMenu: localDB.subMenu,
			discuss: localDB.discuss
		})
	}
	
	async singlePost(req, res) {
		res.render('single-post', {
			menu: localDB.menu,
			subMenu: localDB.subMenu,
			post: localDB.mainNews[req.params.id]
		})
	}
}

module.exports = new RenderPage()