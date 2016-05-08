var app = angular.module('IssueTracker', [])
                .controller('myControler', function($scope) {
                    $scope.projectView = "templates/addProject.html";
                    $scope.issueView = "templates/addIssue.html";
                    $scope.dashboardView = "templates/dashboard.html";
                    $scope.newProjectView = "templates/projects.html";
                    $scope.issuePageView = "templates/issuePage.html";

    });