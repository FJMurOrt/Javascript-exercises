import { Routes } from '@angular/router';
import { LibrosComponent } from './libros/libros.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { NovelaComponent } from './categorias/novela/novela.component';
import { CienciaComponent } from './categorias/ciencia/ciencia.component';
import { LibroDetalleComponent } from './libro-detalle/libro-detalle.component';

export const routes: Routes = [
    {
        path: "",
        component: LibrosComponent
    },
    {
        path: "libros",
        component: LibrosComponent
    },
    {
        path: "libros/:id",
        component: LibroDetalleComponent
    },
    {
        path: "categorias",
        component: CategoriasComponent,
        children: [
            {
                path: "novela",
                component: NovelaComponent
            },
            {
                path: "ciencia",
                component: CienciaComponent
            }
        ]
    }
];
