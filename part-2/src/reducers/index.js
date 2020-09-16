import logoImg from "../redux.svg";
const initState = {

    logo: "Home Logo",
    // logoImg: logoImg,
    //or 
    logoImg,
    home: [
        {title: "Home Title", subTitle: "Home Sub title", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", footer: "CONTACT ME"}
    ],

    contents: [
        {content1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", contentSection: [
            {section: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
            {section: "section 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
        ]},

        {content1: "content 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
    ],

    contact: {contactme : "Follow me on twitter"}

}


const rootReducer = ( globalState = initState, action ) => {
    return globalState;
}

export default rootReducer;