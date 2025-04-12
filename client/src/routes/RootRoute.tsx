import { Routes, Route } from "react-router";
import Root from "../layouts/Root";

const RootRoute = () => {
    return <Routes>
        <Route path="/" element={<Root />} />
    </Routes>

}

export default RootRoute