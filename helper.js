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
