import React, { useEffect, useState } from "react";
import GridSlot from "./grid-slot";

const Grid = ({ grid, handleClick }) => {
  // <div className="column is-4">
  //   <div className="box m-1">
  //     <figure className="image is-square">
  //       <img src={x} alt="X" />
  //     </figure>
  //   </div>
  // </div>
  // <div className="column is-4">
  //   <div className="box m-1">
  //     <figure className="image is-square">
  //       <img src={o} alt="X" />
  //     </figure>
  //   </div>
  // </div>

  return (
    <div className="columns grid is-multiline is-gapless is-mobile">
      {!!grid && grid?.length > 0
        ? grid?.map((slot) => {
            return (
              <GridSlot
                occupant={slot.occupant}
                winningSlot={slot?.winningSlot}
                handleClick={handleClick}
                id={slot?.id}
                key={slot?.id}
              />
            );
          })
        : null}
    </div>
  );
};

export default Grid;
