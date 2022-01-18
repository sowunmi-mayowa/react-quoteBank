import  {useState} from 'react'

const Home = () => {

    const [quotes, SetQuotes] = useState(null);
    const [ispending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    const handleQuote = () => {
            fetch('https://api.quotable.io/random')
            .then(res => {
                if(!res.ok){
                    throw Error("Couldn't fetch response from the resource")
                }
               return res.json();
            })
            .then(data => {
                SetQuotes(data);
                setIsPending(false);
                setError(false);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
    }

    return (
        
       <div className="mt-8 flex justify-center flex-col">
            { error && <div className="text-red-500 text-lg text-center"> {error} </div>}
            {ispending && <div className="text-center text-lg font-semibold text-orange-400">Click on the button to generate quote</div>}
            <div className="bg-gray-200 flex flex-col justify-center items-center p-4 rounded-md shadow-xl mx-8 md:mx-16">
        { quotes && (
            <p className="font-bold text-center text-2xl font-mono"> {quotes.author} </p>
            
        ) }
        { quotes && (
            <p className=" text-center text-lg"> {quotes.content} </p>
            
        ) }
        
        </div>
           <div className="flex justify-center">
           <button className="px-4 py-2 rounded-md shadow-md bg-blue-700 hover:bg-blue-400 text-white mt-4 text-center" onClick={handleQuote}>Generate Quote</button>
           </div>
       </div>
    )
}

export default Home
