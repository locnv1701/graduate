/**
 * File for algorithms.
 *
 */

// Return list of 'vertex = [connected vertices]'
// trả về res
// với res[i] = [x,y,z,..] -> x,y,z,... là danh sách các đỉnh liền kề về đỉnh i
function getVertexToVertexArray(graph, ignoreDirection) {
    res = {};

    // loop qua danh sách cạnh
    // đánh dấu đỉnh thứ 2 liền kê với đỉnh thứ nhất
    // nếu cạnh đó không có hướng hoặc ignoreDirection (hướng không ảnh hướng đến kết quả của thuật toán)
    // đánh dấu đỉnh thứ nhất liên kề với đỉnh thứ 2
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
    console.log("RegisterAlgorithm ----------------------------", factory);
    g_Algorithms.push(factory);
    g_AlgorithmIds.push(factory(null).getId());
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
    return false;
}

// calls when user select edge.
// @return true if you allow to select this object or false.
BaseAlgorithm.prototype.selectEdge = function (edge) {
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

/*
    algorithmName: tên thuật toán
    otherParams: mảng các tham số đầu vào của thuật toán
    resultCallback: một hàm callback để xử lý kết quả khi tính toán hoàn thành
    ignoreSeparateNodes: mặc định là "false" một cờ để xác định xem các đỉnh không ketes nối có nên bị bỏ qua trong tính toán hay không t
*/

BaseAlgorithmEx.prototype.CalculateAlgorithm = function (algorithmName, otherParams, resultCallback, ignoreSeparateNodes = false) {
    // if (location.hostname === "localhost" || location.hostname === "127.0.0.1")

    var graph = this.graph;
    var ignoreNodes = {};   // khởi tạo đối tượng trống để lưu danh sách các đỉnh sẽ bị bỏ qua nếu ignoreSeparateNodes == true
    
    if (ignoreSeparateNodes)
        for (var i = 0; i < graph.vertices.length; i++)
            if (!graph.HasConnectedNodes(graph.vertices[i]))
                ignoreNodes[graph.vertices[i].id] = 1;

    // khởi tạo đối tượng GraphMLCreator
    var creator = new GraphMLCreator(graph.vertices, graph.edges, ignoreNodes);
    var pathObjects = [];
    var properties = {};
    var result = [];

    // chuyển đối tượng creator sang xml (xml như là json vậy)
    var xml = creator.GetXMLString();
    console.log(xml);

    var processResult = function (msg) {
        console.log("====================== processResult ======================");
        console.log(msg);
        /*  
            *Ví dụ xml được log ra của thuật toán dijkstra 
            * start 4, end 6
            0, 0, 0, 0, 3, 0, 0, 
            0, 0, 7, 0, 1, 100, 0, 
            0, 7, 0, 2, 0, 0, 0, 
            0, 0, 2, 0, 6, 0, 0, 
            3, 1, 0, 6, 0, 0, 5, 
            0, 100, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 5, 0, 0, 
            * kết quả của đường đi là 4->5->2->6
            <?xml version="1.0" encoding="UTF-8"?>
            <graphml>
                <graph id="G" edgedefault="undirected">
                    <result count="5">
                        <value type="1">107</value>
                        <value type="4">3</value>
                        <value type="4">4</value>
                        <value type="4">1</value>
                        <value type="4">5</value>
                    </result>

                    * danh sách các đỉnh của graph
                    <node id="0">   // đỉnh 1 có id = 0
                        <data key="lowestDistance">9</data> // 9 là khoảng cách ngắn nhất từ đỉnh 4(start) đến đỉnh 1
                        <data key="hightlightNode">0</data> // hightlightNode = 0 tức là đỉnh 1 không nằm trên đường đi của kết quả thuật toán
                    </node>
                    <node id="1">   // đỉnh 2 có id = 1
                        <data key="lowestDistance">7</data> // 7 là khoảng cách ngắn nhất từ đỉnh 4(start) đến đỉnh 2
                        <data key="index">2</data>          // index = 2 là vị trí của đỉnh 2 trên đường đi của thuật toán (4->5->2->6)
                        <data key="hightlightNode">1</data> // hightlightNode = 1 tức là đỉnh 2 nằm trên đường đi của kết quả thuật toán
                    </node>
                        <node id="2">
                        <data key="lowestDistance">2</data>
                        <data key="hightlightNode">0</data>
                    </node>
                        <node id="3">
                        <data key="lowestDistance">0</data>
                        <data key="index">0</data>
                        <data key="hightlightNode">1</data>
                    </node>
                    <node id="4">
                        <data key="lowestDistance">6</data>
                        <data key="index">1</data>
                        <data key="hightlightNode">1</data>
                    </node>
                    <node id="5">
                        <data key="lowestDistance">107</data>
                        <data key="index">3</data>
                        <data key="hightlightNode">1</data>
                    </node>
                    <node id="6">
                        <data key="lowestDistance">11</data>
                        <data key="hightlightNode">0</data>
                    </node>

                    * danh sách các cạnh đi qua của thuật toán (4->5->2->6)
                    <edge source="4" target="3" id="10010"/>    // cạnh nối 4 với 5
                    <edge source="4" target="1" id="10009"/>    // cạnh nối 5 với 2
                    <edge source="5" target="1" id="10012"/>    // cạnh nối 2 với 6
                </graph>
            </graphml>
        */
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

        console.log("pathObjects", pathObjects);    // danh sách cạnh và danh sách đỉnh
        console.log("properties", properties);      // lưu lowestDistance, index, highlightNode của tất cả các đỉnh
        console.log("result", result);              // lưu result
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


