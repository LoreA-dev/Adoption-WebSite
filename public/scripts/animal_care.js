let blogs = [
  {
    url: "https://medium.com/p/1b830a78bb84",
    title: "AWS, CloudFormation & Serverless Framework. ¿Qué son?",
    description:
      "Ya se ha hablado de las ventajas de usar AWS para desplegar nuestras funciones y servicios, son escalables, listas para usar y pagas por lo que usas. Hay muchas formas de crear los servicios, usando la Consola de AWS, el CLI o el SDK mediante progra",
    photo: "https://cdn-images-1.medium.com/max/1024/1*yj6jSI47sTodFlZNkh8Oew.jpeg",
  },
  {
    url: "https://medium.com/p/f854f83485b",
    title: "AWS Lambda: Todo lo que deberías saber.",
    description:
      "Las funciones lambda dentro de la infraestructura de microservicios de Amazon Web Services (AWS) es una de las herramientas más útiles y versátiles que ofrecen. Las posibilidades de conectar esta función con distintas herramientas de AWS permite ",
    photo: "https://cdn-images-1.medium.com/max/1024/0*QGTd8JcQ-TY1UOJP",
  },
  {
    url: "https://medium.com/p/541d4dfcb172",
    title: "LocalStack, Amazon Web Services en tu local",
    description:
      "Estuve en pocos minutos, levantando la mayoría de los servicios más usados de AWS en mi local, usando Docker y un mini Amazon: LocalStack. Hoy, AWS ha logrado dividir gran parte de las tareas de IT en pequeños servicios públicos e independientes.",
    photo:
      "https://cdn-images-1.medium.com/max/1024/1*6883NBVPikVpKd13u6lXKw.jpeg",
  },
  {
    url: "https://medium.com/p/1c93779e2b08",
    title: "Lecciones de un año con MongoDB",
    description:
      "https://www.pexels.com/es-es/@anete-lusina En algún momento, todas las desarrolladoras Back-end interactuaremos con Bases de datos NoSQL, sea Redis, Dynamo, ElasticSearch o MongoDB, cada una con usos específicos. Revisando MongoDB, es un servicio e",
    photo: "https://cdn-images-1.medium.com/max/1024/0*BS0hrYyRVSGNIW9u",
  },
  {
    url: "https://medium.com/p/9128376de67b",
    title: "Conecta WhatsApp con Node.JS + AWS & Serverless",
    description:
      "Hace un año aproximadamente luego de una conferencia de tecnología, cuatro amigos nos reunimos en un bar a hablar acerca de todas las nuevas ideas que aquella charla nos había inspirado. Una de esas ideas fue un Bot para manejar nuestras finanzas.",
    photo:
      "https://cdn-images-1.medium.com/max/1024/1*Ca-NCIwI_pwwqNjQxFSmEA.jpeg",
  },
  {
    url: "https://medium.com/p/e25646221cef",
    title: "AWS Free Tier —Evita cobros no esperados :)",
    description:
      "AWS Free Tier —Evita cobros no esperados. Recientemente mi periodo de prueba básico de AWS terminó después de un año, realmente fue mi oportunidad para aprender los conceptos más importantes sin incurrir en costos, o bueno, muy pocos. Al inic",
    photo: "https://cdn-images-1.medium.com/max/220/0*--ApWWRWt9qiXVHK",
  },
  {
    url: "https://medium.com/p/2f33edcba188",
    title: "¡Lambda! Conecta tu Bucket S3 con una función Lambda.",
    description:
      "Por si solo el Bucket S3 es capaz de almacenar cualquier tipo de archivo, dejarlos en el olvido por años y recuperarlo en unos cuantos clicks, puedes montar toda una web estática dentro de él y más.",
    photo: "https://miro.medium.com/max/220/0*onrySEIluV-ldbVA",
  },
  {
    url: "https://medium.com/p/614cb27bf632",
    title: "¡Lambda & SNS! ¿Diferentes tareas en paralelo?",
    description:
      "En otros artículos, compartía la idea de poder unir lambdas con muchos servicios dentro de Amazon, en este artículo mostraba un poco cómo podríamos integrar un Evento de un Bucket S3 con Lambdas, todo para redimensionar una imagen y guardarla en",
    photo: "https://miro.medium.com/max/120/1*Gfp-Xnh9lc8PtOw3-3qSTg.png",
  },
  {
    url: "https://medium.com/p/5e72e86026f7",
    title: "Implementando AWS Rekognition con Node.JS",
    description:
      "Amazon tiene a nuestra disposición experiencias de inteligencia artificial entrenadas para cumplir tareas interesantes. Amazon Rekognition ofrece Reconocimiento facial, de objetos, texto, expresiones faciales y más información de las imágenes.",
    photo: "https://miro.medium.com/max/220/1*j75RGgM81fM7lRtoomMVSw.png",
  },
  {
    url: "https://medium.com/p/d163b7333f9a",
    title: "Buenas Prácticas: La función U.",
    description:
      "Esta es una historia como las demás, como todas acerca de esas buenas practicas de código que pueden permitirnos trabajar mejor en equipo, pero esta vez, esta historia tiene su propio nombre como las funciones, la Función U. En los primeros desar",
    photo:
      "https://cdn-images-1.medium.com/max/940/1*ROPs9zetid9qZuopIPt4zQ.png",
  },
  {
    url: "https://medium.com/p/a77402a377d3",
    title: "¿Nube, On Premise o VPS?",
    description:
      "Si has seguido mis posts desde el comienzo, sabes que me gusta trabajar y desplegar servicios en la nube desde hace algunos años. He encontrado muchas oportunidades como developer para mejorar los productos que estoy construyendo usando servicios e",
    photo: "https://cdn-images-1.medium.com/max/1024/0*5JxIH5s9XXilrsCd",
  },
];

blogs.map(function createBlog(value) {
  let mainContainer = document.createElement("div");
  mainContainer.classList.add("blogContainer")
  let textContainer = document.createElement('div');
  textContainer.classList.add("textContainer");

  let tagTitle = document.createElement("h3");
  let description = document.createElement('p')
  let imageBlog = document.createElement('img');
  imageBlog.classList.add("images")
  var link = document.createTextNode("Read more...");
  let readMore = document.createElement('a');
  
  tagTitle.innerText = value.title;
  description.innerText = value.description;
  readMore.href = value.url
  imageBlog.src = value.photo;
  
  textContainer.appendChild(tagTitle)
  textContainer.appendChild(description)
  readMore.appendChild(link);
  textContainer.appendChild(readMore);
  mainContainer.appendChild(textContainer);
  mainContainer.appendChild(imageBlog);

  console.log(tagTitle);
  document.getElementById("mainContainer").appendChild(mainContainer);
});
