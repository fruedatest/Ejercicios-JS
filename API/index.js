console.clear(); // Limpia la consola
const APP = require("express")(); //Llama al paquete/modulo de express
const PORT = 3000; // Define el puerto
const BODYPARSER = require("body-parser");
const COLOR = require("cli-color"); // Nos permite utiliza colores en la consola

APP.use(BODYPARSER.json()); // Nos permite trabajar con el body de la Request

// Cuando se arranca la API, nos mostrará el siguiente mensaje
APP.listen(PORT, () =>
	console.log(`App alive on: ` + COLOR.yellow(`http://localhost:${PORT}`))
);

// End point localhost:PORT/
APP.get("/", (request, response) => {
	//response.send("Hello World!");
	response.status(404).json({
		status_code: 404,
		msg: "Not found",
	});
	const msg = request.method + ` localhost:${PORT}` + request.url + ` ` + response.statusCode;
	console.log(COLOR.bgGreen(`\t` + msg));
});

APP.post("/test", (req, res) => {
	if (!req.body.name) {
		return res.status(400).json({
			status: "error",
			error: "req body cannot be empty",
		});
	}

	res.status(200).json({
		status: "succes",
		data: req.body,
	});
});