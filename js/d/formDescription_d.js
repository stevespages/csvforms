export function formDescription_d(cf, dom, showForm) {

    dom.els.formDescription_d.addEventListener("click", event => {
        if (event.target.id === "formDescription_dCancel_btn") {
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
        }
        if (event.target.id === "formDescription_dOk_btn") {
            const csvForms = cf.getCsvForms();
            const form = csvForms.forms[csvForms.activeIdxs.form];
            form.description = dom.els.formDescription_d_inp.value;
            cf.setCsvForms(csvForms);
            showForm(cf, dom);
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
        }
    })

}
