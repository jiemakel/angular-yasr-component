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
                    this.yasqe = YASQE(this.$element[0], { createShareLink: false, sparql: { endpoint: this.endpoint, callbacks: { complete: this.queryResultHandler }, showQueryButton: this.queryResultHandler ? true : false } });
                    this.yasqe.setValue(this.content);
                    if (this.contentChanged)
                        this.yasqe.on('change', function () { return _this.contentChanged(_this.yasqe.getValue()); });
                    if (this.setYasqe)
                        this.setYasqe(this.yasqe);
                };
                YasqeComponentController.prototype.$onChanges = function (changes) {
                    if (changes.endpoint && !changes.endpoint.isFirstChange)
                        this.yasqe.options.sparql.endpoint = changes.endpoint.currentValue;
                    if (changes.content && !changes.content.isFirstChange)
                        this.yasqe.setValue(changes.content.currentValue);
                };
                return YasqeComponentController;
            }());/*<auto_generate>*/angular.module('fi.seco.yasqe').controller('YasqeComponentController',['$element','$timeout',function(){return new (Function.prototype.bind.apply(YasqeComponentController,[null].concat(Array.prototype.slice.apply(arguments))));}]);/*</auto_generate>*/
            yasqe.YasqeComponentController = YasqeComponentController;
            var YasqeComponent = (function () {
                function YasqeComponent() {
                    this.bindings = {
                        content: '<',
                        contentChanged: '&',
                        queryResultHandler: '&',
                        endpoint: '<',
                        setYasqe: '&'
                    };
                    this.controller = 'YasqeComponentController'; // (new (...args: any[]) => angular.IController) = SelectViewComponentController
                }
                return YasqeComponent;
            }());/*<auto_generate>*/angular.module('fi.seco.yasqe').component('yasqe',new YasqeComponent());/*</auto_generate>*/
            yasqe.YasqeComponent = YasqeComponent;
        })(yasqe = seco.yasqe || (seco.yasqe = {}));
    })(seco = fi.seco || (fi.seco = {}));
})(fi || (fi = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy95YXNxZS1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUE7QUFDbkMsSUFBVSxFQUFFLENBNENYO0FBNUNELFdBQVUsRUFBRTtJQUFDLElBQUEsSUFBSSxDQTRDaEI7SUE1Q1ksV0FBQSxJQUFJO1FBQUMsSUFBQSxLQUFLLENBNEN0QjtRQTVDaUIsV0FBQSxLQUFLO1lBQ3JCLFlBQVksQ0FBQTtZQVNaO2dCQVNFLGtDQUFvQixRQUFrQyxFQUFVLFFBQWlDO29CQUE3RSxhQUFRLEdBQVIsUUFBUSxDQUEwQjtvQkFBVSxhQUFRLEdBQVIsUUFBUSxDQUF5QjtnQkFBRyxDQUFDO2dCQUM5Riw0Q0FBUyxHQUFoQjtvQkFBQSxpQkFNQztvQkFMQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7d0JBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUE7b0JBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBQyxlQUFlLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUMsRUFBRSxlQUFlLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksR0FBRyxLQUFLLEVBQUMsRUFBQyxDQUFDLENBQUE7b0JBQzVNLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDakMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzt3QkFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUExQyxDQUEwQyxDQUFDLENBQUE7b0JBQ2xHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7d0JBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQzlDLENBQUM7Z0JBQ00sNkNBQVUsR0FBakIsVUFBa0IsT0FBc0M7b0JBQ3RELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQzt3QkFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFBO29CQUMzSCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7d0JBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQTtnQkFDMUcsQ0FBQztnQkFDSCwrQkFBQztZQUFELENBckJBLEFBcUJDLElBQUE7WUFyQlksOEJBQXdCLDJCQXFCcEMsQ0FBQTtZQUVEO2dCQUFBO29CQUNTLGFBQVEsR0FBMkI7d0JBQ3hDLE9BQU8sRUFBRSxHQUFHO3dCQUNaLGNBQWMsRUFBRSxHQUFHO3dCQUNuQixrQkFBa0IsRUFBRSxHQUFHO3dCQUN2QixRQUFRLEVBQUUsR0FBRzt3QkFDYixRQUFRLEVBQUUsR0FBRztxQkFDZCxDQUFBO29CQUNNLGVBQVUsR0FBVywwQkFBMEIsQ0FBQSxDQUFDLGdGQUFnRjtnQkFDekksQ0FBQztnQkFBRCxxQkFBQztZQUFELENBVEEsQUFTQyxJQUFBO1lBVFksb0JBQWMsaUJBUzFCLENBQUE7UUFFSCxDQUFDLEVBNUNpQixLQUFLLEdBQUwsVUFBSyxLQUFMLFVBQUssUUE0Q3RCO0lBQUQsQ0FBQyxFQTVDWSxJQUFJLEdBQUosT0FBSSxLQUFKLE9BQUksUUE0Q2hCO0FBQUQsQ0FBQyxFQTVDUyxFQUFFLEtBQUYsRUFBRSxRQTRDWCIsImZpbGUiOiJ5YXNxZS1jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnZmkuc2Vjby55YXNxZScsIFtdKVxubmFtZXNwYWNlIGZpLnNlY28ueWFzcWUge1xuICAndXNlIHN0cmljdCdcblxuICBkZWNsYXJlIHZhciBZQVNRRTogYW55XG5cbiAgZXhwb3J0IGludGVyZmFjZSBJWWFzcWVDb21wb25lbnRCaW5kaW5nQ2hhbmdlcyB7XG4gICAgY29udGVudD86IGFuZ3VsYXIuSUNoYW5nZXNPYmplY3Q8c3RyaW5nPlxuICAgIGVuZHBvaW50PzogYW5ndWxhci5JQ2hhbmdlc09iamVjdDxzdHJpbmc+XG4gIH1cblxuICBleHBvcnQgY2xhc3MgWWFzcWVDb21wb25lbnRDb250cm9sbGVyIGltcGxlbWVudHMgYW5ndWxhci5JQ29tcG9uZW50Q29udHJvbGxlciB7XG5cbiAgICBwcml2YXRlIHlhc3FlOiBhbnlcbiAgICBwcml2YXRlIHF1ZXJ5UmVzdWx0SGFuZGxlcjogKGFueSkgPT4gdm9pZFxuICAgIHByaXZhdGUgY29udGVudENoYW5nZWQ6IChhbnkpID0+IHZvaWRcbiAgICBwcml2YXRlIHNldFlhc3FlOiAoYW55KSA9PiB2b2lkXG4gICAgcHJpdmF0ZSBlbmRwb2ludDogc3RyaW5nXG4gICAgcHJpdmF0ZSBjb250ZW50OiBzdHJpbmdcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJGVsZW1lbnQ6IGFuZ3VsYXIuSUF1Z21lbnRlZEpRdWVyeSwgcHJpdmF0ZSAkdGltZW91dDogYW5ndWxhci5JVGltZW91dFNlcnZpY2UpIHt9XG4gICAgcHVibGljICRwb3N0TGluaygpOiB2b2lkIHtcbiAgICAgIGlmICghdGhpcy5jb250ZW50KSB0aGlzLmNvbnRlbnQgPSAnJ1xuICAgICAgdGhpcy55YXNxZSA9IFlBU1FFKHRoaXMuJGVsZW1lbnRbMF0sIHtjcmVhdGVTaGFyZUxpbms6IGZhbHNlLCBzcGFycWw6IHsgZW5kcG9pbnQ6IHRoaXMuZW5kcG9pbnQsIGNhbGxiYWNrczogeyBjb21wbGV0ZTogdGhpcy5xdWVyeVJlc3VsdEhhbmRsZXJ9LCBzaG93UXVlcnlCdXR0b246IHRoaXMucXVlcnlSZXN1bHRIYW5kbGVyID8gdHJ1ZSA6IGZhbHNlfX0pXG4gICAgICB0aGlzLnlhc3FlLnNldFZhbHVlKHRoaXMuY29udGVudClcbiAgICAgIGlmICh0aGlzLmNvbnRlbnRDaGFuZ2VkKSB0aGlzLnlhc3FlLm9uKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLmNvbnRlbnRDaGFuZ2VkKHRoaXMueWFzcWUuZ2V0VmFsdWUoKSkpXG4gICAgICBpZiAodGhpcy5zZXRZYXNxZSkgdGhpcy5zZXRZYXNxZSh0aGlzLnlhc3FlKVxuICAgIH1cbiAgICBwdWJsaWMgJG9uQ2hhbmdlcyhjaGFuZ2VzOiBJWWFzcWVDb21wb25lbnRCaW5kaW5nQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgaWYgKGNoYW5nZXMuZW5kcG9pbnQgJiYgIWNoYW5nZXMuZW5kcG9pbnQuaXNGaXJzdENoYW5nZSkgdGhpcy55YXNxZS5vcHRpb25zLnNwYXJxbC5lbmRwb2ludCA9IGNoYW5nZXMuZW5kcG9pbnQuY3VycmVudFZhbHVlXG4gICAgICBpZiAoY2hhbmdlcy5jb250ZW50ICYmICFjaGFuZ2VzLmNvbnRlbnQuaXNGaXJzdENoYW5nZSkgdGhpcy55YXNxZS5zZXRWYWx1ZShjaGFuZ2VzLmNvbnRlbnQuY3VycmVudFZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBZYXNxZUNvbXBvbmVudCBpbXBsZW1lbnRzIGFuZ3VsYXIuSUNvbXBvbmVudE9wdGlvbnMge1xuICAgIHB1YmxpYyBiaW5kaW5nczoge1tpZDogc3RyaW5nXTogc3RyaW5nfSA9IHtcbiAgICAgIGNvbnRlbnQ6ICc8JyxcbiAgICAgIGNvbnRlbnRDaGFuZ2VkOiAnJicsXG4gICAgICBxdWVyeVJlc3VsdEhhbmRsZXI6ICcmJyxcbiAgICAgIGVuZHBvaW50OiAnPCcsXG4gICAgICBzZXRZYXNxZTogJyYnXG4gICAgfVxuICAgIHB1YmxpYyBjb250cm9sbGVyOiBzdHJpbmcgPSAnWWFzcWVDb21wb25lbnRDb250cm9sbGVyJyAvLyAobmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gYW5ndWxhci5JQ29udHJvbGxlcikgPSBTZWxlY3RWaWV3Q29tcG9uZW50Q29udHJvbGxlclxuICB9XG5cbn1cbiJdfQ==
