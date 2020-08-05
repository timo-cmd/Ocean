(function(){

    function getElement(query) {
        return document.querySelector(query)
    }
    
    function changeElementText(node, text) {
        node.innerText = text
    }
    
    function changeElementHTML(node, html) {
        node.innerHTML = html
    }
    
    function getElementText(node) {
        return node.innerText
    }
    
    function getElementHTML(node) {
        return node.innerHTML
    }
    
    /* 	----------
    Auto-Saving	
    ---------- */
    
    var newTitle, // Used for getting the title from the page
        newBody, // Used for getting the body of the article
        oldTitle = null, // Used to keep track of the old title
        oldBody = null; // Used to keep track of the old article body
    
    var timer = 5000; // Timer for auto-saving in millisec
    
    /* 	----------
    Loading from localStorage (if any)	
    ---------- */
    
    if(localStorage.getItem('notetitle') !== null)
    {
        changeElementText(getElement('header'), localStorage.getItem('notetitle'))
        changeElementHTML(getElement('article'), localStorage.getItem('notebody'))
    }
    
    window.setInterval(function(){
        newTitle = getElementText(getElement('header'))
        newBody = getElementHTML(getElement('article'))
        // Save only if the title and/or the body is edited
        if(newTitle != oldTitle)
        {
            localStorage.setItem('notetitle', newTitle);
            oldTitle = newTitle;
        }
    
        if(newBody != oldBody)
        {
            localStorage.setItem('notebody', newBody);
            oldBody = newBody;
        }
    
        }, timer);
    })();
    
