# Estado en React: 

Datos que pertenecen a un componente, los cuales, al ser editados, provocan que se vuelva a renderizar el componente. 

# React Hooks 

Son funcionalidades que fueron agregadas a React para hacer los componentes funcionales más poderosos.

# useState

Con *useState* podemos trabajar estados en componentes funcionales.

<code>
const [nombre, setNombre] = useState('');
</code>

donde <code>nombre</code> es el nombre de la variable y <code>setNombre</code> es el nombre de la función por el cual se actualiza el estado. El *parámetro* de useState es el valor inicial de la variable *nombre*.

Para actualizar el nombre se utiliza de la siguiente manera:

<code>setNombre('Gabriela');</code>

## ¿Cuándo utilizar Estados?

Cuando el cambio del valor de las variables que se están usando en el componente provoque un cambio en el UI del componente y también cuando al volver a renderizar el componente se mantenga el valor de la variable entre un renderizado y otro.

### Ejemplos

<code>
    const [nombre, setNombre] = useState(''); // string
    const [edad, setEdad] = useState(0); // int
    const [online, setOnline] = useState(false); // bool
</code>


Los hooks NO SE PUEDEN CONDICIONAR. Ej:

<code>

    const [nombre, setNombre] = useState('');

    if (condicion) {
      const [edad, setEdad] = useState(0);
    }

    const [online, setOnline] = useState(false);
</code>

Otros hooks

- useEffect: trabaja efectos secundarios en los componentes y realizar limpieza de recursos. Código que podemos ejecutar POSTERIOR al renderizado del componente

Ejemplos:
  - Peticiones HTTP **al cargar** el componente
  - Actualizar el título del documento HTML

El listado de dependencias nos permite indicar que el efecto debe ejecutarse
  
    - Al cargar el componente
    - Al renderizar el componente y que una dependencia haya cambiado

- useContext: comunicación entre componentes que no son hijos ni padres inmediatos
  - Se puede definir un valor al cual nos podemos suscribir, así, cuando dicho valor cambie, TODOS los componentes suscritos recibiirán una notificación del cambio
- useMemo: guarda el resultado de una función en Caché. 
  - Para evitar tener que volver a realizar un cálculo sin justificación
  - Mejora de rendimiento y velocidad de las aplicaciones
  - Memo viene de "Memoización": técnica que consiste en almacenar el resultado de cálculos para evitar repetirlos.
- useCallback: guarda referencias (definición) de una función.