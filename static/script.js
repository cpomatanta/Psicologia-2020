const app = new Vue({
    el: '#app',
    data: {
        grupo: [],
        pagina: 0,
        porPagina: 5,
        tipoE: 0,
        tipoN: 0,
        tipoL: 0,
        titulo: 'Cuestionario',
        contador: 0,
        result: '',
        preguntasMostrar: [],
        dejar: [],
        preguntas: [
            {
                p: '1. ¿Le gusta abundancia de excitación y bullicio a su alrededor?',
                respuesta: '',
                valor: [],
                tipo: 'E'
            },
            {
                p: '2. ¿Tiene a menudo un sentimiento de intranquilidad, como si quisiera algo, pero sin saber qué?',
                respuesta: '',
                valor: [],
                tipo: 'N'
            },
            {
                p: '3. ¿Tiene casi siempre una contestación lista a la mano cuando se le habla?',
                respuesta: '',
                valor: [],
                tipo: 'E'
            },
            {
                p: '4. ¿Se siente algunas veces feliz, algunas veces triste, sin una razón real?',
                respuesta: '',
                valor: [],
                tipo: 'N'
            },
            {p: '5. ¿Permanece usualmente retraído (a) en fiestas y reuniones?', respuesta: '', valor: [], tipo: 'E'},
            {
                p: '6. ¿Cuando era niño(a) ¿hacia siempre inmediatamente lo que le decían, sin refunfuñar?',
                respuesta: '',
                valor: [],
                tipo: 'L'
            },
            {p: '7. ¿Se enfada o molesta a menudo?', respuesta: '', valor: [], tipo: 'N'},
            {
                p: '8. Cuando lo(a) meten a una pelea  ¿Prefiere sacar los trapitos al aire de una vez por todas, en vez de   quedar callado(a) esperando que las cosas se calmen solas?',
                respuesta: '',
                valor: [],
                tipo: 'E'
            },
            {p: '9. ¿Es usted triste, melancólico (a)?', respuesta: '', valor: [], tipo: 'N'},
            {p: '10. ¿Le gusta mezclarse con la gente?', respuesta: '', valor: [], tipo: 'E'},
            {p: '11. ¿Ha perdido a menudo el sueño por sus preocupaciones?', respuesta: '', valor: [], tipo: 'N'},
            {p: '12. ¿Se pone a veces malhumorado (a)?', respuesta: '', valor: [], tipo: 'L'},
            {
                p: '13. ¿Se catalogaría a si mismo(a) como despreocupado (a) o confiado a su buena suerte',
                respuesta: '',
                valor: [],
                tipo: 'E'
            },
            {p: '14. ¿Se decide a menudo demasiado tarde?', respuesta: '', valor: [], tipo: 'N'},
            {p: '15. ¿Le gusta trabajar solo (a)?', respuesta: '', valor: [], tipo: 'E'},
            {p: '16. ¿Se ha sentido a menudo apático (a) y cansado(a) sin razón?', respuesta: '', valor: [], tipo: 'N'},
            {p: '17. ¿Es por lo contrario animado(a) y jovial?', respuesta: '', valor: [], tipo: 'E'},
            {p: '18. ¿Se ríe a menudo de chistes groseros?', respuesta: '', valor: [], tipo: 'L'},
            {p: '19. ¿Se siente a menudo hastiado(a), harto, fastidiado?', respuesta: '', valor: [], tipo: 'N'},
            {p: '20. ¿Se siente incomodo(a) con vestidos que no son del diario?', respuesta: '', valor: [], tipo: 'E'},
            {
                p: '21. ¿Se distrae (vaga su mente) a menudo cuando trata de prestar atención a algo?',
                respuesta: '',
                valor: [],
                tipo: 'N'
            },
            {p: '22. ¿Puede expresar en palabras fácilmente lo que piensa?', respuesta: '', valor: [], tipo: 'E'},
            {p: '23. ¿Se abstrae (se pierde en sus pensamientos) a menudo?', respuesta: '', valor: [], tipo: 'N'},
            {p: '24. ¿Está completamente libre de prejuicios de cualquier tipo?', respuesta: '', valor: [], tipo: 'L'},
            {p: '25. ¿Le gusta las bromas?', respuesta: '', valor: [], tipo: 'E'},
            {p: '26. ¿Piensa a menudo en su pasado?', respuesta: '', valor: [], tipo: 'N'},
            {p: '27. ¿Le gusta mucho la buena comida?', respuesta: '', valor: [], tipo: 'E'},
            {
                p: '28. ¿Cuándo se fastidia ¿necesita algún(a) amigo(a) para hablar sobre ello?',
                respuesta: '',
                valor: [],
                tipo: 'N'
            },
            {
                p: '29. ¿Le molesta vender cosas o pedir dinero a la gente para alguna buena causa?',
                respuesta: '',
                valor: [],
                tipo: 'E'
            },
            {p: '30. ¿Alardea (se jacta) un poco a veces?', respuesta: '', valor: [], tipo: 'L'},
            {p: '31. ¿Es usted muy susceptible (sensible) por algunas cosas?', respuesta: '', valor: [], tipo: 'N'},
            {
                p: '32. ¿Le gusta más quedarse en casa, que ir a una fiesta aburrida?',
                respuesta: '',
                valor: [],
                tipo: 'E'
            },
            {
                p: '33. ¿Se pone a menudo tan inquieto(a) que no puede permanecer sentado(a) durante mucho rato en una silla?',
                respuesta: '',
                valor: [],
                tipo: 'N'
            },
            {p: '34. ¿Le gusta planear las cosas, con mucha anticipación?', respuesta: '', valor: [], tipo: 'E'},
            {p: '35. ¿Tiene a menudo mareos (vértigos)?', respuesta: '', valor: [], tipo: 'N'},
            {
                p: '36. ¿Contesta siempre una carta personal, tan pronto como puede, después de haberla leído?',
                respuesta: '',
                valor: [],
                tipo: 'L'
            },
            {
                p: '37. ¿Hace usted usualmente las cosas mejor resolviéndolas solo(a) que hablando a otra persona sobre ello?',
                respuesta: '',
                valor: [],
                tipo: 'E'
            },
            {
                p: '38. ¿Le falta frecuentemente aire, sin haber hecho un trabajo pesado?',
                respuesta: '',
                valor: [],
                tipo: 'N'
            },
            {
                p: '39. ¿Es usted generalmente una persona tolerante, que no se molesta si las cosas no están perfectas?',
                respuesta: '',
                valor: [],
                tipo: 'E'
            },
            {p: '40. ¿Sufre de los nervios?', respuesta: '', valor: [], tipo: 'N'},
            {p: '41. ¿Le gustaría más planear cosas, que hacer cosas?', respuesta: '', valor: [], tipo: 'E'},
            {
                p: '42. ¿Deja algunas veces para mañana. Lo que debería hacer hoy día?',
                respuesta: '',
                valor: [],
                tipo: 'L'
            },
            {
                p: '43. ¿Se pone nervioso(a) en lugares tales como ascensores, trenes o túneles?',
                respuesta: '',
                valor: [],
                tipo: 'N'
            },
            {
                p: '44. Cuando hace nuevos amigos(as) ¿Es usted usualmente quien inicia la relación o invita a que se produzca?',
                respuesta: '',
                valor: [],
                tipo: 'E'
            },
            {p: '45. ¿Sufre fuertes dolores de cabeza?', respuesta: '', valor: [], tipo: 'N'},
            {
                p: '46. ¿Siente generalmente que las cosas se arreglaran por si solas y que terminaran bien de algún modo?',
                respuesta: '',
                valor: [],
                tipo: 'E'
            },
            {
                p: '47. ¿Le cuesta trabajo coger el sueño al acostarse en las noches?',
                respuesta: '',
                valor: [],
                tipo: 'N'
            },
            {p: '48. ¿Ha dicho alguna vez mentiras en su vida?', respuesta: '', valor: [], tipo: 'L'},
            {p: '49. ¿Dice algunas veces lo primero que se le viene a la cabeza?', respuesta: '', valor: [], tipo: 'E'},
            {
                p: '50. ¿Se preocupa durante un tiempo demasiado largo, después de una experiencia embarazosa?',
                respuesta: '',
                valor: [],
                tipo: 'N'
            },
            {
                p: '51. ¿Se mantiene usualmente hérnico(a) o encerrado(a) en sí mismo(a), excepto con amigos muy íntimos?',
                respuesta: '',
                valor: [],
                tipo: 'E'
            },
            {p: '52. ¿Se crea a menudo problemas, por hacer cosas sin pensar?', respuesta: '', valor: [], tipo: 'N'},
            {
                p: '53. ¿Le gusta contar contar chistes y referir historias graciosas a sus amigos?',
                respuesta: '',
                valor: [],
                tipo: 'E'
            },
            {p: '54. ¿Se le hace mas fácil ganar que perder un juego?', respuesta: '', valor: [], tipo: 'L'},
            {
                p: '55. ¿Se siente a menudo demasiado consciente de si mismo(a) o poco natural cuando esta con sus superiores?',
                respuesta: '',
                valor: [],
                tipo: 'N'
            },
            {
                p: '56. Cuando todas las posibilidades están contra usted, ¿piensa aun usulamente que vale la pena intentar?',
                respuesta: '',
                valor: [],
                tipo: 'E'
            },
            {
                p: '57. ¿Siente "sensaciones" en el abdomen, antes de un hecho immortales?',
                respuesta: '',
                valor: [],
                tipo: 'N'
            }
        ]
    },
    mounted() {

        if (!id.length) {
            window.location.href = '/';
        }

        this.result = '';
        this.pagina = Number(localStorage.getItem('page')) || 0;
        const preguntas = localStorage.getItem('preguntas')

        if (null !== preguntas && undefined !== preguntas) {
            this.preguntas = JSON.parse(preguntas) || [];
        }
    },
    methods: {
        siguiente() {
            // validar respuestas.
            const currentPage = this.preguntas.slice(this.pagina * this.porPagina, (this.pagina * this.porPagina) + this.porPagina)

            if (currentPage.some(it => it.respuesta === '')) {
                alert('Aún te falta responder algunas pregunas!!')
                return;
            }

            if ((this.pagina * this.porPagina) + 1 > this.preguntas.length) {
                return
            }

            this.pagina += 1;
            localStorage.setItem('page', this.pagina);
            localStorage.setItem('preguntas', JSON.stringify(this.preguntas))
        },

        anterior() {
            if (this.pagina - 1 < 0) {
                return
            }

            this.pagina -= 1;
            localStorage.setItem('page', this.pagina);
        },

        enviar() {
            // validar respuestas.
            const currentPage = this.preguntas.slice(this.pagina * this.porPagina, (this.pagina * this.porPagina) + this.porPagina)

            if (currentPage.some(it => it.respuesta === '')) {
                alert('Aún te falta responder algunas pregunas!!')
                return;
            }

            const datos = {
                id: id,
                DimE: this.preguntas.reduce((a, it) => a + Number(it.tipo === 'E' && it.respuesta === '1'), 0),
                DimL: this.preguntas.reduce((a, it) => a + Number(it.tipo === 'L' && it.respuesta === '1'), 0),
                DimN: this.preguntas.reduce((a, it) => a + Number(it.tipo === 'N' && it.respuesta === '1'), 0)
            }

            axios.post("/diagnostico", datos).then((result) => {
                console.log(result);
                this.result = 'ok';
                localStorage.clear()

                setTimeout(() => window.location.href = '/', 5000)
            });
        }
    }
})
