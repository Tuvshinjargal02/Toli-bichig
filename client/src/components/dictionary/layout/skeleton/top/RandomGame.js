import React from 'react';
import Nerd from '../../../../../img/nerd.png';

const RandomGame = () => {
  return (
    <div id='random-game' className='d-flex justify-content-center align-items-center'>
      <div className='nerd'>
        <img src={Nerd} alt='nerd' />
      </div>
      <div id='carouselExampleCaptions' className='carousel slide' data-ride='carousel'>
        <ol className='carousel-indicators'>
          <li data-target='#carouselExampleCaptions' data-slide-to='0' className='active'></li>
          <li data-target='#carouselExampleCaptions' data-slide-to='1'></li>
          <li data-target='#carouselExampleCaptions' data-slide-to='2'></li>
          <li data-target='#carouselExampleCaptions' data-slide-to='3'></li>
        </ol>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <div className='carousel-caption d-none d-md-block'>
              <h3 className='text-silver'>Санах ойн карт</h3>
              <p className='text-silver'>
                Үгээ уншиж, орчуулж, үгийн орчуулгыг зөв бодсон эсэхээ картны нөгөө талаас хараарай.
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='carousel-caption d-none d-md-block'>
              <h3 className='text-silver'>Дүүжлүүр</h3>
              <p className='text-silver'>
                Алдаа гаргахгүйгээр хөөрхий залууг авраарай.
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='carousel-caption d-none d-md-block'>
              <h3 className='text-silver'>Хурдан орчуулга</h3>
              <p className='text-silver'>
                Өгөгдсөн хугацаанд багтааж үгсээ орчуулаарай.
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='carousel-caption d-none d-md-block'>
              <h3 className='text-silver'>Сонсож бич</h3>
              <p className='text-silver'>
                Сонсох чадвараа ашиглаж зөв орчуулгыг бичнэ үү.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomGame;
