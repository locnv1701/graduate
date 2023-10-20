
function MinimumSpanningTree(graph, app)
{
    BaseAlgorithm.apply(this, arguments);
    this.isNotConnected = false;
    this.MST = 0;
    this.edges = [];
}


// inheritance.
MinimumSpanningTree.prototype = Object.create(BaseAlgorithm.prototype);


MinimumSpanningTree.prototype.getName = function(local)
{
    return g_minimumSpanningTree; //local == "ru" ? "Поиск минимального остовного дерева" : "Search of minimum spanning tree";
}

MinimumSpanningTree.prototype.getId = function()
{
    return "OlegSh.minimalSpanningTree";
}

// @return message for user.
MinimumSpanningTree.prototype.getMessage = function(local)
{
	if (!this.isNotConnected )  // nếu graph có duy nhất 1 thành phần liên thông
    {
    	return g_SpanningTreeResult + this.MST + ". " + 
            (this.graph.hasDirectEdge() ? g_SpanningTreeIgnoreDir : "");
    }
    else // graph có nhiều thành phần liên thông, không tìm đường cây khung
    {
    	return g_SpanningTreeNotConnected;  // "Graph is not connected"
    }
}

MinimumSpanningTree.prototype.result = function(resultCallback)
{   
    console.log("buoc 7: MinimumSpanningTree.prototype.result")
    this.MST = 0;   // trọng số của cây khung
    this.edges = [];
    this.isNotConnected = true;
    var tempVertices = this.graph.vertices.slice();

    connectedVertex = getVertexToVertexArray(this.graph, true);
    // với connectedVertex[i] = [x,y,z,..] -> x,y,z,... là danh sách các đỉnh liền kề về đỉnh i

    // We ignore orientation for this algorithm.
    //if (!this.graph.hasDirectEdge())
    {   
        // chạy thuật toán tìm cây khung (Kruskal)
    	res = this.resultStartedFrom(tempVertices[0], connectedVertex);
    	this.isNotConnected = res.isNotConnected;
    	if (!this.isNotConnected)
    	{
    		this.MST = res.MST;
    		this.edges = res.edges;  
    	}
    }
    /*else
    {
    	for (var i = 0; i < tempVertices.length; i++)
        {
            res = this.resultStartedFrom(tempVertices[i], connectedVertex);
    		if (!res.isNotConnected)
    		{
            this.isNotConnected = res.isNotConnected;
    			if (this.MST == 0 || res.MST < this.MST)
            {
            console.log(res);
            this.MST = res.MST;
    				this.edges = res.edges;  
        }
    		}
        }
    }*/
    
    var result = {};
    result["version"] = 1;
    result["minPath"] = true;

    return result;
}

MinimumSpanningTree.prototype.resultStartedFrom = function(vertex, connectedVertex)
{
    var res = {};
    res.MST = 0;
    res.edges = [];
    res.isNotConnected = false;
    
    var inTree = [];
    inTree.push(vertex);    // thêm đỉnh vào cây khung
    var vertecesInTree = 0; // số đỉnh trong cây khung
    
	  // Will break in end of loop
    while (true)
    {
        vertecesInTree++;
        var minVert = null; // đỉnh liền kề với đỉnh đang xét, tạo nên cạnh có trọng số nhỏ nhất
        var minEdge = null; // trọng số của cạnh tạo bởi đỉnh xét và đỉnh liên kề có trọng số nhỏ nhất

        for (i = 0; i < inTree.length; i++)
        {
            var element = inTree[i];

            // nếu đỉnh element.id có đỉnh liên kề
            if (connectedVertex.hasOwnProperty(element.id))
            {   

                // duyệt qua danh sách đỉnh liền kề
                for (j = 0; j < connectedVertex[element.id].length; j++)
                {   
                    // lấy đỉnh liền kề
                    var connectedElement = connectedVertex[element.id][j];

                    // lấy cạnh có trọng số nhỏ nhất và bỏ qua hướng của cạnh
                    var connectedEdge    = this.graph.FindEdgeMinIgnoreDirection(element.id, connectedElement.id);
                    
                    // nếu đỉnh liên kê chưa nằm trong cây khung 
                    if (inTree.indexOf(connectedElement) < 0)
                    {   
						if (minEdge == null || minEdge.weight > connectedEdge.weight)
                        {
                            minEdge = connectedEdge;
                            minVert = connectedElement;
                        }
                    }
                }
                
            }
        }

        // sau khi loop qua 2 vòng for
        // for 1: duyệt qua tất cả các đỉnh trong inTree( cạnh trong cây khung hiện tại)
        // for 2: duyệt qua tất cả các đỉnh kề với đỉnh đang xét của for 1
        // tìm được cạnh có trọng số nhỏ nhất với đỉnh là một đỉnh trong cây khung hiện tại

        // sau khi tìm được cạnh đó
        // minEdge lưu cạnh mới đó
        // minVert lưu đỉnh mới đó
        
        if (minVert == null) // nếu không tìm được minVert tức là không tìm được cạnh mới nào mà đỉnh mới chưa nằm trong cây khung 
        {   
            break; // kết thúc việc duyệt qua các đỉnh trong cây khung
        }
        else    // nếu tìm được cạnh mới
        {
            res.MST = res.MST + Number(minEdge.weight); // cập nhật trọng số của cây khung
            inTree.push(minVert);       // thêm đỉnh mới vào cây khung
            res.edges.push(minEdge);    // thêm cạnh mới vào cây khung    
        }   
    }

    // nếu cây khung có ít đỉnh hơn đỉnh của graph
    // không tồn tại cây khung bao trùm được đồ thị
    res.isNotConnected = (inTree.length < this.graph.vertices.length); 

    return res;
}

MinimumSpanningTree.prototype.getObjectSelectedGroup = function(object)
{
	return this.isNotConnected ? 0 : 
    	(object instanceof  BaseVertex || this.edges.indexOf(object) >= 0) ? 1 : 0;
}

MinimumSpanningTree.prototype.getPriority = function()
{
    return -9.3;
}

// Algorithm support multi graph
MinimumSpanningTree.prototype.IsSupportMultiGraph = function ()
{
    return true;
}


// Factory for algorithm.
function CreateMinimumSpanningTree(graph, app)
{
    return new MinimumSpanningTree(graph)
}

// Register connected component.
RegisterAlgorithm (CreateMinimumSpanningTree);

