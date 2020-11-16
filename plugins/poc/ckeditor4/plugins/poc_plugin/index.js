define(function (require, exports, module) {
  var CKEditorTools = require("ckeditor-tools");

  CKEditorTools.registerPlugin("poc_plugin", {
    filepath: "plugin.js",
    module: module,
  });
});
