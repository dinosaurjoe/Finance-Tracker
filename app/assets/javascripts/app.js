var app = angular.module('FinanceTrackerApp',[])
                 .factory('stockService', ['$http', function($http){
                    var stockApi = {};

                    stockApi.searchStocks = function(symbol){
                      return $http.get('/search_stocks.json?stock=' + symbol);
                    }

                    return stockApi;
                 }])
                 .controller('stocksController', ['$scope', function($scope){

                  $scope.stock = {};

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
