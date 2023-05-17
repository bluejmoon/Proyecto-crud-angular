import { Component } from '@angular/core';

@Component({
  selector: 'app-crudcomponent',
  templateUrl: './crudcomponent.component.html',
  styleUrls: ['./crudcomponent.component.scss']
})
export class CrudComponent {
  user = {
    usuario: '',
    correo: '',
    password: 0
  }

  usuarios = [
    {
      usuario: 'valen',
      correo: 'val@gmail.com',
      password: 12345
    },
    {
      usuario: 'juanes',
      correo: 'mondragon@gmail.com',
      password: 67890
    },
    {
      usuario: 'juanse',
      correo: 'duran@gmail.com',
      password: 13579
    },
    {
      usuario: 'juanda',
      correo: 'sanchez@gmail.com',
      password: 24680
    },
    {
      usuario: 'jhonathan',
      correo: 'jhonatan@gmail.com',
      password: 12457
    }
  ]

  mostrarRegistros(){
    return this.usuarios.length > 0;
  }

  borrarRegistro(usuario:string){
    for(let x=0; x<this.usuarios.length; x++)
    if(this.usuarios[x].usuario == usuario){
      this.usuarios.splice(x,1);
      return;
    }
  }
}
