export function mainMenu_d(cf, dom, populateHome_dForms_ul) {

    dom.els.mainMenu_d.addEventListener("click", event => {
        if (event.target.id === "mainMenu_dCancel_btn") {
            dom.showDiv(["home_d"]);
        }
        if (event.target.id === "mainMenu_dClearAllData_btn") {
            // should be done via reallyDelete_d
            const csvForms = cf.getCsvForms();
            csvForms.forms = [];
            cf.setCsvForms(csvForms);
            populateHome_dForms_ul(cf, dom);
            dom.showDiv(["home_d"]);
        }
        if (event.target.id === "mainMenu_dCreateForm_btn") {
            dom.els.createFormTitle_dTitle_inp.value = "";
            dom.showDiv(["createFormTitle_d"]);
        }
        if (event.target.id === "mainMenu_dPasteJsonForm_btn") {
            dom.els.pasteJsonForm_d_inp.value = "";
            dom.showDiv(["pasteJsonForm_d"]);
        }
        if (event.target.id === "mainMenu_dUploadCsvForForm_btn") {
            dom.els.uploadCsvForForm_dFile_inp.value = "";
            dom.els.uploadCsvForForm_dTitle_inp.textContent = "";
            dom.els.uploadCsvForForm_dFileNamePrefix_inp.textContent = "";
            dom.els.uploadCsvForForm_dDescription_inp = "";
            dom.showDiv(["uploadCsvForForm_d"]);
        }
    })

}
