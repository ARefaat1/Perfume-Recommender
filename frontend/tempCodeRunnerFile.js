function testBackend(){
    // send a request to >>
    fetch("http://127.0.0.1:5000/")
    .then(res => res.text())
    .then(data => {
        document.getElementById("responce").innerText = data;
    });
}