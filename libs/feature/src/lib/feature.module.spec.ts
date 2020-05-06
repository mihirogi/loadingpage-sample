import { async, TestBed } from '@angular/core/testing';
import { FeatureModule } from './feature.module';

describe('FeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureModule).toBeDefined();
  });
});
