import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  constructor() { }
  listaNotas = [{
    id:1,
    titulo: "Análisis en profundidad de los desarrolladores de SMITE 2: Hécate",
    fecha: "vie, 22 de marzo",
    descripcion: "¡El Tártaro te llama! Únete al equipo para conocer todos los detalles sobre la creación de la primera diosa diseñada específicamente en SMITE 2: ¡Hécate!",
    foto: "assets/img/img1.jpg"
  },
  {
    id:2,
    titulo: "Tormenta de gemas del aniversario",
    fecha: "dom, 24 de marzo",
    descripcion: "¡Este fin de semana, hay una tormenta de gemas! Consigue 3 primeras victorias del día para conseguir 50 gemas gratis cada día. ¡Eso es un total de 150 gemas!",
    foto: "assets/img/image2.png"
  },
  {
    id:3,
    titulo: "Backpack Battles Patch 0.9.2",
    fecha: "vie, 22 de marzo",
    descripcion: "It's been two weeks since Backpack Battles released into Early Access. This week, we overhauled the title screen, it's still work-in-progress but we think it’s cleaner already!",
    foto: "assets/img/image3.png"
  },
  {
    id:4,
    titulo: "40 New User-Created Camouflages in the Alpha Strike Trophy!",
    fecha: "vie, 22 de marzo",
    descripcion: "Following the release of the Alpha Strike major update comes the corresponding trophy, which includes 40 custom camouflages from the Live.WT platform in the form of coupons!",
    foto: "assets/img/image4.png"
  },
  {
    id:5,
    titulo: "Análisis en profundidad de los desarrolladores de SMITE 2: Hécate",
    fecha: "vie, 22 de marzo",
    descripcion: "¡El Tártaro te llama! Únete al equipo para conocer todos los detalles sobre la creación de la primera diosa diseñada específicamente en SMITE 2: ¡Hécate!",
    foto: "assets/img/img1.jpg"
  },
  {
    id:6,
    titulo: "Tormenta de gemas del aniversario",
    fecha: "dom, 24 de marzo",
    descripcion: "¡Este fin de semana, hay una tormenta de gemas! Consigue 3 primeras victorias del día para conseguir 50 gemas gratis cada día. ¡Eso es un total de 150 gemas!",
    foto: "assets/img/image2.png"
  },
  {
    id:7,
    titulo: "Backpack Battles Patch 0.9.2",
    fecha: "vie, 22 de marzo",
    descripcion: "It's been two weeks since Backpack Battles released into Early Access. This week, we overhauled the title screen, it's still work-in-progress but we think it’s cleaner already!",
    foto: "assets/img/image3.png"
  },
  {
    id:8,
    titulo: "40 New User-Created Camouflages in the Alpha Strike Trophy!",
    fecha: "vie, 22 de marzo",
    descripcion: "Following the release of the Alpha Strike major update comes the corresponding trophy, which includes 40 custom camouflages from the Live.WT platform in the form of coupons!",
    foto: "assets/img/image4.png"
  }]
}
