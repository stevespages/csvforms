export function deleteReally_d(cf, dom, populateHome_dForms_ul, showForm) {
    dom.els.deleteReally_d.addEventListener("click", event => {
        if (event.target.id === "deleteReally_dCancel_btn") {
            if (event.target.dataset.cancelTo === "home_d") {
                dom.showDiv(["home_d"]);
            }
            if (event.target.dataset.cancelTo === "showForm_d and showForm_dInner_d") {
                dom.showDiv(["showForm_d", "showForm_dInner_d"]);
            }
        }
        if (event.target.id === "deleteReally_dOk_btn") {
            if (event.target.dataset.deleteWhat === "column") {
                const csvForms = cf.getCsvForms();
                const cols = cf.getColumns(csvForms);
                const colIdx = csvForms.activeIdxs.column;
                cols.splice(colIdx, 1);
                cf.setCsvForms(csvForms);
                showForm(cf, dom);
                dom.showDiv(["showForm_d", "showForm_dInner_d"]);
            }
            if (event.target.dataset.deleteWhat === "form") {
                const csvForms = cf.getCsvForms();
                const formIdx = csvForms.activeIdxs.form;
                csvForms.forms.splice(formIdx, 1);
                cf.setCsvForms(csvForms);
                populateHome_dForms_ul(cf, dom);
                dom.showDiv([event.target.dataset.okTo]);
            }
            if (event.target.dataset.deleteWhat === "question") {
                const qIdx = event.target.dataset.qIdx;
                const csvForms = cf.getCsvForms();
                const column = cf.getColumn(csvForms);
                column.questions.splice(qIdx, 1);
                cf.setCsvForms(csvForms);
                showForm(cf, dom);
                dom.showDiv(["showForm_d", "showForm_dInner_d"]);
            }
        }
    })
}
