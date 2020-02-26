'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ShayanSchema extends Schema {
    up() {
      this.create('shayans', table => {
        table.increments('id')
        table.integer('code', 6).notNullable()
        table.boolean('verify')
        table.timestamps()
      })
    }
  down () {
    this.drop('shayans')
  }
}

module.exports = ShayanSchema
