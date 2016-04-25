import angular from 'angular';
import uirouter from 'angular-ui-router';

// Import base modules
import config from './dashboard.config';
import routes from './dashboard.routes';
import controller from './dashboard.controller';

// Import internal modules
import navigation from '../../components/navigation/navigation.directive';


export default angular.module('app.dashboard', [uirouter, navigation])
  .config(config)
  .config(routes)
  .controller(controller.UID, controller)
  .name;
