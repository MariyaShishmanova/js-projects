const container = document.querySelector('.container');

const display = followers => {
  const newFollowers = followers
    .map(follower => {
      const { login, avatar_url, html_url } = follower;
      return `<article class="card">
    <img src="${avatar_url}" alt="${login}">
    <h4>${login}</h4>
    <a href="${html_url}" class="btn">view profile</a>
    </article>`;
    })
    .join('');
  container.innerHTML = newFollowers;
};

export default display;
