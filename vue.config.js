module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/nbcom-test/' : '/',
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/assets/scss/variables.scss";`
            }
        }
    }
}