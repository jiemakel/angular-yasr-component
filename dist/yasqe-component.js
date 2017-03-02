angular.module('fi.seco.yasqe', []);
var fi;
(function (fi) {
    var seco;
    (function (seco) {
        var yasqe;
        (function (yasqe) {
            'use strict';
            var YasqeComponentController = (function () {
                function YasqeComponentController($element, $timeout) {
                    this.$element = $element;
                    this.$timeout = $timeout;
                }
                YasqeComponentController.prototype.$postLink = function () {
                    var _this = this;
                    if (!this.content)
                        this.content = '';
                    this.yasqe = YASQE(this.$element[0], { createShareLink: false, sparql: { endpoint: this.endpoint, callbacks: { complete: function (results) { return _this.onQueryResults({ results: results }); } }, showQueryButton: this.showQueryButton } });
                    this.yasqe.setValue(this.content);
                    this.yasqe.on('change', function () { return _this.onContentChanged({ content: _this.yasqe.getValue() }); });
                    this.onInit({ yasqe: this.yasqe });
                };
                YasqeComponentController.prototype.$onChanges = function (changes) {
                    if (changes.endpoint && !changes.endpoint.isFirstChange)
                        this.yasqe.options.sparql.endpoint = changes.endpoint.currentValue;
                    if (changes.content && !changes.content.isFirstChange && changes.content.currentValue !== this.yasqe.getValue())
                        this.yasqe.setValue(changes.content.currentValue);
                };
                return YasqeComponentController;
            }());/*<auto_generate>*/angular.module('fi.seco.yasqe').controller('YasqeComponentController',['$element','$timeout',function(){return new (Function.prototype.bind.apply(YasqeComponentController,[null].concat(Array.prototype.slice.apply(arguments))));}]);/*</auto_generate>*/
            yasqe.YasqeComponentController = YasqeComponentController;
            var YasqeComponent = (function () {
                function YasqeComponent() {
                    this.bindings = {
                        content: '<',
                        onContentChanged: '&',
                        onQueryResults: '&',
                        endpoint: '<',
                        onInit: '&',
                        showQueryButton: '@'
                    };
                    this.controller = 'YasqeComponentController'; // (new (...args: any[]) => angular.IController) = SelectViewComponentController
                }
                return YasqeComponent;
            }());/*<auto_generate>*/angular.module('fi.seco.yasqe').component('yasqe',new YasqeComponent());/*</auto_generate>*/
            yasqe.YasqeComponent = YasqeComponent;
        })(yasqe = seco.yasqe || (seco.yasqe = {}));
    })(seco = fi.seco || (fi.seco = {}));
})(fi || (fi = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy95YXNxZS1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUE7QUFDbkMsSUFBVSxFQUFFLENBK0NYO0FBL0NELFdBQVUsRUFBRTtJQUFDLElBQUEsSUFBSSxDQStDaEI7SUEvQ1ksV0FBQSxJQUFJO1FBQUMsSUFBQSxLQUFLLENBK0N0QjtRQS9DaUIsV0FBQSxLQUFLO1lBQ3JCLFlBQVksQ0FBQTtZQVNaO2dCQVdFLGtDQUFvQixRQUFrQyxFQUFVLFFBQWlDO29CQUE3RSxhQUFRLEdBQVIsUUFBUSxDQUEwQjtvQkFBVSxhQUFRLEdBQVIsUUFBUSxDQUF5QjtnQkFBRyxDQUFDO2dCQUM5Riw0Q0FBUyxHQUFoQjtvQkFBQSxpQkFNQztvQkFMQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7d0JBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUE7b0JBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBQyxlQUFlLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxFQUFFLFFBQVEsRUFBRSxVQUFDLE9BQU8sSUFBSyxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsRUFBdkMsQ0FBdUMsRUFBQyxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUMsQ0FBQyxDQUFBO29CQUN4TixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUMsQ0FBQyxFQUF2RCxDQUF1RCxDQUFDLENBQUE7b0JBQ3RGLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUE7Z0JBQ2xDLENBQUM7Z0JBQ00sNkNBQVUsR0FBakIsVUFBa0IsT0FBc0M7b0JBQ3RELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQzt3QkFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFBO29CQUMzSCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFBO2dCQUNwSyxDQUFDO2dCQUNILCtCQUFDO1lBQUQsQ0F2QkEsQUF1QkMsSUFBQTtZQXZCWSw4QkFBd0IsMkJBdUJwQyxDQUFBO1lBRUQ7Z0JBQUE7b0JBQ1MsYUFBUSxHQUEyQjt3QkFDeEMsT0FBTyxFQUFFLEdBQUc7d0JBQ1osZ0JBQWdCLEVBQUUsR0FBRzt3QkFDckIsY0FBYyxFQUFFLEdBQUc7d0JBQ25CLFFBQVEsRUFBRSxHQUFHO3dCQUNiLE1BQU0sRUFBRSxHQUFHO3dCQUNYLGVBQWUsRUFBRSxHQUFHO3FCQUNyQixDQUFBO29CQUNNLGVBQVUsR0FBVywwQkFBMEIsQ0FBQSxDQUFDLGdGQUFnRjtnQkFDekksQ0FBQztnQkFBRCxxQkFBQztZQUFELENBVkEsQUFVQyxJQUFBO1lBVlksb0JBQWMsaUJBVTFCLENBQUE7UUFFSCxDQUFDLEVBL0NpQixLQUFLLEdBQUwsVUFBSyxLQUFMLFVBQUssUUErQ3RCO0lBQUQsQ0FBQyxFQS9DWSxJQUFJLEdBQUosT0FBSSxLQUFKLE9BQUksUUErQ2hCO0FBQUQsQ0FBQyxFQS9DUyxFQUFFLEtBQUYsRUFBRSxRQStDWCIsImZpbGUiOiJ5YXNxZS1jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnZmkuc2Vjby55YXNxZScsIFtdKVxubmFtZXNwYWNlIGZpLnNlY28ueWFzcWUge1xuICAndXNlIHN0cmljdCdcblxuICBkZWNsYXJlIHZhciBZQVNRRTogYW55XG5cbiAgZXhwb3J0IGludGVyZmFjZSBJWWFzcWVDb21wb25lbnRCaW5kaW5nQ2hhbmdlcyB7XG4gICAgY29udGVudD86IGFuZ3VsYXIuSUNoYW5nZXNPYmplY3Q8c3RyaW5nPlxuICAgIGVuZHBvaW50PzogYW5ndWxhci5JQ2hhbmdlc09iamVjdDxzdHJpbmc+XG4gIH1cblxuICBleHBvcnQgY2xhc3MgWWFzcWVDb21wb25lbnRDb250cm9sbGVyIGltcGxlbWVudHMgYW5ndWxhci5JQ29tcG9uZW50Q29udHJvbGxlciB7XG5cbiAgICBwdWJsaWMgb25RdWVyeVJlc3VsdHM6ICh2YXJzOiB7cmVzdWx0czogYW55fSkgPT4gdm9pZFxuICAgIHB1YmxpYyBvbkNvbnRlbnRDaGFuZ2VkOiAodmFyczoge2NvbnRlbnQ6IHN0cmluZ30pID0+IHZvaWRcbiAgICBwdWJsaWMgb25Jbml0OiAodmFyczoge3lhc3FlOiBhbnl9KSA9PiB2b2lkXG4gICAgcHVibGljIGVuZHBvaW50OiBzdHJpbmdcbiAgICBwdWJsaWMgY29udGVudDogc3RyaW5nXG4gICAgcHVibGljIHNob3dRdWVyeUJ1dHRvbjogc3RyaW5nXG5cbiAgICBwcml2YXRlIHlhc3FlOiBhbnlcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJGVsZW1lbnQ6IGFuZ3VsYXIuSUF1Z21lbnRlZEpRdWVyeSwgcHJpdmF0ZSAkdGltZW91dDogYW5ndWxhci5JVGltZW91dFNlcnZpY2UpIHt9XG4gICAgcHVibGljICRwb3N0TGluaygpOiB2b2lkIHtcbiAgICAgIGlmICghdGhpcy5jb250ZW50KSB0aGlzLmNvbnRlbnQgPSAnJ1xuICAgICAgdGhpcy55YXNxZSA9IFlBU1FFKHRoaXMuJGVsZW1lbnRbMF0sIHtjcmVhdGVTaGFyZUxpbms6IGZhbHNlLCBzcGFycWw6IHsgZW5kcG9pbnQ6IHRoaXMuZW5kcG9pbnQsIGNhbGxiYWNrczogeyBjb21wbGV0ZTogKHJlc3VsdHMpID0+IHRoaXMub25RdWVyeVJlc3VsdHMoe3Jlc3VsdHM6IHJlc3VsdHN9KX0sIHNob3dRdWVyeUJ1dHRvbjogdGhpcy5zaG93UXVlcnlCdXR0b24gfX0pXG4gICAgICB0aGlzLnlhc3FlLnNldFZhbHVlKHRoaXMuY29udGVudClcbiAgICAgIHRoaXMueWFzcWUub24oJ2NoYW5nZScsICgpID0+IHRoaXMub25Db250ZW50Q2hhbmdlZCh7Y29udGVudDogdGhpcy55YXNxZS5nZXRWYWx1ZSgpfSkpXG4gICAgICB0aGlzLm9uSW5pdCh7eWFzcWU6IHRoaXMueWFzcWV9KVxuICAgIH1cbiAgICBwdWJsaWMgJG9uQ2hhbmdlcyhjaGFuZ2VzOiBJWWFzcWVDb21wb25lbnRCaW5kaW5nQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgaWYgKGNoYW5nZXMuZW5kcG9pbnQgJiYgIWNoYW5nZXMuZW5kcG9pbnQuaXNGaXJzdENoYW5nZSkgdGhpcy55YXNxZS5vcHRpb25zLnNwYXJxbC5lbmRwb2ludCA9IGNoYW5nZXMuZW5kcG9pbnQuY3VycmVudFZhbHVlXG4gICAgICBpZiAoY2hhbmdlcy5jb250ZW50ICYmICFjaGFuZ2VzLmNvbnRlbnQuaXNGaXJzdENoYW5nZSAmJiBjaGFuZ2VzLmNvbnRlbnQuY3VycmVudFZhbHVlICE9PSB0aGlzLnlhc3FlLmdldFZhbHVlKCkpIHRoaXMueWFzcWUuc2V0VmFsdWUoY2hhbmdlcy5jb250ZW50LmN1cnJlbnRWYWx1ZSlcbiAgICB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgWWFzcWVDb21wb25lbnQgaW1wbGVtZW50cyBhbmd1bGFyLklDb21wb25lbnRPcHRpb25zIHtcbiAgICBwdWJsaWMgYmluZGluZ3M6IHtbaWQ6IHN0cmluZ106IHN0cmluZ30gPSB7XG4gICAgICBjb250ZW50OiAnPCcsXG4gICAgICBvbkNvbnRlbnRDaGFuZ2VkOiAnJicsXG4gICAgICBvblF1ZXJ5UmVzdWx0czogJyYnLFxuICAgICAgZW5kcG9pbnQ6ICc8JyxcbiAgICAgIG9uSW5pdDogJyYnLFxuICAgICAgc2hvd1F1ZXJ5QnV0dG9uOiAnQCdcbiAgICB9XG4gICAgcHVibGljIGNvbnRyb2xsZXI6IHN0cmluZyA9ICdZYXNxZUNvbXBvbmVudENvbnRyb2xsZXInIC8vIChuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbmd1bGFyLklDb250cm9sbGVyKSA9IFNlbGVjdFZpZXdDb21wb25lbnRDb250cm9sbGVyXG4gIH1cblxufVxuIl19
