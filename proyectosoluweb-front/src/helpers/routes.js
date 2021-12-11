const routes={
    home:'/',
    login:"/login",
    register:"/register",
    projects:"/projects",
    myProject:(projectId)=> projectId ?`{/myProject/:$projectId}`:'/myProject/projectId',
    account:"/admin/account/",
    users:"/admin/users/"
 
  
};
export default  routes;