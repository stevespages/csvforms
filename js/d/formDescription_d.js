export function formDescription_d(cf, dom) {

document.addEventListener("changeDiv", () => {
    if (
        [        
            "showForm_d"
        ]
        .includes(dom.els.formDescription_d.dataset.from)
    ) {
        dom.els.formDescription_d.dataset.from = "";
        const csvForms = cf.getCsvForms();
        const form = cf.getForm(csvForms);
        dom.els.formDescription_d_inp.value = form.description;
    }
})

    dom.els.formDescription_d.addEventListener("click", event => {
        if (event.target.id === "formDescription_dCancel_btn") {
            dom.changeDivTo("showForm_d", event.target.id);
        }
        if (event.target.id === "formDescription_dOk_btn") {
            const csvForms = cf.getCsvForms();
            const form = csvForms.forms[csvForms.activeIdxs.form];
            form.description = dom.els.formDescription_d_inp.value;
            cf.setCsvForms(csvForms);
            dom.changeDivTo("showForm_d", event.target.id);
        }
    })

}
