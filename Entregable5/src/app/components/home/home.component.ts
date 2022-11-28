import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { retry } from 'rxjs';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  personasArray : Persona[] = [
    {id: 1,nombre: "Alejandra",apellidos: "Cortes", edad: 21, dni:"987456321K",cumpleannos: new Date("2003-03-15"),colorFavorito:"amarillo",sexo:"mujer"},
    {id: 2,nombre: "David",apellidos: "Diaz", edad: 20, dni:"123456789F",cumpleannos: new Date("1998-02-10"),colorFavorito:"rojo",sexo:"hombre"} 
   ]; 

  selectedPersona : Persona = new Persona();
  selectBoolean : boolean = false;
  usercorrecto : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  addOrEdit(){

  
    for(let i = 0; i<this.personasArray.length ; i++){
     
      if(this.selectedPersona.id !== this.personasArray[i].id){
        this.selectedPersona.id = this.personasArray.length + 1;
         console.log(this.selectedPersona.nombre.length)
         this.usercorrecto = this.comprobarDatos();
         if(this.usercorrecto){
          this.personasArray.push(this.selectedPersona);
          this.selectedPersona = new Persona();
         }
       
      }
    }
      

      console.log(this.personasArray)
  }
  editPersona(persona : Persona){
    this.selectedPersona = persona;
    this.selectBoolean = true;
    
  }
  edit(){
    for(let i = 0; i<this.personasArray.length ; i++){
      if(this.selectedPersona.id === this.personasArray[i].id){
        console.log("existe")
        alert("Datos modificados")
        this.selectedPersona = new Persona();
        break
      }
    
    }

  }
  delete(name : string){
    if(confirm("¿Estas seguro de eliminar a " +name + " ?")){
    
      this.personasArray = this.personasArray.filter(x => x != this.selectedPersona);
      this.selectedPersona = new Persona();
      console.log(this.personasArray)
    }
  
  
  }
  comprobarDatos() : boolean{
  console.log(this.selectedPersona.dni.length);
  if(this.selectedPersona.dni.length === 9 ){
  
    if(this.selectedPersona.nombre.length > 3 && this.selectedPersona.apellidos.length > 3 && this.selectedPersona.colorFavorito.length > 3){
      
      if(this.selectedPersona.edad >= 0 && this.selectedPersona.edad <=125){
   
        this.usercorrecto = true
        
      }else{
        alert("La edad no es correcta")
        this.usercorrecto = false;
      }
      
    }else{
      alert("Los campos nombre, apellidos y color deben tener mas de 3 caracteres")
      this.usercorrecto = false;
    }
  }else{
    alert("El DNI debe tener 9 digitos")
    this.usercorrecto = false;
  }
    
    return this.usercorrecto;
  }
 
}
