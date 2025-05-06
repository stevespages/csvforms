export function qDate_d(addQToForm, cf, dom, showForm) {

    dom.els.qDate_d.addEventListener("click", event => {
        if (event.target.id === "qDate_dCancel_btn") {
            dom.showDiv(["question_d"]);
        }
        if (event.target.id === "qDate_dOk_btn") {
            const options = {}
            options.includeTime = dom.els.qDate_dIncludeTime_inp.checked;
            options.includeYear = dom.els.qDate_dIncludeYear_inp.checked;
            options.showCurrent = dom.els.qDate_dShowCurrent_inp.checked;
            const q =
                {
                    category: "date",
                    options: options,
                };
            
            addQToForm(cf, q);
            showForm(cf, dom);
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
        }
    })

}
