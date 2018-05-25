var app = angular.module('FinanceTrackerApp',[])
                 .controller('stocksController', ['$scope', function($scope){
                  $scope.lookup = function(){
                    if($scope.ticker != undefined && $scope.ticker != ''){
                        $scope.stock = {
                          symbol: 'FOO',
                          name: 'Example Corp',
                          last_price: '123.00'
                        }
                    } else {
                        $scope.stock = {}
                    }
                   }
                 }])
