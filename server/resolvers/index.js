let crypto = require('crypto'); // to create random id
let localData = {}
const resolvers = {
  Query: {
    getMessage: () => {
      return "Hello World :)"
    },

    getName: () => {
      return "Anas Ahmed"
    },

    getAllMessages: () => {
      return [{message: "test1", id: "1234"}, {message: "test2", id: "1235"}]
    }
  },

  Mutation: {
    createMessage: (_, {input}) => {
      // console.log("args: ", args);
      let id = crypto.randomBytes(10).toString("hex")
      console.log("id: ", id)
      localData[id] = {id, ...input.message};
      return {id, ...input};
    }
  }
}

module.exports = resolvers;