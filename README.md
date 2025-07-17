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

- useEffect: trabaja efectos secundarios en los componentes y realizar limpieza de recursos.
- useContext: comunicación entre componentes que no son hijos ni padres inmediatos
- useMemo: guarda información en Caché.
- useCallback: guarda referencias de una función.