
import controller from './dashboard.controller'

/**
 * Routing function for dashboard
 * @param  $stateProvider
 */
/* @ngInject */
export default function routes($stateProvider) {
  $stateProvider.state("dashboard", {
    url: "/dashboard",
    template: require("./dashboard.html"),
    controller: controller.UID,
    controllerAs: "dashboard"
  });
}
