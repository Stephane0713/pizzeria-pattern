import { describe, expect, test } from "vitest";
import { Pizza } from "./PizzaBuilder";

describe("PizzaBuilder", () => {
  describe("testBuildPizza", () => {
    // TODO: Tester la construction d'une pizza avec le builder
    test("", () => {
      const pizza: Pizza = Pizza.builder.build();

      expect(pizza).toBe("");
    });
  });

  describe("testBuildPizzaFluentInterface", () => {
    // TODO: Tester l'utilisation de l'interface fluide du builder
    test("", () => {
      expect("").toBe("");
    });
  });

  describe("testBuildPizzaEdgeCases", () => {
    // TODO: Tester les cas limites de la construction d'une pizza
    test("", () => {
      expect("").toBe("");
    });
  });
});
