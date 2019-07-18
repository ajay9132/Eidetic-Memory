/* createUnOrderedList Description
* createUnOrderedList function is used to return <UL> element created inside the function.
* @param {string} classList - optional parameter that assigns a class for CSS styling
* Return - This function returns the created unOrderedList
*Function Call - Examples to call this function
1) unOrderedList = createUnOrderedList("unOrderedList");
*/
window.createUnOrderedList = function(classList){
  var unOrderedList = document.createElement("UL");
  if (typeof classList !== "undefined") {
    unOrderedList.classList.add(classList);
  }
  return unOrderedList;
}

/* createListItem Description
* createListItem function is used to return the <li> element created inside the function
* @param {string} text - the text content of the listItem element
* Return - This function returns the created listItem
* Function Call - Examples to call this function
1) listItem = createListItem("Turn right");
*/
window.createListItem = function(text){
  var listItem = document.createElement("LI");
  var textNode = document.createTextNode(text);
  listItem.appendChild(textNode);
  return listItem;
}

/* createTable Description
* createTable function is used to return <table> element created inside the function.
* @param {string} classList - optional parameter that assigns a class for CSS styling
* Return - This function returns the created table object
*Function Call - Examples to call this function
1) table = createTable("tableStyle");
*/
window.createTable = function(classList){
  var table = document.createElement("TABLE");
  document.body.appendChild(table);
  if (typeof classList !== "undefined") {
    table.classList.add(classList);
  }
  return table;
}


/* createTableRow Description
* createTableRow function is used to return <tr> element created inside the function.
* @param {string} classList - optional parameter that assigns a class for CSS styling
* Return - This function returns the created table row object
*Function Call - Examples to call this function
1) tableRow = createTableRow("trStyle");
*/
window.createTableRow = function(classList){
  var tableRow = document.createElement("TR");
  if (typeof classList !== "undefined") {
    tableRow.classList.add(classList);
  }
  return tableRow;
}

/* createTableHeader Description
* createTableHeader function is used to return <th> element created inside the function.
* @param {object} tableRow - the object of the table row in which the <th> element is to be appended.
* @param {string} value - value to be placed inside the table cell of the <th> element.
* @param {string} classList - optional parameter that assigns a class for CSS styling
* Return - This function returns the created table header object
*Function Call - Examples to call this function
1) tableHeader = createTableHeader("trStyle");
*/
window.createTableHeader = function(tableRow,value,classList){
  var tableHeader = document.createElement("TH");
  var textNode = document.createTextNode(value);
  tableHeader.appendChild(textNode);
  tableRow.appendChild(tableHeader);
  if (typeof classList !== "undefined") {
    tableHeader.classList.add(classList);
  }
  return tableHeader;
}

/* createTableData Description
* createTableData function is used to return <td> element created inside the function.
* @param {object} tableRow - the object of the table row in which the <td> element is to be appended.
* @param {string} value - value to be placed inside the table cell of the <td> element.
* @param {string} classList - optional parameter that assigns a class for CSS styling
* Return - This function returns the created table data object
*Function Call - Examples to call this function
1) table = createTableData("tdStyle");
*/
window.createTableData = function(tableRow,value,classList){
  var tableData = document.createElement("TD");
  var textNode = document.createTextNode(value);
  tableData.appendChild(textNode);
  tableRow.appendChild(tableData);
  if (typeof classList !== "undefined") {
    tableData.classList.add(classList);
  }
  return tableData;
}


/* createHeading1 Description
* createHeading1 function is used to return <h1> element created inside the function.
* @param {string} titleText - parameter that assigns value to the <h1> element
* Return - This function returns the created heading
*Function Call - Examples to call this function
1) heading1 = createHeading1("Eidetic Memory");
*/
window.createHeading1 = function(titleText){
  var gameHeading = document.createElement("H1");
  var textNode = document.createTextNode(titleText);
  gameHeading.appendChild(textNode);
  return gameHeading;
}

/* createHeading2 Description
* createHeading2 function is used to return <h2> element created inside the function.
* @param {string} titleText - parameter that assigns value to the <h2> element
* Return - This function returns the created heading
*Function Call - Examples to call this function
1) heading2 = createHeading2("Eidetic Memory");
*/
window.createHeading2 = function(titleText){
  var gameHeading = document.createElement("H2");
  var textNode = document.createTextNode(titleText);
  gameHeading.appendChild(textNode);
   return gameHeading;
}

/* createHeading3 Description
* createHeading3 function is used to return <h1> element created inside the function.
* @param {string} titleText - parameter that assigns value to the <h3> element
* Return - This function returns the created heading
*Function Call - Examples to call this function
1) heading3 = createHeading3("Eidetic Memory");
*/
window.createHeading3 = function(titleText){
  var gameHeading = document.createElement("H3");
  var textNode = document.createTextNode(titleText);
  gameHeading.appendChild(textNode);
  return gameHeading;
}

/* createLabel Description
* createLabel function is used to return <p> element created inside the function.
* @param {string} titleText - parameter that assigns value to the <p> element
* Return - This function returns the created heading
*Function Call - Examples to call this function
1) label = createLabel("Eidetic Memory");
*/
window.createLabel = function(titleText){
  var label = document.createElement("LABEL");
  if (typeof titleText !== 'undefined') {
    var textNode = document.createTextNode(titleText);
    label.appendChild(textNode);
  }
  return label;
}

/* createDiv Description
* createDiv function is used to return <div> element created inside the function.
* @param {string} classList - optional parameter that assigns value to the <h1> element
* @param {string} text - optional parameter that assigns value to the <h1> element
* Return - This function returns the created div object
*Function Call - Examples to call this function
1) div = createDiv("divStyle","Eidetic Memory");
2) div = createDiv();
*/
window.createDiv = function(classList,text){
  var container = document.createElement("DIV");
  if (typeof text !== 'undefined') {
    var textNode = document.createTextNode(text);
    container.appendChild(textNode);
  }
  if (typeof  classList !== "undefined") {
    container.classList.add(classList);
  }
  return container;
}


/* createSpan Description
* createSpan function is used to return <span> element created inside the function.
* @param {text} text - optional parameter that assigns value to the <span> element
* Return - This function returns the created span object
*Function Call - Examples to call this function
1) heading = createSpan("Eidetic Memory");
*/
window.createSpan = function(text){
  var container = document.createElement("SPAN");
  if (typeof text !== 'undefined') {
    var textNode = document.createTextNode(text);
    container.appendChild(textNode);
  }
  return container;
}

/* createTextInput Description
* createTextInput function is used to return <input> element created inside the function.
* @param {string} value - parameter that assigns value to the <input> element
* Return - This function returns the created input object
*Function Call - Examples to call this function
1) inputElement = createTextInput("Eidetic Memory");
*/
window.createTextInput = function(value){
  var container = document.createElement("INPUT");
  container.setAttribute("type", "text");
  container.setAttribute("value", value);
  return container;
}

/* createParagraph Description
* createParagraph function is used to return <p> element created inside the function.
* @param {string} titleText - parameter that assigns value to the <p> element
* Return - This function returns the created paragraph object
*Function Call - Examples to call this function
1) para = createParagraph("Eidetic Memory");
*/
window.createParagraph= function(titleText){
  var paragraph = document.createElement("P");
  if (typeof titleText !== 'undefined') {
    var textNode = document.createTextNode(titleText);
    paragraph.appendChild(textNode);
  }
  return paragraph;
}

/* createButton Description
* createButton function is used to return <button> element created inside the function.
* @param {string} titleText - optional parameter that assigns value to the <button> element
* Return - This function returns the created button object
*Function Call - Examples to call this function
1) button = createButtonbutton("click here");
*/
window.createButton = function(btnText){
  var button = document.createElement("Button");
  if (typeof btnText !== 'undefined') {
    var textNode = document.createTextNode(btnText);
    button.appendChild(textNode);
  }
  return button;
}

/* createImg Description
* createImg function is used to return <image> element created inside the function.
* @param {string} imageSourceURL - parameter that assigns src attribute of the image to the <image> element
* @param {string} altTag - optional parameter that assigns altTag attribute to the <image> element
* Return - This function returns the created image object
*Function Call - Examples to call this function
1) image = createImg("images/upArrow.png);
*/
window.createImg = window.createImage = function(imageSourceURL, altTag){
    var element = document.createElement("IMG");
    element.setAttribute("src", imageSourceURL);
    if (typeof altTag !== 'undefined') {
        element.setAttribute("alt", altTag);
    }
    return element;
}
