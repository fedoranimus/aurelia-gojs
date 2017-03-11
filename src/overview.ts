import * as go from 'gojs';
import { bindable } from 'aurelia-framework';

export class Overview {
    private $go = go.GraphObject.make;
    @bindable diagram: go.Diagram;
    @bindable diagramOverview: HTMLDivElement;

    constructor() {

    }

    attached() {
        this.$go(go.Overview, this.diagramOverview, {
            observed: this.diagram //observe the bound diagram
        });
    }
}