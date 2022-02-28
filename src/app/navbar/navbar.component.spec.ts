import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { IEvent } from '../events/shared/event.model';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  const mockAuth = jasmine.createSpyObj('mockAuth', ['logout'])
  const mockEventService = jasmine.createSpyObj('mockEventService', ['getEvents', 'searchSessions'])
  const mockRouter = jasmine.createSpyObj('mockRouter', ['navigate'])

  beforeEach(() => {
    mockEventService.getEvents.and.returnValue(of(<IEvent[]>{}))
    component = new NavbarComponent(mockAuth, mockEventService, mockRouter)
  })

  
  describe('Create NavbarComponent instance', () => {
    it('should create', () => {
    expect(component).toBeDefined();
  });
  })
  

  

  
});
