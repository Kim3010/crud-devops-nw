import { Component } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent {

  tutorial: Tutorial = new Tutorial();
  submitted = false;
  cep: any;
  logradouro: any;
  cidade: any;
  estado:  any;
  login: any;
  password: any;
  bairro: any;
  description: any;

  constructor(private tutorialService: TutorialService) { }

  saveForm(): void {
    this.tutorialService.create(this.tutorial).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  resetForm(): void {
    this.submitted = false;
    this.tutorial = new Tutorial();
  }
}
