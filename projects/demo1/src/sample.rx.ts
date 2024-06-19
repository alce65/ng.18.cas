import { BehaviorSubject, Observable, of, ReplaySubject, Subject } from "rxjs";

// **Cold**:
// - Comienza a emitir datos cuando se suscribe algún observador
// - Cada suscripción crea un **nuevo** flujo de datos
// - Corresponde al comportamiento por defecto de los **Observable**
// - **Unicast**: Cada suscripción crea un nuevo flujo de datos
// - **Finitos**: Emite un número finito de datos y luego se completa

const o = new Observable((observer) => {
  observer.next('Hola')
  observer.next('Mundo')
  observer.next(Math.random())
  observer.complete()
  observer.next('No se muestra')
})

const q = of('Hola', 'Mundo')

o.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.log(error),
  //complete: () => console.log('Completado')
})
q.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.log(error),
  complete: () => console.log('Completado')
})


o.subscribe({
  next: (value) => console.log("Otra vez", value),
  error: (error) => console.log(error),
  //complete: () => console.log('Completado')
})

// - **Hot**:
//   - Comienza a emitir datos al antes de que se suscriba ningún observador
//   - Cada suscripción **comparte** el mismo flujo de datos
//   - Corresponde al comportamiento de los **Subject** (Subject, ReplaySubject, BehaviorSubject, y AsyncSubject)
//   - **Multicast**: Cada suscripción comparte el mismo flujo de datos
//   - **Infinitos**: Emite un número infinito de datos.
//    En este caso es necesario des-suscribirse manualmente.

const s = new Subject()
const bs = new BehaviorSubject('Hola')
const rs = new ReplaySubject(2)



s.next('Hola')
s.next('Mundo')


const subscription = s.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.log(error),
  complete: () => console.log('Completado')
})

s.next('Hola')
s.next('Mundo')

subscription.unsubscribe()
