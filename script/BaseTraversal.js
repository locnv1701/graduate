/**
 * Find short path.
 *
 */

// base thuật toán duyệt đường đi
function BaseTraversal(graph, app)
{
    BaseAlgorithmEx.apply(this, arguments);
    this.visited = [];
    this.edges   = [];
    this.timer   = null;
}

// inheritance.
BaseTraversal.prototype = Object.create(BaseAlgorithmEx.prototype);
// timer interval
BaseTraversal.prototype.timerInterval = 500;

BaseTraversal.prototype.result = function(resultCallback)
{
    var result = {};
    result["version"] = 1;
    
    return result;
}

BaseTraversal.prototype.selectVertex = function(vertex)
{
	this.visited = [];  // đỉnh đã duyệt qua
    this.edges   = [];  // danh sách cạnh

    if (this.timer)
        clearTimeout(this.timer);
    this.timer   = null;
    
    this.visited.push(vertex);  // thêm đỉnh xuất phát vào danh sách đỉnh đã duyệt qua

    var context = this;

    // chạy thuật toán và xử lý việc vẽ lại đồ thị(từng cạnh) theo từng bước chạy của thuật toán
    this.timer  = setInterval(function()
                            {
                                context.step();
                            }, this.timerInterval);

    // chạy thuật toán và lấy kết quả của thuật toán
    this.message = this.getMainMessage();

    return true;
}

BaseTraversal.prototype.getObjectSelectedGroup = function(object)
{
    return (this.visited.includes(object) ? 1 : (this.edges.includes(object) ? 1 : 0));
}

// trả về thuật toán đã được thực thi xong chưa
BaseTraversal.prototype.instance = function()
{
    return false;
}
