export function row_d(cf, dom) {

    dom.els.row_d.addEventListener("click", event => {
        if (event.target.classList.contains("row_d_ul_li")) {
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

        if (event.target.id === "row_dRowIdxDown_btn") {
            if (dom.els.row_dRowIdx_inp.value > 1) {
                dom.els.row_dRowIdx_inp.value = 
                    parseInt(dom.els.row_dRowIdx_inp.value) - 1;
            }
        }

        if (event.target.id === "row_dRowIdxUp_btn") {
            const csvForms = cf.getCsvForms();
            const cols = cf.getColumns(csvForms);
            if (dom.els.row_dRowIdx_inp.value < cols[0].userResponses.length) {
                dom.els.row_dRowIdx_inp.value = 
                    parseInt(dom.els.row_dRowIdx_inp.value) + 1;
            }
        }

        if (event.target.id === "row_dNewRow_btn") {
            // this should remove indexes so rows are ordered by entry order
            const csvForms = cf.getCsvForms();
            const form = cf.getForm(csvForms);

            // delete any empty rows
            deleteEmptyRows(form.columns);

            // this adds an empty row
            form.columns.forEach(col => {
                col.userResponses.push(null);
            })
            cf.setCsvForms(csvForms);

            // this removes text from user-response-spans
            const userResponseSpans =
                document.querySelectorAll(".user-response-span");
            Array.from(userResponseSpans).forEach(span => {
                span.textContent = "";
            })

            // this puts the new row number in the input box
            dom.els.row_dRowIdx_inp.value = form.columns[0].userResponses.length;
        }

        if (event.target.id === "row_dOk_btn") {
            dom.showDiv(["home_d"]);
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
