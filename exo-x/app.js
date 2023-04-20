class avion {
  constructor(marque, modele, longueur, nbPlace, reservoir, vitesse){
    this.marque = marque;
    this.modele = modele;
    this.longueur = longueur;
    this.nbPlace = nbPlace;
    this.reservoir = reservoir;
    this.vitesse = vitesse;
  }
}


//Ici, nous définissons une classe nommée "avion".
//à partir des arguments: marque, modele, longueur, nbPlace, reservoir, vitesse
//Chaque propriété est créée comme une propriété de l'objet en utilisant le mot-clé "this".


  // Get

  get marque() {
    return this._marque;
  }

  get modele() {
    return this._modele;
  }

  get longueur() {
    return this._longueur;
  }

  get nbPlace() {
    return this._nbPlace;
  }

  get reservoir() {
    return this._reservoir;
  }

  get vitesse() {
    return this._vitesse;
  }

  // Set

  set marque(value) {
    this._marque = value;
  }

  set modele(value) {
    this._modele = value;
  }

  set longueur(value) {
    this._longueur = value;
  }

  set nbPlace(value) {
    this._nbPlace = value;
  }

  set reservoir(value) {
    this._reservoir = value;
  }

  set vitesse(value) {
    this._vitesse = value;
  }


//set permet de lier une propriété d'un objet à une fonction qui sera appelée 
//à chaque tentative de modification de cette propriété.
//La plupart du temps, les set sont utilisés avec les accesseurs get afin de créer une pseudo-propriété.