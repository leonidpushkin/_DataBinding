function Controller() {
    function __alloyId30(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId30.opts || {};
        var models = __alloyId29.models;
        var len = models.length;
        var __alloyId25 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId26 = models[i];
            __alloyId26.__transform = {};
            var __alloyId28 = {
                properties: {
                    height: 95
                },
                template: "rows",
                vin: {
                    text: "undefined" != typeof __alloyId26.__transform["vin"] ? __alloyId26.__transform["vin"] : __alloyId26.get("vin")
                },
                modelDescription: {
                    text: "undefined" != typeof __alloyId26.__transform["modelDescription"] ? __alloyId26.__transform["modelDescription"] : __alloyId26.get("modelDescription")
                },
                comment: {
                    text: "undefined" != typeof __alloyId26.__transform["comment"] ? __alloyId26.__transform["comment"] : __alloyId26.get("comment")
                },
                vehicleId: {
                    vehicleId: "undefined" != typeof __alloyId26.__transform["id"] ? __alloyId26.__transform["id"] : __alloyId26.get("id")
                }
            };
            __alloyId25.push(__alloyId28);
        }
        opts.animation ? $.__views.section.setItems(__alloyId25, opts.animation) : $.__views.section.setItems(__alloyId25);
    }
    function showUpdateDialog(e) {
        vehicleId = e.source.vehicleId;
        $.updateDialog.show();
    }
    function updateComment(e) {
        if (e.index === e.cancel) return;
        var vin = Alloy.Collections.vehicle.get(vehicleId);
        vin.set({
            comment: e.text
        });
        vin.save();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tab1";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("vehicle");
    $.__views.__alloyId15 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "ListView I",
        id: "__alloyId15"
    });
    var __alloyId17 = {};
    var __alloyId20 = [];
    var __alloyId21 = {
        type: "Ti.UI.Label",
        bindId: "vin",
        properties: {
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE,
            color: "#000",
            font: {
                fontSize: 20,
                fontFamily: "Helvetica Neue"
            },
            textAlign: "center",
            left: 5,
            top: 5,
            bindId: "vin"
        }
    };
    __alloyId20.push(__alloyId21);
    var __alloyId22 = {
        type: "Ti.UI.Label",
        bindId: "modelDescription",
        properties: {
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE,
            color: "#000",
            font: {
                fontSize: 20,
                fontFamily: "Helvetica Neue"
            },
            textAlign: "center",
            left: 5,
            top: 35,
            bindId: "modelDescription"
        }
    };
    __alloyId20.push(__alloyId22);
    var __alloyId23 = {
        type: "Ti.UI.Label",
        bindId: "comment",
        properties: {
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE,
            color: "#000",
            font: {
                fontSize: 20,
                fontFamily: "Helvetica Neue"
            },
            textAlign: "center",
            left: 5,
            top: 65,
            bindId: "comment"
        }
    };
    __alloyId20.push(__alloyId23);
    var __alloyId24 = {
        type: "Ti.UI.Button",
        bindId: "vehicleId",
        properties: {
            right: 0,
            bottom: 0,
            backgroundColor: "blue",
            color: "white",
            title: "Update comment",
            bindId: "vehicleId",
            bubbleParent: "false"
        },
        events: {
            click: showUpdateDialog
        }
    };
    __alloyId20.push(__alloyId24);
    var __alloyId19 = {
        properties: {
            name: "rows"
        },
        childTemplates: __alloyId20
    };
    __alloyId17["rows"] = __alloyId19;
    $.__views.section = Ti.UI.createListSection({
        id: "section"
    });
    var __alloyId29 = Alloy.Collections["vehicle"] || vehicle;
    __alloyId29.on("fetch destroy change add remove reset", __alloyId30);
    var __alloyId31 = [];
    __alloyId31.push($.__views.section);
    $.__views.__alloyId16 = Ti.UI.createListView({
        sections: __alloyId31,
        templates: __alloyId17,
        defaultItemTemplate: "rows",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    var __alloyId33 = [];
    __alloyId33.push("Cancel");
    __alloyId33.push("Update");
    $.__views.updateDialog = Ti.UI.createAlertDialog({
        buttonNames: __alloyId33,
        id: "updateDialog",
        title: "Enter comment",
        style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
        cancel: "0"
    });
    updateComment ? $.__views.updateDialog.addEventListener("click", updateComment) : __defers["$.__views.updateDialog!click!updateComment"] = true;
    $.__views.tab1 = Ti.UI.createTab({
        window: $.__views.__alloyId15,
        title: "ListView I",
        icon: "KS_nav_ui.png",
        id: "tab1"
    });
    $.__views.tab1 && $.addTopLevelView($.__views.tab1);
    exports.destroy = function() {
        __alloyId29.off("fetch destroy change add remove reset", __alloyId30);
    };
    _.extend($, $.__views);
    Alloy.Collections.vehicle.fetch();
    var vehicleId;
    __defers["$.__views.updateDialog!click!updateComment"] && $.__views.updateDialog.addEventListener("click", updateComment);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;