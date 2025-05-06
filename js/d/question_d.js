export function question_d(dom) {

    dom.els.question_d.addEventListener("click", (event) => {
        if (event.target.id === "question_dCancel_btn") {
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
        }
        if (event.target.id === "question_dCheckbox_btn") {
            dom.els.qChoice_d_h2.innerHTML = "Choice Question (checkbox)";
            dom.els.qChoice_dOk_btn.dataset.type = "checkbox";
            dom.els.qChoice_dChoices_ul.innerHTML = "";
            dom.showDiv(["qChoice_d"]);
        }
        if (event.target.id === "question_dDate_btn") {
            dom.showDiv(["qDate_d"]);
        }
        if (event.target.id === "question_dOrderItems_btn") {
            dom.showDiv(["qOrderItems_d"]);
        }
        if (event.target.id === "question_dRadio_btn") {
            dom.els.qChoice_d_h2.innerHTML = "Choice Question (radio)";
            dom.els.qChoice_dOk_btn.dataset.type = "radio";
            dom.els.qChoice_dChoices_ul.innerHTML = "";
            dom.showDiv(["qChoice_d"]);
        }
        if (event.target.id === "question_dText_btn") {
            dom.showDiv(["qText_d"]);
        }
    });

}
