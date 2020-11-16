define(function(require, exports, module) {

    var CKEditorTools = require("ckeditor-tools");

    CKEditorTools.registerPlugin("mathjax", {
        "filepath": "plugin.js",
        "module": module
    });

});
