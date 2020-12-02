function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    //tabs
    const tabs = document.querySelectorAll(tabsSelector),
          tabscontent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentSelector);


    function hideTabsContent() {
        tabscontent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
            });
        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });    
    }

    function showTabsContent(i = 0) {
        
        tabscontent[i].classList.add('show', 'fade');
        tabscontent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
        
    }

    hideTabsContent();
    showTabsContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if(target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if(target == item) {
                    hideTabsContent();
                    showTabsContent(i); 
                }
            });
        }
    });

}

export default tabs;