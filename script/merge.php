<?php
$outputFilename = 'script/example.js';

unlink($outputFilename);

file_put_contents($outputFilename, file_get_contents("script/utils.js"), FILE_APPEND);
file_put_contents($outputFilename, file_get_contents("script/texts.js"), FILE_APPEND);
file_put_contents($outputFilename, file_get_contents("script/point.js"), FILE_APPEND);
file_put_contents($outputFilename, file_get_contents("script/EdgeModel.js"), FILE_APPEND);
file_put_contents($outputFilename, file_get_contents("script/VertexModel.js"), FILE_APPEND);
file_put_contents($outputFilename, file_get_contents("script/BaseVertex.js"), FILE_APPEND);
file_put_contents($outputFilename, file_get_contents("script/BaseEdge.js"), FILE_APPEND);
file_put_contents($outputFilename, file_get_contents("script/BaseVertexDrawer.js"), FILE_APPEND);
file_put_contents($outputFilename, file_get_contents("script/BaseEdgeDrawer.js"), FILE_APPEND);
file_put_contents($outputFilename, file_get_contents("script/BaseBackgroundDrawer.js"), FILE_APPEND);
file_put_contents($outputFilename, file_get_contents("script/Algorithms.js"), FILE_APPEND);
file_put_contents($outputFilename, file_get_contents("script/EventHandlers.js"), FILE_APPEND);
file_put_contents($outputFilename, file_get_contents("script/GraphMLCreator.js"), FILE_APPEND);
file_put_contents($outputFilename, file_get_contents("script/Graph.js"), FILE_APPEND);
file_put_contents($outputFilename, file_get_contents("script/EnumVertices.js"), FILE_APPEND);
file_put_contents($outputFilename, file_get_contents("script/Application.js"), FILE_APPEND);
file_put_contents($outputFilename, file_get_contents("script/main.js"), FILE_APPEND);
file_put_contents($outputFilename, file_get_contents("script/BaseTraversal.js"), FILE_APPEND);

if (file_exists($outputFilename))
{
  echo ("File exists");
}
else
{
  echo ("File not exists");
}

?>