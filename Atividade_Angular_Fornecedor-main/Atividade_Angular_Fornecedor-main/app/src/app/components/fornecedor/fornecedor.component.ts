import { Component } from '@angular/core';
import { FornecedorService } from '../../services/fornecedor.service';
import { Fornecedor } from '../../interfaces/Fornecedor';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-fornecedor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  styleUrl: './fornecedor.component.css',
  templateUrl: './fornecedor.component.html'
 
})
export class FornecedorComponent {
    fornecedores:Fornecedor[] = [];  
    fornecedorForm: FormGroup = new FormGroup({});
    constructor(private fornecedorService:FornecedorService, private formbuilder: FormBuilder) {
    this.fornecedorForm = this.formbuilder.group({

      nome:['', Validators.required],
      usuario:['', Validators.required],
      senha:['', Validators.required],
      cargo:['', Validators.required],
      video:['', Validators.required]
 
    })

  }

  listar():void{
      this.fornecedorService.listar().subscribe((listaFornecedores) => (this.fornecedores = listaFornecedores));
  }

  ngOnInit():void{
    this.listar();
  }


  generateRandomString(length: number): string  {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
   } 

 

  inserir(){
    if(this.fornecedorForm.valid){
      const fornecedorNovo:Fornecedor = {
        nome: this.fornecedorForm.value.nome,
        usuario:this.fornecedorForm.value.usuario,
        senha:this.fornecedorForm.value.senha,
        cargo:this.fornecedorForm.value.cargo,
        video:this.fornecedorForm.value.video,
        id: this.generateRandomString(6)
      }
      this.fornecedorForm.reset()
      this.fornecedores.push(fornecedorNovo)
      this.fornecedorService.adicionar(fornecedorNovo).subscribe()
      alert('Fornecedor cadastrado com sucesso!')
  
    }
   }

   remover(id:string):void{
    this.fornecedores = this.fornecedores.filter((c) => c.id !==id)
    this.fornecedorService.remover(id).subscribe()
    alert('Fornecedor removido com sucesso!')
   }

}
