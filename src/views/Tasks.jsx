import React from 'react'
import swal from 'sweetalert'
import FormGroup from '../components/FormGroup'
import TableRow from '../components/TableRow'

const Tasks = () => {
    //Array para visualizar en la tabla
    const [tasks, setTasks] = React.useState([])
    //Variables del formulario
    const [user, setUser] = React.useState("")
    const [description, setDescription] = React.useState("")
    //Modo crear=true, modo editar=false
    const [mode, setMode] = React.useState(true)
    const [index, setIndex] = React.useState(null)

    //Función para crear tarea
    const addTask = e => {
        e.preventDefault()
        if (!user || !description) {
            swal("Advertencia", "Los campos del formulario son obligatorios", "warning")
        } else {
            setTasks([
                ...tasks,
                {
                    id: tasks.length > 0 ? (tasks[tasks.length - 1].id) + 1 : 1,
                    user: user,
                    description: description
                }
            ])
            resetForm()
            swal("Felicitaciones", "Tarea creada con éxito", "success")
        }
    }
    //Función para actualizar tareas
    const updateTask = (e) => {
        e.preventDefault()
        if (index !== null) {
            tasks[index].user = user
            tasks[index].description = description
            setMode(true)
            resetForm()
            swal("Felicitaciones", "Tarea editada con éxito", "success")
        } else {
            swal("Advertencia", "Ha ocurrido un error", "warning")
        }

    }
    //Función para eliminar tareas
    const deleteTask = currentTask => {
        const copyTasks = tasks
        const newTasks = copyTasks.filter(tasks => tasks !== currentTask)
        setTasks(newTasks)
        swal("Felicitaciones", "Tarea eliminada con éxito", "success")
    }
    //Función para asignar los valores por defecto a su respectiva variable
    const setForm = (user, description, index) => {
        setMode(false)
        setUser(user)
        setDescription(description)
        setIndex(index)
    }
    //Función para limpiar el formulario
    const resetForm = () => {
        setUser("")
        setDescription("")
        setIndex(null)
    }
    //Función para cancelar la edición de una tarea
    const cancel = () => {
        setMode(true)
        resetForm()
    }

    return (
        <div className="container mt-2 mt-md-5">
            <div className="row">
                {/* Formulario de creación y edición de tareas a*/}
                <div className="col-12 col-md-4">
                    <h1>{mode ? "Crear de tarea" : "Editar tarea"}</h1>
                    <form onSubmit={mode ? e => addTask(e) : e => updateTask(e)}>
                        <FormGroup
                            id="inputUser"
                            value={user}
                            label="Usuario"
                            change={e => setUser(e.target.value)}
                        />
                        <FormGroup
                            id="inputDescription"
                            value={description}
                            label="Descripción"
                            change={e => setDescription(e.target.value)}
                        />
                        <button type="submit" className={`btn ${mode ? "btn-primary" : "btn-success"}`}>
                            {mode ? "Agregar" : "Editar"}
                        </button>
                        {
                            !mode &&
                            <button
                                type="button"
                                onClick={() => cancel()}
                                className="btn btn-danger ml-3">
                                Cancelar
                            </button>
                        }
                    </form>


                </div>
                {/* Tabla de tareas */}
                <div className="col-12 col-md-8 mt-5 mt-md-0">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Usuarios</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasks.length > 0 &&
                                tasks.map((task, i) => (
                                    < TableRow
                                        key={i}
                                        id={task.id}
                                        user={task.user}
                                        description={task.description}
                                        edit={() => setForm(task.user, task.description, i)}
                                        del={() => deleteTask(task)}
                                        mode={mode}
                                        modeEdit={index === i ? true : false}
                                    />
                                ))

                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Tasks;
