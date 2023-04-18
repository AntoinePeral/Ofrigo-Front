import{
       FILTER_INGREDIENT,
       UPDATEFILTERLIST,
       RESETFILTERLIST,
       REMOVEANINGREDIENTFROMLIST,
       SAVE_INGREDIENTS,
} from "./action";

const initialState = {
  
  ingredientList: [   

  ],

  listFilter: [
    
    "Farine",
    "Levure chimique",
    "Beurre",
    "Banane",
    "Chocolat",
    "Cardamome",
    "Cassonade",
    "Oeuf",
    "Lait",
    "Sel",
    "Sucre en poudre",
    "Grand-marnier ou de rhum",
    "Pralin",
    "Glace vanille",
    "Pâte brisée",
    "Crème fraîche",
    "Lardons",
    "Poivre",
    "Muscade",
    "Fond de veau",
    "Comté",
    "Maïzena",
    "Bar",
    "Chorizo",
    "Chapelure",
    "Carotte",
    "Courgette",
    "Cumin",
    "Patate douce", 
    "Echalotes",
    "Ail",
    "Crème coco",
    "Pâte de curry rouge",
    "Concentré de tomate",
    "Citron vertes",
    "Piment",
    "Basilic",
    "Oignon",
    "Huile d'olive",
    "Lentilles vertes",
    "Salade",
    "Pains hamburger",
    "Ketchup",
    "Mayonnaise",
    "Curry",
    "Cube de bouillon de poule",
    "Laurier",
    "Potimarron",
    "Pomme de terre",
    "Poivron",
    "Tomate",
    "Safran",
    "Riz",
    "Filet de poulet",
    "Calamar",
    "Moule",
    "Crevette",
    "Bouillon de volaille",
    "Melon",
    "Thym",
    "Eau",
    "Feta",
    "Jambon cru",
    "Jus de citron",
    "Moutarde",
    "Cheddar",
    "Bière brune",
    "Pain de campagne",
    "Jambon blanc",
    "Chocolat noir",
    "Sucre semoule",
    "Fromage ail et fines herbes",
    "Fajitas",
    "Tomate pelée",
    "Penne",
    "Herbe de provence",
  
  ],

  proposedIngredient: [

  ],

 

};

function reducerSearch(state = initialState, action) {
  switch (action.type) {
    default:
      case FILTER_INGREDIENT:
      
        return{...state,
          listFilter: action.listFilter,
          
        }
      
      case UPDATEFILTERLIST:

        return{...state,
          proposedIngredient: action.proposedIngredient
        };

      case RESETFILTERLIST:
        return{...state,
          proposedIngredient: ""
        };

      case REMOVEANINGREDIENTFROMLIST:
        return{...state,
          proposedIngredient: action.proposedIngredient
        };

      case SAVE_INGREDIENTS:
        return{...state,
          ingredientList: action.ingredients
        };
  }
}

export default reducerSearch;
