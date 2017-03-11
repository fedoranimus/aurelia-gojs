import * as go from 'gojs';
import { bindable } from 'aurelia-framework';

export class GoJs {
    private $go = go.GraphObject.make;
    public diagramContainer: HTMLDivElement;
    @bindable diagram: go.Diagram = this.$go(go.Diagram); // Create a new diagram if one isn't passed in
    @bindable model: go.Model = this.$go(go.GraphLinksModel); // Create an empty model if one isn't passed in
    constructor() {
        
    }

    attached() {
        // This lifecycle method is the earliest point where we can create the diagram
        // This is because the DOM isn't available to the VM prior to this method

        this.diagram.div = this.diagramContainer; // Assign the diagram's div to our diagramContainer <div> in our Aurelia template
        this.diagram.model = this.model; // Assign our bound model to our diagram
        this.diagram.nodeTemplateMap = this.createNodeTemplates(); // Assign a template map for nodes
        //this.diagram.linkTemplateMap = this.createLinkTemplates(); // Assign a template map for links if you'd like as well
    }

    private fullscreenDiagram() {
        let height = window.innerHeight;

        this.diagram.requestUpdate();
    }

    private createNodeTemplates(): go.Map<string, go.Part> {
        let templateMap = new go.Map<string, go.Part>("string", go.Node);

        let nodeTemplate = 
            this.$go(go.Node, "Auto",
                { locationSpot: go.Spot.Center },
                new go.Binding("location"),
                this.$go(go.Shape, "Rectangle",
                { fill: "white" },
                new go.Binding("fill", "color")),
                this.$go(go.TextBlock,
                {
                    margin: 3,
                    font: "bold 16px sans-serif",
                    width: 140,
                    textAlign: "center"
                },
                new go.Binding("text"))
            );

        templateMap.add("", nodeTemplate) // Create the default nodeTemplate

        return templateMap;
    }
}