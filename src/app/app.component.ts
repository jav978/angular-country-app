import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReporteComponent } from "./components/reporte/reporte.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ReporteComponent,FormsModule]
})
export class AppComponent {
  title = 'countryApp';
}
