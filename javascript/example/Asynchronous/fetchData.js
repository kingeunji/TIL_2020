const fetch = require('node-fetch');

function fetchAuthorName(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(post => post.userId)
            .then(userId => {
                return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                    .then(response => response.json())
                    .then(user => user.name)
            });
}

fetchAuthorName(1).then(name => console.log("name:", name));


async function fetchAuthorNameWithAsync(postId) {
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const post = await postResponse.json();
    const userId = post.userId;
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const user = await userResponse.json();
    return user.name;
}

fetchAuthorNameWithAsync(1).then(name => console.log("name:", name));
