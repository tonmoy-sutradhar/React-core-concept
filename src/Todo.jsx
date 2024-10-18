// export default function Todo({ task, isDone }) {
//   // return <li>Task: {task} </li>;

// Conditon rendering option-1:
//   if (isDone === true) {
//     return <h3>Work Finished: {task}</h3>;
//   } else {
//     return <h3>Work On: {task}</h3>;
//   }
// }

// Conditon rendering option-2:
export default function Todo({ task, isDone }) {
  const done = {
    color: "green",
  };
  const Notdone = {
    color: "red",
  };
  if (isDone === true) {
    return (
      <h3>
        Work Finished: <span style={done}>{task}</span>
      </h3>
    );
  }
  return (
    <h3>
      Work On: <span style={Notdone}>{task}</span>
    </h3>
  );
}

// Conditon rendering option-3--->>

// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {isDone ? "Finished:" : "Work on:"} {task}
//     </li>
//   );
// }

// // Conditon rendering option-4--->>

// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {task}
//       {isDone && ": Done"}
//     </li>
//   );
// }

// Conditon rendering option-5--->> || isDone false hole kaj korbe

// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {task}
//       {isDone || ": On Going"}
//     </li>
//   );
// }

// Conditon rendering option-6:
// export default function Todo({ task, isDone }) {
//   let item;
//   if (isDone === true) {
//     return (item = <h3>Work Finished: {task}</h3>);
//   } else {
//     return (item = <h3>On going: {task}</h3>);
//   }
//   return item;
// }
