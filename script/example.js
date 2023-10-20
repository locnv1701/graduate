console.log("================================example file js================================")
function gEncodeToHTML(str) {
    if (typeof str !== 'string')
        return str;

    return str.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

function gDecodeFromHTML(str) {
    if (typeof str !== 'string')
        return str;

    return str.replace(/&apos;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&gt;/g, '>')
        .replace(/&lt;/g, '<')
        .replace(/&amp;/g, '&');
}

function FullObjectCopy(obj) {
    var newObj = Object.create(Object.getPrototypeOf(obj));

    return Object.assign(newObj, obj);
}

function FullArrayCopy(arr) {
    var res = [];

    arr.forEach(function (element) {

        var copyElement = FullObjectCopy(element);
        res.push(copyElement);
    });

    return res;
}/**
 *  Place here all tests constants.
 *
 */


var g_textsSelectAndMove = "Drag objects";
var g_moveCursorForMoving = "Move cursor";
var g_clickToAddVertex = "Click to add vertex";
var g_selectFirstVertexToConnect = "Select first vertex to connect";
var g_selectSecondVertexToConnect = "Select second vertex to connect";
var g_selectStartVertexForShortPath = "Select start vertex for shortest path";
var g_selectFinishVertexForShortPath = "Select finish vertex for shortest path";
var g_shortestPathResult = "Shortest path is %d";
var g_pathNotExists = "Path does not exists";
var g_selectObjectToDelete = "Select object to delete";


var g_addEdge = "Add edge";
var g_orintEdge = "Directed";
var g_notOrintEdge = "Undirected";

var g_adjacencyMatrixText = "Adjacency Matrix";
var g_save = "Save";
var g_cancel = "Cancel";
var g_save_graph = "Save Graph";

var g_shortestDistance = "lowest-distance is ";
var g_incidenceMatrixText = "Incidence Matrix";

var g_save_dialog = "Save dialog";
var g_close = "close";
var g_sickConnectedComponent = "Sick connected component is ";
var g_connectedComponent = "Connected component is ";


var g_what_do_you_think = "What do you think about site?";
var g_name = "Name";
var g_feedback = "Feedback";
var g_send = "Send";
var g_write_to_us = "Write to us";

var g_fixMatrix = "Fix matrix";
var g_readMatrixHelp = "Matrix format help";
var g_matrixWrongFormat = "Matrix is wrong";
var g_pairWrongFormat = "Edge List is wrong";
var g_fix = "Fix"

var g_save_image_dialog = "Save graph image";

var g_fullReport = "Full report";

var g_shortReport = "Short report";

var g_hasEulerianLoop = "Graph has Eulerian Loop";
var g_hasNotEulerianLoop = "Graph has not Eulerian Loop";

var g_hasEulerianPath = "Graph has Eulerian Path";
var g_hasNotEulerianPath = "Graph has not Eulerian Path";

var g_processing = "Processing...";

var g_customEnumVertex = "Custom";
var g_addVertex = "Add vertex";

var g_renameVertex = "Rename vertex";
var g_rename = "Rename";

var g_language = "en";

var g_editWeight = "Edit weight";

var g_noWeight = "No weight";
var g_groupRename = "Group rename";
var g_vote = "Vote";

var g_recommendAlgorithm = "Recommend algorithm";

var g_graphOfMinDist = "Graph of minimal distances.";
var g_checkToSave = "Check to save";
var g_showDistMatrix = "Show Distance matrix";
var g_minDistMatrixText = "Minimal distances matrix";

var g_selectStartVertexForMaxFlow = "Select source vertex for max flow";
var g_selectFinishVertexForMaxFlow = "Select sink vertex for max flow";
var g_maxFlowResult = "Maximum flow from %2 to %3 is %1";
var g_flowNotExists = "Flow from %1 to %2 does not exists";

var g_sourceVertex = "Source";
var g_sinkVertex = "Sink";

var g_hasHamiltonianLoop = "Graph has Hamiltonian Loop";
var g_hasNotHamiltonianLoop = "Graph has not Hamiltonian Loop";

var g_hasHamiltonianPath = "Graph has Hamiltonian Path";
var g_hasNotHamiltonianPath = "Graph has not Hamiltonian Path";

var g_startTraversal = "Select start traversal vector";
var g_traversalOrder = "Traversal order: ";

var g_curveEdge = "Curved edge";

var g_Undo = "Undo";
var g_default = "default";
var g_vertexDraw = "Vertex draw style";
var g_edgeDraw = "Edge draw style";
var g_backgroundStyle = "Background style";

var g_GraphIsMultiMessage = "Graph is multigraph";
var g_GraphIsGeneralMessage = "";
var g_DefaultWeightPreset = "no weight";
var g_dragGroupText = "Drag group.";
var g_selectGroupText = "Select using ctrl";
var g_copyGroupeButton = "Duplicate";
var g_removeGroupeButton = "Remove objects";

var g_BFSName = "Breadth-first search";
var g_ColoringName = "Graph coloring";
var g_findConnectedComponent = "Find connected components";
var g_DFSName = "Depth-first search";
var g_EulerinLoopName = "Find Eulerian cycle";
var g_EulerinPath = "Find Eulerian path";
var g_FloidName = "Floyd–Warshall algorithm";
var g_GraphReorder = "Arrange the graph";
var g_HamiltoianCycleName = "Find Hamiltonian cycle";
var g_HamiltonianPath = "Find Hamiltonian path";
var g_MaxFlowName = "Find Maximum flow";
var g_minimumSpanningTree = "Search of minimum spanning tree";
var g_modernGraphStyleName = "Visualization based on weight";
var g_RadiusAndDiameter = "Search graph radius and diameter";
var g_findShortPathName = "Find shortest path using Dijkstra's algorithm";
var g_VerticesDegreeName = "Calculate vertices degree";
var g_SpanningTreeResult = "Min Spanning Tree is";
var g_SpanningTreeIgnoreDir = "We ignored edges direction for calculation";
var g_SpanningTreeNotConnected = "Graph is not connected";

var g_selectFirstGraphIsomorphismCheck = "Select first graph for isomorphic check. Click to any node of graph";
var g_selectSecondGraphIsomorphismCheck = "Select second graph for isomorphic check. Click to any node of graph";

var g_selectFirstGraphPatternCheck = "Select a template graph by clicking to any node of graph";
var g_selectSecondGraphForSearchSubgraph = "Choose a graph in which we will look for isomorphic subgraphs. Click to any node of this graph";

// IsomorphismCheck.js
var g_graphsIsomorph = "Graphs are isomorphic";
var g_graphsNotIsomorph = "Graphs are not isomorphic";
var g_numberOfIsomorphSubgraphIs = "Number of isomorphic subgraphs are ";
var g_graphHasNoIsomorphSubgraph = "Graph don't contain isomorphic subgraphs";
var g_searchIsomorphSubgraph = "Search isomorphic subgraphs";
var g_subgraphNo = "Isomorphic subgraph # ";
var g_graphHasNoAtleast2Graphs = "To use the algorithm, you need to create 2 separate graphs";
var g_IsomorphismCheck = "Check Graphs Isomorphism";

// RadiusAndDiameter.js
var g_graphIsDisconnected = "Graph is disconnected";
var g_graphIsTrivial = "Graph contains only one vertex";
var g_graphRadius = "Graph radius";
var g_graphDiameter = "Graph diameter";
var g_vertexCentral = "Central";
var g_vertexPeripheral = "Peripheral";

// VerticesDegree.js
var g_maximumDegreeOfGraph = "The maximum degree of a graph is";

// Coloring.js
var g_colorNumber = "Color number is";

var g_done = "Done";

var g_action = "Action";
var g_commonEdgeStyle = "Common Edge Style";
var g_selectedEdgeStyle = "Selected Edge Style";
var g_commonVertexStyle = "Common Vertex Style";
var g_selectedVertexStyle = "Selected Vertex Style";

// FindAllPatches.js
var g_findAllPathes = "Find all paths";
var g_numberOfPathesFrom = "Number of paths from "
var g_to = " to ";
var g_are = " are ";
var g_pathN = "Path #";
var g_selectFinishVertex = "Select finish vertex";
var g_selectStartVertex = "Select start vertex";

// FindShortPatchsFromOne.js
var g_findAllPathesFromVertex = "Find all shortest paths from vertex";
var g_distanceFrom = "Distance from ";
var g_pathTo = "Path to ";

var g_useContextMenuText = "Use context menu for addition actions."

var g_findLongestPath = "Find the longest path";
var g_LengthOfLongestPathFrom = "Length of the longest path from ";

var g_additionalActions = "Additional actions";
var g_reverseAllEdges = "Reverse all edges";
var g_makeAllUndirected = "Make all edges undirected";
var g_makeAllDirected = "Make all edges directed";

var g_reuseSavedEdge = "Reuse saved edge";

function loadTexts() {
    g_textsSelectAndMove = document.getElementById("SelectAndMoveObject").innerHTML;
    g_moveCursorForMoving = document.getElementById("MoveCursorForMoving").innerHTML;
    g_clickToAddVertex = document.getElementById("clickToAddVertex").innerHTML;
    g_selectFirstVertexToConnect = document.getElementById("selectFisrtVertextToConnect").innerHTML;
    g_selectSecondVertexToConnect = document.getElementById("selectSecondVertextToConnect").innerHTML;
    g_selectStartVertexForShortPath = document.getElementById("selectStartShortPathVertex").innerHTML;
    g_selectFinishVertexForShortPath = document.getElementById("selectFinishShortPathVertex").innerHTML;
    g_shortestPathResult = document.getElementById("shortPathResult").innerHTML;
    g_pathNotExists = document.getElementById("pathNotExists").innerHTML;
    g_selectObjectToDelete = document.getElementById("selectObjectToDelete").innerHTML;

    g_addEdge = document.getElementById("AddEdge").innerHTML;
    g_orintEdge = document.getElementById("OrintEdge").innerHTML;
    g_notOrintEdge = document.getElementById("NotOrintdge").innerHTML;

    g_adjacencyMatrixText = document.getElementById("AdjacencyMatrixText").innerHTML;
    g_save = document.getElementById("Save").innerHTML;
    g_cancel = document.getElementById("Cancel").innerHTML;

    g_shortestDistance = document.getElementById("shortestDist").innerHTML;

    g_incidenceMatrixText = document.getElementById("IncidenceMatrixText").innerHTML;

    g_save_dialog = document.getElementById("saveDialogTitle").innerHTML;
    g_close = document.getElementById("closeButton").innerHTML;

    g_sickConnectedComponent = document.getElementById("sickConnectedComponentResult").innerHTML;
    g_connectedComponent = document.getElementById("connectedComponentResult").innerHTML;

    g_what_do_you_think = document.getElementById("whatDoYouThink").innerHTML;
    g_name = document.getElementById("name").innerHTML;
    g_feedback = document.getElementById("feedback").innerHTML;
    g_send = document.getElementById("send").innerHTML;
    g_write_to_us = document.getElementById("writeToUs").innerHTML;


    g_fixMatrix = document.getElementById("fixMatrixButton").innerHTML;
    g_readMatrixHelp = document.getElementById("matrixHelp").innerHTML;
    g_matrixWrongFormat = document.getElementById("wronMatrixTitle").innerHTML;

    g_save_image_dialog = document.getElementById("saveImageDialogTitle").innerHTML;

    g_fullReport = document.getElementById("fullReport").innerHTML;
    g_shortReport = document.getElementById("shortReport").innerHTML;


    g_hasEulerianLoop = document.getElementById("hasEulerianLoop").innerHTML;
    g_hasNotEulerianLoop = document.getElementById("hasNotEulerianLoop").innerHTML;

    g_processing = document.getElementById("processing").innerHTML;

    g_customEnumVertex = document.getElementById("customEnumVertex").innerHTML;

    g_addVertex = document.getElementById("addVertexText").innerHTML;

    g_renameVertex = document.getElementById("renameVertex").innerHTML;
    g_rename = document.getElementById("renameText").innerHTML;

    g_language = document.getElementById("currentLanguage").innerHTML;

    g_editWeight = document.getElementById("editWeight").innerHTML;

    g_noWeight = document.getElementById("noWeight").innerHTML;
    g_groupRename = document.getElementById("groupeRenameText").innerHTML;
    g_vote = document.getElementById("voteText").innerHTML;

    g_recommendAlgorithm = document.getElementById("recommend_algorithm").innerHTML;

    g_hasEulerianPath = document.getElementById("hasEulerianPath").innerHTML;
    g_hasNotEulerianPath = document.getElementById("hasNotEulerianPath").innerHTML;

    g_graphOfMinDist = document.getElementById("graphOfMinDist").innerHTML;
    g_checkToSave = document.getElementById("checkToSave").innerHTML;
    g_showDistMatrix = document.getElementById("showDistMatrix").innerHTML;
    g_minDistMatrixText = document.getElementById("distMatrixText").innerHTML;

    g_selectStartVertexForMaxFlow = document.getElementById("selectStartVertexForMaxFlow").innerHTML;
    g_selectFinishVertexForMaxFlow = document.getElementById("selectFinishVertexForMaxFlow").innerHTML;
    g_maxFlowResult = document.getElementById("maxFlowResult").innerHTML;
    g_flowNotExists = document.getElementById("flowNotExists").innerHTML;

    g_sourceVertex = document.getElementById("sourceVertex").innerHTML;
    g_sinkVertex = document.getElementById("sinkVertex").innerHTML;

    g_hasHamiltonianLoop = document.getElementById("hasHamiltonianLoop").innerHTML;
    g_hasNotHamiltonianLoop = document.getElementById("hasNotHamiltonianLoop").innerHTML;

    g_hasHamiltonianPath = document.getElementById("hasHamiltonianPath").innerHTML;
    g_hasNotHamiltonianPath = document.getElementById("hasNotHamiltonianPath").innerHTML;

    g_startTraversal = document.getElementById("startTraversal").innerHTML;
    g_traversalOrder = document.getElementById("traversalOrder").innerHTML;

    g_curveEdge = document.getElementById("curveEdge").innerHTML;

    g_Undo = document.getElementById("undoTranslate").innerHTML;
    g_save_graph = document.getElementById("saveGraph").innerHTML;
    g_default = document.getElementById("default").innerHTML;
    g_vertexDraw = document.getElementById("vertexDrawStyle").innerHTML;
    g_edgeDraw = document.getElementById("edgeDrawStyle").innerHTML;

    g_backgroundStyle = document.getElementById("backgroundStyle").innerHTML;

    g_GraphIsMultiMessage = document.getElementById("graphIsMultiMessage").innerHTML;
    g_GraphIsGeneralMessage = document.getElementById("graphIsGeneralMessage").innerHTML;
    g_DefaultWeightPreset = document.getElementById("defaultWeightPreset").innerHTML;

    var isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    if (isMac)
        g_selectGroupText = document.getElementById("selectGroupMac").innerHTML;
    else
        g_selectGroupText = document.getElementById("selectGroupWin").innerHTML;

    g_dragGroupText = document.getElementById("dragSelectedGroup").innerHTML;
    g_copyGroupeButton = document.getElementById("copySelectedGroup").innerHTML;
    g_removeGroupeButton = document.getElementById("removeSelectedGroup").innerHTML;

    g_BFSName = document.getElementById("BFSName").innerHTML;
    g_ColoringName = document.getElementById("ColoringName").innerHTML;
    g_findConnectedComponent = document.getElementById("findConnectedComponent").innerHTML;
    g_DFSName = document.getElementById("DFSName").innerHTML;
    g_EulerinLoopName = document.getElementById("EulerinLoopName").innerHTML;
    g_EulerinPath = document.getElementById("EulerinPath").innerHTML;
    g_FloidName = document.getElementById("FloidName").innerHTML;
    g_GraphReorder = document.getElementById("GraphReorder").innerHTML;
    g_HamiltoianCycleName = document.getElementById("HamiltoianCycleName").innerHTML;
    g_HamiltonianPath = document.getElementById("HamiltonianPath").innerHTML;
    g_MaxFlowName = document.getElementById("MaxFlowName").innerHTML;
    g_minimumSpanningTree = document.getElementById("minimumSpanningTree").innerHTML;
    g_modernGraphStyleName = document.getElementById("modernGraphStyleName").innerHTML;
    g_RadiusAndDiameter = document.getElementById("RadiusAndDiameter").innerHTML;
    g_findShortPathName = document.getElementById("findShortPathName").innerHTML;
    g_VerticesDegreeName = document.getElementById("VerticesDegreeName").innerHTML;

    g_SpanningTreeResult = document.getElementById("MinSpanningTreeResult").innerHTML;
    g_SpanningTreeIgnoreDir = document.getElementById("MinSpanningIgnoreDir").innerHTML;
    g_SpanningTreeNotConnected = document.getElementById("MinSpanningNotConnected").innerHTML;

    g_selectFirstGraphIsomorphismCheck = document.getElementById("SelectFirstGraphIsomorphismCheck").innerHTML;
    g_selectSecondGraphIsomorphismCheck = document.getElementById("SelectSecondGraphIsomorphismCheck").innerHTML;

    g_selectFirstGraphPatternCheck = document.getElementById("SelectFirstGraphPatternCheck").innerHTML;
    g_selectSecondGraphForSearchSubgraph = document.getElementById("SelectSecondGraphForSearchSubgraph").innerHTML;

    // IsomorphismCheck.js
    g_graphsIsomorph = document.getElementById("GraphsIsomorph").innerHTML;
    g_graphsNotIsomorph = document.getElementById("GraphsNotIsomorph").innerHTML;
    g_numberOfIsomorphSubgraphIs = document.getElementById("NumberOfIsomorphSubgraphIs").innerHTML;
    g_graphHasNoIsomorphSubgraph = document.getElementById("GraphHasNoIsomorphSubgraph").innerHTML;
    g_searchIsomorphSubgraph = document.getElementById("SearchIsomorphSubgraph").innerHTML;
    g_subgraphNo = document.getElementById("SubgraphNo").innerHTML;
    g_graphHasNoAtleast2Graphs = document.getElementById("GraphHasNoAtleast2Graphs").innerHTML;
    g_IsomorphismCheck = document.getElementById("IsomorphismCheck").innerHTML;

    // RadiusAndDiameter.js
    g_graphIsDisconnected = document.getElementById("GraphIsDisconnected").innerHTML;
    g_graphIsTrivial = document.getElementById("GraphIsTrivial").innerHTML;
    g_graphRadius = document.getElementById("GraphRadius").innerHTML;
    g_graphDiameter = document.getElementById("GraphDiameter").innerHTML;
    g_vertexCentral = document.getElementById("VertexCentral").innerHTML;
    g_vertexPeripheral = document.getElementById("VertexPeripheral").innerHTML;

    // VerticesDegree.js
    g_maximumDegreeOfGraph = document.getElementById("MaximumDegreeOfGraph").innerHTML;

    // Coloring.js
    g_colorNumber = document.getElementById("ColorNumber").innerHTML;

    g_done = document.getElementById("Done").innerHTML;

    g_action = document.getElementById("ActionText").innerHTML;
    g_commonEdgeStyle = document.getElementById("CommonEdgeStyleText").innerHTML;
    g_selectedEdgeStyle = document.getElementById("SelectedEdgeStyleText").innerHTML;
    g_commonVertexStyle = document.getElementById("CommonVertexStyleText").innerHTML;
    g_selectedVertexStyle = document.getElementById("SelectedVertexStyleText").innerHTML;

    // FindAllPatches.js
    g_findAllPathes = document.getElementById("FindAllPathes").innerHTML;
    g_numberOfPathesFrom = document.getElementById("NumberOfPathesFrom").innerHTML;
    g_to = document.getElementById("To").innerHTML;
    g_are = document.getElementById("Are").innerHTML;
    g_pathN = document.getElementById("PathN").innerHTML;
    g_selectFinishVertex = document.getElementById("SelectFinishVertex").innerHTML;
    g_selectStartVertex = document.getElementById("SelectStartVertex").innerHTML;

    // FindShortPatchsFromOne.js
    g_findAllPathesFromVertex = document.getElementById("findAllPathsFromVertex").innerHTML;
    g_distanceFrom = document.getElementById("distanceFrom").innerHTML;
    g_pathTo = document.getElementById("pathTo").innerHTML;

    g_useContextMenuText = document.getElementById("UseContextMenuText").innerHTML;

    g_findLongestPath = document.getElementById("findLongestPath").innerHTML;
    g_LengthOfLongestPathFrom = document.getElementById("LengthOfLongestPathFrom").innerHTML;

    g_additionalActions = document.getElementById("additionlActions").innerHTML;
    g_reverseAllEdges = document.getElementById("reverseAllEdges").innerHTML;
    g_makeAllUndirected = document.getElementById("makeAllUndirected").innerHTML;
    g_makeAllDirected = document.getElementById("makeAllDirected").innerHTML;

    g_pairWrongFormat = document.getElementById("pairWrongFormat").innerHTML;
    g_fix = document.getElementById("fixButton").innerHTML;

    g_reuseSavedEdge = document.getElementById("reuseSavedEdge").innerHTML;
}
function Point(x, y) {
    this.x = x || 0;
    this.y = y || 0;
};
Point.prototype.x = null;
Point.prototype.y = null;
Point.prototype.add = function (v) {
    return new Point(this.x + v.x, this.y + v.y);
};
Point.prototype.addValue = function (v) {
    return new Point(this.x + v, this.y + v);
};
Point.prototype.clone = function () {
    return new Point(this.x, this.y);
};
Point.prototype.degreesTo = function (v) {
    var dx = this.x - v.x;
    var dy = this.y - v.y;
    var angle = Math.atan2(dy, dx); // radians
    return angle * (180 / Math.PI); // degrees
};
Point.prototype.distance = function (v) {
    return Math.sqrt(this.distanceSqr(v));
};
Point.prototype.distanceSqr = function (v) {
    var x = this.x - v.x;
    var y = this.y - v.y;
    return x * x + y * y;
};
Point.prototype.equals = function (toCompare) {
    return this.x == toCompare.x && this.y == toCompare.y;
};
Point.prototype.interpolate = function (v, f) {
    return new Point((this.x + v.x) * f, (this.y + v.y) * f);
};
Point.prototype.length = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
};
Point.prototype.normalize = function (thickness) {
    var l = this.length();
    this.x = this.x / l * thickness;
    this.y = this.y / l * thickness;
    return new Point(this.x, this.y);
};
Point.prototype.normalizeCopy = function (thickness) {
    var l = this.length();
    return new Point(this.x / l * thickness, this.y / l * thickness);
};
Point.prototype.orbit = function (origin, arcWidth, arcHeight, degrees) {
    var radians = degrees * (Math.PI / 180);
    this.x = origin.x + arcWidth * Math.cos(radians);
    this.y = origin.y + arcHeight * Math.sin(radians);
};
Point.prototype.rotate = function (center, degrees) {
    var radians = degrees * (Math.PI / 180);
    offset = this.subtract(center);
    this.x = offset.x * Math.cos(radians) - offset.y * Math.sin(radians);
    this.y = offset.x * Math.sin(radians) + offset.y * Math.cos(radians);
    this.x = this.x + center.x;
    this.y = this.y + center.y;
    return this;
};

Point.prototype.offset = function (dx, dy) {
    this.x += dx;
    this.y += dy;
};
Point.prototype.subtract = function (v) {
    return new Point(this.x - v.x, this.y - v.y);
};
Point.prototype.subtractValue = function (value) {
    return new Point(this.x - value, this.y - value);
};
Point.prototype.multiply = function (value) {
    return new Point(this.x * value, this.y * value);
};
Point.prototype.toString = function () {
    return "(x=" + this.x + ", y=" + this.y + ")";
};

Point.prototype.normal = function () {
    return new Point(-this.y, this.x);
};

Point.prototype.min = function (point) {
    return new Point(Math.min(this.x, point.x), Math.min(this.y, point.y));
};

Point.prototype.max = function (point) {
    return new Point(Math.max(this.x, point.x), Math.max(this.y, point.y));
};

Point.prototype.inverse = function () {
    return new Point(-this.x, -this.y);
};

Point.prototype.cross = function (point) {
    return this.x * point.y - this.y * point.x;
};

Point.interpolate = function (pt1, pt2, f) {
    return new Point(pt1.x * (1.0 - f) + pt2.x * f, pt1.y * (1.0 - f) + pt2.y * f);
};
Point.polar = function (len, angle) {
    return new Point(len * Math.cos(angle), len * Math.sin(angle));
};
Point.distance = function (pt1, pt2) {
    var x = pt1.x - pt2.x;
    var y = pt1.y - pt2.y;
    return Math.sqrt(x * x + y * y);
};

Point.center = function (pt1, pt2) {
    return new Point((pt1.x + pt2.x) / 2.0, (pt1.y + pt2.y) / 2.0);
};

Point.toString = function () {
    return x + " " + y;
}

Point.projection = function (point, line1, line2) {
    var x = line2.y - line1.y;
    var y = line1.x - line2.x;
    var l = (line1.cross(line2) + line1.cross(point) + line2.cross(point)) / (x * (line2.y - line1.y) + y * (line1.x - line2.x));
    var res = new Point(point.x + x * l, point.y + y * l);
    return res;
}

Point.hitTest = function (pt11, pt12, pt21, pt22) {
    var res = null;
    var n = 0.0;

    var x1 = pt11.x;
    var y1 = pt11.y;
    var x2 = pt12.x;
    var y2 = pt12.y;
    var x3 = pt21.x;
    var y3 = pt21.y;
    var x4 = pt22.x;
    var y4 = pt22.y;

    if (y2 - y1 != 0.0) {  // a(y)
        var q = (x2 - x1) / (y1 - y2);
        var sn = (x3 - x4) + (y3 - y4) * q;
        if (sn == 0.0) {
            return res;
        }  // c(x) + c(y)*q

        var fn = (x3 - x1) + (y3 - y1) * q;   // b(x) + b(y)*q
        n = fn / sn;
    }
    else {
        if ((y3 - y4) == 0.0) {
            return res;
        }  // b(y)
        n = (y3 - y1) / (y3 - y4);   // c(y)/b(y)
    }

    // x3 + (-b(x))*n && y3 +(-b(y))*n
    res = new Point(x3 + (x4 - x3) * n, y3 + (y4 - y3) * n);

    var epsilon = 1E-5;
    if (!(res.x >= Math.min(x1, x2) - epsilon && res.x >= Math.min(x3, x4) - epsilon && res.x <= Math.max(x1, x2) + epsilon && res.x <= Math.max(x3, x4) + epsilon &&
        res.y >= Math.min(y1, y2) - epsilon && res.y >= Math.min(y3, y4) - epsilon && res.y <= Math.max(y1, y2) + epsilon && res.y <= Math.max(y3, y4) + epsilon)) {
        res = null;
    }

    return res;
}

function Rect(minPoint, maxPoint) {
    this.minPoint = minPoint;
    this.maxPoint = maxPoint;
};

Rect.prototype.center = function () {
    return Point.center(this.minPoint, this.maxPoint);
};

Rect.prototype.size = function () {
    return this.maxPoint.subtract(this.minPoint);
};

Rect.prototype.left = function () {
    return this.minPoint.x;
};

Rect.prototype.top = function () {
    return this.minPoint.y;
};

Rect.prototype.isIn = function (v) {
    return this.minPoint.x <= v.x && this.minPoint.y <= v.y &&
        this.maxPoint.x > v.x && this.maxPoint.y > v.y;
};
/**
 * This is edge model
 *
 */

var EdgeModels = { "line": 0, "curve": 1 };

const defaultEdgeWidth = 4;

function EdgeModel() {
    this.width = globalApplication.GetDefaultEdgeWidth();
    this.type = EdgeModels.line;
    this.curveValue = EdgeModel.prototype.defaultCurve;
    this.default = true;
    this.sizeOfLoop = 24;
    this.loopShiftAngel = Math.PI / 6;
}

EdgeModel.prototype.defaultCurve = 0.1;

EdgeModel.prototype.copyFrom = function (other) {
    this.width = other.width;
    this.type = other.type;
    this.curveValue = other.curveValue;
    this.default = other.default;
}

EdgeModel.prototype.SaveToXML = function () {
    return "model_width=\"" + this.width + "\" " +
        "model_type=\"" + this.type + "\" " +
        "model_curveValue=\"" + this.curveValue + "\" "
    "model_default=\"" + this.default + "\" ";
}

EdgeModel.prototype.LoadFromXML = function (xml, graph) {
    this.width = xml.attr('model_width') == null ? this.width : parseFloat(xml.attr("model_width"));
    this.type = xml.attr('model_type') == null ? this.type : xml.attr("model_type");
    this.curveValue = xml.attr('model_curveValue') == null ? this.curveValue : parseFloat(xml.attr("model_curveValue"));
    this.default = xml.attr('model_default') == null ? this.default : parseFloat(xml.attr("model_default"));
}

EdgeModel.prototype.GetCurvePoint = function (position1, position2, t) {
    var points = this.GetBezierPoints(position1, position2);
    var firstBezierPoint = points[0];
    var secondBezierPoint = points[1];

    var B0_t = Math.pow(1 - t, 3);
    var B1_t = 3 * t * Math.pow(1 - t, 2);
    var B2_t = 3 * t * t * (1 - t)
    var B3_t = t * t * t;

    var ax = position1.x;
    var ay = position1.y;
    var dx = position2.x;
    var dy = position2.y;
    var bx = firstBezierPoint.x;
    var by = firstBezierPoint.y;
    var cx = secondBezierPoint.x;
    var cy = secondBezierPoint.y;

    var px_t = (B0_t * ax) + (B1_t * bx) + (B2_t * cx) + (B3_t * dx);
    var py_t = (B0_t * ay) + (B1_t * by) + (B2_t * cy) + (B3_t * dy);

    return new Point(px_t, py_t);
}

EdgeModel.prototype.GetBezierPoints = function (position1, position2) {
    var direction = position2.subtract(position1);
    var delta = direction.length();
    direction.normalize(1.0);
    var normal = direction.normal();

    var deltaOffsetPixels = delta * this.curveValue;
    var yOffset = normal.multiply(deltaOffsetPixels);
    var firstBezierPointShift = (direction.multiply(delta * 0.2)).add(yOffset);
    var secondBezierPointShift = (direction.multiply(-delta * 0.2)).add(yOffset);
    var firstBezierPoint = position1.add(firstBezierPointShift);
    var secondBezierPoint = position2.add(secondBezierPointShift);

    return [firstBezierPoint, secondBezierPoint];
}


EdgeModel.prototype.HitTest = function (position1, position2, mousePos) {
    if (this.type == EdgeModels.line)
        return this.HitTestLine(position1, position2, mousePos);
    else if (this.type == EdgeModels.curve)
        return this.HitTestCurve(position1, position2, mousePos);

    return false;
}


EdgeModel.prototype.HitTestLine = function (position1, position2, mousePos, factor) {
    if (factor === undefined) {
        factor = 1.0;
    }


    var pos1 = position1;
    var pos2 = position2;
    var pos0 = mousePos;

    // Self loop case
    if (pos1.equals(pos2)) {
        var xCenter = pos1.x - Math.cos(this.GetLoopShiftAngel()) * this.GetLoopSize();
        var yCenter = pos1.y - Math.sin(this.GetLoopShiftAngel()) * this.GetLoopSize();

        return Math.abs((Point.distance(new Point(xCenter, yCenter), pos0)) - this.GetLoopSize()) <= this.width * 1.5 * factor;
    }

    var r1 = pos0.distance(pos1);
    var r2 = pos0.distance(pos2);
    var r12 = pos1.distance(pos2);

    if (r1 >= (new Point(r2, r12)).length() || r2 >= (new Point(r1, r12)).length()) {
    }
    else {
        var distance = ((pos1.y - pos2.y) * pos0.x + (pos2.x - pos1.x) * pos0.y + (pos1.x * pos2.y - pos2.x * pos1.y)) / r12;

        if (Math.abs(distance) <= this.width * 1.5 * factor) {
            return true;
        }
    }

    return false;
}

EdgeModel.prototype.HitTestCurve = function (position1, position2, mousePos) {
    var pos1 = position1;
    var pos2 = position2;
    var pos0 = mousePos;

    // Self loop case
    if (pos1.equals(pos2)) {
        var xCenter = pos1.x - Math.cos(this.GetLoopShiftAngel()) * this.GetLoopSize();
        var yCenter = pos1.y - Math.sin(this.GetLoopShiftAngel()) * this.GetLoopSize();

        return Math.abs((Point.distance(new Point(xCenter, yCenter), pos0)) - this.GetLoopSize()) <= this.width * 1.5;
    }

    var interval_count = position1.distance(position2) / 100 * 30;

    var start = position1;
    for (var i = 0; i < interval_count; i++) {
        var finish = this.GetCurvePoint(position1, position2, i / interval_count);

        if (this.HitTestLine(start, finish, mousePos, 2.0))
            return true;

        start = finish;
    }

    return false;
}

EdgeModel.prototype.ChangeCurveValue = function (delta) {
    if (this.type == EdgeModels.line) {
        this.type = EdgeModels.curve;
        this.curveValue = 0.0;
    }

    this.curveValue = this.curveValue + delta;

    if (Math.abs(this.curveValue) <= 0.01)
        this.type = EdgeModels.line;

    this.default = false;
}

EdgeModel.prototype.SetCurveValue = function (value) {
    if (this.type == EdgeModels.line) {
        this.type = EdgeModels.curve;
        this.curveValue = 0.0;
    }

    this.curveValue = value;

    if (Math.abs(this.curveValue) <= 0.01)
        this.type = EdgeModels.line;

    this.default = false;
}

EdgeModel.prototype.GetLoopSize = function () {
    if (Math.abs(this.curveValue) <= 0.01) {
        // without this condition arc disappears when curveValue=0
        return this.sizeOfLoop;
    }
    else {
        // bigger curveValue -> bigger loop size
        let normalCurve = this.curveValue;
        if (this.type == EdgeModels.line) {
            normalCurve = this.defaultCurve;
        }
        else if (normalCurve >= 0.0) {
            normalCurve += this.defaultCurve
        }

        return this.sizeOfLoop * Math.abs(normalCurve) * (1 / this.defaultCurve);
    }

}

EdgeModel.prototype.GetLoopShiftAngel = function () {
    if (this.type == EdgeModels.line || this.curveValue >= 0.0) { // shift to top-left
        return this.loopShiftAngel;
    }
    else { // shift to bottom-right
        return this.loopShiftAngel + Math.PI;
    }
}

/**
 * This is graph model used for hit test and draw.
 *
 */

const defaultVertexDiameter = 30;

function VertexModel() {
    this.diameter = globalApplication.GetDefaultVertexSize();
}
/**
 * Base node class.
 *
 */


function BaseVertex(x, y, vertexEnumType) {
    this.position = new Point(x, y);
    this.id = 0;
    this.mainText = "";
    this.upText = "";
    this.vertexEnumType = vertexEnumType;
    this.model = new VertexModel();
    this.hasUndefinedPosition = false;
    this.ownStyles = {};
};

BaseVertex.prototype.position = new Point(0, 0);

BaseVertex.prototype.copyFrom = function (other) {
    this.position = new Point(other.position.x, other.position.y);
    this.id = other.id;
    this.mainText = other.mainText;
    this.upText = other.upText;
    this.vertexEnumType = other.vertexEnumType;
    this.model = new VertexModel();
    this.hasUndefinedPosition = other.hasUndefinedPosition;
    this.ownStyles = FullObjectCopy(other.ownStyles);
}

BaseVertex.prototype.SaveToXML = function () {
    return "<node " +
        "positionX=\"" + this.position.x + "\" " +
        "positionY=\"" + this.position.y + "\" " +
        "id=\"" + this.id + "\" " +
        "mainText=\"" + gEncodeToHTML(this.mainText) + "\" " +
        "upText=\"" + gEncodeToHTML(this.upText) + "\" " +
        ((Object.keys(this.ownStyles).length > 0) ? "ownStyles = \"" + gEncodeToHTML(JSON.stringify(this.ownStyles)) + "\" " : "") +
        "size=\"" + this.model.diameter + "\" " +
        "></node>";
}

BaseVertex.prototype.LoadFromXML = function (xml) {
    var xmlX = xml.attr('positionX');
    var xmlY = xml.attr('positionY');
    this.hasUndefinedPosition = (typeof xmlX === 'undefined') || (typeof xmlY === 'undefined');
    this.position = new Point(parseFloat(xmlX), parseFloat(xmlY));
    this.id = xml.attr('id');
    this.mainText = xml.attr('mainText');
    this.upText = xml.attr('upText');

    if (typeof this.mainText === 'undefined')
        this.mainText = this.id;
    else
        this.mainText = gDecodeFromHTML(this.mainText);

    if (typeof this.upText === 'undefined')
        this.upText = "";
    else
        this.upText = gDecodeFromHTML(this.upText);

    var ownStyle = xml.attr('ownStyles');
    if (typeof ownStyle !== 'undefined') {
        var parsedSave = gDecodeFromHTML(JSON.parse(ownStyle));

        for (var indexField in parsedSave) {
            var index = parseInt(indexField);
            this.ownStyles[index] = FullObjectCopy(this.getStyleFor(index));
            for (var field in parsedSave[indexField]) {
                if (this.ownStyles[index].ShouldLoad(field))
                    this.ownStyles[index][field] = parsedSave[indexField][field];
            }
        }
    }

    var size = xml.attr('size');
    if (typeof size !== 'undefined')
        this.model.diameter = parseInt(size);
}

BaseVertex.prototype.SetId = function (id) {
    this.id = id;
    if (this.vertexEnumType != null)
        this.mainText = this.vertexEnumType.GetVertexText(id);
}

BaseVertex.prototype.diameterFactor = function () {
    return new Point(1.0 + (this.mainText.length ? this.mainText.length / 8.0 : 0), 1.5);
}

BaseVertex.prototype.IsUndefinedPosition = function () {
    return this.hasUndefinedPosition;
}

BaseVertex.prototype.HitTest = function (pos) {
    var shape = this.hasOwnProperty('currentStyle') ? this.currentStyle.GetStyle({}, this).shape : VertexCircleShape;
    var width = this.hasOwnProperty('currentStyle') ? this.currentStyle.GetStyle({}, this).lineWidth : 0;

    if (shape == VertexCircleShape) {
        return this.position.distance(pos) < this.model.diameter / 2.0 + width;
    }
    else {
        var relativePos = (new Point(pos.x, pos.y)).subtract(this.position);
        var lineFinish1 = relativePos.add(new Point(1000, 0));
        var lineFinish2 = relativePos.add(new Point(-1000, 0));

        var pointsVertex1 = GetPointsForShape(shape, this.model.diameter + width, this.mainText);
        pointsVertex1.push(pointsVertex1[0]);

        var hitNumber1 = 0;
        var hitNumber2 = 0;

        for (var i = 0; i < pointsVertex1.length - 1; i++) {
            var hitTest = Point.hitTest(relativePos, lineFinish1, pointsVertex1[i], pointsVertex1[i + 1]);
            if (hitTest != null) {
                hitNumber1++;
            }
            hitTest = Point.hitTest(relativePos, lineFinish2, pointsVertex1[i], pointsVertex1[i + 1]);
            if (hitTest != null) {
                hitNumber2++;
            }
        }

        return hitNumber1 == 1 && hitNumber2 == 1;
    }

    return false;
}

BaseVertex.prototype.resetOwnStyle = function (index) {
    if (this.ownStyles.hasOwnProperty(index)) {
        delete this.ownStyles[index];
    }
}

BaseVertex.prototype.setOwnStyle = function (index, style) {
    this.ownStyles[index] = FullObjectCopy(style);
}

BaseVertex.prototype.getStyleFor = function (index) {
    if (this.ownStyles.hasOwnProperty(index)) {
        return this.ownStyles[index];
    }
    else {
        var style = null;

        if (index == 0)
            style = globalApplication.GetStyle("vertex", "common");
        else
            style = globalApplication.GetStyle("vertex", "selected", undefined, index - 1);

        return style;
    }
}

BaseVertex.prototype.hasOwnStyleFor = function (index) {
    return this.ownStyles.hasOwnProperty(index);
}/**
 * This is base arc.
 *
 *
 */

function BaseEdge(vertex1, vertex2, isDirect, weight, upText) {
    this.vertex1 = vertex1;
    this.vertex2 = vertex2;
    this.arrayStyleStart = "";
    this.arrayStyleFinish = "";

    this.isDirect = isDirect;
    this.weight = 0;
    this.text = "";
    this.useWeight = false;
    this.id = 0;
    this.model = new EdgeModel();

    if (upText === undefined)
        this.upText = "";
    else
        this.upText = upText;

    if (weight !== undefined)
        this.SetWeight(weight);

    this.ownStyles = {};
}

BaseEdge.prototype.copyFrom = function (other) {
    this.vertex1 = other.vertex1;
    this.vertex2 = other.vertex2;
    this.arrayStyleStart = other.arrayStyleStart;
    this.arrayStyleFinish = other.arrayStyleFinish;

    this.isDirect = other.isDirect;
    this.weight = other.weight;
    this.text = other.text;
    this.useWeight = other.useWeight;
    this.id = other.id;
    this.model = new EdgeModel();
    this.model.copyFrom(other.model);

    this.upText = other.upText;

    this.ownStyles = FullObjectCopy(other.ownStyles);
}

BaseEdge.prototype.SaveToXML = function () {
    return "<edge " +
        "source=\"" + this.vertex1.id + "\" " +
        "target=\"" + this.vertex2.id + "\" " +
        "isDirect=\"" + this.isDirect + "\" " +
        "weight=\"" + this.weight + "\" " +
        "useWeight=\"" + this.useWeight + "\" " +
        "id=\"" + this.id + "\" " +
        "text=\"" + gEncodeToHTML(this.text) + "\" " +
        "upText=\"" + gEncodeToHTML(this.upText) + "\" " +
        "arrayStyleStart=\"" + this.arrayStyleStart + "\" " +
        "arrayStyleFinish=\"" + this.arrayStyleFinish + "\" " +
        ((Object.keys(this.ownStyles).length > 0) ? "ownStyles = \"" + gEncodeToHTML(JSON.stringify(this.ownStyles)) + "\" " : "") +
        this.model.SaveToXML() +
        "></edge>";
}

BaseEdge.prototype.LoadFromXML = function (xml, graph) {
    var attr = xml.attr('vertex1');
    if (typeof attr === 'undefined') {
        attr = xml.attr('source');
    }
    this.vertex1 = graph.FindVertex(typeof attr !== 'undefined' ? attr : xml.attr('graph1'));
    var attr = xml.attr('vertex2');
    if (typeof attr === 'undefined') {
        attr = xml.attr('target');
    }
    this.vertex2 = graph.FindVertex(typeof attr !== 'undefined' ? attr : xml.attr('graph2'));
    this.isDirect = xml.attr('isDirect') == "true";
    this.weight = parseFloat(xml.attr('weight'));
    if (isNaN(this.weight)) {
        this.weight = 1;
    }
    this.hasPair = xml.attr('hasPair') == "true";
    this.useWeight = xml.attr('useWeight') == "true";
    this.id = xml.attr('id');
    this.text = xml.attr("text") == null ? "" : gDecodeFromHTML(xml.attr("text"));
    this.arrayStyleStart = xml.attr("arrayStyleStart") == null ? "" : xml.attr("arrayStyleStart");
    this.arrayStyleFinish = xml.attr("arrayStyleFinish") == null ? "" : xml.attr("arrayStyleFinish");
    this.upText = xml.attr('upText');
    if (typeof this.upText === 'undefined') {
        this.upText = "";
    }
    else {
        this.upText = gDecodeFromHTML(this.upText);
    }

    var ownStyle = xml.attr('ownStyles');
    if (typeof ownStyle !== 'undefined') {
        var parsedSave = gDecodeFromHTML(JSON.parse(ownStyle));

        for (var indexField in parsedSave) {
            var index = parseInt(indexField);
            this.ownStyles[index] = FullObjectCopy(this.getStyleFor(index));
            for (var field in parsedSave[indexField]) {
                if (this.ownStyles[index].ShouldLoad(field))
                    this.ownStyles[index][field] = parsedSave[indexField][field];
            }
        }
    }

    this.model.LoadFromXML(xml);
}

BaseEdge.prototype.GetPixelLength = function () {
    if (this.vertex1 == this.vertex2) {
        return this.model.GetLoopSize() * 2 * Math.PI;
    }
    else {
        return Point.distance(this.vertex1.position, this.vertex2.position);
    }
}

BaseEdge.prototype.GetWeight = function () {
    return this.useWeight ? this.weight : 1;
}

BaseEdge.prototype.GetText = function () {
    return this.text.length > 0 ? this.text : (this.useWeight ? this.weight.toString() : "");
}

BaseEdge.prototype.GetUpText = function () {
    return this.upText;
}

BaseEdge.prototype.GetStartEdgeStyle = function () {
    return this.arrayStyleStart;
}

BaseEdge.prototype.GetFinishEdgeStyle = function () {
    return (this.arrayStyleFinish != "" ? this.arrayStyleFinish : (this.isDirect ? "arrow" : ""));
}

BaseEdge.prototype.HitTest = function (pos) {
    var positions = this.GetEdgePositionsShift();
    return this.model.HitTest(positions[0], positions[1], pos);
}

BaseEdge.prototype.GetEdgePositionsShift = function () {
    return this.GetEdgePositions();
}

BaseEdge.prototype.GetEdgePositions = function () {
    var res = [];

    if (this.vertex1 == this.vertex2) {
        res.push(this.vertex1.position);
        res.push(this.vertex2.position);
        return res;
    }

    var position1 = this.vertex1.position;
    var position2 = this.vertex2.position;
    var diameter1 = this.vertex1.model.diameter + parseInt(this.vertex1.currentStyle.GetStyle({}, this.vertex1).lineWidth);
    var diameter2 = this.vertex2.model.diameter + parseInt(this.vertex2.currentStyle.GetStyle({}, this.vertex2).lineWidth);

    var direction = position1.subtract(position2);

    var direction1 = direction;
    var direction2 = direction;
    var d1 = diameter1;
    var d2 = diameter2;

    if (this.model.type == EdgeModels.curve) {
        var dist = position1.distance(position2);
        var point1 = this.model.GetCurvePoint(position1, position2, 10.0 / dist);
        direction1 = position1.subtract(point1);

        var point2 = this.model.GetCurvePoint(position1, position2, 1.0 - 10.0 / dist);
        direction2 = position2.subtract(point2);

        d2 = diameter2;
    }
    else {
        direction2 = direction2.multiply(-1);
    }

    direction1.normalize(1.0);
    direction2.normalize(1.0);

    var vertices = [];
    vertices.push({ vertex: this.vertex1, direction: direction1, position: position1, diameter: d1 });
    vertices.push({ vertex: this.vertex2, direction: direction2, position: position2, diameter: d2 });

    vertices.forEach(function (data) {
        var shape = data.vertex.currentStyle.GetStyle({}, data.vertex).shape;
        if (shape == VertexCircleShape) {
            var direction = data.direction.multiply(0.5);

            res.push(data.position.subtract(direction.multiply(data.diameter)));
        }
        else {
            var lineFinish1 = data.direction.multiply(-1).multiply(1000.0);

            var pointsVertex1 = GetPointsForShape(shape, data.diameter, data.vertex.mainText);
            pointsVertex1.push(pointsVertex1[0]);

            for (var i = 0; i < pointsVertex1.length - 1; i++) {
                var hitText = Point.hitTest(new Point(0, 0), lineFinish1, pointsVertex1[i], pointsVertex1[i + 1]);
                if (hitText != null) {
                    res.push(data.position.add(hitText));
                    break;
                }
            }
        }
    });


    return res;
}

BaseEdge.prototype.SetWeight = function (weight) {
    var useWeight = false;
    if (!isNaN(parseInt(weight, 10))) {
        useWeight = true;
    }
    weight = (!isNaN(parseInt(weight, 10)) && weight >= 0) ? weight : 1;

    this.weight = Number(weight);
    this.useWeight = useWeight;
}

BaseEdge.prototype.SetUpText = function (text) {
    this.upText = text;
}

BaseEdge.prototype.resetOwnStyle = function (index) {
    if (this.ownStyles.hasOwnProperty(index)) {
        delete this.ownStyles[index];
    }
}

BaseEdge.prototype.setOwnStyle = function (index, style) {
    this.ownStyles[index] = style;
}

BaseEdge.prototype.getStyleFor = function (index) {
    if (this.ownStyles.hasOwnProperty(index)) {
        return this.ownStyles[index];
    }
    else {
        var style = null;

        if (index == 0)
            style = globalApplication.GetStyle("edge", "common");
        else
            style = globalApplication.GetStyle("edge", "selected", undefined, index - 1);

        return style;
    }
}

BaseEdge.prototype.hasOwnStyleFor = function (index) {
    return this.ownStyles.hasOwnProperty(index);
}/**
 * Graph drawer.
 */

// Test graph: http://localhost:8080/?graph=oimDPgsdgiAjWGBHZZcst


// Vertex shape
const VertexCircleShape = 0,
    VertexSquareShape = 1,
    VertexTriangleShape = 2,
    VertexPentagonShape = 3,
    VertexHomeShape = 4,
    VertexTextboxShape = 5;
VertexSnowflakeShape = 6;

// Common text position
const CommonTextCenter = 0,
    CommonTextUp = 1;

// Fonts
const DefaultFont = "px sans-serif",
    MainTextFontSize = 16,
    TopTextFontSize = 12.0;

function GetSquarePoints(diameter) {
    var res = [];

    var a = diameter;
    res.push(new Point(-a / 2, - a / 2));
    res.push(new Point(a / 2, -a / 2));
    res.push(new Point(a / 2, a / 2));
    res.push(new Point(-a / 2, a / 2));

    return res;
}

function GetTrianglePoints(diameter) {
    var res = [];

    var effectiveDiameter = diameter * 1.5;
    var upOffset = effectiveDiameter / 2;
    var downOffset = effectiveDiameter / 4;
    var lrOffset = effectiveDiameter * 3 / (Math.sqrt(3) * 4);

    res.push(new Point(0, - upOffset));
    res.push(new Point(lrOffset, downOffset));
    res.push(new Point(- lrOffset, downOffset));

    return res;
}

function GetPentagonPoints(diameter) {
    var res = [];

    var baseValue = diameter / 2 * 1.2;

    res.push(new Point(0, - baseValue));
    res.push((new Point(0, - baseValue)).rotate(new Point(0, 0), 72));
    res.push((new Point(0, - baseValue)).rotate(new Point(0, 0), 72 * 2));
    res.push((new Point(0, - baseValue)).rotate(new Point(0, 0), 72 * 3));
    res.push((new Point(0, - baseValue)).rotate(new Point(0, 0), 72 * 4));
    res.push((new Point(0, - baseValue)).rotate(new Point(0, 0), 72 * 5));

    return res;
}

function GetTextboxPoints(diameter, text) {
    var res = [];
    var width = diameter;
    var height = diameter;

    if (text) {
        var tempContext = document.createElement('canvas').getContext('2d');
        tempContext.font = "bold " + MainTextFontSize + DefaultFont;
        width = tempContext.measureText(text).width + diameter / 2;
    }

    res.push(new Point(-width / 2, -height / 2));
    res.push(new Point(width / 2, -height / 2));
    res.push(new Point(width / 2, height / 2));
    res.push(new Point(-width / 2, height / 2));

    return res;
}

function GetShowflakePoints(diameter) {
    var res = [];

    var superSmallRadius = diameter * 0.8 / 2;
    var smallRadius = diameter * 0.95 / 2;
    var bigRadius = diameter * 1.5 / 2;
    let angel = 8;

    res.push(new Point(superSmallRadius, 0).rotate(new Point(0, 0), - angel));
    res.push(new Point(smallRadius, 0));
    res.push(new Point(superSmallRadius, 0).rotate(new Point(0, 0), angel));
    res.push(new Point(bigRadius, 0).rotate(new Point(0, 0), 30));
    res.push(new Point(superSmallRadius, 0).rotate(new Point(0, 0), 60 - angel));
    res.push(new Point(smallRadius, 0).rotate(new Point(0, 0), 60));
    res.push(new Point(superSmallRadius, 0).rotate(new Point(0, 0), 60 + angel));
    res.push(new Point(bigRadius, 0).rotate(new Point(0, 0), 30 + 60));
    res.push(new Point(superSmallRadius, 0).rotate(new Point(0, 0), 60 + 60 - angel));
    res.push(new Point(smallRadius, 0).rotate(new Point(0, 0), 60 + 60));
    res.push(new Point(superSmallRadius, 0).rotate(new Point(0, 0), 60 + 60 + angel));
    res.push(new Point(bigRadius, 0).rotate(new Point(0, 0), 30 + 60 + 60));
    res.push(new Point(superSmallRadius, 0).rotate(new Point(0, 0), 60 + 60 + 60 - angel));
    res.push(new Point(smallRadius, 0).rotate(new Point(0, 0), 60 + 60 + 60));
    res.push(new Point(superSmallRadius, 0).rotate(new Point(0, 0), 60 + 60 + 60 + angel));

    res.push(new Point(bigRadius, 0).rotate(new Point(0, 0), 30 + 60 + 60 + 60));
    res.push(new Point(superSmallRadius, 0).rotate(new Point(0, 0), 60 + 60 + 60 + 60 - angel));
    res.push(new Point(smallRadius, 0).rotate(new Point(0, 0), 60 + 60 + 60 + 60));
    res.push(new Point(superSmallRadius, 0).rotate(new Point(0, 0), 60 + 60 + 60 + 60 + angel));
    res.push(new Point(bigRadius, 0).rotate(new Point(0, 0), 30 + 60 + 60 + 60 + 60));
    res.push(new Point(superSmallRadius, 0).rotate(new Point(0, 0), 60 + 60 + 60 + 60 + 60 - angel));
    res.push(new Point(smallRadius, 0).rotate(new Point(0, 0), 60 + 60 + 60 + 60 + 60));
    res.push(new Point(superSmallRadius, 0).rotate(new Point(0, 0), 60 + 60 + 60 + 60 + 60 + angel));
    res.push(new Point(bigRadius, 0).rotate(new Point(0, 0), 30 + 60 + 60 + 60 + 60 + 60));

    return res;
}

function GetPointsForShape(shape, diameter, text = null) {
    switch (parseInt(shape)) {
        case VertexSquareShape: return GetSquarePoints(diameter); break;
        case VertexTriangleShape: return GetTrianglePoints(diameter); break;
        case VertexPentagonShape: return GetPentagonPoints(diameter); break;
        case VertexTextboxShape: return GetTextboxPoints(diameter, text); break;
        case VertexSnowflakeShape: return GetShowflakePoints(diameter); break;
        default: return null; break;
    }
}

function GetSizeForShape(shape, diameter) {
    switch (parseInt(shape)) {
        case VertexSquareShape: return diameter; break;
        case VertexTriangleShape: return diameter * 1.5; break;
        case VertexPentagonShape: return diameter * 1.2; break;
        case VertexTextboxShape: return diameter; break;
        case VertexSnowflakeShape: return diameter * 1.5; break;

        default: return diameter; break;
    }
}

function BaseVertexStyle() {
    this.baseStyles = [];
}

BaseVertexStyle.prototype.GetStyle = function (baseStyle, object) {
    this.baseStyles.forEach(function (element) {
        var styleObject = globalApplication.GetStyle("vertex", element, object);
        baseStyle = styleObject.GetStyle(baseStyle, object);
    });

    if (this.hasOwnProperty('lineWidth'))
        baseStyle.lineWidth = this.lineWidth;
    if (this.hasOwnProperty('strokeStyle'))
        baseStyle.strokeStyle = this.strokeStyle;
    if (this.hasOwnProperty('fillStyle'))
        baseStyle.fillStyle = this.fillStyle;
    if (this.hasOwnProperty('mainTextColor'))
        baseStyle.mainTextColor = this.mainTextColor;
    if (this.hasOwnProperty('shape'))
        baseStyle.shape = this.shape;
    if (this.hasOwnProperty('upTextColor'))
        baseStyle.upTextColor = this.upTextColor;
    if (this.hasOwnProperty('commonTextPosition'))
        baseStyle.commonTextPosition = this.commonTextPosition;

    baseStyle.lineWidth = parseInt(baseStyle.lineWidth);

    return this.FixNewFields(baseStyle);
}

BaseVertexStyle.prototype.FixNewFields = function (style) {
    if (!style.hasOwnProperty('shape'))
        style.shape = VertexCircleShape;

    if (!style.hasOwnProperty('commonTextPosition'))
        style.commonTextPosition = CommonTextCenter;

    return style;
}

BaseVertexStyle.prototype.Clear = function () {
    delete this.lineWidth;
    delete this.strokeStyle;
    delete this.fillStyle;
    delete this.mainTextColor;
    delete this.shape;
    delete this.upTextColor;
    delete this.commonTextPosition;
    delete this.lineWidth;
}

BaseVertexStyle.prototype.ShouldLoad = function (field) {
    return field != "baseStyles";
}

// Common style of Graphs.
function CommonVertexStyle() {
    BaseVertexStyle.apply(this, arguments);

    this.lineWidth = 2;
    this.strokeStyle = '#c7b7c7';
    this.fillStyle = '#68aeba';
    this.mainTextColor = '#f0d543';
    this.shape = VertexCircleShape;
    this.upTextColor = '#68aeba';
    this.commonTextPosition = CommonTextCenter;

    this.baseStyles = [];
}

CommonVertexStyle.prototype = Object.create(BaseVertexStyle.prototype);

function CommonPrintVertexStyle() {
    BaseVertexStyle.apply(this, arguments);

    this.strokeStyle = '#000000';
    this.fillStyle = '#FFFFFF';
    this.mainTextColor = '#000000';

    this.baseStyles.push("common");
}

CommonPrintVertexStyle.prototype = Object.create(BaseVertexStyle.prototype);

// Selected style of Graphs.
function SelectedVertexStyle0() {
    BaseVertexStyle.apply(this, arguments);

    this.strokeStyle = '#f0d543';
    this.mainTextColor = '#f0d543';
    this.fillStyle = '#c7627a';

    this.baseStyles.push("common");
}

SelectedVertexStyle0.prototype = Object.create(BaseVertexStyle.prototype);

function SelectedVertexStyle1() {
    BaseVertexStyle.apply(this, arguments);

    this.strokeStyle = '#7a9ba0';
    this.mainTextColor = '#c3d2d5';
    this.fillStyle = '#534641';

    this.baseStyles.push("selected");
}

SelectedVertexStyle1.prototype = Object.create(BaseVertexStyle.prototype);

function SelectedVertexStyle2() {
    BaseVertexStyle.apply(this, arguments);

    this.strokeStyle = '#8C4C86';
    this.mainTextColor = '#dbbdd8';
    this.fillStyle = '#253267';

    this.baseStyles.push("selected");
}

SelectedVertexStyle2.prototype = Object.create(BaseVertexStyle.prototype);

function SelectedVertexStyle3() {
    BaseVertexStyle.apply(this, arguments);

    this.strokeStyle = '#6188FF';
    this.mainTextColor = '#6188FF';
    this.fillStyle = '#E97CF9';

    this.baseStyles.push("selected");
}

SelectedVertexStyle3.prototype = Object.create(BaseVertexStyle.prototype);

function SelectedVertexStyle4() {
    BaseVertexStyle.apply(this, arguments);

    this.strokeStyle = '#C6B484';
    this.mainTextColor = '#C6B484';
    this.fillStyle = '#E0DEE1';

    this.baseStyles.push("selected");
}

SelectedVertexStyle4.prototype = Object.create(BaseVertexStyle.prototype);

function SelectedPrintVertexStyle() {
    BaseVertexStyle.apply(this, arguments);

    this.strokeStyle = '#000000';
    this.mainTextColor = '#000000';
    this.fillStyle = '#AAAAAA';

    this.baseStyles.push("printed");
}

SelectedPrintVertexStyle.prototype = Object.create(BaseVertexStyle.prototype);

var DefaultSelectedGraphStyles = [new SelectedVertexStyle0(), new SelectedVertexStyle1(),
new SelectedVertexStyle2(), new SelectedVertexStyle3(), new SelectedVertexStyle4()];

var DefaultPrintSelectedGraphStyles = [new SelectedPrintVertexStyle()];

function BaseVertexDrawer(context) {
    this.context = context;
}

BaseVertexDrawer.prototype.Draw = function (baseGraph, graphStyle) {
    this.SetupStyle(graphStyle);
    this.DrawShape(baseGraph);

    if (this.currentStyle.lineWidth != 0)
        this.context.stroke();

    this.context.fill();

    var shapeSize = GetSizeForShape(graphStyle.shape, baseGraph.model.diameter + graphStyle.lineWidth);

    if (graphStyle.commonTextPosition == CommonTextCenter) {
        this.DrawCenterText(baseGraph.position, baseGraph.mainText, graphStyle.mainTextColor,
            graphStyle.fillStyle, true, true, MainTextFontSize);
        // Top text
        this.DrawCenterText(baseGraph.position.add(new Point(0, - shapeSize / 2.0 - 9.0)), baseGraph.upText,
            graphStyle.upTextColor, graphStyle.strokeStyle, false, false, TopTextFontSize);
    }
    else if (graphStyle.commonTextPosition == CommonTextUp) {
        this.DrawCenterText(baseGraph.position.add(new Point(0, - shapeSize / 2.0 - 7.0)), baseGraph.mainText,
            graphStyle.mainTextColor, graphStyle.fillStyle, true, false, MainTextFontSize);
        // Top text
        this.DrawCenterText(baseGraph.position.add(new Point(0, shapeSize / 2.0 + 9.0)), baseGraph.upText,
            graphStyle.upTextColor, graphStyle.strokeStyle, false, false, TopTextFontSize);
    }
    /*	
      // Bottom text
      this.DrawCenterText(baseGraph.position.add(new Point(0, + baseGraph.model.diameter / 2.0 + 7.0)), 
        "Text 2", graphStyle.fillStyle, false, 12.0);
    */
}

BaseVertexDrawer.prototype.SetupStyle = function (style) {
    this.currentStyle = style;
    this.context.lineWidth = style.lineWidth;
    this.context.strokeStyle = style.strokeStyle;
    this.context.fillStyle = style.fillStyle;
}

BaseVertexDrawer.prototype.DrawShape = function (baseGraph) {
    this.context.beginPath();
    if (this.currentStyle.shape == VertexCircleShape) {
        this.context.arc(baseGraph.position.x, baseGraph.position.y, baseGraph.model.diameter / 2.0, 0, 2 * Math.PI);
    }
    else {
        var points = GetPointsForShape(this.currentStyle.shape, baseGraph.model.diameter, baseGraph.mainText);

        this.context.moveTo(baseGraph.position.x + points[points.length - 1].x, baseGraph.position.y + points[points.length - 1].y);

        var context = this.context;

        points.forEach(function (point) {
            context.lineTo(baseGraph.position.x + point.x, baseGraph.position.y + point.y);
        });
    }

    this.context.closePath();
}

BaseVertexDrawer.prototype.DrawText = function (position, text, color, outlineColor, outline, font) {
    this.context.fillStyle = color;
    this.context.font = font;
    this.context.lineWidth = 4;
    this.context.strokeStyle = outlineColor;

    if (outline) {
        this.context.save();
        this.context.lineJoin = 'round';
        this.context.strokeText(text, position.x, position.y);
        this.context.restore();
    }

    this.context.fillText(text, position.x, position.y);
}

BaseVertexDrawer.prototype.DrawCenterText = function (position, text, color, outlineColor, bold, outline, size) {
    this.context.textBaseline = "middle";
    this.context.font = (bold ? "bold " : "") + size + DefaultFont;
    var textWidth = this.context.measureText(text).width;
    this.DrawText(new Point(position.x - textWidth / 2, position.y), text, color, outlineColor, outline, this.context.font);
}

/**
 * Graph drawer.
 */


const lineDashTypes = [
    [],
    [4, 4],
    [12, 12],
    [16, 4, 4, 4],
];

// Common text position
const WeightTextCenter = 0,
    WeightTextUp = 1;

function BaseEdgeStyle() {
    this.baseStyles = [];
}

BaseEdgeStyle.prototype.GetStyle = function (baseStyle, object) {
    this.baseStyles.forEach(function (element) {
        var styleObject = globalApplication.GetStyle("edge", element, object);
        baseStyle = styleObject.GetStyle(baseStyle, object);
    });

    if (this.hasOwnProperty('weightText'))
        baseStyle.weightText = this.weightText;
    if (this.hasOwnProperty('strokeStyle'))
        baseStyle.strokeStyle = this.strokeStyle;
    if (this.hasOwnProperty('fillStyle'))
        baseStyle.fillStyle = this.fillStyle;
    if (this.hasOwnProperty('textPadding'))
        baseStyle.textPadding = this.textPadding;
    if (this.hasOwnProperty('textStrokeWidth'))
        baseStyle.textStrokeWidth = this.textStrokeWidth;
    if (this.hasOwnProperty('lineDash'))
        baseStyle.lineDash = this.lineDash;
    if (this.hasOwnProperty('additionalTextColor'))
        baseStyle.additionalTextColor = this.additionalTextColor;
    if (this.hasOwnProperty('weightPosition'))
        baseStyle.weightPosition = this.weightPosition;

    return this.FixNewFields(baseStyle);
}

BaseEdgeStyle.prototype.FixNewFields = function (style) {
    if (!style.hasOwnProperty('lineDash'))
        style.lineDash = 0;

    if (!style.hasOwnProperty('weightPosition'))
        style.weightPosition = WeightTextCenter;

    return style;
}

BaseEdgeStyle.prototype.Clear = function () {
    delete this.weightText;
    delete this.strokeStyle;
    delete this.fillStyle;
    delete this.textPadding;
    delete this.textStrokeWidth;
    delete this.lineDash;
    delete this.additionalTextColor;
    delete this.weightPosition;
}

BaseEdgeStyle.prototype.ShouldLoad = function (field) {
    return field != "baseStyles";
}

function CommonEdgeStyle() {
    BaseEdgeStyle.apply(this, arguments);

    this.strokeStyle = '#c7b7c7';
    this.weightText = '#f0d543';
    this.fillStyle = '#68aeba';
    this.textPadding = 4;
    this.textStrokeWidth = 2;
    this.lineDash = 0;
    this.additionalTextColor = '#c7b7c7';
    this.weightPosition = WeightTextCenter;
}

CommonEdgeStyle.prototype = Object.create(BaseEdgeStyle.prototype);

function CommonPrintEdgeStyle() {
    BaseEdgeStyle.apply(this, arguments);

    this.strokeStyle = '#000000';
    this.weightText = '#000000';
    this.fillStyle = '#FFFFFF';
    this.textPadding = 4;
    this.textStrokeWidth = 2;

    this.baseStyles.push("common");
}
CommonPrintEdgeStyle.prototype = Object.create(BaseEdgeStyle.prototype);

function SelectedEdgeStyle0() {
    BaseEdgeStyle.apply(this, arguments);

    this.strokeStyle = '#f0d543';
    this.weightText = '#f0d543';
    this.fillStyle = '#c7627a';

    this.baseStyles.push("common");
}
SelectedEdgeStyle0.prototype = Object.create(BaseEdgeStyle.prototype);

function SelectedEdgeStyle1() {
    BaseEdgeStyle.apply(this, arguments);

    this.strokeStyle = '#8FBF83';
    this.weightText = '#8FBF83';
    this.fillStyle = '#F9F9D5';

    this.baseStyles.push("selected");
}
SelectedEdgeStyle1.prototype = Object.create(BaseEdgeStyle.prototype);

function SelectedEdgeStyle2() {
    BaseEdgeStyle.apply(this, arguments);

    this.strokeStyle = '#8C4C86';
    this.weightText = '#8C4C86';
    this.fillStyle = '#253267';

    this.baseStyles.push("selected");
}
SelectedEdgeStyle2.prototype = Object.create(BaseEdgeStyle.prototype);


function SelectedEdgeStyle3() {
    BaseEdgeStyle.apply(this, arguments);

    this.strokeStyle = '#6188FF';
    this.weightText = '#6188FF';
    this.fillStyle = '#E97CF9';

    this.baseStyles.push("selected");
}
SelectedEdgeStyle3.prototype = Object.create(BaseEdgeStyle.prototype);


function SelectedEdgeStyle4() {
    BaseEdgeStyle.apply(this, arguments);

    this.strokeStyle = '#C6B484';
    this.weightText = '#C6B484';
    this.fillStyle = '#E0DEE1';

    this.baseStyles.push("selected");
}
SelectedEdgeStyle4.prototype = Object.create(BaseEdgeStyle.prototype);

function SelectedEdgePrintStyle() {
    BaseEdgeStyle.apply(this, arguments);

    this.strokeStyle = '#AAAAAA';
    this.weightText = '#000000';
    this.fillStyle = '#AAAAAA';

    this.baseStyles.push("printed");
}
SelectedEdgePrintStyle.prototype = Object.create(BaseEdgeStyle.prototype);

var DefaultSelectedEdgeStyles = [new SelectedEdgeStyle0(), new SelectedEdgeStyle1(),
new SelectedEdgeStyle2(), new SelectedEdgeStyle3(), new SelectedEdgeStyle4()];

var DefaultPrintSelectedEdgeStyles = [new SelectedEdgePrintStyle()];

function BaseEdgeDrawer(context, drawObjects) {
    if (drawObjects === undefined) {
        drawObjects = null;
    }

    this.context = context;

    this.drawObject = null;
    this.drawArc = null;
    this.startArrowDirection = null;
    this.finishArrowDirection = null;
    this.textCenterObject = null;
    this.getPointOnArc = null;

    if (drawObjects) {
        if (drawObjects.hasOwnProperty("drawObject"))
            this.drawObject = drawObjects.drawObject;
        if (drawObjects.hasOwnProperty("drawArc"))
            this.drawArc = drawObjects.drawArc;
        if (drawObjects.hasOwnProperty("startArrowDirection"))
            this.startArrowDirection = drawObjects.startArrowDirection;
        if (drawObjects.hasOwnProperty("finishArrowDirection"))
            this.finishArrowDirection = drawObjects.finishArrowDirection;
        if (drawObjects.hasOwnProperty("textCenterObject"))
            this.textCenterObject = drawObjects.textCenterObject;
        if (drawObjects.hasOwnProperty("getPointOnArc"))
            this.getPointOnArc = drawObjects.getPointOnArc;
    }
}

BaseEdgeDrawer.prototype.Draw = function (baseEdge, arcStyle) {
    if (this.drawObject && this.drawObject != this) {
        this.drawObject.Draw(baseEdge, arcStyle);
        return;
    }

    this.SetupStyle(baseEdge, arcStyle);

    var lengthArrow = Math.max(baseEdge.model.width * 4, 8);
    var widthArrow = Math.max(baseEdge.model.width * 2, 4);
    var position1 = baseEdge.vertex1.position;
    var position2 = baseEdge.vertex2.position;
    var direction = position1.subtract(position2);
    direction.normalize(1.0);
    var positions = baseEdge.GetEdgePositionsShift();

    var hasStartStyle = !position1.equals(position2) && baseEdge.GetStartEdgeStyle() != "";
    var hasFinishStyle = !position1.equals(position2) && baseEdge.GetFinishEdgeStyle() != "";

    var arcPos1 = positions[0];
    var arcPos2 = positions[1];

    if (hasStartStyle) {
        var dirArrow = this.GetStartArrowDirection(positions[0], positions[1], lengthArrow);
        arcPos1 = arcPos1.add(dirArrow.multiply(lengthArrow / 2));
    }

    if (hasFinishStyle) {
        var dirArrow = this.GetFinishArrowDirection(positions[0], positions[1], lengthArrow);
        arcPos2 = arcPos2.add(dirArrow.multiply(-lengthArrow / 2));
    }

    this.DrawArc(arcPos1, arcPos2, arcStyle);

    this.context.fillStyle = this.context.strokeStyle;
    this.context.lineWidth = 0;

    if (hasStartStyle) {
        this.DrawArrow(positions[0], this.GetStartArrowDirection(positions[0], positions[1], lengthArrow), lengthArrow, widthArrow);
    }
    if (hasFinishStyle) {
        this.DrawArrow(positions[1], this.GetFinishArrowDirection(positions[0], positions[1], lengthArrow), lengthArrow, widthArrow);
    }

    this.SetupStyle(baseEdge, arcStyle);

    if (arcStyle.weightPosition == WeightTextCenter) {
        if (baseEdge.GetText().length > 0) {
            this.DrawWeight(positions[0], positions[1], baseEdge.GetText(), arcStyle, false);
        }

        if (baseEdge.GetUpText().length > 0) {
            this.DrawUpText(positions[0], positions[1], baseEdge.GetUpText(), arcStyle, false, arcStyle.additionalTextColor, baseEdge.model.width / 2 + 20, null);
        }
    }
    else if (arcStyle.weightPosition == WeightTextUp) {
        if (baseEdge.GetText().length > 0) {
            this.DrawUpText(positions[0], positions[1], baseEdge.GetText(), arcStyle, false, arcStyle.weightText, baseEdge.model.width / 2 + 10, "16px");
        }

        if (baseEdge.GetUpText().length > 0) {
            this.DrawUpText(positions[0], positions[1], baseEdge.GetUpText(), arcStyle, false, arcStyle.additionalTextColor, - baseEdge.model.width / 2 - 15, null);
        }
    }
}


BaseEdgeDrawer.prototype.SetupStyle = function (baseEdge, arcStyle) {
    this.context.lineWidth = baseEdge.model.width;
    this.context.strokeStyle = arcStyle.strokeStyle;
    this.context.fillStyle = arcStyle.fillStyle;
    this.model = baseEdge.model;
    this.style = arcStyle;
}

BaseEdgeDrawer.prototype.DrawArc = function (position1, position2, arcStyle) {
    if (this.drawArc && this.drawArc != this) {
        this.drawArc.DrawArc(position1, position2, arcStyle);
        return;
    }

    this.context.setLineDash(lineDashTypes[arcStyle.lineDash]);
    if (position1.equals(position2)) {
        this.context.beginPath();
        this.context.arc(position1.x - Math.cos(this.model.GetLoopShiftAngel()) * this.model.GetLoopSize(),
            position1.y - Math.sin(this.model.GetLoopShiftAngel()) * this.model.GetLoopSize(), this.model.GetLoopSize(), 0, 2 * Math.PI);
        this.context.stroke();
    }
    else {
        this.context.beginPath();
        this.context.moveTo(position1.x, position1.y);
        this.context.lineTo(position2.x, position2.y);
        this.context.stroke();
    }
    this.context.setLineDash([]);
}

BaseEdgeDrawer.prototype.DrawWeight = function (position1, position2, text, arcStyle, hasPair) {
    var centerPoint = this.GetTextCenterPoint(position1, position2, hasPair, arcStyle);

    this.context.font = "bold 16px sans-serif";
    this.context.textBaseline = "middle";
    this.context.lineWidth = arcStyle.textStrokeWidth;
    this.context.fillStyle = arcStyle.fillStyle;

    var widthText = this.context.measureText(text).width;

    this.context.beginPath();
    this.context.rect(centerPoint.x - widthText / 2 - arcStyle.textPadding / 2,
        centerPoint.y - 8 - arcStyle.textPadding / 2,
        widthText + arcStyle.textPadding, 16 + arcStyle.textPadding);
    this.context.closePath();
    this.context.fill();
    this.context.stroke();

    this.context.fillStyle = arcStyle.weightText;
    this.context.fillText(text, centerPoint.x - widthText / 2, centerPoint.y);
}

BaseEdgeDrawer.prototype.DrawUpText = function (position1, position2, text, arcStyle, hasPair, color, offset, fontSize) {
    var centerPoint = this.GetTextCenterPoint(position1, position2, hasPair, arcStyle);

    this.context.font = fontSize == null ? "bold 12px sans-serif" : "bold " + fontSize + " sans-serif";
    this.context.textBaseline = "middle";

    var widthText = this.context.measureText(text).width;

    this.context.fillStyle = color;

    var vectorEdge = new Point(position2.x - position1.x, position2.y - position1.y);
    var angleRadians = Math.atan2(vectorEdge.y, vectorEdge.x);
    if (angleRadians > Math.PI / 2 || angleRadians < -Math.PI / 2) {
        vectorEdge = new Point(position1.x - position2.x, position1.y - position2.y);
        angleRadians = Math.atan2(vectorEdge.y, vectorEdge.x);
    }
    var normalize = vectorEdge.normal().normalizeCopy(offset);
    this.context.save();
    this.context.translate(centerPoint.x - normalize.x, centerPoint.y - normalize.y);
    this.context.rotate(angleRadians);
    this.context.textAlign = "center";

    this.context.fillText(text, 0, 0);

    this.context.restore();
}

BaseEdgeDrawer.prototype.DrawArrow = function (position, direction, length, width) {
    var normal = direction.normal();

    var pointOnLine = position.subtract(direction.multiply(length));
    var point1 = pointOnLine.add(normal.multiply(width));
    var point2 = pointOnLine.add(normal.multiply(-width));

    this.context.beginPath();
    this.context.moveTo(position.x, position.y);
    this.context.lineTo(point1.x, point1.y);
    this.context.lineTo(point2.x, point2.y);
    this.context.lineTo(position.x, position.y);
    this.context.closePath();
    this.context.fill();
}

BaseEdgeDrawer.prototype.GetStartArrowDirection = function (position1, position2, lengthArrow) {
    if (this.startArrowDirection && this.startArrowDirection != this) {
        return this.startArrowDirection.GetStartArrowDirection(position1, position2, lengthArrow);
    }

    var direction = position1.subtract(position2);
    direction.normalize(1.0);
    return direction;
}

BaseEdgeDrawer.prototype.GetFinishArrowDirection = function (position1, position2, lengthArrow) {
    if (this.finishArrowDirection && this.finishArrowDirection != this) {
        return this.finishArrowDirection.GetFinishArrowDirection(position1, position2, lengthArrow);
    }

    var direction = position2.subtract(position1);
    direction.normalize(1.0);
    return direction;
}

BaseEdgeDrawer.prototype.GetTextCenterPoint = function (position1, position2, hasPair, arcStyle) {
    if (this.textCenterObject && this.textCenterObject != this) {
        return this.textCenterObject.GetTextCenterPoint(position1, position2, hasPair, arcStyle);
    }

    var textShift = Math.min(12 / position1.subtract(position2).length(), 0.4);
    var centerPoint = Point.interpolate(position1, position2, 0.5);
    if (position1.equals(position2)) {
        let sinVal = Math.sin(this.model.GetLoopShiftAngel());
        let cosVal = Math.cos(this.model.GetLoopShiftAngel());
        centerPoint.x = centerPoint.x - cosVal * this.model.GetLoopSize();
        centerPoint.y = centerPoint.y - (sinVal + Math.sign(sinVal) * 1.0) * this.model.GetLoopSize();
    }

    return centerPoint;
}

BaseEdgeDrawer.prototype.GetPointOnArc = function (position1, position2, percent) {
    if (this.getPointOnArc && this.getPointOnArc != this) {
        return this.getPointOnArc.GetPointOnArc(position1, position2, percent);
    }

    return Point.interpolate(position1, position2, percent);
}

function ProgressArcDrawer(context, baseDrawer, progress) {
    this.context = context;
    this.baseDrawer = baseDrawer;
    this.progress = progress;
}

ProgressArcDrawer.prototype = Object.create(BaseEdgeDrawer.prototype);


ProgressArcDrawer.prototype.Draw = function (baseEdge, arcStyle) {
    this.baseDrawer.Draw(baseEdge, arcStyle);

    this.context.lineWidth = 10;

    var positions = baseEdge.GetEdgePositionsShift();
    var progressSize = 10;

    if (positions[0].equals(positions[1])) {
        var sizeInRadian = progressSize / (2 * Math.PI * this.baseDrawer.model.GetLoopSize()) * 6;

        this.context.beginPath();
        this.context.arc(positions[0].x - Math.cos(this.baseDrawer.model.GetLoopShiftAngel()) * this.baseDrawer.model.GetLoopSize(),
            positions[0].y - Math.sin(this.baseDrawer.model.GetLoopShiftAngel()) * this.baseDrawer.model.GetLoopSize(), this.baseDrawer.model.GetLoopSize(), this.progress * 2 * Math.PI, this.progress * 2 * Math.PI + sizeInRadian);
        this.context.stroke();
    }
    else {
        var startPosition = this.baseDrawer.GetPointOnArc(positions[0], positions[1], this.progress);
        var vectorOffset = positions[0].subtract(positions[1]).normalizeCopy(progressSize);
        var finishPosition = startPosition.add(vectorOffset);

        this.context.beginPath();
        this.context.moveTo(startPosition.x, startPosition.y);
        this.context.lineTo(finishPosition.x, finishPosition.y);
        this.context.stroke();
    }
}


function CurvedArcDrawer(context, model) {
    this.context = context;
    this.model = model;
}

CurvedArcDrawer.prototype = Object.create(BaseEdgeDrawer.prototype);

CurvedArcDrawer.prototype.DrawArc = function (position1, position2, arcStyle) {
    this.context.setLineDash(lineDashTypes[arcStyle.lineDash]);
    if (position1.equals(position2)) {
        this.context.beginPath();
        this.context.arc(position1.x - Math.cos(this.model.GetLoopShiftAngel()) * this.model.GetLoopSize(),
            position1.y - Math.sin(this.model.GetLoopShiftAngel()) * this.model.GetLoopSize(), this.model.GetLoopSize(), 0, 2 * Math.PI);
        this.context.closePath();
        this.context.stroke();
    }
    else {
        var points = this.model.GetBezierPoints(position1, position2);
        var firstBezierPoint = points[0];
        var secondBezierPoint = points[1];

        this.context.beginPath();
        this.context.moveTo(position1.x, position1.y);
        this.context.bezierCurveTo(firstBezierPoint.x, firstBezierPoint.y, secondBezierPoint.x, secondBezierPoint.y, position2.x, position2.y);
        this.context.stroke();
    }
    this.context.setLineDash([]);
}

CurvedArcDrawer.prototype.GetStartArrowDirection = function (position1, position2, lengthArrow) {
    var dist = position1.distance(position2);
    var direction = position1.subtract(this.model.GetCurvePoint(position1, position2, lengthArrow / dist));
    direction.normalize(1.0);
    return direction;
}

CurvedArcDrawer.prototype.GetFinishArrowDirection = function (position1, position2, lengthArrow) {
    var dist = position1.distance(position2);
    var direction = position2.subtract(this.model.GetCurvePoint(position1, position2, 1.0 - lengthArrow / dist));
    direction.normalize(1.0);
    return direction;
}

CurvedArcDrawer.prototype.GetTextCenterPoint = function (position1, position2, hasPair, arcStyle) {
    var centerPoint = this.model.GetCurvePoint(position1, position2, 0.5)
    if (position1.equals(position2)) {
        let sinVal = Math.sin(this.model.GetLoopShiftAngel());
        let cosVal = Math.cos(this.model.GetLoopShiftAngel());
        centerPoint.x = centerPoint.x - cosVal * this.model.GetLoopSize();
        centerPoint.y = centerPoint.y - (sinVal + Math.sign(sinVal) * 1.0) * this.model.GetLoopSize();
    }

    return centerPoint;
}

CurvedArcDrawer.prototype.GetPointOnArc = function (position1, position2, percent) {
    return this.model.GetCurvePoint(position1, position2, percent);
}
/**
 * Graph drawer.
 */


function CommonBackgroundStyle() {
    this.commonColor = '#ffffff';
    this.commonOpacity = 1.0;
}

CommonBackgroundStyle.prototype.Clear = function () {
    delete this.commonColor;
    delete this.commonOpacity;
}

CommonBackgroundStyle.prototype.ShouldLoad = function (field) {
    return true;
}

PrintBackgroundStyle.prototype = Object.create(CommonBackgroundStyle.prototype);

function PrintBackgroundStyle() {
    CommonBackgroundStyle.apply(this, arguments);

    this.commonColor = '#ffffff';
    this.commonOpacity = 1.0;
}

function BaseBackgroundDrawer(context) {
    this.context = context;
}

BaseBackgroundDrawer.prototype.Draw = function (style, width, height, position, scale) {
    var context = this.context;

    var rect = new Rect(position, position.add(new Point(width / scale, height / scale)));

    context.clearRect(-rect.minPoint.x, -rect.minPoint.y, rect.size().x + 1, rect.size().y + 1);

    if (style.commonOpacity > 0.0) {
        context.globalAlpha = style.commonOpacity;
        context.fillStyle = style.commonColor;
        context.fillRect(-rect.minPoint.x, -rect.minPoint.y, rect.size().x + 1, rect.size().y + 1);
        context.globalAlpha = 1.0;
    }
}/**
 * File for algorithms.
 *
 */

// Return list of 'vertex = [connected vertices]'
function getVertexToVertexArray(graph, ignoreDirection) {
    res = {};

    for (var i = 0; i < graph.edges.length; i++) {
        edge = graph.edges[i];
        if (!res.hasOwnProperty(edge.vertex1.id)) {
            res[edge.vertex1.id] = [];
        }
        res[edge.vertex1.id].push(edge.vertex2);
        if (!edge.isDirect || ignoreDirection) {
            if (!res.hasOwnProperty(edge.vertex2.id)) {
                res[edge.vertex2.id] = [];
            }

            res[edge.vertex2.id].push(edge.vertex1);
        }
    }

    return res;
}

// Global array of all algorithms.
var g_Algorithms = [];
var g_AlgorithmIds = [];

// Call this function to register your factory algorithm.
function RegisterAlgorithm(factory) {
    g_Algorithms.push(factory);
    g_AlgorithmIds.push(factory(null).getId());
    console.log("g_Algorithms", g_Algorithms);
}

// Base algorithm class.
function BaseAlgorithm(graph, app) {
    this.graph = graph;
    this.app = app;
}

// @return name of algorithm. For now we supports only 2 locals: "ru" and "en"
BaseAlgorithm.prototype.getName = function (local) {
    return "unknown_name_" + local;
}

// @return id of algorithm. Please use format: "your id"."algorithm id". Ex. "OlegSh.ConnectedComponent"
BaseAlgorithm.prototype.getId = function () {
    return "unknown.unknown";
}

// @return message for user.
BaseAlgorithm.prototype.getMessage = function (local) {
    return "unknown_message_" + local;
}

// calls when user select vertex.
// @return true if you allow to select this object or false.
BaseAlgorithm.prototype.selectVertex = function (vertex) {
    console.log("BaseAlgorithm.prototype.selectVertex", vertex);

    return false;
}

// calls when user select edge.
// @return true if you allow to select this object or false.
BaseAlgorithm.prototype.selectEdge = function (edge) {
    console.log("BaseAlgorithm.prototype.selectEdge", edge);

    return false;
}

// user click to workspace.
// @return true if you allow to deselect all
BaseAlgorithm.prototype.deselectAll = function () {
    return true;
}

// get result of algorithm.
// If result if not ready, please return null.
// It will be called after each user action.
// Please return true, if you done.
BaseAlgorithm.prototype.result = function (resultCallback) {
    return null;
}

// If you no need to get feedback from user, return true.
// In this case result will calls once.
BaseAlgorithm.prototype.instance = function () {
    return true;
}

// @return false, if you change up text and do not want to restore it back.
BaseAlgorithm.prototype.needRestoreUpText = function () {
    return true;
}

// @return true, if you change restore graph after use.
BaseAlgorithm.prototype.wantRestore = function () {
    return false;
}

// calls this method if wantRestore return true.
BaseAlgorithm.prototype.restore = function () {
}

// @return 0, if object is not selected, in other case return groupe of selection.
BaseAlgorithm.prototype.getObjectSelectedGroup = function (object) {
    return 0;
}

// This method is called, when messages was updated on html page.
BaseAlgorithm.prototype.messageWasChanged = function () { }

// Algorithm priority in menu
BaseAlgorithm.prototype.getPriority = function () {
    return 0;
}

// Algorithm support multi graph
BaseAlgorithm.prototype.IsSupportMultiGraph = function () {
    return false;
}

BaseAlgorithm.prototype.getCategory = function () {
    return 0;
}

/**
 * Default handler.
 * Select using mouse, drag.
 *
 */
function BaseAlgorithmEx(graph, app) {
    BaseAlgorithm.apply(this, arguments);
}

// inheritance.
BaseAlgorithmEx.prototype = Object.create(BaseAlgorithm.prototype);

BaseAlgorithmEx.prototype.CalculateAlgorithm = function (algorithmName, otherParams, resultCallback, ignoreSeparateNodes = false) {
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1")
        console.log(algorithmName + " " + otherParams);

    var graph = this.graph;
    var ignoreNodes = {};

    if (ignoreSeparateNodes)
        for (var i = 0; i < graph.vertices.length; i++)
            if (!graph.HasConnectedNodes(graph.vertices[i]))
                ignoreNodes[graph.vertices[i].id] = 1;

    var creator = new GraphMLCreator(graph.vertices, graph.edges, ignoreNodes);
    var pathObjects = [];
    var properties = {};
    var result = [];

    var xml = creator.GetXMLString();
    console.log(xml);

    var processResult = function (msg) {
        console.log("====================== processResult ======================");
        console.log(msg);
        $('#debug').text(msg);
        xmlDoc = $.parseXML(msg);
        var $xml = $(xmlDoc);

        $results = $xml.find("result");

        $results.each(function () {
            $values = $(this).find("value");

            $values.each(function () {
                var type = $(this).attr('type');
                var value = $(this).text();
                var res = {};
                res.type = type;
                res.value = value;
                result.push(res);
            });
        });

        $nodes = $xml.find("node");

        $nodes.each(function () {
            var id = $(this).attr('id');
            $data = $(this).find("data");
            $data.each(function () {
                if ("hightlightNode" == $(this).attr('key') && $(this).text() == "1") {
                    pathObjects.push(graph.FindVertex(id));
                }
                else {
                    if (!properties[id]) {
                        properties[id] = {};
                    }
                    properties[id][$(this).attr('key')] = $(this).text();
                }
            });
        });

        $edges = $xml.find("edge");

        $edges.each(function () {
            var source = $(this).attr('source');
            var target = $(this).attr('target');
            var edge = graph.FindEdge(source, target);
            if (typeof $(this).attr('id') !== 'undefined') {
                edge = graph.FindEdgeById($(this).attr('id'));
            }
            pathObjects.push(edge);

            $data = $(this).find("data");
            $data.each(function () {
                if (!properties[edge.id]) {
                    properties[edge.id] = {};
                }
                properties[edge.id][$(this).attr('key')] = $(this).text();
            });
        });

        console.log("pathObjects", pathObjects);
        console.log("properties", properties);
        console.log("result", result);
        console.log("====================== end ======================");

        resultCallback(pathObjects, properties, result);
    };

    if (this.app.isSupportEmscripten()) {
        console.log("Use Emscripten");
        var delimiter = "<s\\emscript_split\\s>";
        var processData = algorithmName + delimiter + xml +
            delimiter + "report" + delimiter + "xml";
        otherParams.forEach((param) => processData += delimiter + param.name + delimiter + param.value);
        var res = this.app.processEmscripten(processData);
        processResult(res);
    } else {
        console.log("Use new CGI");
        var queryString = algorithmName + "=cgiInput&report=xml";
        otherParams.forEach((param) => queryString += "&" + param.name + "=" + param.value);
        $.ajax({
            type: "POST",
            url: "/" + SiteDir + "cgi-bin/GraphCGI.exe?" + queryString,
            data: xml,
            dataType: "text",
        })
            .done(function (msg) {
                processResult(msg);
            });
    }

    return true;
}

BaseAlgorithmEx.prototype.GetNodesPath = function (array, start, count) {
    var res = [];
    for (var index = start; index < start + count; index++) {
        if (array[index].type == 4) {
            res.push(array[index].value);
        }
    }
    return res;
}

BaseAlgorithmEx.prototype.GetNodesEdgesPath = function (array, start, count) {
    var res = [];
    for (var index = start; index < start + count; index++) {
        if (array[index].type == 4 || array[index].type == 5) {
            res.push(array[index].value);
        }
    }
    return res;
}


/**
 *
 *  This event handlers.
 *
 *
 */

/**
 * Base Handler.
 *
 */

function BaseHandler(app) {
    console.log("lộc log baseHandler")
    this.app = app;
    this.app.setRenderPath([]);

    if (this.removeStack) {
        this.removeContextMenu();
    }
    this.contextMenuObject = null;
    this.contextMenuPoint = null;
    //this.app.ClearUndoStack();
}

// Need redraw or nor.
BaseHandler.prototype.needRedraw = false;
BaseHandler.prototype.objects = [];
BaseHandler.prototype.message = "";


BaseHandler.prototype.IsNeedRedraw = function (object) {
    return this.needRedraw;
}

BaseHandler.prototype.RestRedraw = function (object) {
    this.needRedraw = false;
}

BaseHandler.prototype.SetObjects = function (objects) {
    this.objects = objects;
}

BaseHandler.prototype.GetSelectedGraph = function (pos) {
    // Selected Graph.
    var res = null;
    for (var i = 0; i < this.app.graph.vertices.length; i++) {
        if (this.app.graph.vertices[i].HitTest(pos)) {
            // Select last of them.
            res = this.app.graph.vertices[i];
        }
    }


    return res;
}

BaseHandler.prototype.GetSelectedArc = function (pos) {
    // Selected Arc.
    for (var i = 0; i < this.app.graph.edges.length; i++) {
        var edge = this.app.graph.edges[i];

        if (edge.HitTest(new Point(pos.x, pos.y)))
            return edge;
    }

    return null;
}

BaseHandler.prototype.GetSelectedObject = function (pos) {
    var graphObject = this.GetSelectedGraph(pos);
    if (graphObject) {
        return graphObject;
    }

    var arcObject = this.GetSelectedArc(pos);
    if (arcObject) {
        return arcObject;
    }

    return null;
}


BaseHandler.prototype.GetUpText = function (object) {
    return "";
}


BaseHandler.prototype.GetMessage = function () {
    return this.message;
}


BaseHandler.prototype.MouseMove = function (pos) { }

BaseHandler.prototype.MouseDown = function (pos) { }

BaseHandler.prototype.MouseUp = function (pos) { }

BaseHandler.prototype.GetSelectedGroup = function (object) {
    return 0;
}

BaseHandler.prototype.InitControls = function () {
    console.log("lộc log InitControls");


    var vertex1Text = document.getElementById("Vertex1");

    if (vertex1Text) {
        var handler = this;
        vertex1Text.onchange = function () {
            for (var i = 0; i < handler.app.graph.vertices.length; i++) {
                if (handler.app.graph.vertices[i].mainText == vertex1Text.value) {
                    handler.SelectFirstVertexMenu(vertex1Text, handler.app.graph.vertices[i]);
                    userAction("selectVertex1_menu");
                    break;
                }
            }
        };

        this.UpdateFirstVertexMenu(vertex1Text);
    }

    var vertex2Text = document.getElementById("Vertex2");

    if (vertex2Text) {
        var handler = this;
        vertex2Text.onchange = function () {
            console.log("2", vertex2Text.value);
            for (var i = 0; i < handler.app.graph.vertices.length; i++) {
                if (handler.app.graph.vertices[i].mainText == vertex2Text.value) {
                    handler.SelectSecondVertexMenu(vertex2Text, handler.app.graph.vertices[i]);
                    userAction("selectVertex2_menu");
                    break;
                }
            }
        };

        this.UpdateSecondVertexMenu(vertex2Text);
    }
}

BaseHandler.prototype.GetNodesPath = function (array, start, count) {
    var res = [];
    for (var index = start; index < start + count; index++) {
        res.push(this.app.graph.FindVertex(array[index].value));
    }
    return res;
}

BaseHandler.prototype.RestoreAll = function () {
    console.log("buoc 5: BaseHandler.prototype.RestoreAll")
}

BaseHandler.prototype.GetSelectVertexMenu = function (menuName) {
    var res = "<input list=\"vertexList" + menuName + "\" id=\"" + menuName + "\" class=\"SelectVertexInput\"/>" +
        "<datalist id=\"vertexList" + menuName + "\">";

    for (var i = 0; i < this.app.graph.vertices.length; i++) {
        res = res + "<option value=\"" + this.app.graph.vertices[i].mainText + "\"/>";
    }

    return res + "</datalist>";
}

BaseHandler.prototype.GetSelect2VertexMenu = function () {
    return "<span style=\"float:right\">" +
        this.GetSelectVertexMenu("Vertex1") + " &rarr; " + this.GetSelectVertexMenu("Vertex2") + "</span>";
}

BaseHandler.prototype.SelectFirstVertexMenu = function (vertex1Text, vertex) { }

BaseHandler.prototype.UpdateFirstVertexMenu = function () { }

BaseHandler.prototype.SelectSecondVertexMenu = function (vertex2Text, vertex) { }

BaseHandler.prototype.UpdateSecondVertexMenu = function () { }

BaseHandler.prototype.GetSelectedVertex = function () {
    return null;
}

BaseHandler.prototype.addContextMenu = function () {
    console.log("bước 3.5: addContextMenu");
    var $contextMenu = $("#contextMenu");

    var handler = this;

    $("#Context_Delete").click(function () {
        console.log("lộc log Context_delete clicked");
        if (handler.contextMenuObject != null) {
            handler.app.PushToStack("DeleteObject");
            handler.app.DeleteObject(handler.contextMenuObject);
            handler.app.redrawGraph();
            userAction("DeleteObject_contextMenu");
        }
    });

    $("#Context_Rename").click(function () {
        if (handler.contextMenuObject != null) {
            var callback = function (enumType) {
                handler.RenameVertex(enumType.GetVertexText(0), handler.contextMenuObject);
                userAction("RenameVertex_contextMenu");
            };
            var customEnum = new TextEnumVerticesCustom(handler.app);
            customEnum.ShowDialog(callback, g_rename, g_renameVertex, handler.contextMenuObject.mainText);
        }
    });

    $("#Context_Connect").click(function () {
        if (handler.contextMenuObject != null && handler.GetSelectedVertex() != null) {
            var addFunc = function (firstVertex, secondVertex, direct) {
                handler.app.CreateNewArc(firstVertex, secondVertex, direct,
                    document.getElementById('EdgeWeight').value,
                    $("#RadiosReplaceEdge").prop("checked"),
                    document.getElementById('EdgeLable').value);
                handler.app.redrawGraph();
            }
            handler.ShowCreateEdgeDialog(handler.GetSelectedVertex(), handler.contextMenuObject, addFunc);
        }
    });

    $("#Context_Delete_Edge").click(function () {
        if (handler.contextMenuObject != null) {
            handler.app.PushToStack("DeleteObject");
            handler.app.DeleteObject(handler.contextMenuObject);
            handler.app.redrawGraph();
            userAction("DeleteObject_contextMenu");
        }
    });

    $("#Context_Edit_Edge").click(function () {
        if (handler.contextMenuObject != null) {
            handler.ShowEditEdgeDialog(handler.contextMenuObject);
        }
    });

    $("#Context_Add_Vertex").click(function () {
        console.log("lộc log Context_Add_Vertex clicked");
        handler.app.PushToStack("Add");
        console.log("x = ", handler.contextMenuPoint.x);
        console.log("y = ", handler.contextMenuPoint.y);
        handler.app.CreateNewGraph(handler.contextMenuPoint.x, handler.contextMenuPoint.y);
        handler.app.redrawGraph();
    });

    $("#Context_Back_Color").click(function () {
        var setupBackgroundStyle = new SetupBackgroundStyle(handler.app);
        setupBackgroundStyle.show();
    });

    $("body").on("contextmenu", "canvas", function (e) {
        handler.contextMenuPoint = handler.app.getMousePos(handler.app.canvas, e);
        handler.contextMenuObject = handler.GetSelectedObject(handler.contextMenuPoint);
        if (handler.contextMenuObject instanceof BaseVertex) {
            $("#edgeContextMenu").hide();
            $("#backgroundContextMenu").hide();
            $("#vertexContextMenu").show();
            if (handler.GetSelectedVertex() == null) {
                $("#Context_Connect").hide();
            } else {
                $("#Context_Connect").show();
            }
        } else if (handler.contextMenuObject instanceof BaseEdge) {
            $("#vertexContextMenu").hide();
            $("#backgroundContextMenu").hide();
            $("#edgeContextMenu").show();
        } else {
            $("#vertexContextMenu").hide();
            $("#edgeContextMenu").hide();
            $("#backgroundContextMenu").show();
        }

        $contextMenu.css({
            display: "block",
            left: e.offsetX,
            top: e.offsetY
        });
        return false;
    });

    $("body").click(function () {
        $contextMenu.hide();
    });
}

BaseHandler.prototype.removeContextMenu = function () {
    $("body").off("contextmenu");
    $("#Context_Delete").off("click");
    $("#Context_Rename").off("click");
    $("#Context_Connect").off("click");
    $("#Context_Delete_Edge").off("click");
    $("#Context_Edit_Edge").off("click");
    $("#Context_Add_Vertex").off("click");
    $("#Context_Back_Color").off("click");
}

BaseHandler.prototype.RenameVertex = function (text, object) {
    if (object != null && (object instanceof BaseVertex)) {
        this.app.PushToStack("RenameVertex");
        object.mainText = text;
        this.app.redrawGraph();
    }
}

BaseHandler.prototype.ShowCreateEdgeDialog = function (firstVertex, secondVertex, addEdgeCallBack) {
    if (!this.app.graph.isMulti()) {
        var hasEdge = this.app.graph.FindEdgeAny(firstVertex.id, secondVertex.id);
        var hasReverseEdge = this.app.graph.FindEdgeAny(secondVertex.id, firstVertex.id);

        if (hasEdge == null && hasReverseEdge == null) {
            $("#RadiosReplaceEdge").prop("checked", true);
            $("#NewEdgeAction").hide();
        }
        else {
            $("#NewEdgeAction").show();
        }
    }
    else {
        $("#RadiosAddEdge").prop("checked", true);
        $("#NewEdgeAction").hide();
    }

    var dialogButtons = {};
    var handler = this;

    $("#CheckSaveDefaultEdge").prop("checked", false);
    $("#defaultEdgeDialogBlock").show();

    dialogButtons[g_orintEdge] = function () {
        handler.app.PushToStack("Connect");
        addEdgeCallBack(firstVertex, secondVertex, true);
        //handler.AddNewEdge(selectedObject, true);	                    
        $(this).dialog("close");
    };
    dialogButtons[g_notOrintEdge] = function () {
        handler.app.PushToStack("Connect");
        addEdgeCallBack(firstVertex, secondVertex, false);
        //handler.AddNewEdge(selectedObject, false);                    
        $(this).dialog("close");
    };

    var edgePresets = this.app.GetEdgePresets();
    var presetsStr = "<span onClick=\"document.getElementById('EdgeWeight').value='" + g_DefaultWeightPreset
        + "'; document.getElementById('EdgeWeightSlider').value='" + g_DefaultWeightPreset
        + "';\" style=\"cursor: pointer\" class=\"defaultWeigth\">" + g_DefaultWeightPreset + "</span>";

    for (var i = 0; i < edgePresets.length; i++) {
        var edgePreset = edgePresets[i];
        presetsStr += "<span onClick=\"document.getElementById('EdgeWeight').value='" + edgePreset
            + "'; document.getElementById('EdgeWeightSlider').value=" + edgePreset
            + ";\" style=\"cursor: pointer\" class=\"defaultWeigth\">" + edgePreset + "</span>";
    }
    document.getElementById("EdgesPresets").innerHTML = presetsStr;
    document.getElementById('EdgeLable').value = "";

    $("#addEdge").dialog({
        resizable: false,
        height: "auto",
        width: "auto",
        modal: true,
        title: g_addEdge,
        buttons: dialogButtons,
        dialogClass: 'EdgeDialog',
        open: function () {
            $(this).off('submit').on('submit', function () {
                return false;
            });

            // Focues weight
            setTimeout(function () {
                const weightInput = document.getElementById('EdgeWeight');
                if (weightInput) {
                    weightInput.focus();
                    weightInput.select();
                }
            }, 0);
        }
    });
}

BaseHandler.prototype.ShowEditEdgeDialog = function (edgeObject) {
    var dialogButtons = {};

    var handler = this;

    dialogButtons[g_save] = function () {
        handler.app.PushToStack("ChangeEdge");

        edgeObject.SetWeight(document.getElementById('EdgeWeight').value);
        edgeObject.SetUpText(document.getElementById('EdgeLable').value);

        handler.needRedraw = true;
        handler.app.redrawGraph();

        userAction("ChangeWeight");
        $(this).dialog("close");
    };

    document.getElementById('EdgeWeight').value = edgeObject.useWeight ? edgeObject.weight : g_noWeight;
    document.getElementById('EdgeWeightSlider').value = edgeObject.useWeight ? edgeObject.weight : 0;

    var edgePresets = handler.app.GetEdgePresets();
    var presetsStr = "<span onClick=\"document.getElementById('EdgeWeight').value='" + g_DefaultWeightPreset + "'; document.getElementById('EdgeWeightSlider').value='" +
        g_DefaultWeightPreset + "';\" style=\"cursor: pointer\" class=\"defaultWeigth\">" + g_DefaultWeightPreset + "</span>";

    for (var i = 0; i < edgePresets.length; i++) {
        var edgePreset = edgePresets[i];
        presetsStr += "<span onClick=\"document.getElementById('EdgeWeight').value='" + edgePreset + "'; document.getElementById('EdgeWeightSlider').value=" +
            edgePreset + ";\" style=\"cursor: pointer\" class=\"defaultWeigth\">" + edgePreset + "</span>";
    }
    document.getElementById("EdgesPresets").innerHTML = presetsStr;
    document.getElementById('EdgeLable').value = edgeObject.upText;

    $("#CheckSaveDefaultEdge").prop("checked", false);

    $("#defaultEdgeDialogBlock").hide();

    $("#addEdge").dialog({
        resizable: false,
        height: "auto",
        width: "auto",
        modal: true,
        title: g_editWeight,
        buttons: dialogButtons,
        dialogClass: 'EdgeDialog',
        open: function () {
            $(handler).off('submit').on('submit', function () {
                return false;
            });
        }
    });
}

/**
 * Default handler.
 * Select using mouse, drag.
 *
 */
function DefaultHandler(app) {
    this.removeStack = true;
    BaseHandler.apply(this, arguments);
    this.message = g_textsSelectAndMove + " <span class=\"hidden-phone\">" + g_selectGroupText + "</span>" + " <span class=\"hidden-phone\">" + g_useContextMenuText + "</span>";
    this.selectedObjects = [];
    this.dragObject = null;
    this.selectedObject = null;
    this.prevPosition = null;
    this.groupingSelect = false;
    this.selectedLogRect = false;
    this.selectedLogCtrl = false;
    this.saveUndo = false;

    this.addContextMenu();
}

// inheritance.
DefaultHandler.prototype = Object.create(BaseHandler.prototype);
// Is pressed
DefaultHandler.prototype.pressed = false;
// Curve change value.
DefaultHandler.prototype.curveValue = 0.1;

DefaultHandler.prototype.GetSelectedVertex = function () {
    return (this.selectedObject instanceof BaseVertex) ? this.selectedObject : null;
}

DefaultHandler.prototype.MouseMove = function (pos) {
    if (this.dragObject) {
        if (!this.saveUndo) {
            this.app.PushToStack("Move");
            this.saveUndo = true;
        }

        this.dragObject.position.x = pos.x;
        this.dragObject.position.y = pos.y;
        this.needRedraw = true;
    }
    else if (this.selectedObjects.length > 0 && this.pressed && !this.groupingSelect) {
        if (!this.saveUndo) {
            this.app.PushToStack("Move");
            this.saveUndo = true;
        }

        var offset = (new Point(pos.x, pos.y)).subtract(this.prevPosition);
        for (var i = 0; i < this.selectedObjects.length; i++) {
            var object = this.selectedObjects[i];
            if (object instanceof BaseVertex) {
                object.position = object.position.add(offset);
            }
        }
        this.prevPosition = pos;
        this.needRedraw = true;
    }
    else if (this.pressed) {
        if (this.groupingSelect) {
            // Rect select.
            var newPos = new Point(pos.x, pos.y);
            this.app.SetSelectionRect(new Rect(newPos.min(this.prevPosition), newPos.max(this.prevPosition)));
            this.SelectObjectInRect(this.app.GetSelectionRect());
            this.needRedraw = true;
            if (!this.selectedLogRect) {
                userAction("GroupSelected.SelectRect");
                this.selectedLogRect = true;
            }
        }
        else {
            // Move work space
            this.app.onCanvasMove((new Point(pos.x, pos.y)).subtract(this.prevPosition).multiply(this.app.canvasScale));
            this.needRedraw = true;
        }
    }
}

DefaultHandler.prototype.MouseDown = function (pos) {
    this.dragObject = null;
    var selectedObject = this.GetSelectedObject(pos);
    var severalSelect = g_ctrlPressed;

    if (selectedObject == null || (!severalSelect && !this.selectedObjects.includes(selectedObject))) {
        this.selectedObject = null;
        this.selectedObjects = [];
        this.groupingSelect = g_ctrlPressed;
    }
    console.log("this.selectedObjects -----------", this.selectedObjects)

    if ((severalSelect || this.selectedObjects.includes(selectedObject)) && (this.selectedObjects.length > 0 || this.selectedObject != null) && selectedObject != null) {
        if (this.selectedObjects.length == 0) {
            console.log("this.selectedObject -----------1", this.selectedObject)
            console.log("selectedObject -----------1", selectedObject)
            console.log("this.selectedObjects -----------1", this.selectedObjects)

            this.selectedObjects.push(this.selectedObject);
            this.selectedObject = null;
            this.selectedObjects.push(selectedObject);
            console.log("this.selectedObject -----------2", this.selectedObject)
            console.log("selectedObject -----------2", selectedObject)
            console.log("this.selectedObjects -----------2", this.selectedObjects)

        }
        else if (!this.selectedObjects.includes(selectedObject)) {
            this.selectedObjects.push(selectedObject);
        }
        else if (severalSelect && this.selectedObjects.includes(selectedObject)) {
            var index = this.selectedObjects.indexOf(selectedObject);
            this.selectedObjects.splice(index, 1);
        }
        if (!this.selectedLogCtrl) {
            userAction("GroupSelected.SelectCtrl");
            this.selectedLogCtrl = true;
        }
    }
    else {
        if (selectedObject != null) {
            this.selectedObject = selectedObject;
        }
        if ((selectedObject instanceof BaseVertex) && selectedObject != null) {
            this.dragObject = selectedObject;
            this.message = g_moveCursorForMoving;
        }
    }

    console.log("this.selectedObject -----------end", this.selectedObject)

    this.needRedraw = true;
    this.pressed = true;
    this.prevPosition = pos;
    this.app.canvas.style.cursor = "move";
}

DefaultHandler.prototype.MouseUp = function (pos) {
    this.saveUndo = false;
    this.message = g_textsSelectAndMove + " <span class=\"hidden-phone\">" + g_selectGroupText + "</span>" + " <span class=\"hidden-phone\">" + g_useContextMenuText + "</span>";
    this.dragObject = null;
    this.pressed = false;
    this.app.canvas.style.cursor = "auto";

    this.app.SetSelectionRect(null);

    this.groupingSelect = false;
    if (this.selectedObject != null && (this.selectedObject instanceof BaseVertex)) {
        this.message = g_textsSelectAndMove
            + "<div class=\"btn-group\" style=\"float:right;position: relative;\">"
            + "<button type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">"
            + " " + g_action + " <span class=\"caret\"></span>"
            + " </button>"
            + "<ul class=\"dropdown-menu dropdown-menu-right\" style=\"z-index:15; position: absolute;\">"
            + " <li><a href=\"#\" id=\"renameButton\">" + g_renameVertex + "</a></li>"
            + " <li><a href=\"#\" id=\"changeCommonStyle\">" + g_commonVertexStyle + "</a></li>"
            + " <li><a href=\"#\" id=\"changeSelectedStyle\">" + g_selectedVertexStyle + "</a></li>"
            + "</ul>"
            + "</div>";

        var handler = this;
        var callback = function (enumType) {
            handler.RenameVertex(enumType.GetVertexText(0), handler.selectedObject);
            userAction("RenameVertex");
        };
        $('#message').unbind();
        $('#message').on('click', '#renameButton', function () {
            var customEnum = new TextEnumVerticesCustom(handler.app);
            customEnum.ShowDialog(callback, g_rename, g_renameVertex, handler.selectedObject.mainText);
        });
        $('#message').on('click', '#changeCommonStyle', function () {
            var selectedVertices = handler.app.GetSelectedVertices();
            var setupVertexStyle = new SetupVertexStyle(handler.app);
            setupVertexStyle.show(0, selectedVertices);
        });
        $('#message').on('click', '#changeSelectedStyle', function () {
            var selectedVertices = handler.app.GetSelectedVertices();
            var setupVertexStyle = new SetupVertexStyle(handler.app);
            setupVertexStyle.show(1, selectedVertices);
        });
    }
    else if (this.selectedObject != null && (this.selectedObject instanceof BaseEdge)) {
        this.message = g_textsSelectAndMove
            + "<span style=\"float:right;\"><button type=\"button\" id=\"incCurvel\" class=\"btn btn-default btn-xs\"> + </button>"
            + " " + g_curveEdge + " "
            + "<button type=\"button\" id=\"decCurvel\" class=\"btn btn-default btn-xs\"> - </button> &nbsp; "
            + "<div class=\"btn-group\" style=\"float:right;position: relative;\">"
            + "<button type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">"
            + " " + g_action + " <span class=\"caret\"></span>"
            + " </button>"
            + "<ul class=\"dropdown-menu dropdown-menu-right\" style=\"z-index:15; position: absolute;\">"
            + " <li><a href=\"#\" id=\"editEdge\">" + g_editWeight + "</a></li>"
            + " <li><a href=\"#\" id=\"changeCommonStyle\">" + g_commonEdgeStyle + "</a></li>"
            + " <li><a href=\"#\" id=\"changeSelectedStyle\">" + g_selectedEdgeStyle + "</a></li>"
            + "</ul>"
            + "</div>";

        var handler = this;
        $('#message').unbind();
        $('#message').on('click', '#editEdge', function () {
            handler.ShowEditEdgeDialog(handler.selectedObject);
        });

        $('#message').on('click', '#incCurvel', function () {
            handler.app.PushToStack("ChangeCurvelEdge");

            handler.selectedObject.model.ChangeCurveValue(DefaultHandler.prototype.curveValue);
            handler.needRedraw = true;
            handler.app.redrawGraph();
            userAction("Edge.Bend");
        });
        $('#message').on('click', '#decCurvel', function () {
            handler.app.PushToStack("ChangeCurvelEdge");

            handler.selectedObject.model.ChangeCurveValue(-DefaultHandler.prototype.curveValue);
            handler.needRedraw = true;
            handler.app.redrawGraph();
            userAction("Edge.Bend");
        });
        $('#message').on('click', '#changeCommonStyle', function () {
            var selectedEdges = handler.app.GetSelectedEdges();
            var setupVertexStyle = new SetupEdgeStyle(handler.app);
            setupVertexStyle.show(0, selectedEdges);
        });
        $('#message').on('click', '#changeSelectedStyle', function () {
            var selectedEdges = handler.app.GetSelectedEdges();
            var setupVertexStyle = new SetupEdgeStyle(handler.app);
            setupVertexStyle.show(1, selectedEdges);
        });
    }
    else if (this.selectedObjects.length > 0) {
        this.message = g_dragGroupText + " <span class=\"hidden-phone\">" + g_selectGroupText + "</span>";

        var hasVertices = false;
        var hasEdges = false;
        for (var i = 0; i < this.selectedObjects.length; i++) {
            var object = this.selectedObjects[i];
            if (object instanceof BaseVertex) {
                hasVertices = true;
            }
            else if (object instanceof BaseEdge) {
                hasEdges = true;
            }
        }

        this.message = this.message + "<span style=\"float:right;position: relative;\">";

        this.message = this.message
            + "<button type=\"button\" id=\"DublicateSelected\" class=\"btn btn-default btn-xs\">"
            + g_copyGroupeButton + "</button> &nbsp &nbsp"
            + "<button type=\"button\" id=\"RemoveSelected\" class=\"btn btn-default btn-xs\">"
            + g_removeGroupeButton + "</button>"

        this.message = this.message
            + " &nbsp &nbsp <button type=\"button\" class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">"
            + " " + g_action + " <span class=\"caret\"></span>"
            + " </button>"
            + "<ul class=\"dropdown-menu dropdown-menu-right\" style=\"z-index:15; position: absolute;\">";

        if (hasEdges) {
            this.message = this.message + " <li><a href=\"#\" id=\"changeCommonStyleEdge\">" + g_commonEdgeStyle + "</a></li>";
            this.message = this.message + " <li><a href=\"#\" id=\"changeSelectedStyleEdge\">" + g_selectedEdgeStyle + "</a></li>";
        }

        if (hasVertices) {
            this.message = this.message + " <li><a href=\"#\" id=\"changeCommonStyleVertex\">" + g_commonVertexStyle + "</a></li>";
            this.message = this.message + " <li><a href=\"#\" id=\"changeSelectedStyleVertex\">" + g_selectedVertexStyle + "</a></li>";
        }

        this.message = this.message
            + "</ul>"
            + "</span>";

        var handler = this;
        $('#message').unbind();

        $('#message').on('click', '#DublicateSelected', function () {
            handler.app.PushToStack("DublicateSelection");

            userAction("GroupSelected.Dublicate");

            var newSelected = [];
            var copyVertex = {};

            // Copy vertex
            for (var i = 0; i < handler.selectedObjects.length; i++) {
                var object = handler.selectedObjects[i];
                if (object instanceof BaseVertex) {
                    var newObject = new BaseVertex()
                    newObject.copyFrom(object);
                    newObject.vertexEnumType = null;
                    handler.app.AddNewVertex(newObject);
                    var vertex = newObject;
                    var diameter = (new VertexModel()).diameter;
                    vertex.position.offset(diameter, diameter);
                    newSelected.push(vertex);
                    copyVertex[object.id] = vertex;
                }
            }

            // Copy edge
            for (var i = 0; i < handler.selectedObjects.length; i++) {
                var object = handler.selectedObjects[i];
                if (object instanceof BaseEdge) {
                    var newObject = new BaseEdge()
                    newObject.copyFrom(object);

                    var toNewVertex = false;
                    if (newObject.vertex1.id in copyVertex) {
                        newObject.vertex1 = copyVertex[newObject.vertex1.id];
                        toNewVertex = true;
                    }
                    if (newObject.vertex2.id in copyVertex) {
                        newObject.vertex2 = copyVertex[newObject.vertex2.id];
                        toNewVertex = true;
                    }

                    handler.app.AddNewEdge(newObject);
                    if (!toNewVertex) {
                        var neighborEdges = handler.app.graph.getNeighborEdges(newObject);
                        if (neighborEdges.length >= 1) {
                            var curve = handler.app.GetAvailableCurveValue(neighborEdges, newObject);
                            newObject.model.SetCurveValue(curve);
                        }
                    }
                    newSelected.push(newObject);
                }
            }

            handler.selectedObjects = newSelected;
            handler.needRedraw = true;
            handler.app.redrawGraph();
        });

        $('#message').on('click', '#RemoveSelected', function () {
            handler.app.PushToStack("RemoveSelection");

            userAction("GroupSelected.Remove");

            for (var i = 0; i < handler.selectedObjects.length; i++)
                handler.app.DeleteObject(handler.selectedObjects[i]);
            handler.selectedObjects = [];
            handler.needRedraw = true;
            handler.app.redrawGraph();
            handler.message = g_textsSelectAndMove + " <span class=\"hidden-phone\">" + g_selectGroupText + "</span>";
        });

        if (hasEdges) {
            $('#message').on('click', '#changeCommonStyleEdge', function () {
                var selectedEdges = handler.app.GetSelectedEdges();
                var setupVertexStyle = new SetupEdgeStyle(handler.app);
                setupVertexStyle.show(0, selectedEdges);
            });
            $('#message').on('click', '#changeSelectedStyleEdge', function () {
                var selectedEdges = handler.app.GetSelectedEdges();
                var setupVertexStyle = new SetupEdgeStyle(handler.app);
                setupVertexStyle.show(1, selectedEdges);
            });
        }

        if (hasVertices) {
            $('#message').on('click', '#changeCommonStyleVertex', function () {
                var selectedVertices = handler.app.GetSelectedVertices();
                var setupVertexStyle = new SetupVertexStyle(handler.app);
                setupVertexStyle.show(0, selectedVertices);
            });
            $('#message').on('click', '#changeSelectedStyleVertex', function () {
                var selectedVertices = handler.app.GetSelectedVertices();
                var setupVertexStyle = new SetupVertexStyle(handler.app);
                setupVertexStyle.show(1, selectedVertices);
            });
        }
    }

    this.needRedraw = true;
}

DefaultHandler.prototype.GetSelectedGroup = function (object) {
    return (object == this.dragObject) || (object == this.selectedObject) ? 1 : 0 || this.selectedObjects.includes(object);
}

DefaultHandler.prototype.SelectObjectInRect = function (rect) {
    this.selectedObjects = [];
    var vertices = this.app.graph.vertices;
    for (var i = 0; i < vertices.length; i++) {
        if (rect.isIn(vertices[i].position) && !this.selectedObjects.includes(vertices[i]))
            this.selectedObjects.push(vertices[i]);
    }

    // Selected Arc.
    var edges = this.app.graph.edges;
    for (var i = 0; i < edges.length; i++) {
        var edge = edges[i];

        if (rect.isIn(edge.vertex1.position) && rect.isIn(edge.vertex2.position) && !this.selectedObjects.includes(edge))
            this.selectedObjects.push(edge);
    }
}


/**
 * Add Graph handler.
 *
 */
function AddGraphHandler(app) {
    console.log("bước 3: Init AddGraphHandler")
    this.removeStack = true;
    BaseHandler.apply(this, arguments);
    this.message = g_clickToAddVertex;

    this.addContextMenu();
}

// inheritance.
AddGraphHandler.prototype = Object.create(BaseHandler.prototype);

AddGraphHandler.prototype.MouseDown = function (pos) {
    console.log("bước 6: AddGraphHandler.MouseDown ", pos);
    this.app.PushToStack("Add");
    this.app.CreateNewGraph(pos.x, pos.y);
    this.needRedraw = true;
    this.inited = false;
}

AddGraphHandler.prototype.InitControls = function () {
    var enumVertexsText = document.getElementById("enumVertexsText");
    if (enumVertexsText) {
        var enumsList = this.app.GetEnumVerticesList();
        for (var i = 0; i < enumsList.length; i++) {
            var option = document.createElement('option');
            option.text = enumsList[i]["text"];
            option.value = enumsList[i]["value"];
            enumVertexsText.add(option, i);
            if (enumsList[i]["select"]) {
                enumVertexsText.selectedIndex = i;
            }
        }

        var addGraphHandler = this;
        enumVertexsText.onchange = function () {
            console.log("lộc log enumVertexsText onchange");

            addGraphHandler.ChangedType();
        };
    }
}

AddGraphHandler.prototype.ChangedType = function () {
    var enumVertexsText = document.getElementById("enumVertexsText");

    this.app.SetEnumVerticesType(enumVertexsText.options[enumVertexsText.selectedIndex].value);
}



/**
 * Connection Graph handler.
 *
 */
function ConnectionGraphHandler(app) {
    console.log("step 3: init ConnectionGraphHandler")
    this.removeStack = true;
    BaseHandler.apply(this, arguments);
    this.SelectFirst();
    this.addContextMenu();
}

// inheritance.
ConnectionGraphHandler.prototype = Object.create(BaseHandler.prototype);
// First selected.
ConnectionGraphHandler.prototype.firstObject = null;

ConnectionGraphHandler.prototype.GetSelectedVertex = function () {
    return (this.firstObject instanceof BaseVertex) ? this.firstObject : null;
}

ConnectionGraphHandler.prototype.AddNewEdge = function (selectedObject, isDirect) {
    let newEdge = this.app.CreateNewArc(this.firstObject, selectedObject, isDirect,
        document.getElementById('EdgeWeight').value,
        $("#RadiosReplaceEdge").prop("checked"),
        document.getElementById('EdgeLable').value);

    if ($("#CheckSaveDefaultEdge").prop("checked")) {
        let defaultEdge = new BaseEdge();
        defaultEdge.copyFrom(this.app.graph.edges[newEdge]);
        this.app.setDefaultEdge(defaultEdge);
    }

    this.SelectFirst();
    this.app.NeedRedraw();
}

ConnectionGraphHandler.prototype.AddDefaultEdge = function (selectedObject) {
    let defaultEdge = this.app.getDefaultEdge();
    let newEdge = this.app.CreateNewArc(this.firstObject, selectedObject, defaultEdge.isDirect,
        defaultEdge.weight,
        false,
        defaultEdge.upText);
    this.app.graph.edges[newEdge].useWeight = defaultEdge.useWeight;

    this.SelectFirst();
    this.app.NeedRedraw();

    userAction("CreateDefaultEdge");
}

ConnectionGraphHandler.prototype.SelectVertex = function (selectedObject) {
    if (this.firstObject) { // nếu đã tồn tại firstObject (tức đỉnh đầu tiên đã được chọn) 
        var direct = false;
        var handler = this;

        // kiểm tra có sử dụng cạnh mặc định không, hoặc hộp thoại "Reuse saved edge" có được chọn không
        // để hiển thị ra hộp thoại dialog setting tạo cạnh mới
        if (!this.app.hasDefaultEdge() || !document.getElementById('useDefaultEdge').checked) {
            this.ShowCreateEdgeDialog(this.firstObject, selectedObject, function (firstVertex, secondVertex, direct) {
                handler.AddNewEdge(secondVertex, direct);
            });
        } else {
            handler.AddDefaultEdge(selectedObject);
        }
    }
    else { // nếu chưa tồn tại firstObject gọi hàm SelectSecond() sẽ set selectedObject cho firstObject
        this.SelectSecond(selectedObject);
    }
    this.needRedraw = true;
}

ConnectionGraphHandler.prototype.MouseDown = function (pos) {
    $('#message').unbind();

    console.log("step 4: ConnectionGraphHandler.prototype.MouseDown")
    var selectedObject = this.GetSelectedGraph(pos);
    if (selectedObject && (selectedObject instanceof BaseVertex)) {
        this.SelectVertex(selectedObject);
    }
    else {
        this.SelectFirst();
        this.needRedraw = true;
    }
}

ConnectionGraphHandler.prototype.GetSelectedGroup = function (object) {
    return (object == this.firstObject) ? 1 : 0;
}

ConnectionGraphHandler.prototype.SelectFirst = function () {
    this.firstObject = null;

    this.message = g_selectFirstVertexToConnect + this.GetUseDefaultEdgeCheckBox() +
        this.GetSelect2VertexMenu();
    this.message = this.AppendSpecialSctionsButton(this.message);
}

ConnectionGraphHandler.prototype.SelectSecond = function (selectedObject) {
    this.firstObject = selectedObject;
    this.message = g_selectSecondVertexToConnect + this.GetUseDefaultEdgeCheckBox() +
        this.GetSelect2VertexMenu();
    this.message = this.AppendSpecialSctionsButton(this.message);
}

ConnectionGraphHandler.prototype.SelectFirstVertexMenu = function (vertex1Text, vertex) {
    this.firstObject = null;
    this.SelectVertex(vertex);
}

ConnectionGraphHandler.prototype.UpdateFirstVertexMenu = function (vertex1Text) {
    if (this.firstObject) {
        vertex1Text.value = this.firstObject.mainText;
    }
}

ConnectionGraphHandler.prototype.SelectSecondVertexMenu = function (vertex2Text, vertex) {
    this.SelectVertex(vertex);
}

ConnectionGraphHandler.prototype.UpdateSecondVertexMenu = function (vertex2Text) {
    if (this.secondObject) {
        vertex2Text.value = this.secondObject.mainText;
    }
}

ConnectionGraphHandler.prototype.AppendSpecialSctionsButton = function (baseMessage) {
    let hasEdges = this.app.graph.hasEdges();

    if (!hasEdges) return baseMessage;

    let hasDirectedEdges = this.app.graph.hasDirectEdge();
    let hasUndirectedEdges = this.app.graph.hasUndirectEdge();

    let handler = this;

    $('#message').on('click', '#reverseAll', function () {
        handler.app.PushToStack("ReverseAllEdges");

        handler.app.graph.reverseAllEdges();
        handler.app.redrawGraph();

        userAction("ReverseAllEdges");
    });
    $('#message').on('click', '#makeAllUndirected', function () {
        handler.app.PushToStack("makeAllEdgesUndirected");

        handler.app.graph.makeAllEdgesUndirected();
        handler.app.redrawGraph();

        userAction("makeAllEdgesUndirected");
    });
    $('#message').on('click', '#makeAllDirected', function () {
        handler.app.PushToStack("makeAllEdgesDirected");

        handler.app.graph.makeAllEdgesDirected();
        handler.app.redrawGraph();

        userAction("makeAllEdgesDirected");
    });

    return "<div class=\"btn-group\" style=\"float:right; position: relative; margin-left: 8px\">"
        + "<button type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">"
        + g_additionalActions + " <span class=\"caret\"></span>"
        + " </button> "
        + "<ul class=\"dropdown-menu dropdown-menu-right\" style=\"z-index:15; position: absolute;\">"
        + (hasDirectedEdges ? " <li><a href=\"#\" id=\"reverseAll\">" + g_reverseAllEdges + "</a></li>" : "")
        + (hasDirectedEdges ? " <li><a href=\"#\" id=\"makeAllUndirected\">" + g_makeAllUndirected + "</a></li>" : "")
        + (hasUndirectedEdges ? " <li><a href=\"#\" id=\"makeAllDirected\">" + g_makeAllDirected + "</a></li>" : "")
        + "</ul>"
        + "</div> " + baseMessage;
}

ConnectionGraphHandler.checkUseDefaultEdge = function (elem, app) {
    app.setUseDefaultEdge(elem.checked);
    app.updateMessage();
};

ConnectionGraphHandler.prototype.GetUseDefaultEdgeCheckBox = function () {
    if (!this.app.hasDefaultEdge()) {
        return "";
    }

    return " <div class=\"messageSwitcher\" style=\"display:inline\">" +
        "<span id=\"switcher\"><input type=\"checkbox\" id=\"useDefaultEdge\" >" +
        "<label for=\"useDefaultEdge\" class=\"Switcher\"></label></span> <label for=\"useDefaultEdge\" class=\"switcherText\">" + g_reuseSavedEdge + "</label>" +
        "</div>";
}

ConnectionGraphHandler.prototype.InitControls = function () {
    BaseHandler.prototype.InitControls.call(this)

    if (!this.app.hasDefaultEdge()) {
        return;
    }

    let app = this.app;

    $('#useDefaultEdge').unbind();
    $('#useDefaultEdge').change(function () {
        app.setUseDefaultEdge(this.checked);
    });
    $("#useDefaultEdge").prop("checked", this.app.getUseDefaultEdge());
}


/**
 * Delete Graph handler.
 *
 */
function DeleteGraphHandler(app) {
    this.removeStack = true;
    BaseHandler.apply(this, arguments);
    this.message = g_selectObjectToDelete;
    this.addContextMenu();
}

// inheritance.
DeleteGraphHandler.prototype = Object.create(BaseHandler.prototype);

DeleteGraphHandler.prototype.MouseDown = function (pos) {
    var selectedObject = this.GetSelectedObject(pos);

    if (!this.app.IsCorrectObject(selectedObject))
        return;

    this.app.PushToStack("Delete");
    this.app.DeleteObject(selectedObject);
    this.needRedraw = true;
}

/**
 * Delete Graph handler.
 *
 */
function DeleteAllHandler(app) {
    BaseHandler.apply(this, arguments);
}

// inheritance.
DeleteAllHandler.prototype = Object.create(BaseHandler.prototype);

DeleteAllHandler.prototype.clear = function () {
    this.app.PushToStack("DeleteAll");

    // Selected Graph.
    this.app.graph = new Graph();
    this.app.savedGraphName = "";
    this.needRedraw = true;
}


/**
 * Save/Load graph from matrix.
 *
 */
function ShowAdjacencyMatrix(app) {
    BaseHandler.apply(this, arguments);
    this.message = "";
}

// inheritance.
ShowAdjacencyMatrix.prototype = Object.create(BaseHandler.prototype);
// First selected.
ShowAdjacencyMatrix.prototype.firstObject = null;
// Path
ShowAdjacencyMatrix.prototype.pathObjects = null;

ShowAdjacencyMatrix.prototype.show = function () {
    var handler = this;
    var dialogButtons = {};

    $('#AdjacencyMatrixField').unbind();
    $("#AdjacencyMatrixField").on('keyup change', function (eventObject) {
        if (!handler.app.TestAdjacencyMatrix($("#AdjacencyMatrixField").val(), [], [])) {
            $("#BadMatrixFormatMessage").show();
        }
        else {
            $("#BadMatrixFormatMessage").hide();
        }
    });

    dialogButtons[g_save] = function () {
        handler.app.PushToStack("ChangeAdjacencyMatrix");
        handler.app.SetAdjacencyMatrixSmart($("#AdjacencyMatrixField").val());
        $(this).dialog("close");
    };
    dialogButtons[g_cancel] = function () {
        $(this).dialog("close");
    };

    $("#AdjacencyMatrixField").val(this.app.GetAdjacencyMatrix());
    $("#BadMatrixFormatMessage").hide();

    if (this.app.graph.isMulti())
        $("#AdjacencyMatrixMultiGraphDesc").show();
    else
        $("#AdjacencyMatrixMultiGraphDesc").hide();

    $("#adjacencyMatrix").dialog({
        resizable: false,
        height: "auto",
        width: "auto",
        modal: true,
        title: g_adjacencyMatrixText,
        buttons: dialogButtons,
        dialogClass: 'EdgeDialog'
    });
}


/**
 * Save/Load graph from Incidence matrix.
 *
 */
function ShowIncidenceMatrix(app) {
    BaseHandler.apply(this, arguments);
    this.message = "";
}

// inheritance.
ShowIncidenceMatrix.prototype = Object.create(BaseHandler.prototype);
// First selected.
ShowIncidenceMatrix.prototype.firstObject = null;
// Path
ShowIncidenceMatrix.prototype.pathObjects = null;

ShowIncidenceMatrix.prototype.show = function () {
    var handler = this;
    var dialogButtons = {};

    $('#IncidenceMatrixField').unbind();
    $("#IncidenceMatrixField").on('keyup change', function (eventObject) {
        if (!handler.app.TestIncidenceMatrix($("#IncidenceMatrixField").val(), [], [])) {
            $("#BadIncidenceMatrixFormatMessage").show();
        }
        else {
            $("#BadIncidenceMatrixFormatMessage").hide();
        }
    });

    dialogButtons[g_save] = function () {
        handler.app.PushToStack("IncidenceMatrixChanged");
        handler.app.SetIncidenceMatrixSmart($("#IncidenceMatrixField").val());
        $(this).dialog("close");
    };
    dialogButtons[g_cancel] = function () {
        $(this).dialog("close");
    };

    $("#IncidenceMatrixField").val(this.app.GetIncidenceMatrix());
    $("#BadIncidenceMatrixFormatMessage").hide();

    $("#incidenceMatrix").dialog({
        resizable: false,
        height: "auto",
        width: "auto",
        modal: true,
        title: g_incidenceMatrixText,
        buttons: dialogButtons,
        dialogClass: 'EdgeDialog'
    });
}


/**
 * Show distance matrix.
 *
 */
function ShowDistanceMatrix(app) {
    BaseHandler.apply(this, arguments);
    this.app = app;
    this.message = "";
}

// inheritance.
ShowDistanceMatrix.prototype = Object.create(BaseHandler.prototype);
// First selected.
ShowDistanceMatrix.prototype.firstObject = null;
// Path
ShowDistanceMatrix.prototype.pathObjects = null;

ShowDistanceMatrix.prototype.GetIncidenceMatrix = function (rawMatrix) {
    var matrix = "";
    for (var i = 0; i < rawMatrix.length; i++) {
        for (var j = 0; j < rawMatrix[i].length; j++) {
            if (i == j) {
                matrix += "0";
            }
            else if ((new Graph()).infinity == rawMatrix[i][j]) {
                matrix += '\u221E';
            }
            else {
                matrix += rawMatrix[i][j];
            }

            if (j != rawMatrix[i].length - 1) {
                matrix += ", ";
            }

        }
        matrix = matrix + "\n";
    }

    return matrix;
}

ShowDistanceMatrix.prototype.show = function () {
    var handler = this;
    var dialogButtons = {};

    dialogButtons[g_close] = function () {
        $(this).dialog("close");
    };

    var handler = g_Algorithms[g_AlgorithmIds.indexOf("OlegSh.FloidAlgorithm")](this.app.graph, this.app);

    $("#FloidMatrixField").val(this.GetIncidenceMatrix(handler.resultMatrix()));

    $("#floidMatrix").dialog({
        resizable: false,
        height: "auto",
        width: "auto",
        modal: true,
        title: g_minDistMatrixText,
        buttons: dialogButtons,
        dialogClass: 'EdgeDialog'
    });
}

/**
 * Save dialog Graph handler.
 *
 */
function SavedDialogGraphHandler(app) {
    BaseHandler.apply(this, arguments);
    this.message = "";
}

// inheritance.
SavedDialogGraphHandler.prototype = Object.create(BaseHandler.prototype);
// First selected.
SavedDialogGraphHandler.prototype.firstObject = null;
// Path
SavedDialogGraphHandler.prototype.pathObjects = null;
// Objects.
SavedDialogGraphHandler.prototype.objects = null;

SavedDialogGraphHandler.prototype.show = function (object) {
    this.app.SaveGraphOnDisk();

    var dialogButtons = {};

    dialogButtons[g_close] = function () {
        $(this).dialog("close");
    };

    document.getElementById('GraphName').value = "http://" + window.location.host + window.location.pathname +
        "?graph=" + this.app.GetGraphName();

    document.getElementById('GraphName').select();

    document.getElementById("ShareSavedGraph").innerHTML =
        document.getElementById("ShareSavedGraph").innerHTML.replace(/graph=([A-Za-z]*)/g, "graph=" + this.app.GetGraphName());

    $("#saveDialog").dialog({
        resizable: false,
        height: "auto",
        width: "auto",
        modal: true,
        title: g_save_dialog,
        buttons: dialogButtons,
        dialogClass: 'EdgeDialog'
    });

}

/**
 * Save dialog Graph handler.
 *
 */
function SavedDialogGraphImageHandler(app) {
    BaseHandler.apply(this, arguments);
    this.message = "";
    this.imageName = "";
}

// inheritance.
SavedDialogGraphImageHandler.prototype = Object.create(BaseHandler.prototype);
// First selected.
SavedDialogGraphImageHandler.prototype.firstObject = null;
// Path
SavedDialogGraphImageHandler.prototype.pathObjects = null;
// Objects.
SavedDialogGraphImageHandler.prototype.objects = null;

SavedDialogGraphImageHandler.prototype.showDialogCallback = function (imageExtension) {
    var dialogButtons = {};

    dialogButtons[g_close] = function () {
        $(this).dialog("close");
    };

    var fileLocation = "tmp/saved/" + this.imageName.substr(0, 2) + "/" + this.imageName + "." + imageExtension

    document.getElementById("showSavedImageGraph").src = "/" + fileLocation;
    document.getElementById("showSavedImageGraphRef").href = "/" + fileLocation;
    //document.getElementById("showSavedImageGraph").src = document.getElementById("showSavedImageGraph").src.replace(/tmp\/saved\/([A-Za-z]*)\/([A-Za-z]*).png/g, fileLocation);
    document.getElementById("ShareSavedImageGraph").innerHTML =
        document.getElementById("ShareSavedImageGraph").innerHTML.replace(/tmp\/saved\/([A-Za-z]*)\/([A-Za-z]*).png/g, fileLocation);

    document.getElementById("SaveImageLinks").innerHTML =
        document.getElementById("SaveImageLinks").innerHTML.replace(/tmp\/saved\/([A-Za-z]*)\/([A-Za-z]*).png/g, fileLocation);

    $("#saveImageDialog").dialog({
        resizable: false,
        height: "auto",
        width: "auto",
        modal: true,
        title: g_save_image_dialog,
        buttons: dialogButtons,
        dialogClass: 'EdgeDialog'
    });

}

SavedDialogGraphImageHandler.prototype.showWorkspace = function () {
    var object = this;
    var callback = function () {
        object.showDialogCallback("png");
    };

    this.imageName = this.app.SaveGraphImageOnDisk(callback);
}

SavedDialogGraphImageHandler.prototype.showFullgraph = function () {
    var object = this;
    var callback = function () {
        object.showDialogCallback("png");
    };

    this.imageName = this.app.SaveFullGraphImageOnDisk(callback, false);
}

SavedDialogGraphImageHandler.prototype.showPrint = function () {
    var object = this;
    var callback = function () {
        object.showDialogCallback("png");
    };

    this.imageName = this.app.SaveFullGraphImageOnDisk(callback, true);
}

SavedDialogGraphImageHandler.prototype.showSvg = function () {
    var object = this;
    var callback = function () {
        object.showDialogCallback("svg");
    };

    this.imageName = this.app.SaveSVGGraphOnDisk(callback);
}

/**
 * Algorithm Graph handler.
 *
 */
function AlgorithmGraphHandler(app, algorithm) {
    console.log("buoc 5: Algorithm Graph Handler")
    BaseHandler.apply(this, arguments);
    this.algorithm = algorithm;
    this.SaveUpText();

    this.UpdateResultAndMessage();
}

// inheritance.
AlgorithmGraphHandler.prototype = Object.create(BaseHandler.prototype);

// Rest this handler.
AlgorithmGraphHandler.prototype.MouseMove = function (pos) { }

AlgorithmGraphHandler.prototype.MouseDown = function (pos) {
    console.log("buoc 7: AlgorithmGraphHandler.prototype.MouseDown", this.algorithm)

    this.app.setRenderPath([]);

    console.log("this.algorithm.instance()", this.algorithm.instance())
    if (this.algorithm.instance()) {
        this.app.SetDefaultHandler();
    }
    else {
        var selectedObject = this.GetSelectedGraph(pos);
        if (selectedObject && (selectedObject instanceof BaseVertex)) {

            if (this.algorithm.selectVertex(selectedObject)) {
                console.log("this.algorithm.selectVertex(selectedObject) == true ===== Selected vertex", selectedObject);
                this.needRedraw = true;
            }

            this.UpdateResultAndMessage();
        }
        else if (selectedObject && (selectedObject instanceof BaseEdge)) {
            if (this.algorithm.selectEdge(selectedObject)) {
                this.needRedraw = true;
            }

            this.UpdateResultAndMessage();
        }
        else {
            if (this.algorithm.deselectAll()) {
                this.needRedraw = true;
                this.UpdateResultAndMessage();
            }
        }
    }
}

AlgorithmGraphHandler.prototype.MouseUp = function (pos) { }

AlgorithmGraphHandler.prototype.GetSelectedGroup = function (object) {
    return this.algorithm.getObjectSelectedGroup(object);
}

AlgorithmGraphHandler.prototype.RestoreAll = function () {
    console.log("buoc 5: AlgorithmGraphHandler.prototype.RestoreAll")
    this.app.setRenderPath([]);

    if (this.algorithm.needRestoreUpText()) {
        this.RestoreUpText();
    }

    if (this.algorithm.wantRestore()) {
        this.algorithm.restore();
    }
}

AlgorithmGraphHandler.prototype.SaveUpText = function () {
    console.log("buoc 5.5: Saving up text")
    this.vertexUpText = {};
    var graph = this.app.graph;
    for (i = 0; i < graph.vertices.length; i++) {
        this.vertexUpText[graph.vertices[i].id] = graph.vertices[i].upText;
        console.log(this.vertexUpText)
    }
}

AlgorithmGraphHandler.prototype.RestoreUpText = function () {
    var graph = this.app.graph;

    for (i = 0; i < graph.vertices.length; i++) {
        if (graph.vertices[i].id in this.vertexUpText) {
            graph.vertices[i].upText = this.vertexUpText[graph.vertices[i].id];
        }
    }
}

AlgorithmGraphHandler.prototype.UpdateResultAndMessage = function () {
    console.log("buoc 6: UpdateResultAndMessage", this.algorithm)

    var self = this;

    result = this.algorithm.result(function (result) {
        console.log(" anh Thành3", result)

        self.message = self.algorithm.getMessage(g_language);

        self.app.resultCallback(result);
    });

    console.log("result: " + result)

    this.app.resultCallback(result);

    this.message = this.algorithm.getMessage(g_language);
    console.log("message: " + this.message)

}

AlgorithmGraphHandler.prototype.InitControls = function () {
    this.algorithm.messageWasChanged();
}

AlgorithmGraphHandler.prototype.GetMessage = function () {
    return this.algorithm.getMessage(g_language);
}


/**
 * Groupe rename vertices.
 *
 */
function GroupRenameVertices(app) {
    BaseHandler.apply(this, arguments);
    this.message = "";
}

// inheritance.
GroupRenameVertices.prototype = Object.create(BaseHandler.prototype);
// First selected.
GroupRenameVertices.prototype.firstObject = null;
// Path
GroupRenameVertices.prototype.pathObjects = null;

GroupRenameVertices.prototype.show = function () {
    var handler = this;
    var dialogButtons = {};
    var graph = this.app.graph;
    var app = this.app;

    dialogButtons[g_save] = function () {
        app.PushToStack("Rename");

        var titlesList = $("#VertextTitleList").val().split('\n');
        for (i = 0; i < Math.min(graph.vertices.length, titlesList.length); i++) {
            graph.vertices[i].mainText = titlesList[i];
        }
        app.redrawGraph();
        $(this).dialog("close");
    };
    dialogButtons[g_cancel] = function () {
        $(this).dialog("close");
    };

    var titleList = "";
    for (i = 0; i < graph.vertices.length; i++) {
        titleList = titleList + graph.vertices[i].mainText + "\n";
    }

    $("#VertextTitleList").val(titleList);

    $("#GroupRenameDialog").dialog({
        resizable: false,
        height: "auto",
        width: "auto",
        modal: true,
        title: g_groupRename,
        buttons: dialogButtons,
        dialogClass: 'EdgeDialog'
    });
}


/**
 * Setup Vertex Style rename vertices.
 *
 */
function SetupVertexStyle(app) {
    BaseHandler.apply(this, arguments);
    this.message = "";
}

// inheritance.
SetupVertexStyle.prototype = Object.create(BaseHandler.prototype);

SetupVertexStyle.prototype.show = function (index, selectedVertices) {
    var handler = this;
    var dialogButtons = {};
    var graph = this.app.graph;
    var app = this.app;
    this.forAll = selectedVertices == null;
    var forAll = this.forAll;
    var self = this;

    var applyIndex = function (index) {
        self.index = index;
        self.originStyle = (self.index == 0 ? app.vertexCommonStyle : app.vertexSelectedVertexStyles[self.index - 1]);
        if (!forAll) {
            self.originStyle = selectedVertices[0].getStyleFor(self.index);
        }
        self.style = FullObjectCopy(self.originStyle);
    }

    applyIndex(index);

    var fillFields = function () {
        var fullStyle = self.style.GetStyle({}, forAll ? undefined : selectedVertices[0]);

        $("#vertexFillColor").val(fullStyle.fillStyle);
        $("#vertexStrokeColor").val(fullStyle.strokeStyle);
        $("#vertexTextColor").val(fullStyle.mainTextColor);
        $("#upVertexTextColor").val(fullStyle.upTextColor);
        $("#vertexStrokeSize").val(fullStyle.lineWidth);
        $("#vertexShape").val(fullStyle.shape);
        $("#vertexSize").val(forAll ? app.GetDefaultVertexSize() : selectedVertices[0].model.diameter);
        $("#commonTextPosition").val(fullStyle.commonTextPosition);

        if (self.index > 0 || self.index == "all") {
            $("#VertexSelectedIndexForm").show();
            $("#vertexSelectedIndex").val(self.index);
        }
        else {
            $("#VertexSelectedIndexForm").hide();
        }

        // Fill color presets.
        var stylesArray = [];
        stylesArray.push(app.vertexCommonStyle);

        for (i = 0; i < app.vertexSelectedVertexStyles.length; i++)
            stylesArray.push(app.vertexSelectedVertexStyles[i]);

        var colorSet = {};
        for (i = 0; i < stylesArray.length; i++) {
            var style = stylesArray[i];
            if (style.hasOwnProperty('strokeStyle'))
                colorSet[style.strokeStyle] = 1;
            if (style.hasOwnProperty('fillStyle'))
                colorSet[style.fillStyle] = 1;
            if (style.hasOwnProperty('mainTextColor'))
                colorSet[style.mainTextColor] = 1;
            if (style.hasOwnProperty('upTextColor'))
                colorSet[style.upTextColor] = 1;
        }

        $("#vertexFillColorPreset").find('option').remove();
        $("#upVertexTextColorPreset").find('option').remove();
        $("#vertexTextColorPreset").find('option').remove();
        $("#vertexStrokeColorPreset").find('option').remove();
        for (const property in colorSet) {
            $("#vertexFillColorPreset").append(new Option(property));
            $("#upVertexTextColorPreset").append(new Option(property));
            $("#vertexTextColorPreset").append(new Option(property));
            $("#vertexStrokeColorPreset").append(new Option(property));
        }
    }

    var redrawVertex = function () {
        var fullStyle = self.style.GetStyle({}, forAll ? undefined : selectedVertices[0]);

        if (fullStyle.fillStyle != $("#vertexFillColor").val())
            self.style.fillStyle = $("#vertexFillColor").val();

        if (fullStyle.strokeStyle != $("#vertexStrokeColor").val())
            self.style.strokeStyle = $("#vertexStrokeColor").val();

        if (fullStyle.mainTextColor != $("#vertexTextColor").val())
            self.style.mainTextColor = $("#vertexTextColor").val();

        if (fullStyle.lineWidth != $("#vertexStrokeSize").val())
            self.style.lineWidth = parseInt($("#vertexStrokeSize").val());

        if (fullStyle.shape != $("#vertexShape").val())
            self.style.shape = parseInt($("#vertexShape").val());

        if (fullStyle.upTextColor != $("#upVertexTextColor").val())
            self.style.upTextColor = $("#upVertexTextColor").val();

        if (fullStyle.commonTextPosition != $("#commonTextPosition").val())
            self.style.commonTextPosition = $("#commonTextPosition").val();

        var diameter = parseInt($("#vertexSize").val());

        var canvas = document.getElementById("VertexPreview");
        var context = canvas.getContext('2d');

        context.save();

        var backgroundDrawer = new BaseBackgroundDrawer(context);
        backgroundDrawer.Draw(app.backgroundCommonStyle, canvas.width, canvas.height, new Point(0, 0), 1.0);

        var graphDrawer = new BaseVertexDrawer(context);
        var baseVertex = new BaseVertex(canvas.width / 2, canvas.height / 2, new BaseEnumVertices(this));
        baseVertex.mainText = "1";
        baseVertex.upText = "Up Text";
        baseVertex.model.diameter = diameter;

        if (!forAll)
            baseVertex.ownStyles = selectedVertices[0].ownStyles;

        graphDrawer.Draw(baseVertex, self.style.GetStyle({}, baseVertex));

        context.restore();
    }

    var changeIndex = function () {
        var val = $("#vertexSelectedIndex").val();
        if (val == "all") {
            applyIndex(1);
            self.index = "all";
            fillFields();
        }
        else {
            var index = parseInt(val);
            self.index = index;
            applyIndex(index);
            fillFields();
        }
        redrawVertex();
    }

    var applyDiameter = function (diameter) {
        if (forAll) {
            app.SetDefaultVertexSize(diameter);
        }
        else {
            selectedVertices.forEach(function (vertex) {
                vertex.model.diameter = diameter;
            });
        }
    };

    dialogButtons[g_default] =
    {
        text: g_default,
        class: "MarginLeft",
        click: function () {

            app.PushToStack("ChangeStyle");

            applyDiameter(forAll ? (new VertexModel()).diameter : app.GetDefaultVertexSize());

            var indexes = [];
            if (self.index == "all") {
                for (i = 0; i < app.vertexSelectedVertexStyles.length; i++)
                    indexes.push(i + 1);
            }
            else
                indexes.push(self.index);


            if (forAll) {
                indexes.forEach(function (index) {
                    app.ResetVertexStyle(index);
                });
            }
            else {
                selectedVertices.forEach(function (vertex) {
                    indexes.forEach(function (index) {
                        vertex.resetOwnStyle(index);
                    });
                });
            }
            app.redrawGraph();
            $(this).dialog("close");
        }
    };

    dialogButtons[g_save] = function () {

        app.PushToStack("ChangeStyle");

        applyDiameter(parseInt($("#vertexSize").val()));

        var indexes = [];
        if (self.index == "all") {
            indexes.push({ index: 1, style: self.style });
            for (i = 1; i < app.vertexSelectedVertexStyles.length; i++) {
                var style = (new BaseVertexStyle());
                style.baseStyles.push("selected");
                indexes.push({ index: i + 1, style: style });
            }

            self.style.baseStyles = [];
            self.style.baseStyles = self.style.baseStyles.concat((new SelectedVertexStyle0()).baseStyles);
        }
        else
            indexes.push({ index: self.index, style: self.style });

        if (forAll) {
            indexes.forEach(function (index) {
                app.SetVertexStyle(index.index, index.style);
            });
        }
        else {
            if (JSON.stringify(self.originStyle) !== JSON.stringify(self.style)) {
                selectedVertices.forEach(function (vertex) {
                    indexes.forEach(function (index) {
                        vertex.setOwnStyle(index.index, index.style);
                    });
                });
            }
        }
        app.redrawGraph();
        $(this).dialog("close");
    };
    dialogButtons[g_cancel] = function () {
        $(this).dialog("close");
    };

    fillFields();

    $("#SetupVertexStyleDialog").dialog({
        resizable: false,
        height: "auto",
        width: "auto",
        modal: true,
        title: g_vertexDraw,
        buttons: dialogButtons,
        dialogClass: 'EdgeDialog'
    });

    redrawVertex();

    $("#vertexFillColor").unbind();
    $("#vertexStrokeColor").unbind();
    $("#vertexTextColor").unbind();
    $("#upVertexTextColor").unbind();
    $("#vertexStrokeSize").unbind();
    $("#vertexShape").unbind();
    $("#vertexSize").unbind();
    $("#commonTextPosition").unbind();
    $("#vertexSelectedIndex").unbind();

    $("#vertexFillColor").change(redrawVertex);
    $("#vertexStrokeColor").change(redrawVertex);
    $("#vertexTextColor").change(redrawVertex);
    $("#vertexStrokeSize").change(redrawVertex);
    $("#vertexShape").change(redrawVertex);
    $("#vertexSize").change(redrawVertex);
    $("#upVertexTextColor").change(redrawVertex);
    $("#commonTextPosition").change(redrawVertex);
    $("#vertexSelectedIndex").change(changeIndex);
}

/**
 * Setup Vertex Style rename vertices.
 *
 */
function SetupEdgeStyle(app) {
    BaseHandler.apply(this, arguments);
    this.message = "";
}

// inheritance.
SetupEdgeStyle.prototype = Object.create(BaseHandler.prototype);

SetupEdgeStyle.prototype.show = function (index, selectedEdges) {
    var handler = this;
    var dialogButtons = {};
    var graph = this.app.graph;
    var app = this.app;
    this.forAll = selectedEdges == null;
    var forAll = this.forAll;

    var self = this;

    var applyIndex = function (index) {
        self.index = index;
        var originStyle = (self.index == 0 ? app.edgeCommonStyle : app.edgeSelectedStyles[self.index - 1]);
        if (!forAll) {
            originStyle = selectedEdges[0].getStyleFor(self.index);
        }
        self.style = FullObjectCopy(originStyle);
    }

    applyIndex(index);

    var fillFields = function () {
        var fullStyle = self.style.GetStyle({}, forAll ? undefined : selectedEdges[0]);

        $("#edgeFillColor").val(fullStyle.fillStyle);
        $("#edgeStrokeColor").val(fullStyle.strokeStyle);
        $("#edgeTextColor").val(fullStyle.weightText);
        $("#edgeStyle").val(fullStyle.lineDash);
        $("#edgeWidth").val(forAll ? app.GetDefaultEdgeWidth() : selectedEdges[0].model.width);

        $("#weightEdgeTextColor").val(fullStyle.additionalTextColor);
        $("#weightTextPosition").val(fullStyle.weightPosition);

        if (self.index > 0 || self.index == "all") {
            $("#EdgeSelectedIndexForm").show();
            $("#edgeSelectedIndex").val(self.index);
        }
        else {
            $("#EdgeSelectedIndexForm").hide();
        }

        // Fill color presets.
        var stylesArray = [];
        stylesArray.push(app.edgeCommonStyle);

        for (i = 0; i < app.edgeSelectedStyles.length; i++)
            stylesArray.push(app.edgeSelectedStyles[i]);

        var colorSet = {};
        for (i = 0; i < stylesArray.length; i++) {
            var style = stylesArray[i];
            if (style.hasOwnProperty('strokeStyle'))
                colorSet[style.strokeStyle] = 1;
            if (style.hasOwnProperty('fillStyle'))
                colorSet[style.fillStyle] = 1;
            if (style.hasOwnProperty('additionalTextColor'))
                colorSet[style.additionalTextColor] = 1;
        }

        $("#edgeFillColorPreset").find('option').remove();
        $("#weightEdgeTextColorPreset").find('option').remove();
        $("#edgeTextColorPreset").find('option').remove();
        $("#edgeStrokeColorPreset").find('option').remove();
        for (const property in colorSet) {
            $("#edgeFillColorPreset").append(new Option(property));
            $("#weightEdgeTextColorPreset").append(new Option(property));
            $("#edgeTextColorPreset").append(new Option(property));
            $("#edgeStrokeColorPreset").append(new Option(property));
        }
    }

    var redrawVertex = function () {
        var fullStyle = self.style.GetStyle({}, forAll ? undefined : selectedEdges[0]);

        if (fullStyle.fillStyle != $("#edgeFillColor").val())
            self.style.fillStyle = $("#edgeFillColor").val();

        if (fullStyle.strokeStyle != $("#edgeStrokeColor").val())
            self.style.strokeStyle = $("#edgeStrokeColor").val();

        if (fullStyle.weightText != $("#edgeTextColor").val())
            self.style.weightText = $("#edgeTextColor").val();

        if (fullStyle.lineDash != $("#edgeStyle").val())
            self.style.lineDash = $("#edgeStyle").val();

        if (fullStyle.additionalTextColor != $("#weightEdgeTextColor").val())
            self.style.additionalTextColor = $("#weightEdgeTextColor").val();

        if (fullStyle.weightPosition != $("#weightTextPosition").val())
            self.style.weightPosition = $("#weightTextPosition").val();

        var edgeWidth = parseInt($("#edgeWidth").val());

        var canvas = document.getElementById("EdgePreview");
        var context = canvas.getContext('2d');

        context.save();

        var backgroundDrawer = new BaseBackgroundDrawer(context);
        backgroundDrawer.Draw(app.backgroundCommonStyle, canvas.width, canvas.height, new Point(0, 0), 1.0);

        var graphDrawer = new BaseEdgeDrawer(context);
        var baseVertex1 = new BaseVertex(0, canvas.height / 2, new BaseEnumVertices(this));
        var baseVertex2 = new BaseVertex(canvas.width, canvas.height / 2, new BaseEnumVertices(this));

        baseVertex1.currentStyle = baseVertex1.getStyleFor(0);
        baseVertex2.currentStyle = baseVertex2.getStyleFor(0);

        var baseEdge = new BaseEdge(baseVertex1, baseVertex2, true, 10, "Text");

        if (!forAll)
            baseEdge.ownStyles = selectedEdges[0].ownStyles;

        baseEdge.model.width = edgeWidth;

        graphDrawer.Draw(baseEdge, self.style.GetStyle({}, baseEdge));

        context.restore();
    }

    var changeIndex = function () {
        var val = $("#edgeSelectedIndex").val();
        if (val == "all") {
            applyIndex(1);
            self.index = "all";
            fillFields();
        }
        else {
            var index = parseInt(val);
            self.index = index;
            applyIndex(index);
            fillFields();
        }

        redrawVertex();
    }

    var applyWidth = function (width) {
        if (forAll) {
            app.SetDefaultEdgeWidth(width);
        }
        else {
            selectedEdges.forEach(function (edge) {
                edge.model.width = width;
            });
        }
    };

    dialogButtons[g_default] =
    {
        text: g_default,
        class: "MarginLeft",
        click: function () {
            app.PushToStack("ChangeStyle");

            applyWidth(forAll ? (new EdgeModel()).width : app.GetDefaultEdgeWidth());
            var indexes = [];
            if (self.index == "all") {
                for (i = 0; i < app.edgeSelectedStyles.length; i++)
                    indexes.push(i + 1);
            }
            else
                indexes.push(self.index);

            if (forAll) {
                indexes.forEach(function (index) {
                    app.ResetEdgeStyle(index);
                });
            }
            else {
                selectedEdges.forEach(function (edge) {
                    indexes.forEach(function (index) {
                        edge.resetOwnStyle(index);
                    });
                });
            }

            app.redrawGraph();
            $(this).dialog("close");
        }
    };

    dialogButtons[g_save] = function () {

        app.PushToStack("ChangeStyle");

        applyWidth(parseInt($("#edgeWidth").val()));

        var indexes = [];
        if (self.index == "all") {
            indexes.push({ index: 1, style: self.style });

            for (i = 1; i < app.edgeSelectedStyles.length; i++) {
                var style = (new BaseEdgeStyle());
                style.baseStyles.push("selected");
                indexes.push({ index: i + 1, style: style });
            }

            self.style.baseStyles = [];
            self.style.baseStyles = self.style.baseStyles.concat((new SelectedEdgeStyle0()).baseStyles);
        }
        else
            indexes.push({ index: self.index, style: self.style });

        if (forAll) {
            indexes.forEach(function (index) {
                app.SetEdgeStyle(index.index, index.style);
            });
        }
        else {
            selectedEdges.forEach(function (edge) {
                indexes.forEach(function (index) {
                    edge.setOwnStyle(index.index, index.style);
                });
            });
        }
        app.redrawGraph();
        $(this).dialog("close");
    };
    dialogButtons[g_cancel] = function () {
        $(this).dialog("close");
    };

    fillFields();

    $("#SetupEdgeStyleDialog").dialog({
        resizable: false,
        height: "auto",
        width: "auto",
        modal: true,
        title: g_edgeDraw,
        buttons: dialogButtons,
        dialogClass: 'EdgeDialog'
    });

    redrawVertex();

    $("#edgeFillColor").unbind();
    $("#edgeStrokeColor").unbind();
    $("#edgeTextColor").unbind();
    $("#edgeStyle").unbind();
    $("#edgeWidth").unbind();
    $("#weightEdgeTextColor").unbind();
    $("#weightTextPosition").unbind();
    $("#edgeSelectedIndex").unbind();

    $("#edgeFillColor").change(redrawVertex);
    $("#edgeStrokeColor").change(redrawVertex);
    $("#edgeTextColor").change(redrawVertex);
    $("#edgeStyle").change(redrawVertex);
    $("#edgeWidth").change(redrawVertex);
    $("#weightEdgeTextColor").change(redrawVertex);
    $("#weightTextPosition").change(redrawVertex);
    $("#edgeSelectedIndex").change(changeIndex);
}

/**
 * Setup Background Style rename vertices.
 *
 */
function SetupBackgroundStyle(app) {
    BaseHandler.apply(this, arguments);
    this.message = "";
}

// inheritance.
SetupBackgroundStyle.prototype = Object.create(BaseHandler.prototype);

SetupBackgroundStyle.prototype.show = function () {
    var handler = this;
    var dialogButtons = {};
    var graph = this.app.graph;
    var app = this.app;
    var style = FullObjectCopy(app.backgroundCommonStyle);

    var fillFields = function () {
        $("#backgroundColor").val(style.commonColor);
        $("#backgroundTransporent").val(style.commonOpacity);
    }

    var redrawVertex = function () {
        style.commonColor = $("#backgroundColor").val();
        style.commonOpacity = $("#backgroundTransporent").val();

        var canvas = document.getElementById("BackgroundPreview");
        var context = canvas.getContext('2d');

        context.save();

        var backgroundDrawer = new BaseBackgroundDrawer(context);
        backgroundDrawer.Draw(style, canvas.width, canvas.height, new Point(0, 0), 1.0);

        context.restore();
    }

    dialogButtons[g_default] =
    {
        text: g_default,
        class: "MarginLeft",
        click: function () {

            app.PushToStack("ChangeBackground");

            app.ResetBackgroundStyle();
            app.redrawGraph();
            $(this).dialog("close");
        }
    };

    dialogButtons[g_save] = function () {
        app.PushToStack("ChangeBackground");
        app.SetBackgroundStyle(style);
        app.redrawGraph();
        $(this).dialog("close");
    };
    dialogButtons[g_cancel] = function () {
        $(this).dialog("close");
    };

    fillFields();

    $("#SetupBackgroundStyleDialog").dialog({
        resizable: false,
        height: "auto",
        width: "auto",
        modal: true,
        title: g_backgroundStyle,
        buttons: dialogButtons,
        dialogClass: 'EdgeDialog'
    });

    redrawVertex();

    $("#backgroundColor").unbind();
    $("#backgroundTransporent").unbind();

    $("#backgroundColor").change(redrawVertex);
    $("#backgroundTransporent").change(redrawVertex);
}
/**
 *  This class creates GraphML xml.
 *
 */


function GraphMLCreator(nodes, arcs, ignoreNodes = {}) {
    this.nodes = nodes;
    this.arcs = arcs;
    this.ignoreNodes = ignoreNodes;
}


GraphMLCreator.prototype.GetXMLString = function () {
    console.log("GraphMLCreator.prototype.GetXMLString", this)
    var mainHeader = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><graphml>";
    var directedHeader = "<graph id=\"Graph\" edgedefault=\"directed\">";
    var undirectedHeader = "<graph id=\"Graph\" edgedefault=\"undirected\">";

    var defaultWeight = 1.0;
    var weightKeyId = "\"d0\"";
    var weightNode = "<key id=" + weightKeyId + " for=\"node\" attr.name=\"weight\" attr.type=\"double\">" +
        "<default>" + defaultWeight + "</default>" +
        "</key>";

    var xmlBody = "";

    for (var i = 0; i < this.nodes.length; i++) {
        if (!this.ignoreNodes.hasOwnProperty(this.nodes[i].id))
            xmlBody = xmlBody + "<node id=\"" + this.nodes[i].id + "\"/>";
    }
    var hasDirected = false;
    for (var i = 0; i < this.arcs.length; i++) {
        if (this.arcs[i].isDirect) {
            hasDirected = true;
            break;
        }
    }
    for (var i = 0; i < this.arcs.length; i++) {
        var weightData = "";
        var arc = this.arcs[i];

        if (this.arcs[i].weight != defaultWeight) {
            weightData = "<data key=" + weightKeyId + ">" + arc.weight + "</data>";
        }

        xmlBody = xmlBody + "<edge source=\"" + arc.vertex1.id + "\" target=\""
            + arc.vertex2.id + "\" " +
            (arc.isDirect != hasDirected ? (hasDirected ? "directed=\"false\"" : "directed=\"true\"") : "") +
            " id=\"" + arc.id + "\"";

        xmlBody = xmlBody + ((weightData != "") ? ">" + weightData + "</edge>" : "/>")
    }
    xml = mainHeader + weightNode + (hasDirected ? directedHeader : undirectedHeader) + xmlBody + "</graph></graphml>"

    console.log("GraphMLCreator.prototype.GetXMLString xml", xml)

    return xml;
}
/**
 * Graph class.
 *
 */


function Graph() {
    // List of vertex.
    this.vertices = [];
    // List of arcs.
    this.edges = [];
    // Unique Id of new graph.
    this.uidGraph = 0;
    // Unique Id of new edge.
    this.uidEdge = 10000;
    // Has direction edge.
    this.hasDirect = false;
    // Is graph multi
    this.isMultiGraph = false;
};

// infinity
Graph.prototype.infinity = 1E8;
// Max vertices
Graph.prototype.maxVertices = 1000;
// Offset for edges ids.
Graph.prototype.edgesOffset = 10000;

Graph.prototype.AddNewVertex = function (vertex) {
    if (this.vertices.length <= this.maxVertices) {
        vertex.SetId(this.uidGraph);
        this.uidGraph = this.uidGraph + 1;
        this.vertices.push(vertex);
    }
    console.log("bước 7.5: AddNewVertex len(vertices): ", this.vertices.length)
    return this.vertices.length - 1;
}

Graph.prototype.ClearGraph = function () {
    // List of vertex.
    this.vertices = [];
    // List of arcs.
    this.edges = [];
    // Unique Id of new graph.
    this.uidGraph = 0;
    // Unique Id of new edge.
    this.uidEdge = 10000;
    // Has direction edge.
    this.hasDirect = false;
    // Is graph multi
    this.isMultiGraph = false;
}

Graph.prototype.AddNewEdgeSafe = function (graph1, graph2, isDirect, weight, replaceIfExists = true) {
    return this.AddNewEdge(new BaseEdge(graph1, graph2, isDirect, weight), replaceIfExists);
}

Graph.prototype.AddNewEdge = function (edge, replaceIfExists) {
    edge.id = this.uidEdge;
    this.uidEdge = this.uidEdge + 1;

    var edge1 = this.FindEdgeAny(edge.vertex1.id, edge.vertex2.id);
    var edgeRevert = this.FindEdgeAny(edge.vertex2.id, edge.vertex1.id);
    if (!edge.isDirect) {
        if (edge1 != null && replaceIfExists)
            this.DeleteEdge(edge1);
        if (edgeRevert != null && replaceIfExists)
            this.DeleteEdge(edgeRevert);

        this.edges.push(edge);
    }
    else {
        if (edge1 != null && replaceIfExists)
            this.DeleteEdge(edge1);
        if (edgeRevert != null && !edgeRevert.isDirect && replaceIfExists)
            this.DeleteEdge(edgeRevert);

        this.edges.push(edge);
    }

    this.isMultiGraph = this.checkMutiGraph();

    return this.edges.length - 1;
}
// hàm xóa cạnh
Graph.prototype.DeleteEdge = function (edgeObject) {
    var index = this.edges.indexOf(edgeObject);
    if (index > -1) {
        this.edges.splice(index, 1);
    }

    this.isMultiGraph = this.checkMutiGraph();
}

Graph.prototype.DeleteVertex = function (vertexObject) {
    var index = this.vertices.indexOf(vertexObject);
    if (index > -1) {
        for (var i = 0; i < this.edges.length; i++) {
            if (this.edges[i].vertex1 == vertexObject || this.edges[i].vertex2 == vertexObject) {
                this.DeleteEdge(this.edges[i]);
                i--;
            }
        }
        this.vertices.splice(index, 1);
    }
}

Graph.prototype.HasConnectedNodes = function (vertexObject) {
    var res = false;

    var index = this.vertices.indexOf(vertexObject);
    if (index > -1) {
        for (var i = 0; i < this.edges.length; i++) {
            if (this.edges[i].vertex1 == vertexObject || this.edges[i].vertex2 == vertexObject) {
                res = true;
                break;
            }
        }
    }

    return res;
}

Graph.prototype.FindVertex = function (id) {
    var res = null;
    for (var i = 0; i < this.vertices.length; i++) {
        if (this.vertices[i].id == id) {
            res = this.vertices[i];
            break;
        }
    }

    return res;
}

Graph.prototype.FindVertexByTitle = function (title) {
    var res = null;
    for (var i = 0; i < this.vertices.length; i++) {
        if (this.vertices[i].mainText == title) {
            res = this.vertices[i];
            break;
        }
    }

    return res;
}

// deprecated
Graph.prototype.FindEdge = function (id1, id2) {
    return this.FindEdgeAny(id1, id2);
}

Graph.prototype.FindEdgeById = function (edgeId) {
    var res = null;
    for (var i = 0; i < this.edges.length; i++) {
        if (this.edges[i].id == edgeId) {
            res = this.edges[i];
            break;
        }
    }

    return res;
}

Graph.prototype.FindEdgeAny = function (id1, id2) {
    var res = null;
    for (var i = 0; i < this.edges.length; i++) {
        if ((this.edges[i].vertex1.id == id1 && this.edges[i].vertex2.id == id2)
            || (!this.edges[i].isDirect && this.edges[i].vertex1.id == id2 && this.edges[i].vertex2.id == id1)) {
            res = this.edges[i];
            break;
        }
    }

    return res;
}

Graph.prototype.FindEdgeMin = function (id1, id2) {
    var res = null;
    var minWeight = this.infinity;
    for (var i = 0; i < this.edges.length; i++) {
        var edge = this.edges[i];
        if ((edge.vertex1.id == id1 && edge.vertex2.id == id2)
            || (!edge.isDirect && edge.vertex1.id == id2 && edge.vertex2.id == id1)) {
            if (edge.weight < minWeight) {
                res = edge;
                minWeight = edge.weight;
            }
        }
    }

    return res;
}

Graph.prototype.FindEdgeMax = function (id1, id2) {
    var res = null;
    var maxWeight = 0;
    for (var i = 0; i < this.edges.length; i++) {
        var edge = this.edges[i];
        if ((edge.vertex1.id == id1 && edge.vertex2.id == id2)
            || (!edge.isDirect && edge.vertex1.id == id2 && edge.vertex2.id == id1)) {
            if (edge.weight > maxWeight) {
                res = edge;
                maxWeight = edge.weight;
            }
        }
    }

    return res;
}

Graph.prototype.FindEdgeMinIgnoreDirection = function (id1, id2) {
    var res = null;
    var minWeight = this.infinity;
    for (var i = 0; i < this.edges.length; i++) {
        var edge = this.edges[i];
        if ((edge.vertex1.id == id1 && edge.vertex2.id == id2)
            || (edge.vertex1.id == id2 && edge.vertex2.id == id1)) {
            if (edge.weight < minWeight) {
                res = edge;
                minWeight = edge.weight;
            }
        }
    }

    return res;
}

Graph.prototype.FindAllEdges = function (id1, id2) {
    var res = [];
    for (var i = 0; i < this.edges.length; i++) {
        var edge = this.edges[i];
        if ((edge.vertex1.id == id1 && edge.vertex2.id == id2)
            || (!edge.isDirect && edge.vertex1.id == id2 && edge.vertex2.id == id1)) {
            res.push(edge);
        }
    }

    return res;
}

Graph.prototype.GetAdjacencyMatrixStr = function () {
    var matrix = "";
    for (var i = 0; i < this.vertices.length; i++) {
        for (var j = 0; j < this.vertices.length; j++) {
            var edge = this.FindEdgeMin(this.vertices[i].id, this.vertices[j].id);
            if (edge != null) {
                matrix += edge.weight;
            }
            else {
                matrix += "0";
            }

            if (j != this.vertices.length) {
                matrix += ", ";
            }

        }
        matrix = matrix + "\n";
    }

    return matrix;
}

Graph.prototype.GetAdjacencyMatrix = function () {
    var matrix = [];

    for (var i = 0; i < this.vertices.length; i++) {
        matrix.push([]);
        var v1 = this.vertices[i];
        for (var j = 0; j < this.vertices.length; j++) {
            var v2 = this.vertices[j];
            var edge = this.FindEdgeMin(v1.id, v2.id);
            if (edge != null) {
                matrix[i][j] = edge.GetWeight();
            }
            else {
                matrix[i][j] = this.infinity;
            }
        }
    }

    return matrix;
}

Graph.prototype.TestAdjacencyMatrix = function (matrix, rowsObj, colsObj, separator) {
    if (separator === undefined) {
        separator = ",";
    }

    var bGoodFormat = true;
    rowsObj.rows = [];
    rowsObj.rows = matrix.split("\n");
    for (j = 0; j < rowsObj.rows.length; ++j) {
        //rowsObj.rows[j] = rowsObj.rows[j].replace(/ /g,'');
        if (rowsObj.rows[j] === "") {
            rowsObj.rows.splice(j--, 1);
        }
    }

    colsObj.cols = [];
    for (var i = 0; i < rowsObj.rows.length; i++) {
        colsObj.cols[i] = this.SplitMatrixString(rowsObj.rows[i], separator);//rowsObj.rows[i].split (",");
        for (j = 0; j < colsObj.cols[i].length; ++j) {
            if (colsObj.cols[i][j] === "") {
                colsObj.cols[i].splice(j--, 1);
            }
        }
        if (colsObj.cols[i].length != rowsObj.rows.length) {
            bGoodFormat = false;
            break;
        }
    }

    return bGoodFormat;
}

Graph.prototype.TestPair = function (pair) {
    let lines = pair.split("\n");
    // Check:
    // a - b
    // a > b
    // a < b
    // a-(1)-b
    // a-(1)>b
    // a<(1)-b
    let regExp = [
        /^.+-.+$/g,
        /^.+\>.+$/g,
        /^.+<.+$/g,
        /^.+-\(\d+\.?\d+\)-.+$/g,
        /^.+-\(\d+\.?\d+\)\>.+$/g,
        /^.+<\(\d+\.?\d+\)\-.+$/g
    ];
    let res = true;
    for (let i = 0; i < lines.length; ++i) {
        let resLine = false;
        let line = lines[i];
        if (line == "") {
            continue;
        }
        for (let j = 0; j < regExp.length; ++j) {
            if (line.match(regExp[j])) {
                resLine = true;
            }
        }
        res = resLine && res;
    }

    return res;
}


Graph.prototype.IsVerticesHaveSamePosition = function (position, vertexCount) {
    var res = false;

    for (var j = 0; j < Math.min(this.vertices.length, vertexCount); j++) {
        if (position.distance(this.vertices[j].position) < this.vertices[j].model.diameter * 2) {
            res = true;
            break;
        }
    }

    return res;
}

Graph.prototype.GetRandomPosition = function (viewportSize) {
    return new Point(Math.random() * viewportSize.x, Math.random() * viewportSize.y);
}

Graph.prototype.GetRandomPositionOfVertex = function (matrix, vertexIndex, viewportSize) {
    var point = new Point(0, 0);

    var relatedVertex = [];

    for (var j = 0; j < matrix.length; j++) {
        if (j < this.vertices.length && (cols[vertexIndex][j] > 0 || cols[j][vertexIndex] > 0) && j != vertexIndex) {
            relatedVertex.push(this.vertices[j]);
        }
    }


    var diameter = (new VertexModel()).diameter;

    if (relatedVertex.length > 1) {
        for (var j = 0; j < relatedVertex.length; j++) {
            point = point.add(relatedVertex[j].position);
        }

        point = point.multiply(1 / relatedVertex.length);

        point.offset(Math.random() * diameter + (Math.random() ? -1 : 1) * 2 * diameter, Math.random() * diameter + (Math.random() ? -1 : 1) * 2 * diameter);
    }
    else {
        point = new Point(Math.random() * viewportSize.x, Math.random() * viewportSize.y);
    }

    if (this.IsVerticesHaveSamePosition(point, matrix.length)) {
        point.offset(Math.random() * diameter + + (Math.random() ? -1 : 1) * 4 * diameter,
            Math.random() * diameter + + (Math.random() ? -1 : 1) * 4 * diameter);
    }

    // Clamp
    point.x = Math.min(Math.max(point.x, diameter), viewportSize.x);
    point.y = Math.min(Math.max(point.y, diameter), viewportSize.y);

    return point;
}

Graph.prototype.VerticesReposition = function (viewportSize, newVertices) {
    var maxGravityDistanceSqr = Math.max(viewportSize.x, viewportSize.y) / 5.0;
    maxGravityDistanceSqr = maxGravityDistanceSqr * maxGravityDistanceSqr;
    //Math.min(viewportSize.x, viewportSize.y) / 2.0;
    var velocityDamping = 0.85;
    var diameter = (new VertexModel()).diameter;
    var maxDistance = diameter * 3;
    var gravityDistanceSqr = 10 * (maxDistance * maxDistance);
    var edgeGravityKof = 10 / (maxDistance);
    var kCenterForce = 10 / (maxDistance * 10);
    var centerPoint = viewportSize.multiply(0.5);
    var velocityMax = maxDistance * 10;

    var edgesMatrix = {};
    for (var i = 0; i < this.edges.length; i++) {
        edgesMatrix[this.edges[i].vertex1.id + this.edges[i].vertex2.id * 1000] = 1;
        edgesMatrix[this.edges[i].vertex2.id + this.edges[i].vertex1.id * 1000] = 1;
    }

    var startAngel = Math.random() * 180.0;
    for (i = 0; i < newVertices.length; i++) // loop through vertices
    {
        newVertices[i].position.orbit(new Point(viewportSize.x / 2, viewportSize.y / 2), (viewportSize.x - diameter * 2) / 2,
            (viewportSize.y - diameter * 2) / 2, 360 * i / newVertices.length + startAngel);
    }

    var k = 0;
    var bChanged = true;
    while (k < 1000 && bChanged) {
        var vertexData = [];
        for (i = 0; i < newVertices.length; i++) // loop through vertices
        {
            // Has no in newVertices.
            var currentVertex = {};
            currentVertex.object = newVertices[i];
            currentVertex.net_force = new Point(0, 0);
            currentVertex.velocity = new Point(0, 0);
            vertexData.push(currentVertex);

            for (j = 0; j < this.vertices.length; j++) // loop through other vertices
            {
                otherVertex = this.vertices[j];

                if (otherVertex == currentVertex.object) continue;

                // squared distance between "u" and "v" in 2D space
                var rsq = currentVertex.object.position.distanceSqr(otherVertex.position);


                {
                    // counting the repulsion between two vertices
                    var force = (currentVertex.object.position.subtract(otherVertex.position)).normalize(gravityDistanceSqr / rsq);
                    currentVertex.net_force = currentVertex.net_force.add(force);
                }
            }

            for (j = 0; j < this.vertices.length; j++) // loop through edges
            {
                otherVertex = this.vertices[j];
                if (edgesMatrix.hasOwnProperty(currentVertex.object.id + 1000 * otherVertex.id)) {
                    var distance = currentVertex.object.position.distance(otherVertex.position);

                    if (distance > maxDistance) {
                        // counting the attraction
                        var force = (otherVertex.position.subtract(currentVertex.object.position)).normalize(edgeGravityKof * (distance - maxDistance));
                        currentVertex.net_force = currentVertex.net_force.add(force);
                    }
                }
            }

            // Calculate force to center of world.
            var distanceToCenter = centerPoint.distance(currentVertex.object.position);
            var force = centerPoint.subtract(currentVertex.object.position).normalize(distanceToCenter * kCenterForce);
            currentVertex.net_force = currentVertex.net_force.add(force);

            // counting the velocity (with damping 0.85)
            currentVertex.velocity = currentVertex.velocity.add(currentVertex.net_force);
        }

        bChanged = false;

        for (i = 0; i < vertexData.length; i++) // set new positions
        {
            var v = vertexData[i];
            var velocity = v.velocity;
            if (velocity.length() > velocityMax) {
                velocity = velocity.normalize(velocityMax);
            }
            v.object.position = v.object.position.add(velocity);
            if (velocity.length() >= 1) {
                bChanged = true;
            }
        }
        k++;
    }


    // Looks like something going wrong and will use circle algorithm for reposition.
    var bbox = this.getGraphBBox();
    if (bbox.size().length() > viewportSize.length() * 1000) {
        for (i = 0; i < newVertices.length; i++) // loop through vertices
        {
            newVertices[i].position.orbit(new Point(viewportSize.x / 2, viewportSize.y / 2), (viewportSize.x - diameter * 2) / 2,
                (viewportSize.y - diameter * 2) / 2, 360 * i / newVertices.length + startAngel);
        }
    }
    else {
        // Try to rotate graph to fill small area.
        var count = 10;
        var angle = 360.0 / count;
        var viewportAspect = viewportSize.x / viewportSize.y;
        var bestIndex = 0;
        var graphSize = bbox.size();
        var bestAspect = graphSize.x / graphSize.y;
        var center = bbox.center();

        for (var i = 1; i < count; i++) {
            for (j = 0; j < newVertices.length; j++) // loop through vertices
            {
                newVertices[j].position.rotate(center, angle);
            }

            var newBBox = this.getGraphBBox();
            var newAspect = newBBox.size().x / newBBox.size().y;
            if (Math.abs(newAspect - viewportAspect) < Math.abs(bestAspect - viewportAspect)) {
                bestAspect = newAspect;
                bestIndex = i;
            }
        }

        // Rotate to best aspect.
        for (j = 0; j < newVertices.length; j++) // loop through vertices
        {
            newVertices[j].position.rotate(center, - angle * (count - bestIndex - 1));
        }
    }
}

Graph.prototype.SetAdjacencyMatrix = function (matrix, viewportSize, currentEnumVerticesType, separator) {
    if (separator === undefined) {
        separator = ",";
    }

    var rowsObj = {};
    var colsObj = {};

    //ViewportSize = viewportSize.subtract(new Point((new VertexModel()).diameter * 2, (new VertexModel()).diameter * 2));

    if (this.TestAdjacencyMatrix(matrix, rowsObj, colsObj, separator)) {
        rows = rowsObj.rows;
        cols = colsObj.cols;

        var clonedEdge = this.edges.slice(0);
        for (var i = 0; i < clonedEdge.length; i++) {
            this.DeleteEdge(clonedEdge[i]);
        }

        var newVertices = [];
        var bWeightGraph = false;

        for (var i = 0; i < rows.length; i++) {
            for (var j = 0; j < rows.length; j++) {
                if (j >= this.vertices.length) {
                    var newPos = this.GetRandomPositionOfVertex(matrix, j, viewportSize);
                    newVertices.push(new BaseVertex(newPos.x, newPos.y, currentEnumVerticesType));
                    this.AddNewVertex(newVertices[newVertices.length - 1]);
                }

                if (cols[i][j] > 0) {
                    var nEdgeIndex = this.AddNewEdgeSafe(this.vertices[i], this.vertices[j], cols[i][j] != cols[j][i], cols[i][j], true);
                    this.FixEdgeCurve(nEdgeIndex);
                    if (nEdgeIndex >= 0) {
                        bWeightGraph = bWeightGraph || this.edges[nEdgeIndex].weight != 1;
                    }
                }
            }
        }

        // Set use weight false, because we have unweighted graph.
        if (!bWeightGraph) {
            this.edges.forEach(function (part, index, theArray) {
                theArray[index].useWeight = false;
            });
        }

        for (var i = rows.length; i < Math.max(this.vertices.length, rows.length); i++) {
            this.DeleteVertex(this.vertices[i]);
            i--;
        }

        this.VerticesReposition(viewportSize, newVertices);
    }
}

Graph.prototype.SetPair = function (pairs, viewportSize, currentEnumVerticesType) {
    if (this.TestPair(pairs)) {
        this.ClearGraph();

        let lines = pairs.split("\n");
        // Extract:
        // a - b
        // a > b
        // a < b
        // a-(1)-b
        // a-(1)>b
        // a<(1)-b
        let regExp = [
            /^(.+)-(.+)$/g,
            /^(.+)\>(.+)$/g,
            /^(.+)<(.+)$/g,
            /^(.+)-\((\d+|\d+\.?\d+)\)-(.+)$/g,
            /^(.+)-\((\d+|\d+\.?\d+)\)\>(.+)$/g,
            /^(.+)<\((\d+|\d+\.?\d+)\)\-(.+)$/g,
        ];

        let bWeightGraph = false;
        var newVertices = [];

        for (var i = 0; i < lines.length; i++) {
            let line = lines[i];
            if (line == "") {
                continue;
            }

            for (let j = regExp.length - 1; j >= 0; --j) {
                if (!line.match(regExp[j])) {
                    continue;
                }

                let groupes = Array.from(line.matchAll(regExp[j]));
                let groupe = groupes[0];
                let vetext1Title = groupe[1];
                let vertex1 = this.FindVertexByTitle(vetext1Title);
                if (vertex1 == null) {
                    let newPosition = this.GetRandomPosition(viewportSize);
                    vertex1 = this.vertices[this.AddNewVertex(new BaseVertex(newPosition.x, newPosition.y, currentEnumVerticesType))];
                    vertex1.mainText = vetext1Title;
                    newVertices.push(vertex1);
                }
                let vetext2Title = groupe[j <= 2 ? 2 : 3];
                let vertex2 = this.FindVertexByTitle(vetext2Title);
                if (vertex2 == null) {
                    let newPosition = this.GetRandomPosition(viewportSize);
                    vertex2 = this.vertices[this.AddNewVertex(new BaseVertex(newPosition.x, newPosition.y, currentEnumVerticesType))];
                    vertex2.mainText = vetext2Title;
                    newVertices.push(vertex2);
                }
                let isDirect = j == 1 || j == 2 || j == 4 || j == 5;
                let weight = 1;
                if (j > 2) {
                    weight = groupe[2];
                    bWeightGraph = true;
                }
                let isRevertEdge = j == 2 || j == 5;

                let nEdgeIndex = this.AddNewEdgeSafe(isRevertEdge ? vertex2 : vertex1, isRevertEdge ? vertex1 : vertex2, isDirect, weight, false);
                this.FixEdgeCurve(nEdgeIndex);
                break;
            }
        }

        // Set use weight false, because we have unweighted graph.
        if (!bWeightGraph) {
            this.edges.forEach(function (part, index, theArray) {
                theArray[index].useWeight = false;
            });
        }

        this.VerticesReposition(viewportSize, newVertices);
    }
}


Graph.prototype.TestIncidenceMatrix = function (matrix, rowsObj, colsObj, separator) {
    if (separator === undefined) {
        separator = ",";
    }

    var bGoodFormat = true;
    rowsObj.rows = [];
    rowsObj.rows = matrix.split("\n");
    for (j = 0; j < rowsObj.rows.length; ++j) {
        if (rowsObj.rows[j] === "") {
            rowsObj.rows.splice(j--, 1);
        }
    }
    colsObj.cols = [];
    var columnCount = 0;
    for (var i = 0; i < rowsObj.rows.length; i++) {
        colsObj.cols[i] = this.SplitMatrixString(rowsObj.rows[i], separator);//rowsObj.rows[i].split (",");
        for (j = 0; j < colsObj.cols[i].length; ++j) {
            if (colsObj.cols[i][j] === "") {
                colsObj.cols[i].splice(j--, 1);
            }
        }
        if (i == 0) {
            columnCount = colsObj.cols[i].length;
        }
        if (colsObj.cols[i].length != columnCount) {
            bGoodFormat = false;
            break;
        }
    }


    if (bGoodFormat) {
        for (var i = 0; i < colsObj.cols[0].length; i++) {
            var values = [];
            for (j = 0; j < colsObj.cols.length; ++j) {
                if (colsObj.cols[j][i] != 0) {
                    values.push(colsObj.cols[j][i]);
                }
            }

            if (!(values.length <= 1 || (values.length == 2 && (values[0] == values[1] || values[0] == -values[1])))) {
                bGoodFormat = false;
                break;
            }
        }
    }

    return bGoodFormat;
}

Graph.prototype.SetIncidenceMatrix = function (matrix, viewportSize, currentEnumVerticesType) {
    var rowsObj = {};
    var colsObj = {};

    //ViewportSize = viewportSize.subtract(new Point((new VertexModel()).diameter * 2, (new VertexModel()).diameter * 2));
    if (this.TestIncidenceMatrix(matrix, rowsObj, colsObj)) {
        rows = rowsObj.rows;
        cols = colsObj.cols;
        var clonedEdge = this.edges.slice(0);
        for (var i = 0; i < clonedEdge.length; i++) {
            this.DeleteEdge(clonedEdge[i]);
        }
        var newVertices = [];
        var bWeightGraph = false;
        for (var i = 0; i < cols[0].length; i++) {
            var edgeValue = [];
            var edgeIndex = [];
            for (var j = 0; j < cols.length; j++) {
                if (j >= this.vertices.length) {

                    var newPos = new Point(0, 0);//this.GetRandomPositionOfVertex (matrix, j, viewportSize);
                    newVertices.push(new BaseVertex(newPos.x, newPos.y, currentEnumVerticesType));
                    this.AddNewVertex(newVertices[newVertices.length - 1]);
                }

                if (cols[j][i] != 0) {
                    edgeValue.push(cols[j][i]);
                    edgeIndex.push(j);
                }
            }

            if (edgeIndex.length == 1) {
                edgeValue.push(edgeValue[0]);
                edgeIndex.push(edgeIndex[0]);
            }

            if (edgeIndex.length == 2) {
                if (edgeValue[0] != edgeValue[1]) {
                    if (edgeValue[1] > 0) {
                        edgeValue = edgeValue.swap(0, 1);
                        edgeIndex = edgeIndex.swap(0, 1);
                    }
                }

                var nEdgeIndex = this.AddNewEdgeSafe(this.vertices[edgeIndex[0]], this.vertices[edgeIndex[1]],
                    edgeValue[0] != edgeValue[1], Math.abs(edgeValue[1]), false);

                this.FixEdgeCurve(nEdgeIndex);
                if (nEdgeIndex >= 0) {
                    bWeightGraph = bWeightGraph || this.edges[nEdgeIndex].weight != 1;
                }
            }
        }

        // Set use weight false, because we have unweighted graph.
        if (!bWeightGraph) {
            this.edges.forEach(function (part, index, theArray) {
                theArray[index].useWeight = false;
            });
        }

        for (var i = cols.length; i < Math.max(this.vertices.length, cols.length); i++) {
            this.DeleteVertex(this.vertices[i]);
            i--;
        }

        this.VerticesReposition(viewportSize, newVertices);
    }
}

Graph.prototype.GetIncidenceMatrix = function () {
    var matrix = "";
    for (var i = 0; i < this.vertices.length; i++) {
        for (var j = 0; j < this.edges.length; j++) {
            if (this.edges[j].vertex1 == this.vertices[i]) {
                matrix += this.edges[j].weight;
            }
            else if (this.edges[j].vertex2 == this.vertices[i] && !this.edges[j].isDirect) {
                matrix += this.edges[j].weight;
            }
            else if (this.edges[j].vertex2 == this.vertices[i] && this.edges[j].isDirect) {
                matrix += -this.edges[j].weight;
            }
            else {
                matrix += "0";
            }

            if (j != this.edges.length - 1) {
                matrix += ", ";
            }

        }
        matrix = matrix + "\n";
    }

    return matrix;
}

Graph.prototype.SplitMatrixString = function (line, separator) {
    if (separator === undefined) {
        separator = ",";
    }

    var res = [];
    var i = 0;

    // For case: 00110101101
    var isZeroOneLine = true;

    for (i = 0; i < line.length; i++) {
        if (line.charAt(i) != '0' && line.charAt(i) != '1') {
            isZeroOneLine = false;
            break;
        }
    }

    if (!isZeroOneLine) {
        if (separator != ",") {
            line = line.replace(/,/g, ".");
        }
        for (i = 0; i < line.length; i++) {
            // add , if we use space as separator
            if (("0123456789.-e").indexOf(line.charAt(i)) < 0) {
                if (i > 0) {
                    res.push(line.substr(0, i));
                }
                if (i == 0) {
                    i = 1;
                }
                line = line.substr(i, line.length - i);
                i = -1;
            }
        }
        if (line.length > 0) {
            res.push(line);
        }
    }
    else {
        for (i = 0; i < line.length; i++) {
            res.push(line.charAt(i));
        }
    }

    console.log(res);
    return res;
}


Graph.prototype.SaveToXML = function (additionalData) {
    var mainHeader = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><graphml>";
    var header = "<graph id=\"Graph\" uidGraph=\"" + this.uidGraph + "\"" + " uidEdge=\"" + this.uidEdge + "\">";

    var xmlBody = "";

    for (var i = 0; i < this.vertices.length; i++) {
        xmlBody = xmlBody + this.vertices[i].SaveToXML();
    }

    xmlBody = xmlBody + "";

    for (var i = 0; i < this.edges.length; i++) {
        xmlBody = xmlBody + this.edges[i].SaveToXML();
    }

    xmlBody = xmlBody + "";

    additionalField = "";
    if (additionalData.length > 0) {
        additionalField = "<additional data=\"" + additionalData + "\"/>"
    }

    return mainHeader + header + xmlBody + "</graph>" + additionalField + "</graphml>";
}

Graph.prototype.LoadFromXML = function (xmlText, additionalData) {
    xmlDoc = $.parseXML(xmlText);
    var $xml = $(xmlDoc);

    $graphs = $xml.find("graph");

    var loadedGraphId = 0;
    var loadedEdgeId = 0;

    $graphs.each(function () {
        loadedGraphId = parseInt($(this).attr('uidGraph'));
        loadedEdgeId = parseInt($(this).attr('uidEdge'));
    });

    // Backward compatibility
    if (isNaN(loadedEdgeId)) {
        loadedEdgeId = this.edgesOffset;
    } else if (loadedEdgeId < this.edgesOffset) {
        loadedEdgeId = this.edgesOffset;
    }

    this.uidGraph = loadedGraphId;
    this.uidEdge = loadedEdgeId;

    $nodes = $xml.find("node");

    var vertices = [];

    $nodes.each(function () {
        var vertex = new BaseVertex();
        vertex.LoadFromXML($(this));
        vertices.push(vertex);
    });
    this.vertices = vertices;

    $edges = $xml.find("edge");

    var edges = [];
    var graph = this;
    $edges.each(function () {
        var edge = new BaseEdge();
        edge.LoadFromXML($(this), graph);
        // Fix case with wrong id.
        if (edge.id < graph.uidEdge) {
            edge.id = graph.uidEdge;
            graph.uidEdge++;
        }
        edges.push(edge);
    });

    this.edges = edges;

    $additional = $xml.find("additional");
    if ($additional.length != 0 && additionalData != null) {
        additionalData["data"] = $additional.attr('data');
    }

    this.isMultiGraph = this.checkMutiGraph();
}

Graph.prototype.hasDirectEdge = function () {
    var res = false;
    for (var i = 0; i < this.edges.length; i++) {
        if (this.edges[i].isDirect) {
            res = true;
            break;
        }
    }

    return res;
}

Graph.prototype.hasUndirectEdge = function () {
    var res = false;
    for (var i = 0; i < this.edges.length; i++) {
        if (!this.edges[i].isDirect) {
            res = true;
            break;
        }
    }

    return res;
}

Graph.prototype.hasEdges = function () {
    return this.edges.length > 0;
}

Graph.prototype.clampPositions = function (viewportSize) {
    var diameter = (new VertexModel()).diameter;

    for (i = 0; i < this.vertices.length; i++) // set new positions
    {
        this.vertices[i].position.x = Math.min(Math.max(this.vertices[i].position.x, diameter), viewportSize.x - diameter);
        this.vertices[i].position.y = Math.min(Math.max(this.vertices[i].position.y, diameter), viewportSize.y - diameter);
    }
}

// Use to setup scaling.
Graph.prototype.getGraphBBox = function (viewportSize) {
    var pointMin = new Point(1e5, 1e5);
    var pointMax = new Point(-1e5, -1e5);
    var diameter = (new VertexModel()).diameter;

    for (i = 0; i < this.vertices.length; i++) {
        var vertex = this.vertices[i];
        var factor = vertex.diameterFactor();
        var deltaVector = new Point(factor.x * diameter, factor.y * diameter);
        pointMin = pointMin.min(vertex.position.subtract(deltaVector));
        pointMax = pointMax.max(vertex.position.add(deltaVector));
    }

    var max_curve_length = 32;

    for (i = 0; i < this.edges.length; i++) {
        var edge = this.edges[i];

        if (edge.model.type == EdgeModels.curve) {
            var max_curve = edge.vertex2.position.subtract(edge.vertex1.position).length() / max_curve_length;

            for (j = 0; j < max_curve; j++) {
                var point = edge.model.GetCurvePoint(edge.vertex1.position, edge.vertex2.position, j / max_curve);
                var deltaVector = new Point(max_curve_length, max_curve_length);
                pointMin = pointMin.min(point.subtract(deltaVector));
                pointMax = pointMax.max(point.add(deltaVector));
            }
        }
    }

    return new Rect(pointMin, pointMax);
}

Graph.prototype.hasPair = function (edge) {
    return this.FindPairFor(edge) != null;
}

Graph.prototype.FindPairFor = function (edge) {
    var res = this.getNeighborEdges(edge);

    return res.length == 1 ? res[0] : null;
}

Graph.prototype.getNeighborEdges = function (edge) {
    var res = [];

    for (var i = 0; i < this.edges.length; i++) {
        var curEdge = this.edges[i];
        if (curEdge == edge)
            continue;

        if ((curEdge.vertex1.id == edge.vertex1.id &&
            curEdge.vertex2.id == edge.vertex2.id) ||
            (curEdge.vertex1.id == edge.vertex2.id &&
                curEdge.vertex2.id == edge.vertex1.id)) {
            res.push(curEdge);
        }
    }

    return res;
}

Graph.prototype.checkMutiGraph = function () {
    var res = false;

    var start = {};

    for (var i = 0; i < this.edges.length; i++) {
        var edge = this.edges[i];
        if (start.hasOwnProperty(edge.vertex1.id) &&
            start[edge.vertex1.id] == edge.vertex2.id) {
            res = true;
            break;
        }

        start[edge.vertex1.id] = edge.vertex2.id;
        if (!edge.isDirect) {
            if (start.hasOwnProperty(edge.vertex2.id) &&
                start[edge.vertex2.id] == edge.vertex1.id) {
                res = true;
                break;
            }

            start[edge.vertex2.id] = edge.vertex1.id;
        }
    }

    return res;
}

Graph.prototype.isMulti = function () {
    return this.isMultiGraph;
}

Graph.prototype.isNeedReposition = function () {
    var res = false;
    for (var i = 0; i < this.vertices.length; i++) {
        res = res || this.vertices[i].IsUndefinedPosition();
    }
    return res;
}

Graph.prototype.FixEdgeCurve = function (edgeIndex) {
    var edgeObject = this.edges[edgeIndex];
    var hasPair = this.hasPair(edgeObject);
    var neighborEdges = this.getNeighborEdges(edgeObject);

    if (hasPair) {
        if (edgeObject.model.default)
            edgeObject.model.type = EdgeModels.curve;

        var pairEdge = this.FindPairFor(edgeObject);
        if (pairEdge.model.default) {
            pairEdge.model.type = EdgeModels.curve;
            if (pairEdge.vertex1 == edgeObject.vertex1 && pairEdge.vertex2 == edgeObject.vertex2)
                pairEdge.model.curveValue = -pairEdge.model.curveValue;
        }
    }
    else if (neighborEdges.length >= 2) {
        var curve = this.GetAvailableCurveValue(neighborEdges, edgeObject);
        if (edgeObject.model.default) {
            edgeObject.model.type = EdgeModels.curve;
            edgeObject.model.curveValue = curve;
        }
    }
}

Graph.prototype.GetAvailableCurveValue = function (neighborEdges, originalEdge) {
    var values = [];

    for (var i = 0; i < neighborEdges.length; i++) {
        var edge = neighborEdges[i];
        var sameDirection = (originalEdge.vertex1.id == edge.vertex1.id);
        if (edge.model.type == EdgeModels.curve) {
            values[(sameDirection ? edge.model.curveValue : -edge.model.curveValue)] = true;
        }
    }

    var changeValue = DefaultHandler.prototype.curveValue;
    var defaultValue = 0.0;
    var maxSearch = 10;

    for (var i = 1; i < maxSearch; i++) {
        value = i * changeValue;
        if (!values.hasOwnProperty(value))
            return value;

        value = - i * changeValue;
        if (!values.hasOwnProperty(value))
            return value;
    }

    return defaultValue;
}

Graph.prototype.reverseAllEdges = function () {
    for (var i = 0; i < this.edges.length; i++) {
        if (this.edges[i].isDirect) {
            let v1 = this.edges[i].vertex1;
            this.edges[i].vertex1 = this.edges[i].vertex2;
            this.edges[i].vertex2 = v1;
        }
    }

    this.isMultiGraph = this.checkMutiGraph();
}

Graph.prototype.makeAllEdgesDirected = function () {
    for (var i = 0; i < this.edges.length; i++) {
        if (!this.edges[i].isDirect) {
            this.edges[i].isDirect = true;
        }
    }

    this.isMultiGraph = this.checkMutiGraph();
}

Graph.prototype.makeAllEdgesUndirected = function () {
    for (var i = 0; i < this.edges.length; i++) {
        if (this.edges[i].isDirect) {
            this.edges[i].isDirect = false;
        }
    }

    this.isMultiGraph = this.checkMutiGraph();
}
/*
  Classes for creating text for vertices.
*/


/**
 * Base Enum Vertices.
 *
 */
function BaseEnumVertices(app, startNumber) {
    this.app = app;
    this.startNumber = startNumber;
}

BaseEnumVertices.prototype.GetVertexText = function (id) {
    return this.startNumber + id;
}

BaseEnumVertices.prototype.GetVertexTextAsync = function (callback) {
    callback(this);
}

BaseEnumVertices.prototype.GetText = function () {
    return this.startNumber + ", " + (this.startNumber + 1) + ", " + (this.startNumber + 2) + "...";
}

BaseEnumVertices.prototype.GetValue = function () {
    return "Numbers" + this.startNumber;
}

function TextEnumTitle(app, title) {
    BaseEnumVertices.apply(this, arguments);
    this.pattern = "";
    this.title = title;
}


// inheritance.
TextEnumTitle.prototype = Object.create(BaseEnumVertices.prototype);

TextEnumTitle.prototype.GetVertexText = function (id) {
    return this.title;
}



/**
 * Text Enum
 *
 */
function TextEnumVertices(app) {
    BaseEnumVertices.apply(this, arguments);
    this.pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}


// inheritance.
TextEnumVertices.prototype = Object.create(BaseEnumVertices.prototype);

TextEnumVertices.prototype.GetVertexText = function (id) {
    var res = "";

    res = this.pattern[id % this.pattern.length] + res;

    while (id >= this.pattern.length) {
        id = Math.floor(id / this.pattern.length) - 1;
        res = this.pattern[id % this.pattern.length] + res;
    }

    return res;
}


TextEnumVertices.prototype.GetText = function () {
    return "A, B, ... Z";
}

TextEnumVertices.prototype.GetValue = function () {
    return "Latin";
}

/**
 * Text Enum
 *
 */
function TextEnumVerticesCyr(app) {
    TextEnumVertices.apply(this, arguments);
    this.pattern = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
}


// inheritance.
TextEnumVerticesCyr.prototype = Object.create(TextEnumVertices.prototype);

TextEnumVerticesCyr.prototype.GetText = function () {
    return "А, Б, ... Я";
}

TextEnumVerticesCyr.prototype.GetValue = function () {
    return "Cyrillic";
}


/**
 * Text Enum
 *
 */
function TextEnumVerticesGreek(app) {
    TextEnumVertices.apply(this, arguments);
    this.pattern = "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ";
}


// inheritance.
TextEnumVerticesGreek.prototype = Object.create(TextEnumVertices.prototype);

TextEnumVerticesGreek.prototype.GetText = function () {
    return "Α, Β, ... Ω";
}

TextEnumVerticesGreek.prototype.GetValue = function () {
    return "Greek";
}

/**
 * Text Enum
 *
 */
function TextEnumVerticesCustom(app) {
    BaseEnumVertices.apply(this, arguments);
    this.pattern = "";
}



// inheritance.
TextEnumVerticesCustom.prototype = Object.create(BaseEnumVertices.prototype);

TextEnumVerticesCustom.prototype.GetText = function () {
    return g_customEnumVertex;
}

TextEnumVerticesCustom.prototype.GetValue = function () {
    return "Custom";
}

TextEnumVerticesCustom.prototype.GetVertexTextAsync = function (callback) {
    this.ShowDialog(callback, g_addVertex, g_addVertex, "A");
}


TextEnumVerticesCustom.prototype.ShowDialog = function (callback, buttonText, titleTitle, title) {
    var dialogButtons = {};
    app = this.app;
    dialogButtons[buttonText] = function () {
        app.PushToStack("RenameVertex");

        callback(new TextEnumTitle(app, $("#VertexTitle").val()));
        $(this).dialog("close");
    };

    $("#addVertex").dialog({
        resizable: false,
        height: "auto",
        width: "auto",
        modal: true,
        title: titleTitle,
        buttons: dialogButtons,
        dialogClass: 'EdgeDialog',
        open: function () {
            $(this).off('submit').on('submit', function () {
                return false;
            });
            $("#VertexTitle").val(title);
            $("#VertexTitle").focus();
        }
    });
}
/**
 * This is main application class.
 *
 */

var globalApplication = null;

function Application(document, window) {
    this.document = document;
    this.canvas = this.document.getElementById('canvas');
    this.handler = new DefaultHandler(this);
    this.savedGraphName = "";
    this.currentEnumVerticesType = new BaseEnumVertices(this, 1);//this.enumVerticesTextList[0];
    this.findPathReport = 1;
    this.isTimerRender = false;
    globalApplication = this;
    this.renderPath = [];
    this.renderTimer = 0;
    this.renderPathLength = 0;
    this.renderPathCounter = 0;
    this.renderPathLoops = 0;
    this.enumVerticesTextList = [new BaseEnumVertices(this, 1), new BaseEnumVertices(this, 0), new TextEnumVertices(this), new TextEnumVerticesCyr(this), new TextEnumVerticesGreek(this), new TextEnumVerticesCustom(this)];
    this.SetDefaultTransformations();
    this.algorithmsValues = {};
    this.userAction = function () { };
    this.undoStack = [];

    this.edgeCommonStyle = new CommonEdgeStyle();
    this.isEdgeCommonStyleCustom = false;
    this.edgeSelectedStyles = FullArrayCopy(DefaultSelectedEdgeStyles);
    this.isEdgeSelectedStylesCustom = false;

    this.edgePrintCommonStyle = new CommonPrintEdgeStyle();
    this.edgePrintSelectedStyles = FullArrayCopy(DefaultPrintSelectedEdgeStyles);

    this.vertexCommonStyle = new CommonVertexStyle();
    this.isVertexCommonStyleCustom = false;
    this.vertexSelectedVertexStyles = FullArrayCopy(DefaultSelectedGraphStyles);
    this.isVertexSelectedVertexStylesCustom = false;

    this.vertexPrintCommonStyle = new CommonPrintVertexStyle();
    this.vertexPrintSelectedVertexStyles = FullArrayCopy(DefaultPrintSelectedGraphStyles);

    this.backgroundCommonStyle = new CommonBackgroundStyle();
    this.backgroundPrintStyle = new PrintBackgroundStyle();
    this.isBackgroundCommonStyleCustom = false;
    this.renderPathWithEdges = false;

    this.edgePresets = [1, 3, 5, 7, 11, 42];
    this.maxEdgePresets = 6;
    this.selectionRect = null;

    this.defaultVertexSize = null;
    this.defaultEdgeWidth = null;
    this.processEmscriptenFunction = null;

    this.defaultEdge = null;
    this.useDefaultEdge = false;
};

// List of graph.
//Application.prototype.graph.vertices     = [];
// Current dragged object.
Application.prototype.graph = new Graph();
Application.prototype.dragObject = -1;
// List of graph.edges.
//Application.prototype.graph.edges       = [];
// User handler.
Application.prototype.handler = null;
// Hold status.
Application.prototype.status = {};
// Graph name length
Application.prototype.graphNameLength = 16;
// Max undo stack size
Application.prototype.maxUndoStackSize = 8;

Application.prototype.getMousePos = function (canvas, e) {
    /// getBoundingClientRect is supported in most browsers and gives you
    /// the absolute geometry of an element
    var rect = canvas.getBoundingClientRect();

    /// as mouse event coords are relative to document you need to
    /// subtract the element's left and top position:
    return { x: (e.clientX - rect.left) / this.canvasScale - this.canvasPosition.x, y: (e.clientY - rect.top) / this.canvasScale - this.canvasPosition.y };
}

Application.prototype.redrawGraph = function () {
    console.log("bước 8: redrawGraph")
    if (!this.isTimerRender) {
        this._redrawGraphInWindow();

        this.GraphTypeChanged();
    }
}

Application.prototype.redrawGraphTimer = function () {
    if (this.isTimerRender) {
        var context = this._redrawGraphInWindow();

        // Render path
        if (this.renderPath.length > 1) {
            context.save();
            context.scale(this.canvasScale, this.canvasScale);
            context.translate(this.canvasPosition.x, this.canvasPosition.y);

            var movePixelStep = 16;
            var currentLength = 0;

            var i = 0
            for (i = 0; i < this.renderPath.length - 1; i++) {
                var edge = null;
                if (this.renderPathWithEdges) {
                    edge = this.graph.FindEdgeById(this.renderPath[i + 1]);
                    i++;
                }
                else if (this.renderMinPath) {
                    edge = this.graph.FindEdgeMin(this.renderPath[i], this.renderPath[i + 1]);
                }
                else {
                    edge = this.graph.FindEdge(this.renderPath[i], this.renderPath[i + 1]);
                }

                currentLength += edge.GetPixelLength();
                if (currentLength > this.renderPathCounter) {
                    currentLength -= edge.GetPixelLength();
                    break;
                }
            }

            if (i >= this.renderPath.length - 1) {
                i = 0;
                if (this.renderPathWithEdges)
                    i = 1;
                this.renderPathCounter = 0;
                currentLength = 0;
                this.renderPathLoops += 1;
            }

            var edge = null;
            var currentVertexId = this.renderPath[i];
            if (this.renderPathWithEdges) {
                edge = this.graph.FindEdgeById(this.renderPath[i]);
                currentVertexId = this.renderPath[i - 1];
            }
            else if (this.renderMinPath) {
                edge = this.graph.FindEdgeMin(this.renderPath[i], this.renderPath[i + 1]);
            }
            else {
                edge = this.graph.FindEdge(this.renderPath[i], this.renderPath[i + 1]);
            }

            var progress = (this.renderPathCounter - currentLength) / edge.GetPixelLength();

            this.RedrawEdgeProgress(context, edge, edge.vertex1.id == currentVertexId ? progress : 1.0 - progress);

            this.renderPathCounter += movePixelStep;

            context.restore();
        }
    }

    if (this.renderPathLoops >= 5) {
        this.stopRenderTimer();
    }
}

Application.prototype._redrawGraphInWindow = function () {
    // console.log("bước 9: _redrawGraphInWindow")

    var context = this.canvas.getContext('2d');

    context.save();

    context.scale(this.canvasScale, this.canvasScale);
    context.translate(this.canvasPosition.x, this.canvasPosition.y);

    this._RedrawGraph(context, this.canvasPosition, this.backgroundCommonStyle, true);

    context.restore();

    return context;
}

Application.prototype._OffscreenRedrawGraph = function () {
    var bbox = this.graph.getGraphBBox();
    var canvas = document.createElement('canvas');
    canvas.width = bbox.size().x;
    canvas.height = bbox.size().y;
    var context = canvas.getContext('2d');

    context.save();

    context.translate(bbox.minPoint.inverse().x, bbox.minPoint.inverse().y);

    this._RedrawGraph(context, bbox.minPoint.inverse(), this.backgroundCommonStyle, false);

    context.restore();

    return canvas;
}

Application.prototype._PrintRedrawGraph = function () {
    var bbox = this.graph.getGraphBBox();
    var canvas = document.createElement('canvas');
    canvas.width = bbox.size().x;
    canvas.height = bbox.size().y;
    var context = canvas.getContext('2d');

    context.save();

    context.translate(bbox.minPoint.inverse().x, bbox.minPoint.inverse().y);

    this._RedrawGraph(context, bbox.minPoint.inverse(), this.backgroundPrintStyle, false,
        this.vertexPrintCommonStyle, this.vertexPrintSelectedVertexStyles,
        this.edgePrintCommonStyle, this.edgePrintSelectedStyles);

    context.restore();

    return canvas;
}

Application.prototype._printToSVG = function () {
    var bbox = this.graph.getGraphBBox();
    var context = new C2S(bbox.size().x, bbox.size().y);

    context.save();

    context.translate(bbox.minPoint.inverse().x, bbox.minPoint.inverse().y);

    this._RedrawGraph(context, bbox.minPoint.inverse(), this.backgroundCommonStyle, false);

    context.restore();

    return context.getSerializedSvg();
}

Application.prototype.updateRenderPathLength = function () {
    this.renderPathLength = 0;
    this.renderPathCounter = 0;
    if (this.renderPath.length > 1) {
        for (var i = 0; i < this.renderPath.length - 1; i++) {
            var edge = null;
            if (this.renderPathWithEdges) {
                edge = this.graph.FindEdgeById(this.renderPath[i + 1]);
                i++;
            }
            else {
                edge = this.graph.FindEdge(this.renderPath[i], this.renderPath[i + 1]);
            }
            this.renderPathLength += edge.GetPixelLength();
        }
    }
}

Application.prototype.startRenderTimer = function () {
    this.updateRenderPathLength();
    this.renderTimer = window.setInterval(function () { globalApplication.redrawGraphTimer(); }, 50);
    this.isTimerRender = true;
    this.renderPathLoops = 0;
}

Application.prototype.stopRenderTimer = function () {
    if (this.isTimerRender) {
        window.clearInterval(this.renderTimer);
        this.isTimerRender = false;
        this.renderPathLoops = 0;
    }
}

Application.prototype.setRenderPath = function (renderPath, renderMinPath) {
    console.log("lộc log setRenderPath", renderPath, renderMinPath);

    this.renderPath = renderPath;
    this.renderMinPath = renderMinPath;
    this.renderPathWithEdges = false;

    if (this.renderPath.length > 0) {
        this.startRenderTimer();
    }
    else {
        this.stopRenderTimer();
    }
}

Application.prototype.setRenderPathWithEdges = function (renderPath) {
    this.renderPath = renderPath;
    this.renderMinPath = false;
    this.renderPathWithEdges = true;

    if (this.renderPath.length > 0) {
        this.startRenderTimer();
    }
    else {
        this.stopRenderTimer();
    }
}

Application.prototype.GetBaseArcDrawer = function (context, edge) {
    var arcDrawer = new BaseEdgeDrawer(context);

    // kiểm tra xem kiểu của cạnh có phải cong không để trả về đối tượng vẽ cạnh phù hợp
    if (edge.model.type == EdgeModels.curve) {
        var curvedArcDrawer = new CurvedArcDrawer(context, edge.model);

        arcDrawer = new BaseEdgeDrawer(context,
            {
                drawArc: curvedArcDrawer,
                startArrowDirection: curvedArcDrawer,
                finishArrowDirection: curvedArcDrawer,
                textCenterObject: curvedArcDrawer,
                getPointOnArc: curvedArcDrawer
            }
        );
    }

    return arcDrawer;
}

Application.prototype.UpdateEdgeCurrentStyle = function (edge, ForceCommonStyle, ForceSelectedStyle) {
    var commonStyle = (ForceCommonStyle === undefined) ? this.edgeCommonStyle : ForceCommonStyle;
    var selectedStyle = (ForceSelectedStyle === undefined) ? this.edgeSelectedStyles : ForceSelectedStyle;

    var selectedGroup = this.handler.GetSelectedGroup(edge);
    var selected = false;
    if (selectedGroup > 0) {
        selectedGroup = (selectedGroup - 1) % selectedStyle.length;
        selected = true;
    }

    var currentStyle = null;
    if (edge.hasOwnStyleFor((selected ? 1 : 0) + selectedGroup))
        currentStyle = edge.getStyleFor((selected ? 1 : 0) + selectedGroup);
    else
        currentStyle = selected ? selectedStyle[selectedGroup] : commonStyle;

    edge.currentStyle = currentStyle;
}

Application.prototype.RedrawEdge = function (context, edge) {
    var curvedArcDrawer = new CurvedArcDrawer(context, edge.model)
    var arcDrawer = this.GetBaseArcDrawer(context, edge);

    this._RedrawEdge(edge, arcDrawer);
}

Application.prototype._RedrawEdge = function (edge, arcDrawer, commonStyle, selectedStyles) {
    this._RedrawEdgeWithStyle(edge, edge.currentStyle, arcDrawer, commonStyle, selectedStyles);
}

Application.prototype._RedrawEdgeWithStyle = function (edge, style, arcDrawer, commonStyle, selectedStyles) {
    arcDrawer.Draw(edge, style.GetStyle({}, edge));
}

Application.prototype.RedrawEdgeProgress = function (context, edge, progress) {
    var progressDraw = new ProgressArcDrawer(context, this.GetBaseArcDrawer(context, edge), progress);
    var arcDrawer = new BaseEdgeDrawer(context, { drawObject: progressDraw });

    this._RedrawEdge(edge, arcDrawer, this.edgeCommonStyle, this.edgeSelectedStyles);
}

Application.prototype.UpdateEdgesCurrentStyle = function (ForceCommonStyle, ForceSelectedStyle) {
    for (i = 0; i < this.graph.edges.length; i++) {
        this.UpdateEdgeCurrentStyle(this.graph.edges[i], ForceCommonStyle, ForceSelectedStyle);
    }
}

Application.prototype.RedrawEdges = function (context) {
    // console.log("bước 10.5: RedrawEdges", this.graph.edges.length)
    for (i = 0; i < this.graph.edges.length; i++) {
        this.RedrawEdge(context, this.graph.edges[i]);
    }
}

Application.prototype.RedrawNodes = function (context) {
    // console.log("bước 10.5: RedrawNodes", this.graph.vertices.length)

    var graphDrawer = new BaseVertexDrawer(context);

    for (i = 0; i < this.graph.vertices.length; i++) {
        graphDrawer.Draw(this.graph.vertices[i], this.graph.vertices[i].currentStyle.GetStyle({}, this.graph.vertices[i]));
    }
}

Application.prototype.UpdateNodesCurrentStyle = function (ForceCommonStyle, ForceSelectedStyle) {
    var force = ForceCommonStyle !== undefined || ForceSelectedStyle !== undefined;
    var commonStyle = (ForceCommonStyle === undefined) ? this.vertexCommonStyle : ForceCommonStyle;
    var selectedStyle = (ForceSelectedStyle === undefined) ? this.vertexSelectedVertexStyles : ForceSelectedStyle;

    for (i = 0; i < this.graph.vertices.length; i++) {
        var selectedGroup = this.handler.GetSelectedGroup(this.graph.vertices[i]);
        var selected = false;
        if (selectedGroup > 0) {
            selectedGroup = (selectedGroup - 1) % selectedStyle.length;
            selected = true;
        }

        var currentStyle = null;
        if (this.graph.vertices[i].hasOwnStyleFor((selected ? 1 : 0) + selectedGroup) && !force)
            currentStyle = this.graph.vertices[i].getStyleFor((selected ? 1 : 0) + selectedGroup);
        else
            currentStyle = selected ? selectedStyle[selectedGroup] : commonStyle;

        this.graph.vertices[i].currentStyle = currentStyle;
    }
}

Application.prototype.RedrawSelectionRect = function (context) {
    console.log("lộc log RedrawSelectionRect")
    context.lineWidth = 1.0 / this.canvasScale;

    context.strokeStyle = this.edgeSelectedStyles[0].strokeStyle;
    context.setLineDash([6, 3]);
    context.beginPath();
    context.rect(this.selectionRect.left(), this.selectionRect.top(),
        this.selectionRect.size().x, this.selectionRect.size().y);
    context.closePath();
    context.stroke();

    context.setLineDash([]);
}

Application.prototype.updateMessage = function () {
    this.document.getElementById('message').innerHTML = this.handler.GetMessage();
    this.handler.InitControls();
}

Application.prototype.CanvasOnMouseMove = function (e) {
    // X,Y position.
    var pos = this.getMousePos(this.canvas, e);
    this.handler.MouseMove(pos);
    if (this.handler.IsNeedRedraw()) {
        this.handler.RestRedraw();
        this.redrawGraph();
    }

    this.updateMessage();
}

Application.prototype.CanvasOnMouseDown = function (e) {
    // Skip non left button.
    if (e.which !== 1) return;

    var pos = this.getMousePos(this.canvas, e); /// provide this canvas and event
    console.log("bước 5: CanvasOnMouseDown", this.handler)
    this.handler.MouseDown(pos);
    if (this.handler.IsNeedRedraw()) {
        this.handler.RestRedraw();
        this.redrawGraph();
    }
    console.log("graph", this.graph)

    this.updateMessage();
}

Application.prototype.CanvasOnMouseUp = function (e) {
    // Skip non left button.
    if (e.which !== 1) return;

    //	this.dragObject = -1;
    var pos = this.getMousePos(this.canvas, e);

    this.handler.MouseUp(pos);
    if (this.handler.IsNeedRedraw()) {
        this.handler.RestRedraw();
        this.redrawGraph();
    }

    this.updateMessage();
}

Application.prototype.multCanvasScale = function (factor, zoom_to = null) {
    if (zoom_to) // zoom on cursor
    {
        var pos1 = this.getMousePos(this.canvas, zoom_to); // mouse position before zooming
        this.canvasScale *= factor;
        var pos2 = this.getMousePos(this.canvas, zoom_to); // mouse position after zooming

        this.canvasPosition = this.canvasPosition.add(new Point(pos2.x - pos1.x, pos2.y - pos1.y));
    }
    else // zoom on center
    {
        var oldRealWidth = this.GetRealWidth();
        var oldRealHeight = this.GetRealHeight();
        this.canvasScale *= factor;

        this.canvasPosition = this.canvasPosition.add(new Point((this.GetRealWidth() - oldRealWidth) / 2.0, (this.GetRealHeight() - oldRealHeight) / 2.0));
    }

    this.redrawGraph();
}

Application.prototype.setCanvasScale = function (factor) {
    var oldRealWidth = this.GetRealWidth();
    var oldRealHeight = this.GetRealHeight();

    this.canvasScale = factor;

    this.canvasPosition = this.canvasPosition.add(new Point((this.GetRealWidth() - oldRealWidth) / 2.0,
        (this.GetRealHeight() - oldRealHeight) / 2.0));

    this.redrawGraph();
}

Application.prototype.onCanvasMove = function (point) {
    this.canvasPosition = this.canvasPosition.add(point.multiply(1 / this.canvasScale));
    this.redrawGraph();
}

Application.prototype.AddNewVertex = function (vertex) {
    return this.graph.AddNewVertex(vertex);
}

Application.prototype.AddNewEdge = function (edge, replaceIfExists) {
    return this.graph.AddNewEdge(edge, replaceIfExists);
}

Application.prototype.CreateNewGraph = function (x, y) {
    console.log("bước 7: CreateNewGraph")
    var app = this;

    this.currentEnumVerticesType.GetVertexTextAsync(
        function (enumType) {
            app.graph.AddNewVertex(new BaseVertex(x, y, enumType));
            app.redrawGraph();
        });
}

Application.prototype.CreateNewGraphEx = function (x, y, vertexEnume) {
    return this.graph.AddNewVertex(new BaseVertex(x, y, vertexEnume));
}

Application.prototype.CreateNewArc = function (graph1, graph2, isDirect, weight, replaceIfExist, upText) {
    var edge = this.AddNewEdge(new BaseEdge(graph1, graph2, isDirect, weight, upText), replaceIfExist);

    this.graph.FixEdgeCurve(edge);

    var edgeObject = this.graph.edges[edge];

    if (edgeObject.useWeight)
        this.UpdateEdgePresets(edgeObject.weight);

    return edge;
}

Application.prototype.DeleteEdge = function (edgeObject) {
    var vertex1 = edgeObject.vertex1;
    var vertex2 = edgeObject.vertex2;

    var hasPair = this.graph.hasPair(edgeObject);

    this.graph.DeleteEdge(edgeObject);

    // Make line for pair.
    if (hasPair) {
        var pairEdges = this.FindAllEdges(vertex2.id, vertex1.id);

        if (pairEdges.length == 1 && pairEdges[0].model.default)
            pairEdges[0].model.type = EdgeModels.line;
    }
}

Application.prototype.DeleteVertex = function (graphObject) {
    this.graph.DeleteVertex(graphObject);
}

Application.prototype.DeleteObject = function (object) {
    if (object instanceof BaseVertex) {
        this.DeleteVertex(object);
    }
    else if (object instanceof BaseEdge) {
        this.DeleteEdge(object);
    }
}

Application.prototype.IsCorrectObject = function (object) {
    return (object instanceof BaseVertex) ||
        (object instanceof BaseEdge);
}

Application.prototype.FindVertex = function (id) {
    return this.graph.FindVertex(id);
}

Application.prototype.FindEdge = function (id1, id2) {
    return this.graph.FindEdge(id1, id2);
}

Application.prototype.FindEdgeAny = function (id1, id2) {
    return this.graph.FindEdgeAny(id1, id2);
}

Application.prototype.FindAllEdges = function (id1, id2) {
    return this.graph.FindAllEdges(id1, id2);
}

Application.prototype.SetHandlerMode = function (mode) {
    var manipulationHandlers = ["default", "addGraph", "addArc", "delete", "findPath", "connectedComponent", "eulerianLoop"];
    console.log("------ mode: ", mode, "--------------------------------")
    if (this.handler && (g_AlgorithmIds.indexOf(mode) >= 0 || manipulationHandlers.indexOf(mode) >= 0)) {
        console.log("buoc 4: setHandlerMode " + mode)
        this.handler.RestoreAll();
    }

    if (mode == "default") {
        this.handler = new DefaultHandler(this);
    }
    else if (mode == "addGraph") {
        console.log("bước 2: SetHandlerMode ", mode)
        this.handler = new AddGraphHandler(this);
    }
    else if (mode == "addArc") {
        console.log("step 2: SetHandlerMode ", mode)
        this.handler = new ConnectionGraphHandler(this);
    }
    else if (mode == "delete") {
        this.handler = new DeleteGraphHandler(this);
    }
    else if (mode == "deleteAll") {
        var removeAll = new DeleteAllHandler(this);
        removeAll.clear();
    }
    else if (mode == "findPath") {
        this.handler = new FindPathGraphHandler(this);
    }
    else if (mode == "showAdjacencyMatrix") {
        var showAdjacencyMatrix = new ShowAdjacencyMatrix(this);
        showAdjacencyMatrix.show();
    }
    else if (mode == "showIncidenceMatrix") {
        var showIncidenceMatrix = new ShowIncidenceMatrix(this);
        showIncidenceMatrix.show();
    }
    else if (mode == "showDistanceMatrix") {
        var showDistanceMatrix = new ShowDistanceMatrix(this);
        showDistanceMatrix.show();
    }
    else if (mode == "connectedComponent") {
        this.handler = new ConnectedComponentGraphHandler(this);
    }
    else if (mode == "saveDialog") {
        var savedDialogGraphHandler = new SavedDialogGraphHandler(this);
        savedDialogGraphHandler.show();
    }
    else if (mode == "saveDialogImage") {
        var savedDialogGraphImageHandler = new SavedDialogGraphImageHandler(this);
        savedDialogGraphImageHandler.showWorkspace();
    }
    else if (mode == "saveDialogFullImage") {
        var savedDialogGraphImageHandler = new SavedDialogGraphImageHandler(this);
        savedDialogGraphImageHandler.showFullgraph();
    }
    else if (mode == "savePrintGraphImage") {
        var savedDialogGraphImageHandler = new SavedDialogGraphImageHandler(this);
        savedDialogGraphImageHandler.showPrint();
    }
    else if (mode == "saveSvgGraphImage") {
        var savedDialogGraphImageHandler = new SavedDialogGraphImageHandler(this);
        savedDialogGraphImageHandler.showSvg();
    }
    else if (mode == "eulerianLoop") {
        this.handler = new EulerianLoopGraphHandler(this);
    }
    else if (mode == "GroupRename") {
        var groupRenameVertices = new GroupRenameVertices(this);
        groupRenameVertices.show();
    }
    else if (mode == "setupVertexStyle") {
        var setupVertexStyle = new SetupVertexStyle(this);
        setupVertexStyle.show(0);
    }
    else if (mode == "setupVertexStyleSelected") {
        var setupVertexStyle = new SetupVertexStyle(this);
        setupVertexStyle.show(1);
    }
    else if (mode == "setupEdgeStyle") {
        var setupEdgeStyle = new SetupEdgeStyle(this);
        setupEdgeStyle.show(0);
    }
    else if (mode == "setupEdgeStyleSelected") {
        var setupEdgeStyle = new SetupEdgeStyle(this);
        setupEdgeStyle.show(1);
    }
    else if (mode == "setupBackgroundStyle") {
        var setupBackgroundStyle = new SetupBackgroundStyle(this);
        setupBackgroundStyle.show();
    }
    else if (mode == "graphUndo") {
        if (!this.IsUndoStackEmpty())
            this.Undo();
    }
    else if (g_AlgorithmIds.indexOf(mode) >= 0) {
        console.log("buoc 4.5: xét handler ", mode)
        this.handler = new AlgorithmGraphHandler(this, g_Algorithms[g_AlgorithmIds.indexOf(mode)](this.graph, this));
    }

    console.log(mode);
    // jennie

    this.setRenderPath([]);

    // sửa lại message và gắn nó vào giao diện
    this.updateMessage();

    // vẽ lại graph
    this.redrawGraph();
}


Application.prototype.getParameterByName = function (name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

Application.prototype.onPostLoadEvent = function () {
    this.SetEnumVerticesType(document.cookie.replace(/(?:(?:^|.*;\s*)enumType\s*\=\s*([^;]*).*$)|^.*$/, "$1"));

    var wasLoad = false;
    var matrix = document.getElementById("inputMatrix").innerHTML;
    var separator = document.getElementById("separator").innerHTML == "space" ? " " : ",";

    console.log(matrix);
    console.log("separator: \"" + separator + "\"");

    matrix = (matrix.length <= 0) ? this.getParameterByName("matrix") : matrix;
    if (matrix.length > 0) {
        if (!this.SetAdjacencyMatrixSmart(matrix, separator)) {
            this.userAction("AdjacencyMatrix.Failed");
            this.ShowAdjacencyMatrixErrorDialog(matrix);
        }
        else {
            this.userAction("AdjacencyMatrix.Success");
        }

        this.updateMessage();
        this.redrawGraph();
        wasLoad = true;
    }

    var matrix = document.getElementById("inputIncidenceMatrix").innerHTML;
    matrix = (matrix.length <= 0) ? this.getParameterByName("incidenceMatrix") : matrix;

    if (matrix.length > 0) {
        if (!this.SetIncidenceMatrixSmart(matrix)) {
            this.userAction("IncidenceMatrix.Failed");
            this.ShowIncidenceMatrixErrorDialog(matrix);
        }
        else {
            this.userAction("IncidenceMatrix.Success");
        }

        this.updateMessage();
        this.redrawGraph();
        wasLoad = true;
    }

    var pairs = document.getElementById("inputPair").innerHTML;

    if (pairs.length > 0) {
        pairs = pairs.replaceAll('&gt;', '>');
        pairs = pairs.replaceAll('&lt;', '<');

        if (!this.SetPairSmart(pairs)) {
            this.userAction("Pair.Failed");
            this.ShowPairErrorDialog(pairs);
        }
        else {
            this.userAction("Pair.Success");
        }

        this.updateMessage();
        this.redrawGraph();
        wasLoad = true;
    }

    if (!wasLoad) {
        var graphName = this.getParameterByName("graph");
        if (graphName.length <= 0) {
            graphName = document.cookie.replace(/(?:(?:^|.*;\s*)graphName\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        }

        if (graphName.length > 0) {
            this.userAction("LoadGraphFromDisk");
            this.LoadGraphFromDisk(graphName);
        }
    }

    if (this.IsUndoStackEmpty())
        document.getElementById('GraphUndo').style.display = 'none';

    this.updateMessage();
    this.redrawGraph();
}

Application.prototype.onLoad = function () {
    this.canvas = this.document.getElementById('canvas');

    this.SetDefaultHandler();

    this.updateMessage();
    this.redrawGraph();
}

Application.prototype.NeedRedraw = function () {
    //TODO
    this.updateMessage();
    this.redrawGraph();
}

Application.prototype.SetStatus = function (name, value) {
    this.status[name] = value;
}

Application.prototype.GetStatus = function () {
    return this.status[name];
}


Application.prototype.GetAdjacencyMatrix = function () {
    return this.graph.GetAdjacencyMatrixStr();
}

Application.prototype.TestAdjacencyMatrix = function (matrix, rowsObj, colsObj, separator) {
    if (separator === undefined) {
        separator = ",";
    }

    return this.graph.TestAdjacencyMatrix(matrix, rowsObj, colsObj, separator);
}

Application.prototype.SetAdjacencyMatrix = function (matrix, separator) {
    if (separator === undefined) {
        separator = ",";
    }

    var res = true;
    var r = {};
    var c = {};
    if (!this.TestAdjacencyMatrix(matrix, r, c, separator)) {
        $.get("/" + SiteDir + "cgi-bin/addFailedMatrix.php?text=adjacency&matrix=" + encodeURIComponent(matrix), function (data) { ; });
        res = false;
    }

    this.graph.SetAdjacencyMatrix(matrix, new Point(this.GetRealWidth(), this.GetRealHeight()), this.currentEnumVerticesType, separator);
    this.AutoAdjustViewport();
    this.redrawGraph();
    return res;
}

Application.prototype.SetPair = function (pair) {
    var res = true;
    var r = {};
    var c = {};
    if (!this.TestPair(pair)) {
        $.get("/" + SiteDir + "cgi-bin/addFailedMatrix.php?text=pair&matrix=" + encodeURIComponent(pair), function (data) { ; });
        res = false;
    }

    this.graph.SetPair(pair, new Point(this.GetRealWidth(), this.GetRealHeight()), this.currentEnumVerticesType);
    this.AutoAdjustViewport();
    this.redrawGraph();
    return res;
}

Application.prototype.GetIncidenceMatrix = function () {
    return this.graph.GetIncidenceMatrix();
}

Application.prototype.TestIncidenceMatrix = function (matrix, rowsObj, colsObj) {
    return this.graph.TestIncidenceMatrix(matrix, rowsObj, colsObj);
}

Application.prototype.TestPair = function (pair) {
    return this.graph.TestPair(pair);
}

Application.prototype.SetIncidenceMatrix = function (matrix) {
    var res = true;
    var r = {};
    var c = {};
    if (!this.TestIncidenceMatrix(matrix, r, c)) {
        $.get("/" + SiteDir + "cgi-bin/addFailedMatrix.php?text=incidence&matrix=" + encodeURIComponent(matrix), function (data) { ; });
        res = false;
    }

    this.graph.SetIncidenceMatrix(matrix, new Point(this.GetRealWidth(), this.GetRealHeight()), this.currentEnumVerticesType);
    this.AutoAdjustViewport();
    this.redrawGraph();
    return res;
}

Application.prototype.Test = function () {
    this.graph.VerticesReposition(new Point(this.GetRealWidth(), this.GetRealHeight()), this.graph.vertices);
    this.redrawGraph();
}


Application.prototype.SetAdjacencyMatrixSmart = function (matrix, separator) {
    if (separator === undefined) {
        separator = ",";
    }

    var res = false;
    if (this.TestAdjacencyMatrix(matrix, {}, {}, separator)) {
        res = this.SetAdjacencyMatrix(matrix, separator);
    }
    else if (this.TestIncidenceMatrix(matrix, {}, {})) {
        res = this.SetIncidenceMatrix(matrix);
    }
    else {
        res = this.SetAdjacencyMatrix(matrix);
    }
    return res;
}

Application.prototype.SetIncidenceMatrixSmart = function (matrix) {
    var res = false;

    if (this.TestIncidenceMatrix(matrix, {}, {})) {
        res = this.SetIncidenceMatrix(matrix);
    }
    else if (this.TestAdjacencyMatrix(matrix, {}, {})) {
        res = this.SetAdjacencyMatrix(matrix);
    }
    else {
        res = this.SetIncidenceMatrix(matrix);
    }

    return res;
}

Application.prototype.SetPairSmart = function (pair) {
    var res = false;

    if (this.TestPair(pair)) {
        res = this.SetPair(pair);
    }
    else {
        res = false;
    }

    return res;
}


Application.prototype.SaveGraphOnDisk = function () {
    var graphAsString = this.graph.SaveToXML(this.SaveUserSettings());

    var styleSave = this.SaveUserSettings();

    if (this.savedGraphName.length <= 0) {
        this.savedGraphName = this.GetNewGraphName();
    }

    var app = this;
    $.ajax({
        type: "POST",
        url: "/" + SiteDir + "cgi-bin/saveGraph.php?name=" + this.savedGraphName,
        data: graphAsString,
        dataType: "text"
    })
        .done(function (msg) {
            document.cookie = "graphName=" + app.savedGraphName;
        });
}

Application.prototype.SaveGraphImageOnDisk = function (showDialogCallback) {
    var imageName = this.GetNewName();

    this.stopRenderTimer();
    this.redrawGraph();

    var bbox = this.graph.getGraphBBox();

    var rectParams = "";
    if (this.IsGraphFitOnViewport()) {
        var canvasWidth = this.GetRealWidth();
        var canvasHeight = this.GetRealHeight();
        var canvasPositionInverse = this.canvasPosition.inverse();

        var pos = bbox.minPoint.subtract(canvasPositionInverse);

        rectParams = "&x=" + Math.round(pos.x * this.canvasScale) + "&y=" + Math.round(pos.y * this.canvasScale)
            + "&width=" + Math.round(bbox.size().x * this.canvasScale) + "&height=" + Math.round(bbox.size().y * this.canvasScale);

        //console.log(rectParams);
    }

    var imageBase64Data = this.canvas.toDataURL();

    $.ajax({
        type: "POST",
        url: "/" + SiteDir + "cgi-bin/saveImage.php?name=" + imageName + rectParams,
        data: {
            base64data: imageBase64Data
        },
        dataType: "text",
        success: function (data) {
            showDialogCallback();
        }
    });

    return imageName;
}

Application.prototype.SaveFullGraphImageOnDisk = function (showDialogCallback, forPrint) {
    var imageName = this.GetNewName();

    this.stopRenderTimer();
    var canvas = forPrint ? this._PrintRedrawGraph() : this._OffscreenRedrawGraph();

    var bbox = this.graph.getGraphBBox();

    var rectParams = "";
    rectParams = "&x=0" + "&y=0" + "&width=" + bbox.size().x + "&height=" + bbox.size().y;

    var imageBase64Data = canvas.toDataURL();

    $.ajax({
        type: "POST",
        url: "/" + SiteDir + "cgi-bin/saveImage.php?name=" + imageName + rectParams,
        data: {
            base64data: imageBase64Data
        },
        dataType: "text",
        success: function (data) {
            showDialogCallback();
        }
    });

    return imageName;
}

Application.prototype.SaveSVGGraphOnDisk = function (showDialogCallback) {
    var imageName = this.GetNewName();

    this.stopRenderTimer();
    var svgText = this._printToSVG();

    var bbox = this.graph.getGraphBBox();

    var imageBase64Data = canvas.toDataURL();

    $.ajax({
        type: "POST",
        url: "/" + SiteDir + "cgi-bin/saveSvg.php?name=" + imageName,
        data: {
            svgdata: svgText
        },
        dataType: "text",
        success: function (data) {
            showDialogCallback();
        }
    });

    return imageName;
}

Application.prototype.LoadGraphFromString = function (str) {
    var graph = new Graph();

    //console.log(str);

    var userSettings = {};
    graph.LoadFromXML(str, userSettings);
    if (userSettings.hasOwnProperty("data") && userSettings["data"].length > 0)
        this.LoadUserSettings(userSettings["data"]);
    this.SetDefaultTransformations();
    this.graph = graph;
    if (this.graph.isNeedReposition()) {
        this.graph.VerticesReposition(new Point(this.GetRealWidth(), this.GetRealHeight()), this.graph.vertices);
    }
    this.AutoAdjustViewport();
    this.updateMessage();
    this.redrawGraph();
}

Application.prototype.LoadGraphFromDisk = function (graphName) {
    var app = this;

    $.ajax({
        type: "GET",
        url: "/" + SiteDir + "cgi-bin/loadGraph.php?name=" + graphName
    })
        .done(function (msg) {
            app.LoadGraphFromString(msg);
        });
}


Application.prototype.GetNewGraphName = function () {
    var name = this.GetNewName();

    if (this.isVertexCommonStyleCustom || this.isVertexSelectedVertexStylesCustom ||
        this.isBackgroundCommonStyleCustom || this.isEdgeCommonStyleCustom || this.isEdgeSelectedStylesCustom) {
        name = name + "ZZcst";
    }

    return name;
}

Application.prototype.GetNewName = function () {
    var name = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < this.graphNameLength; i++) {
        name += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return name;
}

Application.prototype.GetGraphName = function () {
    return this.savedGraphName;
}


Application.prototype.SetDefaultHandler = function () {
    restButtons('Default');
    this.SetHandlerMode("default");
}

Application.prototype.GetEnumVerticesList = function () {
    var res = [];

    for (var i = 0; i < this.enumVerticesTextList.length; i++) {
        var one = {};
        one["text"] = this.enumVerticesTextList[i].GetText();
        one["value"] = this.enumVerticesTextList[i].GetValue();

        one["select"] = this.enumVerticesTextList[i].GetValue() == this.currentEnumVerticesType.GetValue();

        res.push(one);
    }

    return res;
}

Application.prototype.SetEnumVerticesType = function (value) {
    for (var i = 0; i < this.enumVerticesTextList.length; i++) {
        if (this.enumVerticesTextList[i].GetValue() == value) {
            this.currentEnumVerticesType = this.enumVerticesTextList[i];
            document.cookie = "enumType=" + value;
            break;
        }
    }

}


Application.prototype.ShowAdjacencyMatrixErrorDialog = function (matrix) {
    var dialogButtons = {};

    matrixRes = matrix.replace(/\n/g, '%0A');
    dialogButtons[g_readMatrixHelp] = function () {
        window.location.assign(g_language == "ru" ? "./wiki/Справка/МатрицаСмежности#matrixFormat" : "./wiki/Help/AdjacencyMatrix#matrixFormat");
    };
    dialogButtons[g_fixMatrix] = function () {
        window.location.assign("./create_graph_by_matrix?matrix=" + matrixRes);
    };
    dialogButtons[g_close] = function () {
        $(this).dialog("close");
    };

    $("#matrixError").dialog({
        resizable: false,
        title: g_matrixWrongFormat,
        width: 400,
        modal: true,
        dialogClass: 'EdgeDialog',
        buttons: dialogButtons,
    });
}

Application.prototype.ShowIncidenceMatrixErrorDialog = function (matrix) {
    var dialogButtons = {};

    matrixRes = matrix.replace(/\n/g, '%0A');
    dialogButtons[g_readMatrixHelp] = function () {
        window.location.assign(g_language == "ru" ? "./wiki/Справка/МатрицаИнцидентности#matrixFormat" : "./wiki/Help/IncidenceMatrix#matrixFormat");
    };
    dialogButtons[g_fixMatrix] = function () {
        window.location.assign("./create_graph_by_incidence_matrix?incidenceMatrix=" + matrixRes);
    };
    dialogButtons[g_close] = function () {
        $(this).dialog("close");
    };

    $("#matrixErrorInc").dialog({
        resizable: false,
        title: g_matrixWrongFormat,
        width: 400,
        modal: true,
        dialogClass: 'EdgeDialog',
        buttons: dialogButtons,
    });
}

Application.prototype.ShowPairErrorDialog = function (pair) {
    var dialogButtons = {};

    pair = pair.replaceAll(/\n/g, '%0A');
    pair = pair.replaceAll('>', '&gt;');
    pair = pair.replaceAll('<', '&lt;');

    dialogButtons[g_readMatrixHelp] = function () {
        window.location.assign(g_language == "ru" ? "./wiki/Справка/СписокРебер" : "./wiki/Help/EdgeList");
    };
    dialogButtons[g_fix] = function () {
        window.location.assign("./create_graph_by_edge_list?pair=" + pair);
    };
    dialogButtons[g_close] = function () {
        $(this).dialog("close");
    };

    $("#pairErrorInc").dialog({
        resizable: false,
        title: g_pairWrongFormat,
        width: 400,
        modal: true,
        dialogClass: 'EdgeDialog',
        buttons: dialogButtons,
    });
}

Application.prototype.SetFindPathReport = function (value) {
    this.findPathReport = value;
}

Application.prototype.GetFindPathReport = function () {
    return this.findPathReport;
}

Application.prototype.GetRealWidth = function () {
    return this.canvas.width / this.canvasScale;
}

Application.prototype.GetRealHeight = function () {
    return this.canvas.height / this.canvasScale;
}

Application.prototype.SetDefaultTransformations = function () {
    this.canvasScale = 1.0;
    this.canvasPosition = new Point(0, 0);
}

Application.prototype.AutoAdjustViewport = function () {
    graphBBox = this.graph.getGraphBBox();
    bboxCenter = graphBBox.center();
    bboxSize = graphBBox.size();

    if (bboxSize.length() > 0) {
        // Setup size
        if (bboxSize.x > this.GetRealWidth() || bboxSize.y > this.GetRealHeight()) {
            this.canvasScale = Math.min(this.GetRealWidth() / bboxSize.x, this.GetRealHeight() / bboxSize.y);
        }

        // Setup position.
        if (graphBBox.minPoint.x < 0.0 || graphBBox.minPoint.y < 0.0 ||
            graphBBox.maxPoint.x > this.GetRealWidth() || graphBBox.maxPoint.y > this.GetRealHeight()) {
            // Move center.
            this.canvasPosition = graphBBox.minPoint.inverse();
        }
    }
}

Application.prototype.OnAutoAdjustViewport = function () {
    this.SetDefaultTransformations();
    this.AutoAdjustViewport();
    this.redrawGraph();
}

Application.prototype.getAlgorithmNames = function () {
    var res = [];
    for (var i = 0; i < g_Algorithms.length; i++) {
        console.log(i + ": " + g_Algorithms[i].name);
        factory = g_Algorithms[i];
        var obj = {};
        oneFactory = factory(this.graph);
        obj.name = oneFactory.getName(g_language);
        obj.id = oneFactory.getId();
        obj.priority = oneFactory.getPriority();
        obj.category = oneFactory.getCategory();
        res.push(obj);
    }

    res.sort(function (a, b) {
        return a.priority - b.priority;
    });

    return res;
}

Application.prototype.resultCallback = function (paths) {
    console.log("=========== Application resultCallback")
    console.log("paths", paths);
    if ((paths instanceof Object) && "paths" in paths) {
        console.log("resultCallback 1 <<<<<<<<<<<<<<<<<<<<<<")
        this.setRenderPath(paths["paths"][0], "minPath" in paths);
    }
    else if ((paths instanceof Object) && "pathsWithEdges" in paths) {
        console.log("resultCallback 2 <<<<<<<<<<<<<<<<<<<<<<")
        this.setRenderPathWithEdges(paths["pathsWithEdges"][0]);
    }

    this.updateMessage();
    this.redrawGraph();
}

Application.prototype.GetCurrentValue = function (paramName, defaultValue) {
    return (paramName in this.algorithmsValues) ? this.algorithmsValues[paramName] : defaultValue;
}

Application.prototype.SetCurrentValue = function (paramName, value) {
    this.algorithmsValues[paramName] = value;
}

Application.prototype.IsGraphFitOnViewport = function () {
    res = true;
    graphBBox = this.graph.getGraphBBox();
    var canvasWidth = this.GetRealWidth();//  * this.canvasScale;
    var canvasHeight = this.GetRealHeight();// * this.canvasScale;
    var canvasPositionInverse = this.canvasPosition./*multiply(this.canvasScale).*/inverse();
    //console.log("BBox_min = " + graphBBox.minPoint.toString() + " - BBox_max = " + graphBBox.maxPoint.toString()
    //    + " Position" + canvasPositionInverse.toString() + " - cw = " + canvasWidth + " ch = " + canvasHeight);

    return (Math.floor(canvasPositionInverse.x) <= Math.floor(graphBBox.minPoint.x) &&
        Math.floor(canvasPositionInverse.y) <= Math.floor(graphBBox.minPoint.y) && Math.floor(canvasPositionInverse.x + canvasWidth) >= Math.floor(graphBBox.maxPoint.x)
        && Math.floor(canvasPositionInverse.y + canvasHeight) >= Math.floor(graphBBox.maxPoint.y));
}

Application.prototype.PushToStack = function (actionName) {
    var object = {};
    object.actionName = actionName;
    object.graphSave = this.graph.SaveToXML(this.SaveUserSettings());

    this.undoStack.push(object);

    while (this.undoStack.length > this.maxUndoStackSize) {
        this.undoStack.shift();
    }

    //console.log("push undo:" + object.actionName + " size =" + this.undoStack.length);

    document.getElementById('GraphUndo').style.display = 'inline-block';
}

Application.prototype.Undo = function () {
    if (this.IsUndoStackEmpty())
        return;

    var state = this.undoStack.pop();
    this.graph = new Graph();

    var userSettings = {};
    this.graph.LoadFromXML(state.graphSave, userSettings);
    if (userSettings.hasOwnProperty("data") && userSettings["data"].length > 0)
        this.LoadUserSettings(userSettings["data"]);

    this.redrawGraph();

    //console.log("undo:" + state.actionName + " size =" + this.undoStack.length);

    if (this.IsUndoStackEmpty())
        document.getElementById('GraphUndo').style.display = 'none';
}

Application.prototype.ClearUndoStack = function () {
    this.undoStack = [];
}

Application.prototype.IsUndoStackEmpty = function () {
    return (this.undoStack.length <= 0);
}

Application.prototype.SaveUserSettings = function () {
    var res = "{";

    var needEnd = false;
    var checkValue = [];

    checkValue.push({
        field: "edgeCommonStyle",
        value: this.edgeCommonStyle,
        check: this.isEdgeCommonStyleCustom
    });

    checkValue.push({
        field: "edgeSelectedStyles",
        value: this.edgeSelectedStyles,
        check: this.isEdgeSelectedStylesCustom
    });

    //checkValue.push({field: "edgePrintCommonStyle",
    //                 value: this.edgePrintCommonStyle});

    //checkValue.push({field: "edgePrintSelectedStyles",
    //                 value: this.edgePrintSelectedStyles});

    checkValue.push({
        field: "vertexCommonStyle",
        value: this.vertexCommonStyle,
        check: this.isVertexCommonStyleCustom
    });

    checkValue.push({
        field: "vertexSelectedVertexStyles",
        value: this.vertexSelectedVertexStyles,
        check: this.isVertexSelectedVertexStylesCustom
    });

    checkValue.push({
        field: "backgroundCommonStyle",
        value: this.backgroundCommonStyle,
        check: this.isBackgroundCommonStyleCustom
    });

    checkValue.push({
        field: "defaultVertexSize",
        value: this.defaultVertexSize,
        check: this.defaultVertexSize != null
    });

    checkValue.push({
        field: "defaultEdgeWidth",
        value: this.defaultEdgeWidth,
        check: this.defaultEdgeWidth != null
    });

    //checkValue.push({field: "vertexPrintCommonStyle",
    //                 value: this.vertexPrintCommonStyle});

    //checkValue.push({field: "vertexPrintSelectedVertexStyles",
    //                 value: this.vertexPrintSelectedVertexStyles});

    checkValue.forEach(function (entry) {
        if (!entry.check)
            return;

        if (needEnd)
            res = res + ",";

        res = res + "\"" + entry.field + "\"" + ":" + JSON.stringify(entry.value);
        needEnd = true;
    });

    res = res + "}";

    return this.EncodeToHTML(res);
}

Application.prototype.LoadUserSettings = function (json) {
    var checkValue = [];

    checkValue.push({
        field: "edgeCommonStyle",
        value: this.edgeCommonStyle,
        check: "isEdgeCommonStyleCustom",
        deep: false
    });

    checkValue.push({
        field: "edgeSelectedStyles",
        value: this.edgeSelectedStyles,
        check: "isEdgeSelectedStylesCustom",
        deep: true
    });

    //checkValue.push({field: "edgePrintCommonStyle",
    //                 value: this.edgePrintCommonStyle});

    //checkValue.push({field: "edgePrintSelectedStyles",
    //                 value: this.edgePrintSelectedStyles});

    checkValue.push({
        field: "vertexCommonStyle",
        value: this.vertexCommonStyle,
        check: "isVertexCommonStyleCustom",
        deep: false
    });

    checkValue.push({
        field: "vertexSelectedVertexStyles",
        value: this.vertexSelectedVertexStyles,
        check: "isVertexSelectedVertexStylesCustom",
        deep: true
    });

    checkValue.push({
        field: "defaultVertexSize",
        value: "defaultVertexSize",
        check: null,
        deep: false
    });

    checkValue.push({
        field: "defaultEdgeWidth",
        value: "defaultEdgeWidth",
        check: null,
        deep: false
    });

    //checkValue.push({field: "vertexPrintCommonStyle",
    //                 value: this.vertexPrintCommonStyle});

    //checkValue.push({field: "vertexPrintSelectedVertexStyles",
    //                 value: this.vertexPrintSelectedVertexStyles});

    checkValue.push({
        field: "backgroundCommonStyle",
        value: this.backgroundCommonStyle,
        check: this.isBackgroundCommonStyleCustom,
        deep: false
    });

    var decoderStr = this.DecodeFromHTML(json);
    var parsedSave = JSON.parse(decoderStr);

    var app = this;

    checkValue.forEach(function (entry) {
        if (parsedSave.hasOwnProperty(entry.field)) {
            if (typeof parsedSave[entry.field] === 'number') {
                app[entry.value] = parseInt(parsedSave[entry.field]);
            }
            else {
                if (!entry.deep)
                    entry.value.Clear();

                for (var k in parsedSave[entry.field]) {
                    if (!entry.deep) {
                        if (entry.value.ShouldLoad(k)) {
                            entry.value[k] = parsedSave[entry.field][k];
                        }
                    }
                    else {
                        // Check is number or not
                        if (k % 1 != 0)
                            continue;

                        entry.value[k].Clear();
                        for (var deepK in parsedSave[entry.field][k]) {
                            if (k < entry.value.length && entry.value[k].ShouldLoad(deepK))
                                entry.value[k][deepK] = parsedSave[entry.field][k][deepK];
                        }
                    }
                }
            }

            if (entry.check != null)
                app[entry.check] = true;
        }
    });
}

Application.prototype.EncodeToHTML = function (str) {
    return gEncodeToHTML(str);
}

Application.prototype.DecodeFromHTML = function (str) {
    return gDecodeFromHTML(str);
}

Application.prototype.SetVertexStyle = function (index, style) {
    if (index == 0) {
        this.vertexCommonStyle = style;
        this.isVertexCommonStyleCustom = true;
    }
    else {
        this.vertexSelectedVertexStyles[index - 1] = style;
        this.isVertexSelectedVertexStylesCustom = true;
    }
}

Application.prototype.ResetVertexStyle = function (index) {
    if (index == 0) {
        this.vertexCommonStyle = new CommonVertexStyle();
        this.isVertexCommonStyleCustom = false;
    }
    else {
        this.vertexSelectedVertexStyles = FullArrayCopy(DefaultSelectedGraphStyles);
        this.isVertexSelectedVertexStylesCustom = false;
    }
}

Application.prototype.SetEdgeStyle = function (index, style) {
    if (index == 0) {
        this.edgeCommonStyle = style;
        this.isEdgeCommonStyleCustom = true;
    }
    else {
        this.edgeSelectedStyles[index - 1] = style;
        this.isEdgeSelectedStylesCustom = true;
    }
}

Application.prototype.ResetEdgeStyle = function (index) {
    if (index == 0) {
        this.edgeCommonStyle = new CommonEdgeStyle();
        this.isEdgeCommonStyleCustom = false;
    }
    else {
        this.edgeSelectedStyles = FullArrayCopy(DefaultSelectedEdgeStyles);
        this.isEdgeSelectedStylesCustom = false;
    }
}

Application.prototype.SetBackgroundStyle = function (style) {
    this.backgroundCommonStyle = style;
    this.isBackgroundCommonStyleCustom = true;
}

Application.prototype.ResetBackgroundStyle = function () {
    this.backgroundCommonStyle = new CommonBackgroundStyle();
    this.isBackgroundCommonStyleCustom = false;
}

Application.prototype.GetAvailableCurveValue = function (neighborEdges, originalEdge) {
    return this.graph.GetAvailableCurveValue(neighborEdges, originalEdge);
}

Application.prototype.GraphTypeChanged = function () {
    $("#CanvasMessage").text(this.graph.isMulti() ? g_GraphIsMultiMessage : g_GraphIsGeneralMessage);
}

// update lại danh sách các trọng số trong bảng dialog hiện ra khi setting tạo cạnh mới
Application.prototype.UpdateEdgePresets = function (weight) {
    var oldPresets = this.edgePresets;
    this.edgePresets = [1];
    oldPresets.unshift(weight);

    for (var i = 0; i < oldPresets.length; i++) {
        var k = oldPresets[i];
        if (!this.edgePresets.includes(k))
            this.edgePresets.push(k);

        if (this.edgePresets.length >= this.maxEdgePresets)
            break;
    }
}

Application.prototype.GetEdgePresets = function () {
    return this.edgePresets;
}

Application.prototype.SetSelectionRect = function (rect) {
    this.selectionRect = rect;
}

Application.prototype.GetSelectionRect = function (rect) {
    return this.selectionRect;
}

Application.prototype.GetStyle = function (type, styleName, object, index) {
    var correctIndex = index;
    if (correctIndex == undefined)
        correctIndex = 0;

    if (type == "vertex") {
        if (styleName == "common") {
            return object !== undefined ? object.getStyleFor(0) : this.vertexCommonStyle;
        }
        else if (styleName == "selected") {
            return object !== undefined && object.hasOwnStyleFor(correctIndex + 1) ? object.getStyleFor(correctIndex + 1) : this.vertexSelectedVertexStyles[correctIndex];
        }
        else if (styleName == "printed") {
            return this.vertexPrintCommonStyle;
        }
        else if (styleName == "printedSelected") {
            return this.vertexPrintSelectedVertexStyles[correctIndex];
        }

        return null;
    }
    else if (type == "edge") {
        if (styleName == "common") {
            return object !== undefined ? object.getStyleFor(0) : this.edgeCommonStyle;
        }
        else if (styleName == "selected") {
            return object !== undefined && object.hasOwnStyleFor(correctIndex + 1) ? object.getStyleFor(correctIndex + 1) : this.edgeSelectedStyles[correctIndex];
        }
        else if (styleName == "printed") {
            return this.edgePrintCommonStyle;
        }
        else if (styleName == "printedSelected") {
            return this.edgePrintSelectedStyles[correctIndex];
        }

        return null;
    }

    return null;
}


Application.prototype._RedrawGraph = function (context, backgroundPosition, backgroundStyle, bDrawSelectedRect,
    forceVertexCommon, forceVertexSelected, forceEdgeCommon, forceEdgeSelected) {

    // console.log("bước 10: _RedrawGraph", this.graph)
    var backgroundDrawer = new BaseBackgroundDrawer(context);

    backgroundDrawer.Draw(
        backgroundStyle,
        Math.max(this.canvas.width, this.GetRealWidth()),
        Math.max(this.canvas.height, this.GetRealHeight()),
        backgroundPosition,
        this.canvasScale);

    this.UpdateEdgesCurrentStyle(forceEdgeCommon, forceEdgeSelected);
    this.UpdateNodesCurrentStyle(forceVertexCommon, forceVertexSelected);

    this.RedrawEdges(context);
    this.RedrawNodes(context);
    if (bDrawSelectedRect && this.selectionRect != null)
        this.RedrawSelectionRect(context);
}

Application.prototype.GetSelectedVertices = function () {
    var res = [];
    for (i = 0; i < this.graph.vertices.length; i++) {
        if (this.handler.GetSelectedGroup(this.graph.vertices[i]) > 0) {
            res.push(this.graph.vertices[i]);
        }
    }

    return res;
}

Application.prototype.GetSelectedEdges = function () {
    var res = [];
    for (i = 0; i < this.graph.edges.length; i++) {
        if (this.handler.GetSelectedGroup(this.graph.edges[i]) > 0) {
            res.push(this.graph.edges[i]);
        }
    }

    return res;
}

Application.prototype.SetDefaultVertexSize = function (diameter) {
    var oldDefaultDiameter = this.GetDefaultVertexSize();
    this.defaultVertexSize = diameter;

    for (i = 0; i < this.graph.vertices.length; i++) {
        if (this.graph.vertices[i].model.diameter == oldDefaultDiameter) {
            this.graph.vertices[i].model.diameter = diameter;
        }
    }
}

Application.prototype.GetDefaultVertexSize = function (diameter) {
    if (this.defaultVertexSize != null)
        return this.defaultVertexSize;
    else
        return defaultVertexDiameter;
}

Application.prototype.ResetVertexSize = function () {
    this.defaultVertexSize = null;

    for (i = 0; i < this.graph.vertices.length; i++) {
        this.graph.vertices[i].model.diameter = this.GetDefaultVertexSize();
    }
}

Application.prototype.SetDefaultEdgeWidth = function (width) {
    var oldDefaultWidth = this.GetDefaultEdgeWidth();
    this.defaultEdgeWidth = width;

    for (i = 0; i < this.graph.edges.length; i++) {
        if (this.graph.edges[i].model.width == oldDefaultWidth) {
            this.graph.edges[i].model.width = width;
        }
    }
}

Application.prototype.GetDefaultEdgeWidth = function (diameter) {
    if (this.defaultEdgeWidth != null)
        return this.defaultEdgeWidth;
    else
        return defaultEdgeWidth;
}

Application.prototype.ResetEdgeWidth = function () {
    this.defaultEdgeWidth = null;

    for (i = 0; i < this.graph.edges.length; i++) {
        this.graph.edges[i].model.width = this.GetDefaultEdgeWidth();
    }
}

Application.prototype.setEmscripten = function (processFunction) {
    this.processEmscriptenFunction = processFunction;
    console.log("Emscripten set");
}

Application.prototype.isSupportEmscripten = function () {
    return this.processEmscriptenFunction != null;
}

Application.prototype.processEmscripten = function (inputData) {
    return this.processEmscriptenFunction(inputData);
}

Application.prototype.setDefaultEdge = function (defaultEdge) {
    this.defaultEdge = defaultEdge;
}

Application.prototype.hasDefaultEdge = function () {
    return this.defaultEdge != null;
}

Application.prototype.getDefaultEdge = function () {
    return this.defaultEdge;
}

Application.prototype.setUseDefaultEdge = function (value) {
    this.useDefaultEdge = value;
}

Application.prototype.getUseDefaultEdge = function () {
    return this.useDefaultEdge;
}
var SiteDir = "graphonline/";
var DisableEmscripten = false;
var algorithmsVersion = 2;

var application = new Application(document, window);

var waitCounter = false;
var fullscreen = false;
var userAction = function (str) {
    if (typeof window.yaCounter25827098 !== "undefined") {
        console.log(g_language + "/" + str);
        window.yaCounter25827098.hit(window.location.protocol + "//" + window.location.hostname + (g_language != "ru" ? "/" + g_language : "") + "/UserAction#" + str);
    }
    else if (!waitCounter) {
        waitCounter = true;
        setTimeout(function () {
            userAction(str);
        }, 2000);
    }
}

var isIe = (navigator.userAgent.toLowerCase().indexOf("msie") != -1
    || navigator.userAgent.toLowerCase().indexOf("trident") != -1);

var buttonsList = ['AddGraph', 'ConnectGraphs', 'DeleteObject', 'Default'];
var g_ctrlPressed = false;

function restButtons(me) {
    var needSetDefault = false;
    for (var i = 0; i < buttonsList.length; i++) {
        if (buttonsList[i] != me) {
            document.getElementById(buttonsList[i]).className = "btn btn-default btn-sm";
        }
        else {
            if (document.getElementById(buttonsList[i]).className != "btn btn-default btn-sm") {
                needSetDefault = true;
                console.log("0 " + me)
            }
        }
    }

    if (needSetDefault) {
        document.getElementById(buttonsList[i]).className = "btn btn-primary btn-sm";

    }
    else {
        document.getElementById(me).className = "btn btn-primary btn-sm";
    }
}

var single = 0;

function resizeCanvas() {
    var adv = document.getElementById('bottom_info');
    var canvas = document.getElementById('canvas');
    canvas.width = document.getElementById('canvasSection').offsetWidth;
    var mainContainer = document.getElementById('mainContainer');
    var offset = (mainContainer.offsetTop + mainContainer.offsetHeight) - (canvas.offsetTop + canvas.offsetHeight) + ($("#footerContent").css("display") === 'block' ? 0 : 24);

    canvas.height = $(window).height() - document.getElementById('canvas').offsetTop - (adv && $("#bottom_info").css("display") === 'block' ? document.getElementById('bottom_info').offsetHeight : 0) - ($("#footer").css("display") === 'block' ? document.getElementById('footer').offsetHeight : 0) - offset;

    application.redrawGraph();
}

function touchHandler(event) {
    var touches = event.changedTouches,
        first = touches[0],
        type = "";
    switch (event.type) {
        case "touchstart": type = "mousedown"; break;
        case "touchmove": type = "mousemove"; break;
        case "touchend": type = "mouseup"; break;
        default: return;
    }

    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent(type, true, true, window, 1,
        first.screenX, first.screenY,
        first.clientX, first.clientY, false,
        false, false, false, 0/*left*/, null);

    first.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}

function preLoadPage() {
    loadTexts();
    application.onLoad();
}

function createAlgorithmMenu() {
    console.log("Buoc 2: Run createAlgorithmMenu")
    var algorithmBaseId = "Algo";

    var algorithms = application.getAlgorithmNames();
    var index = 0;


    for (var i = 0; i < algorithms.length; i++) {
        algorithm = algorithms[i];

        var list = document.getElementById("algorithmCategoryElements" + algorithm.category);
        var item = document.getElementById("algTopic" + algorithm.category);
        var clone = item.cloneNode(true);
        var button = clone.getElementsByTagName("button")[0];
        var textSpan = button.getElementsByTagName("span")[1];
        button.id = algorithm.id;
        textSpan.innerHTML = algorithm.name;
        clone.style.display = "block";

        buttonsList.push(algorithm.id);

        button.onclick = function (e) {
            console.log("============> Chọn thuật toán ", this.id, " <==============");
            console.log("buoc 3: button onclick")
            e["closeThisMenu"] = true;
            userAction(this.id);
            restButtons(this.id);
            application.SetHandlerMode(this.id);
        }

        var eventData = {};
        eventData.index = i;
        eventData.object = clone;
        eventData.algorithm = algorithm;

        $("#openAlgorithmList").bind('click', eventData, function (_eventData) {
            var data = _eventData.data;
            var algorithm = g_Algorithms[g_AlgorithmIds.indexOf(data.algorithm.id)](application.graph, application);

            if (application.graph.isMulti() && !algorithm.IsSupportMultiGraph())
                $(data.object).hide();
            else
                $(data.object).show();
        });

        list.insertBefore(clone, document.getElementById("insert" + algorithm.category));
        index++;
    }

}


function handelImportGraph(files) {
    var graphFileToLoad = files[0];

    var fileReader = new FileReader();
    fileReader.onload = function (fileLoadedEvent) {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        console.log(textFromFileLoaded);
        application.LoadGraphFromString(textFromFileLoaded);
        ImportGraphFiles.value = "";
    };

    fileReader.readAsText(graphFileToLoad, "UTF-8");
}
//* Xử lý các tương tác người dùng trên canvas, các sự kiện button và điều hướng trong ứng dụng
function postLoadPage() {
    application.userAction = userAction;

    application.canvas.onmousemove = function (e) {
        // console.log("lộc log onmousemove");
        return application.CanvasOnMouseMove(e);
    };

    application.canvas.onmousedown = function (e) {
        console.log("bước 4: canvas.onmousedown")
        return application.CanvasOnMouseDown(e);
    };

    application.canvas.onmouseup = function (e) {
        return application.CanvasOnMouseUp(e);
    }

    application.canvas.onwheel = function (e) {
        var e = window.event || e; // old IE support
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        if (delta > 0) {
            application.multCanvasScale(1.3, e);
        }
        else {
            application.multCanvasScale(1.0 / 1.3, e);
        }
    }

    function getCharCode(event) {
        if (event.which == null) { // IE
            return event.keyCode;
        }

        if (event.which != 0 && event.charCode != 0) { // все кроме IE
            return event.which; // остальные
        }

        return null; // спец. символ
    }

    function getChar(event) {
        return String.fromCharCode(getCharCode(event)); // остальные
    }

    function selectHandler(buttonName, handlerName) {
        userAction(buttonName + "_shortcut");
        restButtons(buttonName);
        application.SetHandlerMode(handlerName);
    }

    // xử lý sự kiện keypress(một phím được nhấn và duy trì trạng thái bấm) được đặt cho đối tượng document.
    document.onkeypress = function (e) {

        // nếu một trong các sự kiện sau đang diễn ra thì sự kiện keypress sẽ không được xử lý
        // các sự kiện dưới đây là các sự kiện có xuất hiện hộp thoại dialog
        if (event.defaultPrevented
            || ($('#addVertex').hasClass('ui-dialog-content') && $('#addVertex').dialog('isOpen'))
            || ($('#adjacencyMatrix').hasClass('ui-dialog-content') && $('#adjacencyMatrix').dialog('isOpen'))
            || ($('#addEdge').hasClass('ui-dialog-content') && $('#addEdge').dialog('isOpen'))
            || ($('#incidenceMatrix').hasClass('ui-dialog-content') && $('#incidenceMatrix').dialog('isOpen'))
            || ($('#saveDialog').hasClass('ui-dialog-content') && $('#saveDialog').dialog('isOpen'))
            || ($('#saveImageDialog').hasClass('ui-dialog-content') && $('#saveImageDialog').dialog('isOpen'))
            || ($('#GroupRenameDialog').hasClass('ui-dialog-content') && $('#GroupRenameDialog').dialog('isOpen'))
            || $('#developerTools').css("display") != "none"
            || ($('#NeedAlgorithm').hasClass('ui-dialog-content') && $('#NeedAlgorithm').dialog('isOpen'))) {
            console.log("prevent");
            return; // Should do nothing if the default action has been cancelled
        }


        var key = getChar(event);
        console.log("lộc log onkeypress: ", key);
        var code = getCharCode(event);
        console.log(key + " code=" + code);
        var evtobj = window.event ? event : e;
        var isCtrl = evtobj ? evtobj.ctrlKey : false;

        var moveValue = 10;
        if (code == 61 || code == 43) // +
        {
            application.multCanvasScale(1.5);
        }
        else if (code == 45) // -
        {
            application.multCanvasScale(1 / 1.5);
        }
        else if (key == 'w' || key == 'ц') // up
        {
            application.onCanvasMove(new Point(0, moveValue));
        }
        else if (key == 's' || key == 'ы') // down
        {
            application.onCanvasMove(new Point(0, -moveValue));
        }
        else if (key == 'a' || key == 'ф') // left
        {
            application.onCanvasMove(new Point(moveValue, 0));
        }
        else if (key == 'd' || key == 'в') // right
        {
            application.onCanvasMove(new Point(-moveValue, 0));
        }
        else if (key == 'v' || key == 'м') // vertex
        {
            selectHandler('AddGraph', 'addGraph');
        }
        else if (key == 'e' || key == 'у') // edge
        {
            selectHandler('ConnectGraphs', 'addArc');
        }
        else if (key == 'r' || key == 'к') // delete
        {
            selectHandler('DeleteObject', 'delete');
        }
        // Disabled because it is easy to lose graph, when you press miss letter.
        //else if (key == 'n' || key == 'т') // new
        //{
        //    userAction('NewGraph_shortcut');
        //	application.SetHandlerMode("deleteAll");
        //    application.SetDefaultTransformations();
        //}
        else if (key == 'm' || key == 'ь') // move
        {
            selectHandler('Default', 'default');
        }
        else if (code == 26 && isCtrl) {
            userAction("Key_GraphUndo");
            application.SetHandlerMode("graphUndo");
        }
    }

    $(document).keydown(function (event) {
        if (event.which == "17" || event.which == "91")
            g_ctrlPressed = true;
    });

    $(document).keyup(function () {
        g_ctrlPressed = false;
    });

    document.getElementById('ShowAdjacencyMatrix').onclick = function () {
        userAction(this.id);
        application.SetHandlerMode("showAdjacencyMatrix");
    }
    document.getElementById('ShowIncidenceMatrix').onclick = function () {
        userAction(this.id);
        application.SetHandlerMode("showIncidenceMatrix");
    }
    document.getElementById('ShowDistanceMatrix').onclick = function () {
        userAction(this.id);
        application.SetHandlerMode("showDistanceMatrix");
    }

    document.getElementById('GroupRename').onclick = function () {
        userAction(this.id);
        application.SetHandlerMode("GroupRename");
    }
    document.getElementById('groupRenameButton').onclick = function () {
        userAction(this.id);
        application.SetHandlerMode("GroupRename");
    }


    document.getElementById('Default').onclick = function () {
        userAction(this.id);
        restButtons('Default');
        application.SetHandlerMode("default");
        document.getElementById('Default').className = "btn btn-primary btn-sm";
    }
    console.log("default AddGraph ", document.getElementById('AddGraph').className);

    document.getElementById('AddGraph').onclick = function () {
        userAction(this.id);
        restButtons('AddGraph');
        console.log("bước 1: div AddGraph clicked")
        application.SetHandlerMode(document.getElementById('AddGraph').className != "" ? "addGraph" : "default");
    }

    document.getElementById('ConnectGraphs').onclick = function () {
        userAction(this.id);
        restButtons('ConnectGraphs');
        console.log("step 1: div ConnectGraphs clicked")
        application.SetHandlerMode(document.getElementById('ConnectGraphs').className != "" ? "addArc" : "default");
    }

    document.getElementById('DeleteObject').onclick = function () {
        userAction(this.id);
        restButtons('DeleteObject');
        application.SetHandlerMode(document.getElementById('DeleteObject').className != "" ? "delete" : "default");
    }

    document.getElementById('DeleteAll').onclick = function () {
        userAction(this.id);
        application.SetHandlerMode("deleteAll");
    }


    document.getElementById('SaveGraph').onclick = function () {
        userAction(this.id);
        application.SetHandlerMode("saveDialog");
    }

    document.getElementById('NewGraph').onclick = function () {
        userAction(this.id);
        application.SetHandlerMode("deleteAll");
        application.SetDefaultTransformations();
    }

    document.getElementById('SaveGraphImage').onclick = function () {
        userAction(this.id);
        application.SetHandlerMode("saveDialogImage");
    }

    document.getElementById('SaveFullGraphImage').onclick = function () {
        userAction(this.id);
        application.SetHandlerMode("saveDialogFullImage");
    }

    document.getElementById('SavePrintGraphImage').onclick = function () {
        userAction(this.id);
        application.SetHandlerMode("savePrintGraphImage");
    }

    document.getElementById('SaveSvgGraphImage').onclick = function () {
        userAction(this.id);
        application.SetHandlerMode("saveSvgGraphImage");
    }

    document.getElementById('Zoom100').onclick = function () {
        userAction(this.id);
        application.setCanvasScale(1.0);
    }

    document.getElementById('Zoom50').onclick = function () {
        userAction(this.id);
        application.setCanvasScale(50 / 100);
    }

    document.getElementById('Zoom25').onclick = function () {
        userAction(this.id);
        application.setCanvasScale(25 / 100);
    }

    document.getElementById('ZoomFit').onclick = function () {
        userAction(this.id);
        application.OnAutoAdjustViewport();
    }

    document.getElementById('ZoomIn').onclick = function () {
        userAction(this.id);
        application.multCanvasScale(1.5);
    }

    document.getElementById('ZoomOut').onclick = function () {
        userAction(this.id);
        application.multCanvasScale(1.0 / 1.5);
    }

    document.getElementById('MoveWorspace').onclick = function () {
        userAction(this.id);
        restButtons('Default');
        application.SetHandlerMode("default");
        document.getElementById('Default').className = "btn btn-primary btn-sm";
    }
    document.getElementById('SetupVertexStyle').onclick = function () {
        userAction(this.id);
        application.SetHandlerMode("setupVertexStyle");
    }
    document.getElementById('SetupVertexStyleSelected').onclick = function () {
        userAction(this.id);
        application.SetHandlerMode("setupVertexStyleSelected");
    }
    document.getElementById('SetupEdgeStyle').onclick = function () {
        userAction(this.id);
        application.SetHandlerMode("setupEdgeStyle");
    }
    document.getElementById('SetupEdgeStyleSelected').onclick = function () {
        userAction(this.id);
        application.SetHandlerMode("setupEdgeStyleSelected");
    }
    document.getElementById('SetupBackgroundStyle').onclick = function () {
        userAction(this.id);
        application.SetHandlerMode("setupBackgroundStyle");
    }

    document.getElementById('GraphUndo').onclick = function () {
        userAction(this.id);
        application.SetHandlerMode("graphUndo");
    }

    document.getElementById('runUserScript').onclick = function () {
        var el = document.getElementById('userScript');

        var oldScript = document.getElementById("userScriptSource");
        if (oldScript) {
            document.head.removeChild(oldScript);
        }

        var script = document.createElement('script');
        script.type = "text/javascript";
        script.innerHTML = el.value;
        script.id = "userScriptSource";
        document.head.appendChild(script);

        application.SetHandlerMode("user.algorithm");
    }

    document.getElementById('submitUserScript').onclick = function () {
        var script = document.getElementById('userScript');
        var data = "message=" + script.value + "&";

        $.ajax({
            type: "POST",
            url: "/feedback",
            data: data
        });

        $("#sentAlgorithm").dialog({
            resizable: false,
            height: "auto",
            width: 400,
            modal: true,
            dialogClass: 'EdgeDialog'
        });
    }

    document.getElementById('devToolsZoom').onclick = function () {
        var devTools = document.getElementById('developerTools');
        if (devTools.hasOwnProperty("isMin") && !devTools["isMin"]) {
            devTools["isMin"] = true;
            devTools.style.width = "30%";
        }
        else {
            devTools["isMin"] = false;
            devTools.style.width = "100%";
        }
    }

    document.getElementById('ExportGraph').onclick = function () {
        userAction(this.id);

        var graphAsString = application.graph.SaveToXML("");
        var savedGraphName = application.GetNewGraphName();

        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(graphAsString));
        element.setAttribute('download', "graph_" + savedGraphName + ".graphml");

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    document.getElementById('ImportGraph').onclick = function () {
        userAction(this.id);

        if (ImportGraphFiles) {
            ImportGraphFiles.click();
        }
    }

    document.getElementById('openAlgorithmList').onclick = function () {
        // Show menu first
        setTimeout(function () {
            var button = document.getElementById('openAlgorithmList');
            var buttonRect = button.getBoundingClientRect();
            var algorithmList = document.getElementById('algorithmList');

            var delta = buttonRect.right - algorithmList.offsetWidth;
            if (delta < 0) {
                var value = (delta - 4) + "px";
                algorithmList.style.right = value;
            }
            else {
                algorithmList.style.right = "0";
            }
        }, 1);
    }

    document.getElementById('Fullscreen').onclick = function () {
        var idList = ["h1Header", "h1Text", "navigation", "footerContent", "bottom_adv"];

        fullscreen = !fullscreen

        userAction(fullscreen ? "fullscreen_on" : "fullscreen_off");

        for (var i = 0; i < idList.length; i++) {
            let element = document.getElementById(idList[i]);
            if (!element) continue;

            if (fullscreen)
                element.style.display = "none";
            else
                element.style.display = "block";
        }

        document.getElementById("mainContainer").className = fullscreen ? "container-fluid page-wrap" : "container page-wrap";

        document.getElementById("FullscreenIcon").className = fullscreen ? "glyphicon glyphicon-resize-small fa-fw" : "glyphicon glyphicon-resize-full fa-fw";

        resizeCanvas();
    }

    if (document.getElementById('VoteButton') !== null)
        document.getElementById('VoteButton').onclick = function () {
            var dialogButtons = {};

            for (var i = 0; i < 6 && document.getElementById('vote' + i) !== null; i++) {
                document.getElementById('vote' + i)["voteIndex"] = i;
                document.getElementById('vote' + i).onclick = function () {
                    console.log("Vote" + this["voteIndex"]);
                    $.ajax({
                        type: "GET",
                        url: "/" + SiteDir + "cgi-bin/vote.php?index=" + this["voteIndex"],
                        dataType: "text"
                    });
                    $("#voteDialog").dialog('close');
                    $("#VoteButton").hide();
                }
            }

            dialogButtons[g_close] = function () {
                $(this).dialog("close");
            };

            $("#voteDialog").dialog({
                resizable: false,
                title: g_vote,
                width: 400,
                modal: true,
                dialogClass: 'EdgeDialog',
                buttons: dialogButtons,
            });
        }

    // Get algorithms list and load it.
    $.get("/" + SiteDir + "cgi-bin/getPluginsList.php",
        function (data) {
            console.log("Buoc 1: call http://localhost:8080/graphonline/cgi-bin/getPluginsList.php")
            var scriptList = JSON.parse(data);

            var loadOneScript = function () {
                if (scriptList.length == 0) {
                    createAlgorithmMenu();
                }
                else {
                    var script = document.createElement('script');
                    script.src = "/" + SiteDir + "script/" + scriptList[0] + "?v=" + algorithmsVersion;
                    scriptList.shift();
                    script.onload = loadOneScript;
                    script.onerror = loadOneScript;
                    document.head.appendChild(script);
                }
            }

            loadOneScript();

        });

    var devTools = document.getElementById('developerTools');
    devTools.style.left = 0;
    resizeCanvas();
    application.onPostLoadEvent();

    $(function () {
        $('#algorithmList').on('click', function (event) {
            if (!event.originalEvent.closeThisMenu) {
                event.stopPropagation();
            }
        });
        $(window).on('click', function () {
            $('#algorithmList').slideUp();
        });
    });


    let showHideCategory = function (button, elementsListName) {
        let width = $(button).width();
        let elementsList = $(elementsListName);
        var hideMark = button.querySelector('span[name="hideMark"]')
        var showMark = button.querySelector('span[name="showMark"]')
        if (elementsList.is(":visible")) {
            elementsList.hide();
            $(hideMark).show();
            $(showMark).hide();
        } else {
            elementsList.show();
            $(hideMark).hide();
            $(showMark).show();
        }
        $(button).width(width);

        userAction("algCategory_" + elementsListName);
    }

    $(document.getElementById("algorithmCategoryBtn1").querySelector('span[name="hideMark"]')).hide();
    $(document.getElementById("algorithmCategoryBtn0").querySelector('span[name="hideMark"]')).hide();

    $('#algorithmCategoryBtn1').click(function () {
        showHideCategory(this, "#algorithmCategoryElements1");
    });

    $('#algorithmCategoryBtn0').click(function () {
        showHideCategory(this, "#algorithmCategoryElements0");
    });
}

//window.onload = function ()
$(document).ready(function () {

    window.onresize = function (event) {
        resizeCanvas();
    }


    document.getElementById('canvas').addEventListener("touchstart", touchHandler, true);
    document.getElementById('canvas').addEventListener("touchmove", touchHandler, true);
    document.getElementById('canvas').addEventListener("touchend", touchHandler, true);
    document.getElementById('canvas').addEventListener("touchcancel", touchHandler, true);

    // Try load emscripten implementation
    var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
    if (!isMobile && !DisableEmscripten) {
        const jsScript = document.createElement('script');
        jsScript.src = 'script/Graphoffline.Emscripten.js';
        document.body.appendChild(jsScript);
        jsScript.addEventListener('load', () => {
            Module['onRuntimeInitialized'] = onRuntimeInitialized;
            var process = Module.cwrap('ProcessAlgorithm', 'string', ['string']);
            function onRuntimeInitialized() {
                application.setEmscripten(process);
            }
        });
    }
    /*
        $(document).ready(function(){
            //set up some basic options for the feedback_me plugin
            fm_options = {
                position: "left-bottom",
                message_placeholder: g_what_do_you_think,
                message_required: true,
                name_label: g_name,
                message_label: g_feedback,
                trigger_label: g_feedback,
                submit_label: g_send,
                title_label: g_write_to_us,	        
                feedback_url: "/feedback",
            };
            //init feedback_me plugin
            fm.init(fm_options);
        });
    */
});

Array.prototype.swap = function (x, y) {
    var b = this[x];
    this[x] = this[y];
    this[y] = b;
    return this;
}
/**
 * Find short path.
 *
 */

function BaseTraversal(graph, app) {
    BaseAlgorithmEx.apply(this, arguments);
    this.visited = [];
    this.edges = [];
    this.timer = null;
}

// inheritance.
BaseTraversal.prototype = Object.create(BaseAlgorithmEx.prototype);
// timer interval
BaseTraversal.prototype.timerInterval = 500;

BaseTraversal.prototype.result = function (resultCallback) {
    var result = {};
    result["version"] = 1;

    return result;
}

BaseTraversal.prototype.selectVertex = function (vertex) {

    console.log("buoc 8: BaseTraversal.prototype.selectVertex", vertex, this)

    this.visited = [];
    this.edges = [];

    if (this.timer)
        clearTimeout(this.timer);
    this.timer = null;

    this.visited.push(vertex);

    var context = this;
    this.timer = setInterval(function () {
        context.step();
    }, this.timerInterval);

    this.message = this.getMainMessage();

    return true;
}

BaseTraversal.prototype.getObjectSelectedGroup = function (object) {
    return (this.visited.includes(object) ? 1 : (this.edges.includes(object) ? 1 : 0));
}

// trả về thuật toán đã được thức thi xong chưa
BaseTraversal.prototype.instance = function () {
    return false;
}
