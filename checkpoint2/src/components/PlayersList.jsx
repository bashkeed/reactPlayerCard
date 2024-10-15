import { Players } from "../data/players";
import Player from "./Player";

const PlayersList = () => {
  return (
    <div>
      {Players.map((player, index) =>(

         <Player key={index} {...player} />
       
      ))}
    </div>
  );
};
export default PlayersList;
