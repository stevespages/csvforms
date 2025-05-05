export const cf = {

    getForm() {
        const csvForms = this.getCsvForms();
        const formIdx = csvForms.activeIdxs.form;
        const form = csvForms.forms[formIdx];
        return form;
    },
    getForms() {
        const csvForms = this.getCsvForms();
        const forms = csvForms.forms;
        return forms;
    },
    getCsvForms() {
        const csvForms = JSON.parse(localStorage.getItem("csvForms"));
        return csvForms;
    },
    setCsvForms(csvForms) {
        localStorage.setItem("csvForms", JSON.stringify(csvForms));
    },
}
