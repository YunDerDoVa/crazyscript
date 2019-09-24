# AdenRain

## Get Started

`var rain = new Rain('rainBox');`

`rain.init();`

`rain.loop();`

## Methods

### Rain(nodeId)

-  nodeId (str) : id de la fenêtre dans laquelle la pluie doit tomber

*( Attention la fenêtre ne dois pas être en position "fixed" ou "absolute" )*


## Variables

Ex : `rain.density = 42;`

-  density (int) : densité moyenne de goutte de pluie dans la fenêtre
-  gravity (int) : gravité, détermine la vitesse à laquelle les gouttes tombent
-  colorSet ([str]) : couleurs des gouttes (déterminées aléatoirement). Si vous souhaitez qu'une couleur soit plus fréquente qu'une autre, veuillez l'écrire plusieurs fois
-  xMin (int) : limite gauche (en % de la fenêtre) à laquelle la pluie s'arrête de tomber
-  xMax (int) : limite droite (en % de la fenêtre) à laquelle la pluie s'arrête de tomber
-  deep (int) : niveau d'effet de profondeur
