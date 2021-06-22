// primer ejercicio con three.js
// crear una geometria teniendo en cuenta el orden de los vértices
var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;


function init() {
	var canvasWidth = window.innerWidth * 0.9;
	var canvasHeight = window.innerHeight * 0.9;

	// CAMERA

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 80000 );
	camera.position.set(-1,1,3);
	camera.lookAt(0,0,0);

	// LIGHTS

	light = new THREE.DirectionalLight( 0xFFFFFF, 0.7 );
	light.position.set( 1, 1, 1 );
	light.target.position.set(0, 0, 0);
	light.target.updateMatrixWorld()

	var ambientLight = new THREE.AmbientLight( 0x111111 );

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0xAAAAAA, 1.0 );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	// CONTROLS
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);

    var material = new THREE.MeshBasicMaterial( { color: 0x4D2108} ); // Material de madera
	var material2 = new THREE.MeshBasicMaterial( { color: 0x976001} ); // Material piso
	var material3 = new THREE.MeshBasicMaterial( { color: 0xFF5733} ); // Material piso
	var material4 = new THREE.MeshBasicMaterial( { color: 0x434343} ); // Material podrio
	
	
	// SCENE

	scene = new THREE.Scene();
	scene.add( light );
	scene.add( ambientLight );

	var x1=-2;
	var x2=-1.95;
	var y1=0.0;
	var y2=0.4;
	
	var z1=-7;
	var z2=-6.95;
	var inc=8;
	for (let index = 1; index < 8; index++) {
		z1=-7;
		z2=-6.95;

		x1+=1;
		x2+=1;
		
		for (let index2 = 1; index2 < 5; index2++) {
			z1+=2;
			z2+=2;
			// PUPITRE
			

			var inc=8;
			
			//pata 1
			var migeometria = new THREE.Geometry();
			//VERTICE0
			migeometria.vertices.push( new THREE.Vector3( x1, y1, z1 ) );
			//VERTICE1
			migeometria.vertices.push( new THREE.Vector3( x2, y1, z1 ) );
			//VERTICE2
			migeometria.vertices.push( new THREE.Vector3( x2, y2, z1 ) );
			//VERTICE3
			migeometria.vertices.push( new THREE.Vector3( x1, y2, z1 ) );
			//VERTICE4
			migeometria.vertices.push( new THREE.Vector3( x2, y1, z2 ) );
			//VERTICE5
			migeometria.vertices.push( new THREE.Vector3( x2, y2, z2 ) );
			//VERTICE6
			migeometria.vertices.push( new THREE.Vector3( x1, y1, z2 ) );
			//VERTICE7
			migeometria.vertices.push( new THREE.Vector3( x1, y2, z2 ) );
			


			migeometria.faces.push( new THREE.Face3( 0, 1, 2 ) );
			migeometria.faces.push( new THREE.Face3( 0, 2, 3 ) );
			migeometria.faces.push( new THREE.Face3( 1, 4, 5 ) );
			migeometria.faces.push( new THREE.Face3( 1, 5, 2 ) );
			migeometria.faces.push( new THREE.Face3( 0, 6, 7 ) );
			migeometria.faces.push( new THREE.Face3( 0, 7, 3 ) );
			migeometria.faces.push( new THREE.Face3( 6, 4, 5 ) );
			migeometria.faces.push( new THREE.Face3( 6, 5, 7 ) );
			migeometria.faces.push( new THREE.Face3( 3, 2, 5) );
			migeometria.faces.push( new THREE.Face3( 3, 5, 7 ) );
			migeometria.faces.push( new THREE.Face3( 0, 1, 4 ) );
			migeometria.faces.push( new THREE.Face3( 0, 4, 6 ) );

			migeometria.faces.push( new THREE.Face3( 0, 2, 1 ) );
			migeometria.faces.push( new THREE.Face3( 0, 3, 2 ) );
			migeometria.faces.push( new THREE.Face3( 1, 5, 4 ) );
			migeometria.faces.push( new THREE.Face3( 1, 2, 5 ) );
			migeometria.faces.push( new THREE.Face3( 0, 7, 6 ) );
			migeometria.faces.push( new THREE.Face3( 0, 3, 7 ) );
			migeometria.faces.push( new THREE.Face3( 6, 5, 4 ) );
			migeometria.faces.push( new THREE.Face3( 6, 7, 5 ) );
			migeometria.faces.push( new THREE.Face3( 3, 5, 2) );
			migeometria.faces.push( new THREE.Face3( 3, 7, 5 ) );
			migeometria.faces.push( new THREE.Face3( 0, 4, 1 ) );
			migeometria.faces.push( new THREE.Face3( 0, 6, 4 ) );

			//pata 2
			x1+=0.25;
			x2+=0.25;
			
			//VERTICE0
			migeometria.vertices.push( new THREE.Vector3( x1, y1, z1 ) );
			//VERTICE1
			migeometria.vertices.push( new THREE.Vector3( x2, y1, z1 ) );
			//VERTICE2
			migeometria.vertices.push( new THREE.Vector3( x2, y2, z1 ) );
			//VERTICE3
			migeometria.vertices.push( new THREE.Vector3( x1, y2, z1 ) );
			//VERTICE4
			migeometria.vertices.push( new THREE.Vector3( x2, y1, z2 ) );
			//VERTICE5
			migeometria.vertices.push( new THREE.Vector3( x2, y2, z2 ) );
			//VERTICE6
			migeometria.vertices.push( new THREE.Vector3( x1, y1, z2 ) );
			//VERTICE7
			migeometria.vertices.push( new THREE.Vector3( x1, y2, z2 ) );

			migeometria.faces.push( new THREE.Face3( 0+inc, 2+inc, 1+inc ) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 3+inc, 2+inc ) );
			migeometria.faces.push( new THREE.Face3( 1+inc, 5+inc, 4+inc ) );
			migeometria.faces.push( new THREE.Face3( 1+inc, 2+inc, 5+inc) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 7+inc, 6+inc) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 3+inc, 7+inc) );
			migeometria.faces.push( new THREE.Face3( 6+inc, 5+inc, 4+inc) );
			migeometria.faces.push( new THREE.Face3( 6+inc, 7+inc, 5+inc) );
			migeometria.faces.push( new THREE.Face3( 3+inc, 5+inc, 2+inc) );
			migeometria.faces.push( new THREE.Face3( 3+inc, 7+inc, 5+inc) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 4+inc, 1+inc ) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 6+inc, 4+inc ) );

			migeometria.faces.push( new THREE.Face3( 0+inc, 1+inc, 2+inc ) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 2+inc, 3+inc ) );
			migeometria.faces.push( new THREE.Face3( 1+inc, 4+inc, 5+inc ) );
			migeometria.faces.push( new THREE.Face3( 1+inc, 5+inc, 2+inc) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 6+inc, 7+inc) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 7+inc, 3+inc) );
			migeometria.faces.push( new THREE.Face3( 6+inc, 4+inc, 5+inc) );
			migeometria.faces.push( new THREE.Face3( 6+inc, 5+inc, 7+inc) );
			migeometria.faces.push( new THREE.Face3( 3+inc, 2+inc, 5+inc) );
			migeometria.faces.push( new THREE.Face3( 3+inc, 5+inc, 7+inc) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 1+inc, 4+inc ) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 4+inc, 6+inc ) );


			//pata 3
			z1-=1;
			z2-=1;
			inc+=8;
			//VERTICE0
			migeometria.vertices.push( new THREE.Vector3( x1, y1, z1 ) );
			//VERTICE1
			migeometria.vertices.push( new THREE.Vector3( x2, y1, z1 ) );
			//VERTICE2
			migeometria.vertices.push( new THREE.Vector3( x2, y2, z1 ) );
			//VERTICE3
			migeometria.vertices.push( new THREE.Vector3( x1, y2, z1 ) );
			//VERTICE4
			migeometria.vertices.push( new THREE.Vector3( x2, y1, z2 ) );
			//VERTICE5
			migeometria.vertices.push( new THREE.Vector3( x2, y2, z2 ) );
			//VERTICE6
			migeometria.vertices.push( new THREE.Vector3( x1, y1, z2 ) );
			//VERTICE7
			migeometria.vertices.push( new THREE.Vector3( x1, y2, z2 ) );

			migeometria.faces.push( new THREE.Face3( 0+inc, 1+inc, 2+inc ) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 2+inc, 3+inc ) );
			migeometria.faces.push( new THREE.Face3( 1+inc, 4+inc, 5+inc ) );
			migeometria.faces.push( new THREE.Face3( 1+inc, 5+inc, 2+inc) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 6+inc, 7+inc) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 7+inc, 3+inc) );
			migeometria.faces.push( new THREE.Face3( 6+inc, 4+inc, 5+inc) );
			migeometria.faces.push( new THREE.Face3( 6+inc, 5+inc, 7+inc) );
			migeometria.faces.push( new THREE.Face3( 3+inc, 2+inc, 5+inc) );
			migeometria.faces.push( new THREE.Face3( 3+inc, 5+inc, 7+inc) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 1+inc, 4+inc ) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 4+inc, 6+inc ) );

			migeometria.faces.push( new THREE.Face3( 0+inc, 2+inc, 1+inc ) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 3+inc, 2+inc ) );
			migeometria.faces.push( new THREE.Face3( 1+inc, 5+inc, 4+inc ) );
			migeometria.faces.push( new THREE.Face3( 1+inc, 2+inc, 5+inc) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 7+inc, 6+inc) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 3+inc, 7+inc) );
			migeometria.faces.push( new THREE.Face3( 6+inc, 5+inc, 4+inc) );
			migeometria.faces.push( new THREE.Face3( 6+inc, 7+inc, 5+inc) );
			migeometria.faces.push( new THREE.Face3( 3+inc, 5+inc, 2+inc) );
			migeometria.faces.push( new THREE.Face3( 3+inc, 7+inc, 5+inc) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 4+inc, 1+inc ) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 6+inc, 4+inc ) );

			//pata 4
			x1-=0.25;
			x2-=0.25;
			inc+=8;
			//VERTICE0
			migeometria.vertices.push( new THREE.Vector3( x1, y1, z1 ) );
			//VERTICE1
			migeometria.vertices.push( new THREE.Vector3( x2, y1, z1 ) );
			//VERTICE2
			migeometria.vertices.push( new THREE.Vector3( x2, y2, z1 ) );
			//VERTICE3
			migeometria.vertices.push( new THREE.Vector3( x1, y2, z1 ) );
			//VERTICE4
			migeometria.vertices.push( new THREE.Vector3( x2, y1, z2 ) );
			//VERTICE5
			migeometria.vertices.push( new THREE.Vector3( x2, y2, z2 ) );
			//VERTICE6
			migeometria.vertices.push( new THREE.Vector3( x1, y1, z2 ) );
			//VERTICE7
			migeometria.vertices.push( new THREE.Vector3( x1, y2, z2 ) );

			migeometria.faces.push( new THREE.Face3( 0+inc, 1+inc, 2+inc ) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 2+inc, 3+inc ) );
			migeometria.faces.push( new THREE.Face3( 1+inc, 4+inc, 5+inc ) );
			migeometria.faces.push( new THREE.Face3( 1+inc, 5+inc, 2+inc) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 6+inc, 7+inc) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 7+inc, 3+inc) );
			migeometria.faces.push( new THREE.Face3( 6+inc, 4+inc, 5+inc) );
			migeometria.faces.push( new THREE.Face3( 6+inc, 5+inc, 7+inc) );
			migeometria.faces.push( new THREE.Face3( 3+inc, 2+inc, 5+inc) );
			migeometria.faces.push( new THREE.Face3( 3+inc, 5+inc, 7+inc) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 1+inc, 4+inc ) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 4+inc, 6+inc ) );

			migeometria.faces.push( new THREE.Face3( 0+inc, 2+inc, 1+inc ) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 3+inc, 2+inc ) );
			migeometria.faces.push( new THREE.Face3( 1+inc, 5+inc, 4+inc ) );
			migeometria.faces.push( new THREE.Face3( 1+inc, 2+inc, 5+inc) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 7+inc, 6+inc) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 3+inc, 7+inc) );
			migeometria.faces.push( new THREE.Face3( 6+inc, 5+inc, 4+inc) );
			migeometria.faces.push( new THREE.Face3( 6+inc, 7+inc, 5+inc) );
			migeometria.faces.push( new THREE.Face3( 3+inc, 5+inc, 2+inc) );
			migeometria.faces.push( new THREE.Face3( 3+inc, 7+inc, 5+inc) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 4+inc, 1+inc ) );
			migeometria.faces.push( new THREE.Face3( 0+inc, 6+inc, 4+inc ) );

			z1+=1;
			z2+=1;
			inc=8;
			//MESA
			var y3=y2+0.05;
			migeometria.faces.push( new THREE.Face3( 3, 10, 21 ) );
			migeometria.faces.push( new THREE.Face3( 3,21, 31 ) );

			migeometria.vertices.push( new THREE.Vector3( x1, y3, z1 ) );
			migeometria.vertices.push( new THREE.Vector3( x2+0.25, y3, z1 ) );
			migeometria.vertices.push( new THREE.Vector3( x2+0.25, y3, z2-1) );
			migeometria.vertices.push( new THREE.Vector3( x1, y3, z2-1 ) );
			
			migeometria.faces.push( new THREE.Face3( 7, 13, 33 ) );
			migeometria.faces.push( new THREE.Face3( 7, 33, 32 ) );
			migeometria.faces.push( new THREE.Face3( 13, 21, 34 ) );
			migeometria.faces.push( new THREE.Face3( 13, 34, 33 ) );
			migeometria.faces.push( new THREE.Face3( 7, 31, 35 ) );
			migeometria.faces.push( new THREE.Face3( 7, 35, 32 ) );
			migeometria.faces.push( new THREE.Face3( 31, 21, 34 ) );
			migeometria.faces.push( new THREE.Face3( 31, 34, 35 ) );
			migeometria.faces.push( new THREE.Face3( 32, 33, 34 ) );
			migeometria.faces.push( new THREE.Face3( 32, 34, 35 ) );

			migeometria.faces.push( new THREE.Face3( 7, 33, 13 ) );
			migeometria.faces.push( new THREE.Face3( 7, 32, 33 ) );
			migeometria.faces.push( new THREE.Face3( 13, 34, 21 ) );
			migeometria.faces.push( new THREE.Face3( 13, 33, 34 ) );
			migeometria.faces.push( new THREE.Face3( 7, 35, 31 ) );
			migeometria.faces.push( new THREE.Face3( 7, 32, 35 ) );
			migeometria.faces.push( new THREE.Face3( 31, 34, 21 ) );
			migeometria.faces.push( new THREE.Face3( 31, 35, 33 ) );
			migeometria.faces.push( new THREE.Face3( 32, 34, 33 ) );
			migeometria.faces.push( new THREE.Face3( 32, 35, 34 ) );
			

			// patas piso 1
			var y4=0.05;
			migeometria.vertices.push( new THREE.Vector3( x2+0.25, y4, z1 ) );//36
			migeometria.vertices.push( new THREE.Vector3( x1-0.50, y1, z1 ) );//37
			migeometria.vertices.push( new THREE.Vector3( x1-0.50, y4, z1) );//38
			migeometria.vertices.push( new THREE.Vector3( x1-0.50, y1, z2 ) );//39
			migeometria.vertices.push( new THREE.Vector3( x1-0.50, y4, z2 ) );//40
			migeometria.vertices.push( new THREE.Vector3( x2+0.25, y4, z2 ) );//41

			migeometria.faces.push( new THREE.Face3( 9, 38, 37 ) );
			migeometria.faces.push( new THREE.Face3( 9, 36, 38 ) );
			migeometria.faces.push( new THREE.Face3( 12, 40, 39 ) );
			migeometria.faces.push( new THREE.Face3( 12, 41, 40 ) );
			migeometria.faces.push( new THREE.Face3( 9, 39, 37 ) );
			migeometria.faces.push( new THREE.Face3( 9, 12, 39 ) );
			migeometria.faces.push( new THREE.Face3( 36, 40, 38 ) );
			migeometria.faces.push( new THREE.Face3( 36, 41, 40 ) );
			
			migeometria.faces.push( new THREE.Face3( 9, 37, 39 ) );
			migeometria.faces.push( new THREE.Face3( 9, 38, 36 ) );
			migeometria.faces.push( new THREE.Face3( 12, 39, 40 ) );
			migeometria.faces.push( new THREE.Face3( 12, 40, 41 ) );
			migeometria.faces.push( new THREE.Face3( 9, 37, 39 ) );
			migeometria.faces.push( new THREE.Face3( 9, 39, 12 ) );
			migeometria.faces.push( new THREE.Face3( 36, 38, 40 ) );
			migeometria.faces.push( new THREE.Face3( 36, 40, 41 ) );


			// patas piso 2
			inc=6;
			migeometria.vertices.push( new THREE.Vector3( x2+0.25, y4, z1-1 ) );//42
			migeometria.vertices.push( new THREE.Vector3( x1-0.50, y1, z1-1 ) );//43
			migeometria.vertices.push( new THREE.Vector3( x1-0.50, y4, z1-1) );//44
			migeometria.vertices.push( new THREE.Vector3( x1-0.50, y1, z2-1 ) );//45
			migeometria.vertices.push( new THREE.Vector3( x1-0.50, y4, z2-1 ) );//46
			migeometria.vertices.push( new THREE.Vector3( x2+0.25, y4, z2-1 ) );//47

			migeometria.faces.push( new THREE.Face3( 17, 38+inc, 37+inc ) );
			migeometria.faces.push( new THREE.Face3( 17, 36+inc, 38+inc ) );
			migeometria.faces.push( new THREE.Face3( 20, 40+inc, 39+inc ) );
			migeometria.faces.push( new THREE.Face3( 20, 41+inc, 40+inc ) );
			migeometria.faces.push( new THREE.Face3( 17, 39+inc, 37+inc ) );
			migeometria.faces.push( new THREE.Face3( 17, 20, 39+inc ) );
			migeometria.faces.push( new THREE.Face3( 36+inc, 40+inc, 38+inc ) );
			migeometria.faces.push( new THREE.Face3( 36+inc, 41+inc, 40+inc ) );

			migeometria.faces.push( new THREE.Face3( 17, 37+inc, 38+inc ) );
			migeometria.faces.push( new THREE.Face3( 17, 38+inc, 36+inc ) );
			migeometria.faces.push( new THREE.Face3( 20, 39+inc, 40+inc ) );
			migeometria.faces.push( new THREE.Face3( 20, 40+inc, 41+inc ) );
			migeometria.faces.push( new THREE.Face3( 17, 37+inc, 39+inc ) );
			migeometria.faces.push( new THREE.Face3( 17, 39+inc, 20 ) );
			migeometria.faces.push( new THREE.Face3( 36+inc, 38+inc, 40+inc ) );
			migeometria.faces.push( new THREE.Face3( 36+inc, 40+inc, 41+inc ) );
			
			// patas traseras 1
			var y5=0.6;
			migeometria.vertices.push( new THREE.Vector3( x1-0.45, y1, z1 ) );//48
			migeometria.vertices.push( new THREE.Vector3( x1-0.45, y1, z2 ) );//49
			migeometria.vertices.push( new THREE.Vector3( x1-0.45, y5, z1 ) );//50
			migeometria.vertices.push( new THREE.Vector3( x1-0.45, y5, z2 ) );//51
			migeometria.vertices.push( new THREE.Vector3( x1-0.50, y5, z2 ) );//52
			migeometria.vertices.push( new THREE.Vector3( x1-0.50, y5, z1 ) );//53

			migeometria.faces.push( new THREE.Face3( 37, 48, 50 ) );
			migeometria.faces.push( new THREE.Face3( 37, 50, 53 ) );
			migeometria.faces.push( new THREE.Face3( 40, 49, 51 ) );
			migeometria.faces.push( new THREE.Face3( 40, 51, 52 ) );
			migeometria.faces.push( new THREE.Face3( 48, 49, 51 ) );
			migeometria.faces.push( new THREE.Face3( 48, 51, 50 ) );
			migeometria.faces.push( new THREE.Face3( 37, 40, 52 ) );
			migeometria.faces.push( new THREE.Face3( 37, 52, 53 ) );
			
			migeometria.faces.push( new THREE.Face3( 37, 50, 48 ) );
			migeometria.faces.push( new THREE.Face3( 37, 53, 50 ) );
			migeometria.faces.push( new THREE.Face3( 40, 51, 49 ) );
			migeometria.faces.push( new THREE.Face3( 40, 52, 51 ) );
			migeometria.faces.push( new THREE.Face3( 48, 51, 49 ) );
			migeometria.faces.push( new THREE.Face3( 48, 50, 51 ) );
			migeometria.faces.push( new THREE.Face3( 37, 52, 40 ) );
			migeometria.faces.push( new THREE.Face3( 37, 53, 52 ) );

			// patas traseras 2
			migeometria.vertices.push( new THREE.Vector3( x1-0.45, y1, z1-1 ) );//54
			migeometria.vertices.push( new THREE.Vector3( x1-0.45, y1, z2-1 ) );//55
			migeometria.vertices.push( new THREE.Vector3( x1-0.45, y5, z1-1 ) );//56
			migeometria.vertices.push( new THREE.Vector3( x1-0.45, y5, z2-1 ) );//57
			migeometria.vertices.push( new THREE.Vector3( x1-0.50, y5, z2-1 ) );//58
			migeometria.vertices.push( new THREE.Vector3( x1-0.50, y5, z1-1 ) );//59

			migeometria.faces.push( new THREE.Face3( 37+inc, 48+inc, 50+inc ) );
			migeometria.faces.push( new THREE.Face3( 37+inc, 50+inc, 53+inc ) );
			migeometria.faces.push( new THREE.Face3( 40+inc, 49+inc, 51+inc ) );
			migeometria.faces.push( new THREE.Face3( 40+inc, 51+inc, 52+inc ) );
			migeometria.faces.push( new THREE.Face3( 48+inc, 49+inc, 51+inc ) );
			migeometria.faces.push( new THREE.Face3( 48+inc, 51+inc, 50+inc ) );
			migeometria.faces.push( new THREE.Face3( 37+inc, 40+inc, 52+inc ) );
			migeometria.faces.push( new THREE.Face3( 37+inc, 52+inc, 53+inc ) );

			migeometria.faces.push( new THREE.Face3( 37+inc, 50+inc, 48+inc ) );
			migeometria.faces.push( new THREE.Face3( 37+inc, 53+inc, 50+inc ) );
			migeometria.faces.push( new THREE.Face3( 40+inc, 51+inc, 49+inc ) );
			migeometria.faces.push( new THREE.Face3( 40+inc, 52+inc, 51+inc ) );
			migeometria.faces.push( new THREE.Face3( 48+inc, 51+inc, 49+inc ) );
			migeometria.faces.push( new THREE.Face3( 48+inc, 50+inc, 51+inc ) );
			migeometria.faces.push( new THREE.Face3( 37+inc, 52+inc, 40+inc ) );
			migeometria.faces.push( new THREE.Face3( 37+inc, 53+inc, 52+inc ) );
			
			
			// espaldera
			var y6=0.40;
			migeometria.vertices.push( new THREE.Vector3( x1-0.5, y6, z1 ) );//60
			migeometria.vertices.push( new THREE.Vector3( x1-0.45, y6, z2 ) );//61
			migeometria.vertices.push( new THREE.Vector3( x1-0.45, y6, z1-1 ) );//62
			migeometria.vertices.push( new THREE.Vector3( x1-0.5, y6, z2-1 ) );//63

			migeometria.faces.push( new THREE.Face3( 61, 62, 57 ) );
			migeometria.faces.push( new THREE.Face3( 61, 57, 50 ) );
			migeometria.faces.push( new THREE.Face3( 60, 63, 58 ) );
			migeometria.faces.push( new THREE.Face3( 60, 58, 53 ) );
			migeometria.faces.push( new THREE.Face3( 53, 50, 57 ) );
			migeometria.faces.push( new THREE.Face3( 53, 57, 58 ) );

			migeometria.faces.push( new THREE.Face3( 61, 57, 62 ) );
			migeometria.faces.push( new THREE.Face3( 61, 50, 57 ) );
			migeometria.faces.push( new THREE.Face3( 60, 58, 63 ) );
			migeometria.faces.push( new THREE.Face3( 60, 53, 58 ) );
			migeometria.faces.push( new THREE.Face3( 53, 57, 50 ) );
			migeometria.faces.push( new THREE.Face3( 53, 58, 57 ) );
			
			// patas silla 1
			var y7=0.30;
			migeometria.vertices.push( new THREE.Vector3( x1-0.20, y1, z1 ) );//64
			migeometria.vertices.push( new THREE.Vector3( x1-0.15, y1, z1 ) );//65
			migeometria.vertices.push( new THREE.Vector3( x1-0.20, y1, z2 ) );//66
			migeometria.vertices.push( new THREE.Vector3( x1-0.15, y1, z2 ) );//67
			migeometria.vertices.push( new THREE.Vector3( x1-0.20, y7, z1 ) );//68
			migeometria.vertices.push( new THREE.Vector3( x1-0.15, y7, z1 ) );//69
			migeometria.vertices.push( new THREE.Vector3( x1-0.20, y7, z2 ) );//70
			migeometria.vertices.push( new THREE.Vector3( x1-0.15, y7, z2 ) );//71

			migeometria.faces.push( new THREE.Face3( 64, 65, 69 ) );
			migeometria.faces.push( new THREE.Face3( 64, 69, 68 ) );
			migeometria.faces.push( new THREE.Face3( 66, 67, 71 ) );
			migeometria.faces.push( new THREE.Face3( 66, 71, 70 ) );
			migeometria.faces.push( new THREE.Face3( 64, 66, 70 ) );
			migeometria.faces.push( new THREE.Face3( 64, 70, 68 ) );
			migeometria.faces.push( new THREE.Face3( 65, 67, 71 ) );
			migeometria.faces.push( new THREE.Face3( 65, 71, 69 ) );

			migeometria.faces.push( new THREE.Face3( 64, 69, 65 ) );
			migeometria.faces.push( new THREE.Face3( 64, 68, 69 ) );
			migeometria.faces.push( new THREE.Face3( 66, 71, 67 ) );
			migeometria.faces.push( new THREE.Face3( 66, 70, 71 ) );
			migeometria.faces.push( new THREE.Face3( 64, 70, 66 ) );
			migeometria.faces.push( new THREE.Face3( 64, 68, 70 ) );
			migeometria.faces.push( new THREE.Face3( 65, 71, 67 ) );
			migeometria.faces.push( new THREE.Face3( 65, 69, 71 ) );
			inc=8;
			// patas silla 2
			migeometria.vertices.push( new THREE.Vector3( x1-0.20, y1, z1-1 ) );//72
			migeometria.vertices.push( new THREE.Vector3( x1-0.15, y1, z1-1 ) );//73
			migeometria.vertices.push( new THREE.Vector3( x1-0.20, y1, z2-1 ) );//74
			migeometria.vertices.push( new THREE.Vector3( x1-0.15, y1, z2-1 ) );//75
			migeometria.vertices.push( new THREE.Vector3( x1-0.20, y7, z1-1 ) );//76
			migeometria.vertices.push( new THREE.Vector3( x1-0.15, y7, z1-1 ) );//77
			migeometria.vertices.push( new THREE.Vector3( x1-0.20, y7, z2-1 ) );//78
			migeometria.vertices.push( new THREE.Vector3( x1-0.15, y7, z2-1 ) );//79

			migeometria.faces.push( new THREE.Face3( 64+inc, 65+inc, 69+inc ) );
			migeometria.faces.push( new THREE.Face3( 64+inc, 69+inc, 68+inc ) );
			migeometria.faces.push( new THREE.Face3( 66+inc, 67+inc, 71+inc ) );
			migeometria.faces.push( new THREE.Face3( 66+inc, 71+inc, 70+inc ) );
			migeometria.faces.push( new THREE.Face3( 64+inc, 66+inc, 70+inc ) );
			migeometria.faces.push( new THREE.Face3( 64+inc, 70+inc, 68+inc ) );
			migeometria.faces.push( new THREE.Face3( 65+inc, 67+inc, 71+inc ) );
			migeometria.faces.push( new THREE.Face3( 65+inc, 71+inc, 69+inc ) );

			migeometria.faces.push( new THREE.Face3( 64+inc, 69+inc, 65+inc ) );
			migeometria.faces.push( new THREE.Face3( 64+inc, 68+inc, 69+inc ) );
			migeometria.faces.push( new THREE.Face3( 66+inc, 71+inc, 67+inc ) );
			migeometria.faces.push( new THREE.Face3( 66+inc, 70+inc, 71+inc ) );
			migeometria.faces.push( new THREE.Face3( 64+inc, 70+inc, 66+inc ) );
			migeometria.faces.push( new THREE.Face3( 64+inc, 68+inc, 70+inc ) );
			migeometria.faces.push( new THREE.Face3( 65+inc, 71+inc, 67+inc ) );
			migeometria.faces.push( new THREE.Face3( 65+inc, 69+inc, 71+inc ) );
			
			// base silla
			var y8=0.25
			migeometria.vertices.push( new THREE.Vector3( x1-0.5, y8, z1 ) );//80
			migeometria.vertices.push( new THREE.Vector3( x1-0.15, y8, z1 ) );//81
			migeometria.vertices.push( new THREE.Vector3( x1-0.5, y7, z1 ) );//82
			migeometria.vertices.push( new THREE.Vector3( x1-0.5, y8, z2-1 ) );//83
			migeometria.vertices.push( new THREE.Vector3( x1-0.15, y8, z2-1 ) );//84
			migeometria.vertices.push( new THREE.Vector3( x1-0.5, y7, z2-1 ) );//85
			
			migeometria.faces.push( new THREE.Face3( 80, 81, 69 ) );
			migeometria.faces.push( new THREE.Face3( 80, 69, 82 ) );
			migeometria.faces.push( new THREE.Face3( 83, 84, 79 ) );
			migeometria.faces.push( new THREE.Face3( 83, 79, 85 ) );
			migeometria.faces.push( new THREE.Face3( 80, 81, 84 ) );
			migeometria.faces.push( new THREE.Face3( 80, 84, 83 ) );
			migeometria.faces.push( new THREE.Face3( 82, 69, 79 ) );
			migeometria.faces.push( new THREE.Face3( 82, 79, 85 ) );
			migeometria.faces.push( new THREE.Face3( 81, 84, 79 ) );
			migeometria.faces.push( new THREE.Face3( 81, 79, 69 ) );
			migeometria.faces.push( new THREE.Face3( 80, 83, 85 ) );
			migeometria.faces.push( new THREE.Face3( 80, 85, 82 ) );

			migeometria.faces.push( new THREE.Face3( 80, 69, 81 ) );
			migeometria.faces.push( new THREE.Face3( 80, 82, 69 ) );
			migeometria.faces.push( new THREE.Face3( 83, 79, 84 ) );
			migeometria.faces.push( new THREE.Face3( 83, 85, 79 ) );
			migeometria.faces.push( new THREE.Face3( 80, 84, 81 ) );
			migeometria.faces.push( new THREE.Face3( 80, 83, 84 ) );
			migeometria.faces.push( new THREE.Face3( 82, 79, 69 ) );
			migeometria.faces.push( new THREE.Face3( 82, 85, 79 ) );
			migeometria.faces.push( new THREE.Face3( 81, 79, 84 ) );
			migeometria.faces.push( new THREE.Face3( 81, 69, 79 ) );
			migeometria.faces.push( new THREE.Face3( 80, 85, 83 ) );
			migeometria.faces.push( new THREE.Face3( 80, 82, 85 ) );
			
			var pupitre=new THREE.Mesh(migeometria,material);
			scene.add(pupitre);
		}
	}

	// piso

	var sw=0;
	var longitud=-3;
	var longitud2=3;
	
	
	for (let index = 1; index < 51; index++) {
		for (let index2 = 1; index2 < 50; index2++) {
			var piso1 = new THREE.Geometry();
			piso1.vertices.push( new THREE.Vector3( longitud, 0, longitud2 ) );//0
			piso1.vertices.push( new THREE.Vector3( longitud+0.20, 0, longitud2) );//1
			piso1.vertices.push( new THREE.Vector3( longitud, 0, longitud2-0.20 ) );//2
			piso1.vertices.push( new THREE.Vector3( longitud+0.20, 0, longitud2-0.20) );//3

			piso1.faces.push( new THREE.Face3( 0, 1, 3 ) );
			piso1.faces.push( new THREE.Face3( 0, 3, 2 ) );

			piso1.faces.push( new THREE.Face3( 0, 3, 1 ) );
			piso1.faces.push( new THREE.Face3( 0, 2, 3 ) );
			if(sw==1){
				var azulejo = new THREE.Mesh (piso1, material2);
				sw=0;
			}
			else{
				var azulejo = new THREE.Mesh (piso1, material3);
				sw=1;
			}
			longitud2-=0.20;
			scene.add(azulejo);
		}
		longitud2=3;
		longitud+=0.20
	}

	// Frente
	x1+=1;
	x2+=2;
	y1=0.0;
	y2=0.25;
	
	z1=-6;
	z2=1;
	var frente = new THREE.Geometry();

	frente.vertices.push( new THREE.Vector3( x1, y1, z1 ) );
	frente.vertices.push( new THREE.Vector3( x1, y1, z2 ) );
	frente.vertices.push( new THREE.Vector3( x2, y1, z1 ) );
	frente.vertices.push( new THREE.Vector3( x2, y1, z2 ) );
	
	frente.vertices.push( new THREE.Vector3( x1, y2, z1 ) );
	frente.vertices.push( new THREE.Vector3( x1, y2, z2 ) );
	frente.vertices.push( new THREE.Vector3( x2, y2, z1 ) );
	frente.vertices.push( new THREE.Vector3( x2, y2, z2 ) );
	
	frente.faces.push( new THREE.Face3( 0, 1, 3 ) );
	frente.faces.push( new THREE.Face3( 0, 3, 2 ) );
	frente.faces.push( new THREE.Face3( 0, 1, 5 ) );
	frente.faces.push( new THREE.Face3( 0, 5, 4 ) );
	frente.faces.push( new THREE.Face3( 2, 3, 7 ) );
	frente.faces.push( new THREE.Face3( 2, 7, 6 ) );
	frente.faces.push( new THREE.Face3( 0, 2, 6 ) );
	frente.faces.push( new THREE.Face3( 0, 6, 4 ) );
	frente.faces.push( new THREE.Face3( 1, 3, 7 ) );
	frente.faces.push( new THREE.Face3( 1, 7, 5 ) );
	frente.faces.push( new THREE.Face3( 4, 5, 7 ) );
	frente.faces.push( new THREE.Face3( 4, 7, 6 ) );

	frente.faces.push( new THREE.Face3( 0, 3, 1 ) );
	frente.faces.push( new THREE.Face3( 0, 2, 3 ) );
	frente.faces.push( new THREE.Face3( 0, 5, 1 ) );
	frente.faces.push( new THREE.Face3( 0, 4, 5 ) );
	frente.faces.push( new THREE.Face3( 2, 7, 3 ) );
	frente.faces.push( new THREE.Face3( 2, 6, 7 ) );
	frente.faces.push( new THREE.Face3( 0, 6, 2 ) );
	frente.faces.push( new THREE.Face3( 0, 4, 6 ) );
	frente.faces.push( new THREE.Face3( 1, 7, 3 ) );
	frente.faces.push( new THREE.Face3( 1, 5, 7 ) );
	frente.faces.push( new THREE.Face3( 4, 7, 5 ) );
	frente.faces.push( new THREE.Face3( 4, 6, 7 ) );
	
	
	var frontis = new THREE.Mesh (frente, material4);
	scene.add(frontis);
	
	// Paredes
	var material5 = new THREE.MeshBasicMaterial( { color: 0xFFFB00} ); // Material Pared
	var material6 = new THREE.MeshBasicMaterial( { color: 0xFFC300} ); // Material Pared2
	x1=0.0-3;
    x2=7;
    y1=0.0;
	y2=2;
	z1=0.0-6.20;
	z2=-0.05-6.20;

	var frente = new THREE.Geometry();
	frente.vertices.push( new THREE.Vector3( x1, y1, z1 ) );
	frente.vertices.push( new THREE.Vector3( x1, y1, z2 ) );
	frente.vertices.push( new THREE.Vector3( x2, y1, z1 ) );
	frente.vertices.push( new THREE.Vector3( x2, y1, z2 ) );
	
	frente.vertices.push( new THREE.Vector3( x1, y2, z1 ) );
	frente.vertices.push( new THREE.Vector3( x1, y2, z2 ) );
	frente.vertices.push( new THREE.Vector3( x2, y2, z1 ) );
	frente.vertices.push( new THREE.Vector3( x2, y2, z2 ) );
	
	frente.faces.push( new THREE.Face3( 0, 1, 3 ) );
	frente.faces.push( new THREE.Face3( 0, 3, 2 ) );
	frente.faces.push( new THREE.Face3( 0, 1, 5 ) );
	frente.faces.push( new THREE.Face3( 0, 5, 4 ) );
	frente.faces.push( new THREE.Face3( 2, 3, 7 ) );
	frente.faces.push( new THREE.Face3( 2, 7, 6 ) );
	frente.faces.push( new THREE.Face3( 0, 2, 6 ) );
	frente.faces.push( new THREE.Face3( 0, 6, 4 ) );
	frente.faces.push( new THREE.Face3( 1, 3, 7 ) );
	frente.faces.push( new THREE.Face3( 1, 7, 5 ) );
	frente.faces.push( new THREE.Face3( 4, 5, 7 ) );
	frente.faces.push( new THREE.Face3( 4, 7, 6 ) );

	frente.faces.push( new THREE.Face3( 0, 3, 1 ) );
	frente.faces.push( new THREE.Face3( 0, 2, 3 ) );
	frente.faces.push( new THREE.Face3( 0, 5, 1 ) );
	frente.faces.push( new THREE.Face3( 0, 4, 5 ) );
	frente.faces.push( new THREE.Face3( 2, 7, 3 ) );
	frente.faces.push( new THREE.Face3( 2, 6, 7 ) );
	frente.faces.push( new THREE.Face3( 0, 6, 2 ) );
	frente.faces.push( new THREE.Face3( 0, 4, 6 ) );
	frente.faces.push( new THREE.Face3( 1, 7, 3 ) );
	frente.faces.push( new THREE.Face3( 1, 5, 7 ) );
	frente.faces.push( new THREE.Face3( 4, 7, 5 ) );
	frente.faces.push( new THREE.Face3( 4, 6, 7 ) );

	
	var frontis = new THREE.Mesh (frente, material5);
	scene.add(frontis);
	// pared 2
	x1=-3;
    x2=-2.95;
    y1=0.0;
	y2=2;
	z1=-6.20;
	z2=3;

	var frente = new THREE.Geometry();
	frente.vertices.push( new THREE.Vector3( x1, y1, z1 ) );
	frente.vertices.push( new THREE.Vector3( x1, y1, z2 ) );
	frente.vertices.push( new THREE.Vector3( x2, y1, z1 ) );
	frente.vertices.push( new THREE.Vector3( x2, y1, z2 ) );
	
	frente.vertices.push( new THREE.Vector3( x1, y2, z1 ) );
	frente.vertices.push( new THREE.Vector3( x1, y2, z2 ) );
	frente.vertices.push( new THREE.Vector3( x2, y2, z1 ) );
	frente.vertices.push( new THREE.Vector3( x2, y2, z2 ) );
	
	frente.faces.push( new THREE.Face3( 0, 1, 3 ) );
	frente.faces.push( new THREE.Face3( 0, 3, 2 ) );
	frente.faces.push( new THREE.Face3( 0, 1, 5 ) );
	frente.faces.push( new THREE.Face3( 0, 5, 4 ) );
	frente.faces.push( new THREE.Face3( 2, 3, 7 ) );
	frente.faces.push( new THREE.Face3( 2, 7, 6 ) );
	frente.faces.push( new THREE.Face3( 0, 2, 6 ) );
	frente.faces.push( new THREE.Face3( 0, 6, 4 ) );
	frente.faces.push( new THREE.Face3( 1, 3, 7 ) );
	frente.faces.push( new THREE.Face3( 1, 7, 5 ) );
	frente.faces.push( new THREE.Face3( 4, 5, 7 ) );
	frente.faces.push( new THREE.Face3( 4, 7, 6 ) );

	frente.faces.push( new THREE.Face3( 0, 3, 1 ) );
	frente.faces.push( new THREE.Face3( 0, 2, 3 ) );
	frente.faces.push( new THREE.Face3( 0, 5, 1 ) );
	frente.faces.push( new THREE.Face3( 0, 4, 5 ) );
	frente.faces.push( new THREE.Face3( 2, 7, 3 ) );
	frente.faces.push( new THREE.Face3( 2, 6, 7 ) );
	frente.faces.push( new THREE.Face3( 0, 6, 2 ) );
	frente.faces.push( new THREE.Face3( 0, 4, 6 ) );
	frente.faces.push( new THREE.Face3( 1, 7, 3 ) );
	frente.faces.push( new THREE.Face3( 1, 5, 7 ) );
	frente.faces.push( new THREE.Face3( 4, 7, 5 ) );
	frente.faces.push( new THREE.Face3( 4, 6, 7 ) );

	var frontis = new THREE.Mesh (frente, material6);
	scene.add(frontis);


	// pared 3
	x1=7;
    x2=7.05;
    y1=0.0;
	y2=2;
	z1=-6.20;
	z2=3;

	var frente = new THREE.Geometry();
	frente.vertices.push( new THREE.Vector3( x1, y1, z1 ) );
	frente.vertices.push( new THREE.Vector3( x1, y1, z2 ) );
	frente.vertices.push( new THREE.Vector3( x2, y1, z1 ) );
	frente.vertices.push( new THREE.Vector3( x2, y1, z2 ) );
	
	frente.vertices.push( new THREE.Vector3( x1, y2, z1 ) );
	frente.vertices.push( new THREE.Vector3( x1, y2, z2 ) );
	frente.vertices.push( new THREE.Vector3( x2, y2, z1 ) );
	frente.vertices.push( new THREE.Vector3( x2, y2, z2 ) );
	
	frente.faces.push( new THREE.Face3( 0, 1, 3 ) );
	frente.faces.push( new THREE.Face3( 0, 3, 2 ) );
	frente.faces.push( new THREE.Face3( 0, 1, 5 ) );
	frente.faces.push( new THREE.Face3( 0, 5, 4 ) );
	frente.faces.push( new THREE.Face3( 2, 3, 7 ) );
	frente.faces.push( new THREE.Face3( 2, 7, 6 ) );
	frente.faces.push( new THREE.Face3( 0, 2, 6 ) );
	frente.faces.push( new THREE.Face3( 0, 6, 4 ) );
	frente.faces.push( new THREE.Face3( 1, 3, 7 ) );
	frente.faces.push( new THREE.Face3( 1, 7, 5 ) );
	frente.faces.push( new THREE.Face3( 4, 5, 7 ) );
	frente.faces.push( new THREE.Face3( 4, 7, 6 ) );

	frente.faces.push( new THREE.Face3( 0, 3, 1 ) );
	frente.faces.push( new THREE.Face3( 0, 2, 3 ) );
	frente.faces.push( new THREE.Face3( 0, 5, 1 ) );
	frente.faces.push( new THREE.Face3( 0, 4, 5 ) );
	frente.faces.push( new THREE.Face3( 2, 7, 3 ) );
	frente.faces.push( new THREE.Face3( 2, 6, 7 ) );
	frente.faces.push( new THREE.Face3( 0, 6, 2 ) );
	frente.faces.push( new THREE.Face3( 0, 4, 6 ) );
	frente.faces.push( new THREE.Face3( 1, 7, 3 ) );
	frente.faces.push( new THREE.Face3( 1, 5, 7 ) );
	frente.faces.push( new THREE.Face3( 4, 7, 5 ) );
	frente.faces.push( new THREE.Face3( 4, 6, 7 ) );

	var frontis = new THREE.Mesh (frente, material6);
	scene.add(frontis);

	// puerta
	x1=-2.8;
    x2=-2;
    y1=0.0;
	y2=1.35;
	z1=0.0-6.10;
	z2=-0.05-6.25;

	var frente = new THREE.Geometry();
	frente.vertices.push( new THREE.Vector3( x1, y1, z1 ) );
	frente.vertices.push( new THREE.Vector3( x1, y1, z2 ) );
	frente.vertices.push( new THREE.Vector3( x2, y1, z1 ) );
	frente.vertices.push( new THREE.Vector3( x2, y1, z2 ) );
	
	frente.vertices.push( new THREE.Vector3( x1, y2, z1 ) );
	frente.vertices.push( new THREE.Vector3( x1, y2, z2 ) );
	frente.vertices.push( new THREE.Vector3( x2, y2, z1 ) );
	frente.vertices.push( new THREE.Vector3( x2, y2, z2 ) );
	
	frente.faces.push( new THREE.Face3( 0, 1, 3 ) );
	frente.faces.push( new THREE.Face3( 0, 3, 2 ) );
	frente.faces.push( new THREE.Face3( 0, 1, 5 ) );
	frente.faces.push( new THREE.Face3( 0, 5, 4 ) );
	frente.faces.push( new THREE.Face3( 2, 3, 7 ) );
	frente.faces.push( new THREE.Face3( 2, 7, 6 ) );
	frente.faces.push( new THREE.Face3( 0, 2, 6 ) );
	frente.faces.push( new THREE.Face3( 0, 6, 4 ) );
	frente.faces.push( new THREE.Face3( 1, 3, 7 ) );
	frente.faces.push( new THREE.Face3( 1, 7, 5 ) );
	frente.faces.push( new THREE.Face3( 4, 5, 7 ) );
	frente.faces.push( new THREE.Face3( 4, 7, 6 ) );

	frente.faces.push( new THREE.Face3( 0, 3, 1 ) );
	frente.faces.push( new THREE.Face3( 0, 2, 3 ) );
	frente.faces.push( new THREE.Face3( 0, 5, 1 ) );
	frente.faces.push( new THREE.Face3( 0, 4, 5 ) );
	frente.faces.push( new THREE.Face3( 2, 7, 3 ) );
	frente.faces.push( new THREE.Face3( 2, 6, 7 ) );
	frente.faces.push( new THREE.Face3( 0, 6, 2 ) );
	frente.faces.push( new THREE.Face3( 0, 4, 6 ) );
	frente.faces.push( new THREE.Face3( 1, 7, 3 ) );
	frente.faces.push( new THREE.Face3( 1, 5, 7 ) );
	frente.faces.push( new THREE.Face3( 4, 7, 5 ) );
	frente.faces.push( new THREE.Face3( 4, 6, 7 ) );

	var frontis = new THREE.Mesh (frente, material);
	scene.add(frontis);
	// pizarra
	var material6 = new THREE.MeshBasicMaterial( { color: 0xFFFFFF} ); // Material pizarra

	x1=6.97;
    x2=7;
    y1=0.5;
	y2=1.5;
	z1=-4.5;
	z2=0;

	var frente = new THREE.Geometry();
	frente.vertices.push( new THREE.Vector3( x1, y1, z1 ) );
	frente.vertices.push( new THREE.Vector3( x1, y1, z2 ) );
	frente.vertices.push( new THREE.Vector3( x2, y1, z1 ) );
	frente.vertices.push( new THREE.Vector3( x2, y1, z2 ) );
	
	frente.vertices.push( new THREE.Vector3( x1, y2, z1 ) );
	frente.vertices.push( new THREE.Vector3( x1, y2, z2 ) );
	frente.vertices.push( new THREE.Vector3( x2, y2, z1 ) );
	frente.vertices.push( new THREE.Vector3( x2, y2, z2 ) );
	
	frente.faces.push( new THREE.Face3( 0, 1, 3 ) );
	frente.faces.push( new THREE.Face3( 0, 3, 2 ) );
	frente.faces.push( new THREE.Face3( 0, 1, 5 ) );
	frente.faces.push( new THREE.Face3( 0, 5, 4 ) );
	frente.faces.push( new THREE.Face3( 2, 3, 7 ) );
	frente.faces.push( new THREE.Face3( 2, 7, 6 ) );
	frente.faces.push( new THREE.Face3( 0, 2, 6 ) );
	frente.faces.push( new THREE.Face3( 0, 6, 4 ) );
	frente.faces.push( new THREE.Face3( 1, 3, 7 ) );
	frente.faces.push( new THREE.Face3( 1, 7, 5 ) );
	frente.faces.push( new THREE.Face3( 4, 5, 7 ) );
	frente.faces.push( new THREE.Face3( 4, 7, 6 ) );

	frente.faces.push( new THREE.Face3( 0, 3, 1 ) );
	frente.faces.push( new THREE.Face3( 0, 2, 3 ) );
	frente.faces.push( new THREE.Face3( 0, 5, 1 ) );
	frente.faces.push( new THREE.Face3( 0, 4, 5 ) );
	frente.faces.push( new THREE.Face3( 2, 7, 3 ) );
	frente.faces.push( new THREE.Face3( 2, 6, 7 ) );
	frente.faces.push( new THREE.Face3( 0, 6, 2 ) );
	frente.faces.push( new THREE.Face3( 0, 4, 6 ) );
	frente.faces.push( new THREE.Face3( 1, 7, 3 ) );
	frente.faces.push( new THREE.Face3( 1, 5, 7 ) );
	frente.faces.push( new THREE.Face3( 4, 7, 5 ) );
	frente.faces.push( new THREE.Face3( 4, 6, 7 ) );

	var frontis = new THREE.Mesh (frente, material6);
	scene.add(frontis);
}

function animate() {
	window.requestAnimationFrame( animate );
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render( scene, camera );
}

try {
	init();
	animate();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}
