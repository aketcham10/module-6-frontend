addEventListener("DOMContentLoaded", async function() {
    const response = await fetch("http://localhost:3000/api/songs");
    const songs = await response.json();
    
    let html = "";
    for (const song of songs) {
        console.log(song._id);
        html += `<li>${song.title}</li>`;
    }
    document.querySelector("#addedsong").innerHTML = html;
})