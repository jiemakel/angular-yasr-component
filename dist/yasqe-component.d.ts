/// <reference types="angular" />
declare namespace fi.seco.yasqe {
    interface IYasqeComponentBindingChanges {
        content?: angular.IChangesObject<string>;
        endpoint?: angular.IChangesObject<string>;
    }
    class YasqeComponentController implements angular.IComponentController {
        private $element;
        private $timeout;
        private yasqe;
        private queryResultHandler;
        private contentChanged;
        private setYasqe;
        private endpoint;
        private content;
        constructor($element: angular.IAugmentedJQuery, $timeout: angular.ITimeoutService);
        $postLink(): void;
        $onChanges(changes: IYasqeComponentBindingChanges): void;
    }
    class YasqeComponent implements angular.IComponentOptions {
        bindings: {
            [id: string]: string;
        };
        controller: string;
    }
}
