import React from 'react';

function ProgressBar() {
  return (
    <section className='progressbar'>
    <p><span className='%'>35%</span> Completed</p>
    <div className='bar'></div>
    </section>
  )
};

export {ProgressBar};