export function createColHeading_d(cf, dom) {
    if (
        [
            "showForm_d"
        ]
        .includes(dom.els.createColHeading_d.dataset.from)
    ){
        dom.els.createColHeading_d.dataset.from = "";
        dom.els.createColHeading_d_inp.value = "";
    }

    dom.els.createColHeading_d.addEventListener("click", event => {
        if (event.target.id === "createColHeading_dCancel_btn") {
            dom.changeDivTo("showForm_d", thisD);
        }
        if (event.target.id === "createColHeading_dStart_btn") {
            const csvForms = cf.getCsvForms();
            const form = csvForms.forms[csvForms.activeIdxs.form];
            form.columns.push(
                // also used in createFormTitle_d id csv file uploaded
                {
                    heading: dom.els.createColHeading_d_inp.value,
                    questions: [],
                    userResponses: [],
                })
            cf.setCsvForms(csvForms);
            dom.changeDivTo("showForm_d", event.target.id);
        }
    })
}
