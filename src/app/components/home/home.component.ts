import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  proyectos = [
    {
      nombre: "MOVIMIENTO PARABÓLICO",
      pagina: "https://1234566778899.github.io/movimiento-parabolico/",
      img: "../../../assets/parabolico.png",
      codigo: "https://github.com/1234566778899/movimiento-parabolico.git"
    },
    {
      nombre: "GAUS-JORDAN",
      pagina: "https://1234566778899.github.io/gaus-jordan/",
      img: "../../../assets/gaus.png",
      codigo: "https://github.com/1234566778899/gaus-jordan.git"
    },
    {
      nombre: "SUMARIZACIÓN",
      pagina: "https://1234566778899.github.io/sumarizacion/",
      img: "../../../assets/summary.png",
      codigo: "https://github.com/1234566778899/sumarizacion.git"
    },
    {
      nombre: "COMANDOS ACL",
      pagina: "https://1234566778899.github.io/comandos-acl-redes/",
      img: "../../../assets/acl.png",
      codigo: "https://github.com/1234566778899/comandos-acl-redes.git"
    },
    {
      nombre: "GENERAR VLSM",
      pagina: "https://1234566778899.github.io/REDES-APP-VLSM/",
      img: "../../../assets/vlsm.png",
      codigo: "https://github.com/1234566778899/REDES-APP-VLSM.git"
    },
    {
      nombre: "CAPITALES DEL MUNDO",
      pagina: "https://1234566778899.github.io/capitales/",
      img: "../../../assets/capitales.png",
      codigo: "https://github.com/1234566778899/capitales.git"
    },
    {
      nombre: "PLANIFICACIÓN DE PROCESOS",
      pagina: "https://1234566778899.github.io/Algortimo_planificacion/",
      img: "../../../assets/plani.png",
      codigo: "https://github.com/1234566778899/Algortimo_planificacion.git"
    },
    {
      nombre: "MATE COMPUTACIONAL",
      pagina: "https://1234566778899.github.io/calcMath/",
      img: "../../../assets/compu.png",
      codigo: "https://github.com/1234566778899/calcMath.git"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
