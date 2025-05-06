export const cf = {
    getColumn(csvForms) {
        const formIdx = csvForms.activeIdxs.form;
        const form = csvForms.forms[formIdx];
        const colIdx = csvForms.activeIdxs.column;
        const column = form.columns[colIdx];
        return column;
    },
    getColumns(csvForms) {
        const formIdx = csvForms.activeIdxs.form;
        const form = csvForms.forms[formIdx];
        const colIdx = csvForms.activeIdxs.column;
        return form.columns;
    },
    getCsvForms() {
        const csvForms = JSON.parse(localStorage.getItem("csvForms"));
        return csvForms;
    },
    getForm(csvForms) {
        const formIdx = csvForms.activeIdxs.form;
        const form = csvForms.forms[formIdx];
        return form;
    },
    getForms(csvForms) {
        const forms = csvForms.forms;
        return forms;
    },
    setCsvForms(csvForms) {
        localStorage.setItem("csvForms", JSON.stringify(csvForms));
    },
}
