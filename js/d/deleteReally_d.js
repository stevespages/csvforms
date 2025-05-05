export function deleteReally_d(cf, dom, populateHome_dForms_ul) {
    dom.els.deleteReally_d.addEventListener("click", event => {
        if (event.target.id === "deleteReally_dCancel_btn") {
            dom.showDiv([event.target.dataset.cancelTo]);
        }
        if (event.target.id === "deleteReally_dOk_btn") {
            if (event.target.dataset.deleteWhat === "form") {
                const csvForms = cf.getCsvForms();
                const formIdx = csvForms.activeIdxs.form;
                csvForms.forms.splice(formIdx, 1);
                cf.setCsvForms(csvForms);
                populateHome_dForms_ul(cf, dom);
                dom.showDiv([event.target.dataset.okTo]);
            }
        }
    })
}
