// d modules (ie. div modules)
import { row_d } from "./d/row_d.js";
import { addCell_d } from "./d/addCell_d.js";
import { changeColOrder_d } from "./d/changeColOrder_d.js";
import { colHeadingEdit_d } from "./d/colHeadingEdit_d.js";
import { colMenu_d } from "./d/colMenu_d.js";
import { createColHeading_d } from "./d/createColHeading_d.js";
import { createFormTitle_d } from "./d/createFormTitle_d.js";
import { deleteReally_d } from "./d/deleteReally_d.js";
import { formDescription_d } from "./d/formDescription_d.js";
import { formFpx_d } from "./d/formFpx_d.js";
import { formMenu_d } from "./d/formMenu_d.js";
import { formTitleEdit_d } from "./d/formTitleEdit_d.js";
import { home_d } from "./d/home_d.js";
import { mainMenu_d } from "./d/mainMenu_d.js";
import { qCheckbox_d } from "./d/qCheckbox_d.js";
import { qDate_d } from "./d/qDate_d.js";
import { qOrderItems_d } from "./d/qOrderItems_d.js";
import { qRadio_d } from "./d/qRadio_d.js";
import { qText_d } from "./d/qText_d.js";
import { question_d } from "./d/question_d.js";
import { showForm_d } from "./d/showForm_d.js";
import { uploadCsv_d } from "./d/uploadCsv_d.js";
/*
import { pasteJsonForm_d } from "./d/pasteJsonForm_d.js";
import { uploadCsvForForm_d } from "./d/uploadCsvForForm_d.js";
import { viewAllRows_d } from "./d/viewAllRows_d.js";
*/

// shared modules
import { addQToForm } from "./shared/addQToForm.js";
import { cf } from "./shared/cf.js";
import { dom } from "../../shared/js/dom.js";
import { makeCsv } from "./shared/makeCsv.js";
import { populateHome_dForms_ul } from "./shared/populateHome_dForms_ul.js";
import { showForm } from "./shared/showForm.js";
import { updateSingleUserResponseSpan } from "./shared/updateSingleUserResponseSpan.js";

if (!localStorage.getItem("csvForms")) {
    localStorage.setItem("csvForms", JSON.stringify(
        {
            activeIdxs: {
                column: null,
                form: null,
                question: null,
                row: null,
            },
            forms: [],
        }));
}

console.log("csvForms: ", JSON.parse(localStorage.getItem("forms")));

dom.createElVars();
dom.consoleLogEls();

dom.createCustomEvents();
console.log("dom.customEvents", dom.customEvents)

// d modules (event listeners)
addCell_d(cf, dom, updateSingleUserResponseSpan);
row_d(cf, dom);
changeColOrder_d(cf, dom, populateHome_dForms_ul, showForm);
colHeadingEdit_d(cf, dom, showForm);
colMenu_d(cf, dom);
createColHeading_d(cf, dom, showForm);
createFormTitle_d(cf, dom, showForm);
deleteReally_d(cf, dom, populateHome_dForms_ul, showForm);
formDescription_d(cf, dom, showForm);
formFpx_d(cf, dom, showForm);
formMenu_d(cf, dom, makeCsv, showForm)
formTitleEdit_d(cf, dom, showForm);
home_d(cf, dom);
mainMenu_d(cf, dom, populateHome_dForms_ul);
qCheckbox_d(addQToForm, cf, dom, showForm);
qDate_d(addQToForm, cf, dom, showForm);
qOrderItems_d(addQToForm, cf, dom, showForm);
qRadio_d(addQToForm, cf, dom, showForm);
qText_d(addQToForm, cf, dom, showForm);
question_d(dom);
showForm_d(cf, dom, populateHome_dForms_ul);
uploadCsv_d(cf, dom, showForm);
/*
pasteJsonForm_d(dom, populateHome_dForms_ul);
see_d(dom);
uploadCsvForForm_d(dom, populateHome_dForms_ul);
viewAllRows_d(dom);
*/

populateHome_dForms_ul(cf, dom);

dom.showDiv(["home_d"]);
