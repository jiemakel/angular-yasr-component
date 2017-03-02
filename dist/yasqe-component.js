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
                }/*<auto_generate>*/YasqeComponentController.$inject = ['$element','$timeout']; YasqeComponentController.$componentName = 'YasqeComponentController'/*</auto_generate>*/
                YasqeComponentController.prototype.$postLink = function () {
                    var _this = this;
                    this.yasqe = YASQE(this.$element[0], { createShareLink: false, sparql: { endpoint: this.endpoint, callbacks: { complete: this.queryResultHandler }, showQueryButton: this.queryResultHandler ? true : false } });
                    this.yasqe.setValue(this.content);
                    if (this.contentChanged)
                        this.yasqe.on('change', function () { return _this.contentChanged(_this.yasqe.getValue()); });
                    if (this.setYasqe)
                        this.setYasqe(this.yasqe);
                };
                YasqeComponentController.prototype.$onChanges = function (changes) {
                    if (changes.endpoint)
                        this.yasqe.options.sparql.endpoint = changes.endpoint.currentValue;
                    if (changes.content)
                        this.yasqe.setValue(changes.content.currentValue);
                };
                return YasqeComponentController;
            }());/*<auto_generate>*/angular.module('fi.seco.yasqe').controller('YasqeComponentController',YasqeComponentController);/*</auto_generate>*/
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
            }());
            yasqe.YasqeComponent = YasqeComponent;
        })(yasqe = seco.yasqe || (seco.yasqe = {}));
    })(seco = fi.seco || (fi.seco = {}));
})(fi || (fi = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy95YXNxZS1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUE7QUFDbkMsSUFBVSxFQUFFLENBMkNYO0FBM0NELFdBQVUsRUFBRTtJQUFDLElBQUEsSUFBSSxDQTJDaEI7SUEzQ1ksV0FBQSxJQUFJO1FBQUMsSUFBQSxLQUFLLENBMkN0QjtRQTNDaUIsV0FBQSxLQUFLO1lBQ3JCLFlBQVksQ0FBQTtZQVNaO2dCQVNFLGtDQUFvQixRQUFrQyxFQUFVLFFBQWlDO29CQUE3RSxhQUFRLEdBQVIsUUFBUSxDQUEwQjtvQkFBVSxhQUFRLEdBQVIsUUFBUSxDQUF5QjtnQkFBRyxDQUFDO2dCQUM5Riw0Q0FBUyxHQUFoQjtvQkFBQSxpQkFLQztvQkFKQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUMsZUFBZSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFDLEVBQUUsZUFBZSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLEdBQUcsS0FBSyxFQUFDLEVBQUMsQ0FBQyxDQUFBO29CQUM1TSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQ2pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7d0JBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQyxDQUFBO29CQUNsRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO3dCQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUM5QyxDQUFDO2dCQUNNLDZDQUFVLEdBQWpCLFVBQWtCLE9BQXNDO29CQUN0RCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO3dCQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUE7b0JBQ3hGLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7d0JBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQTtnQkFDeEUsQ0FBQztnQkFDSCwrQkFBQztZQUFELENBcEJBLEFBb0JDLElBQUE7WUFwQlksOEJBQXdCLDJCQW9CcEMsQ0FBQTtZQUVEO2dCQUFBO29CQUNTLGFBQVEsR0FBMkI7d0JBQ3hDLE9BQU8sRUFBRSxHQUFHO3dCQUNaLGNBQWMsRUFBRSxHQUFHO3dCQUNuQixrQkFBa0IsRUFBRSxHQUFHO3dCQUN2QixRQUFRLEVBQUUsR0FBRzt3QkFDYixRQUFRLEVBQUUsR0FBRztxQkFDZCxDQUFBO29CQUNNLGVBQVUsR0FBVywwQkFBMEIsQ0FBQSxDQUFDLGdGQUFnRjtnQkFDekksQ0FBQztnQkFBRCxxQkFBQztZQUFELENBVEEsQUFTQyxJQUFBO1lBVFksb0JBQWMsaUJBUzFCLENBQUE7UUFFSCxDQUFDLEVBM0NpQixLQUFLLEdBQUwsVUFBSyxLQUFMLFVBQUssUUEyQ3RCO0lBQUQsQ0FBQyxFQTNDWSxJQUFJLEdBQUosT0FBSSxLQUFKLE9BQUksUUEyQ2hCO0FBQUQsQ0FBQyxFQTNDUyxFQUFFLEtBQUYsRUFBRSxRQTJDWCIsImZpbGUiOiJ5YXNxZS1jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnZmkuc2Vjby55YXNxZScsIFtdKVxubmFtZXNwYWNlIGZpLnNlY28ueWFzcWUge1xuICAndXNlIHN0cmljdCdcblxuICBkZWNsYXJlIHZhciBZQVNRRTogYW55XG5cbiAgZXhwb3J0IGludGVyZmFjZSBJWWFzcWVDb21wb25lbnRCaW5kaW5nQ2hhbmdlcyB7XG4gICAgY29udGVudD86IGFuZ3VsYXIuSUNoYW5nZXNPYmplY3Q8c3RyaW5nPlxuICAgIGVuZHBvaW50PzogYW5ndWxhci5JQ2hhbmdlc09iamVjdDxzdHJpbmc+XG4gIH1cblxuICBleHBvcnQgY2xhc3MgWWFzcWVDb21wb25lbnRDb250cm9sbGVyIGltcGxlbWVudHMgYW5ndWxhci5JQ29tcG9uZW50Q29udHJvbGxlciB7XG5cbiAgICBwcml2YXRlIHlhc3FlOiBhbnlcbiAgICBwcml2YXRlIHF1ZXJ5UmVzdWx0SGFuZGxlcjogKGFueSkgPT4gdm9pZFxuICAgIHByaXZhdGUgY29udGVudENoYW5nZWQ6IChhbnkpID0+IHZvaWRcbiAgICBwcml2YXRlIHNldFlhc3FlOiAoYW55KSA9PiB2b2lkXG4gICAgcHJpdmF0ZSBlbmRwb2ludDogc3RyaW5nXG4gICAgcHJpdmF0ZSBjb250ZW50OiBzdHJpbmdcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJGVsZW1lbnQ6IGFuZ3VsYXIuSUF1Z21lbnRlZEpRdWVyeSwgcHJpdmF0ZSAkdGltZW91dDogYW5ndWxhci5JVGltZW91dFNlcnZpY2UpIHt9XG4gICAgcHVibGljICRwb3N0TGluaygpOiB2b2lkIHtcbiAgICAgIHRoaXMueWFzcWUgPSBZQVNRRSh0aGlzLiRlbGVtZW50WzBdLCB7Y3JlYXRlU2hhcmVMaW5rOiBmYWxzZSwgc3BhcnFsOiB7IGVuZHBvaW50OiB0aGlzLmVuZHBvaW50LCBjYWxsYmFja3M6IHsgY29tcGxldGU6IHRoaXMucXVlcnlSZXN1bHRIYW5kbGVyfSwgc2hvd1F1ZXJ5QnV0dG9uOiB0aGlzLnF1ZXJ5UmVzdWx0SGFuZGxlciA/IHRydWUgOiBmYWxzZX19KVxuICAgICAgdGhpcy55YXNxZS5zZXRWYWx1ZSh0aGlzLmNvbnRlbnQpXG4gICAgICBpZiAodGhpcy5jb250ZW50Q2hhbmdlZCkgdGhpcy55YXNxZS5vbignY2hhbmdlJywgKCkgPT4gdGhpcy5jb250ZW50Q2hhbmdlZCh0aGlzLnlhc3FlLmdldFZhbHVlKCkpKVxuICAgICAgaWYgKHRoaXMuc2V0WWFzcWUpIHRoaXMuc2V0WWFzcWUodGhpcy55YXNxZSlcbiAgICB9XG4gICAgcHVibGljICRvbkNoYW5nZXMoY2hhbmdlczogSVlhc3FlQ29tcG9uZW50QmluZGluZ0NoYW5nZXMpOiB2b2lkIHtcbiAgICAgIGlmIChjaGFuZ2VzLmVuZHBvaW50KSB0aGlzLnlhc3FlLm9wdGlvbnMuc3BhcnFsLmVuZHBvaW50ID0gY2hhbmdlcy5lbmRwb2ludC5jdXJyZW50VmFsdWVcbiAgICAgIGlmIChjaGFuZ2VzLmNvbnRlbnQpIHRoaXMueWFzcWUuc2V0VmFsdWUoY2hhbmdlcy5jb250ZW50LmN1cnJlbnRWYWx1ZSlcbiAgICB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgWWFzcWVDb21wb25lbnQgaW1wbGVtZW50cyBhbmd1bGFyLklDb21wb25lbnRPcHRpb25zIHtcbiAgICBwdWJsaWMgYmluZGluZ3M6IHtbaWQ6IHN0cmluZ106IHN0cmluZ30gPSB7XG4gICAgICBjb250ZW50OiAnPCcsXG4gICAgICBjb250ZW50Q2hhbmdlZDogJyYnLFxuICAgICAgcXVlcnlSZXN1bHRIYW5kbGVyOiAnJicsXG4gICAgICBlbmRwb2ludDogJzwnLFxuICAgICAgc2V0WWFzcWU6ICcmJ1xuICAgIH1cbiAgICBwdWJsaWMgY29udHJvbGxlcjogc3RyaW5nID0gJ1lhc3FlQ29tcG9uZW50Q29udHJvbGxlcicgLy8gKG5ldyAoLi4uYXJnczogYW55W10pID0+IGFuZ3VsYXIuSUNvbnRyb2xsZXIpID0gU2VsZWN0Vmlld0NvbXBvbmVudENvbnRyb2xsZXJcbiAgfVxuXG59XG4iXX0=
