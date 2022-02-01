interface IImage {
    id: number;
    image: string;
}

export const images = [ 
    {
        id: 1,
        image: "https://cdn.pixabay.com/photo/2022/01/19/00/36/sea-6948569_960_720.jpg"
    },
    {
        id: 2,
        image: "https://cdn.pixabay.com/photo/2021/03/21/15/01/couple-6112296_960_720.jpg"
    },
    {
        id: 3,
        image: "https://cdn.pixabay.com/photo/2021/12/18/06/01/sunset-6878021_960_720.jpg"
    }
] as IImage[];

export const IMAGE_ARRAY_LENGTH = images.length;