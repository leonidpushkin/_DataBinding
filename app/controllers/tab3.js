function itemClicked(e) {
    var item = e.section.getItemAt(e.itemIndex);
    var controller = Alloy.createController('detailWindow', {
        "$model" : Alloy.Collections.vehicle.get(item.properties.vehicleId)
    });
    $.navWin.openWindow(controller.getView());
}
