import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AuthService } from './user/auth.service';

describe('AppComponent', () => {
  let mockAuthService: any,
      fixture: ComponentFixture<AppComponent>,
      component: AppComponent,
      element: HTMLElement,
      debugEl: DebugElement

  beforeEach(async () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    mockAuthService = {checkAuthStatus: ()=>{}}
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: AuthService, useValue: mockAuthService}
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    debugEl = fixture.debugElement
    component.ngOnInit()
  });

  describe('initial display', () => {
    it('should create the app', () => {
        
      expect(component).toBeTruthy();
    });

    it('should have title Ng-fundamentals', () => {
      
      expect(component.title).toContain('Ng-fundamentals')
    })

    it('should render title', () => {
      
      fixture.detectChanges()
      expect(element.querySelector('h1')?.textContent).toContain(component.title)
      // the debugelement is alternatively used
      // expect(debugEl.nativeElement.querySelector('h1').textContent).toContain(component.title)
    })
  })

});
