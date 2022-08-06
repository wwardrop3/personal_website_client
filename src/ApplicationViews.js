import { Route } from "react-router-dom"
import { Homepage } from "./pages/Homepage"
import { Timeline } from "./pages/Timeline"


export const ApplicationViews = ({ scrollId, pages, pagesDict, hideFeedback, setHideFeedback, projectName, setProjectName }) => {

    return (

        <>

            <Route exact path={"/"}>
                <Homepage scrollId={scrollId} hideFeedback={hideFeedback} setHideFeedback={setHideFeedback} projectName={projectName} setProjectName={setProjectName} />
            </Route>

            <Route exact path={"/timeline"}>
                <Timeline />
            </Route>




        </>
    )
}