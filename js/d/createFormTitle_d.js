export function createFormTitle_d(cf, dom) {

    dom.els.createFormTitle_d.addEventListener("click", event => {

        if (event.target.id === "createFormTitle_dCancel_btn") {
               dom.changeDivTo("home_d", event.target.id);
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
            dom.els.showForm_d.dataset.from = "showForm_d createFormTitle_d";
            document.dispatchEvent(dom.changeDiv);
        }

    })

}
