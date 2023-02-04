export const testapi=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a+b);
        },1500);
    });
};
export let tasks = [
  {
    tasknumber: 1,
    taskname: "Task 1",
    taskdec: "This is Task 1",
  },
  {
    tasknumber: 2,
    taskname: "Task 2",
    taskdec: "This is Task 2",
  },
  {
    tasknumber: 3,
    taskname: "Task 3",
    taskdec: "This is Task 3",
  },
  {
    tasknumber: 4,
    taskname: "Task 4",
    taskdec: "This is Task 4",
  }
];

export const getAllTasks =() =>{
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(tasks);
        },3000);
    });
}