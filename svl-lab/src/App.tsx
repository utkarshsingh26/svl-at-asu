import { Vortex } from '../src/components/ui/vortex';



function App() {

  return (
    <>

      <Vortex backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
      <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Welcome to SVL at ASU
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        We research data visualization, human-computer interaction, and advanced interfaces for data science,
        under the direction of <a href="https://chrisbryan.github.io/" target='_blank'>Professor Chris Bryan.</a>
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Find out more about us
          </button>
          </div>
      </Vortex>


    </>
  )
}

export default App
