export function formMenu_d(cf, dom, makeCsv, showForm) {

    document.addEventListener("changeDiv", () => {
        if (dom.els.formMenu_d.dataset.toFrom === "formMenu_d home_d") {
            dom.els.formMenu_d.dataset.toFrom = "";

            // check form has columns. If not disable and grey row btn.

            dom.showDiv("formMenu_d");
            const csvForms = cf.getCsvForms();
            const form = cf.getForm(csvForms);
            dom.els.formMenu_d_h2.textContent = form.title;
        }
    })

    dom.els.formMenu_d.addEventListener("click", event => {
        if (event.target.id === "formMenu_dCancel_btn") {
            dom.showDiv(["home_d"]);
        }
        if (event.target.id === "formMenu_dDelete_btn") {
            const csvForms = cf.getCsvForms();
            dom.els.deleteReally_dOk_btn.dataset.deleteWhat = "form";
            dom.els.deleteReally_dOk_btn.dataset.okTo = "home_d";
            dom.els.deleteReally_dCancel_btn.dataset.cancelTo = "home_d";
            dom.showDiv(["deleteReally_d"]);
        }
        if (event.target.id === "formMenu_dEdit_btn") {
            showForm(cf, dom);
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
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

            dom.els.row_d.dataset.toFrom = "row_d formMenu_d";
            document.dispatchEvent(dom.changeDiv);
        }
        if (event.target.id === "formMenu_dSeeFormAndRows_btn") {
            const forms = JSON.parse(localStorage.getItem("forms"));
            const form = forms.formsArr[forms.activeIdxs.form];
            dom.els.see_d_section.append(JSON.stringify(form));
            dom.showDiv(["see_d"]);
        }
        if (event.target.id === "formMenu_dSeeRows_btn") {
            const csvForHtml = makeCsv("for HTML");
            dom.els.see_d_section.append(csvForHtml.headerP, csvForHtml.dataSection);
            dom.showDiv(["see_d"]);
        }
    })

}
