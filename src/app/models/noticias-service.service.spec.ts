import { TestBed, inject } from '@angular/core/testing';

import { NoticiasServiceService } from './noticias-service.service';

describe('NoticiasServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoticiasServiceService]
    });
  });

  it('should be created', inject([NoticiasServiceService], (service: NoticiasServiceService) => {
    expect(service).toBeTruthy();
  }));
});
