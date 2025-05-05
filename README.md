# CSV Forms

## The `csvForms` Object

`csvForms` is a JavaScript object stored in localStorage as a JSON string.

```
{
    activeIdxs: {
        form: <null || INT>,
        column: <null || INT>,
    },
    forms: <[{}, {}, etc]>
}
```

## A JSON form

The following is an example of a `form` object as a JSON string which will work with this website. The `userResponses` property will be modified as the user enters data into the form.

```
{
    "description": "A record of observations made during a bee hive inspection",
    "fpx": "hive",
    "columns": [
        {
            "heading": "Hive Name",
            "questions": [
                {
                    "category": "text"
                },
            ],
            "userResponses": {},
        },
        {
            "heading": "Hive Name",
            "questions": [
                {
                    "category": "text"
                },
            ],
            "userResponses": [],
        },
    ],
    "title": "Hive Inspection Record",
}
```

## File Structure

```
/
    js/
        d/
            home/
                d.js
                only-used-by-home_d.js 
            etc/
                d.js
                only-used-by-etc_d.js
        used-by-more-than-one-div.js
        main.js
    index.html
```

Avoid importing files which are directly inside `/js/` into the div modules eg `/js/d/home/d.js`. Import them into `/js/main.js` and then pass them as arguments to the function exported by, for example, `/js/d/home/d.js`.

## Flow

```
colMenu_d
    column heading ---> colHeading_d

createColHeading_d
    input
    start ---> showForm_d
    csvForms.forms[csvForms.activeIdxs.form].columns.push({heading: <heading>})

createFormTitle_d
    input
    ok -----------> showForm_d
       csvForms.activeIdxs = csvForms.forms.push({title: <title>})

description_d
    input
    ok ---> showForm_d
       form.description = <description>

formMenu_d
    cancel -------------------> home_d
    add row ------------------> addRow_d
    delete -------------------> reallyDelete_d
    edit form ----------------> showForm_d
    email rows (CSV) ---------> [email application]
    see form and rows (JSON) ->
    see rows (CSV) ----------->
    view table --------------->

fpx_d
    input
    ok ---> showForm_d
       form.fpx = <fpx>

home_d          
    menu -----> mainMenu_d
    li -------> formMenu_d

mainMenu_d
    create form ----------> createFormTitle_d
    upload CSV for form -->
    upload JSON form ----->
    paste JSON form ------>

reallyDelete_d
    cancel ---> home_d
    ok -------> home_d
       csvForms.forms.splice()???????

showForm_d
    new column ---> colHeading_d
    title --------> editTitle_d
    fpx ----------> fpx_d
    description --> description_d

``` 

## NB

*   form title, fpx and description edit dialogs (and colHeadingEdit_d_inp) should have the existing value displayed in the input element
