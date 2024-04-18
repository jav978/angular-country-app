import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import   carbone  from 'carbone';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-reporte',
  standalone: true,
  
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.scss'
})
export class ReporteComponent {

  datos = {
    nombre: 'Juan Pérez',
    edad: 30,
    ciudad: 'Madrid'
  };

  generarReporte() {

    const opciones = {
      convertTo: 'pdf'
    };

    const plantilla = './assets/template/odt/template.odt';

    carbone.render(plantilla, this.datos, opciones, (err, resultado) => {
      if (err) {
        console.error(err);
        return;
      }

      const blob = new Blob([resultado], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }
}