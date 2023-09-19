'use strict'

document.addEventListener('DOMContentLoaded', async function () {
})
document.getElementById("searchMe").addEventListener('click', async function () {
    const username = document.getElementById("searchStuff").value;
    const wordBox = document.getElementById("userStuff");


    try {
        await fetchGitHubUser(username, wordBox);
    }catch(error) {
        console.error(error);
    }
});


async function fetchGitHubUser(userName , wordBox) {
    try {
        const reply = await fetch(`https://api.github.com/users/${userName}`);

     if (reply.status === 404) {
        throw new Error('Wrong Info?');
     } else if (reply.status === 200) {
        const data = await reply.json();
      wordBox.innerHTML = `<h2>${data.login}</h2>`;
        
    } else { 
        throw new Error("Incorrect Querty"); 
    }
} catch(error) {
    console.error(error);
}
}
