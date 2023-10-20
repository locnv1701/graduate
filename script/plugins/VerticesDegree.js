/**
 * Algorithm samble.
 *
 */
function VerticesDegree(graph, app)
{
    BaseAlgorithm.apply(this, arguments);
    this.degree = {};
    this.maxDegree = 0;
}


// inheritance.
VerticesDegree.prototype = Object.create(BaseAlgorithm.prototype);


VerticesDegree.prototype.getName = function(local)
{
    return g_VerticesDegreeName; //local == "ru" ? "Рассчитать степень вершин" : "Calculate vertices degree";
}

VerticesDegree.prototype.getId = function()
{
    return "OlegSh.VertexDegree";
}

// @return message for user.
VerticesDegree.prototype.getMessage = function(local)
{
    return g_maximumDegreeOfGraph + " " + this.maxDegree;
}

VerticesDegree.prototype.result = function(resultCallback)
{   
    console.log("buoc 7: VerticesDegree.prototype.result")
    this.degree = {};
    this.maxDegree = 0;
    
    var result = {};
    result["version"] = 1;

    var graph = this.graph;
    var thisObj = this;
    
    // hàm cập nhật cấp của đỉnh, và cập nhật cấp max của graph
    var addDegreeToVertex = function (id)
    {   
        // thisObj.degree[id] là cấp của đỉnh "id"
        if (thisObj.degree.hasOwnProperty(id))  // kiểm tra xem thisObj.degree có property id hay không
        {
            thisObj.degree[id] ++;  // tăng cấp của id đó lên 1
            currentDegree = thisObj.degree[id];
            thisObj.maxDegree = Math.max(thisObj.maxDegree, currentDegree); // cập nhật lại max degree
        }
        else
        {
            thisObj.degree[id] = 1; // nếu chưa lưu cấp của đỉnh id thì khởi tạo cấp của đỉnh id này bằng 1
        }
    }
    
    // lặp qua tất cả các cạnh
    for (var i = 0; i < graph.edges.length; i++)
    {
        var edge          = graph.edges[i];
        var currentDegree = 0;
        
        // với mỗi cạnh cập nhật cấp của đinh đầu tiên của cạnh
        addDegreeToVertex(edge.vertex1.id);
        if (!edge.isDirect) // nếu cạnh đó ko có hướng cập nhật cấp của đỉnh thứ 2
        {
            addDegreeToVertex(edge.vertex2.id);
        }
    }
    
    for (var i = 0; i < graph.vertices.length; i++)
    {
        var vertex    = graph.vertices[i];

        // với đỉnh không có cạnh nào cả, thì cấp sẽ bằng 0
        if (!this.degree.hasOwnProperty(vertex.id))
        {
            this.degree[vertex.id] = 0;  
        }
        
        // set upText cho đỉnh để hiển thị
        vertex.upText = this.degree[vertex.id];
    }

    return result;
}

VerticesDegree.prototype.getObjectSelectedGroup = function(object)
{
    return (this.degree.hasOwnProperty(object.id)) ? this.degree[object.id]: 0;
}

// Algorithm support multi graph
VerticesDegree.prototype.IsSupportMultiGraph = function ()
{
    return true;
}

// Factory for connected components.
function CreateAlgorithmVerticesDegree(graph, app)
{
    return new VerticesDegree(graph, app)
}

// Gerister connected component.
RegisterAlgorithm (CreateAlgorithmVerticesDegree);
