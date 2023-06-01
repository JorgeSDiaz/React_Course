import "./task.css"

export function Task({tittle = "Task", finished = false}) {
    return (<div className={finished ? "taksF" : "unTask"}>
    <h1>{tittle}</h1>
    <p>{finished ? "Task completed" : "Unfinished task"}</p>
    </div>);
}