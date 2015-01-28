angular.module('app', ['ui.bootstrap'])

.controller('AppCtrl', function() {
	this.appName = 'My App';
})

.controller('NavBarCtrl', ['$scope', '$location', '$window', function($scope, $location, $window) {
	$scope.isCollapsed = false;

	$scope.doCollapse = function() {
		if($($window).innerWidth() < 768) {
			$scope.isCollapsed = !$scope.isCollapsed;
		}
	};

	$scope.isActive = function(path) {
	    if ($location.path() === path) {
	      return "active";
	    } else {
	      return "";
	    }
	};
}]);