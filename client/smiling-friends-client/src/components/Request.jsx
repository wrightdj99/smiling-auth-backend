import { formatDate, formatTime } from "../helpers/dateTimeHelper";

function Request({content, username, createdAt, title}) {

    return (
        <div>
            <h1>{title}</h1>
            <h3>By: {username} - {formatDate(createdAt)} at {formatTime(createdAt)}</h3>
            <p>{content}</p>
        </div>
    );
}

export default Request;