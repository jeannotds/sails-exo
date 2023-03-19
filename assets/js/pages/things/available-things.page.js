/* eslint-disable quotes */
parasails.registerPage("available-things", {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    things: [],
    confirmDeleteThingModelOpen: false,
    selectedThing: undefined,

    //Photo
    uploadThingModalOpen: false,
    uploadFormData: {
      label: "",
    },
    formErrors: {},

    a: 110,
    b: 100,

    // Syncing / loading state
    syncing: false,

    //Server error state
    cloudError: "",
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function () {},
  mounted: async function () {
    //…
    console.log("THis Me : ", this.me.id);
    console.log("THIS OWNER", this.things);
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    //…
    // clickThing: async function (thingId) {
    //   console.log("click thing #", +thingId);
    //   await Cloud.destroyOneThing.with({ id: thingId });
    //   _.remove(this.things, { id: thingId });
    //   this.$forceUpdate();
    // },

    clickDeleteThing: async function (thingId) {
      // await Cloud.destroyOneThing.with({ id: thingId });
      this.confirmDeleteThingModelOpen = true;
      this.selectedThing = _.find(this.things, { id: thingId });
      console.log("selectedThing : ", this.selectedThing);
    },

    closeDeleteThingModal: async function () {
      this.selectedThing = undefined;
      this.confirmDeleteThingModelOpen = false;
    },

    //Take id of User
    handleParsingDeletingForm: function () {
      return { id: this.selectedThing.id };
    },

    submittedDeleteThingForm: function () {
      // Second methods
      // submittedDeleteThingForm: function (thingId) {
      // _.remove(this.things, { id: thingId });
      console.log("Ok it worked!");
      _.remove(this.things, { id: this.selectedThing.id });
      this.$forceUpdate();
      this.confirmDeleteThingModelOpen = false;
      this.selectedThing = undefined;
    },

    //Upload Photo
    clickAddButton: function () {
      this.uploadThingModalOpen = true;
    },

    //Clear uploadThing
    _clearUploadThingModal: function () {
      //Close model
      this.uploadThingModalOpen = false;
      //Reset form data
      this.uploadFormData = { label: "" };

      this.formError = {};
      this.cloudError = "";
    },

    //Close upload Modal Thing
    closeUploadThingModal: function () {
      this._clearUploadThingModal();
    },

    handleParsingUploadThingForm: function () {
      // Clear out any pre-existing error messages.
      this.formError = {};
      var argins = this.uploadFormData;

      // TODO validation go here

      //if there were any issues, they've already now been communicated to the user.
      // so simply return undefined. (this signifies that the submission should be)
      // cancelled
      if (Object.keys(this.formErrors).length > 0) {
        return 0;
      }
      return argins;
    },

    submittedUploadThingForm: function (/*result*/) {
      //TODO
      this._clearUploadThingModal();
    },
  },
});
