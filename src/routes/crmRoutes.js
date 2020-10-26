const routes = (app) => {
  app.route('/contact')
    .get((req, res, next) => {
      //Middleware introduction here
      console.log(`Request from : ${req.originalUrl}`);
      console.log(`Request from : ${req.method}`);
      next();
    },(req, res, next) => {
      res.send('GET request success')      
    })
  
    .post((req,res) => res.send('POST request success'));

  app.route('/contact/:contactID')
    .put((req, res) => res.send('PUT request success'))    
    .delete((req, res) => res.send('PUT request success'));

  
} 

export default routes;