export const formData = (currentTarget) => {
    const formData = new FormData(currentTarget);
    const formDataObj = {};

    formData.forEach((value, key) => {
        formDataObj[key] = value;
    })
    return formDataObj
}