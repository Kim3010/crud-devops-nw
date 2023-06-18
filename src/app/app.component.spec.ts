import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import axios from 'axios';

describe('AppComponent', () => {
  
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-16-firebase-crud'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-16-firebase-crud');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-16-firebase-crud app is running!');
  });
 
});


async function autocompleteCEP(cep: string): Promise<void> {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const { data } = response;

    if (data.erro) {
      console.log('CEP não encontrado.');
    } else {
      console.log('CEP encontrado!');
      console.log('CEP:', data.cep);
      console.log('Logradouro:', data.logradouro);
      console.log('Bairro:', data.bairro);
      console.log('Cidade:', data.localidade);
      console.log('Estado:', data.uf);
    }
  } catch (error) {
    console.error('Ocorreu um erro ao consultar o CEP:', error);
  }
}

// Exemplo de uso
const cep = '12345678'; // Insira o CEP desejado
autocompleteCEP(cep);

/**
 * constructor{
    zipCode: string = '';
    address: any;
  }
 *  buscarCEP() {
    if (this.zipCode.length === 8) {
      this.http.get(https://viacep.com.br/ws/${this.zipCode}/json/)
        .subscribe((dadosCep: any) => {
          this.address = dadosCep;
          this.person.street = this.address.logradouro;
          this.person.neighborhood = this.address.bairro;
          this.person.city = this.address.localidade;
          this.person.state = this.address.uf;
          console.log(dadosCep)
        });
    }
  }
 */