export function showForm_d(cf, dom, populateHome_dForms_ul) {

dom.els.showForm_d.addEventListener("click", event => {
    if (event.target.classList.contains("showForm_dColumn_p")) {
        const csvForms = cf.getCsvForms();
        csvForms.activeIdxs.column = event.target.dataset.colIdx;
        cf.setCsvForms(csvForms);
        const column = cf.getColumn(csvForms);
        dom.els.colMenu_d_h2.textContent = "column: " + column.heading;
        dom.els.colMenu_dQuestions_ul.innerHTML = "";
        column.questions.forEach((q, qIdx) => {


            const qLi = document.createElement("li");
            qLi.classList.add("colMenu_dQuestions_ul_li");
            qLi.dataset.qIdx = qIdx;
            qLi.innerHTML = JSON.stringify(q);
            dom.els.colMenu_dQuestions_ul.append(qLi);


        })
        dom.showDiv(["colMenu_d"]);
    }

    if (event.target.classList.contains("showForm_dDescription_p")) {
        const csvForms = cf.getCsvForms();
        const form = cf.getForm(csvForms);
        dom.els.formDescription_d_inp.value = form.description;
        dom.showDiv(["formDescription_d"]);
    }
    if (event.target.classList.contains("showForm_dFpx_p")) {
        const csvForms = cf.getCsvForms();
        const form = cf.getForm(csvForms);
        dom.els.formFpx_d_inp.value = form.fpx;
        dom.showDiv(["formFpx_d"]);
    }
    if (event.target.classList.contains("showForm_dTitle_p")) {
        const csvForms = cf.getCsvForms();
        const form = cf.getForm(csvForms);
        dom.els.formTitleEdit_d_inp.value = form.title;
        dom.showDiv(["formTitleEdit_d"]);
    }
    if (event.target.id === "showForm_dChangeColOrder_btn") {
        const csvForms = cf.getCsvForms();
        const columns = cf.getColumns(csvForms);
        dom.els.changeColOrder_d_ul.innerHTML = "";
        columns.forEach((column, colIdx) => {
            const li = document.createElement("li");
            li.textContent = "column " + colIdx + ": " + column.heading;
            li.classList.add("changeColOrder_d_ul_li");
            li.dataset.colIdx = colIdx;
            dom.els.changeColOrder_d_ul.append(li);
            dom.showDiv(["changeColOrder_d"])
        })
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
