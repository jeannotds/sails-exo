/* eslint-disable quotes */
module.exports = {
  friendlyName: "Upload thing",

  description: "",

  files: ["photo"],

  inputs: {
    photo: {
      type: "ref",
      description: "Upload file stream",
      required: true,
    },
    label: "string",
  },

  exits: {},

  fn: async function (inputs, exits) {
    // sails.uploadOne();
    return exits.success();
  },
};
