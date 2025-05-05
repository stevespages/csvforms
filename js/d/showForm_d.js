export function showForm_d(cf, dom, populateHome_dForms_ul, showEdit) {

dom.els.showForm_d.addEventListener("click", event => {
    if (event.target.classList.contains("showForm_dColumn_p")) {
        const csvForms = cf.getCsvForms();
        csvForms.activeIdxs.column = event.target.dataset.colIdx;
        cf.setCsvForms(csvForms);
        dom.showDiv(["colMenu_d"]);
    }

    if (event.target.classList.contains("showForm_dDescription_p")) {
        dom.els.formDescription_d_inp.value = "";
        dom.showDiv(["formDescription_d"]);
    }
    if (event.target.classList.contains("showForm_dFpx_p")) {
        dom.els.formFpx_d_inp.value = "";
        dom.showDiv(["formFpx_d"]);
    }
    if (event.target.classList.contains("showForm_dTitle_p")) {
        dom.els.formTitleEdit_d_inp.value = "";
        dom.showDiv(["formTitleEdit_d"]);
    }
    if (event.target.id === "showForm_dEnd_btn") {
        populateHome_dForms_ul(cf, dom);
        dom.showDiv(["home_d"]);
    }
    if (event.target.id === "showForm_dNewCol_btn") {
        dom.els.createColHeading_d_inp.value = "";
        dom.showDiv(["createColHeading_d"]);
    }
})

}
