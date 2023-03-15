/* eslint-disable quotes */
module.exports = {
  friendlyName: "Destroy one thing",

  description: 'Delete the "thing" with specified ID from the database.',

  inputs: {
    id: {
      type: "number",
      required: true,
    },
  },

  exits: {},

  fn: async function (inputs, exists) {
    await Thing.destroy({ id: inputs.id });

    return exists.success();
  },
};
