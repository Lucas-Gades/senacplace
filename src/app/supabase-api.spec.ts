import { TestBed } from '@angular/core/testing';

import { SupabaseApi } from './supabase-api';

describe('SupabaseApi', () => {
  let service: SupabaseApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupabaseApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
