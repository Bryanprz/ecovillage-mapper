import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { addLocation } from '../actions';

// ===== STYLES =====
import '../style/location_new.css';
import '../style/styles.css';

// ===== MATERIAL UI =====
import RaisedButton from 'material-ui/RaisedButton';
import { TextField, Checkbox } from 'redux-form-material-ui';
import Subheader from 'material-ui/Subheader';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';

class LocationNewForm extends Component {
  // callback that runs if handleSubmit (redux form prop) validates
  onSubmit(values) {
    values.categories = [];
    for (var value in values) {
      if (values[value] === true) {
        values.categories.push(value);
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
        <h5 className="form-subtitle">Agregar Entrada</h5>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form-style">
          <div className="form-input">
            <Field
              name="name"
              hintText="Nombre Completo de la Persona, Proyecto Lugar u Organizacion / Full Name of Person, Project Location or Organization"
              component={TextField}
              fullWidth={true}
            />
          </div>
          <div className="form-input">
            <Field
              name="address"
              hintText="Pais, Estado, Ciudad, Direccion (opcionales pero recomendadas) / Country, State, City, Address (optional but recommended)"
              type="text"
              component={TextField}
              fullWidth={true}
            />
          </div>
          <div className="form-input">
            <Field
              name="seeking"
              hintText="Que Ofrece? / What is being offered?"
              type="text"
              component={TextField}
              fullWidth={true}
            />
          </div>
          <div className="form-input">
            <Field
              name="seeking"
              hintText="Que Necesita? / What are you looking for?"
              type="text"
              component={TextField}
              fullWidth={true}
            />
          </div>

          <List>

            <ListItem 
              primaryText={
                <Field
                  name="salud"
                  label="Salud y Bienestar / Health and Wellbeing"
                  component={Checkbox}
                />
              } 
              primaryTogglesNestedList
              nestedItems={[
                <ListItem 
                  primaryText={ <Field name="nutrition" label="Nutrición & Alimentación / Nutrition" component={Checkbox} /> }
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="alternative medicine" label="Medicina AlterNativa / Alternative Medicine" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="alternative therapy" label="Terapias Alternativas – Terapeutas / Alternative Therapy" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="plant medicine" label="Medicinas: Plantas y Minerales / Medicines: Plants and Minerals" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="conscious birth death" label="Parto Natural y Muerte Consciente / Natural Birth and Conscious Death" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="academies" label="Escuelas y Academias (yoga, reiki, masajes, etc) / Schools and Academies ( yoga, reiki, massage, etc)" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="holistic centers" label="Centros Holisticos / Holistic Centers" component={Checkbox} /> } 
                  insetChildren
                />
              ]}
            />

            <ListItem 
              primaryText={
                <Field
                  name="arte"
                  label="Arte y Cultura / Art and Culture"
                  component={Checkbox}
                />
              } 
              primaryTogglesNestedList
              nestedItems={[
                <ListItem 
                  primaryText={ <Field name="music" label="Música / Music" component={Checkbox} /> }
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="plastic art" label="Arte plástico / Plastic art" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="stage art" label="Arte escénico (danza, teatro, performance) / Stage art (dance, theater, performance)" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="audiovisual production" label="Producción Audiovisual / Audiovisual Production" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="circus and entertainment" label="Circo y Entretenimiento / Circus and Entertainment" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="cultural houses" label="Casas Culturales / Cultural Houses" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="theater and movies" label="Teatros y Cines / Theater and Movies" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="restaurants and cafés" label="Restaurantes, Cafés y Bares / Restaurants, Cafés and Bars" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="multidisciplinary projects" label="Proyectos multidisciplinarios (integran diversas manifestaciones artísticas) / Multidisciplinary Projects" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="social art" label="Arte Social (proyectos artísticos con un enfoque social definido) / Social Art (artistic projects with a defined social focus" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="holistic events" label="Eventos Holisticos, Ferias y Festivales / Holistic Events, Fairs and Festivals" component={Checkbox} /> } 
                  insetChildren
                />
              ]}
            />

            <ListItem 
              primaryText={
                <Field
                  name="economias"
                  label="Economías Solidarias / Economies of Solidarity"
                  component={Checkbox}
                />
              } 
              primaryTogglesNestedList
              nestedItems={[
                <ListItem 
                  primaryText={ <Field name="resource banks" label="Bancos de Recursos – Entidades Financieras Solidarias, Monedas AlterNativas / Resource Banks - Solidarity Financial Institutions, Alternate Currencies" component={Checkbox} /> }
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="solidarity economy networks" label="Redes de Economías Solidarias, mercados, cooperativas, gratiferias, trueque, monedas sociales. / Networks of Solidarity Economies, markets, cooperatives, gratiferias, barter, social currencies." component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="time banks" label="Bancos de tiempo / Time banks" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="stores" label="Tiendas: Alimentos, Medicinas, Salud y Belleza, Ropa y Accesorios, Herramientas, Tecnologia, Deportes, Libros Peliculas y Entretenimiento, Artesanias, Musica, etc / Stores: Food, Medicines, Health and Beauty, Clothing and Accessories, Tools, Technology, Sports, Books, Movies and Entertainment, Crafts, Music, etc." component={Checkbox} /> } 
                  insetChildren
                />
              ]}
            />

            <ListItem 
              primaryText={
                <Field
                  name="politica"
                  label="Gobernanzas Propias e Incidencia Política / Self Governance and Political Advocacy"
                  component={Checkbox}
                />
              } 
              primaryTogglesNestedList
              nestedItems={[
                <ListItem 
                  primaryText={ <Field name="political actors" label="Actores Políticos. Grupos Personas o Movimientos de Activismo e Incidencia Política. / Political Actors. Groups, People, or Movements of Activism and Political Incidence." component={Checkbox} /> }
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="art collectives" label="Colectivos de Arte y Grupos de Intelectuales / Art Collectives and Groups of Intellectuals" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="earth rights" label="Derechos de la Madre Tierra / Rights of Mother Earth" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="legal advice" label="Asesoría legal / Legal advice" component={Checkbox} /> } 
                  insetChildren
                />
              ]}
            />


            <ListItem 
              primaryText={
                <Field
                  name="educacion"
                  label="Comunicación Educación / Communication Education"
                  component={Checkbox}
                />
              } 
              primaryTogglesNestedList
              nestedItems={[
                <ListItem 
                  primaryText={ <Field name="education institutions" label="Universidades, Academias, Escuelas. Homeschools / Universities, Academies, Schools. Homeschools" component={Checkbox} /> }
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="media" label="Medios de Comunicación / Communication Media" component={Checkbox} /> } 
                  insetChildren
                />
              ]}
            />


            <ListItem 
              primaryText={
                <Field
                  name="ecologia"
                  label="EcoLogia Ambiental, Diseños y Tecnologías / Environmental Ecology, Design and Technology"
                  component={Checkbox}
                />
              } 
              primaryTogglesNestedList
              nestedItems={[
                <ListItem 
                  primaryText={ <Field name="alternative communities" label="Ecoaldeas y Comunidades AlterNativas / Ecovillages and Alternate Communities" component={Checkbox} /> }
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="hotels and hostels" label="Hostales, Hoteles / Hostels, Hotels" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="ecotourism" label="EcoTurismo / Ecotourism" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="permaculture" label="Permacultura – Bioconstrucción / Permaculture - Bioconstruction" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="renewable energy" label="Energías renovables / Renewable energy" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="farming" label="AgriCultura / Farming" component={Checkbox} /> } 
                  insetChildren
                />
              ]}
            />


            <ListItem 
              primaryText={
                <Field
                  name="espiritualidad"
                  label="Espiritualidad & Realización del Ser / Spirituality and Realization of Self"
                  component={Checkbox}
                />
              } 
              primaryTogglesNestedList
              nestedItems={[
                <ListItem 
                  primaryText={ <Field name="guides" label="Maestros, Guías, Canalizadores, Acompañantes, Facilitadores Mayores Abuelos, etc / Teachers, Guides, Channelers, Companions, Senior Facilitators, Grandparents, etc." component={Checkbox} /> }
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="schools of wisdom" label="Escuelas de Sabiduría e InIciáticas. Tecnologías Ancestrales y de Desarrollo del Ser. / Schools of Wisdom and Initiative. Ancestral Technologies and Development of the Self." component={Checkbox} /> } 
                  insetChildren
                />
              ]}
            />

            <ListItem 
              primaryText={
                <Field
                  name="networks"
                  label="Redes y Plataformas / Networks and Platforms"
                  component={Checkbox}
                />
              } 
            />

            <ListItem 
              primaryText={
                <Field
                  name="persons"
                  label="Personas / Persons"
                  component={Checkbox}
                />
              } 
              primaryTogglesNestedList
              nestedItems={[
                <ListItem 
                  primaryText={ <Field name="natural person" label="Naturales (Perfil Social) / Natural (Social Profile)" component={Checkbox} /> }
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="volunteers" label="Voluntarios / Volunteers" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="commercial service" label="Servicios Comerciales / Commercial Services" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="producers" label="Productores / Producers" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="managers" label="Gestores y ProMotores / Managers and ProMotors" component={Checkbox} /> } 
                  insetChildren
                />
              ]}
            />

            <ListItem 
              primaryText={
                <Field
                  name="events"
                  label="Eventos / Events"
                  component={Checkbox}
                />
              } 
              primaryTogglesNestedList
              nestedItems={[
                <ListItem 
                  primaryText={ <Field name="tourism" label="Turísticos / Tourist" component={Checkbox} /> }
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="pedagogical" label="Pedagógicos / Pedagogical" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="cultural" label="Culturales / Cultural" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="holistic" label="Holisticos / Holistic" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field name="rituals" label="Rituales / Rituals" component={Checkbox} /> } 
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
  window.location.reload();
  dispatch(reset('LocationNewForm'));
}

export default reduxForm({
  validate,
  form: 'LocationNewForm',
  onSubmitSuccess: afterSubmit
})(
  connect(null, { addLocation })(LocationNewForm)
);
