import React from "react";

interface Iprops {
  page: number;
  maxPages: number;
  onClickReducer: () => void
  onClickIncreaser: () => void
  setPageNumber: React.Dispatch<React.SetStateAction<number>>
}


const PaginationComp: React.FC<Iprops> = (Props: Iprops) => {
  let pages = [];

  for (let _i = 1; _i <= Props.maxPages; _i++) {
    pages.push(_i);
  }
  console.log(pages);
  return (
    <section>
      <div>
        <ul>
          <button onClick={Props.onClickReducer}>Prev</button>
          {pages.map((page,key) => (
            <li key={key} onClick={()=>Props.setPageNumber(page)}>{page}</li>
          ))}
          <button onClick={Props.onClickIncreaser}>Next</button>
        </ul>
      </div>
    </section>
  );
};

export default PaginationComp;
