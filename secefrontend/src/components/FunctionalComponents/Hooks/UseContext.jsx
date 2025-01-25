import Invigilator from "../ContextComponents/Invigilator";
import { createContext } from "react";

export const ThemeProvider = createContext();
const Student = () => {
    return(
    <div>
        <h2>
            This is a example of useContext Hook!! Which is the alternative for Props Drilling
        </h2>
        <h3>Students are writing their exams</h3>
        <Invigilator />
    </div>
    )
}
export default Student;