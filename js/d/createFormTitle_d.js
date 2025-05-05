export function createFormTitle_d(cf, dom, showForm) {

    dom.els.createFormTitle_d.addEventListener("click", event => {
        if (event.target.id === "createFormTitle_dCancel_btn") {
            dom.showDiv(["home_d"]);
        }
        if (event.target.id === "createFormTitle_dStart_btn") {
            const title = dom.els.createFormTitle_dTitle_inp.value;
            if (title === "") {
                return;
            }
            const newForm = {
                columns: [],
                description: "",
                fpx: "",
                title: title,
            };
            const csvForms = cf.getCsvForms();
            const formIdx = (csvForms.forms.push(newForm) - 1)
            csvForms.activeIdxs.form = formIdx;
            cf.setCsvForms(csvForms);
            showForm(cf, dom);
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
        }
    })

}
