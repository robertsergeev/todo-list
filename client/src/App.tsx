import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "./hooks/redux.ts";
import {fetchAllTodos} from "./store/action-creators/fetchAllTodos.ts";
import TodoContainer from "./components/TodoContainer/TodoContainer.tsx";
import TodoSearchForm from "./components/TodoSearchForm/TodoSearchForm.tsx";
import CreateButton from "./components/CreateButton/CreateButton.tsx";
import Modal from "./components/UI/Modal/Modal.tsx";
import CreateTodoForm from "./components/CreateTodoForm/CreateTodoForm.tsx";
import {changeModalVisibility} from "./store/reducers/modalReducer.ts";

const App: FC = () => {
    const dispatch = useAppDispatch()
    const {displayed} = useAppSelector(state => state.modal)

    useEffect(() => {
        dispatch(fetchAllTodos({page: 1, limit: 10}))
    }, [])

    const setModal = (arg: boolean) => {
        dispatch(changeModalVisibility(arg))
    }

    return (         
        <div className='App'>
            <Modal visible={displayed} setVisible={setModal} >
                <CreateTodoForm/>
            </Modal>
            <TodoSearchForm />
            <TodoContainer/>
            <CreateButton/>
        </div>
    );
};

export default App;