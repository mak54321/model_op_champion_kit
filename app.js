// INPUTS
// CONSERVATIVE
var Revenue_Benefit_per_Model_CON;

var Total_No_of_Models_in_the_Organization_CON;

var Average_percent_Growth_of_New_Models_per_Year_CON;

var Average_percent_of_Models_Requiring_Revalidation_CON;

var Current_MRM_Headcount1_CON;

var Average_no_of_New_Model_Validations_per_Validator_per_Year_CON;

var Average_no_of_Model_Revalidations_per_Validator_per_Year_CON;

var Total_Annual_Loaded_Costs_per_Validator_CON;

var The_percentage_of_MRM_repetetive_menial_ModelOp_Center_CON;

//Input
// Moderate
var Revenue_Benefit_per_Model_MOD;

var Total_no_of_Models_in_the_Organization_MOD;

var Average_percent_Growth_of_New_Models_per_Year_MOD;

var Average_percent_of_Models_Requiring_Revalidation_MOD;

var Current_MRM_Headcount1_MOD;

var Average_no_of_New_Model_Validations_per_Validator_per_Year_MOD;

var Average_no_of_Model_Revalidations_per_Validator_per_Year_MOD;

var Total_Annual_Loaded_Costs_per_Validator_MOD;

var The_percentage_of_MRM_repetetive_menial_ModelOp_Center_MOD;









//Output
//CONSERVATIVE
var Total_No_of_Models_in_the_Organization_CON1;
var Total_No_of_Models_in_the_Organization_CON2;
var Total_No_of_Models_in_the_Organization_CON3;

var Total_requested_validations_revalidations_in_a_given_year_CON1;
var Total_requested_validations_revalidations_in_a_given_year_CON2;
var Total_requested_validations_revalidations_in_a_given_year_CON3;

var Total_validation_and_revalidation_capacity_with_current_headcount_CON1;
var Total_validation_and_revalidation_capacity_with_current_headcount_CON2;
var Total_validation_and_revalidation_capacity_with_current_headcount_CON3;

var Additional_Headcount_Required_1_CON;
var Additional_Headcount_Required_2_CON;
var Additional_Headcount_Required_3_CON;

var OPEX__Increase_for_Additional_Headcount1;
var OPEX__Increase_for_Additional_Headcount2;
var OPEX__Increase_for_Additional_Headcount3;

var Increase_Avoidance_through_ModelOp_Center_CON1;
var Increase_Avoidance_through_ModelOp_Center_CON2;
var Increase_Avoidance_through_ModelOp_Center_CON3;

// MODERATE
var Total_no_of_Models_in_the_Organization_MOD1;
var Total_no_of_Models_in_the_Organization_MOD2;
var Total_no_of_Models_in_the_Organization_MOD3;

var Total_requested_validations_revalidations_in_a_given_year_MOD1;
var Total_requested_validations_revalidations_in_a_given_year_MOD2;
var Total_requested_validations_revalidations_in_a_given_year_MOD3;

var Total_validation_and_revalidation_capacity_with_current_headcount_MOD1;
var Total_validation_and_revalidation_capacity_with_current_headcount_MOD2;
var Total_validation_and_revalidation_capacity_with_current_headcount_MOD3;

var Additional_Headcount_Required_1_MOD;
var Additional_Headcount_Required_2_MOD;
var Additional_Headcount_Required_3_MOD;

var Increase_for_Additional_Headcount_MOD1;
var Increase_for_Additional_Headcount_MOD2;
var Increase_for_Additional_Headcount_MOD3;

var Increase_Avoidance_through_ModelOp_Center_MOD1;
var Increase_Avoidance_through_ModelOp_Center_MOD2;
var Increase_Avoidance_through_ModelOp_Center_MOD3;

// Potential Revenue Impact ($M's, USD)

// input
var Increase_Avoidance_through_ModelOp_Center_CON1_PRV1 = Increase_Avoidance_through_ModelOp_Center_CON1 / 1000000;
var Increase_Avoidance_through_ModelOp_Center_MOD1_PRV2 = Increase_Avoidance_through_ModelOp_Center_MOD1 / 1000000;
var Increase_Avoidance_through_ModelOp_Center_CON2_PRV3 = Increase_Avoidance_through_ModelOp_Center_CON2 / 1000000;
var Increase_Avoidance_through_ModelOp_Center_MOD2_PRV4 = Increase_Avoidance_through_ModelOp_Center_MOD2 / 1000000;
var Increase_Avoidance_through_ModelOp_Center_CON3_PRV5 = Increase_Avoidance_through_ModelOp_Center_CON3 / 1000000;
var Increase_Avoidance_through_ModelOp_Center_MOD3_PRV6 = Increase_Avoidance_through_ModelOp_Center_MOD3 / 1000000;

// out put
var Model_Risk_Industrialization1;
var Model_Risk_Industrialization2;
var Model_Risk_Industrialization3;
var Model_Risk_Industrialization4;
var Model_Risk_Industrialization5;
var Model_Risk_Industrialization6;

var Model_Risk_Industrialization_SUM1;
var Model_Risk_Industrialization_SUM2;

var Yearly_Total1;
var Yearly_Total2;
var Yearly_Total3;
var Yearly_Total4;
var Yearly_Total5;
var Yearly_Total6;

var Cumulative_Total1;
var Cumulative_Total2;
var Cumulative_Total3;
var Cumulative_Total4;
var Cumulative_Total5;
var Cumulative_Total6;

var Conservative1;
var Conservative2;
var Conservative3;
var ConservativeSum;

var Moderate1;
var Moderate2;
var Moderate3;
var ModerativeSum;

var chart;

//calculate function
function calculate() {
  //CONSERVATIVE GET INPUT





  Revenue_Benefit_per_Model_CON = parseFloat(document.getElementById("Revenue_Benefit_per_Model_CON").value);
  Total_No_of_Models_in_the_Organization_CON = parseFloat(document.getElementById("Total_No_of_Models_in_the_Organizatio_CON").value);
  Average_percent_Growth_of_New_Models_per_Year_CON = parseFloat(document.getElementById("Average_percent_Growth_of_New_Models_per_Year_CON").value);
  Average_percent_of_Models_Requiring_Revalidation_CON = parseFloat(document.getElementById("Average_percent_of_Models_Requiring_Revalidation_CON").value);
  Current_MRM_Headcount1_CON = parseFloat(document.getElementById("Current_MRM_Headcount1_CON").value);
  Average_no_of_New_Model_Validations_per_Validator_per_Year_CON = parseFloat(document.getElementById("Average_no_of_New_Model_Validations_per_Validator_per_Year_CON").value);
  Average_no_of_Model_Revalidations_per_Validator_per_Year_CON = parseFloat(document.getElementById("Average_no_of_Model_Revalidations_per_Validator_per_Year_CON").value);
  Total_Annual_Loaded_Costs_per_Validator_CON = parseFloat(document.getElementById("Total_Annual_Loaded_Costs_per_Validator_CON").value);
  The_percentage_of_MRM_repetetive_menial_ModelOp_Center_CON = parseFloat(document.getElementById("The_percentage_of_MRM_repetetive_menial_ModelOp_Center_CON").value);

  // MODEERATE GET IN PUTS
  Revenue_Benefit_per_Model_MOD = parseFloat(document.getElementById("Revenue_Benefit_per_Model_MOD").value);
  Total_no_of_Models_in_the_Organization_MOD = parseFloat(document.getElementById("Total_no_of_Models_in_the_Organization_MOD").value);
  Average_percent_Growth_of_New_Models_per_Year_MOD = parseFloat(document.getElementById("Average_percent_Growth_of_New_Models_per_Year_MOD").value);
  Average_percent_of_Models_Requiring_Revalidation_MOD = parseFloat(document.getElementById("Average_percent_of_Models_Requiring_Revalidation_MOD").value);
  Current_MRM_Headcount1_MOD = parseFloat(document.getElementById("Current_MRM_Headcount1_MOD").value);
  Average_no_of_New_Model_Validations_per_Validator_per_Year_MOD = parseFloat(document.getElementById("Average_no_of_New_Model_Validations_per_Validator_per_Year_MOD").value);
  Average_no_of_Model_Revalidations_per_Validator_per_Year_MOD = parseFloat(document.getElementById("Average_no_of_Model_Revalidations_per_Validator_per_Year_MOD").value);
  Total_Annual_Loaded_Costs_per_Validator_MOD = parseFloat(document.getElementById("Total_Annual_Loaded_Costs_per_Validator_MOD").value);
  The_percentage_of_MRM_repetetive_menial_ModelOp_Center_MOD = parseFloat(document.getElementById("The_percentage_of_MRM_repetetive_menial_ModelOp_Center_MOD").value);


  Revenue_Benefit_per_Model_CON = Revenue_Benefit_per_Model_CON || 0;
  Total_No_of_Models_in_the_Organization_CON = Total_No_of_Models_in_the_Organization_CON || 0;
  Average_percent_Growth_of_New_Models_per_Year_CON = Average_percent_Growth_of_New_Models_per_Year_CON || 0;
  Average_percent_of_Models_Requiring_Revalidation_CON = Average_percent_of_Models_Requiring_Revalidation_CON || 0;
  Current_MRM_Headcount1_CON = Current_MRM_Headcount1_CON || 0;
  Average_no_of_New_Model_Validations_per_Validator_per_Year_CON = Average_no_of_New_Model_Validations_per_Validator_per_Year_CON || 0;
  Average_no_of_Model_Revalidations_per_Validator_per_Year_CON = Average_no_of_Model_Revalidations_per_Validator_per_Year_CON || 0;
  Total_Annual_Loaded_Costs_per_Validator_CON = Total_Annual_Loaded_Costs_per_Validator_CON || 0;
  The_percentage_of_MRM_repetetive_menial_ModelOp_Center_CON = The_percentage_of_MRM_repetetive_menial_ModelOp_Center_CON || 0;



  Revenue_Benefit_per_Model_MOD = Total_no_of_Models_in_the_Organization_MOD || 0;
  Total_no_of_Models_in_the_Organization_MOD = Total_no_of_Models_in_the_Organization_MOD || 0;
  Average_percent_Growth_of_New_Models_per_Year_MOD = Average_percent_Growth_of_New_Models_per_Year_MOD || 0;
  Average_percent_of_Models_Requiring_Revalidation_MOD = Average_percent_of_Models_Requiring_Revalidation_MOD || 0;
  Current_MRM_Headcount1_MOD = Current_MRM_Headcount1_MOD || 0;
  Average_no_of_New_Model_Validations_per_Validator_per_Year_MOD = Average_no_of_New_Model_Validations_per_Validator_per_Year_MOD || 0;
  Average_no_of_Model_Revalidations_per_Validator_per_Year_MOD = Average_no_of_Model_Revalidations_per_Validator_per_Year_MOD || 0;
  Total_Annual_Loaded_Costs_per_Validator_MOD = Total_Annual_Loaded_Costs_per_Validator_MOD || 0;
  The_percentage_of_MRM_repetetive_menial_ModelOp_Center_MOD = The_percentage_of_MRM_repetetive_menial_ModelOp_Center_MOD || 0;

  // Coservatives

  Average_percent_Growth_of_New_Models_per_Year_CON = Average_percent_Growth_of_New_Models_per_Year_CON / 100;
  Average_percent_of_Models_Requiring_Revalidation_CON = Average_percent_of_Models_Requiring_Revalidation_CON / 100;
  The_percentage_of_MRM_repetetive_menial_ModelOp_Center_CON = The_percentage_of_MRM_repetetive_menial_ModelOp_Center_CON / 100;

  // MODERATE

  Average_percent_Growth_of_New_Models_per_Year_MOD = Average_percent_Growth_of_New_Models_per_Year_MOD / 100;
  Average_percent_of_Models_Requiring_Revalidation_MOD = Average_percent_of_Models_Requiring_Revalidation_MOD / 100;
  The_percentage_of_MRM_repetetive_menial_ModelOp_Center_MOD = The_percentage_of_MRM_repetetive_menial_ModelOp_Center_MOD / 100;

  // Zero / clear inputs if unassigned
  // Revenue_Benefit_per_Model =  Revenue_Benefit_per_Model|| 0;
  // Total_No_of_Models_in_the_Organization = Total_No_of_Models_in_the_Organization || 0;
  // Average_percent_Growth_of_New_Models_per_Year =  Average_percent_Growth_of_New_Models_per_Year || 0;
  // Average_percent_of_Models_Requiring_Revalidation =  Average_percent_of_Models_Requiring_Revalidation || 0;
  // Current_MRM_Headcount1 = Current_MRM_Headcount1 || 0;
  // Total_Annual_Loaded_Costs_per_Validator= Total_Annual_Loaded_Costs_per_Validator || 0;
  // current_MRM_Headcount2= current_MRM_Headcount2 || 0;
  // Average_revenue_driven_from_the_given_model_on_a_yearly_basis= Average_revenue_driven_from_the_given_model_on_a_yearly_basis || 0;
  // Total_current_number_of_models_in_the_organization = Total_current_number_of_models_in_the_organization || 0;
  // The_growth_of_NEW_models_that_are_produced_in_a_given_year = The_growth_of_NEW_models_that_are_produced_in_a_given_year || 0;
  // revalidation_in_a_given_year =  revalidation_in_a_given_year|| 0;
  // The_current_headcount_dedicated_to_Model_Risk_Management =  The_current_headcount_dedicated_to_Model_Risk_Management || 0;
  // validator_can_review_in_a_given_year =  validator_can_review_in_a_given_year || 0;
  // The_total_annual_loaded_costs =  The_total_annual_loaded_costs || 0;
  // The_percentage_of_MRM_repetetive_menial =  The_percentage_of_MRM_repetetive_menial || 0;

  //convert numbers to percentages

  // CONSERVATIVE_CALCULATION
  Total_No_of_Models_in_the_Organization_CON1 = Total_No_of_Models_in_the_Organization_CON;
  Total_No_of_Models_in_the_Organization_CON2 = Total_No_of_Models_in_the_Organization_CON1 * (1 + Average_percent_Growth_of_New_Models_per_Year_CON);
  Total_No_of_Models_in_the_Organization_CON3 = Total_No_of_Models_in_the_Organization_CON2 * (1 + Average_percent_Growth_of_New_Models_per_Year_CON);

  Total_requested_validations_revalidations_in_a_given_year_CON1 = Math.ceil((Total_No_of_Models_in_the_Organization_CON * (Average_percent_of_Models_Requiring_Revalidation_CON)) + (Total_No_of_Models_in_the_Organization_CON * Average_percent_Growth_of_New_Models_per_Year_CON));
  Total_requested_validations_revalidations_in_a_given_year_CON2 = Math.ceil((Total_No_of_Models_in_the_Organization_CON2 * (Average_percent_of_Models_Requiring_Revalidation_CON)) + (Total_No_of_Models_in_the_Organization_CON2 * Average_percent_Growth_of_New_Models_per_Year_CON));
  Total_requested_validations_revalidations_in_a_given_year_CON3 = Math.ceil((Total_No_of_Models_in_the_Organization_CON3 * (Average_percent_of_Models_Requiring_Revalidation_CON)) + (Total_No_of_Models_in_the_Organization_CON3 * Average_percent_Growth_of_New_Models_per_Year_CON));

  Total_validation_and_revalidation_capacity_with_current_headcount_CON1 = Current_MRM_Headcount1_CON * (Average_no_of_Model_Revalidations_per_Validator_per_Year_CON + Average_no_of_New_Model_Validations_per_Validator_per_Year_CON);
  Total_validation_and_revalidation_capacity_with_current_headcount_CON2 = Current_MRM_Headcount1_CON * (Average_no_of_Model_Revalidations_per_Validator_per_Year_CON + Average_no_of_New_Model_Validations_per_Validator_per_Year_CON);
  Total_validation_and_revalidation_capacity_with_current_headcount_CON3 = Current_MRM_Headcount1_CON * (Average_no_of_Model_Revalidations_per_Validator_per_Year_CON + Average_no_of_New_Model_Validations_per_Validator_per_Year_CON);

  Additional_Headcount_Required_1_CON = Math.ceil((Total_requested_validations_revalidations_in_a_given_year_CON1 - Total_validation_and_revalidation_capacity_with_current_headcount_CON1) / (Average_no_of_New_Model_Validations_per_Validator_per_Year_CON + Average_no_of_Model_Revalidations_per_Validator_per_Year_CON));
  Additional_Headcount_Required_2_CON = Math.ceil((Total_requested_validations_revalidations_in_a_given_year_CON2 - Total_validation_and_revalidation_capacity_with_current_headcount_CON2) / (Average_no_of_New_Model_Validations_per_Validator_per_Year_CON + Average_no_of_Model_Revalidations_per_Validator_per_Year_CON));
  Additional_Headcount_Required_3_CON = Math.ceil(Total_requested_validations_revalidations_in_a_given_year_CON3 - Total_validation_and_revalidation_capacity_with_current_headcount_CON3) / (Average_no_of_New_Model_Validations_per_Validator_per_Year_CON + Average_no_of_Model_Revalidations_per_Validator_per_Year_CON);

  OPEX__Increase_for_Additional_Headcount1 = Additional_Headcount_Required_1_CON * Total_Annual_Loaded_Costs_per_Validator_CON;
  OPEX__Increase_for_Additional_Headcount2 = Additional_Headcount_Required_2_CON * Total_Annual_Loaded_Costs_per_Validator_CON;
  OPEX__Increase_for_Additional_Headcount3 = Additional_Headcount_Required_3_CON * Total_Annual_Loaded_Costs_per_Validator_CON;


  Increase_Avoidance_through_ModelOp_Center_CON1 = OPEX__Increase_for_Additional_Headcount1 * The_percentage_of_MRM_repetetive_menial_ModelOp_Center_CON;
  Increase_Avoidance_through_ModelOp_Center_CON2 = OPEX__Increase_for_Additional_Headcount2 * The_percentage_of_MRM_repetetive_menial_ModelOp_Center_CON;
  Increase_Avoidance_through_ModelOp_Center_CON3 = OPEX__Increase_for_Additional_Headcount3 * The_percentage_of_MRM_repetetive_menial_ModelOp_Center_CON;



  // MODERATE_CALCULATION

  Total_no_of_Models_in_the_Organization_MOD1 = Total_no_of_Models_in_the_Organization_MOD;
  Total_no_of_Models_in_the_Organization_MOD2 = Total_no_of_Models_in_the_Organization_MOD * (1 + Average_percent_Growth_of_New_Models_per_Year_MOD);
  Total_no_of_Models_in_the_Organization_MOD3 = Total_no_of_Models_in_the_Organization_MOD2 * (1 + Average_percent_Growth_of_New_Models_per_Year_MOD);

  Total_requested_validations_revalidations_in_a_given_year_MOD1 = Math.ceil((Total_no_of_Models_in_the_Organization_MOD * Average_percent_of_Models_Requiring_Revalidation_MOD) + (Total_no_of_Models_in_the_Organization_MOD * Average_percent_Growth_of_New_Models_per_Year_MOD));
  Total_requested_validations_revalidations_in_a_given_year_MOD2 = Math.ceil((Total_no_of_Models_in_the_Organization_MOD2 * Average_percent_of_Models_Requiring_Revalidation_MOD) + (Total_no_of_Models_in_the_Organization_MOD2 * Average_percent_Growth_of_New_Models_per_Year_MOD));
  Total_requested_validations_revalidations_in_a_given_year_MOD3 = Math.ceil((Total_no_of_Models_in_the_Organization_MOD3 * Average_percent_of_Models_Requiring_Revalidation_MOD) + (Total_no_of_Models_in_the_Organization_MOD3 * Average_percent_Growth_of_New_Models_per_Year_MOD));

  Total_validation_and_revalidation_capacity_with_current_headcount_MOD1 = (Current_MRM_Headcount1_MOD * (Average_no_of_Model_Revalidations_per_Validator_per_Year_MOD + Average_no_of_New_Model_Validations_per_Validator_per_Year_MOD));
  Total_validation_and_revalidation_capacity_with_current_headcount_MOD2 = Current_MRM_Headcount1_MOD * (Average_no_of_Model_Revalidations_per_Validator_per_Year_MOD + Average_no_of_New_Model_Validations_per_Validator_per_Year_MOD);
  Total_validation_and_revalidation_capacity_with_current_headcount_MOD3 = Current_MRM_Headcount1_MOD * (Average_no_of_Model_Revalidations_per_Validator_per_Year_MOD + Average_no_of_New_Model_Validations_per_Validator_per_Year_MOD);

  Additional_Headcount_Required_1_MOD = Math.ceil((Total_requested_validations_revalidations_in_a_given_year_MOD1 - Total_validation_and_revalidation_capacity_with_current_headcount_MOD1) / (Average_no_of_New_Model_Validations_per_Validator_per_Year_MOD + Average_no_of_Model_Revalidations_per_Validator_per_Year_MOD));
  Additional_Headcount_Required_2_MOD = Math.ceil((Total_requested_validations_revalidations_in_a_given_year_MOD2 - Total_validation_and_revalidation_capacity_with_current_headcount_MOD2) / (Average_no_of_New_Model_Validations_per_Validator_per_Year_MOD + Average_no_of_Model_Revalidations_per_Validator_per_Year_MOD));
  Additional_Headcount_Required_3_MOD = Math.ceil((Total_requested_validations_revalidations_in_a_given_year_MOD3 - Total_validation_and_revalidation_capacity_with_current_headcount_MOD3) / (Average_no_of_New_Model_Validations_per_Validator_per_Year_MOD + Average_no_of_Model_Revalidations_per_Validator_per_Year_MOD));

  Increase_for_Additional_Headcount_MOD1 = Additional_Headcount_Required_1_MOD * Total_Annual_Loaded_Costs_per_Validator_MOD;
  Increase_for_Additional_Headcount_MOD2 = Additional_Headcount_Required_2_MOD * Total_Annual_Loaded_Costs_per_Validator_MOD;
  Increase_for_Additional_Headcount_MOD3 = Additional_Headcount_Required_3_MOD * Total_Annual_Loaded_Costs_per_Validator_MOD;

  Increase_Avoidance_through_ModelOp_Center_MOD1 = Increase_for_Additional_Headcount_MOD1 * The_percentage_of_MRM_repetetive_menial_ModelOp_Center_MOD;
  Increase_Avoidance_through_ModelOp_Center_MOD2 = Increase_for_Additional_Headcount_MOD2 * The_percentage_of_MRM_repetetive_menial_ModelOp_Center_MOD;
  Increase_Avoidance_through_ModelOp_Center_MOD3 = Increase_for_Additional_Headcount_MOD3 * The_percentage_of_MRM_repetetive_menial_ModelOp_Center_MOD;


  Increase_Avoidance_through_ModelOp_Center_CON1_PRV1 = Increase_Avoidance_through_ModelOp_Center_CON1 / 1000000;
  Increase_Avoidance_through_ModelOp_Center_MOD1_PRV2 = Increase_Avoidance_through_ModelOp_Center_MOD1 / 1000000;
  Increase_Avoidance_through_ModelOp_Center_CON2_PRV3 = Increase_Avoidance_through_ModelOp_Center_CON2 / 1000000;
  Increase_Avoidance_through_ModelOp_Center_MOD2_PRV4 = Increase_Avoidance_through_ModelOp_Center_MOD2 / 1000000;
  Increase_Avoidance_through_ModelOp_Center_CON3_PRV5 = Increase_Avoidance_through_ModelOp_Center_CON3 / 1000000;
  Increase_Avoidance_through_ModelOp_Center_MOD3_PRV6 = Increase_Avoidance_through_ModelOp_Center_MOD3 / 1000000;

  // Potential Revenue Impact ($M's, USD)
  Model_Risk_Industrialization1 = Increase_Avoidance_through_ModelOp_Center_CON1_PRV1;
  Model_Risk_Industrialization2 = Increase_Avoidance_through_ModelOp_Center_MOD1_PRV2;
  Model_Risk_Industrialization3 = Increase_Avoidance_through_ModelOp_Center_CON2_PRV3;
  Model_Risk_Industrialization4 = Increase_Avoidance_through_ModelOp_Center_MOD2_PRV4;
  Model_Risk_Industrialization5 = Increase_Avoidance_through_ModelOp_Center_CON3_PRV5;
  Model_Risk_Industrialization6 = Increase_Avoidance_through_ModelOp_Center_MOD3_PRV6;

  Model_Risk_Industrialization_SUM1 = (Model_Risk_Industrialization1 + Model_Risk_Industrialization3 + Model_Risk_Industrialization5).toFixed(2);
  Model_Risk_Industrialization_SUM2 = (Model_Risk_Industrialization2 + Model_Risk_Industrialization4 + Model_Risk_Industrialization6).toFixed(2);

  Yearly_Total1 = Model_Risk_Industrialization1;
  Yearly_Total2 = Model_Risk_Industrialization2;
  Yearly_Total3 = Model_Risk_Industrialization3;
  Yearly_Total4 = Model_Risk_Industrialization4;
  Yearly_Total5 = Model_Risk_Industrialization5;
  Yearly_Total6 = Model_Risk_Industrialization6;

  Cumulative_Total1 = Yearly_Total1;
  Cumulative_Total2 = Yearly_Total2;
  Cumulative_Total3 = Cumulative_Total1 + Yearly_Total3;
  Cumulative_Total4 = Cumulative_Total2 + Yearly_Total4;
  Cumulative_Total5 = Cumulative_Total3 + Yearly_Total5;
  Cumulative_Total6 = Cumulative_Total4 + Yearly_Total6;

  Conservative1 = Model_Risk_Industrialization1;
  Conservative2 = Model_Risk_Industrialization3;
  Conservative3 = Model_Risk_Industrialization5;


  ConservativeSum = Conservative1 + Conservative2 + Conservative3;

  Moderate1 = Model_Risk_Industrialization2;
  Moderate2 = Model_Risk_Industrialization4;
  Moderate3 = Model_Risk_Industrialization6;

  ModerativeSum = Model_Risk_Industrialization2 + Model_Risk_Industrialization4 + Model_Risk_Industrialization6;
  //   MINUTES_NEEDED_PER_CONTACT =  toDealYourPhone  + waitMintToLeaveMsg +  mintForQualityPitch + mintToPreareNextCall;

  //   CONTACT_HOUR = (60 - minutsPerHoure)/17;

  //   DAILY_SIGNUPS = CONTACT_HOUR * hourYourWorkPerDay * (freeSnipitSigne/100);

  //   OVER_ALL_EARNING_HOURE = MONTH_3_EARNING / hourYourWorkPerDay;

  //   TOTAL_HOURES_WORKED_PER_MONTH = daysWorkedPerMonth * hourYourWorkPerDay;

  //   TOTAL_EARING_IN_3_MONTHS = daysWorkedPerMonth * MONTH_3_EARNING;

  //   ANNUAL_INCOME_IN_THIS_NEW_LEVEL = (TOTAL_EARING_IN_3_MONTHS * 4);

  //   DEALY_EARNIG = DAILY_SIGNUPS * dailyWebsiteVisitorPerSignup * (compeletedInslall/100) *  (decryptedLeads/100) * costPerLead * (decryptedLeadsSold/100) * Affiliate_shares_of_all_bought_leads;

  //   WEEKLY_EARNING =  DEALY_EARNIG * 7;

  //   MONTHLY_EARNING =  WEEKLY_EARNING * 4.3;

  //   MONTH_3_EARNING = MONTHLY_EARNING * 3;

  //   COMPAPARE_SYSTEM_EARNIG_HOUR = OVER_ALL_EARNING_HOURE;

  //   MONTHLY_HOUR_YOU_WORK_NOW = daysWorkedPerMonth * workhourPerDay;

  //   CURRENT_EARNING_IN_3_MONTHS = yourHourlyAvgEarnigNow * MONTHLY_HOUR_YOU_WORK_NOW * 3;

  //   YOUR_CURRENT_ANNUAL_BASE_INCOME =  CURRENT_EARNING_IN_3_MONTHS * 4;



 


  // totalDailyVisitor = (newDailyLeads / (visitorsWhoBecomesLeadsUsually / 100))
  // paidDailyVisitors = ((EstimatedPerPaidTraffic * totalDailyVisitor) / 100)
  // freeDailyVisitor = (totalDailyVisitor - paidDailyVisitors)
  // extraLeadFromMagicSnippet = extraLeadsPerFromMagicSnippet * totalDailyVisitor * 0.98;
  // dailyVisitorWhoAreLostLead = totalDailyVisitor - newDailyLeads - extraLeadFromMagicSnippet;
  // perOfVisitorWhoAreUndentiable = ((dailyVisitorWhoAreLostLead / totalDailyVisitor) * 100);
  // totalLeadsCostperDay =  (costPerPaidVisitor * paidDailyVisitors) +  (codePermagicSnippetLead *  extraLeadsPerFromMagicSnippet * totalDailyVisitor * 0.98);
  // costPerLead =  totalLeadsCostperDay / (newDailyLeads + extraLeadFromMagicSnippet);
  // leedsNeededPerSale = costPerLead * leadsNeedTCreateEachSale;
  // profitperSale =
  //   (revenuePerSale - Cogs - costPerLead * leadsNeedTCreateEachSale)
  // salesPerDay =
  //   (newDailyLeads + extraLeadFromMagicSnippet) / leadsNeedTCreateEachSale;
  // profitperDay = profitperSale * salesPerDay;
  // profitPer5DayWeek = profitperDay * 5;
  // profitPer50Weeks = profitPer5DayWeek * 50;
  // dailyMoneyWastedonUnidentifiableVisitors =
  //   ((dailyVisitorWhoAreLostLead *
  //     EstimatedPerPaidTraffic *
  //     costPerPaidVisitor) /
  //     100)


  

//update chart
 chart.data.datasets[0].data=[Yearly_Total1,Yearly_Total3,Yearly_Total5];
 chart.data.datasets[1].data=[Yearly_Total2,Yearly_Total4,Yearly_Total6];
 chart.update();
  //  TDV = Calculating;




  document.getElementById("Total_No_of_Models_in_the_Organization_CON1").innerText = Total_No_of_Models_in_the_Organization_CON1.toLocaleString(undefined, { maximumFractionDigits: 0 });;
  document.getElementById("Total_No_of_Models_in_the_Organization_CON2").innerText = Total_No_of_Models_in_the_Organization_CON2.toLocaleString(undefined, { maximumFractionDigits: 0 });;
  document.getElementById("Total_No_of_Models_in_the_Organization_CON3").innerText = Total_No_of_Models_in_the_Organization_CON3.toLocaleString(undefined, { maximumFractionDigits: 0 });;

  document.getElementById("Total_requested_validations_revalidations_in_a_given_year_CON1").innerText = Total_requested_validations_revalidations_in_a_given_year_CON1.toLocaleString(undefined, { maximumFractionDigits: 0 });;
  document.getElementById("Total_requested_validations_revalidations_in_a_given_year_CON2").innerText = Total_requested_validations_revalidations_in_a_given_year_CON2.toLocaleString(undefined, { maximumFractionDigits: 0 });;
  document.getElementById("Total_requested_validations_revalidations_in_a_given_year_CON3").innerText = Total_requested_validations_revalidations_in_a_given_year_CON3.toLocaleString(undefined, { maximumFractionDigits: 0 });;

  document.getElementById("Total_validation_and_revalidation_capacity_with_current_headcount_CON1").innerText = Total_validation_and_revalidation_capacity_with_current_headcount_CON1.toLocaleString(undefined, { maximumFractionDigits: 0 });
  document.getElementById("Total_validation_and_revalidation_capacity_with_current_headcount_CON2").innerText = Total_validation_and_revalidation_capacity_with_current_headcount_CON2.toLocaleString(undefined, { maximumFractionDigits: 0 });
  document.getElementById("Total_validation_and_revalidation_capacity_with_current_headcount_CON3").innerText = Total_validation_and_revalidation_capacity_with_current_headcount_CON3.toLocaleString(undefined, { maximumFractionDigits: 0 });

  document.getElementById("Additional_Headcount_Required_1_CON").innerText = Additional_Headcount_Required_1_CON.toLocaleString(undefined, { maximumFractionDigits: 0 });;
  document.getElementById("Additional_Headcount_Required_2_CON").innerText = Additional_Headcount_Required_2_CON.toLocaleString(undefined, { maximumFractionDigits: 0 });;
  document.getElementById("Additional_Headcount_Required_3_CON").innerText = Additional_Headcount_Required_3_CON.toLocaleString(undefined, { maximumFractionDigits: 0 });;

  document.getElementById("OPEX__Increase_for_Additional_Headcount1").innerText = OPEX__Increase_for_Additional_Headcount1.toLocaleString(undefined, { maximumFractionDigits: 0 });;
  document.getElementById("OPEX__Increase_for_Additional_Headcount2").innerText = OPEX__Increase_for_Additional_Headcount2.toLocaleString(undefined, { maximumFractionDigits: 0 });;
  document.getElementById("OPEX__Increase_for_Additional_Headcount3").innerText = OPEX__Increase_for_Additional_Headcount3.toLocaleString(undefined, { maximumFractionDigits: 0 });;



  document.getElementById("Increase_Avoidance_through_ModelOp_Center_CON1").innerText = Increase_Avoidance_through_ModelOp_Center_CON1.toLocaleString(undefined, { maximumFractionDigits: 0 });;
  document.getElementById("Increase_Avoidance_through_ModelOp_Center_CON2").innerText = Increase_Avoidance_through_ModelOp_Center_CON2.toLocaleString(undefined, { maximumFractionDigits: 0 });;
  document.getElementById("Increase_Avoidance_through_ModelOp_Center_CON3").innerText = Increase_Avoidance_through_ModelOp_Center_CON3.toLocaleString(undefined, { maximumFractionDigits: 0 });;
  // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  document.getElementById("Total_no_of_Models_in_the_Organization_MOD1").innerText = Total_no_of_Models_in_the_Organization_MOD1.toLocaleString(undefined, { maximumFractionDigits: 0 });;
  document.getElementById("Total_no_of_Models_in_the_Organization_MOD2").innerText = Total_no_of_Models_in_the_Organization_MOD2.toLocaleString(undefined, { maximumFractionDigits: 0 });;
  document.getElementById("Total_no_of_Models_in_the_Organization_MOD3").innerText = Total_no_of_Models_in_the_Organization_MOD3.toLocaleString(undefined, { maximumFractionDigits: 0 });;

  document.getElementById("Total_requested_validations_revalidations_in_a_given_year_MOD1").innerText = Total_requested_validations_revalidations_in_a_given_year_MOD1.toLocaleString(undefined, { maximumFractionDigits: 0 });;
  document.getElementById("Total_requested_validations_revalidations_in_a_given_year_MOD2").innerText = Total_requested_validations_revalidations_in_a_given_year_MOD2.toLocaleString(undefined, { maximumFractionDigits: 0 });;
  document.getElementById("Total_requested_validations_revalidations_in_a_given_year_MOD3").innerText = Total_requested_validations_revalidations_in_a_given_year_MOD3.toLocaleString(undefined, { maximumFractionDigits: 0 });;

  document.getElementById("Total_validation_and_revalidation_capacity_with_current_headcount_MOD1").innerText = Total_validation_and_revalidation_capacity_with_current_headcount_MOD1.toLocaleString(undefined, { maximumFractionDigits: 0 });;
  document.getElementById("Total_validation_and_revalidation_capacity_with_current_headcount_MOD2").innerText = Total_validation_and_revalidation_capacity_with_current_headcount_MOD2.toLocaleString(undefined, { maximumFractionDigits: 0 });;
  document.getElementById("Total_validation_and_revalidation_capacity_with_current_headcount_MOD3").innerText = Total_validation_and_revalidation_capacity_with_current_headcount_MOD3.toLocaleString(undefined, { maximumFractionDigits: 0 });;

  document.getElementById("Additional_Headcount_Required_1_MOD").innerText = Additional_Headcount_Required_1_MOD.toLocaleString(undefined, { maximumFractionDigits: 0 });;
  document.getElementById("Additional_Headcount_Required_2_MOD").innerText = Additional_Headcount_Required_2_MOD.toLocaleString(undefined, { maximumFractionDigits: 0 });;
  document.getElementById("Additional_Headcount_Required_3_MOD").innerText = Additional_Headcount_Required_3_MOD.toLocaleString(undefined, { maximumFractionDigits: 0 });;

  document.getElementById("Increase_for_Additional_Headcount_MOD1").innerText = Increase_for_Additional_Headcount_MOD1.toLocaleString(undefined, { maximumFractionDigits: 0 });;
  document.getElementById("Increase_for_Additional_Headcount_MOD2").innerText = Increase_for_Additional_Headcount_MOD2.toLocaleString(undefined, { maximumFractionDigits: 0 });;
  document.getElementById("Increase_for_Additional_Headcount_MOD3").innerText = Increase_for_Additional_Headcount_MOD3.toLocaleString(undefined, { maximumFractionDigits: 0 });;

  document.getElementById("Increase_Avoidance_through_ModelOp_Center_MOD1").innerText = Increase_Avoidance_through_ModelOp_Center_MOD1.toLocaleString(undefined, { maximumFractionDigits: 0 });;
  document.getElementById("Increase_Avoidance_through_ModelOp_Center_MOD2").innerText = Increase_Avoidance_through_ModelOp_Center_MOD2.toLocaleString(undefined, { maximumFractionDigits: 0 });;
  document.getElementById("Increase_Avoidance_through_ModelOp_Center_MOD3").innerText = Increase_Avoidance_through_ModelOp_Center_MOD3.toLocaleString(undefined, { maximumFractionDigits: 0 });;


  document.getElementById("Model_Risk_Industrialization1").innerText = Model_Risk_Industrialization1.toLocaleString(undefined, { maximumFractionDigits: 2 });;
  document.getElementById("Model_Risk_Industrialization2").innerText = Model_Risk_Industrialization2.toLocaleString(undefined, { maximumFractionDigits: 2 });;
  document.getElementById("Model_Risk_Industrialization3").innerText = Model_Risk_Industrialization3.toLocaleString(undefined, { maximumFractionDigits: 2 });;
  document.getElementById("Model_Risk_Industrialization4").innerText = Model_Risk_Industrialization4.toLocaleString(undefined, { maximumFractionDigits: 2 });;
  document.getElementById("Model_Risk_Industrialization5").innerText = Model_Risk_Industrialization5.toLocaleString(undefined, { maximumFractionDigits: 2 });;
  document.getElementById("Model_Risk_Industrialization6").innerText = Model_Risk_Industrialization6.toLocaleString(undefined, { maximumFractionDigits: 2 });;

  document.getElementById("Model_Risk_Industrialization_SUM1").innerText = Model_Risk_Industrialization_SUM1.toLocaleString(undefined, { maximumFractionDigits: 2 });;
  document.getElementById("Model_Risk_Industrialization_SUM2").innerText = Model_Risk_Industrialization_SUM2.toLocaleString(undefined, { maximumFractionDigits: 2 });;

  document.getElementById("Yearly_Total1").innerText = Yearly_Total1.toLocaleString(undefined, { maximumFractionDigits: 2 });;
  document.getElementById("Yearly_Total2").innerText = Yearly_Total2.toLocaleString(undefined, { maximumFractionDigits: 2 });;
  document.getElementById("Yearly_Total3").innerText = Yearly_Total3.toLocaleString(undefined, { maximumFractionDigits: 2 });;
  document.getElementById("Yearly_Total4").innerText = Yearly_Total4.toLocaleString(undefined, { maximumFractionDigits: 2 });;
  document.getElementById("Yearly_Total5").innerText = Yearly_Total5.toLocaleString(undefined, { maximumFractionDigits: 2 });;
  document.getElementById("Yearly_Total6").innerText = Yearly_Total6.toLocaleString(undefined, { maximumFractionDigits: 2 });;

  document.getElementById("Cumulative_Total1").innerText = Cumulative_Total1.toLocaleString(undefined, { maximumFractionDigits: 2 });;
  document.getElementById("Cumulative_Total2").innerText = Cumulative_Total2.toLocaleString(undefined, { maximumFractionDigits: 2 });;
  document.getElementById("Cumulative_Total3").innerText = Cumulative_Total3.toLocaleString(undefined, { maximumFractionDigits: 2 });;
  document.getElementById("Cumulative_Total4").innerText = Cumulative_Total4.toLocaleString(undefined, { maximumFractionDigits: 2 });;
  document.getElementById("Cumulative_Total5").innerText = Cumulative_Total5.toLocaleString(undefined, { maximumFractionDigits: 2 });;
  document.getElementById("Cumulative_Total6").innerText = Cumulative_Total6.toLocaleString(undefined, { maximumFractionDigits: 2 });;

  document.getElementById("Conservative1").innerText = Conservative1.toLocaleString(undefined, { maximumFractionDigits: 2 });;
  document.getElementById("Conservative2").innerText = Conservative2.toLocaleString(undefined, { maximumFractionDigits: 2 });;
  document.getElementById("Conservative3").innerText = Conservative3.toLocaleString(undefined, { maximumFractionDigits: 2 });;
  document.getElementById("ConservativeSum").innerText = ConservativeSum.toLocaleString(undefined, { maximumFractionDigits: 2 });;

  document.getElementById("Moderate1").innerText = Moderate1.toLocaleString(undefined, { maximumFractionDigits: 2 });;
  document.getElementById("Moderate2").innerText = Moderate2.toLocaleString(undefined, { maximumFractionDigits: 2 });;
  document.getElementById("Moderate3").innerText = Moderate3.toLocaleString(undefined, { maximumFractionDigits: 2 });;
  document.getElementById("ModerativeSum").innerText = ModerativeSum.toLocaleString(undefined, { maximumFractionDigits: 2 });;


 




}

chart = new Chart(document.getElementById("bar-chart"), {
  type: 'bar',
  
      data: {
       
        labels: ["Year1", "Year2", "Year3"],
        datasets: [
          {
            label: "Conservative",
            // data: [Yearly_Total1,Yearly_Total3,Yearly_Total5],
            data: [34,55,66,],
            backgroundColor: [
              "#0a7139",
              "#0a7139",
              "#0a7139"
            ],
          },
          {
            label: "Moderative",
            // data: [Yearly_Total2,Yearly_Total4,Yearly_Total6],
            data: [66,33,22],
            backgroundColor: [
              "#5B9CD6",
              "#5B9CD6",
              "#5B9CD6"
             
            ],
          },
        
        ]
       
      },
  options: {
    responsive: true,
    maintainAspectRatio:false,
    title: {
      display: true,
      position: "top",
      text: "Model Risk Industrialization Yearly OPEX Benefits ($M USD)",
      fontSize: 30,
      fontColor: "black"
    },
  
  
  
    legend: {
      display: true,
      position: "bottom",
      labels: {
      
          filter: (legendItem, data) => (typeof legendItem.text !== 'undefined'),
        
        fontColor: "#333",
        fontSize: 16
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          min: 0
        }
      }]
    }
  }
  }
  
  );
  
  var s= document.getElementById('bar-chart');
  
  s.style.backgroundColor= '#dedede';
  // s.height(500);
  




  function closingModel() {
    if (document.getElementById('userEmail').value != '') {
      if (
        document.getElementById('userEmail').value.includes('@') == true &&
        document.getElementById('userEmail').value.includes('.com') == true
      ) {
        $('#error1').hide();
        $('#error2').hide();
  
        sendEmailFunction();
        $('#modelId').modal('hide');
        $('#emailSubmitted').show().delay(2000).fadeOut();
      } else {
        $('#error2').show();
      }
    } else {
      $('#error1').show();
    }
  }



  function sendEmailFunction() {
    gettingAllTheLatestValuesOfInputs();
  
   
  // ________
  // debugger;
  
    var table1 =document.getElementsByClassName('output1')[0].outerHTML;

    var table2 =document.getElementsByClassName('output2')[0].outerHTML;
    
    var table3=document.getElementsByClassName('input1')[0].outerHTML;
  
    var table4= document.getElementsByClassName('input2')[0].outerHTML;

    var table5=document.getElementsByClassName('output3')[0].outerHTML;
    
    var table6=document.getElementsByClassName('output4')[0].outerHTML;

  
   
    var uniq = new Date().getTime();
    var currentUrl = window.location.href;
    var generatedUrl = currentUrl + '?id=' + uniq; 
  
    $.ajax({
      //switch
     // url: 'model/submitfeedback.php',
     url: '../model_op_champion_kit_mri/model/submitfeedback.php',
      type: 'POST',
      data: {
        uniqueId: uniq,
        currentPageUrl: currentUrl,
        userEmail: document.getElementById('userEmail').value,
        allInputs: arrayOfAllTheInputs,
        table_1:table1,
        table_2:table2,
        table_3:table3,
        table_4:table4,
        table_5:table5,
        table_6:table6,
        url: generatedUrl,
        
        
      
      },
      success: function (data) {

        document.getElementById('uniqueLinkDiv').style.display = '';
        document.getElementById('uniqueLinkValue').innerHTML = generatedUrl;
        document.getElementById('uniqueLinkValue').href = generatedUrl;
        console.log(data);
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log('Error');
      },
    });
  }
  //////////
  
  var arrayOfAllTheInputs;
  var gettingAllInputsByUsingClassName;
  // ---------------------------------
  function gettingAllTheLatestValuesOfInputs() {
    arrayOfAllTheInputs = [];
  
    gettingAllInputsByUsingClassName = document.getElementsByClassName('input');
    for (var i = 0; i < gettingAllInputsByUsingClassName.length; i++) {
        arrayOfAllTheInputs.push(gettingAllInputsByUsingClassName[i].value);
    }
  }

  function setingAllTheLatestValuesOfInputs(arrayOfAllTheOutput) {
    gettingAllInputsByUsingClassName = document.getElementsByClassName('input');
    for(var i=0; i< gettingAllInputsByUsingClassName.length; i++){
      document.getElementsByClassName('input')[i].value = arrayOfAllTheOutput[i+1];
    }
    
  }
// ____________________________________________________________
// ____________________________________________________________
var CSV_File_data;
var allUniqueIdInCSVFile;

function CheckIfUserAlreadyFound() {
  // gettingAllTheLatestValuesOfInputs();

  // Checking If Unique Id In Url Is Present In Our CSV File
  const urlOfCurrentWebsite = window.location.href;

  const urlParams = new URLSearchParams(window.location.search);
  var currentUserId = urlParams.get('id');
  if (currentUserId != null) {
    // For Getting Data Of CSV File
    $.ajax({
      //switch
     // url: 'model/get_CSV_data.php',
     url: '../model_op_champion_kit_mri/model/get_CSV_data.php',
      type: 'POST',
      data: {
        currentUserId: currentUserId,
      },
      success: function (data) {
  
        //   -------------------------------
        //   Splitting CSV data in readable format
        var myResultAfterRemovingComma = data.split('_,');

        setingAllTheLatestValuesOfInputs(myResultAfterRemovingComma)
        calculate();
        document.getElementById("hide").style = "display: none;";
        console.log('ITs DONE');

        // ___________
        // -------------------------
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log('Error');
      },
    });
  } else {
    console.log('No User:');
  }
}

