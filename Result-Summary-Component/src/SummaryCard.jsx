export function SummaryCard({data}){

// - Light red: hsl(0, 100%, 67%)
// - Orangey yellow: hsl(39, 100%, 56%)
// - Green teal: hsl(166, 100%, 37%)
// - Cobalt blue: hsl(234, 85%, 45%)
    const colours = {
        Reaction: "hsla(0, 100%, 67%, 0.06)",
        Memory: "hsla(39, 100%, 56%, 0.06)",
        Verbal: "hsla(166, 100%, 37%, 0.06)",
        Visual: "hsla(234, 85%, 45%, 0.06)",
    }

    return (
        <>
          <div className="container">
            <div className="result flex flex-col gap-5 items-center text-center py-8 px-12 border-b rounded-bl-3xl rounded-br-3xl">
                <h3>Your Result</h3>

                <div className="average rounded-full border p-4">
                        <p>76</p>
                        <p>of 100</p>
                </div>

                <p>Great</p>
                <p>You scored higher than 65% of the people who have taken these tests</p>
            </div>

            <div className="summary py-5 px-7">
                <h3>Summary</h3>
                {/* list content here */}
                <div className="summary-items flex flex-col gap-y-5">
                    {
                         data.map((dataObj) => {
                    return  <div 
                            className="flex justify-between py-3 rounded-md px-3" 
                            style={{backgroundColor: colours[dataObj.category]}} 
                            key={dataObj.category}>

                                <div className={`flex gap-1.5`} >
                                   <img className="" src={dataObj.icon} alt={`${dataObj.category} icon`} />
                                   <p> {dataObj.category}</p>
                                </div>
                                <p>{dataObj.score} / 100</p>
                            </div>
                            
                        })
                    }
                </div>
                <button className="border rounded-3xl p-2 w-[80vw] mt-5">Continue</button>
            </div>
          </div>
        </>
    )
}