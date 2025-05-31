export function qText_d(addQToForm, cf, dom) {

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
            dom.els.showForm_d.dataset.toFrom = "showForm_d qText_d";
            document.dispatchEvent(dom.changeDiv);
        }
    })

}
