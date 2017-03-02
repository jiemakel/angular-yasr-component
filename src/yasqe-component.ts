angular.module('fi.seco.yasqe', [])
namespace fi.seco.yasqe {
  'use strict'

  declare var YASQE: any

  export interface IYasqeComponentBindingChanges {
    content?: angular.IChangesObject<string>
    endpoint?: angular.IChangesObject<string>
  }

  export class YasqeComponentController implements angular.IComponentController {

    private yasqe: any
    private queryResultHandler: (any) => void
    private contentChanged: (any) => void
    private setYasqe: (any) => void
    private endpoint: string
    private content: string

    constructor(private $element: angular.IAugmentedJQuery, private $timeout: angular.ITimeoutService) {}
    public $postLink(): void {
      this.yasqe = YASQE(this.$element[0], {createShareLink: false, sparql: { endpoint: this.endpoint, callbacks: { complete: this.queryResultHandler}, showQueryButton: this.queryResultHandler ? true : false}})
      this.yasqe.setValue(this.content)
      if (this.contentChanged) this.yasqe.on('change', () => this.contentChanged(this.yasqe.getValue()))
      if (this.setYasqe) this.setYasqe(this.yasqe)
    }
    public $onChanges(changes: IYasqeComponentBindingChanges): void {
      if (changes.endpoint) this.yasqe.options.sparql.endpoint = changes.endpoint.currentValue
      if (changes.content) this.yasqe.setValue(changes.content.currentValue)
    }
  }

  export class YasqeComponent implements angular.IComponentOptions {
    public bindings: {[id: string]: string} = {
      content: '<',
      contentChanged: '&',
      queryResultHandler: '&',
      endpoint: '<',
      setYasqe: '&'
    }
    public controller: string = 'YasqeComponentController' // (new (...args: any[]) => angular.IController) = SelectViewComponentController
  }

}
