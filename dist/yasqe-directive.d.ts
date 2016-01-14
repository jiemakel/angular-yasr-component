declare namespace fi.seco.yasqe {
    class YasqeDirective {
        private $timeout;
        constructor($timeout: angular.ITimeoutService);
        restrict: string;
        scope: {
            [id: string]: string;
        };
        link: (...any) => void;
    }
}
