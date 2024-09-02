/**
 * Contains the miscellaneous route handlers.
 * @author Godspower Mukoro  <https://github.com/Gmukoro>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send("Hello Holberton School!");
  }
}

export default AppController;
module.exports = AppController;
