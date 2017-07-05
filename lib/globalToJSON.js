function globalToJSON(schema) {
  schema.set('toJSON', {
    virtuals: true,
    getters: true,
    transform(obj, json) {
      delete json._id;
      delete json.__v;
      delete json.password;
      return json;
    }
  });
}

module.exports = globalToJSON;
