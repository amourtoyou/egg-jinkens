const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = "Hello world jinkens two agins";
  }
}

module.exports = HomeController;
