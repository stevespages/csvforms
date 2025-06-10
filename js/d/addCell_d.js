export function addCell_d(cf, dom) {

    document.addEventListener("changeDiv", () => {
        if (
            [
                "row_d_ul_li-class"
            ]
            .includes(dom.els.addCell_d.dataset.from)
        ) {
            dom.els.addCell_d.dataset.from = "";
            const colIdx = dom.els.addCell_d.dataset.colIdx;
            const csvForms = cf.getCsvForms();
            const form = cf.getForm(csvForms);
            // do not use cf.getColumn() as colIdx not yet in localStorage
            const col = form.columns[colIdx];
            // now save colIdx to localStorage:
            csvForms.activeIdxs.column = colIdx;
            cf.setCsvForms(csvForms);
            console.log("col", col);
            dom.els.addCell_d_h2.textContent = col.heading;
            dom.els.addCell_d_form.innerHTML = "";
            col.questions.forEach(question =>  {
                dom.els.addCell_d_form.append(makeQuestion(question));
            })
            dom.showDiv("addCell_d");
        }
    })



    dom.els.addCell_d.addEventListener("click", event => {
        if (event.target.classList.contains("orderItemsQuestionLi")) {
            const orderedItemsInp = document.querySelector("#orderedItemsInp");
            const orderedItemsP = document.querySelector("#orderedItemsP");
            const orderedItemsPSpan = document.createElement("span");
            orderedItemsPSpan.classList.add("orderedItemsPSpan");
            orderedItemsPSpan.textContent += " " + event.target.textContent;
            orderedItemsP.append(orderedItemsPSpan);
            orderedItemsInp.value = orderedItemsP.textContent;
        }
        if (event.target.classList.contains("orderedItemsPSpan")) {
            event.target.remove();
            const orderedItemsInp = document.querySelector("#orderedItemsInp");
            const orderedItemsP = document.querySelector("#orderedItemsP");
            orderedItemsInp.value = orderedItemsP.textContent;
        }
        if (event.target.id === "addCell_dCancel_btn") {
               dom.changeDivTo("row_d", event.target.id);
        }
        if (event.target.id === "addCell_dOk_btn") {
            const formData = new FormData(dom.els.addCell_d_form);
            let userResponse = "";
            for (const value of formData.values()) {
                userResponse += value + " | ";
            }
            userResponse = userResponse.slice(0, userResponse.length - 3);
            const csvForms = cf.getCsvForms();
            //const column = cf.getColumn(csvForms);
            const colIdx = csvForms.activeIdxs.column;
            const form = cf.getForm(csvForms);
            const lastUserResponsesIdx = (form.columns[0].userResponses.length) - 1;
            form.columns[colIdx].userResponses.splice(
                lastUserResponsesIdx,
                1,
                userResponse
            )
            csvForms.activeIdxs.row = lastUserResponsesIdx;
            cf.setCsvForms(csvForms);
            console.log("you hit ok btn", event.target.id)
            dom.changeDivTo("row_d", event.target.id);
        }
    })
}

function makeQuestion(question) {
    if (question.category === "checkbox") {
        return makeCheckboxQuestion(question);
    }
    if (question.category === "date") {
        return makeDateQuestion(question);
    }
    if (question.category === "orderItems") {
        return makeOrderItemsQuestion(question);
    }
    if (question.category === "radio") {
        return makeRadioQuestion(question);
    }
    if (question.category === "text") {
        return makeTextQuestion(question);
    }
}

function makeCheckboxQuestion(question) {
    const section = document.createElement("section");
    question.values.forEach(val => {
        const label = document.createElement("label");
        label.innerHTML = val;
        const checkboxInp = document.createElement("input");
        checkboxInp.setAttribute("name", "checkbox");
        checkboxInp.setAttribute("type", "checkbox");
        checkboxInp.setAttribute("value", val);
        label.append(checkboxInp);
        section.append(label);
    })
    return section;
}

function makeDateQuestion(question) {
    const dateInp = document.createElement("input");
    if (question.options.dateAndTime) {
        dateInp.setAttribute("type", "datetime-local");
        if (question.options.includeSeconds) {
            dateInp.setAttribute("step", 2);
        }
    } else {
        if (question.options.timeOnly) {
            dateInp.setAttribute("type", "time");
            if (question.options.includeSeconds) {
                dateInp.setAttribute("step", 2);
                dateInp.setAttribute("value", getDateAndTime("hh:mm:ss"));
            } else {
                dateInp.setAttribute("value", getDateAndTime("hh:mm"));
            }
        } else {
            dateInp.setAttribute("type", "date");
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

function makeRadioQuestion(question) {
    const section = document.createElement("section");
    question.values.forEach(val => {
        const label = document.createElement("label");
        label.innerHTML = val;
        const radioInp = document.createElement("input");
        radioInp.setAttribute("name", "radio");
        radioInp.setAttribute("type", "radio");
        radioInp.setAttribute("value", val);
        label.append(radioInp);
        section.append(label);
    })
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

function getDateAndTime(format) {
    const date = new Date();

    let sec = date.getSeconds();
    let min = date.getMinutes();
    let hr = date.getHours();

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    if (sec < 10) sec = "0" + sec;
    if (min < 10) min = "0" + min;
    if (hr < 10) hrs = "0" + hrs;

    if (day < 10) day = "0" + day;
    month = month + 1;
    if (month < 10) month = "0" + month;

    if (format === "hh:mm") {
        return hr + ":" + min;
    }
    if (format === "hh:mm:ss") {
        return hr + ":" + min + sec;
    }
    
    return year + month + day;

}

function deleteEmptyRows(columns) {
    const rowsToDelete = [];
    loop_i: for (let i = 0; i < columns[0].userResponses.length; i++) {
        loop_j: for (let j = 0; j < columns.length; j++) {
            if (columns[j].userResponses[i]) {
                continue loop_i;
            }
        }
        rowsToDelete.push(i);
    }
    rowsToDelete.forEach(rowIdx => {
        columns.forEach(col => {
            col.userResponses.splice(rowIdx, 1);
        })
    })
}
