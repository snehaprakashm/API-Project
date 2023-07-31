
const result = document.getElementById("result");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let enterWord = document.getElementById("enter word").value;
 
      fetch(` https://api.dictionaryapi.dev/api/v2/entries/en/${enterWord}`)
   
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
            <div class="word">
                    <h3>${enterWord}</h3>
                   
                </div>
                
                <p class="word-meaning">
                   ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p>`;
           
        })
        .catch(() => {
            result.innerHTML = `<h2 class="error">Couldn't Find The Word</h2>`;
        });
});
