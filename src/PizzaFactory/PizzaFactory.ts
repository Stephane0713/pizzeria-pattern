export interface Pizza {
  prepare: () => void;
  // autres méthodes (cuire, emballer, etc.)
}

export class PizzaFromage implements Pizza {
  public prepare(): void {
    // Code de préparation spécifique à PizzaFromage
  }
  // autres méthodes (cuire, emballer, etc.)
}

export class PizzaVegetarienne implements Pizza {
  public prepare(): void {
    // Code de préparation spécifique à PizzaVegetarienne
  }
  // autres méthodes (cuire, emballer, etc.)
}

export default class PizzaFactory {
  public createPizza(type: string): Pizza {
    // TODO: Implémenter la logique de création de pizzas en fonction du type fourni
    return { prepare() {} };
  }
}
