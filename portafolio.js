var trabajos = [{
    figure: "media/trabajo-01-desfile.jpg",
    alt: "Descripción de la imagen",
    title: "Emprendimiento estuches",
    about: "Estuches teñidos y fabricados a mano, 2017"
}, {
    figure: "media/trabajo-02-app.jpg",
    alt: "Descripción de la imagen",
    title: "Yando",
    about: "Deportes inclusivos, Taller Producto - 2017"
}, {
    figure: "media/trabajo-03-homy.jpg",
    alt: "Descripción de la imagen",
    title: "Packaging sustentable para flores ",
    about: "Trabajo con microemprendedoras de Maipú, Taller Calidad I - 2019"
}, {
    figure: "media/trabajo-04-editorial.jpg",
    alt: "Descripción de la imagen",
    title: "Experimentación con cerámica",
    about: "Cerámica y modelado, 2017"
}, {
    figure: "media/trabajo-05-artesania.jpg",
    alt: "Descripción de la imagen",
    title: "Marra la tiendita",
    about: "Trabajo con microemprendedoras de Maipú, Taller Calidad I - 2019"
}, {
    figure: "media/trabajo-06-textil.jpg",
    alt: "Descripción de la imagen",
    title: "Banca Zig-zag",
    about: "Banca a base de terciado 3mm y amarracables, Estructura y materiales - 2019"
}, {
    figure: "media/trabajo-07-materiales.jpg",
    alt: "Descripción de la imagen",
    title: "Zapatitos de papel",
    about: "Trabajo con papel maché, 2017"
  }, {
      figure: "media/trabajo-08-juego.jpg",
      alt: "Descripción de la imagen",
      title: "Cuadrálisis",
      about: "Creación juego de mesa, Taller Producto - 2018"
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
