export function addQToForm(cf, q) {
        const csvForms = cf.getCsvForms();
        const col = cf.getColumn(csvForms);
        col.questions.push(q);
        cf.setCsvForms(csvForms);
}
