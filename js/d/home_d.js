export function home_d(cf, dom, makeCsv){

    dom.els.home_d.addEventListener("click", event => {
        if (event.target.classList.contains("home_dForms_ul_li")) {
            const csvForms = cf.getCsvForms();
            csvForms.activeIdxs.form = event.target.dataset.formIdx;
            cf.setCsvForms(csvForms);
            addHrefToEmailRows(cf, dom, makeCsv);
            const formName = event.target.textContent;
            dom.els.formMenu_d_h2.textContent = formName;
            dom.showDiv(["formMenu_d"]);
        }
        if (event.target.id === "home_dMainMenu_btn") {
            // create link to download csvForms for backup btn
            const csvForms = cf.getCsvForms();
            const forms = cf.getForms(csvForms);
            const formsJsonStr = JSON.stringify(forms);
            let hrefValue = "data:text/plain;charset=utf-8,";
            hrefValue += encodeURIComponent(formsJsonStr);
            dom.els.mainMenu_dBackup_btn_a.setAttribute("href", hrefValue);
            const dateTime = getDateTime();
            const fileName = "csvforms-backup-" + dateTime;
            dom.els.mainMenu_dBackup_btn_a.setAttribute("download", fileName);
            dom.showDiv(["mainMenu_d"]);
        }
    });

}

function addHrefToEmailRows(cf, dom, makeCsv) {
    const csvForms = cf.getCsvForms();
    const form = cf.getForm(csvForms);
    const subject = form.title + " | (" + form.formFileNamePrefix + ")";
    const body = makeCsv(cf, "for email");
    const href = "mailto:?subject=" + subject + "&body=" + body;
    dom.els.formMenu_dEmailRows_btn_a.setAttribute("href", href);
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
