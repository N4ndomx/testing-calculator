import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiComponent } from './ui.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Ui Addition - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call addition method', () => {
    // Arrange
    let result = 0;
    component.operator1 = 2;
    component.operator2 = 2;

    // Act
    component.addition();
    result = component.result;

    // Assert
    expect(result).toBe(4);
  });



  it('Should set operator1 model through ngModel', async () => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act 
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator1).toEqual(3.1416);
  });

  it('Should set operator2 model through ngModel', async () => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator2).toEqual(2.71);
  });


  it('should add operator1 and operator2 when i click the addition button ', () => {
    // Arrange 
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let additionButton = fixture.debugElement.query(By.css('.addition-button'));

    // Act
    additionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(7.5);

  });

  it('Should render sum in result div', () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 6;

    // Act
    component.addition();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('11');

  });

  //TODO: Factorial 
  it('Should call factorial method', () => {
    // Arrange
    let resultado = 0
    component.operator1 = 4
    // Act
    component.factorial()
    resultado = component.result
    // Assert
    expect(resultado).toBe(24)
  });

  it('should add operator1 when i click the factorial button ', () => {
    // Arrange 
    component.operator1 = 4;

    let additionButton = fixture.debugElement.query(By.css('.factorial-button'));

    // Act
    additionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(24);

  });

  it('Should render factorial in result div', () => {
    // Arrange
    component.operator1 = 4;

    // Act
    component.factorial();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('24');

  });


  //TODO: Radianes
  it('Should call radianes method', () => {
    // Arrange
    let resultado = 0
    component.operator1 = 45
    // Act
    component.radianes()
    resultado = component.result
    // Assert
    expect(resultado).toBe(0.7853981633974483)
  });

  it('should add operator1 when i click the radianes button ', () => {
    // Arrange 
    component.operator1 = 45;

    let additionButton = fixture.debugElement.query(By.css('.radianes-button'));

    // Act
    additionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(0.7853981633974483);

  });

  it('Should render radianes in result div', () => {
    // Arrange
    component.operator1 = 45;

    // Act
    component.radianes();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('0.7853981633974483');

  });

  //TODO: Seno
  it('Should call seno method', () => {
    // Arrange
    let resultado = 0
    component.operator1 = 30
    // Act
    component.seno()
    resultado = component.result
    // Assert
    expect(resultado).toBe(0.49999999999999994)
  });

  it('should add operator1 when i click the seno button ', () => {
    // Arrange 
    component.operator1 = 30;

    let additionButton = fixture.debugElement.query(By.css('.seno-button'));

    // Act
    additionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(0.49999999999999994);

  });

  it('Should render seno in result div', () => {
    // Arrange
    component.operator1 = 30;

    // Act
    component.seno();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('0.49999999999999994');

  });

  //TODO: Coseno
  xit('Should call coseno method', () => {
    // Arrange
    let resultado = 0
    component.operator1 = 30
    // Act
    component.coseno()
    resultado = component.result
    // Assert
    expect(resultado).toBe(0.8660254037844387)
  });

  xit('should add operator1 when i click the coseno button ', () => {
    // Arrange 
    component.operator1 = 30;

    let additionButton = fixture.debugElement.query(By.css('.coseno-button'));

    // Act
    additionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(0.8660254037844387);

  });

  xit('Should render coseno in result div', () => {
    // Arrange
    component.operator1 = 30;

    // Act
    component.coseno();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('0.8660254037844387');

  });




});

