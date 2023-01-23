# Directrices de contribución
## Antes de contribuir
¡Bienvenido a Algorithms-Typescript Español! Antes de enviar tus `react-inteview-quiz`, asegúrate de leer todas las directrices. Si tienes alguna duda sobre la guía de contribución, no dudes en exponerla claramente en un issue.

## Contribuyendo
### Colaborador

¡Estamos muy contentos de que consideres aportar con tu conocimiento y codigo! Siendo uno de nuestros contribuidores, aceptas y confirmas que:
- Has hecho tu trabajo - el plagio no está permitido.
    - Cualquier trabajo plagiado no será fusionado.
    - Si el codigo es tomado de otro repositorio, se debe dar crédito al autor original.
- Su trabajo será distribuido bajo licencia GNU una vez que su `pull request` sea fusionada.
- Su trabajo enviado debe cumplir con nuestros estilos y estándares.

**Las nuevas implementaciones** son bienvenidas. Por ejemplo, nuevas soluciones a un problema, diferentes representaciones de estilos o implementaciones ams eficientes de librerias.

La mejora de los comentarios y la realización de pruebas adecuadas también son bienvenidas.

### Contribucion
Apreciamos cualquier contribución, desde la corrección de errores gramaticales hasta el cambio en estilos. Por favor, lee esta sección si vas a contribuir con tu trabajo.


Si envías un `pull request` que resuelve un problema abierto, por favor ayúdanos a mantener nuestra lista de problemas pequeña añadiendo `fixes: #{$ISSUE_NO}` a tu `commit`. GitHub utilizará esta etiqueta para cerrar automáticamente la incidencia si su PR se fusiona.

#### Convención de nomenclatura de 

- Los nombres de los archivos deben utilizar el estilo UpperCamelCase (PascalCase).
- No debe haber espacios en los nombres de los archivos.
- **Ejemplo:** `UserProfile.js` está permitido pero `userprofile.js`,`Userprofile.js`,`user-Profile.js`,`userProfile.js` no lo están.

#### Sistema de módulos
Utilizamos el sistema ES Module, que aporta un sistema de módulos oficial y estandarizado a JavaScript.

A grandes rasgos, significa que tendrás que utilizar declaraciones `export` e `import` en lugar de `module.exports` y `require()`.

#### Probando
Asegúrese de que su código funciona. ¿Cuándo fue la última vez que hiciste un cambio en el código, tu construcción falló y la mitad de tu aplicación dejó de funcionar? La mía fue la semana pasada. Escribir pruebas para nuestros algoritmos nos ayudará a asegurar que las implementaciones son herméticas incluso después de múltiples correcciones y cambios de código.

Utilizamos Jest para ejecutar pruebas unitarias en nuestros componentes. Proporciona una manera muy legible y expresiva para estructurar su código de prueba.

Se aconseja que el archivo del algoritmo (módulo) no contenga ningún código "vivo", sino que sólo exporte la(s) función(es) necesaria(s) para ejecutar el algoritmo. Su código de prueba puede importar esas funciones, llamarlas con los parámetros adecuados e inspeccionar el resultado. Ejemplo: [RatInAMaze.test.js](https://github.com/TheAlgorithms/JavaScript/blob/master/Backtracking/tests/RatInAMaze.test.js).

Por favor, absténgase de utilizar la consola en su implementación Y código de prueba.

Primero debes instalar todas las dependencias usando

```bash
npm install
```
Puedes (¡y deberías!) ejecutar todas las pruebas localmente antes de confirmar los cambios:
```bash
npm test
```
Si quieres ahorrar algo de tiempo y sólo ejecutar una prueba específica:
```bash
# Esto ejecutará cualquier archivo de prueba cuyo nombre contenga "koch" (no es necesario especificar la ruta de la carpeta)
npm test -- koch
```
También hemos preparado un script de ayuda que ejecuta las pruebas sólo para los archivos modificados:
```bash
npm run test-changed
```
Esto ejecutará todas las pruebas y vigilará los archivos fuente y de prueba en busca de cambios. Cuando se realice un cambio, las pruebas se ejecutarán de nuevo.
#### Formato de los `commit`
- Es preferible utilizar el siguiente formato: `[<emoji type> <type>](<issue number>): descripcion brebe`. Si es necesario, ponga cualquier información extra en la descripción.
- Para los emojis usar la lista [emojis de gitmoji](https://gitmoji.dev).

- Los tipos de commit incluyen (pero no se limitan a):
    - docs: Cambios sólo en la documentación
    - feat: Una nueva característica
    - fix: Una corrección de errores
    - testing: Añadir o arreglar pruebas
- **Ejemplos:**
    - `[✨ feat]`: añadir el algoritmo quicksort
    - `[🐛 fix](#10)`: mensaje de error incorrecto
    - `[📝 docs]`: añadir directrices de contribución
    - `[✅ test]`: añadir test para el algoritmo quicksort

#### Estilo de codificación
Para maximizar la legibilidad y la corrección de nuestro código, requerimos que los nuevos envíos sigan el estilo estándar de JavaScript/Typescript.

Antes de enviar el código, ejecute:
```bash
npm run style
```
para aplicar el estilo de codificación (en los casos en que pueda hacerse automáticamente). Si se muestra un error, por favor, averigüe qué es lo que está mal, arréglelo y ejecute standard de nuevo.

Algunas (pero no todas) de las cosas a tener en cuenta:

- Utilice camelCase con el carácter inicial en minúscula para los nombres de los identificadores (variables y funciones).
- Los nombres comienzan con una letra minuscula.
- Siga la indentación del código: Utilice siempre 2 espacios para la sangría de los bloques de código.
- Asegurese de que su código no contenga espacios en blanco innecesarios.
- No olvide que toda declaración debe terminar con un punto y coma.
- Siempre use los types de TypeScript para las variables y funciones. No utilice `any` o `unknow` a menos que sea absolutamente necesario.
```typescript
function sumOfArray(arrayOfNumbers: number[]): number {
  let suma: number = 0

  for (let i: numver = 0; i < arrayOfNumbers.length; i++) {
    suma += arrayOfNumbers[i]
  }
  return suma
```
- Evite el uso de variables globales y evite `==`.
- Utiliza `let` en lugar de `var`.
- Por favor, absténgase de utilizar `console.log` o cualquier otro método de consola cuando envies tu PR (Si los usas para debuggear eliminalos antes de realizar tu PR).
- No utilices en absoluto `alert`.
- Recomendamos encarecidamente el uso de ECMAScript 6.
- Evite importar bibliotecas externas para afunciones basicas. Sólo utilice esas bibliotecas que ya tengamos implementadas en caso de ser asi.
- Y lo más importante:
    - Sé coherente en el uso de estas directrices cuando envíes tu proyecto.
    - ¡Feliz coding!

Esta guía está basada en [Javascript Contributing](https://github.com/TheAlgorithms/JavaScript/blob/master/CONTRIBUTING.md) y fue traducida y editada por [Bryan Herrera](https://github.com/Bryan-Herrera-DEV)