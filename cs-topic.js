document.querySelectorAll(".btn btn--with-icon").forEach(element => {
    if(element.classList.contains("active")) {
      element.classList.remove("active")
    }
    element.addEventListener("click", function(e) {
      
      if(document.querySelector(".btn btn--with-icon.active")) {
        document.querySelector(".btn btn--with-icon.active").classList.remove("active")
      }
      if(element.classList.contains("active")) {
        element.classList.remove("active")
      } else {
        element.classList.add("active")
      }
  
    })
  })
  
// index.js

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
  
    // Listen for scroll events
    window.addEventListener("scroll", function () {
        // Check if the page has scrolled beyond a certain threshold
        if (window.scrollY > 50) {
            // Add the class to change the navbar color
            navbar.classList.add("navbar-scrolled");
        } else {
            // Remove the class to revert to the transparent navbar
            navbar.classList.remove("navbar-scrolled");
        }
    });
  });
  
  
  // Wait for the DOM to be fully loaded
  document.addEventListener("DOMContentLoaded", function () {
    // Get the navbar toggler button
    const navbarToggler = document.querySelector(".navbar-toggler");
    
    // Get the navbar collapse content
    const navbarCollapse = document.querySelector(".navbar-collapse");
  
    // Add click event listener to the navbar toggler button
    navbarToggler.addEventListener("click", function () {
        // Toggle the "show" class on the navbar collapse content
        navbarCollapse.classList.toggle("show");
    });
  });
/**
 *  Read More JS
 *  Truncates text via specified character length with more/less actions.
 *  Maintains original format of pre-truncated text.
 *  @author stephen scaff
 *  @todo   Add destroy method for ajaxed content support.
 *
 */
const ReadMore = (() => {
  let s;

  return {
    settings() {
      return {
        content: document.querySelectorAll(".js-read-more"),
        originalContentArr: [],
        truncatedContentArr: [],
        moreText: "Read More",
        lessText: "Less",
      };
    },

    init() {
      s = this.settings();
      this.bindEvents();
    },

    bindEvents() {
      ReadMore.truncateText();
    },

    /**
     * Count Words
     * Helper to handle word count.
     * @param {string} str - Target content string.
     */
    countWords(str) {
      return str.split(/\s+/).length;
    },

    /**
     * Ellipse Content
     * @param {string} str - content string.
     * @param {number} wordsNum - Number of words to show before truncation.
     */
    ellipseContent(str, wordsNum) {
      return str.split(/\s+/).slice(0, wordsNum).join(" ") + "...";
    },

    /**
     * Truncate Text
     * Truncate and ellipses contented content
     * based on specified word count.
     * Calls createButton() and handleClick() methods.
     */
    truncateText() {
      for (let i = 0; i < s.content.length; i++) {
        const originalContent = s.content[i].innerHTML;
        const numberOfWords = s.content[i].dataset.rmWords;
        const truncateContent = ReadMore.ellipseContent(
          originalContent,
          numberOfWords
        );
        const originalContentWords = ReadMore.countWords(originalContent);

        s.originalContentArr.push(originalContent);
        s.truncatedContentArr.push(truncateContent);

        if (numberOfWords < originalContentWords) {
          s.content[i].innerHTML = s.truncatedContentArr[i];
          let self = i;
          ReadMore.createButton(self);
        }
      }
      ReadMore.handleClick(s.content);
    },

    /**
     * Create Button
     * Creates and Inserts Read More Button
     * @param {number} index - index reference of looped item
     */
    createButton(index) {
      const buttonWrap = document.createElement("span");

      buttonWrap.className = "read-more__button-wrap";

      buttonWrap.innerHTML = `<button id="read-more_${index}" class="read-more__button">${s.moreText}</button>`;

      // Insert created button
      s.content[index].parentNode.insertBefore(
        buttonWrap,
        s.content[index].nextSibling
      );
    },

    /**
     * Handle Click
     * Toggle Click event
     */
    handleClick(el) {
      const readMoreButton = document.querySelectorAll(".read-more__button");

      for (let j = 0, l = readMoreButton.length; j < l; j++) {
        readMoreButton[j].addEventListener("click", function () {
          const moreButtonID = this.getAttribute("id");
          let index = moreButtonID.split("_")[1];

          el[index].classList.toggle("is-expanded");

          if (this.dataset.clicked !== "true") {
            el[index].innerHTML = s.originalContentArr[index];
            this.innerHTML = s.lessText;
            this.dataset.clicked = true;
          } else {
            el[index].innerHTML = s.truncatedContentArr[index];
            this.innerHTML = s.moreText;
            this.dataset.clicked = false;
          }
        });
      }
    },

    /**
     * Open All
     * Method to expand all instances on the page.
     */
    openAll() {
      const instances = document.querySelectorAll(".read-more__button");
      for (let i = 0; i < instances.length; i++) {
        content[i].innerHTML = s.truncatedContentArr[i];
        instances[i].innerHTML = s.moreText;
      }
    },
  };
})();

ReadMore.init();

