import { Component } from '@angular/core';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent {
  "login": string;
  //"password': string;
  "cep": string;
  "logradouro": string;
  "bairro": string;
  "cidade": string;
  "estado": string;
  submitted = false;

  saveForm() {
    // Implement your save form logic here
    this.submitted = true;
  }

  resetForm() {
    // Implement your reset form logic here
    this.submitted = false;
    this.login = '';
    //this.password = "";
    this.cep = '';
    this.logradouro = '';
    this.bairro = '';
    this.cidade = '';
    this.estado = '';
  }
}