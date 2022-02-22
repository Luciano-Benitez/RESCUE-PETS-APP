const {Genres} = require('../src/db')

exports.setGenre =  () => {

    const genreList = ['Female', 'Male']
    try{
        genreList.forEach(async element => {
            await Genres.findOrCreate({
                where: {
                    genre : element
        
                }
            })
        });
    }catch(error){
        return error
    }
}