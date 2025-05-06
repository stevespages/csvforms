export function addRow_d(cf, dom) {

    dom.els.addRow_d.addEventListener("click", event => {
        if (event.target.classList.contains("addRow_d_ul_li")) {
            const colIdx = event.target.dataset.colIdx;
            const csvForms = cf.getCsvForms();
            const form = cf.getForm(csvForms);
            // do not use cf.getColumn() as colIdx not yet in localStorage
            const col = form.columns[colIdx];
            // now save colIdx to localStorage:
            csvForms.activeIdxs.column = colIdx;
            cf.setCsvForms(csvForms);
            console.log("col", col);
            dom.els.addCell_d_h2.textContent = event.target.textContent;
            dom.els.addCell_d_form.innerHTML = "";
            col.questions.forEach(question =>  {
                dom.els.addCell_d_form.append(makeQuestion(question));
            })
            dom.showDiv(["addCell_d"]);
        }
        // we should have a cancel btn. This would need to remove all the
        // last element in every form.column.userResponses array and then
        // direcct the user to home_d
        if (event.target.id === "addRow_dOk_btn") {
            dom.showDiv(["home_d"]);
        }
    })
}

function makeQuestion(question) {
    if (question.category === "date") {
        return makeDateQuestion(question);
    }
    if (question.category === "orderItems") {
        return makeOrderItemsQuestion(question);
    }
    if (question.category === "text") {
        return makeTextQuestion(question);
    }
}

function makeDateQuestion(question) {
    const dateInp = document.createElement("input");
    if (question.options.includeTime) {
        dateInp.setAttribute("type", "datetime-local")
        if (question.options.showCurrent) {
            dateInp.value = dateForShowCurrent("includeTime");
        }
    } else {
        dateInp.setAttribute("type", "date");
        if (question.options.includeTime) {
            dateInp.value = dateForShowCurrent("doNotIncludeTime")
        }
    }
    dateInp.setAttribute("name", "dateInp");
    return dateInp;
}

function makeOrderItemsQuestion(question) {
    const section = document.createElement("section");
    const h3 = document.createElement("h3");
    h3.textContent = "Click items in order"
    section.append(h3);
    const ul = document.createElement("li");
    question.values.forEach(value => {
        const li = document.createElement("li");
        li.classList.add("orderItemsQuestionLi");
        li.textContent = value;
        ul.append(li);
    })
    section.append(ul);
    const orderedItemsP = document.createElement("p");
    orderedItemsP.setAttribute("id", "orderedItemsP");
    section.append(orderedItemsP);
    const orderedItemsInp = document.createElement("input");
    orderedItemsInp.setAttribute("id", "orderedItemsInp");
    orderedItemsInp.setAttribute("name", "orderedItemsInp");
    orderedItemsInp.classList.add("hide");
    section.append(orderedItemsInp);
    return section;
}

function makeTextQuestion(question) {
    const textInp = document.createElement("input");
    textInp.setAttribute("type", "text");
    textInp.setAttribute("name", "textInp");
    return textInp;
}

function dateForShowCurrent(includeTimeOrNot) {
    const date = new Date();
    //let sec = date.getSeconds();
    let min = date.getMinutes();
    let hr = date.getHours();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    //if (sec < 10) sec = "0" + sec;
    if (min < 10) min = "0" + min;
    if (hr < 10) hrs = "0" + hrs;
    if (day < 10) day = "0" + day;
    month = month + 1;
    if (month < 10) month = "0" + month;
    if (includeTimeOrNot === "includeTime") {
        return year + "-" + month + "-" + day + "T" + hr + ":" + min;
    } else {
        return year + "-" + month + "-" + day;
    }
}

/*
export function dateForFileName() {
    const date = new Date();
*/
    /*
    let sec = date.getSeconds();
    let min = date.getMinutes();
    let hr = date.getHours();
    */
/*
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
*/
    /*
    if (sec < 10) sec = "0" + sec;
    if (min < 10) min = "0" + min;
    if (hr < 10) hrs = "0" + hrs;
    */
/*
    if (day < 10) day = "0" + day;
    month = month + 1;
    if (month < 10) month = "0" + month;
    // return year + month + day + hr + min + sec;
    return year + month + day;
}
*/
