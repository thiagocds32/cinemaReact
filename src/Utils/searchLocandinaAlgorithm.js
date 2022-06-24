export function checkLocandinaExist(movieId) {
  try {
    return require("../Images/cardLocandina/" + movieId + "c.jpg");
  } catch (err) {
    return require("../Images/cardLocandina/default.jpg");
  }
}
