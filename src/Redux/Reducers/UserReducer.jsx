const initialState = {
    users: [{id:1, name:"alami" ,lastName :"ali" ,email:"ali@gmail.com", password:"1234"},
        {id:2, name:"alali" ,lastName :"sara" ,email:"sara@gmail.com", password:"abc12"}
    ],

    
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                users: [...state.users, action.payload],
            };

        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload),
  };

          
            case "UPDATE_USER":
                return {
                  ...state,
                  users: state.users.map((user) =>
                    user.id === action.payload.id ? { ...user, ...action.payload } : user
                  ),
                };


        default:
            return state;
    }
};

export default UserReducer;
