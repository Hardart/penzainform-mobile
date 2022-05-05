const connect = require('./db')().promise()
class Query {
	async getMenu(table) {
		const [_, columns] = await connect.query(`SELECT * FROM ${table}`)
      let menu = []
      columns.forEach(item => {
         menu.push(item.name)
      })
      return menu
	}
}


module.exports = new Query()