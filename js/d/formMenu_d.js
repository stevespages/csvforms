export function formMenu_d(cf, dom, makeCsv, showForm, viewAllRows) {

    dom.els.formMenu_d.addEventListener("click", event => {
        if (event.target.id === "formMenu_dAddRow_btn") {
            const csvForms = cf.getCsvForms();
            const form = csvForms.forms[csvForms.activeIdxs.form];
            pushNullToAllUserResponses(form);
            cf.setCsvForms();
            dom.els.addRow_d_h2.textContent = form.title;
            dom.els.addRow_d_ul.innerHTML = "";
            form.columns.forEach((col, idx) => {
                const colHeadingLi = document.createElement("li");
                colHeadingLi.classList.add("addRow_d_ul_li");
                colHeadingLi.textContent = col.heading;
                colHeadingLi.dataset.colIdx = idx;
                const userResponseSpan = document.createElement("span");
                userResponseSpan.classList.add("user-response-span");
                userResponseSpan.dataset.colIdx = idx;
                colHeadingLi.append(userResponseSpan);
                dom.els.addRow_d_ul.append(colHeadingLi);
            })
            dom.showDiv(["addRow_d"])
        }
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
        if (event.target.id === "formMenu_dView_btn") {
            viewAllRows(dom);
            dom.showDiv(["viewAllRows_d"])
        }
    })

}

// this effectively adds an empty row
function pushNullToAllUserResponses(form) {
    form.columns.forEach(col => {
        col.userResponses.push(null);
    })
}
