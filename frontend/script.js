function testBackend(){
    // send a request to >>
    fetch("http://127.0.0.1:5000/")
    .then(res => res.text())
    .then(data => {
        document.getElementById("response").innerText = data;
    });
}

function recommend(){
    const userInput = document.getElementById("input").value;
    // send a request to /recommend
    fetch("http://127.0.0.1:5000/recommend", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ preferences: userInput})
    })

    .then(res => res.json())
    .then(data => {                            //TODO add images and error handiling 
        document.getElementById("result").innerHTML= `
            <h2>${data.name}</h2>
            <img src="${data.image}" alt="${data.name}" style="max-width: 200px; border-radius: 10px;">
            <p>${data.description}</p>
            <p>Price: $${data.price}</p>

            
        `
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("result").innerHTML = "Something went wrong. Please try again.";
    })
}
