function addSuggestion(event) {
    event.preventDefault(); // Prevent form submission
    
    var userName = document.getElementById("userName").value;
    var userSuggestion = document.getElementById("userSuggestion").value;
    var suggestionList = document.getElementById("suggestionList");
    
    if (userName && userSuggestion && userSuggestion.length <= 200) {
        var suggestionItem = document.createElement("div");
        suggestionItem.classList.add("suggestion-item");
        
        var suggestionContent = document.createElement("p");
        suggestionContent.textContent = `${userName}: ${userSuggestion}`;
        
        var suggestionTime = document.createElement("span");
        var currentTime = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
        suggestionTime.textContent = ` - ${currentTime}`;
        
        suggestionItem.appendChild(suggestionContent);
        suggestionItem.appendChild(suggestionTime);
        
        suggestionList.appendChild(suggestionItem);
        
        document.getElementById("userName").value = "";
        document.getElementById("userSuggestion").value = "";
    } else {
        alert("Please provide a valid name and suggestion (max 200 characters).");
    }
}

document.getElementById("suggestionForm").addEventListener("submit", addSuggestion);
