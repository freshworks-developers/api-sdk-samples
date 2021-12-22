const express = require('express');
const { Freshteam } = require("@freshworks/api-sdk");
const router = express.Router();

const domain = process.env.FRESHTEAM_DOMAIN;
const apiKey = process.env.FRESHTEAM_API_KEY;
const FT = new Freshteam(domain, apiKey);

/**
 * API to get the list of employees
 */
router.get('/list', async function(request, response) {
    try {
      const employeesList = await FT.employees.list();
      console.info('Successfully fetched employee list');
      console.info(employeesList);
      response.status(200).json(employeesList);
    } catch (error) {
      console.error("Error: Failed to get employees list");
      console.error(error);
      response.status(error.status).json(error.body);
    }
});

/**
 * API to get an employee's details
 */
router.get('/:employeeId', async function(request, response){
    try {
      const employee = await FT.employees.get(request.params.employeeId);
      console.info('Successfully fetched employee details for', request.params.employeeId);
      console.info(employee);
      response.status(200).json(employee);
    } catch (error) {
      console.error("Error: Failed to get employee details");
      console.error(error);
      response.status(error.status).json(error.body);
    }
});

/**
 * API to create an employee
 */
router.post('/', async function(request, response){
  const employee = new Freshteam.models.EmployeeCreate(
    request.body.first_name,
    request.body.last_name,
    request.body.official_email,
    request.body.role_ids
  );

  try {
    const employeeCreate = await FT.employees.create(employee);
    console.info('Successfully created an employee');
    console.info(employeeCreate);
    response.status(200).send(employeeCreate);
  } catch (error) {
    console.error("Error: Failed to create employee");
    console.error(error);
    response.status(error.status).json(error.body);
  }
});

/**
 * API to update an employee's details
 */
router.put('/:employeeId', async function(request, response){
  const employee = new Freshteam.models.EmployeeCreate(
    request.body.first_name,
    request.body.last_name,
    request.body.official_email,
    request.body.role_ids
  );

  try {
  const employeeUpdate = await FT.employees.update(request.params.employeeId, employee);
  console.info('Successfully updated the employee details for', request.params.employeeId);
    console.info(employeeUpdate);
    response.status(200).json(employeeUpdate);
  } catch (error) {
    console.error("Error: Failed to update employee details");
    console.error(error);
    response.status(error.status).json(error.body);
  }
});

/**
 * API to get the employee fields list
 */
router.get('/fields', async function(request, response){
    try {
      const employeeFields = await FT.employees.fields();
      console.info('Successfully fetched the employee fields list');
      console.info(employeeFields);
      response.status(200).json(employeeFields);
    } catch (error) {
      console.error("Error: Failed to get employee fields");
      console.error(error);
      response.status(error.status).json(error.body);
    }
});

/**
 * API to create an employee field
 */
router.post('/fields', async function(request, response){
  const properties = {
    label: request.body.label,
    required: request.body.required,
    section_name: request.body.section_name,
    field_type: request.body.field_type
  };
  const employeeField = new Freshteam.models.EmployeeFieldCreate(properties);

  try {
    const employeeCreateField = await FT.employees.createField(employeeField);
    console.info('Successfully created an employee field');
    console.info(employeeCreateField);
    response.status(200).json(employeeCreateField);
  } catch (error) {
    console.error("Error: Failed to create employee fields");
    console.error(error);
    response.status(error.status).json(error.body);
  }
});

module.exports = router;