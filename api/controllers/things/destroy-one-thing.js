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

  exits: {
    forbidden: {
      description:
        "The User making this request doesn't have the permissions to delete this thing",
      // statusCode: 403,
      responseType: "forbidden",
    },
  },

  fn: async function (inputs, exits) {
    const thing = await Thing.findOne({ id: inputs.id });

    if (thing.owner !== this.req.me.id) {
      // throw new Error("Nope");
      return exits.forbidden;
    } else {
      await Thing.destroy({ id: inputs.id });
    }

    exits.success();
  },
};
