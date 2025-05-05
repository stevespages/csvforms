export function viewAllRows(dom) {
    const forms = JSON.parse(localStorage.getItem("forms"));
    const form = forms.formsArr[forms.activeIdxs.form];
    dom.els.viewAllRows_d_table.innerHTML = "";
    const headersTr = document.createElement("tr");
    form.columns.forEach(column => {
        const th = document.createElement("th");
        th.textContent = column.heading;
        headersTr.append(th);
    })
    dom.els.viewAllRows_d_table.append(headersTr);
    const lengthOfUserResponsesArrays = (form.columns[0].userResponses.length);
    for (let i = 0; i < lengthOfUserResponsesArrays; i++) {
        const tr = document.createElement("tr");
        form.columns.forEach(column => {
            const td = document.createElement("td");
            td.textContent = column.userResponses[i]
            tr.append(td);
        })
        dom.els.viewAllRows_d_table.append(tr);
    }
}
