import fetchUser from "./githubAPI";

(
  async () =>
  {
    const userData = await fetchUser('bradtraversy');
    document.querySelector('h1').innerHTML = JSON.stringify(userData);
  }
)();