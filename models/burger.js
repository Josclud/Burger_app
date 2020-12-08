const orm = require('../config/orm.js')

const burger = {
  selectAll(cb) {
    orm.selectAll('burgers', burgers => cb(burgers))
  },
  insertOne(burger, cb) {
    orm.insertOne('burgers', burger, () => cb())
  },
  updateOne(changes, id, cb) {
    orm.updateOne('burgers', changes, { id }, () => cb())
  }
}

module.exports = burger