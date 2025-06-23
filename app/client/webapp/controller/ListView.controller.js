sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter"
], (Controller, formatter) => {
    "use strict";

    return Controller.extend("client.controller.ListView", {
        formatter: formatter,
        onInit() {
        }
    });
});