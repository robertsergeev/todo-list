import {FC, useEffect, useState} from "react";
import {useAppDispatch} from "./hooks/redux.ts";
import {fetchAllTodos} from "./store/action-creators/fetchAllTodos.ts";
import TodoContainer from "./components/TodoContainer/TodoContainer.tsx";
import TodoSearchForm from "./components/TodoSearchForm/TodoSearchForm.tsx";
import CreateButton from "./components/CreateButton/CreateButton.tsx";
import Modal from "./components/UI/Modal/Modal.tsx";
import CreateTodoForm from "./components/CreateTodoForm/CreateTodoForm.tsx";

const App: FC = () => {
    const dispatch = useAppDispatch()
    const [modal, setModal] = useState<boolean>(false)

    useEffect(() => {
        dispatch(fetchAllTodos({page: 1, limit: 10}))
    }, [])

    return (         
        <div>
            <Modal visible={modal} setVisible={setModal} >
                <CreateTodoForm />
            </Modal>
            <TodoSearchForm />
            <TodoContainer/>
            <CreateButton setModal={setModal}/>
        </div>
    );
};

export default App;