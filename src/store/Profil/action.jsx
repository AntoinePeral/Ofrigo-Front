export const FETCH_PROFIL = "FETCH_PROFIL";
export const SAVE_PROFIL = "SAVE_PROFIL";


export const fetchProfil = () => ({ type: FETCH_PROFIL });

export const saveProfil = (profil) => ({ type: SAVE_PROFIL, profil });
