/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "../components/button"
import Navigation from "../components/navigation"
import Table from "../components/Table"
import Footer from "./Footer"
import Testimonials from "./Testimonials"
import icons from "../components/icon/icons.json"
import { useState } from "react"
import { customisationRequests } from "../api/googleForms"

const Design = () => {
  const [email, setEmail] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [formState, setFormState] = useState<'init' | 'loading' | 'error'>('init');

  return (
    <div className="size-full flex flex-col">
      <Navigation />
      <div className="px-12 py-24 mt-12 flex flex-col items-center w-[80vw] self-center">
        <h1 className="font-maharlika text-2xl mb-2">Design Your Own Customs</h1>
        <div className="font-maga text-base text-neutral-700 font-thin mb-4">Transforming slow fashion into hand painted wearable masterpieces.</div>

        <form className="flex flex-col items-center justify-center gap-4 mt-8 mb-4 w-full">
          {formState === 'error' && <div className="text-center text-sm text-red-500">Something went wrong! Please ensure all fields are filled correctly.</div>}
          <div className="w-full flex flex-row items-center justify-between gap-4">
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="text-sm flex-1 outline-none border-solid border-neutral-200 border-[1px] p-2" placeholder="Name" />
            <input type="number" minLength={10} maxLength={14} value={number} onChange={(e) => setNumber(e.target.value)} className="text-sm flex-1 outline-none border-solid border-neutral-200 border-[1px] p-2"  placeholder="Contact Number" />
          </div>
          <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className="text-sm min-h-24 w-full outline-none border-solid border-neutral-200 border-[1px] p-2"  placeholder="A brief description of the design you want" />
          <Button onClick={async () => {
            try {
              if (formState === 'loading') return;
              setFormState('loading')
              if (!email || !number || !desc) {
                console.log('here....')
                setFormState('error');
                return;
              } 
              await customisationRequests(email, number, desc);
              setFormState('init')
            } catch(e: any) {
              console.log(e)
              setFormState('error');
            } finally {
              setEmail('');
              setDesc('');
              setNumber('');
            }
          }} size="sm" label={formState === 'loading' ? 'Submitting' : "Get Started"} icon={formState === 'loading' ? icons.loading :icons.chevron_right} className="w-44"/>
        </form>
        
        <div className="font-medium w-full flex flex-col justify-start items-start my-8">
          {/* Customisation Process */}
          <div className="font-maharlika text-lg mb-4">Customisation Process</div>
          <ol className="flex flex-col gap-4 font-thin list-decimal px-8 mb-8">
            <li>First, choose your article and customisation plan.</li>
            <li>Book a free consultation, during which, we'll discuss your ideas, and specific requirements for the design.</li>
            <li>Digital mockups will be prepared. You can make changes/share inputs. Iterations will be provided basis the plan.</li>
            <li>The final commercials for the design will be conveyed to you after the digital mockups are approved.</li>
            <li>The turnaround time for customisation is 2-4 weeks based on the plan selected.</li>
          </ol>

          {/* Customisation Plan */}
          <div className="font-maharlika text-lg mb-4">Customisation Plans</div>
          <div className="flex flex-col w-full overflow-x-auto">
          <Table 
          data={[[
            <div className="flex flex-col items-start justify-start gap-2 font-thin">3-4 weeks</div>,
            <div className="flex flex-col items-start justify-start gap-2 font-thin">2-4 weeks</div>,
            <div className="flex flex-col items-start justify-start gap-2 font-thin">10-15 working days</div>,
          ], [
            <ul className="flex flex-col items-start justify-start gap-2 font-thin min-w-[200px]">
              <li>10-15 working hours</li>
              <li>Patterns, abstract designs and custom colour-ways</li>
              <li>Designs inspired by movies, TV shows, or music artists</li>
            </ul>,
            <ul className="flex flex-col items-start justify-start gap-2 font-thin min-w-[200px]">
            <li>25-30 working hours</li>
            <li>Patterns, abstract designs and custom colour-ways</li>
            <li>Designs inspired by movies, TV shows, or music artists</li>
            <li>Characters inspired by movies, games, books or personalized to match the wearer's tastes</li>
          </ul>,
            <ul className="flex flex-col items-start justify-start gap-2 font-thin min-w-[200px]">
            <li>working hours not capped</li>
            <li>Patterns, abstract designs and custom colour-ways</li>
            <li>Designs inspired by movies, TV shows, or music artists</li>
            <li>Characters inspired by movies, games, books or personalized to match the wearer's tastes</li>
            <li>Intricate paintings covering large sections of the sneaker for bold, standout artistry</li>
          </ul>,
          ], [
            <div className="flex flex-col items-start justify-start gap-2 font-thin">1 iteration for the digital mockup</div>,
            <div className="flex flex-col items-start justify-start gap-2 font-thin">2 iterations for the digital mockup</div>,
            <div className="flex flex-col items-start justify-start gap-2 font-thin">3-4 iterations for the digital mockup</div>,
          ], [
            <div className="flex flex-col items-start justify-start gap-2 font-thin">Custom Laces</div>,
            <ul className="flex flex-col items-start justify-start gap-2 font-thin">
              <li>Custom laces</li>
              <li>Charms</li>
              <li>Body modifications</li>
              <li>embroidery/fabric modification</li>
              <li>Studs, spikes, rhinestones, chains</li>
            </ul>,
            <ul className="flex flex-col items-start justify-start gap-2 font-thin">
              <li>Custom laces</li>
              <li>Charms</li>
              <li>Body modifications</li>
              <li>embroidery/fabric modification</li>
              <li>Studs, spikes, rhinestones, chains</li>
              <li>Custom Swoosh</li>
              <li>Deconstruction/Restitching</li>
              <li>LED Inserts</li>
              <li>Open to requests</li>
            </ul>,
          ], [
            <div className="flex flex-col items-start justify-start gap-2 font-medium">INR 8000</div>,
            <div className="flex flex-col items-start justify-start gap-2 font-medium">INR 12000</div>,
            <div className="flex flex-col items-start justify-start gap-2 font-medium">INR 18,000</div>,
          ]]}
          rowHeaders={['Offerings', 'Basic Plan', 'Enhanced Plan (Most Popular)', 'Exclusive Plan']} 
          colHeaders={['Curation', 'Details & Designs', 'Iterations', 'Accessories', 'Starts At' ]}
           />
          </div>

          {/* Post Customisation Care */}
          <div className="font-maharlika text-lg mb-4">Care</div>
          <ul className="flex flex-col gap-4 font-thin list-decimal px-8">
            <li>Store in a cool, dry place away from direct sunlight.</li>
            <li>Avoid machine washing the products as that can cause the colour to strip/fade.</li>
          </ul>
          <div className="px-4 flex flex-col gap-4 mt-4">
            Sneakers
            <ul className="px-4 flex flex-col gap-4 font-thin list-disc">
              <li>Clean using a dry brush first.</li>
              <li>Mix a small amount of mild, non-abrasive soap (such as dish soap or castile soap) with warm water. Dip a clean microfibre or soft cloth into the solution, wring out any excess water, and gently dab the stained areas.</li>
              <li>Optional: Can use shoe protection kits as well</li>
            </ul>
          </div>
          <div className="px-4 flex flex-col gap-4 mt-4">
            Apparel
            <ul className="px-4 flex flex-col gap-4 font-thin list-disc">
              <li>Hand-wash only.</li>
              <li>Avoid applying heat directly on the paint.</li>
            </ul>
          </div>
        </div>
      </div>
      <Testimonials label="Success Stories" />
      <Footer />
    </div>
  )
}

export default Design