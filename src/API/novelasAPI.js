
// ESTRUCTURA DE DATOS API NOVELAS

const strcutureNovel = {
  "id": Number,
  "tittle": String,
  "src": String,
  "volumes": [
    {
      "name": String,
      "src": String
    }
  ]
}

//Datos Novelas

export let datosNovelas = [
    {
      "id": 1,
      "tittle": "Amagi Brillant Park",
      "description": 'Sinopsis: La historia toma como protagonista a Seiya Kanie, un estudiante de secundaria que es invitado a una cita en un parque de atracciones por una estudiante guapa recién transferida a su instituto llamada Isuzu Sento. Allí le presentan a Ratifa, una princesa "real" y gerente del parque, quien le pide que sea el gerente en funciones de este "parque de atracciones decepcionante en los suburbios de Tokio".',
      "src": "https://static.wixstatic.com/media/a70849_21cd042a5906494aba2a866d6bcd203e~mv2.jpg/v1/fill/w_191,h_273,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Cover.jpg",
      "volumes": [
        {
          "name": "Volume 1",
          "src": "/"          
        },
        {
          "name": "Volume 2",
          "src": "/"          
        },
        {
          "name": "Volume 3",
          "src": "/"          
        },
      ]
    },
    {
      "id": 2,
      "tittle": "An Archdemon's Dilemna",
      "description": "Sinopsis: Se teme a Zagan como un mago malvado, es torpe y tiene una lengua afilada, y una vez más tuvo que sofocar a los ladrones que invadieron su territorio cuando estaba investigando esa mañana. En una oscura subasta, encuentra a una elfa esclava blanca, Nephie, que posee una belleza sin igual. Enamorarse de ella a primera vista, él usa su fortuna para comprarla, pero tan pobre como él es socialmente, él no entiende cómo conectarse con ella. Por lo tanto, comienza la torpe convivencia del mago que no puede transmitir su amor, y la esclava que añora a su maestro pero no entiende cómo hacerlo aparecer. ",
      "src": "https://static.wixstatic.com/media/a70849_a8d45d52486442c885590e686bc1f2fd~mv2.jpg/v1/fill/w_195,h_273,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Cover.jpg",
      "volumes": [
        {
          "name": "Volume 1",
          "src": "/"          
        },
        {
          "name": "Volume 2",
          "src": "/"          
        },
        {
          "name": "Volume 3",
          "src": "/"          
        },
      ]
    },
    {
      "id": 3,
      "tittle": "Seirei Gensouki",
      "description": 'Sinopsis: Amakawa Haruto es un joven que murió antes de reunirse con su amiga de la infancia que desapareció hace cinco años. Río es un chico que vive en los barrios marginales que quiere vengarse de su madre que fue asesinada frente a él cuando tenía cinco años. La tierra y otro mundo. Dos personas con historias y valores completamente diferentes. Por alguna razón, los recuerdos y la personalidad de Haruto, quien debería haber muerto, resucitan en el cuerpo de Río. Como los dos están confundidos sobre sus recuerdos y personalidades fusionándose juntos, Río (Haruto) decide vivir en este nuevo mundo. Junto con los recuerdos de Haruto, Río despierta un desconocido "poder especial", y parece que si lo usa bien, puede vivir una vida mejor. Pero antes de eso, Río se encontró con un secuestro que resulta involucrar a dos princesas del Reino de Bertram en las que vive. Después de salvar a las princesas, a Río se le da una beca a la Real Academia, una escuela para los ricos y poderosos.',
      "src": "https://static.wixstatic.com/media/a70849_5794302cd2224057a7bba1e001affa1a~mv2.jpg/v1/fill/w_195,h_273,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Cover.jpg"
    },
    {
      "id": 4,
      "tittle": "In Another Wolrd",
      "description": "Sinopsis: Tras morir por culpa de un error cometido por el mismo Dios, este se disculpa ante Touya Mochizuki y ofrece al joven reencarnarse en otro mundo. Con solo 15 años de edad Touya acepta lo ocurrido, pero Dios le comenta que la única norma es que no puede reencarnarse en el mismo mundo del que proviene. Con ello Touya es enviado a un mundo de magia y espada, pero no sin antes una mejora de sus habilidades físicas por parte de Dios como compensación por haberlo matado por accidente y con el objeto que él mismo decidió que quería conservar: su celular con conexión a Internet de su planeta natal.",
      "src": "https://static.wixstatic.com/media/a70849_5f7ec045bbfe404f8ee255b87ca65ca5~mv2.jpg/v1/fill/w_182,h_273,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Cover.jpg"
    },
    {
      "id": 5,
      "tittle": "Our Daiting Story",
      "src": "https://static.wixstatic.com/media/a70849_5ca7ffadcf1943b98f794b8de1cbb357~mv2.jpg/v1/fill/w_192,h_273,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1.jpg"
    },
    {
      "id": 6,
      "tittle": "Tokidoki Bosotto Russian",
      "src": "https://static.wixstatic.com/media/a70849_195de45f523d4166a248352c5ecd5902~mv2.jpg/v1/fill/w_192,h_273,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1.jpg"
    },
    {
      "id": 7,
      "tittle": "Demon Lord, Retry!",
      "src": "https://static.wixstatic.com/media/a70849_7d0e42d343d342e08e19aeb0ead84445~mv2.jpg/v1/fill/w_186,h_273,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Cover.jpg"
    },
    {
      "id": 8,
      "tittle": "Confidemt King",
      "src": "https://static.wixstatic.com/media/a70849_9220dc549229442f88c801776f34543b~mv2.jpg/v1/fill/w_186,h_273,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1.jpg"
    }
  ]