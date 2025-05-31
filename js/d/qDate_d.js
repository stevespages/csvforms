export function qDate_d(addQToForm, cf, dom, showForm) {

    dom.els.qDate_d.addEventListener("click", event => {
        if (event.target.id === "qDate_dCancel_btn") {
            dom.showDiv(["question_d"]);
        }
        if (event.target.id === "qDate_dOk_btn") {
            const options = {}
            options.dateAndTime = dom.els.qDate_dDateAndTime_inp.checked;
            options.dateOnly = dom.els.qDate_dDateOnly_inp.checked;
            options.includeSeconds = dom.els.qDate_dIncludeSeconds_inp.checked;
            options.includeYear = dom.els.qDate_dIncludeYear_inp.checked;
            options.timeOnly = dom.els.qDate_dTimeOnly_inp.checked;
            const q =
                {
                    category: "date",
                    options: options,
                };
            
            addQToForm(cf, q);
            dom.els.showForm_d.dataset.toFrom = "showForm_d qDate_d";
            document.dispatchEvent(dom.changeDiv);
        }
    })

}
