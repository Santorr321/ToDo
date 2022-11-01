import React from 'react';

function ProgressBar({percentage}) {
  return (
    <section className='progressbar'>
    <p><span className='%'>{percentage}%</span> Completed</p>
    <progress value={percentage} max='100' className='bar'></progress>
    </section>
  )
};

export {ProgressBar};