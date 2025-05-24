export function mainMenu_d(cf, dom, populateHome_dForms_ul) {

    dom.els.mainMenu_d.addEventListener("click", event => {
        if (event.target.id === "mainMenu_dBackup_btn") {
            const csvForms = cf.getCsvForms();
            const forms = cf.getForms(csvForms);
            const formsJsonStr = JSON.stringify(forms);
            const a = document.createElement("a");
            let hrefValue = "data:text/plain;charset=utf-8,";
            hrefValue += encodeURIComponent(formsJsonStr);
            a.setAttribute("href", hrefValue);
            const dateTime = getDateTime();
            const fileName = "csvforms-backup-" + dateTime;
            a.setAttribute("download", fileName);
            a.click();
        }
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
            //dom.els.pasteJsonForm_d_inp.value = "";
            //dom.showDiv(["pasteJsonForm_d"]);
            // for testing dom error function
            dom.showDiv(9);
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

function getDateTime() {
    const date = new Date();
    const y = date.getFullYear().toString();
    let mths = (date.getMonth() + 1).toString();
    let d = date.getDate().toString();
    let h = date.getHours().toString();
    let mins = date.getMinutes().toString();
    if (mths.length === 1) {
        mths = "0" + mths;
    }
    if (d.length === 1) {
        d = "0" + d;
    }
    if (h.length === 1) {
        h = "0" + h;
    }
    if (mins.length === 1) {
        mins = "0" + mins;
    }
    return y + mths + d + h + mins;
}