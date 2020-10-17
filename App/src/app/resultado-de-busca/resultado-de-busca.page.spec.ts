import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultadoDeBuscaPage } from './resultado-de-busca.page';

describe('ResultadoDeBuscaPage', () => {
  let component: ResultadoDeBuscaPage;
  let fixture: ComponentFixture<ResultadoDeBuscaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoDeBuscaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultadoDeBuscaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
