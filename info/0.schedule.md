# Angular Avanzado (v 17-18)

Algunas de las características clave de Angular:

- En Angular todo se basa en **clases** de ES6
- Angular está completamente ligado a **typeScript** desde sus inicios
- La clases usan **decoradores** de typeScript para convertirse en los distintos elementos de Angular: Componentes, Directivas, Pipes, Servicios...
  - Los elementos "declarables" en Angular son
    - los **componentes**, que son los que se encargan de la presentación de la aplicación,
    - las **directivas**, que permiten modificar el DOM,
    - los **pipes**, que permiten transformar los datos antes de mostrarlos
  - los elementos "provistos" son los **servicios**, que encapsulan la lógica de negocio y
- Todos los elementos declarables se pueden agrupar en **módulos**, un sistema de espacios de nombres que define la estructura de la aplicación, superponiéndose a los módulos de ES6.
Los **módulos** de Angular por lo general dificultaba bastante el aprendizaje del framework. Ahi es donde entra en juego el nuevo enfoque del equipo de Angular, que de momento se refleja en los cambios de la **versión 17**
- El modo **'standalone'** permite prescindir completamente de los módulos, trasladando su funcionalidad principalmente a los componentes.
- Las configuraciones del módulo principal son ahora responsabilidad de un **fichero de configuración** independiente
- Tenemos un **router** que permite el **lazy loading**, inicialmente a nivel de módulos
- El modo **'standalone'** el **router** continua usando **lazy loading**, vinculando cara ruta con su componente principal, en vez de hacerlo con un módulo

- Los componentes usan un **template** en html ampliado con directivas y operadores de angular, que entre otras cosas permite interpolar expresiones de ES, asociar atributos html a variables y definir manejadores de eventos.
- En los templates disponemos de **directivas estructurales**, ng-For, ng-If y ng-Switch, que permiten el renderizado condicional o iterativo. En Angular 17 se pueden sustituir estas directivas estructurales, por elementos de **control de flujo**, @for, @if y @shift mas declarativos, con un importante incremento de performance
- En los componentes disponemos de **directivas de atributo y CSS**, ngClass (y ngStyle)
- Los componentes utilizan **estilos SCSS** que por defecto esta vinculado y restringido a cada uno de ellos
- En los componentes disponemos de **proyección de contenido**, incluso de varios contenidos, identificables por cualquier selector. Es habitual usarlo para la composición de componentes.
- Los componentes tienen una serie de fases en su **ciclo de vida** a los que están asociados métodos específicos, lo que suele denominarse hooks
- El más utilizado de estos hooks, **onInit**, se ejecuta cuando se monta el componente, después de haber sido instanciado
- Las vistas pueden cargarse en **modo 'defer'** para aumentar el proceso de lazy loading
- En los componentes disponemos de **eventos** y **doble binding** (Directiva de atributo ngModel)
- Los cambios de valor de las propiedades de los componentes se propagan automáticamente a la vista,  gracias al uso de la **detección de cambios** de Angular, basada en la librería **Zone**
- La reactivad frente a los cambios en las variables puede basarse en **signals**, lo que en Angular 18 puede lleva al modo **ZoneLess**, que deja de utilizar **Zone**,

- Los **servicios** permiten abstraer la lógica fuera de los componentes, de forma muy similar a lo que hacemos en los Custom Hooks
- Disponemos de un sistema de **inyección de dependencias**, que prove a los componentes y otros servicios de una instancia única de cualquier servicio que necesiten. Una combinación de dos patrones: la inyección de dependencias y el patron singleton
- El modo **'standalone'**, la aplicación, gracias al fichero de configuración o los componentes actúan de **providers** de los servicios, como antes hacían los módulos
- Especialmente en los servicios gracias a su carácter singleton, podemos usar **Observables**, entre otras cosas para representar el estado de la aplicación.
- Al **suscribirnos** a los observables desde los componentes, tenemos la garantía de que estos se actualizan cada vez que hay un cambio de estado.
- Si gestionamos los cambios de estado solo desde el servicio responsable de él, estaremos implementando de forma muy simple el **patron FLux**.
- Si nuestro proyecto exige un gestión de estados más compleja, podemos implementar el **patrón Redux**, bien con Redux nativo, o mejor aun, utilizando la librería [NgRx](https://ngrx.io/) y su store ("a global state management for Angular applications, inspired by Redux"), que no veremos en nuestro taller
- Para las conexiones al backend, Angular proporciona un servicio **httpClient**, que encapsula fetch, pero en lugar de promesas, trabaja con **observables**
- Los servicios sigue siendo responsables de **encapsular** operaciones de bajo nivel. En el caso de httpClient, empleamos el **patrón repository**, concentrando en un servicio todas las operaciones relativas al backend que implementaremos con httpClient
  
- Angular es un **framework**, que nos pauta las formas de actuar y la disposición de los elementos, al tiempo que nos proporciona la herramienta para conseguirlo fácilmente, el **Angular CLI**
- Gracias a el CLI se simplifica la creación de **proyecto inicial**, que puede incluir una o más **aplicaciones** junto con **librerías** para el código compartido entre las aplicaciones. Algo mucho más potente que las herramientas proporcionadas por vite o por el desaparecido create-react-app
- Para ir añadiendo al proyecto nuevos elementos (componentes, servicios...) disponemos de comandos específicos del CLI configurables con gran cantidad de parámetros.
- La incorporación del ESLint al proyecto y su configuración es posible con una sola instrucción del CLI
- Y por último, como no podía faltar tenemos un entrono de testing unitario ya instalado y configurado, basado en **Jasmine** y las **herramientas de testing de Angular**
- Cada vez que creamos un elemento (componente, servicio...) el CLI puede crear por nosotros el **fichero de testing** correspondiente, con un test "de humo" básico, que nos será de gran ayuda para completar el test en cada caso y para ir haciéndolo a medida que creamos o modificamos los distintos elementos del proyecto.
- Aunque disponemos de Jasmine configurado y listo para su uso, podríamos redefinir nuestro proyecto para usar Jest y la testing/library. En lugar de ello, podemos re-configurar el entorno de test para que tenga un aspecto muy similar al de Jest (basado en **istanbul**) con el informe de **coverage** por consola al que estamos acostumbrados. El equipo de Angular ya trabaja en incorporar Jest desde el inicio, pero tendremos que esperar a próximas versiones
- Internamente Angular ha sufrido una completa evolución a lo largo de sucesivas versiones, siempre buscando mejorar el rendimiento de las aplicaciones y del proceso de desarrollo. En esta versión **vite** y **esbuild** sustituyen a Webpack con notables resultados en este sentido
- Reflejo de su nueva vitalidad, una web completamente re-diseñada: [angular.dev](https://angular.dev/)
- También hay grandes mejoras en el uso del SSR y la hidratación de los componentes.

## Evolución de Angular

Las últimas versiones de Angular han incorporado una serie de novedades que han supuesto un cambio en la forma de trabajar con el framework.

### Angular 15: Standalone Components

En [Angular 15](https://blog.angular.io/angular-v15-is-now-available-df7be7f2f4c8) la gran novedad fueron los **componentes standalone**, que permiten la creación de componentes que no dependen de un módulo, y que pueden ser usados en cualquier parte de la aplicación. Desde la **versión 14** ya se había liberado una versión preliminar (developer preview) de los Standalone Components, y en la 15 dejan de ser experimentales y se añade una API más robusta para soportarlos, que incluye la posibilidad de **lazy load** con los componentes standalone, pudiendo además importarlos en forma default.

Otras novedades fueron

- la mejora en la **carga de imágenes** con la directiva ngSrc que permite cargar imágenes de forma diferida, y que se incluye en el módulo  NgOptimizedImage.
- la posibilidad de usar **funciones de guarda**, sin necesidad de crear clases como hasta ahora
- mejora en la gestión de **errores**
- alineamiento con **material design** 3 y novedades en el Angular CDK
- mejoras en el soporte a **ESBuild**, futuro reemplazo de Webpack como empaquetador de módulos (bundler)
- reducción del número de archivos en el **scaffold** de un proyecto
- cambios en los **test e2e**, ya no vinculados a Protractor. Se añade soporte para diversas alternativas, como **Cypress**, con herramientas para su instalación y configuración

### Angular 16: Signals

En [Angular 16](https://blog.angular.io/angular-v16-is-here-4d7a28ec680d) se han incorporado las **signals**, que permiten una forma más eficiente de trabajar con el estado de la aplicación, replanteando completamente la reactividad en Angular.

Otras novedades fueron:

- mejoras en el **server side rendering** (SSR) y la **hidratación** de los componentes
- mejoras en el uso de los **standalone components**
- incorporación como developer preview de nuevas herramientas de empacado (bundling) de las aplicaciones, con **ESBuild** y **Vite**, este último en el ng serve
- soporte experimental para **Jest** como entorno de testing

### Angular 17: Renacimiento de Angular

[Angular 17](https://blog.angular.io/introducing-angular-v17-4d7033312e4b), con una nueva apariencia y un conjunto de características innovadoras, ha sido lanzado en marzo de 2022, como una apuesta seria por lo que sus creadores denominan un "renacimiento de Angular".

Entre las novedades más destacadas, junto a la nueva estética, logotipo y página web, se encuentran:

- API de los **standalone components**, por defecto con aun mejor soporte para el lazy loading
- mejoras en el uso de las signals, con la incorporación de las **computed** y **effects**
- nuevos **controles fe flujo** (flow controls) que sustituyen a las directivas estructurales facilitando la sintaxis de los componentes y mejorando considerablemente el rendimiento: @if, @for, @switch, @case
- **vistas diferidas** (Deferrable views), llevando el lazy loading más allá del enrutamiento, permitiendo cargar vistas de forma diferida
- aun mejor soporte para el **server side rendering** (SSR) y la **hidratación** de los componentes, incluyendo la opción de instalarlo al crear un proyecto, además de nuevos hooks en el ciclo de vida del componente afterRender y afterNextRender
- nuevas herramientas de **bundling** (empaquetado) con **ESBuild** y **Vite** ya utilizadas por defecto, en lugar de Webpack
- mejoras en las **Angular DevTools**, con soporte para depurar la inyección de dependencias
- se continua con el soporte experimental para **Jest** como entorno de testing, y se añade soporte opcional para **Cypress** y **Playwright** en los test e2e
- mejoras en la customization de Angular Material 3

#### Angular 18: ZoneLess

[Angular 18](https://blog.angular.dev/angular-v18-is-now-available-e79d5ac0affe) ha sido lanzado en junio de 2022, con una serie de novedades que buscan mejorar el rendimiento de las aplicaciones y del proceso de desarrollo.

Entre las novedades más destacadas se encuentran:

- Soporte experimental para la detección de cambios sin zonas (**zoneless**)
- Son ahora estables e incorporan una serie de **mejoras** algunos elementos incorporados previamente
  - Material 3,
  - vistas aplazables (**deferrable views**),
  - controles de flujo (**built-in control flow**)
- Angular.dev es ahora web de referencia para los desarrolladores de Angular
- Mejoras en el renderizado del lado del servidor (**SSR**) como el soporte de hidratación i18n,

## Resumen de contenidos deseables para conocer Angular

- Instalación del Angular CLI
- Creación de proyectos: aplicaciones y librerías
- Incorporación del ESLint
- Scaffolding inicial
- Componentes standalone. Creación de nuevos componentes
- Elementos del componente: clase, template y estilos
- Componente 'saludos': eventos y doble binding (Directiva de atributo ngModel)
- Pipes. Built-in pipes
- Testing del componente
- Routing y lazy loading
- Librerías y componentes compartidos: Header y Footer
- Proyección de contenido: componente Layout
- Página TODO. Entity Task
- Componente 'TODO List' unitario
- Directivas estructurales (Built-in control flow): @for / @if
- Directivas de atributo y CSS: ngClass (y ngStyle)
- Refactoring del TODO list: List / Cards
- Comunicación entre componentes
- Testing de los componentes
- Componente añadir: formularios reactivos. Validación
- Testing del formulario
- Repositorio: servicio storage (localStore)
- Testing del servicio
- Página Notas. Entity Note
- Backend simulado: JSONServer
- Repositorio: servicio APIRepo encapsulando HttpClient
- Test del servicio con HttpClient
- Flux: Servicio con estado para el Store. BehaviorSubject y Observables
- Uso desde los componentes listNotes, CardNote y AddNote
- Test de los componentes
- Backend con Auth0
- Añadiendo login
- Firmando con el token: Interceptores
- Protegiendo rutas: Guardas
- Presentando Angular Material
