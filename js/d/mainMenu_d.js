export function mainMenu_d(cf, dom) {

    document.addEventListener("changeDiv", () => {
        if (
            [
                "home_dMainMenu_btn"
            ]
            .includes(dom.els.mainMenu_d.dataset.from)
        ) {
            dom.els.mainMenu_d.dataset.from = "";
            dom.showDiv("mainMenu_d");
        }
    })

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
               dom.changeDivTo("home_d", event.target.id);
        }
        if (event.target.id === "mainMenu_dClearAllData_btn") {
            // should be done via reallyDelete_d
            const csvForms = cf.getCsvForms();
            csvForms.forms = [];
            cf.setCsvForms(csvForms);
            dom.els.home_d.dataset.from = "home_d mainMenu_d";
            document.dispatchEvent(dom.changeDiv);
        }
        if (event.target.id === "mainMenu_dCreateForm_btn") {
            dom.els.createFormTitle_dTitle_inp.value = "";
               dom.changeDivTo("createFormTitle_d", event.target.id);
        }
        if (event.target.id === "mainMenu_dPasteJsonForm_btn") {
            //dom.els.pasteJsonForm_d_inp.value = "";
            //   dom.changeDivTo("pasteJsonForm_d", event.target.id);
            // for testing dom error function
            dom.showDiv(9);
        }
        if (event.target.id === "mainMenu_dReadyMadeForms_btn") {
            dom.changeDivTo("readyMadeForms_d", event.target.id);
        }
        if (event.target.id === "mainMenu_dUploadCsvForForm_btn") {
            dom.els.uploadCsvForForm_dFile_inp.value = "";
            dom.els.uploadCsvForForm_dTitle_inp.textContent = "";
            dom.els.uploadCsvForForm_dFileNamePrefix_inp.textContent = "";
            dom.els.uploadCsvForForm_dDescription_inp = "";
               dom.changeDivTo("uploadCsvForForm_d", event.target.id);
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
