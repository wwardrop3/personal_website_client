import { Route } from "react-router-dom"
import { Homepage } from "./pages/Homepage"
import { Timeline } from "./pages/Timeline"


export const ApplicationViews = ({ scrollId, pages, pagesDict, hideFeedback, setHideFeedback }) => {

    return (

        <>

            <Route exact path={"/"}>
                <Homepage scrollId={scrollId} hideFeedback={hideFeedback} setHideFeedback={setHideFeedback} />
            </Route>

            <Route exact path={"/timeline"}>
                <Timeline />
            </Route>




        </>
    )
}