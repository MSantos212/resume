async function fetchProfileData() {
  const url =
    "https://raw.githubusercontent.com/msantos212/resume/main/data/profile.json";
  const fetching = await fetch(url);
  return await fetching.json();
}
