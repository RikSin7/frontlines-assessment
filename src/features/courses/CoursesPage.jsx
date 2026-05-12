
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCourses } from "./store/coursesSlice";

export default function CoursesPage() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCourses());
    }, [dispatch]);

    return <div>
        CoursesPage
    </div>
}
