import { useState } from "react";
import { searchUsers } from "./services/github";

function App() {
const [query, setQuery] = useState("");
const [results, setResults] = useState([]);

const handleSearch = async () => {
if (!query) return;
const users = await searchUsers(query);
setResults(users);
};

return (
<div style={{ padding: "20px" }}> <h1>GitHub User Search</h1>
<input
type="text"
value={query}
onChange={(e) => setQuery(e.target.value)}
placeholder="Enter GitHub username"
/> <button onClick={handleSearch}>Search</button> <ul>
{results.map(user => ( <li key={user.id}> <a href={user.html_url} target="_blank" rel="noreferrer">{user.login}</a> </li>
))} </ul> </div>
);
}

export default App;
