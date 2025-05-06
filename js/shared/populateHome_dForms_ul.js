export function populateHome_dForms_ul(cf, dom) {
    dom.els.home_dForms_ul.innerHTML = "";
    const csvForms = cf.getCsvForms();
    const forms = cf.getForms(csvForms);
    forms.forEach((form, idx) => {
        const li = document.createElement("li");
        li.textContent = form.title;
        li.classList.add("home_dForms_ul_li");
        li.dataset.formIdx = idx;
        dom.els.home_dForms_ul.append(li);
    })
}
