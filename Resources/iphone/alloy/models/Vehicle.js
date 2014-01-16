exports.definition = {
    config: {
        columns: {
            id: "integer",
            vin: "text",
            modelDescription: "text",
            comment: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "vehicle",
            db_name: "stock",
            idAttribute: "id"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            comparator: function(model) {
                return model.get("vin");
            }
        });
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("vehicle", exports.definition, [ function(migration) {
    migration.name = "vehicle";
    migration.id = "201401151246934";
    migration.up = function(migrator) {
        migrator.createTable({
            columns: {
                id: "integer",
                vin: "text",
                modelDescription: "text",
                comment: "text"
            }
        });
        for (var i = 0; 20 > i; i++) migrator.insertRow({
            id: i,
            vin: "VVW" + Math.floor(99999999999999 * Math.random()) + 1,
            modelDescription: "modelDescription" + i,
            comment: "<update me>"
        });
    };
    migration.down = function(migrator) {
        migrator.dropTable();
    };
} ]);

collection = Alloy.C("vehicle", exports.definition, model);

exports.Model = model;

exports.Collection = collection;