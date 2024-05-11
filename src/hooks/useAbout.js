import { useEffect, useState } from "react"

const useAbout = () => {
  const [info,setInfo] = useState();
  
const dataInfo =  {
    "login": "Prady111308",
    "id": 163510093,
    "node_id": "U_kgDOCb73TQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/163510093?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Prady111308",
    "html_url": "https://github.com/Prady111308",
    "followers_url": "https://api.github.com/users/Prady111308/followers",
    "following_url": "https://api.github.com/users/Prady111308/following{/other_user}",
    "gists_url": "https://api.github.com/users/Prady111308/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Prady111308/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Prady111308/subscriptions",
    "organizations_url": "https://api.github.com/users/Prady111308/orgs",
    "repos_url": "https://api.github.com/users/Prady111308/repos",
    "events_url": "https://api.github.com/users/Prady111308/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Prady111308/received_events",
    "type": "User",
    "site_admin": false,
    "name": "PRAMOD KUMAR",
    "company": "COAL INDIA LIMITED",
    "blog": "",
    "location": "KOLKATA",
    "email": null,
    "hireable": true,
    "bio": "Full stack Developer",
    "twitter_username": null,
    "public_repos": 6,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-03-15T07:56:17Z",
    "updated_at": "2024-05-03T10:22:55Z"
  }
  
  useEffect(()=>{
    fetchAboutInfo();
  },[])

  const fetchAboutInfo = async() =>{
    //  const res = await fetch("https://api.github.com/users/Prady111308");
    //  const data = await res.json();
     setInfo(dataInfo);
  }

  return info;
}

export default useAbout