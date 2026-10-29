// El Mojón — datos del menú
// Precios: tomados de la carta del local y actualizados +$10.000.
// Las imágenes de los platos quedan vacías: el dueño las agrega después.
// Para completar una imagen, agregar "img": "assets/img/<archivo>" a cada plato.

window.MENU_DATA = {
  brand: {
    name: 'El Mojón',
    tagline: 'Cocina jujeña y árabe · desde el 2000',
  },

  categories: [
    {
      id: 'empanadas',
      name: 'Empanadas',
      icon: 'empanada',
      dishes: [
        { name: 'Empanada de carne', desc: 'Picada a cuchillo, estilo jujeño.', price: 10220 },
        { name: 'Empanada de pollo', desc: 'Pollo desmenuzado con especias suaves.', price: 10220 },
        { name: 'Empanada de queso', desc: 'Queso cremoso bien derretido.', price: 10220 },
        { name: 'Empanada de queso de cabra', desc: 'Queso de cabra del norte, con un toque fuerte.', price: 10250 },
        { name: 'Empanada de carne de llama', desc: 'Carne de llama de la Puna, muy magra.', price: 10250 },
        { name: 'Empanada caprese', desc: 'Mozzarella, tomate y albahaca fresca.', price: 10250 },
        { name: 'Empanada de matambre', desc: 'Matambre tiernizado, bien condimentado.', price: 10250 },
        { name: 'Empanada de queso azul', desc: 'Queso azul fundido, para los que buscan intensidad.', price: 10250 },
      ],
    },

    {
      id: 'tipicas',
      name: 'Comidas típicas',
      icon: 'pot',
      dishes: [
        { name: 'Tamal', desc: 'Hoja de chala, maíz y carne, cocidos como manda la receta familiar.', price: 10400 },
        { name: 'Humita en chala', desc: 'Dulce o salada, atada y hervida en la chala.', price: 10800 },
        { name: 'Pastel de choclo', desc: 'Dulce o salado, con la clásica tapa de choclo gratinada.', price: 11000 },
        { name: 'Locro', desc: 'Guiso espeso de maíz, zapallo y carnes. Un clásico del norte.', price: 11500 },
        { name: 'Cazuela de cordero', desc: 'Cordero a fuego lento, con papas andinas.', price: 12500 },
        { name: 'Milanesa de llama', desc: 'Finita, con guarnición a elección.', price: 12200 },
        { name: 'Milanesa de quesillo', desc: 'Rebozada y gratinada, bien criolla.', price: 12200 },
        { name: 'Milanesa de lomo de cerdo', desc: 'Lomo tiernísimo, con guarnición.', price: 12200 },
        { name: 'Milanesa rellena', desc: 'Rellena con jamón y queso.', price: 12200 },
        { name: 'Milanesa napolitana (para 2)', desc: 'Para compartir: jamón, queso, salsa y papas.', price: 13500 },
        { name: 'Colita de cuadril', desc: 'Al punto, con guarnición.', price: 12200 },
        { name: 'Colita de cuadril "El Mojón"', desc: 'La especialidad de la casa: rellena con tomate seco, panceta y albahaca.', price: 12500, badge: 'De la casa' },
        { name: 'Trucha de Yala', desc: 'Trucha fresca del valle de Yala.', price: 12800 },
        { name: 'Pollo al limón', desc: 'Jugoso, con reducción cítrica.', price: 11700 },
      ],
    },

    {
      id: 'arabes',
      name: 'Comidas árabes',
      icon: 'crescent',
      dishes: [
        { name: 'Sfijas', desc: 'Empanadas árabes abiertas, con carne y limón.', price: 10220 },
        { name: 'Kippe crudo', desc: 'Carne cruda, trigo burgol y especias.', price: 11000 },
        { name: 'Kippe cocido', desc: 'Horneado, dorado por fuera y jugoso adentro.', price: 11800 },
        { name: 'Niños envueltos', desc: 'En hoja de parra, servidos con limón.', price: 11500 },
        { name: 'Tripa rellena', desc: 'Plato tradicional, de preparación lenta.', price: 11500 },
        { name: 'Kabab', desc: 'De carne, con especias árabes.', price: 11800 },
        { name: 'Puré de garbanzo', desc: 'Hummus con un hilo de aceite de oliva.', price: 10600 },
        { name: 'Tabule', desc: 'Perejil, trigo burgol, tomate y limón, muy fresco.', price: 10900 },
      ],
    },

    {
      id: 'pizzas',
      name: 'Pizzas y pastas',
      icon: 'pizza',
      dishes: [
        { name: 'Lasagna', desc: 'De la casa, con salsa de tomate y bechamel.', price: 11500 },
        { name: 'Pizza común', desc: 'Mozzarella y aceitunas.', price: 11500 },
        { name: 'Pizza napolitana', desc: 'Mozzarella, tomate en rodajas, ajo y perejil.', price: 11800 },
        { name: 'Pizza fugazzeta', desc: 'Mozzarella y cebolla morada caramelizada.', price: 11800 },
        { name: 'Pizza azul', desc: 'Mozzarella y queso azul.', price: 11800 },
        { name: 'Pizza caprese', desc: 'Mozzarella, tomate y albahaca fresca.', price: 11800 },
      ],
    },

    {
      id: 'postres',
      name: 'Postres',
      icon: 'cake',
      dishes: [
        { name: 'Batata con queso', desc: 'Dulce de batata con quesillo norteño.', price: 10600 },
        { name: 'Quesillo con miel', desc: 'Quesillo norteño con miel de caña.', price: 10680 },
        { name: 'Quesillo con higos en almíbar', desc: 'Higos cocidos en almíbar casero sobre quesillo.', price: 10680 },
        { name: 'Cayote con nueces', desc: 'Dulce de cayote con nueces.', price: 10650 },
        { name: 'Baklawa', desc: 'Hojas finas, nueces y almíbar.', price: 10500, badge: 'Árabe' },
        { name: 'Helado', desc: 'Sabores a elegir.', price: 10500 },
      ],
    },

    {
      id: 'bebidas',
      name: 'Bebidas',
      icon: 'glass',
      dishes: [
        { name: 'Coca, Fanta o Sprite 350 cc', desc: 'Latita individual.', price: 10400 },
        { name: 'Coca, Fanta o Sprite 1 L', desc: 'Botella 1 litro.', price: 10700 },
        { name: 'Coca, Fanta o Sprite 1,5 L', desc: 'Botella grande para compartir.', price: 10800 },
        { name: 'Coca-Cola 2,25 L', desc: 'Para la mesa entera.', price: 10900 },
        { name: 'Agua mineral 500 cc', desc: 'Con o sin gas.', price: 10400 },
      ],
    },

    {
      id: 'vinos',
      name: 'Vinos',
      icon: 'wine',
      dishes: [
        { name: 'Vino de la casa — 1 L', desc: 'Tinto o blanco, por litro.', price: 10800 },
        { name: 'Vino de la casa — 1/2 L', desc: 'Tinto o blanco, media.', price: 10600 },
        { name: 'Vino de la casa — 1/4 L', desc: 'Tinto o blanco, cuarto.', price: 10500 },
        { name: 'Domingo Hermanos (Cafayate) tinto', desc: 'Tinto de Cafayate, botella.', price: 10800 },
        { name: 'Vasco Viejo 3/4', desc: 'Tinto.', price: 10600 },
        { name: 'Elementos 3/4', desc: 'Tinto o blanco.', price: 10950 },
        { name: 'Chacabuco 3/4', desc: 'Tinto.', price: 11100 },
        { name: 'Portillo 3/4', desc: 'Tinto.', price: 10950 },
        { name: 'Nampe 3/4', desc: 'Tinto.', price: 10800 },
        { name: 'Don Valentín 3/4', desc: 'Tinto.', price: 10700 },
        { name: 'Valmont 3/4', desc: 'Tinto, botella 3/4.', price: 10950 },
        { name: 'Valmont 3/8', desc: 'Tinto, botella individual 3/8.', price: 10550 },
        { name: 'Latitud 33 — 3/4', desc: 'Tinto.', price: 11200 },
        { name: 'Cafayate 3/4', desc: 'Tinto o blanco.', price: 10900 },
        { name: 'Los Haroldos Estate', desc: 'Tinto.', price: 11500 },
        { name: 'Los Haroldos Reserva', desc: 'Tinto, línea reserva.', price: 11900 },
        { name: 'Cordero con Piel de Lobo 3/4', desc: 'Tinto.', price: 11100 },
        { name: 'Cordero con Piel de Lobo 473 cc', desc: 'Tinto, individual.', price: 10600 },
        { name: 'Perro Callejero 3/4', desc: 'Tinto.', price: 11700 },
        { name: 'Amalaya 3/4', desc: 'Tinto o blanco.', price: 11800 },
        { name: 'Amalaya 3/8', desc: 'Tinto individual.', price: 11000 },
        { name: 'Salentein Reserva 3/4', desc: 'Tinto, línea reserva.', price: 12200 },
        { name: 'Tukma Torrontés', desc: 'Blanco, torrontés salteño.', price: 12500, badge: 'Local' },
        { name: 'Tukma Tinto', desc: 'Tinto, de altura.', price: 12800, badge: 'Local' },
        { name: 'Fernet por medida', desc: 'Medida con hielo.', price: 10400 },
        { name: 'Whisky por medida', desc: 'Medida en las rocas.', price: 10300 },
      ],
    },

    {
      id: 'cervezas',
      name: 'Cervezas',
      icon: 'beer',
      dishes: [
        { name: 'Andes o Patagonia 269 cc', desc: 'Chop individual.', price: 10500 },
        { name: 'Stella Artois 473 cc', desc: 'Lata rubia.', price: 10550 },
        { name: 'Quilmes o Andes 473 cc', desc: 'Lata rubia.', price: 10500 },
        { name: 'Quilmes o Andes 1 L', desc: 'Botella para compartir.', price: 10750 },
        { name: 'Stella Artois 1 L', desc: 'Negra o rubia, botella de litro.', price: 10850 },
        { name: 'Patagonia 730 cc', desc: 'Botella no retornable.', price: 10750 },
        { name: 'Budweiser 710 cc', desc: 'Botella rubia.', price: 10650 },
        { name: 'Stella Artois 710 cc', desc: 'Botella grande.', price: 10800 },
        { name: 'Corona 330 cc', desc: 'Rubia con rodaja de limón.', price: 10650 },
        { name: 'Corona 710 cc', desc: 'Rubia para compartir.', price: 10900 },
      ],
    },
  ],
};
