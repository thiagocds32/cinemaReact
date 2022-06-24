export function checkWallpaperExist(movieId) {
  try {
    return require("../Images/cardWallpapers/" + movieId + "b.jpg");
  } catch (err) {
    return require("../Images/cardWallpapers/default.jpg");
  }
}
