/*eslint-disable */
import models from '../models/index';
const  articles  = models.article;
/**
 * @exports
 * @class UserService
 */
class Articleservice {
  /**
   * create new article
   * @static createuser
   * @param {object} newuser
   * @memberof userService
   * @returns {object} data
   */
  static createuser(newArticle) {
    return articles.create(newArticle);
  }
  static findByProp(prop) {
    return articles.findAll({
      where: prop,
    });
  }
 
  static updateAtt(set, prop) {
    return articles.update(set, {
      where: prop,
    });
  }
  static getUsers(id) {
    return articles.findAll(
      {
        where: {
          id,
        },
      },
    );
  }



  static drop(id){
    return articles.drop({where: {
      id: id
    }})
  }
  static deleteById(id){
    return articles.destroy({
      where: { id: id }
    })
  }
}
export default UserService;
