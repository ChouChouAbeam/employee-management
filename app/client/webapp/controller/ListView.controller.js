sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "../model/formatter"
], (Controller, JSONModel, Filter, FilterOperator, formatter) => {
    "use strict";

    return Controller.extend("client.controller.ListView", {
        formatter: formatter,

        onInit() {
            this._loadRolesAndDepartments();
        },

        _loadRolesAndDepartments() {
            const oModel = this.getOwnerComponent().getModel();
            const oSearchModel = new JSONModel({
                filters: {
                    department: "",
                    level: ""
                }
            });

            this.getView().setModel(oSearchModel, "search");

            // OData V4 - Gọi service để lấy Roles
            const oRolesBinding = oModel.bindList("/Roles");
            oRolesBinding.requestContexts().then((aContexts) => {
                const roles = aContexts.map(oContext => oContext.getObject());
                const allRoles = [{ key: "", text: "All" }];

                // Thêm roles vào array
                roles.forEach(role => {
                    allRoles.push({
                        key: role.ID || role.id,
                        text: role.name || role.Name
                    });
                });

                // Cập nhật roles trong search model
                oSearchModel.setProperty("/roles", allRoles);
            }).catch((oError) => {
                console.error("Error loading roles:", oError);
            });

            // OData V4 - Gọi service để lấy Departments
            const oDepartmentsBinding = oModel.bindList("/Departments");
            oDepartmentsBinding.requestContexts().then((aContexts) => {
                const aDepartments = aContexts.map(oContext => oContext.getObject());
                const aDepartmentsList = [{ key: "", text: "All" }];

                // Thêm departments vào array
                aDepartments.forEach(dept => {
                    aDepartmentsList.push({
                        key: dept.ID || dept.id,
                        text: dept.name || dept.Name
                    });
                });

                // Cập nhật departments trong search model
                oSearchModel.setProperty("/departments", aDepartmentsList);
            }).catch((oError) => {
                console.error("Error loading departments:", oError);
            });
        },

        onSearchChange() {
            const oSearchModel = this.getView().getModel("search");
            const oTable = this.byId("employeeTable");
            const oBinding = oTable.getBinding("items");

            const sDepartment = oSearchModel.getProperty("/filters/department");
            const sRole = oSearchModel.getProperty("/filters/role");

            const aFilters = [];

            // Filter Department
            if (sDepartment) {
                aFilters.push(new Filter("department_ID", FilterOperator.EQ, sDepartment));
            }

            // Filter Role
            if (sRole) {
                aFilters.push(new Filter("role_ID", FilterOperator.EQ, sRole));
            }

            // Apply filters
            oBinding.filter(aFilters);

        },

        onEditEmployee() { }

    });
});