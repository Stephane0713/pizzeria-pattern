// Cette class doit rester privée.
class PizzaBuilder {
  private pizza: Pizza;

  public constructor() {
    this.pizza = new Pizza(this);
  }

  // Attributs pour construire une Pizza

  // TODO: Créer des méthodes pour définir chaque attribut du Builder
  // Chaque méthode doit renvoyer l'instance du Builder pour permettre le chaînage des méthodes

  public build(): Pizza {
    // TODO: Utiliser les attributs du Builder pour créer une nouvelle Pizza
    // Assurez-vous de valider les attributs avant de créer la Pizza

    return this.pizza;
  }
}

export class Pizza {
  public constructor(builder: PizzaBuilder) {
    // TODO: Assigner les attributs de la pizza
  }

  public static PizzaBuilder(): PizzaBuilder {
    return new PizzaBuilder();
  }

  // Attributs (pâte, sauce, garnitures, etc.)
  // TODO: Créer des setters pour tous les attributs afin de pouvoir les modifier via le builder
}

// Exemple d'utilisation du builder (à compléter par les étudiants)
// Pizza myPizza = new Pizza.PizzaBuilder().setPate(...).setSauce(...).build();
