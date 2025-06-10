export function colMenu_d(cf, dom) {

    document.addEventListener("changeDiv", () => {
        if (
            [        
                "showForm_dColumn_p-class"
            ]
            .includes(dom.els.colMenu_d.dataset.from)
        ) {
            dom.els.colMenu_d.dataset.from = "";
            const csvForms = cf.getCsvForms();
            csvForms.activeIdxs.column = dom.els.colMenu_d.dataset.colIdx;
            cf.setCsvForms(csvForms);
            const column = cf.getColumn(csvForms);
            dom.els.colMenu_d_h2.textContent = "column: " + column.heading;
            dom.els.colMenu_dQuestions_ul.innerHTML = "";
            column.questions.forEach((q, qIdx) => {
                const qLi = document.createElement("li");
                qLi.classList.add("colMenu_dQuestions_ul_li");
                qLi.dataset.qIdx = qIdx;
                qLi.innerHTML = JSON.stringify(q);
                dom.els.colMenu_dQuestions_ul.append(qLi);
            })
            dom.showDiv("colMenu_d");
        }
    })

    dom.els.colMenu_d.addEventListener("click", event => {

        if (event.target.classList.contains("colMenu_dQuestions_ul_li")) {
            // delete the question that was clicked
            const qIdx = event.target.dataset.qIdx;
            dom.els.deleteReally_dOk_btn.dataset.deleteWhat = "question";
            dom.els.deleteReally_dOk_btn.dataset.qIdx = qIdx;
            dom.els.deleteReally_dOk_btn.dataset.okTo = "showForm_d and showForm_dInner_d";
            dom.els.deleteReally_dCancel_btn.dataset.cancelTo = "showForm_d and showForm_dInner_d";
               dom.changeDivTo("deleteReally_d", thisD);
        }
        if (event.target.id === "colMenu_dAddQuestion_btn") {
               dom.changeDivTo("question_d", event.target.id);
        }
        if (event.target.id === "colMenu_dCancel_btn") {
            dom.changeDivTo("showForm_d", event.target.id);
        }
        if (event.target.id === "colMenu_dColHeading_btn") {
            dom.changeDivTo("colHeadingEdit_d", event.target.id);
        }
        if (event.target.id === "colMenu_dDeleteCol_btn") {
            // delete the column
            dom.els.deleteReally_dOk_btn.dataset.deleteWhat = "column";
            dom.els.deleteReally_dOk_btn.dataset.okTo = "showForm_d and showForm_dInner_d";
            dom.els.deleteReally_dCancel_btn.dataset.cancelTo = "showForm_d and showForm_dInner_d";
               dom.changeDivTo("deleteReally_d", event.target.id);
        }
    })
}
