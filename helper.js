var spiral = function(segLength, size)
{
	console.log("drawing spiral with parameters segLength: " + segLength + ", size: " + size);
	var geometry = new THREE.Geometry();
	
	for(var t = 0; t < parseInt(size); t+= parseFloat(segLength))
	{
		var _x = Math.pow(t, .5) * Math.cos(t);
		var _y = Math.pow(t, .5) * Math.sin(t);
		geometry.vertices.push(new THREE.Vector3(_x, _y, 10));
	}
	return geometry;
};

/**
 * Random shape function to test out different values
 */
var randomGraph = function (segLength, size)
{
	var geometry = new THREE.Geometry();
	for(var t = 0; t < size; t+= segLength)
	{
		var _x = Math.cos(t) / Math.sin(t) + t*(Math.sin(1/t));
		var _y = Math.sin(t) / Math.cos(t) + t*(Math.cos(1/t));
		geometry.vertices.push(new THREE.Vector3(_x, _y, 1));
	}	
	return geometry;
};

var sphereGraph = function(radius)
{
	console.log("Drawing sphere...");
	var geometry = new THREE.Geometry();
	for(var u = -radius; u < radius; u++)
	{
		for(var v = -radius; v < radius; v++)
		{
			var _x =  10 * Math.cos(u) * Math.sin(v);
			var _y =   10 * Math.sin(u) * Math.cos(v);
			var _z =  10 * Math.cos(v);
			geometry.vertices.push(new THREE.Vector3(_x, _y, _z));
		}
	}
	return geometry;
};

var definedShape = function(pointArr)
{
	console.log("drawing specific shape...");
	var geometry = new THREE.Geometry();
	for (var i = 0; i < pointArr.length; i++)
	{
		geometry.vertices.push(pointArr[i]);
	}
	return geometry;
};

var point = function(x, y, z)
{
	if(z === undefined)
	{
		z === 10;
	}
	var _p = [x, y, z];
	return _p;
};

var drawShape = function (shapeName, segLength, size)
{
	var geometry;
	switch(shapeName)
	{
		case "circle":
		{
			console.log("attempting circle");
			geometry =  sphereGraph(segLength * 10);
			break;
		}
		case "archSpiral":
		{
			console.log("attempting spiral");
			geometry =  spiral(segLength, size);
			break;
		}
		default:
		{
			console.log("nothing to draw");
			break;
		}
	}
	return geometry;	
};