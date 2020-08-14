Se requiere crear una aplicación utilizando que cumpla los siguientes requerimientos:

     

Diseño del frontend:

·        Lista de artistas: https://vtex-resources.s3.amazonaws.com/resources/examples/test-react/ArtistsList.PNG

·        Lista de álbumes: https://vtex-resources.s3.amazonaws.com/resources/examples/test-react/ArtistSongsList.PNG

·        Lista de canciones: https://vtex-resources.s3.amazonaws.com/resources/examples/test-react/SongsList.PNG

·        PlaySong: https://vtex-resources.s3.amazonaws.com/resources/examples/test-react/PlaySongs.PNG

                                       

Requerimientos Funcionales:

·        La aplicación debe tener react + typecript, hooks.

·        En la información de cada artista debe haber una lista de álbumes

·        En cada álbum debe estar la lista de canciones y la posibilidad de reproducir alguna de ellas.

·        Se deben mostrar 3 canciones aleatorias como sugerencia por cada artista.

·        Debe de tener un botón para reproducir canciones al azar.

·        Debe utilizar el API  https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api/ y generar una ruta para cada uno de los componentes:

- /api/artists

- /api/artists/:id/albums

- /api/albums/:id/songs


https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api/album/1/songs
 
https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api/artists

Debe generar la solución y la publique en un sitio, en el cual pueda ser accedido.


https://github.com/edwinarroyolopez/spotify_api_test.git