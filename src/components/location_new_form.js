import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { addLocation } from '../actions';
 
// ===== STYLES =====
import '../style/location_new.css';
import '../style/styles.css';

// ===== MATERIAL UI =====
import RaisedButton from 'material-ui/RaisedButton';
import { SelectField, TextField, Checkbox } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem'
import {List, ListItem} from 'material-ui/List';

class LocationNewForm extends Component {
  // callback that runs if handleSubmit (redux form prop) validates
  onSubmit(values) {
    const category0 = 'lvl01'; // Required format for Algolia HierarchicalMenu
    const category1 = 'lvl02'; // ''
    values[category0] = [];
    values[category1] = [];

    for (var value in values) {
      if (values[value] === true) {
        try { 
          const name = document.getElementById(value).name;

          if (name.includes(">")) {
            values[category1].push(name);
          } else {
            values[category0].push(name);
          }

          delete values[value];
        } catch (e) {
          console.error('Error occurred when trying to find element: ' + value + '. Error: ' + e);
        }
      }
    }

    this.props.addLocation(values); 
  }

  render() {
    // handleSubmit is a prop passed to this component from Redux form 
    // It's responsible for handling state and validation of form, not for posting data.
    // If handleSubmit validates, it runs the callback passed to it, in this case
    // this.onSubmit (including binding)
    
    const { handleSubmit } = this.props; 

    return (
      <div>
        <h5 className="lead form-subtitle">Agregar Entrada</h5>
        <form id="location-form" onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form-style">
          <div className="form-input">
            <Field
              name="name"
              hintText="* Nombre Completo de la Persona, Proyecto Lugar, Iniciativa u Organizacion / Full Name of Person, Project Location or Organization"
              component={TextField}
              fullWidth={true}
            />
          </div>
          <div className="form-input">
            <Field
              name="address"
              hintText="* Ubicacion: Pais, Estado, Ciudad, Direccion (opcionales pero recomendadas) / Country, State, City, Address (optional but recommended)"
              type="text"
              component={TextField}
              fullWidth={true}
            />
          </div>
          <div className="form-input">
            <Field
              name="contact"
              hintText="Contacto Directo: (Dirección de Correo y/o Tcel/WhatsApp) / Direct Contact: (Email Address or cell phone/Whatsapp)"
              type="text"
              component={TextField}
              fullWidth={true}
            />
          </div>
          <div className="form-input">
            <Field
              name="website"
              hintText="Páginas, Redes, Datos de Contacto e Info en Generall, (Pagina Web, FB, Instagram, Twitter, Etc etc)"
              type="text"
              component={TextField}
              fullWidth={true}
            />
          </div>
          <div className="form-input">
            <Field
              name="offering"
              hintText="Que Hace? Que Ofrece? Puntualmente.Ej: Información, Productos, Servicios, Eventos Culturales,Trabajo,Voluntariado,Tiempo, Algún Recurso para Compartir o Regalar? etc"
              type="text"
              component={TextField}
              fullWidth={true}
            />
          </div>
          <div className="form-input">
            <Field
              name="seeking"
              hintText="Que Necesita? (que le hace falta o está buscando?) Ej: Trabajo, Aliad@s, Amig@s. CoLaboradores, Voluntarios, Patrocinadores, Clientes, Informacion, Tierra Compartida etc"
              type="text"
              component={TextField}
              fullWidth={true}
            />
          </div>
          <div className="form-input">
            <Field
              name="observaciones"
              hintText="Observaciones Generales (Descripciones Específicas de lo Anterior Ofrecido o  Buscando, Horarios, Fechas, Años, Recomendaciones Etc)"
              type="text"
              component={TextField}
              fullWidth={true}
            />
          </div>
          <div className="form-input">
            <Field
              name="existing-networks"
              hintText="Haces parte de alguna de estas Redes?"
              type="text"
              component={SelectField}
              fullWidth={true}
            >
              <MenuItem value="gaia-union" primaryText="Gaia (Unión)" />
              <MenuItem value="mais-aro-iris" primaryText="Mais Aro-Iris" />
              <MenuItem value="spirall" primaryText="Spirall (EcoLab)" />
              <MenuItem value="gaiarte" primaryText="GaiArte (Red de Arte y Cultura)" />
              <MenuItem value="permaculture" primaryText="Permaculture Network" />
              <MenuItem value="transicion" primaryText="Transicion Network" />
              <MenuItem value="gen" primaryText="GEN / CASA" />
              <MenuItem value="otra-red" primaryText="Otra: Cual? (Puedes señalar algún Movimiento, Tradición, Religión, Corriente o cualquier cosa de la que te sientas parte)" />
            </Field>
          </div>
          <div>
            <small>* Required</small>
          </div>

          <List>

            <ListItem 
              key="salud"
              primaryText={
                <Field
                  name="salud"
                  label="Salud y Bienestar / Health and Wellbeing"
                  component={Checkbox}
                  id="salud"
                />
              } 
              primaryTogglesNestedList
              nestedItems={[
                <ListItem 
                  key="salud > nutrición"
                  primaryText={ <Field id="salud > nutrición" name="salud > nutrición" label="Nutrición & Alimentación / Nutrition" component={Checkbox} /> }
                  insetChildren
                />,
                <ListItem 
                  key="salud > medicina alterNativa"
                  primaryText={ <Field id="salud > medicina alterNativa" name="salud > medicina alterNativa" label="Medicina AlterNativa / Alternative Medicine" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  key="salud > terapias alternativas"
                  primaryText={ <Field id="salud > terapias alternativas" name="salud > terapias alternativas" label="Terapias Alternativas – Terapeutas / Alternative Therapy" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  key="salud > medicinas"
                  primaryText={ <Field id="salud > medicinas: plantas y minerales" name="salud > medicinas: plantas y minerales" label="Medicinas: Plantas y Minerales / Medicines: Plants and Minerals" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  key="salud > parto natural"
                  primaryText={ <Field id="salud > parto natural y muerte consciente" name="salud > parto natural y muerte consciente" label="Parto Natural y Muerte Consciente / Natural Birth and Conscious Death" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  key="salud > escuelas"
                  primaryText={ <Field id="salud > escuelas y academias" name="salud > escuelas y academias" label="Escuelas y Academias (yoga, reiki, masajes, etc) / Schools and Academies ( yoga, reiki, massage, etc)" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  key="salud > centros holisticos"
                  primaryText={ <Field id="salud > centros holisticos" name="salud > centros holisticos" label="Centros Holisticos / Holistic Centers" component={Checkbox} /> } 
                  insetChildren
                />
              ]}
            />

            <ListItem 
              primaryText={
                <Field
                  id="arte"
                  name="arte"
                  label="Arte y Cultura / Art and Culture"
                  component={Checkbox}
                />
              } 
              primaryTogglesNestedList
              nestedItems={[
                <ListItem 
                  primaryText={ <Field id="arte > musica" name="arte > musica" label="Música / Music" component={Checkbox} /> }
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="arte > arte plastico" name="arte > arte plastico " label="Arte plástico / Plastic art" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="arte > arte escénico" name="arte > arte escénico" label="Arte escénico (danza, teatro, performance) / Stage art (dance, theater, performance)" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="arte > producción audivisual" name="arte > producción audivisual" label="Producción Audiovisual / Audiovisual Production" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="arte > circo y entretenimiento" name="arte > circo y entretenimiento" label="Circo y Entretenimiento / Circus and Entertainment" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="arte > casas culturales" name="arte > casas culturales" label="Casas Culturales / Cultural Houses" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="arte > teatros y cines" name="arte > teatros y cines" label="Teatros y Cines / Theater and Movies" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="arte > restaurantes, cafés y bares" name="arte > restaurantes, cafés y bares" label="Restaurantes, Cafés y Bares / Restaurants, Cafés and Bars" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="arte > proyectos multidisciplinarios" name="arte > proyectos multidisciplinarios" label="Proyectos multidisciplinarios (integran diversas manifestaciones artísticas) / Multidisciplinary Projects" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="arte > arte social" name="arte > arte social" label="Arte Social (proyectos artísticos con un enfoque social definido) / Social Art (artistic projects with a defined social focus" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="arte > eventos holisticos" name="arte > eventos holisticos" label="Eventos Holisticos, Ferias y Festivales / Holistic Events, Fairs and Festivals" component={Checkbox} /> } 
                  insetChildren
                />
              ]}
            />

            <ListItem 
              primaryText={
                <Field
                  id="economias"
                  name="economias"
                  label="Economías Solidarias / Economies of Solidarity"
                  component={Checkbox}
                />
              } 
              primaryTogglesNestedList
              nestedItems={[
                <ListItem 
                  primaryText={ <Field id="economias > bancos de recursos" name="economias > bancos de recursos" label="Bancos de Recursos – Entidades Financieras Solidarias, Monedas AlterNativas / Resource Banks - Solidarity Financial Institutions, Alternate Currencies" component={Checkbox} /> }
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="economias > redes de economías solidarias" name="economias > redes de economías solidarias" label="Redes de Economías Solidarias, mercados, cooperativas, gratiferias, trueque, monedas sociales. / Networks of Solidarity Economies, markets, cooperatives, gratiferias, barter, social currencies." component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="economias > bancos de tiempo" name="economias > bancos de tiempo" label="Bancos de tiempo / Time banks" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="economias > tiendas" name="economias > tiendas" label="Tiendas: Alimentos, Medicinas, Salud y Belleza, Ropa y Accesorios, Herramientas, Tecnologia, Deportes, Libros Peliculas y Entretenimiento, Artesanias, Musica, etc / Stores: Food, Medicines, Health and Beauty, Clothing and Accessories, Tools, Technology, Sports, Books, Movies and Entertainment, Crafts, Music, etc." component={Checkbox} /> } 
                  insetChildren
                />
              ]}
            />

            <ListItem 
              primaryText={
                <Field
                  id="politica"
                  name="politica"
                  label="Gobernanzas Propias e Incidencia Política / Self Governance and Political Advocacy"
                  component={Checkbox}
                />
              } 
              primaryTogglesNestedList
              nestedItems={[
                <ListItem 
                  primaryText={ <Field id="politica > actores politicos" name="politica > actores politicos" label="Actores Políticos. Grupos Personas o Movimientos de Activismo e Incidencia Política. / Political Actors. Groups, People, or Movements of Activism and Political Incidence." component={Checkbox} /> }
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="politica > colectivos de arte y grupos de intelectuales" name="politica > colectivos de arte y grupos de intelectuales" label="Colectivos de Arte y Grupos de Intelectuales / Art Collectives and Groups of Intellectuals" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="politica > derechos de la madre tierra" name="politica > derechos de la madre tierra" label="Derechos de la Madre Tierra / Rights of Mother Earth" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="politica > asesoría legal" name="politica > Asesoría legal" label="Asesoría legal / Legal advice" component={Checkbox} /> } 
                  insetChildren
                />
              ]}
            />


            <ListItem 
              primaryText={
                <Field
                  id="educacion"
                  name="educacion"
                  label="Comunicación Educación / Communication Education"
                  component={Checkbox}
                />
              } 
              primaryTogglesNestedList
              nestedItems={[
                <ListItem 
                  primaryText={ <Field id="educacion > instituciones de educacion" name="educacion > instituciones de educacion" label="Universidades, Academias, Escuelas. Homeschools / Universities, Academies, Schools. Homeschools" component={Checkbox} /> }
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="educacion > medios de comunicación" name="educacion > medios de comunicación" label="Medios de Comunicación / Communication Media" component={Checkbox} /> } 
                  insetChildren
                />
              ]}
            />


            <ListItem 
              primaryText={
                <Field
                  id="ecologia"
                  name="ecologia"
                  label="EcoLogia Ambiental, Diseños y Tecnologías / Environmental Ecology, Design and Technology"
                  component={Checkbox}
                />
              } 
              primaryTogglesNestedList
              nestedItems={[
                <ListItem 
                  primaryText={ <Field id="ecologia > comunidades alterNativas" name="ecologia > comunidades alterNativas" label="Ecoaldeas y Comunidades AlterNativas / Ecovillages and Alternate Communities" component={Checkbox} /> }
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="ecologia > hostales y hoteles" name="ecologia > hostales y hoteles" label="Hostales, Hoteles / Hostels, Hotels" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="ecologia > EcoTurismo" name="ecologia > EcoTurismo" label="EcoTurismo / Ecotourism" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="ecologia > permacultura" name="ecologia > permacultura" label="Permacultura – Bioconstrucción / Permaculture - Bioconstruction" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="ecologia > energías renovables" name="ecologia > energías renovables" label="Energías renovables / Renewable energy" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="ecologia > agriCultura" name="ecologia > agriCultura" label="AgriCultura / Farming" component={Checkbox} /> } 
                  insetChildren
                />
              ]}
            />


            <ListItem 
              primaryText={
                <Field
                  id="espiritualidad"
                  name="espiritualidad"
                  label="Espiritualidad & Realización del Ser / Spirituality and Realization of Self"
                  component={Checkbox}
                />
              } 
              primaryTogglesNestedList
              nestedItems={[
                <ListItem 
                  primaryText={ <Field id="espiritualidad > maestros" name="espiritualidad > maestros" label="Maestros, Guías, Canalizadores, Acompañantes, Facilitadores Mayores Abuelos, etc / Teachers, Guides, Channelers, Companions, Senior Facilitators, Grandparents, etc." component={Checkbox} /> }
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="espiritualidad > escuelas de sabiduría" name="espiritualidad > escuelas de sabiduría" label="Escuelas de Sabiduría e InIciáticas. Tecnologías Ancestrales y de Desarrollo del Ser. / Schools of Wisdom and Initiative. Ancestral Technologies and Development of the Self." component={Checkbox} /> } 
                  insetChildren
                />
              ]}
            />

            <ListItem 
              primaryText={
                <Field
                  id="redes"
                  name="redes"
                  label="Redes y Plataformas / Networks and Platforms"
                  component={Checkbox}
                />
              } 
            />

            <ListItem 
              primaryText={
                <Field
                  id="personas"
                  name="personas"
                  label="Personas / Persons"
                  component={Checkbox}
                />
              } 
              primaryTogglesNestedList
              nestedItems={[
                <ListItem 
                  primaryText={ <Field id="personas > naturales (perfil social)" name="personas > naturales (perfil social)" label="Naturales (Perfil Social) / Natural (Social Profile)" component={Checkbox} /> }
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="personas > voluntarios" name="personas > voluntarios" label="Voluntarios / Volunteers" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="personas > servicios comerciales" name="personas > servicios comerciales" label="Servicios Comerciales / Commercial Services" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="personas > productores" name="personas > productores" label="Productores / Producers" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="personas > gestores y proMotores" name="personas > gestores y proMotores" label="Gestores y ProMotores / Managers and ProMotors" component={Checkbox} /> } 
                  insetChildren
                />
              ]}
            />

            <ListItem 
              primaryText={
                <Field
                  id="eventos"
                  name="eventos"
                  label="Eventos / Events"
                  component={Checkbox}
                />
              } 
              primaryTogglesNestedList
              nestedItems={[
                <ListItem 
                  primaryText={ <Field id="eventos > turísticos" name="eventos > turísticos" label="Turísticos / Tourist" component={Checkbox} /> }
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="eventos > pedagógicos " name="eventos > pedagógicos " label="Pedagógicos / Pedagogical" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="eventos > culturales" name="eventos > culturales" label="Culturales / Cultural" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="eventos > holisticos" name="eventos > holisticos" label="Holisticos / Holistic" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="eventos > rituales" name="eventos > rituales" label="Rituales / Rituals" component={Checkbox} /> } 
                  insetChildren
                />
              ]}
            />
          </List>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col col-md-auto">
                <RaisedButton label="Agregue Nuevo Lugar" primary={true} type="submit" className="form-button" />
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

// redux form runs this upon submission
function validate(values) {
  const errors = {};

  // validate inputs
  if (!values.name) {
    errors.name = "Por favor ingrese un nombre para la ubicación"
  } 

  if (!values.address) {
    errors.address = "Por favor ingrese una direccion."
  }
  
  // if errors has any properties, redux form assumes it's invalid
  return errors; 
}

function afterSubmit(result, dispatch) {
  // TODO success message goes here
  dispatch(reset('LocationNewForm'));
  window.location.reload();
}

export default reduxForm({
  validate,
  form: 'LocationNewForm',
  onSubmitSuccess: afterSubmit
})(
  connect(null, { addLocation })(LocationNewForm)
);
