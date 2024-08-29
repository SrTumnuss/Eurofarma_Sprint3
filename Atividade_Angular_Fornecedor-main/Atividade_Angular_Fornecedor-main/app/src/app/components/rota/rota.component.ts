import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FornecedorService } from '../../services/fornecedor.service';
import { Fornecedor } from '../../interfaces/Fornecedor';


@Component({
  selector: 'app-rota',
  standalone: true,
  imports: [],
  templateUrl: './rota.component.html',
  styleUrl: './rota.component.css'
})

export class RotaComponent {

  fornecedores:Fornecedor[] = [];  
  constructor(private route: ActivatedRoute, private fornecedorService: FornecedorService){

    // this.listar()

  }

  id?:string;
  
//   listar(): void {
//     this.id = this.route.snapshot.paramMap.get('id') ?? '';
//     this.fornecedores = this.fornecedores.filter((c) => c.id !== this.id);
//     this.fornecedorService.video(this.id).subscribe((listaFornecedores) => {
//         this.fornecedores = listaFornecedores;
//     });
// }

 


}
