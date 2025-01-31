const SearchButton = document.getElementById("button"); // Corrected to match the id of the button
const InputBox = document.getElementById("input");     // Corrected to match the id of the input
const MyDiv = document.getElementById("div");
const ClearButton = document.getElementById("clear");  // Corrected to match the id of the clear button

SearchButton.addEventListener("click", function() {
    const searchItem = InputBox.value;

    fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchItem}&client_id=ad-B4mi77HrusB1wuTIvNzUKPNu-8qtbOTmfdhxqVdc`)
    .then(function(result){
        return result.json();
    })
    .then(function(output){
        output.results.forEach(function(i) {
            const img = document.createElement("img");
            img.src = i.urls.full;
            img.alt = i.alt_description || "Image from Unsplash";
            MyDiv.appendChild(img);
        });
    })
    .catch(function(error){
        console.log(error);
    });
});

ClearButton.addEventListener("click", function() {
    MyDiv.innerHTML = "";  // Clear the div content without removing the div itself
    InputBox.value = "";  // Reset the input field
});
