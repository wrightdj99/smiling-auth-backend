export const formatDate = (timeToFormat) => {
    const date = new Date(timeToFormat);
    return date.toLocaleDateString();
}

export const formatTime = (timeToFormat) => {
    const date = new Date(timeToFormat);
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    return `${hours}:${minutes} ${ampm}`;
}