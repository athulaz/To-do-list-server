// importing json-server library
const jsonServer=require('json-server')

// create server instance
const MPserver=jsonServer.create()

// routing json resource to server
const router=jsonServer.router('db.json')

// implementing default middleware
const middleware=jsonServer.defaults()

// define port number for server
const PORT=3000||process.env.PORT



// configuring router,middleware,port into server
MPserver.use(middleware)
MPserver.use(router)

MPserver.listen(PORT,()=>{
    console.log(`Todolist Server running at:${PORT}`);
})