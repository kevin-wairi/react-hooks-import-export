import React from "react";
import howManyParks from "./parks/howManyParks";
import { trees, wildlife } from './parks/RockyMountain'
import MesaVerde from './parks/MesaVerde'

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  console.log(trees);
  wildlife();
  MesaVerde();

  return <h1>Colorado State Parks!</h1>;
}

export default ColoradoStateParks