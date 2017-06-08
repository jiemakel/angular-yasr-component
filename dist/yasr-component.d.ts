/// <reference types="angular" />
import * as angular from 'angular';
export interface IYasrComponentBindingChanges {
    data?: angular.IChangesObject<string>;
    prefixes?: angular.IChangesObject<() => {}>;
}
export declare class YasrComponentController implements angular.IComponentController {
    private $element;
    onInit: (vars: {
        yasr: any;
    }) => void;
    data: string;
    prefixes: () => {};
    private yasr;
    constructor($element: angular.IAugmentedJQuery);
    $postLink(): void;
    $onChanges(changes: IYasrComponentBindingChanges): void;
}
export declare class YasrComponent implements angular.IComponentOptions {
    bindings: {
        [id: string]: string;
    };
    controller: (new (...args: any[]) => angular.IController);
}
