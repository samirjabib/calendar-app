
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./ui";

export const CalendarApp = () => {
    return (
        <BrowserRouter>
                        {/* Allow us to synchronize the UI with the document HTML5*/}
            <Layout/>
        </BrowserRouter>
    );
};
