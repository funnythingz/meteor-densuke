/// <reference path="../reference.ts" />

if (Meteor.isClient) {

  Template['hello']['greeting'] = function () {
    return "Typescript-compile of Meteor";
  }

}
