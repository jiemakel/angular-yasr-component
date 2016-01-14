angular.module('fi.seco.yasqe', [])
namespace fi.seco.yasqe {
  'use strict'

  interface IYASQEScope extends angular.IScope {
    data: string
    callback: (any) => void
    yasqe: any
  }

  declare var YASQE: any

  export class YasqeDirective {
    constructor(private $timeout: angular.ITimeoutService) {}
    public restrict: string = 'E'
    public scope: {[id: string]: string} = {
      data: '=',
      endpoint: '=',
      callback: '=',
      yasqe: '='
    }
    public link: (...any) => void = ($scope: IYASQEScope, element: JQuery, attr: angular.IAttributes) => {
      let yasqe: any = YASQE(element[0], {createShareLink: false, sparql: { callbacks: { complete: $scope.callback}, showQueryButton: $scope.callback ? true : false}})
      $scope.yasqe = yasqe
      yasqe.on('change', () => this.$timeout(() => $scope.data = yasqe.getValue()))
      $scope.$watch('data', (data: string, odata: string) => { if (data && data !== yasqe.getValue()) yasqe.setValue(data) })
      $scope.$watch('endpoint', (endpoint: string) => { if (endpoint) yasqe.options.sparql.endpoint = endpoint })
    }
  }
}
