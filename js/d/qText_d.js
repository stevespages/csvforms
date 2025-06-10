export function qText_d(addQToForm, cf, dom) {

        document.addEventListener("changeDiv", () => {
        if (
            [        
                "question_dText_btn"
            ]
            .includes(dom.els.qText_d.dataset.from)
        ) {
            dom.els.qText_d.dataset.from = "";
            dom.showDiv("qText_d");
        }
    })

    dom.els.qText_d.addEventListener("click", event => {
        if (event.target.id === "qText_dCancel_btn") {
            dom.changeDivTo("showForm_d", event.target.id);
        }
        if (event.target.id === "qText_dOk_btn") {
            const q = 
                {
                    category: "text",
                };
            addQToForm(cf, q);
            dom.changeDivTo("showForm_d", event.target.id);
        }
    })

}
