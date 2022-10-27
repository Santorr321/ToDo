import React from 'react';

function ProgressBar() {
  return (
    <section className='progressbar'>
    <p><span className='%'>35%</span> Completed</p>
    <progress value='5' max='10' className='bar'></progress>
    </section>
  )
};

export {ProgressBar};