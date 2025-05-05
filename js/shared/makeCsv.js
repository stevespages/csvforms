export function makeCsv(cf, context) {
    //const forms = JSON.parse(localStorage.getItem("forms"));
    //const form = forms.formsArr[forms.activeIdxs.form];

    const form = cf.getForm();

    const lengthOfUserResponsesArrays = form.columns[0] ?
        form.columns[0].userResponses.length : 0;
  
    console.log("lengthOfUserResponsesArrays", lengthOfUserResponsesArrays)
    let csvHeader = "";
    form.columns.forEach(col => {
        csvHeader += col.heading + ", ";
    })
    csvHeader = csvHeader.slice(0, csvHeader.length - 2);
    if (context === "for email") {
        let csvData = "";
        for (let i = 0; i < lengthOfUserResponsesArrays; i++) {
            form.columns.forEach(col => {
                csvData += col.userResponses[i] + ", ";
            })
            csvData = csvData.slice(0, csvData.length - 2);
            csvData += "%0D%0A";
        }
        const csv = csvHeader + "%0D%0A" + csvData;
        return csv;
    }
    if (context = "for HTML") {
        const headerP = document.createElement("p");
        headerP.textContent = csvHeader;
        const dataSection = document.createElement("section");
        for (let i = 0; i < lengthOfUserResponsesArrays; i++) {
            const p = document.createElement("p");
            form.columns.forEach(col => {
                p.textContent += col.userResponses[i] + ", ";
            })
            p.textContent = p.textContent.slice(0, p.textContent.length - 2);
            dataSection.append(p);
        }
        return {
            headerP: headerP,
            dataSection: dataSection,
        }
    }
    return csv;
}
