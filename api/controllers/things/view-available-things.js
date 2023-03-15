/* eslint-disable quotes */
module.exports = {
  friendlyName: "View available things",

  description: 'Display "Available things" page.',

  exits: {
    success: {
      viewTemplatePath: "pages/things/available-things",
    },
  },

  fn: async function (inputs, exits) {
    var things = await Thing.find({
      owner: this.req.me.id,
    });

    // return { things };
    return exits.success({ things });
  },
};
