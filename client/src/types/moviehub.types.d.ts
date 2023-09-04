export interface UserTypes {
    id: string;
    name: string;
    email: string;
    movies: MoviesType[]; 
  }
  
  export interface MoviesType {
    id: string;
    title: string;
    score: number;
    year: number;
    country: string;
    image: FileList | null;
    imageId: string;
    imageUrl: string;
    genres: GenreType;
    genresArray: string[];
    createdAt: string;
    updatedAt: string;
    users?: UserTypes; // Opcionalmente, puedes incluir la relación inversa si la necesitas
    fetchMovies: () => void;
  }
  
  export interface GenreType {
    id: string;
    genre: string;
    createdAt: string;
    updatedAt: string;
    movies?: MoviesType[]; // Opcionalmente, puedes incluir la relación inversa si la necesitas
  }
  
  export interface ImageType {
    imageId: string;
    imageUrl: string;
  }

  export interface MovieFormData {
    id: string;
    title: string;
    score: number;
    year: number;
    country: string;
    image: FileList | null;
    imageId: string;
    imageUrl: string;
    genres: Array<string>;
    genresArray: string[];
    createdAt: string;
    updatedAt: string;
    users?: UserTypes;
  }

  
  export type GetTokenFunction = () => Promise<string>;
  