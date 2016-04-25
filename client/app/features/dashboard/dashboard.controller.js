/**
 * an ES6 class is normally assigned
 */
export default class DashboardController {

  status: string;

  /* @ngInject */
  constructor() {
    // Properties of the class are defined in the constructor with this
    this.status = 'good';

  }
  /**
   * Static getter, that returns the unique identifier of the class. Used for registration with modules.
   */
  static get UID(){
    return "DashboardController"
  }

}
