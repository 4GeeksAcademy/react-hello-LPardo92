import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Jumbotrom from "./Jumbotrom";
import Footer from "./Footer";



//component
const data = [
	{
		Title: "Bienestar",
		Comentario: "Una dieta saludable se caracteriza por ser equilibrada y variada, proporcionando al cuerpo los nutrientes necesarios para funcionar correctamente. Se enfoca en alimentos frescos y naturales, priorizando frutas, verduras, granos integrales y proteínas magras, mientras se limita el consumo de azúcares añadidos, grasas saturadas y sodio. ",
		img: "https://img.europapress.es/fotoweb/fotonoticia_20210120171526_690.jpg",
		button: "Leer más"
	},
	{
		Title: "Ejercicios",
		Comentario: "El ejercicio regular es crucial para la salud física y mental. Actividades como caminar, correr o nadar pueden mejorar la fuerza muscular, la resistencia y la salud cardiovascular. Además, el ejercicio reduce el estrés, mejora el estado de ánimo, ayuda a dormir mejor y puede proteger contra enfermedades crónicas como las enfermedades cardíacas y la diabetes.",
		img: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/newscms/2017_36/2144546/170905-working-out-group-ac-512p.jpg",
		button: "Leer más"
	},
	{
		Title: "Enfoque",
		Comentario: "El enfoque mental se refiere a la capacidad de dirigir y mantener la atención en una tarea específica, ignorando distracciones. Es un estado mental que permite concentrarse en un objetivo y evitar la dispersión de la mente. Mejorar el enfoque mental puede aumentar la productividad y el bienestar. ",
		img: "https://media.npr.org/assets/img/2012/02/06/istock_000016611276small-6752354d634e040546880e4f50cb4af3c59626e5.jpg",
		button: "Leer más"
	},
	{
		Title: "Suplementos",
		Comentario: "El término “suplemento alimenticio” se refiere a una gran gama de productos que incluyen vitaminas y minerales, hierbas y otros productos botánicos, aminoácidos y encimas, entre otros. Puede encontrar suplementos en muchas formas, como pastillas, gomas comestibles, polvos, líquidos, tés y barras.",
		img: "https://clinicacofer.com/wp-content/uploads/2018/12/B6Ibgy7CAAAF4ta.jpg",
		button: "Leer más"
	},
]

const Home = () => {
	let info = [];
	for (let item of data) {
		const card = (
			<div className="col-lg-3 col-md-6">
				<Card
					title={item.Title} Comentario={item.Comentario} img={item.img} button={item.button}
				/>
			</div>
		);
		info.push(card);
	}


	return (
		<>
			<Navbar />
			<div className="container" style={{ paddingTop: "20px" }}>
				<Jumbotrom />
				<div className="row" style={{ paddingBottom: "30px", paddingTop: "20px" }}>
					{info}
				</div>
			</div>
			<Footer />
		</>
	);
};


export default Home;