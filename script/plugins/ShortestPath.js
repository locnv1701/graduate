/**
 * Find short path.
 *
 */
function FindShortPathNew(graph, app) {
    BaseAlgorithmEx.apply(this, arguments);
    this.message = g_selectStartVertexForShortPath;
    this.selectedObjects = {};
}


// inheritance.
FindShortPathNew.prototype = Object.create(BaseAlgorithmEx.prototype);
// First selected.
FindShortPathNew.prototype.firstObject = null;
// Second selected.
FindShortPathNew.prototype.secondObject = null;
// Path
FindShortPathNew.prototype.pathObjects = null;
// Infinity
FindShortPathNew.prototype.infinityValue = 1E9 - 1;

FindShortPathNew.prototype.getName = function (local) {
    return g_findShortPathName; //local == "ru" ? "Поиск кратчайший путь алгоритмом Дейкстры" : "Find shortest path using Dijkstra's algorithm";
}

FindShortPathNew.prototype.getId = function () {
    return "OlegSh.FindShortestPath";
}

// @return message for user.
FindShortPathNew.prototype.getMessage = function (local) {
    return this.message;
}

FindShortPathNew.prototype.getCategory = function () {
    return 1;
}

FindShortPathNew.prototype.result = function (resultCallback) {
    console.log("====================FindShortPathNew result==========================")
    if (this.firstObject && this.secondObject) {
        console.log(" anh Thành1", result)
        this.outResultCallback = function (result) { // result trong tham số này là một object "outputResult"
            console.log(" anh Thành2", result)
            resultCallback(result); 
        };
        self = this;
        this.CalculateAlgorithm("dsp", 
            [
            {name: "start", value: this.firstObject.id},
            {name: "finish", value: this.secondObject.id}
            ], 
            function (pathObjects, properties, results) {
                console.log("anh Thành4", pathObjects, properties, results)
                self.resultCallback(pathObjects, properties, results);
            }
        );
    }
    return null;
}
// sau khi đã có 
// pathObjects
// properties
// results
// là đã có kết quả của thuật toán
// resultCallback chỉ là update lại message để trả ra kết quả thôi
FindShortPathNew.prototype.resultCallback = function (pathObjects, properties, results) {
    console.log("====================FindShortPathNew resultCallback==========================")

    var outputResult = {};
    outputResult["version"] = 1;
    outputResult["minPath"] = true;

    this.pathObjects = pathObjects;
    this.properties = properties;

    var bFound = results.length > 0 && results[0].value < this.infinityValue && (results[0].type == 1 || results[0].type == 2);

    if (bFound) {
        this.selectedObjects = {};

        for (var i = 0; i < pathObjects.length; i++) {
            this.selectedObjects[pathObjects[i].id] = 1;
        }

        this.message = g_shortestPathResult.replace("%d", (results[0].value * 1).toString());

        var nodesPath = this.GetNodesPath(results, 1, results.length - 1);
        outputResult["paths"] = [];
        outputResult["paths"].push(nodesPath);

        this.message = this.message + ": ";
        for (var i = 0; i < nodesPath.length; i++) {
            this.message = this.message + this.graph.FindVertex(nodesPath[i]).mainText + ((i < nodesPath.length - 1) ? "&rArr;" : "");
        }

        this.message = this.message + " <select style=\"float:right\" id=\"enumReport\"></select>";

        this.updateUpText();
    }
    else {
        this.message = g_pathNotExists;
    }
    this.secondObject = null;
    this.firstObject = null;

    this.outResultCallback(outputResult);
}

// sử dụng với những thuật toán cần chọn đỉnh đầu và đỉnh cuối
FindShortPathNew.prototype.selectVertex = function (vertex) {
    console.log("buoc 8: FindShortPathNew.prototype.selectVertex", vertex)
    this.pathObjects = null;
    this.shortDist = null;

    // nếu đỉnh đầu đã được chọn, lần gọi sẽ là chọn đỉnh thứ 2
    if (this.firstObject) {
        this.message = g_processing;   // "Processing..."
        this.secondObject = vertex;         // gán đỉnh vừa chọn cho đỉnh end 
        this.selectedObjects = [];
    }
    else    // nếu đỉnh start chưa được chọn
    {
        this.firstObject = vertex;          // gán đỉnh vừa chọn cho đỉnh start
        this.secondObject = null;
        this.selectedObjects = {};
        this.message = g_selectFinishVertexForShortPath;    // "Select finish vertex for shortest path"
    }

    return true;
}

// bỏ chọn tất cả
FindShortPathNew.prototype.deselectAll = function () {
    this.firstObject = null;
    this.secondObject = null;
    this.selectedObjects = {};
    this.message = g_selectStartVertexForShortPath;
    return true;
}

FindShortPathNew.prototype.instance = function () {
    return false;
}

FindShortPathNew.prototype.getObjectSelectedGroup = function (object) {
    return (object.id in this.selectedObjects) ? this.selectedObjects[object.id] : ((object == this.firstObject || object == object.secondObject) ? 1 : 0);
}

FindShortPathNew.prototype.messageWasChanged = function () {
    var enumReport = document.getElementById("enumReport");
    if (enumReport) {
        var optionFull = document.createElement('option');
        optionFull.text = g_fullReport;
        optionFull.value = 0;

        var optionShort = document.createElement('option');
        optionShort.text = g_shortReport;
        optionShort.value = 1;

        enumReport.add(optionFull, 0);
        enumReport.add(optionShort, 1);

        enumReport.selectedIndex = this.app.GetCurrentValue("findShortPathReportType", 1);

        var self = this;
        enumReport.onchange = function () {
            self.changedType();
            self.app.redrawGraph();
        };
    }
}


FindShortPathNew.prototype.changedType = function () {
    var enumReport = document.getElementById("enumReport");

    this.app.SetCurrentValue("findShortPathReportType", enumReport.options[enumReport.selectedIndex].value);
    this.updateUpText();
}

FindShortPathNew.prototype.updateUpText = function () {
    var reportType = this.app.GetCurrentValue("findShortPathReportType", 1);

    if (reportType == 0) {
        for (var i = 0; i < this.graph.vertices.length; i++) {
            var object = this.graph.vertices[i];
            if (this.properties.hasOwnProperty(object.id)) {
                var propertie = this.properties[object.id];
                if (propertie.hasOwnProperty('lowestDistance')) {
                    object.upText = g_shortestDistance + (propertie.lowestDistance > this.infinityValue ? "\u221E" : (propertie.lowestDistance * 1).toString());
                }
            }
        }
    }
    else {
        for (var i = 0; i < this.graph.vertices.length; i++) {
            this.graph.vertices[i].upText = "";
        }
    }
}

FindShortPathNew.prototype.getPriority = function () {
    return -10;
}

// Algorithm support multi graph
FindShortPathNew.prototype.IsSupportMultiGraph = function () {
    return true;
}


// Factory for connected components.
function CreateFindShortPathNew(graph, app) {
    return new FindShortPathNew(graph, app)
}

// Gerister connected component.
RegisterAlgorithm(CreateFindShortPathNew);