/* 
Convert table to card for responsivesness
by @kushalcodes 
*/
let TABLE_KONVERTER = {
  referenceTableIdOrClassName: '',
  referenceTableParentEl: null,
  isReferenceIdOrClass: function () {
    if (this.referenceTableIdOrClassName.substring(0, 1) === "#") return "id";
    if (this.referenceTableIdOrClassName.substring(0, 1) === ".") return "class";
    return false;
  },
  konvert: function () {
    this.hideTable();
    const referenceType = this.isReferenceIdOrClass();
    if (referenceType) {
      // if id
      if (referenceType === "id") this.handleId();
      // if class
      if (referenceType === "class") this.handleClass();
    } else {
      console.error("Invalid id or class name provided to run table konverter!");
    }

    // windows innerWidth checks
    TABLE_KONVERTER.handleWindowWidthChange(window.innerWidth);
    window.addEventListener('resize', function (e) {
      TABLE_KONVERTER.handleWindowWidthChange(e.target.innerWidth);
    });

  },
  tableHeadingTitles: [],
  tableBodyTRs: [],
  tableCard: [],
  handleId: function () {
    const tableId = this.referenceTableIdOrClassName.substring(1);
    const table = document.getElementById(tableId);
    // prent element of table, later used to append card to it
    this.referenceTableParentEl = table.parentElement;
    const tableHead = table.getElementsByTagName('thead')[0];
    const tableBody = table.getElementsByTagName('tbody')[0];

    const tableHeadings = tableHead.getElementsByTagName('th');

    for (let i = 0; i < tableHeadings.length; i++) {
      const heading = tableHeadings[i];
      this.tableHeadingTitles.push(heading.innerText);
    }

    const tableBodyContents = tableBody.getElementsByTagName('tr');
    this.tableBodyTRs = tableBodyContents;
    // gathers all table information and adds to tableCard array the list of objects of gathered information
    this.generateTableCard();
    // append card element to document
    this.generateCardElement();
  },
  handleClass: function () {
    const tableClass = this.referenceTableIdOrClassName.substring(1);
    const tables = document.getElementsByClassName(tableClass);
    for (let i = 0; i < tables.length; i++) {
      const table = tables[i];
      if (table.id && table.id.length > 0) {
        console.error(`Id already exists for table: <table class='${table.className}'></table> 
        \n You are using css initialization
        \n We basically convert table elements initialization with cssm to have generated ids and use that id to convert using the id.
        \n Hence its basically id initialization
        `)
        break;
      }
      const theId = 'konverted-table-' + i;
      table.id = theId;
      TABLE_KONVERTER.init("#" + theId, TABLE_KONVERTER.options);
    }
  },

  generateTableCard: function () {
    for (let i = 0; i < this.tableBodyTRs.length; i++) {
      const bodyTr = this.tableBodyTRs[i];
      const bodyTds = bodyTr.getElementsByTagName('td');
      let tempObj = {};
      for (let j = 0; j < bodyTds.length; j++) {
        const bodyTd = bodyTds[j];
        const titleLowered = this.tableHeadingTitles[j].toLowerCase();
        const title = titleLowered.replace(' ', '_');
        tempObj[title] = bodyTd.innerHTML;
      }
      this.tableCard.push(tempObj);
    }
  },

  insertAfter: function (referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  },

  generateCardElement: function () {
    for (let i = 0; i < this.tableCard.length; i++) {
      const cardObj = this.tableCard[i];
      const generatedCard = this.generateCardSingle(cardObj);
      if (this.referenceTableParentEl) this.insertAfter(this.referenceTableParentEl, generatedCard);
    }
  },

  generateCardSingle: function (cardObj) {
    let card = document.createElement('div');
    card.className = 'card table-card';
    card.style.width = "100%";
    card.style.margin = "0 auto";
    card.style.marginBottom = "5px";
    card.style.marginTop = "5px";
    for (const key in cardObj) {
      if (Object.hasOwnProperty.call(cardObj, key)) {
        const value = cardObj[key];
        let keyReadable = this.capitalize(key).replace('_', ' ');
        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        cardBody.innerHTML += "<h5 class='card-title'>" + keyReadable + "</h5>";
        cardBody.innerHTML += "<div class='card-text'>" + value + "</div>";
        card.appendChild(cardBody);
      }
    }
    return card;
  },

  capitalize: function (s) {
    return s[0].toUpperCase() + s.slice(1);
  },

  hideTable: function () {
    // hide table
    const referenceType = this.isReferenceIdOrClass();
    if (referenceType) {
      const referenceTableSelector = this.referenceTableIdOrClassName.substring(1);
      if (referenceType === "id") document.getElementById(referenceTableSelector).style.display = "none";
      if (referenceType === "class") {
        const elements = document.getElementsByClassName(referenceTableSelector);
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.display = "none";
        }
      }
      // show all cards
      const tableCards = document.getElementsByClassName('table-card');
      for (let i = 0; i < tableCards.length; i++) {
        tableCards[i].style.display = 'block';
      }
    }
  },

  showTable: function () {
    // show default table
    const referenceType = this.isReferenceIdOrClass();
    if (referenceType) {
      const referenceTableSelector = this.referenceTableIdOrClassName.substring(1);
      if (referenceType === "id") document.getElementById(referenceTableSelector).style.display = "table";
      if (referenceType === "class") {
        const elements = document.getElementsByClassName(referenceTableSelector);
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.display = "table";
        }
      }
      // hide all cards
      const tableCards = document.getElementsByClassName('table-card');
      for (let i = 0; i < tableCards.length; i++) {
        tableCards[i].style.display = 'none';
      }
    }
  },

  handleWindowWidthChange: function (currentWidth) {
    if (currentWidth <= 425) {
      this.hideTable();
    } else {
      this.showTable();
    }
  },

  stylingMap: {
    buddha: "buddha.css",
    simple: "simple.css"
  },

  loadStyling: function (name) {
    let isNameValid = false, cssName = '';
    for (const key in this.stylingMap) {
      if (Object.hasOwnProperty.call(this.stylingMap, key)) {
        if (key === name) {
          cssName = this.stylingMap[key];
          isNameValid = true;
          break;
        }
      }
    }
    if (!isNameValid) {
      console.warn('Invalid styling name. Following are valid stylings : ');
      console.table(this.stylingMap);
      return;
    }

    document.head.innerHTML += `<link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/kushalcodes/konvert-table-to-card@main/styling/${cssName}'/>`;
  },

  options: {},

  init: function (elementIdOrClassName, options) {
    if (options) this.options = options;
    if (options && options.style) this.loadStyling(options.style);

    this.referenceTableIdOrClassName = elementIdOrClassName;
    this.konvert();
  }
};