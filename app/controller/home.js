const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    console.log('stage-dev123');
    console.log('push');
    this.ctx.body = "Hello world jinkens two agins";
  }
}

module.exports = HomeController;

// 我是feat分支的第一次修改
//我是dev第一次修改
