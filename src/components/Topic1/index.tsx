import './style.css';

const Topic1 = () => {
  return (
    <div className='container'>
      <div className='subcontainer'>
        <div className='item'>
            <img src="flower1.jpg" alt="image 1" />
        </div>
        <div className='item'>
        <   img src="flower2.jpg" alt="image 2" />
        </div>
        <div className='item'>
        <   img src="flower3.jpg" alt="image 3" />
        </div>
      </div>
      <div className='subcontainer'>
        <div className='item'>
        <   img src="flower3.jpg" alt="image 3" />
        </div>
        <div className='item'>
        <   img src="flower2.jpg" alt="image 2" />
        </div>
        <div className='item'>
        <   img src="flower1.jpg" alt="image 1" />
        </div>
      </div>
      <div className='subcontainer'>
        <div className='item'>
        <   img src="flower2.jpg" alt="image 2" />
        </div>
        <div className='item'>
        <   img src="flower1.jpg" alt="image 1" />
        </div>
        <div className='item'>
        <   img src="flower3.jpg" alt="image 3" />
        </div>
      </div>
    </div>
  );
};

export default Topic1;
