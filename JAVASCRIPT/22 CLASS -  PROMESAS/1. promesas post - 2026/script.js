const endPointPosts = "https://jsonplaceholder.typicode.com/posts";

promesasPostsFetch();
promesasPostsAsync();

function promesasPostsFetch() {
  console.log("promesa con fetch then");
  fetch(endPointPosts)
    .then((posts) => posts.json())
    .then((postJSON) => console.log(postJSON))
    .catch((errorPosts) =>
      console.log(`error al procesar promesa ${errorPosts}`),
    );
}

async function promesasPostsAsync() {
  console.log("promesa con async await");
  try {
    const post = await fetch(endPointPosts);
    const postJSON = await post.json();
    console.log(postJSON);
  } catch (errorPosts) {
    console.log(`error al procesar promesa ${errorPosts}`);
  }
}
