"use strict";

const searchForm = document.querySelector(".search-form");

// Week 1 is a static UI. Prevent a page reload until search functionality
// is added in a later week.
if (searchForm) {
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });
}
