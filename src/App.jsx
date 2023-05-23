import { useState } from 'react'
import './App.css'
import dbQuotes from "./db/quote.json"
import { getRandom } from './utils/random'
import QuoteBox from './components/QuoteBox'

const spaceImages = ["space1", "space2", "space3", "space4"]

function App() {
  const [quote, setQuote] = useState(getRandom(dbQuotes))
  const [spaceImage, setSpaceImage] = useState(getRandom(spaceImages))

  const handleChangeQuote = () => {
    setQuote(getRandom(dbQuotes))
    setSpaceImage(getRandom(spaceImages))
  }

  return <main className={`app ${spaceImage}`}>
    <section className='app__container'>
   <h1 className='size'>INFOGALAX</h1>

    <QuoteBox handleChangeQuote={handleChangeQuote} phrase={quote.phrase}/>
    
    <footer>
      <h3>Author: {quote.author}</h3>
    </footer>
    </section>

  </main>
  
}

export default App
