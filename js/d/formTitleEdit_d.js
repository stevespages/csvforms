export function formTitleEdit_d(cf, dom, showForm) {

    dom.els.formTitleEdit_d.addEventListener("click", event => {
        if (event.target.id === "formTitleEdit_dCancel_btn") {
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
        }
        if (event.target.id === "formTitleEdit_dOk_btn") {
            const csvForms = cf.getCsvForms();
            const form = csvForms.forms[csvForms.activeIdxs.form];
            form.title = dom.els.formTitleEdit_d_inp.value;
            cf.setCsvForms(csvForms);
            dom.els.showForm_d.dataset.toFrom = "showForm_d formTitleEdit_d";
            document.dispatchEvent(dom.changeDiv);
        }
    })

}
