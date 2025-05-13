export function createFormTitle_d(cf, dom, showForm) {

    dom.els.createFormTitle_d.addEventListener("click", event => {
        if (event.target.id === "createFormTitle_dCancel_btn") {
            dom.showDiv(["home_d"]);
        }
        if (event.target.id === "createFormTitle_dStart_btn") {
            createForm(cf, dom);
            if (dom.els.createFormTitle_dFile_inp.files[0]) {
                const csvFile = dom.els.createFormTitle_dFile_inp.files[0];
                const reader = new FileReader();
                reader.addEventListener("load", () => {
                    const csvForms = cf.getCsvForms();
                    const form = cf.getForm(csvForms);
                    const csvLines = reader.result.split(/\r?\n/);
                    const colHeadings = csvLines[0].split(",");
                    console.log("colHeadings", colHeadings)
                    colHeadings.forEach(colHeading => {
                        form.columns.push(
                            // same object as used in createColHeading_d.js
                            {
                                heading: colHeading,
                                questions: [],
                                userResponses: [],
                            }
                        )
                    })
                    cf.setCsvForms(csvForms);
                    showForm(cf, dom);
                    dom.showDiv(["showForm_d", "showForm_dInner_d"]);
                })
                reader.readAsText(csvFile);
            } else {
                showForm(cf, dom);
                dom.showDiv(["showForm_d", "showForm_dInner_d"]);
            }
        }
    })

}

function createForm(cf, dom) {
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
}
