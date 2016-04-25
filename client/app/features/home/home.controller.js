/**
 * an ES6 class is normally assigned
 */
export default class HomeController {

  /**
   * Static getter, that returns the unique identifier of the class. Used for registration with modules.
   */
  static get UID(){
    return "HomeController"
  }

  /* @ngInject */
  constructor(HomeService) {
    // Properties of the class are defined in the constructor with this
    this.greeting = HomeService.generateGreeting();

    this.name = 'World';
  }
}
