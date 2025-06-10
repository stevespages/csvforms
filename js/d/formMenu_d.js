export function formMenu_d(cf, dom, makeCsv) {

    document.addEventListener("changeDiv", () => {
        if (
            [
                "home_dForms_ul_li-class"
            ]
            .includes(dom.els.formMenu_d.dataset.from)
        ) {
            dom.els.formMenu_d.dataset.from = "";

            // check form has columns. If not disable and grey row btn.

            const csvForms = cf.getCsvForms();
            const form = cf.getForm(csvForms);
            dom.els.formMenu_d_h2.textContent = form.title;

            dom.showDiv("formMenu_d");
        }
    })

    dom.els.formMenu_d.addEventListener("click", event => {
        if (event.target.id === "formMenu_dCancel_btn") {
               dom.changeDivTo("home_d", event.target.id);
        }
        if (event.target.id === "formMenu_dDelete_btn") {
            const csvForms = cf.getCsvForms();
            dom.els.deleteReally_dOk_btn.dataset.deleteWhat = "form";
            dom.els.deleteReally_dOk_btn.dataset.okTo = "home_d";
            dom.els.deleteReally_dCancel_btn.dataset.cancelTo = "home_d";
               dom.changeDivTo("deleteReally_d", event.target.id);
        }
        if (event.target.id === "formMenu_dEdit_btn") {
            dom.changeDivTo("showForm_d", event.target.id);
        }
        if (event.target.id === "formMenu_dEmailRows_btn") {
            const csvForms = cf.getCsvForms();
            const form = cf.getForm(csvForms);
            const a = document.createElement("a");
            addHrefToEmailRows(form, makeCsv);
            function addHrefToEmailRows(form, makeCsv) {
                const subject = form.title + " | (" + form.formFileNamePrefix + ")";
                const body = makeCsv(cf, "for email");
                const href = "mailto:?subject=" + subject + "&body=" + body;
                a.setAttribute("href", href);
            }
            a.click();
        }
        if (event.target.id === "formMenu_dRow_btn") {
            
            // If there are no columns in the csvForm do not respond.
            // It would be best to alert the user to what has happened and
            // make the formMenu_dRow_btn greyed out.
            const csvForms = cf.getCsvForms();
            const form = cf.getForm(csvForms);
            if (form.columns.length === 0) {
                return;
            }
            dom.changeDivTo("row_d", event.target.id);
        }
        if (event.target.id === "formMenu_dSeeFormAndRows_btn") {
            const forms = JSON.parse(localStorage.getItem("forms"));
            const form = forms.formsArr[forms.activeIdxs.form];
            dom.els.see_d_section.append(JSON.stringify(form));
               dom.changeDivTo("see_d", event.target.id);
        }
        if (event.target.id === "formMenu_dSeeRows_btn") {
            const csvForHtml = makeCsv("for HTML");
            dom.els.see_d_section.append(csvForHtml.headerP, csvForHtml.dataSection);
               dom.changeDivTo("see_d", event.target.id);
        }
    })

}
