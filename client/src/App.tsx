import {FC, useEffect} from "react";
import {useAppDispatch} from "./hooks/redux.ts";
import {fetchAllTodos} from "./store/action-creators/fetchAllTodos.ts";
import TodoContainer from "./components/TodoContainer/TodoContainer.tsx";

const App: FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchAllTodos({page: 1, limit: 10}))
    }, [])

    return (
        <div>
            <TodoContainer />
        </div>
    );
};

export default App;