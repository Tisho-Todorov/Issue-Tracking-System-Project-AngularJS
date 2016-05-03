var app = angular.module('IssueTracker', [])
                .controller('myControler', function($scope) {
                    $scope.projectView = "addProject.html";
                    $scope.issueView = "addIssue.html";
    });