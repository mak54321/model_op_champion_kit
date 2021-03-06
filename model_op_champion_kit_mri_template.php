<?php
/*
Template Name: Model op champion kit mti
*/

get_header();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> -->

  <!--  <link rel="stylesheet" href="style.css"> switch -->
  <link rel="stylesheet" href="../model_op_champion_kit_mri/style.css">

    <title>model_op_champion_kit_mri</title>
</head>

<body onload="CheckIfUserAlreadyFound()">
    <div class="header">
        <div class="heding">
            <h1 class="headingh1" style="font-weight: 700 ; text-transform:uppercase;">
                <span style="color: #006731">Model Risk Industrialization</span> value calculator
            </h1>
        </div>
    </div>

    <div class="container">



        <div id="marginTop" class="over_flow">
            <br>
        <div class="left">
        <h2>Enter your data into the Calculator</h2>

          
          
        </div>
        <div style="border: 1px solod black;" class="over_flow ">
            <table class="table input1 ">

                <tr>
                    <th scope="col" class="textCenter">INPUT</th>
                    <th scope="col" class="textCenter">CONSERVATIVE</th>
                    <th scope="col" class="textCenter">MODERATE</th>

                </tr>



                <tr>
                    <th colspan="5" scope="row" style="background-color: #00AB51; color: white">GENERAL</th>

                </tr>
                <tr>
                    <th scope="row">Ave. Revenue Benefit per Model p.a.</th>
                    <td> <input class="tableInputLighter input " type="number" value="10000000"
                            oninput="calculate();"  id="Revenue_Benefit_per_Model_CON">
                    </td>
                    <td> <input class="tableInputLighter input" type="number" value="20000000"
                            oninput="calculate();"  id="Revenue_Benefit_per_Model_MOD">
                    </td>
                    <td>USD</td>
                    <td>Average revenue (dollars) driven from the given model on a yearly basis</td>
                </tr>
                <tr>
                    <th scope="row">Total # of Models in the Organization</th>
                    <td> <input class="tableInputLighter input"  type="number" value="200"
                            oninput="calculate();"  id="Total_No_of_Models_in_the_Organizatio_CON">
                    </td>
                    <td> <input class="tableInputLighter input"  type="number" value="200"
                            oninput="calculate();"  id="Total_no_of_Models_in_the_Organization_MOD">
                    </td>
                    <td>Models</td>
                    <td>Total current number of models in the organization</td>
                </tr>
                <tr>
                    <th scope="row">Average % Growth of New Models per Year</th>
                    <td> <input class="tableInputLighter input" type="number" value="30" oninput="calculate();"
                            id="Average_percent_Growth_of_New_Models_per_Year_CON">
                    </td>
                    <td> <input class="tableInputLighter input" type="number" value="30" oninput="calculate();"
                            id="Average_percent_Growth_of_New_Models_per_Year_MOD">
                    </td>
                    <td>%</td>
                    <td>The % growth of NEW models that are produced in a given year</td>
                </tr>
                <tr>
                    <th scope="row">Average % of Models Requiring Revalidation</th>
                    <td> <input class="tableInputLighter input" type="number" value="50" oninput="calculate();"
                            id="Average_percent_of_Models_Requiring_Revalidation_CON">
                    </td>
                    <td> <input class="tableInputLighter input" type="number" value="66" oninput="calculate();"
                            id="Average_percent_of_Models_Requiring_Revalidation_MOD">
                    </td>
                    <td>%</td>
                    <td>The average % of all models in the enterprise that require revalidation in a given year</td>
                </tr>
                <tr>
                    <th scope="row">Current MRM Headcount</th>
                    <td> <input class="tableInputLighter input" type="number" value="10" oninput="calculate();"
                            id="Current_MRM_Headcount1_CON">
                    </td>
                    <td> <input class="tableInputLighter input" type="number" value="10" oninput="calculate();"
                            id="Current_MRM_Headcount1_MOD">
                    </td>
                    <td>Headcount</td>
                    <td>The current headcount dedicated to Model Risk Management</td>
                </tr>
                <tr>
                    <th scope="row">Average # of New Model Validations per Validator per Year</th>
                    <td> <input class="tableInputLighter input" type="number" value="3" oninput="calculate();"
                            id="Average_no_of_New_Model_Validations_per_Validator_per_Year_CON">
                    </td>
                    <td> <input class="tableInputLighter input" type="number" value="3" oninput="calculate();"
                            id="Average_no_of_New_Model_Validations_per_Validator_per_Year_MOD">
                    </td>
                    <td>Validations</td>
                    <td>The average number of NEW models that a given validator can review in a given year</td>
                </tr>
                <tr>
                    <th scope="row">Average # of Model Revalidations per Validator per Year</th>
                    <td> <input class="tableInputLighter input" type="number" value="3" oninput="calculate();"
                            id="Average_no_of_New_Model_Validations_per_Validator_per_Year_CON">
                    </td>
                    <td> <input class="tableInputLighter input" type="number" value="3" oninput="calculate();"
                            id="Average_no_of_New_Model_Validations_per_Validator_per_Year_MOD">
                    </td>
                    <td>Revalidations</td>
                    <td>The average number of models that a given validator can Re-validate in a given year</td>
                </tr>
                <tr>
                    <th scope="row">Total Annual Loaded Costs per Validator</th>
                    <td> <input class="tableInputLighter input" type="number" value="250000" oninput="calculate();"
                             id="Total_Annual_Loaded_Costs_per_Validator_CON">
                    </td>
                    <td> <input class="tableInputLighter input" type="number" value="250000" oninput="calculate();"
                             id="Total_Annual_Loaded_Costs_per_Validator_MOD">
                    </td>
                    <td>USD ($)</td>
                    <td>The total annual loaded costs (salary, benefits, taxes, etc.) for a given Validator</td>
                </tr>
                <tr>
                    <th scope="row">% of MRM work that can be streamlined via ModelOp Center</th>
                    <td> <input class="tableInputLighter input" type="number" value="50" oninput="calculate();"
                            id="The_percentage_of_MRM_repetetive_menial_ModelOp_Center_CON">
                    </td>
                    <td> <input class="tableInputLighter input" type="number" value="75" oninput="calculate();"
                            id="The_percentage_of_MRM_repetetive_menial_ModelOp_Center_MOD">
                    </td>
                    <td>%</td>
                    <td>The % of MRM repetetive/menial tasks that can be streamlined with ModelOp Center</td>
                </tr>


            </table>
        </div>
            <table class="table output1 mt-5">

                <tr>
                    <th></th>
                    <th colspan="8" scope="row" style="background-color: #006731; color: white; text-align: center;">
                        Potential Revenue Impact ($M's, USD)</th>

                </tr>
                <tr>
                    <th></th>
                    <th scope="col" class="textCenter" colspan="2">Year 1</th>

                    <th scope="col" class="textCenter" colspan="2">Year 2</th>

                    <th scope="col" class="textCenter" colspan="2">Year 3</th>

                    <th scope="col" class="textCenter" colspan="2">Total</th>

                </tr>

                <tr>
                    <th scope="row" >Benefit Area</th>
                    <td class="textCenter" class="i_o">CONS</td>
                    <td class="blue" class="i_o">MOD</td>
                    <td class="textCenter" class="i_o">CONS</td>
                    <td class="blue" class="i_o">MOD</td>
                    <td class="textCenter" class="i_o">CONS</td>
                    <td class="blue" class="i_o">MOD</td>
                    <th class="textCenter" class="i_o">CONS</th>
                    <th class="blue" class="i_o">MOD</th>
                </tr>
                <tr>
                    <th scope="row">Model Risk Industrialization</th>
                    <td id="Model_Risk_Industrialization1" class="i_o"></td>
                    <td id="Model_Risk_Industrialization2" class="i_o"></td>
                    <td id="Model_Risk_Industrialization3" class="i_o"></td>
                    <td id="Model_Risk_Industrialization4" class="i_o"></td>
                    <td id="Model_Risk_Industrialization5" class="i_o"></td>
                    <td id="Model_Risk_Industrialization6" class="i_o"></td>
                    <td id="Model_Risk_Industrialization_SUM1" class="i_o"></td>
                    <td id="Model_Risk_Industrialization_SUM2" class="i_o"></td>
                </tr>
                <tr>
                    <th scope="row" class="greencolor">Yearly Total</th>

                    <td id="Yearly_Total1" class="i_o" class="greencolor"></td>
                    <td id="Yearly_Total2" class="i_o" class="greencolor"></td>
                    <td id="Yearly_Total3" class="i_o" class="greenclass=" ></td>
                    <td id="Yearly_Total4" class="i_o" class="greenclass=" ></td>
                    <td id="Yearly_Total5" class="i_o" class="greenclass=" ></td>
                    <td id="Yearly_Total6" class="i_o" class="greencolor"></td>


                </tr>
                <tr>
                    <th scope="row">Cumulative Total</th>
                    <td class="i_o" id="Cumulative_Total1"></td>
                    <td class="i_o" id="Cumulative_Total2"></td>
                    <td class="i_o" id="Cumulative_Total3"></td>
                    <td class="i_o" id="Cumulative_Total4"></td>
                    <td class="i_o" id="Cumulative_Total5"></td>
                    <td class="i_o" id="Cumulative_Total6"></td>
                </tr>


            </table>
        </div>
        <br>
        <br>
        <br>
        <div class="chart-container over_flow" style="height: 500px;">

            <canvas id="bar-chart"></canvas>
        </div>
        <br>
        <br>
        <br>
        <h2 style="color: #006731;
      text-align: center ;"><strong> SUMMARY FOR CHARTS </strong></h2>
        <br>
        <div class="over_flow">
        <table class="table output2">

            <tr>
                <th scope="col" style="color: white;"></th>
                <th scope="col" class="textCenter">Year 1</th>
                <th scope="col" class="textCenter">Year 2</th>
                <th scope="col" class="textCenter">Year 3</th>
                <th scope="col" class="textCenter">Total</th>
            </tr>

            <tr>
                <th scope="row">Conservative</th>
                <td class="i_o" id="Conservative1"></td>
                <td class="i_o" id="Conservative2"></td>
                <td class="i_o" id="Conservative3"></td>
                <td class="i_o" id="ConservativeSum"></td>
            </tr>
            <tr>
                <th scope="row">Moderate</th>
                <td class="i_o" id="Moderate1"></td>
                <td class="i_o" id="Moderate2"></td>
                <td class="i_o" id="Moderate3"></td>
                <td class="i_o" id="ModerativeSum"></td>


        </table>
    </div>
        
        <br>

        <div class="over_flow">
            <table class="table input2">

                <tr>
                    <th scope="col" class="textCenter">INPUTS</th>
                    <th scope="col" class="textCenter">CONSERVATIVE</th>
                    <th scope="col" class="textCenter">MODERATE</th>

                </tr>

                <tr>
                    <th scope="row">Ave. Revenue Benefit per Model p.a.</th>
                    <td> <input class="tableInputLighter input" type="number" value="10000000" oninput="calculate();"
                             id="Revenue_Benefit_per_Model_CON">
                    </td>
                    <td> <input class="tableInputLighter input" type="number" value="20000000" oninput="calculate();"
                             id="Revenue_Benefit_per_Model_MOD">
                    </td>

                </tr>
                <tr>
                    <th scope="row">Total # of Models in the Organization</th>
                    <td> <input class="tableInputLighter input" type="number" value="200" oninput="calculate();"
                            id="Total_No_of_Models_in_the_Organizatio_CON">
                    </td>
                    <td> <input class="tableInputLighter input" type="number" value="200" oninput="calculate();"
                            id="Total_no_of_Models_in_the_Organization_MOD">
                    </td>

                </tr>
                <tr>
                    <th scope="row">Average % Growth of New Models per Year</th>
                    <td> <input class="tableInputLighter input" type="number" value="30" oninput="calculate();"
                            id="Average_percent_Growth_of_New_Models_per_Year_CON">
                    </td>
                    <td> <input class="tableInputLighter input" type="number" value="30" oninput="calculate();"
                            id="Average_percent_Growth_of_New_Models_per_Year_MOD">
                    </td>

                </tr>
                <tr>
                    <th scope="row">Average % of Models Requiring Revalidation</th>
                    <td> <input class="tableInputLighter input" type="number" value="50" oninput="calculate();"
                            id="Average_percent_of_Models_Requiring_Revalidation_CON">
                    </td>
                    <td> <input class="tableInputLighter input" type="number" value="66" oninput="calculate();"
                            id="Average_percent_of_Models_Requiring_Revalidation_MOD">
                    </td>

                </tr>
                <tr>
                    <th scope="row">Current MRM Headcount</th>
                    <td> <input class="tableInputLighter input" type="number" value="10" oninput="calculate();"
                            id="Current_MRM_Headcount1_CON">
                    </td>
                    <td> <input class="tableInputLighter input" type="number" value="10" oninput="calculate();"
                            id="Current_MRM_Headcount1_MOD">
                    </td>

                </tr>
                <tr>
                    <th scope="row">Average # of New Model Validations per Validator per Year</th>
                    <td> <input class="tableInputLighter input" type="number" value="3" oninput="calculate();"
                            id="Average_no_of_New_Model_Validations_per_Validator_per_Year_CON">
                    </td>
                    <td> <input class="tableInputLighter input" type="number" value="3" oninput="calculate();"
                            id="Average_no_of_New_Model_Validations_per_Validator_per_Year_MOD">
                    </td>

                </tr>
                <tr>
                    <th scope="row">Average # of Model Revalidations per Validator per Year</th>
                    <td> <input class="tableInputLighter input" type="number" value="5" oninput="calculate();"
                            id="Average_no_of_Model_Revalidations_per_Validator_per_Year_CON">
                    </td>
                    <td> <input class="tableInputLighter input" type="number" value="5" oninput="calculate();"
                            id="Average_no_of_Model_Revalidations_per_Validator_per_Year_MOD">
                    </td>

                </tr>
                <tr>
                    <th scope="row">Total Annual Loaded Costs per Validator</th>
                    <td> <input class="tableInputLighter input" type="number" value="250000" oninput="calculate();"
                             id="Total_Annual_Loaded_Costs_per_Validator_CON">
                    </td>
                    <td> <input class="tableInputLighter input" type="number" value="250000" oninput="calculate();"
                             id="Total_Annual_Loaded_Costs_per_Validator_MOD">
                    </td>

                </tr>
                <tr>
                    <th scope="row">The % of MRM work that can be streamlined via ModelOp Center</th>
                    <td> <input class="tableInputLighter input" type="number" value="50" oninput="calculate();"
                            id="The_percentage_of_MRM_repetetive_menial_ModelOp_Center_CON">
                    </td>
                    <td> <input class="tableInputLighter input" type="number" value="75" oninput="calculate();"
                            id="The_percentage_of_MRM_repetetive_menial_ModelOp_Center_MOD">
                    </td>

                </tr>

            </table>
        </div>
        <br>
        <h2 style="color: #006731; text-align: center;">Calculations</h2>
        <br>
        <div class="over_flow">
            <table class="table output3">

                <tr>
                    <th class="textCenter">
                        CONSERVATIVE
                    <th scope="col" class="textCenter">YEAR 1</th>
                    <th scope="col" class="textCenter">YEAR 2</th>
                    <th scope="col" class="textCenter">YEAR 3</th>

                    </th>

                </tr>
                <tr>

                    <th scope="row"> Total # of Models in the Organization

                    </th>
                    <td class="i_o" id="Total_No_of_Models_in_the_Organization_CON1"></td>

                    <td class="i_o" id="Total_No_of_Models_in_the_Organization_CON2"></td>

                    <td class="i_o" id="Total_No_of_Models_in_the_Organization_CON3"></td>

                </tr>
                <tr>
                    <th scope="row">Total requested validations & revalidations in a given year</th>
                    <td class="i_o" id="Total_requested_validations_revalidations_in_a_given_year_CON1"></td>

                    <td class="i_o" id="Total_requested_validations_revalidations_in_a_given_year_CON2"></td>
                    <td class="i_o" id="Total_requested_validations_revalidations_in_a_given_year_CON3"></td>

                </tr>
                <tr>
                    <th scope="row">Total validation & revalidation capacity with current headcount</th>
                    <td class="i_o" id="Total_validation_and_revalidation_capacity_with_current_headcount_CON1"></td>
                    <td class="i_o" id="Total_validation_and_revalidation_capacity_with_current_headcount_CON2"></td>
                    <td class="i_o" id="Total_validation_and_revalidation_capacity_with_current_headcount_CON3"></td>
                </tr>
                <tr>
                    <th scope="row">Additional Headcount Required</th>
                    <td class="i_o" id="Additional_Headcount_Required_1_CON"></td>
                    <td class="i_o" id="Additional_Headcount_Required_2_CON"></td>
                    <td class="i_o" id="Additional_Headcount_Required_3_CON"></td>
                </tr>
                <tr>
                    <th scope="row">OPEX ($) Increase for Additional Headcount</th>
                    <td class="i_o" id="OPEX__Increase_for_Additional_Headcount1"></td>
                    <td class="i_o" id="OPEX__Increase_for_Additional_Headcount2"></td>
                    <td class="i_o" id="OPEX__Increase_for_Additional_Headcount3"></td>
                </tr>
                <tr>
                    <th scope="row">OPEX ($) Increase Avoidance through ModelOp Center</th>
                    <td class="i_o" id="Increase_Avoidance_through_ModelOp_Center_CON1"></td>
                    <td class="i_o" id="Increase_Avoidance_through_ModelOp_Center_CON2"></td>
                    <td class="i_o" id="Increase_Avoidance_through_ModelOp_Center_CON3"></td>
                </tr>

            </table>
            </tbody>
        </div>
        <br>
        <br>
        <div class="over_flow">
        <table class="table output4">



            <tr>
                <th class="textCenter">
                    MODERATE

                <th scope="col" class="textCenter">YEAR 1</th>
                <th scope="col" class="textCenter">YEAR 2</th>
                <th scope="col" class="textCenter">YEAR 3</th>

                </th>
            </tr>
            <tr>

                <th scope="row"> Total # of Models in the Organization
                </th>
                <td class="i_o" id="Total_no_of_Models_in_the_Organization_MOD1"></td>
                <td class="i_o" id="Total_no_of_Models_in_the_Organization_MOD2"></td>
                <td class="i_o" id="Total_no_of_Models_in_the_Organization_MOD3"></td>
            </tr>
            <tr>
                <th scope="row"> Total requested validations AND revalidations in a given year MOD</th>
                <td class="i_o" id="Total_requested_validations_revalidations_in_a_given_year_MOD1"></td>
                <td class="i_o" id="Total_requested_validations_revalidations_in_a_given_year_MOD2"></td>
                <td class="i_o" id="Total_requested_validations_revalidations_in_a_given_year_MOD3"></td>
            </tr>
            <tr>
                <th scope="row">Total validation and revalidation capacity with current headcount</th>
                <td class="i_o" id="Total_validation_and_revalidation_capacity_with_current_headcount_MOD1"></td>
                <td class="i_o" id="Total_validation_and_revalidation_capacity_with_current_headcount_MOD2"></td>
                <td class="i_o" id="Total_validation_and_revalidation_capacity_with_current_headcount_MOD3"></td>
            </tr>
            <tr>
                <th scope="row">Additional Headcount Required</th>
                <td class="i_o" id="Additional_Headcount_Required_1_MOD"></td>
                <td class="i_o" id="Additional_Headcount_Required_2_MOD"></td>
                <td class="i_o" id="Additional_Headcount_Required_3_MOD"></td>
            </tr>
            <tr>
                <th scope="row">OPEX ($) Increase for Additional Headcount</th>
                <td class="i_o" id="Increase_for_Additional_Headcount_MOD1"></td>
                <td class="i_o" id="Increase_for_Additional_Headcount_MOD2"></td>
                <td class="i_o" id="Increase_for_Additional_Headcount_MOD3"></td>
            </tr>
            <tr>
                <th scope="row">OPEX ($) Increase Avoidance through ModelOp Center</th>
                <td class="i_o" id="Increase_Avoidance_through_ModelOp_Center_MOD1"></td>
                <td class="i_o" id="Increase_Avoidance_through_ModelOp_Center_MOD2"></td>
                <td class="i_o" id="Increase_Avoidance_through_ModelOp_Center_MOD3"></td>
            </tr>

        </table>
        <br>

    </div>


    <div class="container" style="text-align: center; padding: 20px">
        <button style="
            background-color: #00AB51;
            color: white;
            font-size: 20px;
            font-weight: bold;
          " type="button" class="btn button-save col-sm-6" id="hide" data-toggle="modal" data-target="#modelId"
            data-backdrop="static" data-keyboard="false">
            Save Results
        </button>
        <p id="emailSubmitted" class="mt-2 text-center font-weight-bold" style="color: #00AB51; display: none">
            Email Sent Successfully.
        </p>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header" style="border-bottom: none">
                    <a href="https://www.modelop.com/">
                        <img src="https://www.modelop.com/wp-content/uploads/2021/01/modelop-logo-color.png"
                            alt="ModelOp" id="logo" width="150px" />
                    </a>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="margin-bottom: 90px;" >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div id="modelBody" class="modal-body" style="max-width: 100% !important; border-bottom: none">
                    <!-- <h5 class="modal-title" style="width: 500%">Enter Email</h5> -->
                    <input id="userEmail" class="form-control" type="email" placeholder="Enter Email Here" required
                        style="
                  width: 100%;
                  text-align: center;
                  font-size: 18px;
                  font-weight: bold;
                " />
                <div id="uniqueLinkDiv" style="display: none;">
                    <p> <em> Your Unique Link is  </em>
                        <div>
                        <a href="" target="_blank" id="uniqueLinkValue"></a></p>
                    </div>
                    </div>
                </div>
                <div>
                    <p id="error1" style="color: red; display: none; padding-left: 20px">
                        Enter Email
                    </p>
                    <p id="error2" style="color: red; display: none; padding-left: 20px">
                        Please Write Correct Email
                    </p>
                </div>
                <div class="modal-footer" style="border-top: none">
                    <button type="submit" class="btn button-save" onclick="closingModel()" style="border: 1px solid black;" id="submit">
                        Send
                    </button>
                </div>
            </div>
        </div>
    </div>




    <script src="https://cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"
        integrity="sha512-USPCA7jmJHlCNRSFwUFq3lAm9SaOjwG8TaB8riqx3i/dAJqhaYilVnaf2eVUH5zjq89BU6YguUuAno+jpRvUqA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <!-- jquery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <!-- bootstrap libraries -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/js/bootstrap.min.js"
        integrity="sha512-UR25UO94eTnCVwjbXozyeVd6ZqpaAE9naiEUBK/A+QDbfSTQFhPGj5lOR6d8tsgbBk84Ggb5A3EkjsOgPRPcKA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/js/bootstrap.bundle.min.js"
        integrity="sha512-mULnawDVcCnsk9a4aG1QLZZ6rcce/jSzEGqUkeOLy0b6q0+T6syHrxlsAGH7ZVoqC93Pd0lBqd6WguPWih7VHA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <!--Plugin JavaScript file-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/js/ion.rangeSlider.min.js"></script>
    <script>
        $(document).ready(function () {
            $('[data-toggle="tooltip"]').tooltip({
                placement: 'top'
            });
            calculate();
        });
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
    <!--switch-->
    <script src="../model_op_champion_kit_mri/app.js"></script>
</body>

</html>



<?php
get_footer();
?>

<!--switch-->