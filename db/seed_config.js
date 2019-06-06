const { Seeder } = require('mongo-seeding');
const path = require('path')

const config = {
  database:
    "mongodb+srv://lhsteele:1acBfWEVikZlP2bL@cluster0-j03bm.mongodb.net/test?retryWrites=true&w=majority",
  dropDatabase: true
};

const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(
  path.resolve("./db/data"),
  {
    transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId]
  }
);

seeder
  .import(collections)
  .then(() => {
    // Do whatever you want after successful import
    console.log("Success");
  })
  .catch(err => {
    console.log("Error", err);
  });