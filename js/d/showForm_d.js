export function showForm_d(cf, dom) {

document.addEventListener("changeDiv", () => {
    if (
        dom.els.showForm_d.dataset.toFrom === "showForm_d changeColOrder_d" ||
        dom.els.showForm_d.dataset.toFrom === "showForm_d colHeadingEdit_d" ||
        dom.els.showForm_d.dataset.toFrom === "showForm_d createColHeading_d" ||
        dom.els.showForm_d.dataset.toFrom === "showForm_d createFormTitle_d" ||
        dom.els.showForm_d.dataset.toFrom === "showForm_d formFpx_d" || 
        dom.els.showForm_d.dataset.toFrom === "showForm_d deleteReally_d" ||
        dom.els.showForm_d.dataset.toFrom === "showForm_d formDescription_d" ||
        dom.els.showForm_d.dataset.toFrom === "showForm_d formMenu_d" ||
        dom.els.showForm_d.dataset.toFrom === "showForm_d formTitleEdit_d" ||
        dom.els.showForm_d.dataset.toFrom === "showForm_d qCheckbox_d" ||
        dom.els.showForm_d.dataset.toFrom === "showForm_d qDate_d" ||
        dom.els.showForm_d.dataset.toFrom === "showForm_d qOrderItems_d" ||
        dom.els.showForm_d.dataset.toFrom === "showForm_d qRadio_d" ||
        dom.els.showForm_d.dataset.toFrom === "showForm_d qText_d"
    ) {
        dom.els.showForm_d.dataset.toFrom = "";
        showForm(cf, dom);
        dom.showDiv(["showForm_d", "showForm_dInner_d"]);
    }
})

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
        dom.els.home_d.dataset.toFrom = "home_d showForm_d";
        document.dispatchEvent(dom.changeDiv);
    }
    if (event.target.id === "showForm_dNewCol_btn") {
        dom.els.createColHeading_d_inp.value = "";
        dom.showDiv(["createColHeading_d"]);
    }
    if (event.target.id === "showForm_dUploadCsv_btn") {
        dom.els.uploadCsv_dFile_inp.value = "";
        dom.els.uploadCsv_dIncludeRowsChkbx_inp.checked = false;
        dom.showDiv(["uploadCsv_d"]);
    }
})

}

function showForm(cf, dom) {

    const csvForms = cf.getCsvForms();
    const form = cf.getForm(csvForms);
    console.log("form:", form)
    dom.els.showForm_dInner_d.innerHTML = "";
    const titleP = document.createElement("p");
    titleP.classList.add("showForm_dTitle_p");
    titleP.innerHTML = "title: " + form.title;
    const descriptionP = document.createElement("p");
    descriptionP.classList.add("showForm_dDescription_p");
    descriptionP.innerHTML = "description: " + form.description;
    const fpxP = document.createElement("p");
    fpxP.classList.add("showForm_dFpx_p");
    fpxP.innerHTML = "file name prefix: " + form.fpx;
    dom.els.showForm_dInner_d.append(titleP, fpxP, descriptionP);
    form.columns.forEach((column, i) => {
        const columnP = document.createElement("p");
        columnP.classList.add("showForm_dColumn_p");
        columnP.dataset.colIdx = i;
        columnP.innerHTML = "column " + parseInt(i + 1) + " " + column.heading;
        dom.els.showForm_dInner_d.append(columnP);
        column.questions.forEach(question => {
            const questionP = document.createElement("p");
            questionP.innerHTML = JSON.stringify(question);
            dom.els.showForm_dInner_d.append(questionP);
        })
    })
}
