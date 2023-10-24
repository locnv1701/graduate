/**
 * Find short path.
 *
 */

function BFSAlgorithm(graph, app) {
    BaseTraversal.apply(this, arguments);
    this.message = g_startTraversal;
}

// inheritance.
BFSAlgorithm.prototype = Object.create(BaseTraversal.prototype);
// timer interval
BFSAlgorithm.prototype.timerInterval = 500;

BFSAlgorithm.prototype.getName = function (local) {
    return g_BFSName;// local == "ru" ? "Поиск в ширину" : "Breadth-first search";
}

BFSAlgorithm.prototype.getId = function () {
    return "OlegSh.BFSAlgorithm";
}

// @return message for user.
BFSAlgorithm.prototype.getMessage = function (local) {
    console.log("bfs getMessage", this.message, local);
    return this.message;
}

BFSAlgorithm.prototype.getCategory = function () {
    return 1;
}

BFSAlgorithm.prototype.result = function (resultCallback) {
    var result = {};
    result["version"] = 1;

    return result;
}

BFSAlgorithm.prototype.getMainMessage = function () {
    console.log("buoc 9: start getMainMessage bfs ");
    var message = g_traversalOrder;

    
    // calculate.
    var tempVisited = this.visited.slice();
    var tempEdge = [];

    var oldLength = 0;
    
    // thuật toán bfs 
    // tưởng tượng duyệt queue
    // push một đỉnh đầu tiên vào visited
    // duyệt qua visited, qua mỗi đỉnh push các đỉnh từ bé đến lớn liên kết đỉnh đang duyệt
    // duyệt đến khi nào hết visited

    while (oldLength < tempVisited.length) {
        oldLength = tempVisited.length;
        for (var i = 0; i < tempVisited.length; i++) {
            if (this.bfs(tempVisited[i], tempVisited, tempEdge))
                break;
        }
    }

    // Format message
    for (var i = 0; i < tempVisited.length; i++) {
        tempVisited[i].upText = (i + 1) + "";
        message = message + tempVisited[i].mainText + " ";
    }

    console.log("==========> bfs console: " + message);
    return message;
}

BFSAlgorithm.prototype.getPriority = function () {
    return -9.5;
}

BFSAlgorithm.prototype.step = function () {
    console.log("==========> bfs step")

    // thuật toán bfs 
    // sử dụng stack
    // push một đỉnh đầu tiên vào visited
    // duyệt qua visited, qua mỗi đỉnh push các đỉnh từ bé đến lớn liên kết đỉnh đang duyệt
    // duyệt đến khi nào hết visited
    for (var i = 0; i < this.visited.length; i++) {
        if (this.bfs(this.visited[i], this.visited, this.edges)) {
            this.app.redrawGraph();
            return;
        }
    }

    clearTimeout(this.timer);
    this.timer = null;
    return;
}

// vertex: một đỉnh đang được xét
// vertexArray: danh sách đỉnh đã thăm
// edgeArray: danh sách cạnh

BFSAlgorithm.prototype.bfs = function (vertex, vertexArray, edgeArray) {

    // duyệt qua tất cả các đỉnh của đồ thị
    for (var i = 0; i < this.graph.vertices.length; i++) {

        // lấy ra đỉnh ở index i gán cho nextVertex
        var nextVertex = this.graph.vertices[i];

        // lấy cạnh tạo bởi đỉnh đang được xét và đỉnh nextVertex
        var edge = this.graph.FindEdgeAny(vertex.id, nextVertex.id);

        // nếu tồn tại cạnh và đỉnh nextVertex không nằm trong danh sách đỉnh đã tham
        if (edge && !vertexArray.includes(nextVertex)) {

            // thêm cạnh đó vào danh sách cạnh
            edgeArray.push(edge);

            // thêm đỉnh đó vào danh sách đỉnh đã thăm
            vertexArray.push(nextVertex);

            // trả về true
            return true;
        }
    }

    // trả về false
    return false;

    // trả về true, false nhằm mục đích xác định xem có phải vẽ lại giao diện không
    // ví dụ: nếu có cạnh mới cạnh đó sẽ được vẽ lại (tô đậm thêm)
}

// Algorithm support multi graph
BFSAlgorithm.prototype.IsSupportMultiGraph = function () {
    return true;
}

// Factory for connected components.
function CreateBFSAlgorithm(graph, app) {
    return new BFSAlgorithm(graph, app)
}

// Gerister connected component.
RegisterAlgorithm(CreateBFSAlgorithm);
