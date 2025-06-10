export function formTitleEdit_d(cf, dom, showForm) {

document.addEventListener("changeDiv", () => {
    if (
        [        
            "showForm_d"
        ]
        .includes(dom.els.formTitleEdit_d.dataset.from)
    ) {
        dom.els.formTitleEdit_d.dataset.from = "";
        const csvForms = cf.getCsvForms();
        const form = cf.getForm(csvForms);
        dom.els.formTitleEdit_d_inp.value = form.title;
    }
})

    dom.els.formTitleEdit_d.addEventListener("click", event => {
        if (event.target.id === "formTitleEdit_dCancel_btn") {
            dom.changeDivTo("showForm_d", event.target.id);
        }
        if (event.target.id === "formTitleEdit_dOk_btn") {
            const csvForms = cf.getCsvForms();
            const form = csvForms.forms[csvForms.activeIdxs.form];
            form.title = dom.els.formTitleEdit_d_inp.value;
            cf.setCsvForms(csvForms);
            dom.changeDivTo("showForm_d", event.target.id);
        }
    })

}
