import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatNegociacaoPage } from './chat-negociacao.page';

describe('ChatNegociacaoPage', () => {
  let component: ChatNegociacaoPage;
  let fixture: ComponentFixture<ChatNegociacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatNegociacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatNegociacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
