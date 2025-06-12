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
import { readyMadeForms_d } from "./d/readyMadeForms_d.js";
import { showForm_d } from "./d/showForm_d.js";
import { uploadCsv_d } from "./d/uploadCsv_d.js";

// shared modules
import { addQToForm } from "./shared/addQToForm.js";
import { cf } from "./shared/cf.js";
import { dom } from "../../shared/js/dom.js";
import { makeCsv } from "./shared/makeCsv.js";

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

// d modules (event listeners)
addCell_d(cf, dom);
row_d(cf, dom);
changeColOrder_d(cf, dom);
colHeadingEdit_d(cf, dom);
colMenu_d(cf, dom);
createColHeading_d(cf, dom);
createFormTitle_d(cf, dom);
deleteReally_d(cf, dom);
formDescription_d(cf, dom);
formFpx_d(cf, dom);
formMenu_d(cf, dom, makeCsv)
formTitleEdit_d(cf, dom);
home_d(cf, dom);
mainMenu_d(cf, dom);
qCheckbox_d(addQToForm, cf, dom);
qDate_d(addQToForm, cf, dom);
qOrderItems_d(addQToForm, cf, dom);
qRadio_d(addQToForm, cf, dom);
qText_d(addQToForm, cf, dom);
question_d(dom);
readyMadeForms_d(cf, dom);
showForm_d(cf, dom);
uploadCsv_d(cf, dom);

dom.changeDivTo("home_d", "START");
dom.showDiv("home_d");
