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
    label: {
      type: "string",
    },
  },

  exits: {},

  fn: async function (inputs, exits) {
    //Upload image
    var info = sails.uploadOne(inputs.photo);
    console.log("info : ", info);
    await Thing.create({ label: inputs.label, owner: this.req.me.id });
    //TODO
    return exits.success();
  },
};
