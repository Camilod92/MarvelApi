import { TestBed } from '@angular/core/testing';

import { PersonajesApiService } from './personajes-api.service';

describe('PersonajesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonajesApiService = TestBed.get(PersonajesApiService);
    expect(service).toBeTruthy();
  });
});
