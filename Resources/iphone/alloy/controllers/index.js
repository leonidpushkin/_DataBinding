function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId5 = [];
    $.__views.__alloyId6 = Alloy.createController("tab1", {
        id: "__alloyId6"
    });
    __alloyId5.push($.__views.__alloyId6.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId9 = Alloy.createController("tab2", {
        id: "__alloyId9"
    });
    __alloyId5.push($.__views.__alloyId9.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId12 = Alloy.createController("tab3", {
        id: "__alloyId12"
    });
    __alloyId5.push($.__views.__alloyId12.getViewEx({
        recurse: true
    }));
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId5,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;