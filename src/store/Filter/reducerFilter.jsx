import{
  TOGGLE_FILTER_OPEN,
  RESET_NUMBER_FILTER,
  UPDATE_FILTER,
  SAVE_TAGS,
} from "./action"

const initialState = {
  isFilterOpen: false,
  difficulty:"",
  time:"",
  grades:"",
  numberFilter: 0,
  ingredient : [

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
  tags: [],
};

function reducerFilter(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FILTER_OPEN:
      return { ...state, 
              isFilterOpen: !state.isFilterOpen };

    case RESET_NUMBER_FILTER:
      return { ...state,
              numberFilter: 0,
              difficulty:"",
              time:"",
              grades:"",
            };

    case UPDATE_FILTER:
      const newState = { ...state, [action.filterTag]: action.filterValue };
      if (action.filterTag && state[action.filterTag] === '') {
        return { ...newState, numberFilter: state.numberFilter + 1 };
      }
      return newState;

    case SAVE_TAGS:
      return{...state,
        tags: action.tags
      };

    default:
      return state;
  }
}

export default reducerFilter;
