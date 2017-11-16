export const selectLanguage = ( lang) => {
    console.log(lang.code);
    return {
        type: "LANG_SELECTED",
        payload: lang
    }
};

