const models = require("./models");

const jon: SomeNamespace.User = {
  id: 1,
  name: "Jon McCormack",
};


const newTestClass: SomeNamespace.TestClass = new models.SomeNamespace.TestClass(
  "jon"
);


console.log(jon);
