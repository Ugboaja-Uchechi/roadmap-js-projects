const tabs = document.querySelectorAll('.tabs div');
const tabContent = document.querySelectorAll('.tab-content div');

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContent.forEach((content) => {
      // when the tab is clicked, remove the active class from all the content
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      // when the tab is clicked, remove the active class from all the tabs
      tab.classList.remove("active");
    });
    // add the active class to the content and tab that was clicked
    tabContent[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});
