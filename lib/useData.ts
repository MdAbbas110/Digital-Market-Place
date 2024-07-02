// custom hook to fetch the data and pass it amongs the components

export async function useData() {
const data = await fetch('random-api.com')
const res = data.json()
return res
}
