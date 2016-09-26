'use strict';

angular.module('SatanApp.lentele', [])

.controller('LenteleController', ['$scope', '$http', function($scope, $http) {
    $scope.myData = [];

    $scope.gridOptions = { 
        data: 'data',
        enableRowSelection: true,
        enableSelectAll: true,
        selectionRowHeaderWidth: 35,
        rowHeight: 35,
        showGridFooter: true,
        enableSelectionBatchEvent: true,
        columnDefs: [
            {field: 'vardas', displayName: 'vardas'},
            {field: 'pastas', displayName: 'pastas'},
            {field: 'pasiulymas', displayName: 'pasiulymas'},
            {field: 'apigosiki', displayName: 'apeigos iki'},
            {field: 'atvykstu', displayName: 'atvykstu'},
            {field: 'kunas', displayName: 'kunas'},
            {field: 'titulas', displayName: 'titulas'},
            {field: 'lytis', displayName: 'lytis'}
        ]
    };

    $scope.getSelectedRows = function () {
         $scope.mySelectedRows = $scope.gridApi.selection.getSelectedRows();
    };

    $scope.gridOptions.onRegisterApi = function (gridApi) {
        $scope.gridApi = gridApi;
    };

    $http.get('http://akademonai.nim.lt:9001/api/registration').success(function(data) {
        //console.log(data[0]);
        $scope.data = data;
    });
}]);