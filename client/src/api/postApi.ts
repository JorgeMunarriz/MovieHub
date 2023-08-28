

type GetTokenFunction = () => Promise<string>;

interface MoviesData {
    id: string,
  title:      string,
  score:       number,
  year:        number,
  genres:      Genres[],
  genresArray: string[]
  createdAt:  string,
  updatedAt:  string,
  users:      Users[],
  usersId:    string,
  image :     Image,  
  imageId:    string,
}
interface Users {
    id   :      string,
    name :      string,
    email:      string,
    movies :     MoviesData[],
    moviesArray: string[],
    createdAt:   string,
    updatedAt :  string
  }
  
interface Genres {
    id:        string,
    genre:     string,
    createdAt : string,
    updatedAt: string,
    movies:    MoviesData[],
    moviesId:  string
  }
  
interface Image {
    id:         string,
    public_id:  string,
    secure_url: string,
    movies:     MoviesData[]
  }


 export const postApi = async (url: string, data: any, getToken: GetTokenFunction ) => {
  const token = await getToken();

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log(response);
    } else {
      throw new Error("No response");
    }
  } catch (error) {
    console.log(error);
  }
};
