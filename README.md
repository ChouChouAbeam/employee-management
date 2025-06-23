# On The Job Training Requirements
## Objective
Develop a full-stack employee management application on SAP BTP to manage employee records, linked to master data for roles and departments, with salary calculations based on role and years of service. 

Using CAP for backend services, SAPUI5 for the frontend, and SAP HANA Cloud as the database, mastering basic CAP (data modeling, associations, custom logic) and SAPUI5 (UI development, OData binding, navigation) concepts.
## Prerequisites
•	SAP BTP Trial Account: Configured with Cloud Foundry, SAP HANA Cloud instance, and SAP Business Application Studio (BAS).

•	Core knowledge: Node.js, JavaScript, XML, JSON, APIs, SQL.

•	Source control: GitHub account
## Functional Requirements
### 1.	Data Models (CAP):
a.	Roles: Master table with ID (UUID), name (e.g., Developer, Manager, Analyst), base salary (e.g., $50,000, $70,000, $40,000).

b.	Departments: Master table with ID (UUID), name (e.g., IT, HR).

c.	Employees: ID (UUID), firstName, lastName, email, hireDate, salary (calculated), role (linked to Roles), department (linked to Departments).

d.	Relationships: One-to-one associations (Employee  Role, Employee  Department).
### 2.	Salary Calculation (CAP):
a.	Base salary from Roles table.

b.	Bonus: +$1,000 per year of service (from hireDate to current date).

c.	Example: Developer hired May 18, 2022 → $50,000 + (3 × $1,000) = $53,000.

d.	Logic implemented in CAP before CREATE/UPDATE of employee records.
### 3.	Backend Services (CAP):
a.	Expose Roles, Departments, Employees as OData V4 endpoints.

b.	Support CRUD operations and navigation between entities.

c.	Deploy to SAP HANA Cloud.
### 4.	Frontend (SAPUI5 – Free style UI5):
a.	List View: Display employees with name, role, department, email, and salary (formatted as USD/VND).

b.	Detail View: Edit employee details (name, email, hireDate, role, department) with salary display (read-only).

c.	Use ComboBox for role and department selection from master data.

d.	Support navigation, CRUD operations, and OData binding.

e.	Deploy to SAP BTP.
### 5.	Database (SAP HANA Cloud):
a.	Persist Roles, Departments, Employees tables with relationships.

b.	Support data retrieval and updates via CAP.
### 6.	GitHub Code Management: 
a.	Create a GitHub repository for the project (employee-management).

b.	Structure with branches: main (production-ready), develop (integration)

c.	Commit changes for each major task (e.g., CAP model, SAPUI5 list views).

d.	Use pull requests (PRs) to merge develop branches into main.
## Deliverables
•	Deployed CAP backend with OData services for Roles, Departments, Employees.

•	SAPUI5 frontend with list-detail views for employee management.

•	Populated SAP HANA Cloud database with sample data (e.g., 3 roles, 2 departments, 5 employees).

•	Report documenting challenges and lesson learnings.
