function Controller() {
    function __alloyId70(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId70.opts || {};
        var models = __alloyId69.models;
        var len = models.length;
        var __alloyId65 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId66 = models[i];
            __alloyId66.__transform = {};
            var __alloyId68 = {
                properties: {
                    height: 95,
                    vehicleId: "undefined" != typeof __alloyId66.__transform["id"] ? __alloyId66.__transform["id"] : __alloyId66.get("id")
                },
                template: "rows",
                vin: {
                    text: "undefined" != typeof __alloyId66.__transform["vin"] ? __alloyId66.__transform["vin"] : __alloyId66.get("vin")
                },
                modelDescription: {
                    text: "undefined" != typeof __alloyId66.__transform["modelDescription"] ? __alloyId66.__transform["modelDescription"] : __alloyId66.get("modelDescription")
                },
                comment: {
                    text: "undefined" != typeof __alloyId66.__transform["comment"] ? __alloyId66.__transform["comment"] : __alloyId66.get("comment")
                }
            };
            __alloyId65.push(__alloyId68);
        }
        opts.animation ? $.__views.section.setItems(__alloyId65, opts.animation) : $.__views.section.setItems(__alloyId65);
    }
    function itemClicked(e) {
        var item = e.section.getItemAt(e.itemIndex);
        var controller = Alloy.createController("detailWindow", {
            $model: Alloy.Collections.vehicle.get(item.properties.vehicleId)
        });
        $.navWin.openWindow(controller.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tab3";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("vehicle");
    $.__views.__alloyId56 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "__alloyId56"
    });
    var __alloyId58 = {};
    var __alloyId61 = [];
    var __alloyId62 = {
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
    __alloyId61.push(__alloyId62);
    var __alloyId63 = {
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
    __alloyId61.push(__alloyId63);
    var __alloyId64 = {
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
    __alloyId61.push(__alloyId64);
    var __alloyId60 = {
        properties: {
            name: "rows",
            accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE,
            bindId: "vehicleId"
        },
        childTemplates: __alloyId61
    };
    __alloyId58["rows"] = __alloyId60;
    $.__views.section = Ti.UI.createListSection({
        id: "section"
    });
    var __alloyId69 = Alloy.Collections["vehicle"] || vehicle;
    __alloyId69.on("fetch destroy change add remove reset", __alloyId70);
    var __alloyId71 = [];
    __alloyId71.push($.__views.section);
    $.__views.__alloyId57 = Ti.UI.createListView({
        sections: __alloyId71,
        templates: __alloyId58,
        defaultItemTemplate: "rows",
        id: "__alloyId57"
    });
    $.__views.__alloyId56.add($.__views.__alloyId57);
    itemClicked ? $.__views.__alloyId57.addEventListener("itemclick", itemClicked) : __defers["$.__views.__alloyId57!itemclick!itemClicked"] = true;
    $.__views.navWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId56,
        title: "Detail",
        id: "navWin"
    });
    $.__views.tab3 = Ti.UI.createTab({
        window: $.__views.navWin,
        title: "Detail",
        icon: "KS_nav_views.png",
        id: "tab3"
    });
    $.__views.tab3 && $.addTopLevelView($.__views.tab3);
    exports.destroy = function() {
        __alloyId69.off("fetch destroy change add remove reset", __alloyId70);
    };
    _.extend($, $.__views);
    Alloy.Collections.vehicle.fetch();
    __defers["$.__views.__alloyId57!itemclick!itemClicked"] && $.__views.__alloyId57.addEventListener("itemclick", itemClicked);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;