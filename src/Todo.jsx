export default function Todo({ task, isDone }) {
  // return <li>Task: {task} </li>;
  if (isDone === true) {
    return <h3>Work Finished: {task}</h3>;
  } else {
    return <h3>Work On: {task}</h3>;
  }
}
