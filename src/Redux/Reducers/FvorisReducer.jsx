const initialeState={
    favoris:[{   id:1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        image: "images/book1.jpeg"
      },
      {  id:2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        image: "images/book2.jpeg"
      },
      ],
};

const FavorisReducer=(state=initialeState,action)=>{
    switch(action.type){
        case "ADD_FAVORIS":
            return{
                ...state,
                favoris:[...state.favoris,action.payload]
            };

        case "DELETE_FAVORIS":
                return{
                    ...state,
                    favoris:state.favoris.filter((favori)=>favori.id !== action.payload)
                };

        default:
            return state;


    }
}

export default FavorisReducer