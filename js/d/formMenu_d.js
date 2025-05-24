export function formMenu_d(cf, dom, makeCsv, showForm) {

    //formMenu_dEvent = new CustomEvent("formMenu_dEvent");
    document.addEventListener("formMenu_dEvent", () => {
        console.log("formMenu_dEvent has been dispatched");
        const csvForms = cf.getCsvForms();
        const form = cf.getForm(csvForms);
        dom.els.formMenu_d_h2.textContent = form.title;
        // this ought to be done when they click the menu item and the link
        // automatically made...
        addHrefToEmailRows(dom, form, makeCsv);
        function addHrefToEmailRows(dom, form, makeCsv) {
            const subject = form.title + " | (" + form.formFileNamePrefix + ")";
            const body = makeCsv(cf, "for email");
            const href = "mailto:?subject=" + subject + "&body=" + body;
            dom.els.formMenu_dEmailRows_btn_a.setAttribute("href", href);
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

        }
        if (event.target.id === "formMenu_dRow_btn") {
            const csvForms = cf.getCsvForms();
            const form = cf.getForm(csvForms);

            // If there are no columns in the csvForm do not respond.
            // It would be best to alert the user to what has happened and
            // make the formMenu_dRow_btn greyed out.
            if (form.columns.length === 0) {
                return;
            }

            dom.els.row_d_h2.textContent = form.title;
            dom.els.row_d_ul.innerHTML = "";

            // show last row
            form.columns.forEach((col, idx) => {
                const colHeadingLi = document.createElement("li");
                colHeadingLi.classList.add("row_d_ul_li");
                colHeadingLi.textContent = col.heading;
                colHeadingLi.dataset.colIdx = idx;
                const userResponseSpan = document.createElement("span");
                userResponseSpan.classList.add("user-response-span");
                userResponseSpan.dataset.colIdx = idx;
                colHeadingLi.append(userResponseSpan);
                dom.els.row_d_ul.append(colHeadingLi);
            })

            dom.els.row_dRowIdx_inp.value =
                form.columns[0].userResponses.length;
            csvForms.activeIdxs.row = form.columns[0].userResponses.length - 1;
            cf.setCsvForms(csvForms);
            dom.showDiv(["row_d"]);
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
