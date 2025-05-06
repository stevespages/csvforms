export function qText_d(addQToForm, cf, dom, showForm) {

    dom.els.qText_d.addEventListener("click", event => {
        if (event.target.id === "qText_dCancel_btn") {
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
        }
        if (event.target.id === "qText_dOk_btn") {
            const q = 
                {
                    category: "text",
                };
            addQToForm(cf, q);
            showForm(cf, dom);
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
        }
    })

}
