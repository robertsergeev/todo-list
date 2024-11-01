import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "./hooks/redux.ts";
import {fetchAllTodos} from "./store/action-creators/fetchAllTodos.ts";
import TodoContainer from "./components/TodoContainer/TodoContainer.tsx";
import TodoSearchForm from "./components/TodoSearchForm/TodoSearchForm.tsx";
import CreateButton from "./components/CreateButton/CreateButton.tsx";
import Modal from "./components/UI/Modal/Modal.tsx";
import CreateTodoForm from "./components/CreateTodoForm/CreateTodoForm.tsx";
import {changeModalVisibility, modalNames} from "./store/reducers/modalReducer.ts";

const App: FC = () => {
    const dispatch = useAppDispatch();
    const {modals} = useAppSelector(state => state.modal);

    useEffect(() => {
        dispatch(fetchAllTodos({page: 1, limit: 10}))
    }, [])

    const setCreateModal = (arg: boolean) => {
        dispatch(changeModalVisibility({modalName: modalNames.createTodoModal, value: arg}))
    }

    const setEditModal = (arg: boolean) => {
        dispatch(changeModalVisibility({modalName: modalNames.editTodoModal, value: arg}))
    }

    return (
        <div className='App'>
            <h1>Todo List</h1>
            <Modal visible={modals[modalNames.createTodoModal]} setVisible={setCreateModal}>
                <CreateTodoForm/>
            </Modal>

            <Modal visible={modals[modalNames.editTodoModal]} setVisible={setEditModal}>
                <h1>Edit todo</h1>
            </Modal>

            <TodoSearchForm/>
            <TodoContainer/>
            <CreateButton/>
        </div>
    );
};

export default App;