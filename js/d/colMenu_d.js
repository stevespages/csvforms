export function colMenu_d(cf, dom) {
    dom.els.colMenu_d.addEventListener("click", event => {
        if (event.target.id === "colMenu_dCancel_btn") {
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
        }
        if (event.target.id === "colMenu_dColHeading_btn") {
            dom.showDiv(["colHeadingEdit_d"]);
        }
        if (event.target.id === "colMenu_dAddQuestion_btn") {
            dom.showDiv(["question_d"]);
        }
    })
}
