export function colHeadingEdit_d(cf, dom) {
    dom.els.colHeadingEdit_d.addEventListener("click", event => {
        if (event.target.id === "colHeadingEdit_dCancel_btn") {
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
        }
        if (event.target.id === "colHeadingEdit_dOk_btn") {
            const csvForms = cf.getCsvForms();
            const form = csvForms.forms[csvForms.activeIdxs.form];
            const col = form.columns[csvForms.activeIdxs.column];
            col.heading = dom.els.colHeadingEdit_d_inp.value;
            cf.setCsvForms(csvForms);
            dom.els.showForm_d.dataset.toFrom = "showForm_d colHeadingEdit_d";
            document.dispatchEvent(dom.changeDiv);
            /*
            showForm(cf, dom);
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
            */
        }
    })
}
