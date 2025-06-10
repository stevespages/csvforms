export function question_d(dom) {

        document.addEventListener("changeDiv", () => {
        if (
            [        
                "colMenu_dAddQuestion_btn"
            ]
            .includes(dom.els.question_d.dataset.from)
        ) {
            dom.els.question_d.dataset.from = "";
            dom.showDiv("question_d");
        }
    })

    dom.els.question_d.addEventListener("click", (event) => {
        if (event.target.id === "question_dCancel_btn") {
            dom.changeDivTo("showForm_d", event.target.id);
        }
        if (event.target.id === "question_dCheckbox_btn") {
            dom.els.qCheckbox_dChoices_ul.innerHTML = "";
               dom.changeDivTo("qCheckbox_d", event.target.id);
        }
        if (event.target.id === "question_dDate_btn") {
               dom.changeDivTo("qDate_d", event.target.id);
        }
        if (event.target.id === "question_dOrderItems_btn") {
               dom.changeDivTo("qOrderItems_d", event.target.id);
        }
        if (event.target.id === "question_dRadio_btn") {
            dom.els.qRadio_dChoices_ul.innerHTML = "";
               dom.changeDivTo("qRadio_d", event.target.id);
        }
        if (event.target.id === "question_dText_btn") {
               dom.changeDivTo("qText_d", event.target.id);
        }
    });

}
