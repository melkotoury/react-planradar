export default function (state=null, action) {
    switch (action.type){
        case "LANG_SELECTED":
            return action.payload;
        default:
            return state;
    }
}