const paginate = followers => {
  const itemsPerPage = 9;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);

  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    // start represents the index from which to start selecting followers for the current page.
    const start = index * itemsPerPage;

    // slice select a portion of the followers array starting from the start index and ending at start + itemsPerPage
    return followers.slice(start, start + itemsPerPage);
  });
  return newFollowers;
};

export default paginate;
