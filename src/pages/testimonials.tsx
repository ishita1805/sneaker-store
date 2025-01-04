import Grid from "../components/grid"
import testimonials from "../content/testimonials"
import Testimonial from "../components/testimonial"

const Testimonials = () => {
  return (
    <div className='px-12 py-24 bg-neutral-50 flex flex-col items-center justify-center min-h-[45vh]'>
      <h1 className="text-2xl font-maharlika">Public Cheers For Me!</h1>
      <Grid dataset={testimonials} className="my-12" Element={Testimonial} />
    </div>
  )
}

export default Testimonials