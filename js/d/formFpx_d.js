export function formFpx_d(cf, dom, showForm) {

    dom.els.formFpx_d.addEventListener("click", event => {
        if (event.target.id === "formFpx_dCancel_btn") {
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
        }
        if (event.target.id === "formFpx_dOk_btn") {
            const csvForms = cf.getCsvForms();
            const form = csvForms.forms[csvForms.activeIdxs.form];
            form.fpx = dom.els.formFpx_d_inp.value;
            cf.setCsvForms(csvForms);
            showForm(cf, dom);
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
        }
    })

}
