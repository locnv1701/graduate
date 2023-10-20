/**
 * Default handler.
 * Select using mouse, drag.
 *
 */
function FindConnectedComponentNew(graph, app)
{
    BaseAlgorithm.apply(this, arguments);
    this.connectedComponentNumber = 0;    
    this.component = {};
    this.selectedObjects = [];
}


// inheritance.
FindConnectedComponentNew.prototype = Object.create(BaseAlgorithm.prototype);


FindConnectedComponentNew.prototype.getName = function(local)
{
    return g_findConnectedComponent; //local == "ru" ? "Найти компоненты связности" : "Find connected components";
}

FindConnectedComponentNew.prototype.getId = function()
{
    return "OlegSh.ConnectedComponent";
}

// @return message for user.
FindConnectedComponentNew.prototype.getMessage = function(local)
{
    return (this.graph.hasDirectEdge() ? g_sickConnectedComponent : g_connectedComponent) + this.connectedComponentNumber;
}

FindConnectedComponentNew.prototype.result = function(resultCallback)
{   
    console.log("buoc 7: FindConnectedComponentNew.prototype.result")
    this.calculate(true);
    
    var result = {};
    result["version"] = 1;
    this.selectedObjects = this.component;

    return result;
}
// thuật toán tìm thành phần liên thông
FindConnectedComponentNew.prototype.calculate = function(fillUpText = false)
{
    this.connectedComponentNumber = 0;  // số thành phần liên thông của graph
    
    // component[i] = x tức đỉnh i thuộc thành phần liên thông x
    this.component = {};
    var tempVertices = this.graph.vertices.slice(); // danh sách các đỉnh

    connectedVertex = getVertexToVertexArray(this.graph, true);
    // với connectedVertex[i] = [x,y,z,..] -> x,y,z,... là danh sách các đỉnh liền kề về đỉnh i

    var connectedComponentNumber = 0;
    
    while (tempVertices.length > 0)
    {   
        // sau khi duyệt hết stack nhưng tempVertices vẫn còn đỉnh
        // tức là còn đỉnh chưa được thăm, hay cần một thành phần liên thông mới để chưa đỉnh đó
        // connectedComponentNumber++
        // và tiếp tục duyệt các đỉnh chưa được thăm đó
        connectedComponentNumber++;
        
        var stack = [];
        stack.push(tempVertices[0]); // push đỉnh đầu tiên vào stack
        
        tempVertices.splice(0, 1);  // xóa đỉnh đầu tiên khỏi danh sách cạnh
        
        indexInStack = 0; // không để làm gì cả
        
        // duyệt stack
        for (i = 0; i < stack.length; i++)
        {
            var stackElement = stack[i];

            this.component[stackElement.id]  = connectedComponentNumber;
            if (fillUpText)
            {   
                // đánh dấu số thứ tự thành phần liên thông cho đỉnh( để hiển thị cho client)
                stackElement.upText = connectedComponentNumber;
            }
            
            // nếu đỉnh "stackElement.id" có những đỉnh liên kề
            if (connectedVertex.hasOwnProperty(stackElement.id))
            {   
                // loop qua danh sách đỉnh liên kê với đỉnh "stackElement.id"
                for (j = 0; j < connectedVertex[stackElement.id].length; j++)
                {
                    // lấy đỉnh liên kề với đỉnh "stackElement.id"
                    var nextVertex = connectedVertex[stackElement.id][j];

                    // lấy cạnh
                    var connectedEdge = this.graph.FindEdgeAny(stackElement.id, nextVertex.id);

                    // nếu đỉnh đó chưa nằm trong stack
                    if (stack.indexOf(nextVertex) < 0)
                    {
                        // push đỉnh đó vào stack
                        stack.push(nextVertex);

                        // xóa đỉnh đó khỏi tempVertices
                        tempVertices.splice(tempVertices.indexOf(nextVertex), 1);

                        // nếu có cạnh kết nối, đánh dấu thành phần liên thông cho cạnh
                        if (connectedEdge)
                        {   
                            this.component[connectedEdge.id]  = connectedComponentNumber;
                        }
                    }

                    // nếu đỉnh liên kề đã có trong stack nhưng cạnh chưa có trong stack thì cũng đang dấu thành phần liên thông cho cạnh
                    else if (connectedEdge && !(connectedEdge.id in this.component))
                    {
                        this.component[connectedEdge.id]  = connectedComponentNumber;
                    }
                }
            }
        }
    }
    this.connectedComponentNumber = connectedComponentNumber;
    
    //var result = {};
    //result["version"] = 1;
    //this.selectedObjects = this.component;

    return this.connectedComponentNumber;
}

FindConnectedComponentNew.prototype.getObjectSelectedGroup = function(object)
{
    return (object.id in this.selectedObjects) ? this.selectedObjects[object.id] : 0;
}

FindConnectedComponentNew.prototype.getPriority = function()
{
    return 0;
}

// Algorithm support multi graph
FindConnectedComponentNew.prototype.IsSupportMultiGraph = function()
{
    return true;
}


// Factory for connected components.
function CreateConnectedComponetsNew(graph, app)
{
    return new FindConnectedComponentNew(graph)
}

// Gerister connected component.
RegisterAlgorithm (CreateConnectedComponetsNew);
