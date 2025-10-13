addEventListener("DOMContentLoaded", async function() {
    this.document.querySelector("#deleteButton").addEventListener("click", deleteSong);
    getAllSongs();
})

async function getAllSongs() {
    const response = await fetch("http://localhost:3000/api/songs");
    if (response.ok) {
        const songs = await response.json();
        let html = "";
        for (const song of songs) {
            html += `<option value="${song._id}">${song.title}</option>`;
        }
        document.querySelector("#songDropDown").innerHTML = html;
    }
}

async function deleteSong() {
    const songId = document.querySelector("#songDropDown").value;
    console.log(songId);
    const response = await fetch(`http://localhost:3000/api/songs/${songId}`, {
        method: "DELETE"
    });
    if (response.ok) {
        getAllSongs();
    }
    else {
        const error = await response.json();
        document.querySelector("#error").innerHTML = error.message;
    }
}