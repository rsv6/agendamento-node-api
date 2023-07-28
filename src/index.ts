import("./App")
    .then(res =>  new res.App().start())
    .catch(err => console.error(err))