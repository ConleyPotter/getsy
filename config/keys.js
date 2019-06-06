// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === "production") {
  // we are in production - return the prod set of keys
  module.exports = require("./production_keys");
} else {
  // we are in development - return the dev keys!!
  module.exports = require("./development_keys");
}
