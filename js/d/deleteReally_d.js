export function deleteReally_d(cf, dom) {
    dom.els.deleteReally_d.addEventListener("click", event => {
        if (event.target.id === "deleteReally_dCancel_btn") {
            if (event.target.dataset.cancelTo === "home_d") {
                   dom.changeDivTo("home_d", event.target.id);
            }
            if (event.target.dataset.cancelTo === "showForm_d and showForm_dInner_d") {
                dom.changeDivTo("showForm_d", event.target.id);
            }
        }
        if (event.target.id === "deleteReally_dOk_btn") {
            if (event.target.dataset.deleteWhat === "column") {
                const csvForms = cf.getCsvForms();
                const cols = cf.getColumns(csvForms);
                const colIdx = csvForms.activeIdxs.column;
                cols.splice(colIdx, 1);
                cf.setCsvForms(csvForms);
                dom.els.showForm_d.dataset.from = "showForm_d deleteReally_d";
                document.dispatchEvent(dom.changeDiv);
                /*
                showForm(cf, dom);
                dom.changeDivTo("showForm_d", event.target.id);
                */
            }
            if (event.target.dataset.deleteWhat === "form") {
                const csvForms = cf.getCsvForms();
                const formIdx = csvForms.activeIdxs.form;
                csvForms.forms.splice(formIdx, 1);
                cf.setCsvForms(csvForms);
                dom.els.home_d.dataset.from = "home_d deleteReally_d";
                document.dispatchEvent(dom.changeDiv);
            }
            if (event.target.dataset.deleteWhat === "question") {
                const qIdx = event.target.dataset.qIdx;
                const csvForms = cf.getCsvForms();
                const column = cf.getColumn(csvForms);
                column.questions.splice(qIdx, 1);
                cf.setCsvForms(csvForms);
                dom.els.showForm_d.dataset.from = "showForm_d deleteReally_d";
                document.dispatchEvent(dom.changeDiv);
                /*
                showForm(cf, dom);
                dom.changeDivTo("showForm_d", event.target.id);
                */
            }
        }
    })
}
