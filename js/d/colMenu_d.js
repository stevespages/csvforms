export function colMenu_d(cf, dom) {
    dom.els.colMenu_d.addEventListener("click", event => {
        if (event.target.classList.contains("colMenu_dQuestions_ul_li")) {
            // delete the question that was clicked
            const qIdx = event.target.dataset.qIdx;
            dom.els.deleteReally_dOk_btn.dataset.deleteWhat = "question";
            dom.els.deleteReally_dOk_btn.dataset.qIdx = qIdx;
            dom.els.deleteReally_dOk_btn.dataset.okTo = "showForm_d and showForm_dInner_d";
            dom.els.deleteReally_dCancel_btn.dataset.cancelTo = "showForm_d and showForm_dInner_d";
            dom.showDiv(["deleteReally_d"]);
        }
        if (event.target.id === "colMenu_dAddQuestion_btn") {
            dom.showDiv(["question_d"]);
        }
        if (event.target.id === "colMenu_dCancel_btn") {
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
        }
        if (event.target.id === "colMenu_dColHeading_btn") {
            const csvForms = cf.getCsvForms();
            const column = cf.getColumn(csvForms);
            dom.els.colHeadingEdit_d_inp.value = column.heading;
            dom.showDiv(["colHeadingEdit_d"]);
        }
        if (event.target.id === "colMenu_dDeleteCol_btn") {
            // delete the column
            dom.els.deleteReally_dOk_btn.dataset.deleteWhat = "column";
            dom.els.deleteReally_dOk_btn.dataset.okTo = "showForm_d and showForm_dInner_d";
            dom.els.deleteReally_dCancel_btn.dataset.cancelTo = "showForm_d and showForm_dInner_d";
            dom.showDiv(["deleteReally_d"]);
        }
    })
}
