migration.up = function(migrator) {
    migrator.createTable({
        "columns" : {
            "id" : "integer",
            "vin" : "text",
            "modelDescription" : "text",
            "comment" : "text"
        }
    });
    for (var i = 0; i < 20; i++) {
        migrator.insertRow({
            id : i,
            vin : 'VVW' + Math.floor(Math.random() * (99999999999999 - 1 + 1)) + 1,
            modelDescription : 'modelDescription' + i,
            comment : '<update me>'
        });
    }
};

migration.down = function(migrator) {
    migrator.dropTable();
};
