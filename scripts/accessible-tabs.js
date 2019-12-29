const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  // when a tab is clicked, hide all other panels
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });

  // mark all tabs as unselected
  tabButtons.forEach(tab => {
    tab.setAttribute('aria-selected', false);
  })

  // mark this tab as selected
  event.currentTarget.setAttribute('aria-selected', true);
  console.log(event.currentTarget);

  // find the associated tab panel and show it
  const { id } = event.currentTarget;

  /*
    METHOD 1
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;
  */

  // METHOD 2 - Find in the array of tab panels
  const tabPanel = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === id);
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
