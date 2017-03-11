import * as go from 'gojs';
import { bindable } from 'aurelia-framework';

export class App {
  private $go = go.GraphObject.make;
  @bindable diagram: go.Diagram = this.$go(go.Diagram); // Instaniate the diagram
  @bindable model = this.$go(go.GraphLinksModel); // Instantiate the model

  constructor() { // Create the node and link arrays for the model
    this.model.nodeDataArray = [
      { key: "A", text: "A", color: "orange" },
      { key: "B", text: "B", color: "green" },
      { key: "C", text: "C" }
    ];
    this.model.linkDataArray = [
      { from: "A", to: "B" },
      { from: "B", to: "C" }
    ];
  }

}
