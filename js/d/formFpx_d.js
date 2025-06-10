export function formFpx_d(cf, dom) {

    document.addEventListener("changeDiv", () => {
        if (
            [        
                "showForm_d"
            ]
            .includes(dom.els.formFpx_d.dataset.from)
        ) {
            dom.els.formFpx_d.dataset.from = "";
            const csvForms = cf.getCsvForms();
            const form = cf.getForm(csvForms);
            dom.els.formFpx_d_inp.value = form.fpx;
        }
    })

    dom.els.formFpx_d.addEventListener("click", event => {
        if (event.target.id === "formFpx_dCancel_btn") {
            dom.changeDivTo("showForm_d", event.target.id);
        }
        if (event.target.id === "formFpx_dOk_btn") {
            const csvForms = cf.getCsvForms();
            const form = csvForms.forms[csvForms.activeIdxs.form];
            form.fpx = dom.els.formFpx_d_inp.value;
            cf.setCsvForms(csvForms);
            dom.changeDivTo("showForm_d", event.target.id);
        }
    })

}
