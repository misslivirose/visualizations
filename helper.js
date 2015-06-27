var spiral = function(segLength, size)
{
	var geometry = new THREE.Geometry();
	
	for(var t = 0; t < size; t+= segLength)
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

var definedShape = function(pointArr)
{
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
