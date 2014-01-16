function Controller() {
    function __alloyId52(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId52.opts || {};
        var models = __alloyId51.models;
        var len = models.length;
        var __alloyId47 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId48 = models[i];
            __alloyId48.__transform = {};
            var __alloyId50 = {
                properties: {
                    height: 95
                },
                template: "rows",
                vin: {
                    text: "undefined" != typeof __alloyId48.__transform["vin"] ? __alloyId48.__transform["vin"] : __alloyId48.get("vin")
                },
                modelDescription: {
                    text: "undefined" != typeof __alloyId48.__transform["modelDescription"] ? __alloyId48.__transform["modelDescription"] : __alloyId48.get("modelDescription")
                },
                comment: {
                    text: "undefined" != typeof __alloyId48.__transform["comment"] ? __alloyId48.__transform["comment"] : __alloyId48.get("comment")
                }
            };
            __alloyId47.push(__alloyId50);
        }
        opts.animation ? $.__views.section.setItems(__alloyId47, opts.animation) : $.__views.section.setItems(__alloyId47);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tab2";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("vehicle");
    $.__views.__alloyId38 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "ListView II",
        id: "__alloyId38"
    });
    var __alloyId40 = {};
    var __alloyId43 = [];
    var __alloyId44 = {
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
    __alloyId43.push(__alloyId44);
    var __alloyId45 = {
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
    __alloyId43.push(__alloyId45);
    var __alloyId46 = {
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
    __alloyId43.push(__alloyId46);
    var __alloyId42 = {
        properties: {
            name: "rows"
        },
        childTemplates: __alloyId43
    };
    __alloyId40["rows"] = __alloyId42;
    $.__views.section = Ti.UI.createListSection({
        id: "section"
    });
    var __alloyId51 = Alloy.Collections["vehicle"] || vehicle;
    __alloyId51.on("fetch destroy change add remove reset", __alloyId52);
    var __alloyId53 = [];
    __alloyId53.push($.__views.section);
    $.__views.__alloyId39 = Ti.UI.createListView({
        sections: __alloyId53,
        templates: __alloyId40,
        defaultItemTemplate: "rows",
        id: "__alloyId39"
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    $.__views.tab2 = Ti.UI.createTab({
        window: $.__views.__alloyId38,
        title: "ListView II",
        icon: "KS_nav_ui.png",
        id: "tab2"
    });
    $.__views.tab2 && $.addTopLevelView($.__views.tab2);
    exports.destroy = function() {
        __alloyId51.off("fetch destroy change add remove reset", __alloyId52);
    };
    _.extend($, $.__views);
    Alloy.Collections.vehicle.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;