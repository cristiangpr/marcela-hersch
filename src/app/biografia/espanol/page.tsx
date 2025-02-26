/* eslint-disable react/no-unescaped-entities */
import Paola from '@/components/Paola'
import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Image from 'next/image'

export default function Espanol() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        bgcolor: 'background.default'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          paddingX: { xs: 2, sm: 4, md: 8 },
          paddingTop: 2,

          paddingBottom: 2,
          gap: 1,
          width: '100%',
          flex: 1,
          alignItems: 'left'
        }}
      >
        {' '}
        <Typography variant="h4">Español</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          paddingX: { xs: 2, sm: 4, md: 8 },
          gap: 4,
          width: '100%',
          flex: 1,
          paddingBottom: 10
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', md: '40%' },
            flexShrink: 0,
            flexGrow: 0,
            display: 'flex', // Add this
            alignItems: { xs: 'center', md: 'flex-start' }
          }}
        >
          {' '}
          <Stack spacing={1}>
            <Image
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain'
              }}
              width={400}
              height={550}
              alt="image"
              src={'/espanol.avif'}
            />
            <Box sx={{ width: '100%', maxWidth: { xs: '300px', sm: '400px' } }}>
              <Paola />
            </Box>
          </Stack>
          <Box
            sx={{
              borderRight: '4px solid',
              borderColor: 'divider',
              ml: 2, // margin-left for spacing
              display: { xs: 'none', md: 'block' } // Hide on mobile
            }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: '100%', md: '60%' },
            flexShrink: 0,
            flexGrow: 0
          }}
        >
          <Typography variant="subtitle2" color="text.secondary">
            Marcela Hersch
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Pianista y Compositora
          </Typography>
          <Typography color="text.primary" component={'p'}>
            Pianista y pianista mexicana con una sólida formación como
            concertista. Su preparación como compositora la ha llevado a hacerse
            un camino propio en el que incorpora diferentes estilos musicales en
            el que crea sus obras con libertad.
          </Typography>

          <Typography color="text.primary" component={'p'}>
            Marcela Hersch fue una artista precoz. A la corta edad de cuatro
            años empezó a estudiar piano. Su madre, también pianista
            concertista, fue su primera maestra y fue quien la introdujo al
            mundo de la música. A los siete años dio su primer recital y a
            partir de los nueve años fue solista de orquestas de cámara.
          </Typography>

          <Typography color="text.primary" component={'p'}>
            Estudió con importantes pianistas y pedagogas de la talla de Stella
            Contreras, Luz María Puente y Aurora Serratos, ésta última quien
            fuera su maestra en el Conservatorio Nacional de Música. Al cumplir
            los diecisiete años fue solista de la Orquesta Sinfónica del
            Conservatorio de donde se graduó como pianista ejecutante y pianista
            concertista. Obtuvo el grado de Master of Music por la Indiana
            University. En dicha institución estuvo bajo la tutela de
            renombrados maestros como Alfonso Montecinos y Michel Block. Tomó un
            curso de especialización en piano en Alemania con la maestra Edith
            Picht-Axenfeld, además de cursos de perfeccionamiento pianístico con
            George Demus, Georgy Sandor, Menahem Pressler, Magda Tagliaferro y
            Cyprien Katsaris, entre muchos otros. Obtuvo el Doctorado en
            Historia del Arte por el Colegio de Morelos, con una tesis
            transdisciplinaria entre filosofía, música y pintura de la India por
            el que le otorgaron Mención Honorífica. Su tesis se basó en un raga
            de la India llamado Raga Bháirava, al que además de investigar a
            profundidad, escribió un cuarteto para piano, sitar, tabla y
            tanpura, y voz invitada, en este raga.
          </Typography>

          <Typography color="text.primary" component={'p'}>
            De manera paralela, Marcela Hersch ha construido un amplio trabajo
            como compositora. De niña tomó clases de solfeo y armonía con el
            maestro Alfonso de Elías y continuó con estudios de armonía,
            análisis y contrapunto con Gonzalo Ruiz Esparza, David Domínguez y
            José Suárez como parte de su profunda formación musical en el
            Conservatorio Nacional de Música. De forma extracurricular estudió
            composición con Juan Carlos Areán y, especialmente con Mariana
            Villanueva, con quien siguió el contenido equivalente a ocho
            semestres de composición, de acuerdo al programa de estudios del
            Centro Morelense de las Artes. También estudió orquestación con el
            renombrado compositor mexicano, Arturo Márquez y participó en
            talleres de composición como el de Introducción a la Teoría y
            Análisis de la Música Atonal con el Mtro Hebert Vázquez y el de
            composición para cuarteto de cuerdas con el cuarteto Arditi.
          </Typography>

          <Typography color="text.primary" component={'p'}>
            Su formación fuera de la academia se centró en abrirse a nuevos
            géneros musicales y técnicas de improvisación. Hizo estudios de
            armonía moderna con Tony Bravo, ritmos afro-americanos con Carlos
            Rivarola, jazz con Juan José Calatayud, y entró en contacto con la
            música devocional y clásica de la India. De ahí nace su profundo
            interés por la música de Ravi Shankar, quien asegura que la música
            de la India se funda primordialmente en improvisaciones. Hersch
            realizó una investigación sobre la música de Shankar y su influencia
            en la música de occidente, principalmente en músicos como Yehudi
            Menuhim, Jean Pierre Rampal, Phillip Glass, Peter Gabriel, George
            Harrison, entre otros. Su aprendizaje en la música clásica de la
            India abarcó los ragas o composiciones sobre los que se improvisa y
            que provocan determinados estados de ánimo, sensaciones o
            sentimientos; también profundizó en sus ritmos y su base mística y
            filosófica. Todo esto abonó en su formación como musicoterapeuta. Su
            preparación en la gran rama de la música clásica de la India fue a
            través de maestros como Paul Livingstone, quien la introdujo en
            técnicas de improvisación con ragas; Holving Argáez maestro en
            canto, microrritmia y teoría y, en la India, con la Dra. Karunamayi
            en canto y las bases filosóficas de esta música. En paralelo a su
            preparación musical hizo estudios de Musicoterapia, Psicología
            (UIM), Misionología (UIC) y diversos talleres de psicología
            transpersonal, pintura y escultura.
          </Typography>

          <Typography color="text.primary" component={'p'}>
            Su formación musical se ha complementado con estudios de armonía
            moderna con Tony Bravo, ritmos afroamericanos con Carlos Rivarola y
            jazz con Juan José Calatayud. Su interés por la música de la India
            la llevó a estudiar con Paul Livingstone, Holving Argáez y la Dra.
            Karunamayi en la India. Esta exploración la acercó a la
            musicoterapia, disciplina en la que también se ha formado.
          </Typography>

          <Typography color="text.primary" component={'p'}>
            Hersch se ha interesado y ha trabajado con infancias en diferentes
            proyectos y etapas de su trayectoria. Me cantas, ma? (2006) fue su
            primer disco con composiciones de canciones de cuna. ¿Me cantas un
            cuento? será el volumen dos de esta serie discográfica que emana de
            sus talleres de iniciación musical con niños entre 3 y 8 años de
            edad. Fundó Pauta, Centro de Educación Musical donde ha alcanzado a
            trabajar con varias generaciones de infantes.
          </Typography>
          <Typography color="text.primary" component={'p'}>
            Además de sus presentaciones con música de cámara, ha dado numerosos
            conciertos como solista y ha participado en festivales
            internacionales, tanto como solista de piano como con sus obras,
            entre los que se cuentan: Delhi Arts Festival, Tamoanchan World
            Music y Festival Internacional Cervantino. Se ha presentado en
            México, Costa Rica, Alemania, Estados Unidos, España, Cuba, India y
            Chile.
          </Typography>
          <Typography color="text.primary" component={'p'}>
            En 2012, la Orquesta Filarmónica de Acapulco estrenó su Danza en
            siete tiempos para orquesta sinfónica, e hizo el debut de dos de sus
            composiciones para sitar, tabla, tanpura y piano en el Sri Ram
            Center de Delhi en India con Shuhbendra Rao al sitar, protegée y
            considerado el mejor alumno de Ravi Shankar. En 2014 volvió a
            presentarse en Delhi para inaugurar el 6o. Congreso Internacional de
            Musicoterapia en ese país, con el estreno de otros tres cuartetos
            para sitar, tabla, tanpura y piano, y otras obras de su autoría, en
            esta ocasión con su ensamble Fusión Creativa, acompañados por Zuheb
            Ahmed Khan en el tabla. En 2018 la Banda Sinfónica de la Facultad de
            Música de la UNAM estrenó su obra ANANDA en la Sala Netzahualcóyotl
            bajo la batuta del maestro Luis Sánchez Rivas.
          </Typography>
          <Typography color="text.primary" component={'p'}>
            Ha organizado y ha participado como concertista y compositora en
            conciertos interdisciplinarios con su ensamble Fusión Creativa,
            incluyendo sus composiciones e invitando a artistas visuales como
            Pericles Lavat y Elías Aquique, así como Forámen M. Ballet, el
            coreógrafo Marcos Rosi y el grupo de danza Gente Roja, entre otros.
            Diferentes artistas, tanto mexicanos como extranjeros han estrenado
            e interpretado sus obras, como las cantantes Mónica Chávez, Nadia
            Ortega, Yorick Alexander Abel y Shubhendra Rao. En 2019 estrenó su
            Trilogía para cello y piano “Luna de Jade” en el Auditorio
            Teopanzolco de Cuernavaca.
          </Typography>
          <Typography color="text.primary" component={'p'}>
            Ha grabado siete discos, cinco de ellos con composiciones de su
            autoría, en todos como pianista, ya sea solista, como parte del
            ensamble Fusión Creativa o con otros músicos: Marcela Hersch plays
            Alfonso de Elías con composiciones para piano solo de este
            compositor mexicano. Me cantas, ma? contiene canciones de cuna, en
            el que pretende fortalecer el lazo emocional entre la mamá y su
            bebé, y en el que hace sus primeras exploraciones con la fusión de
            instrumentos de la India. Una caricia al corazón es una producción
            para piano solo con música escrita por ella. En Vuelo Místico hace
            una investigación sobre diferentes maneras de improvisar y explora
            la fusión entre las dos grandes ramas de la música clásica: la de
            Occidente y la de la India. El piano a través de cuatro siglos
            contiene obras para piano representativas de diferentes periodos.
            Encuentro de luz consta de cinco cuartetos para sitar, piano, tabla
            y tanpura que también incluyen pasajes de improvisación y
            Transgresora, se compone de música para una obra de teatro en el que
            también aborda en algunas de sus obras la fusión de estas dos
            grandes ramas de la música del mundo.
          </Typography>
          <Typography color="text.primary" component={'p'}>
            Radica en Cuernavaca, ciudad en la que se ha desenvuelto de manera
            activa en la vida artística y cultural. En esta ciudad fundó Pauta,
            Centro de Educación Musical, se desempeñó como directora del Centro
            Morelense de las Artes en dos ocasiones y fue parte de su
            profesorado, creó el proyecto "Un hilito de paz" con talleres de
            arte en zonas vulnerables y fundó, fue directora musical y miembro
            del ensamble Fusión Creativa que únicamente interpreta sus obras.
          </Typography>
          <Typography color="text.primary" component={'p'}>
            Hersch presentó el estreno mundial de su recital de piano: Homenaje
            a Beethoven a finales del 2020 en el Teatro Ocampo en Cuernavaca,
            Morelos. Este recital se compuso tanto de piezas de Beethoven como
            improvisaciones de Marcela Hersch. Hacer improvisaciones en piano
            solo es un aprendizaje de “quedarse en casa” por la pandemia durante
            2020. Este homenaje a Beethoven por el 250 aniversario de su
            natalicio lo presentó en el Teatro Nacional Esperanza Iris en CDMX
            en 2021, y en el Auditorio Teopanzolco de la ciudad de Cuernavaca
            bajo el nombre de Marcela Hersch: Improvisatio & Beethoven.
          </Typography>
          <Typography color="text.primary" component={'p'}>
            En 2022 presentó un recital en línea para el Consulado de Del Río en
            Texas, EUA, un recital-charla con dos sonatas de Beethoven y una de
            sus improvisaciones, fue solista de la Orquesta Sinfónica del Estado
            de Puebla bajo la dirección del Mtro Jorge Casanova y ofreció una
            serie de presentaciones con tres improvisaciones y preludios de su
            autoría junto con preludios, danzas y valses de Scriabin, Chopin,
            Ponce y Alfonso de Elías.
          </Typography>
          <Typography color="text.primary" component={'p'}>
            En 2023 terminó de componer y presentó el estreno mundial de su
            ciclo de canciones infantiles llamado "El Zoológico de Marce" en el
            Teatro Ocampo de la ciudad de Cuernavaca con la cantante Nadia
            Ortega, la flautista Cecilia Ornelas y la cellista Carla Arteaga.
            Este mismo año saldrá su producción discográfica con este material.
            Así mismo presentó dos recitales de piano solo en el Castillo de
            Chapultepec y en la Biblioteca José Vasconcelos.
          </Typography>
          <Typography color="text.primary" component={'p'}>
            Hoy día continúa su actividad como concertista, compositora y como
            parte del profesorado del Conservatorio Nacional de Música.
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}
