exports.definition = {
    config : {
        columns : {
            "vin" : "text",
            "modelDescription" : "text",
            "comment" : "text"
        },
        adapter : {
            type : "sql",
            collection_name : "vehicle",
            "db_name" : "stock"
        }
    },
    extendModel : function(Model) {
        _.extend(Model.prototype, {
            // extended functions and properties go here
        });

        return Model;
    },
    extendCollection : function(Collection) {
        _.extend(Collection.prototype, {

            // Implement the comparator method.
            comparator : function(model) {
                return model.get('vin');
            }
        });
        // end extend

        return Collection;
    }
};
