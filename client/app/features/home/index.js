import angular from 'angular';
import uirouter from 'angular-ui-router';


// Import base modules
import config from './home.config';
import routes from './home.routes';
import controller from './home.controller';
import service from './home.service';

// Import internal modules
import greeting from '../../components/greeting/greeting.directive';
import navigation from '../../components/navigation/navigation.directive';
import fullPageAngular from '../../components/fullPageAngular/fullPageAngular.directive';

export default angular.module('app.home', [uirouter, navigation, greeting, fullPageAngular])
  .config(config)
  .config(routes)
  .controller(controller.UID, controller)
  .service(service.UID(), service)
  .name;
