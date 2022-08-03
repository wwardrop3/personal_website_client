import { Route } from "react-router-dom"
import { Homepage } from "./pages/Homepage"
import { Timeline } from "./pages/Timeline"


export const ApplicationViews = () => {

    return (

        <>

            <Route exact path={"/"}>
                <Homepage />
            </Route>

            <Route exact path={"/timeline"}>
                <Timeline />
            </Route>




        </>
    )
}