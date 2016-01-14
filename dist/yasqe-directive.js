angular.module('fi.seco.yasqe', []);
var fi;
(function (fi) {
    var seco;
    (function (seco) {
        var yasqe;
        (function (yasqe_1) {
            'use strict';
            var YasqeDirective = (function () {
                function YasqeDirective($timeout) {
                    var _this = this;
                    this.$timeout = $timeout;
                    this.restrict = 'E';
                    this.scope = {
                        data: '=',
                        endpoint: '=',
                        callback: '=',
                        yasqe: '='
                    };
                    this.link = function ($scope, element, attr) {
                        var yasqe = YASQE(element[0], { createShareLink: false, sparql: { callbacks: { complete: $scope.callback }, showQueryButton: $scope.callback ? true : false } });
                        $scope.yasqe = yasqe;
                        yasqe.on('change', function () { return _this.$timeout(function () { return $scope.data = yasqe.getValue(); }); });
                        $scope.$watch('data', function (data, odata) { if (data && data !== yasqe.getValue())
                            yasqe.setValue(data); });
                        $scope.$watch('endpoint', function (endpoint) { if (endpoint)
                            yasqe.options.sparql.endpoint = endpoint; });
                    };
                }/*<auto_generate>*/YasqeDirective.$inject = ['$timeout']; YasqeDirective.$componentName = 'yasqe'/*</auto_generate>*/
                return YasqeDirective;
            })();/*<auto_generate>*/angular.module('fi.seco.sparql').directive('yasqe',['$timeout',function(){return new (Function.prototype.bind.apply(YasqeDirective,[null].concat(Array.prototype.slice.call(arguments))));}]);/*</auto_generate>*/
            yasqe_1.YasqeDirective = YasqeDirective;
        })(yasqe = seco.yasqe || (seco.yasqe = {}));
    })(seco = fi.seco || (fi.seco = {}));
})(fi || (fi = {}));

//# sourceMappingURL=yasqe-directive.js.map
