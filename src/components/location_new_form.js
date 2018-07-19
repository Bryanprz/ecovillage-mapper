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
              key="organizaciones"
              primaryTogglesNestedList
              primaryText={
                <Field
                  name="organizaciones"
                  label="Organizaciones, Proyectos, Iniciativas (Empresas, Emprendimientos & Grupos en General) o Blogs, Revistas, Editoriales en General que Brindan Información acerca de:"
                  component={Checkbox}
                  id="organizaciones"
                />
              }
              nestedItems={[
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
                />,
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
                      primaryText={ <Field id="arte > musica" name="arte > musica" label="Música & Sonido / Music & Sound" component={Checkbox} /> }
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="arte > baile" name="arte > baile" label="Baile, Danza & Movimiento" component={Checkbox} /> }
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="arte > arte plastico" name="arte > arte plastico " label="Arte Visual y Artes Plásticas (Dibujo, Graffiti, Fotografia, Arte Digital etc)" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="arte > arte escénico" name="arte > arte escénico" label="Arte escénico (danza, teatro, performance) / Stage art (dance, theater, performance)" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="arte > arte literario" name="arte > arte literario" label="Arte Literario, Cuentos, Poesia, etc" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="arte > producción audivisual" name="arte > producción audivisual" label="Cine & Producción Audiovisual / Audiovisual Production" component={Checkbox} /> } 
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
                      primaryText={ <Field id="arte > lugares de conciertos" name="arte > lugares de conciertos" label="Lugares de Conciertos o Presentaciones Culturales (Auditorios,Salas, Cafés, Bars, etc)" component={Checkbox} /> } 
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
                      primaryText={ <Field id="arte > eventos holisticos" name="arte > eventos holisticos" label="Organización de Eventos Holísticos; Ferias y Festivales etc" component={Checkbox} /> } 
                      insetChildren
                    />
                  ]}
                />,
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
                      primaryText={ <Field id="economias > bancos de recursos" name="economias > bancos de recursos" label="Bancos de Recursos. Economía de Regalo e InterCambio, Bancos de Tiempo" component={Checkbox} /> }
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="economias > cooperativas de produccion" name="economias > cooperativas de produccion" label="Cooperativas de Producción, CompraVenta y/o Consumo." component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="economias > entidades financieras" name="economias > entidades financieras" label="Entidades Financieras Solidarias, Crédito & Ahorro." component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="economias > monedas alternativas" name="economias > monedas alternativas" label="Monedas AlterNativas / Sociales / Locales" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="economias > tiendas" name="economias > tiendas" label="Tiendas, Ferias, Mercados, Trueque, GratiFerias." component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="economias > tiendas online" name="economias > tiendas online" label="Tiendas Online (Ecommerce)" component={Checkbox} /> } 
                      insetChildren
                    />
                  ]}
                />,
                <ListItem 
                  primaryText={
                    <Field
                      id="plataformas"
                      name="plataformas"
                      label="PlataFormas de Incidencia Polític@ / Institucional"
                      component={Checkbox}
                    />
                  } 
                  primaryTogglesNestedList
                  nestedItems={[
                    <ListItem 
                      primaryText={ <Field id="plataformas > derechos ambientales" name="plataformas > derechos ambientales" label="Derechos Socio/Ambientales de la Madre Tierra / Naturaleza. (Gaia)" component={Checkbox} /> }
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="plataformas > actores politicos" name="plataformas > actores politicos" label="Actores Políticos o Grupos de Incidencia Política. (Derechos Humanos)" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="plataformas > colectivos de arte" name="plataformas > colectivos de arte" label="Colectivos de Arte y Grupos de Intelectuales, Académicos y/o Científicos" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="plataformas > asesoria legal" name="plataformas > asesoria legal" label="Asesoría Legal y Jurídica" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="plataformas > liderazgo" name="plataformas > liderazgo" label="Liderazgo y Facilitación social (métodos, tecnologías, herramientas sociales, etc)" component={Checkbox} /> } 
                      insetChildren
                    />
                  ]}
                />,
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
                      primaryText={ <Field id="educacion > pedagogias" name="educacion > pedagogias" label="Pedagogias & Educacion" component={Checkbox} /> }
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="educacion > plataformas" name="educacion > plataformas" label="Plataformas & Medios de Comunicación" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="educacion > agencias de marketing" name="educacion > agencias de marketing" label="Agencias de Marketing & Comunicaciones" component={Checkbox} /> } 
                      insetChildren
                    />
                  ]}
                />,
                <ListItem 
                  primaryText={
                    <Field
                      id="ecologia"
                      name="ecologia"
                      label="EcoLogía Ambiental, EcoTurismo, Diseños y Tecnología"
                      component={Checkbox}
                    />
                  } 
                  primaryTogglesNestedList
                  nestedItems={[
                    <ListItem 
                      primaryText={ <Field id="ecologia > hospedaje" name="ecologia > hospedaje" label="Eco - Hospedaje, Hostales, Hoteles" component={Checkbox} /> }
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="ecologia > ecoaldeas" name="ecologia > ecoaldeas" label="EcoAldeas & Asentamientos Sustentables" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="ecologia > herramientas" name="ecologia > herramientas" label="Herramientas & Tecnológias" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="ecologia > sistemas ecologicos" name="ecologia > sistemas ecologicos" label="Sistemas EcoLógicos (PermaCulturas: Bioconstrucción, Energías renovables etc)" component={Checkbox} /> } 
                      insetChildren
                    />
                  ]}
                />,
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
                    />,
                    <ListItem 
                      primaryText={ <Field id="espiritualidad > editoriales" name="espiritualidad > editoriales" label="Editoriales, Blogs, Revistas, Canales, Portales, etc" component={Checkbox} /> } 
                      insetChildren
                    />
                  ]}
                />,
                <ListItem 
                  primaryText={
                    <Field
                      id="holisticas"
                      name="holisticas"
                      label="Holisticas, Integrales"
                      component={Checkbox}
                    />
                  } 
                  primaryTogglesNestedList
                />
              ]}
            />,

            <ListItem 
              primaryText={
                <Field
                  id="redes"
                  name="redes"
                  label="Redes, Plataformas & Movimientos (Sociales y/o Virtuales)"
                  component={Checkbox}
                />
              } 
              primaryTogglesNestedList
              nestedItems={[
                <ListItem 
                  primaryText={ <Field id="redes > salud" name="redes > salud" label="Salud & Bienestar" component={Checkbox} /> }
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="redes > arte" name="redes > arte " label="Arte & Cultura" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="redes > economias solidarias" name="redes > economias solidarias" label="Economías Solidarias" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="redes > gobernanzas propias" name="redes > gobernanzas propias" label="Gobernanzas Propias e Incidencia Polític@" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="redes > comunicacion" name="redes > comunicacion" label="Comunicación & Educación" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="redes > ecologia" name="redes > ecologia" label="EcoLogía & Tecnología" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="redes > espiritualidad" name="redes > espiritualidad" label="Espiritualidad & Realización del Ser" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="redes > holisticas" name="redes > holisticas" label="Holisticas, Integrales" component={Checkbox} /> } 
                  insetChildren
                />
              ]}
            />,

            <ListItem 
              primaryText={
                <Field
                  id="personas"
                  name="personas"
                  label="Personas e Individuos Naturales (Perfil Social)"
                  component={Checkbox}
                />
              } 
              primaryTogglesNestedList
              nestedItems={[
                <ListItem 
                  primaryText={ <Field id="personas > proconsumidores" name="personas > proconsumidores" label="ProConSumidores Conscientes (Interesados en Participar, Aprender o Comprar de Productos, Servicios o Eventos Conscientes)" component={Checkbox} /> }
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="personas > trabajadores" name="personas > trabajadores " label="Trabajadores / Voluntarios / CoLaboradores / Facilitadores (Interesados en InterCambiar Tiempo, Energía, Saberes etc)" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="personas > proveedores servicios" name="personas > proveedores servicios" label="Proveedores Servicios (Ej: Masaje Thai, Diseño, Comunicación) Cuales?" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="personas > productores" name="personas > productores" label="Productores, Alimentos, Medicinas, Artesanías, Artículos, Artefactos" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="personas > gestores" name="personas > gestores" label="Gestores / ProMotores de la Red MAIS cVc (temáticas propuestas para los grupos de trabajo por ahora)" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="personas > salud" name="personas > salud" label="Salud & Bienestar" component={Checkbox} /> } 
                  insetChildren
                  nestedItems={[
                    <ListItem 
                      primaryText={ <Field id="personas > salud > nutricion" name="personas > salud > nutricion" label="Nutricion & Alimentos" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="personas > salud > medicina" name="personas > salud > medicina" label="Medicina & Sanación" component={Checkbox} /> } 
                      insetChildren
                    />
                  ]}
                />,
                <ListItem 
                  primaryText={ <Field id="personas > arte" name="personas > arte" label="Arte & Cultura" component={Checkbox} /> } 
                  insetChildren
                  nestedItems={[
                    <ListItem 
                      primaryText={ <Field id="personas > arte > usos" name="personas > arte > usos" label="Usos & Costumbres" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="personas > arte > artes" name="personas > arte > artes" label="Artes & Artesanias" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="personas > arte > movimientos" name="personas > arte > movimientos" label="Movimientos, Encuentros & Eventos Culturales" component={Checkbox} /> } 
                      insetChildren
                    />
                  ]}
                />,
                <ListItem 
                  primaryText={ <Field id="personas > economia" name="personas > economia" label="Economia Solidaria" component={Checkbox} /> } 
                  insetChildren
                  nestedItems={[
                    <ListItem 
                      primaryText={ <Field id="personas > economia > bancos" name="personas > economia > bancos" label="Bancos de Recursos" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="personas > economia > entidades financieras" name="personas > economia > entidades financieras" label="Entidades Financieras & Monedas AlterNativas" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="personas > economia > ferias" name="personas > economia > ferias" label="Ferias & Mercados" component={Checkbox} /> } 
                      insetChildren
                    />
                  ]}
                />,
                <ListItem 
                  primaryText={ <Field id="personas > politica" name="personas > politica" label="Política Participativa" component={Checkbox} /> } 
                  insetChildren
                  nestedItems={[
                    <ListItem 
                      primaryText={ <Field id="personas > economia > gobernanzas" name="personas > economia > gobernanzas" label="Gobernanzas Propias & Metodologías de Participación Social" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="personas > economia > redes" name="personas > economia > redes" label="Redes & Movimientos" component={Checkbox} /> } 
                      insetChildren
                    />
                  ]}
                />,
                <ListItem 
                  primaryText={ <Field id="personas > educacion" name="personas > educacion" label="Educación & Comunicación" component={Checkbox} /> } 
                  insetChildren
                  nestedItems={[
                    <ListItem 
                      primaryText={ <Field id="personas > educacion > pedagogias" name="personas > educacion > pedagogias" label="Pedagogías, Educación & Escuelas AlterNativas" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="personas > educacion > agencias" name="personas > educacion > agencias" label="Agencias & Medios de Comunicación" component={Checkbox} /> } 
                      insetChildren
                    />
                  ]}
                />,
                <ListItem 
                  primaryText={ <Field id="personas > ecologia" name="personas > ecologia" label="Ecología & Tecnologías" component={Checkbox} /> } 
                  insetChildren
                  nestedItems={[
                    <ListItem 
                      primaryText={ <Field id="personas > ecologia > diseños ecologicos" name="personas > ecologia > diseños ecologicos" label="Diseños Ecológicos, Permacultura & Agricultura" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="personas > ecologia > ecoturismo" name="personas > ecologia > ecoturismo" label="EcoTurismo" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="personas > ecologia > movimientos ambientales" name="personas > ecologia > movimientos ambientales" label="Movimientos Ambientales" component={Checkbox} /> } 
                      insetChildren
                    />
                  ]}
                />,
                <ListItem 
                  primaryText={ <Field id="personas > realizacion del ser" name="personas > realizacion del ser" label="Realización del Ser, Ciencias Espirituales, Ética & Valores" component={Checkbox} /> } 
                  insetChildren
                  nestedItems={[
                    <ListItem 
                      primaryText={ <Field id="personas > realizacion del ser > ancestralidad" name="personas > realizacion del ser > ancestralidad" label="Ancestralidad & Tradiciones Espirituales" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="personas > realizacion del ser > rituales" name="personas > realizacion del ser > rituales" label="Rituales & Tecnologías Ancestrales & Espirituales" component={Checkbox} /> } 
                      insetChildren
                    />
                  ]}
                />,
                <ListItem 
                  primaryText={ <Field id="personas > gestores" name="personas > gestores" label="Gestores Holisticos / Tejedores de la Red en General" component={Checkbox} /> } 
                  insetChildren
                  nestedItems={[
                    <ListItem 
                      primaryText={ <Field id="personas > gestores > embajadores" name="personas > gestores > embajadores" label="Embajadores (de cual Red u Organización?)" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="personas > gestores > promotores" name="personas > gestores > promotores" label="ProMotores (Articuladores, Enlazadores Conectores)" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="personas > gestores > comunicadores" name="personas > gestores > comunicadores" label="Comunicadores" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="personas > gestores > gestores culturales" name="personas > gestores > gestores culturales" label="Gestores Culturales" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="personas > gestores > gestores de recursos" name="personas > gestores > gestores de recursos" label="Gestores de Recursos" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="personas > gestores > facilitadores" name="personas > gestores > facilitadores" label="Facilitadores" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="personas > gestores > administradores" name="personas > gestores > administradores" label="Administradores" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="personas > gestores > organizadores" name="personas > gestores > organizadores" label="Organizadores" component={Checkbox} /> } 
                      insetChildren
                    />,
                  ]}
                />,
              ]}
            />,

            <ListItem 
              primaryText={
                <Field
                  id="eventos"
                  name="eventos"
                  label="Eventos & Encuentros (ECOnscientes)"
                  component={Checkbox}
                />
              } 
              primaryTogglesNestedList
              nestedItems={[
                <ListItem 
                  primaryText={ <Field id="eventos > culturales" name="eventos > culturales" label="Culturales" component={Checkbox} /> }
                  insetChildren
                  nestedItems={[
                    <ListItem 
                      primaryText={ <Field id="eventos > culturales > conciertos" name="eventos > culturales > conciertos" label="Conciertos" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="eventos > culturales > teatro" name="eventos > culturales > teatro" label="Teatro" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="eventos > culturales > cine" name="eventos > culturales > cine" label="Cine" component={Checkbox} /> } 
                      insetChildren
                    />,
                    <ListItem 
                      primaryText={ <Field id="eventos > culturales > tertulias" name="eventos > culturales > tertulias" label="Tertulias" component={Checkbox} /> } 
                      insetChildren
                    />
                  ]}
                />,
                <ListItem 
                  primaryText={ <Field id="eventos > turisticos" name="eventos > turisticos " label="ECO / Turísticos, (Ej: Caminatas, Escaladas, Recorridos)" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="eventos > pedagogicos" name="eventos > pedagogicos" label="Pedagógicos, (Clases, Cursos, Talleres, Seminarios,etc)" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="eventos > holísticos" name="eventos > holísticos" label="Holísticos (Crecimiento, Desarrollo, Realización del Ser)" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="eventos > rituales" name="eventos > rituales" label="Rituales.& Ceremonias" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="eventos > sociales espirituales" name="eventos > sociales espirituales" label="Sociales Espirituales (Ej: Meditaciones, Aniversarios  o Días Mundiales, Solsticios, etc)" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="eventos > ecologicos" name="eventos > ecologicos" label="EcoLógicos & Ambientales (Ej: Siembras, Limpiezas Mingas, etc)" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="eventos > politicos" name="eventos > politicos" label="Políticos, Participación Social (Ej: Marchas, Asambleas, Velatones, etc)" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="eventos > comerciales" name="eventos > comerciales" label="Comerciales: (Ferias, Mercados, Bazares etc)" component={Checkbox} /> } 
                  insetChildren
                />,
                <ListItem 
                  primaryText={ <Field id="eventos > festivales" name="eventos > festivales" label="Festivales (Incluyen varias de las anteriores)" component={Checkbox} /> } 
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
