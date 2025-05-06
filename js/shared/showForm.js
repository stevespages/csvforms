export function showForm(cf, dom) {

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
