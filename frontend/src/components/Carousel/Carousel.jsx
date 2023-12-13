import './Carousel.css'
const Carousel = () => {

   return (
      <section className='flex justify-center relative z-50 w-full h-48 mt-12 overflow-hidden'>
         < img src="/assets/photos/img-01.png" className="pic01"/>
         < img src="/assets/photos/img-02.png" className="pic02"/>
         < img src="/assets/photos/img-03.png" className="pic03"/>
         < img src="/assets/photos/img-04.png" className="pic04"/>
         < img src="/assets/photos/img-05.png" className='pic05'/>
      </section>
   )
}

export default Carousel