export function SummaryCard(){
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

            <div className="summary py-5 px-8">
                <h3>Summary</h3>
                {/* list content here */}
                <button className="border rounded-3xl p-2 w-[80vw]">Continue</button>
            </div>
          </div>
        </>
    )
}