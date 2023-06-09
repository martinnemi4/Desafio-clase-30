module.exports = {
    apps:[
        {
            name: "Servidor 1",
            script: './server.js',
            env:{
                PORT: 8080
            }
        },
        {
            name: "Servidor 2",
            script: './server.js',
            env:{
                PORT: 8081
            }
        },
        {
            name: "Servidor 3",
            script: './server.js',
            env:{
                PORT: 8082
            },
            exec_mode: 'cluster',
            instances:20,
        },
    ]
}