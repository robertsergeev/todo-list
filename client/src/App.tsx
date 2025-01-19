import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "./hooks/redux.ts";
import {fetchAllTodos} from "./store/action-creators/fetchAllTodos.ts";
import TodoContainer from "./components/TodoContainer/TodoContainer.tsx";
import TodoSearchForm from "./components/TodoSearchForm/TodoSearchForm.tsx";
import CreateButton from "./components/CreateButton/CreateButton.tsx";
import {changeModalVisibility, modalNames} from "./store/reducers/modalReducer.ts";
import Modal from "./components/UI/Modal/Modal.tsx";
import CreateTodoForm from "./components/CreateTodoForm/CreateTodoForm.tsx";
import EditTodoForm from "./components/EditTodoForm/EditTodoForm.tsx";
import LoginPage from "./components/Login/LoginPage.tsx";
import {setIsAuthorized} from "./store/reducers/userReducer.ts";

const App: FC = () => {
    const dispatch = useAppDispatch();
    const {modals} = useAppSelector(state => state.modal);
    const {isAuthorized} = useAppSelector(state => state.user)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) {
            dispatch(setIsAuthorized(true))
            dispatch(fetchAllTodos(token))
        }
    }, [])

    const setCreateModal = (arg: boolean) => {
        dispatch(changeModalVisibility({modalName: modalNames.createTodoModal, value: arg}))
    }

    const setEditModal = (arg: boolean) => {
        dispatch(changeModalVisibility({modalName: modalNames.editTodoModal, value: arg}))
    }

    return (
        <div className='App'>
            {
                isAuthorized
                ? <>
                        <h1>Todo List</h1>
                        <Modal visible={modals[modalNames.createTodoModal]} setVisible={setCreateModal}>
                            <CreateTodoForm/>
                        </Modal>

                        <Modal visible={modals[modalNames.editTodoModal]} setVisible={setEditModal}>
                            <EditTodoForm/>
                        </Modal>


                        <TodoSearchForm/>
                        <TodoContainer/>
                        <CreateButton/>
                    </>
                : <LoginPage />
            }

        </div>
    );
};

export default App;