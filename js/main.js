// d modules (ie. div modules)
import { addRow_d } from "./d/addRow_d.js";
import { addCell_d } from "./d/addCell_d.js";
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
import { qChoice_d } from "./d/qChoice_d.js";
import { qDate_d } from "./d/qDate_d.js";
import { qOrderItems_d } from "./d/qOrderItems_d.js";
import { qText_d } from "./d/qText_d.js";
import { question_d } from "./d/question_d.js";
import { showForm_d } from "./d/showForm_d.js";
/*
import { addCell_d } from "./d/addCell_d.js";
import { addRow_d } from "./d/addRow_d.js";
import { colHeading_d } from "./d/colHeading_d.js";

import { deleteReally_d } from "./d/deleteReally_d.js";
import { edit_d } from "./d/edit_d.js";

import { pasteJsonForm_d } from "./d/pasteJsonForm_d.js";
import { qChoice_qDate_qOrderItems_qText_d } from "./d/qChoice_qDate_qOrderItems_qText_d.js";
import { question_d } from "./d/question_d.js";
import { see_d } from "./d/see_d.js";

import { uploadCsvForForm_d } from "./d/uploadCsvForForm_d.js";
import { viewAllRows_d } from "./d/viewAllRows_d.js";
*/

// shared modules
import { addQToForm } from "./shared/addQToForm.js";
import { cf } from "./shared/cf.js";
import { dom } from "./shared/dom.js";
import { makeCsv } from "./shared/makeCsv.js";
import { populateHome_dForms_ul } from "./shared/populateHome_dForms_ul.js";
import { showForm } from "./shared/showForm.js";
import { viewAllRows } from "./shared/viewAllRows.js";

if (!localStorage.getItem("csvForms")) {
    localStorage.setItem("csvForms", JSON.stringify(
        {
            activeIdxs: {
                column: null,
                form: null,
                question: null,
            },
            forms: [],
        }));
}

console.log("csvForms: ", JSON.parse(localStorage.getItem("forms")));

dom.createElVars();
dom.consoleLogEls();

// d modules (event listeners)
addCell_d(cf, dom);
addRow_d(cf, dom);
colHeadingEdit_d(cf, dom, showForm);
colMenu_d(cf, dom);
createColHeading_d(cf, dom, showForm);
createFormTitle_d(cf, dom, showForm);
deleteReally_d(cf, dom, populateHome_dForms_ul, showForm);
formDescription_d(cf, dom, showForm);
formFpx_d(cf, dom, showForm);
formMenu_d(cf, dom, makeCsv, showForm, viewAllRows)
formTitleEdit_d(cf, dom, showForm);
home_d(cf, dom, makeCsv);
mainMenu_d(cf, dom, populateHome_dForms_ul);
qChoice_d(addQToForm, cf, dom, showForm);
qDate_d(addQToForm, cf, dom, showForm);
qOrderItems_d(addQToForm, cf, dom, showForm);
qText_d(addQToForm, cf, dom, showForm);
question_d(dom);
showForm_d(cf, dom, populateHome_dForms_ul);
/*
addCell_d(dom);
addRow_d(dom);
deleteReally_d(dom, populateHome_dForms_ul);
edit_d(dom, showForm);
formMenu_d(dom, makeCsv, showForm, viewAllRows);


pasteJsonForm_d(dom, populateHome_dForms_ul);
see_d(dom);
uploadCsvForForm_d(dom, populateHome_dForms_ul);
viewAllRows_d(dom);

// d modules for creating form (event listeners)
colHeading_d(dom);
qChoice_qDate_qOrderItems_qText_d(dom, showForm);
question_d(dom);
showForm_d(dom, populateHome_dForms_ul, showEdit);
*/

populateHome_dForms_ul(cf, dom);

dom.showDiv(["home_d"]);
