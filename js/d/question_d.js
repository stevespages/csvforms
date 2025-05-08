export function question_d(dom) {

    dom.els.question_d.addEventListener("click", (event) => {
        if (event.target.id === "question_dCancel_btn") {
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
        }
        if (event.target.id === "question_dCheckbox_btn") {
            dom.els.qCheckbox_dChoices_ul.innerHTML = "";
            dom.showDiv(["qCheckbox_d"]);
        }
        if (event.target.id === "question_dDate_btn") {
            dom.showDiv(["qDate_d"]);
        }
        if (event.target.id === "question_dOrderItems_btn") {
            dom.showDiv(["qOrderItems_d"]);
        }
        if (event.target.id === "question_dRadio_btn") {
            dom.els.qRadio_dChoices_ul.innerHTML = "";
            dom.showDiv(["qRadio_d"]);
        }
        if (event.target.id === "question_dText_btn") {
            dom.showDiv(["qText_d"]);
        }
    });

}
