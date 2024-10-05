migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7zhup1uycgzmnww")

  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7zhup1uycgzmnww")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
