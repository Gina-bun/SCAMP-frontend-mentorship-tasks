export function SummaryCard({data}){

// - Light red: hsl(0, 100%, 67%)
// - Orangey yellow: hsl(39, 100%, 56%)
// - Green teal: hsl(166, 100%, 37%)
// - Cobalt blue: hsl(234, 85%, 45%)
    const bgColours = {
        Reaction: "hsla(0, 100%, 67%, 0.06)",
        Memory: "hsla(39, 100%, 56%, 0.06)",
        Verbal: "hsla(166, 100%, 37%, 0.06)",
        Visual: "hsla(234, 85%, 45%, 0.06)",
    }

    const textColours = {
        Reaction: "hsl(0, 100%, 67%)",
        Memory: "hsl(39, 100%, 56%)",
        Verbal: "hsl(166, 100%, 37%)",
        Visual: "hsl(234, 85%, 45%)",
    }

    return (
        <>
          <div className="container">
            <div 
            className="result text-white flex flex-col gap-3 items-center text-center
             py-3 px-12 rounded-bl-3xl rounded-br-3xl"
             style={{background: "linear-gradient( to bottom , hsl(252, 100%, 67%), hsl(241, 81%, 54%))"}}
             >
                <h3 className="font-bold text-gray-200">Your Result</h3>

                <div 
                className="average rounded-[100%] py-4.5 px-6.5"
                style={{background: "linear-gradient(to bottom, hsla(256, 72%, 46%, 1),hsla(241, 72%, 46%, 0))"}}
                >
                        <p className="text-6xl font-extrabold">76</p>
                        <p className="font-bold" style={{color: "hsl(241, 100%, 89%)"}}>of 100</p>
                </div>

                <p className="text-2xl font-bold mb-[-8px]" >Great</p>
                <p className="text-[18px]" style={{color: "hsl(221, 100%, 96%)"}}>You scored higher than 65% of the people who have taken these tests</p>
            </div>

            <div className="summary py-1 px-7">
                <h3 className=" text-gray-700 py-4 font-bold">Summary</h3>
                {/* list content here */}
                <div className="summary-items flex flex-col gap-y-5">
                    {
                         data.map((dataObj) => {
                    return  <div 
                            className="flex justify-between py-3 rounded-lg px-3" 
                            style={{backgroundColor: bgColours[dataObj.category]}} 
                            key={dataObj.category}>

                                <div className={`flex gap-1.5`} >
                                   <img className="" src={dataObj.icon} alt={`${dataObj.category} icon`} />
                                   <p style={{color: textColours[dataObj.category]}}> {dataObj.category}</p>
                                </div>
                                <p>{dataObj.score} <span className="text-gray-500">/ 100</span></p>
                            </div>
                            
                        })
                    }
                </div>
                <button 
                className="border rounded-3xl py-3 w-full mt-5 text-white"
                style={{backgroundColor: "hsl(224, 30%, 27%)"}}
                >
                    Continue</button>
            </div>
          </div>
        </>
    )
}