// import * as go from "gojs";
// import { ReactDiagram } from "gojs-react";

// import React from "react";
// function initDiagram() {
//   // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
//   const diagram = new go.Diagram({
//     initialContentAlignment: go.Spot.Center,
//     "undoManager.isEnabled": true, // must be set to allow for model change listening
//     // 'undoManager.maxHistoryLength': 0,  // uncomment disable undo/redo functionality
//     "clickCreatingTool.archetypeNodeData": {
//       text: "new node",
//       color: "lightblue",
//     },
//     scrollsPageOnFocus: false,
//     allowDrop: true,
//     //"draggingTool.isGridEnabled": true,
//     "draggingTool.isGridSnapEnabled": true,
//     "draggingTool.dragsLink": true,
//     "draggingTool.isGridSnapEnabled": true,
//     "linkingTool.isUnconnectedLinkValid": true,
//     "linkingTool.portGravity": 20,
//     "relinkingTool.isUnconnectedLinkValid": true,
//     "relinkingTool.portGravity": 20,
//     "relinkingTool.fromHandleArchetype": new go.Shape("Diamond", {
//       segmentIndex: 0,
//       cursor: "pointer",
//       desiredSize: new go.Size(8, 8),
//       fill: "tomato",
//       stroke: "darkred",
//     }),
//     grid: new go.Panel("Grid").add(
//       new go.Shape("LineH", {
//         stroke: "lightgray",
//         strokeWidth: 0.5,
//       }),
//       new go.Shape("LineH", {
//         stroke: "gray",
//         strokeWidth: 0.5,
//         interval: 10,
//       }),
//       new go.Shape("LineV", {
//         stroke: "lightgray",
//         strokeWidth: 0.5,
//       }),
//       new go.Shape("LineV", {
//         stroke: "gray",
//         strokeWidth: 0.5,
//         interval: 10,
//       })
//     ),
//     "relinkingTool.toHandleArchetype": new go.Shape("Diamond", {
//       segmentIndex: -1,
//       cursor: "pointer",
//       desiredSize: new go.Size(8, 8),
//       fill: "darkred",
//       stroke: "tomato",
//     }),
//     "linkReshapingTool.handleArchetype": new go.Shape("Diamond", {
//       desiredSize: new go.Size(7, 7),
//       fill: "lightblue",
//       stroke: "deepskyblue",
//     }),
//     model: new go.GraphLinksModel({
//       linkKeyProperty: "key", // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
//     }),
//     LinkDrawn: handleLinkDrawn,
//     LinkRelinked: handleLinkDrawn,
//   });

//   diagram.addDiagramListener("Modified", function (e) {
//     var button = document.getElementById("SaveButton");
//     if (button) button.disabled = !diagram.isModified;
//     var idx = document.title.indexOf("*");
//     document.title = diagram.isModified
//       ? idx < 0
//         ? document.title + "*"
//         : document.title
//       : document.title.substr(0, idx);
//   });

//   const makePort = (name, align, spot, output, input) => {
//     return new go.Shape("Circle", {
//       fill: "transparent", // transparent until hovered over
//       strokeWidth: 0, // no border
//       width: 10, // width for side ports
//       height: 10, // height for top/bottom ports
//       alignment: align, // alignment on the node
//       stretch: go.GraphObject.Vertical,
//       portId: name, // name of the port
//       fromSpot: spot, // where links can connect
//       fromLinkable: output, // whether links can be drawn from this port
//       toSpot: spot, // where links can connect
//       toLinkable: input, // whether links can be connected here
//       cursor: "pointer", // cursor change to indicate a valid port
//       mouseEnter: (e, port) => {
//         if (!e.diagram.isReadOnly) port.fill = "rgba(255,0,255,0.5)";
//       },
//       mouseLeave: (e, port) => {
//         port.fill = "transparent";
//       },
//     });
//   };
//   diagram.nodeTemplateMap.add(
//     "",
//     new go.Node("Table").bindTwoWay("location", "loc", go.Point.parse).add(
//       new go.Panel(
//         "Auto",
//         new go.Shape("Rectangle", {
//           fill: "#00A9C9",
//           strokeWidth: 0,
//         })
//       ),
//       new go.TextBlock({
//         font: "bold 11pt Helvetica, Arial, sans-serif",
//         stroke: "whitesmoke",
//         margin: 8,
//         maxSize: new go.Size(160, NaN),
//         wrap: go.TextBlock.WrapFit,
//         editable: true,
//       }).bindTwoWay("text"),
//       makePort("T", go.Spot.Top, go.Spot.TopSide, false, true),
//       makePort("L", go.Spot.Left, go.Spot.LeftSide, true, true),
//       makePort("R", go.Spot.Right, go.Spot.RightSide, true, true),
//       makePort("B", go.Spot.Bottom, go.Spot.BottomSide, true, false)
//     )
//   );

//   // define a simple Node template
//   //   diagram.nodeTemplate = new go.Node("Auto") // the Shape will go around the TextBlock
//   //     .bindTwoWay("location", "loc", go.Point.parse, go.Point.stringify)
//   //     .add(
//   //       new go.Shape("RoundedRectangle", {
//   //         name: "SHAPE",
//   //         fill: "white",
//   //         strokeWidth: 0,
//   //       })
//   //         // Shape.fill is bound to Node.data.color
//   //         .bind("fill", "color"),
//   //       new go.TextBlock({ margin: 8, editable: true }) // some room around the text
//   //         .bindTwoWay("text")
//   //     );

//   return diagram;
// }
// function handleModelChange(changes) {
//   //   alert("GoJS model changed!");
//   console.log("alert");
// }
// function handleLinkDrawn(e) {
//   var label = e.subject.findObject("LABEL");
//   if (label !== null)
//     label.visible = e.subject.fromNode.data.category === "condition";
// }

// const DiagramComponent = () => {
//   return (
//     <div>
//       <ReactDiagram
//         initDiagram={initDiagram}
//         divClassName="diagram-component"
//         nodeDataArray={[
//           { key: 0, text: "Alpha", color: "lightblue", loc: "0 0" },
//           { key: 1, text: "Beta", color: "orange", loc: "150 0" },
//           { key: 2, text: "Gamma", color: "lightgreen", loc: "0 150" },
//           { key: 3, text: "Delta", color: "pink", loc: "150 150" },
//         ]}
//         linkDataArray={[
//           { key: -1, from: 0, to: 1 },
//           { key: -2, from: 0, to: 2 },
//           { key: -3, from: 1, to: 1 },
//           { key: -4, from: 2, to: 3 },
//           { key: -5, from: 3, to: 0 },
//         ]}
//         onModelChange={handleModelChange}
//       />
//     </div>
//   );
// };

// export default DiagramComponent;
import React, { useEffect, useRef, useState } from "react";
import * as go from "gojs";

const GoJSSetup = () => {
  const diagramDivRef = useRef(null);
  const paletteDivRef = useRef(null);
  const [savedModel, setSavedModel] = useState(`{
    "class": "go.GraphLinksModel",
    "linkFromPortIdProperty": "fromPort",
    "linkToPortIdProperty": "toPort",
    "pointsDigits": 1,
    "nodeDataArray": [],
    "linkDataArray": []
  }`);

  useEffect(() => {
    const $ = go.GraphObject.make;

    const myDiagram = $(go.Diagram, diagramDivRef.current, {
      initialContentAlignment: go.Spot.Center,
      LinkDrawn: showLinkLabel,
      LinkRelinked: showLinkLabel,
      scrollsPageOnFocus: false,
      grid: $(
        go.Panel,
        "Grid",
        $(go.Shape, "LineH", { stroke: "lightgray", strokeWidth: 0.5 }),
        $(go.Shape, "LineH", {
          stroke: "gray",
          strokeWidth: 0.5,
          interval: 10,
        }),
        $(go.Shape, "LineV", { stroke: "lightgray", strokeWidth: 0.5 }),
        $(go.Shape, "LineV", { stroke: "gray", strokeWidth: 0.5, interval: 10 })
      ),
      allowDrop: true,
      "draggingTool.dragsLink": true,
      "draggingTool.isGridSnapEnabled": true,
      "linkingTool.isUnconnectedLinkValid": true,
      "linkingTool.portGravity": 20,
      "relinkingTool.isUnconnectedLinkValid": true,
      "relinkingTool.portGravity": 20,
      "undoManager.isEnabled": true,
    });

    myDiagram.addDiagramListener("Modified", function () {
      const title = document.title;
      if (myDiagram.isModified) {
        if (!title.includes("*")) {
          document.title = title + "*";
        }
      } else {
        document.title = title.replace("*", "");
      }
    });

    // Node and port functions from the original code
    function nodeStyle() {
      return [
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
          go.Point.stringify
        ),
        { locationSpot: go.Spot.Center },
      ];
    }

    function makePort(name, align, spot, output, input) {
      return $(go.Shape, "Circle", {
        fill: "transparent",
        strokeWidth: 0,
        width: 10,
        height: 10,
        alignment: align,
        stretch: go.GraphObject.Vertical,
        portId: name,
        fromSpot: spot,
        fromLinkable: output,
        toSpot: spot,
        toLinkable: input,
        cursor: "pointer",
        mouseEnter: (e, port) => {
          if (!e.diagram.isReadOnly) port.fill = "rgba(255,0,255,0.5)";
        },
        mouseLeave: (e, port) => {
          port.fill = "transparent";
        },
      });
    }

    function textStyle() {
      return {
        font: "bold 11pt Helvetica, Arial, sans-serif",
        stroke: "whitesmoke",
      };
    }

    // Define node and link templates
    myDiagram.nodeTemplateMap.add(
      "",
      $(
        go.Node,
        "Table",
        nodeStyle(),
        $(
          go.Panel,
          "Auto",
          $(go.Shape, "Rectangle", { fill: "#00A9C9", strokeWidth: 0 }),
          $(
            go.TextBlock,
            textStyle(),
            { margin: 8, wrap: go.TextBlock.WrapFit, editable: true },
            new go.Binding("text").makeTwoWay()
          )
        ),
        makePort("T", go.Spot.Top, go.Spot.TopSide, false, true),
        makePort("L", go.Spot.Left, go.Spot.LeftSide, true, true),
        makePort("R", go.Spot.Right, go.Spot.RightSide, true, true),
        makePort("B", go.Spot.Bottom, go.Spot.BottomSide, true, false)
      )
    );

    // Palette
    const myPalette = $(go.Palette, paletteDivRef.current, {
      nodeTemplateMap: myDiagram.nodeTemplateMap,
      model: new go.GraphLinksModel([
        { category: "start", text: "Start" },
        { category: "step", text: "Step" },
        { category: "io", text: "Input/Output" },
        { category: "condition", text: "Condition" },
        { category: "end", text: "End" },
        { category: "comment", text: "Comment" },
      ]),
    });

    // Link label logic
    function showLinkLabel(e) {
      const label = e.subject.findObject("LABEL");
      if (label)
        label.visible = e.subject.fromNode.data.category === "condition";
    }

    // Load initial diagram model
    loadModel(myDiagram);

    return () => {
      myDiagram.div = null;
      myPalette.div = null;
    };
  }, []);

  const saveModel = () => {
    const diagram = go.Diagram.fromDiv(diagramDivRef.current);
    setSavedModel(diagram.model.toJson());
    diagram.isModified = false;
  };

  const loadModel = (diagram) => {
    diagram.model = go.Model.fromJson(savedModel);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Basic GoJS Setup</h1>
          <p>A simple example of how to use GoJS</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-1">
          <div id="myPaletteDiv" ref={paletteDivRef} className="column">
            Column 1
          </div>
        </div>
        <div className="col-md-9">
          <div id="myDiagramDiv" ref={diagramDivRef} className="column">
            Column 2
          </div>
        </div>
        <div className="col-md-2">
          <div id="myDetailsDiv" className="column">
            <div>
              <button id="SaveButton" onClick={saveModel}>
                Save
              </button>
              <button
                onClick={() =>
                  loadModel(go.Diagram.fromDiv(diagramDivRef.current))
                }
              >
                Load
              </button>
              <p>Diagram Model saved in JSON format:</p>
            </div>
            <textarea
              id="mySavedModel"
              value={savedModel}
              onChange={(e) => setSavedModel(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoJSSetup;
