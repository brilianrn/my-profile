import React from 'react';
import { useSelector } from 'react-redux';
import { MyPortofolios } from '../components';

export default function Portfolio() {
  const portos = useSelector((state) => state.myPortofolios.myPortofolios);

  return (
    <div className="container" id="text-portfolio">
      <p class="card-title text h5">how about my portfolio...</p>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {portos?.map((porto) => {
          return (
            <MyPortofolios porto={porto} key={porto.id + " - " + porto.title} />
          )
        })}
      </div>
    </div>
  )
}
