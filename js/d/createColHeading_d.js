export function createColHeading_d(cf, dom, showForm) {
    dom.els.createColHeading_d.addEventListener("click", event => {
        if (event.target.id === "createColHeading_dCancel_btn") {
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
        }
        if (event.target.id === "createColHeading_dStart_btn") {
            const csvForms = cf.getCsvForms();
            const form = csvForms.forms[csvForms.activeIdxs.form];
            form.columns.push({
                heading: dom.els.createColHeading_d_inp.value,
                questions: [],
                userResponses: [],
            })
            cf.setCsvForms(csvForms);
            showForm(cf, dom);
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
        }
    })
}
