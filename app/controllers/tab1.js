var vehicleId;

function showUpdateDialog(e) {
    vehicleId = e.source.vehicleId;
    $.updateDialog.show();
}

function updateComment(e) {
    if (e.index === e.cancel) {
        return;
    }
    var vin = Alloy.Collections.vehicle.get(vehicleId);
    vin.set({
        comment : e.text
    });
    vin.save();
}
