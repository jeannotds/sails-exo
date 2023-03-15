/* eslint-disable quotes */
module.exports = {
  friendlyName: "View available things",

  description: 'Display "Available things" page.',

  exits: {
    success: {
      viewTemplatePath: "pages/things/available-things",
    },
  },

  fn: async function (inputs, exist) {
    var things = await Thing.find();

    return { things };
  },
};
