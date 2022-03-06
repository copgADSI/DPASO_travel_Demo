const PLACES = [
    {
        id: 1,
        name: "Parque Gallineral",
        image: require("../../assets/images/Places/ParqueGallineralnterior.jpg"),
        address: "Cra. 12 #12-08, Sogamoso, Boyacá",
        city: "Duitama",
        category: "Restaurant",
        letter: [
            {
                food_id: 1,
                food_name: "Gallína Horneada",
                food_image: require("../../assets/images/Foods/GallinaHorneada.jpg"),
                food_price: 15000,
            },
            {
                food_id: 2,
                food_name: "Almuerzo Cacero",
                food_image: require("../../assets/images/Foods/AlmuerzoCacero.jpg"),
                food_price: 2500,
            },
            {
                food_id: 3,
                food_name: "Almuerzo Cacero",
                food_image: require("../../assets/images/Foods/AlmuerzoCacero.jpg"),
                food_price: 2500,
            }
        ]
    },
    {
        id: 2,
        name: "El Bodegón",
        image: require("../../assets/images/Places/ElBodegon.jpg"),
        address: "Cra. 12 #12-08, Sogamoso, Boyacá",
        city: "Sogamoso",
        category: "Restaurant",
        letter: [
            {
                food_id: 1,
                food_name: "Sánguche",
                food_image: require("../../assets/images/Foods/Sanguche.jpg"),
                food_price: 9000,
            },
            {
                food_id: 2,
                food_name: "Crema de Zapallo",
                food_image: require("../../assets/images/Foods/creamaZapallo.jpg"),
                food_price: 5500,
            },
            {
                food_id: 3,
                food_name: "Tamál con Alcachofas",
                food_image: require("../../assets/images/Foods/TamalAlcachofas.jpg"),
                food_price: 3500,
            }
        ]
    },
    {
        id: 3,
        name: "Joaquina",
        image: require("../../assets/images/Places/Joaquina.jpg"),
        address: "Carrera 11 No. 28-6, Sogamoso, Boyacá",
        city: "Sogamoso",
        category: "Party",
    },
    {
        id: 4,
        name: "Dimitry",
        image: require("../../assets/images/Places/Dimitry.jpg"),
        address: "Cra. 11 #16-46, Sogamoso, Boyacá",
        city: "Sogamoso",
        category: "Restaurant",
        letter: [
            {
                food_id: 1,
                food_name: "Helado de Vainilla",
                food_image: require("../../assets/images/Foods/HeladoVainilla.jpg"),
                food_price: 6000,
            },
            {
                food_id: 2,
                food_name: "Cena Romántica ",
                food_image: require("../../assets/images/Foods/PlatoCenaRomantica.jpg"),
                food_price: 12500,
            },
            {
                food_id: 3,
                food_name: "Espagueti con Salsa de Tomate",
                food_image: require("../../assets/images/Foods/EspaguetisSaldaTomate.jpg"),
                food_price: 13500,
            }
        ]
    },
    {
        id: 5,
        name: "La Colonial",
        image: require("../../assets/images/Places/LaColonial.jpg"),
        address: "Cra. 11 #12-61, Sogamoso, Boyacá",
        city: "Sogamoso",
        category: "Restaurant",
        letter: [
            {
                food_id: 1,
                food_name: "Empanadas de Pollo",
                food_image: require("../../assets/images/Foods/empanadaPollo.jpg"),
                food_price: 2000,
            },
            {
                food_id: 2,
                food_name: "Pizza Horneada ",
                food_image: require("../../assets/images/Foods/PizzaHorneada.jpg"),
                food_price: 5500,
            },
            {
                food_id: 3,
                food_name: "Ensalada de Frútas",
                food_image: require("../../assets/images/Foods/EnsaladaFrutas.jpg"),
                food_price: 3500,
            }
        ]
    },
    {
        id: 6,
        name: "Casas Simonelli",
        image: require("../../assets/images/Places/Simonelli.jpg"),
        address: "Cra. 13 ##20-82, Duitama, Boyacá",
        city: "Duitama",
        category: "Restaurant",
    },
    {
        id: 7,
        name: "Restaurante Tierra Mar",
        image: require("../../assets/images/Places/TierraMar.jpg"),
        address: "Cra. 13 ##20-82, Duitama, Boyacá",
        city: "Duitama",
        category: "Restaurant",
    },
    {
        id: 8,
        name: "Hotel Dinastia",
        image: require("../../assets/images/Places/HotelDinastia.jpg"),
        address: "Cl. 11 ## 14-70, Duitama, Boyacá",
        city: "Duitama",
        category: "Hotel",
    },
    {
        id: 9,
        name: "Hotel Tobacá",
        image: require("../../assets/images/Places/HotelTobaca.jpg"),
        address: "Cl. 13, Sogamoso, Boyacá",
        city: "Sogamoso",
        category: "Hotel",
    },
    {
        id: 10,
        name: "Canchas Sinteticas Las Americas",
        image: require("../../assets/images/Places/CanchaSinteticaAmericas.jpg"),
        address: "# 00,, Cl. 9, Duitama, Boyacá",
        city: "Duitama",
        category: "Sport",
    }

]

export const getFoodByPlacestId = (id) => {
    return PLACES.filter((place) => {
        if (place.id === id) {
            return place.letter
        }
    })
}

export default PLACES