import React,{Suspense} from "react"

const App = React.lazy(()=>import("../MainConcepts/ListAndKeys"))
export default () =>{
    return <div>
            <Suspense fallback={<div>Loading</div>}>
                <App />
            </Suspense>
        </div>
}


