var app = angular.module('IssueTracker', [])
                .controller('myControler', function($scope) {
                    $scope.projectView = "addProject.html";
                    $scope.issueView = "addIssue.html";
                    $scope.dashboardView = "dashboard.html";
                    $scope.newProjectView = "projects.html";

                    $scope.changeView = function () {
                       var el = angular.element('testDiv');
                       el.attr('ng-include', dashboardView);
                        $scope.apply(el);
                    }

    });